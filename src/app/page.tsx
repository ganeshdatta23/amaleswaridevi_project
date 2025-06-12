
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { newsItems, eventItems, templeInfo } from '@/lib/data';
import type { NewsItem, EventItem } from '@/lib/types';
import { useLanguage } from '@/contexts/language-context';
import { CalendarDays, Newspaper, ArrowRight, Lightbulb } from 'lucide-react';
import { EventIcon } from '@/components/icons/event-icon'; // Custom icon
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12 md:space-y-16 lg:space-y-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center animate-fade-in">
        <Image
          src="https://storage.googleapis.com/gcp-project-us-central1-docs-agent-198925/images/2024-07-24T07-53-52.920Z_image.jpg"
          alt={t(`${templeInfo.nameEn} majestic view`, `${templeInfo.nameTe} యొక్క సుందర దృశ్యం`)}
          data-ai-hint="goddess statue"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority={true}
          className="absolute inset-0 z-0"
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

      {/* Call to Action / Quick Links Section - Removed AI Suggestions */}
      <section className="container animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center gap-2 text-xl font-headline text-primary">
                <Lightbulb className="w-6 h-6 text-primary" /> 
                {t('Explore & Participate', 'అన్వేషించండి & పాల్గొనండి')}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                {[
                  { href: '/donate', labelEn: 'Donate Now', labelTe: 'ఇప్పుడే విరాళం ఇవ్వండి', icon: 'HandCoins' },
                  { href: '/events', labelEn: 'View Events', labelTe: 'కార్యక్రమాలు చూడండి', icon: 'CalendarDays' },
                  { href: '/gallery', labelEn: 'Temple Gallery', labelTe: 'ఆలయ చిత్రమాలిక', icon: 'Image' },
                  { href: '/contact', labelEn: 'Contact Us', labelTe: 'మమ్మల్ని సంప్రదించండి', icon: 'Mail' },
                ].map((item) => (
                  <Button key={item.href} asChild variant="outline" className="w-full">
                    <Link href={item.href}>
                      {/* Icon placeholder, consider adding actual icons */}
                      {t(item.labelEn, item.labelTe)}
                    </Link>
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Upcoming Events Section */}
      <section className="container animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <h2 className="text-3xl font-headline font-semibold text-center mb-8 text-accent">
          {t('Upcoming & Daily Events', 'రాబోయే & సాధారణ కార్యక్రమాలు')}
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
