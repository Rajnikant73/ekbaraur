import { Service, Project, Testimonial, ProcessStep } from '@/lib/types';
import { PhoneCall, Mail, MapPin } from 'lucide-react';

// Services offered by Mews Media
export const SERVICES: Service[] = [
  {
    icon: 'code',
    title: 'Web Development',
    description: 'Custom website design and development tailored to your business needs with responsive layouts and modern technologies.',
  },
  {
    icon: 'megaphone',
    title: 'Digital Marketing',
    description: 'Strategic Google and Facebook ads campaigns to reach your target audience and drive conversions.',
  },
  {
    icon: 'map-pin',
    title: 'Google My Business',
    description: 'Optimize your local presence with Google My Business setup and management to attract local customers.',
  },
  {
    icon: 'video',
    title: 'Video Advertising',
    description: 'Engaging video content creation and advertising campaigns that capture attention and tell your story.',
  },
  {
    icon: 'graduation-cap',
    title: 'Digital Marketing Courses',
    description: 'Comprehensive digital marketing training programs available both online and offline for individuals and businesses.',
  },
  {
    icon: 'smartphone',
    title: 'Social Media Management',
    description: 'Strategic social media presence management to build your brand and engage with your audience.',
  },
];

// Process steps for How We Work section
export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery',
    description: 'We start by understanding your business, goals, and target audience to create a tailored strategy.',
  },
  {
    step: 2,
    title: 'Strategy',
    description: 'Our team develops a comprehensive strategy aligned with your business objectives and budget.',
  },
  {
    step: 3,
    title: 'Design',
    description: 'We create visually appealing designs that reflect your brand identity and enhance user experience.',
  },
  {
    step: 4,
    title: 'Development',
    description: 'Our developers bring the designs to life using the latest technologies and best practices.',
  },
  {
    step: 5,
    title: 'Launch & Support',
    description: 'We launch your project and provide ongoing support to ensure continued success.',
  },
];

// Portfolio projects
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-commerce Website',
    category: 'Web Development',
    imageUrl: 'https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'Restaurant Marketing Campaign',
    category: 'Digital Marketing',
    imageUrl: 'https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    title: 'Hotel Booking Platform',
    category: 'Web Development',
    imageUrl: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 4,
    title: 'Local Business GMB Optimization',
    category: 'Google My Business',
    imageUrl: 'https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 5,
    title: 'Product Launch Video',
    category: 'Video Advertising',
    imageUrl: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 6,
    title: 'Educational Platform',
    category: 'Web Development',
    imageUrl: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    position: 'CEO',
    company: 'Nepal Foods',
    text: 'Mews Media transformed our online presence. Their web development and digital marketing services helped us reach a wider audience and increase our sales significantly.',
  },
  {
    id: 2,
    name: 'Priya Patel',
    position: 'Marketing Director',
    company: 'Lumbini Resorts',
    text: 'The team at Mews Media is exceptionally professional and knowledgeable. Their Google My Business optimization helped us attract more local tourists and improve our online reputation.',
  },
  {
    id: 3,
    name: 'Anil Kumar',
    position: 'Founder',
    company: 'TechNep',
    text: 'I attended their digital marketing course and gained valuable insights and practical skills. The instructors are experienced and the curriculum is comprehensive and up-to-date.',
  },
  {
    id: 4,
    name: 'Sunita Thapa',
    position: 'Owner',
    company: 'Thapa Handicrafts',
    text: 'Mews Media\'s video advertising campaign helped showcase our products in a creative way. We received an overwhelming response and saw a significant increase in orders.',
  },
];

// Contact information
export const CONTACT_INFO = [
  {
    icon: PhoneCall,
    title: 'Phone',
    details: '+977 9702683618',
    link: 'tel:+977 9702683618',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'info@mewsmedia.com',
    link: 'mailto:info@mewsmedia.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: 'Mayadevi-03, Rupandehi, Lumbini, Nepal',
    link: 'https://maps.google.com/?q=Mayadevi-03,Rupandehi,Lumbini,Nepal',
  },
];

// Navigation links
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/courses', label: 'Courses' },
  { href: '/contact', label: 'Contact' },
];

// WhatsApp information
export const WHATSAPP_NUMBER = '+9779702683618'; // Replace with actual number
export const WHATSAPP_MESSAGE = 'Hello Mews Media! I would like to inquire about your services.';