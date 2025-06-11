'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { GalleryItem } from '@/lib/types';
import { useLanguage } from '@/contexts/language-context';
import { Youtube } from 'lucide-react';

interface VideoCardProps {
  item: GalleryItem;
}

export default function VideoCard({ item }: VideoCardProps) {
  const { t } = useLanguage();
  const titleText = t(item.titleEn || 'Gallery Video', item.titleTe || 'చిత్రమాలిక వీడియో');

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-lg font-headline text-primary flex items-center gap-2">
          <Youtube className="w-5 h-5" /> {titleText}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={item.src}
            title={titleText}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-md"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
}
