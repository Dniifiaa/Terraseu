import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // In-Memory Database State matching TerraseuSeeder
  const state = {
    hero: {
      id: 1,
      title1: "TERRASEU",
      title2: "DISCOVER THE HEART OF GUNUNGKIDUL",
      subtitle: {
        ID: "Jelajahi keajaiban ekowisata karst, pantai pasir putih eksotis, dan warisan kebudayaan yang memikat di Gunungkidul, Yogyakarta.",
        EN: "Explore the wonders of karst ecotourism, exotic white-sand beaches, and captivating cultural heritage in Gunungkidul, Yogyakarta."
      },
      background_images: [
        "/images/heha-sky-view.jpg",
        "/images/pantai-indrayanti.jpg",
        "/images/goa-jomblang.jpg"
      ],
      is_active: true
    },
    categories: [
      { id: 1, name: "Wisata Kuliner", slug: "wisata-kuliner", icon: "utensils", is_active: true, order: 1 },
      { id: 2, name: "Wisata Alam", slug: "wisata-alam", icon: "mountain", is_active: true, order: 2 },
      { id: 3, name: "Jelajah Budaya", slug: "jelajah-budaya", icon: "landmark", is_active: true, order: 3 },
      { id: 4, name: "Wisata Religi", slug: "wisata-religi", icon: "sun", is_active: true, order: 4 },
      { id: 5, name: "Wisata Sejarah", slug: "wisata-sejarah", icon: "history", is_active: true, order: 5 },
      { id: 6, name: "Edukasi", slug: "edukasi", icon: "book", is_active: true, order: 6 },
      { id: 7, name: "Akomodasi & Penginapan", slug: "akomodasi", icon: "home", is_active: true, order: 7 }
    ],
    destinations: [
      {
        id: 1,
        category_id: 2,
        category_slug: "wisata-alam",
        name: "HeHa Sky View",
        slug: "heha-sky-view",
        location: "Patuk, Gunungkidul",
        description: "Tempat wisata hits ini menawarkan kombinasi restoran bertingkat, spot foto selfie modern berlatar perkotaan Jogja, dan pemandangan sunset memukau.",
        rating: 4.9,
        image: "/images/heha-sky-view.jpg",
        is_featured: true,
        is_active: true,
        order: 1
      },
      {
        id: 2,
        category_id: 2,
        category_slug: "wisata-alam",
        name: "Goa Jomblang",
        slug: "goa-jomblang",
        location: "Semanu, Gunungkidul",
        description: "Goa vertikal purba spektakuler terkenal dengan fenomena 'Cahaya Surga' (Ray of Light) yang menembus atap goa, dikelilingi hutan purba yang sangat alami.",
        rating: 5.0,
        image: "/images/goa-jomblang.jpg",
        is_featured: true,
        is_active: true,
        order: 2
      },
      {
        id: 3,
        category_id: 2,
        category_slug: "wisata-alam",
        name: "Pantai Indrayanti",
        slug: "pantai-indrayanti",
        location: "Tepus, Gunungkidul",
        description: "Pantai pasir putih eksotis dengan air laut jernih kebiruan dan tebing karang megah, menawarkan pemandangan sunset memukau serta fasilitas restoran tepi pantai yang lengkap.",
        rating: 4.9,
        image: "/images/pantai-indrayanti.jpg",
        is_featured: true,
        is_active: true,
        order: 3
      },
      {
        id: 4,
        category_id: 2,
        category_slug: "wisata-alam",
        name: "Tebing Breksi",
        slug: "tebing-breksi",
        location: "Sleman / Gunungkidul",
        description: "Kawasan bekas penambangan batu alam yang disulap menjadi tempat wisata pahatan seni tebing megah berornamen relief naga dan pewayangan.",
        rating: 4.8,
        image: "/images/tebing-breksi.jpg",
        is_featured: true,
        is_active: true,
        order: 4
      },
      {
        id: 5,
        category_id: 1,
        category_slug: "wisata-kuliner",
        name: "Gatot & Tiwul Yu Tum",
        slug: "gatot-tiwul-yu-tum",
        location: "Wonosari, Gunungkidul",
        description: "Kuliner tradisional legendaris khas Gunungkidul terbuat dari olahan singkong bertekstur kenyal, gurih, dan manis yang disajikan hangat dengan taburan kelapa parut.",
        rating: 4.8,
        image: "/images/gatot-tiwul.jpg",
        is_featured: false,
        is_active: true,
        order: 5
      },
      {
        id: 6,
        category_id: 1,
        category_slug: "wisata-kuliner",
        name: "Bakmi Jawa Piyungan",
        slug: "bakmi-jawa-piyungan",
        location: "Gunungkidul",
        description: "Mie godhog atau goreng autentik yang dimasak satu per satu di atas tungku arang tradisional dengan kuah kaldu ayam kampung kental bertabur remahan telur.",
        rating: 4.7,
        image: "/images/bakmi-jawa.jpg",
        is_featured: false,
        is_active: true,
        order: 6
      },
      {
        id: 7,
        category_id: 1,
        category_slug: "wisata-kuliner",
        name: "Walang Goreng Gurih",
        slug: "walang-goreng",
        location: "Semanu, Gunungkidul",
        description: "Camilan ekstrim khas Gunungkidul dari belalang kayu pilihan yang digoreng garing renyah kaya protein dengan bumbu gurih manis atau pedas.",
        rating: 4.6,
        image: "/images/walang-goreng.jpg",
        is_featured: false,
        is_active: true,
        order: 7
      },
      {
        id: 8,
        category_id: 7,
        category_slug: "akomodasi",
        name: "Santika Resort & Spa Gunungkidul",
        slug: "santika-resort",
        location: "Wonosari, Gunungkidul",
        description: "Resort berbintang elegan dengan fasilitas infinity pool, restoran mewah, dan panorama perbukitan hijau perbukitan karst Gunungkidul.",
        rating: 4.9,
        image: "/images/santika-resort.jpg",
        is_featured: false,
        is_active: true,
        order: 8
      },
      {
        id: 9,
        category_id: 7,
        category_slug: "akomodasi",
        name: "Queen of the South Beach Resort",
        slug: "queen-of-the-south",
        location: "Parangtritis / Purwosari",
        description: "Resort mewah tepi tebing pantai pesisir selatan dengan pemandangan Samudra Hindia spektakuler langsung dari infinity pool tebing tinggi.",
        rating: 4.8,
        image: "/images/queen-of-the-south.jpg",
        is_featured: false,
        is_active: true,
        order: 9
      },
      {
        id: 10,
        category_id: 7,
        category_slug: "akomodasi",
        name: "Nglanggeran Eco Homestay",
        slug: "nglanggeran-homestay",
        location: "Patuk, Gunungkidul",
        description: "Penginapan ramah lingkungan khas rumah warga lokal berlatarkan panorama megah Gunung Api Purba Nglanggeran.",
        rating: 4.8,
        image: "/images/nglanggeran-homestay.jpg",
        is_featured: false,
        is_active: true,
        order: 10
      }
    ],
    emergencyContacts: [
      {
        id: 1,
        title: "Layanan Bantuan Darurat Medis & Ambulance RSUD Wonosari",
        description: "Unit Gawat Darurat (UGD) siap tanggap 24 jam untuk kondisi medis darurat wisatawan di wilayah Gunungkidul.",
        phone_number: "119 / (0274) 391288",
        button_text: "Hubungi UGD",
        is_active: true
      },
      {
        id: 2,
        title: "Tim Posko SAR Pantai & Penyelamatan Laut Gunungkidul",
        description: "Tim SAR Pantai Wilayah I & II siap siaga mengamankan aktivitas keselamatan laut wisatawan.",
        phone_number: "(0274) 391110 / 0812-2700-110",
        button_text: "Hubungi Posko SAR",
        is_active: true
      }
    ],
    organizations: [
      {
        id: 1,
        name: "PDDI Ranting Wonosari",
        image: "/images/diskominfo.jpg",
        desc: {
          ID: "Persatuan Donor Darah Indonesia Ranting Wonosari aktif berkontribusi sosial kemanusiaan.",
          EN: "Indonesian Blood Donor Association Wonosari Branch actively contributing to social humanitarian activities."
        },
        is_active: true
      },
      {
        id: 2,
        name: "Karang Taruna GEMPUR",
        image: "/images/karang-taruna.jpg",
        desc: {
          ID: "Gerakan Pemuda Pemudi Karang Taruna penggerak acara kebudayaan dan pemberdayaan desa.",
          EN: "Youth organization movement driving cultural events and rural village empowerment."
        },
        is_active: true
      },
      {
        id: 3,
        name: "GASSAK Ekowisata",
        image: "/images/pokdarwis.jpg",
        desc: {
          ID: "Komunitas pemuda kreatif penyedia pemandu wisata dan pelestari lingkungan ekowisata.",
          EN: "Creative youth community providing local tour guides and ecotourism environmental preservers."
        },
        is_active: true
      },
      {
        id: 4,
        name: "POKDARWIS Gunungkidul",
        image: "/images/tugu-gunungkidul.jpg",
        desc: {
          ID: "Kelompok masyarakat sadar wisata yang fokus pada pelayanan kebersihan dan kenyamanan pengunjung.",
          EN: "Tourism-conscious community group focused on cleanliness services and visitor comfort."
        },
        is_active: true
      }
    ],
    events: [
      {
        id: 1,
        title: "Upacara Adat Bersih Desa (Rasulan)",
        image: "/images/upacara-bersih-desa.jpg",
        date: "Tahunan (Agustus)",
        desc: {
          ID: "Ritual budaya tahunan Gunungkidul sebagai wujud rasa syukur atas hasil bumi dan keselamatan.",
          EN: "Annual cultural ceremony in Gunungkidul as an expression of gratitude for harvests and safety."
        },
        is_active: true
      },
      {
        id: 2,
        title: "Cherrypop Music Festival",
        image: "/images/konser-lapangan.jpg",
        date: "Juli 2026",
        desc: {
          ID: "Festival musik dan seni pop pemuda bergengsi yang dihadiri ribuan pecinta budaya pop.",
          EN: "Prestigious youth music and pop art festival attended by thousands of pop culture lovers."
        },
        is_active: true
      },
      {
        id: 3,
        title: "International Kite Festival",
        image: "/images/kite-festival.jpg",
        date: "September 2026",
        desc: {
          ID: "Festival layang-layang internasional menghiasi langit pantai pesisir selatan Gunungkidul.",
          EN: "International kite festival decorating the southern coastal skies of Gunungkidul beaches."
        },
        is_active: true
      },
      {
        id: 4,
        title: "Keroncong Plesiran Geopark",
        image: "/images/event-musik.jpg",
        date: "Oktober 2026",
        desc: {
          ID: "Konser musik keroncong syahdu di alam terbuka berlatar pemandangan pegunungan karst.",
          EN: "Serene keroncong music concert outdoors set against the backdrop of karst mountain views."
        },
        is_active: true
      }
    ]
  };

  // RESTful API Endpoints (/api/v1/*)
  app.get("/api/v1/hero", (req, res) => {
    res.json({ success: true, message: "Hero data retrieved", data: state.hero });
  });

  app.put("/api/v1/hero", (req, res) => {
    state.hero = { ...state.hero, ...req.body };
    res.json({ success: true, message: "Hero data updated", data: state.hero });
  });

  app.get("/api/v1/categories", (req, res) => {
    res.json({ success: true, message: "Categories list retrieved", data: state.categories });
  });

  app.post("/api/v1/categories", (req, res) => {
    const newCategory = {
      id: state.categories.length > 0 ? Math.max(...state.categories.map(c => c.id)) + 1 : 1,
      name: req.body.name || "Kategori Baru",
      slug: (req.body.name || "kategori-baru").toLowerCase().replace(/\s+/g, '-'),
      icon: req.body.icon || "compass",
      is_active: req.body.is_active ?? true,
      order: state.categories.length + 1
    };
    state.categories.push(newCategory);
    res.json({ success: true, message: "Category created", data: newCategory });
  });

  app.put("/api/v1/categories/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = state.categories.findIndex(c => c.id === id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }
    state.categories[index] = { ...state.categories[index], ...req.body };
    res.json({ success: true, message: "Category updated", data: state.categories[index] });
  });

  app.delete("/api/v1/categories/:id", (req, res) => {
    const id = parseInt(req.params.id);
    state.categories = state.categories.filter(c => c.id !== id);
    res.json({ success: true, message: "Category deleted" });
  });

  app.get("/api/v1/destinations", (req, res) => {
    res.json({ success: true, message: "Destinations list retrieved", data: state.destinations });
  });

  app.get("/api/v1/destinations/:slug", (req, res) => {
    const found = state.destinations.find(d => d.slug === req.params.slug);
    if (!found) {
      return res.status(404).json({ success: false, message: "Destination not found", data: null });
    }
    res.json({ success: true, message: "Destination detail retrieved", data: found });
  });

  app.post("/api/v1/destinations", (req, res) => {
    const newDest = {
      id: state.destinations.length > 0 ? Math.max(...state.destinations.map(d => d.id)) + 1 : 1,
      category_id: req.body.category_id || 2,
      category_slug: req.body.category_slug || "wisata-alam",
      name: req.body.name || "Destinasi Baru",
      slug: (req.body.name || "destinasi-baru").toLowerCase().replace(/\s+/g, '-'),
      location: req.body.location || "Gunungkidul",
      description: req.body.description || "Deskripsi destinasi...",
      rating: req.body.rating ? parseFloat(req.body.rating) : 5.0,
      image: req.body.image || "/images/pantai-indrayanti.jpg",
      is_featured: req.body.is_featured ?? true,
      is_active: req.body.is_active ?? true,
      order: state.destinations.length + 1
    };
    state.destinations.push(newDest);
    res.json({ success: true, message: "Destination created", data: newDest });
  });

  app.put("/api/v1/destinations/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = state.destinations.findIndex(d => d.id === id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: "Destination not found" });
    }
    state.destinations[index] = { ...state.destinations[index], ...req.body };
    res.json({ success: true, message: "Destination updated", data: state.destinations[index] });
  });

  app.delete("/api/v1/destinations/:id", (req, res) => {
    const id = parseInt(req.params.id);
    state.destinations = state.destinations.filter(d => d.id !== id);
    res.json({ success: true, message: "Destination deleted" });
  });

  app.get("/api/v1/emergency-contacts", (req, res) => {
    res.json({ success: true, message: "Emergency contacts retrieved", data: state.emergencyContacts });
  });

  app.post("/api/v1/emergency-contacts", (req, res) => {
    const newContact = {
      id: state.emergencyContacts.length > 0 ? Math.max(...state.emergencyContacts.map(c => c.id)) + 1 : 1,
      title: req.body.title || "Layanan Darurat Baru",
      description: req.body.description || "Deskripsi layanan...",
      phone_number: req.body.phone_number || "119",
      button_text: req.body.button_text || "Hubungi",
      is_active: req.body.is_active ?? true
    };
    state.emergencyContacts.push(newContact);
    res.json({ success: true, message: "Emergency contact created", data: newContact });
  });

  app.put("/api/v1/emergency-contacts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = state.emergencyContacts.findIndex(c => c.id === id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: "Emergency contact not found" });
    }
    state.emergencyContacts[index] = { ...state.emergencyContacts[index], ...req.body };
    res.json({ success: true, message: "Emergency contact updated", data: state.emergencyContacts[index] });
  });

  app.delete("/api/v1/emergency-contacts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    state.emergencyContacts = state.emergencyContacts.filter(c => c.id !== id);
    res.json({ success: true, message: "Emergency contact deleted" });
  });

  // Organizations API Endpoints
  app.get("/api/v1/organizations", (req, res) => {
    res.json({ success: true, message: "Organizations retrieved", data: state.organizations });
  });

  app.post("/api/v1/organizations", (req, res) => {
    const newOrg = {
      id: state.organizations.length > 0 ? Math.max(...state.organizations.map(o => o.id)) + 1 : 1,
      name: req.body.name || "Organisasi Baru",
      image: req.body.image || "/images/diskominfo.jpg",
      desc: req.body.desc || {
        ID: req.body.description || "Deskripsi organisasi...",
        EN: req.body.description || "Organization description..."
      },
      is_active: req.body.is_active ?? true
    };
    state.organizations.push(newOrg);
    res.json({ success: true, message: "Organization created", data: newOrg });
  });

  app.put("/api/v1/organizations/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = state.organizations.findIndex(o => o.id === id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: "Organization not found" });
    }
    state.organizations[index] = { ...state.organizations[index], ...req.body };
    res.json({ success: true, message: "Organization updated", data: state.organizations[index] });
  });

  app.delete("/api/v1/organizations/:id", (req, res) => {
    const id = parseInt(req.params.id);
    state.organizations = state.organizations.filter(o => o.id !== id);
    res.json({ success: true, message: "Organization deleted" });
  });

  // Events API Endpoints
  app.get("/api/v1/events", (req, res) => {
    res.json({ success: true, message: "Events retrieved", data: state.events });
  });

  app.post("/api/v1/events", (req, res) => {
    const newEvent = {
      id: state.events.length > 0 ? Math.max(...state.events.map(e => e.id)) + 1 : 1,
      title: req.body.title || "Event Kebudayaan Baru",
      image: req.body.image || "/images/upacara-bersih-desa.jpg",
      date: req.body.date || "2026",
      desc: req.body.desc || {
        ID: req.body.description || "Deskripsi event...",
        EN: req.body.description || "Event description..."
      },
      is_active: req.body.is_active ?? true
    };
    state.events.push(newEvent);
    res.json({ success: true, message: "Event created", data: newEvent });
  });

  app.put("/api/v1/events/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = state.events.findIndex(e => e.id === id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }
    state.events[index] = { ...state.events[index], ...req.body };
    res.json({ success: true, message: "Event updated", data: state.events[index] });
  });

  app.delete("/api/v1/events/:id", (req, res) => {
    const id = parseInt(req.params.id);
    state.events = state.events.filter(e => e.id !== id);
    res.json({ success: true, message: "Event deleted" });
  });

  // Mount Vite Middleware for Dev Mode
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`TERRASEU Monolith Application running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
