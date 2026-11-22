
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
  Video,
  Clock3,
  Users,
  Wrench,
  Headphones,
  Menu,
  X,
  CheckCircle2,
  ChevronRight,
  BadgeCheck,
  LockKeyhole,
  Network,
} from "lucide-react";

const guardPackages = [
  {
    name: "Essential Guard",
    subtitle: "Reliable everyday protection",
    description:
      "Professional guarding for small offices, shops and residential properties.",
    icon: ShieldCheck,
    features: [
      "Trained security personnel",
      "Access control monitoring",
      "Visitor registration",
      "Routine security patrol",
      "Incident reporting",
      "Deployment coordination",
    ],
    ideal: "Small offices, retail shops and residences",
  },
  {
    name: "Business Guard",
    subtitle: "Enhanced business security",
    description:
      "Structured security coverage for commercial properties and business facilities.",
    icon: Building2,
    popular: true,
    features: [
      "Professional security personnel",
      "Day or night shift arrangement",
      "Visitor and vehicle management",
      "Scheduled patrol operations",
      "Incident escalation procedures",
      "Daily duty reporting",
      "Site-specific security planning",
    ],
    ideal: "Corporate offices, buildings and commercial sites",
  },
  {
    name: "Enterprise Guard",
    subtitle: "Comprehensive site protection",
    description:
      "Coordinated security personnel deployment for complex and high-activity sites.",
    icon: Factory,
    features: [
      "Dedicated security deployment plan",
      "Multi-post personnel coordination",
      "Shift and attendance supervision",
      "Perimeter and access management",
      "Incident response coordination",
      "Operational reporting",
      "Management review arrangements",
      "Custom security procedures",
    ],
    ideal: "Factories, warehouses and large facilities",
  },
];

const cctvPackages = [
  {
    name: "Home Security",
    subtitle: "Smart protection for everyday living",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=900",
    cameras: "2–4 Cameras",
    features: [
      "Indoor / outdoor camera options",
      "Mobile viewing configuration",
      "Motion detection support",
      "Recording system options",
      "Basic installation planning",
    ],
    ideal: "Houses, apartments and small residences",
  },
  {
    name: "Business Surveillance",
    subtitle: "Security visibility for business",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=900",
    cameras: "5–16 Cameras",
    features: [
      "Indoor and outdoor coverage",
      "Network video recorder options",
      "Remote monitoring setup",
      "Recording storage planning",
      "Professional installation",
      "System testing and handover",
    ],
    ideal: "Shops, offices and restaurants",
    popular: true,
  },
  {
    name: "Enterprise Surveillance",
    subtitle: "Scalable multi-zone monitoring",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=900",
    cameras: "17+ Cameras",
    features: [
      "Multi-zone camera architecture",
      "PTZ camera options",
      "Centralized recording design",
      "Network and storage planning",
      "Remote access configuration",
      "System commissioning",
      "Maintenance planning",
    ],
    ideal: "Factories, warehouses and large properties",
  },
];

const integratedPackages = [
  {
    name: "Smart Site Protection",
    description:
      "Combine professional security personnel with CCTV monitoring infrastructure.",
    icon: ShieldCheck,
    features: [
      "Security guard deployment planning",
      "CCTV equipment consultation",
      "Entrance and perimeter coverage",
      "Installation coordination",
      "Unified site security planning",
    ],
  },
  {
    name: "Corporate Security System",
    description:
      "A coordinated security solution for corporate buildings and commercial facilities.",
    icon: Building2,
    features: [
      "Guarding service arrangement",
      "CCTV system planning",
      "Access control considerations",
      "Security operations coordination",
      "Maintenance support options",
    ],
  },
  {
    name: "Industrial Protection",
    description:
      "Integrated protection planning for industrial and logistics environments.",
    icon: Factory,
    features: [
      "Site perimeter protection",
      "Security personnel planning",
      "Warehouse CCTV coverage",
      "Vehicle and entry monitoring",
      "Operational support coordination",
    ],
  },
];

const audiences = [
  { icon: Home, title: "Residential", text: "Homes, apartments and condominiums" },
  { icon: Building2, title: "Corporate", text: "Offices, commercial buildings and businesses" },
  { icon: Factory, title: "Industrial", text: "Factories, warehouses and construction sites" },
  { icon: Users, title: "Events & VIP", text: "Events, private functions and VIP protection" },
];

export default function PackagesPage() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Packages");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const openQuote = (packageName = "") => {
    setSelectedPackage(packageName);
    setSubmitted(false);
    setQuoteOpen(true);
  };

  function submitQuote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
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
              <div className="text-sm font-black tracking-[0.12em]">APEXIVEAI</div>
              <div className="text-[9px] font-bold tracking-[0.24em] text-cyan-300">
                SECUREGUARD
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-xs font-semibold text-slate-300 lg:flex">
            <Link href="/" className="hover:text-cyan-300">Home</Link>
            <Link href="/about" className="hover:text-cyan-300">About</Link>
            <Link href="/security-guards" className="hover:text-cyan-300">Security Guards</Link>
            <Link href="/cctv-shop" className="hover:text-cyan-300">CCTV Shop</Link>
            <Link href="/services" className="hover:text-cyan-300">Services</Link>
            <Link href="/packages" className="text-cyan-300">Packages</Link>
            <Link href="/contact" className="hover:text-cyan-300">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openQuote()}
              className="hidden rounded-xl bg-cyan-400 px-5 py-3 text-xs font-black text-slate-950 transition hover:bg-cyan-300 sm:block"
            >
              Get a Quote
            </button>
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="rounded-xl border border-white/10 p-2 lg:hidden"
              aria-label="Toggle navigation"
            >
              {mobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="border-t border-white/10 bg-[#0b1422] px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4 text-sm text-slate-300">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/security-guards">Security Guards</Link>
              <Link href="/cctv-shop">CCTV Shop</Link>
              <Link href="/services">Services</Link>
              <Link href="/packages" className="text-cyan-300">Packages</Link>
              <Link href="/contact">Contact</Link>
              <button onClick={() => openQuote()} className="rounded-lg bg-cyan-400 py-3 font-bold text-slate-950">
                Request a Quote
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1800"
            alt="Security surveillance operations"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070d17] via-[#070d17]/90 to-[#070d17]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070d17] to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              <BadgeCheck size={14} /> Security Solutions & Packages
            </div>

            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Protection Designed
              <span className="block text-cyan-300">Around Your Needs.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
              Explore professional security guard services, smart CCTV
              systems and integrated protection packages for residential,
              commercial and industrial environments.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#package-categories"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 text-xs font-black text-slate-950 hover:bg-cyan-300"
              >
                Explore Packages <ArrowRight size={16} />
              </a>
              <button
                onClick={() => openQuote()}
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-xs font-bold hover:border-cyan-300 hover:text-cyan-300"
              >
                Discuss Your Requirements
              </button>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-7">
              <div>
                <ShieldCheck className="h-5 w-5 text-cyan-300" />
                <div className="mt-3 text-xs font-bold">Guarding</div>
                <div className="mt-1 text-[10px] text-slate-500">Personnel Services</div>
              </div>
              <div>
                <Camera className="h-5 w-5 text-cyan-300" />
                <div className="mt-3 text-xs font-bold">Surveillance</div>
                <div className="mt-1 text-[10px] text-slate-500">CCTV Solutions</div>
              </div>
              <div>
                <Network className="h-5 w-5 text-cyan-300" />
                <div className="mt-3 text-xs font-bold">Integration</div>
                <div className="mt-1 text-[10px] text-slate-500">Combined Protection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-white/10 bg-[#0a1220]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 py-8 sm:grid-cols-4 lg:px-8">
          {[
            ["Flexible Coverage", "Service arrangements"],
            ["Custom Planning", "Site-based requirements"],
            ["Integrated Options", "Guards and CCTV"],
            ["Project Enquiries", "Quotation assistance"],
          ].map(([title, description]) => (
            <div key={title}>
              <div className="text-xs font-bold">{title}</div>
              <div className="mt-2 text-[10px] text-slate-500">{description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Package categories */}
      <section id="package-categories" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
        <div className="text-center">
          <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-300">
            Our Solutions
          </div>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Choose Your <span className="text-cyan-300">Protection</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-7 text-slate-400">
            Select a service category to explore the available solution
            structures. Final scope and pricing are determined according to
            your site requirements.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-2">
          {["All Packages", "Security Guards", "CCTV Systems", "Integrated Security"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-3 text-[10px] font-bold transition ${activeCategory === category
                  ? "border-cyan-400 bg-cyan-400 text-slate-950"
                  : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-cyan-400/40 hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Guard Packages */}
        {(activeCategory === "All Packages" || activeCategory === "Security Guards") && (
          <div className="mt-16">
            <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">01 / Personnel Protection</div>
                <h3 className="mt-2 text-2xl font-black">Security Guard Packages</h3>
                <p className="mt-2 text-xs text-slate-500">Professional guarding arrangements for different operational environments.</p>
              </div>
              <Link href="/security-guards" className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300">
                Explore Guard Services <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {guardPackages.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.name} className={`relative flex flex-col rounded-2xl border bg-[#0c1625] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 ${item.popular ? "border-cyan-400/40 shadow-xl shadow-cyan-950/20" : "border-white/10"
                    }`}>
                    {item.popular && (
                      <div className="absolute right-5 top-5 rounded-full bg-cyan-400 px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-slate-950">
                        Recommended
                      </div>
                    )}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                      <Icon className="h-6 w-6 text-cyan-300" />
                    </div>
                    <div className="mt-6 text-[10px] font-bold uppercase tracking-widest text-cyan-300">{item.subtitle}</div>
                    <h4 className="mt-2 text-xl font-black">{item.name}</h4>
                    <p className="mt-3 min-h-12 text-xs leading-6 text-slate-400">{item.description}</p>

                    <div className="my-6 border-t border-white/10 pt-5">
                      <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Package Features</div>
                      <ul className="mt-4 space-y-3">
                        {item.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-[11px] text-slate-300">
                            <Check size={14} className="mt-0.5 shrink-0 text-cyan-300" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto rounded-xl bg-white/[0.03] p-4">
                      <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Suitable For</div>
                      <div className="mt-2 text-[10px] leading-5 text-slate-300">{item.ideal}</div>
                    </div>
                    <button
                      onClick={() => openQuote(item.name)}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-4 text-xs font-black text-slate-950 hover:bg-cyan-300"
                    >
                      Request Package Quote <ArrowRight size={15} />
                    </button>
                    <div className="mt-3 text-center text-[9px] text-slate-600">Pricing based on deployment requirements</div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* CCTV Packages */}
        {(activeCategory === "All Packages" || activeCategory === "CCTV Systems") && (
          <div className="mt-20">
            <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">02 / Smart Surveillance</div>
                <h3 className="mt-2 text-2xl font-black">CCTV System Packages</h3>
                <p className="mt-2 text-xs text-slate-500">Scalable camera and recording solutions for your property.</p>
              </div>
              <Link href="/cctv-shop" className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300">
                Browse CCTV Products <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {cctvPackages.map((item) => (
                <article key={item.name} className={`overflow-hidden rounded-2xl border bg-[#0c1625] transition hover:-translate-y-1 hover:border-cyan-400/40 ${item.popular ? "border-cyan-400/40" : "border-white/10"
                  }`}>
                  <div className="relative h-52 overflow-hidden">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1625] to-transparent" />
                    {item.popular && (
                      <span className="absolute right-4 top-4 rounded-full bg-cyan-400 px-3 py-1.5 text-[9px] font-black text-slate-950">POPULAR</span>
                    )}
                    <div className="absolute bottom-4 left-5">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">{item.cameras}</div>
                      <h4 className="mt-1 text-xl font-black">{item.name}</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs leading-6 text-slate-400">{item.subtitle}</p>
                    <div className="mt-5 space-y-3">
                      {item.features.map((feature) => (
                        <div key={feature} className="flex gap-2 text-[11px] text-slate-300">
                          <Check size={14} className="shrink-0 text-cyan-300" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                      <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Recommended For</div>
                      <p className="mt-2 text-[10px] text-slate-300">{item.ideal}</p>
                    </div>
                    <button
                      onClick={() => openQuote(item.name)}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/30 py-3.5 text-xs font-bold text-cyan-300 hover:bg-cyan-400/10"
                    >
                      Request CCTV Quote <ArrowRight size={15} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Integrated packages */}
        {(activeCategory === "All Packages" || activeCategory === "Integrated Security") && (
          <div className="mt-20">
            <div className="mb-8">
              <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">03 / Unified Protection</div>
              <h3 className="mt-2 text-2xl font-black">Integrated Security Packages</h3>
              <p className="mt-2 text-xs text-slate-500">Combine manpower and technology into one coordinated security solution.</p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {integratedPackages.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.name} className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#102234] to-[#0b1422] p-6 transition hover:border-cyan-400/40">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                        <Icon className="h-6 w-6 text-cyan-300" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-cyan-300">Integrated Solution</span>
                    </div>
                    <h4 className="mt-6 text-lg font-black">{item.name}</h4>
                    <p className="mt-3 min-h-12 text-xs leading-6 text-slate-400">{item.description}</p>
                    <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                      {item.features.map((feature) => (
                        <div key={feature} className="flex gap-2 text-[10px] text-slate-300">
                          <CheckCircle2 size={14} className="shrink-0 text-cyan-300" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => openQuote(item.name)}
                      className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-4 text-xs font-black text-slate-950 hover:bg-cyan-300"
                    >
                      Discuss This Solution <ArrowRight size={15} />
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* Industries */}
      <section className="border-y border-white/10 bg-[#0a1220]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="text-center">
            <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Industries We Serve</div>
            <h2 className="mt-3 text-3xl font-black">Security for Every Environment</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => {
              const Icon = audience.icon;
              return (
                <div key={audience.title} className="rounded-xl border border-white/10 bg-[#0d1929] p-5">
                  <Icon size={24} className="text-cyan-300" />
                  <h3 className="mt-5 text-sm font-bold">{audience.title}</h3>
                  <p className="mt-2 text-[10px] leading-5 text-slate-500">{audience.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="text-center">
          <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Our Process</div>
          <h2 className="mt-3 text-3xl font-black">From Enquiry to Protection</h2>
          <p className="mt-3 text-xs text-slate-400">A clear process for planning your security requirements.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            ["01", "Submit Enquiry", "Tell us about your location, needs and preferred service."],
            ["02", "Site Assessment", "Discuss site conditions, coverage and deployment requirements."],
            ["03", "Proposal & Quote", "Receive a proposed service scope and commercial quotation."],
            ["04", "Service Coordination", "Coordinate the agreed service and implementation schedule."],
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

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#102b3d] via-[#0c1c2c] to-[#0b1422] p-8 sm:p-12">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-cyan-300">
                <LockKeyhole size={14} /> Your Security Starts Here
              </div>
              <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
                Let's Build the Right Security Solution for Your Business.
              </h2>
              <p className="mt-4 max-w-xl text-xs leading-7 text-slate-300">
                Contact ApexiveAI SecureGuard to discuss your guarding,
                CCTV or integrated security requirements.
              </p>
            </div>
            <button
              onClick={() => openQuote()}
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-400 px-7 py-4 text-xs font-black text-slate-950 hover:bg-cyan-300"
            >
              Request a Consultation <ArrowUpRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050a12]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="text-sm font-black tracking-widest">APEXIVEAI</div>
            <div className="mt-1 text-[9px] font-bold tracking-[0.25em] text-cyan-300">SECUREGUARD</div>
            <p className="mt-4 max-w-xs text-xs leading-6 text-slate-500">
              Integrated security and surveillance solutions for modern businesses and properties.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest">Company</h4>
            <div className="mt-5 flex flex-col gap-3 text-xs text-slate-500">
              <Link href="/about" className="hover:text-cyan-300">About Us</Link>
              <Link href="/security-guards" className="hover:text-cyan-300">Security Guards</Link>
              <Link href="/services" className="hover:text-cyan-300">Our Services</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest">Solutions</h4>
            <div className="mt-5 flex flex-col gap-3 text-xs text-slate-500">
              <Link href="/cctv-shop" className="hover:text-cyan-300">CCTV Shop</Link>
              <Link href="/packages" className="hover:text-cyan-300">Packages</Link>
              <Link href="/get-a-quote" className="hover:text-cyan-300">Get a Quote</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest">Contact</h4>
            <p className="mt-5 text-xs leading-6 text-slate-500">
              Get in touch for service enquiries, equipment consultations and project quotations.
            </p>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-cyan-300">
              Contact SecureGuard <ArrowRight size={14} />
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-[10px] text-slate-600">
          © ApexiveAI SecureGuard. All rights reserved.
        </div>
      </footer>

      {/* Quote Modal */}
      {quoteOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setQuoteOpen(false)}
        >
          <div
            className="my-auto w-full max-w-xl rounded-2xl border border-white/10 bg-[#0c1625] p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Commercial Enquiry</div>
                <h3 className="mt-2 text-2xl font-black">Request a Quote</h3>
                <p className="mt-2 text-xs leading-6 text-slate-400">
                  Share your requirements to discuss the right security solution.
                </p>
              </div>
              <button onClick={() => setQuoteOpen(false)} className="rounded-lg p-2 hover:bg-white/10" aria-label="Close quotation form">
                <X size={19} />
              </button>
            </div>

            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400" />
                <h4 className="mt-5 text-lg font-black">Enquiry Preview Complete</h4>
                <p className="mx-auto mt-3 max-w-sm text-xs leading-6 text-slate-400">
                  This frontend demonstration has not sent or saved your enquiry. Connect the backend to receive real customer enquiries.
                </p>
                <button onClick={() => setQuoteOpen(false)} className="mt-7 rounded-xl bg-cyan-400 px-7 py-3 text-xs font-black text-slate-950">
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={submitQuote} className="mt-7 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-xs text-slate-400">
                    Full Name *
                    <input required placeholder="Your name" className="mt-2 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                  </label>
                  <label className="text-xs text-slate-400">
                    Company Name
                    <input placeholder="Company / Organization" className="mt-2 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                  </label>
                  <label className="text-xs text-slate-400">
                    Phone Number *
                    <input required type="tel" placeholder="+95 ..." className="mt-2 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                  </label>
                  <label className="text-xs text-slate-400">
                    Email Address
                    <input type="email" placeholder="name@example.com" className="mt-2 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                  </label>
                </div>

                <label className="block text-xs text-slate-400">
                  Package of Interest *
                  <select
                    required
                    value={selectedPackage}
                    onChange={(event) => setSelectedPackage(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
                  >
                    <option value="">Select a package</option>
                    {[
                      ...guardPackages.map((p) => p.name),
                      ...cctvPackages.map((p) => p.name),
                      ...integratedPackages.map((p) => p.name),
                      "Custom Security Solution",
                    ].map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-xs text-slate-400">
                  Project Location *
                  <input required placeholder="Township, city or site address" className="mt-2 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                </label>

                <label className="block text-xs text-slate-400">
                  Requirements *
                  <textarea required rows={4} placeholder="Tell us about your security requirements..." className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#07101d] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400" />
                </label>

                <button type="submit" className="w-full rounded-xl bg-cyan-400 py-4 text-xs font-black text-slate-950 hover:bg-cyan-300">
                  Preview Enquiry
                </button>
                <p className="text-center text-[9px] leading-5 text-slate-600">
                  Demonstration form only. Backend submission will be connected separately.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
