
'use client';
import { useLanguage } from '@/contexts/language-context';
import { ShieldCheck, Construction } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AdminPage() {
  const { t } = useLanguage();

  return (
    <div className="container py-12 md:py-16 animate-fade-in">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary flex items-center justify-center gap-3">
          <ShieldCheck className="w-10 h-10" />
          {t('Admin Portal (Future)', 'అడ్మిన్ పోర్టల్ (భవిష్యత్తు)')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('This section is for temple administration and is currently under development. Access will be restricted.', 
             'ఈ విభాగం ఆలయ పరిపాలన కోసం మరియు ప్రస్తుతం నిర్మాణంలో ఉంది. యాక్సెస్ పరిమితం చేయబడుతుంది.')}
        </p>
      </header>

      <div className="flex flex-col items-center justify-center text-center p-8 bg-card rounded-lg shadow-lg">
        <Construction className="w-24 h-24 text-primary mb-6" />
        <h2 className="text-2xl font-headline text-accent mb-4">
          {t('Admin Features Coming Soon!', 'అడ్మిన్ ఫీచర్లు త్వరలో వస్తున్నాయి!')}
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md">
          {t('We are developing features for temple administration, including member management and communication tools. This area will require authorized access.', 
             'సభ్యుల నిర్వహణ మరియు కమ్యూనికేషన్ సాధనాలతో సహా ఆలయ పరిపాలన కోసం మేము ఫీచర్‌లను అభివృద్ధి చేస్తున్నాము. ఈ ప్రాంతానికి అధీకృత యాక్సెస్ అవసరం.')}
        </p>
         <Button asChild variant="outline">
          <Link href="/">{t('Back to Home', 'హోమ్‌కు తిరిగి వెళ్ళు')}</Link>
        </Button>
      </div>
    </div>
  );
}
