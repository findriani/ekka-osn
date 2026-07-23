# Pelatihan 03 — Batch, Epoch, dan Penghentian Dini

Pelatihan model dilakukan berulang kali. Pada setiap langkah, model menerima satu kelompok kecil data yang disebut **batch**, menghitung loss, lalu memperbarui parameternya satu kali. Satu putaran yang mencakup seluruh data latih disebut **epoch**. Selama proses ini, kita memantau **loss pelatihan** pada data yang digunakan untuk belajar dan **loss validasi** pada data terpisah. Latihan ini membahas hubungan batch–epoch–pembaruan, lalu menggunakan catatan loss untuk mengenali overfitting dan memilih model dengan **penghentian dini** (*early stopping*).

## Petunjuk jawaban

Semua jawaban berupa **angka**. Gunakan bilangan bulat untuk jumlah batch, pembaruan, atau epoch; gunakan desimal untuk selisih loss, misalnya `0.08`.

## Rumus cepat

Banyaknya **pembaruan dalam satu epoch** dengan \(n\) contoh dan batch berukuran \(b\):

\[
\text{pembaruan per epoch} = \left\lceil \tfrac{n}{b} \right\rceil \ \text{(jika batch terakhir yang tidak penuh tetap digunakan)}, \quad \text{atau } \left\lfloor \tfrac{n}{b} \right\rfloor \ \text{(jika batch tersebut dibuang)}.
\]

Total pembaruan = (pembaruan per epoch) \(\times\) (banyaknya epoch).

**Overfitting** tampak ketika loss pelatihan terus turun, tetapi loss validasi berbalik naik. **Kesenjangan generalisasi** pada latihan ini dihitung sebagai loss validasi dikurangi loss pelatihan.

**Penghentian dini** menyimpan *checkpoint*—salinan parameter model—dari epoch dengan loss validasi terendah yang teramati. Kenaikan loss validasi setelah titik tersebut merupakan tanda bahwa kemampuan model pada data baru mulai memburuk.

---

## Data

Sebuah model dilatih menggunakan \(n=180\) contoh dengan ukuran batch \(b=32\). Tabel berikut hanya mencatat beberapa epoch, bukan setiap epoch yang dijalankan:

| Epoch | Loss pelatihan | Loss validasi |
|---:|---:|---:|
| 1 | 0.90 | 0.92 |
| 4 | 0.50 | 0.55 |
| 8 | 0.30 | 0.40 |
| 12 | 0.15 | 0.48 |

<figure class="q-image">
<svg viewBox="0 0 480 360" role="img">
  <title>Loss pelatihan turun terus, loss validasi naik lagi</title>
  <desc>Dua kurva terhadap epoch. Loss pelatihan (biru) turun terus dari 0.90 ke 0.15. Loss validasi (oranye) turun sampai 0.40 pada epoch 8 lalu naik ke 0.48 pada epoch 12. Garis putus-putus hijau di epoch 8 menandai titik penghentian dini, tempat loss validasi terendah.</desc>
  <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="13">
    <g stroke="currentColor" opacity="0.6" stroke-width="1.4" fill="none">
      <path d="M 70 40 L 70 320"/>
      <path d="M 70 320 L 440 320"/>
    </g>
    <g stroke="currentColor" opacity="0.1" stroke-width="1" fill="none">
      <path d="M 70 180 L 440 180 M 70 40 L 440 40"/>
    </g>
    <g fill="currentColor" opacity="0.75" text-anchor="middle">
      <text x="100.8" y="338">1</text><text x="193.3" y="338">4</text><text x="316.7" y="338">8</text><text x="440" y="338">12</text>
      <text x="255" y="356">epoch</text>
    </g>
    <g fill="currentColor" opacity="0.75" text-anchor="end">
      <text x="60" y="324">0</text><text x="60" y="184">0.5</text><text x="60" y="44">1.0</text>
    </g>
    <text x="24" y="180" fill="currentColor" opacity="0.85" text-anchor="middle" transform="rotate(-90 24 180)">loss</text>
    <path d="M 316.7 40 L 316.7 286" stroke="#009E73" stroke-width="1.8" stroke-dasharray="7 5" opacity="0.8"/>
    <text x="316.7" y="34" fill="#009E73" text-anchor="middle" font-size="12">penghentian dini</text>
    <polyline points="100.8,68 193.3,180 316.7,236 440,278" fill="none" stroke="#0072B2" stroke-width="2.6"/>
    <polyline points="100.8,62.4 193.3,166 316.7,208 440,185.6" fill="none" stroke="#E69F00" stroke-width="2.6"/>
    <g fill="#0072B2"><circle cx="100.8" cy="68" r="4"/><circle cx="193.3" cy="180" r="4"/><circle cx="316.7" cy="236" r="4"/><circle cx="440" cy="278" r="4"/></g>
    <g fill="#E69F00"><circle cx="100.8" cy="62.4" r="4"/><circle cx="193.3" cy="166" r="4"/><circle cx="440" cy="185.6" r="4"/></g>
    <circle cx="316.7" cy="208" r="7" fill="none" stroke="#E69F00" stroke-width="2.4"/>
    <text x="325" y="224" fill="currentColor" font-size="11.5">validasi terendah</text>
    <g font-size="12.5">
      <line x1="86" y1="300" x2="112" y2="300" stroke="#0072B2" stroke-width="2.6"/><text x="118" y="304" fill="currentColor">loss pelatihan</text>
      <line x1="230" y1="300" x2="256" y2="300" stroke="#E69F00" stroke-width="2.6"/><text x="262" y="304" fill="currentColor">loss validasi</text>
    </g>
  </g>
</svg>
</figure>

---

## Soal 1 — Pembaruan per epoch ketika batch terakhir digunakan

Sebanyak 180 contoh dibagi menjadi batch berukuran 32. Lima batch pertama masing-masing berisi 32 contoh, sedangkan contoh yang tersisa membentuk satu batch terakhir yang lebih kecil. Jika batch terakhir itu **tetap digunakan**, berapa kali parameter diperbarui dalam satu epoch?

**Jawaban:** `_____`

---

## Soal 2 — Pembaruan per epoch ketika batch terakhir dibuang

Gunakan kembali 180 contoh dan ukuran batch 32. Kali ini, batch terakhir yang tidak penuh **dibuang**. Berapa banyak batch yang digunakan, dan karena itu berapa kali parameter diperbarui dalam satu epoch?

**Jawaban:** `_____`

---

## Soal 3 — Total pembaruan

Pelatihan berlangsung selama **12 epoch** dan selalu menggunakan batch terakhir yang tidak penuh, seperti pada Soal 1. Jika setiap batch menghasilkan satu pembaruan, berapa total pembaruan parameter selama seluruh pelatihan?

**Jawaban:** `_____`

---

## Soal 4 — Memilih checkpoint terbaik

Perhatikan kolom loss validasi pada tabel. Di antara epoch yang tercatat, epoch berapa yang memiliki loss validasi paling rendah? Tuliskan nomor epoch dari checkpoint yang sebaiknya disimpan.

**Jawaban:** `_____`

---

## Soal 5 — Dampak memilih checkpoint yang lebih akhir

Bandingkan checkpoint epoch 8 dan epoch 12. Berapa besar kenaikan loss validasi jika parameter dari epoch 12 digunakan sebagai model akhir, bukan parameter dari epoch 8? Hitung \(0.48-0.40\).

**Jawaban:** `_____`

---

## Soal 6 — Kesenjangan generalisasi

Pada epoch 12, loss pelatihan adalah 0.15 dan loss validasi adalah 0.48. Hitung kesenjangan generalisasi, yaitu loss validasi dikurangi loss pelatihan.

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Jawaban: 6**

\[
\left\lceil \tfrac{180}{32} \right\rceil : \quad 32 \times 5 = 160,\ \text{sisa } 20.
\]

Terdapat lima batch penuh yang masing-masing berisi 32 contoh, ditambah satu batch terakhir berisi 20 contoh. Jadi terdapat **6 batch** dan parameter diperbarui 6 kali.

## Soal 2

**Jawaban: 5**

\[
\left\lfloor \tfrac{180}{32} \right\rfloor = 5.
\]

Jika batch berisi 20 contoh dibuang, hanya lima batch penuh yang digunakan. Karena setiap batch menghasilkan satu pembaruan, terdapat **5 pembaruan** dalam satu epoch.

## Soal 3

**Jawaban: 72**

\[
6 \ \text{pembaruan/epoch} \times 12 \ \text{epoch} = 72.
\]

Ingat: satu epoch bukan satu pembaruan. Dengan 6 batch per epoch, 12 epoch berarti 72 kali parameter diperbarui.

## Soal 4

**Jawaban: 8**

Loss validasi yang tercatat adalah \(0.92\to0.55\to0.40\to0.48\). Nilai **terendah** terdapat pada **epoch 8**, yaitu 0.40. Karena itu, parameter dari epoch 8 merupakan checkpoint terbaik yang teramati dan perlu disimpan.

Tabel hanya mencatat beberapa epoch, sehingga kita tidak dapat menentukan kapan tepatnya overfitting mulai terjadi. Kita hanya dapat menyimpulkan bahwa pada epoch 12, loss validasi sudah meningkat dari 0.40 menjadi 0.48, sedangkan loss pelatihan terus menurun dari 0.30 menjadi 0.15. Pola tersebut konsisten dengan overfitting yang muncul setelah checkpoint terbaik yang teramati.

## Soal 5

**Jawaban: 0.08**

\[
0.48 - 0.40 = 0.08.
\]

Checkpoint epoch 12 memiliki loss validasi 0.08 lebih tinggi daripada checkpoint epoch 8. Pelatihan boleh saja berjalan lebih lama untuk memastikan trennya, tetapi penghentian dini akan tetap menyimpan kembali parameter terbaik dari epoch 8.

## Soal 6

**Jawaban: 0.33**

\[
\text{kesenjangan} = 0.48 - 0.15 = 0.33.
\]

Kesenjangan yang besar, ketika loss validasi jauh di atas loss pelatihan, merupakan salah satu gejala overfitting: model bekerja sangat baik pada data yang dilihatnya (loss pelatihan 0.15) tetapi jauh lebih buruk pada data baru (loss validasi 0.48). Bandingkan dengan epoch 8, tempat kesenjangannya hanya \(0.40 - 0.30 = 0.10\).

---

# Catatan pengajar

**Dua keterampilan dalam satu latihan.** Soal 1–3 membahas perhitungan jumlah langkah (batch → pembaruan → epoch), tempat kesalahan paling umum adalah menyamakan "epoch" dengan "pembaruan". Soal 4–6 adalah membaca kurva: menemukan checkpoint dengan loss validasi terendah (Soal 4), mengukur biaya melatih terlalu lama (Soal 5), dan mengukur kesenjangan generalisasi (Soal 6). Gambar menyatukan keduanya secara visual.

**Angka 180 sengaja tidak habis dibagi 32.** Sisa 20 membuat perbedaan antara menggunakan batch terakhir (6) dan membuangnya (5) terlihat. Bila \(n\) habis dibagi \(b\), Soal 1 dan 2 akan bernilai sama dan pelajarannya hilang.

**Soal 4 dan 5 saling menguatkan.** Soal 4 menentukan checkpoint terbaik yang teramati, yaitu epoch 8. Soal 5 mengukur kenaikan loss validasi sebesar 0.08 jika checkpoint tersebut diabaikan dan parameter dari epoch 12 digunakan. Tekankan bahwa penghentian dini tidak memerlukan perhitungan yang rumit; model cukup memantau loss validasi dan menyimpan salinan parameter terbaik. **Hindari** pernyataan bahwa overfitting pasti mulai tepat pada epoch 8. Karena tabel hanya memuat beberapa epoch, kesimpulan yang sah hanyalah bahwa epoch 8 merupakan checkpoint terbaik yang teramati dan loss validasi telah meningkat pada epoch 12.

**Soal 6 memberi contoh kesenjangan generalisasi yang dapat dihitung.** Membandingkan kesenjangan pada epoch 8 (0.10) dengan epoch 12 (0.33) di dalam kunci memperlihatkan bahwa kesenjangan membesar ketika gejala overfitting muncul. Ini penghubung ke materi regularisasi, yang bertujuan memperkecil kesenjangan tersebut di catatan pertemuan.

**Semua jawaban berbeda:** 6, 5, 72, 8, 0.08, 0.33. Loss pada tabel dipilih agar semua selisih (0.08, 0.33, dan 0.10) berupa desimal berhingga dan mudah dicek tanpa kalkulator.
