"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function MarketplaceFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700">
      <div className="mx-auto grid max-w-[1380px] gap-8 px-5 py-10 md:grid-cols-4 xl:px-8">
        <div>
          <div className="flex items-center gap-2 text-[#4228d8]">
            <ShieldCheck size={28} />
            <span className="text-lg font-black">Apexive AI</span>
          </div>

          <p className="mt-3 max-w-xs text-sm leading-6">
            {t("footerDescription")}
          </p>
        </div>

        <FooterLinks
          title={t("ourSolutions")}
          links={[
            [t("securityPersonnel"), "/security-guards"],
            [t("professionalServices"), "/services"],
            [t("protectionPackages"), "/packages"],
          ]}
        />

        <FooterLinks
          title={t("services")}
          links={[
            [t("home"), "/"],
            [t("cctvShop"), "/cctv-shop"],
            [t("getAQuote"), "/get-a-quote"],
          ]}
        />

        <FooterLinks
          title={t("getInTouch")}
          links={[
            [t("aboutUs"), "/about"],
            [t("contactUs"), "/contact"],
          ]}
        />
      </div>

      <div className="border-t border-slate-200 py-5 text-center text-xs">
        {t("copyright")}
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <h2 className="font-black text-slate-900">{title}</h2>

      <div className="mt-3 space-y-2 text-sm">
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="block transition-colors hover:text-[#4d27d9]"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}