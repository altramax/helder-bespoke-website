import Image from "next/image";
import {  MessageCircle } from "lucide-react";

const sitemap = [
  {
    heading: "Atelier",
    links: [
      { label: "Collections", href: "#collections" },
      { label: "Our Process", href: "#process" },
      { label: "Heritage", href: "#heritage" },
    ],
  },
  {
    heading: "Client Care",
    links: [
      { label: "Book a Fitting", href: "#contact" },
      { label: "Size & Fit Guide", href: "#" },
      { label: "Delivery & Returns", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Helder", href: "#heritage" },
      { label: "Press", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-onyx pt-20">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 border-b border-onyx-line pb-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Helder Bespoke monogram"
                width={36}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-display text-lg text-ivory">
                Helder<span className="text-gold"> Bespoke</span>
              </span>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/55">
              A Lagos-based bespoke house cutting native Nigerian attire and
              international suiting for one measure: yours. Every piece
              fitted, never assumed.
            </p>
            <div className="mt-7 flex gap-3">
              {[ MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-onyx-line text-ivory/60 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:col-start-6">
            {sitemap.map((col) => (
              <div key={col.heading}>
                <p className="eyebrow text-ivory/50">{col.heading}</p>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-ivory/70 transition-colors hover:text-gold"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-ivory/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Helder Bespoke. All rights reserved.</p>
          <p>Victoria Island, Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
