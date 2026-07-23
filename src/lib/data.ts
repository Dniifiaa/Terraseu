import { Category, Destination, EmergencyContact, HeroConfig } from '../types';

export const initialCategories: Category[] = [
  {
    id: 1,
    name: {
      ID: 'Wisata Kuliner',
      EN: 'Culinary Tourism'
    },
    slug: 'wisata-kuliner',
    icon: 'utensils',
    is_active: true,
    order: 1
  },
  {
    id: 2,
    name: {
      ID: 'Wisata Alam',
      EN: 'Nature Tourism'
    },
    slug: 'wisata-alam',
    icon: 'mountain',
    is_active: true,
    order: 2
  },
  {
    id: 3,
    name: {
      ID: 'Jelajah Budaya',
      EN: 'Cultural Heritage'
    },
    slug: 'jelajah-budaya',
    icon: 'landmark',
    is_active: true,
    order: 3
  },
  {
    id: 4,
    name: {
      ID: 'Wisata Religi',
      EN: 'Spiritual Tourism'
    },
    slug: 'wisata-religi',
    icon: 'sun',
    is_active: true,
    order: 4
  },
  {
    id: 5,
    name: {
      ID: 'Wisata Sejarah',
      EN: 'Historical Tourism'
    },
    slug: 'wisata-sejarah',
    icon: 'history',
    is_active: true,
    order: 5
  },
  {
    id: 6,
    name: {
      ID: 'Edukasi',
      EN: 'Education & Geotourism'
    },
    slug: 'edukasi',
    icon: 'book',
    is_active: true,
    order: 6
  }
];

export const initialDestinations: Destination[] = [
  {
    id: 1,
    category_id: 2,
    category_slug: 'wisata-alam',
    name: 'Pantai Indrayanti',
    slug: 'pantai-indrayanti',
    location: 'Tepus, Gunung Kidul',
    description: {
      ID: 'Pantai pasir putih eksotis dengan air laut jernih kebiruan dan tebing karang megah, menawarkan pemandangan sunset memukau serta fasilitas restoran tepi pantai yang lengkap.',
      EN: 'An exotic white-sand beach with crystal clear turquoise water and majestic limestone cliffs, offering breathtaking sunsets and beachside dining facilities.'
    },
    rating: 4.9,
    image: '/images/pantai-indrayanti.jpg',
    is_featured: true,
    is_active: true,
    order: 1
  },
  {
    id: 2,
    category_id: 2,
    category_slug: 'wisata-alam',
    name: 'Goa Jomblang',
    slug: 'goa-jomblang',
    location: 'Semanu, Gunung Kidul',
    description: {
      ID: 'Goa vertikal spektakuler terkenal dengan "Cahaya Surga" (Ray of Light) yang menembus atap goa, dikelilingi hutan purba yang sangat alami.',
      EN: 'A spectacular vertical cave renowned for its heavenly "Ray of Light" piercing through the collapsed roof, surrounded by ancient pristine forest.'
    },
    rating: 5.0,
    image: '/images/goa-jomblang.jpg',
    is_featured: true,
    is_active: true,
    order: 2
  },
  {
    id: 3,
    category_id: 2,
    category_slug: 'wisata-alam',
    name: 'Air Terjun Sri Gethuk',
    slug: 'air-terjun-sri-gethuk',
    location: 'Playen, Gunung Kidul',
    description: {
      ID: 'Air terjun unik yang terus mengalir melintasi batuan tebing mengapit Sungai Oya yang hijau tenang. Petualangan menyusuri sungai dengan rakit perahu kayu.',
      EN: 'A unique waterfall cascading over limestone cliffs along the calm emerald Oya River. Accessible via a scenic wooden raft boat ride.'
    },
    rating: 4.8,
    image: '/images/tebing-breksi.jpg',
    is_featured: true,
    is_active: true,
    order: 3
  },
  {
    id: 4,
    category_id: 1,
    category_slug: 'wisata-kuliner',
    name: 'Gatot & Tiwul Yu Tum',
    slug: 'gatot-tiwul-yu-tum',
    location: 'Wonosari, Gunung Kidul',
    description: {
      ID: 'Kuliner tradisional khas Gunung Kidul terbuat dari olahan singkong bertekstur kenyal manis gurih, disajikan hangat dengan taburan kelapa parut segar.',
      EN: 'Traditional Gunung Kidul culinary specialty made from processed cassava with a sweet, chewy texture, served warm with freshly grated coconut.'
    },
    rating: 4.8,
    image: '/images/gatot-tiwul.jpg',
    is_featured: false,
    is_active: true,
    order: 4
  },
  {
    id: 5,
    category_id: 3,
    category_slug: 'jelajah-budaya',
    name: 'Desa Wisata Nglanggeran',
    slug: 'desa-wisata-nglanggeran',
    location: 'Patuk, Gunung Kidul',
    description: {
      ID: 'Desa wisata terbaik dunia versi UNWTO yang menyajikan keindahan Gunung Api Purba, kebudayaan lokal, dan kerajinan kakao cokelat organik.',
      EN: 'UNWTO Best Tourism Village featuring ancient volcanic rock mountains, vibrant cultural heritage, and local organic cacao chocolate production.'
    },
    rating: 4.9,
    image: '/images/nglanggeran-homestay.jpg',
    is_featured: true,
    is_active: true,
    order: 5
  },
  {
    id: 6,
    category_id: 6,
    category_slug: 'edukasi',
    name: 'Geosite Gunung Sewu',
    slug: 'geosite-gunung-sewu',
    location: 'Karangmojo, Gunung Kidul',
    description: {
      ID: 'Kawasan UNESCO Global Geopark dengan bentang alam karst terluas di Jawa, ideal untuk kegiatan edukasi geologi, penelitian, dan konservasi alam.',
      EN: 'A UNESCO Global Geopark region featuring Java\'s largest karst landscape, ideal for geological educational trips, research, and environmental conservation.'
    },
    rating: 4.9,
    image: '/images/tugu-gunungkidul.jpg',
    is_featured: false,
    is_active: true,
    order: 6
  }
];

export const initialEmergencyContacts: EmergencyContact[] = [
  {
    id: 1,
    title: {
      ID: 'Layanan Bantuan Darurat Medis & Ambulance RSUD Wonosari',
      EN: 'Medical & Ambulance Emergency Service RSUD Wonosari'
    },
    description: {
      ID: 'Unit Gawat Darurat (UGD) siap tanggap 24 jam untuk kondisi medis darurat wisatawan di wilayah Gunung Kidul.',
      EN: '24-hour Emergency Medical Unit (ER) ready for urgent tourist medical conditions in Gunung Kidul.'
    },
    phone_number: '119 / (0274) 391288',
    button_text: {
      ID: 'Hubungi UGD',
      EN: 'Call Emergency Unit'
    },
    is_active: true
  },
  {
    id: 2,
    title: {
      ID: 'Tim Posko SAR Pantai & Penyelamatan Laut Gunung Kidul',
      EN: 'Coastal SAR & Sea Rescue Patrol Gunung Kidul'
    },
    description: {
      ID: 'Tim SAR Pantai Wilayah I & II siap siaga mengamankan aktivitas keselamatan laut wisatawan.',
      EN: 'Coastal SAR Team Region I & II standing by for marine safety and sea tourist rescue.'
    },
    phone_number: '(0274) 391110 / 0812-2700-110',
    button_text: {
      ID: 'Hubungi Posko SAR',
      EN: 'Call SAR Post'
    },
    is_active: true
  },
  {
    id: 3,
    title: {
      ID: 'Polres Gunung Kidul & Layanan Informasi Keamanan',
      EN: 'Gunung Kidul Police Station & Tourist Safety Services'
    },
    description: {
      ID: 'Layanan kepolisian dan keamanan pengawalan wisata serta tanggap darurat gangguan lalu lintas.',
      EN: 'Police security services, tourist escorts, and traffic emergency response.'
    },
    phone_number: '110 / (0274) 391115',
    button_text: {
      ID: 'Hubungi Polres',
      EN: 'Call Police'
    },
    is_active: true
  }
];

export const initialHeroConfig: HeroConfig = {
  title1: 'TERRASEU',
  title2: 'DISCOVER THE HEART OF Gunung Kidul',
  subtitle: {
    ID: 'Jelajahi keajaiban ekowisata karst, pantai pasir putih eksotis, dan warisan kebudayaan yang memikat di Gunung Kidul, Yogyakarta.',
    EN: 'Explore the wonders of karst ecotourism, exotic white-sand beaches, and captivating cultural heritage in Gunung Kidul, Yogyakarta.'
  },
  background_images: [
    '/images/pantai-indrayanti.jpg',
    '/images/heha-sky-view.jpg',
    '/images/goa-jomblang.jpg'
  ],
  is_active: true
};
