"use client";

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/section-heading';
import { CourseRegistrationForm } from '@/components/forms/course-registration-form';
import { CheckCircle, Award, Users, Clock, Calendar, Monitor } from 'lucide-react';

// Course data
const courses = [
  {
    title: 'Digital Marketing Fundamentals',
    duration: '4 weeks',
    level: 'Beginner',
    format: 'Online & Offline',
    description: 'A comprehensive introduction to digital marketing, covering the basics of SEO, social media marketing, email marketing, and content marketing.',
    topics: [
      'Introduction to digital marketing',
      'Search Engine Optimization (SEO) basics',
      'Social media marketing fundamentals',
      'Email marketing strategies',
      'Content marketing principles',
      'Digital marketing analytics',
    ],
    icon: <Monitor className="h-10 w-10 text-blue-600" />,
  },
  {
    title: 'Advanced Google Ads',
    duration: '6 weeks',
    level: 'Intermediate',
    format: 'Online & Offline',
    description: 'Learn advanced Google Ads strategies to create, manage, and optimize high-performing paid search and display campaigns.',
    topics: [
      'Google Ads account structure and setup',
      'Keyword research and selection',
      'Ad copywriting and testing',
      'Bid management strategies',
      'Campaign optimization techniques',
      'Performance tracking and reporting',
    ],
    icon: <Monitor className="h-10 w-10 text-blue-600" />,
  },
  {
    title: 'Social Media Marketing Masterclass',
    duration: '6 weeks',
    level: 'All Levels',
    format: 'Online & Offline',
    description: 'Learn how to create effective social media strategies, create engaging content, and build a strong social media presence for your business.',
    topics: [
      'Social media strategy development',
      'Content creation for different platforms',
      'Community management and engagement',
      'Social media advertising',
      'Influencer marketing',
      'Social media analytics and reporting',
    ],
    icon: <Monitor className="h-10 w-10 text-blue-600" />,
  },
];

// Course benefits
const benefits = [
  {
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of experience in digital marketing.',
    icon: <Users className="h-6 w-6 text-blue-600" />,
  },
  {
    title: 'Practical Training',
    description: 'Hands-on exercises and real-world projects to apply what you learn.',
    icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
  },
  {
    title: 'Flexible Schedule',
    description: 'Choose between online and offline courses to fit your schedule.',
    icon: <Clock className="h-6 w-6 text-blue-600" />,
  },
  {
    title: 'Certificate of Completion',
    description: 'Receive a certificate upon successful completion of the course.',
    icon: <Award className="h-6 w-6 text-blue-600" />,
  },
  {
    title: 'Regular Batches',
    description: 'New batches start every month, so you can join at your convenience.',
    icon: <Calendar className="h-6 w-6 text-blue-600" />,
  },
  {
    title: 'Career Support',
    description: 'Get guidance on applying your skills to advance your career or business.',
    icon: <Users className="h-6 w-6 text-blue-600" />,
  },
];

export default function CoursesPage() {
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
              Digital Marketing <span className="text-blue-600">Courses</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Enhance your digital marketing skills with our comprehensive courses taught by industry experts. Available both online and offline in Lumbini, Nepal.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Courses"
            subtitle="Comprehensive digital marketing courses designed to help you succeed in the digital world"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                
                <div className="flex flex-wrap mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2 mb-2">
                    {course.duration}
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2 mb-2">
                    {course.level}
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded mb-2">
                    {course.format}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">{course.description}</p>
                
                <h4 className="font-semibold mb-3">What You'll Learn:</h4>
                <ul className="space-y-2 mb-6">
                  {course.topics.map((topic, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose Our Courses"
            subtitle="We offer more than just training; we provide a learning experience that helps you achieve your goals"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <div className="mr-4">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Student Testimonials"
            subtitle="Hear what our students have to say about their learning experience"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <p className="text-gray-600 italic">
                  "The Digital Marketing Fundamentals course was exactly what I needed to start my career in marketing. The instructors were knowledgeable and the practical exercises helped me understand the concepts better. Highly recommended!"
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-blue-600">R</span>
                </div>
                <div>
                  <h4 className="font-bold">Ram Kumar</h4>
                  <p className="text-gray-600 text-sm">Digital Marketing Student</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <p className="text-gray-600 italic">
                  "I took the Social Media Marketing Masterclass to improve my business's online presence. The course was comprehensive and practical. I've already implemented many strategies I learned and seen significant improvement in my social media engagement."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-blue-600">S</span>
                </div>
                <div>
                  <h4 className="font-bold">Sita Sharma</h4>
                  <p className="text-gray-600 text-sm">Small Business Owner</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Registration Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                title="Register for a Course"
                subtitle="Take the first step towards enhancing your digital marketing skills"
              />
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">How It Works</h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="text-gray-700">Fill out the registration form with your details</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="text-gray-700">Our team will contact you to discuss course details and schedule</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="text-gray-700">Complete the enrollment process and start your learning journey</p>
                    </div>
                  </li>
                </ol>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Course Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                    <p className="text-gray-700">New batches start every month</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-3" />
                    <p className="text-gray-700">Flexible timing options available</p>
                  </div>
                  <div className="flex items-center">
                    <Monitor className="h-5 w-5 text-blue-600 mr-3" />
                    <p className="text-gray-700">Choose between online and offline modes</p>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-blue-600 mr-3" />
                    <p className="text-gray-700">Certificate upon successful completion</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CourseRegistrationForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}