# Lintasan Maju (*Forward Pass*) 01 — Dari Masukan ke Prediksi

Sebuah aplikasi latihan ingin mengenali ketika siswa mengalami **kesulitan**, sehingga aplikasi dapat menawarkan petunjuk pada saat yang tepat. Satu **neuron** membuat perkiraan itu dengan menggabungkan dua **fitur** (*features*) menjadi **skor berbobot** (*weighted score*) \(z\), lalu mengubah skor tersebut menjadi keluaran. Latihan ini mengikuti satu **lintasan maju** (*forward pass*): mulai dari fitur, menghitung skor \(z\), menerapkan **fungsi aktivasi**, lalu menghasilkan peluang atau kelas. Pada soal terakhir, langkah yang sama diterapkan pada sebuah **MLP** kecil.

## Petunjuk jawaban

Jawaban dapat berupa **angka** atau **nama siswa**.

- Untuk angka, tuliskan nilainya memakai titik desimal bila perlu, misalnya `0.731`. Gunakan tanda `-` untuk nilai negatif.
- Sebagian besar jawaban berupa bilangan bulat. Dua jawaban berupa nilai sigmoid — untuk itu, **salin nilai dari tabel acuan apa adanya** (dibulatkan tiga desimal), jangan menghitung ulang dengan kalkulator.
- Untuk nama, tuliskan `P`, `Q`, atau `R` persis.

## Rumus cepat

Skor berbobot sebuah neuron dengan dua fitur:

\[
z = w_1 x_1 + w_2 x_2 + b.
\]

Dua fungsi aktivasi yang digunakan dalam latihan ini:

\[
\mathrm{ReLU}(z) = \max(0, z)\quad\text{(ganti nilai negatif dengan 0, sisanya dibiarkan),}
\]
\[
\sigma(z) = \frac{1}{1+e^{-z}}\quad\text{(memetakan skor apa pun ke selang }(0,1)\text{ sebagai peluang).}
\]

Sifat simetri sigmoid yang berguna untuk skor negatif:

\[
\sigma(-z) = 1 - \sigma(z).
\]

Aturan **ambang keputusan** (*threshold*): model memprediksi **kelas 1** bila \(\sigma(z)\ge t\); jika tidak, model memprediksi **kelas 0**. Semakin tinggi ambang \(t\), semakin besar peluang yang diperlukan agar suatu contoh masuk ke kelas 1.

### Tabel acuan sigmoid (bulatkan tiga desimal)

| \(z\) | \(-2\) | \(-1\) | \(0\) | \(1\) | \(2\) |
|---|---:|---:|---:|---:|---:|
| \(\sigma(z)\) | 0.119 | 0.269 | 0.500 | 0.731 | 0.881 |

---

## Data

Satu neuron memakai bobot \(w = (1, 1)\) dan bias \(b = -3\), sehingga skornya adalah

\[
z = 1\cdot x_1 + 1\cdot x_2 - 3.
\]

Dua fitur digunakan untuk setiap siswa. Fitur \(x_1\) merangkum jumlah percobaan yang salah, sedangkan \(x_2\) merangkum lamanya siswa terhenti pada satu soal.

> Data mentah kedua fitur memiliki satuan yang berbeda: banyaknya percobaan dan menit. Dalam latihan ini, keduanya dianggap **sudah diubah menjadi skor pada skala yang sebanding**, seperti pada proses penskalaan di Pertemuan 3. Bobot \((1,1)\) dan bias \(-3\) adalah parameter contoh yang sengaja disederhanakan agar perhitungannya dapat dilakukan dengan tangan.

| Siswa | \(x_1\): skor percobaan salah | \(x_2\): skor lama terhenti |
|---|---:|---:|
| P | 2 | 2 |
| Q | 1 | 1 |
| R | 3 | 2 |

<figure class="q-image">
<svg viewBox="0 0 560 300" role="img">
  <title>Lintasan maju sebuah neuron</title>
  <desc>Dua fitur x1 dan x2 masuk melalui panah berbobot w1 dan w2 ke simpul penjumlah. Simpul itu menambahkan bias b dan menghasilkan skor berbobot z. Skor z kemudian melewati fungsi aktivasi ReLU atau sigmoid untuk menghasilkan keluaran.</desc>
  <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="15">
    <g fill="none" stroke="currentColor" stroke-width="1.6">
      <circle cx="72" cy="88" r="27"/>
      <circle cx="72" cy="212" r="27"/>
    </g>
    <g fill="currentColor" text-anchor="middle" font-size="17">
      <text x="72" y="94">x₁</text>
      <text x="72" y="218">x₂</text>
    </g>
    <g stroke="currentColor" stroke-width="1.6" fill="none" marker-end="url(#ah04a)">
      <path d="M 99 98 L 220 142"/>
      <path d="M 99 202 L 220 158"/>
    </g>
    <g fill="#0072B2" font-size="15" text-anchor="middle">
      <text x="150" y="106">w₁</text>
      <text x="150" y="200">w₂</text>
    </g>
    <circle cx="252" cy="150" r="32" fill="none" stroke="currentColor" stroke-width="1.6"/>
    <text x="252" y="156" fill="currentColor" text-anchor="middle" font-size="18">Σ +b</text>
    <path d="M 284 150 L 356 150" stroke="currentColor" stroke-width="1.6" fill="none" marker-end="url(#ah04a)"/>
    <text x="320" y="140" fill="#0072B2" text-anchor="middle" font-size="16">z</text>
    <rect x="358" y="118" width="100" height="64" rx="9" fill="none" stroke="currentColor" stroke-width="1.6"/>
    <text x="408" y="145" fill="currentColor" text-anchor="middle" font-size="14">aktivasi</text>
    <text x="408" y="167" fill="currentColor" text-anchor="middle" font-size="14">ReLU / σ</text>
    <path d="M 458 150 L 520 150" stroke="currentColor" stroke-width="1.6" fill="none" marker-end="url(#ah04a)"/>
    <text x="500" y="138" fill="#D55E00" text-anchor="middle" font-size="14">keluaran</text>
    <defs>
      <marker id="ah04a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
        <path d="M0,0 L7,3 L0,6 Z" fill="currentColor"/>
      </marker>
    </defs>
  </g>
</svg>
</figure>

---

## Soal 1 — Menghitung skor berbobot

Siswa **P** memiliki skor fitur \(x=(2,2)\). Gunakan \(z=x_1+x_2-3\) untuk menghitung skor berbobot siswa P.

**Jawaban:** `_____`

---

## Soal 2 — Menerapkan ReLU pada skor negatif

Siswa **Q** memiliki skor fitur \(x=(1,1)\). Hitung dahulu \(z=x_1+x_2-3\), kemudian terapkan ReLU. Tuliskan nilai akhir \(\mathrm{ReLU}(z)\).

**Jawaban:** `_____`

---

## Soal 3 — Skor menjadi peluang

Pada Soal 1, siswa **P** memperoleh skor \(z=1\). Ubah skor tersebut menjadi peluang bahwa siswa sedang mengalami kesulitan dengan fungsi sigmoid. Gunakan tabel acuan dan tuliskan hasilnya sampai tiga angka desimal.

**Jawaban:** `_____`

---

## Soal 4 — Menggunakan ambang yang lebih tinggi

Aplikasi menawarkan petunjuk hanya jika peluang kesulitan memenuhi \(\sigma(z)\ge t\). Dengan ambang **\(t=0.8\)**, tentukan siapa di antara siswa **P** dan **R** yang mendapat petunjuk.

*Petunjuk: skor P adalah \(z=1\), sedangkan skor R adalah \(z=3+2-3=2\). Cari peluang keduanya pada tabel, lalu bandingkan dengan 0.8.*

**Jawaban:** `_____`

---

## Soal 5 — Sigmoid untuk skor negatif

Siswa **Q** memiliki skor \(z=-1\). Tanpa menghitung fungsi eksponensial, gunakan sifat simetri \(\sigma(-z)=1-\sigma(z)\) dan nilai \(\sigma(1)=0.731\) untuk menentukan \(\sigma(-1)\).

**Jawaban:** `_____`

---

## Soal 6 — Lintasan maju melalui lapisan tersembunyi

Aplikasi kemudian menggunakan jaringan kecil dengan **dua unit tersembunyi** (*hidden units*) dan satu unit keluaran:

\[
h_1 = \mathrm{ReLU}(x_1 + x_2 - 3), \qquad
h_2 = \mathrm{ReLU}(x_1 - x_2 + 1), \qquad
o = 2h_1 + h_2 - 1.
\]

Untuk siswa **P** dengan \(x=(2,2)\), hitung \(h_1\), kemudian \(h_2\), dan terakhir keluaran **\(o\)**. Tuliskan nilai akhir \(o\).

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Jawaban: 1**

\[
z = 1\cdot 2 + 1\cdot 2 - 3 = 4 - 3 = 1.
\]

Skor positif kecil: model lebih mendukung kelas "mengalami kesulitan", tetapi dukungannya belum kuat.

## Soal 2

**Jawaban: 0**

Skor Q lebih dahulu:

\[
z = 1\cdot 1 + 1\cdot 1 - 3 = 2 - 3 = -1.
\]

Lalu ReLU mengubah nilai negatif menjadi 0:

\[
\mathrm{ReLU}(-1) = \max(0, -1) = 0.
\]

Inilah inti ReLU — semua skor negatif "diratakan" menjadi 0, sedangkan skor positif dibiarkan apa adanya.

## Soal 3

**Jawaban: 0.731**

Skor P adalah \(z = 1\), sehingga peluang kesulitannya

\[
\sigma(1) = 0.731 \quad(\text{dari tabel acuan}).
\]

Sigmoid memetakan skor berapa pun menjadi nilai antara 0 dan 1. Skor \(z=1\) menghasilkan peluang 0.731: model menilai kelas "mengalami kesulitan" lebih mungkin daripada kelas lainnya, tetapi peluangnya belum mencapai 0.8.

## Soal 4

**Jawaban: R**

Bandingkan peluang tiap siswa dengan ambang 0.8:

| Siswa | \(z\) | \(\sigma(z)\) | \(\ge 0.8\)? | Petunjuk? |
|---|---:|---:|:--:|:--:|
| P | 1 | 0.731 | tidak | tidak |
| R | 2 | 0.881 | ya | ya |

Hanya **R** yang mencapai ambang 0.8. Jika ambangnya \(t=0.5\), **keduanya** akan mendapat petunjuk karena 0.731 dan 0.881 sama-sama sedikitnya 0.5. Menaikkan ambang membuat syarat untuk masuk kelas 1 lebih ketat tanpa mengubah bobot maupun bias neuron.

## Soal 5

**Jawaban: 0.269**

\[
\sigma(-1) = 1 - \sigma(1) = 1 - 0.731 = 0.269.
\]

Hasil ini sesuai dengan tabel acuan. Sifat simetri tersebut menyederhanakan perhitungan: nilai sigmoid untuk skor positif langsung menentukan nilai pasangannya untuk skor negatif. Skor \(+1\) dan \(-1\) sama jauhnya dari 0, sehingga peluangnya juga sama jauhnya dari 0.5, tetapi berada pada sisi yang berlawanan.

## Soal 6

**Jawaban: 2**

Hitung tiap unit tersembunyi lebih dahulu, lalu keluarannya.

\[
h_1 = \mathrm{ReLU}(2 + 2 - 3) = \mathrm{ReLU}(1) = 1,
\]
\[
h_2 = \mathrm{ReLU}(2 - 2 + 1) = \mathrm{ReLU}(1) = 1,
\]
\[
o = 2\cdot 1 + 1 - 1 = 2.
\]

Ini adalah satu lintasan maju yang lengkap: fitur → dua keluaran unit tersembunyi setelah ReLU → satu skor keluaran. Dalam MLP, keluaran suatu neuron menjadi masukan bagi neuron pada lapisan berikutnya. Karena itu, perhitungannya dilakukan secara berurutan, lapis demi lapis.

---

# Catatan pengajar

**Satu lintasan maju, dari fitur sampai kelas.** Latihan ini menelusuri lintasan maju secara berurutan: skor berbobot \(z\) (Soal 1), aktivasi ReLU yang mengubah nilai negatif menjadi 0 (Soal 2), aktivasi sigmoid sebagai peluang (Soal 3), aturan ambang (Soal 4), simetri sigmoid untuk skor negatif (Soal 5), lalu jaringan dua lapisan (Soal 6). Setelah menguasai keenam soal, siswa dapat menghitung keluaran sebuah neuron dan MLP kecil secara manual.

**Dua cara membaca skor yang sama.** Skor berbobot \(z\) tidak berubah; yang berubah adalah cara skor itu diproses. ReLU mengubahnya menjadi aktivasi internal (Soal 2 dan 6), sedangkan sigmoid mengubahnya menjadi peluang (Soal 3–5). Tegaskan bahwa keluaran linear sebuah neuron dapat diikuti oleh ReLU **atau** sigmoid, sesuai dengan peran neuron tersebut dalam jaringan.

**Soal 2 sengaja menggunakan skor negatif.** Banyak siswa lupa bahwa ReLU mengubah nilai negatif menjadi 0, lalu menulis \(-1\) sebagai jawaban. Soal ini mengharuskan mereka menerapkan \(\max(0,z)\), bukan sekadar menyalin nilai \(z\).

**Soal 4 membedakan keluaran neuron dari aturan ambang.** Pesan utamanya adalah bahwa perubahan ambang dapat mengubah keputusan tanpa mengubah bobot model. Pada \(t=0.5\), kedua siswa terpilih; pada \(t=0.8\), hanya R yang terpilih. Contoh ini menyiapkan gagasan bahwa tingkat ketatnya keputusan model probabilistik dapat diatur setelah pelatihan.

**Soal 5 dapat dikerjakan tanpa kalkulator.** Perhitungan sigmoid melibatkan fungsi eksponensial yang tidak praktis dihitung secara manual. Oleh karena itu, siswa menggunakan tabel acuan dan sifat simetri. Nilai 0.731 dan 0.269 merupakan hasil pembulatan sampai tiga angka desimal, bukan desimal berhingga eksak.

**Semua jawaban berbeda:** 1, 0, 0.731, R, 0.269, 2. Angka dipilih agar setiap \(z \in \{-1,1,2\}\) tercantum dalam tabel acuan, sehingga seluruh langkah dapat dikerjakan tanpa kalkulator. Untuk variasi berikutnya, gunakan skor berupa bilangan bulat kecil \((-2\ \text{sampai}\ 2)\) agar nilai sigmoid tetap tersedia pada tabel.
