export const siteConfig = {
  name: "QoranLearn",
  tagline: "Мечиттеги Куран курсу",
  metadataTitle: "QoranLearn — Балдар үчүн Куран үйрөнүү курсу",
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

  courseDays: ["Ишемби", "Жекшемби"] as const,
} as const;

export type SiteConfig = typeof siteConfig;
