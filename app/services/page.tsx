"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Megaphone, 
  MapPin, 
  Video, 
  GraduationCap, 
  Smartphone,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/lib/constants';

// Service details with features and benefits
const servicesDetails = [
  {
    id: 'web-development',
    icon: <Code className="h-12 w-12 text-blue-600" />,
    title: 'Web Development',
    description: 'We create beautiful, functional, and responsive websites tailored to your business needs. Our web development services are designed to help you establish a strong online presence and connect with your target audience.',
    features: [
      'Custom website design and development',
      'Responsive layouts for all devices',
      'E-commerce solutions',
      'Content Management Systems (WordPress, etc.)',
      'Website maintenance and updates',
      'SEO-friendly development'
    ],
    image: 'https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'digital-marketing',
    icon: <Megaphone className="h-12 w-12 text-blue-600" />,
    title: 'Digital Marketing',
    description: 'Our digital marketing services help you reach your target audience, increase brand awareness, and drive conversions. We develop comprehensive strategies tailored to your business goals and budget.',
    features: [
      'Strategic campaign planning',
      'Google Ads management',
      'Facebook & Instagram advertising',
      'Email marketing campaigns',
      'Performance tracking and reporting',
      'Conversion rate optimization'
    ],
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'gmb-optimization',
    icon: <MapPin className="h-12 w-12 text-blue-600" />,
    title: 'Google My Business',
    description: 'Our Google My Business optimization services help local businesses improve their visibility in local search results and attract more customers. We ensure your GMB profile is complete, accurate, and optimized for maximum visibility.',
    features: [
      'Profile setup and verification',
      'Keyword-optimized business description',
      'Photo and video optimization',
      'Review management and response',
      'Regular posting and updates',
      'Local SEO strategies'
    ],
    image: 'https://images.pexels.com/photos/1181253/pexels-photo-1181253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'video-advertising',
    icon: <Video className="h-12 w-12 text-blue-600" />,
    title: 'Video Advertising',
    description: 'Our video advertising services help you create engaging video content that captures attention and tells your brand story. We develop video marketing strategies that resonate with your target audience and achieve your marketing objectives.',
    features: [
      'Video concept development',
      'Professional video production',
      'YouTube advertising campaigns',
      'Social media video content',
      'Video SEO optimization',
      'Performance analytics and reporting'
    ],
    image: 'https://images.pexels.com/photos/5876609/pexels-photo-5876609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'marketing-courses',
    icon: <GraduationCap className="h-12 w-12 text-blue-600" />,
    title: 'Digital Marketing Courses',
    description: 'Our comprehensive digital marketing courses provide individuals and businesses with the knowledge and skills needed to succeed in the digital landscape. We offer both online and offline training options to suit your learning preferences.',
    features: [
      'Comprehensive curriculum',
      'Practical, hands-on training',
      'Online and offline course options',
      'Expert instructors with industry experience',
      'Real-world case studies and examples',
      'Certificate of completion'
    ],
    image: 'https://images.pexels.com/photos/6238100/pexels-photo-6238100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'social-media',
    icon: <Smartphone className="h-12 w-12 text-blue-600" />,
    title: 'Social Media Management',
    description: 'Our social media management services help you build and maintain a strong social media presence, engage with your audience, and drive business growth. We develop customized strategies to achieve your social media marketing goals.',
    features: [
      'Social media strategy development',
      'Content creation and scheduling',
      'Community management and engagement',
      'Social media advertising',
      'Analytics and performance reporting',
      'Competitor analysis'
    ],
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export default function ServicesPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Mews Media! I would like to request a quote for your services.')}`;
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-blue-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our <span className="text-blue-600">Services</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We offer a comprehensive range of digital services to help your business grow and succeed in the digital landscape. From web development to digital marketing, we've got you covered.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Request a Quote
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Services"
            subtitle="We offer a wide range of digital services to help your business grow"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {SERVICES.map((service, index) => {
              const icons: Record<string, JSX.Element> = {
                'code': <Code className="h-10 w-10 text-blue-600" />,
                'megaphone': <Megaphone className="h-10 w-10 text-blue-600" />,
                'map-pin': <MapPin className="h-10 w-10 text-blue-600" />,
                'video': <Video className="h-10 w-10 text-blue-600" />,
                'graduation-cap': <GraduationCap className="h-10 w-10 text-blue-600" />,
                'smartphone': <Smartphone className="h-10 w-10 text-blue-600" />,
              };
              
              return (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-6">
                    {icons[service.icon]}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link 
                    href={`/services#${service.title.toLowerCase().replace(/ /g, '-')}`}
                    className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Detailed Service Sections */}
      {servicesDetails.map((service, index) => (
        <section 
          key={index}
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Get a Quote
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                className={`relative aspect-video rounded-lg overflow-hidden shadow-xl ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}
      
      {/* FAQ Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Got questions? We've got answers."
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">How much do your services cost?</h3>
              <p className="text-gray-600">
                Our pricing varies depending on the specific services you need and the scope of your project. We offer customized solutions tailored to your business needs and budget. Contact us for a free consultation and quote.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">How long does it take to complete a project?</h3>
              <p className="text-gray-600">
                The timeline for each project varies depending on its complexity and scope. A simple website might take 2-4 weeks, while a comprehensive digital marketing campaign might take several months to plan and execute. We'll provide you with a detailed timeline during our consultation.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">Do you offer ongoing support after project completion?</h3>
              <p className="text-gray-600">
                Yes, we offer ongoing support and maintenance services to ensure your digital assets continue to perform optimally. We can also provide training to your team so they can manage day-to-day updates themselves.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">How do you measure the success of your services?</h3>
              <p className="text-gray-600">
                We establish clear KPIs (Key Performance Indicators) at the beginning of each project and provide regular reports to track progress. Depending on your goals, these might include website traffic, conversion rates, search rankings, social media engagement, or lead generation metrics.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help your business achieve its digital goals. Contact us today to schedule a free consultation with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Request a Quote
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}