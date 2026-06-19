"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroImage } from "../lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-onyx pt-[80px] md:pt-[92px]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="A Helder Bespoke client in a tailored senator-cut native attire"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_20%] opacity-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-onyx/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx/80 via-transparent to-onyx/30" />
      </div>

      {/* Oversized monogram watermark — echoes the brand mark as texture, not logo-spam */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="pointer-events-none absolute -right-24 top-1/4 hidden w-[640px] md:block"
        aria-hidden="true"
      >
        <Image src="/logo.png" alt="" width={640} height={571} />
      </motion.div>

      <div className="container-x relative z-10 w-full pb-16 pt-24 md:pb-24">
        <motion.p
          initial="hidden"
          animate="show"
          custom={0}
          // variants={fadeUp}
          className="eyebrow mb-6 text-gold"
        >
          Lagos · Bespoke Atelier · Est. for the modern man
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          // variants={fadeUp}
          className="font-display text-balance text-[2.6rem] leading-[1.05] text-ivory sm:text-[3.4rem] md:max-w-3xl md:text-[4.5rem] lg:text-[5.2rem]"
        >
          Tailored without
          <br />
          <span className="italic text-gold">borders.</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={2}
          // variants={fadeUp}
          className="mt-6 max-w-md text-balance font-body text-base text-ivory/75 md:text-lg"
        >
          From the agbada that opens a ceremony to the three-piece that closes
          a boardroom — Helder Bespoke cuts each piece by hand, to one
          measure only: yours.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={3}
          // variants={fadeUp}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 eyebrow text-onyx transition-transform duration-300 ease-couture hover:scale-[1.03] hover:bg-gold-bright"
          >
            Book a Fitting
          </a>
          <a
            href="#collections"
            className="inline-flex items-center justify-center rounded-full border border-ivory/30 px-8 py-4 eyebrow text-ivory transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            View Collections
          </a>
        </motion.div>
      </div>

      {/* Seam-line signature at the base of the hero */}
      <div className="container-x absolute inset-x-0 bottom-0 z-10">
        <div className="seam" />
      </div>
    </section>
  );
}
