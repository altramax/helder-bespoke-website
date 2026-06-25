"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroImg from "../assets/images/hero.svg";
import heroImgMobile from "../assets/images/heromobile.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.12,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-onyx pt-[80px] md:pt-[92px]"
    >
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="A Helder Bespoke client in a tailored senator-cut native attire"
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover md:object-center object-[60%_20%] "
        />
        <Image
          src={heroImgMobile}
          alt="A Helder Bespoke client in a tailored senator-cut native attire"
          fill
          priority
          sizes="100vw"
          className="md:hidden object-cover object-[60%_20%] "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-onyx/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx/80 via-transparent to-onyx/30" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
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
          Bespoke Atelier · Est. for the modern man
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
          Helder Bespoke hand-cuts every piece to your exact measurements,
          delivering a fit that is uniquely yours.
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
