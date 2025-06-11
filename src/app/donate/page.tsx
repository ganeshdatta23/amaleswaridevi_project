
'use client';
import { useLanguage } from '@/contexts/language-context';
import { HandCoins, Construction } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DonatePage() {
  const { t } = useLanguage();

  return (
    <div className="container py-12 md:py-16 animate-fade-in">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary flex items-center justify-center gap-3">
          <HandCoins className="w-10 h-10" />
          {t('Donate & Support', 'విరాళాలు & మద్దతు')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('Your generous contributions help maintain and develop Sri Vijaya Amaleswari Devi Temple and support its activities. This page is currently under development.', 
             'మీ ఉదారమైన విరాళాలు శ్రీ విజయ అమలేశ్వరి దేవి ఆలయాన్ని నిర్వహించడానికి మరియు అభివృద్ధి చేయడానికి మరియు దాని కార్యకలాపాలకు మద్దతు ఇవ్వడానికి సహాయపడతాయి. ఈ పేజీ ప్రస్తుతం నిర్మాణంలో ఉంది.')}
        </p>
      </header>

      <div className="flex flex-col items-center justify-center text-center p-8 bg-card rounded-lg shadow-lg">
        <Construction className="w-24 h-24 text-primary mb-6" />
        <h2 className="text-2xl font-headline text-accent mb-4">
          {t('Donation System Coming Soon!', 'విరాళాల వ్యవస్థ త్వరలో వస్తుంది!')}
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md">
          {t('We are working on implementing a secure and easy way for you to contribute online. Please check back later or contact the temple office for current donation methods.', 
             'మీరు ఆన్‌లైన్‌లో విరాళం ఇవ్వడానికి సురక్షితమైన మరియు సులభమైన మార్గాన్ని అమలు చేయడానికి మేము కృషి చేస్తున్నాము. దయచేసి ప్రస్తుత విరాళ పద్ధతుల కోసం తర్వాత మళ్ళీ తనిఖీ చేయండి లేదా ఆలయ కార్యాలయాన్ని సంప్రదించండి.')}
        </p>
        <Button asChild>
          <Link href="/contact">{t('Contact Temple Office', 'ఆలయ కార్యాలయాన్ని సంప్రదించండి')}</Link>
        </Button>
      </div>
    </div>
  );
}
