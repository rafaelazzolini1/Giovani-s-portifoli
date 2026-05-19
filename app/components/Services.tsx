"use client";

import { useTranslations } from "next-intl";
import { Mic2, Users, UserCheck, Award } from "lucide-react";

const icons = [Mic2, Users, UserCheck, Award];

export default function Services() {
  const t = useTranslations("Services");

  const cards = [
    { title: t("card1_title"), desc: t("card1_desc") },
    { title: t("card2_title"), desc: t("card2_desc") },
    { title: t("card3_title"), desc: t("card3_desc") },
    { title: t("card4_title"), desc: t("card4_desc") },
  ];

  return (
    <section id="services" className="py-28 px-6 bg-[#0a0a0a] text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-[#b8962e] text-xs tracking-[0.4em] uppercase mb-3">What I Offer</p>
          <h2 className="font-heading text-4xl font-bold">{t("title")}</h2>
          <div className="divider-gold mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="group border border-white/10 p-8 hover:border-[#b8962e]/50 transition-all duration-300 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="mb-5">
                  <Icon
                    size={28}
                    className="text-[#b8962e] group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 tracking-wide">
                  {card.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
