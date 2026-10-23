import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioFooter() {
  return <footer className="portfolio-footer">
    <div className="portfolio-footer-main">
      <div className="portfolio-brand"><div className="portfolio-logo"><Image src="/logo.png" alt="Neave Tech" fill sizes="38px" /></div><strong>Neave Tech</strong><p>Digital Marketing is the component of marketing that utilizes internet and online based digital technologies and platforms to promote products and services.</p></div>
      <div><h2>Company</h2><a href="/contact">Help Center</a><a href="/#founder">About</a><a href="/">Blogs</a><a href="/contact">FAQ&apos;s</a></div>
      <div><h2>Privacy</h2><Link href="/privacy#terms">Terms &amp; Conditions</Link><a href="/contact">Support</a><a href="/services">Experts</a><Link href="/privacy#privacy">Privacy &amp; Policy</Link></div>
      <div className="portfolio-contact"><a href="mailto:mail@neave.tech">neave_tech@gmail.com</a><a href="tel:+919284755883">+91 928 475 5883</a><span>View on Google Map</span></div>
    </div>
    <nav><Link href="/privacy#terms">Terms of Use</Link><Link href="/case-studies">Case Studies</Link><Link href="/privacy#privacy">Privacy &amp; Policy</Link><Link href="/contact">Contact Us</Link><Link href="/contact">FAQ</Link></nav>
  </footer>;
}
