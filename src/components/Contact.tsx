"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Check } from "lucide-react";

const garmentTypes = [
  "Agbada",
  "Senator / Native",
  "Kaftan",
  "Suit (2 or 3-piece)",
  "Tie / Accessories",
  "Not sure yet",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative bg-onyx-soft py-24 md:py-32">
      <div className="container-x grid grid-cols-1 gap-16 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 lg:col-span-5"
        >
          <span className="eyebrow text-gold">Book a Fitting</span>
          <h2 className="mt-6 font-display text-balance text-3xl leading-tight text-ivory sm:text-4xl">
            Tell us what you&apos;re building. We&apos;ll take it from there.
          </h2>
          <p className="mt-6 max-w-md text-ivory/70">
            Based in Lagos, fitting clients across Nigeria and the diaspora.
            Share the occasion and garment, and a tailor will reply within
            48 hours to schedule your measure.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            <a
              href="tel:+2348000000000"
              className="flex items-center gap-4 text-ivory/80 transition-colors hover:text-gold"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold">
                <Phone size={18} />
              </span>
              +234 800 000 0000
            </a>
            <a
              href="mailto:atelier@helderbespoke.com"
              className="flex items-center gap-4 text-ivory/80 transition-colors hover:text-gold"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold">
                <Mail size={18} />
              </span>
              atelier@helderbespoke.com
            </a>
            <div className="flex items-center gap-4 text-ivory/80">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold">
                <MapPin size={18} />
              </span>
              Victoria Island, Lagos, Nigeria
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 lg:col-span-7 lg:col-start-6"
        >
          {submitted ? (
            <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-sm border border-gold/30 bg-onyx p-10 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-onyx">
                <Check size={26} />
              </span>
              <h3 className="mt-6 font-display text-2xl text-ivory">
                Request received.
              </h3>
              <p className="mt-3 max-w-sm text-ivory/60">
                A tailor will reach out within 48 hours to schedule your
                fitting. Thank you for trusting Helder with the next piece.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-sm border border-onyx-line bg-onyx p-8 md:p-10"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Phone number" name="phone" type="tel" required />
              </div>
              <div className="mt-6">
                <Field label="Email address" name="email" type="email" required />
              </div>

              <fieldset className="mt-8">
                <legend className="eyebrow text-ivory/60">
                  What are we making?
                </legend>
                <div className="mt-4 flex flex-wrap gap-3">
                  {garmentTypes.map((type) => (
                    <label
                      key={type}
                      className="cursor-pointer rounded-full border border-onyx-line px-4 py-2 text-sm text-ivory/70 transition-colors has-[:checked]:border-gold has-[:checked]:text-gold"
                    >
                      <input
                        type="radio"
                        name="garment"
                        value={type}
                        className="sr-only"
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-8">
                <label
                  htmlFor="message"
                  className="eyebrow block text-ivory/60"
                >
                  Occasion or details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Wedding in October, navy agbada, need it ready by the 12th..."
                  className="mt-3 w-full rounded-sm border border-onyx-line bg-onyx-soft px-4 py-3 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-gold py-4 eyebrow text-onyx transition-all duration-300 hover:bg-gold-bright sm:w-auto sm:px-10"
              >
                Request a Fitting
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block text-ivory/60">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full border-b border-onyx-line bg-transparent py-2 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none"
      />
    </div>
  );
}
