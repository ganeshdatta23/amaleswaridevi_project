export interface NewsItem {
  id: string;
  titleEn: string;
  titleTe: string;
  date: string;
  summaryEn: string;
  summaryTe: string;
  imageUrl?: string;
  imageHint?: string;
}

export interface EventItem {
  id: string;
  titleEn: string;
  titleTe: string;
  date: string;
  time: string;
  descriptionEn: string;
  descriptionTe: string;
  imageUrl?: string;
  imageHint?: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  altEn?: string; // For images
  altTe?: string; // For images
  titleEn?: string; // For videos
  titleTe?: string; // For videos
  hint?: string;
}
