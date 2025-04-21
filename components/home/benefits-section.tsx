"use client";

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';

const benefits = [
  {
    title: 'Expert Team',
    description: 'Our team of professionals brings years of industry experience to every project.',
  },
  {
    title: 'Custom Solutions',
    description: 'We create tailored strategies and solutions that align with your specific business goals.',
  },
  {
    title: 'Results-Driven',
    description: 'We focus on delivering measurable results that contribute to your business growth.',
  },
  {
    title: 'Affordable Pricing',
    description: 'We offer competitive pricing without compromising on quality or service.',
  },
  {
    title: 'Local Expertise',
    description: 'Deep understanding of the local market in Lumbini and Nepal to help your business thrive.',
  },
  {
    title: 'Ongoing Support',
    description: 'We provide continuous support and updates to keep your digital assets performing optimally.',
  },
];

export const BenefitsSection = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Why Choose Us"
          subtitle="Partner with Mews Media for these compelling reasons that set us apart in delivering digital excellence."
          centered
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <Check className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};