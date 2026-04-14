export interface CaseStudy {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  year: string;
  image: string;
  tags: string[];
  tier: 'core' | 'selected';
  url?: string;
  overview: string;
  problem: string;
  built: string[];
  result: string;
  metrics?: { label: string; value: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'emoducar',
    name: 'EmodoCar',
    tagline: 'Car rental marketplace connecting clients and providers across Rwanda.',
    category: 'Marketplace & Mobility',
    year: '2023',
    tier: 'core',
    image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/Emodocar%20Feeatured%20Graphivc.png',
    tags: ['Marketplace', 'Car Rental', 'Mobile App', 'Transport'],
    url: 'https://emodocar.com',
    overview:
      'EmodoCar is a full car rental marketplace system built to connect individual clients with car rental providers across Rwanda. The platform handles discovery, booking, fleet management, and communication in one unified system.',
    problem:
      'Car rental businesses in Rwanda operated manually — phone calls, WhatsApp messages, handwritten logs. Clients had no way to compare providers, check availability, or book online. Providers had no central system to manage their fleets, bookings, or customer records.',
    built: [
      'Client-facing marketplace with search, filter, and real-time availability',
      'Provider dashboard for fleet management, booking approvals, and analytics',
      'Automated booking flow with confirmation notifications',
      'Mobile-first design for both clients and operators',
      'Admin panel for platform oversight and dispute resolution',
    ],
    result:
      'EmodoCar transformed a fragmented, phone-based rental industry into an organized digital marketplace. Providers reported significant reductions in no-shows and double-bookings, while clients gained full transparency into pricing and availability.',
    metrics: [
      { label: 'Providers onboarded', value: '20+' },
      { label: 'Booking conversion improvement', value: '3x' },
      { label: 'Time to book (from 30+ min)', value: '< 5 min' },
    ],
  },
  {
    slug: 'kivuride',
    name: 'KivuRide',
    tagline: 'Structured ride-hailing system built to optimize fleet operations and driver management.',
    category: 'Marketplace & Mobility',
    year: '2023',
    tier: 'core',
    image: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Ride-Hailing', 'Fleet Management', 'Operations', 'Mobile'],
    overview:
      'KivuRide is a structured ride-hailing platform designed for the East African market, with a focus on fleet-level operations rather than individual driver gig work. The system provides a centralized control layer for operators managing multiple vehicles and drivers.',
    problem:
      'Ride-hailing in the region was dominated by unstructured, driver-led operations with no visibility for fleet owners. Companies with multiple vehicles had no way to track driver performance, manage dispatch, monitor earnings, or maintain service quality at scale.',
    built: [
      'Rider app with real-time driver tracking and fare estimation',
      'Driver app with job dispatch, navigation, and earnings tracking',
      'Fleet operator dashboard with live vehicle monitoring',
      'Driver performance scoring and management tools',
      'Automated payout and commission calculation system',
    ],
    result:
      'KivuRide gave fleet operators genuine control over their operations for the first time. Owner visibility increased dramatically, driver accountability improved, and the platform created a scalable foundation for expanding across multiple cities.',
    metrics: [
      { label: 'Fleet visibility improvement', value: '100%' },
      { label: 'Driver accountability score', value: 'Real-time' },
      { label: 'Cities supported', value: 'Multi-city' },
    ],
  },
  {
    slug: 'property-hospitality',
    name: 'Property & Hospitality Systems',
    tagline: 'Transforming property and hospitality businesses into organized, trackable, conversion-driven systems.',
    category: 'Property & Hospitality',
    year: '2023–2024',
    tier: 'core',
    image: 'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Real Estate', 'Hospitality', 'Booking Systems', 'Property Management'],
    overview:
      'A grouped case study covering five property and hospitality businesses that ThickTek built digital systems for: Vis Focus, Kaliba Beach Hotel, Crest Point Estate, FairyScape Apartments, and Kigali Ikaze Suites. Each project addressed the same core problem from a different angle.',
    problem:
      'Property and hospitality businesses in East Africa were losing clients daily through broken inquiry processes, no online booking, no visibility into availability, and websites that existed only as digital brochures with no conversion mechanism.',
    built: [
      'Booking and reservation systems with availability calendars',
      'Property listing pages with gallery, pricing, and inquiry flows',
      'Admin dashboards for managing reservations, inquiries, and occupancy',
      'Lead capture and follow-up notification systems',
      'Mobile-optimized designs built for local network conditions',
    ],
    result:
      'Across all five properties, online inquiries replaced phone-only leads, booking management became structured and trackable, and each business gained a professional digital presence that matched their physical quality.',
    metrics: [
      { label: 'Properties transformed', value: '5' },
      { label: 'Inquiry channels replaced', value: 'Phone → Digital' },
      { label: 'Average booking process time', value: 'Fully automated' },
    ],
  },
  {
    slug: 'hire-me-africa',
    name: 'Hire Me Africa',
    tagline: 'Smart talent discovery platform connecting vetted African professionals with employers.',
    category: 'Platforms & Digital Infrastructure',
    year: '2022',
    tier: 'core',
    image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/Hire%20Me%20Afrika.PNG',
    tags: ['Talent Platform', 'Employment', 'Africa', 'Matching System'],
    url: 'https://hireme.africa',
    overview:
      'Hire Me Africa is a structured talent discovery and matching platform that connects vetted African professionals with employers across the continent and globally. The platform uses filtering, ranking, and structured profiles to surface the right candidates efficiently.',
    problem:
      'African talent was invisible to employers outside their immediate networks. Employers had no structured way to find, evaluate, or hire African professionals. Job boards existed, but they lacked the depth of professional verification and structured filtering that serious hiring requires.',
    built: [
      'Candidate profile system with structured verification and skill tagging',
      'Advanced employer search with multi-filter candidate discovery',
      'Application and shortlisting workflow for employers',
      'Admin-controlled vetting and profile approval process',
      'Candidate ranking and scoring based on profile completeness and relevance',
    ],
    result:
      'Hire Me Africa created a credible, structured pipeline between African talent and employers. The platform became a trusted space for employers who wanted quality over quantity, and for professionals who wanted visibility beyond their local market.',
    metrics: [
      { label: 'Professionals vetted', value: 'Hundreds' },
      { label: 'Markets served', value: 'Pan-African' },
      { label: 'Employer types', value: 'Local + Global' },
    ],
  },
  {
    slug: 'dajah-tunes',
    name: 'Dajah Tunes',
    tagline: 'Digital infrastructure for music distribution, rights management, and revenue flows across African markets.',
    category: 'Platforms & Digital Infrastructure',
    year: '2024',
    tier: 'core',
    image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Music Tech', 'Distribution', 'Rights Management', 'Revenue'],
    overview:
      'Dajah Tunes is a digital infrastructure platform built to manage music distribution, rights tracking, and revenue flows for African artists and labels operating across multiple markets. The platform addresses the systemic disorganization of music monetization in the region.',
    problem:
      'African artists and labels had no reliable system to track where their music was distributed, who was generating revenue from it, and how to collect royalties efficiently. Distribution was fragmented, rights were untracked, and revenue was consistently lost or delayed.',
    built: [
      'Music distribution management dashboard for artists and labels',
      'Rights registry with ownership tracking and licensing records',
      'Revenue tracking across multiple platforms and territories',
      'Artist and label account management with role-based access',
      'Reporting and payout documentation system',
    ],
    result:
      'Dajah Tunes gave African music businesses the infrastructure to operate at the standard of global distribution — with full visibility into distribution, rights, and revenue in one place.',
    metrics: [
      { label: 'Revenue streams tracked', value: 'Multi-platform' },
      { label: 'Rights visibility', value: 'Full ownership log' },
      { label: 'Market coverage', value: 'Pan-African + Global' },
    ],
  },
];

export interface SelectedWork {
  name: string;
  description: string;
  category: string;
  year: string;
  image: string;
  url?: string;
  tags: string[];
}

export const selectedWork: SelectedWork[] = [
  {
    name: 'Umurimo',
    description: 'Job listing platform with admin-controlled content system connecting employers with Rwandan talent.',
    category: 'Platforms & Digital Infrastructure',
    year: '2024',
    image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/Umurimo.PNG',
    url: 'https://umurimo.rw',
    tags: ['Jobs', 'Recruitment', 'Rwanda'],
  },
  {
    name: 'Grit Africa Analytics',
    description: 'Consultancy platform focused on research, data, and strategic insights across Africa.',
    category: 'Consultancy & Support',
    year: '2024',
    image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/Grit%20Africa%20Analytics.PNG',
    url: 'https://gritafricaanalytics.com',
    tags: ['Research', 'Analytics', 'Strategy'],
  },
  {
    name: 'Wito Support',
    description: 'Structured support system for handling client communication and service delivery at scale.',
    category: 'Consultancy & Support',
    year: '2024',
    image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/Wito%20Support.PNG',
    url: 'https://witosupport.com',
    tags: ['Customer Support', 'Outsourcing', 'Global'],
  },
];

export const categoryGroups = [
  {
    label: 'Marketplace & Mobility',
    slugs: ['emoducar', 'kivuride'],
  },
  {
    label: 'Property & Hospitality',
    slugs: ['property-hospitality'],
  },
  {
    label: 'Platforms & Digital Infrastructure',
    slugs: ['hire-me-africa', 'dajah-tunes'],
  },
];
