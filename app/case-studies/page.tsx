import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Temporarily disabled; retained for later re-enablement.
export const metadata: Metadata = {
  title: 'Case Studies | Government & Public Sector Projects | Neave Tech',
  description:
    'Real case studies of systems built for MSETCL and Government of Maharashtra — Visitor Management, Guest House Booking, Attendance System and more.',
  alternates: {
    canonical: '/case-studies',
  },
};
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/sections/Footer';
const studies = [
  {
    title: 'Visitor Management System',
    client: 'MSETCL',
    sector: 'Public Sector · Energy',
    slug: 'msetcl-visitor-management-system',
    description: 'Centralised visitor management with QR-code entry passes, pre-registration and approval workflow.',
  },
  {
    title: 'Guest House Booking System',
    client: 'MSETCL',
    sector: 'Public Sector · Energy',
    slug: 'msetcl-guest-house-management',
    description: 'Property listing, booking requests, approvals and occupancy management for guest houses.',
  },
  {
    title: 'Employee Check-in / Check-out System',
    client: 'MSETCL',
    sector: 'Public Sector · Energy',
    slug: 'msetcl-employee-attendance-system',
    description: 'Check-in/check-out tracking and attendance reports for outsourced staff.',
  },
  {
    title: 'Website Updating & Maintenance',
    client: 'Industries Department, Govt of Maharashtra',
    sector: 'Public Sector · Government',
    slug: 'industries-department-maharashtra-website',
    description: 'Content updates, maintenance and support of the official department website.',
  },
];

export default function CaseStudiesPage() {
  // Case-study pages temporarily disabled.
  notFound();

  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container-x">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow">Case Studies</span>
            <h1 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">
              Systems we built for government & public sector
            </h1>
            <p className="mt-4 text-muted text-lg">
              Real projects delivered for MSETCL and Government of Maharashtra.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {studies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="p-8 rounded-3xl border border-line bg-surface hover:border-brand/40 transition group"
              >
                <span className="eyebrow">{study.sector}</span>
                <h2 className="mt-3 text-2xl font-display group-hover:text-brand transition">
                  {study.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{study.client}</p>
                <p className="mt-4 text-muted leading-relaxed">{study.description}</p>
                <span className="inline-flex items-center gap-2 mt-6 text-sm font-medium">
                  View Case Study <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}