import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEn from './en.json';
import translationArabic from './ar.json';

translationEn.codes = {...translationEn};
translationArabic.codes = {...translationArabic};
const resources = {
  en: {
    translation: translationEn,
  },
  ar: {
    translation: translationArabic,
  },
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
export default i18n;
