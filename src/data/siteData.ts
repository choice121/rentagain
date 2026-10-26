import { ServiceItem, FaqItem, ChallengeItem, SuccessStory } from '../types';

export const SITE_CONTACT = {
  phone: '(866) 570-RENT',
  phoneClean: '+18665707368',
  email: 'info@rentagain.org',
  tagline: 'NEW CHAPTER NEW HOME.',
  brandName: 'RENT AGAIN',
  coverage: 'Nationwide - All 50 States',
  averageRating: '4.9/5 Average Rating',
  happyClients: '10,000+ Happy Clients',
  satisfaction: '100% Satisfaction Focused'
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'housing-packages',
    name: 'Housing Approval Program',
    shortDesc: 'Improve your rental profile and approval positioning through comprehensive credit-building and documentation.',
    price: '$950 - $1,400',
    turnaround: '7 - 45 Days',
    page: 'housing-packages',
    badge: 'Core Program'
  },
  {
    id: 'cosigner',
    name: 'Co-Applicant Program',
    shortDesc: 'Add a qualified 700+ credit score co-applicant with +$10,000 monthly income to your rental application.',
    price: '$800',
    turnaround: '48-72 Hours',
    page: 'cosigner',
    badge: 'High Impact'
  },
  {
    id: 'verified-income',
    name: 'Verified Income Program',
    shortDesc: 'Organize and strengthen landlord-ready income documentation powered by trusted ADP payroll software.',
    price: '$450 - $650',
    turnaround: '48-72 Hours',
    page: 'verified-income',
    badge: 'ADP Powered'
  },
  {
    id: 'instant-approval',
    name: 'Instant Approval Service',
    shortDesc: 'Our premium service to secure qualifying apartment or home leases without traditional approval barriers.',
    price: '$2,500 - $2,800',
    turnaround: '7 - 14 Days',
    page: 'instant-approval',
    badge: 'Premium White Glove'
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'story-1',
    image: 'https://static.wixstatic.com/media/01ef68_a6e50e592af0463788861788b5474e45~mv2.jpg',
    title: 'Luxury 2-Bedroom Approved',
    city: 'Atlanta, GA',
    outcome: 'Approved in 48 Hours with Previous Eviction',
    approvalType: 'Housing Approval Program'
  },
  {
    id: 'story-2',
    image: 'https://static.wixstatic.com/media/01ef68_61271eabbfdc4ae5a8c3390d169a0e96~mv2.jpg',
    title: 'Townhouse Lease Approved',
    city: 'Dallas, TX',
    outcome: 'Income Multiplier Requirement Met via ADP',
    approvalType: 'Verified Income Program'
  },
  {
    id: 'story-3',
    image: 'https://static.wixstatic.com/media/01ef68_8b79258f22b842299b2a17b6d8b5cc17~mv2.jpg',
    title: 'Gated Community Approved',
    city: 'Orlando, FL',
    outcome: 'Overcame 530 Credit Score with Co-Applicant',
    approvalType: 'Co-Applicant Program'
  },
  {
    id: 'story-4',
    image: 'https://static.wixstatic.com/media/01ef68_9905d97fc64543eb8d3d044128c9fb98~mv2.png',
    title: 'High-Rise Apartment Lease Signed',
    city: 'Charlotte, NC',
    outcome: 'Expedited Housing Package in 9 Days',
    approvalType: 'Expedited Housing'
  },
  {
    id: 'story-5',
    image: 'https://static.wixstatic.com/media/01ef68_b220d9666dd3486c84daa0854400eb34~mv2.jpg',
    title: 'Single Family Home Rental',
    city: 'Phoenix, AZ',
    outcome: 'Instant Approval Client with Rental Collections',
    approvalType: 'Instant Approval'
  },
  {
    id: 'story-6',
    image: 'https://static.wixstatic.com/media/01ef68_c34ff10b6cba46adb3829571530084f2~mv2.jpg',
    title: 'Modern Apartment Approved',
    city: 'Denver, CO',
    outcome: 'Prior Denial Overturned with Full Verification',
    approvalType: 'Verified Income'
  },
  {
    id: 'story-7',
    image: 'https://static.wixstatic.com/media/01ef68_b8a7b864cb3242cab17222e5add39d05~mv2.jpg',
    title: 'Downtown Loft Secured',
    city: 'Chicago, IL',
    outcome: 'Fast Move-In under Strict Relocation Deadline',
    approvalType: 'Co-Applicant Program'
  },
  {
    id: 'story-8',
    image: 'https://static.wixstatic.com/media/01ef68_e90dc2c4a6184468841baf7f5d05c0a4~mv2.jpg',
    title: 'Suburban 3-Bedroom Home',
    city: 'Columbus, OH',
    outcome: 'Broken Lease Record Resolved & Approved',
    approvalType: 'Housing Approval'
  },
  {
    id: 'story-9',
    image: 'https://static.wixstatic.com/media/01ef68_24b2b83815eb42d28ab4868b08130a26~mv2.jpg',
    title: 'Garden Style Community',
    city: 'Tampa, FL',
    outcome: 'Self-Employed 1099 Contractor Approved',
    approvalType: 'Verified Income'
  },
  {
    id: 'story-10',
    image: 'https://static.wixstatic.com/media/01ef68_8ca633c8d5c94b9fbfc5984e42273cac~mv2.jpg',
    title: 'Family Apartment Complex',
    city: 'Nashville, TN',
    outcome: 'Co-Applicant 740 Credit Added to Application',
    approvalType: 'Co-Applicant Program'
  },
  {
    id: 'story-11',
    image: 'https://static.wixstatic.com/media/01ef68_78c6dc8bac2b45d0bee5535e1a774ef7~mv2.jpg',
    title: 'New Construction Lease',
    city: 'Las Vegas, NV',
    outcome: 'Keys in Hand in 11 Days',
    approvalType: 'Instant Approval'
  },
  {
    id: 'story-12',
    image: 'https://static.wixstatic.com/media/01ef68_0287af425b844275bcc128822137540d~mv2.png',
    title: 'Verified Landlord Approval Letter',
    city: 'Indianapolis, IN',
    outcome: 'Official Lease Approval Notification',
    approvalType: 'Housing Approval Program'
  }
];

export const COMMON_CHALLENGES: ChallengeItem[] = [
  {
    id: 'credit-challenges',
    title: 'Credit Challenges',
    description: 'Low credit scores, lack of credit history, charge-offs, or past bankruptcies making standard scoring algorithms reject your application.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'rental-history',
    title: 'Limited Rental History',
    description: 'First-time renters, younger tenants, or individuals transitioning from home ownership who lack verifiable property management records.',
    iconName: 'FileQuestion'
  },
  {
    id: 'rental-collections',
    title: 'Rental Collections',
    description: 'Unpaid balance claims, utility collections, or damages from former landlords that show up on tenant screening databases.',
    iconName: 'FileX'
  },
  {
    id: 'self-employment',
    title: 'Self-Employment Income',
    description: '1099 contractors, gig workers, freelancers, and small business owners who struggle to produce traditional W-2 paystubs.',
    iconName: 'Briefcase'
  },
  {
    id: 'previous-denials',
    title: 'Previous Denials',
    description: 'Application denials from large corporate property management companies that trigger automatic rejections at sister properties.',
    iconName: 'UserX'
  },
  {
    id: 'relocation-situations',
    title: 'Relocation Situations',
    description: 'Moving to a new city or state for work before starting your new position, creating temporary income verification gaps.',
    iconName: 'MapPin'
  },
  {
    id: 'income-documentation',
    title: 'Income Documentation',
    description: 'Cash earnings, tip income, bonuses, or fluctuating monthly commissions that fall just short of strict 3x-rent thresholds.',
    iconName: 'FileCheck'
  },
  {
    id: 'time-sensitive-moves',
    title: 'Time-Sensitive Moves',
    description: 'Current lease ending rapidly or sudden life changes where you cannot afford 4-6 weeks of uncertain waiting and repeated denials.',
    iconName: 'Clock'
  }
];

export const GENERAL_FAQS: FaqItem[] = [
  {
    question: 'How quickly can I get started?',
    answer: 'You can get started immediately by scheduling a free consultation or selecting your program online. Once you submit your information, our onboarding team reviews your case within 24 to 48 hours to assemble your personalized strategy.'
  },
  {
    question: 'Do you guarantee approval?',
    answer: 'While no ethical service can legally promise 100% unilateral approval from every independent landlord, our proprietary programs have achieved an industry-leading approval rate across thousands of clients by pairing real qualified co-applicants, verified ADP income, and certified rental trade-lines to fulfill landlord screening criteria.'
  },
  {
    question: 'Do you work nationwide?',
    answer: 'Yes! RentAgain operates across all 50 U.S. states. Whether you are leasing in major metropolitan centers or smaller communities, our documentation and co-applicant programs comply with nationwide property management criteria.'
  },
  {
    question: 'What if I have already been denied?',
    answer: 'Previous denials are our specialty! Over 80% of our clients come to us after being rejected for credit issues, rental collections, or lack of proof of income. We pinpoint the exact reason behind the denial and deploy the specific solution needed to overcome it.'
  },
  {
    question: 'How do I know which service I need?',
    answer: 'If you have an urgent timeline and need an end-to-end solution, our Instant Approval Service or Expedited Housing Package is best. If your main hurdle is income documentation, our ADP-Powered Verified Income is ideal. If your score is low, our 700+ Co-Applicant Program provides an immediate boost. You can also book a free 15-minute consultation for a custom recommendation.'
  },
  {
    question: 'Are payments secure and upfront?',
    answer: 'All pricing is 100% transparent with zero hidden fees. Payments are processed securely with encrypted checkout, and you receive an itemized receipt and dedicated client onboarding specialist immediately.'
  }
];
