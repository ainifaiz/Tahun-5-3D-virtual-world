# 🏘️ Misi Kampung Sederhana

Permainan penerokaan dunia 3D untuk Pendidikan Moral Tahun 5: **Nilai Kesederhanaan dalam Hidup Bermasyarakat**. Dibina dengan HTML, CSS, JavaScript ES Modules dan Three.js r170 yang disertakan secara setempat bersama lesen MIT. Tiada API key, login, backend, iklan, CDN atau proses build.

## Cara bermain

1. Taip nama (pilihan), tekan **MULAKAN MISI** dan baca panduan.
2. Berjalan ke NPC bertanda ❗ di Pasar Raya, Rumah Terbuka, Taman Rekreasi, Pusat Internet dan Dewan Komuniti. Semua lokasi boleh dilawati dalam sebarang urutan.
3. Dekati NPC dalam jarak 2.5 unit. Tekan E atau **BERCAKAP**.
4. Baca dialog dan pilih tindakan sederhana. Jika kurang sesuai, cuba lagi tanpa kehilangan mata.
5. Pilih perasaan atau tulis perasaan dan sebab sendiri. Misi hanya selesai selepas refleksi disimpan; setiap misi memberi 20 mata sekali sahaja.
6. Selepas mendapat 100 mata, kembali ke Dewan Komuniti. Semua NPC berkumpul di sana. Bercakap dengan Kumar untuk penamat.
7. Buka **Refleksi** untuk melihat catatan. **Misi → Main semula / Padam kemajuan** memulakan sesi murid seterusnya selepas pengesahan.

## Kawalan

| Kawalan | Tindakan |
|---|---|
| W / ↑ | Maju mengikut arah kamera |
| S / ↓ | Undur |
| A / ←, D / → | Kiri / kanan |
| Shift | Berlari perlahan |
| Seret pada dunia | Putar kamera |
| E / BERCAKAP | Berinteraksi dengan NPC berdekatan |
| Joystick kiri | Bergerak pada telefon / tablet |
| Escape | Tutup dialog |

Gunakan **Peta** untuk memaparkan atau menyembunyikan mini-map. Peta menunjukkan 🔵 pemain, ❗ misi belum selesai dan ✅ misi selesai. Bunyi sintesis boleh dihidupkan dengan **Bunyi**.

## GitHub Pages

Jika menggunakan perubahan dalam pull request, semak dan gabungkan dahulu ke `main`.

Jika menggunakan ZIP:
1. Ekstrak ZIP. Muat naik **kandungan** folder `misi-kampung-sederhana`, termasuk `js` dan `assets`, ke akar repositori.
2. Pastikan `index.html`, `main.js` dan `style.css` berada terus di akar. Jangan muat naik ZIP sahaja.
3. Commit ke `main`.
4. Dalam GitHub, buka **Settings → Pages → Build and deployment**.
5. Pilih **Deploy from a branch**, cawangan **main**, folder **/(root)**, lalu **Save**.
6. Tunggu penerbitan berjaya dan buka pautan yang dipaparkan oleh GitHub Pages.

Panduan rasmi GitHub: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Jalankan setempat

Dalam folder projek:

```sh
python -m http.server 8000
```

Buka `http://localhost:8000`. Jangan buka melalui `file://` kerana ES Modules memerlukan HTTP/HTTPS. Semua kebergantungan sudah disertakan; pelayan setempat boleh digunakan tanpa internet selepas fail dimuat turun.

## Ubah kandungan

Edit `js/missions.js`. Satu objek bagi setiap stesen:

```js
{
  id: 'mei',                  // ID unik, kekalkan untuk simpanan
  npc: 'Mei Ling',
  place: 'Pasar Raya',
  x: 24, z: 4,                // Lokasi NPC
  question: 'Soalan...',
  choices: ['Pilihan A', 'Pilihan B', 'Pilihan C'],
  correctAnswer: 1,           // A=0, B=1, C=2
  feedback: 'Maklum balas...',
  feelingQuestion: 'Soalan perasaan...',
  summary: 'Amalan yang dipelajari'
}
```

Ganjaran lalai ditetapkan oleh `.map(m => ({...m,name:m.npc,points:20}))` di akhir senarai misi. Jika mengubah bilangan misi atau mata, selaraskan jumlah maksimum 100 dan kiraan 5 dalam UI. Untuk kandungan pelajaran baharu, ubah `KEY` supaya kemajuan lama tidak tersalah digunakan. Bangunan dan papan tanda berada di `js/world.js`; ubah juga bangunan jika memindahkan lokasi stesen. Gunakan teks guru yang dipercayai dalam konfigurasi; teks murid dipaparkan secara selamat.

## Struktur

- `index.html`, `style.css`: skrin permulaan, UI dan gaya responsif.
- `main.js`: gelung permainan, kamera, pergerakan, collision, peta dan audio.
- `js/player.js`: karakter geometri dan animasi berjalan.
- `js/world.js`: dunia, jalan, bangunan, papan tanda 3D dan halangan.
- `js/npc.js`: penduduk dan susunan perhimpunan akhir.
- `js/quiz.js`: dialog dilema, percubaan semula dan refleksi.
- `js/missions.js`: semua kandungan misi, ganjaran, pengesahan dan simpanan.
- `js/controls.js`: joystick analog dan pembatalan input.
- `js/ui.js`: panel misi, refleksi, bantuan dan penamat.
- `assets/vendor`: Three.js dan lesen asal.
- `assets/models`, `textures`, `audio`, `icons`: tempat aset tambahan. Versi ini menggunakan model, tekstur papan tanda dan audio yang dihasilkan melalui kod.

## Simpanan dan peranti

Kemajuan, nama, refleksi, kedudukan dan tetapan bunyi disimpan pada **pelayar dan peranti ini sahaja** melalui localStorage. Tiada rekod kelas berpusat. Jika storan disekat, permainan masih berjalan dengan makluman bahawa sesi tidak dapat disimpan. Menutup dialog sebelum refleksi tidak memberikan mata.

Memerlukan pelayar dengan WebGL 2 dan pecutan grafik. Nisbah piksel dihadkan kepada 1.5; prestasi bergantung pada peranti. Ujian paparan telefon menggunakan emulasi pelayar, bukan semua model telefon/Chromebook sebenar. Jika paparan gagal, semak semua fail dimuat naik dan WebGL 2 tersedia. Jika konteks grafik terhenti, muat semula halaman untuk menyambung simpanan terakhir.

Permainan menyokong pemahaman dan refleksi. Guru boleh meminta murid menjelaskan pilihan dan memerhatikan amalan sebenar selepas aktiviti.
