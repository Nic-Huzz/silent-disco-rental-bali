"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium text-gray-700"
      aria-label={`Switch to ${language === "en" ? "Indonesian" : "English"}`}
    >
      <span className="text-base">
        {language === "en" ? "🇮🇩" : "🇬🇧"}
      </span>
      <span className="hidden sm:inline">{t("lang.switch")}</span>
    </button>
  );
}
