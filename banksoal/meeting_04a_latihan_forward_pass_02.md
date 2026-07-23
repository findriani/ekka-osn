# Lintasan Maju (*Forward Pass*) 02 — Perceptron dan Gerbang Logika

Sebuah **lampu pintar** menggunakan dua sensor: sensor cahaya dan sensor keberadaan orang. Masing-masing sensor hanya menghasilkan 0 atau 1. Satu **perceptron** menggabungkan kedua masukan itu menjadi skor \(z\), lalu menyalakan lampu jika \(z\ge0\). Karena masukannya biner, pola keluaran perceptron dapat dibaca sebagai sebuah **gerbang logika**. Latihan ini membahas gerbang AND, OR, dan NAND, kemudian menunjukkan mengapa satu perceptron tidak dapat merepresentasikan XOR secara sempurna.

## Petunjuk jawaban

Jawaban dapat berupa **angka** atau **nama gerbang logika**.

- Untuk keluaran/angka, tuliskan `0`, `1`, atau bilangan bulat lain persis.
- Untuk nama gerbang, tuliskan salah satu dari `AND`, `OR`, atau `NAND` dengan huruf kapital.

## Rumus cepat

Perceptron dengan dua masukan:

\[
z = w_1 x_1 + w_2 x_2 + b, \qquad
\text{keluaran} = \begin{cases} 1 & \text{bila } z \ge 0,\\ 0 & \text{bila } z < 0. \end{cases}
\]

Untuk dua masukan biner \((x_1,x_2)\), hanya ada empat kemungkinan: \((0,0)\), \((0,1)\), \((1,0)\), dan \((1,1)\). Secara geometri, satu perceptron membentuk **satu garis lurus** sebagai batas keputusan. Karena itu, perceptron hanya dapat memisahkan pola kelas yang **dapat dipisahkan secara linear** (*linearly separable*).

Tiga gerbang logika yang muncul di latihan ini:

| Gerbang | Keluaran 1 jika… | Pola keluaran pada \((0,0),(0,1),(1,0),(1,1)\) |
|---|---|---|
| AND | **kedua** masukan 1 | 0, 0, 0, 1 |
| OR | **paling sedikit satu** masukan 1 | 0, 1, 1, 1 |
| NAND | **bukan** (kedua masukan 1) | 1, 1, 1, 0 |

---

## Data

Lampu memakai perceptron **A**: \(w = (1, 1)\), \(b = -1.5\), sehingga

\[
z = x_1 + x_2 - 1.5.
\]

Arti kedua masukan adalah: \(x_1=1\) jika ruangan gelap dan 0 jika terang; \(x_2=1\) jika ada orang dan 0 jika ruangan kosong.

<figure class="q-image">
<svg viewBox="0 0 380 400" role="img">
  <title>XOR tidak dapat dipisahkan secara linear</title>
  <desc>Empat pasangan masukan biner x1 dan x2. Titik (0,1) dan (1,0) berada pada kelas 1, sedangkan (0,0) dan (1,1) berada pada kelas 0. Karena kedua kelas menempati sudut yang berseberangan, tidak ada satu garis lurus yang dapat memisahkan semuanya dengan sempurna.</desc>
  <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="13">
    <g stroke="currentColor" opacity="0.6" stroke-width="1.4" fill="none">
      <path d="M 70 300 L 330 300"/>
      <path d="M 90 320 L 90 70"/>
    </g>
    <g fill="currentColor" opacity="0.75" text-anchor="middle">
      <text x="90" y="320">0</text><text x="300" y="320">1</text>
      <text x="200" y="346">x₁ (gelap)</text>
    </g>
    <g fill="currentColor" opacity="0.75" text-anchor="end">
      <text x="80" y="304">0</text><text x="80" y="94">1</text>
    </g>
    <text x="66" y="70" fill="currentColor" opacity="0.85" text-anchor="middle">x₂ (ada orang)</text>
    <path d="M 195 78 L 195 322" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 5" opacity="0.55"/>
    <text x="203" y="150" fill="currentColor" opacity="0.7" font-size="12">contoh garis pemisah</text>
    <g stroke="#0072B2" stroke-width="2.4" fill="none">
      <circle cx="90" cy="300" r="11"/>
      <circle cx="300" cy="90" r="11"/>
    </g>
    <g fill="#E69F00">
      <circle cx="90" cy="90" r="11"/>
      <circle cx="300" cy="300" r="11"/>
    </g>
    <g fill="currentColor" opacity="0.85" font-size="12.5">
      <text x="104" y="296">(0,0) → 0</text>
      <text x="200" y="86">(1,1) → 0</text>
      <text x="104" y="86">(0,1) → 1</text>
      <text x="200" y="318">(1,0) → 1</text>
    </g>
    <g font-size="12.5">
      <circle cx="96" cy="378" r="9" fill="#E69F00"/><text x="110" y="382" fill="currentColor">kelas 1 (XOR)</text>
      <circle cx="228" cy="378" r="9" fill="none" stroke="#0072B2" stroke-width="2.4"/><text x="242" y="382" fill="currentColor">kelas 0</text>
    </g>
  </g>
</svg>
</figure>

---

## Soal 1 — Menentukan keluaran perceptron

Ruangan sedang **gelap**, tetapi **tidak ada orang**, sehingga \((x_1,x_2)=(1,0)\). Hitung skor \(z=x_1+x_2-1.5\), lalu tentukan keadaan lampu. Tuliskan `1` jika lampu menyala atau `0` jika lampu mati.

**Jawaban:** `_____`

---

## Soal 2 — Mengenali gerbang perceptron A

Hitung keluaran perceptron A untuk keempat pasangan masukan \((0,0)\), \((0,1)\), \((1,0)\), dan \((1,1)\). Cocokkan pola keluarannya dengan tabel gerbang logika. Pada kolom jawaban, tuliskan **nama gerbangnya**.

**Jawaban:** `_____`

---

## Soal 3 — Mengenali gerbang perceptron B

Perceptron **B** menggunakan \(w=(1,1)\) dan \(b=-0.5\), sehingga \(z=x_1+x_2-0.5\). Tentukan keluarannya untuk keempat pasangan masukan biner, lalu tuliskan nama gerbang logika yang memiliki pola tersebut.

**Jawaban:** `_____`

---

## Soal 4 — Gerbang dengan bobot negatif

Perceptron **C** menggunakan \(w=(-1,-1)\) dan \(b=1.5\), sehingga \(z=-x_1-x_2+1.5\). Hitung pola keluarannya untuk keempat pasangan masukan, lalu tentukan nama gerbang logikanya.

**Jawaban:** `_____`

---

## Soal 5 — Bias menggeser garis

Perceptron A semula menggunakan \(z=x_1+x_2-1.5\) dan menghasilkan gerbang AND. Bobotnya tetap \((1,1)\), tetapi bias diubah dari \(-1.5\) menjadi \(-0.5\). Setelah perubahan itu, gerbang apa yang dihasilkan?

**Jawaban:** `_____`

---

## Soal 6 — Batas kemampuan perceptron pada XOR

Gerbang **XOR** menghasilkan 1 hanya jika **tepat satu** masukan bernilai 1. Urutan keluarannya untuk \((0,0)\), \((0,1)\), \((1,0)\), dan \((1,1)\) adalah \(0,1,1,0\). Pada gambar, dua titik kelas 1 berada di sudut yang saling berseberangan, sehingga tidak mungkin dipisahkan sempurna oleh satu garis lurus. Dari empat titik tersebut, **paling banyak berapa titik** yang dapat diklasifikasikan dengan benar oleh satu perceptron?

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Jawaban: 0**

\[
z = 1 + 0 - 1.5 = -0.5 < 0 \;\Rightarrow\; \text{keluaran } 0.
\]

Gelap saja tidak cukup: lampu A baru menyala bila gelap **dan** ada orang.

## Soal 2

**Jawaban: AND**

| \((x_1,x_2)\) | \(z = x_1 + x_2 - 1.5\) | keluaran |
|---|---:|:--:|
| (0,0) | \(-1.5\) | 0 |
| (0,1) | \(-0.5\) | 0 |
| (1,0) | \(-0.5\) | 0 |
| (1,1) | \(0.5\) | 1 |

Pola keluaran \(0,0,0,1\) — hanya menyala saat **kedua** masukan 1. Itulah **AND**.

## Soal 3

**Jawaban: OR**

| \((x_1,x_2)\) | \(z = x_1 + x_2 - 0.5\) | keluaran |
|---|---:|:--:|
| (0,0) | \(-0.5\) | 0 |
| (0,1) | \(0.5\) | 1 |
| (1,0) | \(0.5\) | 1 |
| (1,1) | \(1.5\) | 1 |

Pola \(0,1,1,1\) — menyala bila **paling sedikit satu** masukan 1. Itulah **OR**. Perhatikan bobotnya sama seperti A; hanya biasnya yang berbeda.

## Soal 4

**Jawaban: NAND**

| \((x_1,x_2)\) | \(z = -x_1 - x_2 + 1.5\) | keluaran |
|---|---:|:--:|
| (0,0) | \(1.5\) | 1 |
| (0,1) | \(0.5\) | 1 |
| (1,0) | \(0.5\) | 1 |
| (1,1) | \(-0.5\) | 0 |

Pola \(1,1,1,0\) merupakan kebalikan dari AND. Itulah **NAND** (NOT-AND). Bobot negatif membalik arah pengaruh masukan: semakin banyak masukan bernilai 1, semakin kecil nilai \(z\).

## Soal 5

**Jawaban: OR**

Bandingkan dengan Soal 3. Mengubah bias dari \(-1.5\) menjadi \(-0.5\) mengubah \(z=x_1+x_2-1.5\) (AND) menjadi \(z=x_1+x_2-0.5\) (OR). Bias mengatur posisi garis pemisah. Perubahan bias tersebut menggeser garis sehingga lebih banyak titik berada pada sisi keluaran 1. Bobot menentukan **arah** garis, sedangkan bias menentukan **posisinya**.

## Soal 6

**Jawaban: 3**

Batas keputusan satu perceptron berupa **satu garis lurus**. Pada XOR, kedua kelas menempati sudut-sudut yang berseberangan secara diagonal (lihat gambar): keluaran 1 berada di \((0,1)\) dan \((1,0)\), sedangkan keluaran 0 berada di \((0,0)\) dan \((1,1)\). Tidak ada satu garis lurus yang dapat menempatkan kedua titik kelas 1 pada satu sisi dan kedua titik kelas 0 pada sisi lain. Karena itu, XOR **tidak dapat dipisahkan secara linear**.

Bukti singkat lewat pertidaksamaan. Misalkan sebuah perceptron benar pada keempatnya:

- dari \((0,0)\to 0\): \(b < 0\);
- dari \((0,1)\to 1\): \(w_2+b\ge 0\), sehingga \(w_2\ge -b>0\);
- dari \((1,0)\to 1\): \(w_1+b\ge 0\), sehingga \(w_1\ge -b>0\);
- dari \((1,1)\to 0\): \(w_1 + w_2 + b < 0\).

Menjumlahkan dua baris tengah menghasilkan \(w_1+w_2\ge-2b\). Karena \(b<0\), diperoleh \(w_1+w_2+b\ge-b>0\). Hasil ini bertentangan dengan syarat terakhir, yaitu \(w_1+w_2+b<0\). Jadi, keempat titik tidak mungkin diklasifikasikan dengan benar secara bersamaan.

**Batas tiga titik dapat dicapai.** Gunakan gerbang OR dari Soal 3, yang keluarannya \(0,1,1,1\). Bandingkan dengan target XOR \(0,1,1,0\): hasilnya benar pada \((0,0)\), \((0,1)\), dan \((1,0)\), tetapi salah pada \((1,1)\). Jadi, tiga dari empat titik dapat diklasifikasikan dengan benar. Gerbang NAND dari Soal 4 juga benar pada tiga titik. Jawaban **3** tepat: empat titik tidak mungkin semuanya benar, tetapi tiga titik dapat dicapai. Untuk merepresentasikan XOR secara sempurna, jaringan memerlukan lapisan tersembunyi, yang akan dibahas pada latihan berikutnya.

---

# Catatan pengajar

**Perceptron = satu garis = satu gerbang logika.** Latihan ini menegaskan tiga gagasan: perceptron dengan masukan biner dapat merepresentasikan gerbang logika (Soal 2–4), bobot mengatur arah dan bias mengatur posisi garis (Soal 5), serta satu garis tidak selalu cukup untuk memisahkan kelas (Soal 6). Nilai 1.5 dan 0.5 dipilih agar setiap \(z\) tidak sama dengan 0, sehingga tidak ada keluaran yang ambigu.

**Soal 5 menjadi jembatan konseptual.** Bobot A dan B sama; perbedaannya hanya pada bias. Dalam contoh dua dimensi ini, perubahan bias menggeser letak batas keputusan tanpa mengubah arahnya. Ketika model dilatih, bobot dan bias sama-sama dapat diperbarui untuk memperbaiki prediksi.

**Soal 6 menggunakan gambar sebagai bukti visual.** Sebelum membahas pertidaksamaan aljabar, arahkan siswa untuk mengamati bahwa dua titik dari setiap kelas berada pada diagonal yang berlawanan. Pertanyaan apakah satu garis lurus dapat memisahkan kedua kelas biasanya dapat dijawab secara intuitif. Bukti pertidaksamaan kemudian memformalkan intuisi tersebut. Jawaban **3** mengharuskan siswa menentukan batas kemampuan perceptron sekaligus menunjukkan bahwa batas itu dapat dicapai, misalnya dengan gerbang OR.

**Nama gerbang ditulis dengan huruf kapital AND/OR/NAND.** Gunakan istilah baku tersebut, bukan terjemahan "dan" atau "atau", karena pemeriksa jawaban mencocokkan teks secara persis.
