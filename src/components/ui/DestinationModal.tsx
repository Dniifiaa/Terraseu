import React from 'react';
import { X, Star, MapPin, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { Destination } from '../../types';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({ destination, onClose }) => {
  const { language, t } = useLanguage();

  return (
    <AnimatePresence>
      {destination && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-100 relative"
          >
            {/* Modal Image Header */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80';
                }}
                className="w-full h-full object-cover"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 bg-black/60 text-white rounded-full p-2 hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
              <div className="absolute bottom-4 left-4 bg-[#1c64ff] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                {destination.category_slug}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-slate-900">{destination.name}</h3>
                <div className="flex items-center space-x-1 bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{destination.rating.toFixed(1)}</span>
                </div>
              </div>

              <p className="text-xs font-bold text-slate-500 flex items-center space-x-1">
                <MapPin className="w-4 h-4 text-[#1c64ff]" />
                <span>{destination.location}</span>
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                {typeof destination.description === 'string'
                  ? destination.description
                  : (destination.description[language] || destination.description.EN || destination.description.ID || '')}
              </p>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                <span className="text-xs font-medium text-slate-400">TERRASEU Ecotourism Collection</span>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://maps.google.com/?q=${encodeURIComponent(destination.name + ' ' + destination.location)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1c64ff] hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition flex items-center space-x-2"
                >
                  <span>{t.katalog.openMaps}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
