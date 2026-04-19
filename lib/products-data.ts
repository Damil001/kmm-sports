export const PRODUCT_SLUGS = [
  "football-kits",
  "cricket-kits",
  "training-wear",
  "sublimation-apparel",
  "goalkeeper-kits",
  "oem-private-label",
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
    slug: "football-kits",
    title: "Football Kits",
    shortDesc: "Jerseys, shorts, socks — match-ready performance.",
    metaDescription:
      "Custom football kits from KMM Sports — jerseys, shorts, and socks engineered for match day, manufactured in Sialkot, Pakistan.",
    intro:
      "Full kit programs built for clubs, academies, and brands that need consistent fit, durable fabrics, and sharp pitch presence.",
    paragraphs: [
      "We produce match and training sets with moisture-wicking poly blends, reinforced seams, and paneling options that support bold branding and numbering.",
      "From youth sizes to senior cuts, we align necklines, sock heights, and short lengths to your tech pack — then lock colors and trims for repeat bulk runs.",
    ],
    highlights: [
      "Match & training weight fabrics",
      "Sublimation or cut-and-sew decoration",
      "Sock, short, and jersey size grading",
      "Club and retail-ready folding options",
    ],
    gallery: [
      {
        src: "/images/products/football-kits/01.jpg",
        alt: "Football players in team kits on the pitch",
      },
      {
        src: "/images/products/football-kits/02.jpg",
        alt: "Close-up of a football jersey fabric and crest detail",
      },
      {
        src: "/images/products/football-kits/03.jpg",
        alt: "Stacked football jerseys in team colors",
      },
      {
        src: "/images/products/football-kits/04.jpg",
        alt: "Athletes training in sportswear kits",
      },
    ],
  },
  {
    slug: "cricket-kits",
    title: "Cricket Whites & Colored Kits",
    shortDesc: "Traditional whites and bold limited editions.",
    metaDescription:
      "Cricket whites and colored limited-edition kits — breathable fabrics and tailored fits from KMM Sports, Sialkot.",
    intro:
      "Cricket demands comfort through long innings. We build whites that stay crisp and colored kits that carry sponsor and league artwork cleanly.",
    paragraphs: [
      "Our programs cover classic whites, colored T20 styles, and training layers with attention to collar stand, sleeve pitch, and trouser taper.",
      "Fabric selections emphasize breathability and shape retention so players stay comfortable from the first over to the last.",
    ],
    highlights: [
      "Whites and colored match sets",
      "Long-session comfort fabrics",
      "Sponsor panel and embroidery placement",
      "Trousers, shirts, and sweaters coordinated",
    ],
    gallery: [
      {
        src: "/images/products/cricket-kits/01.jpg",
        alt: "Cricket match in progress on a green field",
      },
      {
        src: "/images/products/cricket-kits/02.jpg",
        alt: "Cricket player in white uniform",
      },
      {
        src: "/images/products/cricket-kits/03.jpg",
        alt: "Cricket equipment and team colors",
      },
      {
        src: "/images/products/cricket-kits/04.jpg",
        alt: "Team sports apparel laid out",
      },
    ],
  },
  {
    slug: "training-wear",
    title: "Training Wear",
    shortDesc: "Tracksuits, hoodies, joggers built to move.",
    metaDescription:
      "Training wear manufacturing — tracksuits, hoodies, joggers, and layers from KMM Sports for teams and brands.",
    intro:
      "Layered systems for travel, warm-ups, and gym work — built with stretch panels, stable zips, and fleece or lightweight knit options.",
    paragraphs: [
      "We coordinate tops and bottoms so palettes, trims, and logos read as one collection across your roster and retail drops.",
      "Specs can follow your patterns or our house blocks, with size curves tuned for athletic builds.",
    ],
    highlights: [
      "Tracksuits and zip hoodies",
      "Tapered joggers and training pants",
      "Fleece, interlock, and ripstop options",
      "Embroidery and heat-transfer branding",
    ],
    gallery: [
      {
        src: "/images/products/training-wear/01.jpg",
        alt: "Group fitness training in athletic wear",
      },
      {
        src: "/images/products/training-wear/02.jpg",
        alt: "Athlete in hoodie and training outfit",
      },
      {
        src: "/images/products/training-wear/03.jpg",
        alt: "Gym training session with sportswear",
      },
      {
        src: "/images/products/training-wear/04.jpg",
        alt: "Running and outdoor training apparel",
      },
    ],
  },
  {
    slug: "sublimation-apparel",
    title: "Sublimation Printed Apparel",
    shortDesc: "Vivid heat-printed graphics with lasting color.",
    metaDescription:
      "Sublimation-printed sportswear — vivid all-over graphics and durable color from KMM Sports manufacturing.",
    intro:
      "All-over prints, gradients, and photographic artwork without the hand-feel of heavy inks — ideal for kits, fanwear, and event uniforms.",
    paragraphs: [
      "We control color pipelines from file prep to press so panels align at seams and repeats stay consistent in bulk.",
      "Poly-base fabrics are matched to your handfeel and performance targets — from featherlight match weights to sturdier fan jerseys.",
    ],
    highlights: [
      "All-over and placement sublimation",
      "Color management for bulk repeats",
      "Poly blends tuned for your sport",
      "Fanwear and event collections",
    ],
    gallery: [
      {
        src: "/images/products/sublimation-apparel/01.jpg",
        alt: "Colorful athletic jersey with bold graphics",
      },
      {
        src: "/images/products/sublimation-apparel/02.jpg",
        alt: "Sports event crowd and team colors",
      },
      {
        src: "/images/products/sublimation-apparel/03.jpg",
        alt: "Basketball court and athletic uniforms",
      },
      {
        src: "/images/products/sublimation-apparel/04.jpg",
        alt: "Dynamic sports photography and kit styling",
      },
    ],
  },
  {
    slug: "goalkeeper-kits",
    title: "Goalkeeper Kits",
    shortDesc: "Padded cuts and breathable fabrics for the net.",
    metaDescription:
      "Goalkeeper kits — padded jerseys, shorts, and gloves programs manufactured by KMM Sports in Sialkot.",
    intro:
      "Dedicated cuts for keepers: room for protection, grip-friendly sleeves, and fabrics that handle dives and turf abrasion.",
    paragraphs: [
      "We build padded tops and shorts that integrate foam placement to your pattern, with venting mapped to high-heat zones.",
      "Programs can include full kit, socks, and accessory coordination for retail or team issue.",
    ],
    highlights: [
      "Padded jersey and short programs",
      "Abrasion-aware fabric faces",
      "Long-sleeve and short-sleeve options",
      "Coordinated socks and accessories",
    ],
    gallery: [
      {
        src: "/images/products/goalkeeper-kits/01.jpg",
        alt: "Soccer goal and stadium view",
      },
      {
        src: "/images/products/goalkeeper-kits/02.jpg",
        alt: "Football goalkeeper in action",
      },
      {
        src: "/images/products/goalkeeper-kits/03.jpg",
        alt: "Soccer ball and pitch detail",
      },
      {
        src: "/images/products/goalkeeper-kits/04.jpg",
        alt: "Team goalkeeper kit styling",
      },
    ],
  },
  {
    slug: "oem-private-label",
    title: "Custom OEM / Private Label",
    shortDesc: "Your brand, our craft — end-to-end production.",
    metaDescription:
      "OEM and private-label sportswear manufacturing — design through delivery with KMM Sports, Sialkot, Pakistan.",
    intro:
      "Bring your label and tech packs — we handle sourcing, sampling, bulk production, QC, and export documentation.",
    paragraphs: [
      "Our team works as an extension of your product group: timelines, testing protocols, and packaging can be tailored to your retail or team customer.",
      "Whether you are launching a new line or scaling an existing one, we align capacity and quality gates to your roadmap.",
    ],
    highlights: [
      "Tech pack and spec development",
      "Material sourcing and lab dips",
      "Bulk production and QC",
      "Export packing and documentation",
    ],
    gallery: [
      {
        src: "/images/products/oem-private-label/01.jpg",
        alt: "Textile manufacturing floor with machinery",
      },
      {
        src: "/images/products/oem-private-label/02.jpg",
        alt: "Industrial sewing and assembly line",
      },
      {
        src: "/images/products/oem-private-label/03.jpg",
        alt: "Fabric rolls and production materials",
      },
      {
        src: "/images/products/oem-private-label/04.jpg",
        alt: "Quality control and garment finishing",
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
