const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

const toAbsoluteImage = (img) => {
  if (!img) return "";
  if (img.startsWith("http")) return img;
  return `${FRONTEND_URL}${img}`;
};

export const buildProductId = (name) =>
  String(name || "")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const catalog = [
  // Home
  { name: "Golden Aura", unitAmount: 1230, image: "/re-new.png" },
  { name: "Aureline Twist", unitAmount: 1550, image: "/ring-one.png" },
  { name: "Queen’s Grace", unitAmount: 1800, image: "/re-new-1.png" },
  { name: "Aurora Flare", unitAmount: 1240, image: "/ear-one.png" },

  // Collections - Signature + Bangles + Rings
  { name: "Royal Gold Set", unitAmount: 2040, image: "/orighover.png" },
  { name: "Elite Gold Set", unitAmount: 2420, image: "/secimg.png" },
  { name: "Premium Gold Set", unitAmount: 6040, image: "/thirdimg.png" },
  { name: "Prime Gold Set", unitAmount: 1240, image: "/forthimg.png" },
  { name: "Gold Deluxe Set", unitAmount: 7940, image: "/fifthimg.png" },
  { name: "Ultimate Gold Set", unitAmount: 4040, image: "/sixthimg.png" },
  { name: "Classic Gold Set", unitAmount: 3440, image: "/eightimg.png" },
  { name: "Classic Cut", unitAmount: 2440, image: "/bang1.png" },
  { name: "Royal Line", unitAmount: 1320, image: "/bang2.jpg" },
  { name: "Prime Gold", unitAmount: 3240, image: "/bang3.png" },
  { name: "Elite Band", unitAmount: 9240, image: "/bang4.png" },
  { name: "Pure Grace", unitAmount: 5640, image: "/bang5.png" },
  { name: "Golden Edge", unitAmount: 6040, image: "/bang6.png" },
  { name: "Heritage Band", unitAmount: 5440, image: "/bang7.jpg" },
  { name: "Fine Craft", unitAmount: 2440, image: "/bang8.jpg" },
  { name: "Aurum", unitAmount: 140, image: "/rings.1.png" },
  { name: "Regal", unitAmount: 920, image: "/rings.2.png" },
  { name: "Luxe", unitAmount: 740, image: "/rings.3.png" },
  { name: "Nova", unitAmount: 4240, image: "/rings.4.png" },
  { name: "Eterna", unitAmount: 340, image: "/rings.5.png" },
  { name: "Crown", unitAmount: 940, image: "/rings.6.jpg" },
  { name: "Vero", unitAmount: 140, image: "/rings.7.png" },
  { name: "Solace", unitAmount: 240, image: "/rings.8.png" },

  // Men's - Forever bond + watches
  { name: "Aurum Elite", unitAmount: 150000, image: "/menc.1.png" },
  { name: "Regal Classic", unitAmount: 180000, image: "/mens.2.png" },
  { name: "Luxe Bond", unitAmount: 120000, image: "/mens.3.png" },
  { name: "Nova Spark", unitAmount: 250000, image: "/mens.4.png" },
  { name: "Eterna Gold", unitAmount: 300000, image: "/mens.5.png" },
  { name: "Crown Royal", unitAmount: 450000, image: "/mens.6.png" },
  { name: "Vero Silver", unitAmount: 110000, image: "/mens.7.png" },
  { name: "Solace Gem", unitAmount: 220000, image: "/mens.8.png" },
  { name: "Glimmer Rose", unitAmount: 95000, image: "/mens.9.png" },
  { name: "Royal Velvet", unitAmount: 500000, image: "/mens.10.png" },
  { name: "Luna Mist", unitAmount: 160000, image: "/mens.11.png" },
  { name: "Aura Glow", unitAmount: 140000, image: "/mens.re.png" },
  { name: "Chronograph Gold", unitAmount: 125000, image: "/re-wth-1.png" },
  { name: "Silver Executive", unitAmount: 89000, image: "/re-wth-2.png" },
  { name: "Midnight Stealth", unitAmount: 110000, image: "/re-wth-3.png" },
  { name: "Rose Gold Classic", unitAmount: 95000, image: "/rew-4.webp" },
  { name: "Ocean Diver Spec", unitAmount: 140000, image: "/rew-5.jfif" },
  { name: "Titanium Sport", unitAmount: 75000, image: "/rew-6.png" },
  { name: "Leather Heritage", unitAmount: 62000, image: "/rew-7.png" },
  { name: "Royal Skeleton", unitAmount: 250000, image: "/rew-8.png" },
  { name: "Royal Skeleton V2", unitAmount: 250000, image: "/wth-9.webp" },
];

export const productCatalogSeeds = catalog.map((product) => ({
  productId: buildProductId(product.name),
  name: product.name,
  unitAmount: product.unitAmount,
  image: toAbsoluteImage(product.image),
  currency: "usd",
  isActive: true,
}));
