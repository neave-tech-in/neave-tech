import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Founder from '@/components/sections/Founder';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'About — The Team Behind NeaveTech',
  description:
    'Meet Gauresh Bakane, Founder and CEO of NeaveTech, building scalable digital infrastructure for government and enterprise.',
  alternates: { canonical: '/about' },
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