
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';


const resources = {
  en: {
    translation: {
       "signin-error"               : "Sign-in Failed",
       }
  },
  no: {
    translation: {
     "signin-error"              : "Inloggning Misslyckades",
     }
  },
  sw: {
    translation: {
     "signin-error"              : "Inloggning Misslyckades",
          
    }
  }

};
i18n
.use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    // lng: "no",
    debug: true,
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
