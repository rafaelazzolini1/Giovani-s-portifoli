"use client";

import { useState, useRef } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import Image from "next/image";

const languages = [
  { code: "en", name: "English",    flag: "https://flagcdn.com/w40/gb.png" },
  { code: "es", name: "Español",    flag: "https://flagcdn.com/w40/es.png" },
  { code: "pt", name: "Português",  flag: "https://flagcdn.com/w40/br.png" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const current = languages.find((l) => l.code === locale);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const changeLanguage = (newLocale: string) => {
    setOpen(false);
    router.push(pathname, { locale: newLocale });
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-2 text-sm tracking-widest text-[#1a1a1a] hover:text-[#b8962e] transition-colors duration-300">
        <Image
          src={current?.flag ?? ""}
          alt={current?.name ?? ""}
          width={20}
          height={14}
          className="rounded-sm"
          unoptimized
        />
        <span className="hidden sm:inline uppercase">{current?.code}</span>
      </button>

      {/* Invisible bridge to prevent gap from closing dropdown */}
      {open && <div className="absolute left-0 top-full h-2 w-full" />}

      <div
        className={`absolute left-0 top-[calc(100%+8px)] w-36 bg-white border border-gray-100 rounded shadow-lg overflow-hidden z-50
          transition-all duration-150 origin-top-left
          ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`flex items-center gap-3 w-full px-4 py-2 text-sm text-[#1a1a1a] hover:bg-[#f5f0e8] transition-colors duration-150
              ${locale === lang.code ? "bg-[#f5f0e8] font-medium" : ""}`}
          >
            <Image
              src={lang.flag}
              alt={lang.name}
              width={20}
              height={14}
              className="rounded-sm"
              unoptimized
            />
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
