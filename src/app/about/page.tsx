
'use client';
// import Image from 'next/image'; // Temporarily replaced with <img> for diagnostics
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { templeInfo } from '@/lib/data';
import { useLanguage } from '@/contexts/language-context';
import { ScrollText, Target, Clock, MapPin, ExternalLink } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();
  const googleMapsLink = "https://g.co/kgs/5wKLsSh";
  const imageUrl = "https://upnow-prod.ff45e40d1a1c8f7e7de4e976d0c9e555.r2.cloudflarestorage.com/HrghCHiEyQMuFf6nsVL1GidVM6C2/7b704873-0a40-45cb-929e-7aee120d034e?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=cdd12e35bbd220303957dc5603a4cc8e%2F20250612%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20250612T034548Z&X-Amz-Expires=43200&X-Amz-Signature=3b7c1ebffb8253fa4cce5aef8ddf7004418b2519b51dede39cdbda091a1313a2&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3D%22Screenshot%202025-06-12%20090416.png%22";
  const imageAltText = t(`${templeInfo.nameEn} Detail View`, `${templeInfo.nameTe} వివరాల వీక్షణ`);

  return (
    <div className="container py-12 md:py-16 animate-fade-in">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
          {t(`About ${templeInfo.nameEn}`, `గురించి ${templeInfo.nameTe}`)}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t('Discover the rich heritage and spiritual significance of our sacred temple.', 'మా పవిత్ర ఆలయం యొక్క గొప్ప వారసత్వం మరియు ఆధ్యాత్మిక ప్రాముఖ్యతను కనుగొనండి.')}
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
        <div>
          <img
            src={imageUrl}
            alt={imageAltText}
            data-ai-hint="temple detail"
            width={800}
            height={600}
            className="rounded-lg shadow-xl object-cover w-full h-auto max-w-[800px] max-h-[600px]"
            // priority // priority is a next/image prop
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

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-headline text-accent">
              <MapPin className="w-6 h-6" /> {t('Our Location', 'మా చిరునామా')}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 leading-relaxed">
            <p>{t(templeInfo.contact.addressEn, templeInfo.contact.addressTe)}</p>
            <Button asChild className="mt-4">
              <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                {t('Get Directions', 'మార్గదర్శకాలు పొందండి')} <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
