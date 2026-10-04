"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Dribbble, Shirt, CircleDot, type LucideIcon } from "lucide-react";
import { products } from "@/lib/products-data";
import type { ProductSlug } from "@/lib/products-data";
import { fadeUp, staggerContainer, fadeUpChild } from "@/lib/motion";

const iconBySlug: Record<ProductSlug, LucideIcon> = {
  "basketball-uniforms": Dribbble,
  "football-uniforms": Shirt,
  "volleyball-uniforms": CircleDot,
};

export default function Products() {
  return (
    <section id="products" className="bg-off-white py-16 md:py-24">
      <div className="mx-auto max-w-content px-4 md:px-8 lg:px-10">
        <motion.div {...fadeUp}>
          <h2 className="font-display text-5xl tracking-wide text-text-dark md:text-6xl lg:text-[64px]">
            OUR PRODUCT RANGE
          </h2>
          <div className="mt-4 h-[3px] w-32 bg-blue-primary md:w-40" />
          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-text-dark/80">
            Explore each range for capabilities, example photography, and how
            we partner on bulk programs —{" "}
            <Link
              href="/products"
              className="font-semibold text-blue-primary underline-offset-4 hover:text-blue-accent hover:underline"
            >
              view all products
            </Link>
            .
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {products.map((p) => {
            const Icon = iconBySlug[p.slug];
            const thumb = p.gallery[0];
            return (
              <motion.article
                key={p.slug}
                variants={fadeUpChild}
                className="group flex flex-col overflow-hidden border border-transparent bg-navy-deep text-left transition duration-300 hover:-translate-y-1.5 hover:border-blue-primary"
                style={{ borderRadius: "4px" }}
              >
                <div className="relative aspect-[4/3] bg-white">
                  <Image
                    src={thumb.src}
                    alt={thumb.alt}
                    fill
                    className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent"
                    aria-hidden
                  />
                  <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center bg-navy-deep/80 backdrop-blur-sm" style={{ borderRadius: "4px" }}>
                    <Icon
                      className="h-7 w-7 text-blue-accent transition-transform duration-300 group-hover:scale-105"
                      strokeWidth={1.25}
                      aria-hidden
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl tracking-wide text-white md:text-[28px]">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-white/75 md:text-base">
                    {p.shortDesc}
                  </p>
                  <Link
                    href={`/products/${p.slug}`}
                    className="mt-6 inline-flex font-condensed text-sm font-semibold uppercase tracking-wide text-blue-accent transition hover:text-white"
                  >
                    → Learn More
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
