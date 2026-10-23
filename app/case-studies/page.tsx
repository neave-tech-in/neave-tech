import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/sections/Footer';
import { portfolioItems } from '@/lib/portfolio';

export default function CaseStudiesPage() {
  return <main className="portfolio-page"><Navbar /><section className="portfolio-hero"><div className="portfolio-orb portfolio-orb-a" /><div className="portfolio-orb portfolio-orb-b" /><div className="container-x"><h1>CASE STUDY</h1><div className="portfolio-grid">{portfolioItems.map((item, i) => <Link href={`/case-studies/${item.slug}`} key={item.slug} className="portfolio-card"><div className="portfolio-image"><Image src={item.image ?? item.heroImages?.[0] ?? '/logo.png'} alt={item.imageAlt} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 42vw, 300px" priority={i < 3} /></div><h2>{item.cardTitle}</h2></Link>)}</div></div></section><Footer /></main>;
}
