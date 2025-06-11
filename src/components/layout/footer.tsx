
'use client';
import Link from 'next/link';
import { InstagramIcon, YoutubeIcon, WhatsAppIcon } from '@/components/icons/social-icons'; // Updated imports
import { useLanguage } from '@/contexts/language-context';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const socialLinks = [
    { name: 'WhatsApp', Icon: WhatsAppIcon, url: 'https://chat.whatsapp.com/D1QJOz92ONJ3ycJyVN0zPL', label: 'WhatsApp Group' },
    { name: 'Instagram', Icon: InstagramIcon, url: 'https://www.instagram.com/s_v_a_d_d_f_t?utm_source=qr&igsh=MWpmOG15aHF1Yjh6Yg==', label: 'Instagram Page' },
    { name: 'YouTube', Icon: YoutubeIcon, url: 'https://www.youtube.com/@amaleswaridevi/playlists', label: 'YouTube Channel' },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border/40">
      <div className="container py-8 text-center md:text-left">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-2">
              {t('Sri Vijaya Amaleswari Devi', 'శ్రీ విజయ అమలేశ్వరి దేవి')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('A sacred place of worship and tranquility.', 'ఆరాధన మరియు ప్రశాంతతకు పవిత్ర స్థలం.')}
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-2">{t('Quick Links', 'త్వరిత లింకులు')}</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">{t('About Us', 'మా గురించి')}</Link></li>
              <li><Link href="/pujas" className="hover:text-primary transition-colors">{t('Pujas', 'పూజలు')}</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">{t('Events', 'కార్యక్రమాలు')}</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">{t('Gallery', 'చిత్రమాలిక')}</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">{t('Contact', 'సంప్రదించండి')}</Link></li>
              <li><Link href="/trust" className="hover:text-primary transition-colors">{t('Family Trust', 'కుటుంబ ట్రస్ట్')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-2">{t('Connect With Us', 'మాతో కనెక్ట్ అవ్వండి')}</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-muted-foreground hover:text-primary transition-colors">
                  <link.Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/60 text-sm text-muted-foreground">
          <p className="mb-1">
            {t('Official website maintained on behalf of Sri Vijaya Amaleswari Devi Family Trust.', 
               'శ్రీ విజయ అమలేశ్వరి దేవి ఫ్యామిలీ ట్రస్ట్ తరపున నిర్వహించబడుతున్న అధికారిక వెబ్‌సైట్.')}
          </p>
          <p>&copy; {currentYear} {t('Sri Vijaya Amaleswari Devi. All rights reserved.', 'శ్రీ విజయ అమలేశ్వరి దేవి. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.')}</p>
        </div>
      </div>
    </footer>
  );
}
