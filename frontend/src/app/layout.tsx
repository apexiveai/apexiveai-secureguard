
import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import MarketplaceHeader from "@/components/MarketplaceHeader";
import MarketplaceFooter from "@/components/MarketplaceFooter";

export const metadata: Metadata = {
  title: {
    default: "ApexiveAI SecureGuard | Integrated Security Solutions",
    template: "%s | ApexiveAI SecureGuard",
  },
  description:
    "Professional security guard recruitment, CCTV sales, installation, maintenance and integrated smart security solutions.",
  applicationName: "ApexiveAI SecureGuard",
  keywords: [
    "Security Guards",
    "CCTV",
    "Smart Surveillance",
    "Security Management",
    "Security Marketplace", // အသစ်
    "Security Equipment Sales", // အသစ်
    "Integrated Security",
    "ApexiveAI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <div className="marketplace-layout">
            <MarketplaceHeader />
            {children}
            <MarketplaceFooter />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
