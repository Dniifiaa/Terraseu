import React from 'react';
import { X, PhoneCall, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { EmergencyContact } from '../../types';

interface EmergencyModalProps {
  contacts: EmergencyContact[];
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ contacts, isOpen, onClose }) => {
  const { language, t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
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
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-100 relative"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-100 rounded-2xl flex items-center justify-center text-red-600">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">{t.modal.emergencyTitle}</h3>
                  <p className="text-xs text-slate-500">{t.modal.emergencyDesc}</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Contact List */}
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              {contacts.map((contact) => (
                <motion.div
                  key={contact.id}
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-red-300 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">
                      {contact.title[language] || contact.title.ID}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {contact.description[language] || contact.description.ID}
                    </p>
                    <div className="text-xs font-black text-red-600 font-mono pt-1">
                      ☎ {contact.phone_number}
                    </div>
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`tel:${contact.phone_number.split('/')[0].trim()}`}
                    className="shrink-0 inline-flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow-sm"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{contact.button_text[language] || contact.button_text.ID}</span>
                  </motion.a>
                </motion.div>
              ))}
            </div>

            {/* Footer Close */}
            <div className="pt-2 text-right">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition"
              >
                {t.modal.close}
              </motion.button>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
