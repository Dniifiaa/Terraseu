import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { Destination } from '../../types';

interface WisataSectionProps {
  destinations?: Destination[];
  isLoading?: boolean;
  onSelectDestination: (dest: Destination) => void;
}

export const WisataSection: React.FC<WisataSectionProps> = ({
  destinations = [],
  isLoading = false,
  onSelectDestination,
}) => {
  const { language, t } = useLanguage();

  // Dynamic filtering from database CRUD destinations
  const dynamicHits = destinations.filter(d =>
    (d.is_featured || d.rating >= 4.8) &&
    d.category_slug !== 'wisata-kuliner' &&
    d.category_slug !== 'akomodasi' &&
    d.category_id !== 1 &&
    d.category_id !== 7
  );
  const dynamicKuliner = destinations.filter(d => d.category_slug === 'wisata-kuliner' || d.category_id === 1);
  const dynamicAkomodasi = destinations.filter(d => d.category_slug === 'akomodasi' || d.category_id === 7 || d.slug?.includes('hotel') || d.slug?.includes('homestay') || d.location?.toLowerCase().includes('resort') || d.location?.toLowerCase().includes('hotel'));

  // Fallback data if database list is small
  const defaultHits = [
    {
      id: 101,
      category_id: 2,
      category_slug: 'wisata-alam',
      name: 'HeHa Sky View',
      slug: 'heha-sky-view',
      location: 'Patuk, Gunung Kidul',
      description: {
        ID: 'Tempat ini menawarkan kombinasi restoran bertingkat, spot foto modern, dan pemandangan panorama kota Jogja.',
        EN: 'This spot offers a multi-level restaurant, modern photo spots, and panoramic city view of Yogyakarta.'
      },
      image: '/images/heha-sky-view.jpg',
      rating: 4.9,
      is_featured: true,
      is_active: true,
      order: 1
    },
    {
      id: 102,
      category_id: 2,
      category_slug: 'wisata-alam',
      name: 'Tebing Breksi',
      slug: 'tebing-breksi',
      location: 'Sleman / Gunung Kidul',
      description: {
        ID: 'Kawasan bekas penambangan batu alam yang disulap menjadi tempat wisata pahatan seni tebing megah.',
        EN: 'Former natural stone mining area transformed into a tourist destination with grand cliff art carvings.'
      },
      image: '/images/tebing-breksi.jpg',
      rating: 4.8,
      is_featured: true,
      is_active: true,
      order: 2
    },
    {
      id: 103,
      category_id: 2,
      category_slug: 'wisata-alam',
      name: 'Goa Jomblang',
      slug: 'goa-jomblang',
      location: 'Semanu, Gunung Kidul',
      description: {
        ID: 'Goa vertikal purba dengan fenomena sinar matahari spektakuler yang dijuluki "Cahaya Surga".',
        EN: 'Ancient vertical cave featuring a spectacular sunlight beam phenomenon known as the "Light of Heaven".'
      },
      image: '/images/goa-jomblang.jpg',
      rating: 5.0,
      is_featured: true,
      is_active: true,
      order: 3
    }
  ];

  const defaultKuliner = [
    {
      id: 201,
      category_id: 1,
      category_slug: 'wisata-kuliner',
      name: 'Gatot & Tiwul Yu Tum',
      slug: 'gatot-tiwul-yu-tum',
      location: 'Wonosari, Gunung Kidul',
      description: {
        ID: 'Kuliner tradisional khas Gunung Kidul terbuat dari olahan singkong bertekstur kenyal manis gurih disajikan dengan kelapa parut.',
        EN: 'Traditional Gunung Kidul culinary specialty made from processed cassava served warm with grated coconut.'
      },
      image: '/images/gatot-tiwul.jpg',
      rating: 4.8,
      is_featured: false,
      is_active: true,
      order: 1
    },
    {
      id: 202,
      category_id: 1,
      category_slug: 'wisata-kuliner',
      name: 'Bakmi Jawa Piyungan',
      slug: 'bakmi-jawa-piyungan',
      location: 'Gunung Kidul',
      description: {
        ID: 'Mie godhog atau goreng yang dimasak di atas tungku arang tradisional dengan aroma smoky khas.',
        EN: 'Authentic Javanese noodles cooked over traditional charcoal stove with a distinctive smoky aroma.'
      },
      image: '/images/bakmi-jawa.jpg',
      rating: 4.7,
      is_featured: false,
      is_active: true,
      order: 2
    },
    {
      id: 203,
      category_id: 1,
      category_slug: 'wisata-kuliner',
      name: 'Walang Goreng Gurih',
      slug: 'walang-goreng',
      location: 'Semanu, Gunung Kidul',
      description: {
        ID: 'Camilan ekstrim khas Gunung Kidul dari belalang kayu yang digoreng renyah kaya protein.',
        EN: 'Traditional crispy fried grasshopper snack unique to Gunung Kidul, rich in protein.'
      },
      image: '/images/walang-goreng.jpg',
      rating: 4.6,
      is_featured: false,
      is_active: true,
      order: 3
    }
  ];

  const defaultAkomodasi = [
    {
      id: 301,
      category_id: 7,
      category_slug: 'akomodasi',
      name: 'Santika Resort & Spa Gunung Kidul',
      slug: 'santika-resort',
      location: 'Wonosari, Gunung Kidul',
      description: {
        ID: 'Resort berbintang dengan fasilitas kolam renang dan pemandangan perbukitan hijau pegunungan karst.',
        EN: 'Star resort featuring swimming pool facilities and green karst mountain views.'
      },
      image: '/images/santika-resort.jpg',
      rating: 4.9,
      is_featured: false,
      is_active: true,
      order: 1
    },
    {
      id: 302,
      category_id: 7,
      category_slug: 'akomodasi',
      name: 'Queen of the South Beach Resort',
      slug: 'queen-of-the-south',
      location: 'Parangtritis / Purwosari',
      description: {
        ID: 'Resort mewah tepi tebing pantai dengan pemandangan Samudra Hindia langsung dari infinity pool.',
        EN: 'Cliffside luxury beach resort with Indian Ocean oceanfront views directly from infinity pool.'
      },
      image: '/images/queen-of-the-south.jpg',
      rating: 4.8,
      is_featured: false,
      is_active: true,
      order: 2
    },
    {
      id: 303,
      category_id: 7,
      category_slug: 'akomodasi',
      name: 'Nglanggeran Eco Homestay',
      slug: 'nglanggeran-homestay',
      location: 'Patuk, Gunung Kidul',
      description: {
        ID: 'Penginapan ramah lingkungan khas rumah warga lokal berlatarkan panorama Gunung Api Purba.',
        EN: 'Eco-friendly homestay experience hosted by locals set against Ancient Volcano views.'
      },
      image: '/images/nglanggeran-homestay.jpg',
      rating: 4.8,
      is_featured: false,
      is_active: true,
      order: 3
    }
  ];

  const destinasiHitsList = dynamicHits.length > 0 ? dynamicHits : defaultHits;
  const kulinerKhasList = dynamicKuliner.length > 0 ? dynamicKuliner : defaultKuliner;
  const akomodasiDisplayList = dynamicAkomodasi.length > 0 ? dynamicAkomodasi : defaultAkomodasi;

  const renderSkeletonGrid = (count: number = 3) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col justify-between animate-pulse"
        >
          <div className="h-48 bg-slate-200" />
          <div className="p-5 space-y-3">
            <div className="h-5 bg-slate-200 rounded-md w-2/3" />
            <div className="h-3 bg-slate-200 rounded-md w-full" />
            <div className="h-3 bg-slate-200 rounded-md w-4/5" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="wisata-section" className="py-16 bg-white text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Wisata Banner Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl h-64 sm:h-80 flex items-center justify-center p-6 border border-slate-200"
        >
          <img
            src="/images/goa-jomblang.jpg"
            alt={t.wisata.bannerTitle}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80';
            }}
            className="absolute inset-0 w-full h-full object-cover filter brightness-65 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="relative z-10 text-center space-y-2 max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md">
              {t.wisata.bannerTitle}
            </h2>
          </div>
        </motion.div>

        {/* 2. Destinasi Wisata Hits (Rekomendasi) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0c1947]">
              {t.wisata.hitsTitle}
            </h3>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              {t.wisata.hitsSub}
            </p>
          </div>

          {isLoading ? (
            renderSkeletonGrid(5)
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {destinasiHitsList.map((item, idx) => {
                const localizedDesc = typeof item.description === 'object' ? (item.description[language] || item.description.ID) : item.description;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelectDestination(item)}
                    className="cursor-pointer bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-2xl overflow-hidden flex flex-col justify-between transition-all"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80';
                        }}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-amber-600 font-black text-xs px-2.5 py-1 rounded-full flex items-center space-x-1 shadow-xs">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span>{(item.rating || 5.0).toFixed(1)}</span>
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <h4 className="text-lg font-black text-[#0c1947]">{item.name}</h4>
                      <p className="text-xs font-semibold text-slate-600 leading-relaxed line-clamp-3">
                        {localizedDesc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* 3. Kuliner Khas (Rekomendasi Cita Rasa Lokal) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="space-y-8 pt-8 border-t border-slate-100"
        >
          <div className="text-center space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0c1947]">
              {t.wisata.kulinerTitle}
            </h3>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              {t.wisata.kulinerSub}
            </p>
          </div>

          {isLoading ? (
            renderSkeletonGrid(3)
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {kulinerKhasList.map((item, idx) => {
                const localizedDesc = typeof item.description === 'object' ? (item.description[language] || item.description.ID) : item.description;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelectDestination(item)}
                    className="cursor-pointer bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-2xl overflow-hidden flex flex-col justify-between transition-all"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80';
                        }}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-amber-600 font-black text-xs px-2.5 py-1 rounded-full flex items-center space-x-1 shadow-xs">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span>{(item.rating || 4.8).toFixed(1)}</span>
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <h4 className="text-lg font-black text-[#0c1947]">{item.name}</h4>
                      <p className="text-xs font-semibold text-slate-600 leading-relaxed line-clamp-3">
                        {localizedDesc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* 4. Akomodasi (Rekomendasi Fasilitas Bagus & Nyaman) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="space-y-8 pt-8 border-t border-slate-100"
        >
          <div className="text-center space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0c1947]">
              {t.wisata.akomodasiTitle}
            </h3>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              {t.wisata.akomodasiSub}
            </p>
          </div>

          {isLoading ? (
            renderSkeletonGrid(3)
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {akomodasiDisplayList.map((item, idx) => {
                const localizedDesc = typeof item.description === 'object' ? (item.description[language] || item.description.ID) : item.description;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelectDestination(item)}
                    className="cursor-pointer bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-2xl overflow-hidden flex flex-col justify-between transition-all"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80';
                        }}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-amber-600 font-black text-xs px-2.5 py-1 rounded-full flex items-center space-x-1 shadow-xs">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span>{(item.rating || 4.8).toFixed(1)}</span>
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <h4 className="text-lg font-black text-[#0c1947]">{item.name}</h4>
                      <p className="text-xs font-semibold text-slate-600 leading-relaxed line-clamp-3">
                        {localizedDesc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
};
