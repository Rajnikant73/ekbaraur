import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mews Media Pvt. Ltd. | Digital Agency in Lumbini, Nepal',
  description: 'Professional digital agency offering web development, digital marketing, Google My Business optimization, video advertising, and digital marketing courses in Lumbini, Nepal.',
  keywords: 'digital agency, web development, digital marketing, Google My Business, video advertising, digital marketing courses, Lumbini, Nepal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}