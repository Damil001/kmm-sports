import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { products } from "@/lib/products-data";

export const metadata: Metadata = {
  title: "Product Range | KMM Sports",
  description:
    "Explore KMM Sports product ranges — basketball, football, and volleyball uniforms manufactured in Sialkot, Pakistan.",
};

export default function ProductsIndexPage() {
  return (
    <div className="bg-off-white pt-24">
      <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-24 lg:px-10">
        <p className="font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-blue-primary">
          Product range
        </p>
        <h1 className="mt-3 font-display text-5xl tracking-wide text-text-dark md:text-6xl lg:text-[64px]">
          OUR PRODUCT RANGE
        </h1>
        <div className="mt-4 h-[3px] w-32 bg-blue-primary md:w-40" />
        <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-text-dark/80">
          Precision-built athletic apparel for international brands, clubs, and
          wholesalers — browse each category for capabilities and example work.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const thumb = p.gallery[0];
            return (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex flex-col overflow-hidden border border-navy-deep/10 bg-white text-left transition duration-300 hover:-translate-y-1.5 hover:border-blue-primary"
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
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-2xl tracking-wide text-text-dark md:text-[28px]">
                    {p.title}
                  </h2>
                  <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-text-dark/75 md:text-base">
                    {p.shortDesc}
                  </p>
                  <span className="mt-6 font-condensed text-sm font-semibold uppercase tracking-wide text-blue-primary transition group-hover:text-blue-accent">
                    View range →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 border-t border-navy-deep/10 pt-10">
          <p className="font-body text-text-dark/80">
            Need samples or a custom program?{" "}
            <Link
              href="/#contact"
              className="font-semibold text-blue-primary underline-offset-4 hover:text-blue-accent hover:underline"
            >
              Request a quote
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
