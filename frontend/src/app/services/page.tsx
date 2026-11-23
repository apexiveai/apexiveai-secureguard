
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Users,
  Camera,
  Fingerprint,
  Siren,
  Wrench,
  Network,
  Building2,
  Factory,
  Hotel,
  Warehouse,
  ShoppingBag,
  Landmark,
  CheckCircle2,
  ClipboardCheck,
  Settings,
  Monitor,
  LockKeyhole,
  ChevronRight,
  Radio,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const serviceData = [
  {
    id: "guarding",
    number: "01",
    category: ["PEOPLE-BASED SECURITY", "လူအင်အားအခြေပြု လုံခြုံရေး"],
    title: ["Security Guard Services", "လုံခြုံရေးဝန်ထမ်း ဝန်ဆောင်မှုများ"],
    description: [
      "Manned guarding solutions designed around property requirements, access control procedures and operational needs.",
      "အဆောက်အအုံနှင့် ပိုင်ဆိုင်မှုလိုအပ်ချက်များ၊ ဝင်ထွက်ခွင့်ထိန်းချုပ်မှုလုပ်ငန်းစဉ်များနှင့် လုပ်ငန်းလည်ပတ်မှုလိုအပ်ချက်များအပေါ် အခြေခံထားသော လုံခြုံရေးဝန်ထမ်း ဝန်ဆောင်မှုများ။",
    ],
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1200&q=85",
    icon: Users,
    features: [
      ["Corporate and office security concepts", "ရုံးနှင့် ကုမ္ပဏီလုံခြုံရေး"],
      ["Industrial and warehouse guarding", "စက်ရုံနှင့် ဂိုဒေါင်လုံခြုံရေး"],
      ["Residential property security", "လူနေအိမ်ခြံမြေလုံခြုံရေး"],
      ["Event and visitor access support", "ပွဲအခမ်းအနားနှင့် ဧည့်သည်ဝင်ထွက်မှု ထိန်းချုပ်ရေး"],
      ["Shift and deployment planning", "တာဝန်ချိန်နှင့် ဝန်ထမ်းချထားမှု စီမံရေး"],
    ],
    href: "/security-guards",
  },
  {
    id: "cctv",
    number: "02",
    category: ["VIDEO SURVEILLANCE", "ဗီဒီယိုစောင့်ကြည့်ရေး"],
    title: ["CCTV & Smart Surveillance", "CCTV နှင့် စမတ်စောင့်ကြည့်ရေးစနစ်"],
    description: [
      "Surveillance system options that help businesses monitor premises, review incidents and improve visibility.",
      "လုပ်ငန်းခွင်နှင့် ပိုင်ဆိုင်မှုများကို စောင့်ကြည့်ခြင်း၊ ဖြစ်စဉ်များကို ပြန်လည်စစ်ဆေးခြင်းနှင့် မြင်ကွင်းစောင့်ကြည့်နိုင်မှု တိုးတက်စေရန် ကူညီပေးသည့် စောင့်ကြည့်ရေးစနစ်များ။",
    ],
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=85",
    icon: Camera,
    features: [
      ["IP and network camera systems", "IP နှင့် Network Camera စနစ်များ"],
      ["NVR and recording solutions", "NVR နှင့် ဗီဒီယိုမှတ်တမ်းစနစ်များ"],
      ["Indoor and outdoor surveillance", "အဆောက်အအုံအတွင်းနှင့် အပြင် စောင့်ကြည့်ရေး"],
      ["Remote viewing configuration", "အဝေးမှ ကြည့်ရှုနိုင်ရန် စနစ်ပြင်ဆင်ခြင်း"],
      ["Coverage planning and assessment", "ကင်မရာမြင်ကွင်း လွှမ်းခြုံမှု စီမံသုံးသပ်ခြင်း"],
    ],
    href: "/cctv-shop",
  },
  {
    id: "access",
    number: "03",
    category: ["ENTRY & IDENTITY CONTROL", "ဝင်ထွက်ခွင့်နှင့် ကိုယ်ရေးအထောက်အထား ထိန်းချုပ်ရေး"],
    title: ["Access Control Systems", "Access Control စနစ်များ"],
    description: [
      "Access management concepts for controlling entry points and defining authorised access to selected areas.",
      "သတ်မှတ်ထားသော နေရာများသို့ ဝင်ရောက်ခွင့်ကို ခွင့်ပြုထားသူများအတွက်သာ စီမံထိန်းချုပ်ပေးနိုင်သည့် Access Management စနစ်များ။",
    ],
    image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1200&q=85",
    icon: Fingerprint,
    features: [
      ["Card and PIN-based access concepts", "ကတ်နှင့် PIN အခြေပြု ဝင်ထွက်ခွင့်စနစ်"],
      ["Biometric access options", "ဇီဝအချက်အလက် အခြေပြု ဝင်ထွက်ခွင့်စနစ်"],
      ["Door access control equipment", "တံခါးဝင်ထွက်ခွင့် ထိန်းချုပ်ရေးကိရိယာများ"],
      ["Entry point configuration", "ဝင်ပေါက်များ စနစ်တကျ ပြင်ဆင်သတ်မှတ်ခြင်း"],
      ["Access event records where supported", "စနစ်က ပံ့ပိုးပါက ဝင်ထွက်မှုမှတ်တမ်းများ"],
    ],
    href: "/get-a-quote",
  },
  {
    id: "alarm",
    number: "04",
    category: ["INTRUSION DETECTION", "ကျူးကျော်ဝင်ရောက်မှု ရှာဖွေစစ်ဆေးရေး"],
    title: ["Alarm & Detection Systems", "အချက်ပေးနှင့် ရှာဖွေစစ်ဆေးရေးစနစ်များ"],
    description: [
      "Alarm and detection options intended to help identify selected security events and alert responsible personnel.",
      "သတ်မှတ်ထားသော လုံခြုံရေးဖြစ်စဉ်များကို ရှာဖွေသိရှိပြီး သက်ဆိုင်ရာတာဝန်ရှိသူများထံ အချက်ပေးနိုင်ရန် ရည်ရွယ်ထားသော စနစ်များ။",
    ],
    image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1200&q=85",
    icon: Siren,
    features: [
      ["Intrusion detection options", "ကျူးကျော်ဝင်ရောက်မှု ရှာဖွေရေးစနစ်များ"],
      ["Motion and perimeter sensors", "လှုပ်ရှားမှုနှင့် နယ်နိမိတ်အာရုံခံကိရိယာများ"],
      ["Door and window sensors", "တံခါးနှင့် ပြတင်းပေါက် အာရုံခံကိရိယာများ"],
      ["Audible alarm configurations", "အသံဖြင့် အချက်ပေးစနစ် ပြင်ဆင်ခြင်း"],
      ["Alarm system integration options", "အချက်ပေးစနစ်များ ပေါင်းစပ်ချိတ်ဆက်ခြင်း"],
    ],
    href: "/get-a-quote",
  },
  {
    id: "installation",
    number: "05",
    category: ["TECHNICAL SERVICES", "နည်းပညာဝန်ဆောင်မှုများ"],
    title: ["Installation & Configuration", "တပ်ဆင်ခြင်းနှင့် စနစ်ပြင်ဆင်ခြင်း"],
    description: [
      "Installation planning and technical configuration for selected security equipment and systems.",
      "ရွေးချယ်ထားသော လုံခြုံရေးပစ္စည်းများနှင့် စနစ်များအတွက် တပ်ဆင်ရေးအစီအစဉ်နှင့် နည်းပညာပိုင်းဆိုင်ရာ ပြင်ဆင်သတ်မှတ်မှုများ။",
    ],
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=85",
    icon: Wrench,
    features: [
      ["Site and equipment assessment", "လုပ်ငန်းခွင်နှင့် ပစ္စည်းကိရိယာများ စစ်ဆေးသုံးသပ်ခြင်း"],
      ["Camera positioning and installation", "ကင်မရာနေရာချထားခြင်းနှင့် တပ်ဆင်ခြင်း"],
      ["Cable routing and connectivity", "ကေဘယ်လ်လမ်းကြောင်းနှင့် ချိတ်ဆက်မှုများ"],
      ["Device and system configuration", "စက်ပစ္စည်းနှင့် စနစ်များ ပြင်ဆင်သတ်မှတ်ခြင်း"],
      ["Installation handover planning", "တပ်ဆင်ပြီးစီးမှု လွှဲပြောင်းရေးအစီအစဉ်"],
    ],
    href: "/get-a-quote",
  },
  {
    id: "maintenance",
    number: "06",
    category: ["SYSTEM SUPPORT", "စနစ်ထိန်းသိမ်းရေးနှင့် ပံ့ပိုးမှု"],
    title: ["Maintenance & Technical Support", "ပြုပြင်ထိန်းသိမ်းရေးနှင့် နည်းပညာပံ့ပိုးမှု"],
    description: [
      "Maintenance and troubleshooting options to help keep agreed security equipment and systems operating as intended.",
      "သဘောတူညီထားသော လုံခြုံရေးပစ္စည်းများနှင့် စနစ်များကို ရည်ရွယ်ထားသည့်အတိုင်း ဆက်လက်အသုံးပြုနိုင်ရန် ပြုပြင်ထိန်းသိမ်းခြင်းနှင့် ပြဿနာဖြေရှင်းခြင်း ဝန်ဆောင်မှုများ။",
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85",
    icon: Settings,
    features: [
      ["Equipment inspection", "ပစ္စည်းကိရိယာများ စစ်ဆေးခြင်း"],
      ["Camera and recording checks", "ကင်မရာနှင့် မှတ်တမ်းစနစ်များ စစ်ဆေးခြင်း"],
      ["Connectivity troubleshooting", "ချိတ်ဆက်မှုဆိုင်ရာ ပြဿနာများ ဖြေရှင်းခြင်း"],
      ["System configuration review", "စနစ်ပြင်ဆင်မှုများ ပြန်လည်စစ်ဆေးခြင်း"],
      ["Maintenance recommendations", "ထိန်းသိမ်းရေးဆိုင်ရာ အကြံပြုချက်များ"],
    ],
    href: "/get-a-quote",
  },
  {
    id: "integration",
    number: "07",
    category: ["CONNECTED SECURITY", "ပေါင်းစပ်ချိတ်ဆက်ထားသော လုံခြုံရေး"],
    title: ["Integrated Security Solutions", "ပေါင်းစပ်လုံခြုံရေးဖြေရှင်းချက်များ"],
    description: [
      "A coordinated approach combining guarding, surveillance, access control and selected security technologies.",
      "လုံခြုံရေးဝန်ထမ်းများ၊ စောင့်ကြည့်ရေးစနစ်များ၊ ဝင်ထွက်ခွင့်ထိန်းချုပ်ရေးနှင့် ရွေးချယ်ထားသော လုံခြုံရေးနည်းပညာများကို ပေါင်းစပ်အသုံးပြုသည့် ဖြေရှင်းချက်များ။",
    ],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85",
    icon: Network,
    features: [
      ["Multi-system security planning", "စနစ်မျိုးစုံပါဝင်သော လုံခြုံရေးအစီအစဉ်"],
      ["CCTV and access control concepts", "CCTV နှင့် ဝင်ထွက်ခွင့်ထိန်းချုပ်ရေး"],
      ["Centralised monitoring options", "ဗဟိုမှ စောင့်ကြည့်ထိန်းချုပ်နိုင်သည့် စနစ်များ"],
      ["Security infrastructure coordination", "လုံခြုံရေးအခြေခံအဆောက်အအုံများ ညှိနှိုင်းပေါင်းစပ်ခြင်း"],
      ["Project-specific system design", "စီမံကိန်းအလိုက် စနစ်ဒီဇိုင်းရေးဆွဲခြင်း"],
    ],
    href: "/get-a-quote",
  },
];

const industryData = [
  [Building2, "Corporate Offices", "ရုံးချုပ်နှင့် ကုမ္ပဏီရုံးများ", "Office buildings and business premises", "ရုံးအဆောက်အအုံများနှင့် လုပ်ငန်းပိုင်နေရာများ"],
  [Factory, "Industrial Facilities", "စက်မှုလုပ်ငန်းဆိုင်ရာ အဆောက်အအုံများ", "Factories and production environments", "စက်ရုံများနှင့် ထုတ်လုပ်ရေးလုပ်ငန်းခွင်များ"],
  [ShoppingBag, "Retail & Commercial", "လက်လီနှင့် စီးပွားရေးလုပ်ငန်းများ", "Shops, malls and commercial properties", "ဆိုင်များ၊ Shopping Mall များနှင့် စီးပွားရေးအဆောက်အအုံများ"],
  [Hotel, "Hotels & Hospitality", "ဟိုတယ်နှင့် ဧည့်ဝန်ဆောင်မှုလုပ်ငန်းများ", "Guest-facing and operational facilities", "ဧည့်သည်ဝန်ဆောင်မှုနှင့် လုပ်ငန်းလည်ပတ်ရာ နေရာများ"],
  [Warehouse, "Warehousing & Logistics", "ဂိုဒေါင်နှင့် သယ်ယူပို့ဆောင်ရေးလုပ်ငန်းများ", "Storage and distribution environments", "သိုလှောင်ရေးနှင့် ဖြန့်ဖြူးရေးလုပ်ငန်းခွင်များ"],
  [Landmark, "Institutions", "အဖွဲ့အစည်းနှင့် ဌာနဆိုင်ရာများ", "Institutional and public facilities", "အဖွဲ့အစည်းဆိုင်ရာနှင့် အများပြည်သူဆိုင်ရာ အဆောက်အအုံများ"],
] as const;

const stepData = [
  ["Tell Us Your Requirements", "သင့်လိုအပ်ချက်များကို ပြောပြပါ", "Share your property type, location, security concerns and preferred services.", "ပိုင်ဆိုင်မှုအမျိုးအစား၊ တည်နေရာ၊ လုံခြုံရေးဆိုင်ရာ စိုးရိမ်ချက်များနှင့် လိုချင်သောဝန်ဆောင်မှုများကို မျှဝေပေးပါ။"],
  ["Review the Site", "လုပ်ငန်းခွင်ကို သုံးသပ်ပါ", "Discuss the site conditions, coverage needs, equipment and operating requirements.", "လုပ်ငန်းခွင်အခြေအနေ၊ လွှမ်းခြုံမှုလိုအပ်ချက်၊ ပစ္စည်းကိရိယာများနှင့် လုပ်ငန်းလည်ပတ်မှုလိုအပ်ချက်များကို ဆွေးနွေးပါ။"],
  ["Receive a Proposal", "အဆိုပြုလွှာ ရယူပါ", "Review a proposed scope, service options and quotation for your consideration.", "သင့်အတွက် ဝန်ဆောင်မှုအတိုင်းအတာ၊ ရွေးချယ်စရာများနှင့် ဈေးနှုန်းအဆိုပြုလွှာကို လေ့လာသုံးသပ်ပါ။"],
  ["Agree & Proceed", "သဘောတူညီပြီး ဆက်လက်ဆောင်ရွက်ပါ", "Confirm the final scope, availability, responsibilities and implementation arrangements.", "နောက်ဆုံးဝန်ဆောင်မှုအတိုင်းအတာ၊ ရရှိနိုင်မှု၊ တာဝန်ဝတ္တရားများနှင့် အကောင်အထည်ဖော်မည့်အစီအစဉ်များကို အတည်ပြုပါ။"],
];

const faqData = [
  [
    "What information should I prepare?",
    "မည်သည့်အချက်အလက်များ ပြင်ဆင်ထားသင့်သနည်း။",
    "Your property type, general location, approximate site size, security concerns and the services you are interested in.",
    "ပိုင်ဆိုင်မှုအမျိုးအစား၊ တည်နေရာ၊ ခန့်မှန်းခြေအကျယ်အဝန်း၊ လုံခြုံရေးဆိုင်ရာ စိုးရိမ်ချက်များနှင့် စိတ်ဝင်စားသော ဝန်ဆောင်မှုများကို ပြင်ဆင်ထားပေးပါ။",
  ],
  [
    "Can I request more than one service?",
    "ဝန်ဆောင်မှုတစ်မျိုးထက်ပို၍ တောင်းဆိုနိုင်ပါသလား။",
    "Yes. You can enquire about guarding, CCTV, access control, alarms, installation and maintenance together.",
    "ရပါတယ်။ လုံခြုံရေးဝန်ထမ်း၊ CCTV၊ Access Control၊ Alarm၊ တပ်ဆင်ရေးနှင့် ထိန်းသိမ်းရေးဝန်ဆောင်မှုများကို တစ်ပြိုင်နက်တည်း မေးမြန်းနိုင်ပါတယ်။",
  ],
  [
    "Are all services available at every location?",
    "နေရာတိုင်းတွင် ဝန်ဆောင်မှုအားလုံး ရရှိနိုင်ပါသလား။",
    "Service availability and implementation depend on location, project scope, resources and applicable requirements. These details should be confirmed before an agreement.",
    "ဝန်ဆောင်မှုရရှိနိုင်မှုနှင့် အကောင်အထည်ဖော်နိုင်မှုသည် တည်နေရာ၊ စီမံကိန်းအတိုင်းအတာ၊ အရင်းအမြစ်နှင့် သက်ဆိုင်ရာလိုအပ်ချက်များအပေါ် မူတည်ပါသည်။ သဘောတူညီမှုမပြုမီ အချက်အလက်များကို အတည်ပြုသင့်ပါသည်။",
  ],
  [
    "Are product configurations and prices fixed?",
    "ပစ္စည်းဖွဲ့စည်းပုံနှင့် ဈေးနှုန်းများကို ပုံသေသတ်မှတ်ထားပါသလား။",
    "Displayed configurations and indicative examples are for reference. Final specifications and pricing should be confirmed through a quotation.",
    "ဖော်ပြထားသော ပစ္စည်းဖွဲ့စည်းပုံနှင့် နမူနာဈေးနှုန်းများသည် ကိုးကားရန်အတွက်သာ ဖြစ်ပါသည်။ နောက်ဆုံးသတ်မှတ်ချက်နှင့် ဈေးနှုန်းကို Quotation မှတစ်ဆင့် အတည်ပြုရပါမည်။",
  ],
];

export default function ServicesPage() {
  const { language } = useLanguage();
  const my = language === "my";
  const t = (en: string, mm: string) => my ? mm : en;

  const services = serviceData.map((item) => ({
    ...item,
    category: item.category[my ? 1 : 0],
    title: item.title[my ? 1 : 0],
    description: item.description[my ? 1 : 0],
    features: item.features.map((feature) => feature[my ? 1 : 0]),
  }));

  return (
    <main className="min-h-screen overflow-hidden bg-[#080e18] text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080e18]/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
              <ShieldCheck className="h-6 w-6 text-cyan-300" />
            </div>
            <div>
              <div className="text-sm font-black tracking-[0.13em]">APEXIVEAI</div>
              <div className="text-[10px] font-semibold tracking-[0.25em] text-cyan-300">SECUREGUARD</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 xl:flex">
            <Link href="/" className="transition hover:text-cyan-300">{t("Home", "ပင်မစာမျက်နှာ")}</Link>
            <Link href="/services" className="text-cyan-300">{t("Services", "ဝန်ဆောင်မှုများ")}</Link>
            <Link href="/security-guards" className="transition hover:text-cyan-300">{t("Security Guards", "လုံခြုံရေးဝန်ထမ်းများ")}</Link>
            <Link href="/cctv-shop" className="transition hover:text-cyan-300">{t("CCTV Shop", "CCTV ဆိုင်")}</Link>
            <Link href="/packages" className="transition hover:text-cyan-300">{t("Packages", "ဝန်ဆောင်မှုအစီအစဉ်များ")}</Link>
            <Link href="/about" className="transition hover:text-cyan-300">{t("About Us", "ကျွန်ုပ်တို့အကြောင်း")}</Link>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <LanguageSwitcher />
            <Link
              href="/get-a-quote"
              className="hidden items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-cyan-300 sm:flex sm:text-sm"
            >
              {t("Get a Quote", "ဈေးနှုန်းတောင်းခံရန်")} <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/[0.06] px-5 py-3 text-xs text-slate-400 xl:hidden sm:px-8">
          <Link href="/">{t("Home", "ပင်မစာမျက်နှာ")}</Link>
          <Link href="/services" className="text-cyan-300">{t("Services", "ဝန်ဆောင်မှုများ")}</Link>
          <Link href="/security-guards">{t("Security Guards", "လုံခြုံရေးဝန်ထမ်းများ")}</Link>
          <Link href="/cctv-shop">{t("CCTV Shop", "CCTV ဆိုင်")}</Link>
          <Link href="/packages">{t("Packages", "အစီအစဉ်များ")}</Link>
          <Link href="/about">{t("About Us", "ကျွန်ုပ်တို့အကြောင်း")}</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(6,182,212,0.15),transparent_45%),radial-gradient(ellipse_at_5%_90%,rgba(37,99,235,0.09),transparent_40%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              <ShieldCheck size={15} />
              {t("Security Services & Solutions", "လုံခြုံရေးဝန်ဆောင်မှုနှင့် ဖြေရှင်းချက်များ")}
            </div>

            <h1 className="text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-[62px]">
              {t("Complete Security.", "ပြည့်စုံသော လုံခြုံရေး။")}
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                {t("Connected Solutions.", "ပေါင်းစပ်ချိတ်ဆက်ထားသော ဖြေရှင်းချက်များ။")}
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              {t(
                "Explore security guarding, CCTV surveillance, access control, alarm systems, installation and integrated security options designed around your property and operational requirements.",
                "လုံခြုံရေးဝန်ထမ်းဝန်ဆောင်မှု၊ CCTV စောင့်ကြည့်ရေး၊ Access Control၊ Alarm စနစ်၊ တပ်ဆင်ရေးနှင့် သင့်ပိုင်ဆိုင်မှု၊ လုပ်ငန်းလိုအပ်ချက်များနှင့် ကိုက်ညီသော ပေါင်းစပ်လုံခြုံရေးဝန်ဆောင်မှုများကို လေ့လာနိုင်ပါသည်။"
              )}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/get-a-quote" className="flex items-center gap-3 rounded-lg bg-cyan-400 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-300">
                {t("Request a Quote", "ဈေးနှုန်းတောင်းခံရန်")} <ArrowRight size={17} />
              </Link>
              <Link href="/packages" className="flex items-center gap-3 rounded-lg border border-white/15 px-6 py-4 text-sm font-semibold transition hover:border-cyan-400/50 hover:bg-white/[0.04]">
                {t("Explore Packages", "အစီအစဉ်များ လေ့လာရန်")}
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-7">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 size={16} className="text-cyan-400" />
                {t("Site-focused planning", "လုပ်ငန်းခွင်အလိုက် စီမံခြင်း")}
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 size={16} className="text-cyan-400" />
                {t("Multiple service options", "ဝန်ဆောင်မှုအမျိုးမျိုး ရွေးချယ်နိုင်ခြင်း")}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-3xl bg-cyan-400/[0.06] blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1200&q=85"
                alt="Modern building security and access control technology"
                className="h-[430px] w-full object-cover opacity-80 sm:h-[510px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080e18] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                  {t("A Coordinated Approach", "ပေါင်းစပ်ညှိနှိုင်းထားသော လုံခြုံရေး")}
                </div>
                <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                  People + Technology + Process
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                  {t(
                    "Security components planned to work together around your specific requirements.",
                    "သင့်လိုအပ်ချက်များနှင့် ကိုက်ညီစေရန် လုံခြုံရေးအစိတ်အပိုင်းများကို အတူတကွ ချိတ်ဆက်စီမံထားပါသည်။"
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service overview */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
            {t("Our Service Portfolio", "ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုအမျိုးအစားများ")}
          </div>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            {t(
              "Security services for different environments and requirements.",
              "မတူညီသော လုပ်ငန်းခွင်များနှင့် လိုအပ်ချက်များအတွက် လုံခြုံရေးဝန်ဆောင်မှုများ။"
            )}
          </h2>
          <p className="mt-5 leading-7 text-slate-400">
            {t(
              "Choose an individual service or discuss a combination of solutions. Final service scope depends on assessment, availability and agreement.",
              "ဝန်ဆောင်မှုတစ်မျိုးချင်းစီကို ရွေးချယ်နိုင်သကဲ့သို့ ဝန်ဆောင်မှုများကို ပေါင်းစပ်အသုံးပြုရန်လည်း ဆွေးနွေးနိုင်ပါသည်။ နောက်ဆုံးဝန်ဆောင်မှုအတိုင်းအတာသည် စစ်ဆေးသုံးသပ်မှု၊ ရရှိနိုင်မှုနှင့် သဘောတူညီချက်အပေါ် မူတည်ပါသည်။"
            )}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101a29] transition hover:border-cyan-400/30"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101a29] via-transparent to-black/10" />
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-[#081421]/80 backdrop-blur">
                    <Icon className="text-cyan-300" size={23} />
                  </div>
                  <div className="absolute right-6 top-6 text-sm font-bold tracking-widest text-white/70">
                    {service.number}
                  </div>
                  <div className="absolute bottom-5 left-6 text-[10px] font-bold tracking-[0.2em] text-cyan-300">
                    {service.category}
                  </div>
                </div>

                <div className="p-7 sm:p-8">
                  <h3 className="text-xl font-bold sm:text-2xl">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{service.description}</p>

                  <div className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-400" size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={service.href} className="mt-8 inline-flex items-center gap-2 border-t border-white/10 pt-5 text-sm font-bold text-cyan-300 transition hover:text-cyan-200">
                    {t("Explore Service", "ဝန်ဆောင်မှု လေ့လာရန်")} <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Integrated security */}
      <section className="border-y border-white/[0.06] bg-[#0b1421]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85"
              alt="Security technology and connected systems"
              className="h-[420px] w-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1421] via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 right-7">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                {t("Integrated Security", "ပေါင်းစပ်လုံခြုံရေး")}
              </div>
              <div className="mt-2 text-2xl font-black">
                {t("One coordinated security concept.", "တစ်စုတစ်စည်းတည်း ပေါင်းစပ်ထားသော လုံခြုံရေးစနစ်။")}
              </div>
            </div>
          </div>

          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              {t("Beyond Individual Systems", "သီးခြားစနစ်များထက် ပိုမိုကျယ်ပြန့်သော ဖြေရှင်းချက်")}
            </div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              {t("Bring your security components together.", "သင့်လုံခြုံရေးစနစ်များကို တစ်စုတစ်စည်းတည်း ပေါင်းစပ်လိုက်ပါ။")}
            </h2>
            <p className="mt-6 leading-8 text-slate-400">
              {t(
                "Some properties require more than a single security product. An integrated approach can coordinate personnel, surveillance equipment, access control and alarm technologies within an agreed project scope.",
                "အချို့သော ပိုင်ဆိုင်မှုများအတွက် လုံခြုံရေးပစ္စည်းတစ်မျိုးတည်းထက် ပိုမိုလိုအပ်နိုင်ပါသည်။ သဘောတူညီထားသော စီမံကိန်းအတိုင်းအတာအတွင်း ဝန်ထမ်းများ၊ စောင့်ကြည့်ရေးပစ္စည်းများ၊ ဝင်ထွက်ခွင့်ထိန်းချုပ်ရေးနှင့် Alarm နည်းပညာများကို ပေါင်းစပ်ညှိနှိုင်းပေးနိုင်ပါသည်။"
              )}
            </p>

            <div className="mt-8 space-y-5">
              {[
                [Users, "Security Personnel", "လုံခြုံရေးဝန်ထမ်းများ", "Guarding and site procedures", "လုံခြုံရေးတာဝန်နှင့် လုပ်ငန်းခွင်လုပ်ထုံးလုပ်နည်းများ"],
                [Camera, "Video Surveillance", "ဗီဒီယိုစောင့်ကြည့်ရေး", "Cameras and recording systems", "ကင်မရာနှင့် မှတ်တမ်းတင်စနစ်များ"],
                [LockKeyhole, "Access Management", "ဝင်ထွက်ခွင့် စီမံခန့်ခွဲမှု", "Controlled entry points", "ထိန်းချုပ်ထားသော ဝင်ပေါက်များ"],
                [Radio, "Alarm & Detection", "အချက်ပေးနှင့် ရှာဖွေရေး", "Selected alerts and sensors", "ရွေးချယ်ထားသော အချက်ပေးစနစ်နှင့် Sensor များ"],
                [Monitor, "Monitoring Options", "စောင့်ကြည့်ထိန်းချုပ်မှု ရွေးချယ်စရာများ", "System visibility where supported", "စနစ်က ပံ့ပိုးသည့်နေရာများတွင် စောင့်ကြည့်နိုင်မှု"],
              ].map(([Icon, title, mmTitle, detail, mmDetail]) => {
                const ItemIcon = Icon as typeof Users;
                return (
                  <div key={title as string} className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10">
                      <ItemIcon size={21} className="text-cyan-300" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold">{t(title as string, mmTitle as string)}</h3>
                      <p className="mt-1 text-xs text-slate-500">{t(detail as string, mmDetail as string)}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link href="/get-a-quote" className="mt-9 inline-flex items-center gap-3 rounded-lg bg-cyan-400 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-300">
              {t("Discuss an Integrated Solution", "ပေါင်းစပ်ဖြေရှင်းချက်အတွက် ဆွေးနွေးရန်")} <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
            {t("Industries & Environments", "လုပ်ငန်းကဏ္ဍနှင့် လုပ်ငန်းခွင်အမျိုးအစားများ")}
          </div>
          <h2 className="text-3xl font-black sm:text-4xl">
            {t("Solutions shaped around your environment.", "သင့်လုပ်ငန်းခွင်နှင့် ကိုက်ညီသော ဖြေရှင်းချက်များ။")}
          </h2>
          <p className="mt-5 leading-7 text-slate-400">
            {t(
              "Security needs vary by property type, location, operational activities and risk profile.",
              "လုံခြုံရေးလိုအပ်ချက်များသည် ပိုင်ဆိုင်မှုအမျိုးအစား၊ တည်နေရာ၊ လုပ်ငန်းဆောင်ရွက်မှုနှင့် အန္တရာယ်အခြေအနေတို့အပေါ် မူတည်၍ ကွဲပြားနိုင်ပါသည်။"
            )}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industryData.map(([Icon, title, mmTitle, description, mmDescription]) => (
            <div key={title} className="flex items-center gap-5 rounded-xl border border-white/[0.08] bg-[#101a29] p-6 transition hover:border-cyan-400/30">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">
                <Icon size={23} className="text-cyan-300" />
              </div>
              <div>
                <h3 className="font-bold">{t(title, mmTitle)}</h3>
                <p className="mt-1 text-xs text-slate-500">{t(description, mmDescription)}</p>
              </div>
              <ChevronRight size={17} className="ml-auto shrink-0 text-slate-600" />
            </div>
          ))}
        </div>
      </section>

      {/* Engagement process */}
      <section className="border-y border-white/[0.06] bg-[#0b1421]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              {t("Our Engagement Process", "ဝန်ဆောင်မှုရယူရန် လုပ်ငန်းစဉ်")}
            </div>
            <h2 className="text-3xl font-black sm:text-4xl">
              {t("A clear path from enquiry to proposal.", "စုံစမ်းမေးမြန်းမှုမှ အဆိုပြုလွှာအထိ ရှင်းလင်းသော လုပ်ငန်းစဉ်။")}
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              {t(
                "Each project begins with understanding the requirements and agreeing on a practical scope before any implementation.",
                "စီမံကိန်းတိုင်းကို အကောင်အထည်မဖော်မီ လိုအပ်ချက်များကို နားလည်သုံးသပ်ပြီး လက်တွေ့ကျသော လုပ်ငန်းအတိုင်းအတာကို သဘောတူညီခြင်းမှ စတင်ပါသည်။"
              )}
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stepData.map(([title, mmTitle, description, mmDescription], index) => (
              <div key={title} className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/30 bg-[#102234] text-sm font-black text-cyan-300">
                  0{index + 1}
                </div>
                <h3 className="mt-7 text-lg font-bold">{t(title, mmTitle)}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{t(description, mmDescription)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              {t("Before You Enquire", "မေးမြန်းမှုမပြုမီ")}
            </div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              {t("The right solution starts with the right information.", "သင့်တော်သော ဖြေရှင်းချက်သည် မှန်ကန်သော အချက်အလက်များမှ စတင်ပါသည်။")}
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              {t(
                "Providing a few details about your site helps us understand the project and discuss suitable options.",
                "သင့်လုပ်ငန်းခွင်အကြောင်း အချက်အလက်အနည်းငယ် ပေးခြင်းဖြင့် စီမံကိန်းကို နားလည်ပြီး သင့်တော်သော ရွေးချယ်စရာများကို ဆွေးနွေးနိုင်ပါသည်။"
              )}
            </p>
            <Link href="/get-a-quote" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition hover:text-cyan-200">
              {t("Start Your Enquiry", "စုံစမ်းမေးမြန်းရန် စတင်ပါ")} <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="space-y-4">
            {faqData.map(([title, mmTitle, detail, mmDetail]) => (
              <div key={title} className="rounded-xl border border-white/[0.08] bg-[#101a29] p-6">
                <div className="flex items-start gap-3">
                  <ClipboardCheck className="mt-0.5 shrink-0 text-cyan-300" size={19} />
                  <div>
                    <h3 className="font-bold">{t(title, mmTitle)}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{t(detail, mmDetail)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(6,182,212,0.17),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 lg:py-28">
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
            <ShieldCheck size={32} className="text-cyan-300" />
          </div>
          <div className="text-xs font-bold uppercase tracking-[0.23em] text-cyan-300">
            {t("Your Security Requirements Matter", "သင့်လုံခြုံရေးလိုအပ်ချက်များသည် အရေးကြီးပါသည်")}
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
            {t(
              "Let's discuss the right security solution for your property.",
              "သင့်ပိုင်ဆိုင်မှုအတွက် သင့်တော်သော လုံခြုံရေးဖြေရှင်းချက်ကို ဆွေးနွေးကြရအောင်။"
            )}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            {t(
              "Share your requirements and explore suitable service options with ApexiveAI SecureGuard.",
              "သင့်လိုအပ်ချက်များကို မျှဝေပြီး ApexiveAI SecureGuard နှင့် သင့်တော်သော ဝန်ဆောင်မှုများကို လေ့လာဆွေးနွေးနိုင်ပါသည်။"
            )}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/get-a-quote" className="flex items-center gap-3 rounded-lg bg-cyan-400 px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-300">
              {t("Request a Quote", "ဈေးနှုန်းတောင်းခံရန်")} <ArrowRight size={17} />
            </Link>
            <Link href="/contact" className="flex items-center gap-3 rounded-lg border border-white/15 px-7 py-4 text-sm font-semibold transition hover:border-cyan-400/50 hover:bg-white/[0.04]">
              {t("Contact Us", "ဆက်သွယ်ရန်")}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.07] bg-[#060b13]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
                  <ShieldCheck className="text-cyan-300" size={24} />
                </div>
                <div>
                  <div className="font-black tracking-[0.14em]">APEXIVEAI</div>
                  <div className="text-[10px] font-bold tracking-[0.25em] text-cyan-300">SECUREGUARD</div>
                </div>
              </Link>
              <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
                {t(
                  "Security services and technology solutions designed around people, property and operational requirements.",
                  "လူပုဂ္ဂိုလ်များ၊ ပိုင်ဆိုင်မှုများနှင့် လုပ်ငန်းလည်ပတ်မှုလိုအပ်ချက်များအတွက် ရည်ရွယ်ထားသော လုံခြုံရေးဝန်ဆောင်မှုနှင့် နည်းပညာဖြေရှင်းချက်များ။"
                )}
              </p>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-bold">{t("Services", "ဝန်ဆောင်မှုများ")}</h3>
              <div className="space-y-3 text-sm text-slate-500">
                <Link className="block hover:text-cyan-300" href="/security-guards">{t("Security Guards", "လုံခြုံရေးဝန်ထမ်းများ")}</Link>
                <Link className="block hover:text-cyan-300" href="/cctv-shop">{t("CCTV & Surveillance", "CCTV နှင့် စောင့်ကြည့်ရေး")}</Link>
                <Link className="block hover:text-cyan-300" href="/services">{t("Integrated Security", "ပေါင်းစပ်လုံခြုံရေး")}</Link>
                <Link className="block hover:text-cyan-300" href="/packages">{t("Packages", "အစီအစဉ်များ")}</Link>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-bold">{t("Company", "ကုမ္ပဏီ")}</h3>
              <div className="space-y-3 text-sm text-slate-500">
                <Link className="block hover:text-cyan-300" href="/about">{t("About Us", "ကျွန်ုပ်တို့အကြောင်း")}</Link>
                <Link className="block hover:text-cyan-300" href="/contact">{t("Contact", "ဆက်သွယ်ရန်")}</Link>
                <Link className="block hover:text-cyan-300" href="/get-a-quote">{t("Request a Quote", "ဈေးနှုန်းတောင်းခံရန်")}</Link>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/[0.07] pt-7 text-xs text-slate-600 sm:flex-row">
            <p>© ApexiveAI SecureGuard. {t("All rights reserved.", "မူပိုင်ခွင့်အားလုံး ရယူထားသည်။")}</p>
            <p>{t("Security solutions. Designed around your requirements.", "သင့်လိုအပ်ချက်များနှင့် ကိုက်ညီသော လုံခြုံရေးဖြေရှင်းချက်များ။")}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
