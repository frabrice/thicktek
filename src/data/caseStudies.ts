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
    slug: 'grit-africa-analytics',
    name: 'Grit Africa Analytics',
    tagline: 'Consultancy platform built to present research, insights, and professional services across Africa.',
    category: 'Consultancy & Analytics',
    year: '2024',
    tier: 'core',
    image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/Grit%20Africa%20Analytics.PNG',
    tags: ['Research', 'Analytics', 'Consultancy', 'Strategy'],
    url: 'https://gritafricaanalytics.com/',
    overview:
      'Grit Africa Analytics is a consultancy platform designed to present data-driven research, strategic insights, and professional services to clients across the African continent and beyond. The platform positions the firm as a credible authority in regional analytics.',
    problem:
      'Consultancy firms in Africa often struggle to present their expertise credibly online. Without a structured digital presence, potential clients have no way to evaluate service quality, understand research methodology, or engage with published insights before reaching out.',
    built: [
      'Professional service presentation pages with research methodology sections',
      'Insights and publications hub for distributing research content',
      'Client inquiry and engagement flow',
      'Team and credentials showcase',
      'SEO-optimized structure for discoverability across African markets',
    ],
    result:
      'Grit Africa Analytics gained a professional digital presence that accurately reflects its expertise. The platform became a credible entry point for clients seeking research-backed consultancy across the continent.',
    metrics: [
      { label: 'Markets served', value: 'Pan-African' },
      { label: 'Service areas', value: 'Multi-domain' },
      { label: 'Research visibility', value: 'Fully indexed' },
    ],
  },
  {
    slug: 'kivuride',
    name: 'KivuRide',
    tagline: 'Structured ride-hailing system built to optimize fleet operations and driver management.',
    category: 'Marketplace & Mobility',
    year: '2023',
    tier: 'core',
    image: 'https://res.cloudinary.com/dz4nl90xs/image/upload/v1776175515/Kivu_Ride_-_Thick_Tek_opr9ab.png',
    url: 'https://www.kivuride.com/',
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
    image: 'https://res.cloudinary.com/dz4nl90xs/image/upload/v1775745898/IMG_9679_zaukot.jpg',
    tags: ['Real Estate', 'Hospitality', 'Booking Systems', 'Property Management'],
    overview:
      'A grouped case study covering property and hospitality businesses that ThickTek built digital systems for: Vis Focus, Kaliba Beach Hotel, Crest Point Estate, FairyScape Apartments, Joy Homes, Havre Apartment, Ingoga Place, and Kigali Ikaze Suites. Each project addressed the same core problem from a different angle.',
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
      'Across all properties, online inquiries replaced phone-only leads, booking management became structured and trackable, and each business gained a professional digital presence that matched their physical quality.',
    metrics: [
      { label: 'Properties transformed', value: '8+' },
      { label: 'Inquiry channels replaced', value: 'Phone → Digital' },
      { label: 'Booking process', value: 'Fully automated' },
    ],
  },
  {
    slug: 'hire-me-africa',
    name: 'Hire Me Africa',
    tagline: 'Smart talent discovery platform connecting vetted African professionals with employers.',
    category: 'Platforms & Digital Infrastructure',
    year: '2022',
    tier: 'core',
    image: 'https://res.cloudinary.com/dz4nl90xs/image/upload/v1776175802/HMA_diqba2.jpg',
    tags: ['Talent Platform', 'Employment', 'Africa', 'Matching System'],
    url: 'https://hiremeafrika.com/',
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
    image: 'https://res.cloudinary.com/dz4nl90xs/image/upload/v1776175512/Dajah_Tunes_n4qlls.png',
    url: 'https://dajahtunes.com/',
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
  {
    slug: 'insightium',
    name: 'Insightium',
    tagline: 'A media and insights platform created for publishing structured content and engaging readers.',
    category: 'Media & Publishing',
    year: '2024',
    tier: 'core',
    image: 'https://res.cloudinary.com/dz4nl90xs/image/upload/v1776179137/The_Insightium_digital_platform_promotion_enbvw0.png',
    url: 'https://www.theinsightium.com/',
    tags: ['Media', 'Publishing', 'Content Platform', 'Insights'],
    overview:
      'Insightium is a structured media and insights platform designed to support the publishing of long-form content, analysis pieces, and reader engagement at scale. Built for publishers who need more than a basic blog — they need a full editorial infrastructure.',
    problem:
      'Media and insights brands often launch on generic CMS platforms that limit their ability to structure content, segment audiences, and build real reader engagement. The result is high-quality editorial work buried in poor digital experiences.',
    built: [
      'Editorial publishing system with category and tag management',
      'Long-form article layout optimized for readability',
      'Reader engagement and comment infrastructure',
      'Author profile and contributor management',
      'SEO architecture built for content discoverability',
    ],
    result:
      'Insightium gave the publisher a dedicated digital infrastructure that matched the quality of their content — structured, searchable, and built to grow a loyal readership.',
    metrics: [
      { label: 'Content types supported', value: 'Multi-format' },
      { label: 'SEO structure', value: 'Fully optimized' },
      { label: 'Reader experience', value: 'Editorial-grade' },
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
    url: 'https://www.umurimo.com/',
    tags: ['Jobs', 'Recruitment', 'Rwanda'],
  },
  {
    name: 'Wito Support',
    description: 'Structured support system for handling client communication and service delivery at scale.',
    category: 'Consultancy & Support',
    year: '2024',
    image: 'https://raw.githubusercontent.com/frabrice/work-done/refs/heads/main/Wito%20Support.PNG',
    url: 'https://www.witosupport.com/',
    tags: ['Customer Support', 'Outsourcing', 'Global'],
  },
];

export interface MiniProject {
  name: string;
  description: string;
  category: string;
  url?: string;
}

export const miniProjects: MiniProject[] = [
  {
    name: "Joy Home's",
    description: 'An apartment website created to present units clearly and support client inquiries.',
    category: 'Property & Hospitality',
    url: 'https://joyhomesapartments.com',
  },
  {
    name: 'Havre Apartment',
    description: 'A property platform designed to showcase an apartment building and improve visibility.',
    category: 'Property & Hospitality',
    url: 'https://www.havreapartments.com/',
  },
  {
    name: 'FairyScape Apartments',
    description: 'A modern apartment website built to simplify bookings and strengthen online presence.',
    category: 'Property & Hospitality',
    url: 'https://www.fairyscapeapartments.com/',
  },
  {
    name: 'Ingoga Place',
    description: 'An apartment platform designed to highlight accommodations and support direct engagement.',
    category: 'Property & Hospitality',
    url: 'https://www.ingogaplace.com/',
  },
  {
    name: 'Vis Focus',
    description: 'A structured property website created to improve listing presentation and client communication.',
    category: 'Property & Hospitality',
    url: 'https://visfocuskigali.com/',
  },
  {
    name: 'Kaliba Beach Hotel',
    description: 'A hospitality website built to showcase rooms and improve booking interactions.',
    category: 'Property & Hospitality',
    url: 'https://luxury-kaliba-beach-rn0w.bolt.host/',
  },
  {
    name: 'Crest Point Estate',
    description: 'A real estate website designed to present property offerings and capture buyer interest.',
    category: 'Property & Hospitality',
    url: 'https://vintagekigali.com/',
  },
  {
    name: 'Kigali Ikaze Suites',
    description: 'A hospitality platform developed to enhance accommodation visibility and guest inquiries.',
    category: 'Property & Hospitality',
    url: 'https://kigaliikazesuites.com/',
  },
  {
    name: 'Abana Wellness',
    description: 'An NGO website created to communicate mission, programs, and community impact clearly.',
    category: 'NGO & Social Impact',
    url: 'https://abanawellness.org/',
  },
  {
    name: 'PeacEdu',
    description: 'An NGO platform designed to present educational initiatives and strengthen public engagement.',
    category: 'NGO & Social Impact',
    url: 'https://www.peacedu.org/',
  },
  {
    name: 'Hello Fraser Valley',
    description: 'A social enterprise website built to showcase local businesses, arts, events, and talent.',
    category: 'Social Enterprise',
    url: 'https://hellofraservalley.com/',
  },
  {
    name: 'Widen Nature',
    description: 'A social enterprise platform created to present mission-driven work and community-focused initiatives.',
    category: 'Social Enterprise',
    url: 'https://widennature.com/',
  },
  {
    name: 'Umurimo',
    description: 'A job listing platform developed to manage opportunities and simplify access for users.',
    category: 'Platforms & Digital Infrastructure',
    url: 'https://www.umurimo.com/',
  },
  {
    name: 'Grit Africa Analytics',
    description: 'A consultancy website designed to present research, insights, and professional services clearly.',
    category: 'Consultancy & Analytics',
    url: 'https://gritafricaanalytics.com/',
  },
  {
    name: 'Wito Support',
    description: 'A support-focused platform built to improve customer communication and service coordination.',
    category: 'Consultancy & Support',
    url: 'https://www.witosupport.com/',
  },
];

export const categoryGroups = [
  {
    label: 'Consultancy & Analytics',
    slugs: ['grit-africa-analytics'],
  },
  {
    label: 'Marketplace & Mobility',
    slugs: ['kivuride'],
  },
  {
    label: 'Property & Hospitality',
    slugs: ['property-hospitality'],
  },
  {
    label: 'Platforms & Digital Infrastructure',
    slugs: ['hire-me-africa', 'dajah-tunes'],
  },
  {
    label: 'Media & Publishing',
    slugs: ['insightium'],
  },
];
