"use client";

import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const t = useTranslations("Testimonials");

  const items = [
    { text: t("t1_text"), author: t("t1_author") },
    { text: t("t2_text"), author: t("t2_author") },
    { text: t("t3_text"), author: t("t3_author") },
  ];

  return (
    <section id="testimonials" className="py-28 px-6 bg-[#f5f0e8]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-[#b8962e] text-xs tracking-[0.4em] uppercase mb-3">Testimonials</p>
          <h2 className="font-heading text-4xl font-bold text-[#0a0a0a]">{t("title")}</h2>
          <div className="divider-gold mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 shadow-sm hover-lift animate-fade-in-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <Quote size={24} className="text-[#b8962e] mb-4 opacity-60" />
              <p className="text-gray-600 leading-relaxed text-sm italic mb-6">{item.text}</p>
              <p className="text-xs tracking-[0.15em] text-[#0a0a0a] font-medium">{item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
