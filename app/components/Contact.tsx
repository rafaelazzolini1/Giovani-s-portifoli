"use client";

import { useTranslations } from "next-intl";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="py-28 px-6 bg-[#0a0a0a] text-white">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="animate-fade-in-up space-y-4 mb-12">
          <p className="text-[#b8962e] text-xs tracking-[0.4em] uppercase">Contact</p>
          <h2 className="font-heading text-4xl font-bold">{t("title")}</h2>
          <div className="divider-gold" />
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto mt-4">
            {t("subtitle")}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          {/* WhatsApp */}
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden border border-[#b8962e] px-10 py-4 text-sm tracking-[0.2em] uppercase inline-flex items-center justify-center gap-3 transition-all duration-300"
          >
            <span className="absolute inset-0 bg-[#b8962e] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <FaWhatsapp className="relative z-10 text-lg" />
            <span className="relative z-10">{t("cta")}</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/giovani"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden border border-white/20 px-10 py-4 text-sm tracking-[0.2em] uppercase inline-flex items-center justify-center gap-3 hover:border-white/60 transition-all duration-300"
          >
            <FaInstagram className="text-lg" />
            <span>{t("instagram")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
