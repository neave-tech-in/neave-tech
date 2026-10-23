import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/sections/Footer';
import { portfolioBySlug, portfolioItems } from '@/lib/portfolio';

export function generateStaticParams() { return portfolioItems.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const item = portfolioBySlug[params.slug]; return item ? { title: `${item.client} Case Study | Neave Tech`, description: item.intro } : {}; }

const labels = ['Client', 'Industry', 'Service', 'Team Setup', 'Timeline'];
export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const item = portfolioBySlug[params.slug]; if (!item) notFound();
  const facts = [item.client, item.industry, item.service, item.team, item.timeline];
  return <main className="case-page"><Navbar /><section className="case-hero"><div className="case-glow" /><div className="container-narrow">
    <Link href="/case-studies" className="back-work">←&nbsp; BACK TO WORK</Link>
    <div className="case-intro"><div><h1>{item.title}</h1><p>{item.intro}</p></div><div className={`case-cover${item.heroImages?.length ? '' : ' case-cover-empty'} ${item.heroImages && item.heroImages.length > 1 ? `case-cover-collage case-cover-collage-${item.heroImages.length}` : ''}`}>{item.heroImages?.map((src, index) => <div className="case-cover-image" key={src}><Image src={src} alt={`${item.imageAlt} ${index + 1}`} fill sizes="(max-width: 800px) 90vw, 42vw" priority={index === 0} /></div>)}</div></div>
    <div className="case-facts">{facts.map((fact, index) => <div key={labels[index]}><span className={`fact-mark fact-mark-${index}`} /><h2>{labels[index]}</h2><p>{fact}</p></div>)}</div>
    <div className="case-sections">{[['Goal', item.goal], ['Challenge', item.challenge], ['Outcome', item.outcome]].map(([heading, copy]) => <article key={heading}><h2>{heading}</h2><p>{copy}</p></article>)}</div>
    {item.gallery && <section className="case-gallery" aria-label={`${item.client} project gallery`}>{item.gallery.map((src, index) => <div key={src} className="case-gallery-image"><Image src={src} alt={`${item.client} project screen ${index + 1}`} fill sizes="(max-width: 800px) 90vw, 44vw" /></div>)}</section>}
  </div></section><Footer /></main>;
}
