
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageProvider";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Eye,
  Target,
  Crosshair,
  Building2,
  Camera,
  Wrench,
  Users,
  Factory,
  Hotel,
  ShoppingBag,
  Landmark,
  Warehouse,
  LockKeyhole,
  Network,
  ClipboardCheck,
  ChevronRight,
  Shield,
  ScanEye,
  Headset,
} from "lucide-react";

export default function AboutPage() {
  const { language } = useLanguage();
  const my = language === "my";
  const tr = (en: string, mm: string) => (my ? mm : en);

  const principles = [
    {
      icon: ShieldCheck,
      title: tr("Protection First", "ကာကွယ်ရေးကို ဦးစားပေးခြင်း"),
      description: tr(
        "Security decisions should begin with protecting people, property, information and business continuity.",
        "လုံခြုံရေးဆိုင်ရာ ဆုံးဖြတ်ချက်များတွင် လူပုဂ္ဂိုလ်၊ ပိုင်ဆိုင်မှု၊ သတင်းအချက်အလက်နှင့် လုပ်ငန်းဆက်လက်လည်ပတ်နိုင်ရေးကို ဦးစားပေးရပါမည်။"
      ),
    },
    {
      icon: Eye,
      title: tr("Visibility & Awareness", "မြင်နိုင်စွမ်းနှင့် သတိပြုနိုင်မှု"),
      description: tr(
        "Better visibility helps organisations understand their environments and identify potential security concerns.",
        "စောင့်ကြည့်မြင်နိုင်စွမ်း ပိုမိုကောင်းမွန်ခြင်းသည် ပတ်ဝန်းကျင်အခြေအနေများကို နားလည်ပြီး ဖြစ်လာနိုင်သည့် လုံခြုံရေးအန္တရာယ်များကို ကြိုတင်သိရှိစေပါသည်။"
      ),
    },
    {
      icon: ClipboardCheck,
      title: tr("Structured Operations", "စနစ်တကျ လုပ်ငန်းဆောင်ရွက်မှု"),
      description: tr(
        "Clear requirements, defined responsibilities and practical procedures are central to effective security.",
        "ရှင်းလင်းသော လိုအပ်ချက်များ၊ တာဝန်ခွဲဝေမှုများနှင့် လက်တွေ့အသုံးချနိုင်သော လုပ်ထုံးလုပ်နည်းများသည် ထိရောက်သော လုံခြုံရေးအတွက် အရေးကြီးပါသည်။"
      ),
    },
    {
      icon: LockKeyhole,
      title: tr("Responsible Security", "တာဝန်ယူမှုရှိသော လုံခြုံရေး"),
      description: tr(
        "Security measures should respect privacy, applicable laws, safety requirements and agreed operating procedures.",
        "လုံခြုံရေးဆောင်ရွက်ချက်များသည် ကိုယ်ရေးကိုယ်တာလွတ်လပ်ခွင့်၊ သက်ဆိုင်ရာဥပဒေများ၊ ဘေးကင်းရေးလိုအပ်ချက်များနှင့် သဘောတူညီထားသော လုပ်ထုံးလုပ်နည်းများကို လေးစားလိုက်နာရပါမည်။"
      ),
    },
  ];

  const capabilities = [
    {
      icon: Users,
      number: "01",
      title: tr("Manned Guarding", "လုံခြုံရေးဝန်ထမ်း ဝန်ဆောင်မှု"),
      description: tr(
        "Security personnel solutions designed around site requirements, access control needs and operational risk.",
        "လုပ်ငန်းခွင်လိုအပ်ချက်၊ ဝင်ထွက်ထိန်းချုပ်မှုနှင့် လုပ်ငန်းဆောင်ရွက်မှုဆိုင်ရာ အန္တရာယ်များအပေါ် အခြေခံ၍ လုံခြုံရေးဝန်ထမ်း ဝန်ဆောင်မှုများကို စီစဉ်ပေးခြင်း။"
      ),
      tags: [
        tr("Corporate Security", "လုပ်ငန်းခွင်လုံခြုံရေး"),
        tr("Site Protection", "နေရာလုံခြုံရေး"),
        tr("Event Security", "ပွဲလမ်းသဘင် လုံခြုံရေး"),
      ],
    },
    {
      icon: Camera,
      number: "02",
      title: tr("CCTV & Surveillance", "CCTV နှင့် စောင့်ကြည့်ရေး"),
      description: tr(
        "Video surveillance systems that help businesses monitor premises, improve visibility and review security events.",
        "လုပ်ငန်းခွင်များကို စောင့်ကြည့်နိုင်ရန်၊ မြင်နိုင်စွမ်းတိုးတက်စေရန်နှင့် လုံခြုံရေးဖြစ်စဉ်များကို ပြန်လည်စစ်ဆေးနိုင်ရန် Video Surveillance စနစ်များ တပ်ဆင်အသုံးပြုခြင်း။"
      ),
      tags: ["IP Cameras", "NVR Systems", tr("Remote Monitoring", "အဝေးမှ စောင့်ကြည့်ခြင်း")],
    },
    {
      icon: Wrench,
      number: "03",
      title: tr("Installation & Maintenance", "တပ်ဆင်ခြင်းနှင့် ပြုပြင်ထိန်းသိမ်းခြင်း"),
      description: tr(
        "Security equipment installation, system configuration, inspection and maintenance support based on project scope.",
        "စီမံကိန်းအတိုင်းအတာအပေါ် မူတည်၍ လုံခြုံရေးပစ္စည်းများ တပ်ဆင်ခြင်း၊ စနစ်ပြင်ဆင်သတ်မှတ်ခြင်း၊ စစ်ဆေးခြင်းနှင့် ပြုပြင်ထိန်းသိမ်းရေး ပံ့ပိုးမှုများ ဆောင်ရွက်ခြင်း။"
      ),
      tags: [
        tr("System Installation", "စနစ်တပ်ဆင်ခြင်း"),
        tr("Configuration", "စနစ်သတ်မှတ်ခြင်း"),
        tr("Maintenance", "ထိန်းသိမ်းခြင်း"),
      ],
    },
    {
      icon: Network,
      number: "04",
      title: tr("Integrated Security", "ပေါင်းစပ်လုံခြုံရေးစနစ်"),
      description: tr(
        "Coordinated security solutions combining people, surveillance technology and operational procedures.",
        "လူအင်အား၊ စောင့်ကြည့်ရေးနည်းပညာနှင့် လုပ်ငန်းဆောင်ရွက်မှု လုပ်ထုံးလုပ်နည်းများကို ပေါင်းစပ်ညှိနှိုင်းထားသော လုံခြုံရေးဖြေရှင်းချက်များ။"
      ),
      tags: [
        tr("Smart Security", "စမတ်လုံခြုံရေး"),
        tr("Access Control", "ဝင်ထွက်ထိန်းချုပ်မှု"),
        tr("System Integration", "စနစ်ပေါင်းစည်းခြင်း"),
      ],
    },
  ];

  const industries = [
    { icon: Building2, name: tr("Corporate Offices", "ကုမ္ပဏီရုံးခန်းများ"), detail: tr("Workplaces & commercial buildings", "လုပ်ငန်းခွင်နှင့် စီးပွားရေးအဆောက်အအုံများ") },
    { icon: Factory, name: tr("Industrial Facilities", "စက်မှုလုပ်ငန်းများ"), detail: tr("Factories & production sites", "စက်ရုံများနှင့် ထုတ်လုပ်ရေးလုပ်ငန်းခွင်များ") },
    { icon: ShoppingBag, name: tr("Retail & Shopping", "လက်လီအရောင်းနှင့် ဈေးဝယ်စင်တာများ"), detail: tr("Retail premises & shopping centres", "အရောင်းဆိုင်များနှင့် ဈေးဝယ်စင်တာများ") },
    { icon: Hotel, name: tr("Hospitality", "ဟိုတယ်နှင့် ဧည့်ဝန်ဆောင်မှုလုပ်ငန်းများ"), detail: tr("Hotels & hospitality properties", "ဟိုတယ်များနှင့် ဧည့်ဝန်ဆောင်မှုဆိုင်ရာ အဆောက်အအုံများ") },
    { icon: Warehouse, name: tr("Warehousing & Logistics", "ကုန်လှောင်ရုံနှင့် ထောက်ပံ့ပို့ဆောင်ရေး"), detail: tr("Storage & distribution facilities", "သိုလှောင်ရေးနှင့် ဖြန့်ဖြူးရေးလုပ်ငန်းခွင်များ") },
    { icon: Landmark, name: tr("Institutions", "အဖွဲ့အစည်းများ"), detail: tr("Institutional & public facilities", "အဖွဲ့အစည်းဆိုင်ရာနှင့် အများပြည်သူသုံး အဆောက်အအုံများ") },
  ];

  const process = [
    {
      step: "01",
      title: tr("Understand", "နားလည်လေ့လာခြင်း"),
      description: tr(
        "Discuss your property, security concerns, operational requirements and objectives.",
        "သင့်ပိုင်ဆိုင်မှု၊ လုံခြုံရေးဆိုင်ရာ စိုးရိမ်ချက်များ၊ လုပ်ငန်းလိုအပ်ချက်များနှင့် ရည်မှန်းချက်များကို ဆွေးနွေးလေ့လာခြင်း။"
      ),
    },
    {
      step: "02",
      title: tr("Assess", "အကဲဖြတ်စစ်ဆေးခြင်း"),
      description: tr(
        "Review the site conditions, coverage requirements and suitable security options.",
        "လုပ်ငန်းခွင်အခြေအနေ၊ လွှမ်းခြုံစောင့်ကြည့်ရန် လိုအပ်ချက်များနှင့် သင့်လျော်သော လုံခြုံရေးရွေးချယ်စရာများကို စစ်ဆေးခြင်း။"
      ),
    },
    {
      step: "03",
      title: tr("Propose", "အဆိုပြုတင်ပြခြင်း"),
      description: tr(
        "Prepare a proposed scope, configuration and quotation for your consideration.",
        "သုံးသပ်ဆုံးဖြတ်နိုင်ရန် ဝန်ဆောင်မှုအတိုင်းအတာ၊ စနစ်ဖွဲ့စည်းပုံနှင့် ဈေးနှုန်းအဆိုပြုလွှာကို ပြင်ဆင်တင်ပြခြင်း။"
      ),
    },
    {
      step: "04",
      title: tr("Implement", "အကောင်အထည်ဖော်ခြင်း"),
      description: tr(
        "Proceed with agreed services, deployment or installation subject to the final agreement.",
        "နောက်ဆုံးသဘောတူညီချက်နှင့်အညီ သဘောတူထားသော ဝန်ဆောင်မှု၊ ဖြန့်ကျက်ဆောင်ရွက်မှု သို့မဟုတ် တပ်ဆင်မှုများကို အကောင်အထည်ဖော်ခြင်း။"
      ),
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#080e18] text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080e18]/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
              <ShieldCheck className="h-6 w-6 text-cyan-300" />
            </div>
            <div>
              <div className="text-sm font-black tracking-[0.13em]">APEXIVEAI</div>
              <div className="text-[10px] font-semibold tracking-[0.25em] text-cyan-300">SECUREGUARD</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
            <Link href="/" className="transition hover:text-cyan-300">{tr("Home", "ပင်မစာမျက်နှာ")}</Link>
            <Link href="/services" className="transition hover:text-cyan-300">{tr("Services", "ဝန်ဆောင်မှုများ")}</Link>
            <Link href="/security-guards" className="transition hover:text-cyan-300">{tr("Security Guards", "လုံခြုံရေးဝန်ထမ်းများ")}</Link>
            <Link href="/cctv-shop" className="transition hover:text-cyan-300">{tr("CCTV Shop", "CCTV အရောင်းဆိုင်")}</Link>
            <Link href="/packages" className="transition hover:text-cyan-300">{tr("Packages", "ဝန်ဆောင်မှု Package များ")}</Link>
            <Link href="/about" className="text-cyan-300">{tr("About Us", "ကျွန်ုပ်တို့အကြောင်း")}</Link>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <LanguageSwitcher />
            <Link
              href="/get-a-quote"
              className="flex items-center gap-2 rounded-lg bg-cyan-400 px-3 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-cyan-300 sm:px-5 sm:text-sm"
            >
              <span className="hidden sm:inline">{tr("Get a Quote", "ဈေးနှုန်းတောင်းခံရန်")}</span>
              <span className="sm:hidden">{tr("Quote", "ဈေးနှုန်း")}</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,rgba(6,182,212,0.13),transparent_45%),radial-gradient(ellipse_at_10%_90%,rgba(37,99,235,0.10),transparent_40%)]" />
        <div className="absolute right-0 top-0 h-full w-[45%] bg-[linear-gradient(110deg,transparent,rgba(34,211,238,0.025))]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              {tr("About ApexiveAI SecureGuard", "ApexiveAI SecureGuard အကြောင်း")}
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.13] tracking-tight sm:text-5xl lg:text-[62px]">
              {tr("Security is more than", "လုံခြုံရေးဆိုတာ")}{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                {tr("protection.", "ကာကွယ်ပေးရုံသာ မဟုတ်ပါ။")}
              </span>
              <br />
              {tr("It is confidence.", "ယုံကြည်စိတ်ချမှုလည်း ဖြစ်ပါတယ်။")}
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              {tr(
                "ApexiveAI SecureGuard is a security solutions brand focused on bringing people, surveillance technology and practical security services together to support safer environments for businesses and organisations.",
                "ApexiveAI SecureGuard သည် လူအင်အား၊ စောင့်ကြည့်ရေးနည်းပညာနှင့် လက်တွေ့အသုံးချနိုင်သော လုံခြုံရေးဝန်ဆောင်မှုများကို ပေါင်းစပ်ကာ စီးပွားရေးလုပ်ငန်းများနှင့် အဖွဲ့အစည်းများအတွက် ပိုမိုဘေးကင်းသော ပတ်ဝန်းကျင်များ ဖန်တီးနိုင်ရန် ရည်ရွယ်ထားသည့် လုံခြုံရေးဖြေရှင်းချက် Brand တစ်ခုဖြစ်ပါသည်။"
              )}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/services" className="group flex items-center gap-3 rounded-lg bg-cyan-400 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-300">
                {tr("Explore Our Services", "ဝန်ဆောင်မှုများကို လေ့လာရန်")}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="flex items-center gap-3 rounded-lg border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:bg-white/[0.04]">
                {tr("Contact Our Team", "ကျွန်ုပ်တို့အဖွဲ့ကို ဆက်သွယ်ရန်")}
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck size={16} className="text-cyan-400" />
                {tr("Security-focused solutions", "လုံခြုံရေးကို အခြေခံသော ဖြေရှင်းချက်များ")}
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ScanEye size={16} className="text-cyan-400" />
                {tr("Technology-enabled visibility", "နည်းပညာအခြေပြု စောင့်ကြည့်မြင်နိုင်မှု")}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
            <div className="absolute -inset-5 rounded-[35px] bg-cyan-400/[0.06] blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101c2c]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#080e18] via-transparent to-transparent" />
              <img
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=85"
                alt="Professional security surveillance monitoring environment"
                className="h-[440px] w-full object-cover opacity-80 sm:h-[520px]"
              />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  {tr("Integrated Security Approach", "ပေါင်းစပ်လုံခြုံရေး ချဉ်းကပ်မှု")}
                </div>
                <h2 className="max-w-md text-2xl font-bold leading-snug sm:text-3xl">
                  {tr("People. Technology. Protection.", "လူအင်အား။ နည်းပညာ။ ကာကွယ်မှု။")}
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                  {tr(
                    "A coordinated approach to security, shaped around each organisation's environment and requirements.",
                    "အဖွဲ့အစည်းတစ်ခုချင်းစီ၏ ပတ်ဝန်းကျင်နှင့် လိုအပ်ချက်များအပေါ် အခြေခံထားသော ညှိနှိုင်းပေါင်းစပ်သည့် လုံခြုံရေးချဉ်းကပ်မှု။"
                  )}
                </p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-cyan-400/20 bg-[#101d2d] p-4 shadow-2xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/10">
                  <Crosshair className="text-cyan-300" size={23} />
                </div>
                <div>
                  <div className="text-sm font-bold">{tr("Risk-aware", "အန္တရာယ်အကဲဖြတ်မှု")}</div>
                  <div className="mt-1 text-xs text-slate-400">{tr("Site-focused solutions", "လုပ်ငန်းခွင်အခြေပြု ဖြေရှင်းချက်များ")}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who we are */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">{tr("Who We Are", "ကျွန်ုပ်တို့ ဘယ်သူတွေလဲ")}</div>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            {tr("A security solutions brand built around modern protection needs.", "ခေတ်မီလုံခြုံရေးလိုအပ်ချက်များအတွက် တည်ဆောက်ထားသော လုံခြုံရေးဖြေရှင်းချက် Brand တစ်ခု။")}
          </h2>
          <p className="mt-7 leading-8 text-slate-400">
            {tr(
              "ApexiveAI SecureGuard is associated with the ApexiveAI ecosystem and is focused on the security services and technology sector. Its public-facing service concept brings together manned guarding, CCTV and surveillance, installation, maintenance and integrated security solutions.",
              "ApexiveAI SecureGuard သည် ApexiveAI Ecosystem နှင့် ဆက်စပ်လျက် လုံခြုံရေးဝန်ဆောင်မှုနှင့် နည်းပညာကဏ္ဍကို အဓိကထားသော Brand တစ်ခုဖြစ်ပါသည်။ ၎င်း၏ ဝန်ဆောင်မှုအယူအဆတွင် လုံခြုံရေးဝန်ထမ်းဝန်ဆောင်မှု၊ CCTV နှင့် စောင့်ကြည့်ရေး၊ တပ်ဆင်ခြင်း၊ ထိန်းသိမ်းခြင်းနှင့် ပေါင်းစပ်လုံခြုံရေးဖြေရှင်းချက်များ ပါဝင်ပါသည်။"
            )}
          </p>
          <p className="mt-5 leading-8 text-slate-400">
            {tr(
              "We believe security requirements are different from one property to another. A retail business, an industrial facility and a corporate office each have different environments, risks and operational priorities. Our approach begins with understanding those differences before proposing a suitable solution.",
              "အဆောက်အအုံနှင့် လုပ်ငန်းတစ်ခုချင်းစီတွင် လုံခြုံရေးလိုအပ်ချက်များ မတူညီကြောင်း ကျွန်ုပ်တို့ ယုံကြည်ပါသည်။ အရောင်းဆိုင်၊ စက်မှုလုပ်ငန်းခွင်နှင့် ကုမ္ပဏီရုံးခန်းတို့တွင် ပတ်ဝန်းကျင်အခြေအနေ၊ အန္တရာယ်နှင့် လုပ်ငန်းဦးစားပေးချက်များ ကွဲပြားကြပါသည်။ ထို့ကြောင့် သင့်လျော်သော ဖြေရှင်းချက်ကို မတင်ပြမီ ထိုကွဲပြားမှုများကို ဦးစွာနားလည်ရန် ကျွန်ုပ်တို့ ကြိုးပမ်းပါသည်။"
            )}
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-cyan-300">
            <Shield size={19} />
            {tr("A practical, coordinated approach to security", "လက်တွေ့ကျပြီး ညှိနှိုင်းပေါင်းစပ်ထားသော လုံခြုံရေးချဉ်းကပ်မှု")}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Users, title: tr("People", "လူအင်အား"), description: tr("Security personnel and site-oriented guarding concepts.", "လုံခြုံရေးဝန်ထမ်းများနှင့် လုပ်ငန်းခွင်အခြေပြု လုံခြုံရေးအယူအဆများ။") },
            { icon: Camera, title: tr("Technology", "နည်းပညာ"), description: tr("CCTV, surveillance equipment and security technology.", "CCTV၊ စောင့်ကြည့်ရေးပစ္စည်းများနှင့် လုံခြုံရေးနည်းပညာများ။") },
            { icon: Network, title: tr("Integration", "ပေါင်းစည်းမှု"), description: tr("Coordinated systems and connected security components.", "ညှိနှိုင်းထားသော စနစ်များနှင့် ချိတ်ဆက်ထားသော လုံခြုံရေးအစိတ်အပိုင်းများ။") },
            { icon: Headset, title: tr("Support", "ပံ့ပိုးမှု"), description: tr("Consultation, installation and maintenance options.", "အကြံပေးခြင်း၊ တပ်ဆင်ခြင်းနှင့် ထိန်းသိမ်းခြင်းဆိုင်ရာ ရွေးချယ်စရာများ။") },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className={`rounded-2xl border border-white/[0.08] bg-[#101a29] p-6 ${index % 2 === 1 ? "mt-8" : ""}`}>
                <Icon className="mb-6 text-cyan-300" size={27} />
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="border-y border-white/[0.06] bg-[#0b1421]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-[#10283a] to-[#101827] p-8 sm:p-10">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cyan-400/[0.08] blur-3xl" />
            <div className="relative">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10"><Eye className="text-cyan-300" size={27} /></div>
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">{tr("Our Vision", "ကျွန်ုပ်တို့၏ မျှော်မှန်းချက်")}</div>
              <h2 className="mt-5 text-3xl font-black leading-tight">{tr("A safer and smarter environment for everyone.", "လူတိုင်းအတွက် ပိုမိုလုံခြုံပြီး ပိုမိုထက်မြက်သော ပတ်ဝန်းကျင်တစ်ခု။")}</h2>
              <p className="mt-5 leading-8 text-slate-300">
                {tr(
                  "To contribute to safer workplaces, properties and communities through responsible security practices and the thoughtful use of modern security technology.",
                  "တာဝန်ယူမှုရှိသော လုံခြုံရေးလုပ်ငန်းစဉ်များနှင့် ခေတ်မီလုံခြုံရေးနည်းပညာများကို သင့်လျော်စွာ အသုံးချခြင်းဖြင့် လုပ်ငန်းခွင်များ၊ ပိုင်ဆိုင်မှုများနှင့် လူမှုအသိုင်းအဝိုင်းများ ပိုမိုလုံခြုံလာစေရန် ပါဝင်ကူညီရန်။"
                )}
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111d2c] p-8 sm:p-10">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-blue-500/[0.08] blur-3xl" />
            <div className="relative">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-300/10"><Target className="text-blue-300" size={27} /></div>
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">{tr("Our Mission", "ကျွန်ုပ်တို့၏ ရည်မှန်းချက်")}</div>
              <h2 className="mt-5 text-3xl font-black leading-tight">{tr("Make security more structured and accessible.", "လုံခြုံရေးဝန်ဆောင်မှုများကို ပိုမိုစနစ်ကျပြီး လက်လှမ်းမီစေရန်။")}</h2>
              <p className="mt-5 leading-8 text-slate-300">
                {tr(
                  "To develop and offer practical security service options that combine people, equipment and clear operating requirements around the needs of each customer.",
                  "ဖောက်သည်တစ်ဦးချင်းစီ၏ လိုအပ်ချက်များအပေါ် အခြေခံ၍ လူအင်အား၊ ပစ္စည်းကိရိယာနှင့် ရှင်းလင်းသော လုပ်ငန်းလိုအပ်ချက်များကို ပေါင်းစပ်ထားသည့် လက်တွေ့ကျသော လုံခြုံရေးဝန်ဆောင်မှု ရွေးချယ်စရာများကို ဖော်ဆောင်ပေးရန်။"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">{tr("Our Security Philosophy", "ကျွန်ုပ်တို့၏ လုံခြုံရေးခံယူချက်")}</div>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">{tr("The principles behind every security decision.", "လုံခြုံရေးဆုံးဖြတ်ချက်တိုင်း၏ နောက်ကွယ်မှ အခြေခံမူများ။")}</h2>
          <p className="mt-5 leading-7 text-slate-400">
            {tr(
              "Effective security is not just about equipment or personnel. It requires a balanced approach that considers people, property, procedures and the environment.",
              "ထိရောက်သော လုံခြုံရေးဆိုသည်မှာ ပစ္စည်းကိရိယာ သို့မဟုတ် ဝန်ထမ်းများအပေါ်တွင်သာ မူတည်ခြင်းမဟုတ်ပါ။ လူပုဂ္ဂိုလ်၊ ပိုင်ဆိုင်မှု၊ လုပ်ထုံးလုပ်နည်းနှင့် ပတ်ဝန်းကျင်တို့ကို မျှတစွာ ထည့်သွင်းစဉ်းစားသည့် ချဉ်းကပ်မှု လိုအပ်ပါသည်။"
            )}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="rounded-2xl border border-white/[0.08] bg-[#101a29] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30">
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10"><Icon className="text-cyan-300" size={23} /></div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-white/[0.06] bg-[#0b1421]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">{tr("What We Focus On", "ကျွန်ုပ်တို့ အဓိကထားဆောင်ရွက်သည့် ကဏ္ဍများ")}</div>
              <h2 className="text-3xl font-black leading-tight sm:text-4xl">{tr("Security capabilities under one brand.", "Brand တစ်ခုတည်းအောက်ရှိ လုံခြုံရေးစွမ်းဆောင်ရည်များ။")}</h2>
              <p className="mt-5 leading-7 text-slate-400">
                {tr(
                  "Explore the service areas that may be included in a project, subject to assessment, availability and final agreement.",
                  "စစ်ဆေးအကဲဖြတ်မှု၊ ဝန်ဆောင်မှုရရှိနိုင်မှုနှင့် နောက်ဆုံးသဘောတူညီချက်အပေါ် မူတည်၍ စီမံကိန်းတစ်ခုတွင် ပါဝင်နိုင်သည့် ဝန်ဆောင်မှုကဏ္ဍများကို လေ့လာနိုင်ပါသည်။"
                )}
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition hover:text-cyan-200">
              {tr("View Service Details", "ဝန်ဆောင်မှုအသေးစိတ်ကြည့်ရန်")} <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="group rounded-2xl border border-white/[0.08] bg-[#101b2b] p-7 transition hover:border-cyan-400/30 sm:p-9">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08]"><Icon className="text-cyan-300" size={26} /></div>
                    <span className="text-sm font-bold tracking-widest text-slate-600">{item.number}</span>
                  </div>
                  <h3 className="mt-7 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">{item.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-slate-400">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">{tr("Industries & Environments", "လုပ်ငန်းကဏ္ဍများနှင့် ပတ်ဝန်းကျင်များ")}</div>
          <h2 className="text-3xl font-black sm:text-4xl">{tr("Different environments. Different security needs.", "ပတ်ဝန်းကျင်မတူလျှင် လုံခြုံရေးလိုအပ်ချက်လည်း မတူညီပါ။")}</h2>
          <p className="mt-5 leading-7 text-slate-400">
            {tr(
              "Security requirements depend on the property, operating model, location and risk profile. These are the environments our service concepts are designed to address.",
              "လုံခြုံရေးလိုအပ်ချက်များသည် ပိုင်ဆိုင်မှု၊ လုပ်ငန်းလည်ပတ်မှုပုံစံ၊ တည်နေရာနှင့် အန္တရာယ်အခြေအနေတို့အပေါ် မူတည်ပါသည်။ အောက်ပါပတ်ဝန်းကျင်များအတွက် ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုအယူအဆများကို ရည်ရွယ်ဖော်ဆောင်ထားပါသည်။"
            )}
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.name} className="flex items-center gap-5 rounded-xl border border-white/[0.08] bg-[#101a29] p-6 transition hover:border-cyan-400/30">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10"><Icon className="text-cyan-300" size={23} /></div>
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{item.detail}</p>
                </div>
                <ChevronRight className="ml-auto shrink-0 text-slate-600" size={17} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-white/[0.06] bg-[#0b1421]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">{tr("How We Approach a Project", "စီမံကိန်းတစ်ခုကို ကျွန်ုပ်တို့ ချဉ်းကပ်ပုံ")}</div>
            <h2 className="text-3xl font-black sm:text-4xl">{tr("From understanding your needs to a proposed solution.", "သင့်လိုအပ်ချက်ကို နားလည်ခြင်းမှ သင့်လျော်သော ဖြေရှင်းချက်တင်ပြခြင်းအထိ။")}</h2>
          </div>

          <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-cyan-400/50 via-blue-400/30 to-transparent lg:block" />
            {process.map((item) => (
              <div key={item.step} className="relative">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/30 bg-[#102234] text-sm font-black text-cyan-300">{item.step}</div>
                <h3 className="mt-7 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(6,182,212,0.17),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 lg:py-28">
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10"><ShieldCheck className="text-cyan-300" size={32} /></div>
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">{tr("Let's Discuss Your Security Requirements", "သင့်လုံခြုံရေးလိုအပ်ချက်များကို ဆွေးနွေးကြရအောင်")}</div>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
            {tr("Build a more secure environment with a solution designed around you.", "သင့်လိုအပ်ချက်များအပေါ် အခြေခံထားသော ဖြေရှင်းချက်ဖြင့် ပိုမိုလုံခြုံသော ပတ်ဝန်းကျင်တစ်ခုကို တည်ဆောက်ပါ။")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            {tr(
              "Tell us about your property, business or project. We can discuss your requirements and explore suitable security service options.",
              "သင့်ပိုင်ဆိုင်မှု၊ လုပ်ငန်း သို့မဟုတ် စီမံကိန်းအကြောင်း ကျွန်ုပ်တို့ကို ပြောပြပါ။ သင့်လိုအပ်ချက်များကို ဆွေးနွေးပြီး သင့်လျော်သော လုံခြုံရေးဝန်ဆောင်မှု ရွေးချယ်စရာများကို လေ့လာနိုင်ပါသည်။"
            )}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/get-a-quote" className="flex items-center gap-3 rounded-lg bg-cyan-400 px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-300">
              {tr("Request a Consultation", "ဆွေးနွေးတိုင်ပင်ရန်")} <ArrowRight size={17} />
            </Link>
            <Link href="/contact" className="flex items-center gap-3 rounded-lg border border-white/15 px-7 py-4 text-sm font-semibold transition hover:border-cyan-400/50 hover:bg-white/[0.04]">
              {tr("Contact Us", "ဆက်သွယ်ရန်")}
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
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10"><ShieldCheck className="text-cyan-300" size={24} /></div>
                <div>
                  <div className="font-black tracking-[0.14em]">APEXIVEAI</div>
                  <div className="text-[10px] font-bold tracking-[0.25em] text-cyan-300">SECUREGUARD</div>
                </div>
              </Link>
              <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
                {tr(
                  "Security services and technology solutions designed to support safer environments through people, surveillance and integrated security concepts.",
                  "လူအင်အား၊ စောင့်ကြည့်ရေးနည်းပညာနှင့် ပေါင်းစပ်လုံခြုံရေးအယူအဆများမှတစ်ဆင့် ပိုမိုဘေးကင်းသော ပတ်ဝန်းကျင်များ ဖန်တီးနိုင်ရန် ရည်ရွယ်ထားသည့် လုံခြုံရေးဝန်ဆောင်မှုများနှင့် နည်းပညာဖြေရှင်းချက်များ။"
                )}
              </p>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-bold">{tr("Explore", "လေ့လာရန်")}</h3>
              <div className="space-y-3 text-sm text-slate-500">
                <Link className="block transition hover:text-cyan-300" href="/services">{tr("Our Services", "ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများ")}</Link>
                <Link className="block transition hover:text-cyan-300" href="/security-guards">{tr("Security Guards", "လုံခြုံရေးဝန်ထမ်းများ")}</Link>
                <Link className="block transition hover:text-cyan-300" href="/cctv-shop">{tr("CCTV Shop", "CCTV အရောင်းဆိုင်")}</Link>
                <Link className="block transition hover:text-cyan-300" href="/packages">{tr("Packages", "Package များ")}</Link>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-bold">{tr("Company", "ကုမ္ပဏီ")}</h3>
              <div className="space-y-3 text-sm text-slate-500">
                <Link className="block transition hover:text-cyan-300" href="/about">{tr("About Us", "ကျွန်ုပ်တို့အကြောင်း")}</Link>
                <Link className="block transition hover:text-cyan-300" href="/contact">{tr("Contact", "ဆက်သွယ်ရန်")}</Link>
                <Link className="block transition hover:text-cyan-300" href="/get-a-quote">{tr("Request a Quote", "ဈေးနှုန်းတောင်းခံရန်")}</Link>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/[0.07] pt-7 text-xs text-slate-600 sm:flex-row">
            <p>© ApexiveAI SecureGuard. {tr("All rights reserved.", "မူပိုင်ခွင့်အားလုံး လက်ဝယ်ရှိသည်။")}</p>
            <p>{tr("Security solutions. Designed around your requirements.", "သင့်လိုအပ်ချက်များအတွက် ရည်ရွယ်ဖန်တီးထားသော လုံခြုံရေးဖြေရှင်းချက်များ။")}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
