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
  Eye,
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
  Cable,
  LockKeyhole,
  ScanEye,
  Headset,
  ChevronRight,
  Shield,
  Radio,
} from "lucide-react";

const services = [
  {
    id: "guarding",
    number: "01",
    category: "PEOPLE-BASED SECURITY",
    title: "Security Guard Services",
    description:
      "Manned guarding solutions designed around property requirements, access control procedures and operational needs.",
    image:
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1200&q=85",
    icon: Users,
    features: [
      "Corporate and office security concepts",
      "Industrial and warehouse guarding",
      "Residential property security",
      "Event and visitor access support",
      "Shift and deployment planning",
    ],
    href: "/security-guards",
  },
  {
    id: "cctv",
    number: "02",
    category: "VIDEO SURVEILLANCE",
    title: "CCTV & Smart Surveillance",
    description:
      "Surveillance system options that help businesses monitor premises, review incidents and improve visibility.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=85",
    icon: Camera,
    features: [
      "IP and network camera systems",
      "NVR and recording solutions",
      "Indoor and outdoor surveillance",
      "Remote viewing configuration",
      "Coverage planning and assessment",
    ],
    href: "/cctv-shop",
  },
  {
    id: "access",
    number: "03",
    category: "ENTRY & IDENTITY CONTROL",
    title: "Access Control Systems",
    description:
      "Access management concepts for controlling entry points and defining authorised access to selected areas.",
    image:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1200&q=85",
    icon: Fingerprint,
    features: [
      "Card and PIN-based access concepts",
      "Biometric access options",
      "Door access control equipment",
      "Entry point configuration",
      "Access event records where supported",
    ],
    href: "/get-a-quote",
  },
  {
    id: "alarm",
    number: "04",
    category: "INTRUSION DETECTION",
    title: "Alarm & Detection Systems",
    description:
      "Alarm and detection options intended to help identify selected security events and alert responsible personnel.",
    image:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1200&q=85",
    icon: Siren,
    features: [
      "Intrusion detection options",
      "Motion and perimeter sensors",
      "Door and window sensors",
      "Audible alarm configurations",
      "Alarm system integration options",
    ],
    href: "/get-a-quote",
  },
  {
    id: "installation",
    number: "05",
    category: "TECHNICAL SERVICES",
    title: "Installation & Configuration",
    description:
      "Installation planning and technical configuration for selected security equipment and systems.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=85",
    icon: Wrench,
    features: [
      "Site and equipment assessment",
      "Camera positioning and installation",
      "Cable routing and connectivity",
      "Device and system configuration",
      "Installation handover planning",
    ],
    href: "/get-a-quote",
  },
  {
    id: "maintenance",
    number: "06",
    category: "SYSTEM SUPPORT",
    title: "Maintenance & Technical Support",
    description:
      "Maintenance and troubleshooting options to help keep agreed security equipment and systems operating as intended.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85",
    icon: Settings,
    features: [
      "Equipment inspection",
      "Camera and recording checks",
      "Connectivity troubleshooting",
      "System configuration review",
      "Maintenance recommendations",
    ],
    href: "/get-a-quote",
  },
  {
    id: "integration",
    number: "07",
    category: "CONNECTED SECURITY",
    title: "Integrated Security Solutions",
    description:
      "A coordinated approach combining guarding, surveillance, access control and selected security technologies.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85",
    icon: Network,
    features: [
      "Multi-system security planning",
      "CCTV and access control concepts",
      "Centralised monitoring options",
      "Security infrastructure coordination",
      "Project-specific system design",
    ],
    href: "/get-a-quote",
  },
];

const industries = [
  { icon: Building2, title: "Corporate Offices", description: "Office buildings and business premises" },
  { icon: Factory, title: "Industrial Facilities", description: "Factories and production environments" },
  { icon: ShoppingBag, title: "Retail & Commercial", description: "Shops, malls and commercial properties" },
  { icon: Hotel, title: "Hotels & Hospitality", description: "Guest-facing and operational facilities" },
  { icon: Warehouse, title: "Warehousing & Logistics", description: "Storage and distribution environments" },
  { icon: Landmark, title: "Institutions", description: "Institutional and public facilities" },
];

const steps = [
  {
    number: "01",
    title: "Tell Us Your Requirements",
    description: "Share your property type, location, security concerns and preferred services.",
  },
  {
    number: "02",
    title: "Review the Site",
    description: "Discuss the site conditions, coverage needs, equipment and operating requirements.",
  },
  {
    number: "03",
    title: "Receive a Proposal",
    description: "Review a proposed scope, service options and quotation for your consideration.",
  },
  {
    number: "04",
    title: "Agree & Proceed",
    description: "Confirm the final scope, availability, responsibilities and implementation arrangements.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080e18] text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080e18]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
              <ShieldCheck className="h-6 w-6 text-cyan-300" />
            </div>
            <div>
              <div className="text-sm font-black tracking-[0.13em]">APEXIVEAI</div>
              <div className="text-[10px] font-semibold tracking-[0.25em] text-cyan-300">SECUREGUARD</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
            <Link href="/" className="transition hover:text-cyan-300">Home</Link>
            <Link href="/services" className="text-cyan-300">Services</Link>
            <Link href="/security-guards" className="transition hover:text-cyan-300">Security Guards</Link>
            <Link href="/cctv-shop" className="transition hover:text-cyan-300">CCTV Shop</Link>
            <Link href="/packages" className="transition hover:text-cyan-300">Packages</Link>
            <Link href="/about" className="transition hover:text-cyan-300">About Us</Link>
          </nav>

          <Link
            href="/get-a-quote"
            className="flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-cyan-300 sm:px-5 sm:text-sm"
          >
            Get a Quote <ArrowUpRight size={16} />
          </Link>
        </div>
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
              Security Services & Solutions
            </div>

            <h1 className="text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-[62px]">
              Complete Security.
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                Connected Solutions.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Explore security guarding, CCTV surveillance, access control,
              alarm systems, installation and integrated security options
              designed around your property and operational requirements.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/get-a-quote"
                className="flex items-center gap-3 rounded-lg bg-cyan-400 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Request a Quote <ArrowRight size={17} />
              </Link>
              <Link
                href="/packages"
                className="flex items-center gap-3 rounded-lg border border-white/15 px-6 py-4 text-sm font-semibold transition hover:border-cyan-400/50 hover:bg-white/[0.04]"
              >
                Explore Packages
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-7">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 size={16} className="text-cyan-400" />
                Site-focused planning
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 size={16} className="text-cyan-400" />
                Multiple service options
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
                  A Coordinated Approach
                </div>
                <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                  People + Technology + Process
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                  Security components planned to work together around your
                  specific requirements.
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
            Our Service Portfolio
          </div>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            Security services for different environments and requirements.
          </h2>
          <p className="mt-5 leading-7 text-slate-400">
            Choose an individual service or discuss a combination of
            solutions. Final service scope depends on assessment, availability
            and agreement.
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
                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-400" size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={service.href}
                    className="mt-8 inline-flex items-center gap-2 border-t border-white/10 pt-5 text-sm font-bold text-cyan-300 transition hover:text-cyan-200"
                  >
                    Explore Service <ArrowUpRight size={16} />
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
                Integrated Security
              </div>
              <div className="mt-2 text-2xl font-black">
                One coordinated security concept.
              </div>
            </div>
          </div>

          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              Beyond Individual Systems
            </div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              Bring your security components together.
            </h2>
            <p className="mt-6 leading-8 text-slate-400">
              Some properties require more than a single security product.
              An integrated approach can coordinate personnel, surveillance
              equipment, access control and alarm technologies within an
              agreed project scope.
            </p>

            <div className="mt-8 space-y-5">
              {[
                { icon: Users, title: "Security Personnel", detail: "Guarding and site procedures" },
                { icon: Camera, title: "Video Surveillance", detail: "Cameras and recording systems" },
                { icon: LockKeyhole, title: "Access Management", detail: "Controlled entry points" },
                { icon: Radio, title: "Alarm & Detection", detail: "Selected alerts and sensors" },
                { icon: Monitor, title: "Monitoring Options", detail: "System visibility where supported" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10">
                      <Icon size={21} className="text-cyan-300" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold">{item.title}</h3>
                      <p className="mt-1 text-xs text-slate-500">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/get-a-quote"
              className="mt-9 inline-flex items-center gap-3 rounded-lg bg-cyan-400 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Discuss an Integrated Solution <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
            Industries & Environments
          </div>
          <h2 className="text-3xl font-black sm:text-4xl">
            Solutions shaped around your environment.
          </h2>
          <p className="mt-5 leading-7 text-slate-400">
            Security needs vary by property type, location, operational
            activities and risk profile.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-5 rounded-xl border border-white/[0.08] bg-[#101a29] p-6 transition hover:border-cyan-400/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">
                  <Icon size={23} className="text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">{item.description}</p>
                </div>
                <ChevronRight size={17} className="ml-auto shrink-0 text-slate-600" />
              </div>
            );
          })}
        </div>
      </section>

      {/* Engagement process */}
      <section className="border-y border-white/[0.06] bg-[#0b1421]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              Our Engagement Process
            </div>
            <h2 className="text-3xl font-black sm:text-4xl">
              A clear path from enquiry to proposal.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Each project begins with understanding the requirements and
              agreeing on a practical scope before any implementation.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/30 bg-[#102234] text-sm font-black text-cyan-300">
                  {step.number}
                </div>
                <h3 className="mt-7 text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / expectations */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              Before You Enquire
            </div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              The right solution starts with the right information.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Providing a few details about your site helps us understand the
              project and discuss suitable options.
            </p>
            <Link
              href="/get-a-quote"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition hover:text-cyan-200"
            >
              Start Your Enquiry <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "What information should I prepare?",
                detail:
                  "Your property type, general location, approximate site size, security concerns and the services you are interested in.",
              },
              {
                title: "Can I request more than one service?",
                detail:
                  "Yes. You can enquire about guarding, CCTV, access control, alarms, installation and maintenance together.",
              },
              {
                title: "Are all services available at every location?",
                detail:
                  "Service availability and implementation depend on location, project scope, resources and applicable requirements. These details should be confirmed before an agreement.",
              },
              {
                title: "Are product configurations and prices fixed?",
                detail:
                  "Displayed configurations and indicative examples are for reference. Final specifications and pricing should be confirmed through a quotation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/[0.08] bg-[#101a29] p-6"
              >
                <div className="flex items-start gap-3">
                  <ClipboardCheck className="mt-0.5 shrink-0 text-cyan-300" size={19} />
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.detail}
                    </p>
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
            Your Security Requirements Matter
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
            Let&apos;s discuss the right security solution for your property.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            Share your requirements and explore suitable service options with
            ApexiveAI SecureGuard.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/get-a-quote"
              className="flex items-center gap-3 rounded-lg bg-cyan-400 px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Request a Quote <ArrowRight size={17} />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-3 rounded-lg border border-white/15 px-7 py-4 text-sm font-semibold transition hover:border-cyan-400/50 hover:bg-white/[0.04]"
            >
              Contact Us
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
                Security services and technology solutions designed around
                people, property and operational requirements.
              </p>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-bold">Services</h3>
              <div className="space-y-3 text-sm text-slate-500">
                <Link className="block hover:text-cyan-300" href="/security-guards">Security Guards</Link>
                <Link className="block hover:text-cyan-300" href="/cctv-shop">CCTV & Surveillance</Link>
                <Link className="block hover:text-cyan-300" href="/services">Integrated Security</Link>
                <Link className="block hover:text-cyan-300" href="/packages">Packages</Link>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-bold">Company</h3>
              <div className="space-y-3 text-sm text-slate-500">
                <Link className="block hover:text-cyan-300" href="/about">About Us</Link>
                <Link className="block hover:text-cyan-300" href="/contact">Contact</Link>
                <Link className="block hover:text-cyan-300" href="/get-a-quote">Request a Quote</Link>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/[0.07] pt-7 text-xs text-slate-600 sm:flex-row">
            <p>© ApexiveAI SecureGuard. All rights reserved.</p>
            <p>Security solutions. Designed around your requirements.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}