'use client';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import NavigationLinks from './navigation-links';
import LanguageSwitcher from './language-switcher';
import { TempleIcon } from '@/components/icons/temple-icon';
import { useLanguage } from '@/contexts/language-context';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label={t('Amaleswari Temple Home', 'అమలేశ్వరి ఆలయం హోమ్')}>
          <TempleIcon className="h-8 w-8 text-primary" />
          <span className="font-headline text-xl font-semibold text-primary">
            {t('Amaleswari Temple', 'అమలేశ్వరి ఆలయం')}
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-4">
          <NavigationLinks />
          <LanguageSwitcher />
        </div>

        <div className="md:hidden flex items-center">
          <LanguageSwitcher />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t('Open navigation menu', 'నావిగేషన్ మెనుని తెరవండి')}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-6">
              <div className="flex flex-col gap-6">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <TempleIcon className="h-8 w-8 text-primary" />
                  <span className="font-headline text-xl font-semibold text-primary">
                    {t('Amaleswari Temple', 'అమలేశ్వరి ఆలయం')}
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
