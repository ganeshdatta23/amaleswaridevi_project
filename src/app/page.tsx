
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PersonalizedEventsForm from '@/components/ai/personalized-events-form';
import { newsItems, eventItems, templeInfo } from '@/lib/data';
import type { NewsItem, EventItem } from '@/lib/types';
import { useLanguage } from '@/contexts/language-context';
import { CalendarDays, Newspaper, ArrowRight } from 'lucide-react';
import { EventIcon } from '@/components/icons/event-icon'; // Custom icon

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12 md:space-y-16 lg:space-y-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center animate-fade-in">
        <Image
          src="https://storage.googleapis.com/gemini-prod-us-west1-001/uploads/2024/07/23/aa9f856c27336d0690ef34895e7b860d.jpeg"
          alt={t(`${templeInfo.nameEn} majestic view`, `${templeInfo.nameTe} యొక్క సుందర దృశ్యం`)}
          data-ai-hint="jpg image"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="absolute inset-0 z-0 opacity-40"
        />
        <div className="relative z-10 p-6 bg-background/70 backdrop-blur-sm rounded-lg shadow-xl max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-primary">
            {t(`Welcome to ${templeInfo.nameEn}`, `${templeInfo.nameTe} స్వాగతం`)}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto">
            {t('A divine abode of peace, spirituality, and cultural heritage. Discover ancient traditions and find solace.', 'శాంతి, ఆధ్యాత్మికత మరియు సాంస్కృతిక వారసత్వానికి దివ్య నిలయం. ప్రాచీన సంప్రదాయాలను కనుగొనండి మరియు సాంత్వన పొందండి.')}
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/about">
              {t('Learn More', 'మరింత తెలుసుకోండి')} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Temple Overview Section */}
      <section className="container animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-primary">{t(`About ${templeInfo.nameEn}`, `మా ${templeInfo.nameTe} గురించి`)}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-foreground/80">
              {t(templeInfo.historyEn.substring(0, 250) + '...', templeInfo.historyTe.substring(0, 250) + '...')}
            </p>
            <Button asChild variant="link" className="px-0 text-primary hover:text-accent">
              <Link href="/about">{t('Read full history', 'పూర్తి చరిత్ర చదవండి')} <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>
      </section>
      
      {/* Personalized Event Suggestions Section */}
      <section className="container animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-3xl font-headline font-semibold text-center mb-8 text-accent">
          {t('Discover Events Tailored for You', 'మీ కోసం రూపొందించిన ఈవెంట్‌లను కనుగొనండి')}
        </h2>
        <PersonalizedEventsForm />
      </section>

      {/* Upcoming Events Section */}
      <section className="container animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <h2 className="text-3xl font-headline font-semibold text-center mb-8 text-accent">
          {t('Upcoming & Regular Events', 'రాబోయే & సాధారణ కార్యక్రమాలు')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventItems.filter(event => !event.id.startsWith("past_")).slice(0, 3).map((event: EventItem) => (
            <Card key={event.id} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              {event.imageUrl && (
                <div className="relative h-48 w-full">
                  <Image
                    src={event.imageUrl}
                    alt={t(event.titleEn, event.titleTe)}
                    data-ai-hint={event.imageHint || "temple event"}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-headline text-primary flex items-center gap-2">
                   <EventIcon className="w-5 h-5" /> {t(event.titleEn, event.titleTe)}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  <CalendarDays className="inline-block w-4 h-4 mr-1" /> {event.date} | {event.time}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80">
                  {t(event.descriptionEn.substring(0,100) + "...", event.descriptionTe.substring(0,100) + "...")}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/events">{t('View All Events', 'అన్ని కార్యక్రమాలు చూడండి')} <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-muted/30 py-12 md:py-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <div className="container">
          <h2 className="text-3xl font-headline font-semibold text-center mb-8 text-accent">
            {t('Temple News & Announcements', 'ఆలయ వార్తలు & ప్రకటనలు')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {newsItems.slice(0, 2).map((news: NewsItem) => (
              <Card key={news.id} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                {news.imageUrl && (
                  <div className="relative h-40 w-full">
                  <Image
                    src={news.imageUrl}
                    alt={t(news.titleEn, news.titleTe)}
                    data-ai-hint={news.imageHint || "temple news"}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-lg font-headline text-primary">{t(news.titleEn, news.titleTe)}</CardTitle>
                  <CardDescription className="text-xs text-muted-foreground">
                    <Newspaper className="inline-block w-4 h-4 mr-1" /> {news.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80">{t(news.summaryEn, news.summaryTe)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/news">{t('Read More News', 'మరిన్ని వార్తలు చదవండి')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
