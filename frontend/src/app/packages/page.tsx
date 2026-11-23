
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
  Camera,
  Building2,
  Factory,
  Home,
  Users,
  Menu,
  X,
  CheckCircle2,
  ChevronRight,
  BadgeCheck,
  LockKeyhole,
  Network,
} from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageProvider";

type LocalText = { en: string; my: string };

const guardPackages = [
  {
    name: "Essential Guard",
    subtitle: { en: "Reliable everyday protection", my: "နေ့စဉ်ယုံကြည်စိတ်ချရသော လုံခြုံရေး" },
    description: { en: "Professional guarding for small offices, shops and residential properties.", my: "ရုံးခန်းငယ်များ၊ ဆိုင်များနှင့် လူနေအိမ်များအတွက် ပရော်ဖက်ရှင်နယ် လုံခြုံရေးဝန်ဆောင်မှု။" },
    icon: ShieldCheck,
    features: [
      ["Trained security personnel", "လေ့ကျင့်သင်ကြားထားသော လုံခြုံရေးဝန်ထမ်းများ"],
      ["Access control monitoring", "ဝင်ထွက်ခွင့် စောင့်ကြည့်ထိန်းချုပ်ခြင်း"],
      ["Visitor registration", "ဧည့်သည်စာရင်း မှတ်တမ်းတင်ခြင်း"],
      ["Routine security patrol", "ပုံမှန်လုံခြုံရေး ကင်းလှည့်ခြင်း"],
      ["Incident reporting", "ဖြစ်စဉ်များ မှတ်တမ်းတင်တင်ပြခြင်း"],
      ["Deployment coordination", "ဝန်ထမ်းချထားမှု ညှိနှိုင်းဆောင်ရွက်ခြင်း"],
    ],
    ideal: { en: "Small offices, retail shops and residences", my: "ရုံးခန်းငယ်များ၊ လက်လီဆိုင်များနှင့် လူနေအိမ်များ" },
  },
  {
    name: "Business Guard",
    subtitle: { en: "Enhanced business security", my: "လုပ်ငန်းများအတွက် အဆင့်မြှင့်လုံခြုံရေး" },
    description: { en: "Structured security coverage for commercial properties and business facilities.", my: "စီးပွားရေးအဆောက်အအုံများနှင့် လုပ်ငန်းနေရာများအတွက် စနစ်တကျ လုံခြုံရေးဝန်ဆောင်မှု။" },
    icon: Building2,
    popular: true,
    features: [
      ["Professional security personnel", "ပရော်ဖက်ရှင်နယ် လုံခြုံရေးဝန်ထမ်းများ"],
      ["Day or night shift arrangement", "နေ့/ည အလှည့်ကျ တာဝန်ချထားမှု"],
      ["Visitor and vehicle management", "ဧည့်သည်နှင့် ယာဉ်များ စီမံခန့်ခွဲခြင်း"],
      ["Scheduled patrol operations", "အချိန်ဇယားအလိုက် ကင်းလှည့်ခြင်း"],
      ["Incident escalation procedures", "ဖြစ်စဉ်တင်ပြအကြောင်းကြားမှု လုပ်ထုံးလုပ်နည်း"],
      ["Daily duty reporting", "နေ့စဉ်တာဝန်ထမ်းဆောင်မှု အစီရင်ခံစာ"],
      ["Site-specific security planning", "လုပ်ငန်းနေရာအလိုက် လုံခြုံရေးအစီအစဉ်"],
    ],
    ideal: { en: "Corporate offices, buildings and commercial sites", my: "ကုမ္ပဏီရုံးများ၊ အဆောက်အအုံများနှင့် စီးပွားရေးလုပ်ငန်းနေရာများ" },
  },
  {
    name: "Enterprise Guard",
    subtitle: { en: "Comprehensive site protection", my: "လုပ်ငန်းကြီးများအတွက် ပြည့်စုံသော လုံခြုံရေး" },
    description: { en: "Coordinated security personnel deployment for complex and high-activity sites.", my: "လုပ်ငန်းလည်ပတ်မှုများပြားပြီး ရှုပ်ထွေးသော နေရာများအတွက် ညှိနှိုင်းစီမံထားသည့် လုံခြုံရေးဝန်ထမ်းချထားမှု။" },
    icon: Factory,
    features: [
      ["Dedicated security deployment plan", "သီးသန့်လုံခြုံရေးဝန်ထမ်းချထားမှု အစီအစဉ်"],
      ["Multi-post personnel coordination", "တာဝန်နေရာအများအပြားအတွက် ဝန်ထမ်းညှိနှိုင်းမှု"],
      ["Shift and attendance supervision", "အလှည့်ကျတာဝန်နှင့် တက်ရောက်မှု ကြီးကြပ်ခြင်း"],
      ["Perimeter and access management", "ခြံစည်းရိုးနယ်နိမိတ်နှင့် ဝင်ထွက်ခွင့် စီမံခြင်း"],
      ["Incident response coordination", "ဖြစ်စဉ်တုံ့ပြန်ရေး ညှိနှိုင်းဆောင်ရွက်ခြင်း"],
      ["Operational reporting", "လုပ်ငန်းဆောင်ရွက်မှု အစီရင်ခံခြင်း"],
      ["Management review arrangements", "စီမံခန့်ခွဲမှု ပြန်လည်သုံးသပ်ခြင်း"],
      ["Custom security procedures", "သီးသန့်လုံခြုံရေး လုပ်ထုံးလုပ်နည်းများ"],
    ],
    ideal: { en: "Factories, warehouses and large facilities", my: "စက်ရုံများ၊ သိုလှောင်ရုံများနှင့် အဆောက်အအုံကြီးများ" },
  },
];

const cctvPackages = [
  {
    name: "Home Security",
    subtitle: { en: "Smart protection for everyday living", my: "နေ့စဉ်နေထိုင်မှုအတွက် စမတ်လုံခြုံရေး" },
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=900",
    cameras: "2–4 Cameras",
    cameraMy: "ကင်မရာ ၂–၄ လုံး",
    features: [
      ["Indoor / outdoor camera options", "အိမ်တွင်း/အပြင် ကင်မရာရွေးချယ်စရာများ"],
      ["Mobile viewing configuration", "ဖုန်းမှတစ်ဆင့် ကြည့်ရှုနိုင်ရန် စီစဉ်ပေးခြင်း"],
      ["Motion detection support", "လှုပ်ရှားမှုရှာဖွေခြင်း စနစ်"],
      ["Recording system options", "ဗီဒီယိုမှတ်တမ်းတင်စနစ် ရွေးချယ်စရာများ"],
      ["Basic installation planning", "အခြေခံတပ်ဆင်မှု အစီအစဉ်"],
    ],
    ideal: { en: "Houses, apartments and small residences", my: "အိမ်များ၊ တိုက်ခန်းများနှင့် လူနေအိမ်ငယ်များ" },
  },
  {
    name: "Business Surveillance",
    subtitle: { en: "Security visibility for business", my: "စီးပွားရေးလုပ်ငန်းများအတွက် စောင့်ကြည့်ရေး" },
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=900",
    cameras: "5–16 Cameras",
    cameraMy: "ကင်မရာ ၅–၁၆ လုံး",
    features: [
      ["Indoor and outdoor coverage", "အိမ်တွင်းနှင့် အပြင်ဘက် စောင့်ကြည့်မှု"],
      ["Network video recorder options", "Network Video Recorder ရွေးချယ်စရာများ"],
      ["Remote monitoring setup", "အဝေးမှ စောင့်ကြည့်နိုင်ရန် စီစဉ်ခြင်း"],
      ["Recording storage planning", "ဗီဒီယိုသိမ်းဆည်းမှု အစီအစဉ်"],
      ["Professional installation", "ပရော်ဖက်ရှင်နယ် တပ်ဆင်ခြင်း"],
      ["System testing and handover", "စနစ်စမ်းသပ်ပြီး လွှဲပြောင်းပေးခြင်း"],
    ],
    ideal: { en: "Shops, offices and restaurants", my: "ဆိုင်များ၊ ရုံးခန်းများနှင့် စားသောက်ဆိုင်များ" },
    popular: true,
  },
  {
    name: "Enterprise Surveillance",
    subtitle: { en: "Scalable multi-zone monitoring", my: "ဇုန်အများအပြားကို တိုးချဲ့စောင့်ကြည့်နိုင်သောစနစ်" },
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=900",
    cameras: "17+ Cameras",
    cameraMy: "ကင်မရာ ၁၇ လုံးနှင့်အထက်",
    features: [
      ["Multi-zone camera architecture", "ဇုန်အလိုက် ကင်မရာဖွဲ့စည်းပုံ"],
      ["PTZ camera options", "PTZ ကင်မရာ ရွေးချယ်စရာများ"],
      ["Centralized recording design", "ဗဟိုမှတ်တမ်းတင်စနစ် ဒီဇိုင်း"],
      ["Network and storage planning", "Network နှင့် Storage စီမံချက်"],
      ["Remote access configuration", "အဝေးမှ ဝင်ရောက်ကြည့်ရှုမှု စီစဉ်ခြင်း"],
      ["System commissioning", "စနစ်စတင်အသုံးပြုနိုင်ရန် စီစဉ်ခြင်း"],
      ["Maintenance planning", "ပြုပြင်ထိန်းသိမ်းမှု အစီအစဉ်"],
    ],
    ideal: { en: "Factories, warehouses and large properties", my: "စက်ရုံများ၊ သိုလှောင်ရုံများနှင့် အကျယ်အဝန်းကြီးမားသော နေရာများ" },
  },
];

const integratedPackages = [
  {
    name: "Smart Site Protection",
    description: { en: "Combine professional security personnel with CCTV monitoring infrastructure.", my: "ပရော်ဖက်ရှင်နယ် လုံခြုံရေးဝန်ထမ်းများနှင့် CCTV စောင့်ကြည့်ရေးစနစ်ကို ပေါင်းစပ်ထားသော ဖြေရှင်းချက်။" },
    icon: ShieldCheck,
    features: [
      ["Security guard deployment planning", "လုံခြုံရေးဝန်ထမ်း ချထားမှုအစီအစဉ်"],
      ["CCTV equipment consultation", "CCTV ပစ္စည်းဆိုင်ရာ အကြံပေးခြင်း"],
      ["Entrance and perimeter coverage", "ဝင်ပေါက်နှင့် နယ်နိမိတ် စောင့်ကြည့်မှု"],
      ["Installation coordination", "တပ်ဆင်မှု ညှိနှိုင်းဆောင်ရွက်ခြင်း"],
      ["Unified site security planning", "လုပ်ငန်းနေရာတစ်ခုလုံးအတွက် လုံခြုံရေးအစီအစဉ်"],
    ],
  },
  {
    name: "Corporate Security System",
    description: { en: "A coordinated security solution for corporate buildings and commercial facilities.", my: "ကုမ္ပဏီအဆောက်အအုံများနှင့် စီးပွားရေးလုပ်ငန်းနေရာများအတွက် ညှိနှိုင်းပေါင်းစပ်ထားသော လုံခြုံရေးဖြေရှင်းချက်။" },
    icon: Building2,
    features: [
      ["Guarding service arrangement", "လုံခြုံရေးဝန်ဆောင်မှု စီစဉ်ပေးခြင်း"],
      ["CCTV system planning", "CCTV စနစ် စီမံရေးဆွဲခြင်း"],
      ["Access control considerations", "ဝင်ထွက်ခွင့် ထိန်းချုပ်မှု ထည့်သွင်းစဉ်းစားခြင်း"],
      ["Security operations coordination", "လုံခြုံရေးလုပ်ငန်းများ ညှိနှိုင်းခြင်း"],
      ["Maintenance support options", "ပြုပြင်ထိန်းသိမ်းမှု ပံ့ပိုးရေး ရွေးချယ်စရာများ"],
    ],
  },
  {
    name: "Industrial Protection",
    description: { en: "Integrated protection planning for industrial and logistics environments.", my: "စက်မှုလုပ်ငန်းနှင့် ကုန်စည်ပို့ဆောင်ရေးနေရာများအတွက် ပေါင်းစပ်လုံခြုံရေး အစီအစဉ်။" },
    icon: Factory,
    features: [
      ["Site perimeter protection", "လုပ်ငန်းနယ်နိမိတ် လုံခြုံရေး"],
      ["Security personnel planning", "လုံခြုံရေးဝန်ထမ်း စီမံချထားခြင်း"],
      ["Warehouse CCTV coverage", "သိုလှောင်ရုံ CCTV စောင့်ကြည့်မှု"],
      ["Vehicle and entry monitoring", "ယာဉ်နှင့် ဝင်ထွက်မှု စောင့်ကြည့်ခြင်း"],
      ["Operational support coordination", "လုပ်ငန်းဆောင်ရွက်မှု ပံ့ပိုးရေး ညှိနှိုင်းခြင်း"],
    ],
  },
];

const audiences = [
  { icon: Home, title: { en: "Residential", my: "လူနေအိမ်" }, text: { en: "Homes, apartments and condominiums", my: "အိမ်များ၊ တိုက်ခန်းများနှင့် ကွန်ဒိုများ" } },
  { icon: Building2, title: { en: "Corporate", my: "ကုမ္ပဏီလုပ်ငန်း" }, text: { en: "Offices, commercial buildings and businesses", my: "ရုံးခန်းများ၊ စီးပွားရေးအဆောက်အအုံများနှင့် လုပ်ငန်းများ" } },
  { icon: Factory, title: { en: "Industrial", my: "စက်မှုလုပ်ငန်း" }, text: { en: "Factories, warehouses and construction sites", my: "စက်ရုံများ၊ သိုလှောင်ရုံများနှင့် ဆောက်လုပ်ရေးလုပ်ငန်းခွင်များ" } },
  { icon: Users, title: { en: "Events & VIP", my: "ပွဲအခမ်းအနားနှင့် VIP" }, text: { en: "Events, private functions and VIP protection", my: "ပွဲအခမ်းအနားများ၊ သီးသန့်ပွဲများနှင့် VIP လုံခြုံရေး" } },
];

export default function PackagesPage() {
  const { language } = useLanguage();
  const my = language === "my";
  const tr = (en: string, mm: string) => my ? mm : en;
  const tx = (value: LocalText) => my ? value.my : value.en;
  const ft = (value: string[]) => my ? value[1] : value[0];

  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Packages");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { key: "All Packages", label: tr("All Packages", "ပက်ကေ့ချ်အားလုံး") },
    { key: "Security Guards", label: tr("Security Guards", "လုံခြုံရေးဝန်ထမ်း") },
    { key: "CCTV Systems", label: tr("CCTV Systems", "CCTV စနစ်များ") },
    { key: "Integrated Security", label: tr("Integrated Security", "ပေါင်းစပ်လုံခြုံရေး") },
  ];

  const openQuote = (packageName = "") => {
    setSelectedPackage(packageName);
    setSubmitted(false);
    setQuoteOpen(true);
  };

  function submitQuote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const navItems = [
    ["/", tr("Home", "ပင်မစာမျက်နှာ")],
    ["/about", tr("About", "ကျွန်ုပ်တို့အကြောင်း")],
    ["/security-guards", tr("Security Guards", "လုံခြုံရေးဝန်ထမ်း")],
    ["/cctv-shop", tr("CCTV Shop", "CCTV အရောင်းဆိုင်")],
    ["/services", tr("Services", "ဝန်ဆောင်မှုများ")],
    ["/packages", tr("Packages", "ပက်ကေ့ချ်များ")],
    ["/contact", tr("Contact", "ဆက်သွယ်ရန်")],
  ];

  return (
    <main className="min-h-screen bg-[#070d17] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070d17]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
              <ShieldCheck className="h-6 w-6 text-cyan-300" />
            </div>
            <div>
              <div className="text-sm font-black tracking-[0.12em]">APEXIVEAI</div>
              <div className="text-[9px] font-bold tracking-[0.24em] text-cyan-300">SECUREGUARD</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 text-xs font-semibold text-slate-300 lg:flex">
            {navItems.map(([href, label]) => (
              <Link key={href} href={href} className={href === "/packages" ? "text-cyan-300" : "hover:text-cyan-300"}>{label}</Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button onClick={() => openQuote()} className="hidden rounded-xl bg-cyan-400 px-5 py-3 text-xs font-black text-slate-950 transition hover:bg-cyan-300 sm:block">
              {tr("Get a Quote", "ဈေးနှုန်းတောင်းခံရန်")}
            </button>
            <button onClick={() => setMobileMenu(!mobileMenu)} className="rounded-xl border border-white/10 p-2 lg:hidden" aria-label="Toggle navigation">
              {mobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="border-t border-white/10 bg-[#0b1422] px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4 text-sm text-slate-300">
              {navItems.map(([href, label]) => (
                <Link key={href} href={href} onClick={() => setMobileMenu(false)} className={href === "/packages" ? "text-cyan-300" : ""}>{label}</Link>
              ))}
              <button onClick={() => openQuote()} className="rounded-lg bg-cyan-400 py-3 font-bold text-slate-950">
                {tr("Request a Quote", "ဈေးနှုန်းတောင်းခံရန်")}
              </button>
            </div>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1800" alt="Security surveillance operations" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070d17] via-[#070d17]/90 to-[#070d17]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070d17] to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              <BadgeCheck size={14} /> {tr("Security Solutions & Packages", "လုံခြုံရေးဖြေရှင်းချက်များနှင့် ပက်ကေ့ချ်များ")}
            </div>
            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {tr("Protection Designed", "သင့်လိုအပ်ချက်အတွက်")}
              <span className="block text-cyan-300">{tr("Around Your Needs.", "စီစဉ်ဖန်တီးထားသော လုံခြုံရေး။")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
              {tr(
                "Explore professional security guard services, smart CCTV systems and integrated protection packages for residential, commercial and industrial environments.",
                "လူနေအိမ်၊ စီးပွားရေးလုပ်ငန်းနှင့် စက်မှုလုပ်ငန်းပတ်ဝန်းကျင်များအတွက် ပရော်ဖက်ရှင်နယ် လုံခြုံရေးဝန်ထမ်းဝန်ဆောင်မှု၊ Smart CCTV စနစ်များနှင့် ပေါင်းစပ်လုံခြုံရေး ပက်ကေ့ချ်များကို လေ့လာကြည့်ရှုနိုင်ပါသည်။"
              )}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#package-categories" className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 text-xs font-black text-slate-950 hover:bg-cyan-300">
                {tr("Explore Packages", "ပက်ကေ့ချ်များ ကြည့်ရှုရန်")} <ArrowRight size={16} />
              </a>
              <button onClick={() => openQuote()} className="rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-xs font-bold hover:border-cyan-300 hover:text-cyan-300">
                {tr("Discuss Your Requirements", "သင့်လိုအပ်ချက်များ ဆွေးနွေးရန်")}
              </button>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-7">
              <div><ShieldCheck className="h-5 w-5 text-cyan-300" /><div className="mt-3 text-xs font-bold">{tr("Guarding", "လုံခြုံရေးဝန်ထမ်း")}</div><div className="mt-1 text-[10px] text-slate-500">{tr("Personnel Services", "ဝန်ထမ်းဝန်ဆောင်မှု")}</div></div>
              <div><Camera className="h-5 w-5 text-cyan-300" /><div className="mt-3 text-xs font-bold">{tr("Surveillance", "စောင့်ကြည့်ရေး")}</div><div className="mt-1 text-[10px] text-slate-500">{tr("CCTV Solutions", "CCTV ဖြေရှင်းချက်များ")}</div></div>
              <div><Network className="h-5 w-5 text-cyan-300" /><div className="mt-3 text-xs font-bold">{tr("Integration", "ပေါင်းစပ်မှု")}</div><div className="mt-1 text-[10px] text-slate-500">{tr("Combined Protection", "ပေါင်းစပ်လုံခြုံရေး")}</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0a1220]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 py-8 sm:grid-cols-4 lg:px-8">
          {[
            [tr("Flexible Coverage", "လိုအပ်ချက်အလိုက် ဝန်ဆောင်မှု"), tr("Service arrangements", "ဝန်ဆောင်မှုအစီအစဉ်များ")],
            [tr("Custom Planning", "သီးသန့်စီမံရေးဆွဲမှု"), tr("Site-based requirements", "လုပ်ငန်းနေရာအလိုက် လိုအပ်ချက်များ")],
            [tr("Integrated Options", "ပေါင်းစပ်ရွေးချယ်စရာများ"), tr("Guards and CCTV", "လုံခြုံရေးဝန်ထမ်းနှင့် CCTV")],
            [tr("Project Enquiries", "ပရောဂျက်စုံစမ်းမေးမြန်းမှု"), tr("Quotation assistance", "ဈေးနှုန်းတင်ပြမှု အကူအညီ")],
          ].map(([title, description]) => <div key={title}><div className="text-xs font-bold">{title}</div><div className="mt-2 text-[10px] text-slate-500">{description}</div></div>)}
        </div>
      </section>

      <section id="package-categories" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
        <div className="text-center">
          <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-300">{tr("Our Solutions", "ကျွန်ုပ်တို့၏ ဖြေရှင်းချက်များ")}</div>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">{tr("Choose Your", "သင့်အတွက် ရွေးချယ်ပါ")} <span className="text-cyan-300">{tr("Protection", "လုံခြုံရေး")}</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-7 text-slate-400">
            {tr("Select a service category to explore the available solution structures. Final scope and pricing are determined according to your site requirements.", "ရရှိနိုင်သော ဝန်ဆောင်မှုအစီအစဉ်များကို လေ့လာရန် အမျိုးအစားတစ်ခု ရွေးချယ်ပါ။ နောက်ဆုံးဝန်ဆောင်မှုအတိုင်းအတာနှင့် ဈေးနှုန်းကို သင့်လုပ်ငန်းနေရာ၏ လိုအပ်ချက်အပေါ် မူတည်သတ်မှတ်ပါမည်။")}
          </p>
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button key={category.key} onClick={() => setActiveCategory(category.key)} className={`rounded-full border px-5 py-3 text-[10px] font-bold transition ${activeCategory === category.key ? "border-cyan-400 bg-cyan-400 text-slate-950" : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-cyan-400/40 hover:text-white"}`}>
              {category.label}
            </button>
          ))}
        </div>

        {(activeCategory === "All Packages" || activeCategory === "Security Guards") && (
          <div className="mt-16">
            <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">01 / {tr("Personnel Protection", "ဝန်ထမ်းအခြေပြု လုံခြုံရေး")}</div>
                <h3 className="mt-2 text-2xl font-black">{tr("Security Guard Packages", "လုံခြုံရေးဝန်ထမ်း ပက်ကေ့ချ်များ")}</h3>
                <p className="mt-2 text-xs text-slate-500">{tr("Professional guarding arrangements for different operational environments.", "လုပ်ငန်းပတ်ဝန်းကျင်အမျိုးမျိုးအတွက် ပရော်ဖက်ရှင်နယ် လုံခြုံရေးအစီအစဉ်များ။")}</p>
              </div>
              <Link href="/security-guards" className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300">{tr("Explore Guard Services", "လုံခြုံရေးဝန်ဆောင်မှုများ ကြည့်ရန်")} <ArrowUpRight size={15} /></Link>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {guardPackages.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.name} className={`relative flex flex-col rounded-2xl border bg-[#0c1625] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 ${item.popular ? "border-cyan-400/40 shadow-xl shadow-cyan-950/20" : "border-white/10"}`}>
                    {item.popular && <div className="absolute right-5 top-5 rounded-full bg-cyan-400 px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-slate-950">{tr("Recommended", "အကြံပြုထားသည်")}</div>}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10"><Icon className="h-6 w-6 text-cyan-300" /></div>
                    <div className="mt-6 text-[10px] font-bold uppercase tracking-widest text-cyan-300">{tx(item.subtitle)}</div>
                    <h4 className="mt-2 text-xl font-black">{item.name}</h4>
                    <p className="mt-3 min-h-12 text-xs leading-6 text-slate-400">{tx(item.description)}</p>
                    <div className="my-6 border-t border-white/10 pt-5">
                      <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500">{tr("Package Features", "ပက်ကေ့ချ်တွင် ပါဝင်သောအချက်များ")}</div>
                      <ul className="mt-4 space-y-3">{item.features.map((feature) => <li key={feature[0]} className="flex items-start gap-2 text-[11px] text-slate-300"><Check size={14} className="mt-0.5 shrink-0 text-cyan-300" />{ft(feature)}</li>)}</ul>
                    </div>
                    <div className="mt-auto rounded-xl bg-white/[0.03] p-4">
                      <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500">{tr("Suitable For", "သင့်လျော်သောနေရာများ")}</div>
                      <div className="mt-2 text-[10px] leading-5 text-slate-300">{tx(item.ideal)}</div>
                    </div>
                    <button onClick={() => openQuote(item.name)} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-4 text-xs font-black text-slate-950 hover:bg-cyan-300">{tr("Request Package Quote", "ပက်ကေ့ချ်ဈေးနှုန်း တောင်းခံရန်")} <ArrowRight size={15} /></button>
                    <div className="mt-3 text-center text-[9px] text-slate-600">{tr("Pricing based on deployment requirements", "ဝန်ထမ်းချထားမှု လိုအပ်ချက်အပေါ် မူတည်၍ ဈေးနှုန်းသတ်မှတ်ပါမည်")}</div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {(activeCategory === "All Packages" || activeCategory === "CCTV Systems") && (
          <div className="mt-20">
            <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">02 / {tr("Smart Surveillance", "စမတ်စောင့်ကြည့်ရေး")}</div>
                <h3 className="mt-2 text-2xl font-black">{tr("CCTV System Packages", "CCTV စနစ် ပက်ကေ့ချ်များ")}</h3>
                <p className="mt-2 text-xs text-slate-500">{tr("Scalable camera and recording solutions for your property.", "သင့်ပိုင်ဆိုင်မှုအတွက် တိုးချဲ့အသုံးပြုနိုင်သော ကင်မရာနှင့် မှတ်တမ်းတင်စနစ်များ။")}</p>
              </div>
              <Link href="/cctv-shop" className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300">{tr("Browse CCTV Products", "CCTV ပစ္စည်းများ ကြည့်ရန်")} <ArrowUpRight size={15} /></Link>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {cctvPackages.map((item) => (
                <article key={item.name} className={`overflow-hidden rounded-2xl border bg-[#0c1625] transition hover:-translate-y-1 hover:border-cyan-400/40 ${item.popular ? "border-cyan-400/40" : "border-white/10"}`}>
                  <div className="relative h-52 overflow-hidden">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1625] to-transparent" />
                    {item.popular && <span className="absolute right-4 top-4 rounded-full bg-cyan-400 px-3 py-1.5 text-[9px] font-black text-slate-950">{tr("POPULAR", "လူကြိုက်များ")}</span>}
                    <div className="absolute bottom-4 left-5"><div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">{my ? item.cameraMy : item.cameras}</div><h4 className="mt-1 text-xl font-black">{item.name}</h4></div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs leading-6 text-slate-400">{tx(item.subtitle)}</p>
                    <div className="mt-5 space-y-3">{item.features.map((feature) => <div key={feature[0]} className="flex gap-2 text-[11px] text-slate-300"><Check size={14} className="shrink-0 text-cyan-300" />{ft(feature)}</div>)}</div>
                    <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                      <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500">{tr("Recommended For", "သင့်လျော်သောနေရာများ")}</div>
                      <p className="mt-2 text-[10px] text-slate-300">{tx(item.ideal)}</p>
                    </div>
                    <button onClick={() => openQuote(item.name)} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/30 py-3.5 text-xs font-bold text-cyan-300 hover:bg-cyan-400/10">{tr("Request CCTV Quote", "CCTV ဈေးနှုန်း တောင်းခံရန်")} <ArrowRight size={15} /></button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {(activeCategory === "All Packages" || activeCategory === "Integrated Security") && (
          <div className="mt-20">
            <div className="mb-8">
              <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">03 / {tr("Unified Protection", "ပေါင်းစပ်လုံခြုံရေး")}</div>
              <h3 className="mt-2 text-2xl font-black">{tr("Integrated Security Packages", "ပေါင်းစပ်လုံခြုံရေး ပက်ကေ့ချ်များ")}</h3>
              <p className="mt-2 text-xs text-slate-500">{tr("Combine manpower and technology into one coordinated security solution.", "လုံခြုံရေးဝန်ထမ်းနှင့် နည်းပညာကို တစ်စုတစ်စည်းတည်း ပေါင်းစပ်ထားသော လုံခြုံရေးဖြေရှင်းချက်။")}</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {integratedPackages.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.name} className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#102234] to-[#0b1422] p-6 transition hover:border-cyan-400/40">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10"><Icon className="h-6 w-6 text-cyan-300" /></div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-cyan-300">{tr("Integrated Solution", "ပေါင်းစပ်ဖြေရှင်းချက်")}</span>
                    </div>
                    <h4 className="mt-6 text-lg font-black">{item.name}</h4>
                    <p className="mt-3 min-h-12 text-xs leading-6 text-slate-400">{tx(item.description)}</p>
                    <div className="mt-6 space-y-3 border-t border-white/10 pt-5">{item.features.map((feature) => <div key={feature[0]} className="flex gap-2 text-[10px] text-slate-300"><CheckCircle2 size={14} className="shrink-0 text-cyan-300" />{ft(feature)}</div>)}</div>
                    <button onClick={() => openQuote(item.name)} className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-4 text-xs font-black text-slate-950 hover:bg-cyan-300">{tr("Discuss This Solution", "ဤဖြေရှင်းချက်ကို ဆွေးနွေးရန်")} <ArrowRight size={15} /></button>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </section>

      <section className="border-y border-white/10 bg-[#0a1220]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="text-center">
            <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">{tr("Industries We Serve", "ဝန်ဆောင်မှုပေးသည့် လုပ်ငန်းကဏ္ဍများ")}</div>
            <h2 className="mt-3 text-3xl font-black">{tr("Security for Every Environment", "ပတ်ဝန်းကျင်အမျိုးမျိုးအတွက် လုံခြုံရေး")}</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => {
              const Icon = audience.icon;
              return <div key={audience.title.en} className="rounded-xl border border-white/10 bg-[#0d1929] p-5"><Icon size={24} className="text-cyan-300" /><h3 className="mt-5 text-sm font-bold">{tx(audience.title)}</h3><p className="mt-2 text-[10px] leading-5 text-slate-500">{tx(audience.text)}</p></div>;
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="text-center">
          <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">{tr("Our Process", "ကျွန်ုပ်တို့၏ လုပ်ငန်းစဉ်")}</div>
          <h2 className="mt-3 text-3xl font-black">{tr("From Enquiry to Protection", "စုံစမ်းမေးမြန်းမှုမှ လုံခြုံရေးဝန်ဆောင်မှုအထိ")}</h2>
          <p className="mt-3 text-xs text-slate-400">{tr("A clear process for planning your security requirements.", "သင့်လုံခြုံရေးလိုအပ်ချက်များအတွက် ရှင်းလင်းသော စီမံဆောင်ရွက်မှုအဆင့်များ။")}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            ["01", tr("Submit Enquiry", "စုံစမ်းမေးမြန်းရန်"), tr("Tell us about your location, needs and preferred service.", "သင့်တည်နေရာ၊ လိုအပ်ချက်နှင့် ရွေးချယ်လိုသော ဝန်ဆောင်မှုကို ပြောပြပါ။")],
            ["02", tr("Site Assessment", "လုပ်ငန်းနေရာ လေ့လာသုံးသပ်ခြင်း"), tr("Discuss site conditions, coverage and deployment requirements.", "လုပ်ငန်းနေရာအခြေအနေ၊ လွှမ်းခြုံမှုနှင့် ဝန်ထမ်းချထားမှု လိုအပ်ချက်များကို ဆွေးနွေးပါ။")],
            ["03", tr("Proposal & Quote", "အဆိုပြုချက်နှင့် ဈေးနှုန်း"), tr("Receive a proposed service scope and commercial quotation.", "အဆိုပြုဝန်ဆောင်မှုအတိုင်းအတာနှင့် ဈေးနှုန်းတင်ပြချက်ကို လက်ခံရယူပါ။")],
            ["04", tr("Service Coordination", "ဝန်ဆောင်မှု ညှိနှိုင်းဆောင်ရွက်ခြင်း"), tr("Coordinate the agreed service and implementation schedule.", "သဘောတူညီထားသော ဝန်ဆောင်မှုနှင့် အကောင်အထည်ဖော်မည့် အချိန်ဇယားကို ညှိနှိုင်းပါ။")],
          ].map(([number, title, description], index) => (
            <div key={number} className="relative rounded-2xl border border-white/10 bg-[#0c1625] p-6">
              <div className="text-3xl font-black text-cyan-400/40">{number}</div>
              <h3 className="mt-5 text-sm font-bold">{title}</h3>
              <p className="mt-3 text-[10px] leading-6 text-slate-400">{description}</p>
              {index < 3 && <ChevronRight className="absolute -right-4 top-10 hidden text-cyan-400/50 md:block" size={22} />}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#102b3d] via-[#0c1c2c] to-[#0b1422] p-8 sm:p-12">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-cyan-300"><LockKeyhole size={14} /> {tr("Your Security Starts Here", "သင့်လုံခြုံရေးကို ဤနေရာမှ စတင်ပါ")}</div>
              <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">{tr("Let's Build the Right Security Solution for Your Business.", "သင့်လုပ်ငန်းအတွက် သင့်လျော်သော လုံခြုံရေးဖြေရှင်းချက်ကို အတူတကွ တည်ဆောက်ကြပါစို့။")}</h2>
              <p className="mt-4 max-w-xl text-xs leading-7 text-slate-300">{tr("Contact ApexiveAI SecureGuard to discuss your guarding, CCTV or integrated security requirements.", "လုံခြုံရေးဝန်ထမ်း၊ CCTV သို့မဟုတ် ပေါင်းစပ်လုံခြုံရေး လိုအပ်ချက်များကို ဆွေးနွေးရန် ApexiveAI SecureGuard သို့ ဆက်သွယ်ပါ။")}</p>
            </div>
            <button onClick={() => openQuote()} className="inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-400 px-7 py-4 text-xs font-black text-slate-950 hover:bg-cyan-300">{tr("Request a Consultation", "ဆွေးနွေးတိုင်ပင်ရန် တောင်းဆိုပါ")} <ArrowUpRight size={17} /></button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050a12]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="text-sm font-black tracking-widest">APEXIVEAI</div>
            <div className="mt-1 text-[9px] font-bold tracking-[0.25em] text-cyan-300">SECUREGUARD</div>
            <p className="mt-4 max-w-xs text-xs leading-6 text-slate-500">{tr("Integrated security and surveillance solutions for modern businesses and properties.", "ခေတ်မီစီးပွားရေးလုပ်ငန်းများနှင့် ပိုင်ဆိုင်မှုများအတွက် ပေါင်းစပ်လုံခြုံရေးနှင့် စောင့်ကြည့်ရေးဖြေရှင်းချက်များ။")}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest">{tr("Company", "ကုမ္ပဏီ")}</h4>
            <div className="mt-5 flex flex-col gap-3 text-xs text-slate-500">
              <Link href="/about" className="hover:text-cyan-300">{tr("About Us", "ကျွန်ုပ်တို့အကြောင်း")}</Link>
              <Link href="/security-guards" className="hover:text-cyan-300">{tr("Security Guards", "လုံခြုံရေးဝန်ထမ်း")}</Link>
              <Link href="/services" className="hover:text-cyan-300">{tr("Our Services", "ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများ")}</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest">{tr("Solutions", "ဖြေရှင်းချက်များ")}</h4>
            <div className="mt-5 flex flex-col gap-3 text-xs text-slate-500">
              <Link href="/cctv-shop" className="hover:text-cyan-300">{tr("CCTV Shop", "CCTV အရောင်းဆိုင်")}</Link>
              <Link href="/packages" className="hover:text-cyan-300">{tr("Packages", "ပက်ကေ့ချ်များ")}</Link>
              <Link href="/get-a-quote" className="hover:text-cyan-300">{tr("Get a Quote", "ဈေးနှုန်းတောင်းခံရန်")}</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest">{tr("Contact", "ဆက်သွယ်ရန်")}</h4>
            <p className="mt-5 text-xs leading-6 text-slate-500">{tr("Get in touch for service enquiries, equipment consultations and project quotations.", "ဝန်ဆောင်မှုစုံစမ်းမေးမြန်းမှု၊ ပစ္စည်းဆိုင်ရာ အကြံပေးမှုနှင့် ပရောဂျက်ဈေးနှုန်းများအတွက် ဆက်သွယ်နိုင်ပါသည်။")}</p>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-cyan-300">{tr("Contact SecureGuard", "SecureGuard သို့ ဆက်သွယ်ရန်")} <ArrowRight size={14} /></Link>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-[10px] text-slate-600">© ApexiveAI SecureGuard. {tr("All rights reserved.", "မူပိုင်ခွင့်အားလုံး ရယူထားသည်။")}</div>
      </footer>

      {quoteOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm" onClick={() => setQuoteOpen(false)}>
          <div className="my-auto w-full max-w-xl rounded-2xl border border-white/10 bg-[#0c1625] p-6 shadow-2xl sm:p-8" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">{tr("Commercial Enquiry", "စီးပွားရေးဆိုင်ရာ စုံစမ်းမေးမြန်းမှု")}</div>
                <h3 className="mt-2 text-2xl font-black">{tr("Request a Quote", "ဈေးနှုန်းတောင်းခံရန်")}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-400">{tr("Share your requirements to discuss the right security solution.", "သင့်အတွက် သင့်လျော်သော လုံခြုံရေးဖြေရှင်းချက်ကို ဆွေးနွေးနိုင်ရန် လိုအပ်ချက်များကို မျှဝေပေးပါ။")}</p>
              </div>
              <button onClick={() => setQuoteOpen(false)} className="rounded-lg p-2 hover:bg-white/10" aria-label={tr("Close quotation form", "ဈေးနှုန်းတောင်းခံမှု ဖောင်ပိတ်ရန်")}><X size={19} /></button>
            </div>

            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400" />
                <h4 className="mt-5 text-lg font-black">{tr("Enquiry Preview Complete", "စုံစမ်းမေးမြန်းမှု အကြိုကြည့်ရှုပြီးပါပြီ")}</h4>
                <p className="mx-auto mt-3 max-w-sm text-xs leading-6 text-slate-400">{tr("This frontend demonstration has not sent or saved your enquiry. Connect the backend to receive real customer enquiries.", "ဤ Frontend သရုပ်ပြမှုသည် သင့်စုံစမ်းမေးမြန်းချက်ကို ပေးပို့ခြင်း သို့မဟုတ် သိမ်းဆည်းခြင်း မပြုလုပ်ပါ။ အမှန်တကယ် Customer များထံမှ စုံစမ်းမေးမြန်းမှုများ လက်ခံရန် Backend ချိတ်ဆက်ရန် လိုအပ်ပါသည်။")}</p>
                <button onClick={() => setQuoteOpen(false)} className="mt-7 rounded-xl bg-cyan-400 px-7 py-3 text-xs font-black text-slate-950">{tr("Close", "ပိတ်ရန်")}</button>
              </div>
            ) : (
              <form onSubmit={submitQuote} className="mt-7 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-xs text-slate-400">{tr("Full Name", "အမည်အပြည့်အစုံ")} *
                    <input required placeholder={tr("Your name", "သင့်အမည်")} className="mt-2 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                  </label>
                  <label className="text-xs text-slate-400">{tr("Company Name", "ကုမ္ပဏီအမည်")}
                    <input placeholder={tr("Company / Organization", "ကုမ္ပဏီ / အဖွဲ့အစည်း")} className="mt-2 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                  </label>
                  <label className="text-xs text-slate-400">{tr("Phone Number", "ဖုန်းနံပါတ်")} *
                    <input required type="tel" placeholder="+95 ..." className="mt-2 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                  </label>
                  <label className="text-xs text-slate-400">{tr("Email Address", "အီးမေးလ်လိပ်စာ")}
                    <input type="email" placeholder="name@example.com" className="mt-2 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                  </label>
                </div>

                <label className="block text-xs text-slate-400">{tr("Package of Interest", "စိတ်ဝင်စားသော ပက်ကေ့ချ်")} *
                  <select required value={selectedPackage} onChange={(event) => setSelectedPackage(event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400">
                    <option value="">{tr("Select a package", "ပက်ကေ့ချ် ရွေးချယ်ပါ")}</option>
                    {[...guardPackages.map((p) => p.name), ...cctvPackages.map((p) => p.name), ...integratedPackages.map((p) => p.name), "Custom Security Solution"].map((name) => <option key={name} value={name}>{name === "Custom Security Solution" ? tr(name, "စိတ်ကြိုက်လုံခြုံရေး ဖြေရှင်းချက်") : name}</option>)}
                  </select>
                </label>

                <label className="block text-xs text-slate-400">{tr("Project Location", "လုပ်ငန်းတည်နေရာ")} *
                  <input required placeholder={tr("Township, city or site address", "မြို့နယ်၊ မြို့ သို့မဟုတ် လုပ်ငန်းတည်နေရာ")} className="mt-2 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                </label>

                <label className="block text-xs text-slate-400">{tr("Requirements", "လိုအပ်ချက်များ")} *
                  <textarea required rows={4} placeholder={tr("Tell us about your security requirements...", "သင့်လုံခြုံရေးလိုအပ်ချက်များကို ရှင်းပြပေးပါ...")} className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#07101d] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                </label>

                <button type="submit" className="w-full rounded-xl bg-cyan-400 py-4 text-xs font-black text-slate-950 hover:bg-cyan-300">{tr("Preview Enquiry", "စုံစမ်းမေးမြန်းမှုကို အကြိုကြည့်ရန်")}</button>
                <p className="text-center text-[9px] leading-5 text-slate-600">{tr("Demonstration form only. Backend submission will be connected separately.", "သရုပ်ပြဖောင်သာ ဖြစ်ပါသည်။ Backend ပေးပို့မှုကို သီးခြားချိတ်ဆက်ရပါမည်။")}</p>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
