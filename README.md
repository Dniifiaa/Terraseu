# 🌿 TERRASEU — Discover the Heart of Gunungkidul
> **Platform Digital Ekowisata & Eksplorasi Budaya Kabupaten Gunungkidul**

---

## 1. 📖 Tentang Aplikasi

**TERRASEU** (diambil dari kata *Terra* yang berarti Bumi/Lahan dan *Seu/Sewu* yang merujuk pada warisan Pegunungan Sewu Karst Gunungkidul) adalah platform digital ekowisata monolitik yang dirancang untuk mempromosikan dan mengenalkan keindahan alam, kekayaan budaya, kuliner khas, serta ragam tempat wisata di Kabupaten Gunungkidul, D.I. Yogyakarta.

Aplikasi ini mengombinasikan tampilan **Front End publik** yang atraktif dan responsif dengan **Back End Admin CMS** untuk pengelolaan data destinasi, event, organisasi, serta kontak darurat daerah secara mandiri dan *real-time*.

---

## 2. ✨ Fitur Utama & Keunggulan

### 🌐 Front End (Halaman Publik)
* **Navbar & Navigasi Interaktif**:
  * Logo brand "TERRASEU" & Tagline.
  * Menu navigasi utama (Beranda, Wisata, Katalog, Informasi).
  * Filter Kategori Wisata interaktif.
  * **Multi-Language Switcher**: Dukungan 3 Bahasa terintegrasi (Bahasa Indonesia 🇮🇩, English 🇬🇧, Japanese 🇯🇵).
  * Modal Login Admin terpadu.
* **Hero Showcase & Floating Cards**:
  * Slider latar belakang foto definisi tinggi.
  * *Wave Divider* organik bergaya alam.
  * *Floating Featured Destination Cards* lengkap dengan badge rating dan pin lokasi.
* **Profil & Filosofi Ekowisata**:
  * Narrative storytelling kebudayaan dan bumi karst Gunungkidul.
  * *Photo Collage Grid* lanskap panorama.
* **Grid 6 Kategori Wisata Utama**:
  * *Wisata Alam, Wisata Kuliner, Jelajah Budaya, Wisata Religi, Wisata Sejarah, dan Edukasi*.
  * Kartu kategori aktif dengan *backlight glow effect*.
* **Katalog & Direktori Daerah**:
  * List Organisasi Wisata (Diskominfo, Karang Taruna, Pokdarwis, Tugu Landmark).
  * Agenda & Event Kebudayaan (Upacara Bersih Desa, Festival Layang-Layang, Konser Musik, dll).
* **Banner Layanan Kontak Darurat**:
  * Informasi nomor darurat resmi Gunungkidul (*Call Center, Ambulance, Polsek*).
* **Modal Detail Destinasi**:
  * Menampilkan deskripsi lengkap, harga tiket masuk, jam operasional, fasilitas, dan rating.

### 🛠️ Back End & Admin Panel (CMS)
* **Manajemen CRUD Data Destinasi**:
  * Tambah, Edit, Hapus, dan Filter Destinasi Wisata.
  * Pengaturan status *Featured* dan status Aktif/Non-aktif.
* **Manajemen CRUD Organisasi & Event Kebudayaan**:
  * Kelola daftar lembaga pengelola ekowisata dan jadwal acara daerah.
* **Manajemen CRUD Kontak Darurat**:
  * Update nomor panggilan darurat dan deskripsi hotline.
* **RESTful API Engine (`/api/v1/`)**:
  * Endpoints publik untuk sinkronisasi data destinasi, kategori, hero slider, dan kontak darurat.
  * Validasi *Form Request* dengan pesan galat terstandar HTTP 422.
  * Output respon JSON seragam (`ApiResponse Trait`).

### 🌟 Keunggulan Platform
1. **Desain Visual Modern & Responsif**: Menggunakan palet warna biru samudra, pasir hangat, dan elevasi modern yang nyaman di semua ukuran layar (Mobile, Tablet, Desktop).
2. **Performa Tinggi & Ringan**: Diproses secara cepat menggunakan komponen teroptimasi.
3. **Multi-Bahasa**: Memudahkan pengunjung lokal maupun wisatawan mancanegara.

---

## 3. 💻 Teknologi yang Digunakan

* **Framework Utama**: Laravel 12.x (Blade Templating & Monolith Engine)
* **CSS Framework**: Tailwind CSS v4.0 (Pure Utility Classes)
* **Database**: PostgreSQL / MySQL (`pgsql` / `mysql` driver)
* **Admin CMS Panel**: Filament PHP v3/v4 Panel Builder
* **API Framework & Auth**: Laravel Sanctum & RESTful API Architecture
* **Frontend Runtime & Server**: React 18, Vite Engine, Node.js / Express Proxy
* **Icon Library**: Lucide React Icons

---

## 4. 🖼️ Screenshot Aplikasi

### 1. Tampilan Website
<img width="1920" height="1080" alt="Cuplikan layar 2026-07-24 004339" src="https://github.com/user-attachments/assets/ce37f798-96d9-444f-aff2-328b72508c50" />
<img width="1920" height="1080" alt="Cuplikan layar 2026-07-24 004343" src="https://github.com/user-attachments/assets/fff89ab9-bb19-4cfb-a02c-f758100539fb" />
<img width="1920" height="1080" alt="Cuplikan layar 2026-07-24 004349" src="https://github.com/user-attachments/assets/f3364271-3497-4a6d-a529-672aa42da66d" />
<img width="1920" height="1080" alt="Cuplikan layar 2026-07-24 004357" src="https://github.com/user-attachments/assets/0f9a7ac6-8fef-4dc3-b7cc-fdbdfedf3d06" />
<img width="1920" height="1080" alt="Cuplikan layar 2026-07-24 004403" src="https://github.com/user-attachments/assets/bce9c296-5f56-4f54-a185-b6adb944df29" />
<img width="1920" height="1080" alt="Cuplikan layar 2026-07-24 004410" src="https://github.com/user-attachments/assets/1987f5fa-b2d3-477c-b8c7-05f2e0747858" />
<img width="1920" height="1080" alt="Cuplikan layar 2026-07-24 004412" src="https://github.com/user-attachments/assets/f136f978-94dd-4456-80bd-b947a2252719" />

---

### 2. Admin Panel CMS

<img width="1920" height="1080" alt="Cuplikan layar 2026-07-24 004656" src="https://github.com/user-attachments/assets/c8d51600-8a85-4c5a-a96f-d568a3d07f85" />
<img width="1920" height="1080" alt="Cuplikan layar 2026-07-24 004659" src="https://github.com/user-attachments/assets/d33f95fc-02f2-4c1c-9c75-8883311a71f9" />
<img width="1920" height="1080" alt="Cuplikan layar 2026-07-24 004702" src="https://github.com/user-attachments/assets/257fa712-cc80-40c3-84a0-eb5c3e4497b3" />
<img width="1920" height="1080" alt="Cuplikan layar 2026-07-24 004704" src="https://github.com/user-attachments/assets/329bbae8-2950-4409-a049-8e7ed403ba79" />
<img width="1920" height="1080" alt="Cuplikan layar 2026-07-24 004707" src="https://github.com/user-attachments/assets/5e332e28-b9e5-4d13-98d1-ab56859ca0f6" />
<img width="1920" height="1080" alt="Cuplikan layar 2026-07-24 004710" src="https://github.com/user-attachments/assets/8e7ac13b-5f25-4ba0-ad67-72e65a5804bc" />
<img width="1920" height="1080" alt="Cuplikan layar 2026-07-24 004712" src="https://github.com/user-attachments/assets/77d51daf-0041-4b14-821f-26642582b495" />

---

## 5. 🔗 Link Demo (Hosting Web)

Aplikasi TERRASEU telah di-host dan dapat diakses secara langsung melalui tautan berikut:

* 🌐 **Live Demo App**: [Terraseu](https://terraseu.ai.studio)

---

## 6. 👥 Nama Tim & Anggota Kelompok

* **Nama Tim / Kelompok**: Tim Terraseu Gunungkidul
* **Anggota Tim**:
  1. **Dini Afiatus Sholeha** — NIM: 24030028
  2. **Naufal Khoirudin Latif** — NIM: 24030005
  3. **Natalie Caesa Eka Putri** — NIM: 24030022
  4. **Aryda Sulistianni** — NIM: 24030026
  5. **Ibrahim Daud** — NIM: 24030012


---
*© 2026 TERRASEU — Discover the Heart of Gunungkidul. All rights reserved.*
