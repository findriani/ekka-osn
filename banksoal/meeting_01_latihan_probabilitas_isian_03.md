# Probabilitas 03

Fokus set ini: struktur soal probabilitas yang **belum** muncul di Isian 01 dan 02 — membaca tabel silang, komplemen, penarikan berurutan, mencari nilai yang belum diketahui, dan tiga hipotesis sekaligus.

## Petunjuk jawaban

Setiap soal menyebutkan **format jawabannya sendiri**. Bacalah format itu sebelum menulis jawaban — jawaban yang benar tetapi salah format dianggap salah.

---

## Rumus cepat

\[
P(A^c)=1-P(A),\qquad P(A\cap B)=P(A)P(B\mid A).
\]

\[
P(E)=\sum_i P(E\mid H_i)P(H_i).
\]

Gunakan Bayes bila yang dicari adalah penyebab \(H_i\) setelah bukti \(E\) diketahui.

---

## Soal 1 — Pesanan toko online

Sebuah toko online mencatat 500 pesanan pada bulan ini:

| Kategori | Dibayar Lunas | COD | Jumlah |
|---|---:|---:|---:|
| Elektronik | 120 | 80 | 200 |
| Pakaian | 90 | 115 | 205 |
| Buku | 70 | 25 | 95 |
| **Jumlah** | **280** | **220** | **500** |

Sebuah pesanan dipilih secara acak dan diketahui menggunakan COD. Berapa probabilitas pesanan itu berasal dari kategori Pakaian?

*Tuliskan jawaban dalam bentuk bilangan bulat tanpa tanda persen, dibulatkan ke bawah.*

**Jawaban:** `_____`

---

## Soal 2 — Kamera CCTV

Sebuah sekolah memasang 3 kamera CCTV yang bekerja secara independen satu sama lain. Setiap kamera memiliki probabilitas 0.15 mengalami gangguan pada suatu hari.

Berapa probabilitas bahwa pada hari itu **minimal ada satu** kamera yang mengalami gangguan?

*Tuliskan jawaban dalam bentuk desimal dengan 3 angka di belakang koma.*

**Jawaban:** `_____`

---

## Soal 3 — Pemilihan pengurus

Sebuah tim beranggotakan 7 siswa kelas XI dan 5 siswa kelas XII. Dua siswa dipilih secara acak berturut-turut sebagai ketua dan wakil ketua. Seorang siswa tidak boleh merangkap kedua jabatan.

Berapa probabilitas kedua siswa terpilih berasal dari kelas XI?

*Tuliskan jawaban dalam bentuk desimal dengan 3 angka di belakang koma.*

**Jawaban:** `_____`

---

## Soal 4 — Dua mesin pabrik

Sebuah pabrik menggunakan dua mesin.

- Mesin lama memproduksi 40% barang, dengan tingkat cacat 6%.
- Mesin baru memproduksi sisanya, dengan tingkat cacat \(p\) yang belum diketahui.

Secara keseluruhan, 4.2% barang yang diproduksi pabrik ini cacat.

Berapa nilai \(p\)?

*Tuliskan jawaban dalam bentuk bilangan bulat tanpa tanda persen. Misalkan, jika \(p=7\%\) maka ditulis `7`.*

**Jawaban:** `_____`

---

## Soal 5 — Prakiraan cuaca

Sebuah aplikasi cuaca memperkirakan kondisi hari ini. Berdasarkan data historis bulan ini:

\[
P(\text{cerah})=0.50,\qquad
P(\text{berawan})=0.30,\qquad
P(\text{hujan})=0.20.
\]

Probabilitas langit terlihat mendung tebal pada pagi hari untuk tiap kondisi:

\[
P(\text{mendung tebal}\mid\text{cerah})=0.05,
\]

\[
P(\text{mendung tebal}\mid\text{berawan})=0.40,
\]

\[
P(\text{mendung tebal}\mid\text{hujan})=0.80.
\]

Pagi ini langit terlihat mendung tebal. Berapa probabilitas hari ini akan hujan?

*Tuliskan jawaban dalam bentuk bilangan bulat tanpa tanda persen, dibulatkan ke bawah.*

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Jawaban: 52**

Penyebutnya adalah **kolom** COD (220), bukan total pesanan (500) dan bukan baris Pakaian (205).

\[
P(\text{Pakaian}\mid\text{COD})=\frac{115}{220}\approx52.27\%.
\]

## Soal 2

**Jawaban: 0.386**

Hitung lewat komplemen — jauh lebih pendek daripada menjumlahkan kasus "tepat satu", "tepat dua", dan "tepat tiga".

\[
P(\text{tidak ada gangguan})=(0.85)^3=0.614125.
\]

\[
P(\text{minimal satu})=1-0.614125=0.385875.
\]

## Soal 3

**Jawaban: 0.318**

Setelah siswa pertama terpilih, jumlah anggota berkurang. Ini adalah probabilitas bersyarat berantai \(P(A\cap B)=P(A)\,P(B\mid A)\).

\[
\frac{7}{12}\times\frac{6}{11}=\frac{42}{132}\approx0.31818.
\]

## Soal 4

**Jawaban: 3**

Bangun persamaan probabilitas total, lalu selesaikan untuk \(p\).

\[
0.40(0.06)+0.60p=0.042
\]

\[
0.024+0.6p=0.042
\]

\[
p=\frac{0.018}{0.6}=0.03=3\%.
\]

## Soal 5

**Jawaban: 52**

\[
\text{cerah}:\;0.50(0.05)=0.025
\]

\[
\text{berawan}:\;0.30(0.40)=0.120
\]

\[
\text{hujan}:\;0.20(0.80)=0.160
\]

\[
P(\text{mendung tebal})=0.025+0.120+0.160=0.305
\]

\[
P(\text{hujan}\mid\text{mendung tebal})=\frac{0.160}{0.305}\approx52.46\%.
\]

Perhatikan bahwa cerah adalah kondisi paling umum (50%), tetapi setelah melihat langit mendung tebal, probabilitasnya jatuh menjadi \(0.025/0.305\approx8\%\).

---

# Catatan pengajar

Set ini sengaja **tidak** mengulang struktur Isian 01/02. Tiap soal memperkenalkan satu bentuk baru:

| Soal | Struktur baru | Jebakan khas |
|---|---|---|
| 1 | tabel silang 3 kategori | memilih 500 atau 205 sebagai penyebut, bukan kolom COD (220) |
| 2 | komplemen + kejadian independen | menjumlahkan 0.15 tiga kali menjadi 0.45 |
| 3 | bersyarat berantai, tanpa pengembalian | memakai \(7/12\) dua kali, seolah ada pengembalian |
| 4 | probabilitas total dibalik — mencari yang belum diketahui | lupa bahwa mesin baru memproduksi 60%, bukan 40% |
| 5 | tiga hipotesis, normalisasi penuh | menjumlahkan penyebut hanya dari dua kelas |

Soal 5 adalah versi tiga kelas dari argmax yang sudah dilatih pada Isian 02 no. 3. Bedanya: di sini penyebut **harus** dihitung karena yang diminta adalah nilai probabilitasnya, bukan sekadar kelas pemenangnya. Ini jembatan langsung ke Naive Bayes tiga kelas pada Isian 04.
