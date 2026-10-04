export const PRODUCT_SLUGS = [
  "basketball-uniforms",
  "football-uniforms",
  "volleyball-uniforms",
] as const;

export type ProductSlug = (typeof PRODUCT_SLUGS)[number];

export interface ProductGalleryItem {
  src: string;
  alt: string;
}

export interface Product {
  slug: ProductSlug;
  title: string;
  shortDesc: string;
  metaDescription: string;
  intro: string;
  paragraphs: string[];
  highlights: string[];
  gallery: ProductGalleryItem[];
}

export const products: Product[] = [
  {
    slug: "basketball-uniforms",
    title: "Basketball Uniforms",
    shortDesc: "Sleeveless jerseys and court shorts — custom team kits.",
    metaDescription:
      "Custom basketball uniforms from KMM Sports — sleeveless jerseys and shorts manufactured in Sialkot, Pakistan for clubs and brands.",
    intro:
      "Court-ready basketball sets with breathable meshes, sharp numbering, and sublimation or cut-and-sew decoration built for club and retail programs.",
    paragraphs: [
      "We produce sleeveless jersey and short combinations with reinforced seams, moisture-wicking fabrics, and paneling that supports bold team branding.",
      "From youth to senior grading, we lock colors, trims, and logo placements so every reorder matches your first bulk run.",
    ],
    highlights: [
      "Sleeveless jersey + short sets",
      "Sublimation or cut-and-sew options",
      "Number and logo size grading",
      "Club and retail-ready finishing",
    ],
    gallery: [
      {
        src: "/images/products/basketball-uniforms/01.jpg",
        alt: "Black and gold KMM basketball uniform number 10",
      },
      {
        src: "/images/products/basketball-uniforms/02.jpg",
        alt: "Black and red KMM basketball uniform number 23",
      },
      {
        src: "/images/products/basketball-uniforms/03.jpg",
        alt: "White and navy KMM basketball uniform with basketball crest",
      },
      {
        src: "/images/products/basketball-uniforms/04.jpg",
        alt: "Black and teal KMM basketball uniform number 24",
      },
      {
        src: "/images/products/basketball-uniforms/05.jpg",
        alt: "Black and purple KMM basketball uniform number 15",
      },
    ],
  },
  {
    slug: "football-uniforms",
    title: "Football Uniforms",
    shortDesc: "Match kits — jerseys, shorts, socks for the pitch.",
    metaDescription:
      "Custom football kits from KMM Sports — jerseys, shorts, and socks engineered for match day, manufactured in Sialkot, Pakistan.",
    intro:
      "Full football kit programs for clubs, academies, and brands that need consistent fit, durable fabrics, and sharp pitch presence.",
    paragraphs: [
      "We produce match sets with moisture-wicking poly blends, reinforced seams, and paneling options that support bold branding and numbering.",
      "Jersey, short, and sock programs are graded together so colors and trims stay locked across youth and senior sizes.",
    ],
    highlights: [
      "Jersey, short, and sock kits",
      "Match-weight performance fabrics",
      "Sublimation or cut-and-sew decoration",
      "Club and academy bulk programs",
    ],
    gallery: [
      {
        src: "/images/products/football-uniforms/01.jpg",
        alt: "Black and gold KMM football kit with jersey, shorts, socks, and cleats",
      },
    ],
  },
  {
    slug: "volleyball-uniforms",
    title: "Volleyball Uniforms",
    shortDesc: "Fitted short-sleeve kits built for the court.",
    metaDescription:
      "Custom volleyball uniforms from KMM Sports — fitted jerseys and shorts manufactured in Sialkot, Pakistan for teams and brands.",
    intro:
      "Volleyball sets designed for movement — fitted short-sleeve jerseys and athletic shorts with clean crest placement and durable stretch fabrics.",
    paragraphs: [
      "We build form-fitting tops and coordinated shorts that hold color through intense play, with sublimation artwork aligned across seams.",
      "Programs cover club, school, and private-label ranges with size curves tuned for athletic builds.",
    ],
    highlights: [
      "Fitted short-sleeve jersey sets",
      "Stretch performance fabrics",
      "Crest and number placement options",
      "Bulk team and private-label runs",
    ],
    gallery: [
      {
        src: "/images/products/volleyball-uniforms/01.jpg",
        alt: "Black and teal KMM volleyball uniform number 10",
      },
      {
        src: "/images/products/volleyball-uniforms/02.jpg",
        alt: "White and purple KMM volleyball uniform number 6",
      },
      {
        src: "/images/products/volleyball-uniforms/03.jpg",
        alt: "Navy and cyan KMM volleyball uniform number 12",
      },
      {
        src: "/images/products/volleyball-uniforms/04.jpg",
        alt: "Black and pink KMM volleyball uniform number 8",
      },
      {
        src: "/images/products/volleyball-uniforms/05.jpg",
        alt: "Red and black KMM volleyball uniform number 3",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): ProductSlug[] {
  return [...PRODUCT_SLUGS];
}
