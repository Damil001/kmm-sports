"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/products", label: "Products" },
  { href: "/#about", label: "About" },
  { href: "/#manufacturing", label: "Manufacturing" },
  { href: "/#quality", label: "Quality" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-white/10 bg-navy-deep/80 backdrop-blur-md supports-[backdrop-filter]:bg-navy-deep/65"
          : "border-transparent bg-navy-deep/40 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-4 md:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex flex-col leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-3xl tracking-wide text-white md:text-4xl">
            KMM
          </span>
          <span className="font-condensed text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-accent">
            Sportswear
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-condensed text-sm font-semibold uppercase tracking-wider text-white/85 transition-colors hover:text-blue-accent"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center border border-transparent bg-blue-primary px-5 py-2.5 font-condensed text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-blue-accent"
            style={{ borderRadius: "4px" }}
          >
            Get a Quote
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-navy-deep/95 backdrop-blur-lg transition-[max-height] duration-300 ease-editorial lg:hidden",
          open ? "max-h-[480px]" : "max-h-0 border-transparent"
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-condensed py-3 text-base font-semibold uppercase tracking-wider text-white/90"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="mt-2 inline-flex items-center justify-center bg-blue-primary px-4 py-3 font-condensed text-sm font-semibold uppercase tracking-wide text-white"
            style={{ borderRadius: "4px" }}
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
