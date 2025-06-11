
'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { trustMembers } from '@/lib/data';
import type { TrustMember } from '@/lib/types';
import { useLanguage } from '@/contexts/language-context';
import { Users, UserCircle } from 'lucide-react';

export default function TrustPage() {
  const { t } = useLanguage();

  return (
    <div className="container py-12 md:py-16 animate-fade-in">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary flex items-center justify-center gap-3">
          <Users className="w-10 h-10" />
          {t('Sri Vijaya Amaleswari Devi Family Trust', 'శ్రీ విజయ అమలేశ్వరి దేవి కుటుంబ ట్రస్ట్')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t('Meet the dedicated members of the Sri Vijaya Amaleswari Devi Family Trust.', 
             'శ్రీ విజయ అమలేశ్వరి దేవి కుటుంబ ట్రస్ట్ యొక్క అంకితభావంతో పనిచేస్తున్న సభ్యులను కలవండి.')}
        </p>
      </header>

      {trustMembers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trustMembers.map((member: TrustMember) => (
            <Card key={member.id} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-primary mb-4">
                  {member.photoUrl ? (
                    <Image
                      src={member.photoUrl}
                      alt={t(member.nameEn, member.nameTe)}
                      data-ai-hint={member.imageHint || "person portrait"}
                      layout="fill"
                      objectFit="cover"
                    />
                  ) : (
                    <UserCircle className="w-full h-full text-muted-foreground p-4" />
                  )}
                </div>
                <CardTitle className="text-xl font-headline text-accent">{t(member.nameEn, member.nameTe)}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-primary font-semibold">{t(member.roleEn, member.roleTe)}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <Users className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground">{t('Trust member information is currently unavailable. Please check back later.', 'ట్రస్ట్ సభ్యుల సమాచారం ప్రస్తుతం అందుబాటులో లేదు. దయచేసి తర్వాత మళ్ళీ తనిఖీ చేయండి.')}</p>
        </div>
      )}
       <section className="mt-12 text-center">
          <h2 className="text-2xl font-headline font-semibold text-accent mb-4">{t('About the Trust', 'ట్రస్ట్ గురించి')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('The Sri Vijaya Amaleswari Devi Family Trust is dedicated to the upkeep and development of the temple, preserving its traditions, and serving the community. The trust manages temple operations, organizes events, and undertakes charitable activities.', 
               'శ్రీ విజయ అమలేశ్వరి దేవి ఫ్యామిలీ ట్రస్ట్ ఆలయ నిర్వహణ మరియు అభివృద్ధికి, దాని సంప్రదాయాలను పరిరక్షించడానికి మరియు సమాజానికి సేవ చేయడానికి అంకితం చేయబడింది. ట్రస్ట్ ఆలయ కార్యకలాపాలను నిర్వహిస్తుంది, కార్యక్రమాలను నిర్వహిస్తుంది మరియు ధార్మిక కార్యక్రమాలను చేపడుతుంది.')}
          </p>
        </section>
    </div>
  );
}
