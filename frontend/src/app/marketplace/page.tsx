"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface MarketplaceCategory {
  title: string;
  subtitle: string;
  href: string;
  image: string;
  tag: string;
}

const makeSvgDataUrl = (
  label: string,
  badge: string,
  bgStart: string,
  bgEnd: string,
  accent: string
) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${bgStart}" />
          <stop offset="100%" stop-color="${bgEnd}" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#g)" />
      <circle cx="670" cy="110" r="140" fill="${accent}" opacity="0.14" />
      <circle cx="130" cy="420" r="170" fill="${accent}" opacity="0.10" />
      <rect x="48" y="48" width="170" height="34" rx="8" fill="${accent}" opacity="0.22" />
      <text x="133" y="70" fill="#ffffff" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">${badge}</text>
      <text x="48" y="255" fill="#ffffff" font-family="Arial, sans-serif" font-size="40" font-weight="bold">${label}</text>
      <line x1="48" y1="282" x2="260" y2="282" stroke="${accent}" stroke-width="4" stroke-linecap="round" />
      <text x="48" y="325" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="18">ApexiveAI SecureGuard</text>
    </svg>
  `.trim();
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const CATEGORIES: MarketplaceCategory[] = [
  {
    title: "Security Guard Services",
    subtitle: "Hire security personnel",
    href: "/security-guards",
    image: makeSvgDataUrl(
      "Security Guard Services",
      "PERSONNEL",
      "#0b233d",
      "#163a5f",
      "#10b981"
    ),
    tag: "Security Guards",
  },
  {
    title: "CCTV Solutions",
    subtitle: "Installation and maintenance",
    href: "/cctv-shop",
    image: makeSvgDataUrl(
      "CCTV Solutions",
      "SURVEILLANCE",
      "#0f172a",
      "#1e293b",
      "#38bdf8"
    ),
    tag: "CCTV",
  },
  {
    title: "VIP Protection",
    subtitle: "Professional protection services",
    href: "/services",
    image: makeSvgDataUrl(
      "VIP Protection",
      "EXECUTIVE",
      "#111827",
      "#1f2937",
      "#f59e0b"
    ),
    tag: "VIP Protection",
  },
  {
    title: "Security Supplies",
    subtitle: "Uniforms and equipment",
    href: "/packages",
    image: makeSvgDataUrl(
      "Security Supplies",
      "EQUIPMENT",
      "#0b233d",
      "#132a46",
      "#34d399"
    ),
    tag: "Supplies",
  },
];

const QUICK_TAGS = ["Security Guards", "CCTV", "VIP Protection"];

export default function SecurityMarketplacePage() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredCategories = CATEGORIES.filter((item) => {
    const matchesTag = selectedTag ? item.tag === selectedTag : true;
    const q = query.trim().toLowerCase();
    const matchesQuery = q
      ? item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q)
      : true;
    return matchesTag && matchesQuery;
  });

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) return;
    if (q.includes("cctv") || q.includes("camera")) {
      router.push(`/cctv-shop?q=${encodeURIComponent(query.trim())}`);
    } else if (q.includes("guard") || q.includes("vip")) {
      router.push(`/security-guards?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push(`/services?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Dark Marketplace Header */}
      <section className="bg-[#0b233d] text-white">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-extrabold tracking-wider sm:text-xl">
              APEXIVE
            </h1>
            <span className="rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-semibold text-white">
              Marketplace
            </span>
          </div>

          <p className="mt-3 text-sm font-medium text-slate-200">
            Security services. Products. Solutions.
          </p>

          <form onSubmit={handleSearchSubmit} className="mt-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search security services, products, and companies..."
              className="w-full rounded-md bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </form>

          <div className="mt-3 flex flex-wrap gap-2">
            {QUICK_TAGS.map((tag) => {
              const active = selectedTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(active ? null : tag)}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
                    active
                      ? "bg-emerald-500 text-white"
                      : "bg-white/10 text-slate-200 hover:bg-white/20"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Explore Security Services Grid */}
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <h2 className="text-lg font-semibold text-slate-800">
          Explore security services
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {filteredCategories.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200/70 transition hover:shadow-md"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-3.5">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0b233d]">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-xs text-slate-500">{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}