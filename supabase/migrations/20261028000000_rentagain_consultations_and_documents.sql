begin;

create table if not exists public.consultation_requests (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references auth.users (id) on delete set null,
  full_name text not null check (char_length(full_name) between 1 and 120),
  email text not null check (char_length(email) between 3 and 254),
  phone text not null check (char_length(phone) between 7 and 40),
  service text not null check (service in (
    'housing',
    'co_applicant',
    'income_verification',
    'instant_approval',
    'auto_approval',
    'not_sure'
  )),
  property_type text not null check (property_type in (
    'apartment',
    'house',
    'townhouse',
    'other'
  )),
  target_city text not null check (char_length(target_city) between 1 and 100),
  target_state text not null check (target_state ~ '^[A-Z]{2}$'),
  move_timeline text not null check (move_timeline in (
    'asap',
    'within_30_days',
    'within_60_days',
    'more_than_60_days',
    'not_sure'
  )),
  consent_at timestamptz not null default now(),
  status text not null default 'new' check (status in (
    'new',
    'contacted',
    'closed'
  )),
  created_at timestamptz not null default now()
);

create index if not exists consultation_requests_owner_created_idx
  on public.consultation_requests (owner_id, created_at desc)
  where owner_id is not null;

alter table public.consultation_requests enable row level security;
revoke all on table public.consultation_requests from public, anon, authenticated;
grant select on table public.consultation_requests to authenticated;
grant all on table public.consultation_requests to service_role;

create policy "Clients can view their own consultation requests"
  on public.consultation_requests
  for select
  to authenticated
  using ((select auth.uid()) = owner_id);

create table if not exists public.rentagain_staff_members (
  user_id uuid primary key references auth.users (id) on delete cascade,
  role text not null default 'staff' check (role in ('staff', 'admin')),
  created_at timestamptz not null default now()
);

alter table public.rentagain_staff_members enable row level security;
revoke all on table public.rentagain_staff_members from public, anon, authenticated;
grant select on table public.rentagain_staff_members to authenticated;
grant all on table public.rentagain_staff_members to service_role;

create policy "Staff can view only their own membership"
  on public.rentagain_staff_members
  for select
  to authenticated
  using ((select auth.uid()) = user_id);

create table if not exists public.generated_documents (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users (id) on delete cascade,
  consultation_request_id uuid not null references public.consultation_requests (id) on delete cascade,
  document_type text not null check (document_type = 'client_intake_summary'),
  storage_path text not null unique,
  created_at timestamptz not null default now(),
  constraint generated_documents_request_owner_unique unique (owner_id, consultation_request_id, document_type)
);

alter table public.generated_documents enable row level security;
revoke all on table public.generated_documents from public, anon, authenticated;
grant select on table public.generated_documents to authenticated;
grant all on table public.generated_documents to service_role;

create policy "Clients can view their own generated documents"
  on public.generated_documents
  for select
  to authenticated
  using ((select auth.uid()) = owner_id);

create table if not exists public.intake_rate_limits (
  fingerprint text primary key check (char_length(fingerprint) = 64),
  window_started_at timestamptz not null default now(),
  request_count integer not null default 1 check (request_count > 0)
);

alter table public.intake_rate_limits enable row level security;
revoke all on table public.intake_rate_limits from public, anon, authenticated;
grant all on table public.intake_rate_limits to service_role;

create or replace function public.consume_intake_rate_limit(p_fingerprint text)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  current_count integer;
begin
  if p_fingerprint !~ '^[0-9a-f]{64}$' then
    raise exception 'invalid rate-limit fingerprint';
  end if;

  delete from public.intake_rate_limits
  where window_started_at < now() - interval '1 day';

  insert into public.intake_rate_limits as limits (fingerprint, window_started_at, request_count)
  values (p_fingerprint, now(), 1)
  on conflict (fingerprint) do update
  set
    window_started_at = case
      when limits.window_started_at <= now() - interval '1 hour' then now()
      else limits.window_started_at
    end,
    request_count = case
      when limits.window_started_at <= now() - interval '1 hour' then 1
      else limits.request_count + 1
    end
  returning request_count into current_count;

  return current_count <= 8;
end;
$$;

revoke all on function public.consume_intake_rate_limit(text) from public, anon, authenticated;
grant execute on function public.consume_intake_rate_limit(text) to service_role;

create table if not exists public.document_generation_limits (
  owner_id uuid primary key references auth.users (id) on delete cascade,
  window_started_at timestamptz not null default now(),
  generation_count integer not null default 1 check (generation_count > 0)
);

alter table public.document_generation_limits enable row level security;
revoke all on table public.document_generation_limits from public, anon, authenticated;
grant all on table public.document_generation_limits to service_role;

create or replace function public.consume_document_generation_limit(p_owner_id uuid)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  current_count integer;
begin
  if p_owner_id is null then
    raise exception 'owner is required';
  end if;

  insert into public.document_generation_limits as limits (owner_id, window_started_at, generation_count)
  values (p_owner_id, now(), 1)
  on conflict (owner_id) do update
  set
    window_started_at = case
      when limits.window_started_at <= now() - interval '1 day' then now()
      else limits.window_started_at
    end,
    generation_count = case
      when limits.window_started_at <= now() - interval '1 day' then 1
      else limits.generation_count + 1
    end
  returning generation_count into current_count;

  return current_count <= 20;
end;
$$;

revoke all on function public.consume_document_generation_limit(uuid) from public, anon, authenticated;
grant execute on function public.consume_document_generation_limit(uuid) to service_role;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('client-documents', 'client-documents', false, 5242880, array['application/pdf'])
on conflict (id) do update
set public = false,
    file_size_limit = 5242880,
    allowed_mime_types = array['application/pdf'];

create policy "Clients can read documents in their own folder"
  on storage.objects
  for select
  to authenticated
  using (
    bucket_id = 'client-documents'
    and (storage.foldername(name))[1] = (select auth.uid()::text)
  );

commit;
