
'use client';
import { useState, useEffect } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { templeInfo } from '@/lib/data';
import { useLanguage } from '@/contexts/language-context';
import { MapPin, Phone, Mail } from 'lucide-react';

const MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_GOOGLE_MAPS_API_KEY_PLACEHOLDER"; 

// Coordinates for Sri Vijaya Amaleswari Devi Devasthanam, Davoji Palem
const templePosition = { lat: 16.4305, lng: 81.1513 }; 

export default function MapPage() {
  const { t } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="container py-12 md:py-16 flex justify-center items-center min-h-[50vh]">
        <p>{t('Loading map...', 'మ్యాప్ లోడ్ అవుతోంది...')}</p>
      </div>
    );
  }
  
  if (MAPS_API_KEY === "YOUR_GOOGLE_MAPS_API_KEY_PLACEHOLDER") {
    return (
       <div className="container py-12 md:py-16 text-center">
         <h1 className="text-3xl font-bold text-destructive mb-4">{t('Map Configuration Error', 'మ్యాప్ కాన్ఫిగరేషన్ లోపం')}</h1>
         <p className="text-muted-foreground">{t('Google Maps API key is not configured. Please set the NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable.', 'Google Maps API కీ కాన్ఫిగర్ చేయబడలేదు. దయచేసి NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ఎన్విరాన్మెంట్ వేరియబుల్‌ను సెట్ చేయండి.')}</p>
          <a 
            href={`https://maps.google.com/?q=${templePosition.lat},${templePosition.lng}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-block px-6 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            {t('Open in Google Maps', 'Google Maps లో తెరవండి')}
          </a>
       </div>
    );
  }

  return (
    <div className="container py-12 md:py-16 animate-fade-in">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
          {t('Find Your Way to Us', 'మా వద్దకు మీ మార్గాన్ని కనుగొనండి')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t('Visit Sri Vijaya Amaleswari Devi Temple. We are located at:', 'శ్రీ విజయ అమలేశ్వరి దేవి ఆలయాన్ని సందర్శించండి. మేము ఇక్కడ ఉన్నాము:')}
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="shadow-xl h-[500px] md:h-[600px] overflow-hidden">
            <APIProvider apiKey={MAPS_API_KEY}>
              <Map
                defaultCenter={templePosition}
                defaultZoom={16} 
                mapId="sri-vijaya-amaleswari-devi-map"
                gestureHandling={'greedy'}
                disableDefaultUI={false}
                className="w-full h-full"
              >
                <Marker position={templePosition} title={t(templeInfo.nameEn, templeInfo.nameTe)} />
              </Map>
            </APIProvider>
          </Card>
        </div>

        <div className="md:col-span-1 space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-headline text-accent">
                <MapPin className="w-5 h-5" /> {t('Our Address', 'మా చిరునామా')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80">
              <p>{t(templeInfo.contact.addressEn, templeInfo.contact.addressTe)}</p>
                <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${templePosition.lat},${templePosition.lng}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-primary hover:text-accent"
                >
                    {t('Get Directions on Google Maps', 'Google Maps లో మార్గదర్శకాలు పొందండి')}
                </a>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-headline text-accent">
                <Phone className="w-5 h-5" /> {t('Phone', 'ఫోన్')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80">
              <a href={`tel:${templeInfo.contact.phone}`} className="hover:text-primary">{templeInfo.contact.phone}</a>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-headline text-accent">
                <Mail className="w-5 h-5" /> {t('Email', 'ఇమెయిల్')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80">
              <a href={`mailto:${templeInfo.contact.email}`} className="hover:text-primary">{templeInfo.contact.email}</a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
