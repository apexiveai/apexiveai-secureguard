
"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Shield,
  Camera,
  Video,
  Building2,
  Factory,
  CalendarCheck,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Eye,
  Menu,
  X,
  Phone,
  LockKeyhole,
  Radio,
  Wrench,
  Siren,
  ChevronRight,
  Star,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Shield,
    number: "01",
    title: "Manned Guarding",
    description:
      "Professional and trained security personnel for commercial, industrial and residential environments.",
    link: "/security-guards",
  },
  {
    icon: Camera,
    number: "02",
    title: "CCTV Solutions",
    description:
      "Smart surveillance cameras, professional installation and integrated monitoring solutions.",
    link: "/cctv-shop",
  },
  {
    icon: LockKeyhole,
    number: "03",
    title: "Access Control",
    description:
      "Modern access management, biometric authentication and intelligent entry protection.",
    link: "/services",
  },
  {
    icon: Radio,
    number: "04",
    title: "Remote Monitoring",
    description:
      "Connected surveillance systems with mobile notifications and remote monitoring capabilities.",
    link: "/services",
  },
];

const products = [
  {
    name: "Indoor Smart Camera",
    category: "INDOOR SURVEILLANCE",
    spec: "2K HD · Night Vision · Motion Detection",
    price: "Request Price",
    image:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=700&q=85",
  },
  {
    name: "Outdoor Security Camera",
    category: "OUTDOOR SURVEILLANCE",
    spec: "Weather Resistant · HD · Night Vision",
    price: "Request Price",
    image:
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=700&q=85",
  },
  {
    name: "PTZ Smart Camera",
    category: "ADVANCED SURVEILLANCE",
    spec: "Pan & Tilt · Auto Tracking · Zoom",
    price: "Request Price",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=700&q=85",
  },
];

const packages = [
  {
    name: "Residential Protection",
    description: "Security solutions for homes and residential properties.",
    features: [
      "Residential security consultation",
      "CCTV system recommendations",
      "Camera installation options",
      "Remote monitoring setup",
    ],
  },
  {
    name: "Business Protection",
    description: "Integrated protection for offices and commercial properties.",
    featured: true,
    features: [
      "Professional security guards",
      "Commercial CCTV installation",
      "Access control solutions",
      "Maintenance and support",
    ],
  },
  {
    name: "Enterprise Protection",
    description: "Comprehensive security for factories and large facilities.",
    features: [
      "Dedicated guard deployment",
      "Advanced surveillance systems",
      "Site security assessment",
      "Integrated security management",
    ],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#080e18] text-white">

      {/* TOP BAR */}
      <div className="hidden border-b border-white/10 bg-[#060b13] md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-xs text-slate-400">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Clock3 size={14} className="text-cyan-400" />
              SECURITY SUPPORT & SERVICE
            </span>
            <span>Integrated Protection Solutions</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={13} className="text-cyan-400" />
            Contact Our Security Team
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080e18]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
              <ShieldCheck className="text-cyan-400" size={27} />
            </div>
            <div>
              <div className="text-lg font-black tracking-wide">
                SECURE<span className="text-cyan-400">GUARD</span>
              </div>
              <div className="text-[9px] tracking-[0.25em] text-slate-500">
                BY APEXIVEAI
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
            <Link href="/" className="text-cyan-400">Home</Link>
            <Link href="/about" className="hover:text-cyan-400">About Us</Link>
            <Link href="/security-guards" className="hover:text-cyan-400">Security Guards</Link>
            <Link href="/cctv-shop" className="hover:text-cyan-400">CCTV Shop</Link>
            <Link href="/services" className="hover:text-cyan-400">Services</Link>
            <Link href="/packages" className="hover:text-cyan-400">Packages</Link>
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/get-a-quote"
              className="flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Get a Quote <ArrowUpRight size={17} />
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-5 border-t border-white/10 bg-[#080e18] px-6 py-6 lg:hidden">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Security Guards", "/security-guards"],
              ["CCTV Shop", "/cctv-shop"],
              ["Services", "/services"],
              ["Packages", "/packages"],
              ["Get a Quote", "/get-a-quote"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-slate-300 hover:text-cyan-400"
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_40%,rgba(6,182,212,0.15),transparent_50%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">

          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-cyan-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              INTEGRATED SECURITY SOLUTIONS
            </div>

            <h1 className="text-5xl font-black leading-[1.12] tracking-tight md:text-6xl xl:text-7xl">
              Protect What
              <br />
              <span className="text-cyan-400">Matters Most.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400">
              Professional security personnel and intelligent surveillance
              technology. One integrated platform for complete protection
              of your people, properties and businesses.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/get-a-quote"
                className="flex items-center gap-3 rounded-lg bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Request Security Quote
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="flex items-center gap-3 rounded-lg border border-white/20 px-7 py-4 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Explore Solutions
                <ChevronRight size={18} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              <div>
                <ShieldCheck className="mb-2 text-cyan-400" size={22} />
                <p className="text-sm font-bold">Trained Personnel</p>
                <p className="mt-1 text-xs text-slate-500">Professional security</p>
              </div>
              <div>
                <Eye className="mb-2 text-cyan-400" size={22} />
                <p className="text-sm font-bold">Smart Surveillance</p>
                <p className="mt-1 text-xs text-slate-500">Intelligent protection</p>
              </div>
              <div>
                <Siren className="mb-2 text-cyan-400" size={22} />
                <p className="text-sm font-bold">Security Support</p>
                <p className="mt-1 text-xs text-slate-500">Response coordination</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-3xl bg-cyan-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111c2a]">
              <img
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&q=90"
                alt="Security surveillance monitoring"
                className="h-[450px] w-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080e18] via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="flex items-center justify-between rounded-xl border border-white/15 bg-[#080e18]/90 p-5 backdrop-blur-lg">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] text-cyan-400">
                      INTEGRATED PROTECTION
                    </p>
                    <p className="mt-2 text-xl font-bold">
                      Human + Smart Technology
                    </p>
                  </div>
                  <ShieldCheck size={35} className="text-cyan-400" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              WHAT WE DO
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Complete Security Services
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              A comprehensive range of security solutions designed for
              residential, commercial and industrial environments.
            </p>
          </div>
          <Link href="/services" className="flex items-center gap-2 text-sm font-bold text-cyan-400">
            View All Services <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.number}
                href={service.link}
                className="group rounded-2xl border border-white/10 bg-[#0d1623] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
              >
                <div className="flex items-center justify-between">
                  <Icon size={31} className="text-cyan-400" />
                  <span className="text-xs text-slate-600">{service.number}</span>
                </div>
                <h3 className="mt-9 text-lg font-bold">{service.title}</h3>
                <p className="mt-4 min-h-20 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>
                <div className="mt-7 flex items-center gap-2 text-xs font-bold text-cyan-400">
                  Explore Service <ArrowRight size={15} className="transition group-hover:translate-x-2" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CCTV PRODUCTS */}
      <section className="border-y border-white/10 bg-[#0b1420]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
                SMART SECURITY TECHNOLOGY
              </p>
              <h2 className="mt-4 text-3xl font-black md:text-4xl">
                CCTV & Surveillance
              </h2>
              <p className="mt-4 text-sm text-slate-400">
                Professional surveillance products and installation solutions.
              </p>
            </div>
            <Link href="/cctv-shop" className="flex items-center gap-2 text-sm font-bold text-cyan-400">
              Browse All Products <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111c2a]"
              >
                <div className="relative h-64 overflow-hidden bg-[#162536]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-md border border-white/20 bg-[#080e18]/90 px-3 py-2 text-[9px] font-bold tracking-widest text-cyan-300">
                    {product.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="mt-3 text-xs text-slate-400">{product.spec}</p>
                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-sm font-semibold text-cyan-400">
                      {product.price}
                    </span>
                    <Link
                      href="/get-a-quote"
                      className="flex items-center gap-2 text-xs font-bold hover:text-cyan-400"
                    >
                      Enquire <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
            INDUSTRIES WE PROTECT
          </p>
          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            Security for Every Environment
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { icon: Building2, title: "Corporate & Offices", desc: "Office buildings, business centers and corporate facilities." },
            { icon: Factory, title: "Industrial & Factories", desc: "Factories, warehouses and industrial sites." },
            { icon: CalendarCheck, title: "Events & Special Security", desc: "Event security, VIP protection and temporary deployments." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-[#0d1623] p-8">
                <Icon size={35} className="text-cyan-400" />
                <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="border-y border-white/10 bg-[#0b1420]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              PROTECTION PLANS
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Security Packages
            </h2>
            <p className="mt-4 text-sm text-slate-400">
              Flexible protection plans based on your security requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl border p-8 ${
                  pkg.featured
                    ? "border-cyan-400/60 bg-cyan-400/[0.06]"
                    : "border-white/10 bg-[#101b29]"
                }`}
              >
                {pkg.featured && (
                  <span className="rounded-full bg-cyan-400 px-3 py-2 text-[9px] font-black tracking-widest text-slate-950">
                    RECOMMENDED
                  </span>
                )}

                <h3 className="mt-7 text-xl font-black">{pkg.name}</h3>
                <p className="mt-3 min-h-14 text-sm leading-6 text-slate-400">
                  {pkg.description}
                </p>

                <div className="my-7 border-t border-white/10" />

                <ul className="space-y-5">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-slate-300">
                      <CheckCircle2 size={17} className="shrink-0 text-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/get-a-quote"
                  className="mt-9 flex items-center justify-center gap-2 rounded-lg border border-cyan-400/40 py-4 text-sm font-bold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
                >
                  Request Custom Quote <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#102d40] to-[#0b1420] p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
                LET'S SECURE YOUR FUTURE
              </p>
              <h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight md:text-5xl">
                Your Security.
                <br />
                Our Responsibility.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                Tell us about your security requirements. Our team can help
                develop a protection solution for your property or business.
              </p>
            </div>

            <Link
              href="/get-a-quote"
              className="flex shrink-0 items-center justify-center gap-3 rounded-lg bg-cyan-400 px-8 py-5 font-bold text-slate-950 hover:bg-cyan-300"
            >
              Get Started <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#060b13]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">

          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <ShieldCheck size={32} className="text-cyan-400" />
              <span className="text-xl font-black">
                SECURE<span className="text-cyan-400">GUARD</span>
              </span>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              An integrated security platform connecting professional
              manned guarding and intelligent surveillance technology.
              Powered by ApexiveAI.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Our Solutions</h4>
            <ul className="mt-6 space-y-4 text-sm text-slate-400">
              <li><Link href="/security-guards">Security Personnel</Link></li>
              <li><Link href="/cctv-shop">CCTV Solutions</Link></li>
              <li><Link href="/services">Installation & Maintenance</Link></li>
              <li><Link href="/packages">Protection Packages</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold">Get In Touch</h4>
            <p className="mt-6 text-sm leading-7 text-slate-400">
              Contact our team for security assessments, quotations and
              professional service enquiries.
            </p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-400">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-7">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs text-slate-500 md:flex-row">
            <span>© ApexiveAI SecureGuard. All rights reserved.</span>
            <span>POWERED BY APEXIVEAI</span>
          </div>
        </div>
      </footer>

    </main>
  );
}
