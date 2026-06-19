import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Helder Bespoke — Tailored Without Borders",
  description:
    "Helder Bespoke crafts native Nigerian attire and international suiting for the man who moves between worlds. Agbada, kaftan, three-piece suits, and ties — cut by hand, fitted to one measure: yours.",
  keywords: [
    "bespoke tailoring Nigeria",
    "agbada designer",
    "native attire Lagos",
    "custom suits Nigeria",
    "Helder Bespoke",
  ],
  openGraph: {
    title: "Helder Bespoke — Tailored Without Borders",
    description:
      "Native Nigerian attire and international suiting, cut by hand in Lagos.",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sora.variable}`}>
      <body className="bg-onyx text-ivory antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
