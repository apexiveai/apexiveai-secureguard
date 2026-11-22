
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Building2,
  Factory,
  CalendarDays,
  Users,
  Shield,
  Star,
  Award,
  BriefcaseBusiness,
  Phone,
  ClipboardCheck,
  BadgeCheck,
  ChevronDown,
  Menu,
  X,
  UserCheck,
  Siren,
} from "lucide-react";

const categories = [
  {
    icon: Building2,
    title: "Corporate Security",
    desc: "Professional guarding for offices, commercial buildings and corporate facilities.",
    tags: ["Office Buildings", "Reception Security", "Access Control"],
  },
  {
    icon: Factory,
    title: "Industrial Security",
    desc: "Security personnel for factories, warehouses, construction sites and industrial zones.",
    tags: ["Factories", "Warehouses", "Construction Sites"],
  },
  {
    icon: Users,
    title: "Event & VIP Security",
    desc: "Dedicated personnel for private functions, corporate events and special assignments.",
    tags: ["Events", "VIP Protection", "Crowd Management"],
  },
  {
    icon: Shield,
    title: "Residential Security",
    desc: "Security coverage for residential properties, apartments and gated communities.",
    tags: ["Residential", "Condominiums", "Property Protection"],
  },
];

const capabilities = [
  "Access control and visitor management",
  "Perimeter and property patrol",
  "Incident reporting and escalation",
  "Emergency response coordination",
  "Shift-based security operations",
  "Daily duty reporting",
];

const profiles = [
  {
    id: "SG-001",
    title: "Corporate Security Officer",
    type: "Corporate",
    experience: "Experienced personnel",
    skills: ["Access Control", "Visitor Management", "Patrol"],
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=85",
  },
  {
    id: "SG-002",
    title: "Industrial Security Officer",
    type: "Industrial",
    experience: "Industrial site assignment",
    skills: ["Perimeter Patrol", "Site Security", "Reporting"],
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=700&q=85",
  },
  {
    id: "SG-003",
    title: "Event Security Personnel",
    type: "Event",
    experience: "Event security assignment",
    skills: ["Crowd Control", "Guest Safety", "Coordination"],
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&q=85",
  },
];

const packages = [
  {
    name: "Day Shift",
    subtitle: "DAYTIME SECURITY COVERAGE",
    duration: "8–12 hours",
    description: "For businesses requiring daytime security operations.",
    features: [
      "Dedicated guard deployment",
      "Entry and exit monitoring",
      "Visitor registration",
      "Daily activity reporting",
    ],
  },
  {
    name: "Night Shift",
    subtitle: "OVERNIGHT SECURITY COVERAGE",
    duration: "8–12 hours",
    featured: true,
    description: "For facilities requiring overnight property protection.",
    features: [
      "Night duty deployment",
      "Scheduled security patrol",
      "Perimeter monitoring",
      "Incident escalation",
    ],
  },
  {
    name: "24/7 Protection",
    subtitle: "CONTINUOUS SECURITY COVERAGE",
    duration: "24 hours",
    description: "Continuous coverage through scheduled shifts.",
    features: [
      "Shift rotation planning",
      "Continuous guard coverage",
      "Duty handover procedures",
      "Operations coordination",
    ],
  },
];

const initialForm = {
  name: "",
  company: "",
  phone: "",
  email: "",
  location: "",
  service: "Corporate Security",
  guards: "2",
  shift: "Day Shift",
  duration: "Monthly",
  startDate: "",
  details: "",
};

export default function SecurityGuardsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const filteredProfiles =
    activeCategory === "All"
      ? profiles
      : profiles.filter((profile) => profile.type === activeCategory);

  function updateField(
    field: keyof typeof initialForm,
    value: string
  ) {
    setForm((previous) => ({ ...previous, [field]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#080e18] text-white">

      {/* TOP INFORMATION BAR */}
      <div className="hidden border-b border-white/10 bg-[#060b13] md:block">
        <div className="mx-auto flex max-w-7xl justify-between px-6 py-3 text-xs text-slate-400">
          <span className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-cyan-400" />
            PROFESSIONAL MANPOWER & SECURITY SERVICES
          </span>
          <span>SECURITY OPERATIONS & SUPPORT</span>
        </div>
      </div>

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080e18]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
              <ShieldCheck size={27} className="text-cyan-400" />
            </div>
            <div>
              <div className="text-lg font-black">
                SECURE<span className="text-cyan-400">GUARD</span>
              </div>
              <div className="text-[9px] tracking-[0.25em] text-slate-500">
                BY APEXIVEAI
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/security-guards" className="text-cyan-400">
              Security Guards
            </Link>
            <Link href="/cctv-shop">CCTV Shop</Link>
            <Link href="/services">Services</Link>
            <Link href="/packages">Packages</Link>
          </nav>

          <Link
            href="#booking"
            className="hidden rounded-lg bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 lg:block"
          >
            Hire Security Guards
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-5 border-t border-white/10 px-6 py-6 lg:hidden">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Security Guards", "/security-guards"],
              ["CCTV Shop", "/cctv-shop"],
              ["Services", "/services"],
              ["Packages", "/packages"],
            ].map(([name, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-slate-300"
              >
                {name}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1800&q=90"
            alt="Professional security operations"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080e18] via-[#080e18]/95 to-[#080e18]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080e18] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-cyan-300">
              <ShieldCheck size={15} />
              MANNED GUARDING SERVICES
            </div>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Professional
              <br />
              <span className="text-cyan-400">Security Personnel.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300">
              Reliable manpower solutions for corporate offices,
              industrial facilities, residential properties and events.
              Build a professional security team around your requirements.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#booking"
                className="flex items-center gap-3 rounded-lg bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Hire Security Personnel
                <ArrowRight size={18} />
              </Link>

              <Link
                href="#services"
                className="flex items-center gap-3 rounded-lg border border-white/20 px-7 py-4 font-bold hover:border-cyan-400 hover:text-cyan-400"
              >
                Explore Services
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-white/15 pt-8">
              <div>
                <ShieldCheck className="mb-3 text-cyan-400" size={24} />
                <p className="text-sm font-bold">Professional</p>
                <p className="mt-1 text-[10px] text-slate-500">
                  Personnel Standards
                </p>
              </div>
              <div>
                <Clock3 className="mb-3 text-cyan-400" size={24} />
                <p className="text-sm font-bold">Flexible</p>
                <p className="mt-1 text-[10px] text-slate-500">
                  Shift Scheduling
                </p>
              </div>
              <div>
                <Siren className="mb-3 text-cyan-400" size={24} />
                <p className="text-sm font-bold">Coordinated</p>
                <p className="mt-1 text-[10px] text-slate-500">
                  Incident Response
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
            SECURITY DEPLOYMENT
          </p>
          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            Security for Every Environment
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-400">
            Different environments require different security strategies.
            Select the service that matches your operational needs.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-[#0d1623] p-7 transition hover:-translate-y-2 hover:border-cyan-400/50"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10">
                  <Icon size={28} className="text-cyan-400" />
                </div>

                <p className="mt-7 text-xs tracking-widest text-slate-600">
                  0{index + 1}
                </p>

                <h3 className="mt-2 text-lg font-bold">{item.title}</h3>

                <p className="mt-4 min-h-20 text-sm leading-7 text-slate-400">
                  {item.desc}
                </p>

                <div className="mt-5 space-y-3">
                  {item.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 text-xs text-slate-400"
                    >
                      <CheckCircle2 size={14} className="text-cyan-400" />
                      {tag}
                    </div>
                  ))}
                </div>

                <Link
                  href="#booking"
                  onClick={() => updateField("service", item.title)}
                  className="mt-7 flex items-center gap-2 text-xs font-bold text-cyan-400"
                >
                  Request Service <ArrowRight size={15} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-y border-white/10 bg-[#0b1420]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=85"
              alt="Security team coordination"
              className="h-[420px] w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080e18] to-transparent" />
            <div className="absolute bottom-7 left-7 right-7 rounded-xl border border-white/10 bg-[#080e18]/85 p-5 backdrop-blur-xl">
              <p className="text-xs font-bold tracking-widest text-cyan-400">
                SECURITY OPERATIONS
              </p>
              <p className="mt-2 text-xl font-black">
                People. Process. Protection.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              PROFESSIONAL CAPABILITIES
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              More Than Just
              <br />
              Guard Deployment.
            </h2>
            <p className="mt-5 text-sm leading-8 text-slate-400">
              A structured security operation requires personnel,
              clear procedures, supervision and proper communication.
            </p>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-cyan-400"
                  />
                  <span className="text-sm leading-6 text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/get-a-quote"
              className="mt-10 inline-flex items-center gap-3 rounded-lg border border-cyan-400/40 px-6 py-4 text-sm font-bold text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            >
              Discuss Your Requirements <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* PERSONNEL PROFILES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              OUR PERSONNEL
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Security Personnel Profiles
            </h2>
            <p className="mt-4 text-sm text-slate-400">
              Explore representative security personnel categories and capabilities.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", "Corporate", "Industrial", "Event"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg border px-4 py-2 text-xs font-bold transition ${
                  activeCategory === category
                    ? "border-cyan-400 bg-cyan-400 text-slate-950"
                    : "border-white/10 text-slate-400 hover:border-cyan-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {filteredProfiles.map((profile) => (
            <div
              key={profile.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1623]"
            >
              <div className="relative h-64">
                <img
                  src={profile.image}
                  alt={profile.title}
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-4 left-4 rounded-md border border-white/20 bg-[#080e18]/90 px-3 py-2 text-[10px] font-bold tracking-widest text-cyan-400">
                  {profile.id}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-bold tracking-widest text-cyan-400">
                    {profile.type.toUpperCase()}
                  </span>
                  <BadgeCheck size={19} className="text-cyan-400" />
                </div>

                <h3 className="mt-3 text-lg font-bold">{profile.title}</h3>
                <p className="mt-2 text-xs text-slate-500">
                  {profile.experience}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {profile.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-[10px] text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <Link
                  href="#booking"
                  className="mt-7 flex items-center justify-center gap-2 rounded-lg border border-cyan-400/30 py-3 text-xs font-bold text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
                >
                  Request Personnel <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs leading-6 text-slate-500">
          Note: These are illustrative service profiles, not verified
          individual employee records. Actual personnel profiles will
          be displayed after authorized recruitment and verification.
        </p>
      </section>

      {/* DEPLOYMENT PACKAGES */}
      <section className="border-y border-white/10 bg-[#0b1420]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              DEPLOYMENT OPTIONS
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Flexible Security Coverage
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Select a coverage model. Final pricing depends on personnel
              requirements, location and operational conditions.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
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
                    POPULAR OPTION
                  </span>
                )}

                <p className="mt-7 text-[10px] font-bold tracking-widest text-cyan-400">
                  {pkg.subtitle}
                </p>
                <h3 className="mt-3 text-2xl font-black">{pkg.name}</h3>

                <div className="mt-5 flex items-center gap-3">
                  <Clock3 className="text-cyan-400" size={20} />
                  <span className="text-sm text-slate-300">{pkg.duration}</span>
                </div>

                <p className="mt-5 min-h-12 text-sm leading-7 text-slate-400">
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
                  href="#booking"
                  onClick={() => updateField("shift", pkg.name)}
                  className="mt-9 flex items-center justify-center gap-2 rounded-lg bg-cyan-400 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Select This Plan <ArrowRight size={17} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="booking" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              SECURITY SERVICE REQUEST
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              Hire Your
              <br />
              <span className="text-cyan-400">Security Team.</span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-slate-400">
              Tell us about your property and security requirements.
              Our operations team can review your request and prepare
              a suitable deployment proposal.
            </p>

            <div className="mt-10 space-y-7">
              {[
                {
                  icon: ClipboardCheck,
                  title: "Requirement Assessment",
                  desc: "Understand your property and security needs.",
                },
                {
                  icon: UserCheck,
                  title: "Personnel Planning",
                  desc: "Determine suitable personnel and shift coverage.",
                },
                {
                  icon: Award,
                  title: "Custom Quotation",
                  desc: "Prepare a proposal based on your requirements.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                      <Icon size={23} className="text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold">{item.title}</h3>
                      <p className="mt-2 text-xs leading-6 text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d1623] p-6 md:p-10">
            <div className="mb-9 flex items-center justify-between border-b border-white/10 pb-7">
              <div>
                <p className="text-[10px] font-bold tracking-widest text-cyan-400">
                  BOOKING & QUOTATION
                </p>
                <h3 className="mt-3 text-2xl font-black">
                  Security Requirements
                </h3>
                <p className="mt-2 text-xs text-slate-500">
                  Complete the information below.
                </p>
              </div>
              <ShieldCheck size={34} className="text-cyan-400" />
            </div>

            {submitted ? (
              <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/5 p-8">
                <CheckCircle2 size={42} className="text-cyan-400" />
                <h4 className="mt-5 text-xl font-bold">
                  Request Preview Ready
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Your information has been validated in this browser.
                  This frontend demo is not yet connected to a backend,
                  so the request has not been sent to the company.
                </p>
                <div className="mt-6 space-y-3 rounded-lg bg-black/20 p-5 text-sm">
                  <p><span className="text-slate-500">Name:</span> {form.name}</p>
                  <p><span className="text-slate-500">Service:</span> {form.service}</p>
                  <p><span className="text-slate-500">Guards:</span> {form.guards}</p>
                  <p><span className="text-slate-500">Shift:</span> {form.shift}</p>
                  <p><span className="text-slate-500">Location:</span> {form.location}</p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-lg border border-cyan-400/30 px-6 py-3 text-sm font-bold text-cyan-400"
                >
                  Edit Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-xs font-bold text-slate-300">
                      Full Name *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm outline-none transition focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-xs font-bold text-slate-300">
                      Company / Organization
                    </label>
                    <input
                      value={form.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      placeholder="Company name"
                      className="w-full rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-xs font-bold text-slate-300">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="+95 ..."
                      className="w-full rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-xs font-bold text-slate-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="name@company.com"
                      className="w-full rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-xs font-bold text-slate-300">
                    Deployment Location *
                  </label>
                  <input
                    required
                    value={form.location}
                    onChange={(e) => updateField("location", e.target.value)}
                    placeholder="Township, City, Site Address"
                    className="w-full rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-xs font-bold text-slate-300">
                      Security Service *
                    </label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => updateField("service", e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm text-slate-300 outline-none focus:border-cyan-400"
                    >
                      {[
                        "Corporate Security",
                        "Industrial Security",
                        "Event & VIP Security",
                        "Residential Security",
                      ].map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-3 block text-xs font-bold text-slate-300">
                      Number of Guards *
                    </label>
                    <select
                      required
                      value={form.guards}
                      onChange={(e) => updateField("guards", e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm text-slate-300 outline-none focus:border-cyan-400"
                    >
                      {["1", "2", "3", "5", "10", "15", "20", "30", "50", "100+"].map((item) => (
                        <option key={item} value={item}>{item} Guards</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-3 block text-xs font-bold text-slate-300">
                      Shift Type *
                    </label>
                    <select
                      required
                      value={form.shift}
                      onChange={(e) => updateField("shift", e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm text-slate-300 outline-none focus:border-cyan-400"
                    >
                      {["Day Shift", "Night Shift", "24/7 Protection", "Flexible Shifts"].map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-3 block text-xs font-bold text-slate-300">
                      Hiring Duration *
                    </label>
                    <select
                      required
                      value={form.duration}
                      onChange={(e) => updateField("duration", e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm text-slate-300 outline-none focus:border-cyan-400"
                    >
                      {["Daily", "Weekly", "Monthly", "Yearly", "Event Based", "Custom"].map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-xs font-bold text-slate-300">
                    Expected Start Date
                  </label>
                  <input
                    type="date"
                    value={form.startDate}
                    onChange={(e) => updateField("startDate", e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm text-slate-300 outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-xs font-bold text-slate-300">
                    Additional Requirements
                  </label>
                  <textarea
                    rows={5}
                    value={form.details}
                    onChange={(e) => updateField("details", e.target.value)}
                    placeholder="Describe your property, operational requirements, preferred arrangements..."
                    className="w-full resize-y rounded-lg border border-white/10 bg-[#080e18] px-4 py-4 text-sm outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-lg bg-cyan-400 py-5 font-black text-slate-950 transition hover:bg-cyan-300"
                >
                  Review Security Request
                  <ArrowRight size={19} />
                </button>

                <p className="text-center text-[10px] leading-6 text-slate-500">
                  Submitting this form for review does not constitute a
                  confirmed booking or service contract.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* RECRUITMENT CTA */}
      <section className="border-y border-white/10 bg-[#0b1420]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-16 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              CAREER OPPORTUNITIES
            </p>
            <h2 className="mt-4 text-2xl font-black md:text-3xl">
              Interested in Joining Our Security Team?
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Explore potential security personnel recruitment opportunities.
            </p>
          </div>
          <Link
            href="/careers/security-guard"
            className="flex shrink-0 items-center gap-3 rounded-lg border border-cyan-400/40 px-7 py-4 text-sm font-bold text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
          >
            Apply for a Position <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#060b13]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <ShieldCheck size={30} className="text-cyan-400" />
              <span className="text-xl font-black">
                SECURE<span className="text-cyan-400">GUARD</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Integrated manpower and intelligent surveillance
              solutions. Powered by ApexiveAI.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Security Services</h4>
            <div className="mt-5 space-y-4 text-sm text-slate-400">
              <p>Corporate Security</p>
              <p>Industrial Security</p>
              <p>Event & VIP Security</p>
              <p>Residential Security</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold">Explore</h4>
            <div className="mt-5 space-y-4 text-sm text-slate-400">
              <p><Link href="/cctv-shop">CCTV Solutions</Link></p>
              <p><Link href="/services">Our Services</Link></p>
              <p><Link href="/packages">Protection Packages</Link></p>
              <p><Link href="/contact">Contact Us</Link></p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-slate-600">
          © ApexiveAI SecureGuard. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
