"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = { end: number; suffix: string; label: string };

const stats: Stat[] = [
  { end: 20, suffix: "+", label: "Years of Experience" },
  { end: 500, suffix: "K+", label: "Units Produced Annually" },
  { end: 40, suffix: "+", label: "Countries Exported To" },
  { end: 100, suffix: "%", label: "Quality Guaranteed" },
];

function useCountUp(end: number, enabled: boolean, durationMs = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(end * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setValue(end);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [enabled, end, durationMs]);

  return value;
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.end, active);
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 px-4 py-8 text-center md:px-8 md:py-10">
      <span className="font-display text-5xl text-white md:text-6xl lg:text-7xl">
        {count}
        {stat.suffix}
      </span>
      <span className="max-w-[220px] font-body text-sm text-white/70 md:text-base">
        {stat.label}
      </span>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (inView) setActive(true);
  }, [inView]);

  return (
    <motion.section
      ref={ref}
      className="border-y border-white/10 bg-[#0D1B2E]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-content flex-col divide-y divide-blue-primary/50 md:flex-row md:divide-x md:divide-y-0">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} active={active} />
        ))}
      </div>
    </motion.section>
  );
}
