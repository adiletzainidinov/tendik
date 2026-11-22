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
const MAIN_GROUP_SEAT_PRICES: readonly SeatPrice[] = Array.from({ length: 25 }, (_, i) => ({
  seat: i + 1,
  priceSom: Math.round((13000 + (4000 * i) / 24) / 100) * 100,
}));

export const siteConfig = {
  name: "Теңдик",
  tagline: "Мечиттеги Куран курсу",
  metadataTitle: "Теңдик — Балдар үчүн Куран үйрөнүү курсу",
  metadataDescription:
    "Мечитте ишемби жана жекшемби күндөрү өтүүчү балдар үчүн Куран, тажвид, дуа, даарат жана намаз үйрөтүү курсу.",

  minimumStudents: MAIN_GROUP_SEAT_PRICES.length,
  registeredStudents: 1,

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

  courseSchedule: {
    startTime: "14:00",
    startsAfterPrayer: "Бешим",
    dismissalBeforePrayer: "Шам",
    dismissalBeforePrayerMinutes: 30,
    minDurationHours: 3,
    maxDurationHours: 6,
    summerApproximateEndTime: "20:00",
  },
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
