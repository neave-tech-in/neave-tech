import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Capabilities from '@/components/sections/Capabilities';
import Services from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import WhyUs from '@/components/sections/WhyUs';
import Founder from '@/components/sections/Founder';
import Clients from '@/components/sections/Clients';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: {
    absolute: 'Neave Tech — IT Company Nagpur | ERP, IoT & Gov Solutions',
  },
  description:
    'Neave Tech is a Nagpur-based IT company building ERP, IoT, cloud and government software for enterprises and public sector across Maharashtra since 2019.',
  alternates: {
    canonical: 'https://www.neave.tech',
  },
  openGraph: {
    title: 'Neave Tech — IT Company Nagpur | ERP, IoT & Gov Solutions',
    description:
      'Nagpur-based IT company building ERP, IoT, cloud and government software for enterprises and public sector across Maharashtra.',
    url: 'https://www.neave.tech',
  },
};

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Capabilities />
      <Services />
      <CaseStudies />
      <WhyUs />
      <Founder />
      <Clients />
      <CTA />
      <Footer />
    </main>
  );
}
