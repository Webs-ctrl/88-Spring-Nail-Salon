import { ServiceItem, ReviewItem, GalleryItem, InspirationCategory, ArtistProfile } from './types';

export const SALON_INFO = {
  name: "88 Spring Nail & Spa",
  brandQuote: "Where beauty meets calm.",
  tagline: "Relax. Refresh. Reimagine Your Nails.",
  description: "A modern, luxury-leaning nail studio in Queens, NY. We specialize in precision nail art, healthy chemical-reduced Gel-X extensions, and organic spa therapies inside a peaceful, Zen-inspired atmosphere.",
  address: "Queens, NY (Near Hillcrest / Fresh Meadows)",
  phone: "(718) 555-0188",
  email: "hello@88springnails.com",
  instagram: "@88SpringNailSalon",
  hours: [
    { day: "Friday", time: "10:00 AM - 7:30 PM" },
    { day: "Saturday", time: "10:00 AM - 7:30 PM" },
    { day: "Sunday", time: "10:00 AM - 6:30 PM" },
    { day: "Monday", time: "10:00 AM - 7:30 PM" },
    { day: "Tuesday", time: "10:00 AM - 7:30 PM" },
    { day: "Wednesday", time: "10:00 AM - 7:30 PM" },
    { day: "Thursday", time: "10:00 AM - 7:30 PM" }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  // Manicures
  {
    id: "m-classic",
    name: "Classic Zen Manicure",
    description: "Nail shaping, cuticle care, light lavender hydration massage, and a professional high-shine regular polish finish.",
    priceStart: 25,
    durationMin: 35,
    category: "manicure",
    features: ["Organic jojoba oil", "Hot towel hydration", "Precision filing"]
  },
  {
    id: "m-gel",
    name: "Gel Polish Manicure",
    description: "Our signature chip-free gel manicure using zero-odor LED cured formulas that protect the natural bed. Includes standard cuticle care.",
    priceStart: 45,
    durationMin: 45,
    category: "manicure",
    popular: true,
    features: ["Up to 3 weeks durabilty", "Soak-off included", "Nutritive base coat"]
  },
  {
    id: "m-gelx",
    name: "Gel-X Soft Gel Extensions",
    description: "Premium full-coverage soft gel extensions. Flexible, light, durable, and causes zero damage to your natural nail plate.",
    priceStart: 110,
    durationMin: 90,
    category: "extension",
    popular: true,
    features: ["Zero harsh drill damage", "Custom length & shape", "Includes gel color"]
  },
  
  // Pedicures
  {
    id: "p-spa",
    name: "Spring Signature Spa Pedicure",
    description: "Relax in our high-end massage chairs. Includes warm dead sea salt soak, gentle sugar scrub, nail care, and client-favorite 10-min foot rub.",
    priceStart: 48,
    durationMin: 50,
    category: "pedicure",
    features: ["Dead sea mineral salts", "Massage chair access", "Peppermint foot cooling lotion"]
  },
  {
    id: "p-deluxe",
    name: "Deluxe Herbal Massage Pedicure",
    description: "A decadent, stress-relieving treatment featuring a warm clay therapeutic mask, warm paraffin wrap, and extra hot stone foot massage.",
    priceStart: 75,
    durationMin: 70,
    category: "pedicure",
    features: ["Warm hot stones", "Paraffin cocoon wrap", "Custom botanical oil scents"]
  },

  // Nail Art
  {
    id: "a-minimalist",
    name: "Minimalist Fine Line Art (Single Accord)",
    description: "Subtle elements such as sleek dots, single abstract lines, micro hearts, or delicate metallic highlights on selective accent nails.",
    priceStart: 15,
    durationMin: 15,
    category: "art",
    features: ["Hand-painted with micro brush", "Up to 4 accent nails", "Custom colors"]
  },
  {
    id: "a-detailed",
    name: "Custom Detailed Nail Art Setting",
    description: "Bespoke custom designs including layered French colors, retro waves, chrome layers, ombre, and hand-painted botanicals on all nails.",
    priceStart: 40,
    durationMin: 40,
    category: "art",
    features: ["Intricate pattern painting", "3D charms or chrome options", "Artist consultation"]
  },

  // Repairs & Soak-offs
  {
    id: "r-soak",
    name: "Safe Soft-Gel Soak-Off & Nail Feed",
    description: "Careful removal of previous gel without drilling. Finished with intensive organic vitamin oil infusion for nail bed recovery.",
    priceStart: 15,
    durationMin: 20,
    category: "repair",
    features: ["Non-drying acetone formula", "Nail keratin feed", "Includes polish-free buffer"]
  },
  {
    id: "r-repair",
    name: "Sculptured Nail Repair & Reinforce",
    description: "Fast structural repair for chipped, cracked, or broken individual nails using light hybrid-acrylic resin.",
    priceStart: 8,
    durationMin: 10,
    category: "repair",
    features: ["Seamless blending", "Reinforced fiber mesh", "Fast set time"]
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Vanessa Rodriguez",
    role: "Local Guide",
    stars: 5,
    relativeTime: "a year ago",
    text: "I love this nail salon so much, I am so lucky to know it and the wonderful people in it. I have been to many nail salons in Queens and nothing compares to the meticulous attention and hospitality here. The space is extremely serene and clean.",
    tags: ["Gel Manicure", "Detail-Oriented", "Serene Space"],
    nailPhotoUrl: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "rev-2",
    author: "Qiu Zheng",
    role: "Regular Guest",
    stars: 5,
    relativeTime: "10 months ago",
    text: "Absolutely love this nail salon! The technicians are skilled, gentle, and really listen to what you want. The space is clean, relaxing, and they don't rush. The massage beds and beautiful warm lighting make me feel so pampered after a long day of work.",
    tags: ["Friendly Technicians", "No Drilling Damage", "Relaxing Massage"],
    nailPhotoUrl: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "rev-3",
    author: "Sabrina Castro",
    role: "Verified Client",
    stars: 5,
    relativeTime: "Edited 1 year ago",
    text: "Obsessed with my nails! I needed to book an appointment asap and they completely saved the day. This was my first time trying Gel-X extensions, and standard salons usually over-drill my nails. Here, they were so patient, helping me choose the perfect length and giving me beautiful metallic waves with a tiny heart.",
    tags: ["Gel-X Extensions", "Silver Metallic Art", "Extremely Patient"],
    nailPhotoUrl: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "rev-4",
    author: "Karen Lopez",
    role: "Client since 2024",
    stars: 5,
    relativeTime: "a year ago",
    text: "My go-to nail salon for 2 years now! They are incredibly patient and kind. They spend an ample amount of time on your nails to make sure they are absolutely perfect. Highly recommend Jessie for custom hand-painted layouts and fine lines!",
    tags: ["2+ Year Regular", "Jessie Artist", "Flawless Filing"],
    nailPhotoUrl: "https://images.unsplash.com/photo-1610992015732-2449b76344cc?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "rev-5",
    author: "Olivia Carson",
    role: "Walk-In Client",
    stars: 5,
    relativeTime: "9 months ago",
    text: "They were so nice. I walked in without an appointment and they were able to accommodate me for a great nude manicure in about an hour. They even explained the transparent pricing list upfront so there were no surprise fees.",
    tags: ["Easy Walk-In", "Transparent Pricing", "Taupe Glossy Gel"],
    nailPhotoUrl: "https://images.unsplash.com/photo-1632345031435-8797b2d58045?q=80&w=400&auto=format&fit=crop"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Sweet Cherry Blossom Gel",
    category: "Custom Fine Art",
    description: "An elegant, hand-painted floral set showcasing pink petals, micro heart dots, and custom spring green leaf highlights on a soft nude base.",
    photoUrl: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop",
    badge: "Most Requested"
  },
  {
    id: "gal-2",
    title: "Vibrant Azure Sky",
    category: "Classic Gel Manicure",
    description: "A bright, clean statement of pure, high-gloss sky blue gel polish, featuring custom cuticle hydration and natural squoval shaping.",
    photoUrl: "https://images.unsplash.com/photo-1610992015732-2449b76344cc?q=80&w=600&auto=format&fit=crop",
    badge: "Trending Color"
  },
  {
    id: "gal-3",
    title: "Silver Orbit Waves & Charm",
    category: "Gel-X Extensions",
    description: "Meticulous long-almond extensions carrying custom layered silver metallic abstract orbit waves alongside a delicate miniature chrome heart charm overlay.",
    photoUrl: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=600&auto=format&fit=crop",
    badge: "Artist Special"
  },
  {
    id: "gal-4",
    title: "Grounded Espresso Mineral Toast",
    category: "Organic Gel Polish",
    description: "An incredibly sophisticated, natural-looking high-gloss warm taupe lacquer. Perfect for a cozy, clean, after-work aesthetic.",
    photoUrl: "https://images.unsplash.com/photo-1632345031435-8797b2d58045?q=80&w=600&auto=format&fit=crop",
    badge: "Zen Natural"
  },
  {
    id: "gal-5",
    title: "Hand-Framed Double Outlined French",
    category: "Precision Detailing",
    description: "A modern twist on a classic. High-clear natural nail base styled with ultra-thin, hand-painted double red border curves outlining the edge.",
    photoUrl: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=600&auto=format&fit=crop",
    badge: "Detail Master"
  },
  {
    id: "gal-6",
    title: "Festive Holiday Glitter & Grinch Art",
    category: "Bespoke Hand Painting",
    description: "Playful holiday theme pairing crisp gold glitter bases with meticulously hand-drawn whimsical green grinch characters on accent nails.",
    photoUrl: "https://images.unsplash.com/photo-1605264964528-06403738d6df?q=80&w=600&auto=format&fit=crop",
    badge: "Holiday Favorite"
  }
];

export const ARTISTS_DATA: ArtistProfile[] = [
  {
    id: "art-jessie",
    name: "Jessie",
    role: "Senior Nail Art Director",
    strengths: ["Custom Hand-painting", "Metallic/Chrome Linework", "3D Art Charm Accentuation"],
    bio: "With over 8 years of luxury nail care experience, Jessie has a deep love for fine detail and floral geometry. Clients praise her absolute patience and calming presence.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "art-chloe",
    name: "Chloe",
    role: "Gel-X Soft Extension Master",
    strengths: ["Damage-Free Extensions", "Flawless Coffin & Almond Shaping", "Safe Polish Chemistry"],
    bio: "Chloe is a specialist in contemporary soft extensions and botanical care. She places client nail health first, avoiding drilling in favor of gentle nutrient prep.",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "art-hannah",
    name: "Hannah",
    role: "Creative Nail Designer & Spa Therapist",
    strengths: ["Clean Cuticle Reconstruction", "Aromatherapy Massage", "Modern French Tips"],
    bio: "Hannah excels in providing fully relaxing spa pedicure therapies and minimalist nail styles. She is the favorite choice for long, calm weekend post-work recovery.",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
  }
];

export const INSPIRED_CATEGORIES_DATA: InspirationCategory[] = [
  {
    id: "cat-minimal",
    name: "Minimalist Zen",
    tagline: "Elegant restraint. Clean, quiet grace.",
    description: "Perfect for office wear and high-fashion minimalism. Soft nude, bone-white bases, neat line indicators, and single accents of gold or jet-black points.",
    colors: [
      { name: "Sashiko Ivory", hex: "#FAF9F6" },
      { name: "Dusty Sand", hex: "#EAE0D5" },
      { name: "Clean Black", hex: "#222525" }
    ],
    styleTips: [
      "Select a squoval shape for maximum natural reinforcement.",
      "Ask for high-gloss, double-baked top finishes to repel friction.",
      "Pairs wonderfully with delicate stackable gold rings."
    ],
    sampleImages: [
      "https://images.unsplash.com/photo-1632345031435-8797b2d58045?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610992015732-2449b76344cc?q=80&w=400&auto=format&fit=crop"
    ]
  },
  {
    id: "cat-pastel",
    name: "Soft Pastel Flora",
    tagline: "Fresh botanical vibes. Spring-time elegance.",
    description: "Re-creates the tranquil spirit of our salon logo. Soft lavender watercolor details, hand-painted cherry blossoms, and creamy gradients of sage, lilac, and peach.",
    colors: [
      { name: "Spring Lavender", hex: "#EAE4F0" },
      { name: "Soft Clover", hex: "#D8E2DC" },
      { name: "Blossom Pink", hex: "#FFE5EC" }
    ],
    styleTips: [
      "A soft round layout coordinates best with organic leaf vines.",
      "Add a matte clear finish to two accent nails to create gorgeous hand-crafted texture contrast."
    ],
    sampleImages: [
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=400&auto=format&fit=crop"
    ]
  },
  {
    id: "cat-bold",
    name: "Statement Chrome & Waves",
    tagline: "Bold textures. Cosmic reflective metallic.",
    description: "An eye-catching theme full of fluid metallic streams, holographic silver waves, geometric hearts, and long sculpting Gel-X designs.",
    colors: [
      { name: "Molten Chrome", hex: "#E2E8F0" },
      { name: "Obsidian Dusk", hex: "#1D191F" },
      { name: "Liquid gold", hex: "#D4AF37" }
    ],
    styleTips: [
      "The almond extension shape elongates hands beautifully.",
      "Add miniature starburst charms and gold accents to catch standard dinner candlelight."
    ],
    sampleImages: [
      "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=400&auto=format&fit=crop"
    ]
  }
];

export const TIME_SLOTS = [
  "10:00 AM",
  "11:15 AM",
  "12:30 PM",
  "1:45 PM",
  "3:00 PM",
  "4:15 PM",
  "5:30 PM",
  "6:30 PM (Zen After-Work Slot)"
];
