"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  CheckCircle2,
  LockKeyhole,
  Network,
  ClipboardCheck,
  ChevronRight,
  Shield,
  ScanEye,
  Headset,
} from "lucide-react";

const capabilities = [
  {
    icon: Users,
    number: "01",
    title: "Manned Guarding",
    description:
      "Security personnel solutions designed around site requirements, access control needs and operational risk.",
    tags: ["Corporate Security", "Site Protection", "Event Security"],
  },
  {
    icon: Camera,
    number: "02",
    title: "CCTV & Surveillance",
    description:
      "Video surveillance systems that help businesses monitor premises, improve visibility and review security events.",
    tags: ["IP Cameras", "NVR Systems", "Remote Monitoring"],
  },
  {
    icon: Wrench,
    number: "03",
    title: "Installation & Maintenance",
    description:
      "Security equipment installation, system configuration, inspection and maintenance support based on project scope.",
    tags: ["System Installation", "Configuration", "Maintenance"],
  },
  {
    icon: Network,
    number: "04",
    title: "Integrated Security",
    description:
      "Coordinated security solutions combining people, surveillance technology and operational procedures.",
    tags: ["Smart Security", "Access Control", "System Integration"],
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Protection First",
    description:
      "Security decisions should begin with protecting people, property, information and business continuity.",
  },
  {
    icon: Eye,
    title: "Visibility & Awareness",
    description:
      "Better visibility helps organisations understand their environments and identify potential security concerns.",
  },
  {
    icon: ClipboardCheck,
    title: "Structured Operations",
    description:
      "Clear requirements, defined responsibilities and practical procedures are central to effective security.",
  },
  {
    icon: LockKeyhole,
    title: "Responsible Security",
    description:
      "Security measures should respect privacy, applicable laws, safety requirements and agreed operating procedures.",
  },
];

const industries = [
  { icon: Building2, name: "Corporate Offices", detail: "Workplaces & commercial buildings" },
  { icon: Factory, name: "Industrial Facilities", detail: "Factories & production sites" },
  { icon: ShoppingBag, name: "Retail & Shopping", detail: "Retail premises & shopping centres" },
  { icon: Hotel, name: "Hospitality", detail: "Hotels & hospitality properties" },
  { icon: Warehouse, name: "Warehousing & Logistics", detail: "Storage & distribution facilities" },
  { icon: Landmark, name: "Institutions", detail: "Institutional & public facilities" },
];

const process = [
  {
    step: "01",
    title: "Understand",
    description: "Discuss your property, security concerns, operational requirements and objectives.",
  },
  {
    step: "02",
    title: "Assess",
    description: "Review the site conditions, coverage requirements and suitable security options.",
  },
  {
    step: "03",
    title: "Propose",
    description: "Prepare a proposed scope, configuration and quotation for your consideration.",
  },
  {
    step: "04",
    title: "Implement",
    description: "Proceed with agreed services, deployment or installation subject to the final agreement.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080e18] text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080e18]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
              <ShieldCheck className="h-6 w-6 text-cyan-300" />
            </div>
            <div>
              <div className="text-sm font-black tracking-[0.13em]">
                APEXIVEAI
              </div>
              <div className="text-[10px] font-semibold tracking-[0.25em] text-cyan-300">
                SECUREGUARD
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
            <Link href="/" className="transition hover:text-cyan-300">Home</Link>
            <Link href="/services" className="transition hover:text-cyan-300">Services</Link>
            <Link href="/security-guards" className="transition hover:text-cyan-300">Security Guards</Link>
            <Link href="/cctv-shop" className="transition hover:text-cyan-300">CCTV Shop</Link>
            <Link href="/packages" className="transition hover:text-cyan-300">Packages</Link>
            <Link href="/about" className="text-cyan-300">About Us</Link>
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,rgba(6,182,212,0.13),transparent_45%),radial-gradient(ellipse_at_10%_90%,rgba(37,99,235,0.10),transparent_40%)]" />
        <div className="absolute right-0 top-0 h-full w-[45%] bg-[linear-gradient(110deg,transparent,rgba(34,211,238,0.025))]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              About ApexiveAI SecureGuard
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.13] tracking-tight sm:text-5xl lg:text-[62px]">
              Security is more than{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                protection.
              </span>
              <br />
              It is confidence.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              ApexiveAI SecureGuard is a security solutions brand focused on
              bringing people, surveillance technology and practical security
              services together to support safer environments for businesses
              and organisations.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="group flex items-center gap-3 rounded-lg bg-cyan-400 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-3 rounded-lg border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:bg-white/[0.04]"
              >
                Contact Our Team
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck size={16} className="text-cyan-400" />
                Security-focused solutions
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ScanEye size={16} className="text-cyan-400" />
                Technology-enabled visibility
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
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
                  Integrated Security Approach
                </div>
                <h2 className="max-w-md text-2xl font-bold leading-snug sm:text-3xl">
                  People. Technology. Protection.
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                  A coordinated approach to security, shaped around each
                  organisation&apos;s environment and requirements.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-cyan-400/20 bg-[#101d2d] p-4 shadow-2xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/10">
                  <Crosshair className="text-cyan-300" size={23} />
                </div>
                <div>
                  <div className="text-sm font-bold">Risk-aware</div>
                  <div className="mt-1 text-xs text-slate-400">Site-focused solutions</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who we are */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
            Who We Are
          </div>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            A security solutions brand built around modern protection needs.
          </h2>
          <p className="mt-7 leading-8 text-slate-400">
            ApexiveAI SecureGuard is associated with the ApexiveAI ecosystem
            and is focused on the security services and technology sector.
            Its public-facing service concept brings together manned guarding,
            CCTV and surveillance, installation, maintenance and integrated
            security solutions.
          </p>
          <p className="mt-5 leading-8 text-slate-400">
            We believe security requirements are different from one property
            to another. A retail business, an industrial facility and a
            corporate office each have different environments, risks and
            operational priorities. Our approach begins with understanding
            those differences before proposing a suitable solution.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-cyan-300">
            <Shield size={19} />
            A practical, coordinated approach to security
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/[0.08] bg-[#101a29] p-6">
            <Users className="mb-6 text-cyan-300" size={27} />
            <h3 className="font-bold">People</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Security personnel and site-oriented guarding concepts.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#101a29] p-6">
            <Camera className="mb-6 text-cyan-300" size={27} />
            <h3 className="font-bold">Technology</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              CCTV, surveillance equipment and security technology.
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-[#101a29] p-6">
            <Network className="mb-6 text-cyan-300" size={27} />
            <h3 className="font-bold">Integration</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Coordinated systems and connected security components.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#101a29] p-6">
            <Headset className="mb-6 text-cyan-300" size={27} />
            <h3 className="font-bold">Support</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Consultation, installation and maintenance options.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="border-y border-white/[0.06] bg-[#0b1421]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-[#10283a] to-[#101827] p-8 sm:p-10">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cyan-400/[0.08] blur-3xl" />
            <div className="relative">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10">
                <Eye className="text-cyan-300" size={27} />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                Our Vision
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight">
                A safer and smarter environment for everyone.
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                To contribute to safer workplaces, properties and communities
                through responsible security practices and the thoughtful use
                of modern security technology.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111d2c] p-8 sm:p-10">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-blue-500/[0.08] blur-3xl" />
            <div className="relative">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-300/10">
                <Target className="text-blue-300" size={27} />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
                Our Mission
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight">
                Make security more structured and accessible.
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                To develop and offer practical security service options that
                combine people, equipment and clear operating requirements
                around the needs of each customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
            Our Security Philosophy
          </div>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            The principles behind every security decision.
          </h2>
          <p className="mt-5 leading-7 text-slate-400">
            Effective security is not just about equipment or personnel. It
            requires a balanced approach that considers people, property,
            procedures and the environment.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-white/[0.08] bg-[#101a29] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                  <Icon className="text-cyan-300" size={23} />
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
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
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                What We Focus On
              </div>
              <h2 className="text-3xl font-black leading-tight sm:text-4xl">
                Security capabilities under one brand.
              </h2>
              <p className="mt-5 leading-7 text-slate-400">
                Explore the service areas that may be included in a project,
                subject to assessment, availability and final agreement.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition hover:text-cyan-200"
            >
              View Service Details <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group rounded-2xl border border-white/[0.08] bg-[#101b2b] p-7 transition hover:border-cyan-400/30 sm:p-9"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08]">
                      <Icon className="text-cyan-300" size={26} />
                    </div>
                    <span className="text-sm font-bold tracking-widest text-slate-600">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-slate-400"
                      >
                        {tag}
                      </span>
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
          <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
            Industries & Environments
          </div>
          <h2 className="text-3xl font-black sm:text-4xl">
            Different environments. Different security needs.
          </h2>
          <p className="mt-5 leading-7 text-slate-400">
            Security requirements depend on the property, operating model,
            location and risk profile. These are the environments our service
            concepts are designed to address.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="flex items-center gap-5 rounded-xl border border-white/[0.08] bg-[#101a29] p-6 transition hover:border-cyan-400/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">
                  <Icon className="text-cyan-300" size={23} />
                </div>
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{item.detail}</p>
                </div>
                <ChevronRight className="ml-auto text-slate-600" size={17} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-white/[0.06] bg-[#0b1421]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              How We Approach a Project
            </div>
            <h2 className="text-3xl font-black sm:text-4xl">
              From understanding your needs to a proposed solution.
            </h2>
          </div>

          <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-cyan-400/50 via-blue-400/30 to-transparent lg:block" />
            {process.map((item) => (
              <div key={item.step} className="relative">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/30 bg-[#102234] text-sm font-black text-cyan-300">
                  {item.step}
                </div>
                <h3 className="mt-7 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(6,182,212,0.17),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 lg:py-28">
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
            <ShieldCheck className="text-cyan-300" size={32} />
          </div>
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Let&apos;s Discuss Your Security Requirements
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
            Build a more secure environment with a solution designed around you.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            Tell us about your property, business or project. We can discuss
            your requirements and explore suitable security service options.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/get-a-quote"
              className="flex items-center gap-3 rounded-lg bg-cyan-400 px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Request a Consultation <ArrowRight size={17} />
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
                  <div className="text-[10px] font-bold tracking-[0.25em] text-cyan-300">
                    SECUREGUARD
                  </div>
                </div>
              </Link>
              <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
                Security services and technology solutions designed to support
                safer environments through people, surveillance and integrated
                security concepts.
              </p>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-bold">Explore</h3>
              <div className="space-y-3 text-sm text-slate-500">
                <Link className="block transition hover:text-cyan-300" href="/services">Our Services</Link>
                <Link className="block transition hover:text-cyan-300" href="/security-guards">Security Guards</Link>
                <Link className="block transition hover:text-cyan-300" href="/cctv-shop">CCTV Shop</Link>
                <Link className="block transition hover:text-cyan-300" href="/packages">Packages</Link>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-bold">Company</h3>
              <div className="space-y-3 text-sm text-slate-500">
                <Link className="block transition hover:text-cyan-300" href="/about">About Us</Link>
                <Link className="block transition hover:text-cyan-300" href="/contact">Contact</Link>
                <Link className="block transition hover:text-cyan-300" href="/get-a-quote">Request a Quote</Link>
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