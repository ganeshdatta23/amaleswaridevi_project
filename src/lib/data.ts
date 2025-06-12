
import type { EventItem, GalleryItem, NewsItem, PujaItem, TrustMember } from './types';

export const newsItems: NewsItem[] = [
  {
    id: 'annual_celebrations_2025',
    titleEn: 'Sri Vijaya Amaleswari Devi Annual Celebrations 2025',
    titleTe: 'శ్రీ విజయ అమలేశ్వరి దేవి వార్షిక వేడుకలు 2025',
    date: '22-May-2025 to 31-May-2025',
    summaryEn: 'The annual celebrations of Sri Vijaya Amaleswari Devi will be held from May 22nd to May 31st, 2025. A special Annadanam (free food distribution) will take place on May 27th, 2025, around 1:00 PM. Devotees are requested to contribute generously. Details on the Donate page.',
    summaryTe: 'శ్రీ విజయ అమలేశ్వరి దేవి వార్షిక వేడుకలు 22-మే-2025 నుండి 31-మే-2025 వరకు జరుగుతాయి. 27-మే-2025న మధ్యాహ్నం 1:00 గంటలకు ప్రత్యేక అన్నదానం జరుగుతుంది. భక్తులు ఉదారంగా విరాళాలు అందించాలని కోరడమైనది. మరిన్ని వివరాలు విరాళాల పేజీలో.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'temple festival celebration',
  },
  {
    id: '1',
    titleEn: 'Temple Reopens with New Timings',
    titleTe: 'కొత్త సమయాలతో ఆలయం పునఃప్రారంభం',
    date: '2024-07-15',
    summaryEn: 'Sri Vijaya Amaleswari Devi Temple is pleased to announce new darshan timings effective from August 1st.',
    summaryTe: 'ఆగస్టు 1 నుండి శ్రీ విజయ అమలేశ్వరి దేవి ఆలయం కొత్త దర్శన సమయాలను ప్రకటించింది.',
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
    id: 'evt_annual_celebrations_2025',
    titleEn: 'Annual Celebrations 2025 & Annadanam',
    titleTe: 'వార్షిక వేడుకలు 2025 & అన్నదానం',
    date: '22-May-2025 to 31-May-2025 (Annadanam on 27-May-2025)',
    time: 'Annadanam around 1:00 PM on May 27th',
    descriptionEn: 'Grand annual celebrations of Sri Vijaya Amaleswari Devi, featuring special pujas, rituals, and a mass Annadanam (free food distribution) on Tuesday, May 27th, 2025, around 1:00 PM, organized by the Family Trust with community participation. All are invited.',
    descriptionTe: 'శ్రీ విజయ అమలేశ్వరి దేవి వార్షిక వేడుకలు. ప్రత్యేక పూజలు, ఆచారాలు, మరియు మే 27, 2025, మంగళవారం మధ్యాహ్నం 1:00 గంటలకు కుటుంబ ట్రస్ట్ మరియు సమాజ భాగస్వామ్యంతో భారీ అన్నదానం నిర్వహించబడుతుంది. అందరూ ఆహ్వానితులే.',
    imageUrl: 'https://images.unsplash.com/photo-1605764803170-c20b43be4d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8ZGl3YWxpfGVufDB8fHx8MTc0OTY5NTI3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'annual festival Annadanam',
  },
  {
    id: 'evt_friday_bhajans',
    titleEn: 'Weekly Friday Ammavari Bhajans',
    titleTe: 'వారపు శుక్రవారం అమ్మవారి భజనలు',
    date: 'Every Friday',
    time: 'Evening (Confirm timings)',
    descriptionEn: 'Join us every Friday for soulful Ammavari Bhajans and devotional singing.',
    descriptionTe: 'ప్రతి శుక్రవారం సాయంత్రం అమ్మవారి భజనలు మరియు భక్తి గానాలలో పాల్గొనండి.',
    imageUrl: 'https://images.unsplash.com/photo-1568219656418-15c329312bf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxiaGFqYW5zfGVufDB8fHx8MTc0OTY5NTE2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'bhajans devotional singing',
  },
  {
    id: 'evt_dasara',
    titleEn: 'Annual Dasara Navaratri Utsavalu',
    titleTe: 'వార్షిక దసరా నవరాత్రి ఉత్సవాలు',
    date: 'Yearly (As per Almanac)',
    time: '9 Days Program',
    descriptionEn: 'Grand 9-day Dasara celebrations with special pujas, alankarams, and cultural events.',
    descriptionTe: 'ప్రత్యేక పూజలు, అలంకారాలు మరియు సాంస్కృతిక కార్యక్రమాలతో 9 రోజుల దసరా ఉత్సవాలు.',
    imageUrl: 'https://images.unsplash.com/photo-1728987714138-ae74afac1862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxkYXNhcmF8ZW58MHx8fHwxNzQ5Njk1MzI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'dasara festival navaratri',
  },
  {
    id: 'evt_sambaralu',
    titleEn: 'Sambaralu (Once in 11 Years)',
    titleTe: 'సంబరాలు (11 సంవత్సరాలకు ఒకసారి)',
    date: 'Once every 11 Years',
    time: '11 Days Event',
    descriptionEn: 'A grand 11-day mega event, Sambaralu, celebrated with unique rituals and festivities once every eleven years.',
    descriptionTe: 'ప్రతి పదకొండు సంవత్సరాలకు ఒకసారి ప్రత్యేక ఆచారాలు మరియు ఉత్సవాలతో జరుపుకునే 11 రోజుల మెగా ఈవెంట్ సంబరాలు.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'temple grand event',
  },
  {
    id: 'evt1',
    titleEn: 'Annual Brahmotsavam',
    titleTe: 'వార్షిక బ్రహ్మోత్సవాలు',
    date: '2024-09-10 (Example Date)',
    time: '6:00 AM - 9:00 PM',
    descriptionEn: 'The grand annual Brahmotsavam celebrations, featuring various rituals and processions.',
    descriptionTe: 'వివిధ ఆచారాలు మరియు ఊరేగింపులతో కూడిన గొప్ప వార్షిక బ్రహ్మోత్సవ వేడుకలు.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'temple festival',
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
  nameEn: "Sri Vijaya Amaleswari Devi Temple",
  nameTe: "శ్రీ విజయ అమలేశ్వరి దేవి ఆలయం",
  historyEn: "Sri Vijaya Amaleswari Devi Temple, nestled in a serene environment, has a rich history dating back centuries. It stands as a beacon of spiritual solace and cultural heritage, attracting devotees from far and wide. The temple architecture is a marvel, reflecting traditional craftsmanship and devotion.",
  historyTe: "ప్రశాంతమైన వాతావరణంలో నెలకొన్న శ్రీ విజయ అమలేశ్వరి దేవి ఆలయం శతాబ్దాల నాటి గొప్ప చరిత్రను కలిగి ఉంది. ఇది ఆధ్యాత్మిక సాంత్వన మరియు సాంస్కృతిక వారసత్వానికి ప్రతీకగా నిలుస్తుంది, సుదూర ప్రాంతాల నుండి భక్తులను ఆకర్షిస్తుంది. ఆలయ నిర్మాణం ఒక అద్భుతం, ఇది సాంప్రదాయ హస్తకళ మరియు భక్తిని ప్రతిబింబిస్తుంది.",
  missionEn: "Our mission is to preserve and promote Sanatana Dharma, provide a peaceful place for worship, and engage in charitable activities for the welfare of the community.",
  missionTe: "సనాతన ధర్మాన్ని పరిరక్షించడం మరియు ప్రచారం చేయడం, ఆరాధన కోసం ప్రశాంతమైన స్థలాన్ని అందించడం మరియు సమాజ సంక్షేమం కోసం ధార్మిక కార్యక్రమాలలో పాల్గొనడం మా లక్ష్యం.",
  timingsEn: "Morning: 6:00 AM - 12:00 PM\nEvening: 4:00 PM - 8:00 PM\nSpecial puja timings may vary.",
  timingsTe: "ఉదయం: 6:00 AM - 12:00 PM\nసాయంత్రం: 4:00 PM - 8:00 PM\nప్రత్యేక పూజ సమయాలు మారవచ్చు.",
  contact: {
    addressEn: "Davojipalem Village, Pedana, Andhra Pradesh 521366",
    addressTe: "దావోజీపాలెం గ్రామము, పెడన, ఆంధ్ర ప్రదేశ్ 521366",
    phone: "+91 9951691474",
    email: "amaleswaridevifamilytrust@gmail.com",
  }
};

export const pujaItems: PujaItem[] = [
  { id: 'puja1', nameEn: 'Archana', nameTe: 'అర్చన', descriptionEn: 'Offering of flowers and chanting of deity names.', descriptionTe: 'పుష్పాలు మరియు దేవతా నామాల జపంతో సమర్పణ.', price: '₹51' },
  { id: 'puja2', nameEn: 'Abhishekam', nameTe: 'అభిషేకం', descriptionEn: 'Ritual bathing of the deity with sacred liquids.', descriptionTe: 'పవిత్ర ద్రవాలతో దేవతామూర్తికి ఆచార స్నానం.', price: '₹251' },
  { id: 'puja3', nameEn: 'Kumkumarchana', nameTe: 'కుంకుమార్చన', descriptionEn: 'Archana performed with Kumkum.', descriptionTe: 'కుంకుమతో చేసే అర్చన.', price: '₹101' },
  { id: 'puja4', nameEn: 'Homam/Havan', nameTe: 'హోమం/హవనం', descriptionEn: 'Fire ritual for specific deities or purposes.', descriptionTe: 'నిర్దిష్ట దేవతలు లేదా ప్రయోజనాల కోసం అగ్ని ఆచారం.', price: 'Contact for details' },
];

export const trustMembers: TrustMember[] = [
  { id: 'tm1', nameEn: 'Sri. Example Name 1', nameTe: 'శ్రీ. ఉదాహరణ పేరు 1', roleEn: 'President', roleTe: 'అధ్యక్షుడు', photoUrl: 'https://placehold.co/150x150.png', imageHint: 'person portrait' },
  { id: 'tm2', nameEn: 'Smt. Example Name 2', nameTe: 'శ్రీమతి. ఉదాహరణ పేరు 2', roleEn: 'Secretary', roleTe: 'కార్యదర్శి', photoUrl: 'https://placehold.co/150x150.png', imageHint: 'person portrait' },
  { id: 'tm3', nameEn: 'Sri. Example Name 3', nameTe: 'శ్రీ. ఉదాహరణ పేరు 3', roleEn: 'Treasurer', roleTe: 'కోశాధికారి', photoUrl: 'https://placehold.co/150x150.png', imageHint: 'person portrait' },
  { id: 'tm4', nameEn: 'Smt. Example Name 4', nameTe: 'శ్రీమతి. ఉదాహరణ పేరు 4', roleEn: 'Member', roleTe: 'సభ్యుడు', photoUrl: 'https://placehold.co/150x150.png', imageHint: 'person portrait' },
];

export const donationInfo = {
  accountNameEn: "Sri Vijaya Amaleswari Devi Devasthanam Family Trust",
  accountNameTe: "శ్రీ విజయ అమలేశ్వరి దేవి దేవస్థానం ఫ్యామిలీ ట్రస్ట్",
  bankNameEn: "State Bank of India (SBI), Pamulapadu Branch",
  bankNameTe: "స్టేట్ బ్యాంక్ ఆఫ్ ఇండియా (SBI), పాములపాడు బ్రాంచ్",
  accountNumber: "62421264147",
  ifscCode: "SBIN0021823",
  branchCode: "21823",
  upiId: "62421264147@sbi",
  estimatedCostEn: "It is estimated that a minimum of ₹50,000 is required for the Annadanam and other arrangements.",
  estimatedCostTe: "అన్నదానం మరియు ఇతర ఏర్పాట్లకు కనీసం ₹50,000 అవసరమని అంచనా.",
  qrNoteEn: "A QR code for UPI payment is available on the event flyer/pamphlet for easy scan and pay. Alternatively, you can use the UPI ID provided above.",
  qrNoteTe: "సులభంగా స్కాన్ చేసి చెల్లించడానికి ఈవెంట్ ఫ్లైయర్/పాంప్లెట్‌లో UPI చెల్లింపు కోసం QR కోడ్ అందుబాటులో ఉంది. ప్రత్యామ్నాయంగా, మీరు పైన అందించిన UPI IDని ఉపయోగించవచ్చు."
};


    
