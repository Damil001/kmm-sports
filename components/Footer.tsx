import Link from "next/link";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

const productLinks = [
  { href: "/products/basketball-uniforms", label: "Basketball Uniforms" },
  { href: "/products/football-uniforms", label: "Football Uniforms" },
  { href: "/products/volleyball-uniforms", label: "Volleyball Uniforms" },
  { href: "/products/hoodies", label: "Hoodies" },
  { href: "/products/cargo-trousers", label: "Cargo Trousers" },
  { href: "/products/varsity-jackets", label: "Varsity Jackets" },
];

const companyLinks = [
  { href: "/#about", label: "About" },
  { href: "/#manufacturing", label: "Manufacturing" },
  { href: "/#quality", label: "Quality" },
  { href: "/#contact", label: "Careers" },
];

export default function Footer() {
  return (
    <footer className="bg-footer text-white/80">
      <div className="mx-auto max-w-content px-4 py-14 md:px-8 lg:px-10">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-4xl tracking-wide text-white">KMM</p>
            <p className="font-condensed text-xs font-semibold uppercase tracking-[0.35em] text-blue-accent">
              Sportswear
            </p>
            <p className="mt-3 max-w-xs font-body text-sm text-white/65">
              The Sign of Quality — Kaif Manha Mahnoor Sports Wear, Sialkot.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6 font-condensed text-sm font-semibold uppercase tracking-wide">
            <Link href="/products" className="hover:text-blue-accent">
              Products
            </Link>
            <Link href="/#about" className="hover:text-blue-accent">
              About
            </Link>
            <Link href="/#manufacturing" className="hover:text-blue-accent">
              Manufacturing
            </Link>
            <Link href="/#quality" className="hover:text-blue-accent">
              Quality
            </Link>
            <Link href="/#contact" className="hover:text-blue-accent">
              Contact
            </Link>
          </nav>
        </div>

        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-3">
          <div>
            <h3 className="font-condensed text-sm font-bold uppercase tracking-widest text-white">
              Products
            </h3>
            <ul className="mt-4 space-y-2 font-body text-sm">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-blue-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-condensed text-sm font-bold uppercase tracking-widest text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2 font-body text-sm">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-blue-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-condensed text-sm font-bold uppercase tracking-widest text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 font-body text-sm">
              <li>Sialkot, Punjab, Pakistan</li>
              <li>
                <a
                  href="mailto:info@kmmsports.com"
                  className="hover:text-blue-accent"
                >
                  info@kmmsports.com
                </a>
              </li>
              <li>
                <a href="tel:+923476472827" className="hover:text-blue-accent">
                  +92 347 647 2827
                </a>
              </li>
              <li>
                <a
                  href="https://www.kmmsports.com"
                  className="hover:text-blue-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.kmmsports.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-body text-xs text-white/55 md:text-sm">
            © {new Date().getFullYear()} KMM Sports — Kaif Manha Mahnoor Sports
            Wear. All rights reserved. | Sialkot, Pakistan
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/kmmsportswear"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-blue-accent"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-blue-accent"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://wa.me/923476472827"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-blue-accent"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
