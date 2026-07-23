import React, { useState } from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

interface KatalogSectionProps {
  isLoading?: boolean;
}

export const KatalogSection: React.FC<KatalogSectionProps> = ({ isLoading = false }) => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'organisasi' | 'event'>('organisasi');

  const organisasiList = [
    {
      id: 1,
      name: 'PDDI',
      location: 'Wonosari',
      image: '/images/diskominfo.jpg',
      desc: {
        ID: 'Persatuan Donor Darah Indonesia Ranting Wonosari aktif berkontribusi sosial kemanusiaan.',
        EN: 'Indonesian Blood Donor Association Wonosari Branch actively contributing to social humanitarian activities.'
      }
    },
    {
      id: 2,
      name: 'GEMPUR',
      location: 'Trimulyo I',
      image: '/images/karang-taruna.jpg',
      desc: {
        ID: 'Gerakan Pemuda Pemudi Karang Taruna penggerak acara kebudayaan dan pemberdayaan desa.',
        EN: 'Youth organization movement driving cultural events and rural village empowerment.'
      }
    },
    {
      id: 3,
      name: 'GASSAK',
      location: 'Ledoksari',
      image: '/images/pokdarwis.jpg',
      desc: {
        ID: 'Komunitas pemuda kreatif penyedia pemandu wisata dan pelestari lingkungan ekowisata.',
        EN: 'Creative youth community providing local tour guides and ecotourism environmental preservers.'
      }
    },
    {
      id: 4,
      name: 'KPMP',
      location: 'Ledoksari',
      image: '/images/tugu-gunungkidul.jpg',
      desc: {
        ID: 'Kelompok masyarakat sadar wisata yang fokus pada pelayanan kebersihan dan kenyamanan pengunjung.',
        EN: 'Tourism-conscious community group focused on cleanliness services and visitor comfort.'
      }
    },
  ];

  const eventList = [
    {
      id: 101,
      name: 'Upacara Besar (Bersih Desa)',
      image: '/images/upacara-bersih-desa.jpg',
      desc: {
        ID: 'Ritual budaya tahunan Gunung Kidul sebagai wujud rasa syukur atas hasil bumi dan keselamatan.',
        EN: 'Annual cultural ceremony in Gunung Kidul as an expression of gratitude for harvests and safety.'
      }
    },
    {
      id: 102,
      name: 'Event Cherrypop',
      image: '/images/konser-lapangan.jpg',
      desc: {
        ID: 'Festival musik dan seni pop pemuda bergengsi yang dihadiri ribuan pecinta budaya pop.',
        EN: 'Prestigious youth music and pop art festival attended by thousands of pop culture lovers.'
      }
    },
    {
      id: 103,
      name: 'International Kite Festival',
      image: '/images/kite-festival.jpg',
      desc: {
        ID: 'Festival layang-layang internasional menghiasi langit pantai pesisir selatan Gunung Kidul.',
        EN: 'International kite festival decorating the southern coastal skies of Gunung Kidul beaches.'
      }
    },
    {
      id: 104,
      name: 'Keroncong Plesiran',
      image: '/images/event-musik.jpg',
      desc: {
        ID: 'Konser musik keroncong syahdu di alam terbuka berlatar pemandangan pegunungan karst.',
        EN: 'Serene keroncong music concert outdoors set against the backdrop of karst mountain views.'
      }
    },
  ];

  const renderSkeletonGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, idx) => (
        <div
          key={idx}
          className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col justify-between animate-pulse"
        >
          <div className="h-44 bg-slate-200" />
          <div className="p-5 space-y-3">
            <div className="h-5 bg-slate-200 rounded-md w-3/4" />
            <div className="h-3 bg-slate-200 rounded-md w-full" />
            <div className="h-3 bg-slate-200 rounded-md w-4/5" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="katalog-section" className="py-16 bg-[#faf8f5] text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner Header: Katalog Ekowisata */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl h-64 sm:h-80 flex items-center justify-center p-6 border border-slate-200"
        >
          <img
            src="/images/tugu-gunungkidul.jpg"
            alt={t.katalog.title}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80';
            }}
            className="absolute inset-0 w-full h-full object-cover filter brightness-65 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="relative z-10 text-center space-y-4 max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md">
              {t.katalog.title}
            </h2>
            <p className="text-slate-200 text-sm sm:text-base font-bold tracking-wide">
              {t.katalog.subtitle}
            </p>

            {/* Submenu Pills */}
            <div className="inline-flex items-center bg-[#8cb3ed] p-1.5 rounded-2xl shadow-lg border border-white/30 backdrop-blur-md space-x-1 sm:space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('organisasi')}
                className={`px-5 py-2 text-xs sm:text-sm font-extrabold rounded-xl transition-all ${
                  activeTab === 'organisasi'
                    ? 'bg-[#1c64ff] text-white shadow-md'
                    : 'text-[#0c1947] hover:bg-white/30'
                }`}
              >
                {t.katalog.tabOrganisasi}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('event')}
                className={`px-5 py-2 text-xs sm:text-sm font-extrabold rounded-xl transition-all ${
                  activeTab === 'event'
                    ? 'bg-[#1c64ff] text-white shadow-md'
                    : 'text-[#0c1947] hover:bg-white/30'
                }`}
              >
                {t.katalog.tabEvent}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Organisasi & Komunitas Grid */}
        {activeTab === 'organisasi' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center space-y-1">
              <h3 className="text-2xl sm:text-3xl font-black text-[#0c1947] flex items-center justify-center gap-2">
                <Users className="w-7 h-7 text-[#1c64ff]" />
                <span>{t.katalog.orgTitle}</span>
              </h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                {t.katalog.orgSub}
              </p>
            </div>

            {isLoading ? (
              renderSkeletonGrid()
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {organisasiList.map((org, idx) => {
                  const localizedDesc = org.desc[language] || org.desc.ID;
                  return (
                    <motion.div
                      key={org.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl overflow-hidden flex flex-col justify-between transition-all"
                    >
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={org.image}
                          alt={org.name}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80';
                          }}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-[#0c1947]/90 text-amber-300 px-3 py-1 rounded-full text-xs font-extrabold flex items-center space-x-1 shadow-md">
                          <MapPin className="w-3.5 h-3.5 text-amber-400" />
                          <span>{org.location}</span>
                        </div>
                      </div>

                      <div className="p-5 space-y-2">
                        <h4 className="text-lg font-black text-[#0c1947]">{org.name}</h4>
                        <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                          {localizedDesc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        )}

        {/* Event / Acara Lokal Grid */}
        {activeTab === 'event' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center space-y-1">
              <h3 className="text-2xl sm:text-3xl font-black text-[#0c1947] flex items-center justify-center gap-2">
                <Calendar className="w-7 h-7 text-[#1c64ff]" />
                <span>{t.katalog.eventTitle}</span>
              </h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                {t.katalog.eventSub}
              </p>
            </div>

            {isLoading ? (
              renderSkeletonGrid()
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {eventList.map((evt, idx) => {
                  const localizedDesc = evt.desc[language] || evt.desc.ID;
                  return (
                    <motion.div
                      key={evt.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl overflow-hidden flex flex-col justify-between transition-all"
                    >
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={evt.image}
                          alt={evt.name}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80';
                          }}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-5 space-y-2">
                        <h4 className="text-lg font-black text-[#0c1947]">{evt.name}</h4>
                        <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                          {localizedDesc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        )}

      </div>
    </section>
  );
};
