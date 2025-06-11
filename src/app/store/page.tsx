
'use client';
import { useLanguage } from '@/contexts/language-context';
import { StoreIcon, Construction } from 'lucide-react'; // Using StoreIcon from Lucide
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function StorePage() {
  const { t } = useLanguage();

  return (
    <div className="container py-12 md:py-16 animate-fade-in">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary flex items-center justify-center gap-3">
          <StoreIcon className="w-10 h-10" />
          {t('Temple Store (Future)', 'ఆలయ స్టోర్ (భవిష్యత్తు)')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('Our online store for temple-related items and publications will be available in the future. This page is currently under development.', 
             'ఆలయ సంబంధిత వస్తువులు మరియు ప్రచురణల కోసం మా ఆన్‌లైన్ స్టోర్ భవిష్యత్తులో అందుబాటులో ఉంటుంది. ఈ పేజీ ప్రస్తుతం నిర్మాణంలో ఉంది.')}
        </p>
      </header>

      <div className="flex flex-col items-center justify-center text-center p-8 bg-card rounded-lg shadow-lg">
        <Construction className="w-24 h-24 text-primary mb-6" />
        <h2 className="text-2xl font-headline text-accent mb-4">
          {t('Online Store Coming Soon!', 'ఆన్‌లైన్ స్టోర్ త్వరలో వస్తుంది!')}
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md">
          {t('We are planning to launch an online store where you can find religious items, books, and more. Stay tuned for updates!', 
             'మేము మతపరమైన వస్తువులు, పుస్తకాలు మరియు మరిన్నింటిని కనుగొనగల ఆన్‌లైన్ స్టోర్‌ను ప్రారంభించాలని యోచిస్తున్నాము. నవీకరణల కోసం వేచి ఉండండి!')}
        </p>
        <Button asChild variant="outline">
          <Link href="/">{t('Back to Home', 'హోమ్‌కు తిరిగి వెళ్ళు')}</Link>
        </Button>
      </div>
    </div>
  );
}
