"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp } from "@/lib/motion";

const steps = [
  {
    title: "Design & Consultation",
    desc: "Share your vision, we design it.",
  },
  {
    title: "Material Sourcing",
    desc: "Premium fabrics selected to spec.",
  },
  {
    title: "Cutting & Sublimation",
    desc: "Precision cutting + vivid heat printing.",
  },
  {
    title: "Stitching & Assembly",
    desc: "Expert tailoring on industrial machines.",
  },
  {
    title: "QC & Inspection",
    desc: "Multi-stage quality checks.",
  },
  {
    title: "Packaging & Export",
    desc: "Packed and shipped to your door.",
  },
];

export default function Manufacturing() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="manufacturing"
      className="bg-off-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-10">
        <motion.div {...fadeUp}>
          <h2 className="font-display text-5xl tracking-wide text-text-dark md:text-6xl">
            HOW WE BUILD YOUR KIT
          </h2>
          <div className="mt-4 h-[3px] w-32 bg-blue-primary md:w-40" />
        </motion.div>

        {/* Desktop */}
        <div className="relative mt-16 hidden lg:block">
          <div
            className="absolute left-0 right-0 top-[22px] h-[3px] bg-blue-primary/35"
            aria-hidden
          />
          <div className="grid grid-cols-6 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                className="relative flex flex-col items-start text-left"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className="z-10 flex h-11 w-11 shrink-0 items-center justify-center border-2 border-blue-primary bg-off-white font-display text-xl text-blue-primary"
                  style={{ borderRadius: "4px" }}
                >
                  {i + 1}
                </div>
                <h3 className="mt-6 font-condensed text-lg font-bold uppercase leading-snug tracking-wide text-text-dark">
                  {s.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-text-dark/75">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="mt-10 flex flex-col gap-2 lg:hidden">
          {steps.map((s, i) => {
            const isOpen = open === i;
            return (
              <div
                key={s.title}
                className="border border-navy-deep/10 bg-white"
                style={{ borderRadius: "4px" }}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-blue-primary font-display text-lg text-white" style={{ borderRadius: "4px" }}>
                      {i + 1}
                    </span>
                    <span className="font-condensed text-base font-bold uppercase tracking-wide text-text-dark">
                      {s.title}
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-blue-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-navy-deep/10 px-4 pb-4 pt-3 font-body text-sm leading-relaxed text-text-dark/80">
                        {s.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
