
'use client';
import Link from 'next/link';
import { InstagramIcon, YoutubeIcon, WhatsAppIcon } from '@/components/icons/social-icons';
import { useLanguage } from '@/contexts/language-context';
import { templeInfo } from '@/lib/data';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const socialLinks = [
    { name: 'WhatsApp', Icon: WhatsAppIcon, url: 'https://chat.whatsapp.com/D1QJOz92ONJ3ycJyVN0zPL', label: 'WhatsApp Group' },
    { name: 'Instagram', Icon: InstagramIcon, url: 'https://www.instagram.com/s_v_a_d_d_f_t?utm_source=qr&igsh=MWpmOG15aHF1Yjh6Yg==', label: 'Instagram Page' },
    { name: 'YouTube', Icon: YoutubeIcon, url: 'https://www.youtube.com/@amaleswaridevi/playlists', label: 'YouTube Channel' },
  ];

  return (
    <footer className="bg-footer-background text-footer-foreground border-t border-border/40">
      <div className="container py-8 text-center md:text-left">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-headline text-lg font-semibold text-accent mb-2"> {/* Accent is Gold */}
              {t(templeInfo.nameEn, templeInfo.nameTe)}
            </h3>
            <p className="text-sm text-footer-foreground/80">
              {t('A sacred place of worship and tranquility.', 'ఆరాధన మరియు ప్రశాంతతకు పవిత్ర స్థలం.')}
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-accent mb-2">{t('Quick Links', 'త్వరిత లింకులు')}</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/about" className="text-footer-foreground/90 hover:text-accent transition-colors">{t('About Us', 'మా గురించి')}</Link></li>
              <li><Link href="/pujas" className="text-footer-foreground/90 hover:text-accent transition-colors">{t('Pujas', 'పూజలు')}</Link></li>
              <li><Link href="/events" className="text-footer-foreground/90 hover:text-accent transition-colors">{t('Events', 'కార్యక్రమాలు')}</Link></li>
              <li><Link href="/gallery" className="text-footer-foreground/90 hover:text-accent transition-colors">{t('Gallery', 'చిత్రమాలిక')}</Link></li>
              <li><Link href="/map" className="text-footer-foreground/90 hover:text-accent transition-colors">{t('Directions', 'మార్గదర్శకాలు')}</Link></li>
              <li><Link href="/trust" className="text-footer-foreground/90 hover:text-accent transition-colors">{t('Family Trust', 'కుటుంబ ట్రస్ట్')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-accent mb-2">{t('Contact Info', 'సంప్రదింపు సమాచారం')}</h3>
            <address className="text-sm not-italic text-footer-foreground/80 space-y-2">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 shrink-0 text-accent/80" />
                <span>{t(templeInfo.contact.addressEn, templeInfo.contact.addressTe)}</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2 shrink-0 text-accent/80" />
                <a href={`tel:${templeInfo.contact.phone}`} className="text-footer-foreground/90 hover:text-accent transition-colors">{templeInfo.contact.phone}</a>
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2 shrink-0 text-accent/80" />
                <a href={`mailto:${templeInfo.contact.email}`} className="text-footer-foreground/90 hover:text-accent transition-colors break-all">{templeInfo.contact.email}</a>
              </p>
            </address>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-accent mb-2">{t('Connect With Us', 'మాతో కనెక్ట్ అవ్వండి')}</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-footer-foreground/80 hover:text-accent transition-colors">
                  <link.Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/60 text-sm text-footer-foreground/70">
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
