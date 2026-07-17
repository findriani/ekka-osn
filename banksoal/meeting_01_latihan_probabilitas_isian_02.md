# Probabilitas 02

## Petunjuk jawaban

Setiap soal menyebutkan **format jawabannya sendiri**. Bacalah format itu sebelum menulis jawaban — jawaban yang benar tetapi salah format dianggap salah.

---

## Rumus cepat

\[
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
\]

\[
P(A\mid B)=\frac{P(B\mid A)P(A)}{P(B)}.
\]

Untuk memilih kelas, penyebut yang sama boleh diabaikan: bandingkan \(P(\text{bukti}\mid C)P(C)\).

---

## Soal 1 — Pengunjung perpustakaan

Di sebuah perpustakaan tercatat 120 pengunjung hari ini. Sebanyak 80 pengunjung meminjam buku, 50 pengunjung mengakses komputer, dan 30 pengunjung melakukan keduanya.

Jika seorang pengunjung diketahui mengakses komputer, berapa probabilitas ia juga meminjam buku?

*Tuliskan jawaban dalam bentuk desimal dengan 1 angka di belakang koma.*

**Jawaban:** `_____`

---

## Soal 2 — Alergi dan bersin

Di suatu daerah, 15% penduduk memiliki alergi. Sebanyak 40% penduduk yang memiliki alergi mengalami bersin-bersin di pagi hari. Secara keseluruhan, 12% penduduk mengalami bersin-bersin di pagi hari.

Jika Rina mengalami bersin-bersin di pagi hari, berapa probabilitas Rina memiliki alergi?

*Tuliskan jawaban dalam bentuk bilangan bulat tanpa tanda persen. Misalkan, \(64.71\%\) ditulis `64`.*

**Jawaban:** `_____`

---

## Soal 3 — Motor mogok

Sebuah bengkel sering menerima motor yang mogok. Dua penyebab paling umum adalah aki soak dan busi kotor.

\[
P(\text{aki soak})=0.30,\qquad P(\text{busi kotor})=0.70.
\]

\[
P(\text{mesin sulit distarter}\mid\text{aki soak})=0.90,
\]

\[
P(\text{mesin sulit distarter}\mid\text{busi kotor})=0.35.
\]

Sebuah motor datang dengan keluhan mesin sulit distarter. Penyebab manakah yang lebih mungkin?

*Format Pengisian HANYA `aki` atau `busi`.*

**Jawaban:** `_____`

---

## Soal 4 — Telur retak

Sebuah toko menjual telur dari dua peternakan. Sebanyak 70% telur berasal dari Peternakan A dan 30% dari Peternakan B. Dari telur Peternakan A, 4% retak. Dari telur Peternakan B, 10% retak.

Seorang pembeli mengambil satu telur secara acak dan ternyata telur itu retak. Berapa probabilitas telur itu berasal dari Peternakan B?

*Tuliskan jawaban dalam bentuk desimal dengan 3 angka di belakang koma.*

**Jawaban:** `_____`

---

## Soal 5 — Pengenalan wajah di stadion

Sebuah sistem pengenalan wajah dipasang di pintu masuk stadion untuk mendeteksi penonton yang masuk daftar hitam. Hanya 1% penonton yang benar-benar masuk daftar hitam. Sistem ini menandai dengan benar 95% penonton yang masuk daftar hitam, tetapi juga salah menandai 5% penonton biasa sebagai daftar hitam.

Jika sistem menandai seorang penonton sebagai daftar hitam, berapa probabilitas penonton itu benar-benar masuk daftar hitam?

*Tuliskan jawaban dalam bentuk bilangan bulat tanpa tanda persen, dibulatkan ke bawah.*

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Jawaban: 0.6**

Penyebutnya adalah pengunjung yang mengakses komputer (50), bukan total pengunjung (120) dan bukan peminjam buku (80).

\[
P(\text{pinjam}\mid\text{komputer})=\frac{30}{50}=0.6.
\]

## Soal 2

**Jawaban: 50**

\[
P(\text{alergi}\mid\text{bersin})
=\frac{0.40(0.15)}{0.12}
=\frac{0.06}{0.12}
=0.5.
\]

## Soal 3

**Jawaban: aki**

\[
\text{aki}:\;0.90(0.30)=0.270,
\qquad
\text{busi}:\;0.35(0.70)=0.245.
\]

Penyebut \(P(\text{sulit distarter})\) tidak perlu dihitung: nilainya sama untuk kedua penyebab, sehingga tidak mengubah urutan. Perhatikan bahwa busi kotor jauh lebih sering terjadi (0.70 lawan 0.30), tetapi tetap kalah.

## Soal 4

**Jawaban: 0.517**

\[
P(\text{retak})=0.70(0.04)+0.30(0.10)=0.028+0.030=0.058.
\]

\[
P(B\mid\text{retak})=\frac{0.030}{0.058}\approx0.51724.
\]

Peternakan B hanya memasok 30% telur, tetapi menyumbang lebih dari separuh telur retak.

## Soal 5

**Jawaban: 16**

\[
P(\text{ditandai})=0.01(0.95)+0.99(0.05)=0.0095+0.0495=0.0590.
\]

\[
P(\text{daftar hitam}\mid\text{ditandai})=\frac{0.0095}{0.0590}\approx16.10\%.
\]

Sistem yang terdengar akurat tetap menghasilkan banyak penandaan yang salah, karena kelas positifnya sangat jarang.

---

# Catatan pengajar

Tangga kesulitan di dalam set ini — tiap soal menambah tepat satu hal:

| Soal | Yang ditambahkan | Jebakan khas |
|---|---|---|
| 1 | tidak ada rumus — hanya mencacah | memakai 120 atau 80 sebagai penyebut, bukan 50 |
| 2 | inversi; \(P(\text{bukti})\) sudah diberikan | membalik arah persyaratan |
| 3 | argmax — penyebut tidak diperlukan | prior yang lebih besar (busi, 70%) justru kalah |
| 4 | \(P(\text{bukti})\) harus dibangun sendiri | pemasok minoritas menyumbang mayoritas cacat |
| 5 | idem, dengan base rate yang ekstrem | "95% akurat" tetapi hasil penandaan hanya 16% benar |

Dua soal menanam materi lanjutan:

- **Soal 3 adalah Naive Bayes.** Bandingkan \(P(\text{bukti}\mid\text{kelas})P(\text{kelas})\), ambil yang terbesar, abaikan penyebut — persis `argmax` MAP. Soal ini cerminan dari Latihan KCB IX no. 2 (pneumonia lawan flu): di sana prior yang menang, di sini likelihood yang menang. Mengerjakan keduanya menunjukkan bahwa tidak ada aturan praktis — hanya perkalian.
- **Soal 5 adalah precision yang menyamar.** \(0.0095\) berperan sebagai TP dan \(0.0495\) sebagai FP, sehingga \(0.0095/(0.0095+0.0495)\) tepat sama dengan \(TP/(TP+FP)\). Ketika rumus precision muncul di Pertemuan 1, siswa sudah pernah menghitungnya tanpa tahu namanya.
