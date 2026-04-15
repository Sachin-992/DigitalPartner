import karikingImg from '../assets/images/Kariking.png';
import townImg from '../assets/images/Town.png';
import eduImg from '../assets/images/edu.png';
import educoreImg from '../assets/images/educore.png';
import pkmImg from '../assets/images/PKM.png';

export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  problem: string;
  solution: string;
  description: string;
  features: string[];
  impact: string;
  liveUrl: string;
  imageUrl: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: 'kariking-website',
    title: 'Kariking Website',
    category: 'Business Website',
    tagline: 'Modern Brand Presence for Customer Engagement',
    problem: 'The brand needed a polished digital presence to communicate services clearly and build trust with potential customers.',
    solution: 'A responsive marketing website was crafted with strong branding, clear service storytelling, and conversion-focused page sections.',
    description: 'A modern business website built to showcase brand identity, services, and customer engagement with a clean, responsive UI.',
    features: [
      'Responsive Landing Pages',
      'Service Showcase',
      'Brand-First UI Design',
      'Lead Generation Sections'
    ],
    impact: 'Improved brand presentation, strengthened customer trust, and made service discovery faster across devices.',
    liveUrl: 'https://kariking.vercel.app/',
    imageUrl: karikingImg,
    techStack: ['React', 'Tailwind', 'TypeScript', 'Responsive UI']
  },
  {
    id: 'kariking-web-app',
    title: 'Kariking Web App',
    category: 'Business Operations Platform',
    tagline: 'Operational Control for Orders, Admin, and Customer Workflows',
    problem: 'Managing orders, customer interactions, and internal admin workflows manually created friction and slowed business operations.',
    solution: 'A centralized web application was developed to streamline admin tasks, customer activity, and order management in one place.',
    description: 'A full-featured web application designed to manage business operations, including customer interactions, orders, and admin workflows.',
    features: [
      'Admin Workflow Management',
      'Customer Interaction Tracking',
      'Order Processing',
      'Operational Dashboards'
    ],
    impact: 'Increased operational efficiency, reduced manual coordination, and improved visibility across core business workflows.',
    liveUrl: 'https://app.kariking.in/',
    imageUrl: karikingImg,
    techStack: ['ASP.NET Core', '.NET', 'SQL Server', 'REST API']
  },
  {
    id: 'townbasket',
    title: 'Townbasket',
    category: 'Hyperlocal E-commerce',
    tagline: 'Helping Small Retailers Sell Digitally with Confidence',
    problem: 'Local grocery retailers needed a practical way to manage inventory and receive online orders without relying on complex systems.',
    solution: 'A hyperlocal commerce platform was built to digitize product listings, inventory flow, and customer ordering for neighborhood stores.',
    description: 'A hyperlocal grocery ordering platform that enables small retailers to go digital, manage inventory, and receive orders efficiently.',
    features: [
      'Inventory Management',
      'Order Handling',
      'Retailer Dashboard',
      'Digital Storefront Experience'
    ],
    impact: 'Improved order efficiency, simplified retail operations, and helped local sellers expand their digital reach.',
    liveUrl: 'https://townbasket.scrollkurai.in/',
    imageUrl: townImg,
    techStack: ['.NET', 'React', 'SQL Server', 'Tailwind']
  },
  {
    id: 'educore',
    title: 'Educore',
    category: 'Learning Management Platform',
    tagline: 'Structured Course Delivery and Progress Tracking',
    problem: 'Educational teams needed a centralized system to organize courses, monitor learners, and manage assessments efficiently.',
    solution: 'A structured learning platform was created to unify course management, progress monitoring, and academic workflows.',
    description: 'A structured learning platform for managing courses, student progress, and assessments in a centralized system.',
    features: [
      'Course Management',
      'Student Progress Tracking',
      'Assessment Workflows',
      'Centralized Admin Control'
    ],
    impact: 'Made academic operations more organized, improved learning visibility, and reduced overhead in course administration.',
    liveUrl: 'https://educoreomegabalan.vercel.app/',
    imageUrl: educoreImg,
    techStack: ['Blazor WebAssembly', 'MudBlazor', 'ASP.NET Core', 'SQL Server']
  },
  {
    id: 'edu-quest',
    title: 'Edu Quest',
    category: 'EdTech Platform',
    tagline: 'Interactive Learning with Assessment and Performance Insights',
    problem: 'Students and educators needed a more engaging platform for learning journeys, assessments, and outcome tracking.',
    solution: 'An interactive EdTech experience was built to combine learning modules, assessments, and performance insights in one product.',
    description: 'An interactive EdTech platform that delivers engaging learning experiences, assessments, and performance tracking.',
    features: [
      'Interactive Learning Modules',
      'Assessment Engine',
      'Progress Analytics',
      'Performance Tracking'
    ],
    impact: 'Enhanced learner engagement, improved visibility into progress, and supported more effective academic decision-making.',
    liveUrl: 'https://eduquest-21.vercel.app/',
    imageUrl: eduImg,
    techStack: ['React', 'MongoDB', 'Tailwind', 'REST API']
  },
  {
    id: 'pkm-tours-travels-website',
    title: 'PKM Tours & Travels Website',
    category: 'Travel Booking Website',
    tagline: 'Travel Services Showcase with Booking-Focused UX',
    problem: 'The travel business needed a modern online presence to showcase services, build credibility, and help customers book trips easily.',
    solution: 'A branded travel website was designed to highlight services, fleet offerings, and booking pathways with a polished user experience.',
    description: 'A professional travel booking website designed to showcase travel services, fleet details, and enable customers to book trips easily with a modern UI and strong branding.',
    features: [
      'Travel Service Pages',
      'Fleet Showcase',
      'Booking Inquiry Flow',
      'Modern Branded UI'
    ],
    impact: 'Improved service visibility, made trip inquiries easier, and delivered a more trustworthy digital experience for travelers.',
    liveUrl: 'https://pkm-tours-travels.lovable.app/',
    imageUrl: pkmImg,
    techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive UI']
  }
];


