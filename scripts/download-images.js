import fs from 'fs';
import path from 'path';
import https from 'https';

const publicImagesDir = path.join(process.cwd(), 'public', 'images');
const distImagesDir = path.join(process.cwd(), 'dist', 'images');

[publicImagesDir, distImagesDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const imagesMap = [
  {
    filename: 'heha-sky-view.jpg',
    // Modern hilltop sky deck overlooking city view at sunset / night lights
    url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80'
  },
  {
    filename: 'goa-jomblang.jpg',
    // Vertical cave cavern with spectacular beam of sunlight (Ray of Light)
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
  },
  {
    filename: 'pantai-indrayanti.jpg',
    // Tropical white sand beach with clear blue ocean water and limestone cliffs
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    filename: 'tebing-breksi.jpg',
    // Magnificent limestone cliff rock carvings / quarry mountain
    url: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80'
  },
  {
    filename: 'gatot-tiwul.jpg',
    // Traditional Indonesian food delicacy
    url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    filename: 'bakmi-jawa.jpg',
    // Javanese noodle soup bowl
    url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80'
  },
  {
    filename: 'walang-goreng.jpg',
    // Crispy savory snack dish
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
  },
  {
    filename: 'santika-resort.jpg',
    // Luxury hotel resort with swimming pool
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'
  },
  {
    filename: 'queen-of-the-south.jpg',
    // Oceanfront cliff resort infinity pool
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    filename: 'nglanggeran-homestay.jpg',
    // Eco wooden cottage in green mountain village
    url: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80'
  },
  {
    filename: 'tugu-gunungkidul.jpg',
    // Town monument / park landmark
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80'
  },
  {
    filename: 'diskominfo.jpg',
    // Broadcast radio & news media studio
    url: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80'
  },
  {
    filename: 'karang-taruna.jpg',
    // Youth organization community group
    url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80'
  },
  {
    filename: 'pokdarwis.jpg',
    // Ecotourism local community group
    url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80'
  },
  {
    filename: 'upacara-bersih-desa.jpg',
    // Traditional Javanese cultural festival parade
    url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'
  },
  {
    filename: 'konser-lapangan.jpg',
    // Outdoor music festival stage
    url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80'
  },
  {
    filename: 'kite-festival.jpg',
    // Kites flying in blue sky over beach
    url: 'https://images.unsplash.com/photo-1534329539061-64caeb388c42?auto=format&fit=crop&w=1200&q=80'
  },
  {
    filename: 'event-musik.jpg',
    // Acoustic live music concert
    url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80'
  }
];

function downloadFile(fileUrl, outputPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    https.get(fileUrl, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadFile(response.headers.location, outputPath).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
    }).on('error', (err) => {
      fs.unlink(outputPath, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log('Downloading accurate images into public/images/ and dist/images/...');
  for (const img of imagesMap) {
    const publicDest = path.join(publicImagesDir, img.filename);
    const distDest = path.join(distImagesDir, img.filename);
    try {
      await downloadFile(img.url, publicDest);
      fs.copyFileSync(publicDest, distDest);
      console.log(`✓ Updated ${img.filename}`);
    } catch (err) {
      console.error(`✕ Failed ${img.filename}:`, err);
    }
  }
  console.log('Done downloading accurate images.');
}

main();
