import React from 'react';
import { Star, MapPin, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { Destination, HeroConfig } from '../../types';

interface HeroSectionProps {
  hero: HeroConfig;
  destinations: Destination[];
  onOpenEmergency: () => void;
  onSelectDestination: (dest: Destination) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  hero,
  destinations,
  onOpenEmergency,
  onSelectDestination
}) => {
  const { language, t } = useLanguage();
  const featured = destinations.filter(d => d.is_featured).slice(0, 3);

  return (
    <section id="hero-section" className="relative bg-[#0c1947] text-white overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-28">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none">
        <img
          src={hero.background_images[0]}
          alt="Hero background"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80';
          }}
          className="w-full h-full object-cover filter brightness-75 scale-105 transform transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1947]/80 via-[#0c1947]/70 to-[#0c1947]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-black tracking-widest text-[#E6DAC3] uppercase"
          >
            <span>🌿 TERRASEU ECOTOURISM PLATFORM</span>
          </motion.div>

          {/* Hero Main Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight"
          >
            {hero.title1}
            <span className="block text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-widest text-[#E6DAC3] mt-2">
              {hero.title2}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-slate-200 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto"
          >
            {hero.subtitle[language] || hero.subtitle.EN || hero.subtitle.ID}
          </motion.p>

          {/* Call To Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#category-section"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#1c64ff] hover:bg-blue-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-blue-500/30 transition-all"
            >
              <span>{t.hero.exploreBtn}</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenEmergency}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-2xl border border-white/20 backdrop-blur-md transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400 animate-bounce" />
              <span>{t.hero.emergencyBtn}</span>
            </motion.button>
          </motion.div>

        </motion.div>

        {/* Floating Featured Destination Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.15, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectDestination(dest)}
              className="group cursor-pointer bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/15 hover:border-blue-400/50 hover:bg-white/15 transition-colors shadow-xl flex flex-col justify-between"
            >
              <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                <img
                  src={dest.image}
                  alt={dest.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#1c64ff] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full tracking-wider shadow-sm">
                  {dest.category_slug}
                </div>
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{dest.rating.toFixed(1)}</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-black text-white group-hover:text-amber-300 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs text-slate-300 flex items-center space-x-1 mt-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#1c64ff]" />
                  <span>{dest.location}</span>
                </p>
                <p className="text-xs text-slate-300 line-clamp-2 mt-2 leading-relaxed">
                  {dest.description[language] || dest.description.EN || dest.description.ID}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Organic Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-[60px] md:h-[90px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.92,150.88,111.31,232,102.32,263.38,98.53,293.5,78.22,321.39,56.44Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>

    </section>
  );
};
