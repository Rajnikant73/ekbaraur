// Type definitions for the application

// Lead form submission type
export interface LeadFormData {
  name: string;
  email: string;
  message: string;
}

// Course registration form type
export interface CourseRegistrationData {
  name: string;
  phone: string;
  email: string;
  courseMode: string;
}

// Service type
export interface Service {
  icon: string;
  title: string;
  description: string;
}

// Project type
export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  link?: string;
}

// Testimonial type
export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  avatar?: string;
}

// Process step type
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}