"use client";

import { motion } from "framer-motion";
import { processSteps } from "../lib/content";

export default function Process() {
  return (
    <section id="process" className="relative bg-onyx py-24 md:py-32">
      <div className="container-x">
        <span className="eyebrow text-gold">The Atelier Process</span>
        <h2 className="mt-6 max-w-2xl font-display text-balance text-3xl leading-tight text-ivory sm:text-4xl md:text-5xl">
          Five stages. Every garment, every time.
        </h2>
      </div>

      {/* Desktop: horizontal seam-line timeline */}
      <div className="container-x mt-20 hidden lg:block">
        <div className="relative">
          <div className="absolute left-0 right-0 top-[18px] seam" />
          <div className="grid grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pt-12"
              >
                <div className="absolute left-0 top-[10px] h-[18px] w-[18px] -translate-x-1/2 rounded-full border-2 border-gold bg-onyx" />
                <span className="eyebrow text-ash-light">{step.id}</span>
                <p className="mt-2 font-display text-xl text-gold">
                  {step.label}
                </p>
                <h3 className="mt-3 text-base font-medium text-ivory">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/60">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/tablet: vertical seam-line timeline */}
      <div className="container-x mt-16 lg:hidden">
        <div className="relative ml-2 border-l border-onyx-line pl-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="absolute -left-[41px] top-1 h-3 w-3 rounded-full border-2 border-gold bg-onyx" />
              <span className="eyebrow text-ash-light">{step.id}</span>
              <p className="mt-2 font-display text-xl text-gold">
                {step.label}
              </p>
              <h3 className="mt-2 text-base font-medium text-ivory">
                {step.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/60">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
