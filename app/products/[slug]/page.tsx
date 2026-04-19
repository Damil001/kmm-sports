import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProduct,
  getAllProductSlugs,
  type ProductSlug,
} from "@/lib/products-data";
import ProductRangeGallery from "@/components/ProductRangeGallery";
import { ChevronRight } from "lucide-react";

type Props = {
  params: { slug: string };
};

export function generateStaticParams(): { slug: ProductSlug }[] {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProduct(params.slug);
  if (!product) {
    return { title: "Product | KMM Sports" };
  }
  return {
    title: `${product.title} | KMM Sports`,
    description: product.metaDescription,
  };
}

export default function ProductRangePage({ params }: Props) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const hero = product.gallery[0];

  return (
    <div className="bg-off-white pt-24">
      <div className="border-b border-navy-deep/10 bg-white">
        <div className="mx-auto max-w-content px-4 py-6 md:px-8 lg:px-10">
          <nav
            className="flex flex-wrap items-center gap-2 font-condensed text-xs font-semibold uppercase tracking-wider text-text-dark/55 md:text-sm"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="transition hover:text-blue-primary">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-blue-primary" aria-hidden />
            <Link
              href="/products"
              className="transition hover:text-blue-primary"
            >
              Products
            </Link>
            <ChevronRight className="h-4 w-4 text-blue-primary" aria-hidden />
            <span className="text-text-dark">{product.title}</span>
          </nav>
        </div>
      </div>

      <section className="relative min-h-[420px] md:min-h-[480px]">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/75 to-navy-deep/40"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-content flex-col justify-end px-4 py-16 md:min-h-[480px] md:px-8 md:py-20 lg:px-10">
          <p className="font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-blue-accent">
            KMM Sports — {product.title}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-wide text-white md:text-6xl lg:text-[72px]">
            {product.title.toUpperCase()}
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-white/80">
            {product.intro}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-24 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <h2 className="font-display text-4xl tracking-wide text-text-dark md:text-5xl">
                CAPABILITIES
              </h2>
              <div className="mt-4 h-[3px] w-24 bg-blue-primary" />
              <ul className="mt-8 space-y-4 font-body text-base leading-relaxed text-text-dark/85">
                {product.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-2 h-[3px] w-6 shrink-0 bg-blue-primary"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/#contact"
                className="mt-10 inline-flex min-h-[52px] items-center justify-center bg-blue-primary px-8 font-condensed text-sm font-bold uppercase tracking-wide text-white transition hover:bg-blue-accent"
                style={{ borderRadius: "4px" }}
              >
                Request a sample
              </Link>
              <Link
                href="/products"
                className="mt-4 block font-condensed text-sm font-semibold uppercase tracking-wide text-blue-primary hover:text-blue-accent"
              >
                ← All product ranges
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-6 font-body text-base leading-relaxed text-text-dark/85">
              {product.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <h2 className="mt-14 font-display text-3xl tracking-wide text-text-dark md:text-4xl">
              EXAMPLE WORK
            </h2>
            <div className="mt-4 h-[3px] w-20 bg-blue-primary" />
            <p className="mt-4 font-body text-sm text-text-dark/65">
              Representative photography for styling and production scale — your
              branding and specs are applied to order.
            </p>
            <div className="mt-10">
              <ProductRangeGallery items={product.gallery} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
