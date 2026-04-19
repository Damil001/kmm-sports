"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="grid min-h-[560px] grid-cols-1 lg:grid-cols-2">
        <motion.div
          className="relative min-h-[320px] lg:min-h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/images/factory.jpg"
            alt="KMM Sports manufacturing facility in Sialkot"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={false}
          />
          <div
            className="absolute inset-0 bg-gradient-to-tr from-blue-primary/80 via-blue-primary/25 to-transparent mix-blend-multiply"
            aria-hidden
          />
        </motion.div>

        <div className="flex flex-col justify-center px-4 py-16 md:px-10 lg:px-14 lg:py-20">
          <motion.div {...fadeUp}>
            <p className="font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-blue-primary">
              About KMM Sports
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,4vw,3.25rem)] leading-tight tracking-wide text-text-dark">
              SIALKOT&apos;S TRUSTED SPORTSWEAR MANUFACTURER
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-text-dark/85">
              KMM Sports — Kaif Manha Mahnoor Sports Wear — is a family-owned
              apparel manufacturing company rooted in Sialkot, the global hub
              for sports goods. We combine traditional craftsmanship with modern
              production lines to deliver kits and training wear for brands and
              teams worldwide.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-text-dark/85">
              From sampling to bulk export, our team partners closely with
              clients to meet specifications, timelines, and quality benchmarks
              that international markets demand.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex font-condensed text-sm font-semibold uppercase tracking-wide text-blue-primary transition hover:text-blue-accent"
            >
              Our Story →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
