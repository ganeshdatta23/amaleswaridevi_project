
'use client';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { LanguagesIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { language, setLanguage, isClient } = useLanguage();

  if (!isClient) {
    return <div className="w-10 h-10" />; 
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'te' : 'en');
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleLanguage} 
      aria-label="Switch language"
      className={cn(className)} // Allow passing custom classes
    >
      <LanguagesIcon className="h-5 w-5" />
      <span className="sr-only">Switch Language</span>
    </Button>
  );
}
