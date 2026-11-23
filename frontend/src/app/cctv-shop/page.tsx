
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Check,
  CheckCircle2,
  HardDrive,
  Menu,
  Plus,
  Search,
  ShieldCheck,
  ShoppingCart,
  SlidersHorizontal,
  Wifi,
  Wrench,
  X,
} from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageProvider";

type Product = {
  id: number;
  name: string;
  category: string;
  type: string;
  description: string;
  image: string;
  resolution: string;
  nightVision: string;
  connectivity: string;
  features: string[];
  badge?: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Apex Dome Cam Pro",
    category: "Indoor Cameras",
    type: "IP Camera",
    description: "High-definition indoor surveillance for offices, shops and residential spaces.",
    image: "/cctv-security-wall.png",
    resolution: "4MP Ultra HD",
    nightVision: "30m IR Night Vision",
    connectivity: "PoE / Ethernet",
    features: ["Motion Detection", "Two-way Audio", "Mobile Monitoring"],
    badge: "Popular",
  },
  {
    id: 2,
    name: "Apex BulletGuard 4K",
    category: "Outdoor Cameras",
    type: "IP Camera",
    description: "Weather-resistant outdoor camera designed for perimeter and entrance protection.",
    image: "/cctv-security-wall.png",
    resolution: "8MP 4K",
    nightVision: "50m IR Night Vision",
    connectivity: "PoE / Ethernet",
    features: ["IP67 Weatherproof", "Human Detection", "Smart Alerts"],
    badge: "4K Security",
  },
  {
    id: 3,
    name: "Apex PTZ Vision 360",
    category: "PTZ Cameras",
    type: "PTZ IP Camera",
    description: "Pan, tilt and zoom surveillance for large facilities and wide-area monitoring.",
    image: "/cctv-security-wall.png",
    resolution: "4MP",
    nightVision: "100m IR Night Vision",
    connectivity: "PoE+ / Network",
    features: ["360° Pan", "Optical Zoom", "Auto Tracking"],
    badge: "Enterprise",
  },
  {
    id: 4,
    name: "Apex Smart DoorView",
    category: "Smart Doorbells",
    type: "Video Doorbell",
    description: "Smart entrance monitoring with visitor video, alerts and two-way communication.",
    image: "/cctv-security-wall.png",
    resolution: "2K",
    nightVision: "Infrared Night Vision",
    connectivity: "Wi-Fi",
    features: ["Two-way Talk", "Visitor Alerts", "Mobile App"],
  },
  {
    id: 5,
    name: "Apex NightWatch 5MP",
    category: "Outdoor Cameras",
    type: "IP Camera",
    description: "Reliable night-time monitoring for warehouses, compounds and business premises.",
    image: "/cctv-security-wall.png",
    resolution: "5MP",
    nightVision: "60m Color Night Vision",
    connectivity: "PoE / Ethernet",
    features: ["Color Night Vision", "Intrusion Alerts", "IP67"],
  },
  {
    id: 6,
    name: "Apex Indoor Wi-Fi Mini",
    category: "Indoor Cameras",
    type: "Wi-Fi Camera",
    description: "Compact wireless monitoring for homes, counters and small business areas.",
    image: "/cctv-security-wall.png",
    resolution: "2K QHD",
    nightVision: "10m IR Night Vision",
    connectivity: "2.4GHz Wi-Fi",
    features: ["Remote Viewing", "Motion Alerts", "MicroSD Support"],
  },
  {
    id: 7,
    name: "Apex Network Recorder 16",
    category: "NVR / DVR",
    type: "Network Video Recorder",
    description: "Centralized recording and playback for multi-camera security installations.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900",
    resolution: "16 Channel",
    nightVision: "Camera Dependent",
    connectivity: "Ethernet / HDMI",
    features: ["16 Channel Support", "Remote Playback", "HDD Storage"],
    badge: "System Core",
  },
  {
    id: 8,
    name: "Apex Surveillance Storage",
    category: "Storage & Accessories",
    type: "Surveillance HDD",
    description: "Dedicated storage solution for continuous CCTV recording environments.",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=900",
    resolution: "4TB Capacity",
    nightVision: "Not Applicable",
    connectivity: "SATA",
    features: ["24/7 Recording", "High Workload", "NVR Compatible"],
  },
];

const categories = [
  "All Products",
  "Indoor Cameras",
  "Outdoor Cameras",
  "PTZ Cameras",
  "Smart Doorbells",
  "NVR / DVR",
  "Storage & Accessories",
];

const services = [
  {
    icon: Camera,
    title: "CCTV Installation",
    description: "Professional camera positioning, cabling, configuration and commissioning.",
  },
  {
    icon: Wifi,
    title: "Remote Monitoring Setup",
    description: "Configure secure mobile and desktop access to your surveillance system.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    description: "Inspection, troubleshooting, replacement and ongoing system support.",
  },
  {
    icon: HardDrive,
    title: "Storage & System Upgrade",
    description: "NVR/DVR upgrades, storage expansion and recording configuration.",
  },
];

export default function CCTVShopPage() {
  const { language } = useLanguage();
  const my = language === "my";

  const tr = (en: string, mm: string) => (my ? mm : en);

  const categoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      "All Products": tr("All Products", "ထုတ်ကုန်အားလုံး"),
      "Indoor Cameras": tr("Indoor Cameras", "အတွင်းခန်း CCTV"),
      "Outdoor Cameras": tr("Outdoor Cameras", "အပြင်ဘက် CCTV"),
      "PTZ Cameras": tr("PTZ Cameras", "PTZ လှည့်ပတ်ကင်မရာ"),
      "Smart Doorbells": tr("Smart Doorbells", "Smart Doorbell"),
      "NVR / DVR": "NVR / DVR",
      "Storage & Accessories": tr("Storage & Accessories", "သိုလှောင်မှုနှင့် ဆက်စပ်ပစ္စည်းများ"),
    };
    return labels[category] || category;
  };

  const typeLabel = (type: string) => {
    const labels: Record<string, string> = {
      "IP Camera": tr("IP Camera", "IP ကင်မရာ"),
      "PTZ IP Camera": tr("PTZ IP Camera", "PTZ IP ကင်မရာ"),
      "Video Doorbell": tr("Video Doorbell", "ဗီဒီယို Doorbell"),
      "Wi-Fi Camera": tr("Wi-Fi Camera", "Wi-Fi ကင်မရာ"),
      "Network Video Recorder": tr("Network Video Recorder", "ကွန်ရက်ဗီဒီယို မှတ်တမ်းတင်စက်"),
      "Surveillance HDD": tr("Surveillance HDD", "CCTV သိုလှောင်ရေး HDD"),
    };
    return labels[type] || type;
  };

  const descriptionLabel = (description: string) => {
    const labels: Record<string, string> = {
      "High-definition indoor surveillance for offices, shops and residential spaces.": "ရုံးခန်း၊ ဆိုင်ခန်းနှင့် လူနေအိမ်များအတွက် ကြည်လင်ပြတ်သားသော အတွင်းခန်းစောင့်ကြည့်ရေးစနစ်။",
      "Weather-resistant outdoor camera designed for perimeter and entrance protection.": "အဆောက်အအုံပတ်လည်နှင့် ဝင်ပေါက်များကို ကာကွယ်စောင့်ကြည့်ရန် ရာသီဥတုဒဏ်ခံနိုင်သော အပြင်ဘက်ကင်မရာ။",
      "Pan, tilt and zoom surveillance for large facilities and wide-area monitoring.": "စက်ရုံ၊ အဆောက်အအုံကြီးများနှင့် ကျယ်ပြန့်သောဧရိယာများကို လှည့်ပတ်ချဲ့ကြည့်နိုင်သော စောင့်ကြည့်ရေးကင်မရာ။",
      "Smart entrance monitoring with visitor video, alerts and two-way communication.": "ဧည့်သည်များကို ဗီဒီယိုဖြင့် ကြည့်ရှုခြင်း၊ အသိပေးချက်ရယူခြင်းနှင့် နှစ်ဖက်ဆက်သွယ်ပြောဆိုနိုင်သော ဝင်ပေါက်စောင့်ကြည့်ရေးစနစ်။",
      "Reliable night-time monitoring for warehouses, compounds and business premises.": "ဂိုဒေါင်၊ ခြံဝင်းနှင့် စီးပွားရေးလုပ်ငန်းနေရာများအတွက် ယုံကြည်စိတ်ချရသော ညအချိန်စောင့်ကြည့်ရေး။",
      "Compact wireless monitoring for homes, counters and small business areas.": "အိမ်၊ ကောင်တာနှင့် လုပ်ငန်းအသေးစားနေရာများအတွက် အရွယ်အစားသေးငယ်သော ကြိုးမဲ့စောင့်ကြည့်ရေးကင်မရာ။",
      "Centralized recording and playback for multi-camera security installations.": "ကင်မရာအများအပြားမှ ရုပ်သံများကို တစ်နေရာတည်းတွင် မှတ်တမ်းတင်ခြင်းနှင့် ပြန်လည်ကြည့်ရှုခြင်း။",
      "Dedicated storage solution for continuous CCTV recording environments.": "CCTV မှတ်တမ်းများကို အဆက်မပြတ် သိမ်းဆည်းရန် သီးသန့်ဒီဇိုင်းထုတ်ထားသော သိုလှောင်မှုဖြေရှင်းချက်။",
    };
    return my ? labels[description] || description : description;
  };

  const featureLabel = (feature: string) => {
    const labels: Record<string, string> = {
      "Motion Detection": "လှုပ်ရှားမှုရှာဖွေခြင်း",
      "Two-way Audio": "နှစ်ဖက်အသံဆက်သွယ်မှု",
      "Mobile Monitoring": "မိုဘိုင်းမှ စောင့်ကြည့်ခြင်း",
      "IP67 Weatherproof": "IP67 ရာသီဥတုဒဏ်ခံနိုင်မှု",
      "Human Detection": "လူပုဂ္ဂိုလ် ခွဲခြားသိရှိခြင်း",
      "Smart Alerts": "စမတ်အသိပေးချက်များ",
      "360° Pan": "၃၆၀ ဒီဂရီ လှည့်ပတ်ကြည့်ရှုခြင်း",
      "Optical Zoom": "Optical Zoom ချဲ့ကြည့်ခြင်း",
      "Auto Tracking": "အလိုအလျောက် လိုက်လံခြေရာခံခြင်း",
      "Two-way Talk": "နှစ်ဖက်စကားပြောဆိုခြင်း",
      "Visitor Alerts": "ဧည့်သည်အသိပေးချက်များ",
      "Mobile App": "မိုဘိုင်းအက်ပ်",
      "Color Night Vision": "ညအချိန် အရောင်ဖြင့်မြင်နိုင်ခြင်း",
      "Intrusion Alerts": "ကျူးကျော်ဝင်ရောက်မှု အသိပေးချက်",
      "IP67": "IP67 ကာကွယ်မှု",
      "Remote Viewing": "အဝေးမှကြည့်ရှုခြင်း",
      "Motion Alerts": "လှုပ်ရှားမှု အသိပေးချက်များ",
      "MicroSD Support": "MicroSD အသုံးပြုနိုင်မှု",
      "16 Channel Support": "Channel ၁၆ ခုအထိ အသုံးပြုနိုင်မှု",
      "Remote Playback": "အဝေးမှ ပြန်လည်ကြည့်ရှုခြင်း",
      "HDD Storage": "HDD သိုလှောင်မှု",
      "24/7 Recording": "၂၄ နာရီ မှတ်တမ်းတင်ခြင်း",
      "High Workload": "လုပ်ငန်းသုံး ဝန်အားမြင့်",
      "NVR Compatible": "NVR နှင့် တွဲဖက်အသုံးပြုနိုင်မှု",
    };
    return my ? labels[feature] || feature : feature;
  };

  const badgeLabel = (badge?: string) => {
    if (!badge) return "";
    const labels: Record<string, string> = {
      Popular: "လူကြိုက်များ",
      "4K Security": "4K လုံခြုံရေး",
      Enterprise: "လုပ်ငန်းကြီးများအတွက်",
      "System Core": "စနစ်၏ အဓိကအစိတ်အပိုင်း",
    };
    return my ? labels[badge] || badge : badge;
  };

  const [activeCategory, setActiveCategory] = useState("All Products");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" ||
        product.category === activeCategory;

      const searchText =
        `${product.name} ${product.category} ${product.type} ${product.description}`.toLowerCase();

      return matchesCategory && searchText.includes(search.toLowerCase());
    });
  }, [activeCategory, search]);

  const cartItems = products.filter((product) =>
    cart.includes(product.id)
  );

  function addToCart(productId: number) {
    setCart((current) =>
      current.includes(productId) ? current : [...current, productId]
    );
  }

  function removeFromCart(productId: number) {
    setCart((current) => current.filter((id) => id !== productId));
  }

  function submitQuote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setQuoteSubmitted(true);
  }

  const navLinks = [
    { href: "/", label: tr("Home", "ပင်မစာမျက်နှာ") },
    { href: "/security-guards", label: tr("Security Guards", "လုံခြုံရေးဝန်ထမ်း") },
    { href: "/cctv-shop", label: tr("CCTV Shop", "CCTV အရောင်းဆိုင်") },
    { href: "/services", label: tr("Services", "ဝန်ဆောင်မှုများ") },
    { href: "/packages", label: tr("Packages", "ဝန်ဆောင်မှု Package များ") },
    { href: "/contact", label: tr("Contact", "ဆက်သွယ်ရန်") },
  ];

  return (
    <main className="min-h-screen bg-[#070d17] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070d17]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
              <ShieldCheck className="h-6 w-6 text-cyan-300" />
            </div>
            <div>
              <div className="text-sm font-black tracking-[0.12em]">APEXIVEAI</div>
              <div className="text-[10px] font-semibold tracking-[0.22em] text-cyan-300">SECUREGUARD</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={item.href === "/cctv-shop" ? "text-cyan-300" : "transition hover:text-cyan-300"}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setShowCart(true)}
              className="relative flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 text-sm transition hover:border-cyan-400/50"
              aria-label={tr("Open shopping cart", "Enquiry Cart ဖွင့်ရန်")}
            >
              <ShoppingCart className="h-4 w-4 text-cyan-300" />
              <span className="hidden sm:inline">{tr("Cart", "စာရင်း")}</span>
              {cart.length > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-cyan-400 px-1 text-[10px] font-black text-slate-950">
                  {cart.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-xl border border-white/10 p-2 lg:hidden"
              aria-label={tr("Toggle menu", "မီနူးဖွင့်ရန်")}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-[#0b1422] px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-4 text-sm text-slate-300">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={item.href === "/cctv-shop" ? "text-cyan-300" : ""}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="/cctv-security-wall.png"
            alt="Modern surveillance control room"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#eef3f8] via-[#eef3f8]/88 to-[#eef3f8]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#eef3f8] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              {tr("Smart Surveillance Store", "စမတ်စောင့်ကြည့်ရေး အရောင်းဆိုင်")}
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {tr("Intelligent CCTV.", "ဉာဏ်ရည်မြင့် CCTV။")}
              <span className="block text-cyan-300">
                {tr("Stronger Protection.", "ပိုမိုခိုင်မာသော ကာကွယ်မှု။")}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              {tr(
                "Discover professional CCTV cameras, recording systems and integrated surveillance solutions for homes, businesses and enterprise facilities.",
                "လူနေအိမ်၊ စီးပွားရေးလုပ်ငန်းနှင့် လုပ်ငန်းကြီးများအတွက် Professional CCTV ကင်မရာများ၊ မှတ်တမ်းတင်စနစ်များနှင့် ပေါင်းစပ်စောင့်ကြည့်ရေး ဖြေရှင်းချက်များကို လေ့လာရွေးချယ်နိုင်ပါသည်။"
              )}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
              >
                {tr("Explore Products", "ထုတ်ကုန်များ ကြည့်ရှုရန်")} <ArrowRight size={17} />
              </a>
              <button
                onClick={() => {
                  setQuoteSubmitted(false);
                  setShowQuote(true);
                }}
                className="rounded-xl border border-slate-500/30 bg-slate-950/5 px-6 py-3.5 text-sm font-bold text-slate-800 transition hover:border-cyan-600 hover:text-cyan-700"
              >
                {tr("Request a Site Survey", "လုပ်ငန်းခွင် လာရောက်စစ်ဆေးရန်")}
              </button>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-slate-400/30 pt-7">
              <div>
                <div className="text-2xl font-black text-slate-900">4K</div>
                <div className="mt-1 text-xs text-slate-600">{tr("Ultra HD Options", "Ultra HD ရွေးချယ်စရာများ")}</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">24/7</div>
                <div className="mt-1 text-xs text-slate-600">{tr("Monitoring Ready", "အချိန်ပြည့် စောင့်ကြည့်နိုင်မှု")}</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">360°</div>
                <div className="mt-1 text-xs text-slate-600">{tr("PTZ Coverage", "PTZ မြင်ကွင်းလွှမ်းခြုံမှု")}</div>
              </div>
            </div>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <div className="relative w-full max-w-md rounded-3xl border border-cyan-300/20 bg-slate-950/90 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-cyan-300">SecureGuard Vision</div>
                  <div className="mt-1 text-[10px] text-slate-400">{tr("Surveillance system overview", "စောင့်ကြည့်ရေးစနစ် အကျဉ်းချုပ်")}</div>
                </div>
                <span className="flex items-center gap-2 text-[10px] text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  {tr("SYSTEM READY", "စနစ်အသင့်ဖြစ်နေသည်")}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  ["CAM-001", tr("Entrance", "ဝင်ပေါက်")],
                  ["CAM-002", tr("Reception", "ဧည့်ကြိုနေရာ")],
                  ["CAM-003", tr("Warehouse", "ဂိုဒေါင်")],
                  ["CAM-004", tr("Perimeter", "အဆောက်အအုံပတ်လည်")],
                ].map(([id, location]) => (
                  <div key={id} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <div className="flex items-center justify-between">
                      <Camera size={16} className="text-cyan-300" />
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="mt-5 text-xs font-bold">{id}</div>
                    <div className="mt-1 text-[10px] text-slate-400">{location}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                <div>
                  <div className="text-xs font-bold">{tr("Centralized Protection", "ဗဟိုထိန်းချုပ် လုံခြုံရေး")}</div>
                  <div className="mt-1 text-[10px] text-slate-400">CCTV + Recording + Remote Access</div>
                </div>
                <ShieldCheck className="h-8 w-8 text-cyan-300" />
              </div>
              <p className="mt-3 text-[9px] text-slate-500">
                {tr("Illustrative interface preview — not a live camera feed.", "နမူနာ Interface ပြသချက်သာဖြစ်ပြီး တကယ့် Live Camera Feed မဟုတ်ပါ။")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section className="border-b border-white/10 bg-[#0a1220]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 py-7 sm:grid-cols-4 lg:px-8">
          {[
            ["Indoor Cameras", tr("Indoor protection", "အတွင်းခန်းကာကွယ်ရေး")],
            ["Outdoor Cameras", tr("Perimeter security", "အဆောက်အအုံပတ်လည် လုံခြုံရေး")],
            ["PTZ Cameras", tr("Wide-area coverage", "ကျယ်ပြန့်သော ဧရိယာစောင့်ကြည့်ရေး")],
            ["NVR / DVR", tr("Recording systems", "မှတ်တမ်းတင်စနစ်များ")],
          ].map(([title, subtitle]) => (
            <button
              key={title}
              onClick={() => {
                setActiveCategory(title);
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left transition hover:border-cyan-400/40 hover:bg-cyan-400/5"
            >
              <div className="text-sm font-bold">{categoryLabel(title)}</div>
              <div className="mt-1 text-xs text-slate-500">{subtitle}</div>
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              {tr("Product Catalogue", "ထုတ်ကုန်စာရင်း")}
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              {tr("CCTV & Surveillance", "CCTV နှင့် စောင့်ကြည့်ရေး")} <span className="text-cyan-300">{tr("Products", "ထုတ်ကုန်များ")}</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              {tr(
                "Explore cameras, recording devices and security accessories. Contact our team for product availability and quotations.",
                "ကင်မရာများ၊ မှတ်တမ်းတင်စက်များနှင့် လုံခြုံရေးဆက်စပ်ပစ္စည်းများကို လေ့လာနိုင်ပါသည်။ ပစ္စည်းရရှိနိုင်မှုနှင့် ဈေးနှုန်းအတွက် ကျွန်ုပ်တို့အဖွဲ့ကို ဆက်သွယ်ပါ။"
              )}
            </p>
          </div>
          <div className="text-xs text-slate-500">
            {filteredProducts.length} {tr("products displayed", "မျိုး ပြသထားသည်")}
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-4 lg:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={tr("Search cameras, recorders, storage...", "ကင်မရာ၊ Recorder၊ Storage များ ရှာဖွေရန်...")}
              className="w-full rounded-xl border border-white/10 bg-[#0c1625] py-4 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60"
            />
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <SlidersHorizontal size={16} />
            {tr("Filter by category", "အမျိုးအစားအလိုက် စစ်ထုတ်ရန်")}
          </div>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition ${
                activeCategory === category
                  ? "border-cyan-400 bg-cyan-400 text-slate-950"
                  : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-cyan-400/40 hover:text-white"
              }`}
            >
              {categoryLabel(category)}
            </button>
          ))}
        </div>

        <div className="mt-7 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0c1625] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-950/20"
            >
              <button
                onClick={() => setSelectedProduct(product)}
                className="relative block aspect-[4/3] w-full overflow-hidden bg-slate-900 text-left"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                {product.badge && (
                  <span className="absolute left-4 top-4 rounded-full border border-cyan-300/30 bg-slate-950/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-cyan-300">
                    {badgeLabel(product.badge)}
                  </span>
                )}
                <span className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-widest text-white/80">
                  {categoryLabel(product.category)}
                </span>
                <span className="absolute bottom-4 right-4 rounded-full bg-white/10 p-2 text-white backdrop-blur">
                  <ArrowUpRight size={16} />
                </span>
              </button>

              <div className="p-5">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-cyan-300">
                  {typeLabel(product.type)}
                </div>
                <h3 className="mt-2 text-base font-bold">{product.name}</h3>
                <p className="mt-2 min-h-[60px] text-xs leading-6 text-slate-400">
                  {descriptionLabel(product.description)}
                </p>

                <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between gap-2 text-[11px]">
                    <span className="text-slate-500">{tr("Resolution", "Resolution")}</span>
                    <span className="text-right font-semibold text-slate-200">{product.resolution}</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-[11px]">
                    <span className="text-slate-500">{tr("Connectivity", "ချိတ်ဆက်မှု")}</span>
                    <span className="text-right font-semibold text-slate-200">{product.connectivity}</span>
                  </div>
                </div>

                <div className="mt-5 flex gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 rounded-lg border border-white/10 py-3 text-xs font-bold transition hover:border-cyan-400/50 hover:text-cyan-300"
                  >
                    {tr("View Details", "အသေးစိတ်ကြည့်ရန်")}
                  </button>
                  <button
                    onClick={() => addToCart(product.id)}
                    aria-label={`Add ${product.name} to cart`}
                    className={`flex items-center justify-center rounded-lg px-3 transition ${
                      cart.includes(product.id)
                        ? "bg-emerald-400/15 text-emerald-300"
                        : "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                    }`}
                  >
                    {cart.includes(product.id) ? <Check size={17} /> : <Plus size={18} />}
                  </button>
                </div>
                <div className="mt-3 text-center text-[10px] text-slate-600">
                  {tr("Price available on request", "ဈေးနှုန်းကို စုံစမ်းမေးမြန်းနိုင်ပါသည်")}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="rounded-2xl border border-dashed border-white/15 py-16 text-center">
            <Search className="mx-auto h-8 w-8 text-slate-600" />
            <p className="mt-4 text-sm font-bold">{tr("No matching products found", "ကိုက်ညီသော ထုတ်ကုန်မတွေ့ပါ")}</p>
            <p className="mt-2 text-xs text-slate-500">{tr("Try another search term or category.", "အခြားစကားလုံး သို့မဟုတ် အမျိုးအစားဖြင့် ရှာကြည့်ပါ။")}</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All Products");
              }}
              className="mt-5 text-xs font-bold text-cyan-300"
            >
              {tr("Clear filters", "စစ်ထုတ်မှုများ ဖယ်ရှားရန်")}
            </button>
          </div>
        )}
      </section>

      {/* Services */}
      <section className="border-y border-white/10 bg-[#0a1220]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              {tr("Beyond Products", "ထုတ်ကုန်များအပြင်")}
            </div>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              {tr("Complete CCTV", "ပြည့်စုံသော CCTV")} <span className="text-cyan-300">{tr("Services", "ဝန်ဆောင်မှုများ")}</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              {tr(
                "From initial site assessment to installation and ongoing support, SecureGuard can coordinate your surveillance project.",
                "လုပ်ငန်းခွင် စစ်ဆေးခြင်းမှ တပ်ဆင်ခြင်းနှင့် ဆက်လက်ပံ့ပိုးပေးခြင်းအထိ SecureGuard မှ သင့်စောင့်ကြည့်ရေးပရောဂျက်ကို ညှိနှိုင်းဆောင်ရွက်ပေးနိုင်ပါသည်။"
              )}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              const serviceTitles: Record<string, string> = {
                "CCTV Installation": tr("CCTV Installation", "CCTV တပ်ဆင်ခြင်း"),
                "Remote Monitoring Setup": tr("Remote Monitoring Setup", "အဝေးမှ စောင့်ကြည့်မှုစနစ် တပ်ဆင်ခြင်း"),
                "Maintenance & Repair": tr("Maintenance & Repair", "ပြုပြင်ထိန်းသိမ်းခြင်း"),
                "Storage & System Upgrade": tr("Storage & System Upgrade", "Storage နှင့် System အဆင့်မြှင့်ခြင်း"),
              };
              const serviceDescriptions: Record<string, string> = {
                "Professional camera positioning, cabling, configuration and commissioning.": "ကင်မရာနေရာချထားခြင်း၊ ကြိုးသွယ်တန်းခြင်း၊ စနစ်သတ်မှတ်ခြင်းနှင့် စတင်အသုံးပြုနိုင်ရန် ပြင်ဆင်ခြင်း။",
                "Configure secure mobile and desktop access to your surveillance system.": "စောင့်ကြည့်ရေးစနစ်ကို မိုဘိုင်းနှင့် ကွန်ပျူတာမှ လုံခြုံစွာ ဝင်ရောက်ကြည့်ရှုနိုင်ရန် ပြင်ဆင်ခြင်း။",
                "Inspection, troubleshooting, replacement and ongoing system support.": "စစ်ဆေးခြင်း၊ ချို့ယွင်းချက်ရှာဖွေခြင်း၊ အစားထိုးပြုပြင်ခြင်းနှင့် ဆက်လက်ပံ့ပိုးပေးခြင်း။",
                "NVR/DVR upgrades, storage expansion and recording configuration.": "NVR/DVR အဆင့်မြှင့်ခြင်း၊ Storage တိုးချဲ့ခြင်းနှင့် မှတ်တမ်းတင်စနစ် ပြင်ဆင်ခြင်း။",
              };
              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-white/10 bg-[#0d1929] p-6 transition hover:border-cyan-400/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="mt-5 text-sm font-bold">{serviceTitles[service.title]}</h3>
                  <p className="mt-3 text-xs leading-6 text-slate-400">
                    {my ? serviceDescriptions[service.description] : service.description}
                  </p>
                  <button
                    onClick={() => {
                      setQuoteSubmitted(false);
                      setShowQuote(true);
                    }}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-cyan-300"
                  >
                    {tr("Request Service", "ဝန်ဆောင်မှု တောင်းဆိုရန်")} <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installation CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#102b3d] via-[#0c1c2c] to-[#0b1422] p-8 sm:p-12 lg:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                {tr("Need a Complete Security System?", "ပြည့်စုံသော လုံခြုံရေးစနစ် လိုအပ်ပါသလား။")}
              </div>
              <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
                {tr(
                  "Let our team assess your site and design a surveillance solution.",
                  "ကျွန်ုပ်တို့အဖွဲ့မှ သင့်လုပ်ငန်းခွင်ကို စစ်ဆေးပြီး သင့်တော်သော စောင့်ကြည့်ရေးစနစ်ကို ရေးဆွဲပေးပါမည်။"
                )}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                {tr(
                  "Tell us about your building, business or facility. We can prepare a CCTV equipment and installation quotation.",
                  "သင့်အဆောက်အအုံ၊ လုပ်ငန်း သို့မဟုတ် နေရာအကြောင်း ပြောပြပါ။ CCTV ပစ္စည်းနှင့် တပ်ဆင်ခ ဈေးနှုန်းခန့်မှန်းချက်ကို ပြင်ဆင်ပေးနိုင်ပါသည်။"
                )}
              </p>
            </div>
            <button
              onClick={() => {
                setQuoteSubmitted(false);
                setShowQuote(true);
              }}
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-400 px-7 py-4 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
            >
              {tr("Request a Quotation", "ဈေးနှုန်းတောင်းခံရန်")} <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050a12]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="text-sm font-black tracking-widest">APEXIVEAI</div>
            <div className="mt-1 text-[10px] font-bold tracking-[0.25em] text-cyan-300">SECUREGUARD</div>
            <p className="mt-4 max-w-xs text-xs leading-6 text-slate-500">
              {tr(
                "Integrated security, professional guarding and smart surveillance solutions.",
                "ပေါင်းစပ်လုံခြုံရေး၊ Professional လုံခြုံရေးဝန်ထမ်းဝန်ဆောင်မှုနှင့် စမတ်စောင့်ကြည့်ရေး ဖြေရှင်းချက်များ။"
              )}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">{tr("Explore", "လေ့လာရန်")}</h4>
            <div className="mt-5 flex flex-col gap-3 text-xs text-slate-500">
              <Link href="/" className="hover:text-cyan-300">{tr("Home", "ပင်မစာမျက်နှာ")}</Link>
              <Link href="/security-guards" className="hover:text-cyan-300">{tr("Security Guards", "လုံခြုံရေးဝန်ထမ်း")}</Link>
              <Link href="/cctv-shop" className="hover:text-cyan-300">{tr("CCTV Shop", "CCTV အရောင်းဆိုင်")}</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">{tr("Solutions", "ဖြေရှင်းချက်များ")}</h4>
            <div className="mt-5 flex flex-col gap-3 text-xs text-slate-500">
              <Link href="/services" className="hover:text-cyan-300">{tr("Installation & Maintenance", "တပ်ဆင်ခြင်းနှင့် ပြုပြင်ထိန်းသိမ်းခြင်း")}</Link>
              <Link href="/packages" className="hover:text-cyan-300">{tr("Security Packages", "လုံခြုံရေး Package များ")}</Link>
              <Link href="/get-a-quote" className="hover:text-cyan-300">{tr("Get a Quote", "ဈေးနှုန်းတောင်းခံရန်")}</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">{tr("Contact", "ဆက်သွယ်ရန်")}</h4>
            <p className="mt-5 text-xs leading-6 text-slate-500">
              {tr(
                "Contact the SecureGuard team for product availability, pricing and project consultations.",
                "ထုတ်ကုန်ရရှိနိုင်မှု၊ ဈေးနှုန်းနှင့် ပရောဂျက်ဆွေးနွေးတိုင်ပင်မှုများအတွက် SecureGuard အဖွဲ့ကို ဆက်သွယ်ပါ။"
              )}
            </p>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-cyan-300">
              {tr("Contact Us", "ဆက်သွယ်ရန်")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-[10px] text-slate-600">
          © ApexiveAI SecureGuard. {tr("All rights reserved.", "မူပိုင်ခွင့်အားလုံး ရယူထားသည်။")}
        </div>
      </footer>

      {/* Product details modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="my-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c1625] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                {tr("Product Specification", "ထုတ်ကုန် အသေးစိတ်အချက်အလက်")}
              </div>
              <button onClick={() => setSelectedProduct(null)} className="rounded-lg p-2 hover:bg-white/10" aria-label={tr("Close product details", "အသေးစိတ်ပိတ်ရန်")}>
                <X size={19} />
              </button>
            </div>
            <div className="grid md:grid-cols-2">
              <div className="min-h-64 bg-slate-900">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">
                  {categoryLabel(selectedProduct.category)}
                </div>
                <h3 className="mt-3 text-2xl font-black">{selectedProduct.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{descriptionLabel(selectedProduct.description)}</p>
                <div className="mt-6 space-y-3 border-y border-white/10 py-5 text-xs">
                  <div className="flex justify-between gap-4"><span className="text-slate-500">{tr("Product Type", "ထုတ်ကုန်အမျိုးအစား")}</span><span>{typeLabel(selectedProduct.type)}</span></div>
                  <div className="flex justify-between gap-4"><span className="text-slate-500">{tr("Resolution", "Resolution")}</span><span>{selectedProduct.resolution}</span></div>
                  <div className="flex justify-between gap-4"><span className="text-slate-500">{tr("Night Vision", "ညအချိန်မြင်ကွင်း")}</span><span className="text-right">{selectedProduct.nightVision}</span></div>
                  <div className="flex justify-between gap-4"><span className="text-slate-500">{tr("Connectivity", "ချိတ်ဆက်မှု")}</span><span>{selectedProduct.connectivity}</span></div>
                </div>
                <div className="mt-5">
                  <div className="text-xs font-bold">{tr("Key Features", "အဓိကလုပ်ဆောင်ချက်များ")}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProduct.features.map((feature) => (
                      <span key={feature} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] text-slate-300">{featureLabel(feature)}</span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => {
                    addToCart(selectedProduct.id);
                    setSelectedProduct(null);
                    setShowCart(true);
                  }}
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3.5 text-xs font-black text-slate-950 hover:bg-cyan-300"
                >
                  <ShoppingCart size={16} /> {tr("Add to Enquiry Cart", "စုံစမ်းမေးမြန်းရန် စာရင်းထဲထည့်ရန်")}
                </button>
                <p className="mt-3 text-center text-[10px] text-slate-600">
                  {tr("Final price and availability confirmed by quotation.", "နောက်ဆုံးဈေးနှုန်းနှင့် ပစ္စည်းရရှိနိုင်မှုကို ဈေးနှုန်းတောင်းခံမှုမှတစ်ဆင့် အတည်ပြုပါမည်။")}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart drawer */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm" onClick={() => setShowCart(false)}>
          <aside
            className="flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#0b1422] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <div>
                <h3 className="text-lg font-black">{tr("Enquiry Cart", "စုံစမ်းမေးမြန်းရန် စာရင်း")}</h3>
                <p className="mt-1 text-xs text-slate-500">{cart.length} {tr("selected products", "မျိုး ရွေးချယ်ထားသည်")}</p>
              </div>
              <button onClick={() => setShowCart(false)} className="rounded-lg p-2 hover:bg-white/10" aria-label={tr("Close cart", "စာရင်းပိတ်ရန်")}><X size={20} /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {cartItems.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingCart size={36} className="text-slate-600" />
                  <p className="mt-4 text-sm font-bold">{tr("Your enquiry cart is empty", "စုံစမ်းမေးမြန်းရန် စာရင်းထဲတွင် ပစ္စည်းမရှိသေးပါ")}</p>
                  <p className="mt-2 text-xs text-slate-500">{tr("Add products to prepare your quotation request.", "ဈေးနှုန်းတောင်းခံရန် ထုတ်ကုန်များ ထည့်သွင်းပါ။")}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((product) => (
                    <div key={product.id} className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                      <img src={product.image} alt={product.name} className="h-20 w-20 rounded-lg object-cover" />
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-bold">{product.name}</div>
                        <div className="mt-1 text-[10px] text-slate-500">{categoryLabel(product.category)}</div>
                        <div className="mt-2 text-[10px] text-cyan-300">{tr("Price on request", "ဈေးနှုန်းစုံစမ်းရန်")}</div>
                        <button onClick={() => removeFromCart(product.id)} className="mt-2 text-[10px] text-rose-400 hover:text-rose-300">{tr("Remove", "ဖယ်ရှားရန်")}</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-white/10 p-5">
              <p className="mb-4 text-[10px] leading-5 text-slate-500">
                {tr(
                  "Selected products will be included in your quotation enquiry. This demo does not place an order or process payment.",
                  "ရွေးချယ်ထားသော ထုတ်ကုန်များကို ဈေးနှုန်းတောင်းခံမှုတွင် ထည့်သွင်းပြသပါမည်။ ဤနမူနာစနစ်သည် အော်ဒါတင်ခြင်း သို့မဟုတ် ငွေပေးချေခြင်းကို မလုပ်ဆောင်ပါ။"
                )}
              </p>
              <button
                disabled={cart.length === 0}
                onClick={() => {
                  setShowCart(false);
                  setQuoteSubmitted(false);
                  setShowQuote(true);
                }}
                className="w-full rounded-xl bg-cyan-400 py-4 text-xs font-black text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {tr("Request Quotation", "ဈေးနှုန်းတောင်းခံရန်")}
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Quote form */}
      {showQuote && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm" onClick={() => setShowQuote(false)}>
          <div
            className="my-auto w-full max-w-xl rounded-2xl border border-white/10 bg-[#0c1625] p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">{tr("Project Enquiry", "ပရောဂျက် စုံစမ်းမေးမြန်းမှု")}</div>
                <h3 className="mt-2 text-2xl font-black">{tr("Request a Quotation", "ဈေးနှုန်းတောင်းခံရန်")}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-400">
                  {tr("Share your requirements and the SecureGuard team can review your project.", "သင့်လိုအပ်ချက်များကို ဖြည့်စွက်ပေးပါ။ SecureGuard အဖွဲ့မှ သင့်ပရောဂျက်ကို ပြန်လည်သုံးသပ်ပေးနိုင်ပါသည်။")}
                </p>
              </div>
              <button onClick={() => setShowQuote(false)} className="rounded-lg p-2 hover:bg-white/10" aria-label={tr("Close quotation form", "ဈေးနှုန်းတောင်းခံမှုပုံစံ ပိတ်ရန်")}><X size={19} /></button>
            </div>

            {quoteSubmitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400" />
                <h4 className="mt-5 text-lg font-black">{tr("Enquiry Preview Completed", "စုံစမ်းမေးမြန်းမှု နမူနာပြီးဆုံးပါပြီ")}</h4>
                <p className="mx-auto mt-3 max-w-sm text-xs leading-6 text-slate-400">
                  {tr(
                    "This is a frontend demonstration. Your enquiry has not been sent or saved. Backend integration is required to receive real requests.",
                    "ဤအရာသည် Frontend နမူနာပြသမှုသာ ဖြစ်ပါသည်။ သင့်စုံစမ်းမေးမြန်းမှုကို ပေးပို့ထားခြင်း သို့မဟုတ် သိမ်းဆည်းထားခြင်း မရှိပါ။ တကယ့်တောင်းဆိုမှုများ လက်ခံရန် Backend ချိတ်ဆက်မှု လိုအပ်ပါသည်။"
                  )}
                </p>
                <button onClick={() => setShowQuote(false)} className="mt-7 rounded-xl bg-cyan-400 px-7 py-3 text-xs font-black text-slate-950">{tr("Close", "ပိတ်ရန်")}</button>
              </div>
            ) : (
              <form onSubmit={submitQuote} className="mt-7 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-xs text-slate-400">
                    {tr("Contact Person", "ဆက်သွယ်ရမည့်သူ")} *
                    <input required placeholder={tr("Full name", "အမည်အပြည့်အစုံ")} className="mt-2 w-full rounded-lg border border-white/10 bg-[#07101d] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                  </label>
                  <label className="text-xs text-slate-400">
                    {tr("Company / Organization", "ကုမ္ပဏီ / အဖွဲ့အစည်း")}
                    <input placeholder={tr("Company name", "ကုမ္ပဏီအမည်")} className="mt-2 w-full rounded-lg border border-white/10 bg-[#07101d] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                  </label>
                  <label className="text-xs text-slate-400">
                    {tr("Phone Number", "ဖုန်းနံပါတ်")} *
                    <input required type="tel" placeholder="+95 ..." className="mt-2 w-full rounded-lg border border-white/10 bg-[#07101d] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                  </label>
                  <label className="text-xs text-slate-400">
                    {tr("Email Address", "အီးမေးလ်လိပ်စာ")}
                    <input type="email" placeholder="name@company.com" className="mt-2 w-full rounded-lg border border-white/10 bg-[#07101d] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                  </label>
                </div>

                <label className="block text-xs text-slate-400">
                  {tr("Installation Location", "တပ်ဆင်မည့်နေရာ")} *
                  <input required placeholder={tr("Township, city or site address", "မြို့နယ်၊ မြို့ သို့မဟုတ် လိပ်စာ")} className="mt-2 w-full rounded-lg border border-white/10 bg-[#07101d] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-xs text-slate-400">
                    {tr("Project Type", "ပရောဂျက်အမျိုးအစား")}
                    <select className="mt-2 w-full rounded-lg border border-white/10 bg-[#07101d] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400">
                      <option>{tr("CCTV Supply & Installation", "CCTV ပစ္စည်းနှင့် တပ်ဆင်ခြင်း")}</option>
                      <option>{tr("Product Purchase Only", "ပစ္စည်းဝယ်ယူခြင်းသာ")}</option>
                      <option>{tr("Maintenance & Repair", "ပြုပြင်ထိန်းသိမ်းခြင်း")}</option>
                      <option>{tr("System Upgrade", "စနစ်အဆင့်မြှင့်ခြင်း")}</option>
                      <option>{tr("Site Survey", "လုပ်ငန်းခွင်စစ်ဆေးခြင်း")}</option>
                    </select>
                  </label>
                  <label className="text-xs text-slate-400">
                    {tr("Estimated Camera Quantity", "ခန့်မှန်းကင်မရာအရေအတွက်")}
                    <select className="mt-2 w-full rounded-lg border border-white/10 bg-[#07101d] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400">
                      <option>{tr("Not sure yet", "မသတ်မှတ်ရသေးပါ")}</option>
                      <option>1–4 {tr("Cameras", "လုံး")}</option>
                      <option>5–16 {tr("Cameras", "လုံး")}</option>
                      <option>17–32 {tr("Cameras", "လုံး")}</option>
                      <option>33+ {tr("Cameras", "လုံးနှင့်အထက်")}</option>
                    </select>
                  </label>
                </div>

                <label className="block text-xs text-slate-400">
                  {tr("Additional Requirements", "အခြားလိုအပ်ချက်များ")}
                  <textarea rows={3} placeholder={tr("Describe your site, requirements or preferred equipment...", "သင့်လုပ်ငန်းခွင်၊ လိုအပ်ချက် သို့မဟုတ် နှစ်သက်ရာပစ္စည်းများကို ဖော်ပြပါ...")} className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-[#07101d] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                </label>

                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-[10px] leading-5 text-slate-500">
                  {tr("Selected products:", "ရွေးချယ်ထားသော ထုတ်ကုန်များ -")}{" "}
                  {cartItems.length ? cartItems.map((item) => item.name).join(", ") : tr("No products selected", "ထုတ်ကုန်မရွေးချယ်ရသေးပါ")}
                </div>

                <button type="submit" className="w-full rounded-xl bg-cyan-400 py-4 text-xs font-black text-slate-950 transition hover:bg-cyan-300">
                  {tr("Preview Quotation Request", "ဈေးနှုန်းတောင်းခံမှု နမူနာကြည့်ရန်")}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
