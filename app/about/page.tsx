import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Founder from '@/components/sections/Founder';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'About Neave Tech — Founder & Team | IT Company Nagpur',
  description:
    'Meet Gauresh Bakane, Founder & CEO of Neave Tech. Nagpur IT company building ERP, IoT and government software for enterprises across Maharashtra since 2019.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Neave Tech — Founder & Team | IT Company Nagpur',
    description:
      'Meet Gauresh Bakane, Founder & CEO of Neave Tech. Building ERP, IoT and government software from Nagpur since 2019.',
    url: 'https://www.neave.tech/about',
  },
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-[72px]">
        <Founder />
      </div>
      <Footer />
    </main>
  );
}