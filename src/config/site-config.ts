export type InstagramPost = {
  url: string;
  type: "lesson" | "review";
  title: string;
  description?: string;
};

// Add real published Reels or posts here. Keep the array empty until real
// links are known — do not put placeholder URLs.
const INSTAGRAM_POSTS: readonly InstagramPost[] = [];

export type SeatPrice = {
  seat: number;
  priceSom: number;
};

// Exact per-seat prices for the 25-seat main group. The step between seats
// is not uniform, so the values are listed explicitly — do not derive them
// from a formula.
const MAIN_GROUP_SEAT_PRICES: readonly SeatPrice[] = [
  { seat: 1, priceSom: 5000 },
  { seat: 2, priceSom: 5400 },
  { seat: 3, priceSom: 5800 },
  { seat: 4, priceSom: 6200 },
  { seat: 5, priceSom: 6700 },
  { seat: 6, priceSom: 7100 },
  { seat: 7, priceSom: 7500 },
  { seat: 8, priceSom: 7900 },
  { seat: 9, priceSom: 8300 },
  { seat: 10, priceSom: 8800 },
  { seat: 11, priceSom: 9200 },
  { seat: 12, priceSom: 9600 },
  { seat: 13, priceSom: 10000 },
  { seat: 14, priceSom: 10400 },
  { seat: 15, priceSom: 10800 },
  { seat: 16, priceSom: 11200 },
  { seat: 17, priceSom: 11700 },
  { seat: 18, priceSom: 12100 },
  { seat: 19, priceSom: 12500 },
  { seat: 20, priceSom: 12900 },
  { seat: 21, priceSom: 13300 },
  { seat: 22, priceSom: 13800 },
  { seat: 23, priceSom: 14200 },
  { seat: 24, priceSom: 14600 },
  { seat: 25, priceSom: 15000 },
];

export const siteConfig = {
  name: "Теңдик",
  tagline: "Мечиттеги Куран курсу",
  metadataTitle: "Теңдик — Балдар үчүн Куран үйрөнүү курсу",
  metadataDescription:
    "Мечитте ишемби жана жекшемби күндөрү өтүүчү балдар үчүн Куран, тажвид, дуа, даарат жана намаз үйрөтүү курсу.",

  minimumStudents: MAIN_GROUP_SEAT_PRICES.length,
  registeredStudents: 0,

  pricing: {
    programDurationMonths: 9,
    seatPrices: MAIN_GROUP_SEAT_PRICES,
    afterLaunch: {
      monthlySom: 2500,
      threeMonthsAdvanceSom: 6000,
    },
  },

  contact: {
    phoneDisplay: "+996 998 08 38 28",
    phoneTel: "+996998083828",
    whatsappNumber: "996998083828",
  },

  location: {
    mosqueName: "Кара-Кулжа мечити",
    addressShort: "Теңдик ж/м, Бишкек",
    address:
      "Красный строитель турак жай массиви, 2а/3, Теңдик ж/м, Биринчи Май району, Бишкек",
    mapUrl: "https://go.2gis.com/shyy0",
  },

  social: {
    instagram: {
      handle: "@muslimkids.media",
      profileUrl: "https://www.instagram.com/muslimkids.media/",
      posts: INSTAGRAM_POSTS,
    },
  },

  courseDays: ["Ишемби", "Жекшемби"] as const,
} as const;

export type SiteConfig = typeof siteConfig;

// The next free seat in the main group, or null once all seats are taken.
// registeredStudents is the single source of truth for how many seats are
// already occupied.
export function getNextSeatPrice(): SeatPrice | null {
  return (
    siteConfig.pricing.seatPrices[siteConfig.registeredStudents] ?? null
  );
}

export function getMainGroupPriceRange(): { minSom: number; maxSom: number } {
  const values = siteConfig.pricing.seatPrices.map((s) => s.priceSom);
  return { minSom: Math.min(...values), maxSom: Math.max(...values) };
}
