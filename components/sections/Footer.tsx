"use client";

import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#case-studies", label: "Portfolio" },
  { href: "/#founder", label: "About" },
  { href: "/contact", label: "Contact" },
];
const services = [
  "ERP & API Development",
  "Blockchain & AI",
  "IoT Solutions",
  "Cloud Solutions",
  "Digital Marketing, Branding & Design",
  "Web Ecosystem & Security",
];

export default function Footer() {
  return (
    <footer className="relative bg-bg border-t border-line pt-20 pb-10">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="relative w-8 h-8">
                <Image
                  src="/logo.png"
                  alt=""
                  fill
                  sizes="32px"
                  style={{ objectFit: "contain" }}
                />
              </span>
              <span className="font-display text-lg tracking-tight">
                Neave<span className="text-brand-deep">Tech</span>
              </span>
            </Link>
            <p className="text-muted text-lg leading-relaxed max-w-md">
              High-performance digital infrastructure for government &
              enterprise.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
              <span className="w-2 h-2 rounded-full bg-brand" /> Available for
              new engagements
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            <div className="eyebrow">Navigation</div>
            <ul className="mt-2 flex flex-col gap-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <a className="ulink text-ink/80 hover:text-ink" href={n.href}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-3">
            <div className="eyebrow">Services</div>
            <ul className="mt-2 flex flex-col gap-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    className="ulink text-ink/80 hover:text-ink"
                    href="#services"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            <div className="eyebrow">Contact</div>
            <ul className="mt-2 flex flex-col gap-2 text-ink/80">
              <li>
                <a className="ulink" href="mailto:mail@neave.tech">
                  mail@neave.tech
                </a>
              </li>
              <li>
                <a className="ulink" href="tel:+919284755883">
                  +91 928-475-5883{" "}
                </a>
              </li>
              <li className="text-muted">Nagpur, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4">
  <div className="text-sm text-muted">
    © 2026 NeaveTech. All rights reserved.
  </div>

  <div className="flex items-center gap-5 text-sm text-muted">
    {/* Social Icons */}
    <a
      href="https://www.linkedin.com/company/neave-tech/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="text-muted hover:text-ink transition-colors"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    </a>

    <a
      href="https://www.instagram.com/neave__tech/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="text-muted hover:text-ink transition-colors"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    </a>

    {/* Existing links */}
    <Link href="/privacy#privacy" className="ulink">Privacy</Link>
    <Link href="/privacy#terms" className="ulink">Terms</Link>
    <Link href="/sitemap.xml" className="ulink">Sitemap</Link>
  </div>
</div>
      </div>
    </footer>
  );
}
