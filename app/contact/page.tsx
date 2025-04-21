"use client";

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/section-heading';
import { ContactForm } from '@/components/forms/contact-form';
import { CONTACT_INFO, WHATSAPP_NUMBER } from '@/lib/constants';
import { PhoneCall, Mail, MapPin, MessagesSquare } from 'lucide-react';

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Mews Media! I would like to inquire about your services.')}`;
  
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
              Contact <span className="text-blue-600">Us</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We'd love to hear from you. Reach out to us for any inquiries, project discussions, or to schedule a consultation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                title="Get In Touch"
                subtitle="Have questions or want to discuss a project? Reach out to us using any of the following methods."
              />
              
              <div className="space-y-8 mt-8">
                {CONTACT_INFO.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <a 
                        href={item.link}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {item.details}
                      </a>
                    </div>
                  </motion.div>
                ))}
                
                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MessagesSquare className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">WhatsApp</h3>
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-6">Our Location</h3>
                <div className="rounded-lg overflow-hidden shadow-md h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.240262028646!2d83.27633791501987!3d27.713372082787534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399684381e12d591%3A0x3b3ea25adaf1de0a!2sLumbini%20Buddhist%20University!5e0!3m2!1sen!2snp!4v1619160830879!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Business Hours Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Business Hours"
            subtitle="Our office is open during the following hours"
            centered
          />
          
          <div className="max-w-2xl mx-auto mt-12 bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Day</th>
                  <th className="py-4 px-6 text-left">Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Monday - Friday</td>
                  <td className="py-4 px-6">9:00 AM - 6:00 PM</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Saturday</td>
                  <td className="py-4 px-6">10:00 AM - 4:00 PM</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Sunday</td>
                  <td className="py-4 px-6">Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="max-w-2xl mx-auto mt-8 text-center">
            <p className="text-gray-600">
              For urgent matters outside of business hours, please email us at <a href="mailto:info@mewsmedia.com" className="text-blue-600 hover:underline">info@mewsmedia.com</a> or send us a message on WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}