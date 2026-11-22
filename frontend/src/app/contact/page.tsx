
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Building2,
  Camera,
  Users,
  CheckCircle2,
  ChevronRight,
  X,
} from "lucide-react";

const contactOptions = [
  {
    icon: Phone,
    title: "Call Our Team",
    description: "Speak with us about your security requirements.",
    value: "Phone number to be announced",
  },
  {
    icon: Mail,
    title: "Email Enquiries",
    description: "Send us your business or project enquiries.",
    value: "Email address to be announced",
  },
  {
    icon: MapPin,
    title: "Office Location",
    description: "Contact us for office and service location details.",
    value: "Office address to be announced",
  },
];

const departments = [
  {
    icon: ShieldCheck,
    title: "Security Guard Services",
    description: "Personnel deployment and site protection enquiries.",
    href: "/security-guards",
  },
  {
    icon: Camera,
    title: "CCTV & Surveillance",
    description: "Camera systems, equipment and installation enquiries.",
    href: "/cctv-shop",
  },
  {
    icon: Building2,
    title: "Corporate Solutions",
    description: "Integrated security proposals for businesses.",
    href: "/packages",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
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
            <Link href="/packages" className="hover:text-cyan-300">Packages</Link>
          </nav>

          <Link
            href="/get-a-quote"
            className="rounded-xl bg-cyan-400 px-5 py-3 text-xs font-black text-slate-950 hover:bg-cyan-300"
          >
            Get a Quote
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800"
            alt="Professional corporate office"
            className="h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070d17] via-[#070d17]/95 to-[#070d17]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070d17] to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              <MessageCircle size={14} />
              Connect With SecureGuard
            </div>

            <h1 className="mt-7 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Let's Start a
              <span className="block text-cyan-300">Conversation.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-300">
              Whether you need security personnel, CCTV systems,
              installation services or an integrated security solution,
              we're ready to discuss your requirements.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 text-xs font-black text-slate-950 hover:bg-cyan-300"
              >
                Request a Consultation <ArrowRight size={16} />
              </Link>
              <a
                href="#contact-details"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-xs font-bold hover:border-cyan-300"
              >
                Contact Information
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section id="contact-details" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 lg:px-8">
        <div className="text-center">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
            Contact Information
          </div>
          <h2 className="mt-3 text-3xl font-black">
            Connect With Our Team
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xs leading-7 text-slate-400">
            Contact channels will be published here once the official
            company contact information is confirmed.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {contactOptions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#0c1625] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                  <Icon size={23} className="text-cyan-300" />
                </div>
                <h3 className="mt-6 text-base font-black">{item.title}</h3>
                <p className="mt-3 min-h-12 text-xs leading-6 text-slate-400">
                  {item.description}
                </p>
                <div className="mt-5 border-t border-white/10 pt-4 text-xs text-cyan-300">
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact form */}
      <section className="border-y border-white/10 bg-[#0a1220]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              Send Us a Message
            </div>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              How Can We
              <span className="block text-cyan-300">Help You?</span>
            </h2>
            <p className="mt-5 text-xs leading-8 text-slate-400">
              Send us a message about your business, property or project.
              Provide a few details and indicate the type of assistance
              you are looking for.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: Users,
                  title: "Security Personnel",
                  text: "Guarding service and deployment enquiries.",
                },
                {
                  icon: Camera,
                  title: "Technology Solutions",
                  text: "CCTV products, surveillance and installation.",
                },
                {
                  icon: Building2,
                  title: "Business Partnerships",
                  text: "Corporate projects and commercial cooperation.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <Icon size={19} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold">{item.title}</h3>
                      <p className="mt-2 text-[10px] leading-5 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-6">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                <Clock size={16} />
                Business Hours
              </div>
              <p className="mt-3 text-xs leading-6 text-slate-400">
                Official operating hours will be published after company
                contact and service arrangements are confirmed.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0c1625] p-6 sm:p-9">
            {!submitted ? (
              <>
                <h3 className="text-xl font-black">Send an Enquiry</h3>
                <p className="mt-2 text-xs text-slate-500">
                  Complete the form below.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="text-xs font-semibold text-slate-300">
                      Your Name *
                      <input
                        name="name"
                        required
                        placeholder="Full name"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 py-3.5 text-sm outline-none placeholder:text-slate-600 focus:border-cyan-400"
                      />
                    </label>

                    <label className="text-xs font-semibold text-slate-300">
                      Company
                      <input
                        name="company"
                        placeholder="Company name"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 py-3.5 text-sm outline-none placeholder:text-slate-600 focus:border-cyan-400"
                      />
                    </label>

                    <label className="text-xs font-semibold text-slate-300">
                      Phone Number *
                      <input
                        name="phone"
                        type="tel"
                        required
                        placeholder="+95 ..."
                        className="mt-2 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 py-3.5 text-sm outline-none placeholder:text-slate-600 focus:border-cyan-400"
                      />
                    </label>

                    <label className="text-xs font-semibold text-slate-300">
                      Email Address
                      <input
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 py-3.5 text-sm outline-none placeholder:text-slate-600 focus:border-cyan-400"
                      />
                    </label>
                  </div>

                  <label className="block text-xs font-semibold text-slate-300">
                    Enquiry Category *
                    <select
                      name="category"
                      required
                      defaultValue=""
                      className="mt-2 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 py-3.5 text-sm outline-none focus:border-cyan-400"
                    >
                      <option value="" disabled>Select a category</option>
                      <option>Security Guard Services</option>
                      <option>CCTV & Surveillance</option>
                      <option>Installation & Maintenance</option>
                      <option>Integrated Security</option>
                      <option>Business Partnership</option>
                      <option>General Enquiry</option>
                    </select>
                  </label>

                  <label className="block text-xs font-semibold text-slate-300">
                    Your Message *
                    <textarea
                      name="message"
                      required
                      rows={6}
                      placeholder="How can our team assist you?"
                      className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-[#07101d] px-4 py-4 text-sm leading-7 outline-none placeholder:text-slate-600 focus:border-cyan-400"
                    />
                  </label>

                  <label className="flex items-start gap-3 text-[10px] leading-6 text-slate-500">
                    <input
                      required
                      type="checkbox"
                      className="mt-1 accent-cyan-400"
                    />
                    I agree that the information provided may be used
                    to respond to this enquiry.
                  </label>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 py-4 text-xs font-black text-slate-950 transition hover:bg-cyan-300"
                  >
                    Send Message <Send size={15} />
                  </button>

                  <p className="text-center text-[9px] leading-5 text-slate-600">
                    Demonstration form only. Connect the backend to receive
                    and store real messages.
                  </p>
                </form>
              </>
            ) : (
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                <CheckCircle2 size={54} className="text-emerald-400" />
                <h3 className="mt-6 text-2xl font-black">
                  Message Form Completed
                </h3>
                <p className="mt-4 max-w-sm text-xs leading-7 text-slate-400">
                  Your form passed frontend validation. No message has
                  been sent or stored. Backend integration is required
                  to receive real enquiries.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-xl bg-cyan-400 px-7 py-4 text-xs font-black text-slate-950"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Service links */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="text-center">
          <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">
            Discover Our Services
          </div>
          <h2 className="mt-3 text-3xl font-black">
            Explore SecureGuard Solutions
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {departments.map((department) => {
            const Icon = department.icon;
            return (
              <Link
                key={department.title}
                href={department.href}
                className="group rounded-2xl border border-white/10 bg-[#0c1625] p-6 transition hover:border-cyan-400/40"
              >
                <div className="flex items-center justify-between">
                  <Icon size={25} className="text-cyan-300" />
                  <ArrowUpRight size={18} className="text-slate-600 transition group-hover:text-cyan-300" />
                </div>
                <h3 className="mt-6 text-sm font-black">{department.title}</h3>
                <p className="mt-3 text-xs leading-6 text-slate-500">
                  {department.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-cyan-300">
                  Explore Solution <ChevronRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="flex flex-col justify-between gap-7 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-[#102638] to-[#0b1422] p-8 sm:p-12 lg:flex-row lg:items-center">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">
              Start Your Project
            </div>
            <h2 className="mt-3 max-w-2xl text-3xl font-black">
              Looking for a Security Solution?
            </h2>
            <p className="mt-3 text-xs leading-7 text-slate-400">
              Tell us about your project and request a tailored quotation.
            </p>
          </div>

          <Link
            href="/get-a-quote"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-cyan-400 px-7 py-4 text-xs font-black text-slate-950 hover:bg-cyan-300"
          >
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050a12]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-8 sm:flex-row lg:px-8">
          <div>
            <div className="text-xs font-black tracking-widest">
              APEXIVEAI SECUREGUARD
            </div>
            <div className="mt-2 text-[10px] text-slate-600">
              Integrated Security & Surveillance Solutions
            </div>
          </div>
          <div className="text-[10px] text-slate-600">
            © ApexiveAI SecureGuard. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
