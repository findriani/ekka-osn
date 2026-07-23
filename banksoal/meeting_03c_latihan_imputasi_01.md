# Pembersihan Data 01

Sebuah survei sekolah mengumpulkan data siswa, tetapi beberapa sel **kosong** dan satu kolom berisi **kategori**, bukan angka. Sebelum data bisa dipakai model, sel kosong perlu diisi dengan aturan yang jujur dan kategori perlu diubah menjadi angka. Set ini melatih **imputasi** (pengisian nilai hilang) dan penyusunan vektor ciri.

## Petunjuk jawaban

Jawaban dapat berupa **angka** atau **nama kategori**.

- Untuk angka, tuliskan nilainya **tanpa pembulatan**, memakai titik desimal bila perlu, misalnya `7` atau `4`.
- Untuk nama kategori, tuliskan persis seperti pada tabel, misalnya `jalan`.

## Rumus cepat

Rata-rata (mean) dari \(n\) angka:

\[
\text{mean}=\frac{\text{jumlah semua nilai}}{n}.
\]

**Median**: urutkan nilainya, lalu ambil nilai tengah.

Aturan pengisian yang lazim:

| Jenis ciri | Aturan pengisian | Alasan |
|---|---|---|
| Angka | rata-rata, atau median | nilai yang khas; median tahan terhadap satu nilai ekstrem |
| Kategori | kategori paling sering (modus) | tetap kategori sah yang sudah dikenal |

**Ingat:** *kosong* bukan berarti *nol*. Mengisi sel kosong dengan 0 justru mengarang data.

---

## Data latih

Lima siswa terdata lengkap (data latih). Seorang siswa baru, **A6**, memiliki dua sel kosong.

| Siswa | Jam tidur | Transport | Jarak (km) |
|---|---:|---|---:|
| A1 | 6 | jalan | 1 |
| A2 | 7 | sepeda | 2 |
| A3 | 8 | bus | 2 |
| A4 | 8 | jalan | 3 |
| A5 | 6 | jalan | 12 |
| A6 | *(kosong)* | *(kosong)* | 4 |

Semua aturan pengisian dihitung dari data latih A1–A5.

---

## Soal 1 — Isi angka yang hilang dengan rata-rata

Jam tidur siswa **A6** kosong. Isi dengan **rata-rata** jam tidur data latih (A1–A5). Berapa nilai yang mengisi sel itu?

**Jawaban:** `_____`

---

## Soal 2 — Median untuk kolom yang punya nilai jauh

Kolom **jarak** memuat satu nilai yang jauh lebih besar dari yang lain (12 km). Untuk mengisi jarak yang hilang, aturan yang lebih aman adalah **median**. Berapa median jarak data latih (A1–A5)?

**Jawaban:** `_____`

---

## Soal 3 — Bandingkan dengan rata-rata

Berapa **rata-rata (mean)** jarak data latih (A1–A5)? Setelah menghitungnya, bandingkan dengan median dari Soal 2.

**Jawaban:** `_____`

---

## Soal 4 — Isi kategori yang hilang

Kolom **transport** siswa **A6** kosong. Isi dengan kategori yang **paling sering** muncul pada data latih (A1–A5). Kategori apa itu?

**Jawaban:** `_____`

---

## Soal 5 — Nilai isian lalu distandarkan

Jam tidur A6 sudah diisi dengan rata-rata latih (hasil Soal 1). Nilai isian itu kemudian **distandarkan** (z-score) memakai rata-rata latih dan simpangan baku latih yang bernilai positif.

Berapa z-score dari nilai isian tersebut?

**Jawaban:** `_____`

---

## Soal 6 — Lebar vektor ciri setelah one-hot

Setiap siswa akan diubah menjadi satu vektor angka. Kolom **transport** punya tiga kategori (`jalan`, `sepeda`, `bus`), sehingga di-**one-hot** menjadi beberapa kolom 0/1. Kolom **Siswa** (pengenal) dibuang.

Setiap siswa jadinya memakai: **jam tidur** (satu angka) + **transport** (one-hot) + **jarak** (satu angka).

Berapa banyak kolom angka pada vektor ciri akhir setiap siswa?

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Jawaban: 7**

Jam tidur latih: \(6, 7, 8, 8, 6\).

\[
\text{mean}=\frac{6+7+8+8+6}{5}=\frac{35}{5}=7.
\]

Sel kosong A6 diisi 7.

## Soal 2

**Jawaban: 2**

Jarak latih diurutkan: \(1, 2, 2, 3, 12\). Nilai tengah (ketiga dari lima) adalah **2**.

## Soal 3

**Jawaban: 4**

\[
\text{mean}=\frac{1+2+2+3+12}{5}=\frac{20}{5}=4.
\]

Perhatikan: rata-rata **4** lebih tinggi daripada median **2**. Satu nilai jauh (12 km) menarik rata-rata ke atas, padahal empat siswa lainnya berjarak 1–3 km. Untuk kolom seperti ini, median memberi nilai khas yang lebih jujur, itulah sebabnya median dipilih pada Soal 2.

## Soal 4

**Jawaban: jalan**

Hitung kemunculan tiap kategori transport pada A1–A5:

| Kategori | Jumlah |
|---|---:|
| jalan | 3 |
| sepeda | 1 |
| bus | 1 |

Yang paling sering adalah **jalan** (3 kali), maka sel kosong A6 diisi `jalan`.

## Soal 5

**Jawaban: 0**

Nilai isian sama persis dengan rata-rata latih (7). Maka pembilang z-score bernilai nol:

\[
z=\frac{7-7}{\sigma}=\frac{0}{\sigma}=0.
\]

Berapa pun simpangan bakunya (selama positif), hasilnya tetap 0. Ini akibat yang perlu disadari: mengisi sel kosong dengan **rata-rata** membuat nilai itu jatuh tepat di pusat (z-score 0). Cara ini menutup lubang, tetapi juga menambah satu titik "rata-rata palsu" yang bisa mengecilkan keragaman data.

## Soal 6

**Jawaban: 5**

Hitung kolomnya:

- jam tidur: 1 kolom angka;
- transport (one-hot 3 kategori): 3 kolom 0/1;
- jarak: 1 kolom angka.

\[
1+3+1=5.
\]

Kolom `Siswa` adalah pengenal (identifier) dan dibuang, jadi tidak dihitung. Perhatikan bahwa satu kolom kategori berubah menjadi **tiga** kolom, sehingga vektor ciri menjadi lebih lebar daripada tabel asalnya.

---

# Catatan pengajar

**Set ini menilai keputusan, bukan hanya hitungan.** Setiap soal punya aritmetika sepele; yang dilatih adalah memilih aturan yang tepat: rata-rata vs median (Soal 1–3), modus untuk kategori (Soal 4), dan menyadari efek samping mengisi dengan rata-rata (Soal 5).

**Soal 2 dan 3 adalah pasangan.** Data jaraknya sengaja memuat pencilan 12 km sehingga mean (4) dan median (2) berbeda jelas. Pertanyaan lanjutan: "kalau kamu harus menebak jarak seorang siswa biasa, angka mana yang lebih mewakili?" Jawaban yang dicari: median, karena tidak diseret oleh satu nilai ekstrem.

**Soal 5 adalah wawasan, bukan sekadar hitungan.** Banyak siswa terkejut bahwa jawabannya 0 tanpa perlu tahu simpangan bakunya. Justru itu intinya: nilai yang diisi dengan rata-rata selalu ber-z-score 0. Ini menghubungkan imputasi (Pertemuan 3 bagian awal) dengan standardisasi (bagian yang sama) dalam satu tarikan napas.

**Soal 6 menghitung akibat one-hot.** Poin yang perlu ditekankan: satu kolom kategori dengan tiga nilai menjadi tiga kolom, sehingga jumlah kolom **bertambah**, bukan tetap. Ini mempersiapkan siswa membaca lebar vektor ciri sebelum masuk ke model berbasis jarak.

**Kosong bukan nol.** Bila ada siswa yang refleks mengisi sel kosong dengan 0, kembalikan ke contoh jarak: mengisi jarak kosong dengan 0 km berarti mengaku "rumahnya di sekolah", padahal yang benar adalah "jaraknya belum tercatat".

**Semua jawaban bilangan bulat kecuali kategori.** 7, 2, 4, 0, 5 semuanya bulat dan berhenti; `jalan` ditulis persis huruf kecil seperti pada tabel. Tidak ada pembulatan yang perlu dilakukan di mana pun.
