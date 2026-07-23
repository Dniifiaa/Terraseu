import React, { useState } from 'react';
import { Compass, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { Language } from '../../types';

interface NavbarProps {
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmin }) => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLangChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 group"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-[#0c1947] to-[#1c64ff] rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-xl font-black tracking-widest text-[#0c1947] block leading-none">
                TERRASEU
              </span>
              <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase block mt-1">
                {t.nav.tagline}
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-700">
            {[
              { href: '#hero-section', label: t.nav.home },
              { href: '#info-section', label: t.nav.info },
              { href: '#wisata-section', label: t.nav.tourism },
              { href: '#katalog-section', label: t.nav.catalog },
            ].map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="hover:text-[#1c64ff] transition-colors py-2 border-b-2 border-transparent hover:border-[#1c64ff]"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Right Action Controls: Language Switcher & Login */}
          <div className="hidden md:flex items-center space-x-4">
            
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 p-1 rounded-full border border-slate-200">
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => handleLangChange('ID')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                  language === 'ID'
                    ? 'bg-[#1c64ff] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#1c64ff]'
                }`}
              >
                ID
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => handleLangChange('EN')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                  language === 'EN'
                    ? 'bg-[#1c64ff] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#1c64ff]'
                }`}
              >
                EN
              </motion.button>
            </div>

            {/* Admin Login Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenAdmin}
              className="flex items-center space-x-2 text-slate-700 hover:text-[#0c1947] hover:bg-slate-100 px-4 py-2 rounded-full border border-slate-200 text-sm font-semibold transition"
            >
              <User className="w-4 h-4 text-slate-600" />
              <span>{t.nav.login}</span>
            </motion.button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center space-x-3">
            <div className="flex items-center bg-slate-100 p-1 rounded-full border border-slate-200">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => handleLangChange('ID')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
                  language === 'ID' ? 'bg-[#1c64ff] text-white' : 'text-slate-600'
                }`}
              >
                ID
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => handleLangChange('EN')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
                  language === 'EN' ? 'bg-[#1c64ff] text-white' : 'text-slate-600'
                }`}
              >
                EN
              </motion.button>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0c1947] rounded-xl focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 overflow-hidden"
          >
            {[
              { href: '#hero-section', label: t.nav.home },
              { href: '#info-section', label: t.nav.info },
              { href: '#wisata-section', label: t.nav.tourism },
              { href: '#katalog-section', label: t.nav.catalog },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-semibold text-slate-700 hover:text-[#1c64ff]"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="w-full flex items-center justify-center space-x-2 text-[#0c1947] bg-slate-100 hover:bg-slate-200 py-2.5 rounded-2xl text-sm font-bold transition"
              >
                <User className="w-4 h-4" />
                <span>{t.nav.login}</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
