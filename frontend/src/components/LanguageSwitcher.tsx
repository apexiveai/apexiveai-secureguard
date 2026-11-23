
"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <Languages size={16} />

      <select
        aria-label="Select language"
        value={language}
        onChange={(event) => {
          setLanguage(event.target.value as "en" | "my");
        }}
      >
        <option value="en">English</option>
        <option value="my">မြန်မာ</option>
      </select>
    </div>
  );
}
