"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { collections } from "@/src/lib/collection-images";
import { useState, useEffect } from "react";

export default function Collections() {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
      return;
    }
    setIsMobile(false);
  }, []);

  const showMoreBtnHandler = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="collections" className="bg-onyx-soft py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow text-gold">The Lookbook </span>
            <h2 className="mt-6 max-w-xl font-display text-balance text-3xl leading-tight text-ivory sm:text-4xl md:text-5xl">
              Six ways to dress a story.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ivory/60">
            Every collection below is a starting point, not a catalog. Fabric,
            color, and detail are set during your fitting — nothing here ships
            as-is.
          </p>
        </div>
      </div>

      <div className="container-x mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 w-full">
          {collections.map((item, i) => {
            if (isMobile && !showAll && i >= 2) return;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: (i % 3) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative w-full overflow-hidden rounded-sm"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-onyx-line">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 78vw, (max-width: 1024px) 46vw, 30vw"
                    className="object-cover transition-transform duration-700 ease-couture group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx/95 via-onyx/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="eyebrow text-gold">{item.tag}</span>
                    <h3 className="mt-3 font-display text-2xl text-ivory">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ivory/70">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-ivory/15 pt-4">
                      <span className="text-sm font-medium text-gold">
                        {item.price}
                      </span>
                      <a
                        href="#contact"
                        aria-label={`Enquire about ${item.name}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors duration-300 hover:border-gold hover:text-gold"
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <button
          className={`cursor-pointer eyebrow text-gold hover:text-amber-300 ${!isMobile && "hidden"}`}
          onClick={showMoreBtnHandler}
        >
          {showAll ? "Show less " : "Show More"}
        </button>
      </div>
    </section>
  );
}
