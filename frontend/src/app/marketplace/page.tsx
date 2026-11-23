"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BadgeCheck,
  Building2,
  Check,
  Clock3,
  Globe2,
  Heart,
  MapPin,
  Menu,
  MessageCircle,
  Search,
  ShieldCheck,
  ShoppingCart,
  Star,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";

const tabs = ["About", "Security Guards", "Business Information", "Business Policies"];

export default function SecurityMarketplacePage() {
  const [activeTab, setActiveTab] = useState("Security Guards");
  const [menuOpen, setMenuOpen] = useState(false);
  const [following, setFollowing] = useState(false);
  const [added, setAdded] = useState(false);

  return (
    <main className="min-h-screen bg-[#eef3f8] text-[#151d32]">
      {/* MARKETPLACE HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-[66px] max-w-[1380px] items-center gap-5 px-5 xl:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <div className="flex h-10 w-10 items-center -skew-x-[12deg] items-center justify-center rounded-md bg-[#5230ed]">
              <ShieldCheck size={26} className="text-white skew-x-[12deg]" />
            </div>
            <span className="text-[25px] font-black tracking-tight text-[#4228d8]">
              Apexive AI
            </span>
          </Link>

          <form className="mx-auto flex w-full max-w-[570px]">
            <label className="sr-only" htmlFor="marketplace-search">
              Search
            </label>
            <input
              id="marketplace-search"
              type="search"
              placeholder="Search for products, brands and businesses..."
              className="h-11 w-full rounded-l-lg border border-slate-300 px-4 text-sm text-slate-700 outline-none focus:border-[#5230ed]"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex h-11 w-12 items-center justify-center rounded-r-lg bg-[#4d27d9] text-white"
            >
              <Search size={20} />
            </button>
          </form>

          <div className="hidden shrink-0 items-center gap-6 text-sm xl:flex">
            <button className="relative" aria-label="Shopping cart">
              <ShoppingCart size={24} className="text-slate-800" />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
                0
              </span>
            </button>
            <Link href="/get-a-quote" className="flex items-center gap-2 text-xs font-bold">
              <UserRound size={23} />
              <span>
                Sign In
                <br />or Register
              </span>
            </Link>
            <button className="flex items-center gap-2 text-xs font-bold">
              <Globe2 size={20} />
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="xl:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-slate-200 px-5 py-4 text-sm xl:hidden">
            <div className="flex flex-col gap-4">
              <Link href="/">Home</Link>
              <Link href="/marketplace">Businesses</Link>
              <Link href="/security-guards">Security Services</Link>
              <Link href="/cctv-shop">Electronics</Link>
            </div>
          </nav>
        )}

        <nav className="hidden h-11 bg-[#3014aa] text-white xl:block">
          <div className="mx-auto flex h-full max-w-[1380px] items-center gap-10 px-8 text-[13px] font-bold">
            <button className="flex h-full items-center gap-2 bg-[#4720d1] px-4">
              <Menu size={17} />
              All Categories
            </button>
            <Link href="/" className="hover:text-violet-200">Home</Link>
            <Link href="/marketplace" className="hover:text-violet-200">Businesses</Link>
            <Link href="/security-guards" className="hover:text-violet-200">Security Services</Link>
            <Link href="/cctv-shop" className="hover:text-violet-200">Electronics</Link>
            <Link href="/packages" className="hover:text-violet-200">Fashion</Link>
            <button className="hover:text-violet-200">More <span className="ml-1">⌄</span></button>
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-[1380px] px-5 pb-10 xl:px-8">
        {/* PROFILE HERO */}
        <section className="overflow-hidden rounded-b-xl border border-slate-200 bg-white">
          <div className="relative h-[162px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=85"
              alt="Professional security team"
              className="h-full w-full object-cover object-[center_45%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/20 to-[#073151]/15" />
            <div className="absolute left-[195px] top-4 max-w-[360px]">
              <p className="text-[25px] font-black leading-tight text-[#252a39]">
                Your Safety,
                <br />Our Priority
              </p>
              <p className="mt-1 text-[13px] font-bold leading-5 text-[#252a39]">
                Professional Security Services
                <br />for a Safer Community
              </p>
            </div>
          </div>

          <div className="relative px-5 pb-4">
            <div className="absolute -top-20 left-5 h-[145px] w-[145px] overflow-hidden rounded-full border-[5px] border-white bg-[#0d4f86] shadow-lg">
              <div className="flex h-full flex-col items-center justify-center text-white">
                <ShieldCheck size={58} strokeWidth={1.8} />
                <span className="mt-1 text-[21px] font-black tracking-tight">PSS</span>
                <span className="text-[12px] font-black tracking-wide">PALADIN</span>
              </div>
            </div>

            <div className="ml-[165px] pt-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="flex items-center gap-2 text-[21px] font-black leading-tight">
                    PSS Paladin Security Services
                    <BadgeCheck size={19} className="fill-[#4a8cf7] text-white" />
                  </h1>
                  <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#d9f8e7] px-3 py-1.5 text-xs font-bold text-[#06753b]">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#13ad61]">
                      <Check size={11} strokeWidth={3} className="text-white" />
                    </span>
                    Verified Business
                  </div>
                  <div className="mt-3 space-y-1.5 text-xs">
                    <p className="flex items-center gap-2">
                      <MapPin size={15} className="fill-[#6940ef] text-[#6940ef]" />
                      Yangon, Myanmar
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Star size={15} className="fill-[#f7ad18] text-[#f7ad18]" />
                      <strong>4.8/5</strong>
                      <span className="text-slate-600">(Based on 120 reviews)</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 pt-8">
                  <button
                    type="button"
                    onClick={() => setFollowing((value) => !value)}
                    className={`flex h-12 items-center gap-2 rounded-lg border px-6 text-sm font-bold ${
                      following
                        ? "border-[#5630e6] bg-[#5630e6] text-white"
                        : "border-[#5630e6] text-[#5630e6]"
                    }`}
                  >
                    {following ? <Heart size={19} className="fill-current" /> : <UsersRound size={20} />}
                    {following ? "Following" : "Follow"}
                  </button>
                  <button
                    type="button"
                    className="flex h-12 items-center gap-2 rounded-lg bg-[#5630d9] px-6 text-sm font-bold text-white"
                  >
                    <MessageCircle size={21} />
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROFILE TABS */}
        <section className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="flex h-[62px] items-stretch border-b border-slate-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-8 text-sm font-bold ${
                  activeTab === tab
                    ? "border-b-[3px] border-[#4d27d9] text-[#4d27d9]"
                    : "text-[#3a4053]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid gap-5 p-5 lg:grid-cols-[minmax(0,1fr)_290px]">
            <div className="min-w-0">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-[22px] font-black">Security Guards</h2>
                <Link href="/security-guards" className="text-xs font-bold text-[#5730ec]">
                  Learn more about our security services &nbsp; →
                </Link>
              </div>

              <div className="grid overflow-hidden rounded-xl border border-slate-200 md:grid-cols-[350px_minmax(0,1fr)]">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85"
                  alt="Professional security guard"
                  className="h-[286px] w-full object-cover object-[center_18%]"
                />

                <div className="p-6">
                  <h3 className="text-[20px] font-black">Professional Security Guards</h3>
                  <p className="mt-1 text-[14px] leading-6 text-slate-600">
                    Trained and reliable security guards for your business,
                    <br />event or property.
                  </p>

                  <ul className="mt-4 space-y-2 text-sm font-medium">
                    {["Experienced & Trained Staff", "24/7 Support", "Flexible Service Plans"].map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4c25e8]">
                          <Check size={13} strokeWidth={3} className="text-white" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 text-[23px] font-black text-[#5127d6]">
                    MMK 45,000 <span className="text-[14px] text-slate-700">/ Day</span>
                  </p>
                  <button
                    type="button"
                    onClick={() => setAdded((value) => !value)}
                    className={`mt-3 flex h-12 w-full items-center justify-center gap-3 rounded-lg text-sm font-bold ${
                      added ? "bg-emerald-600 text-white" : "bg-[#4c25e8] text-white"
                    }`}
                  >
                    {added ? <Check size={21} /> : <ShoppingCart size={21} />}
                    {added ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="text-[17px] font-black">Business Information</h3>
                <div className="mt-4 space-y-4 text-xs">
                  <InfoRow icon={<MapPin size={20} />} label="Business Location:" value="Yangon, Myanmar" />
                  <InfoRow icon={<Building2 size={20} />} label="Business Type:" value="Company" />
                  <InfoRow icon={<MapPin size={20} />} label="Business Address:" value="No. 123, Pyay Road,\nYangon, Myanmar" />
                  <InfoRow icon={<Clock3 size={20} />} label="Business Hours:" value="9 AM – 6 PM" />
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="flex items-center gap-3 text-[15px] font-black">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#efeaff]">
                    <ShieldCheck size={20} className="fill-[#5127d6] text-white" />
                  </span>
                  Business Policies
                </h3>
                <ul className="mt-4 space-y-3 text-xs">
                  {[
                    "Reliable and Professional Service",
                    "Flexible Terms",
                    "Customer Satisfaction",
                  ].map((policy) => (
                    <li key={policy} className="flex items-center gap-3">
                      <Check size={17} strokeWidth={3} className="text-[#5127d6]" />
                      {policy}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[28px_1fr] items-start">
      <span className="mt-0.5 text-[#5127d6]">{icon}</span>
      <p className="leading-5">
        <strong className="block">{label}</strong>
        {value.split("\n").map((line) => (
          <span key={line} className="block">{line}</span>
        ))}
      </p>
    </div>
  );
}
