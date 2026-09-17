# Laporan ujian — Misi Kampung Sederhana

Diuji pada 17 September 2026 menggunakan Chromium tanpa antara muka, Playwright dan WebGL melalui SwiftShader.

## Lulus

- Dunia Three.js dan skrin permulaan berjaya dimuatkan dengan aset setempat.
- Input papan kekunci menggerakkan pemain; joystick analog menggerakkan pemain dalam emulasi telefon.
- Semakan collision menolak kedudukan dalam bangunan dan di luar sempadan.
- Kelima-lima NPC membuka dilema masing-masing apabila pemain berada berdekatan.
- Jawapan kurang sesuai memaparkan CUBA LAGI; percubaan seterusnya masih memperoleh 20 mata.
- Refleksi pilihan dan refleksi bertulis (perasaan + sebab) disimpan dan dipaparkan.
- Lima misi menghasilkan 100 mata; berinteraksi semula tidak menggandakan mata.
- Semua NPC berkumpul di Dewan Komuniti; interaksi Kumar membuka penamat.
- Muat semula halaman mengekalkan kemajuan dan 100 mata.
- Reset memulakan semula pada 0 mata.
- Data localStorage rosak atau tidak tersedia dikendalikan tanpa exception yang terlepas.
- Paparan 1365×900 dan 390×844 diperiksa; tiada limpahan mendatar pada telefon.
- Tiada ralat konsol atau pageerror direkodkan sepanjang ujian pelayar.

## Skop dan had

Ujian aliran misi memindahkan pemain ke sekitar NPC melalui objek runtime, kemudian menggunakan butang interaksi dan pilihan sebenar. Input berjalan dan joystick diuji berasingan. Semakan collision ialah sampel bangunan/sempadan, bukan setiap tepi objek. Paparan telefon ialah emulasi Chromium, bukan ujian perkakasan Android/iOS/Chromebook sebenar. Prestasi dan WebGL bergantung pada peranti. Penerbitan GitHub Pages belum disahkan untuk cabang baharu; perlu merge dan tetapan Pages yang sesuai.
