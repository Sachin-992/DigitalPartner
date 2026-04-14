import { LucideIcon } from 'lucide-react';
import scrollkuraiImg from '../assets/images/scrollkurai.jpeg';
import townbasketImg from '../assets/images/townbasket.jpeg';
import eduquestImg from '../assets/images/eduquest.jpeg';

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
    id: 'monitoring-dashboard',
    title: 'Wise Ultima',
    category: 'Monitoring Dashboard',
    tagline: 'Real-time Analytics & System Monitoring',
    problem: 'Enterprises lacked a unified view to monitor distributed systems, leading to delayed incident response.',
    solution: 'A real-time monitoring dashboard with custom widget builders and anomaly detection capabilities.',
    description: 'An enterprise-grade monitoring dashboard that provides real-time insights, customizable widgets, and predictive alerts for complex distributed systems.',
    features: [
      'Real-time Data Visualization',
      'Predictive Anomaly Detection',
      'Custom Widget Builder',
      'Automated Alerting System'
    ],
    impact: 'Decreased average incident resolution time by 35% through proactive alerting.',
    liveUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    techStack: ['React', 'TypeScript', 'GraphQL', 'D3.js']
  },
  {
    id: 'ai-app',
    title: 'NeuralGen',
    category: 'AI-Based App',
    tagline: 'Generative AI for Creative Workflows',
    problem: 'Designers spent too much time on repetitive tasks, leaving less room for core creative exploration.',
    solution: 'An AI-powered application that generates design variations, color palettes, and copy suggestions instantly.',
    description: 'A generative AI tool designed to assist creative professionals by automating repetitive design variations and content generation.',
    features: [
      'AI-driven Design Variations',
      'Automated Copywriting',
      'Smart Color Palette Generator',
      'One-click Asset Export'
    ],
    impact: 'Accelerated creative workflows by 50% for top agency partners.',
    liveUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    techStack: ['React', 'Python', 'OpenAI API', 'Tailwind']
  },
  {
    id: 'skillcheck',
    title: 'SkillCheck',
    category: 'Full-Stack Platform',
    tagline: 'Comprehensive Tech Skill Assessments',
    problem: 'Tech recruiters struggled to accurately evaluate coding skills through static resumes.',
    solution: 'A scalable full-stack platform providing live coding environments, automated scoring, and technical interviews.',
    description: 'A robust technical assessment platform offering live coding environments and automated evaluation to help recruiters find top talent.',
    features: [
      'Live Coding Environment',
      'Automated Code Evaluation',
      'Video Interview Integration',
      'Detailed Candidate Reports'
    ],
    impact: 'Helped companies hire 200+ engineers with a 95% retention rate.',
    liveUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
    techStack: ['Next.js', 'Node.js', 'Docker', 'PostgreSQL']
  },
  {
    id: 'scrollkurai',
    title: 'ScrollKurai',
    category: 'SaaS / Productivity',
    tagline: 'Streamlining Content Workflows for Modern Teams',
    problem: 'Content creators and marketing teams often struggle with fragmented tools, leading to inefficient asset management and delayed publishing cycles.',
    solution: 'We built a unified SaaS ecosystem that centralizes content creation, digital asset management, and team collaboration into a single, high-performance dashboard.',
    description: 'A SaaS platform designed to streamline content workflows, improve productivity, and manage digital assets in one unified system for creators and teams.',
    features: [
      'Unified Digital Asset Management',
      'Real-time Team Collaboration',
      'Automated Content Scheduling',
      'Advanced Performance Analytics'
    ],
    impact: 'Reduced content production time by 40% and eliminated tool-switching fatigue for creative teams.',
    liveUrl: 'https://app.scrollkurai.in/auth',
    imageUrl: scrollkuraiImg,
    techStack: ['.NET', 'React', 'PostgreSQL', 'Azure']
  },
  {
    id: 'townbasket',
    title: 'Townbasket',
    category: 'Local E-commerce',
    tagline: 'Digital Transformation for Hyperlocal Retailers',
    problem: 'Small-scale grocery stores lacked the digital infrastructure to compete with e-commerce giants, resulting in lost local revenue and customer churn.',
    solution: 'A mobile-first hyperlocal platform that enables local stores to manage inventory, accept digital payments, and receive orders directly via WhatsApp and a dedicated web interface.',
    description: 'A hyperlocal grocery ordering platform that enables small stores to sell online, manage inventory, and receive orders directly through a mobile-first experience.',
    features: [
      'Hyperlocal Delivery Tracking',
      'Real-time Inventory Sync',
      'WhatsApp Order Integration',
      'Secure Multi-gateway Payments'
    ],
    impact: 'Empowered 50+ local retailers to go digital, resulting in an average 25% increase in monthly revenue.',
    liveUrl: 'https://townbasket.scrollkurai.in/',
    imageUrl: townbasketImg,
    techStack: ['.NET', 'React', 'SQL Server', 'Redis']
  },
  {
    id: 'eduquest',
    title: 'EduQuest',
    category: 'EdTech Platform',
    tagline: 'Interactive Learning Reimagined for Engagement',
    problem: 'Traditional educational platforms often suffer from low engagement rates and a lack of actionable data for tracking student progress.',
    solution: 'An interactive EdTech platform delivering structured learning modules, gamified assessments, and deep performance analytics to personalize the student journey.',
    description: 'An interactive EdTech platform that delivers structured learning, assessments, and performance tracking for students through a modern and engaging UI.',
    features: [
      'Interactive Course Modules',
      'Automated Assessment Engine',
      'Real-time Progress Dashboard',
      'Student Performance Analytics'
    ],
    impact: 'Boosted student engagement by 60% and provided educators with data-driven insights to improve learning outcomes.',
    liveUrl: 'https://eduquest-teal.vercel.app/',
    imageUrl: eduquestImg,
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind']
  }
];
