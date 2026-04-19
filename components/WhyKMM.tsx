"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const features = [
  {
    n: "01",
    title: "Sialkot Expertise",
    body: "Decades of manufacturing heritage from the world's sports goods capital.",
  },
  {
    n: "02",
    title: "Custom Manufacturing",
    body: "Full OEM/ODM service from design to delivery.",
  },
  {
    n: "03",
    title: "Premium Materials",
    body: "Polyester, elastane blends, moisture-wicking, rash-resistant fabrics.",
  },
  {
    n: "04",
    title: "Global Export",
    body: "Compliant with international trade standards, shipped worldwide.",
  },
];

export default function WhyKMM() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div {...fadeUp} className="relative pl-6 md:pl-8">
            <span
              className="absolute left-0 top-2 h-[min(100%,420px)] w-[3px] bg-blue-primary"
              aria-hidden
            />
            <p className="font-display text-[clamp(3rem,8vw,4.5rem)] leading-[0.95] tracking-wide text-text-dark">
              CRAFTED
              <br />
              WITH
              <br />
              PURPOSE.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {features.map((f) => (
              <div
                key={f.n}
                className="flex gap-5 border-b border-navy-deep/10 pb-10 last:border-0 last:pb-0"
              >
                <span className="font-display text-4xl text-blue-primary md:text-5xl">
                  {f.n}
                </span>
                <div>
                  <h3 className="font-condensed text-xl font-bold uppercase tracking-wide text-text-dark">
                    {f.title}
                  </h3>
                  <p className="mt-2 font-body text-base leading-relaxed text-text-dark/80">
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
