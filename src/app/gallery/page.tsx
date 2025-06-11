
'use client';
import ImageCard from '@/components/gallery/image-card';
import VideoCard from '@/components/gallery/video-card';
import { galleryImages, galleryVideos, templeInfo } from '@/lib/data';
import type { GalleryItem } from '@/lib/types';
import { useLanguage } from '@/contexts/language-context';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image as ImageIcon, Video } from 'lucide-react';

export default function GalleryPage() {
  const { t } = useLanguage();

  return (
    <div className="container py-12 md:py-16 animate-fade-in">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
          {t('Temple Gallery', 'ఆలయ చిత్రమాలిక')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t(`Explore beautiful moments, divine art, and serene views from ${templeInfo.nameEn}.`, `${templeInfo.nameTe} నుండి అందమైన క్షణాలు, దైవిక కళ మరియు ప్రశాంతమైన దృశ్యాలను అన్వేషించండి.`)}
        </p>
      </header>

      <Tabs defaultValue="images" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto mb-8">
          <TabsTrigger value="images">
            <ImageIcon className="w-4 h-4 mr-2" />
            {t('Images', 'చిత్రాలు')}
          </TabsTrigger>
          <TabsTrigger value="videos">
            <Video className="w-4 h-4 mr-2" />
            {t('Videos', 'వీడియోలు')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="images">
          {galleryImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages.map((item: GalleryItem) => (
                <ImageCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">{t('No images available in the gallery yet.', 'చిత్రమాలికలో ఇంకా చిత్రాలు అందుబాటులో లేవు.')}</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="videos">
          {galleryVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryVideos.map((item: GalleryItem) => (
                <VideoCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <Video className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">{t('No videos available in the gallery yet.', 'చిత్రమాలికలో ఇంకా వీడియోలు అందుబాటులో లేవు.')}</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
