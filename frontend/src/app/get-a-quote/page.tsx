
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Camera,
  Building2,
  Factory,
  Home,
  Video,
  Wrench,
  Network,
  CheckCircle2,
  Clock3,
  MapPin,
  Phone,
  Mail,
  User,
  BriefcaseBusiness,
  ChevronRight,
  LockKeyhole,
  X,
} from "lucide-react";

const services = [
  {
    id: "security-guards",
    title: "Security Guard Services",
    description: "Professional manned guarding and site protection",
    icon: ShieldCheck,
  },
  {
    id: "cctv",
    title: "CCTV & Surveillance",
    description: "Cameras, recording systems and remote viewing",
    icon: Camera,
  },
  {
    id: "installation",
    title: "Installation Services",
    description: "Security equipment installation and configuration",
    icon: Wrench,
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description: "System inspection, servicing and technical support",
    icon: Video,
  },
  {
    id: "integrated",
    title: "Integrated Security",
    description: "Combined personnel and technology solutions",
    icon: Network,
  },
  {
    id: "consultation",
    title: "Security Consultation",
    description: "Site assessment and tailored security planning",
    icon: Building2,
  },
];

const propertyTypes = [
  "Residential Property",
  "Apartment / Condominium",
  "Office / Corporate Building",
  "Retail Shop / Shopping Centre",
  "Factory / Industrial Facility",
  "Warehouse / Logistics",
  "Construction Site",
  "Event / Special Assignment",
  "Other",
];

const contactMethods = ["Phone Call", "Email", "Viber", "WhatsApp"];

const initialServices: string[] = [];

export default function GetAQuotePage() {
  const [selectedServices, setSelectedServices] =
    useState<string[]>(initialServices);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  function toggleService(id: string) {
    setSelectedServices((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (selectedServices.length === 0) {
      setFormError("Please select at least one service.");
      return;
    }

    setFormError("");
    setSubmitted(true);
  }

  function resetForm() {
    setSelectedServices([]);
    setSubmitted(false);
    setFormError("");
  }

  return (
    <main className="min-h-screen bg-[#070d17] text-white">
      {/* Header */}
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
            href="/contact"
            className="rounded-xl border border-white/10 px-4 py-3 text-xs font-bold transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Contact Us
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1800"
            alt="Security monitoring environment"
            className="h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070d17] via-[#070d17]/95 to-[#070d17]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070d17] to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-cyan-300"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              <BriefcaseBusiness size={14} />
              Project Enquiry & Consultation
            </div>

            <h1 className="mt-7 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Let's Discuss Your
              <span className="block text-cyan-300">
                Security Requirements.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-300">
              Tell us about your property, business or project. Our team can
              discuss suitable security guard services, CCTV systems and
              integrated protection options with you.
            </p>

            <div className="mt-9 flex flex-wrap gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <LockKeyhole size={15} className="text-cyan-300" />
                Enquiry Information
              </div>
              <div className="flex items-center gap-2">
                <Clock3 size={15} className="text-cyan-300" />
                Consultation Request
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={15} className="text-cyan-300" />
                Tailored Solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_340px] lg:px-8 lg:py-20">
        <div>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-9">
              {/* Section 1 */}
              <div className="rounded-2xl border border-white/10 bg-[#0c1625] p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-sm font-black text-slate-950">
                    01
                  </div>
                  <div>
                    <h2 className="text-lg font-black">Contact Information</h2>
                    <p className="mt-1 text-[10px] text-slate-500">
                      Tell us how to reach you.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Full Name <span className="text-cyan-300">*</span>
                    <div className="relative mt-2">
                      <User className="absolute left-4 top-3.5 h-4 w-4 text-slate-500" />
                      <input
                        name="fullName"
                        required
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-white/10 bg-[#07101d] py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                      />
                    </div>
                  </label>

                  <label className="text-xs font-semibold text-slate-300">
                    Company / Organization
                    <div className="relative mt-2">
                      <Building2 className="absolute left-4 top-3.5 h-4 w-4 text-slate-500" />
                      <input
                        name="company"
                        placeholder="Company name (optional)"
                        className="w-full rounded-xl border border-white/10 bg-[#07101d] py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                      />
                    </div>
                  </label>

                  <label className="text-xs font-semibold text-slate-300">
                    Phone Number <span className="text-cyan-300">*</span>
                    <div className="relative mt-2">
                      <Phone className="absolute left-4 top-3.5 h-4 w-4 text-slate-500" />
                      <input
                        name="phone"
                        required
                        type="tel"
                        placeholder="+95 ..."
                        className="w-full rounded-xl border border-white/10 bg-[#07101d] py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                      />
                    </div>
                  </label>

                  <label className="text-xs font-semibold text-slate-300">
                    Email Address
                    <div className="relative mt-2">
                      <Mail className="absolute left-4 top-3.5 h-4 w-4 text-slate-500" />
                      <input
                        name="email"
                        type="email"
                        placeholder="name@company.com"
                        className="w-full rounded-xl border border-white/10 bg-[#07101d] py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                      />
                    </div>
                  </label>
                </div>
              </div>

              {/* Section 2 */}
              <div className="rounded-2xl border border-white/10 bg-[#0c1625] p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-sm font-black text-slate-950">
                    02
                  </div>
                  <div>
                    <h2 className="text-lg font-black">Select Your Services</h2>
                    <p className="mt-1 text-[10px] text-slate-500">
                      Select one or multiple services.
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {services.map((service) => {
                    const Icon = service.icon;
                    const active = selectedServices.includes(service.id);

                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => toggleService(service.id)}
                        className={`relative flex items-start gap-4 rounded-xl border p-4 text-left transition ${
                          active
                            ? "border-cyan-400 bg-cyan-400/10"
                            : "border-white/10 bg-[#07101d] hover:border-white/25"
                        }`}
                      >
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                          active ? "bg-cyan-400 text-slate-950" : "bg-white/5 text-cyan-300"
                        }`}>
                          <Icon size={20} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-bold">{service.title}</div>
                          <p className="mt-2 text-[10px] leading-5 text-slate-500">
                            {service.description}
                          </p>
                        </div>

                        <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                          active
                            ? "border-cyan-400 bg-cyan-400 text-slate-950"
                            : "border-white/20"
                        }`}>
                          {active && <CheckCircle2 size={14} />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {formError && (
                  <p className="mt-4 text-xs text-red-400">{formError}</p>
                )}
              </div>

              {/* Section 3 */}
              <div className="rounded-2xl border border-white/10 bg-[#0c1625] p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-sm font-black text-slate-950">
                    03
                  </div>
                  <div>
                    <h2 className="text-lg font-black">Project Information</h2>
                    <p className="mt-1 text-[10px] text-slate-500">
                      Provide details about your property or project.
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="text-xs font-semibold text-slate-300">
                      Property / Project Type *
                      <select
                        name="propertyType"
                        required
                        defaultValue=""
                        className="mt-2 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 py-3.5 text-sm text-white outline-none focus:border-cyan-400"
                      >
                        <option value="" disabled>Select property type</option>
                        {propertyTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </label>

                    <label className="text-xs font-semibold text-slate-300">
                      Estimated Project Size
                      <select
                        name="projectSize"
                        defaultValue=""
                        className="mt-2 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 py-3.5 text-sm text-white outline-none focus:border-cyan-400"
                      >
                        <option value="">Select project size</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Multiple Locations</option>
                        <option>Not Sure Yet</option>
                      </select>
                    </label>
                  </div>

                  <label className="block text-xs font-semibold text-slate-300">
                    Project Location <span className="text-cyan-300">*</span>
                    <div className="relative mt-2">
                      <MapPin className="absolute left-4 top-3.5 h-4 w-4 text-slate-500" />
                      <input
                        name="location"
                        required
                        placeholder="Township, city and project address"
                        className="w-full rounded-xl border border-white/10 bg-[#07101d] py-3.5 pl-11 pr-4 text-sm outline-none placeholder:text-slate-600 focus:border-cyan-400"
                      />
                    </div>
                  </label>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="text-xs font-semibold text-slate-300">
                      Expected Start Date
                      <input
                        name="startDate"
                        type="date"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 py-3.5 text-sm text-white outline-none focus:border-cyan-400"
                      />
                    </label>

                    <label className="text-xs font-semibold text-slate-300">
                      Preferred Contact Method
                      <select
                        name="contactMethod"
                        defaultValue="Phone Call"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 py-3.5 text-sm text-white outline-none focus:border-cyan-400"
                      >
                        {contactMethods.map((method) => (
                          <option key={method} value={method}>{method}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="block text-xs font-semibold text-slate-300">
                    Additional Requirements *
                    <textarea
                      name="requirements"
                      required
                      rows={6}
                      placeholder="Describe your requirements. For example: number of security guards, number of CCTV cameras, property size, coverage areas or any special requirements..."
                      className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-[#07101d] px-4 py-4 text-sm leading-7 outline-none placeholder:text-slate-600 focus:border-cyan-400"
                    />
                  </label>
                </div>
              </div>

              {/* Consent */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <label className="flex items-start gap-3 text-xs leading-6 text-slate-400">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 accent-cyan-400"
                  />
                  I confirm that the information provided is accurate and
                  authorize ApexiveAI SecureGuard to contact me regarding
                  this enquiry.
                </label>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 py-5 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
              >
                Submit Enquiry <ArrowRight size={18} />
              </button>

              <p className="text-center text-[10px] leading-6 text-slate-600">
                This is currently a frontend demonstration. Enquiry data is
                not transmitted or stored until a backend endpoint is connected.
              </p>
            </form>
          ) : (
            <div className="rounded-2xl border border-cyan-400/20 bg-[#0c1625] px-6 py-16 text-center sm:px-12">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10">
                <CheckCircle2 size={40} className="text-emerald-400" />
              </div>

              <div className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                Form Validation Successful
              </div>

              <h2 className="mt-3 text-3xl font-black">
                Enquiry Preview Completed
              </h2>

              <p className="mx-auto mt-5 max-w-lg text-sm leading-8 text-slate-400">
                Your form passed the frontend validation. No enquiry has
                been sent or saved yet. The next development step is
                connecting this page to the SecureGuard backend.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  onClick={resetForm}
                  className="rounded-xl bg-cyan-400 px-6 py-4 text-xs font-black text-slate-950"
                >
                  Submit Another Enquiry
                </button>
                <Link
                  href="/"
                  className="rounded-xl border border-white/10 px-6 py-4 text-xs font-bold text-white hover:border-cyan-400"
                >
                  Return Home
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Right side information */}
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-[#102638] to-[#0b1422] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
              <ShieldCheck size={25} />
            </div>

            <h3 className="mt-6 text-lg font-black">A Better Security Plan Starts with a Conversation.</h3>
            <p className="mt-3 text-xs leading-7 text-slate-400">
              Every property has different security requirements. Share
              your situation so that an appropriate service proposal can
              be discussed.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0c1625] p-6">
            <h3 className="text-sm font-black">What Happens Next?</h3>

            <div className="mt-6 space-y-6">
              {[
                ["01", "Enquiry Review", "Review the information you provide."],
                ["02", "Requirements Discussion", "Clarify your service and project needs."],
                ["03", "Proposal Preparation", "Discuss scope and quotation arrangements."],
                ["04", "Next Steps", "Coordinate further action subject to agreement."],
              ].map(([number, title, description]) => (
                <div key={number} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-[10px] font-black text-cyan-300">
                    {number}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold">{title}</h4>
                    <p className="mt-1 text-[10px] leading-5 text-slate-500">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0c1625] p-6">
            <h3 className="text-sm font-black">Explore Our Solutions</h3>

            <div className="mt-5 space-y-2">
              {[
                { label: "Security Guard Services", href: "/security-guards", icon: ShieldCheck },
                { label: "CCTV Product Catalogue", href: "/cctv-shop", icon: Camera },
                { label: "Security Packages", href: "/packages", icon: Network },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between rounded-xl bg-white/[0.03] p-4 text-xs text-slate-300 transition hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={16} />
                      {item.label}
                    </span>
                    <ChevronRight size={15} />
                  </Link>
                );
              })}
            </div>
          </div>
        </aside>
      </section>
{/* Footer */}
      <footer className="border-t border-white/10 bg-[#050a12] text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-8 text-center sm:flex-row sm:text-left lg:px-8">
          <div>
            <div className="text-xs font-black tracking-widest">
              APEXIVEAI SECUREGUARD
            </div>
            <div className="mt-2 text-xs text-slate-400">
              Integrated Security &amp; Surveillance Solutions
            </div>
          </div>
          <div className="self-center text-xs text-slate-400 sm:self-end">
            © ApexiveAI SecureGuard. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
