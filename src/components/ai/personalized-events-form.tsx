'use client';
import { useState, type FormEvent } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Lightbulb } from 'lucide-react';
import { getPersonalizedEventSuggestions } from '@/lib/actions';
import { useLanguage } from '@/contexts/language-context';
import { seasons } from '@/lib/data'; // Import seasons data

const formSchema = z.object({
  interests: z.string().min(3, { message: "Please enter at least one interest." }),
  season: z.string().min(1, { message: "Please select a season." }),
});

type FormData = z.infer<typeof formSchema>;

export default function PersonalizedEventsForm() {
  const { t } = useLanguage();
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: "",
      season: "",
    },
  });

  async function onSubmit(values: FormData) {
    setIsLoading(true);
    setError(null);
    setSuggestions([]);

    const result = await getPersonalizedEventSuggestions({
      interests: values.interests,
      season: values.season,
    });

    if ('error' in result) {
      setError(result.error);
    } else {
      setSuggestions(result.eventSuggestions);
    }
    setIsLoading(false);
  }

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-headline">
          <Lightbulb className="w-6 h-6 text-primary" />
          {t('Personalized Event Suggestions', 'వ్యక్తిగతీకరించిన ఈవెంట్ సూచనలు')}
        </CardTitle>
        <CardDescription>
          {t('Tell us your interests and the current season to get event recommendations.', 'ఈవెంట్ సిఫార్సులను పొందడానికి మీ ఆసక్తులు మరియు ప్రస్తుత సీజన్‌ను మాకు తెలియజేయండి.')}
        </CardDescription>
      </CardHeader>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="interests">{t('Your Interests (comma-separated)', 'మీ ఆసక్తులు (కామాతో వేరుచేయండి)')}</Label>
            <Input
              id="interests"
              placeholder={t('e.g., meditation, music, festivals', 'ఉదా., ధ్యానం, సంగీతం, పండుగలు')}
              {...form.register("interests")}
              disabled={isLoading}
            />
            {form.formState.errors.interests && (
              <p className="text-sm text-destructive">{form.formState.errors.interests.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="season">{t('Current Season', 'ప్రస్తుత సీజన్')}</Label>
            <Select
              onValueChange={(value) => form.setValue("season", value)}
              defaultValue={form.getValues("season")}
              disabled={isLoading}
            >
              <SelectTrigger id="season">
                <SelectValue placeholder={t('Select a season', 'ఒక సీజన్‌ను ఎంచుకోండి')} />
              </SelectTrigger>
              <SelectContent>
                {seasons.map((season) => (
                  <SelectItem key={season.value} value={season.value}>
                    {t(season.labelEn, season.labelTe)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {form.formState.errors.season && (
              <p className="text-sm text-destructive">{form.formState.errors.season.message}</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t('Getting Suggestions...', 'సూచనలను పొందుతోంది...')}
              </>
            ) : (
              t('Get Suggestions', 'సూచనలను పొందండి')
            )}
          </Button>
        </CardFooter>
      </form>
      
      {error && (
        <div className="p-4">
          <Alert variant="destructive">
            <AlertTitle>{t('Error', 'లోపం')}</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="p-4 space-y-3">
          <h3 className="text-lg font-semibold font-headline">{t('Recommended Events:', 'సిఫార్సు చేయబడిన ఈవెంట్‌లు:')}</h3>
          <ul className="list-disc list-inside space-y-2 bg-secondary/50 p-4 rounded-md">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="text-sm">{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}
