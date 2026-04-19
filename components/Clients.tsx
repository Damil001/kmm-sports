"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const brands = [
  "APEX ATHLETIC",
  "NORTHLANE FC",
  "RIVERSIDE UNITED",
  "STEEL CITY RUGBY",
  "GLOBAL SPORTS CO",
  "SUMMIT LEAGUE",
  "COASTLINE CRICKET",
  "VERTEX PERFORMANCE",
];

export default function Clients() {
  const row = [...brands, ...brands];

  return (
    <section className="overflow-hidden border-y border-navy-deep/10 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-10">
        <motion.div {...fadeUp}>
          <h2 className="font-display text-4xl tracking-wide text-text-dark md:text-5xl">
            TRUSTED BY TEAMS WORLDWIDE
          </h2>
          <div className="mt-4 h-[3px] w-32 bg-blue-primary md:w-40" />
        </motion.div>
      </div>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max gap-8 marquee-track">
          {row.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-20 w-48 shrink-0 items-center justify-center border border-navy-deep/15 bg-off-white font-condensed text-xs font-bold uppercase tracking-widest text-navy-deep/50 transition duration-300 hover:border-blue-primary hover:text-blue-primary"
              style={{ borderRadius: "4px" }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
