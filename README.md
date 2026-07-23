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

### 1. Dashboard Front End (Halaman Utama / Hero Showcase)
![Front End Dashboard](/images/heha-sky-view.jpg)
*Tampilan Beranda Utama TERRASEU dengan Hero Banner, Floating Cards, dan Navigasi Multi-Bahasa.*

---

### 2. Halaman Katalog & Informasi Kebudayaan
![Katalog Kebudayaan](/images/tugu-gunungkidul.jpg)
*Tampilan Katalog Geopark, Organisasi Ekowisata, dan Event Kebudayaan Gunungkidul.*

---

### 3. Halaman Detail Destinasi & Edukasi Karst
![Detail Destinasi](/images/goa-jomblang.jpg)
*Tampilan Informasi Eksplorasi Wisata Alam, Goa Jomblang, dan Pesona Karst Gunungkidul.*

---

## 5. 🔗 Link Demo (Hosting Web)

Aplikasi TERRASEU telah di-host dan dapat diakses secara langsung melalui tautan berikut:

* 🌐 **Live Demo App**: [https://ais-pre-owt7ydfybo7ctppqjhkjnw-811820970466.asia-southeast1.run.app](https://ais-pre-owt7ydfybo7ctppqjhkjnw-811820970466.asia-southeast1.run.app)
* ⚡ **Development Preview**: [https://ais-dev-owt7ydfybo7ctppqjhkjnw-811820970466.asia-southeast1.run.app](https://ais-dev-owt7ydfybo7ctppqjhkjnw-811820970466.asia-southeast1.run.app)

---

## 6. 👥 Nama Tim & Anggota Kelompok

* **Nama Tim / Kelompok**: Tim Terraseu Gunungkidul
* **Anggota Tim**:
  1. **Valerian Ahmad** — NIM: [Silahkan Isi NIM Anda]
  2. **[Nama Anggota 2]** — NIM: [Silahkan Isi NIM Anggota 2]
  3. **[Nama Anggota 3]** — NIM: [Silahkan Isi NIM Anggota 3]

---
*© 2026 TERRASEU — Discover the Heart of Gunungkidul. All rights reserved.*
