'use client';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { EventItem } from '@/lib/types';
import { useLanguage } from '@/contexts/language-context';
import { CalendarDays, Clock, Info } from 'lucide-react';
import { EventIcon } from '@/components/icons/event-icon';

interface EventCardProps {
  event: EventItem;
}

export default function EventCard({ event }: EventCardProps) {
  const { t } = useLanguage();

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
      {event.imageUrl && (
        <div className="relative h-56 w-full">
          <Image
            src={event.imageUrl}
            alt={t(event.titleEn, event.titleTe)}
            data-ai-hint={event.imageHint || "temple celebration"}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl font-headline text-primary flex items-center gap-2">
          <EventIcon className="w-5 h-5" /> {t(event.titleEn, event.titleTe)}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground space-y-1">
          <div className="flex items-center">
            <CalendarDays className="w-4 h-4 mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{event.time}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-foreground/80 leading-relaxed">
          {t(event.descriptionEn, event.descriptionTe)}
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          <Info className="w-4 h-4 mr-2" />
          {t('More Details', 'మరిన్ని వివరాలు')}
        </Button>
      </CardFooter>
    </Card>
  );
}
