
'use client';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { pujaItems } from '@/lib/data';
import type { PujaItem } from '@/lib/types';
import { useLanguage } from '@/contexts/language-context';
import { ScrollText, IndianRupee } from 'lucide-react'; // Using ScrollText for Puja, could be custom
import { PujaIcon } from '@/components/icons/puja-icon';


export default function PujasPage() {
  const { t } = useLanguage();

  return (
    <div className="container py-12 md:py-16 animate-fade-in">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary flex items-center justify-center gap-3">
          <PujaIcon className="w-10 h-10" />
          {t('Temple Pujas & Sevas', 'ఆలయ పూజలు & సేవలు')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t('Participate in various pujas and sevas offered at Sri Vijaya Amaleswari Devi Temple.', 
             'శ్రీ విజయ అమలేశ్వరి దేవి ఆలయంలో అందించే వివిధ పూజలు మరియు సేవల్లో పాల్గొనండి.')}
        </p>
      </header>

      {pujaItems.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pujaItems.map((puja: PujaItem) => (
            <Card key={puja.id} className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {puja.imageUrl && (
                <div className="relative h-56 w-full">
                  <Image
                    src={puja.imageUrl}
                    alt={t(puja.nameEn, puja.nameTe)}
                    data-ai-hint={puja.imageHint || "puja ritual"}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-headline text-primary flex items-center gap-2">
                  <PujaIcon className="w-5 h-5" /> {t(puja.nameEn, puja.nameTe)}
                </CardTitle>
                {puja.price && (
                  <CardDescription className="text-sm text-muted-foreground flex items-center">
                    <IndianRupee className="w-4 h-4 mr-1" /> {puja.price}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {t(puja.descriptionEn, puja.descriptionTe)}
                </p>
              </CardContent>
              {/* <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  <Info className="w-4 h-4 mr-2" />
                  {t('Inquire / Book', 'విచారించండి / బుక్ చేయండి')}
                </Button>
              </CardFooter> */}
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <PujaIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground">{t('No puja information available at this time. Please contact the temple office.', 'ప్రస్తుతానికి పూజ సమాచారం అందుబాటులో లేదు. దయచేసి ఆలయ కార్యాలయాన్ని సంప్రదించండి.')}</p>
        </div>
      )}
    </div>
  );
}
