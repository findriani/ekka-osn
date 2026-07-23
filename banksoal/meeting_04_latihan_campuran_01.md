# Campuran 01 — Memilih Metode yang Tepat

Latihan campuran ini menggunakan situasi dan angka yang berbeda pada setiap soal. Nama rumus tidak disebutkan di dalam pertanyaan. Tugasmu adalah membaca informasi yang diberikan, memilih metode yang sesuai dari ringkasan di bawah, lalu menghitung jawabannya. Soal-soal ini masih terdiri atas satu atau dua tahap agar kamu dapat berlatih mengenali jenis masalah terlebih dahulu. Soal EKKA biasanya memerlukan lebih banyak tahapan, tetapi semuanya tetap diawali dengan keputusan yang sama: informasi apa yang tersedia dan metode apa yang sesuai?

## Petunjuk jawaban

Jawaban berupa **angka** atau **kelas** (`0` atau `1`).

- Untuk angka, tuliskan nilainya memakai titik desimal bila perlu (misalnya `0.881`) dan tanda `-` untuk negatif.
- Nilai **sigmoid** dan **entropi silang** diambil dari tabel acuan (bulat tiga desimal) — salin apa adanya.
- Untuk kelas, tuliskan `0` atau `1` persis.

## Ringkasan metode Pertemuan 4

**Lintasan maju (*forward pass*) — mengubah masukan menjadi prediksi:**

- Skor berbobot (*weighted score*): \(z = w_1 x_1 + w_2 x_2 + b\).
- Fungsi aktivasi: \(\mathrm{ReLU}(z) = \max(0, z)\); \(\sigma(z) = \frac{1}{1+e^{-z}}\); simetri \(\sigma(-z) = 1 - \sigma(z)\).
- Perceptron: kelas **1** bila \(z \ge 0\), selain itu kelas 0.
- Ambang keputusan: kelas **1** bila \(\sigma(z) \ge t\), selain itu kelas 0.
- MLP: keluaran satu lapisan menjadi masukan lapisan berikutnya (hitung lapis demi lapis).

**Pelatihan — mengukur kesalahan dan memperbaiki model:**

- Galat kuadrat (*squared error*): \((\hat{y}-y)^2\); MSE adalah rata-rata galat kuadrat. Gunakan ukuran ini jika keluaran berupa **angka**.
- Entropi silang biner (*binary cross-entropy*): \(-\ln p\) jika label \(y=1\), atau \(-\ln(1-p)\) jika \(y=0\). Gunakan ukuran ini jika keluaran berupa **peluang**.
- Penurunan gradien (*gradient descent*): \(w \leftarrow w - \eta\, g\) (dengan gradien \(g\)).
- Banyak pembaruan per epoch adalah \(\lceil n/b\rceil\) jika batch terakhir yang tidak penuh tetap digunakan, atau \(\lfloor n/b\rfloor\) jika batch tersebut dibuang. Di sini, \(n\) adalah jumlah contoh dan \(b\) adalah ukuran batch.
- Penghentian dini (*early stopping*): simpan checkpoint dengan **loss validasi terendah** yang teramati.

### Tabel acuan

Sigmoid \(\sigma(z)\):

| \(z\) | \(-2\) | \(-1\) | \(0\) | \(1\) | \(2\) |
|---|---:|---:|---:|---:|---:|
| \(\sigma(z)\) | 0.119 | 0.269 | 0.500 | 0.731 | 0.881 |

Entropi silang \(-\ln p\):

| \(p\) | 0.1 | 0.2 | 0.5 | 0.6 | 0.8 | 0.9 |
|---|---:|---:|---:|---:|---:|---:|
| \(-\ln p\) | 2.303 | 1.609 | 0.693 | 0.511 | 0.223 | 0.105 |

<figure class="q-image">
<svg viewBox="0 0 580 320" role="img">
  <title>Panduan memilih metode: lintasan maju atau pelatihan</title>
  <desc>Panduan dua kelompok metode. Kelompok lintasan maju digunakan untuk mengubah masukan menjadi prediksi melalui skor berbobot, ReLU atau sigmoid, ambang, dan MLP. Kelompok pelatihan digunakan untuk mengukur dan memperbaiki model melalui galat kuadrat, entropi silang, langkah gradien, jumlah pembaruan per epoch, dan penghentian dini.</desc>
  <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="14">
    <text x="290" y="30" fill="currentColor" text-anchor="middle" font-size="15">Baca situasinya — metode mana yang sesuai?</text>
    <g stroke="currentColor" opacity="0.3" stroke-width="1.2" fill="none">
      <path d="M 250 40 L 154 52"/><path d="M 330 40 L 426 52"/>
    </g>
    <rect x="28" y="52" width="252" height="244" rx="10" fill="none" stroke="#0072B2" stroke-width="1.8"/>
    <text x="154" y="82" fill="#0072B2" text-anchor="middle" font-size="17" font-weight="bold">LINTASAN MAJU</text>
    <text x="154" y="102" fill="currentColor" text-anchor="middle" font-size="12" opacity="0.8">mengubah masukan menjadi prediksi</text>
    <g fill="currentColor">
      <text x="46" y="140">• skor berbobot z = w·x + b</text>
      <text x="46" y="172">• ReLU / sigmoid σ(z)</text>
      <text x="46" y="204">• ambang → kelas 0/1</text>
      <text x="46" y="236">• MLP: hitung lapis demi lapis</text>
    </g>
    <rect x="300" y="52" width="252" height="244" rx="10" fill="none" stroke="#E69F00" stroke-width="1.8"/>
    <text x="426" y="82" fill="#E69F00" text-anchor="middle" font-size="17" font-weight="bold">PELATIHAN</text>
    <text x="426" y="102" fill="currentColor" text-anchor="middle" font-size="12" opacity="0.8">mengukur dan memperbaiki model</text>
    <g fill="currentColor">
      <text x="318" y="140">• galat kuadrat / MSE</text>
      <text x="318" y="172">• entropi silang −ln p</text>
      <text x="318" y="204">• langkah gradien w ← w − η·g</text>
      <text x="318" y="236">• pembaruan per epoch; penghentian dini</text>
    </g>
  </g>
</svg>
</figure>

---

## Soal 1 — Kafe

Sebuah kafe menggunakan model sederhana untuk memperkirakan apakah pelanggan akan kembali pada bulan berikutnya. Model menghitung \(z=2\cdot(\text{jumlah kunjungan bulan lalu})-(\text{lama antre dalam menit})-1\), lalu menentukan kelas secara langsung: kelas 1 jika \(z\ge0\), dan kelas 0 jika \(z<0\). Seorang pelanggan berkunjung 3 kali dan pernah mengantre selama 4 menit. Kelas apa yang diprediksi? (`1` = kembali, `0` = tidak kembali.)

**Jawaban:** `_____`

---

## Soal 2 — Toko roti

Sebuah toko roti memprediksi bahwa permintaan hari ini adalah **48 roti**, sedangkan penjualan sebenarnya adalah **45 roti**. Karena keluarannya berupa angka, gunakan metode loss yang sesuai dari ringkasan. Berapa loss untuk satu prediksi ini?

**Jawaban:** `_____`

---

## Soal 3 — Filter email

Sebuah filter email telah menghitung skor \(z=2\). Skor itu harus diubah menjadi peluang bahwa email termasuk spam. Pilih fungsi yang sesuai dari ringkasan dan tentukan peluangnya dengan bantuan tabel.

**Jawaban:** `_____`

---

## Soal 4 — Termostat

Sebuah termostat belajar menyesuaikan satu parameter \(w\) dari data suhu ruangan. Setelah memproses satu batch, diperoleh gradien \(g=6\). Nilai parameter saat ini adalah \(w=5\) dan laju belajarnya \(\eta=0.5\). Gunakan metode pembaruan yang sesuai untuk menentukan nilai \(w\) setelah satu langkah.

**Jawaban:** `_____`

---

## Soal 5 — Alarm dehidrasi

Sebuah aplikasi kebugaran menghitung skor \(z=1\) untuk risiko dehidrasi berdasarkan data sensor. Skor tersebut diubah menjadi peluang dengan sigmoid. Alarm hanya menyala jika peluangnya sedikitnya 0.8. Apakah alarm menyala? (`1` = ya, `0` = tidak.)

**Jawaban:** `_____`

---

## Soal 6 — Penerbangan

Sebuah model memberikan peluang **0.6** bahwa suatu penerbangan akan terlambat. Penerbangan tersebut ternyata **benar-benar terlambat**, sehingga labelnya \(y=1\). Karena keluarannya berupa peluang, pilih loss yang sesuai dari ringkasan dan hitung nilainya dengan tabel.

**Jawaban:** `_____`

---

## Soal 7 — Keputusan karakter gim

Dalam sebuah gim strategi, \(x_1\) adalah skor peluang menyerang dan \(x_2\) adalah skor tingkat ancaman. Jaringan kecil menghitung \(h_1=\mathrm{ReLU}(x_1-x_2)\), lalu \(h_2=\mathrm{ReLU}(x_2-1)\), dan akhirnya \(o=h_1+2h_2\). Untuk \((x_1,x_2)=(3,2)\), hitung kedua unit tersembunyi secara berurutan, lalu tentukan \(o\).

**Jawaban:** `_____`

---

## Soal 8 — Memilih checkpoint

Empat checkpoint model memiliki loss validasi berikut: epoch 2 sebesar 0.70, epoch 4 sebesar 0.45, epoch 6 sebesar 0.50, dan epoch 8 sebesar 0.62. Jika model akhir dipilih berdasarkan loss validasi terendah, parameter dari **epoch berapa** yang harus disimpan?

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Metode: skor berbobot + aturan tanda perceptron** (kelas 1 bila \(z \ge 0\), diambil dari ringkasan metode). Cerita meminta *kelas dari masukan* → lintasan maju.

\[
z = 2\cdot 3 - 1\cdot 4 - 1 = 6 - 4 - 1 = 1 \ge 0 \;\Rightarrow\; \textbf{kelas 1}.
\]

**Jawaban: 1**

## Soal 2

**Metode: galat kuadrat.** Keluaran model berupa **angka** (48 dan 45 roti), bukan peluang → pilih galat kuadrat.

\[
(\hat{y} - y)^2 = (48 - 45)^2 = 3^2 = 9.
\]

**Jawaban: 9**

## Soal 3

**Metode: sigmoid.** Cerita meminta *peluang dari sebuah skor* → ubah \(z\) dengan sigmoid.

\[
\sigma(2) = \textbf{0.881} \quad(\text{dari tabel}).
\]

**Jawaban: 0.881**

## Soal 4

**Metode: satu langkah penurunan gradien.** "Memperbaiki parameter" dengan gradien + laju belajar → gunakan aturan \(w \leftarrow w - \eta\,g\) dari ringkasan metode.

\[
w \leftarrow 5 - 0.5\cdot 6 = 5 - 3 = 2.
\]

**Jawaban: 2**

## Soal 5

**Metode: sigmoid + ambang.** Skor diubah menjadi peluang, lalu dibandingkan dengan ambang 0.8.

\[
\sigma(1) = 0.731, \qquad 0.731 < 0.8 \;\Rightarrow\; \text{alarm tidak menyala} \;\Rightarrow\; \textbf{0}.
\]

**Jawaban: 0**

## Soal 6

**Metode: entropi silang biner.** Keluaran berupa **peluang** 0.6 dan peristiwa tersebut **benar-benar terjadi** (\(y = 1\)) → \(-\ln p\).

\[
-\ln(0.6) = \textbf{0.511} \quad(\text{dari tabel}).
\]

**Jawaban: 0.511**

## Soal 7

**Metode: lintasan maju MLP** (dua unit tersembunyi dengan ReLU, kemudian satu keluaran).

\[
h_1 = \mathrm{ReLU}(3 - 2) = 1, \quad h_2 = \mathrm{ReLU}(2 - 1) = 1, \quad o = 1 + 2\cdot 1 = 3.
\]

**Jawaban: 3**

## Soal 8

**Metode: penghentian dini** (simpan checkpoint dengan loss validasi terendah).

Loss validasi: \(0.70, \mathbf{0.45}, 0.50, 0.62\). Terendah adalah **0.45 di epoch 4**, jadi parameter epoch 4 yang sebaiknya disimpan.

**Jawaban: 4**

---

# Catatan pengajar

**Tujuan latihan ini adalah memilih metode, bukan sekadar berhitung.** Setiap soal menggunakan situasi yang berbeda dan tidak menyebut nama metode secara langsung. Siswa perlu bertanya, *"Keluaran apa yang diminta dan informasi apa yang tersedia?"* Perhitungannya sengaja ringan agar perhatian utama tetap pada pemilihan metode. Kunci jawaban mencantumkan **Metode:** sebelum penyelesaian sehingga proses pemilihannya dapat dibahas, bukan hanya hasil akhirnya.

**Urutan sengaja diselang-seling** — lintasan maju, pelatihan, lintasan maju, pelatihan, … (Soal 1, 3, 5, 7 lintasan maju; Soal 2, 4, 6, 8 pelatihan). Nomor soal tidak memberikan petunjuk tentang kategorinya, jadi siswa harus benar-benar menilai tiap cerita, bukan menebak dari posisinya.

**Membedakan galat kuadrat dan entropi silang berdasarkan jenis keluaran.** Soal 2 dan 6 sama-sama menanyakan nilai loss, tetapi menggunakan jenis prediksi yang berbeda. Soal 2 memprediksi **jumlah roti**, sehingga menggunakan galat kuadrat. Soal 6 memprediksi **peluang penerbangan tertunda**, sehingga menggunakan entropi silang. Jika siswa tertukar, letak kesalahannya adalah pemilihan ukuran loss, bukan proses perhitungannya. Perbedaan inilah yang dilatih oleh kedua soal tersebut.

**Hal lain yang perlu diperhatikan.** Soal 5 memberi peluang di atas 0.5 tetapi di bawah ambang 0.8 — siswa yang terburu-buru menjawab "1" (karena >0.5) akan salah; ambangnya 0.8. Soal 4 hanya memberi \(g\), \(\eta\), dan \(w\) tanpa menuliskan rumus pembaruan; siswa harus mengambil sendiri \(w \leftarrow w - \eta g\) dari ringkasan metode.

**Cakupan latihan ini.** Semua soal masih satu–dua langkah, sehingga latihan ini baru membangun tahap awal keterampilan memilih metode — **bukan** pengganti soal EKKA yang merangkai beberapa langkah sekaligus. Setelah siswa lancar memilih metode dalam latihan ini, lanjutkan ke soal yang menggabungkan beberapa metode dalam satu cerita.

**Semua jawaban berbeda:** 1, 9, 0.881, 2, 0, 0.511, 3, 4 — empat lintasan maju (Soal 1, 3, 5, 7) dan empat pelatihan (Soal 2, 4, 6, 8), diselang-seling. Nilai sigmoid (0.881) dan entropi silang (0.511) diambil dari tabel; sisanya bilangan bulat atau desimal berhingga. Variasi lanjutan (`campuran_02`, `_03`) dapat mencakup metode lain yang belum muncul di sini: simetri sigmoid, gerbang logika dengan perceptron, batas keputusan, penggabungan lapisan linear, MSE beberapa titik, entropi silang dengan \(y = 0\), jumlah pembaruan per epoch ketika terdapat sisa batch, dan kesenjangan generalisasi.
