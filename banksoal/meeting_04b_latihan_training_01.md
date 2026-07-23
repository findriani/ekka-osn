# Pelatihan 01 — Mengukur Kesalahan Prediksi

Sebuah aplikasi cuaca membuat dua jenis prediksi. Prediksi **suhu** menghasilkan sebuah angka, sedangkan prediksi **hujan** menghasilkan peluang antara 0 dan 1. Keduanya memerlukan ukuran kesalahan yang berbeda: **galat kuadrat** untuk keluaran numerik dan **entropi silang** untuk keluaran berupa peluang. Nilai kesalahan ini disebut **loss**; semakin kecil nilainya, semakin dekat prediksi model dengan jawaban yang benar. Latihan ini membahas cara menghitung dan membandingkan kedua jenis loss tersebut.

## Petunjuk jawaban

Jawaban dapat berupa **angka** atau **nama model**.

- Untuk angka, tuliskan nilainya memakai titik desimal bila perlu, misalnya `1.25`.
- Nilai entropi silang diambil dari **tabel acuan** dan dibulatkan sampai tiga angka desimal. Gunakan nilai pada tabel; kalkulator tidak diperlukan.
- Untuk nama model, tuliskan `A`, `B`, atau `C` persis.

## Rumus cepat

**Galat kuadrat** untuk satu prediksi angka \(\hat{y}\) terhadap nilai benar \(y\):

\[
\ell = (\hat{y} - y)^2.
\]

**Galat kuadrat rata-rata** (*mean squared error*, MSE) adalah rata-rata galat kuadrat untuk seluruh contoh.

**Entropi silang biner** untuk prediksi peluang \(p\) (peluang kelas 1) dengan label benar \(y \in \{0, 1\}\):

\[
\ell = \begin{cases} -\ln p & \text{bila } y = 1,\\ -\ln(1 - p) & \text{bila } y = 0. \end{cases}
\]

Jika model sangat yakin pada kelas yang keliru, entropi silang memberikan nilai loss yang sangat besar. Nilainya terus meningkat ketika peluang untuk kelas yang benar mendekati 0.

### Tabel acuan \(-\ln p\) (bulat tiga desimal)

| \(p\) | 0.1 | 0.2 | 0.5 | 0.6 | 0.8 | 0.9 |
|---|---:|---:|---:|---:|---:|---:|
| \(-\ln p\) | 2.303 | 1.609 | 0.693 | 0.511 | 0.223 | 0.105 |

---

## Data

Tiga model menilai kemungkinan hujan pada hari yang sama. Nilai \(p\) menyatakan peluang hujan: 0 berarti "pasti tidak hujan" dan 1 berarti "pasti hujan". Pada hari tersebut **benar-benar turun hujan**, sehingga label benarnya adalah \(y=1\):

| Model | Peluang hujan \(p\) |
|---|---:|
| A | 0.9 |
| B | 0.6 |
| C | 0.1 |

<figure class="q-image">
<svg viewBox="0 0 480 360" role="img">
  <title>Entropi silang memberi loss besar pada prediksi yakin yang keliru</title>
  <desc>Kurva loss minus ln p untuk label benar y sama dengan 1. Ketika p mendekati 1, loss mendekati 0. Ketika p mendekati 0, loss meningkat tajam. Model A memberi p 0.9 dengan loss 0.105, model B memberi p 0.6 dengan loss 0.511, dan model C memberi p 0.1 dengan loss 2.303.</desc>
  <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="13">
    <g stroke="currentColor" opacity="0.6" stroke-width="1.4" fill="none">
      <path d="M 70 40 L 70 320"/>
      <path d="M 70 320 L 440 320"/>
    </g>
    <g stroke="currentColor" opacity="0.1" stroke-width="1" fill="none">
      <path d="M 70 208 L 440 208 M 70 96 L 440 96"/>
      <path d="M 255 40 L 255 320"/>
    </g>
    <g fill="currentColor" opacity="0.75" text-anchor="middle">
      <text x="70" y="338">0</text><text x="255" y="338">0.5</text><text x="440" y="338">1</text>
      <text x="255" y="356">p  (peluang kelas 1)</text>
    </g>
    <g fill="currentColor" opacity="0.75" text-anchor="end">
      <text x="60" y="324">0</text><text x="60" y="212">1</text><text x="60" y="100">2</text>
    </g>
    <text x="26" y="180" fill="currentColor" opacity="0.85" text-anchor="middle" transform="rotate(-90 26 180)">loss = -ln p</text>
    <path d="M 107.0,62.1 125.5,107.5 144.0,139.7 162.5,164.7 181.0,185.2 199.5,202.4 218.0,217.4 236.5,230.5 255.0,242.4 273.5,253.0 292.0,262.8 310.5,271.8 329.0,280.0 347.5,287.8 366.0,295.0 384.5,301.8 403.0,308.2 421.5,314.3 440.0,320.0"
      fill="none" stroke="#0072B2" stroke-width="2.6"/>
    <circle cx="107.0" cy="62.1" r="6" fill="#D55E00"/>
    <circle cx="292.0" cy="262.8" r="6" fill="#E69F00"/>
    <circle cx="403.0" cy="308.2" r="6" fill="#009E73"/>
    <g font-size="12.5">
      <circle cx="300" cy="86" r="6" fill="#009E73"/><text x="314" y="90" fill="currentColor">A (p=0.9): loss 0.105</text>
      <circle cx="300" cy="110" r="6" fill="#E69F00"/><text x="314" y="114" fill="currentColor">B (p=0.6): loss 0.511</text>
      <circle cx="300" cy="134" r="6" fill="#D55E00"/><text x="314" y="138" fill="currentColor">C (p=0.1): loss 2.303</text>
    </g>
  </g>
</svg>
</figure>

---

## Soal 1 — Galat kuadrat untuk satu hari

Model memprediksi suhu siang hari sebesar \(\hat{y}=31^\circ\mathrm{C}\), sedangkan hasil pengukuran sebenarnya adalah \(y=29^\circ\mathrm{C}\). Hitung galat kuadrat \((\hat{y}-y)^2\).

**Jawaban:** `_____`

---

## Soal 2 — Rata-rata kesalahan selama empat hari

Selama empat hari berturut-turut, suhu sebenarnya adalah \([30,32,29,33]^\circ\mathrm{C}\), sedangkan prediksi model adalah \([31,32,31,33]^\circ\mathrm{C}\). Pasangkan nilai berdasarkan urutan hari, hitung galat kuadrat setiap hari, lalu hitung **MSE** untuk keempat hari tersebut.

**Jawaban:** `_____`

---

## Soal 3 — Model yakin dan prediksinya benar

Pada hari yang benar-benar hujan (\(y=1\)), model **A** memberikan peluang hujan \(p=0.9\). Gunakan tabel acuan untuk menentukan loss entropi silang \(-\ln p\).

**Jawaban:** `_____`

---

## Soal 4 — Model yakin tetapi prediksinya keliru

Untuk hari yang sama, yang ternyata hujan (\(y=1\)), model **C** hanya memberikan peluang hujan \(p=0.1\). Artinya, model memberikan dukungan kuat pada prediksi "tidak hujan", padahal hujan benar-benar terjadi. Gunakan tabel untuk menghitung loss \(-\ln p\).

**Jawaban:** `_____`

---

## Soal 5 — Ketika labelnya 0

Pada hari lain, cuaca ternyata **tidak hujan**, sehingga \(y=0\). Model memberikan peluang hujan \(p=0.2\). Untuk label 0, gunakan \(-\ln(1-p)\). Tentukan nilai loss dengan bantuan tabel.

**Jawaban:** `_____`

---

## Soal 6 — Model mana terbaik?

Kembali ke hari yang benar-benar hujan (\(y=1\)). Model A memberikan \(p=0.9\), model B memberikan \(p=0.6\), dan model C memberikan \(p=0.1\). Berdasarkan loss entropi silang untuk **hari ini saja**, model mana yang memiliki loss paling kecil?

- **A.** Model A
- **B.** Model B
- **C.** Model C

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Jawaban: 4**

\[
\ell = (31 - 29)^2 = 2^2 = 4.
\]

Galat kuadrat mengkuadratkan selisih. Karena itu, selisih 2 derajat menghasilkan galat 4. Cara ini memberikan penalti yang lebih besar kepada kesalahan besar daripada kepada kesalahan kecil.

## Soal 2

**Jawaban: 1.25**

Selisih tiap hari: \(31-30=1\), \(32-32=0\), \(31-29=2\), \(33-33=0\). Kuadratnya \(1, 0, 4, 0\).

\[
\text{MSE} = \frac{1 + 0 + 4 + 0}{4} = \frac{5}{4} = 1.25.
\]

## Soal 3

**Jawaban: 0.105**

\[
\ell = -\ln(0.9) = 0.105 \quad(\text{dari tabel}).
\]

Peluang yang tinggi untuk kejadian yang benar-benar terjadi menghasilkan loss yang kecil.

## Soal 4

**Jawaban: 2.303**

\[
\ell = -\ln(0.1) = 2.303 \quad(\text{dari tabel}).
\]

Bandingkan dengan Soal 3. Loss model C sekitar **22 kali** loss model A karena model C sangat yakin ke arah "tidak hujan", padahal hujan benar-benar terjadi. Inilah ciri khas entropi silang — ia melonjak tanpa batas ketika model sangat yakin pada jawaban yang salah (lihat ujung kiri kurva pada gambar).

## Soal 5

**Jawaban: 0.223**

Karena \(y=0\), gunakan bentuk \(-\ln(1-p)\):

\[
\ell = -\ln(1 - 0.2) = -\ln(0.8) = 0.223 \quad(\text{dari tabel}).
\]

Ketika label 0, yang "benar" adalah peluang kelas 1 yang **rendah**. Model menebak 0.2 (cukup rendah), jadi loss-nya kecil.

## Soal 6

**Jawaban: A**

| Model | \(p\) | loss \(-\ln p\) |
|---|---:|---:|
| A | 0.9 | 0.105 |
| B | 0.6 | 0.511 |
| C | 0.1 | 2.303 |

Loss terkecil dimiliki **A** (0.105). Model yang memberi peluang tertinggi kepada kejadian yang benar-benar terjadi adalah yang terbaik untuk hari itu.

---

# Catatan pengajar

**Dua jenis loss untuk dua jenis prediksi.** Soal 1–2 melatih galat kuadrat atau MSE untuk keluaran numerik (regresi), sedangkan Soal 3–6 melatih entropi silang untuk keluaran berupa peluang (klasifikasi). Tegaskan pemetaannya: gunakan galat kuadrat untuk prediksi angka dan entropi silang untuk prediksi peluang.

**Soal 3 dan 4 merupakan pasangan inti.** Keduanya membahas hari yang sama dengan label \(y=1\); perbedaannya hanya pada tingkat keyakinan model. Perbandingan 0.105 dan 2.303 menunjukkan bahwa entropi silang memberikan loss besar ketika model sangat yakin pada prediksi yang keliru. Gambar memperkuat hubungan ini: kurva hampir datar di sebelah kanan, ketika \(p\) besar dan loss kecil, tetapi meningkat tajam di sebelah kiri, ketika \(p\) kecil.

**Soal 5 menutup cabang \(y = 0\).** Siswa sering hanya hafal \(-\ln p\) dan lupa bahwa saat label 0, yang dipakai adalah \(-\ln(1-p)\). Angka 0.2 dipilih agar \(1 - p = 0.8\) ada di tabel.

**Nilai entropi silang diperoleh dari tabel.** Seperti sigmoid, perhitungan \(-\ln p\) melibatkan logaritma natural yang tidak praktis dihitung secara manual. Semua nilai \(p\) pada latihan ini, yaitu 0.1, 0.2, 0.6, 0.8, dan 0.9, tersedia dalam tabel acuan. Galat kuadrat dan MSE pada Soal 1–2 dapat dihitung secara eksak, yaitu 4 dan 1.25.

**Semua jawaban berbeda:** 4, 1.25, 0.105, 2.303, 0.223, A. Prediksi suhu di Soal 2 dipilih agar selisihnya \((1,0,2,0)\) menghasilkan MSE berupa desimal berhingga, yaitu 1.25.
