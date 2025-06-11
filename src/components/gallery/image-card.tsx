
'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import type { GalleryItem } from '@/lib/types';
import { useLanguage } from '@/contexts/language-context';
import { Expand } from 'lucide-react';

interface ImageCardProps {
  item: GalleryItem;
}

export default function ImageCard({ item }: ImageCardProps) {
  const { t } = useLanguage();
  const altText = t(item.altEn || 'Gallery Image', item.altTe || 'చిత్రమాలిక చిత్రం');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group relative overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
          <Image
            src={item.src}
            alt={altText}
            data-ai-hint={item.hint || "temple photo"}
            width={400}
            height={300}
            className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Expand className="w-10 h-10 text-white" />
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-3xl p-0">
        <DialogTitle className="sr-only">{altText}</DialogTitle>
        <Image
          src={item.src}
          alt={altText}
          data-ai-hint={item.hint || "temple photo"}
          width={1200}
          height={900}
          className="object-contain w-full h-auto rounded-lg"
        />
      </DialogContent>
    </Dialog>
  );
}
