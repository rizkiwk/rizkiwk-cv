/**
 * "About this project" copy (EN / ID), keyed by repo name. Deliberately short: enough for a
 * visitor to understand what the project is and what it is built with. This is the ONLY
 * long-form text the project modal shows — READMEs are never published.
 */
export type Bi = { en: string; id: string };

export const about: Record<string, Bi> = {
  traceori: {
    en: "A multi-tenant SaaS that protects local brands from counterfeits and price-cutting with a unique QR token on every product. Built with Next.js and Supabase.",
    id: "SaaS multi-tenant yang melindungi brand lokal dari pemalsuan dan banting harga lewat token QR unik di setiap produk. Dibangun dengan Next.js dan Supabase.",
  },
  "waru-wms": {
    en: "A multi-tenant warehouse management system for third-party logistics operators in Indonesia. Built with Go, PostgreSQL and Flutter.",
    id: "Sistem manajemen gudang multi-tenant untuk operator logistik pihak ketiga di Indonesia. Dibangun dengan Go, PostgreSQL, dan Flutter.",
  },
  "padel-management-system": {
    en: "An operations platform for padel venues that tracks court time, shifts, assets, commissions and cash. Built with Go and TypeScript.",
    id: "Platform operasional untuk venue padel yang melacak waktu lapangan, shift, aset, komisi, dan kas. Dibangun dengan Go dan TypeScript.",
  },
  monto: {
    en: "The backend foundation for a padel matchmaking and rating platform. Built on PostgreSQL and Redis, with Go services planned.",
    id: "Fondasi backend untuk platform matchmaking dan rating padel. Dibangun di atas PostgreSQL dan Redis, dengan layanan Go yang direncanakan.",
  },
  "polytron-asset-tracker": {
    en: "An app for tracking marketing assets as they move between warehouses, exhibitions and outlets, with an offline-first Android app and a web admin panel. Built with Kotlin, Go and React.",
    id: "Aplikasi untuk melacak aset marketing yang berpindah antara gudang, pameran, dan outlet, dengan aplikasi Android offline-first dan panel admin web. Dibangun dengan Kotlin, Go, dan React.",
  },
  "warunet-atp-erp-next": {
    en: "An ERP for a chemical-bottle manufacturer, adding dangerous-goods packaging compliance to ERPNext. Built as a custom Frappe app with Docker.",
    id: "ERP untuk produsen botol kimia yang menambahkan kepatuhan kemasan barang berbahaya pada ERPNext. Dibangun sebagai aplikasi Frappe kustom dengan Docker.",
  },
  "erp-next": {
    en: "An ERP for a plastic packaging manufacturer, covering production, stock, quality and costing. Built on ERPNext with a custom Frappe app.",
    id: "ERP untuk produsen kemasan plastik yang mencakup produksi, stok, kualitas, dan HPP. Dibangun di atas ERPNext dengan aplikasi Frappe kustom.",
  },
  "ai-desk": {
    en: "A remote-control app for Android devices that streams the screen and sends input over the internet, with the user's consent. Built with a C core and Docker.",
    id: "Aplikasi kontrol jarak jauh untuk perangkat Android yang menstreaming layar dan mengirim input lewat internet dengan persetujuan pengguna. Dibangun dengan inti C dan Docker.",
  },
  "face-flow": {
    en: "A face-recognition platform for verifying event attendees at the gate, from QR scan to face match. Currently a researched prototype in Python.",
    id: "Platform face recognition untuk memverifikasi peserta event di gerbang, dari pindai QR hingga pencocokan wajah. Saat ini berupa prototipe hasil riset dalam Python.",
  },
  "avos-presence": {
    en: "An attendance system with a check-in kiosk screen that deploys to a small server in minutes. Built with Node.js, Caddy and Docker.",
    id: "Sistem absensi dengan layar kiosk check-in yang bisa di-deploy ke server kecil dalam hitungan menit. Dibangun dengan Node.js, Caddy, dan Docker.",
  },
  "mri-protocol-assistant": {
    en: "An offline reference app for MRI technologists and radiology students. Built with Flutter and SQLite.",
    id: "Aplikasi referensi offline untuk teknolog MRI dan mahasiswa radiologi. Dibangun dengan Flutter dan SQLite.",
  },
  "card-vault": {
    en: "A private, offline collection manager for trading cards such as Pokémon, Yu-Gi-Oh! and Magic. Built with Flutter and SQLite.",
    id: "Pengelola koleksi kartu yang privat dan offline untuk kartu seperti Pokémon, Yu-Gi-Oh!, dan Magic. Dibangun dengan Flutter dan SQLite.",
  },
  "app-senter": {
    en: "A simple flashlight app for Android that needs no permissions and shows no ads. Built with Kotlin and Jetpack Compose.",
    id: "Aplikasi senter Android sederhana yang tidak butuh izin dan bebas iklan. Dibangun dengan Kotlin dan Jetpack Compose.",
  },
  "app-todo": {
    en: "A fast, offline task manager for Android with priorities, due dates and reminders. Built natively with Kotlin.",
    id: "Manajer tugas Android yang cepat dan offline dengan prioritas, tenggat, dan pengingat. Dibangun native dengan Kotlin.",
  },
  "quiz-math": {
    en: "MathBlow, a mental-math training game for adults that works fully offline. Built natively for Android with Kotlin.",
    id: "MathBlow, game latihan hitung mental untuk dewasa yang bekerja sepenuhnya offline. Dibangun native untuk Android dengan Kotlin.",
  },
  "pdf-reader": {
    en: "A lightweight Android PDF reader designed for files received through WhatsApp and Gmail. Built with Kotlin.",
    id: "Pembaca PDF Android ringan yang dirancang untuk berkas dari WhatsApp dan Gmail. Dibangun dengan Kotlin.",
  },
  "warunet-cafe-board-gamification": {
    en: "An Android app that scores board-game rounds at a café, with season points and a leaderboard. Built with Kotlin.",
    id: "Aplikasi Android yang menghitung skor ronde permainan papan di kafe, lengkap dengan poin musim dan papan peringkat. Dibangun dengan Kotlin.",
  },
  "doorprize-spin": {
    en: "A slot-machine style prize-draw screen for a neighbourhood event, run by the host from a keyboard. Built with Next.js and Supabase.",
    id: "Layar undian bergaya mesin slot untuk acara lingkungan, dijalankan MC lewat papan ketik. Dibangun dengan Next.js dan Supabase.",
  },
  "rt-creator-challange": {
    en: "A community video-challenge platform for a neighbourhood Independence Day event, with apps for participants, sponsors and organizers. Built with Next.js and Supabase.",
    id: "Platform tantangan video komunitas untuk perayaan Kemerdekaan tingkat RT, dengan aplikasi untuk peserta, sponsor, dan panitia. Dibangun dengan Next.js dan Supabase.",
  },
  "rt011-17-agustus-2026": {
    en: "The operations workspace for a neighbourhood festival: assets, documents and a WhatsApp notification gateway. Built with TypeScript and Docker.",
    id: "Ruang kerja operasional untuk festival lingkungan: aset, dokumen, dan gateway notifikasi WhatsApp. Dibangun dengan TypeScript dan Docker.",
  },
  asihspa: {
    en: "A bilingual website for a 24-hour mobile massage service in Bali, with treatments, prices and WhatsApp booking. Built with Next.js.",
    id: "Situs dwibahasa untuk layanan pijat panggilan 24 jam di Bali, dengan perawatan, harga, dan pemesanan lewat WhatsApp. Dibangun dengan Next.js.",
  },
  motownpropertybali: {
    en: "Two websites for a Bali property agency: a villa catalogue and a catalogue with a viewing-booking calendar. Built with Next.js.",
    id: "Dua situs untuk agen properti Bali: katalog villa dan katalog dengan kalender booking kunjungan. Dibangun dengan Next.js.",
  },
  "wondergel-band": {
    en: "A bilingual website for Wondergel, a Jakarta indie-pop band active since 1992. Built with Next.js and Tailwind CSS.",
    id: "Situs dwibahasa untuk Wondergel, band indie pop Jakarta yang aktif sejak 1992. Dibangun dengan Next.js dan Tailwind CSS.",
  },
  "skin-check": {
    en: "SkinGlow, a web app that gives a skin analysis and skincare recommendations in about a minute. Built with React and Vite.",
    id: "SkinGlow, aplikasi web yang memberi analisis kulit dan rekomendasi skincare dalam sekitar satu menit. Dibangun dengan React dan Vite.",
  },
  warunet: {
    en: "The company website of a local internet and smart-home provider. Built with Next.js and Tailwind CSS.",
    id: "Situs perusahaan penyedia internet dan smart-home lokal. Dibangun dengan Next.js dan Tailwind CSS.",
  },
  "bintang-cosmetic": {
    en: "A point-of-sale desktop app for a cosmetics shop that runs offline on low-spec Windows PCs. Built with C# and .NET.",
    id: "Aplikasi kasir desktop untuk toko kosmetik yang berjalan offline di PC Windows spesifikasi rendah. Dibangun dengan C# dan .NET.",
  },
  "pet-shop": {
    en: "A clean three-page website for a pet shop with a filterable product catalogue and a contact form. Built with Next.js and Tailwind CSS.",
    id: "Situs toko hewan tiga halaman yang bersih dengan katalog produk berfilter dan formulir kontak. Dibangun dengan Next.js dan Tailwind CSS.",
  },
  "snackit-game": {
    en: "A match-3 style savings-challenge game. Built with Cocos Creator.",
    id: "Game tantangan menabung bergaya match-3. Dibangun dengan Cocos Creator.",
  },
  "snackit-microsite": {
    en: "A campaign microsite with leaderboard visuals. Built with Next.js.",
    id: "Microsite kampanye dengan visual papan peringkat. Dibangun dengan Next.js.",
  },
  "taro-spinwheel": {
    en: "A prize spin-wheel campaign site where players win rewards. Built with Next.js.",
    id: "Situs kampanye roda putar berhadiah di mana pemain memenangkan hadiah. Dibangun dengan Next.js.",
  },
  "wp-spinwheel": {
    en: "A spin-wheel promotion site built on WordPress.",
    id: "Situs promosi roda putar yang dibangun di atas WordPress.",
  },
  "jenaka_colibri-barakat_id": {
    en: "A company website built with PHP and CodeIgniter, styled with Tailwind CSS.",
    id: "Situs perusahaan yang dibangun dengan PHP dan CodeIgniter, bergaya Tailwind CSS.",
  },
  "jupedns-ios": {
    en: "A native iOS app with automated release lanes.",
    id: "Aplikasi iOS native dengan lane rilis otomatis.",
  },
  "Omdb-App": {
    en: "A React Native app for browsing movie data from the OMDb API.",
    id: "Aplikasi React Native untuk menjelajahi data film dari OMDb API.",
  },
  "pazpo-app-android": {
    en: "A native Android app for a property-search product. Built with Java.",
    id: "Aplikasi Android native untuk produk pencarian properti. Dibangun dengan Java.",
  },
  "react-exchange-currencies": {
    en: "A React app that converts between currencies using live exchange rates.",
    id: "Aplikasi React yang mengonversi mata uang dengan kurs langsung.",
  },
  "java-kingdom-army": {
    en: "A Java algorithm exercise on finding which factions control which regions of a map.",
    id: "Latihan algoritma Java untuk menentukan faksi mana yang menguasai wilayah mana pada sebuah peta.",
  },
  "java-parking-lot": {
    en: "A command-line parking lot application written in Java.",
    id: "Aplikasi parkir berbasis baris perintah yang ditulis dalam Java.",
  },
  "java-puzzle-string": {
    en: "A Java word-search solver that counts how often a word appears in a letter grid.",
    id: "Penyelesai word search dalam Java yang menghitung seberapa sering sebuah kata muncul di grid huruf.",
  },
  "jagadhita-sinergi-sejati": {
    en: "A company website for a Jakarta supplier of halal chicken and beef, with a product list and chat ordering. Built with Next.js.",
    id: "Situs perusahaan untuk pemasok ayam dan daging sapi halal di Jakarta, dengan daftar produk dan pemesanan lewat chat. Dibangun dengan Next.js.",
  },
  "meitkasim-com": {
    en: "A personal website for Meita Kasim, an indie musician from Jakarta to Vienna.",
    id: "Situs pribadi untuk Meita Kasim, musisi indie dari Jakarta sampai Wina.",
  },
  "kahoot-rt011": {
    en: "A live quiz for a neighbourhood Independence Day event, played from phones. Built with Next.js.",
    id: "Kuis langsung untuk acara Kemerdekaan tingkat RT yang dimainkan dari ponsel. Dibangun dengan Next.js.",
  },
  "atlas-property": {
    en: "The website of Atlas Property, a property developer in Purwokerto, presenting its two estates: Arcadia, an investment boarding-house community, and Casavida, a residential community. Includes project pages, documentation and FAQ. Built with Next.js.",
    id: "Situs Atlas Property, pengembang properti di Purwokerto, yang menampilkan dua kawasannya: Arcadia, kawasan kost investasi, dan Casavida, kawasan hunian. Mencakup halaman proyek, dokumentasi, dan tanya jawab. Dibangun dengan Next.js.",
  },
  "sippp-harkit": {
    en: "The training website of the education, training and library unit at RSAB Harapan Kita, a mother and child hospital. It lists medical, non-medical and general classes with a training calendar, facilities information and online registration. Built on WordPress.",
    id: "Situs pelatihan unit pendidikan, pelatihan, dan perpustakaan di RSAB Harapan Kita, rumah sakit ibu dan anak. Menampilkan kelas medis, non medis, dan umum dengan kalender pelatihan, informasi fasilitas, dan pendaftaran online. Dibangun di atas WordPress.",
  },
  "sgmw-multifinance": {
    en: "The company website of SGMW Multifinance Indonesia, a vehicle-financing company and member of the SAIC Group. It presents financing promotions, a credit simulator by region and vehicle model, news, and investor and career information. Built on WordPress.",
    id: "Situs perusahaan SGMW Multifinance Indonesia, perusahaan pembiayaan kendaraan yang tergabung dalam SAIC Group. Menampilkan promo pembiayaan, simulasi kredit berdasarkan wilayah dan tipe kendaraan, berita, serta informasi investor dan karier. Dibangun di atas WordPress.",
  },
  pumpcrush: {
    en: "A Web3 game concept combining blockchain mechanics with gameplay.",
    id: "Konsep game Web3 yang memadukan mekanika blockchain dengan gameplay.",
  },
};

/** First sentence of a text (used as the short card description). */
export const shortOf = (text: string): string => {
  const m = text.match(/^.*?[.!?](?=\s|$)/);
  return (m ? m[0] : text).trim();
};
