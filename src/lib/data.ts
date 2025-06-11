import type { EventItem, GalleryItem, NewsItem } from './types';

export const newsItems: NewsItem[] = [
  {
    id: '1',
    titleEn: 'Temple Reopens with New Timings',
    titleTe: 'కొత్త సమయాలతో ఆలయం పునఃప్రారంభం',
    date: '2024-07-15',
    summaryEn: 'Amaleswari Temple is pleased to announce new darshan timings effective from August 1st.',
    summaryTe: 'ఆగస్టు 1 నుండి అమలేశ్వరి ఆలయం కొత్త దర్శన సమయాలను ప్రకటించింది.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'temple entrance',
  },
  {
    id: '2',
    titleEn: 'Special Puja for Upcoming Festival',
    titleTe: 'రాబోయే పండుగకు ప్రత్యేక పూజ',
    date: '2024-07-20',
    summaryEn: 'Join us for a special puja ceremony in preparation for the grand annual festival.',
    summaryTe: 'సంవత్సరపు ఉత్సవానికి సన్నాహకంగా ప్రత్యేక పూజా కార్యక్రమంలో పాల్గొనండి.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'puja ceremony',
  },
];

export const eventItems: EventItem[] = [
  {
    id: 'evt1',
    titleEn: 'Annual Brahmotsavam',
    titleTe: 'వార్షిక బ్రహ్మోత్సవాలు',
    date: '2024-09-10',
    time: '6:00 AM - 9:00 PM',
    descriptionEn: 'The grand annual Brahmotsavam celebrations, featuring various rituals and processions.',
    descriptionTe: 'వివిధ ఆచారాలు మరియు ఊరేగింపులతో కూడిన గొప్ప వార్షిక బ్రహ్మోత్సవ వేడుకలు.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'temple festival',
  },
  {
    id: 'evt2',
    titleEn: 'Sri Krishna Janmashtami',
    titleTe: 'శ్రీ కృష్ణ జన్మాష్టమి',
    date: '2024-08-26',
    time: '5:00 PM onwards',
    descriptionEn: 'Celebrate the birth of Lord Krishna with special bhajans, pujas, and cultural programs.',
    descriptionTe: 'శ్రీ కృష్ణుని జన్మదినోత్సవాన్ని ప్రత్యేక భజనలు, పూజలు మరియు సాంస్కృతిక కార్యక్రమాలతో జరుపుకోండి.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'krishna celebration',
  },
];

export const galleryImages: GalleryItem[] = [
  { id: 'img1', type: 'image', src: 'https://placehold.co/800x600.png', altEn: 'Temple Gopuram', altTe: 'ఆలయ గోపురం', hint: 'temple architecture' },
  { id: 'img2', type: 'image', src: 'https://placehold.co/800x600.png', altEn: 'Deity Alankaram', altTe: 'దేవతా అలంకారం', hint: 'deity shrine' },
  { id: 'img3', type: 'image', src: 'https://placehold.co/800x600.png', altEn: 'Festival Procession', altTe: 'పండుగ ఊరేగింపు', hint: 'festival crowd' },
  { id: 'img4', type: 'image', src: 'https://placehold.co/800x600.png', altEn: 'Temple Pond', altTe: 'ఆలయ కోనేరు', hint: 'temple water' },
];

export const galleryVideos: GalleryItem[] = [
  { id: 'vid1', type: 'video', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', titleEn: 'Temple Documentary Short', titleTe: 'ఆలయ డాక్యుమెంటరీ', hint: 'temple video' },
  { id: 'vid2', type: 'video', src: 'https://www.youtube.com/embed/rokGy0huYEA', titleEn: 'Annual Festival Highlights', titleTe: 'వార్షిక పండుగ ముఖ్యాంశాలు', hint: 'festival highlights' },
];

export const templeInfo = {
  historyEn: "Amaleswari Temple, nestled in a serene environment, has a rich history dating back centuries. It stands as a beacon of spiritual solace and cultural heritage, attracting devotees from far and wide. The temple architecture is a marvel, reflecting traditional craftsmanship and devotion.",
  historyTe: "ప్రశాంతమైన వాతావరణంలో నెలకొన్న అమలేశ్వరి ఆలయం శతాబ్దాల నాటి గొప్ప చరిత్రను కలిగి ఉంది. ఇది ఆధ్యాత్మిక సాంత్వన మరియు సాంస్కృతిక వారసత్వానికి ప్రతీకగా నిలుస్తుంది, సుదూర ప్రాంతాల నుండి భక్తులను ఆకర్షిస్తుంది. ఆలయ నిర్మాణం ఒక అద్భుతం, ఇది సాంప్రదాయ హస్తకళ మరియు భక్తిని ప్రతిబింబిస్తుంది.",
  missionEn: "Our mission is to preserve and promote Sanatana Dharma, provide a peaceful place for worship, and engage in charitable activities for the welfare of the community.",
  missionTe: "సనాతన ధర్మాన్ని పరిరక్షించడం మరియు ప్రచారం చేయడం, ఆరాధన కోసం ప్రశాంతమైన స్థలాన్ని అందించడం మరియు సమాజ సంక్షేమం కోసం ధార్మిక కార్యక్రమాలలో పాల్గొనడం మా లక్ష్యం.",
  timingsEn: "Morning: 6:00 AM - 12:00 PM\nEvening: 4:00 PM - 8:00 PM\nSpecial puja timings may vary.",
  timingsTe: "ఉదయం: 6:00 AM - 12:00 PM\nసాయంత్రం: 4:00 PM - 8:00 PM\nప్రత్యేక పూజ సమయాలు మారవచ్చు.",
  contact: {
    addressEn: "Amaleswari Temple, Temple Street, Serene Town, AP 500001",
    addressTe: "అమలేశ్వరి ఆలయం, ఆలయ వీధి, ప్రశాంత నగరం, AP 500001",
    phone: "+91 12345 67890",
    email: "info@amaleswaritemple.org",
  }
};

export const seasons = [
  { value: 'Spring', labelEn: 'Spring', labelTe: 'వసంతకాలం' },
  { value: 'Summer', labelEn: 'Summer', labelTe: 'వేసవికాలం' },
  { value: 'Autumn', labelEn: 'Autumn', labelTe: 'శరదృతువు' },
  { value: 'Winter', labelEn: 'Winter', labelTe: 'శీతాకాలం' },
];
