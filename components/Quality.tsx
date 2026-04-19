"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const claims = [
  "ISO-aligned processes and documented workflows",
  "Colorfastness testing for lasting kit graphics",
  "Seam strength and stitch integrity checks",
  "Wash durability cycles for repeat performance",
];

export default function Quality() {
  return (
    <section id="quality" className="bg-blue-primary py-16 md:py-24">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-10">
        <motion.div {...fadeUp}>
          <blockquote className="font-display text-[clamp(2rem,5vw,3.25rem)] leading-tight tracking-wide text-white">
            &ldquo;QUALITY IS NOT AN OPTION — IT&apos;S OUR STANDARD&rdquo;
          </blockquote>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <motion.ul
            className="space-y-4 font-body text-base leading-relaxed text-white/90"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {claims.slice(0, 2).map((c) => (
              <li key={c} className="flex gap-3">
                <span className="mt-2 h-[3px] w-8 shrink-0 bg-white" aria-hidden />
                {c}
              </li>
            ))}
          </motion.ul>
          <motion.ul
            className="space-y-4 font-body text-base leading-relaxed text-white/90"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {claims.slice(2).map((c) => (
              <li key={c} className="flex gap-3">
                <span className="mt-2 h-[3px] w-8 shrink-0 bg-white" aria-hidden />
                {c}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/#contact"
            className="inline-flex min-h-[52px] w-full items-center justify-center bg-white px-8 font-condensed text-sm font-bold uppercase tracking-wide text-blue-primary transition hover:bg-off-white sm:w-auto"
            style={{ borderRadius: "4px" }}
          >
            Download Our Product Catalogue
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
