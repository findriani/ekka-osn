# Probabilitas 01

## Petunjuk jawaban

Tuliskan jawaban sebagai **bilangan bulat tanpa tanda persen**. Jika hasilnya berupa persen desimal, **bulatkan ke bawah**. Contoh: \(64.71\%\) ditulis `64`.

---

## Rumus cepat

\[
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
\]

\[
P(H_i\mid E)=\frac{P(E\mid H_i)P(H_i)}{\sum_j P(E\mid H_j)P(H_j)}.
\]

Untuk memilih kelas Naive Bayes, bandingkan \(P(C)\prod_i P(f_i\mid C)\) dan ambil yang terbesar.

---

## Soal 1 — Pembelian suvenir museum

Pengelola sebuah museum ingin memperkirakan jumlah suvenir yang perlu disiapkan. Pola kunjungan dan pembelian suvenir berbeda antara hari kerja dan akhir pekan.

Diketahui bahwa:

- 70% pengunjung museum datang pada hari kerja;
- 30% pengunjung museum datang pada akhir pekan;
- 20% pengunjung hari kerja membeli suvenir; dan
- 50% pengunjung akhir pekan membeli suvenir.

Berapa probabilitas seorang pengunjung yang dipilih secara acak membeli suvenir?

**Jawaban:** `_____`

---

## Soal 2 — Transportasi siswa

Sebuah sekolah sedang mengevaluasi hubungan antara moda transportasi siswa dan waktu kedatangan mereka pada pagi hari.

Sebanyak 120 siswa datang ke sekolah:

- 50 siswa menggunakan bus;
- 70 siswa menggunakan transportasi lain;
- 35 pengguna bus tiba sebelum pukul 07.00; dan
- 28 pengguna transportasi lain tiba sebelum pukul 07.00.

Dipilih secara acak seorang siswa yang diketahui tiba sebelum pukul 07.00. Berapa probabilitas siswa tersebut menggunakan bus?

**Jawaban:** `_____`

---

## Soal 3 — Pemeriksaan produk

Tim pengendalian mutu menemukan sebuah barang cacat dan ingin menelusuri jalur produksi yang paling mungkin menghasilkan barang tersebut.

Sebuah pabrik menggunakan dua jalur produksi:

- Jalur A memproduksi 60% barang, dengan tingkat cacat 2%; dan
- Jalur B memproduksi 40% barang, dengan tingkat cacat 5%.

Sebuah barang dipilih dan ternyata cacat. Berapa probabilitas barang tersebut berasal dari Jalur B?

**Jawaban:** `_____`

---

## Soal 4 — Tes antigen influenza

Sebuah puskesmas menggunakan tes antigen influenza sebagai penyaringan awal, tetapi tes tersebut tidak selalu memberikan hasil yang benar. Angka-angka berikut merupakan data hipotetis untuk latihan.

- 4% orang dalam populasi sedang terkena influenza;
- jika seseorang terkena influenza, tes memberikan hasil positif dengan probabilitas 90%; dan
- jika seseorang tidak terkena influenza, tes memberikan hasil negatif dengan probabilitas 95%.

Seseorang memperoleh hasil tes positif. Berapa probabilitas orang tersebut benar-benar terkena influenza?

**Jawaban:** `_____`

---

## Soal 5 — Klasifikasi pesan

Sebuah kantor menerima banyak pesan setiap hari dan menggunakan sistem otomatis untuk membantu menentukan pesan yang perlu segera dibaca. 

Sebuah sistem Naive Bayes mengklasifikasikan pesan menjadi `URGENT` atau `NORMAL`.

\[
P(\text{URGENT})=0.3,\qquad P(\text{NORMAL})=0.7.
\]

Probabilitas fitur diberikan berikut ini.

| Fitur | URGENT | NORMAL |
|---|---:|---:|
| Memuat kata “deadline” | 0.8 | 0.2 |
| Memiliki lampiran | 0.5 | 0.1 |

Sistem menganggap kedua fitur saling independen jika kelasnya diketahui.

Sebuah pesan memuat kata “deadline” dan memiliki lampiran. Berapa probabilitas pesan tersebut termasuk kelas `URGENT` menurut model?

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Jawaban: 29**

\[
0.7(0.2)+0.3(0.5)=0.29.
\]

## Soal 2

**Jawaban: 55**

\[
\frac{35}{35+28}=\frac{35}{63}\approx55.56\%.
\]

## Soal 3

**Jawaban: 62**

\[
\frac{0.4(0.05)}{0.6(0.02)+0.4(0.05)}=0.625.
\]

## Soal 4

**Jawaban: 42**

\[
\frac{0.04(0.90)}{0.04(0.90)+0.96(0.05)}
\approx42.86\%.
\]

## Soal 5

**Jawaban: 89**

\[
S_U=0.3(0.8)(0.5)=0.12,
\]

\[
S_N=0.7(0.2)(0.1)=0.014,
\]

\[
\frac{0.12}{0.12+0.014}\approx89.55\%.
\]
