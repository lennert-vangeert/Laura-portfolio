import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Statically import your JSON translations (assumes _en.json and _nl.json are in the same folder)
import enTranslation from "./_en.json";
import nlTranslation from "./_nl.json";

// Change this fallback language whenever you feel like it
const fallbackLanguage = "en";

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // This passes the i18next instance to the useTranslation hook
  .init({
    resources: {
      en: { translation: enTranslation },
      nl: { translation: nlTranslation },
    },
    fallbackLng: fallbackLanguage,
    debug: false, // Toggle to true if you're into seeing behind the curtain
    detection: {
      order: ["path", "cookie", "htmlTag", "localStorage", "navigator"],
      lookupFromPathIndex: 0, // Assumes language code is the first part of your URL, like /en/...
    },
    interpolation: {
      escapeValue: false, // React handles this automatically, so no worries here
    },
    react: {
      useSuspense: false, // Change this if you want to roll with suspense
    },
    saveMissing: true, // Enable this to mark missing translations
    missingKeyHandler: function (lng, key) {
      alert(`🚨 Missing translation key: << ${key} >> for language: ${lng} 🚨`);
    },
  });

// Export a simple function to switch languages on the fly
export const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng); // This is the magic that changes the language
  console.log(lng);

  // Updated regex: it now matches both '/en/' and '/en' (or '/nl/' and '/nl')
  const newPath = window.location.pathname.replace(
    /\/(en|nl)(?=\/|$)/,
    `/${lng}`
  );
  window.history.replaceState({}, "", newPath);
};

export default i18n;
