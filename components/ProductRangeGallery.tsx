"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ProductGalleryItem } from "@/lib/products-data";
import { fadeUpChild, staggerContainer } from "@/lib/motion";

export default function ProductRangeGallery({
  items,
}: {
  items: ProductGalleryItem[];
}) {
  return (
    <motion.div
      className="grid gap-4 sm:grid-cols-2 lg:gap-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {items.map((item) => (
        <motion.figure
          key={item.src}
          variants={fadeUpChild}
          className="group relative aspect-[4/3] overflow-hidden bg-white"
          style={{ borderRadius: "4px" }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain p-3 transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.figure>
      ))}
    </motion.div>
  );
}
