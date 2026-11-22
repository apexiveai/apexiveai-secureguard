
import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
