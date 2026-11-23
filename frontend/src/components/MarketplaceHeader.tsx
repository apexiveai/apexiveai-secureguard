"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Globe2,
  Menu,
  Search,
  ShieldCheck,
  ShoppingCart,
  UserRound,
  X,
} from "lucide-react";

export default function MarketplaceHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="border-b border-slate-200 bg-white text-slate-900">
        <div className="mx-auto flex h-[66px] max-w-[1380px] items-center gap-5 px-5 xl:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <span className="flex h-10 w-10 -skew-x-[12deg] items-center justify-center rounded-md bg-[#5230ed]">
              <ShieldCheck size={26} className="skew-x-[12deg] text-white" />
            </span>
            <span className="text-[25px] font-black tracking-tight text-[#4228d8]">
              Apexive AI
            </span>
          </Link>

          <form className="mx-auto hidden w-full max-w-[570px] md:flex" action="/marketplace">
            <label className="sr-only" htmlFor="marketplace-search">
              Search
            </label>
            <input
              id="marketplace-search"
              name="q"
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
            <button className="relative" type="button" aria-label="Shopping cart">
              <ShoppingCart size={24} />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
                0
              </span>
            </button>
            <Link href="/get-a-quote" className="flex items-center gap-2 text-xs font-bold">
              <UserRound size={23} />
              <span>Sign In<br />or Register</span>
            </Link>
            <button className="flex items-center gap-2 text-xs font-bold" type="button">
              <Globe2 size={20} />
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="ml-auto xl:hidden"
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
            <span className="flex h-full items-center gap-2 bg-[#4720d1] px-4">
              <Menu size={17} />
              All Categories
            </span>
            <Link href="/" className="hover:text-violet-200">Home</Link>
            <Link href="/marketplace" className="hover:text-violet-200">Businesses</Link>
            <Link href="/security-guards" className="hover:text-violet-200">Security Services</Link>
            <Link href="/cctv-shop" className="hover:text-violet-200">Electronics</Link>
            <Link href="/packages" className="hover:text-violet-200">Packages</Link>
            <Link href="/services" className="hover:text-violet-200">More</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
