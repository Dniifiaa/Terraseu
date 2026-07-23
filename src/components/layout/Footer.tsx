import React from 'react';
import { Compass, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0a1334] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#1c64ff] rounded-2xl flex items-center justify-center text-white shadow-md">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-widest text-white">TERRASEU</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              {t.footer.desc}
            </p>
            <div className="flex items-center space-x-3 pt-2 text-slate-400">
              <span className="text-xs bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Gunung Kidul Regency</span>
              <span className="text-xs bg-slate-800 px-3 py-1 rounded-full border border-slate-700">D.I. Yogyakarta</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#E6DAC3]">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#hero-section" className="hover:text-[#1c64ff] transition">{t.nav.home}</a></li>
              <li><a href="#info-section" className="hover:text-[#1c64ff] transition">{t.nav.info}</a></li>
              <li><a href="#wisata-section" className="hover:text-[#1c64ff] transition">{t.nav.tourism}</a></li>
              <li><a href="#katalog-section" className="hover:text-[#1c64ff] transition">{t.nav.catalog}</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#E6DAC3]">{t.footer.contact}</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#1c64ff] shrink-0 mt-0.5" />
                <span>Jl. Pemuda No. 32, Wonosari, Gunung Kidul, DIY 55812</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#1c64ff] shrink-0" />
                <span>+62 274 391110</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#1c64ff] shrink-0" />
                <span>info@terraseu-Gunungkidul.go.id</span>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-[#1c64ff] shrink-0" />
                <span>www.terraseu-Gunungkidul.go.id</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} TERRASEU Gunung Kidul. {t.footer.rights}</p>
          <div className="mt-4 sm:mt-0 flex items-center space-x-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <span>•</span>
            <a href="/admin/login" className="hover:text-white transition">Filament PHP Admin</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
