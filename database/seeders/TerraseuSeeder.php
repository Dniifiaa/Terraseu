<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Destination;
use App\Models\EmergencyContact;
use App\Models\Hero;
use App\Models\Organization;
use App\Models\Event;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TerraseuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1. Seed Categories
        $categories = [
            ['name' => 'Wisata Kuliner', 'slug' => 'wisata-kuliner', 'icon' => 'UtensilsCrossed', 'order' => 1],
            ['name' => 'Wisata Alam', 'slug' => 'wisata-alam', 'icon' => 'MountainSnow', 'order' => 2],
            ['name' => 'Jelajah Budaya', 'slug' => 'jelajah-budaya', 'icon' => 'UserCheck', 'order' => 3],
            ['name' => 'Wisata Religi', 'slug' => 'wisata-religi', 'icon' => 'Landmark', 'order' => 4],
            ['name' => 'Wisata Sejarah', 'slug' => 'wisata-sejarah', 'icon' => 'Globe', 'order' => 5],
            ['name' => 'Edukasi', 'slug' => 'edukasi', 'icon' => 'Lightbulb', 'order' => 6],
        ];

        foreach ($categories as $cat) {
            Category::updateOrCreate(['slug' => $cat['slug']], $cat);
        }

        $alamCategory = Category::where('slug', 'wisata-alam')->first();

        // 2. Seed Destinations
        $destinations = [
            [
                'category_id'  => $alamCategory->id,
                'name'         => 'Gunung Api Purba Nglanggeran',
                'slug'         => 'gunung-api-purba-nglanggeran',
                'location'     => 'Nglanggeran Wetan',
                'description'  => 'Kawasan gunung batu purba berumur 60-70 juta tahun dengan puncak karst menakjubkan dan panorama matahari terbit terbaik di Gunung Kidul.',
                'rating'       => 5.00,
                'image'        => '/images/nglanggeran-homestay.jpg',
                'is_featured'  => true,
                'order'        => 1,
            ],
            [
                'category_id'  => $alamCategory->id,
                'name'         => 'Kalisuci Cave Tubing',
                'slug'         => 'kalisuci-cave-tubing',
                'location'     => 'Jetis,pacarejo kec. Semanu',
                'description'  => 'Petualangan cave tubing menyusuri sungai bawah tanah Pegunungan Sewu karst dengan pemandangan ornamen stalaktit purba yang memesona.',
                'rating'       => 5.00,
                'image'        => '/images/pantai-indrayanti.jpg',
                'is_featured'  => true,
                'order'        => 2,
            ],
            [
                'category_id'  => $alamCategory->id,
                'name'         => 'Embung Nglanggeran',
                'slug'         => 'embung-nglanggeran',
                'location'     => 'Nglanggeran Wetan',
                'description'  => 'Danau buatan di puncak bukit yang menawarkan pemandangan sunset memukau berlatarkan tebing batuan purba Nglanggeran.',
                'rating'       => 4.80,
                'image'        => '/images/tebing-breksi.jpg',
                'is_featured'  => true,
                'order'        => 3,
            ],
        ];

        foreach ($destinations as $dest) {
            Destination::updateOrCreate(['slug' => $dest['slug']], $dest);
        }

        // 3. Seed Organizations
        $organizations = [
            [
                'id'        => 1,
                'name'      => 'PDDI Ranting Wonosari',
                'image'     => '/images/diskominfo.jpg',
                'desc'      => [
                    'ID' => 'Persatuan Donor Darah Indonesia Ranting Wonosari aktif berkontribusi sosial kemanusiaan.',
                    'EN' => 'Indonesian Blood Donor Association Wonosari Branch actively contributing to social humanitarian activities.',
                ],
                'is_active' => true,
                'order'     => 1,
            ],
            [
                'id'        => 2,
                'name'      => 'Karang Taruna GEMPUR',
                'image'     => '/images/karang-taruna.jpg',
                'desc'      => [
                    'ID' => 'Gerakan Pemuda Pemudi Karang Taruna penggerak acara kebudayaan dan pemberdayaan desa.',
                    'EN' => 'Youth organization movement driving cultural events and rural village empowerment.',
                ],
                'is_active' => true,
                'order'     => 2,
            ],
            [
                'id'        => 3,
                'name'      => 'GASSAK Ekowisata',
                'image'     => '/images/pokdarwis.jpg',
                'desc'      => [
                    'ID' => 'Komunitas pemuda kreatif penyedia pemandu wisata dan pelestari lingkungan ekowisata.',
                    'EN' => 'Creative youth community providing local tour guides and ecotourism environmental preservers.',
                ],
                'is_active' => true,
                'order'     => 3,
            ],
            [
                'id'        => 4,
                'name'      => 'POKDARWIS Gunung Kidul',
                'image'     => '/images/tugu-gunungkidul.jpg',
                'desc'      => [
                    'ID' => 'Kelompok masyarakat sadar wisata yang fokus pada pelayanan kebersihan dan kenyamanan pengunjung.',
                    'EN' => 'Tourism-conscious community group focused on cleanliness services and visitor comfort.',
                ],
                'is_active' => true,
                'order'     => 4,
            ],
        ];

        foreach ($organizations as $org) {
            Organization::updateOrCreate(['id' => $org['id']], $org);
        }

        // 4. Seed Events
        $events = [
            [
                'id'        => 1,
                'title'     => 'Upacara Adat Bersih Desa (Rasulan)',
                'image'     => '/images/upacara-bersih-desa.jpg',
                'date'      => 'Tahunan (Agustus)',
                'desc'      => [
                    'ID' => 'Ritual budaya tahunan Gunung Kidul sebagai wujud rasa syukur atas hasil bumi dan keselamatan.',
                    'EN' => 'Annual cultural ceremony in Gunung Kidul as an expression of gratitude for harvests and safety.',
                ],
                'is_active' => true,
                'order'     => 1,
            ],
            [
                'id'        => 2,
                'title'     => 'Cherrypop Music Festival',
                'image'     => '/images/konser-lapangan.jpg',
                'date'      => 'Juli 2026',
                'desc'      => [
                    'ID' => 'Festival musik dan seni pop pemuda bergengsi yang dihadiri ribuan pecinta budaya pop.',
                    'EN' => 'Prestigious youth music and pop art festival attended by thousands of pop culture lovers.',
                ],
                'is_active' => true,
                'order'     => 2,
            ],
            [
                'id'        => 3,
                'title'     => 'International Kite Festival',
                'image'     => '/images/kite-festival.jpg',
                'date'      => 'September 2026',
                'desc'      => [
                    'ID' => 'Festival layang-layang internasional menghiasi langit pantai pesisir selatan Gunung Kidul.',
                    'EN' => 'International kite festival decorating the southern coastal skies of Gunung Kidul beaches.',
                ],
                'is_active' => true,
                'order'     => 3,
            ],
            [
                'id'        => 4,
                'title'     => 'Keroncong Plesiran Geopark',
                'image'     => '/images/event-musik.jpg',
                'date'      => 'Oktober 2026',
                'desc'      => [
                    'ID' => 'Konser musik keroncong syahdu di alam terbuka berlatar pemandangan pegunungan karst.',
                    'EN' => 'Serene keroncong music concert outdoors set against the backdrop of karst mountain views.',
                ],
                'is_active' => true,
                'order'     => 4,
            ],
        ];

        foreach ($events as $evt) {
            Event::updateOrCreate(['id' => $evt['id']], $evt);
        }

        // 5. Seed Emergency Contact
        EmergencyContact::updateOrCreate(
            ['id' => 1],
            [
                'title'        => 'Layanan Kontak Darurat Gunung Kidul',
                'description'  => 'Saat mengeksplorasi destinasi alam, pantai, maupun gua bawah tanah di Gunung Kidul, situasi darurat bisa terjadi kapan saja. Simpan dan gunakan daftar kontak darurat resmi di bawah ini untuk mendapatkan bantuan cepat dari pihak berwenang.',
                'phone_number' => '112 / (0274) 391119',
                'button_text'  => 'Cek informasi',
                'is_active'    => true,
            ]
        );

        // 6. Seed Hero Configuration
        Hero::updateOrCreate(
            ['id' => 1],
            [
                'title1'            => 'Explore',
                'title2'            => 'Gunung Kidul',
                'subtitle'          => [
                    'ID'  => 'Dari tingginya pegunungan batu purba hingga jernihnya ombak pesisir selatan, Gunung Kidul menawarkan petualangan tak terlupakan di mana warisan alam dan budaya menyatu dalam harmoni.',
                    'EN'  => 'From ancient limestone peaks to crystal clear southern coastal waves, Gunung Kidul offers an unforgettable adventure where natural heritage and culture merge in perfect harmony.',
                    'JPN' => '太古の石灰岩の峰々から透き通った南部海岸の波まで、グヌンキドゥルは自然の遺産と文化が完璧な調和をなす忘れられない冒冒険を提供します。',
                ],
                'background_images' => [
                    '/images/heha-sky-view.jpg',
                    '/images/pantai-indrayanti.jpg',
                ],
                'is_active'         => true,
            ]
        );
    }
}
