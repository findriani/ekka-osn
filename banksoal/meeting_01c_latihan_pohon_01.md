# Pohon Keputusan 01

Sebuah koperasi jeruk siam Banjar di Barito Kuala menyortir panen menjadi dua jalur: **Ekspor** dan **Lokal**. Penyortiran dilakukan dengan **pohon keputusan**. Setiap buah diperiksa berdasarkan satu syarat, lalu mengikuti cabang `ya` atau `tidak` hingga tiba di daun yang menentukan jalur akhirnya.

## Petunjuk jawaban

Jawaban dapat berupa **angka** atau **nama kelas**.

- Untuk angka, tuliskan nilainya **tanpa pembulatan**. Semua jawaban pada set ini berupa desimal berhenti, misalnya `0.48`. Gunakan titik sebagai pemisah desimal.
- Untuk nama kelas, tuliskan persis seperti pada soal: `Ekspor` atau `Lokal`.
- Kelas positif pada set ini selalu **Ekspor**.

## Rumus cepat

\[
\text{akurasi}=\frac{TP+TN}{TP+TN+FP+FN}.
\]

\[
\text{precision}=\frac{TP}{TP+FP},\qquad
\text{recall}=\frac{TP}{TP+FN}.
\]

Precision dibaca dari **kolom** prediksi positif; recall dibaca dari **baris** kelas positif yang sebenarnya.

---

## Soal 1 — Pohon penyortir koperasi

Koperasi menggunakan pohon berikut untuk menentukan jalur setiap jeruk. Mulailah dari kotak paling atas. Jika syarat pada kotak terpenuhi, ikuti cabang `ya`; jika tidak, ikuti cabang `tidak`. Buah berhenti ketika mencapai kotak kelas **Ekspor** atau **Lokal**.

<figure class="q-image">
<svg viewBox="0 0 700 348" role="img">
  <title>Pohon keputusan penyortir jeruk siam Banjar</title>
  <desc>Akar menguji diameter minimal 60 milimeter. Cabang tidak berakhir pada daun Lokal. Cabang ya menuju uji kadar gula minimal 11 derajat Brix. Cabang tidak dari situ berakhir pada daun Lokal. Cabang ya menuju uji cacat kulit maksimal 5 persen, yang bercabang ke daun Ekspor untuk ya dan daun Lokal untuk tidak.</desc>
  <defs>
    <marker id="pk-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" opacity="0.55"/>
    </marker>
  </defs>
  <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="15" text-anchor="middle">
    <rect x="175" y="8" width="210" height="44" rx="4" fill="none" stroke="#0072B2" stroke-width="2"/>
    <text x="280" y="36" fill="currentColor">diameter ≥ 60 mm?</text>
    <g stroke="currentColor" stroke-width="1.6" opacity="0.55" fill="none">
      <path d="M 280 52 L 280 74"/>
      <path d="M 280 74 L 120 74 L 120 98" marker-end="url(#pk-ar)"/>
      <path d="M 280 74 L 430 74 L 430 98" marker-end="url(#pk-ar)"/>
    </g>
    <text x="198" y="68" font-size="13" fill="currentColor" opacity="0.8">tidak</text>
    <text x="356" y="68" font-size="13" fill="currentColor" opacity="0.8">ya</text>
    <rect x="65" y="100" width="110" height="38" rx="4" fill="none" stroke="currentColor" stroke-width="2" opacity="0.5"/>
    <text x="120" y="124" fill="currentColor">Lokal</text>
    <rect x="320" y="100" width="220" height="44" rx="4" fill="none" stroke="#0072B2" stroke-width="2"/>
    <text x="430" y="128" fill="currentColor">kadar gula ≥ 11 °Brix?</text>
    <g stroke="currentColor" stroke-width="1.6" opacity="0.55" fill="none">
      <path d="M 430 144 L 430 166"/>
      <path d="M 430 166 L 300 166 L 300 192" marker-end="url(#pk-ar)"/>
      <path d="M 430 166 L 560 166 L 560 192" marker-end="url(#pk-ar)"/>
    </g>
    <text x="366" y="160" font-size="13" fill="currentColor" opacity="0.8">tidak</text>
    <text x="496" y="160" font-size="13" fill="currentColor" opacity="0.8">ya</text>
    <rect x="245" y="194" width="110" height="38" rx="4" fill="none" stroke="currentColor" stroke-width="2" opacity="0.5"/>
    <text x="300" y="218" fill="currentColor">Lokal</text>
    <rect x="460" y="194" width="200" height="44" rx="4" fill="none" stroke="#0072B2" stroke-width="2"/>
    <text x="560" y="222" fill="currentColor">cacat kulit ≤ 5%?</text>
    <g stroke="currentColor" stroke-width="1.6" opacity="0.55" fill="none">
      <path d="M 560 238 L 560 260"/>
      <path d="M 560 260 L 470 260 L 470 286" marker-end="url(#pk-ar)"/>
      <path d="M 560 260 L 640 260 L 640 286" marker-end="url(#pk-ar)"/>
    </g>
    <text x="504" y="254" font-size="13" fill="currentColor" opacity="0.8">ya</text>
    <text x="606" y="254" font-size="13" fill="currentColor" opacity="0.8">tidak</text>
    <rect x="415" y="288" width="110" height="38" rx="4" fill="none" stroke="#D55E00" stroke-width="2"/>
    <text x="470" y="312" fill="currentColor">Ekspor</text>
    <rect x="585" y="288" width="110" height="38" rx="4" fill="none" stroke="currentColor" stroke-width="2" opacity="0.5"/>
    <text x="640" y="312" fill="currentColor">Lokal</text>
  </g>
</svg>
</figure>

Sebuah jeruk yang baru dipanen memiliki diameter 64 mm, kadar gula 12 °Brix, dan cacat kulit 3%. Telusuri ketiga cirinya dari akar pohon hingga daun terakhir.

Ke daun mana buah ini berhenti?

**Jawaban:** `_____`

---

## Soal 2 — Sampai mana buah diperiksa

Memeriksa cacat kulit memerlukan pengamatan satu per satu di bawah lampu, sehingga prosesnya paling lambat. Namun, tidak semua buah perlu melewati pemeriksaan ini: hanya buah yang lolos dua syarat sebelumnya yang akan sampai ke simpul cacat kulit.

Gunakan pohon pada Soal 1 untuk menyortir lima buah berikut. Untuk setiap buah, cukup telusuri sampai pohon menghentikannya; tidak perlu memeriksa ciri yang berada setelah daun tempat buah itu berhenti.

| Jeruk | Diameter (mm) | Kadar gula (°Brix) | Cacat kulit (%) |
|---|---:|---:|---:|
| A | 63 | 12 | 2 |
| B | 57 | 14 | 1 |
| C | 61 | 9 | 3 |
| D | 72 | 11 | 7 |
| E | 60 | 13 | 6 |

Berapa banyak di antara kelima buah itu yang sampai ke simpul **cacat kulit ≤ 5%?**

**Jawaban:** `_____`

---

## Soal 3 — Laporan bulan lalu

Sepanjang bulan lalu, pohon penyortir digunakan untuk menilai 40 jeruk. Setelah itu, penyortir manusia memeriksa ulang setiap jeruk; penilaian manusia dianggap sebagai kelas sebenarnya. Hasil perbandingan antara prediksi pohon dan hasil pemeriksaan tersebut diringkas dalam confusion matrix berikut, dengan **Ekspor** sebagai kelas positif.

| Aktual ↓ / Prediksi → | Ekspor | Lokal |
|---|---:|---:|
| **Ekspor** | 15 | 5 |
| **Lokal** | 1 | 19 |

Berapa **akurasi** pohon tersebut?

**Jawaban:** `_____`

---

## Soal 4 — Menguji pohon pada panen kemarin

Delapan jeruk dari panen kemarin telah dinilai oleh penyortir manusia berpengalaman, dan penilaian itu dianggap benar. Sekarang gunakan pohon pada Soal 1 untuk membuat prediksi bagi delapan jeruk yang sama, lalu bandingkan prediksi tersebut dengan kelas sebenarnya.

| Jeruk | Diameter (mm) | Kadar gula (°Brix) | Cacat kulit (%) | Kelas sebenarnya |
|---|---:|---:|---:|---|
| J1 | 64 | 12 | 3 | Ekspor |
| J2 | 58 | 13 | 2 | Lokal |
| J3 | 62 | 10 | 1 | Ekspor |
| J4 | 70 | 11 | 8 | Lokal |
| J5 | 66 | 14 | 5 | Ekspor |
| J6 | 61 | 11 | 4 | Lokal |
| J7 | 68 | 12 | 2 | Ekspor |
| J8 | 55 | 15 | 1 | Ekspor |

Telusuri kedelapan buah melalui pohon, lalu susun confusion matrix dengan **Ekspor** sebagai kelas positif. Setelah itu, hitung **precision**: dari semua buah yang diprediksi Ekspor, berapa bagian yang memang layak Ekspor?

**Jawaban:** `_____`

---

## Soal 5 — Menggeser satu ambang

Koperasi mengeluh karena terlalu banyak jeruk yang sebenarnya layak ekspor justru masuk jalur Lokal. Seorang teknisi mengusulkan satu perubahan pada pohon Soal 1: **ambang diameter diturunkan dari 60 mm menjadi 55 mm**. Dua syarat lainnya tetap sama.

Gunakan pohon yang sudah diubah itu pada **delapan jeruk yang sama seperti Soal 4**. Susun confusion matrix yang baru, lalu hitung **recall**: dari semua jeruk yang sebenarnya layak Ekspor, berapa bagian yang berhasil dikenali sebagai Ekspor?

**Jawaban:** `_____`

---

## Soal 6 — Dua pohon, satu keranjang uji

Koperasi sedang memilih di antara dua pohon keputusan. Keduanya diuji pada keranjang yang sama, berisi 20 jeruk, dengan **Ekspor** sebagai kelas positif. Karena koperasi paling khawatir kehilangan jeruk yang sebenarnya layak ekspor, ukuran yang paling penting di sini adalah recall.

**Pohon A**

| Aktual ↓ / Prediksi → | Ekspor | Lokal |
|---|---:|---:|
| **Ekspor** | 3 | 7 |
| **Lokal** | 1 | 9 |

**Pohon B**

| Aktual ↓ / Prediksi → | Ekspor | Lokal |
|---|---:|---:|
| **Ekspor** | 7 | 3 |
| **Lokal** | 5 | 5 |

Hitung recall kedua pohon. Kemudian tuliskan **nilai recall milik pohon yang lebih baik** dalam menemukan jeruk yang sebenarnya layak Ekspor.

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Jawaban: Ekspor**

Telusuri satu per satu:

1. diameter ≥ 60 mm? \(64\ge 60\) → **ya**, ke kanan;
2. kadar gula ≥ 11 °Brix? \(12\ge 11\) → **ya**, ke kanan;
3. cacat kulit ≤ 5%? \(3\le 5\) → **ya**, ke kiri.

Buah berhenti di daun **Ekspor**.

## Soal 2

**Jawaban: 3**

Sebuah buah sampai ke simpul cacat kulit hanya jika ia lolos **dua** syarat sebelumnya.

| Jeruk | diameter ≥ 60? | kadar gula ≥ 11? | Sampai ke simpul cacat? |
|---|---|---|---|
| A | 63 ≥ 60 → ya | 12 ≥ 11 → ya | **ya** |
| B | 57 ≥ 60 → tidak | — | tidak, berhenti di daun Lokal |
| C | 61 ≥ 60 → ya | 9 ≥ 11 → tidak | tidak, berhenti di daun Lokal |
| D | 72 ≥ 60 → ya | 11 ≥ 11 → ya | **ya** |
| E | 60 ≥ 60 → ya | 13 ≥ 11 → ya | **ya** |

Jawabannya **3**: A, D, dan E.

Dua baris di tabel itu berada tepat di batas. Jeruk D punya kadar gula **tepat** 11, dan jeruk E punya diameter **tepat** 60. Syaratnya memakai ≥, bukan >, sehingga keduanya **lolos**. Bila salah satu dibaca sebagai "harus lebih besar", jawabannya menjadi 1 atau 2.

## Soal 3

**Jawaban: 0.85**

Dari tabel: \(TP=15\), \(FN=5\), \(FP=1\), \(TN=19\). Akurasi menjumlahkan **dua kotak yang benar**, yaitu diagonalnya, lalu membaginya dengan seluruh isi tabel.

\[
\text{akurasi}=\frac{TP+TN}{40}=\frac{15+19}{40}=\frac{34}{40}=0.85.
\]

Jumlahkan dahulu seluruh isi tabel untuk memastikan: \(15+5+1+19=40\). Bila jumlahnya bukan 40, ada kotak yang salah dibaca.

Sekilas 0.85 terdengar bagus. Tetapi lihat baris pertama: dari 20 jeruk yang sebenarnya layak ekspor, 5 di antaranya dibuang ke jalur lokal. Recall-nya \(15/20=0.75\), dan setiap satuan dari 5 buah itu adalah uang yang hilang. Akurasi tinggi karena tabel ini juga memuat 19 jeruk lokal yang ditebak benar — dan menebak "Lokal" itu mudah.

## Soal 4

**Jawaban: 0.75**

Telusuri kedelapan buah melalui pohon Soal 1.

| Jeruk | diameter ≥ 60? | gula ≥ 11? | cacat ≤ 5%? | Prediksi | Sebenarnya | Kotak |
|---|---|---|---|---|---|---|
| J1 | ya | ya | 3 → ya | Ekspor | Ekspor | TP |
| J2 | 58 → tidak | — | — | Lokal | Lokal | TN |
| J3 | ya | 10 → tidak | — | Lokal | Ekspor | FN |
| J4 | ya | 11 → ya | 8 → tidak | Lokal | Lokal | TN |
| J5 | ya | ya | 5 → ya | Ekspor | Ekspor | TP |
| J6 | 61 → ya | 11 → ya | 4 → ya | Ekspor | Lokal | FP |
| J7 | ya | ya | 2 → ya | Ekspor | Ekspor | TP |
| J8 | 55 → tidak | — | — | Lokal | Ekspor | FN |

Confusion matrix-nya:

| Aktual ↓ / Prediksi → | Ekspor | Lokal |
|---|---:|---:|
| **Ekspor** | 3 | 2 |
| **Lokal** | 1 | 2 |

\[
\text{precision}=\frac{TP}{TP+FP}=\frac{3}{3+1}=\frac{3}{4}=0.75.
\]

Precision dibaca dari **kolom** Ekspor: dari empat buah yang dikirim pohon ke jalur ekspor, tiga memang layak dan satu (J6) tidak.

Perhatikan J5: cacat kulitnya **tepat** 5, dan syaratnya ≤ 5, jadi ia lolos menjadi Ekspor. Perhatikan pula J8: kadar gulanya paling tinggi di seluruh tabel (15), tetapi diameternya 55 sehingga pohon menolaknya di syarat pertama dan tidak pernah melihat kadar gulanya. Pohon keputusan tidak menimbang-nimbang; ia berhenti pada syarat pertama yang gagal.

## Soal 5

**Jawaban: 0.8**

Hanya syarat pertama yang berubah: sekarang **diameter ≥ 55**. Telusuri ulang kedelapan buah.

| Jeruk | diameter ≥ 55? | gula ≥ 11? | cacat ≤ 5%? | Prediksi | Sebenarnya | Kotak |
|---|---|---|---|---|---|---|
| J1 | 64 → ya | ya | ya | Ekspor | Ekspor | TP |
| J2 | 58 → **ya** | 13 → ya | 2 → ya | **Ekspor** | Lokal | **FP** |
| J3 | 62 → ya | 10 → tidak | — | Lokal | Ekspor | FN |
| J4 | 70 → ya | 11 → ya | 8 → tidak | Lokal | Lokal | TN |
| J5 | 66 → ya | ya | 5 → ya | Ekspor | Ekspor | TP |
| J6 | 61 → ya | ya | 4 → ya | Ekspor | Lokal | FP |
| J7 | 68 → ya | ya | ya | Ekspor | Ekspor | TP |
| J8 | 55 → **ya** | 15 → ya | 1 → ya | **Ekspor** | Ekspor | **TP** |

Dua baris berpindah kotak, dan keduanya adalah buah yang dahulu ditolak di syarat pertama:

- **J8** kini lolos (\(55\ge55\), tepat di batas) dan ternyata memang layak → dahulu FN, kini **TP**;
- **J2** juga kini lolos, tetapi ternyata tidak layak → dahulu TN, kini **FP**.

Confusion matrix barunya:

| Aktual ↓ / Prediksi → | Ekspor | Lokal |
|---|---:|---:|
| **Ekspor** | 4 | 1 |
| **Lokal** | 2 | 1 |

\[
\text{recall}=\frac{TP}{TP+FN}=\frac{4}{4+1}=\frac{4}{5}=0.8.
\]

Recall naik dari \(3/5=0.6\) menjadi \(4/5=0.8\) — persis yang diminta koperasi. Tetapi periksa precision-nya: turun dari \(3/4\) menjadi \(4/6\). Ambang yang lebih longgar menangkap lebih banyak buah layak **dan** lebih banyak buah tak layak sekaligus. Tidak ada ambang yang memperbaiki keduanya; menggeser ambang hanya memindahkan kesalahan dari satu kotak ke kotak seberangnya. Yang harus diputuskan koperasi adalah kesalahan mana yang lebih mahal — membuang buah layak, atau mengirim buah tak layak ke kapal.

## Soal 6

**Jawaban: 0.7**

**Pohon A:** \(TP=3\), \(FN=7\).

\[
\text{recall}_A=\frac{3}{3+7}=\frac{3}{10}=0.3.
\]

**Pohon B:** \(TP=7\), \(FN=3\).

\[
\text{recall}_B=\frac{7}{7+3}=\frac{7}{10}=0.7.
\]

Pohon B jauh lebih unggul pada ukuran yang dipedulikan koperasi, jadi jawabannya **0.7**.

Sekarang hitung akurasi keduanya:

\[
\text{akurasi}_A=\frac{3+9}{20}=\frac{12}{20}=0.6,
\qquad
\text{akurasi}_B=\frac{7+5}{20}=\frac{12}{20}=0.6.
\]

**Persis sama.** Bila koperasi hanya melihat akurasi, kedua pohon tampak kembar dan tidak ada alasan memilih salah satunya. Padahal Pohon A membuang 7 dari 10 buah layak ekspor ke jalur lokal, sedangkan Pohon B hanya membuang 3. Akurasi menyembunyikan perbedaan itu karena ia menjumlahkan dua jenis kebenaran yang harganya tidak sama.

---

# Catatan pengajar

**Batas materi set ini.** Seluruh set hanya memakai empat hal yang sudah diajarkan di Pertemuan 1: penelusuran pohon, confusion matrix, akurasi, precision, dan recall. **Gini, entropi, dan F1 sengaja tidak dipakai** karena belum diajarkan. Kalau nanti Gini masuk ke materi, tempat alaminya adalah menggantikan Soal 5 — lihat catatan berikut.

**Soal 5 mengerjakan pekerjaan yang biasanya diserahkan kepada Gini.** Pertanyaan "ambang mana yang lebih baik?" adalah pertanyaan pokok dalam membangun pohon, dan biasanya dijawab dengan ketakmurnian Gini. Set ini menjawabnya dengan alat yang sudah ia punya: geser ambangnya, susun ulang confusion matrix-nya, lalu ukur. Ini bukan versi murahan dari Gini — justru lebih dekat dengan cara EKKA menilai, yaitu performa model pada data uji. Bila Gini diajarkan kelak, Soal 5 menjadi jembatan yang bagus: Gini mengukur kemurnian **tanpa** melihat data uji, sedangkan cara di Soal 5 mengukurnya **dengan** data uji.

**Soal 1, 4, dan 5 memakai pohon yang sama — itu disengaja.** Soal 1 melatih penelusuran satu buah; Soal 4 memakai penelusuran itu delapan kali untuk **menghasilkan** confusion matrix; Soal 5 menelusurinya lagi dengan satu ambang yang bergeser. Angka pada matriksnya bukan pemberian soal, melainkan hasil kerja siswa sendiri. Inilah cara pohon keputusan dan confusion matrix sebenarnya bertemu: yang satu menghasilkan prediksi, yang lain menilainya. Bila siswa keliru menelusuri satu buah saja, precision-nya ikut meleset — dan itu justru pelajaran yang jujur.

**Soal 4 dan 5 adalah pasangan, jangan dipisah.** Data ujinya sama persis dan hanya satu angka yang berubah (60 → 55). Recall naik 0.6 → 0.8, precision turun 3/4 → 4/6. Inilah tukar-guling precision dan recall, dilihat pada delapan buah yang bisa ia tunjuk satu per satu: J8 diselamatkan, J2 kebobolan. Pertanyaan yang layak diajukan setelahnya: "adakah ambang yang menaikkan keduanya sekaligus?" Jawabannya tidak, dan itulah sebabnya silabus menuntut precision dan recall dilaporkan berdua, bukan salah satu.

**Lima buah berdiri tepat di batas.** Jeruk D (gula tepat 11) dan E (diameter tepat 60) pada Soal 2; J4 (gula tepat 11) dan J5 (cacat tepat 5) pada Soal 4; lalu J8 (diameter tepat 55) pada Soal 5. Semuanya **lolos**, karena syaratnya memakai ≥ dan ≤. Ini persis jebakan `<` lawan `<=` yang sudah ia temui di bank Python. Kalau ia salah di satu, ia biasanya salah di semuanya — periksa polanya, bukan butirnya.

**J8 layak dibicarakan tersendiri.** Pada Soal 4 kadar gulanya tertinggi di seluruh tabel (15), tetapi pohon menolaknya karena diameter 55, dan kadar gulanya tidak pernah dilihat. Pohon keputusan tidak menimbang bukti; ia mematuhi urutan syarat. Ini perbedaan pokoknya dengan KNN, yang menjumlahkan seluruh fitur ke dalam satu jarak. Bila siswa sudah mengerjakan bank KNN 01, pertanyaan yang bagus: "kalau J8 dinilai KNN, apakah kadar gulanya ikut berbicara?" Pada Soal 5, J8 pula yang diselamatkan oleh pergeseran ambang — satu buah yang sama menerangkan dua pelajaran berbeda.

**Soal 6 adalah puncak set ini, dan jawabannya bukan angka 0.7.** Jawabannya adalah kenyataan bahwa **kedua pohon berakurasi sama persis, 0.6**, padahal yang satu membuang 7 dari 10 buah layak dan yang lain hanya 3. Ini menjadikan kalimat pada catatan Pertemuan 1 ("Accuracy can hide failure on a rare but important class") sebagai sesuatu yang ia hitung sendiri, bukan yang ia hafal. Minta ia menghitung kedua akurasi itu meski soal tidak memintanya — di situlah pelajarannya. Soal 3 menyiapkan jebakan yang sama dari arah lain: akurasi 0.85 yang terdengar bagus, padahal 5 dari 20 buah layak dibuang.

**Seluruh desimal yang diminta berhenti.** 0.85, 0.75, 0.8, 0.7 — tidak ada satu pun yang berupa pembulatan, dan pemeriksa jawaban menuntut ketelitian penuh. Angka keranjang dipilih khusus untuk itu. Satu-satunya pecahan berulang di seluruh set adalah precision Soal 5 (\(4/6\)), dan justru karena itu ia **tidak** ditanyakan — cukup disebut sebagai pecahan di dalam kunci. Bila siswa melapor angka berulang untuk soal yang ditanyakan, yang salah biasanya pembacaan soalnya, bukan pembulatannya.
