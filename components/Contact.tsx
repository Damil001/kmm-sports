"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Globe } from "lucide-react";
import { fadeUp } from "@/lib/motion";

const WHATSAPP_NUMBER = "923476472827";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const name = fullName.trim();
    const mail = email.trim();
    const place = country.trim();
    const inquiry = message.trim();

    if (!name || !mail || !inquiry) return;

    const text = [
      "New inquiry from KMM Sports website",
      "",
      `Name: ${name}`,
      `Email: ${mail}`,
      `Country: ${place || "—"}`,
      "",
      "Message:",
      inquiry,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="bg-navy-deep py-16 md:py-24">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-14 px-4 md:grid-cols-2 md:gap-16 md:px-8 lg:px-10">
        <motion.div {...fadeUp}>
          <h2 className="font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-tight tracking-wide text-white">
            LET&apos;S BUILD SOMETHING GREAT
          </h2>
          <p className="mt-5 max-w-md font-body text-base leading-relaxed text-white/70">
            Get in touch for samples, pricing, or custom orders. We respond
            within 24 hours.
          </p>

          <ul className="mt-10 space-y-5 font-body text-base text-white/90">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-accent" />
              Sialkot, Punjab, Pakistan
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-blue-accent" />
              <a
                href="mailto:info@kmmsports.com"
                className="transition hover:text-blue-accent"
              >
                info@kmmsports.com
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-blue-accent" />
              <a
                href="tel:+923476472827"
                className="transition hover:text-blue-accent"
              >
                +92 347 647 2827
              </a>
            </li>
            <li className="flex gap-3">
              <Globe className="mt-0.5 h-5 w-5 shrink-0 text-blue-accent" />
              <a
                href="https://www.kmmsports.com"
                className="transition hover:text-blue-accent"
                target="_blank"
                rel="noreferrer"
              >
                www.kmmsports.com
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="rounded-industrial border border-white/10 bg-navy-mid/50 p-6 md:p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-2">
              <span className="font-condensed text-xs font-semibold uppercase tracking-wider text-white/80">
                Full Name
              </span>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                autoComplete="name"
                required
                className="min-h-[48px] border border-white/10 bg-navy-card px-4 font-body text-white outline-none transition focus:border-blue-primary"
                style={{ borderRadius: "4px" }}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-condensed text-xs font-semibold uppercase tracking-wider text-white/80">
                Email Address
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="min-h-[48px] border border-white/10 bg-navy-card px-4 font-body text-white outline-none transition focus:border-blue-primary"
                style={{ borderRadius: "4px" }}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-condensed text-xs font-semibold uppercase tracking-wider text-white/80">
                Country
              </span>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                autoComplete="country-name"
                className="min-h-[48px] border border-white/10 bg-navy-card px-4 font-body text-white outline-none transition focus:border-blue-primary"
                style={{ borderRadius: "4px" }}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-condensed text-xs font-semibold uppercase tracking-wider text-white/80">
                Message / Inquiry
              </span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                required
                className="resize-y border border-white/10 bg-navy-card px-4 py-3 font-body text-white outline-none transition focus:border-blue-primary"
                style={{ borderRadius: "4px" }}
              />
            </label>
            <button
              type="submit"
              className="mt-2 min-h-[52px] w-full bg-blue-primary font-condensed text-sm font-bold uppercase tracking-wide text-white transition hover:bg-blue-accent"
              style={{ borderRadius: "4px" }}
            >
              Send via WhatsApp
            </button>
            <p className="text-center font-body text-xs text-white/50">
              Opens WhatsApp with your inquiry ready to send — free, no account
              required on our side.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
