import React from 'react';
import { PhoneCall, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

interface InfoSectionProps {
  onOpenEmergency?: () => void;
}

export const InfoSection: React.FC<InfoSectionProps> = ({ onOpenEmergency }) => {
  const { t } = useLanguage();

  return (
    <section id="info-section" className="py-16 bg-white text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Hero Header Banner: Gunung Kidul Yogyakarta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-64 sm:h-80 md:h-96 flex items-center justify-center text-center p-6 border border-slate-200">
            <img
              src="/images/pantai-indrayanti.jpg"
              alt="Gunung Kidul Yogyakarta Geopark"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80';
              }}
              className="absolute inset-0 w-full h-full object-cover filter brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative z-10 max-w-3xl space-y-3">
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight drop-shadow-md">
                Gunung Kidul Yogyakarta
              </h1>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed bg-[#faf8f5] p-6 rounded-3xl border border-slate-200/80 shadow-xs">
              {t.info.geoparkDesc}
            </p>
          </div>
        </motion.div>

        {/* 2. Visi & Misi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-200/80 shadow-md space-y-3 text-center"
          >
            <h3 className="text-2xl font-black text-[#0c1947]">{t.info.visionTitle}</h3>
            <p className="text-slate-700 font-medium leading-relaxed text-sm sm:text-base">
              {t.info.visionDesc}
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-200/80 shadow-md space-y-3 text-center"
          >
            <h3 className="text-2xl font-black text-[#0c1947]">{t.info.missionTitle}</h3>
            <p className="text-slate-700 font-medium leading-relaxed text-sm sm:text-base">
              {t.info.missionDesc}
            </p>
          </motion.div>
        </motion.div>

        {/* 3. Mengenal Bumi Karst Gunung Kidul */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-[#faf8f5] p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="h-64 sm:h-80 rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative"
          >
            <img
              src="/images/goa-jomblang.jpg"
              alt="Mengenal Bumi Karst Gunung Kidul"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80';
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-[#0c1947]/90 backdrop-blur-md text-amber-300 font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/20">
              {t.info.karstBadge}
            </div>
          </motion.div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0c1947] leading-snug">
              {t.info.karstTitle}
            </h2>
            <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
              {t.info.karstDesc}
            </p>
          </div>
        </motion.div>

        {/* 4. KONTAK DARURAT & LAYANAN KESELAMATAN (Emergency Hotline Banner) */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-3xl bg-gradient-to-r from-[#0c1947] via-[#10225e] to-[#0c1947] p-8 sm:p-12 text-white shadow-2xl overflow-hidden border border-slate-700/50"
        >
          {/* Subtle Background Glow Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="space-y-4 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-red-500/20 text-red-300 px-3.5 py-1 rounded-full border border-red-500/30 text-xs font-black uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4 text-red-400 animate-pulse" />
                <span>{t.emergency.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {t.emergency.title}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t.emergency.desc}
              </p>
            </div>

            {/* Right CTA Button */}
            <div className="shrink-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenEmergency}
                className="inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white font-black text-sm px-8 py-4 rounded-2xl shadow-xl shadow-red-600/30 transition-colors cursor-pointer"
              >
                <PhoneCall className="w-5 h-5 animate-bounce" />
                <span>{t.emergency.btn}</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
