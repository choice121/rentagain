export type PageId =
  | 'home'
  | 'housing-packages'
  | 'cosigner'
  | 'verified-income'
  | 'instant-approval'
  | 'book-online'
  | 'book-consultation';

export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  price: string;
  turnaround: string;
  page: PageId;
  badge?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SuccessStory {
  id: string;
  image: string;
  title: string;
  city?: string;
  outcome: string;
  approvalType: string;
}

export interface BookingSlot {
  date: string;
  times: string[];
}
