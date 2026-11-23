import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function MarketplaceFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700">
      <div className="mx-auto grid max-w-[1380px] gap-8 px-5 py-10 md:grid-cols-4 xl:px-8">
        <div>
          <div className="flex items-center gap-2 text-[#4228d8]">
            <ShieldCheck size={28} />
            <span className="text-lg font-black">Apexive AI</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-6">
            Integrated professional security and smart surveillance solutions.
          </p>
        </div>
        <FooterLinks title="Security" links={[
          ["Security Guards", "/security-guards"],
          ["Security Services", "/services"],
          ["Protection Packages", "/packages"],
        ]} />
        <FooterLinks title="Marketplace" links={[
          ["Businesses", "/marketplace"],
          ["CCTV Shop", "/cctv-shop"],
          ["Get a Quote", "/get-a-quote"],
        ]} />
        <FooterLinks title="Company" links={[
          ["About Us", "/about"],
          ["Contact", "/contact"],
        ]} />
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-xs">
        © 2026 ApexiveAI SecureGuard. All rights reserved.
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
          <Link key={href} href={href} className="block hover:text-[#4d27d9]">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
