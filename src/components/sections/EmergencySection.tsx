import React from 'react';
import { PhoneCall, ShieldAlert, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

interface EmergencySectionProps {
  onOpenEmergency: () => void;
}

export const EmergencySection: React.FC<EmergencySectionProps> = ({ onOpenEmergency }) => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Emergency Hotline Container Card */}
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
                className="inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white font-black text-sm px-8 py-4 rounded-2xl shadow-xl shadow-red-600/30 transition-colors"
              >
                <PhoneCall className="w-5 h-5 animate-bounce" />
                <span>{t.emergency.btn}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
