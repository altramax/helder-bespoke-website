// Centralized content for Helder Bespoke.
// Image sources: Unsplash (royalty-free), sized via the standard
// images.unsplash.com query params for responsive delivery.

export type Collection = {
  id: string;
  name: string;
  tag: string;
  description: string;
  image: string;
  price: string;
};

export const collections: Collection[] = [
  {
    id: "agbada-royale",
    name: "Agbada Royale",
    tag: "Native — Heritage",
    description:
      "The flagship flowing robe, hand-embroidered and cut full for ceremony and standing. Built on a structured inner kaftan so the drape holds all day.",
    image:
      "https://images.unsplash.com/photo-1622445275576-721325763afe?q=80&w=1400&auto=format&fit=crop",
    price: "From ₦450,000",
  },
  {
    id: "senator-fuse",
    name: "Senator Fuse",
    tag: "Native — Modern",
    description:
      "A close-cut senator silhouette finished with a contrast collar stitch. The everyday native, sharpened for the boardroom and the owambe alike.",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1400&auto=format&fit=crop",
    price: "From ₦185,000",
  },
  {
    id: "savile-three-piece",
    name: "The Savile Three-Piece",
    tag: "International — Suiting",
    description:
      "A full-canvas three-piece built on a hand-padded chest roll. Half-lined for warm climates, fully structured through the shoulder.",
    image:
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=1400&auto=format&fit=crop",
    price: "From ₦320,000",
  },
  {
    id: "kaftan-noir",
    name: "Kaftan Noir",
    tag: "Native — Evening",
    description:
      "Minimal piping, maximal fabric. A slim kaftan in raw silk for evening occasions where restraint is its own statement.",
    image:
      "https://images.unsplash.com/photo-1633655442168-859d20c20517?q=80&w=1400&auto=format&fit=crop",
    price: "From ₦210,000",
  },
  {
    id: "double-breasted-lagos",
    name: "Double-Breasted Lagos",
    tag: "International — Suiting",
    description:
      "Six-button, peak lapel, built with extra room through the back for movement. Tropical wool, cut for the harmattan and the boardroom both.",
    image:
      "https://images.unsplash.com/photo-1593030103066-0093718efeb9?q=80&w=1400&auto=format&fit=crop",
    price: "From ₦340,000",
  },
  {
    id: "the-tie-bar",
    name: "The Tie Bar",
    tag: "Accessories",
    description:
      "Hand-rolled silk ties and pocket squares, woven exclusively for Helder in small batches. The final stitch on a finished look.",
    image:
      "https://images.unsplash.com/photo-1589756823695-278bc923f962?q=80&w=1400&auto=format&fit=crop",
    price: "From ₦35,000",
  },
];

export type ProcessStep = {
  id: string;
  label: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "01",
    label: "Measure",
    title: "Twenty-six points, taken by hand",
    description:
      "Every commission starts with a sit-down fitting — in our Lagos atelier or wherever you are. We record twenty-six measurements, not the six a ready-to-wear house relies on.",
  },
  {
    id: "02",
    label: "Select",
    title: "Fabric, weight, and weather",
    description:
      "From aso-oke and George to tropical wool and Italian linen, we match fabric to climate and occasion before a single thread is cut.",
  },
  {
    id: "03",
    label: "Cut",
    title: "A pattern drafted for one body",
    description:
      "No house block, no size run. Your pattern is drafted from your measure alone, then cut by hand by a tailor who has done this for decades.",
  },
  {
    id: "04",
    label: "Stitch",
    title: "Built on the body, not the mannequin",
    description:
      "Two fittings minimum. We baste, fit, adjust, and only then close the seams — so the finished piece moves the way you do.",
  },
  {
    id: "05",
    label: "Finish",
    title: "Pressed, detailed, delivered",
    description:
      "Final pressing, hand-finished buttonholes, and a garment bag built for travel. Lagos delivery in person; everywhere else, insured shipping.",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Adebayo K.",
    role: "Groom, Lagos",
    quote:
      "My agbada held its shape from the church to the reception to 2am. Three fittings, zero regrets. People still ask who made it.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Chioma N.",
    role: "Bought for her husband",
    quote:
      "I've ordered suits from London before. The shoulder on the Helder piece sits better than any of them, and it was ready in three weeks.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Tunde O.",
    role: "Repeat client, four years",
    quote:
      "They remember my measurements, my preferences, even which buttons I like. It stopped feeling like a transaction after the first order.",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop",
  },
];

export const heroImage =
  "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=2200&auto=format&fit=crop";

export const craftImages = {
  fabric:
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop",
  hands:
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200&auto=format&fit=crop",
  measuring:
    "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1200&auto=format&fit=crop",
  detail:
    "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?q=80&w=1200&auto=format&fit=crop",
};

export const aboutImage =
  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1600&auto=format&fit=crop";
