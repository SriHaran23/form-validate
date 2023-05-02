// import React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    translation: {
      greeting: 'Hello!',
      message: 'Welcome to my app!'
    }
  },
  hin: {
    translation: {
      greeting: 'नमस्ते!',
      message: 'मेरे ऐप में आपका स्वागत है!'
    }
  },
  tel: {
    translation: {
      greeting: 'హలో!',
      message: 'నా యాప్‌కి స్వాగతం!'
    }
  },
  tam: {
    translation: {
      greeting: 'வணக்கம்!',
      message: 'எனது பயன்பாட்டிற்கு வரவேற்கிறோம்!'
    }
  },
  kan: {
    translation: {
      greeting: 'ನಮಸ್ಕಾರ!',
      message: 'ನನ್ನ ಅಪ್ಲಿಕೇಶನ್‌ಗೆ ಸುಸ್ವಾಗತ!'
    }
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng:"en",
    debug:true,
    resources,
    lng: 'en', // set the default language
    interpolation: {
      escapeValue: false // allows interpolation within translation strings
    }
  });
  console.log(i18n.t('message'))

export default i18n;
