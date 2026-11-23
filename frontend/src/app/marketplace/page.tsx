
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
import { useLanguage } from "@/i18n/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const translations = {
  en: {
    search: "Search",
    searchPlaceholder: "Search for products, brands and businesses...",
    signIn: "Sign In",
    register: "or Register",
    home: "Home",
    businesses: "Businesses",
    securityServices: "Security Services",
    electronics: "Electronics",
    fashion: "Fashion",
    more: "More",
    allCategories: "All Categories",
    safety: "Your Safety,",
    priority: "Our Priority",
    professionalSecurity: "Professional Security Services",
    saferCommunity: "for a Safer Community",
    verified: "Verified Business",
    reviews: "(Based on 120 reviews)",
    follow: "Follow",
    following: "Following",
    message: "Message",
    about: "About",
    guardsTab: "Security Guards",
    businessInfo: "Business Information",
    policiesTab: "Business Policies",
    learnMore: "Learn more about our security services",
    professionalGuards: "Professional Security Guards",
    guardsDescription:
      "Trained and reliable security guards for your business, event or property.",
    experienced: "Experienced & Trained Staff",
    support247: "24/7 Support",
    flexiblePlans: "Flexible Service Plans",
    perDay: "/ Day",
    addToCart: "Add to Cart",
    addedToCart: "Added to Cart",
    location: "Business Location:",
    businessType: "Business Type:",
    address: "Business Address:",
    hours: "Business Hours:",
    company: "Company",
    reliable: "Reliable and Professional Service",
    flexibleTerms: "Flexible Terms",
    satisfaction: "Customer Satisfaction",
    aboutDescription: "About this business",
    businessLocation: "Yangon, Myanmar",
    cart: "Shopping cart",
    searchButton: "Search",
  },
  my: {
    search: "ရှာဖွေရန်",
    searchPlaceholder: "ကုန်ပစ္စည်း၊ အမှတ်တံဆိပ်နှင့် လုပ်ငန်းများကို ရှာဖွေရန်...",
    signIn: "အကောင့်ဝင်ရန်",
    register: "သို့မဟုတ် အကောင့်ဖွင့်ရန်",
    home: "ပင်မစာမျက်နှာ",
    businesses: "စီးပွားရေးလုပ်ငန်းများ",
    securityServices: "လုံခြုံရေးဝန်ဆောင်မှုများ",
    electronics: "အီလက်ထရွန်နစ်ပစ္စည်းများ",
    fashion: "ဖက်ရှင်",
    more: "အခြား",
    allCategories: "အမျိုးအစားအားလုံး",
    safety: "သင့်လုံခြုံရေးသည်",
    priority: "ကျွန်ုပ်တို့၏ ဦးစားပေးမှု",
    professionalSecurity: "ကျွမ်းကျင်သော လုံခြုံရေးဝန်ဆောင်မှုများ",
    saferCommunity: "ပိုမိုလုံခြုံသော လူမှုအသိုင်းအဝိုင်းအတွက်",
    verified: "အတည်ပြုပြီး လုပ်ငန်း",
    reviews: "(သုံးသပ်ချက် ၁၂၀ ခုအပေါ် အခြေခံသည်)",
    follow: "Follow လုပ်ရန်",
    following: "Follow လုပ်ထားသည်",
    message: "စာပို့ရန်",
    about: "အကြောင်းအရာ",
    guardsTab: "လုံခြုံရေးဝန်ထမ်းများ",
    businessInfo: "လုပ်ငန်းအချက်အလက်",
    policiesTab: "လုပ်ငန်းမူဝါဒများ",
    learnMore: "လုံခြုံရေးဝန်ဆောင်မှုများအကြောင်း ပိုမိုလေ့လာရန်",
    professionalGuards: "ကျွမ်းကျင်သော လုံခြုံရေးဝန်ထမ်းများ",
    guardsDescription:
      "သင့်လုပ်ငန်း၊ ပွဲအခမ်းအနား သို့မဟုတ် ပိုင်ဆိုင်မှုများအတွက် လေ့ကျင့်သင်ကြားထားပြီး ယုံကြည်စိတ်ချရသော လုံခြုံရေးဝန်ထမ်းများ။",
    experienced: "အတွေ့အကြုံရှိပြီး လေ့ကျင့်သင်ကြားထားသော ဝန်ထမ်းများ",
    support247: "၂၄ နာရီ ၇ ရက် ဝန်ဆောင်မှု",
    flexiblePlans: "လိုအပ်ချက်အလိုက် ဝန်ဆောင်မှုအစီအစဉ်များ",
    perDay: "/ တစ်ရက်",
    addToCart: "ဈေးခြင်းထဲသို့ ထည့်ရန်",
    addedToCart: "ဈေးခြင်းထဲသို့ ထည့်ပြီးပါပြီ",
    location: "လုပ်ငန်းတည်နေရာ:",
    businessType: "လုပ်ငန်းအမျိုးအစား:",
    address: "လုပ်ငန်းလိပ်စာ:",
    hours: "လုပ်ငန်းဖွင့်ချိန်:",
    company: "ကုမ္ပဏီ",
    reliable: "ယုံကြည်စိတ်ချရပြီး ကျွမ်းကျင်သော ဝန်ဆောင်မှု",
    flexibleTerms: "ပြောင်းလွယ်ပြင်လွယ်ရှိသော စည်းကမ်းချက်များ",
    satisfaction: "ဖောက်သည်စိတ်ကျေနပ်မှု",
    aboutDescription: "ဤလုပ်ငန်းအကြောင်း",
    businessLocation: "ရန်ကုန်၊ မြန်မာ",
    cart: "ဈေးခြင်း",
    searchButton: "ရှာရန်",
  },
} as const;

const tabs = [
  { id: "about", key: "about" },
  { id: "guards", key: "guardsTab" },
  { id: "business", key: "businessInfo" },
  { id: "policies", key: "policiesTab" },
] as const;

export default function SecurityMarketplacePage() {
  const { language } = useLanguage();
  const t = translations[language];

  const [activeTab, setActiveTab] = useState("guards");
  const [menuOpen, setMenuOpen] = useState(false);
  const [following, setFollowing] = useState(false);
  const [added, setAdded] = useState(false);

  return (
    <main className="min-h-screen bg-[#eef3f8] text-[#151d32]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-[66px] max-w-[1380px] items-center gap-5 px-5 xl:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <div className="flex h-10 w-10 -skew-x-[12deg] items-center justify-center rounded-md bg-[#5230ed]">
              <ShieldCheck size={26} className="skew-x-[12deg] text-white" />
            </div>
            <span className="text-[25px] font-black tracking-tight text-[#4228d8]">
              Apexive AI
            </span>
          </Link>

          <form
            className="mx-auto flex w-full max-w-[570px]"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="sr-only" htmlFor="marketplace-search">
              {t.search}
            </label>
            <input
              id="marketplace-search"
              type="search"
              placeholder={t.searchPlaceholder}
              className="h-11 w-full rounded-l-lg border border-slate-300 px-4 text-sm text-slate-700 outline-none focus:border-[#5230ed]"
            />
            <button
              type="submit"
              aria-label={t.searchButton}
              className="flex h-11 w-12 items-center justify-center rounded-r-lg bg-[#4d27d9] text-white"
            >
              <Search size={20} />
            </button>
          </form>

          <div className="hidden shrink-0 items-center gap-6 text-sm xl:flex">
            <button className="relative" aria-label={t.cart}>
              <ShoppingCart size={24} className="text-slate-800" />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
                0
              </span>
            </button>

            <Link
              href="/get-a-quote"
              className="flex items-center gap-2 text-xs font-bold"
            >
              <UserRound size={23} />
              <span>
                {t.signIn}
                <br />
                {t.register}
              </span>
            </Link>

            <LanguageSwitcher />
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
              <Link href="/">{t.home}</Link>
              <Link href="/marketplace">{t.businesses}</Link>
              <Link href="/security-guards">{t.securityServices}</Link>
              <Link href="/cctv-shop">{t.electronics}</Link>
              <LanguageSwitcher />
            </div>
          </nav>
        )}

        <nav className="hidden h-11 bg-[#3014aa] text-white xl:block">
          <div className="mx-auto flex h-full max-w-[1380px] items-center gap-10 px-8 text-[13px] font-bold">
            <button className="flex h-full items-center gap-2 bg-[#4720d1] px-4">
              <Menu size={17} />
              {t.allCategories}
            </button>
            <Link href="/" className="hover:text-violet-200">{t.home}</Link>
            <Link href="/marketplace" className="hover:text-violet-200">{t.businesses}</Link>
            <Link href="/security-guards" className="hover:text-violet-200">{t.securityServices}</Link>
            <Link href="/cctv-shop" className="hover:text-violet-200">{t.electronics}</Link>
            <Link href="/packages" className="hover:text-violet-200">{t.fashion}</Link>
            <button className="hover:text-violet-200">
              {t.more} <span className="ml-1">⌄</span>
            </button>
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-[1380px] px-5 pb-10 xl:px-8">
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
                {t.safety}
                <br />
                {t.priority}
              </p>
              <p className="mt-1 text-[13px] font-bold leading-5 text-[#252a39]">
                {t.professionalSecurity}
                <br />
                {t.saferCommunity}
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
                    {t.verified}
                  </div>

                  <div className="mt-3 space-y-1.5 text-xs">
                    <p className="flex items-center gap-2">
                      <MapPin size={15} className="fill-[#6940ef] text-[#6940ef]" />
                      {t.businessLocation}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Star size={15} className="fill-[#f7ad18] text-[#f7ad18]" />
                      <strong>4.8/5</strong>
                      <span className="text-slate-600">{t.reviews}</span>
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
                    {following ? (
                      <Heart size={19} className="fill-current" />
                    ) : (
                      <UsersRound size={20} />
                    )}
                    {following ? t.following : t.follow}
                  </button>

                  <button
                    type="button"
                    className="flex h-12 items-center gap-2 rounded-lg bg-[#5630d9] px-6 text-sm font-bold text-white"
                  >
                    <MessageCircle size={21} />
                    {t.message}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="flex min-h-[62px] flex-wrap items-stretch border-b border-slate-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 text-sm font-bold ${
                  activeTab === tab.id
                    ? "border-b-[3px] border-[#4d27d9] text-[#4d27d9]"
                    : "text-[#3a4053]"
                }`}
              >
                {t[tab.key]}
              </button>
            ))}
          </div>

          <div className="grid gap-5 p-5 lg:grid-cols-[minmax(0,1fr)_290px]">
            <div className="min-w-0">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-[22px] font-black">
                  {activeTab === "about"
                    ? t.aboutDescription
                    : activeTab === "business"
                      ? t.businessInfo
                      : activeTab === "policies"
                        ? t.policiesTab
                        : t.guardsTab}
                </h2>

                <Link
                  href="/security-guards"
                  className="text-xs font-bold text-[#5730ec]"
                >
                  {t.learnMore} &nbsp; →
                </Link>
              </div>

              {activeTab === "about" && (
                <div className="rounded-xl border border-slate-200 p-6">
                  <h3 className="text-xl font-black">
                    PSS Paladin Security Services
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {t.guardsDescription}
                  </p>
                </div>
              )}

              {activeTab === "guards" && (
                <div className="grid overflow-hidden rounded-xl border border-slate-200 md:grid-cols-[350px_minmax(0,1fr)]">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85"
                    alt="Professional security guard"
                    className="h-[286px] w-full object-cover object-[center_18%]"
                  />

                  <div className="p-6">
                    <h3 className="text-[20px] font-black">
                      {t.professionalGuards}
                    </h3>

                    <p className="mt-1 text-[14px] leading-6 text-slate-600">
                      {t.guardsDescription}
                    </p>

                    <ul className="mt-4 space-y-2 text-sm font-medium">
                      {[t.experienced, t.support247, t.flexiblePlans].map(
                        (feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4c25e8]">
                              <Check size={13} strokeWidth={3} className="text-white" />
                            </span>
                            {feature}
                          </li>
                        )
                      )}
                    </ul>

                    <p className="mt-5 text-[23px] font-black text-[#5127d6]">
                      MMK 45,000{" "}
                      <span className="text-[14px] text-slate-700">
                        {t.perDay}
                      </span>
                    </p>

                    <button
                      type="button"
                      onClick={() => setAdded((value) => !value)}
                      className={`mt-3 flex h-12 w-full items-center justify-center gap-3 rounded-lg text-sm font-bold ${
                        added
                          ? "bg-emerald-600 text-white"
                          : "bg-[#4c25e8] text-white"
                      }`}
                    >
                      {added ? <Check size={21} /> : <ShoppingCart size={21} />}
                      {added ? t.addedToCart : t.addToCart}
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "business" && (
                <div className="rounded-xl border border-slate-200 p-6">
                  <h3 className="text-lg font-black">{t.businessInfo}</h3>
                  <div className="mt-4 space-y-5 text-sm">
                    <InfoRow
                      icon={<MapPin size={20} />}
                      label={t.location}
                      value={t.businessLocation}
                    />
                    <InfoRow
                      icon={<Building2 size={20} />}
                      label={t.businessType}
                      value={t.company}
                    />
                    <InfoRow
                      icon={<MapPin size={20} />}
                      label={t.address}
                      value={"No. 123, Pyay Road,\nYangon, Myanmar"}
                    />
                    <InfoRow
                      icon={<Clock3 size={20} />}
                      label={t.hours}
                      value="9 AM – 6 PM"
                    />
                  </div>
                </div>
              )}

              {activeTab === "policies" && (
                <div className="rounded-xl border border-slate-200 p-6">
                  <h3 className="text-lg font-black">{t.policiesTab}</h3>
                  <ul className="mt-5 space-y-4 text-sm">
                    {[t.reliable, t.flexibleTerms, t.satisfaction].map(
                      (policy) => (
                        <li key={policy} className="flex items-center gap-3">
                          <Check size={18} strokeWidth={3} className="text-[#5127d6]" />
                          {policy}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>

            <aside className="space-y-4">
              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="text-[17px] font-black">{t.businessInfo}</h3>

                <div className="mt-4 space-y-4 text-xs">
                  <InfoRow
                    icon={<MapPin size={20} />}
                    label={t.location}
                    value={t.businessLocation}
                  />
                  <InfoRow
                    icon={<Building2 size={20} />}
                    label={t.businessType}
                    value={t.company}
                  />
                  <InfoRow
                    icon={<MapPin size={20} />}
                    label={t.address}
                    value={"No. 123, Pyay Road,\nYangon, Myanmar"}
                  />
                  <InfoRow
                    icon={<Clock3 size={20} />}
                    label={t.hours}
                    value="9 AM – 6 PM"
                  />
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="flex items-center gap-3 text-[15px] font-black">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#efeaff]">
                    <ShieldCheck size={20} className="fill-[#5127d6] text-white" />
                  </span>
                  {t.policiesTab}
                </h3>

                <ul className="mt-4 space-y-3 text-xs">
                  {[t.reliable, t.flexibleTerms, t.satisfaction].map(
                    (policy) => (
                      <li key={policy} className="flex items-center gap-3">
                        <Check size={17} strokeWidth={3} className="text-[#5127d6]" />
                        {policy}
                      </li>
                    )
                  )}
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
        {value.split("\n").map((line, index) => (
          <span key={`${line}-${index}`} className="block">
            {line}
          </span>
        ))}
      </p>
    </div>
  );
}
