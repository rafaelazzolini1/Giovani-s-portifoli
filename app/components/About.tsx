"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("About");

  const stats = [
    { value: t("stat1_value"), label: t("stat1_label") },
    { value: t("stat2_value"), label: t("stat2_label") },
    { value: t("stat3_value"), label: t("stat3_label") },
  ];

  return (
    <section id="about" className="py-28 px-6 bg-[#fafaf8]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative animate-fade-in">
            <div className="relative aspect-[3/4] max-w-sm mx-auto">
              <div className="absolute -inset-3 border border-[#b8962e]/20" />
              <Image
                src="/images/giovani.jpg"
                alt="Giovani"
                fill
                className="object-cover"
              />
            </div>
            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {stats.map((s, i) => (
                <div key={i} className="text-center py-4 border border-gray-100 hover-lift">
                  <p className="font-heading text-2xl font-bold text-[#b8962e]">{s.value}</p>
                  <p className="text-xs tracking-widest text-gray-500 uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <p className="text-[#b8962e] text-xs tracking-[0.4em] uppercase mb-3">About</p>
              <h2 className="font-heading text-4xl font-bold text-[#0a0a0a] gold-underline pb-2">
                {t("title")}
              </h2>
            </div>
            <div className="w-10 h-px bg-[#b8962e]" />
            <p className="text-gray-600 leading-relaxed">{t("bio1")}</p>
            <p className="text-gray-600 leading-relaxed">{t("bio2")}</p>
            <p className="text-gray-600 leading-relaxed">{t("bio3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
