"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="py-6 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs tracking-widest text-gray-600 uppercase">
          &copy; {new Date().getFullYear()} Giovani. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
