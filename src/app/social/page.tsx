'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FacebookIcon, YoutubeIcon, InstagramIcon, TwitterIcon } from '@/components/icons/social-icons';
import { useLanguage } from '@/contexts/language-context';
import { Share2 } from 'lucide-react';

const socialLinks = [
  { nameEn: 'Facebook', nameTe: 'ఫేస్బుక్', Icon: FacebookIcon, url: 'https://facebook.com/amaleswaritemple', color: 'text-blue-600 hover:text-blue-700' },
  { nameEn: 'YouTube', nameTe: 'యూట్యూబ్', Icon: YoutubeIcon, url: 'https://youtube.com/amaleswaritemple', color: 'text-red-600 hover:text-red-700' },
  { nameEn: 'Instagram', nameTe: 'ఇన్స్టాగ్రామ్', Icon: InstagramIcon, url: 'https://instagram.com/amaleswaritemple', color: 'text-pink-600 hover:text-pink-700' },
  { nameEn: 'Twitter / X', nameTe: 'ట్విట్టర్ / ఎక్స్', Icon: TwitterIcon, url: 'https://twitter.com/amaleswaritemple', color: 'text-sky-500 hover:text-sky-600' },
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
          {t('Follow Amaleswari Temple on social media for the latest updates, events, and spiritual content.', 'తాజా నవీకరణలు, ఈవెంట్‌లు మరియు ఆధ్యాత్మిక కంటెంట్ కోసం సోషల్ మీడియాలో అమలేశ్వరి ఆలయాన్ని అనుసరించండి.')}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {socialLinks.map((social) => (
          <Card key={social.nameEn} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <social.Icon className={`w-16 h-16 mx-auto mb-4 ${social.color.split(' ')[0]}`} /> {/* Use base color */}
              <CardTitle className="text-2xl font-headline text-accent">{t(social.nameEn, social.nameTe)}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className={`border-current ${social.color}`}>
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <Share2 className="w-4 h-4 mr-2" /> {t('Follow Us', 'మమ్మల్ని అనుసరించండి')}
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Placeholder for embedded content - this would require specific APIs/widgets */}
      {/* <section className="mt-16">
        <h2 className="text-3xl font-headline font-semibold text-center mb-8 text-accent">
          {t('Live Feeds (Coming Soon)', 'ప్రత్యక్ష ప్రసారాలు (త్వరలో)')}
        </h2>
        <p className="text-center text-muted-foreground">
          {t('We plan to integrate live feeds from our social channels here.', 'మేము మా సోషల్ ఛానెల్‌ల నుండి ప్రత్యక్ష ప్రసారాలను ఇక్కడ ఏకీకృతం చేయడానికి ప్లాన్ చేస్తున్నాము.')}
        </p>
      </section> */}
    </div>
  );
}
