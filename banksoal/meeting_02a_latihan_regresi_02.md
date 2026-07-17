# Regresi 02

Fokus set ini: tabel suara \((x_i-\bar x)(y_i-\bar y)\), rumus kuadrat terkecil, dan membandingkan dua garis kandidat. Struktur yang **belum** muncul di Latihan 01.

Rumus yang dipakai:

\[
\beta = \frac{\sum (x_i-\bar x)(y_i-\bar y)}{\sum (x_i-\bar x)^2},
\qquad
\alpha = \bar y - \beta\bar x.
\]

## Petunjuk jawaban

Setiap soal menyebutkan **format jawabannya sendiri**. Untuk soal pilihan ganda, pilih tombol jawaban yang benar.

Kerjakan dengan pecahan sejauh mungkin. Bulatkan hanya jika soal memintanya.

---

## Rumus cepat

\[
\beta=\frac{\sum_i(x_i-\bar x)(y_i-\bar y)}{\sum_i(x_i-\bar x)^2},
\qquad \alpha=\bar y-\beta\bar x.
\]

\[
\hat y=\alpha+\beta x,\qquad \operatorname{MSE}=\frac{1}{n}\sum_i(y_i-\hat y_i)^2.
\]

Garis dengan MSE lebih kecil adalah yang lebih baik.

---

## Soal 1 — Pupuk dan panen jagung

Seorang penyuluh pertanian mencatat tiga petak sawah percobaan:

| Pupuk \(x\) (karung) | Hasil panen \(y\) (kuintal) |
|---:|---:|
| 2 | 10 |
| 4 | 14 |
| 6 | 21 |

Hitunglah nilai \(\beta\) (kemiringan) yang menghasilkan MSE terkecil.

*Tuliskan jawaban dalam bentuk desimal dengan 2 angka di belakang koma.*

**Jawaban:** `_____`

---

## Soal 2 — Pupuk dan panen jagung (lanjutan)

Gunakan data dan nilai \(\beta\) dari Soal 1.

Hitunglah intersep \(\alpha\).

*Tuliskan jawaban sebagai bilangan bulat.*

**Jawaban:** `_____`

---

## Soal 3 — Kios pulsa

Sebuah kios pulsa mencatat tiga hari penjualan:

| Jumlah spanduk \(x\) | Transaksi \(y\) |
|---:|---:|
| 1 | 20 |
| 3 | 27 |
| 5 | 43 |

Dalam tabel suara, setiap titik menyumbang hasil kali \((x_i-\bar x)(y_i-\bar y)\).

Titik manakah yang menyumbang hasil kali **tepat nol**, sehingga sama sekali tidak ikut menentukan kemiringan garis?

- **A.** Titik \((1,20)\)
- **B.** Titik \((3,27)\)
- **C.** Titik \((5,43)\)
- **D.** Tidak ada; ketiga titik menyumbang hasil kali bukan nol.

**Jawaban:** `_____`

---

## Soal 4 — Batik tulis

Seorang pembatik mencatat waktu pengerjaan tiga helai kain:

| Jumlah motif \(x\) | Waktu \(y\) (jam) |
|---:|---:|
| 1 | 4 |
| 2 | 9 |
| 3 | 11 |

Dua garis kandidat diajukan:

\[
\text{Garis A}: \hat y = 1 + 3.5x,
\qquad
\text{Garis B}: \hat y = 2 + 3x.
\]

Hitunglah MSE dari garis yang **lebih baik** di antara keduanya.

*Tuliskan jawaban dalam bentuk desimal dengan 1 angka di belakang koma.*

**Jawaban:** `_____`

---

## Soal 5 — Motor bekas

Sebuah showroom mencatat harga jual tiga motor bekas dengan tipe yang sama:

| Usia \(x\) (tahun) | Harga \(y\) (juta rupiah) |
|---:|---:|
| 1 | 16 |
| 2 | 11 |
| 3 | 9 |

Hitunglah nilai \(\beta\) (kemiringan) yang menghasilkan MSE terkecil.

*Tuliskan jawaban dalam bentuk desimal dengan 1 angka di belakang koma. Sertakan tanda minus jika ada.*

**Jawaban:** `_____`

---

## Soal 6 — Takaran gula kopi

Sebuah kedai kopi ingin memodelkan skor rasa berdasarkan takaran gula. Ia mencatat lima gelas:

| Takaran gula \(x\) (sendok) | Skor rasa \(y\) |
|---:|---:|
| 2 | 7 |
| 2 | 9 |
| 2 | 6 |
| 2 | 8 |
| 2 | 10 |

Apa yang terjadi ketika rumus kuadrat terkecil diterapkan pada data ini?

- **A.** \(\beta = 0\), karena semua takaran gula bernilai sama.
- **B.** \(\beta = 8\), yaitu rata-rata skor rasa.
- **C.** \(\beta\) tidak dapat dihitung, karena penyebut \(\sum(x_i-\bar x)^2\) bernilai nol.
- **D.** \(\beta = 4\), yaitu rata-rata skor dibagi takaran gula.

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Jawaban: 2.75**

\[
\bar x = \frac{2+4+6}{3} = 4,
\qquad
\bar y = \frac{10+14+21}{3} = 15.
\]

| \(x_i\) | \(y_i\) | \(x_i-\bar x\) | \(y_i-\bar y\) | Hasil kali | \((x_i-\bar x)^2\) |
|---:|---:|---:|---:|---:|---:|
| 2 | 10 | \(-2\) | \(-5\) | \(+10\) | 4 |
| 4 | 14 | \(0\) | \(-1\) | \(0\) | 0 |
| 6 | 21 | \(+2\) | \(+6\) | \(+12\) | 4 |
| **Jumlah** | | | | **22** | **8** |

\[
\beta = \frac{22}{8} = 2.75.
\]

## Soal 2

**Jawaban: 4**

\[
\alpha = \bar y - \beta\bar x = 15 - (2.75)(4) = 15 - 11 = 4.
\]

Garis terbaiknya adalah \(\hat y = 4 + 2.75x\).

## Soal 3

**Jawaban: B**

\[
\bar x = \frac{1+3+5}{3} = 3.
\]

Titik \((3,27)\) memiliki \(x_i-\bar x = 3-3 = 0\), sehingga hasil kalinya \(0 \times (27-30) = 0\).

Titik itu duduk tepat pada garis vertikal \(x=\bar x\), jadi ia tidak punya pendapat mengenai **kemiringan** garis. Perhatikan bahwa titik tersebut tetap ikut menentukan \(\bar y\), jadi ia bukan tidak berguna — ia hanya tidak ikut memilih arah tilt.

## Soal 4

**Jawaban: 0.5**

\[
\text{Garis A}: \quad \hat y = 4.5,\; 8,\; 11.5
\quad\Rightarrow\quad r = -0.5,\; +1,\; -0.5
\]

\[
\operatorname{MSE}_A = \frac{0.25 + 1 + 0.25}{3} = \frac{1.5}{3} = 0.5.
\]

\[
\text{Garis B}: \quad \hat y = 5,\; 8,\; 11
\quad\Rightarrow\quad r = -1,\; +1,\; 0
\]

\[
\operatorname{MSE}_B = \frac{1 + 1 + 0}{3} = \frac{2}{3} \approx 0.667.
\]

Garis A lebih baik, dengan MSE **0.5**.

Bukan kebetulan: Garis A **adalah** garis kuadrat terkecil untuk data ini.

\[
\bar x = 2,\quad \bar y = 8,\quad
\beta = \frac{(-1)(-4) + (0)(1) + (1)(3)}{1+0+1} = \frac{7}{2} = 3.5,
\]

\[
\alpha = 8 - (3.5)(2) = 1.
\]

Tidak ada garis lurus lain yang MSE-nya di bawah 0.5 pada data ini.

## Soal 5

**Jawaban: -3.5**

\[
\bar x = 2, \qquad \bar y = \frac{16+11+9}{3} = 12.
\]

| \(x_i\) | \(y_i\) | \(x_i-\bar x\) | \(y_i-\bar y\) | Hasil kali | \((x_i-\bar x)^2\) |
|---:|---:|---:|---:|---:|---:|
| 1 | 16 | \(-1\) | \(+4\) | \(-4\) | 1 |
| 2 | 11 | \(0\) | \(-1\) | \(0\) | 0 |
| 3 | 9 | \(+1\) | \(-3\) | \(-3\) | 1 |
| **Jumlah** | | | | **\(-7\)** | **2** |

\[
\beta = \frac{-7}{2} = -3.5.
\]

Jumlah suara negatif, jadi garisnya **turun** — masuk akal, karena motor makin tua makin murah. Satuan \(\beta\) di sini adalah juta rupiah per tahun.

(Intersepnya \(\alpha = 12 - (-3.5)(2) = 19\) juta, yaitu taksiran harga motor berusia nol tahun.)

## Soal 6

**Jawaban: C**

\[
\bar x = 2, \qquad x_i - \bar x = 0 \text{ untuk kelima gelas},
\]

\[
\sum (x_i-\bar x)^2 = 0.
\]

Penyebutnya nol, sehingga \(\beta\) tidak terdefinisi. Pembagian dengan nol tidak menghasilkan 0 — ia tidak menghasilkan apa pun.

Secara makna: seluruh data hanya memakai takaran gula 2 sendok. Data ini **tidak memuat sebaran mendatar sama sekali**, jadi tidak ada bukti apa pun tentang apa yang terjadi bila takaran gula diubah. Rumusnya menolak menjawab, dan penolakan itu benar.

---

# Catatan pengajar

| Soal | Bentuk baru | Jebakan khas |
|---|---|---|
| 1 | tabel suara penuh | memakai \(\sum x_iy_i\) tanpa mengurangi rata-rata |
| 2 | \(\alpha\) dari \(\beta\) | memakai \(\bar x - \beta\bar y\) (tertukar) |
| 3 | titik dengan \(dx=0\) | memilih D — tidak sadar \(\bar x\) jatuh tepat di sebuah titik data |
| 4 | membandingkan dua garis | menghitung MSE satu garis lalu berhenti |
| 5 | kemiringan negatif | menghilangkan tanda minus, menjawab 3.5 |
| 6 | penyebut nol | memilih A — mengira pembagian dengan nol menghasilkan 0 |

Soal 1 dan 2 sengaja berpasangan agar siswa merasakan bahwa \(\alpha\) **selalu** menyusul \(\beta\), tidak pernah dicari sendiri.

Soal 4 layak dibahas lisan. Setelah siswa menemukan A lebih baik, tanyakan: *"Adakah garis yang lebih baik dari A?"* Jawabannya tidak ada — dan itulah arti "kuadrat terkecil". Ini menyiapkan Latihan 03, tempat pembulatan justru membuat garis "lebih baik" secara MSE namun tetap salah sebagai jawaban.

Soal 6 memakai cerita yang berbeda dari soal serupa di bank soal utama, tetapi menguji tepi kasus yang sama. Jika siswa menjawab A, tanyakan: *"Kalau \(\beta=0\), apa prediksinya untuk 3 sendok gula? Dari mana kita tahu?"*
