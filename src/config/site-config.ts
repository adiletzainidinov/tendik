export type InstagramPost = {
  url: string;
  type: "lesson" | "review";
  title: string;
  description?: string;
};

// Add real published Reels or posts here. Keep the array empty until real
// links are known — do not put placeholder URLs.
const INSTAGRAM_POSTS: readonly InstagramPost[] = [];

export const siteConfig = {
  name: "Теңдик",
  tagline: "Мечиттеги Куран курсу",
  metadataTitle: "Теңдик — Балдар үчүн Куран үйрөнүү курсу",
  metadataDescription:
    "Мечитте ишемби жана жекшемби күндөрү өтүүчү балдар үчүн Куран, тажвид, дуа, даарат жана намаз үйрөтүү курсу.",

  minimumStudents: 25,
  registeredStudents: 0,

  priceSom: 10000,
  paymentPeriodLabel: "",

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
