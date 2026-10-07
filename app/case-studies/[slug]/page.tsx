import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/sections/Footer';
import type { Metadata } from 'next';

const caseStudySlugs = [
  'msetcl-visitor-management-system',
  'msetcl-guest-house-management',
  'msetcl-employee-attendance-system',
  'industries-department-maharashtra-website',
];

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies[params.slug];
  if (!study) return {};

  return {
    title: `${study.title} for ${study.client} | Case Study | Neave Tech`,
    description: study.problem.slice(0, 155),
    alternates: {
      canonical: `/case-studies/${params.slug}`,
    },
    openGraph: {
      title: `${study.title} | Case Study | Neave Tech`,
      description: study.problem.slice(0, 155),
      url: `https://www.neave.tech/case-studies/${params.slug}`,
    },
  };
}
const caseStudies: Record<string, {
  title: string;
  client: string;
  sector: string;
  year: string;
  tags: string[];
  problem: string;
  built: string[];
  tech: string[];
  timeline: string;
  outcome: string;
}> = {
  'msetcl-visitor-management-system': {
    title: 'Visitor Management System',
    client: 'Maharashtra State Electricity Transmission Co. Ltd. (MSETCL)',
    sector: 'Public Sector · Energy',
    year: '2025–2026',
    tags: ['Visitor Management', 'QR Code', 'Approval Workflow', 'Web App'],
    problem: 'MSETCL Protocol Section needed a centralised system to manage visitors at Corporate Office, BKC Mumbai. Manual entry process was slow and lacked proper tracking.',
    built: [
      'Centralised web-based visitor management system',
      'QR-code based entry passes',
      'Visitor pre-registration',
      'Host / Person-to-meet selection',
      'Approval workflow',
      'Entry & exit logging',
      'Reports for Protocol Office',
    ],
    tech: ['Next.js', 'React', 'Node.js', 'Database', 'QR Code generation'],
    timeline: 'Work Order: 31 Oct 2025 → Training: 4 Aug 2026 → Go-live: 1 Sep 2026',
    outcome: 'System is live. Training completed and go-live approved by MSETCL Protocol Officer.',
  },
  'msetcl-guest-house-management': {
    title: 'Guest House Booking & Management System',
    client: 'Maharashtra State Electricity Transmission Co. Ltd. (MSETCL)',
    sector: 'Public Sector · Energy',
    year: '2026',
    tags: ['Booking System', 'Property Management', 'Admin Panel'],
    problem: 'MSETCL needed a digital system to manage guest house bookings, room availability and approvals across properties.',
    built: [
      'Property & room listing',
      'Booking requests and approval flow',
      'Occupancy view',
      'Admin management of properties',
      'Reports',
    ],
    tech: ['Next.js', 'React', 'Node.js', 'Database'],
    timeline: 'Iterated on client feedback (property edit/save/delete flows) in Aug 2026',
    outcome: 'System delivered and iterated based on client feedback.',
  },
  'msetcl-employee-attendance-system': {
    title: 'Outsourced Employee Check-in / Check-out System',
    client: 'Maharashtra State Electricity Transmission Co. Ltd. (MSETCL)',
    sector: 'Public Sector · Energy',
    year: '2026',
    tags: ['Attendance', 'Check-in/Check-out', 'Reports'],
    problem: 'MSETCL required a reliable system to track check-in and check-out of outsourced staff along with attendance records and reports.',
    built: [
      'Check-in / Check-out tracking for outsourced staff',
      'Attendance records',
      'Reports for management',
    ],
    tech: ['Next.js', 'React', 'Node.js', 'Database'],
    timeline: 'Training completed → Go-live approved by MSETCL on 16 Sep 2026',
    outcome: 'System is live after successful training and approval.',
  },
  'industries-department-maharashtra-website': {
    title: 'Website Updating & Maintenance',
    client: 'Industries Department, Government of Maharashtra',
    sector: 'Public Sector · Government',
    year: '2025–2026',
    tags: ['Website Maintenance', 'Content Updates', 'Support'],
    problem: 'The official website of Industries Department needed regular content updates, maintenance and technical support.',
    built: [
      'Regular content updates',
      'Website maintenance',
      'Technical support',
    ],
    tech: ['CMS / Website technologies'],
    timeline: 'Awarded under GR No. IELD-15/286/2025-ADMIN-2 dated 09 July 2025',
    outcome: 'Ongoing maintenance and support of industry.maharashtra.gov.in',
  },
};

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies[params.slug];

  if (!study) {
    notFound();
  }

  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container-x max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-muted">
            <Link href="/case-studies" className="hover:text-ink">Case Studies</Link>
            <span className="mx-2">/</span>
            <span>{study.title}</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <span className="eyebrow">{study.sector}</span>
            <h1 className="mt-3 font-display text-4xl md:text-5xl tracking-tight leading-tight">
              {study.title}
            </h1>
            <p className="mt-4 text-lg text-muted">{study.client}</p>
            <p className="mt-1 text-sm text-muted">{study.year}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {study.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full border border-line text-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* Problem */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-3">The Problem</h2>
            <p className="text-muted leading-relaxed">{study.problem}</p>
          </div>

          {/* What we built */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-3">What we built</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted">
              {study.built.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {study.tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-surface border border-line text-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-3">Timeline</h2>
            <p className="text-muted">{study.timeline}</p>
          </div>

          {/* Outcome */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-3">Outcome</h2>
            <p className="text-muted">{study.outcome}</p>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-3xl border border-line bg-surface text-center">
            <h3 className="text-2xl font-display mb-3">Need something similar?</h3>
            <p className="text-muted mb-6">Get a proposal in 48 hours.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand text-white font-medium hover:opacity-90 transition"
            >
              Get a Proposal →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}