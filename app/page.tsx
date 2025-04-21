import { HeroSection } from '@/components/home/hero-section';
import { BenefitsSection } from '@/components/home/benefits-section';
import { ServicesSection } from '@/components/home/services-section';
import { ProcessSection } from '@/components/home/process-section';
import { ProjectsSection } from '@/components/home/projects-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { CTASection } from '@/components/home/cta-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <ProcessSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}