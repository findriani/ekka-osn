# Lintasan Maju (*Forward Pass*) 03 — Batas Keputusan dan Lapisan Tersembunyi

Sebuah aplikasi melakukan penyaringan awal pengajuan beasiswa dengan satu **perceptron**. Model menggunakan dua skor yang telah dinormalisasi, lalu menghasilkan kelas 1 untuk "lolos penyaringan awal" dan kelas 0 untuk "belum lolos". Secara geometri, perceptron membentuk **batas keputusan** berupa garis lurus \(z=0\). Latihan ini mengajarkan cara membaca garis tersebut, menunjukkan bahwa beberapa lapisan linear tanpa aktivasi tetap setara dengan satu fungsi linear, dan memperlihatkan bagaimana lapisan tersembunyi dengan ReLU dapat membentuk batas keputusan yang tidak lagi berupa satu garis.

## Petunjuk jawaban

Jawaban berupa **angka** (bilangan bulat, boleh negatif). Tuliskan `-` untuk nilai negatif, misalnya `-2`.

## Rumus cepat

Sebuah perceptron memberi skor \(z = w_1 x_1 + w_2 x_2 + b\) dan memprediksi **kelas 1** bila \(z \ge 0\), **kelas 0** bila \(z < 0\). Batas keputusan adalah tempat \(z = 0\):

\[
w_1 x_1 + w_2 x_2 + b = 0 \;\Longleftrightarrow\; x_2 = -\frac{w_1}{w_2}x_1 - \frac{b}{w_2}.
\]

Tanda \(z\) memberi tahu **sisi** garis tempat titik berada. ReLU: \(\mathrm{ReLU}(z) = \max(0, z)\).

**Menumpuk fungsi linear:** jika \(h = a x + c\) lalu \(y = d h + e\), maka \(y = d(ax+c)+e = (da)x + (dc+e)\) — tetap sebuah fungsi linear tunggal.

---

## Data

Fitur \(x_1\) adalah **skor prestasi akademik**: semakin tinggi nilainya, semakin kuat prestasinya. Fitur \(x_2\) adalah **skor kemampuan ekonomi keluarga**: semakin tinggi nilainya, semakin besar kemampuan ekonominya. Keduanya menggunakan skala sederhana 0–3 untuk latihan ini. Perceptron menggunakan \(w=(2,-1)\) dan \(b=-1\), sehingga

\[
z = 2x_1 - x_2 - 1,
\]

dan batas keputusannya adalah garis \(2x_1 - x_2 - 1 = 0\), yaitu \(x_2 = 2x_1 - 1\).

<figure class="q-image">
<svg viewBox="0 0 460 420" role="img">
  <title>Batas keputusan perceptron untuk penyaringan beasiswa</title>
  <desc>Bidang skor prestasi x1 terhadap skor kemampuan ekonomi x2, dengan batas keputusan x2 sama dengan 2 x1 dikurangi 1. Titik (2,1) berada pada sisi z positif atau kelas 1, titik (1,3) berada pada sisi z negatif atau kelas 0, dan titik (1,1) tepat pada garis karena z sama dengan nol.</desc>
  <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="13">
    <g stroke="currentColor" opacity="0.6" stroke-width="1.4" fill="none">
      <path d="M 70 40 L 70 380"/>
      <path d="M 70 380 L 430 380"/>
    </g>
    <g stroke="currentColor" opacity="0.1" stroke-width="1" fill="none">
      <path d="M 190 40 L 190 380 M 310 40 L 310 380 M 430 40 L 430 380"/>
      <path d="M 70 312 L 430 312 M 70 244 L 430 244 M 70 176 L 430 176 M 70 108 L 430 108 M 70 40 L 430 40"/>
    </g>
    <g fill="currentColor" opacity="0.75" text-anchor="middle">
      <text x="70" y="398">0</text><text x="190" y="398">1</text><text x="310" y="398">2</text><text x="430" y="398">3</text>
      <text x="250" y="416">x₁</text>
    </g>
    <g fill="currentColor" opacity="0.75" text-anchor="end">
      <text x="60" y="384">-1</text><text x="60" y="316">0</text><text x="60" y="248">1</text>
      <text x="60" y="180">2</text><text x="60" y="112">3</text><text x="60" y="44">4</text>
    </g>
    <text x="26" y="210" fill="currentColor" opacity="0.85" text-anchor="middle" transform="rotate(-90 26 210)">x₂</text>
    <path d="M 70 380 L 370 40" stroke="#009E73" stroke-width="2.8" fill="none"/>
    <text x="330" y="70" fill="#009E73" font-size="14">z = 0</text>
    <text x="330" y="300" fill="currentColor" opacity="0.55" font-size="12">sisi z &gt; 0 (kelas 1)</text>
    <text x="96" y="70" fill="currentColor" opacity="0.55" font-size="12">sisi z &lt; 0 (kelas 0)</text>
    <circle cx="310" cy="244" r="8" fill="#E69F00"/>
    <text x="322" y="240" fill="currentColor" font-size="12.5">(2,1): z = +2</text>
    <circle cx="190" cy="108" r="8" fill="none" stroke="#0072B2" stroke-width="2.4"/>
    <text x="202" y="104" fill="currentColor" font-size="12.5">(1,3): z = -2</text>
    <circle cx="190" cy="244" r="8" fill="currentColor" opacity="0.55"/>
    <text x="120" y="266" fill="currentColor" font-size="12.5">(1,1): z = 0 (di garis)</text>
  </g>
</svg>
</figure>

---

## Soal 1 — Membaca batas keputusan

Seorang calon memiliki skor prestasi \(x_1=2\). Pada nilai \(x_2\) berapa calon tersebut berada tepat pada batas keputusan \(x_2=2x_1-1\)? Tuliskan nilai \(x_2\).

**Jawaban:** `_____`

---

## Soal 2 — Skor sebuah titik

Calon A memiliki skor \((x_1,x_2)=(2,1)\). Hitung skor \(z=2x_1-x_2-1\). Nilai \(z\) yang tidak negatif berarti calon A masuk kelas 1.

**Jawaban:** `_____`

---

## Soal 3 — Titik pada sisi yang berbeda

Calon B memiliki skor \((x_1,x_2)=(1,3)\). Hitung \(z=2x_1-x_2-1\). Tanda hasilnya menunjukkan bahwa calon B berada pada sisi kelas 0 atau kelas 1.

**Jawaban:** `_____`

---

## Soal 4 — Tepat di garis

Calon C memiliki skor \((x_1,x_2)=(1,1)\). Hitung \(z=2x_1-x_2-1\). Nilai yang diperoleh menunjukkan bahwa calon C berada tepat pada batas keputusan.

**Jawaban:** `_____`

---

## Soal 5 — Dua lapisan linear runtuh menjadi satu

Sebuah jaringan sederhana menerima satu nilai \(x\). Lapisan pertama menghitung \(h=2x+1\), lalu lapisan kedua menghitung \(y=3h-4\). Tidak ada fungsi aktivasi di antara keduanya. Substitusikan rumus \(h\) ke dalam rumus \(y\), tulis hasilnya sebagai \(y=wx+b\), lalu tentukan nilai \(w\).

**Jawaban:** `_____`

---

## Soal 6 — Lapisan tersembunyi untuk XOR

Untuk dua masukan biner, jaringan kecil berikut menggunakan ReLU pada lapisan tersembunyi:

\[
h_1 = \mathrm{ReLU}(x_1 + x_2), \quad
h_2 = \mathrm{ReLU}(x_1 + x_2 - 1), \quad
o = h_1 - 2h_2,
\]

Jaringan memprediksi kelas 1 bila \(o\ge0.5\). Untuk masukan \((x_1,x_2)=(0,1)\), hitung \(h_1\), \(h_2\), dan akhirnya **\(o\)**. Tuliskan nilai \(o\).

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Jawaban: 3**

\[
x_2 = 2(2) - 1 = 4 - 1 = 3.
\]

Titik \((2, 3)\) terletak tepat di garis. Setiap titik yang \(x_2\)-nya **lebih kecil** dari \(2x_1 - 1\) berada di sisi \(z>0\) (kelas 1), karena koefisien \(x_2\) bertanda negatif.

## Soal 2

**Jawaban: 2**

\[
z = 2(2) - 1 - 1 = 4 - 1 - 1 = 2 \ge 0 \;\Rightarrow\; \text{kelas 1}.
\]

Di gambar, \((2,1)\) memang berada di bawah garis, dan sisi bawah adalah sisi \(z>0\).

## Soal 3

**Jawaban: -2**

\[
z = 2(1) - 3 - 1 = 2 - 4 = -2 < 0 \;\Rightarrow\; \text{kelas 0}.
\]

Tandanya negatif, sehingga \((1,3)\) berada pada sisi yang berlawanan dari \((2,1)\). Posisi tersebut sesuai dengan gambar: titik \((1,3)\) berada di atas garis.

## Soal 4

**Jawaban: 0**

\[
z = 2(1) - 1 - 1 = 0.
\]

Nilai \(z=0\) berarti titik tersebut berada **tepat** pada batas keputusan. Berdasarkan aturan \(z\ge0\), titik itu dimasukkan ke kelas 1. Namun, karena berada pada batas, perubahan bias yang sangat kecil dapat memindahkannya ke kelas lain.

## Soal 5

**Jawaban: 6**

\[
y = 3h - 4 = 3(2x + 1) - 4 = 6x + 3 - 4 = 6x - 1.
\]

Jadi, \(w=6\) dan \(b=-1\). Dua lapisan linear yang disusun berurutan tetap menghasilkan **satu** fungsi linear yang setara dengan satu lapisan. Karena itu, jaringan memerlukan fungsi aktivasi **nonlinear**, seperti ReLU, di antara lapisan. Tanpa aktivasi nonlinear, penambahan lapisan tidak meningkatkan kemampuan jaringan untuk membentuk batas keputusan yang lebih rumit.

## Soal 6

**Jawaban: 1**

\[
h_1 = \mathrm{ReLU}(0 + 1) = 1, \quad
h_2 = \mathrm{ReLU}(0 + 1 - 1) = \mathrm{ReLU}(0) = 0,
\]
\[
o = 1 - 2(0) = 1 \;(\ge 0.5 \Rightarrow \text{kelas 1}).
\]

Lengkapnya, jaringan ini menghitung **XOR**:

| \((x_1,x_2)\) | \(h_1\) | \(h_2\) | \(o\) | kelas |
|---|---:|---:|---:|:--:|
| (0,0) | 0 | 0 | 0 | 0 |
| (0,1) | 1 | 0 | 1 | 1 |
| (1,0) | 1 | 0 | 1 | 1 |
| (1,1) | 2 | 1 | 0 | 0 |

Pola kelas \(0,1,1,0\) tepat sama dengan XOR, yang pada latihan sebelumnya terbukti tidak dapat direpresentasikan secara sempurna oleh satu perceptron. Lapisan tersembunyi dengan ReLU membentuk fitur perantara, sehingga jaringan dapat menghasilkan batas keputusan nonlinear dan memisahkan pola diagonal XOR.

---

# Catatan pengajar

**Tiga gagasan geometri dalam satu latihan.** Soal 1–4 melatih membaca batas keputusan: garisnya (Soal 1), sisi \(z>0\) (Soal 2), sisi \(z<0\) (Soal 3), dan kasus batas \(z=0\) (Soal 4). Soal 5 menunjukkan mengapa aktivasi diperlukan. Soal 6 menutupnya dengan XOR yang kini terpecahkan — kebalikan langsung dari kesimpulan latihan Forward Pass 02.

**Koefisien \(x_2\) negatif sengaja dipertahankan.** Banyak siswa mengira "kelas 1 selalu di atas garis". Di sini kelas 1 justru di **bawah** garis karena \(w_2 = -1\). Gambar memuat label sisi agar siswa memercayai tanda \(z\), bukan posisi visual "atas/bawah". Ini melatih kebiasaan: hitung tanda \(z\), jangan menebak dari gambar.

**Soal 5 menjelaskan alasan perlunya aktivasi nonlinear.** Nilai 2, 1, 3, dan 4 dipilih agar hasil penggabungannya sederhana, yaitu \(6x-1\). Setelah siswa memperoleh bentuk tersebut, tegaskan bahwa berapa pun jumlah lapisan linear yang disusun tanpa aktivasi nonlinear, hasil akhirnya tetap berupa satu fungsi linear. ReLU memberi jaringan kemampuan membentuk batas keputusan nonlinear, seperti yang mulai diperlihatkan pada Soal 6.

**Semua jawaban berbeda:** 3, 2, −2, 0, 6, 1. Seluruh jawaban berupa bilangan bulat dan latihan ini tidak menggunakan sigmoid, sehingga tabel acuan tidak diperlukan. Titik-titik dipilih agar \(z\in\{-2,0,2\}\) memiliki tanda yang mudah dibedakan. Jaringan pada Soal 6 juga menggunakan bobot bulat agar setiap nilai \(h\) dan \(o\) tetap bulat.
