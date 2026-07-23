import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { InfoSection } from '../components/sections/InfoSection';
import { WisataSection } from '../components/sections/WisataSection';
import { KatalogSection } from '../components/sections/KatalogSection';
import { DestinationModal } from '../components/ui/DestinationModal';
import { EmergencyModal } from '../components/ui/EmergencyModal';
import { AdminModal } from '../components/ui/AdminModal';
import {
  initialCategories,
  initialDestinations,
  initialEmergencyContacts,
  initialHeroConfig
} from '../lib/data';
import { Destination, Category, EmergencyContact, HeroConfig } from '../types';
import { api } from '../services/api';

export default function Page() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [destinations, setDestinations] = useState<Destination[]>(initialDestinations);
  const [emergencyContacts, setEmergencyContacts] = useState<EmergencyContact[]>(initialEmergencyContacts);
  const [heroConfig, setHeroConfig] = useState<HeroConfig>(initialHeroConfig);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [heroRes, catRes, destRes, emergencyRes] = await Promise.all([
        api.getHero(),
        api.getCategories(),
        api.getDestinations(),
        api.getEmergencyContacts(),
      ]);

      if (heroRes) setHeroConfig(heroRes);
      if (catRes) setCategories(catRes);
      if (destRes) setDestinations(destRes);
      if (emergencyRes) setEmergencyContacts(emergencyRes);
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-800 antialiased selection:bg-[#1c64ff] selection:text-white scroll-smooth">
      {/* Navigation Header */}
      <Navbar onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          hero={heroConfig}
          destinations={destinations}
          onOpenEmergency={() => setIsEmergencyOpen(true)}
          onSelectDestination={(dest) => setSelectedDestination(dest)}
        />

        {/* 2. Informasi Section (Gunung Kidul Overview, Visi & Misi, Karst info, Kontak Darurat Box) */}
        <InfoSection onOpenEmergency={() => setIsEmergencyOpen(true)} />

        {/* 3. Wisata Section (Petualangan, Destinasi Hits, Kuliner, Akomodasi) */}
        <WisataSection
          destinations={destinations}
          isLoading={isLoading}
          onSelectDestination={(dest) => setSelectedDestination(dest)}
        />

        {/* 4. Katalog Section (Organisasi & Komunitas, Event / Acara Lokal) */}
        <KatalogSection isLoading={isLoading} />
      </main>

      {/* 5. Footer */}
      <Footer />

      {/* Global Interactive Modals */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />

      <EmergencyModal
        contacts={emergencyContacts}
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
      />

      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onDataChange={fetchData}
      />
    </div>
  );
}
