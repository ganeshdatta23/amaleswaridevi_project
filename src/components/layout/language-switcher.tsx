'use client';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { LanguagesIcon } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage, isClient } = useLanguage();

  if (!isClient) {
    // Render a placeholder or nothing on the server to avoid hydration mismatch
    return <div className="w-10 h-10" />; // Placeholder to maintain layout consistency
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'te' : 'en');
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleLanguage} aria-label="Switch language">
      <LanguagesIcon className="h-5 w-5" />
      <span className="sr-only">Switch Language</span>
       {/* <span className="ml-2 text-xs font-medium">{language === 'en' ? 'TE' : 'EN'}</span> */}
    </Button>
  );
}
