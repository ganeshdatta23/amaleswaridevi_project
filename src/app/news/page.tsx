'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { newsItems } from '@/lib/data';
import type { NewsItem } from '@/lib/types';
import { useLanguage } from '@/contexts/language-context';
import { Newspaper, ArrowRight } from 'lucide-react';

export default function NewsPage() {
  const { t } = useLanguage();

  return (
    <div className="container py-12 md:py-16 animate-fade-in">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
          {t('Temple News & Announcements', 'ఆలయ వార్తలు & ప్రకటనలు')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t('Stay updated with the latest happenings, announcements, and spiritual insights from Amaleswari Temple.', 'అమలేశ్వరి ఆలయం నుండి తాజా సంఘటనలు, ప్రకటనలు మరియు ఆధ్యాత్మిక అంతర్దృష్టులతో నవీకరించబడండి.')}
        </p>
      </header>

      {newsItems.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news: NewsItem) => (
            <Card key={news.id} className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {news.imageUrl && (
                <div className="relative h-56 w-full">
                  <Image
                    src={news.imageUrl}
                    alt={t(news.titleEn, news.titleTe)}
                    data-ai-hint={news.imageHint || "temple information"}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-headline text-primary">{t(news.titleEn, news.titleTe)}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  <Newspaper className="inline-block w-4 h-4 mr-1" /> {news.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {t(news.summaryEn, news.summaryTe)}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="text-primary hover:text-accent px-0">
                  <Link href={`/news/${news.id}`}>{t('Read More', 'మరింత చదవండి')} <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <Newspaper className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground">{t('No news articles available at this time.', 'ప్రస్తుతానికి వార్తా కథనాలు ఏవీ అందుబాటులో లేవు.')}</p>
        </div>
      )}
    </div>
  );
}

// Placeholder for individual news article page (e.g., /news/[id]/page.tsx)
// This would typically fetch data based on the ID.
// For now, this page will just demonstrate structure.
// You would create a file src/app/news/[id]/page.tsx for this.
