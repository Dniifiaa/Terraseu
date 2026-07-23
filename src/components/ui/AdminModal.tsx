import React, { useState, useEffect } from 'react';
import {
  X, Lock, ShieldCheck, Database, Layers, Plus, Trash2, Edit, Save,
  Search, MapPin, Star, Phone, CheckCircle2, AlertCircle, RefreshCw, LayoutDashboard,
  Building2, Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { Destination, Category, EmergencyContact, HeroConfig, Organization, EventItem } from '../../types';
import { api } from '../../services/api';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDataChange?: () => void;
}

type TabType = 'destinations' | 'categories' | 'organizations' | 'events' | 'emergency' | 'hero';

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose, onDataChange }) => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('admin@terraseu-gunungkidul.go.id');
  const [password, setPassword] = useState('••••••••');
  const [isLogged, setIsLogged] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('destinations');

  // Data states
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [emergencyContacts, setEmergencyContacts] = useState<EmergencyContact[]>([]);
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [heroConfig, setHeroConfig] = useState<HeroConfig | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Search & Category filter
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');

  // Destination Form Modal State
  const [isDestModalOpen, setIsDestModalOpen] = useState(false);
  const [editingDest, setEditingDest] = useState<Partial<Destination> | null>(null);

  // Category Form Modal State
  const [isCatModalOpen, setIsCatModalOpen] = useState(false);
  const [editingCat, setEditingCat] = useState<Partial<Category> | null>(null);

  // Emergency Form Modal State
  const [isEmgModalOpen, setIsEmgModalOpen] = useState(false);
  const [editingEmg, setEditingEmg] = useState<Partial<EmergencyContact> | null>(null);

  // Organization Form Modal State
  const [isOrgModalOpen, setIsOrgModalOpen] = useState(false);
  const [editingOrg, setEditingOrg] = useState<Partial<Organization> | null>(null);

  // Event Form Modal State
  const [isEvtModalOpen, setIsEvtModalOpen] = useState(false);
  const [editingEvt, setEditingEvt] = useState<Partial<EventItem> | null>(null);

  // Load all data when logged in
  const loadAdminData = async () => {
    setIsLoading(true);
    try {
      const [heroRes, catRes, destRes, emgRes, orgRes, evtRes] = await Promise.all([
        api.getHero(),
        api.getCategories(),
        api.getDestinations(),
        api.getEmergencyContacts(),
        api.getOrganizations(),
        api.getEvents(),
      ]);
      if (heroRes) setHeroConfig(heroRes);
      if (catRes) setCategories(catRes);
      if (destRes) setDestinations(destRes);
      if (emgRes) setEmergencyContacts(emgRes);
      if (orgRes) setOrganizations(orgRes);
      if (evtRes) setEvents(evtRes);
    } catch {
      showToast('error', 'Gagal memuat data admin.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && isLogged) {
      loadAdminData();
    }
  }, [isOpen, isLogged]);

  const showToast = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  const triggerDataRefresh = () => {
    loadAdminData();
    if (onDataChange) onDataChange();
  };

  // --- DESTINATION HANDLERS ---
  const handleSaveDestination = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!editingDest) return;

    if (editingDest.id) {
      const res = await api.updateDestination(editingDest.id, editingDest);
      if (res) {
        showToast('success', 'Destinasi berhasil diperbarui.');
      } else {
        showToast('error', 'Gagal memperbarui destinasi.');
      }
    } else {
      const res = await api.createDestination(editingDest);
      if (res) {
        showToast('success', 'Destinasi baru berhasil ditambahkan.');
      } else {
        showToast('error', 'Gagal menambah destinasi.');
      }
    }
    setIsDestModalOpen(false);
    setEditingDest(null);
    triggerDataRefresh();
  };

  const handleDeleteDestination = async (id: number, name: string) => {
    if (!window.confirm(`Apakah Anda yakin ingin menghapus destinasi "${name}"?`)) return;
    const ok = await api.deleteDestination(id);
    if (ok) {
      showToast('success', 'Destinasi berhasil dihapus.');
      triggerDataRefresh();
    } else {
      showToast('error', 'Gagal menghapus destinasi.');
    }
  };

  // --- CATEGORY HANDLERS ---
  const handleSaveCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!editingCat) return;

    if (editingCat.id) {
      const res = await api.updateCategory(editingCat.id, editingCat);
      if (res) {
        showToast('success', 'Kategori berhasil diperbarui.');
      } else {
        showToast('error', 'Gagal memperbarui kategori.');
      }
    } else {
      const res = await api.createCategory(editingCat);
      if (res) {
        showToast('success', 'Kategori baru berhasil ditambahkan.');
      } else {
        showToast('error', 'Gagal menambah kategori.');
      }
    }
    setIsCatModalOpen(false);
    setEditingCat(null);
    triggerDataRefresh();
  };

  const handleDeleteCategory = async (id: number, name: string) => {
    if (!window.confirm(`Apakah Anda yakin ingin menghapus kategori "${name}"?`)) return;
    const ok = await api.deleteCategory(id);
    if (ok) {
      showToast('success', 'Kategori berhasil dihapus.');
      triggerDataRefresh();
    } else {
      showToast('error', 'Gagal menghapus kategori.');
    }
  };

  // --- EMERGENCY CONTACT HANDLERS ---
  const handleSaveEmergency = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!editingEmg) return;

    if (editingEmg.id) {
      const res = await api.updateEmergencyContact(editingEmg.id, editingEmg);
      if (res) {
        showToast('success', 'Kontak darurat berhasil diperbarui.');
      } else {
        showToast('error', 'Gagal memperbarui kontak darurat.');
      }
    } else {
      const res = await api.createEmergencyContact(editingEmg);
      if (res) {
        showToast('success', 'Kontak darurat baru berhasil ditambahkan.');
      } else {
        showToast('error', 'Gagal menambah kontak darurat.');
      }
    }
    setIsEmgModalOpen(false);
    setEditingEmg(null);
    triggerDataRefresh();
  };

  const handleDeleteEmergency = async (id: number, title: string) => {
    if (!window.confirm(`Apakah Anda yakin ingin menghapus kontak "${title}"?`)) return;
    const ok = await api.deleteEmergencyContact(id);
    if (ok) {
      showToast('success', 'Kontak darurat berhasil dihapus.');
      triggerDataRefresh();
    } else {
      showToast('error', 'Gagal menghapus kontak darurat.');
    }
  };

  // --- ORGANIZATION HANDLERS ---
  const handleSaveOrganization = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!editingOrg) return;

    if (editingOrg.id) {
      const res = await api.updateOrganization(editingOrg.id, editingOrg);
      if (res) {
        showToast('success', 'Organisasi berhasil diperbarui.');
      } else {
        showToast('error', 'Gagal memperbarui organisasi.');
      }
    } else {
      const res = await api.createOrganization(editingOrg);
      if (res) {
        showToast('success', 'Organisasi baru berhasil ditambahkan.');
      } else {
        showToast('error', 'Gagal menambah organisasi.');
      }
    }
    setIsOrgModalOpen(false);
    setEditingOrg(null);
    triggerDataRefresh();
  };

  const handleDeleteOrganization = async (id: number, name: string) => {
    if (!window.confirm(`Apakah Anda yakin ingin menghapus organisasi "${name}"?`)) return;
    const ok = await api.deleteOrganization(id);
    if (ok) {
      showToast('success', 'Organisasi berhasil dihapus.');
      triggerDataRefresh();
    } else {
      showToast('error', 'Gagal menghapus organisasi.');
    }
  };

  // --- EVENT HANDLERS ---
  const handleSaveEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!editingEvt) return;

    if (editingEvt.id) {
      const res = await api.updateEvent(editingEvt.id, editingEvt);
      if (res) {
        showToast('success', 'Event kebudayaan berhasil diperbarui.');
      } else {
        showToast('error', 'Gagal memperbarui event kebudayaan.');
      }
    } else {
      const res = await api.createEvent(editingEvt);
      if (res) {
        showToast('success', 'Event baru berhasil ditambahkan.');
      } else {
        showToast('error', 'Gagal menambah event.');
      }
    }
    setIsEvtModalOpen(false);
    setEditingEvt(null);
    triggerDataRefresh();
  };

  const handleDeleteEvent = async (id: number, title: string) => {
    if (!window.confirm(`Apakah Anda yakin ingin menghapus event "${title}"?`)) return;
    const ok = await api.deleteEvent(id);
    if (ok) {
      showToast('success', 'Event berhasil dihapus.');
      triggerDataRefresh();
    } else {
      showToast('error', 'Gagal menghapus event.');
    }
  };

  // --- HERO HANDLER ---
  const handleSaveHero = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroConfig) return;
    const res = await api.updateHero(heroConfig);
    if (res) {
      showToast('success', 'Konfigurasi Banner Hero berhasil disimpan.');
      triggerDataRefresh();
    } else {
      showToast('error', 'Gagal memperbarui Banner Hero.');
    }
  };

  const filteredDestinations = destinations.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.location.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesSearch) return false;

    if (selectedCategoryFilter === 'all') return true;
    if (selectedCategoryFilter === 'wisata-kuliner') return d.category_slug === 'wisata-kuliner' || d.category_id === 1;
    if (selectedCategoryFilter === 'akomodasi') return d.category_slug === 'akomodasi' || d.category_id === 7;
    return d.category_slug === selectedCategoryFilter || d.category_id.toString() === selectedCategoryFilter;
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className={`bg-white rounded-3xl w-full p-5 sm:p-8 space-y-6 shadow-2xl border border-slate-100 relative my-auto ${
              isLogged ? 'max-w-5xl max-h-[90vh] flex flex-col' : 'max-w-md'
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-700 font-bold shrink-0">
                  {isLogged ? <LayoutDashboard className="w-5 h-5 text-[#0c1947]" /> : <Lock className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    {isLogged ? 'Filament PHP Admin CMS - TERRASEU' : t.modal.loginTitle}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {isLogged ? 'Kelola Data PostgreSQL (`destinations`, `categories`, `emergency_contacts`, `heroes`)' : t.modal.loginDesc}
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Notification Toast */}
            {notification && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-2xl text-xs font-bold flex items-center gap-2 ${
                  notification.type === 'success'
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-rose-50 text-rose-800 border border-rose-200'
                }`}
              >
                {notification.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                )}
                <span>{notification.message}</span>
              </motion.div>
            )}

            {!isLogged ? (
              /* LOGIN FORM */
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsLogged(true);
                }}
                className="space-y-4"
              >
                <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-3 text-xs text-amber-800 flex items-start space-x-2">
                  <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
                  <span>Panel CMS Filament PHP (Laravel 12 & PostgreSQL) aktif secara realtime.</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Administrator</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1c64ff]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1c64ff]"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#0c1947] hover:bg-[#1c64ff] text-white font-bold text-sm py-3 rounded-xl transition shadow-md"
                >
                  Masuk Admin Panel CMS
                </motion.button>
              </form>
            ) : (
              /* LOGGED IN ADMIN DASHBOARD */
              <div className="flex-1 flex flex-col space-y-4 min-h-0 overflow-hidden">
                {/* Navigation Tabs */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 shrink-0">
                  <div className="flex items-center space-x-2 overflow-x-auto pb-1">
                    <button
                      onClick={() => setActiveTab('destinations')}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                        activeTab === 'destinations'
                          ? 'bg-[#0c1947] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Destinasi ({destinations.length})</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('categories')}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                        activeTab === 'categories'
                          ? 'bg-[#0c1947] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Kategori ({categories.length})</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('organizations')}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                        activeTab === 'organizations'
                          ? 'bg-[#0c1947] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <Building2 className="w-3.5 h-3.5" />
                      <span>Organisasi ({organizations.length})</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('events')}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                        activeTab === 'events'
                          ? 'bg-[#0c1947] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Event ({events.length})</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('emergency')}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                        activeTab === 'emergency'
                          ? 'bg-[#0c1947] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Kontak Darurat ({emergencyContacts.length})</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('hero')}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                        activeTab === 'hero'
                          ? 'bg-[#0c1947] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <Database className="w-3.5 h-3.5" />
                      <span>Hero Banner</span>
                    </button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={loadAdminData}
                      disabled={isLoading}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold transition flex items-center gap-1"
                      title="Refresh Data"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
                    </button>
                    <button
                      onClick={() => setIsLogged(false)}
                      className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold transition"
                    >
                      Logout
                    </button>
                  </div>
                </div>

                {/* TAB CONTENT */}
                <div className="flex-1 overflow-y-auto pr-1 space-y-4">
                  {/* 1. DESTINATIONS TAB */}
                  {activeTab === 'destinations' && (
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                          <div className="relative flex-1">
                            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                            <input
                              type="text"
                              placeholder="Cari destinasi, kuliner, atau akomodasi..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1c64ff]"
                            />
                          </div>
                          <button
                            onClick={() => {
                              let defaultCatId = 2;
                              let defaultCatSlug = 'wisata-alam';
                              if (selectedCategoryFilter === 'wisata-kuliner') {
                                defaultCatId = 1;
                                defaultCatSlug = 'wisata-kuliner';
                              } else if (selectedCategoryFilter === 'akomodasi') {
                                defaultCatId = 7;
                                defaultCatSlug = 'akomodasi';
                              }
                              setEditingDest({
                                name: '',
                                category_id: defaultCatId,
                                category_slug: defaultCatSlug,
                                location: 'Gunung Kidul',
                                description: '',
                                rating: 4.8,
                                image: '/images/pantai-indrayanti.jpg',
                                is_featured: false,
                                is_active: true
                              });
                              setIsDestModalOpen(true);
                            }}
                            className="px-4 py-2 bg-[#1c64ff] hover:bg-[#1150db] text-white rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1 shrink-0 shadow-xs"
                          >
                            <Plus className="w-4 h-4" />
                            <span>
                              {selectedCategoryFilter === 'wisata-kuliner' ? 'Tambah Kuliner Baru' :
                               selectedCategoryFilter === 'akomodasi' ? 'Tambah Akomodasi Baru' :
                               'Tambah Data Baru'}
                            </span>
                          </button>
                        </div>

                        {/* Category Filter Pills */}
                        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">Filter:</span>
                          <button
                            onClick={() => setSelectedCategoryFilter('all')}
                            className={`px-3 py-1 rounded-lg font-bold transition shrink-0 ${
                              selectedCategoryFilter === 'all'
                                ? 'bg-slate-900 text-white'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            Semua ({destinations.length})
                          </button>
                          <button
                            onClick={() => setSelectedCategoryFilter('wisata-alam')}
                            className={`px-3 py-1 rounded-lg font-bold transition shrink-0 ${
                              selectedCategoryFilter === 'wisata-alam'
                                ? 'bg-[#1c64ff] text-white'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            Wisata Alam
                          </button>
                          <button
                            onClick={() => setSelectedCategoryFilter('wisata-kuliner')}
                            className={`px-3 py-1 rounded-lg font-bold transition shrink-0 ${
                              selectedCategoryFilter === 'wisata-kuliner'
                                ? 'bg-amber-600 text-white'
                                : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
                            }`}
                          >
                            🍲 Wisata Kuliner ({destinations.filter(d => d.category_slug === 'wisata-kuliner' || d.category_id === 1).length})
                          </button>
                          <button
                            onClick={() => setSelectedCategoryFilter('akomodasi')}
                            className={`px-3 py-1 rounded-lg font-bold transition shrink-0 ${
                              selectedCategoryFilter === 'akomodasi'
                                ? 'bg-emerald-600 text-white'
                                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                            }`}
                          >
                            🏨 Akomodasi & Penginapan ({destinations.filter(d => d.category_slug === 'akomodasi' || d.category_id === 7).length})
                          </button>
                          <button
                            onClick={() => setSelectedCategoryFilter('jelajah-budaya')}
                            className={`px-3 py-1 rounded-lg font-bold transition shrink-0 ${
                              selectedCategoryFilter === 'jelajah-budaya'
                                ? 'bg-[#1c64ff] text-white'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            Jelajah Budaya
                          </button>
                        </div>
                      </div>

                      {filteredDestinations.length === 0 ? (
                        <div className="text-center py-8 text-slate-400 text-xs">
                          Tidak ada destinasi ditemukan.
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {filteredDestinations.map((dest) => (
                            <div
                              key={dest.id}
                              className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-2"
                            >
                              <div className="flex space-x-3">
                                <img
                                  src={dest.image}
                                  alt={dest.name}
                                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                                />
                                <div className="space-y-1 overflow-hidden">
                                  <h4 className="font-bold text-slate-900 text-xs truncate">{dest.name}</h4>
                                  <p className="text-[11px] text-slate-500 flex items-center gap-1 truncate">
                                    <MapPin className="w-3 h-3 text-[#1c64ff] shrink-0" />
                                    <span>{dest.location}</span>
                                  </p>
                                  <div className="flex items-center space-x-2">
                                    <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-md flex items-center gap-0.5">
                                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                                      <span>{dest.rating}</span>
                                    </span>
                                    {dest.is_featured && (
                                      <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-md">
                                        Hits
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center justify-end space-x-1 border-t border-slate-200/60 pt-2">
                                <button
                                  onClick={() => {
                                    setEditingDest(dest);
                                    setIsDestModalOpen(true);
                                  }}
                                  className="p-1.5 text-slate-600 hover:text-[#1c64ff] hover:bg-white rounded-lg transition"
                                  title="Edit"
                                >
                                  <Edit className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={() => handleDeleteDestination(dest.id, dest.name)}
                                  className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition"
                                  title="Hapus"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* 2. CATEGORIES TAB */}
                  {activeTab === 'categories' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Daftar Kategori Ekowisata</h4>
                        <button
                          onClick={() => {
                            setEditingCat({
                              name: '',
                              icon: 'mountain',
                              is_active: true
                            });
                            setIsCatModalOpen(true);
                          }}
                          className="px-4 py-2 bg-[#1c64ff] hover:bg-[#1150db] text-white rounded-xl text-xs font-bold transition flex items-center space-x-1"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Tambah Kategori</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {categories.map((cat) => (
                          <div key={cat.id} className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                            <div>
                              <div className="font-bold text-slate-900 text-xs">{cat.name}</div>
                              <div className="text-[11px] text-slate-500 font-mono">slug: {cat.slug}</div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <button
                                onClick={() => {
                                  setEditingCat(cat);
                                  setIsCatModalOpen(true);
                                }}
                                className="p-1.5 text-slate-600 hover:text-[#1c64ff] hover:bg-white rounded-lg transition"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteCategory(cat.id, cat.name)}
                                className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 3. ORGANIZATIONS TAB */}
                  {activeTab === 'organizations' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Daftar Organisasi & Komunitas Ekowisata</h4>
                        <button
                          onClick={() => {
                            setEditingOrg({
                              name: '',
                              image: '/images/diskominfo.jpg',
                              desc: { ID: '', EN: '' },
                              is_active: true
                            });
                            setIsOrgModalOpen(true);
                          }}
                          className="px-4 py-2 bg-[#1c64ff] hover:bg-[#1150db] text-white rounded-xl text-xs font-bold transition flex items-center space-x-1"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Tambah Organisasi</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {organizations.map((org) => (
                          <div key={org.id} className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between gap-3">
                            <div className="flex items-center space-x-3 overflow-hidden">
                              <img src={org.image} alt={org.name} className="w-12 h-12 rounded-xl object-cover shrink-0" />
                              <div className="overflow-hidden">
                                <div className="font-bold text-slate-900 text-xs truncate">{org.name}</div>
                                <div className="text-[11px] text-slate-500 truncate">{org.desc?.ID || ''}</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1 shrink-0">
                              <button
                                onClick={() => {
                                  setEditingOrg(org);
                                  setIsOrgModalOpen(true);
                                }}
                                className="p-1.5 text-slate-600 hover:text-[#1c64ff] hover:bg-white rounded-lg transition"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteOrganization(org.id, org.name)}
                                className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 4. EVENTS TAB */}
                  {activeTab === 'events' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Daftar Event & Upacara Adat Lokal</h4>
                        <button
                          onClick={() => {
                            setEditingEvt({
                              title: '',
                              image: '/images/upacara-bersih-desa.jpg',
                              date: '2026',
                              desc: { ID: '', EN: '' },
                              is_active: true
                            });
                            setIsEvtModalOpen(true);
                          }}
                          className="px-4 py-2 bg-[#1c64ff] hover:bg-[#1150db] text-white rounded-xl text-xs font-bold transition flex items-center space-x-1"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Tambah Event</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {events.map((evt) => (
                          <div key={evt.id} className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between gap-3">
                            <div className="flex items-center space-x-3 overflow-hidden">
                              <img src={evt.image} alt={evt.title} className="w-12 h-12 rounded-xl object-cover shrink-0" />
                              <div className="overflow-hidden">
                                <div className="font-bold text-slate-900 text-xs truncate">{evt.title}</div>
                                <div className="text-[10px] text-[#1c64ff] font-bold">{evt.date}</div>
                                <div className="text-[11px] text-slate-500 truncate">{evt.desc?.ID || ''}</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1 shrink-0">
                              <button
                                onClick={() => {
                                  setEditingEvt(evt);
                                  setIsEvtModalOpen(true);
                                }}
                                className="p-1.5 text-slate-600 hover:text-[#1c64ff] hover:bg-white rounded-lg transition"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteEvent(evt.id, evt.title)}
                                className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 5. EMERGENCY CONTACTS TAB */}
                  {activeTab === 'emergency' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Daftar Kontak Darurat Hotline</h4>
                        <button
                          onClick={() => {
                            setEditingEmg({
                              title: '',
                              description: '',
                              phone_number: '119',
                              button_text: 'Hubungi',
                              is_active: true
                            });
                            setIsEmgModalOpen(true);
                          }}
                          className="px-4 py-2 bg-[#1c64ff] hover:bg-[#1150db] text-white rounded-xl text-xs font-bold transition flex items-center space-x-1"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Tambah Kontak</span>
                        </button>
                      </div>

                      <div className="space-y-3">
                        {emergencyContacts.map((emg) => (
                          <div key={emg.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="space-y-1">
                              <div className="font-bold text-slate-900 text-xs">{emg.title}</div>
                              <p className="text-[11px] text-slate-600 leading-relaxed">{emg.description}</p>
                            </div>
                            <div className="flex items-center space-x-2 shrink-0">
                              <button
                                onClick={() => {
                                  setEditingEmg(emg);
                                  setIsEmgModalOpen(true);
                                }}
                                className="p-1.5 text-slate-600 hover:text-[#1c64ff] hover:bg-white rounded-lg transition"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteEmergency(emg.id, emg.title)}
                                className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 4. HERO BANNER TAB */}
                  {activeTab === 'hero' && heroConfig && (
                    <form onSubmit={handleSaveHero} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Judul Utama Line 1</label>
                        <input
                          type="text"
                          value={heroConfig.title1}
                          onChange={(e) => setHeroConfig({ ...heroConfig, title1: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1c64ff]"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Judul Utama Line 2</label>
                        <input
                          type="text"
                          value={heroConfig.title2}
                          onChange={(e) => setHeroConfig({ ...heroConfig, title2: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1c64ff]"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Sub-Deskripsi (Bahasa Indonesia)</label>
                        <textarea
                          rows={2}
                          value={heroConfig.subtitle.ID}
                          onChange={(e) => setHeroConfig({
                            ...heroConfig,
                            subtitle: { ...heroConfig.subtitle, ID: e.target.value }
                          })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1c64ff]"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Sub-Deskripsi (English)</label>
                        <textarea
                          rows={2}
                          value={heroConfig.subtitle.EN}
                          onChange={(e) => setHeroConfig({
                            ...heroConfig,
                            subtitle: { ...heroConfig.subtitle, EN: e.target.value }
                          })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1c64ff]"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">URL Gambar Background Hero</label>
                        <input
                          type="text"
                          value={heroConfig.background_images[0] || ''}
                          onChange={(e) => setHeroConfig({
                            ...heroConfig,
                            background_images: [e.target.value]
                          })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1c64ff]"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="px-5 py-2.5 bg-[#0c1947] hover:bg-[#1c64ff] text-white rounded-xl text-xs font-bold transition flex items-center space-x-1.5"
                      >
                        <Save className="w-4 h-4" />
                        <span>Simpan Perubahan Hero</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            )}
          </motion.div>

          {/* DESTINATION EDIT MODAL OVERLAY */}
          {isDestModalOpen && editingDest && (
            <div
              className="fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
              onClick={(e) => {
                e.stopPropagation();
                setIsDestModalOpen(false);
              }}
            >
              <div
                className="bg-white rounded-3xl p-6 max-w-lg w-full space-y-4 max-h-[90vh] overflow-y-auto shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b pb-3">
                  <h3 className="font-black text-slate-900 text-sm">
                    {editingDest.id ? 'Edit Destinasi Wisata' : 'Tambah Destinasi Baru'}
                  </h3>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsDestModalOpen(false);
                    }}
                  >
                    <X className="w-5 h-5 text-slate-400 hover:text-slate-600" />
                  </button>
                </div>

                <form onSubmit={handleSaveDestination} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Nama Destinasi</label>
                    <input
                      type="text"
                      required
                      value={editingDest.name || ''}
                      onChange={(e) => setEditingDest({ ...editingDest, name: e.target.value })}
                      className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-[#1c64ff]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Kategori Destinasi</label>
                    <select
                      value={editingDest.category_id || 2}
                      onChange={(e) => {
                        const selectedCatId = parseInt(e.target.value);
                        const foundCat = categories.find(c => c.id === selectedCatId);
                        setEditingDest({
                          ...editingDest,
                          category_id: selectedCatId,
                          category_slug: foundCat?.slug || 'wisata-alam'
                        });
                      }}
                      className="w-full px-3 py-2 border rounded-xl bg-white text-slate-800 focus:outline-none focus:border-[#1c64ff]"
                    >
                      {categories.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name} ({c.slug})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Lokasi</label>
                    <input
                      type="text"
                      required
                      value={editingDest.location || ''}
                      onChange={(e) => setEditingDest({ ...editingDest, location: e.target.value })}
                      className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-[#1c64ff]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Rating (1.0 - 5.0)</label>
                    <input
                      type="number"
                      step="0.1"
                      min="1"
                      max="5"
                      required
                      value={editingDest.rating ?? 5.0}
                      onChange={(e) => setEditingDest({ ...editingDest, rating: parseFloat(e.target.value) })}
                      className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-[#1c64ff]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">URL Gambar</label>
                    <input
                      type="text"
                      required
                      value={editingDest.image || ''}
                      onChange={(e) => setEditingDest({ ...editingDest, image: e.target.value })}
                      className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-[#1c64ff]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Deskripsi Ringkas</label>
                    <textarea
                      rows={3}
                      required
                      value={editingDest.description || ''}
                      onChange={(e) => setEditingDest({ ...editingDest, description: e.target.value })}
                      className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-[#1c64ff]"
                    />
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <input
                      type="checkbox"
                      id="is_featured"
                      checked={editingDest.is_featured ?? true}
                      onChange={(e) => setEditingDest({ ...editingDest, is_featured: e.target.checked })}
                      className="rounded text-[#1c64ff]"
                    />
                    <label htmlFor="is_featured" className="font-bold text-slate-700">
                      Tampilkan di Destinasi Wisata Hits / Rekomendasi
                    </label>
                  </div>

                  <div className="flex justify-end space-x-2 pt-4 border-t">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsDestModalOpen(false);
                      }}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#1c64ff] hover:bg-[#1150db] text-white rounded-xl font-bold transition shadow-xs"
                    >
                      Simpan Destinasi
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* CATEGORY EDIT MODAL OVERLAY */}
          {isCatModalOpen && editingCat && (
            <div
              className="fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
              onClick={(e) => {
                e.stopPropagation();
                setIsCatModalOpen(false);
              }}
            >
              <div
                className="bg-white rounded-3xl p-6 max-w-sm w-full space-y-4 shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b pb-3">
                  <h3 className="font-black text-slate-900 text-sm">
                    {editingCat.id ? 'Edit Kategori' : 'Tambah Kategori Baru'}
                  </h3>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsCatModalOpen(false);
                    }}
                  >
                    <X className="w-5 h-5 text-slate-400 hover:text-slate-600" />
                  </button>
                </div>

                <form onSubmit={handleSaveCategory} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Nama Kategori</label>
                    <input
                      type="text"
                      required
                      value={editingCat.name || ''}
                      onChange={(e) => setEditingCat({ ...editingCat, name: e.target.value })}
                      className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-[#1c64ff]"
                    />
                  </div>

                  <div className="flex justify-end space-x-2 pt-4 border-t">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsCatModalOpen(false);
                      }}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#1c64ff] hover:bg-[#1150db] text-white rounded-xl font-bold transition shadow-xs"
                    >
                      Simpan Kategori
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* EMERGENCY EDIT MODAL OVERLAY */}
          {isEmgModalOpen && editingEmg && (
            <div
              className="fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
              onClick={(e) => {
                e.stopPropagation();
                setIsEmgModalOpen(false);
              }}
            >
              <div
                className="bg-white rounded-3xl p-6 max-w-md w-full space-y-4 shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b pb-3">
                  <h3 className="font-black text-slate-900 text-sm">
                    {editingEmg.id ? 'Edit Kontak Darurat' : 'Tambah Kontak Darurat'}
                  </h3>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsEmgModalOpen(false);
                    }}
                  >
                    <X className="w-5 h-5 text-slate-400 hover:text-slate-600" />
                  </button>
                </div>

                <form onSubmit={handleSaveEmergency} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Judul Layanan</label>
                    <input
                      type="text"
                      required
                      value={editingEmg.title || ''}
                      onChange={(e) => setEditingEmg({ ...editingEmg, title: e.target.value })}
                      className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-[#1c64ff]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Nomor Telepon Hotline</label>
                    <input
                      type="text"
                      required
                      value={editingEmg.phone_number || ''}
                      onChange={(e) => setEditingEmg({ ...editingEmg, phone_number: e.target.value })}
                      className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-[#1c64ff]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Deskripsi</label>
                    <textarea
                      rows={2}
                      required
                      value={editingEmg.description || ''}
                      onChange={(e) => setEditingEmg({ ...editingEmg, description: e.target.value })}
                      className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-[#1c64ff]"
                    />
                  </div>

                  <div className="flex justify-end space-x-2 pt-4 border-t">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsEmgModalOpen(false);
                      }}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#1c64ff] hover:bg-[#1150db] text-white rounded-xl font-bold transition shadow-xs"
                    >
                      Simpan Kontak
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* ORGANIZATION EDIT MODAL OVERLAY */}
          {isOrgModalOpen && editingOrg && (
            <div
              className="fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
              onClick={(e) => {
                e.stopPropagation();
                setIsOrgModalOpen(false);
              }}
            >
              <div
                className="bg-white rounded-3xl p-6 max-w-md w-full space-y-4 shadow-2xl relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b pb-3">
                  <h3 className="font-black text-slate-900 text-sm">
                    {editingOrg.id ? 'Edit Organisasi' : 'Tambah Organisasi Baru'}
                  </h3>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOrgModalOpen(false);
                    }}
                  >
                    <X className="w-5 h-5 text-slate-400 hover:text-slate-600" />
                  </button>
                </div>

                <form onSubmit={handleSaveOrganization} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Nama Organisasi / Komunitas</label>
                    <input
                      type="text"
                      required
                      value={editingOrg.name || ''}
                      onChange={(e) => setEditingOrg({ ...editingOrg, name: e.target.value })}
                      className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-[#1c64ff]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">URL Logo / Gambar</label>
                    <input
                      type="text"
                      required
                      value={editingOrg.image || ''}
                      onChange={(e) => setEditingOrg({ ...editingOrg, image: e.target.value })}
                      className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-[#1c64ff]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Deskripsi (Bahasa Indonesia)</label>
                    <textarea
                      rows={2}
                      required
                      value={editingOrg.desc?.ID || ''}
                      onChange={(e) => setEditingOrg({
                        ...editingOrg,
                        desc: { ID: e.target.value, EN: editingOrg.desc?.EN || e.target.value }
                      })}
                      className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-[#1c64ff]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Deskripsi (English)</label>
                    <textarea
                      rows={2}
                      required
                      value={editingOrg.desc?.EN || ''}
                      onChange={(e) => setEditingOrg({
                        ...editingOrg,
                        desc: { ID: editingOrg.desc?.ID || '', EN: e.target.value }
                      })}
                      className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-[#1c64ff]"
                    />
                  </div>

                  <div className="flex justify-end space-x-2 pt-4 border-t">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOrgModalOpen(false);
                      }}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#1c64ff] hover:bg-[#1150db] text-white rounded-xl font-bold transition shadow-xs"
                    >
                      Simpan Organisasi
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* EVENT EDIT MODAL OVERLAY */}
          {isEvtModalOpen && editingEvt && (
            <div
              className="fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
              onClick={(e) => {
                e.stopPropagation();
                setIsEvtModalOpen(false);
              }}
            >
              <div
                className="bg-white rounded-3xl p-6 max-w-md w-full space-y-4 shadow-2xl relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b pb-3">
                  <h3 className="font-black text-slate-900 text-sm">
                    {editingEvt.id ? 'Edit Event' : 'Tambah Event Baru'}
                  </h3>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsEvtModalOpen(false);
                    }}
                  >
                    <X className="w-5 h-5 text-slate-400 hover:text-slate-600" />
                  </button>
                </div>

                <form onSubmit={handleSaveEvent} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Nama Event / Upacara Adat</label>
                    <input
                      type="text"
                      required
                      value={editingEvt.title || ''}
                      onChange={(e) => setEditingEvt({ ...editingEvt, title: e.target.value })}
                      className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-[#1c64ff]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Tanggal / Jadwal Pelaksanaan</label>
                    <input
                      type="text"
                      required
                      value={editingEvt.date || ''}
                      onChange={(e) => setEditingEvt({ ...editingEvt, date: e.target.value })}
                      className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-[#1c64ff]"
                      placeholder="e.g. Juni 2026 / Sasi Suro"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">URL Banner Gambar</label>
                    <input
                      type="text"
                      required
                      value={editingEvt.image || ''}
                      onChange={(e) => setEditingEvt({ ...editingEvt, image: e.target.value })}
                      className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-[#1c64ff]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Deskripsi (Bahasa Indonesia)</label>
                    <textarea
                      rows={2}
                      required
                      value={editingEvt.desc?.ID || ''}
                      onChange={(e) => setEditingEvt({
                        ...editingEvt,
                        desc: { ID: e.target.value, EN: editingEvt.desc?.EN || e.target.value }
                      })}
                      className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-[#1c64ff]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Deskripsi (English)</label>
                    <textarea
                      rows={2}
                      required
                      value={editingEvt.desc?.EN || ''}
                      onChange={(e) => setEditingEvt({
                        ...editingEvt,
                        desc: { ID: editingEvt.desc?.ID || '', EN: e.target.value }
                      })}
                      className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-[#1c64ff]"
                    />
                  </div>

                  <div className="flex justify-end space-x-2 pt-4 border-t">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsEvtModalOpen(false);
                      }}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#1c64ff] hover:bg-[#1150db] text-white rounded-xl font-bold transition shadow-xs"
                    >
                      Simpan Event
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
