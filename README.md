# Misi Kesederhanaan: Kampung Harmoni 3D

Permainan penerokaan 3D Pendidikan Moral Tahun 5, dalam Bahasa Melayu. Dunia, watak dan hiasan voxel dibina daripada geometri asli; tiada aset Minecraft digunakan.

## Bermain

Masukkan nama, mulakan pengembaraan dan tutup tutorial. Bergerak sendiri ke lokasi NPC mengikut peta. Dekati NPC dalam jarak 2.5 unit dan tekan E atau Interaksi.

- WASD / anak panah: bergerak relatif kepada kamera.
- Shift: berjalan lebih pantas.
- Seret tetikus pada dunia: putar kamera.
- Tablet / telefon: gunakan D-pad dan seret kawasan dunia untuk kamera.
- E / Interaksi: bercakap. Escape: tutup panel.
- Misi: semak kemajuan, mulakan semula atau buka sijil setelah tamat.
- Bunyi: hidup/matikan kesan bunyi sintesis; tiada fail audio luaran.

Lima misi utama: Mei Ling (Pasar Raya), Kumar (Dewan Komuniti), Teck Seng (Pusat Internet), Aisyah (Rumah Terbuka) dan Ravi (Taman Rekreasi). Pak Cik Rahman berada di Balai Komuniti dengan misi bonus pertuturan.

Jawapan tepat tanpa kesilapan menerima 20 mata. Selepas satu atau lebih jawapan kurang sesuai, jawapan tepat menerima 10 mata. Mata diberikan sekali sahaja selepas murid memilih perasaan. Bonus tidak menambah mata: maksimum kekal 100. Semua perasaan diterima.

Selepas lima misi utama selesai, kembali kepada Kumar. Pilih sekurang-kurangnya tiga cara yang sesuai, nyatakan perasaan dan pilih sekurang-kurangnya satu janji. Upacara penamat dan sijil akan dibuka. Klik Cetak / Simpan PDF dan pilih pencetak atau destinasi Save as PDF dalam pelayar.

## GitHub Pages

1. Ekstrak ZIP ini. Cipta atau buka repositori GitHub yang dikehendaki.
2. Muat naik SEMUA kandungan projek, termasuk folder `assets`, ke akar repositori. Pastikan `index.html` berada terus pada akar, bukan dalam satu folder tambahan. Jangan muat naik ZIP sahaja.
3. Commit fail ke cawangan `main`.
4. Buka **Settings → Pages**. Dalam Source, pilih **Deploy from a branch**.
5. Pilih **main** dan **/(root)**, kemudian **Save**.
6. Tunggu proses penerbitan berjaya. Buka pautan yang dipaparkan di halaman Pages, biasanya `https://NAMA-PENGGUNA.github.io/NAMA-REPOSITORI/`.

Panduan rasmi: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

GitHub Free menyokong Pages untuk repositori awam. Ketersediaan Pages untuk repositori persendirian bergantung pada pelan akaun. Projek ini statik: tiada backend, pangkalan data, API berbayar atau langkah build diperlukan.

## Jalankan pada komputer sendiri

Gunakan pelayan HTTP statik. Dengan Python dipasang, jalankan arahan ini dalam folder projek:

```sh
python -m http.server 8000
```

Kemudian buka `http://localhost:8000`. Membuka `index.html` melalui `file://` tidak disokong kerana projek menggunakan modul JavaScript. Selepas projek dimuat turun, pelayan tempatan tidak memerlukan internet. Three.js r170 disertakan dalam `assets/vendor` bersama lesennya.

## Standard pembelajaran dan pentaksiran

- SK 13.0: Amalan Kesederhanaan dalam Hidup Bermasyarakat.
- SP 13.2: Menjelaskan cara amalan kesederhanaan dalam hidup bermasyarakat.
- SP 13.4: Mengekspresikan perasaan berkaitan dengan amalan kesederhanaan dalam hidup bermasyarakat.
- SP 13.5: Mengamalkan sikap sederhana dalam hidup bermasyarakat.

Mod guru memaparkan pencapaian pemain setempat, bilangan jawapan kurang sesuai, perasaan dan refleksi. Simulasi dan janji menunjukkan pemahaman serta niat; amalan sebenar SP 13.5 perlu disahkan melalui pemerhatian guru.

## Kemajuan dan privasi

Nama, mata, perasaan, percubaan, refleksi, tetapan bunyi dan kedudukan disimpan menggunakan localStorage pada pelayar/peranti ini sahaja. Tiada data dihantar kepada pelayan. Satu rekod pemain bagi setiap pelayar dan alamat laman. Gunakan Mulakan semula untuk murid seterusnya. Mod peribadi, sekatan storan atau pemadaman data pelayar boleh menghilangkan kemajuan. Jika storan tidak tersedia, permainan masih berjalan dan memaparkan makluman.

## Fail projek

- `index.html`: struktur skrin dan panel.
- `style.css`: paparan responsif, kawalan sentuh dan cetakan sijil.
- `game.js`: gelung 3D, pergerakan, kamera, collision, interaksi, peta dan audio.
- `world.js`: bangunan, pokok, jalan dan hiasan voxel.
- `characters.js`: model watak dan animasi.
- `missions.js`: kandungan misi, pengiraan mata dan simpanan kemajuan.
- `ui.js`: dialog, refleksi, mod guru, sijil dan penamat.
- `assets/vendor/three.module.js`: Three.js r170, lesen MIT.

## Peranti dan penyelesaian masalah

Gunakan pelayar moden dengan WebGL 2 diaktifkan. Geometri dikongsi, tiada tekstur besar atau bayang dinamik dan nisbah piksel dihadkan kepada 1.5 untuk membantu prestasi. Kadar bingkai bergantung pada peranti; 60 FPS tidak dijamin.

Jika dunia tidak dimuatkan, pastikan folder `assets/vendor` turut dimuat naik, gunakan HTTP/HTTPS dan semak WebGL atau pecutan perkakasan pelayar. Nama fail adalah sensitif huruf besar/kecil pada GitHub Pages. Bunyi hanya bermula selepas interaksi pengguna.
