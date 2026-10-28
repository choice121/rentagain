begin;

alter table public.consultation_requests
  add column if not exists status_updated_at timestamptz not null default now();

alter table public.consultation_requests
  drop constraint if exists consultation_requests_status_check;

alter table public.consultation_requests
  add constraint consultation_requests_status_check
  check (status in (
    'new',
    'contacted',
    'reviewing',
    'needs_information',
    'plan_ready',
    'application_prepared',
    'submitted_to_provider',
    'waiting_on_provider',
    'provider_approved',
    'provider_not_approved',
    'closed'
  ));

create index if not exists consultation_requests_status_created_idx
  on public.consultation_requests (status, created_at desc);

commit;
