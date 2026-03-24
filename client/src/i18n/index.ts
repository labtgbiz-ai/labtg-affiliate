import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from './locales/ru';
import en from './locales/en';
import es from './locales/es';
import uz from './locales/uz';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      en: { translation: en },
      es: { translation: es },
      uz: { translation: uz },
    },
    fallbackLng: 'ru',
    // Detect from: localStorage, navigator (browser language), htmlTag
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'labtg_language',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
export const SUPPORTED_LANGUAGES = [
  { code: 'ru', label: 'RU', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', label: 'EN', name: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'ES', name: 'Español', flag: '🇪🇸' },
  { code: 'uz', label: 'UZ', name: "O'zbek", flag: '🇺🇿' },
];
