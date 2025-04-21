"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Code, Megaphone, MapPin, Video, GraduationCap, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/section-heading';
import { SERVICES } from '@/lib/constants';

export const ServicesSection = () => {
  const icons: Record<string, React.ReactNode> = {
    'code': <Code className="h-10 w-10 text-blue-600" />,
    'megaphone': <Megaphone className="h-10 w-10 text-blue-600" />,
    'map-pin': <MapPin className="h-10 w-10 text-blue-600" />,
    'video': <Video className="h-10 w-10 text-blue-600" />,
    'graduation-cap': <GraduationCap className="h-10 w-10 text-blue-600" />,
    'smartphone': <Smartphone className="h-10 w-10 text-blue-600" />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Core Services"
          subtitle="We offer a comprehensive range of digital services to help your business grow and succeed in the digital landscape."
          centered
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">
                {icons[service.icon]}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link 
                href="/services" 
                className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group-hover:translate-x-1 duration-300"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link 
            href="/services"
            className="inline-flex items-center text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            View All Services <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};