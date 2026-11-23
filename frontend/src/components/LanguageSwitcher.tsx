
"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="language-switcher"
      style={{
        position: "relative",
        zIndex: 99999,
        pointerEvents: "auto",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 12px",
        border: "1px solid rgba(0, 220, 255, 0.35)",
        borderRadius: "10px",
        background: "#101a27",
      }}
    >
      <Languages size={17} color="#00d9ff" />

      <select
        aria-label="Select language"
        value={language}
        onChange={(event) => {
          const selected = event.target.value;

          if (selected === "en" || selected === "my") {
            setLanguage(selected);
          }
        }}
        style={{
          position: "relative",
          zIndex: 100000,
          pointerEvents: "auto",
          cursor: "pointer",
          border: "none",
          outline: "none",
          background: "transparent",
          color: "#ffffff",
          fontSize: "14px",
          fontWeight: 600,
          padding: "4px",
        }}
      >
        <option value="en" style={{ color: "#111" }}>
          English
        </option>
        <option value="my" style={{ color: "#111" }}>
          မြန်မာ
        </option>
      </select>
    </div>
  );
}
