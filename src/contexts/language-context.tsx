
'use client';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'te';

interface LanguageContextType {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  t: (enText: string, teText: string) => string;
  isClient: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Optionally, load saved language preference from localStorage
    const savedLanguage = localStorage.getItem('temple-lang') as Language | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage: Dispatch<SetStateAction<Language>> = (langUpdater) => {
    setLanguage(prevLang => {
      const newLang = typeof langUpdater === 'function' ? langUpdater(prevLang) : langUpdater;
      if (isClient) {
        localStorage.setItem('temple-lang', newLang);
      }
      return newLang;
    });
  };
  
  const t = (enText: string, teText: string) => {
    if (!isClient) return enText; // Default to English on server or before hydration
    return language === 'en' ? enText : teText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isClient }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
