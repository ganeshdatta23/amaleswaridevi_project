'use client';
import EventCard from '@/components/events/event-card';
import { eventItems } from '@/lib/data';
import type { EventItem } from '@/lib/types';
import { useLanguage } from '@/contexts/language-context';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarClock } from 'lucide-react';

export default function EventsPage() {
  const { t } = useLanguage();
  // For demonstration, we'll use the same list for upcoming and past.
  // In a real app, this would be filtered by date.
  const upcomingEvents = eventItems;
  const pastEvents = [...eventItems].reverse(); // Example of past events

  return (
    <div className="container py-12 md:py-16 animate-fade-in">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
          {t('Temple Events & Pujas', 'ఆలయ కార్యక్రమాలు & పూజలు')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t('Join us for auspicious occasions, celebrations, and regular pujas.', 'శుభ సందర్భాలు, వేడుకలు మరియు సాధారణ పూజల కోసం మాతో చేరండి.')}
        </p>
      </header>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto mb-8">
          <TabsTrigger value="upcoming">{t('Upcoming Events', 'రాబోయే కార్యక్రమాలు')}</TabsTrigger>
          <TabsTrigger value="past">{t('Past Events', 'గత కార్యక్రమాలు')}</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          {upcomingEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event: EventItem) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <CalendarClock className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">{t('No upcoming events scheduled at this time.', 'ప్రస్తుతానికి రాబోయే కార్యక్రమాలు ఏవీ షెడ్యూల్ చేయబడలేదు.')}</p>
            </div>
          )}
        </TabsContent>
        <TabsContent value="past">
          {pastEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event: EventItem) => (
                <EventCard key={`past-${event.id}`} event={event} />
              ))}
            </div>
          ) : (
             <div className="text-center py-10">
              <CalendarClock className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">{t('No past events found.', 'గత ఈవెంట్‌లు ఏవీ కనుగొనబడలేదు.')}</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
