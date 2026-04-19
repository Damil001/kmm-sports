"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const headlineWords = ["THE", "SIGN", "OF", "QUALITY"];

const wordMotion = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-navy-deep pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(26,111,196,0.25)_0%,transparent_45%,rgba(46,141,232,0.12)_100%)]"
        aria-hidden
      />
      <div className="noise-overlay" aria-hidden />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-content grid-cols-1 items-center gap-12 px-4 pb-24 pt-8 md:px-8 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-16 lg:pt-12">
        <div className="lg:col-span-7">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                className="font-display text-[clamp(3.5rem,12vw,6rem)] leading-[0.92] tracking-wide text-white"
                initial={wordMotion.initial}
                animate={wordMotion.animate}
                transition={{
                  duration: 0.65,
                  delay: 0.15 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="mt-6 font-condensed text-xl font-semibold text-blue-accent md:text-[22px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Premium Sportswear Manufacturing — Sialkot, Pakistan
          </motion.p>

          <motion.p
            className="mt-5 max-w-xl font-body text-base leading-relaxed text-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            From concept to custom kit — KMM Sports delivers world-class
            athletic apparel with precision craftsmanship and uncompromising
            quality.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.45 }}
          >
            <Link
              href="/#contact"
              className="inline-flex min-h-[48px] items-center justify-center bg-blue-primary px-8 font-condensed text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-blue-accent"
              style={{ borderRadius: "4px" }}
            >
              Request a Sample
            </Link>
            <Link
              href="/products"
              className="inline-flex min-h-[48px] items-center justify-center border-2 border-white px-8 font-condensed text-sm font-semibold uppercase tracking-wide text-white transition hover:border-blue-accent hover:text-blue-accent"
              style={{ borderRadius: "4px" }}
            >
              View Products
            </Link>
          </motion.div>
        </div>

        <div className="relative hidden min-h-[320px] lg:col-span-5 lg:block">
          <div className="absolute right-0 top-1/2 w-full max-w-md -translate-y-1/2">
            <motion.div
              className="absolute right-8 top-0 h-64 w-48 bg-blue-primary/40"
              style={{ borderRadius: "4px" }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            />
            <motion.div
              className="absolute right-0 top-16 h-56 w-56 bg-blue-accent/35"
              style={{ borderRadius: "4px" }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
            />
            <motion.div
              className="absolute right-24 top-32 h-40 w-72 border-2 border-blue-accent/60 bg-navy-deep/40"
              style={{ borderRadius: "4px" }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            />
            <motion.div
              className="absolute right-12 top-48 h-24 w-40 bg-white/10"
              style={{ borderRadius: "4px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.6 }}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-white/60"
        >
          <ChevronDown className="h-8 w-8" aria-hidden />
          <span className="sr-only">Scroll down</span>
        </motion.div>
      </div>
    </section>
  );
}
