import Image from 'next/image';
import Link from 'next/link';
import { portfolioItems } from '@/lib/portfolio';

export default function CaseStudies() {
  return (
    <section id="portfolio" className="home-case-studies">
      <div className="home-case-studies-orb home-case-studies-orb-a" />
      <div className="home-case-studies-orb home-case-studies-orb-b" />
      <div className="home-case-studies-inner">
        <h2>CASE STUDY</h2>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <Link href={`/case-studies/${item.slug}`} key={item.slug} className="portfolio-card">
              <div className="portfolio-image">
                <Image
                  src={item.image ?? item.heroImages?.[0] ?? '/logo.png'}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 500px) 90vw, (max-width: 900px) 24vw, 280px"
                  priority={index < 3}
                />
              </div>
              <h3>{item.cardTitle}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
