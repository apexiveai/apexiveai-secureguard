
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  HardDrive,
  Menu,
  Minus,
  Plus,
  Search,
  ShieldCheck,
  ShoppingCart,
  SlidersHorizontal,
  Wifi,
  Wrench,
  X,
} from "lucide-react";

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
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=900",
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
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900",
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
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=900",
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
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=900",
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
    image: "https://images.unsplash.com/photo-1508615070457-7baeba4003ab?w=900",
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
    image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=900",
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

  return (
    <main className="min-h-screen bg-[#070d17] text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070d17]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
              <ShieldCheck className="h-6 w-6 text-cyan-300" />
            </div>
            <div>
              <div className="text-sm font-black tracking-[0.12em]">
                APEXIVEAI
              </div>
              <div className="text-[10px] font-semibold tracking-[0.22em] text-cyan-300">
                SECUREGUARD
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
            <Link href="/" className="transition hover:text-cyan-300">Home</Link>
            <Link href="/security-guards" className="transition hover:text-cyan-300">Security Guards</Link>
            <Link href="/cctv-shop" className="text-cyan-300">CCTV Shop</Link>
            <Link href="/services" className="transition hover:text-cyan-300">Services</Link>
            <Link href="/packages" className="transition hover:text-cyan-300">Packages</Link>
            <Link href="/contact" className="transition hover:text-cyan-300">Contact</Link>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowCart(true)}
              className="relative flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 text-sm transition hover:border-cyan-400/50"
              aria-label="Open shopping cart"
            >
              <ShoppingCart className="h-4 w-4 text-cyan-300" />
              <span className="hidden sm:inline">Cart</span>
              {cart.length > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-cyan-400 px-1 text-[10px] font-black text-slate-950">
                  {cart.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-xl border border-white/10 p-2 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-[#0b1422] px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-4 text-sm text-slate-300">
              <Link href="/">Home</Link>
              <Link href="/security-guards">Security Guards</Link>
              <Link href="/cctv-shop" className="text-cyan-300">CCTV Shop</Link>
              <Link href="/services">Services</Link>
              <Link href="/packages">Packages</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1800"
            alt="Modern surveillance control room"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070d17] via-[#070d17]/90 to-[#070d17]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070d17] via-transparent to-[#070d17]/20" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Smart Surveillance Store
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Intelligent CCTV.
              <span className="block text-cyan-300">Stronger Protection.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              Discover professional CCTV cameras, recording systems and
              integrated surveillance solutions for homes, businesses and
              enterprise facilities.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
              >
                Explore Products <ArrowRight size={17} />
              </a>
              <button
                onClick={() => {
                  setQuoteSubmitted(false);
                  setShowQuote(true);
                }}
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Request a Site Survey
              </button>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-white/10 pt-7">
              <div>
                <div className="text-2xl font-black text-white">4K</div>
                <div className="mt-1 text-xs text-slate-400">Ultra HD Options</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">24/7</div>
                <div className="mt-1 text-xs text-slate-400">Monitoring Ready</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">360°</div>
                <div className="mt-1 text-xs text-slate-400">PTZ Coverage</div>
              </div>
            </div>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <div className="relative w-full max-w-md rounded-3xl border border-cyan-300/20 bg-slate-950/60 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                    SecureGuard Vision
                  </div>
                  <div className="mt-1 text-[10px] text-slate-500">
                    Surveillance system overview
                  </div>
                </div>
                <span className="flex items-center gap-2 text-[10px] text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  SYSTEM READY
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  ["CAM-001", "Entrance"],
                  ["CAM-002", "Reception"],
                  ["CAM-003", "Warehouse"],
                  ["CAM-004", "Perimeter"],
                ].map(([id, location]) => (
                  <div key={id} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <div className="flex items-center justify-between">
                      <Camera size={16} className="text-cyan-300" />
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="mt-5 text-xs font-bold">{id}</div>
                    <div className="mt-1 text-[10px] text-slate-500">{location}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                <div>
                  <div className="text-xs font-bold">Centralized Protection</div>
                  <div className="mt-1 text-[10px] text-slate-400">CCTV + Recording + Remote Access</div>
                </div>
                <ShieldCheck className="h-8 w-8 text-cyan-300" />
              </div>
              <p className="mt-3 text-[9px] text-slate-600">
                Illustrative interface preview — not a live camera feed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section className="border-b border-white/10 bg-[#0a1220]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 py-7 sm:grid-cols-4 lg:px-8">
          {[
            ["Indoor Cameras", "Indoor protection"],
            ["Outdoor Cameras", "Perimeter security"],
            ["PTZ Cameras", "Wide-area coverage"],
            ["NVR / DVR", "Recording systems"],
          ].map(([title, subtitle]) => (
            <button
              key={title}
              onClick={() => {
                setActiveCategory(title);
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left transition hover:border-cyan-400/40 hover:bg-cyan-400/5"
            >
              <div className="text-sm font-bold">{title}</div>
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
              Product Catalogue
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              CCTV & Surveillance <span className="text-cyan-300">Products</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              Explore cameras, recording devices and security accessories.
              Contact our team for product availability and quotations.
            </p>
          </div>
          <div className="text-xs text-slate-500">
            {filteredProducts.length} products displayed
          </div>
        </div>

        {/* Search */}
        <div className="mt-9 flex flex-col gap-4 lg:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search cameras, recorders, storage..."
              className="w-full rounded-xl border border-white/10 bg-[#0c1625] py-4 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60"
            />
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <SlidersHorizontal size={16} />
            Filter by category
          </div>
        </div>

        {/* Category filters */}
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
              {category}
            </button>
          ))}
        </div>

        {/* Product cards */}
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
                    {product.badge}
                  </span>
                )}
                <span className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-widest text-white/80">
                  {product.category}
                </span>
                <span className="absolute bottom-4 right-4 rounded-full bg-white/10 p-2 text-white backdrop-blur">
                  <ArrowUpRight size={16} />
                </span>
              </button>

              <div className="p-5">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-cyan-300">
                  {product.type}
                </div>
                <h3 className="mt-2 text-base font-bold">{product.name}</h3>
                <p className="mt-2 min-h-[60px] text-xs leading-6 text-slate-400">
                  {product.description}
                </p>

                <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">Resolution</span>
                    <span className="font-semibold text-slate-200">{product.resolution}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">Connectivity</span>
                    <span className="font-semibold text-slate-200">{product.connectivity}</span>
                  </div>
                </div>

                <div className="mt-5 flex gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 rounded-lg border border-white/10 py-3 text-xs font-bold transition hover:border-cyan-400/50 hover:text-cyan-300"
                  >
                    View Details
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
                  Price available on request
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="rounded-2xl border border-dashed border-white/15 py-16 text-center">
            <Search className="mx-auto h-8 w-8 text-slate-600" />
            <p className="mt-4 text-sm font-bold">No matching products found</p>
            <p className="mt-2 text-xs text-slate-500">Try another search term or category.</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All Products");
              }}
              className="mt-5 text-xs font-bold text-cyan-300"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Services */}
      <section className="border-y border-white/10 bg-[#0a1220]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              Beyond Products
            </div>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Complete CCTV <span className="text-cyan-300">Services</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              From initial site assessment to installation and ongoing support,
              SecureGuard can coordinate your surveillance project.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-white/10 bg-[#0d1929] p-6 transition hover:border-cyan-400/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="mt-5 text-sm font-bold">{service.title}</h3>
                  <p className="mt-3 text-xs leading-6 text-slate-400">
                    {service.description}
                  </p>
                  <button
                    onClick={() => {
                      setQuoteSubmitted(false);
                      setShowQuote(true);
                    }}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-cyan-300"
                  >
                    Request Service <ArrowRight size={14} />
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
                Need a Complete Security System?
              </div>
              <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
                Let our team assess your site and design a surveillance solution.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                Tell us about your building, business or facility. We can
                prepare a CCTV equipment and installation quotation.
              </p>
            </div>
            <button
              onClick={() => {
                setQuoteSubmitted(false);
                setShowQuote(true);
              }}
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-400 px-7 py-4 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Request a Quotation <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050a12]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="text-sm font-black tracking-widest">APEXIVEAI</div>
            <div className="mt-1 text-[10px] font-bold tracking-[0.25em] text-cyan-300">
              SECUREGUARD
            </div>
            <p className="mt-4 max-w-xs text-xs leading-6 text-slate-500">
              Integrated security, professional guarding and smart surveillance solutions.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Explore</h4>
            <div className="mt-5 flex flex-col gap-3 text-xs text-slate-500">
              <Link href="/" className="hover:text-cyan-300">Home</Link>
              <Link href="/security-guards" className="hover:text-cyan-300">Security Guards</Link>
              <Link href="/cctv-shop" className="hover:text-cyan-300">CCTV Shop</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Solutions</h4>
            <div className="mt-5 flex flex-col gap-3 text-xs text-slate-500">
              <Link href="/services" className="hover:text-cyan-300">Installation & Maintenance</Link>
              <Link href="/packages" className="hover:text-cyan-300">Security Packages</Link>
              <Link href="/get-a-quote" className="hover:text-cyan-300">Get a Quote</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Contact</h4>
            <p className="mt-5 text-xs leading-6 text-slate-500">
              Contact the SecureGuard team for product availability, pricing and project consultations.
            </p>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-cyan-300">
              Contact Us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-[10px] text-slate-600">
          © ApexiveAI SecureGuard. All rights reserved.
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
                Product Specification
              </div>
              <button onClick={() => setSelectedProduct(null)} className="rounded-lg p-2 hover:bg-white/10" aria-label="Close product details">
                <X size={19} />
              </button>
            </div>
            <div className="grid md:grid-cols-2">
              <div className="min-h-64 bg-slate-900">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">
                  {selectedProduct.category}
                </div>
                <h3 className="mt-3 text-2xl font-black">{selectedProduct.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{selectedProduct.description}</p>
                <div className="mt-6 space-y-3 border-y border-white/10 py-5 text-xs">
                  <div className="flex justify-between gap-4"><span className="text-slate-500">Product Type</span><span>{selectedProduct.type}</span></div>
                  <div className="flex justify-between gap-4"><span className="text-slate-500">Resolution</span><span>{selectedProduct.resolution}</span></div>
                  <div className="flex justify-between gap-4"><span className="text-slate-500">Night Vision</span><span className="text-right">{selectedProduct.nightVision}</span></div>
                  <div className="flex justify-between gap-4"><span className="text-slate-500">Connectivity</span><span>{selectedProduct.connectivity}</span></div>
                </div>
                <div className="mt-5">
                  <div className="text-xs font-bold">Key Features</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProduct.features.map((feature) => (
                      <span key={feature} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] text-slate-300">{feature}</span>
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
                  <ShoppingCart size={16} /> Add to Enquiry Cart
                </button>
                <p className="mt-3 text-center text-[10px] text-slate-600">Final price and availability confirmed by quotation.</p>
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
                <h3 className="text-lg font-black">Enquiry Cart</h3>
                <p className="mt-1 text-xs text-slate-500">{cart.length} selected products</p>
              </div>
              <button onClick={() => setShowCart(false)} className="rounded-lg p-2 hover:bg-white/10" aria-label="Close cart"><X size={20} /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {cartItems.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingCart size={36} className="text-slate-600" />
                  <p className="mt-4 text-sm font-bold">Your enquiry cart is empty</p>
                  <p className="mt-2 text-xs text-slate-500">Add products to prepare your quotation request.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((product) => (
                    <div key={product.id} className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                      <img src={product.image} alt={product.name} className="h-20 w-20 rounded-lg object-cover" />
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-bold">{product.name}</div>
                        <div className="mt-1 text-[10px] text-slate-500">{product.category}</div>
                        <div className="mt-2 text-[10px] text-cyan-300">Price on request</div>
                        <button onClick={() => removeFromCart(product.id)} className="mt-2 text-[10px] text-rose-400 hover:text-rose-300">Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-white/10 p-5">
              <p className="mb-4 text-[10px] leading-5 text-slate-500">
                Selected products will be included in your quotation enquiry. This demo does not place an order or process payment.
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
                Request Quotation
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
                <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Project Enquiry</div>
                <h3 className="mt-2 text-2xl font-black">Request a Quotation</h3>
                <p className="mt-2 text-xs leading-6 text-slate-400">Share your requirements and the SecureGuard team can review your project.</p>
              </div>
              <button onClick={() => setShowQuote(false)} className="rounded-lg p-2 hover:bg-white/10" aria-label="Close quotation form"><X size={19} /></button>
            </div>

            {quoteSubmitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400" />
                <h4 className="mt-5 text-lg font-black">Enquiry Preview Completed</h4>
                <p className="mx-auto mt-3 max-w-sm text-xs leading-6 text-slate-400">
                  This is a frontend demonstration. Your enquiry has not been sent or saved. Backend integration is required to receive real requests.
                </p>
                <button onClick={() => setShowQuote(false)} className="mt-7 rounded-xl bg-cyan-400 px-7 py-3 text-xs font-black text-slate-950">Close</button>
              </div>
            ) : (
              <form onSubmit={submitQuote} className="mt-7 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-xs text-slate-400">
                    Contact Person *
                    <input required placeholder="Full name" className="mt-2 w-full rounded-lg border border-white/10 bg-[#07101d] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                  </label>
                  <label className="text-xs text-slate-400">
                    Company / Organization
                    <input placeholder="Company name" className="mt-2 w-full rounded-lg border border-white/10 bg-[#07101d] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                  </label>
                  <label className="text-xs text-slate-400">
                    Phone Number *
                    <input required type="tel" placeholder="+95 ..." className="mt-2 w-full rounded-lg border border-white/10 bg-[#07101d] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                  </label>
                  <label className="text-xs text-slate-400">
                    Email Address
                    <input type="email" placeholder="name@company.com" className="mt-2 w-full rounded-lg border border-white/10 bg-[#07101d] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                  </label>
                </div>

                <label className="block text-xs text-slate-400">
                  Installation Location *
                  <input required placeholder="Township, city or site address" className="mt-2 w-full rounded-lg border border-white/10 bg-[#07101d] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-xs text-slate-400">
                    Project Type
                    <select className="mt-2 w-full rounded-lg border border-white/10 bg-[#07101d] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400">
                      <option>CCTV Supply & Installation</option>
                      <option>Product Purchase Only</option>
                      <option>Maintenance & Repair</option>
                      <option>System Upgrade</option>
                      <option>Site Survey</option>
                    </select>
                  </label>
                  <label className="text-xs text-slate-400">
                    Estimated Camera Quantity
                    <select className="mt-2 w-full rounded-lg border border-white/10 bg-[#07101d] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400">
                      <option>Not sure yet</option>
                      <option>1–4 Cameras</option>
                      <option>5–16 Cameras</option>
                      <option>17–32 Cameras</option>
                      <option>33+ Cameras</option>
                    </select>
                  </label>
                </div>

                <label className="block text-xs text-slate-400">
                  Additional Requirements
                  <textarea rows={3} placeholder="Describe your site, requirements or preferred equipment..." className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-[#07101d] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                </label>

                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-[10px] leading-5 text-slate-500">
                  Selected products: {cartItems.length ? cartItems.map((item) => item.name).join(", ") : "No products selected"}
                </div>

                <button type="submit" className="w-full rounded-xl bg-cyan-400 py-4 text-xs font-black text-slate-950 transition hover:bg-cyan-300">
                  Preview Quotation Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
