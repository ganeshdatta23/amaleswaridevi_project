'use client';
import Link from 'next/link';
import { FacebookIcon, YoutubeIcon, InstagramIcon, TwitterIcon } from '@/components/icons/social-icons';
import { useLanguage } from '@/contexts/language-context';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-muted/50 border-t border-border/40">
      <div className="container py-8 text-center md:text-left">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-2">
              {t('Amaleswari Temple', 'అమలేశ్వరి ఆలయం')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('A sacred place of worship and tranquility.', 'ఆరాధన మరియు ప్రశాంతతకు పవిత్ర స్థలం.')}
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-2">{t('Quick Links', 'త్వరిత లింకులు')}</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">{t('About Us', 'మా గురించి')}</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">{t('Events', 'కార్యక్రమాలు')}</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">{t('Gallery', 'చిత్రమాలిక')}</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">{t('Contact', 'సంప్రదించండి')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-2">{t('Connect With Us', 'మాతో కనెక్ట్ అవ్వండి')}</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><FacebookIcon className="h-6 w-6" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors"><YoutubeIcon className="h-6 w-6" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><InstagramIcon className="h-6 w-6" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><TwitterIcon className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/60 text-sm text-muted-foreground">
          <p>&copy; {currentYear} {t('Amaleswari Temple. All rights reserved.', 'అమలేశ్వరి ఆలయం. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.')}</p>
        </div>
      </div>
    </footer>
  );
}
