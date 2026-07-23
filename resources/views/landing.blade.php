<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TERRASEU - Discover the Heart of Gunungkidul</title>

    <!-- Tailwind CSS v4 Utility Import -->
    <script src="https://unpkg.com/@tailwindcss/browser@4"></script>

    <!-- Google Fonts: Plus Jakarta Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">

    <style>
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: #ffffff;
            color: #1e293b;
        }
    </style>
</head>
<body class="antialiased selection:bg-[#1c64ff] selection:text-white">

    <!-- ==================== 1. HEADER / NAVBAR ==================== -->
    <header class="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-xs">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                
                <!-- Brand Logo & Tagline -->
                <a href="{{ route('landing') }}" class="flex items-center space-x-3 group">
                    <div class="w-12 h-12 rounded-full bg-[#0c1947] flex items-center justify-center p-1 shadow-md group-hover:scale-105 transition duration-300">
                        <svg viewBox="0 0 100 100" class="w-10 h-10 text-white fill-current">
                            <circle cx="50" cy="50" r="46" fill="#0c1947" stroke="#1c64ff" stroke-width="2" />
                            <path d="M 20 60 Q 35 40 50 60 T 80 60 L 80 80 L 20 80 Z" fill="#1c64ff" opacity="0.8" />
                            <path d="M 15 68 Q 35 52 50 68 T 85 68 L 85 85 L 15 85 Z" fill="#38bdf8" />
                            <path d="M 30 50 L 50 25 L 70 50 L 60 50 L 50 38 L 40 50 Z" fill="#ffffff" />
                        </svg>
                    </div>
                    <div>
                        <h1 class="font-extrabold text-xl md:text-2xl tracking-tight text-[#0c1947] group-hover:text-[#1c64ff] transition">
                            TERRASEU
                        </h1>
                        <p className="text-[11px] md:text-xs font-medium text-slate-500 tracking-wide">
                            Discover the Heart of Gunungkidul
                        </p>
                    </div>
                </a>

                <!-- Navigation Links -->
                <nav class="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-700">
                    <a href="#hero" class="flex items-center space-x-1 py-1.5 px-3 text-[#1c64ff] font-semibold relative">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                        <span>Home</span>
                        <span class="absolute bottom-0 left-2 right-2 h-0.5 bg-[#1c64ff] rounded-full"></span>
                    </a>

                    <a href="#about-section" class="py-1.5 px-3 hover:text-[#1c64ff] transition">Informasi</a>

                    <!-- Wisata Dropdown -->
                    <div class="relative group">
                        <button class="flex items-center space-x-1 py-1.5 px-3 hover:text-[#1c64ff] transition">
                            <span>Wisata</span>
                            <svg class="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                        </button>
                        <div class="absolute left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 hidden group-hover:block z-50">
                            <a href="#category-section" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1c64ff]">Wisata Alam</a>
                            <a href="#category-section" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1c64ff]">Wisata Kuliner</a>
                            <a href="#category-section" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1c64ff]">Jelajah Budaya</a>
                            <a href="#category-section" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1c64ff]">Wisata Religi</a>
                            <a href="#category-section" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1c64ff]">Wisata Sejarah</a>
                            <a href="#category-section" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1c64ff]">Edukasi</a>
                        </div>
                    </div>

                    <!-- Katalog Dropdown -->
                    <div class="relative group">
                        <button class="flex items-center space-x-1 py-1.5 px-3 hover:text-[#1c64ff] transition">
                            <span>Katalog</span>
                            <svg class="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                        </button>
                        <div class="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 hidden group-hover:block z-50">
                            <a href="#category-section" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Katalog Lengkap Destinasi</a>
                            <a href="#emergency-section" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Peta & Kontak Darurat</a>
                        </div>
                    </div>

                    <a href="#about-section" class="py-1.5 px-3 hover:text-[#1c64ff] transition">Berita</a>
                </nav>

                <!-- Language Switcher & Login Button -->
                <div class="hidden lg:flex items-center space-x-3">
                    <!-- Language Selector -->
                    <div class="flex items-center space-x-1 bg-slate-100 p-1 rounded-full text-xs font-bold text-slate-600 border border-slate-200">
                        <button onclick="changeLang('ID')" id="lang-ID" class="px-2.5 py-1 rounded-full bg-[#1c64ff] text-white shadow-xs transition">ID</button>
                        <button onclick="changeLang('EN')" id="lang-EN" class="px-2.5 py-1 rounded-full hover:text-[#1c64ff] transition">EN</button>
                        <button onclick="changeLang('JPN')" id="lang-JPN" class="px-2.5 py-1 rounded-full hover:text-[#1c64ff] transition">JPN</button>
                    </div>

                    <a href="/admin/login" class="flex items-center space-x-2 text-slate-700 hover:text-[#0c1947] hover:bg-slate-100 px-4 py-2 rounded-full border border-slate-200 text-sm font-medium transition">
                        <svg class="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                        <span>Login</span>
                    </a>
                </div>

            </div>
        </div>
    </header>

    <!-- ==================== 2. HERO SHOWCASE SECTION ==================== -->
    <section id="hero" class="relative bg-[#255288] text-white overflow-hidden min-h-[580px] lg:min-h-[620px] flex flex-col justify-between pt-10 md:pt-14">
        
        <!-- Hero Background Image & Soft Blue Overlay -->
        <div class="absolute inset-0 z-0">
            <img src="{{ $hero->background_images[0] ?? 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1600' }}" alt="Gunungkidul Landscape" class="w-full h-full object-cover object-center opacity-80" />
            <div class="absolute inset-0 bg-gradient-to-r from-[#173e6e]/90 via-[#225088]/70 to-transparent"></div>
        </div>

        <!-- Main Hero Content -->
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <!-- Left Column: Typography -->
                <div class="lg:col-span-6 space-y-3 pt-4 md:pt-6">
                    <span class="text-xl md:text-2xl font-bold tracking-wide text-white drop-shadow-md">
                        {{ $hero->title1 ?? 'Explore' }}
                    </span>
                    <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white drop-shadow-lg uppercase font-sans">
                        {{ $hero->title2 ?? 'GUNUNGKIDUL' }}
                    </h1>
                    <p class="text-sm sm:text-base md:text-lg text-slate-100 max-w-xl font-normal leading-relaxed drop-shadow-xs pt-1">
                        {{ $hero->subtitle['ID'] ?? 'Dari tingginya pegunungan batu purba hingga jernihnya ombak pesisir selatan, Gunungkidul menawarkan petualangan tak terlupakan di mana warisan alam dan budaya menyatu dalam harmoni.' }}
                    </p>
                </div>

                <!-- Right Column: 3 Floating Destination Cards -->
                <div class="lg:col-span-6 flex items-center justify-center lg:justify-end gap-3 sm:gap-4 overflow-x-auto pb-4 pt-2 scrollbar-none">
                    @foreach($destinations as $idx => $dest)
                        <div class="group relative flex-shrink-0 w-36 sm:w-44 md:w-48 h-60 sm:h-72 rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 {{ $idx === 1 ? 'translate-y-0 sm:-translate-y-3' : '' }}">
                            <img src="{{ $dest->image }}" alt="{{ $dest->name }}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                            
                            <!-- Gradient Overlay -->
                            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-3 sm:p-4">
                                <!-- Golden Stars -->
                                <div class="flex items-center space-x-0.5 mb-1 text-amber-400">
                                    @for($i=0; $i<5; $i++)
                                        <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                    @endfor
                                </div>

                                <h3 class="font-bold text-xs sm:text-sm text-white line-clamp-2 leading-snug">
                                    {{ $dest->name }}
                                </h3>

                                <div class="flex items-start space-x-1 mt-1 text-[10px] sm:text-xs text-slate-200">
                                    <svg class="w-3 h-3 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
                                    <span class="line-clamp-1 opacity-90">{{ $dest->location }}</span>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>

            </div>
        </div>

        <!-- White Wave Organic Cutout Divider -->
        <div class="relative z-20 w-full overflow-hidden leading-none -mb-1">
            <svg class="relative block w-full h-16 sm:h-24 md:h-28 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0 C150,90 350,-40 500,50 C650,130 900,10 1200,60 L1200,120 L0,120 Z"></path>
            </svg>

            <!-- Organic Soft Gray Blobs on Bottom Right -->
            <div class="absolute right-4 md:right-12 bottom-2 md:bottom-4 pointer-events-none opacity-40">
                <svg class="w-24 h-24 md:w-36 md:h-36 text-slate-300 fill-current" viewBox="0 0 200 200">
                    <path d="M45.7,-59.2C58.3,-48.9,67,-33.8,70.1,-17.5C73.2,-1.2,70.7,16.3,62.8,30.3C54.9,44.3,41.6,54.8,26.4,62.1C11.2,69.4,-5.9,73.5,-22.3,70.2C-38.7,66.9,-54.4,56.2,-64.1,41.5C-73.8,26.8,-77.5,8.1,-73.8,-9C-70.1,-26.1,-59,-41.6,-45.3,-51.8C-31.6,-62,-15.8,-66.9,0.9,-68.1C17.6,-69.3,33.1,-69.5,45.7,-59.2Z" transform="translate(100 100)" />
                </svg>
            </div>
        </div>

    </section>

    <!-- ==================== 3. WELCOME & PHILOSOPHY SECTION ==================== -->
    <section id="about-section" class="relative bg-white py-12 md:py-20 overflow-hidden">
        
        <!-- Background Organic Blob Accent -->
        <div class="absolute -left-12 top-1/2 -translate-y-1/2 pointer-events-none opacity-20 hidden md:block">
            <svg class="w-64 h-64 text-slate-300 fill-current" viewBox="0 0 200 200">
                <path d="M48.2,-64.3C61.8,-53.8,71.7,-38.5,74.8,-22C77.9,-5.5,74.2,12.2,66.1,27.8C58,43.4,45.5,56.9,30.3,64.2C15.1,71.5,-2.8,72.6,-20.1,68C-37.4,63.4,-54.1,53,-63.8,38.3C-73.5,23.6,-76.2,4.6,-72.6,-12.9C-69,-30.4,-59.1,-46.4,-45.5,-56.9C-31.9,-67.4,-15.9,-72.4,0.7,-73.4C17.3,-74.4,34.6,-74.8,48.2,-64.3Z" transform="translate(100 100)" />
            </svg>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                <!-- Left Column: Story -->
                <div class="lg:col-span-5 space-y-4">
                    <div>
                        <h2 class="text-2xl sm:text-3xl font-extrabold text-[#173863] tracking-tight">
                            Selamat Datang di Website
                        </h2>
                        <h3 class="text-3xl sm:text-4xl font-black text-[#0c1947] tracking-tight uppercase mt-1">
                            TERRASEU
                        </h3>
                        <p class="text-sm font-semibold text-slate-500 tracking-wide mt-1">
                            Discover the Heart of Gunungkidul
                        </p>
                    </div>

                    <p class="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
                        Kata Terra (Bumi) dan Seu/sewu (Pegunungan Gunung Sewu) adalah portal digital ekowisata yang didedikasikan untuk mengenalkan pesona kekayaan alam dan budaya Kabupaten Gunungkidul.
                    </p>

                    <div class="pt-2">
                        <a href="#category-section" class="inline-flex items-center justify-center bg-[#28507e] hover:bg-[#1a385a] text-white font-medium text-sm px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition">
                            Baca Selengkapnya
                        </a>
                    </div>
                </div>

                <!-- Right Column: 3 Photo Collage Grid -->
                <div class="lg:col-span-7">
                    <div class="grid grid-cols-2 gap-3 sm:gap-4">
                        
                        <!-- Tall Left Image: Beach -->
                        <div class="col-span-1 row-span-2 rounded-3xl overflow-hidden shadow-lg h-[320px] sm:h-[420px]">
                            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" alt="Pantai Gunungkidul" class="w-full h-full object-cover" />
                        </div>

                        <!-- Top Right Image: Sign -->
                        <div class="col-span-1 rounded-2xl overflow-hidden shadow-md h-[152px] sm:h-[200px]">
                            <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800" alt="Gunungkidul Sign" class="w-full h-full object-cover" />
                        </div>

                        <!-- Bottom Right Image: Cave -->
                        <div class="col-span-1 rounded-2xl overflow-hidden shadow-md h-[152px] sm:h-[200px]">
                            <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800" alt="Gua Jomblang" class="w-full h-full object-cover" />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- ==================== 4. CATEGORY GRID SECTION ==================== -->
    <section id="category-section" class="relative bg-white py-10 md:py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                
                <!-- 1. Wisata Kuliner -->
                <div onclick="selectCategory(this, 'wisata-kuliner')" class="cat-card group cursor-pointer rounded-3xl p-5 flex flex-col items-center justify-between bg-white text-slate-800 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition min-h-[160px] sm:min-h-[190px]">
                    <div class="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                        <svg class="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 100 100" fill="none">
                            <path d="M 20 55 Q 50 75 80 55 C 80 55 75 70 50 70 C 25 70 20 55 20 55 Z" fill="#b91c1c" />
                            <path d="M 15 52 L 25 57 L 20 62 L 10 57 Z" fill="#7f1d1d" />
                            <path d="M 40 40 Q 42 25 38 15 Q 48 25 45 40 Z" fill="#f97316" />
                            <path d="M 55 42 Q 58 28 52 18 Q 62 28 60 42 Z" fill="#eab308" />
                            <path d="M 68 45 Q 72 32 66 22 Q 74 32 72 45 Z" fill="#ef4444" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-sm sm:text-base text-center text-slate-800 group-hover:text-[#1c64ff]">
                        Wisata Kuliner
                    </h3>
                </div>

                <!-- 2. Wisata Alam (ACTIVE GLOW STYLE MATCHING MOCKUP) -->
                <div onclick="selectCategory(this, 'wisata-alam')" class="cat-card relative group cursor-pointer rounded-3xl p-5 flex flex-col items-center justify-between bg-gradient-to-b from-[#5b96dc] to-[#3372c3] text-white border border-blue-400/50 shadow-[0_12px_30px_rgba(51,114,195,0.45)] scale-105 z-10 min-h-[160px] sm:min-h-[190px]">
                    <div class="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                        <svg class="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 100 100" fill="none">
                            <polygon points="50,15 20,70 80,70" fill="#ffffff" opacity="0.95" />
                            <polygon points="50,15 38,40 50,35 62,40" fill="#e0f2fe" />
                            <polygon points="35,45 10,85 60,85" fill="#38bdf8" opacity="0.8" />
                            <polygon points="65,40 40,85 90,85" fill="#0284c7" opacity="0.9" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-sm sm:text-base text-center text-white drop-shadow-xs">
                        Wisata Alam
                    </h3>
                </div>

                <!-- 3. Jelajah Budaya -->
                <div onclick="selectCategory(this, 'jelajah-budaya')" class="cat-card group cursor-pointer rounded-3xl p-5 flex flex-col items-center justify-between bg-white text-slate-800 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition min-h-[160px] sm:min-h-[190px]">
                    <div class="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                        <svg class="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 100 100" fill="none">
                            <circle cx="50" cy="22" r="10" fill="#f59e0b" />
                            <path d="M 40 18 Q 50 10 60 18 L 58 22 L 42 22 Z" fill="#78350f" />
                            <path d="M 40 35 Q 50 28 60 35 L 75 75 L 25 75 Z" fill="#d97706" />
                            <path d="M 25 45 Q 10 55 20 70 Q 30 65 30 50 Z" fill="#fef08a" />
                            <path d="M 75 45 Q 90 55 80 70 Q 70 65 70 50 Z" fill="#fef08a" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-sm sm:text-base text-center text-slate-800 group-hover:text-[#1c64ff]">
                        Jelajah Budaya
                    </h3>
                </div>

                <!-- 4. Wisata Religi -->
                <div onclick="selectCategory(this, 'wisata-religi')" class="cat-card group cursor-pointer rounded-3xl p-5 flex flex-col items-center justify-between bg-white text-slate-800 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition min-h-[160px] sm:min-h-[190px]">
                    <div class="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                        <svg class="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 100 100" fill="none">
                            <path d="M 45 25 A 12 12 0 1 1 35 40 A 10 10 0 1 0 45 25 Z" fill="#7c2d12" />
                            <path d="M 60 20 H 66 V 40 H 60 Z M 55 26 H 71 V 31 H 55 Z" fill="#7c2d12" />
                            <path d="M 25 60 H 45 V 63 H 25 Z M 22 55 H 48 V 58 H 22 Z M 28 58 V 80 H 32 V 58 Z M 38 58 V 80 H 42 V 58 Z" fill="#7c2d12" />
                            <path d="M 52 60 Q 60 50 68 60 Q 60 80 52 60 Z" fill="#9a3412" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-sm sm:text-base text-center text-slate-800 group-hover:text-[#1c64ff]">
                        Wisata Religi
                    </h3>
                </div>

                <!-- 5. Wisata Sejarah -->
                <div onclick="selectCategory(this, 'wisata-sejarah')" class="cat-card group cursor-pointer rounded-3xl p-5 flex flex-col items-center justify-between bg-white text-slate-800 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition min-h-[160px] sm:min-h-[190px]">
                    <div class="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                        <svg class="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 100 100" fill="none">
                            <circle cx="50" cy="40" r="24" stroke="#78350f" stroke-width="4" fill="#fef3c7" />
                            <ellipse cx="50" cy="40" rx="24" ry="10" stroke="#b45309" stroke-width="2" fill="none" />
                            <line x1="50" y1="16" x2="50" y2="64" stroke="#b45309" stroke-width="2" />
                            <path d="M 50 64 V 80 M 35 80 H 65" stroke="#78350f" stroke-width="5" stroke-linecap="round" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-sm sm:text-base text-center text-slate-800 group-hover:text-[#1c64ff]">
                        Wisata Sejarah
                    </h3>
                </div>

                <!-- 6. Edukasi -->
                <div onclick="selectCategory(this, 'edukasi')" class="cat-card group cursor-pointer rounded-3xl p-5 flex flex-col items-center justify-between bg-white text-slate-800 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition min-h-[160px] sm:min-h-[190px]">
                    <div class="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                        <svg class="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 100 100" fill="none">
                            <path d="M 20 65 Q 50 55 50 80 Q 50 55 80 65 L 80 85 Q 50 75 50 90 Q 50 75 20 85 Z" fill="#f59e0b" />
                            <path d="M 50 15 C 38 15 32 28 38 42 L 42 50 H 58 L 62 42 C 68 28 62 15 50 15 Z" fill="#fbbf24" />
                            <rect x="44" y="52" width="12" height="6" fill="#64748b" rx="2" />
                            <line x1="50" y1="5" x2="50" y2="10" stroke="#f59e0b" stroke-width="3" />
                            <line x1="28" y1="18" x2="32" y2="22" stroke="#f59e0b" stroke-width="3" />
                            <line x1="72" y1="18" x2="68" y2="22" stroke="#f59e0b" stroke-width="3" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-sm sm:text-base text-center text-slate-800 group-hover:text-[#1c64ff]">
                        Edukasi
                    </h3>
                </div>

            </div>

        </div>
    </section>

    <!-- ==================== 5. EMERGENCY CONTACT BANNER SECTION ==================== -->
    <section id="emergency-section" class="relative bg-white pb-16 pt-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="border border-slate-300 rounded-3xl p-6 sm:p-8 bg-white shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition hover:border-slate-400">
                
                <!-- Left Text -->
                <div class="max-w-3xl space-y-2">
                    <div class="flex items-center space-x-2">
                        <svg class="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                        <h2 class="text-xl sm:text-2xl font-extrabold text-[#1a385a] font-sans">
                            {{ $emergencyContact->title ?? 'Layanan Kontak Darurat Gunungkidul' }}
                        </h2>
                    </div>

                    <p class="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
                        {{ $emergencyContact->description ?? 'Saat mengeksplorasi destinasi alam, pantai, maupun gua bawah tanah di Gunungkidul, situasi darurat bisa terjadi kapan saja. Simpan dan gunakan daftar kontak darurat resmi di bawah ini untuk mendapatkan bantuan cepat dari pihak berwenang.' }}
                    </p>
                </div>

                <!-- Right Button -->
                <div class="flex-shrink-0 w-full md:w-auto flex justify-end">
                    <a href="tel:112" class="w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-[#28507e] hover:bg-[#183558] text-white font-medium text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition">
                        <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                        <span>{{ $emergencyContact->button_text ?? 'Cek informasi' }}</span>
                    </a>
                </div>

            </div>

        </div>

        <!-- Bottom Wave Transition Accent -->
        <div class="absolute left-0 right-0 bottom-0 pointer-events-none opacity-30 flex justify-end">
            <svg class="w-48 h-16 text-slate-200 fill-current" viewBox="0 0 500 150" preserveAspectRatio="none">
                <path d="M 0 150 Q 250 50 500 150 L 500 150 L 0 150 Z"></path>
            </svg>
        </div>
    </section>

    <!-- ==================== 6. FOOTER ==================== -->
    <footer class="bg-[#0c1947] text-white pt-12 pb-8 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800/80 text-sm">
                
                <div class="space-y-3">
                    <div class="flex items-center space-x-2">
                        <div class="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center p-1">
                            <span class="font-extrabold text-white text-xs">TR</span>
                        </div>
                        <span class="font-black text-xl tracking-tight text-white">TERRASEU</span>
                    </div>
                    <p class="text-xs text-slate-400 leading-relaxed">
                        Portal resmi promosi ekowisata dan warisan budaya Kabupaten Gunungkidul, D.I. Yogyakarta.
                    </p>
                </div>

                <div>
                    <h4 class="font-bold text-white mb-3">Navigasi Wisata</h4>
                    <ul class="space-y-2 text-xs text-slate-300">
                        <li><a href="#hero" class="hover:text-blue-400">Home & Hero Showcase</a></li>
                        <li><a href="#about-section" class="hover:text-blue-400">Filosofi TERRASEU</a></li>
                        <li><a href="#category-section" class="hover:text-blue-400">Kategori Wisata Alam</a></li>
                        <li><a href="#emergency-section" class="hover:text-blue-400">Layanan Darurat 112</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold text-white mb-3">Dinas Terkait</h4>
                    <ul class="space-y-2 text-xs text-slate-300">
                        <li><a href="#" class="hover:text-blue-400">Dinas Pariwisata Gunungkidul</a></li>
                        <li><a href="#" class="hover:text-blue-400">UNESCO Global Geopark Sewu</a></li>
                        <li><a href="#" class="hover:text-blue-400">SAR Satlinmas Wilayah II Baron</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold text-white mb-3">Sistem Administrasi</h4>
                    <p class="text-xs text-slate-400 mb-3">
                        Pengelolaan konten destinasi, hero slider, & kontak darurat via Filament PHP Admin panel.
                    </p>
                    <a href="/admin/login" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-lg transition">
                        Buka Panel CMS Filament
                    </a>
                </div>

            </div>

            <div class="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
                <p>© 2026 TERRASEU - Discover the Heart of Gunungkidul. Monolithic Laravel 12 Architecture.</p>
                <p class="mt-2 sm:mt-0">Powered by Laravel 12, Filament PHP, & Tailwind CSS v4</p>
            </div>
        </div>
    </footer>

</body>
</html>
