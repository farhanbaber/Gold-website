export const searchIndex = [
  { keywords: ["ring", "rings", "wedding ring"], path: "/collections", hash: "collections-rings" },
  { keywords: ["set", "sets", "gold set", "bridal set"], path: "/collections", hash: "collections-signature" },
  { keywords: ["bangle", "bangles"], path: "/collections", hash: "collections-bangles" },
  { keywords: ["watch", "watches", "chronograph", "skeleton"], path: "/mens-collection", hash: "mens-watches" },
  { keywords: ["mens", "men", "forever bond"], path: "/mens-collection", hash: "mens-forever-bond" },
  { keywords: ["cart", "bag", "checkout"], path: "/cart" },
  { keywords: ["contact", "phone", "whatsapp"], path: "/contact" },
  { keywords: ["home"], path: "/" },
];

export const resolveSearchTarget = (query) => {
  const cleaned = String(query || "").toLowerCase().trim();
  if (!cleaned) return null;

  const exact = searchIndex.find((item) =>
    item.keywords.some((keyword) => cleaned === keyword)
  );
  if (exact) return exact;

  const partial = searchIndex.find((item) =>
    item.keywords.some((keyword) => cleaned.includes(keyword) || keyword.includes(cleaned))
  );
  return partial || null;
};
