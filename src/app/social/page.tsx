
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InstagramIcon, YoutubeIcon, WhatsAppIcon } from '@/components/icons/social-icons';
import { useLanguage } from '@/contexts/language-context';
import { Share2 } from 'lucide-react';

const socialLinksData = [
  { nameEn: 'WhatsApp', nameTe: 'వాట్సాప్', Icon: WhatsAppIcon, url: 'https://chat.whatsapp.com/D1QJOz92ONJ3ycJyVN0zPL', color: 'text-green-500 hover:text-green-600' },
  { nameEn: 'Instagram', nameTe: 'ఇన్స్టాగ్రామ్', Icon: InstagramIcon, url: 'https://www.instagram.com/s_v_a_d_d_f_t?utm_source=qr&igsh=MWpmOG15aHF1Yjh6Yg==', color: 'text-pink-600 hover:text-pink-700' },
  { nameEn: 'YouTube', nameTe: 'యూట్యూబ్', Icon: YoutubeIcon, url: 'https://www.youtube.com/@amaleswaridevi/playlists', color: 'text-red-600 hover:text-red-700' },
];

export default function SocialPage() {
  const { t } = useLanguage();

  return (
    <div className="container py-12 md:py-16 animate-fade-in">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
          {t('Connect With Us', 'మాతో కనెక్ట్ అవ్వండి')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t('Follow Sri Vijaya Amaleswari Devi on social media for the latest updates, events, and spiritual content.', 'తాజా నవీకరణలు, ఈవెంట్‌లు మరియు ఆధ్యాత్మిక కంటెంట్ కోసం సోషల్ మీడియాలో శ్రీ విజయ అమలేశ్వరి దేవిని అనుసరించండి.')}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {socialLinksData.map((social) => (
          <Card key={social.nameEn} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <social.Icon className={`w-16 h-16 mx-auto mb-4 ${social.color.split(' ')[0]}`} /> {/* Use base color */}
              <CardTitle className="text-2xl font-headline text-accent">{t(social.nameEn, social.nameTe)}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className={`border-current ${social.color}`}>
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <Share2 className="w-4 h-4 mr-2" /> {t(social.nameEn === 'WhatsApp' ? 'Join Group' : 'Follow Us', social.nameTe === 'వాట్సాప్' ? 'గ్రూప్‌లో చేరండి' : 'మమ్మల్ని అనుసరించండి')}
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
