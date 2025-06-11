'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { templeInfo } from '@/lib/data';
import { useLanguage } from '@/contexts/language-context';
import { ScrollText, Target, Clock } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="container py-12 md:py-16 animate-fade-in">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
          {t('About Amaleswari Temple', 'అమలేశ్వరి ఆలయం గురించి')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t('Discover the rich heritage and spiritual significance of our sacred temple.', 'మా పవిత్ర ఆలయం యొక్క గొప్ప వారసత్వం మరియు ఆధ్యాత్మిక ప్రాముఖ్యతను కనుగొనండి.')}
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <Image
            src="https://placehold.co/800x600.png"
            alt={t('Amaleswari Temple Sanctum', 'అమలేశ్వరి ఆలయ గర్భగుడి')}
            data-ai-hint="temple interior"
            width={800}
            height={600}
            className="rounded-lg shadow-xl object-cover"
          />
        </div>
        <div className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-headline text-accent">
                <ScrollText className="w-6 h-6" /> {t('Our History', 'మా చరిత్ర')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80 leading-relaxed">
              <p>{t(templeInfo.historyEn, templeInfo.historyTe)}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-10">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-headline text-accent">
              <Target className="w-6 h-6" /> {t('Our Mission', 'మా లక్ష్యం')}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 leading-relaxed">
            <p>{t(templeInfo.missionEn, templeInfo.missionTe)}</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-headline text-accent">
              <Clock className="w-6 h-6" /> {t('Temple Timings', 'ఆలయ సమయాలు')}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 leading-relaxed whitespace-pre-line">
            <p>{t(templeInfo.timingsEn, templeInfo.timingsTe)}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
