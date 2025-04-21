"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { CheckCircle, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { CourseRegistrationData } from '@/lib/types';
import { supabase } from '@/lib/supabase';

// Form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  courseMode: z.string().min(1, { message: 'Please select a course mode' }),
});

export const CourseRegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<CourseRegistrationData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      courseMode: '',
    },
  });

  const onSubmit = async (data: CourseRegistrationData) => {
    setIsSubmitting(true);
    
    try {
      // Submit data to Supabase
      const { error } = await supabase
        .from('course_registrations')
        .insert([
          {
            name: data.name,
            phone: data.phone,
            email: data.email,
            course_mode: data.courseMode,
          },
        ]);

      if (error) {
        throw new Error(error.message);
      }

      // Success
      setIsSuccess(true);
      reset();
      toast({
        title: 'Registration successful!',
        description: 'We will contact you with course details soon.',
      });

      // Reset success status after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Something went wrong',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6">Register for a Course</h2>
      
      {isSuccess ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-10 text-center"
        >
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">Registration Successful!</h3>
          <p className="text-gray-600">
            Thank you for registering for our digital marketing course. We'll contact you soon with more details.
          </p>
          <Button 
            className="mt-6 bg-blue-600 hover:bg-blue-700"
            onClick={() => setIsSuccess(false)}
          >
            Register Another Course
          </Button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Input
              placeholder="Your Full Name"
              {...register('name')}
              className={`border ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          
          <div>
            <Input
              placeholder="Your Phone Number"
              type="tel"
              {...register('phone')}
              className={`border ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>
          
          <div>
            <Input
              placeholder="Your Email"
              type="email"
              {...register('email')}
              className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <Select onValueChange={(value) => setValue('courseMode', value)}>
              <SelectTrigger className={`w-full border ${errors.courseMode ? 'border-red-500' : 'border-gray-300'}`}>
                <SelectValue placeholder="Select Course Mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="online">Online Course</SelectItem>
                <SelectItem value="offline">Offline Course (In-Person)</SelectItem>
                <SelectItem value="hybrid">Hybrid (Online + In-Person)</SelectItem>
              </SelectContent>
            </Select>
            {errors.courseMode && (
              <p className="mt-1 text-sm text-red-500">{errors.courseMode.message}</p>
            )}
          </div>
          
          <Button 
            type="submit" 
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <span className="mr-2">Submitting...</span>
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <span>Register Now</span>
                <BookOpen className="ml-2 h-4 w-4" />
              </div>
            )}
          </Button>
        </form>
      )}
    </motion.div>
  );
};