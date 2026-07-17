# Probabilitas 04 — Naive Bayes

Fokus set ini: Naive Bayes dari nol — menghitung sendiri probabilitas dari tabel data latih, menggabungkan beberapa fitur, menangani frekuensi nol, tiga kelas, dan model komposisi untuk barisan.

## Petunjuk jawaban

Setiap soal menyebutkan **format jawabannya sendiri**. Bacalah format itu sebelum menulis jawaban — jawaban yang benar tetapi salah format dianggap salah.

Pada semua soal, Naive Bayes mengasumsikan setiap fitur **saling independen jika kelasnya diketahui**, sehingga

\[
P(\text{fitur}_1,\text{fitur}_2,\ldots\mid C)=P(\text{fitur}_1\mid C)\times P(\text{fitur}_2\mid C)\times\cdots
\]

---

## Rumus cepat

\[
\operatorname{skor}(C)=P(C)\prod_i P(f_i\mid C).
\]

\[
P(f\mid C)=\frac{\text{banyak data di kelas }C\text{ yang memiliki }f}{\text{banyak data di kelas }C}.
\]

Pilih kelas dengan skor terbesar. Tanpa smoothing, satu frekuensi nol membuat skor kelas itu nol.

---

## Soal 1 — Kedai kopi

Sebuah kedai kopi mencatat 10 pesanan terakhir beserta kondisi saat pesanan dibuat:

| No | Cuaca | Waktu | Pesanan |
|---:|---|---|---|
| 1 | cerah | pagi | dingin |
| 2 | cerah | sore | dingin |
| 3 | cerah | sore | dingin |
| 4 | hujan | pagi | panas |
| 5 | hujan | pagi | panas |
| 6 | hujan | sore | panas |
| 7 | cerah | pagi | panas |
| 8 | hujan | sore | dingin |
| 9 | hujan | pagi | panas |
| 10 | cerah | sore | dingin |

Seorang pelanggan datang saat **cuaca hujan** pada **waktu pagi**. Menurut Naive Bayes, pesanan apakah yang paling mungkin?

*Format Pengisian HANYA `panas` atau `dingin`.*

**Jawaban:** `_____`

---

## Soal 2 — Ulasan produk

Sebuah sistem menilai apakah sebuah ulasan produk `ASLI` atau `PALSU`.

\[
P(\text{ASLI})=0.8,\qquad P(\text{PALSU})=0.2.
\]

Probabilitas fitur diberikan berikut ini.

| Fitur | ASLI | PALSU |
|---|---:|---:|
| Memuat kata “terbaik” | 0.3 | 0.7 |
| Panjang kurang dari 20 kata | 0.2 | 0.6 |
| Diberi 5 bintang | 0.4 | 0.9 |

Sebuah ulasan memuat kata “terbaik”, panjangnya kurang dari 20 kata, dan diberi 5 bintang. Berapa probabilitas ulasan itu termasuk kelas `PALSU` menurut model?

*Tuliskan jawaban dalam bentuk bilangan bulat tanpa tanda persen, dibulatkan ke bawah.*

**Jawaban:** `_____`

---

## Soal 3 — Frekuensi nol

Sebuah sistem mengklasifikasikan pesan menjadi `SPAM` atau `BUKAN`. Dari data latih:

- kelas `SPAM`: 5 pesan, dengan total 40 kata;
- kelas `BUKAN`: 15 pesan, dengan total 60 kata.

Kata “hadiah” muncul 8 kali pada pesan `SPAM` dan **0 kali** pada pesan `BUKAN`. Ukuran kosakata adalah \(V=20\).

Dengan Laplace smoothing \((\alpha=1)\), yaitu

\[
P(w\mid C)=\frac{\text{jumlah kemunculan }w\text{ di }C+\alpha}{\text{total kata di }C+\alpha V},
\]

hitung \(P(\text{“hadiah”}\mid\texttt{BUKAN})\).

*Tuliskan jawaban dalam bentuk desimal dengan 4 angka di belakang koma.*

**Jawaban:** `_____`

---

## Soal 4 — Diagnosis daun padi

Sebuah aplikasi mendiagnosis kondisi daun padi menjadi `blas`, `hawar`, atau `sehat`.

\[
P(\text{blas})=0.2,\qquad
P(\text{hawar})=0.3,\qquad
P(\text{sehat})=0.5.
\]

| Fitur | blas | hawar | sehat |
|---|---:|---:|---:|
| Ada bercak coklat | 0.8 | 0.6 | 0.05 |
| Daun menguning | 0.3 | 0.7 | 0.1 |

Sehelai daun memiliki bercak coklat **dan** menguning. Kelas apakah yang dipilih model?

*Format Pengisian HANYA `blas`, `hawar`, atau `sehat`.*

**Jawaban:** `_____`

---

## Soal 5 — Komposisi basa DNA

Barisan DNA tersusun oleh empat basa nitrogen: A, T, G, dan C. Diketahui data latih dari dua spesies:

| Spesies | A | T | G | C | Total basa |
|---|---:|---:|---:|---:|---:|
| Kucing | 16 | 14 | 5 | 5 | 40 |
| Ikan | 5 | 5 | 15 | 15 | 40 |

Kedua spesies memiliki prior yang sama, yaitu \(P(\text{Kucing})=P(\text{Ikan})=0.5\).

Model komposisi basa memperlakukan setiap basa dalam untai sebagai fitur yang independen jika spesiesnya diketahui:

\[
P(\text{untai}\mid S)=\prod_{b\,\in\,\text{untai}}P(b\mid S).
\]

Diberikan untai `GC`. Berapa probabilitas untai ini berasal dari spesies Ikan?

*Tuliskan jawaban dalam bentuk bilangan bulat tanpa tanda persen, dibulatkan ke bawah.*

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Jawaban: panas**

Kelas `panas` ada pada baris 4, 5, 6, 7, 9 (5 pesanan). Kelas `dingin` ada pada baris 1, 2, 3, 8, 10 (5 pesanan).

\[
P(\texttt{panas})=\tfrac{5}{10}=0.5,\qquad
P(\texttt{dingin})=\tfrac{5}{10}=0.5.
\]

Hitung probabilitas fitur dengan mencacah **di dalam tiap kelas**:

\[
P(\text{hujan}\mid\texttt{panas})=\tfrac{4}{5}=0.8,\qquad
P(\text{pagi}\mid\texttt{panas})=\tfrac{4}{5}=0.8,
\]

\[
P(\text{hujan}\mid\texttt{dingin})=\tfrac{1}{5}=0.2,\qquad
P(\text{pagi}\mid\texttt{dingin})=\tfrac{1}{5}=0.2.
\]

\[
S_{\texttt{panas}}=0.5(0.8)(0.8)=0.32,
\qquad
S_{\texttt{dingin}}=0.5(0.2)(0.2)=0.02.
\]

## Soal 2

**Jawaban: 79**

\[
S_{\text{ASLI}}=0.8(0.3)(0.2)(0.4)=0.0192
\]

\[
S_{\text{PALSU}}=0.2(0.7)(0.6)(0.9)=0.0756
\]

\[
P(\text{PALSU}\mid\text{bukti})=\frac{0.0756}{0.0192+0.0756}=\frac{0.0756}{0.0948}\approx79.75\%.
\]

Prior sangat berpihak pada `ASLI` (0.8 lawan 0.2), tetapi tiga fitur sekaligus membalikkannya.

## Soal 3

**Jawaban: 0.0125**

\[
P(\text{“hadiah”}\mid\texttt{BUKAN})=\frac{0+1}{60+1(20)}=\frac{1}{80}=0.0125.
\]

Tanpa smoothing hasilnya \(0/60=0\), sehingga skor kelas `BUKAN` menjadi **nol mutlak** — berapa pun bukti lain yang mendukung, satu kata yang belum pernah terlihat akan menghapus seluruh kelas. Inilah alasan smoothing diperlukan.

## Soal 4

**Jawaban: hawar**

\[
S_{\text{blas}}=0.2(0.8)(0.3)=0.048
\]

\[
S_{\text{hawar}}=0.3(0.6)(0.7)=0.126
\]

\[
S_{\text{sehat}}=0.5(0.05)(0.1)=0.0025
\]

Kelas `sehat` memiliki prior terbesar (0.5), tetapi kedua bukti hampir mustahil terjadi pada daun sehat, sehingga skornya runtuh.

## Soal 5

**Jawaban: 90**

\[
P(G\mid\text{Kucing})=\tfrac{5}{40}=0.125,\qquad
P(C\mid\text{Kucing})=\tfrac{5}{40}=0.125,
\]

\[
P(G\mid\text{Ikan})=\tfrac{15}{40}=0.375,\qquad
P(C\mid\text{Ikan})=\tfrac{15}{40}=0.375.
\]

\[
S_{\text{Kucing}}=0.5(0.125)(0.125)=0.0078125
\]

\[
S_{\text{Ikan}}=0.5(0.375)(0.375)=0.0703125
\]

\[
P(\text{Ikan}\mid\texttt{GC})=\frac{0.0703125}{0.0078125+0.0703125}=\frac{0.0703125}{0.078125}=0.9.
\]

---

# Catatan pengajar

Tangga di dalam set ini:

| Soal | Yang ditambahkan | Jebakan khas |
|---|---|---|
| 1 | menghitung sendiri \(P(\text{fitur}\mid C)\) dari tabel data latih | mencacah fitur di seluruh 10 baris, bukan di dalam tiap kelas |
| 2 | tiga fitur sekaligus, dinormalisasi | berhenti di skor mentah, tidak dibagi jumlah kedua skor |
| 3 | frekuensi nol dan Laplace smoothing | memakai \(V=4\) atau lupa \(\alpha V\) pada penyebut |
| 4 | tiga kelas | memilih `sehat` karena priornya terbesar |
| 5 | model komposisi untuk barisan | menganggap urutan `GC` berbeda dari `CG` |

Catatan penting per soal:

- **Soal 1 adalah inti Naive Bayes yang sesungguhnya.** Pada Isian 01/02 dan pada soal-soal lain di set ini, tabel probabilitas sudah diberikan. Di sini siswa harus membangunnya sendiri dengan mencacah — persis langkah 2 dan 3 pada algoritma di slide Data Mining. Ini keterampilan yang paling sering hilang.
- **Soal 3 menutup lubang** yang ada pada slide Data Mining (slide 12 memuat \(P(\text{overcast}\mid\text{no})=0/5=0\) tanpa penjelasan) dan menyiapkan soal C1 pada `meeting_01_exercise_bank.md`, yang mensyaratkan smoothing dengan \(\alpha=1\) dan \(V=4\).
- **Soal 5 adalah jembatan ke Soal 26–40 EKKA 2025 (195 poin).** Model komposisi basa mengabaikan urutan — hanya mencacah. Sadari bahwa ini juga keterbatasannya: `GC` dan `CG` mendapat skor identik, padahal soal EKKA 2025 membedakan Bebek (berselang-seling) dari Ikan (berulang) justru lewat **urutan**. Diskusikan ini setelah siswa mengerjakan: komposisi saja cukup untuk memisahkan Kucing dari Bebek/Ikan, tetapi tidak cukup untuk memisahkan Bebek dari Ikan.
