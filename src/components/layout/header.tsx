
'use client';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import NavigationLinks from './navigation-links';
import LanguageSwitcher from './language-switcher';
import { ShriYantraIcon } from '@/components/icons/shri-yantra-icon';
import { useLanguage } from '@/contexts/language-context';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-navbar-background text-navbar-foreground">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label={t('Sri Vijaya Amaleswari Devi Home', 'శ్రీ విజయ అమలేశ్వరి దేవి హోమ్')}>
          <ShriYantraIcon className="h-8 w-8 text-accent" /> {/* Accent is Gold */}
          <span className="font-headline text-xl font-semibold text-navbar-foreground">
            {t('Sri Vijaya Amaleswari Devi', 'శ్రీ విజయ అమలేశ్వరి దేవి')}
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-4">
          <NavigationLinks />
          <LanguageSwitcher className="text-navbar-foreground hover:text-navbar-foreground/80" />
        </div>

        <div className="md:hidden flex items-center">
          <LanguageSwitcher className="text-navbar-foreground hover:text-navbar-foreground/80" />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-navbar-foreground hover:bg-navbar-foreground/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t('Open navigation menu', 'నావిగేషన్ మెనుని తెరవండి')}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-navbar-background text-navbar-foreground p-6">
              <SheetHeader>
                <SheetTitle className="sr-only">{t('Navigation Menu', 'నావిగేషన్ మెను')}</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-4"> {/* Added mt-4 to give space if title were visible */}
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <ShriYantraIcon className="h-8 w-8 text-accent" />
                  <span className="font-headline text-xl font-semibold text-navbar-foreground">
                    {t('Sri Vijaya Amaleswari Devi', 'శ్రీ విజయ అమలేశ్వరి దేవి')}
                  </span>
                </Link>
                <NavigationLinks orientation="vertical" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
