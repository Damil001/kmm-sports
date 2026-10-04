export const PRODUCT_SLUGS = [
  "basketball-uniforms",
  "football-uniforms",
  "volleyball-uniforms",
  "hoodies",
  "cargo-trousers",
  "varsity-jackets",
  "shirts",
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
  {
    slug: "hoodies",
    title: "Hoodies",
    shortDesc: "Custom team and lifestyle hoodies — fleece and French terry.",
    metaDescription:
      "Custom KMM Sports hoodies — branded pullover hoodies for teams, clubs, and private-label programs, manufactured in Sialkot, Pakistan.",
    intro:
      "Warm-up and lifestyle hoodies built for teams and brands — stable fleece hands, clean logo placement, and colorways locked for bulk reorders.",
    paragraphs: [
      "We produce pullover hoodies with kangaroo pockets, ribbed cuffs and hems, and embroidery or print decoration to match your brand book.",
      "From solid team colors to two-tone varsity looks, we align size curves and finishing so travel kits and retail drops feel like one collection.",
    ],
    highlights: [
      "Pullover hoodies with kangaroo pocket",
      "Fleece and French terry options",
      "Embroidery, print, or patch branding",
      "Team and private-label bulk programs",
    ],
    gallery: [
      {
        src: "/images/products/hoodies/01.jpg",
        alt: "Black KMM varsity pullover hoodie",
      },
      {
        src: "/images/products/hoodies/02.jpg",
        alt: "Charcoal and cream two-tone KMM hoodie",
      },
      {
        src: "/images/products/hoodies/03.jpg",
        alt: "Navy KMM EST. 2024 pullover hoodie",
      },
      {
        src: "/images/products/hoodies/04.jpg",
        alt: "Olive green KMM hoodie with sleeve branding",
      },
      {
        src: "/images/products/hoodies/05.jpg",
        alt: "Heather grey KMM pullover hoodie",
      },
    ],
  },
  {
    slug: "cargo-trousers",
    title: "Cargo Trousers",
    shortDesc: "Durable cargo pants for teams, sideline, and lifestyle.",
    metaDescription:
      "Custom KMM Sports cargo trousers — durable utility pants with branded detailing, manufactured in Sialkot, Pakistan.",
    intro:
      "Heavy-duty cargo trousers built for movement and wear — reinforced construction, utility pockets, and clean KMM branding for team and retail programs.",
    paragraphs: [
      "We produce straight-leg cargo pants with flap pockets, belt loops, and reinforced knee areas suited to coaching, sideline, and casual athletic use.",
      "Colorways and logo placements can be locked to your brand book for consistent bulk reorders across black, navy, olive, khaki, and custom dyes.",
    ],
    highlights: [
      "Multi-pocket cargo construction",
      "Reinforced knees and durable twill",
      "Print or patch branding options",
      "Team and private-label bulk runs",
    ],
    gallery: [
      {
        src: "/images/products/cargo-trousers/01.jpg",
        alt: "Black KMM cargo trousers",
      },
      {
        src: "/images/products/cargo-trousers/02.jpg",
        alt: "Navy KMM cargo trousers",
      },
      {
        src: "/images/products/cargo-trousers/03.jpg",
        alt: "Matte black KMM cargo trousers with reinforced knees",
      },
      {
        src: "/images/products/cargo-trousers/04.jpg",
        alt: "Olive green KMM cargo trousers",
      },
      {
        src: "/images/products/cargo-trousers/05.jpg",
        alt: "Khaki KMM cargo trousers",
      },
    ],
  },
  {
    slug: "varsity-jackets",
    title: "Varsity Jackets",
    shortDesc: "Classic letterman jackets with custom patches and trims.",
    metaDescription:
      "Custom KMM Sports varsity jackets — letterman-style jackets with patches, rib trim, and private-label options, manufactured in Sialkot, Pakistan.",
    intro:
      "Letterman-style varsity jackets for teams and brands — wool or knit bodies, contrast sleeves, chenille or embroidered patches, and ribbed stripe trims.",
    paragraphs: [
      "We build snap-front varsity jackets with welt pockets, custom chest and sleeve lettering, and color-blocked sleeves to match your program identity.",
      "From school teams to lifestyle drops, we align patch placement, rib colors, and sizing so bulk runs stay consistent reorder after reorder.",
    ],
    highlights: [
      "Wool/knit body with contrast sleeves",
      "Chenille, embroidery, or print patches",
      "Striped rib collar, cuffs, and hem",
      "Team and private-label bulk programs",
    ],
    gallery: [
      {
        src: "/images/products/varsity-jackets/01.jpg",
        alt: "Black KMM varsity jacket with Better Days Ahead script",
      },
      {
        src: "/images/products/varsity-jackets/02.jpg",
        alt: "Black KMM varsity jacket with Dream Work Achieve text",
      },
      {
        src: "/images/products/varsity-jackets/03.jpg",
        alt: "Black and cream KMM varsity jacket Keep Moving Forward",
      },
      {
        src: "/images/products/varsity-jackets/04.jpg",
        alt: "Navy and cream KMM EST. 2024 varsity jacket",
      },
      {
        src: "/images/products/varsity-jackets/05.jpg",
        alt: "Maroon and black KMM varsity jacket",
      },
    ],
  },
  {
    slug: "shirts",
    title: "Shirts",
    shortDesc: "Graphic tees and all-over print shirts for teams and lifestyle.",
    metaDescription:
      "Custom KMM Sports shirts — graphic tees and sublimation-printed t-shirts manufactured in Sialkot, Pakistan for brands and clubs.",
    intro:
      "Crew-neck tees built for retail and team drops — solid bases, bold placement graphics, and all-over sublimation prints with color locked for bulk.",
    paragraphs: [
      "We produce short-sleeve shirts with clean crew necks and print pipelines that keep artwork sharp across seams, sleeves, and reorders.",
      "Whether you need motivational graphics, tropical AOPs, or sport-tech slash designs, we match fabric handfeel and sizing to your program.",
    ],
    highlights: [
      "Crew-neck short-sleeve tees",
      "Placement print and all-over sublimation",
      "Cotton, blends, and performance options",
      "Private-label and team bulk runs",
    ],
    gallery: [
      {
        src: "/images/products/shirts/01.jpg",
        alt: "Black and white brushstroke graphic t-shirt",
      },
      {
        src: "/images/products/shirts/02.jpg",
        alt: "Tropical leaf all-over print t-shirt",
      },
      {
        src: "/images/products/shirts/03.jpg",
        alt: "Black t-shirt with blue lightning graphic",
      },
      {
        src: "/images/products/shirts/04.jpg",
        alt: "Black and gold marble chevron t-shirt",
      },
      {
        src: "/images/products/shirts/05.jpg",
        alt: "White Rise Above mountain graphic t-shirt",
      },
      {
        src: "/images/products/shirts/06.jpg",
        alt: "Black and red slash graphic t-shirt",
      },
      {
        src: "/images/products/shirts/07.jpg",
        alt: "Black Limitless cracked marble t-shirt",
      },
      {
        src: "/images/products/shirts/08.jpg",
        alt: "Focus stay positive graphic t-shirt",
      },
      {
        src: "/images/products/shirts/09.jpg",
        alt: "Navy slash halftone graphic t-shirt",
      },
      {
        src: "/images/products/shirts/10.jpg",
        alt: "Believe In Yourself smoke graphic t-shirt",
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
