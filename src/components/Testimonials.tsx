"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../lib/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-onyx py-24 md:py-32">
      <div className="container-x">
        <span className="eyebrow text-gold">Client Words</span>
        <h2 className="mt-6 max-w-xl font-display text-balance text-3xl leading-tight text-ivory sm:text-4xl md:text-5xl">
          Said better by the people who wore it.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col rounded-sm border border-onyx-line bg-onyx-soft p-8"
            >
              <Quote className="text-gold" size={22} />
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ivory/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-onyx-line pt-5">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-ivory">{t.name}</p>
                  <p className="text-xs text-ivory/50">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
