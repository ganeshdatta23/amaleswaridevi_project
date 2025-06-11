'use client';
import PersonalizedEventsForm from '@/components/ai/personalized-events-form';
import { useLanguage } from '@/contexts/language-context';
import { Lightbulb } from 'lucide-react';

export default function SuggestionsPage() {
  const { t } = useLanguage();

  return (
    <div className="container py-12 md:py-16 animate-fade-in">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary flex items-center justify-center gap-3">
          <Lightbulb className="w-10 h-10" />
          {t('AI Event Suggester', 'AI ఈవెంట్ సూచనకారి')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('Get personalized event recommendations from our AI assistant. Share your interests and the current season to discover events that match your preferences.', 'మా AI సహాయకుడి నుండి వ్యక్తిగతీకరించిన ఈవెంట్ సిఫార్సులను పొందండి. మీ ప్రాధాన్యతలకు సరిపోయే ఈవెంట్‌లను కనుగొనడానికి మీ ఆసక్తులు మరియు ప్రస్తుత సీజన్‌ను పంచుకోండి.')}
        </p>
      </header>

      <div className="flex justify-center">
        <PersonalizedEventsForm />
      </div>
    </div>
  );
}
