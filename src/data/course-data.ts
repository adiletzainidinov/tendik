import {
  BookOpenText,
  Feather,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  IceCream2,
  Award,
  BookMarked,
  Brush,
  CalendarDays,
  Droplets,
  Gift,
  Medal,
  MoonStar,
  Package,
  Repeat,
  ShieldCheck,
  Star,
  Sun,
  Users,
  UtensilsCrossed,
} from "lucide-react";

import type {
  BenefitItem,
  CurriculumItem,
  ExpenseItem,
  FaqItem,
  LearningStep,
  MotivationItem,
  ScheduleItem,
} from "@/types/course";
import { getMainGroupPriceRange, siteConfig } from "@/config/site-config";
import { formatSom } from "@/lib/format";

const GROUP_SIZE = siteConfig.minimumStudents;
const PRICE_RANGE = getMainGroupPriceRange();
const AFTER_LAUNCH = siteConfig.pricing.afterLaunch;

export const CURRICULUM: readonly CurriculumItem[] = [
  {
    id: "muallim-saani",
    title: "Муаллим Саани",
    description: "Куран окууга даярдоо баскычы.",
    points: [
      "Араб тамгаларын үйрөнүү",
      "Туура айтылышы",
      "Куран окууга акырындык менен даярдануу",
    ],
    icon: Feather,
  },
  {
    id: "quran-reading",
    title: "Куран окуу",
    description: "Ар бир окуучунун деңгээлине көңүл бөлүп окуйбуз.",
    points: [
      "Туура окууга үйрөтөбүз",
      "Акырындык менен өнүктүрүү",
      "Жеке мамиле",
    ],
    icon: BookOpenText,
  },
  {
    id: "tajweed",
    title: "Тажвид",
    description: "Куранды туура окуунун эрежелери.",
    points: [
      "Негизги эрежелер",
      "Тамгалардын так айтылышы",
      "Окуу эрежелерин сактоо",
    ],
    icon: BookMarked,
  },
  {
    id: "memorization",
    title: "Куранды жаттоо",
    description: "Сүрө жана аяттарды акырындык менен жаттайбыз.",
    points: [
      "Сүрөлөр менен аяттарды жаттоо",
      "Кайталоо жана бекемдөө",
      "Үйрөнүлгөндү текшерүү",
    ],
    icon: Repeat,
  },
  {
    id: "duas",
    title: "Дуалар",
    description: "Күндөлүк дуаларды үйрөнөбүз.",
    points: [
      "Негизги күндөлүк дуалар",
      "Качан окулаарын түшүнүү",
      "Акырындык менен жаттоо",
    ],
    icon: HandHeart,
  },
  {
    id: "wudu-namaz",
    title: "Даарат жана намаз",
    description: "Дааратты жана намазды туура үйрөнүү.",
    points: [
      "Даарат алуу тартиби",
      "Намаздын тартиби",
      "Көп кетирилүүчү каталарды оңдойбуз",
    ],
    icon: Droplets,
  },
  {
    id: "tarbia",
    title: "Исламдык тарбия",
    description: "Балдарды жакшы адеп-ахлакка үйрөтөбүз.",
    points: [
      "Сый-урмат",
      "Тазалык",
      "Тартип",
      "Жоопкерчилик",
      "Айланадагыларга жакшы мамиле",
    ],
    icon: HeartHandshake,
  },
];

export const BENEFITS: readonly BenefitItem[] = [
  {
    id: "quran-foundation",
    title: "Куран окууга бекем негиз",
    description:
      "Муаллим Сани аркылуу араб тамгаларын таанып, туура айтууга жана Куран окууга даярданат.",
    icon: BookOpenText,
  },
  {
    id: "wudu-namaz-practice",
    title: "Даарат жана намаз практикасы",
    description:
      "Мугалимдин көрсөтүүсү менен даараттын жана намаздын негизги тартибин практикада кайталайт.",
    icon: Droplets,
  },
  {
    id: "daily-duas",
    title: "Күнүмдүк керектүү дубалар",
    description:
      "Дубаларды туура айтып, маанисин түшүнүп жана кайсы учурда окулаарын үйрөнөт.",
    icon: HandHeart,
  },
  {
    id: "iman-islam",
    title: "Ыйман жана Исламдын негиздери",
    description:
      "Ыймандын алты шартын, Исламдын беш шартын жана негизги ибадаттарды жашына ылайык түшүнөт.",
    icon: MoonStar,
  },
  {
    id: "adep-responsibility",
    title: "Жакшы адеп жана жоопкерчилик",
    description:
      "Ата-энеге урмат, чынчылдык, тазалык, сабыр, аманат жана башкаларга жакшы мамиле темаларын өтөт.",
    icon: HeartHandshake,
  },
  {
    id: "parent-report",
    title: "Ата-энеге айлык отчет",
    description:
      "Ар айдын аягында баланын окуусу, дубалары, намазы, адеби жана кийинки максаты боюнча маалымат берилет.",
    icon: ShieldCheck,
  },
];

export const SCHEDULE: readonly ScheduleItem[] = [
  {
    id: "days",
    title: "Ишемби жана жекшемби",
    description: "Дем алыш күндөрү мечитте өтөт.",
    icon: CalendarDays,
  },
  {
    id: "start",
    title: "Бешим намазынан кийин (≈ 14:00)",
    description: "Сабак Бешим намазынан кийин башталат.",
    icon: Sun,
  },
  {
    id: "end",
    title: "Шам намазына 30 мүнөт калганда",
    description: "Балдар караңгыга чейин үйүнө жетишет.",
    icon: MoonStar,
  },
  {
    id: "duration",
    title: "3–6 саат (мезгилге жараша)",
    description: "Жайында узун, кышында кыска.",
    icon: Sun,
  },
];

export const LEARNING_PATH: readonly LearningStep[] = [
  {
    id: "letters",
    title: "Тамгаларды үйрөнүү",
    description: "Араб тамгаларын тааныйбыз.",
  },
  {
    id: "muallim",
    title: "Муаллим Саани",
    description: "Куран окууга негиз бекитебиз.",
  },
  {
    id: "correct-reading",
    title: "Туура окуу",
    description: "Тамгаларды туура айтабыз.",
  },
  {
    id: "tajweed-rules",
    title: "Тажвид эрежелери",
    description: "Куран окуу эрежелерин үйрөнөбүз.",
  },
  {
    id: "quran-reading",
    title: "Куран окуу",
    description: "Куранды бетинен түз окууга акырындык менен үйрөтөбүз.",
  },
  {
    id: "memorization",
    title: "Сүрө жана аяттарды жаттоо",
    description: "Сүрө жана аяттарды акырындык менен жаттатабыз.",
  },
];

export const MOTIVATION: readonly MotivationItem[] = [
  {
    id: "daily-icecream",
    title: "Ар бир окуу күнү",
    description: "Ар бир окуу күнү балдарга балмуздак берилет.",
    icon: IceCream2,
  },
  {
    id: "weekly-top",
    title: "Аптанын мыкты үч окуучусу",
    description: "Аптанын үч мыкты окуучусуна кошумча балмуздак берилет.",
    icon: Star,
  },
  {
    id: "monthly-top",
    title: "Айдын мыкты окуучусу",
    description: "Айдын мыкты окуучусуна грамота жана белек тапшырылат.",
    icon: Medal,
  },
  {
    id: "quran-start",
    title: "Куран окууга өтүү",
    description: "Куран окууга өткөн окуучуга атайын грамота жана белек берилет.",
    icon: Gift,
  },
  {
    id: "cleanliness",
    title: "Тазалыкка тарбия",
    description:
      "Балдар мечиттин тазалыгына салым кошуп, жоопкерчиликке үйрөнүшөт.",
    icon: Brush,
  },
  {
    id: "team",
    title: "Биргелешип иштөө",
    description: "Балдар чоңдордун көзөмөлү астында биргелешип аракет кылышат.",
    icon: Users,
  },
];

export const EXPENSES: readonly ExpenseItem[] = [
  {
    id: "teachers",
    title: "Устаздардын эмгек акысы",
    icon: GraduationCap,
  },
  {
    id: "teacher-food",
    title: "Сабак күндөрү устаздарга тамак-аш",
    icon: UtensilsCrossed,
  },
  {
    id: "materials",
    title: "Окуу китептери жана материалдары",
    icon: BookMarked,
  },
  {
    id: "icecream",
    title: "Балдарга ар бир окуу күнү балмуздак",
    icon: IceCream2,
  },
  {
    id: "icecream-top",
    title: "Аптанын мыкты үч окуучусуна кошумча балмуздак",
    icon: Star,
  },
  {
    id: "certificates",
    title: "Грамоталар жана белектер",
    icon: Award,
  },
  {
    id: "monthly-award",
    title: "Айдын мыкты окуучусуна сыйлык",
    icon: Medal,
  },
  {
    id: "quran-award",
    title: "Куран окууга өткөн окуучуларга сыйлык",
    icon: Gift,
  },
  {
    id: "org",
    title: "Курстун уюштуруучулук чыгымдары",
    icon: Package,
  },
];

export const FAQ: readonly FaqItem[] = [
  {
    id: "start",
    question: "Окуу качан башталат?",
    answer: `Алгач ${GROUP_SIZE} баладан турган негизги топ чогултулат. Сабактар негизги топ толук чогулгандан кийин башталат.`,
  },
  {
    id: "days",
    question: "Сабактар кайсы күндөрү өтөт?",
    answer: "Сабактар ишемби жана жекшемби күндөрү мечитте өтөт.",
  },
  {
    id: "duration",
    question: "Сабак канча убакытка созулат?",
    answer:
      "Сабак Бешим намазынан кийин (≈ 14:00) башталып, Шам намазына 30 мүнөт калганда бүтөт. Мезгилге жараша 3–6 саат созулат: жайында узун, кышында кыска.",
  },
  {
    id: "what",
    question: "Балдар эмнелерди үйрөнүшөт?",
    answer:
      "Муаллим Саани, Куран окуу, тажвид, Куран жаттоо, дуалар, даарат жана намаз үйрөтүлөт.",
  },
  {
    id: "price",
    question: "Катышуу акысы канча?",
    answer: `Алгачкы ${GROUP_SIZE} окуучу үчүн баа катталуу кезегине жараша аныкталат: баалар ${formatSom(PRICE_RANGE.minSom)}дон башталып, ${formatSom(PRICE_RANGE.maxSom)}го чейин жетет. Негизги топ толгондон кийин тариф — 1 айга ${formatSom(AFTER_LAUNCH.monthlySom)} же 3 айга алдын ала төлөгөндө ${formatSom(AFTER_LAUNCH.threeMonthsAdvanceSom)}.`,
  },
  {
    id: "price-why-different",
    question: `Эмне үчүн алгачкы ${GROUP_SIZE} орунда баалар ар башка?`,
    answer:
      "Алгачкы катталган ата-энелер топтун толушун жана сабактардын башталышын көбүрөөк күтүшөт, долбоорго биринчилерден болуп ишеним көрсөтүп, курстун башталышына жардам беришет. Ошондуктан эрте катталган орундар арзаныраак.",
  },
  {
    id: "join-after-full",
    question: "Негизги топ толгондон кийин кошулса болобу?",
    answer: `Ооба. Сабактар башталгандан кийин 1 айга ${formatSom(AFTER_LAUNCH.monthlySom)} же 3 айга алдын ала ${formatSom(AFTER_LAUNCH.threeMonthsAdvanceSom)} төлөп кошулууга болот.`,
  },
  {
    id: "beginner",
    question: "Балам Куран окуганды билбесе катыша алабы?",
    answer:
      "Ооба. Окутуу баланын азыркы деңгээлине жараша башталат — тамга билбегендер да кабыл алынат.",
  },
  {
    id: "cleaning",
    question: "Мечитти тазалоого балдар катышабы?",
    answer:
      "Ооба, жашына ылайыктуу жеңил тарбиялык тазалык иштерине чоңдордун көзөмөлү астында катышышат.",
  },
  {
    id: "refund",
    question: "Төлөм кайтарылып бериле турган учурлар барбы?",
    answer:
      "Ооба. Сабактар баштала электе төлөнгөн сумманын 20% кармалып, калган 80% кайтарылат. Сабактар башталгандан кийин окулган убакыт үчүн төлөм кайтарылбайт — калган, пайдаланылбаган мөөнөткө туура келген сумманын 50% гана кайтарылат.",
  },
  {
    id: "report",
    question: "Акчанын кайда жумшалганы боюнча маалымат берилеби?",
    answer:
      "Ооба. Ата-энелерге төлөмдөрдүн кайда жана кандай жумшалганы боюнча толук отчет берилет.",
  },
];

