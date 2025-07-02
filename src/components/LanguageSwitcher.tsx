
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative">
      <div className="flex bg-gray-100 rounded-full p-1 border border-gray-200">
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            language === 'en'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'text-gray-600 hover:text-amber-600'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('ne')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            language === 'ne'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'text-gray-600 hover:text-amber-600'
          }`}
        >
          नेपाली
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
