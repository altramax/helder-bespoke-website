"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { craftImages } from "../lib/content";

const items = [
  { src: craftImages.fabric, alt: "Folded bolts of bespoke fabric", span: "lg:row-span-2" },
  { src: craftImages.hands, alt: "A tailor's hands stitching by hand", span: "" },
  { src: craftImages.measuring, alt: "Tape measure across a shoulder seam", span: "" },
  { src: craftImages.detail, alt: "Close detail of embroidery thread", span: "" },
];

export default function CraftGallery() {
  return (
    <section className="bg-onyx-soft py-24 md:py-32">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <span className="eyebrow text-gold">In the Atelier</span>
            <h2 className="mt-6 font-display text-balance text-3xl leading-tight text-ivory sm:text-4xl">
              Every detail is a decision, made by hand.
            </h2>
            <p className="mt-6 text-ivory/70">
              We could run faster with a machine on every step. We don&apos;t,
              because the eye that sets a buttonhole by hand is the same eye
              that catches a fabric flaw before it reaches your fitting.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:col-span-8 lg:grid-rows-2">
            {items.map((item, i) => (
              <motion.div
                key={item.alt}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative aspect-square overflow-hidden rounded-sm ${item.span}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
