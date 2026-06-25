"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import blackSuit from "../assets/images/black_suit.jpeg";

export default function Heritage() {
  return (
    <section id="heritage" className="relative bg-onyx py-24 md:py-32">
      <div className="container-x grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
        {/* Image column — offset, not centered */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative col-span-1 lg:col-span-5 h-fit"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src={blackSuit}
              alt="A bespoke agbada fabric being inspected in the Helder atelier"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover pb-6"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 border border-gold/40 md:block" />
        </motion.div>

        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="col-span-1 flex flex-col justify-center lg:col-span-6 lg:col-start-7"
        >
          <span className="eyebrow text-gold">Two wardrobes, one hand</span>
          <h2 className="mt-6 font-display text-balance text-3xl leading-tight text-ivory sm:text-4xl md:text-5xl">
            Agbada on Friday.
            <br />
            Three-piece on Monday.
            <br />
            <span className="italic text-gold">Same tailor.</span>
          </h2>
          <p className="mt-8 max-w-xl text-ivory/70 md:text-lg">
            Helder Bespoke was built on a simple observation: the modern
            Nigerian man doesn&apos;t live in one wardrobe. He needs an
            agbada that holds its shape through a six-hour owambe, and a
            suit that holds its shoulder through a six-hour flight — often
            in the same week.
          </p>
          <p className="mt-5 max-w-xl text-ivory/70 md:text-lg">
            So we trained one floor of tailors in both traditions. The same
            hands that hand-embroider a fila also hand-pad a lapel roll.
            Nothing here is outsourced between &quot;native&quot; and
            &quot;international&quot; — it&apos;s one atelier, one standard,
            cut to one measure: yours.
          </p>

          <div className="mt-10 seam max-w-xs" />

          <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
              <p className="font-display text-2xl text-gold">Native</p>
              <p className="mt-1 text-sm text-ivory/60">
                Agbada, senator, kaftan, isi-agu — cut from aso-oke, George,
                and brocade.
              </p>
            </div>
            <div>
              <p className="font-display text-2xl text-gold">
                International
              </p>
              <p className="mt-1 text-sm text-ivory/60">
                Two and three-piece suits, tuxedos, and hand-rolled ties in
                tropical wool and silk.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
