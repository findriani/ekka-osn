# Evaluasi 01

Fokus set ini: memilih model berdasarkan kolom yang **tepat**, merata-ratakan skor lipatan, menghitung akibat satu angka yang salah catat, dan mengenali ekstrapolasi.

## Petunjuk jawaban

Setiap soal menyebutkan **format jawabannya sendiri**. Untuk soal pilihan ganda, pilih tombol jawaban yang benar.

---

## Rumus cepat

\[
\operatorname{MSE}_{CV}=\frac{\operatorname{MSE}_1+\cdots+\operatorname{MSE}_k}{k}.
\]

Pilih model dengan MSE **validasi** terkecil, bukan MSE data latih terkecil.

Overfitting sering tampak sebagai MSE latih kecil tetapi MSE validasi jauh lebih besar.

---

## Soal 1 — Debit Sungai Martapura

Tiga model dikembangkan untuk memprediksi debit air sungai. Skornya:

| Model | MSE data latih | MSE data validasi |
|---|---:|---:|
| P | 8 | 9 |
| Q | 2 | 21 |
| R | 11 | 12 |

Model mana yang seharusnya dipilih?

- **A.** Model P
- **B.** Model Q, karena MSE data latihnya jauh paling kecil.
- **C.** Model R, karena kedua skornya paling seimbang.
- **D.** Tidak dapat ditentukan tanpa melihat data uji.

**Jawaban:** `_____`

---

## Soal 2 — Debit Sungai Martapura (lanjutan)

Gunakan tabel yang sama dengan Soal 1.

Salah satu model menunjukkan pola khas **overfitting**: skor data latih sangat baik, tetapi skor validasinya paling buruk.

Berapa selisih antara MSE validasi dan MSE data latih untuk model tersebut?

*Tuliskan jawaban sebagai bilangan bulat.*

**Jawaban:** `_____`

---

## Soal 3 — Prediksi harga cabai

Sebuah tim memakai **validasi silang 5 lipatan** (5-fold cross-validation) untuk menilai modelnya. Setiap lipatan bergiliran menjadi data validasi, dan menghasilkan skor MSE berikut:

| Lipatan | 1 | 2 | 3 | 4 | 5 |
|---|---:|---:|---:|---:|---:|
| MSE | 12 | 9 | 15 | 10 | 14 |

Berapa skor validasi silang model ini?

*Tuliskan jawaban sebagai bilangan bulat.*

**Jawaban:** `_____`

---

## Soal 4 — Salah ketik di buku sadap karet

Seorang mandor kebun karet mencatat getah yang terkumpul dari empat blok:

| Pohon disadap \(x\) (puluhan) | Getah \(y\) (kg) |
|---:|---:|
| 1 | 8 |
| 2 | 11 |
| 3 | 14 |
| 4 | 41 |

Keempat blok sebenarnya mengikuti pola yang sangat rapi. Namun catatan blok keempat **salah diketik**: seharusnya 17, tertulis 41. Satu digit saja yang salah.

Hitunglah nilai \(\beta\) (kemiringan) yang menghasilkan MSE terkecil berdasarkan tabel **sebagaimana tertulis** (dengan angka 41).

*Tuliskan jawaban dalam bentuk desimal dengan 1 angka di belakang koma.*

**Jawaban:** `_____`

---

## Soal 5 — Genset balai desa

Sebuah balai desa mencatat pemakaian solar pada gensetnya. Semua pencatatan dilakukan pada durasi nyala **antara 2 sampai 5 jam**. Dari data itu diperoleh model

\[
\hat y = 1.5 + 0.8x,
\]

dengan \(x\) = lama nyala (jam) dan \(\hat y\) = solar terpakai (liter).

Panitia hajatan berencana menyalakan genset selama **40 jam** berturut-turut, dan ingin memakai model ini untuk memperkirakan kebutuhan solar.

Berapa liter yang diprediksi model untuk 40 jam?

*Tuliskan jawaban dalam bentuk desimal dengan 1 angka di belakang koma.*

**Jawaban:** `_____`

---

## Soal 6 — Genset balai desa (lanjutan)

Gunakan model dan rentang data yang sama dengan Soal 5 (data tercatat pada 2–5 jam).

Manakah di antara prediksi berikut yang merupakan **interpolasi**?

- **A.** Prediksi untuk 40 jam.
- **B.** Prediksi untuk 0 jam.
- **C.** Prediksi untuk 12 jam.
- **D.** Prediksi untuk 3.5 jam.

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Jawaban: A**

Model dipilih berdasarkan **kolom validasi**, bukan kolom data latih. MSE validasi terkecil adalah 9, milik model P.

Model Q menang telak pada data latih (2 lawan 8), dan justru itulah tanda bahaya: ia unggul pada data yang dipakai untuk memilih parameternya sendiri, lalu gagal pada data yang belum pernah dilihatnya.

Pilihan **D** keliru karena data uji **tidak boleh** dipakai untuk memilih model. Kalau data uji dibuka untuk memilih, ia berhenti menjadi data uji.

## Soal 2

**Jawaban: 19**

Model **Q** menunjukkan pola tersebut: data latih terbaik (2), validasi terburuk (21).

\[
21 - 2 = 19.
\]

Sebagai pembanding, jurang model P hanya \(9-8=1\), dan model R hanya \(12-11=1\). Keduanya memiliki jurang yang kecil.

Perlu dicatat: jurang selebar 19 adalah **tanda peringatan yang kuat dan konsisten dengan overfitting**, tetapi bukan bukti. Pola yang sama bisa muncul bila data validasinya kecil dan kebetulan sial. Untuk **memilih** P, kita tidak perlu memastikan diagnosisnya.

## Soal 3

**Jawaban: 12**

Skor validasi silang adalah **rata-rata** skor semua lipatan.

\[
\frac{12+9+15+10+14}{5} = \frac{60}{5} = 12.
\]

Gunanya: satu data validasi tunggal bisa kecil dan tidak beruntung. Dengan 5 lipatan, setiap contoh dipakai sebagai data validasi **tepat sekali**, sehingga taksirannya tidak bergantung pada satu pembagian yang kebetulan.

## Soal 4

**Jawaban: 10.2**

\[
\bar x = \frac{1+2+3+4}{4} = 2.5,
\qquad
\bar y = \frac{8+11+14+41}{4} = \frac{74}{4} = 18.5.
\]

| \(x_i\) | \(y_i\) | \(x_i-\bar x\) | \(y_i-\bar y\) | Hasil kali | \((x_i-\bar x)^2\) |
|---:|---:|---:|---:|---:|---:|
| 1 | 8 | \(-1.5\) | \(-10.5\) | \(+15.75\) | 2.25 |
| 2 | 11 | \(-0.5\) | \(-7.5\) | \(+3.75\) | 0.25 |
| 3 | 14 | \(+0.5\) | \(-4.5\) | \(-2.25\) | 0.25 |
| 4 | 41 | \(+1.5\) | \(+22.5\) | \(+33.75\) | 2.25 |
| **Jumlah** | | | | **51** | **5** |

\[
\beta = \frac{51}{5} = 10.2.
\]

**Bandingkan dengan data yang benar** (41 diganti 17): keempat titik jatuh persis pada \(\hat y = 5+3x\), sehingga \(\beta = 3\) dan MSE-nya nol.

Satu digit yang salah mengubah kemiringan dari **3 menjadi 10.2** — lebih dari tiga kali lipat. Intersepnya pun ikut jatuh menjadi

\[
\alpha = 18.5 - 10.2(2.5) = -7,
\]

sehingga garisnya sekarang memprediksi getah **negatif 7 kg** untuk blok tanpa pohon sadapan. Prediksi yang mustahil itu adalah gejalanya, bukan penyakitnya.

**Penyebabnya.** Angka yang salah dicatat berbeda \(41-17=24\) dari nilai yang benar. Angka 24 itu adalah **kesalahan pencatatan**, bukan residual garis yang baru.

Jika garis awal \(\hat y = 5+3x\) tetap dipakai, kesalahan pencatatan itu muncul sebagai residual \(24\) dengan kontribusi kuadrat \(24^2 = 576\) — dan itulah satu-satunya sumbangan, karena tiga titik lainnya tepat pada garis:

\[
\text{jumlah kuadrat garis awal} = 0+0+0+576 = 576.
\]

Angka 576 itulah yang tidak bisa ditoleransi oleh kuadrat terkecil. Saat garis dicocokkan ulang, ia **memutar garis untuk membagi pengaruh kesalahan tersebut ke seluruh titik**:

| \(x\) | \(y\) | \(\hat y = -7+10.2x\) | \(r\) | \(r^2\) |
|---:|---:|---:|---:|---:|
| 1 | 8 | 3.2 | \(+4.8\) | 23.04 |
| 2 | 11 | 13.4 | \(-2.4\) | 5.76 |
| 3 | 14 | 23.6 | \(-9.6\) | 92.16 |
| 4 | 41 | 33.8 | \(+7.2\) | 51.84 |
| | | | **Jumlah** | **172.8** |

Perhatikan hasilnya: satu kuadrat raksasa (576) ditukar menjadi empat kuadrat sedang (total 172.8). Residual titik keempat sekarang hanya \(7.2\), **bukan** 24 — garisnya sudah bergerak mendekatinya. Harganya dibayar oleh tiga titik yang tadinya sempurna: titik ketiga kini meleset \(-9.6\).

Itulah arti "satu titik menarik seluruh garis". Kuadrat terkecil memang bersedia menukar banyak kesalahan kecil demi mengecilkan satu kesalahan raksasa.

Perhatikan juga tanda hasil kali blok ketiga: \(-2.25\), **negatif**. Blok yang sebelumnya sangat wajar kini "memilih" agar garis turun, semata-mata karena \(\bar y\) sudah terseret naik oleh angka salah ketik itu.

## Soal 5

**Jawaban: 33.5**

\[
\hat y = 1.5 + 0.8(40) = 1.5 + 32 = 33.5.
\]

Aritmetikanya benar. Asumsinya yang bermasalah: 40 jam adalah **delapan kali** batas atas data yang pernah tercatat (5 jam). Model ini tidak pernah melihat bukti apa pun tentang perilaku genset di luar rentang 2–5 jam — soal panas mesin, pengisian ulang, atau efisiensi pada pemakaian panjang.

Angka 33.5 adalah **pendapat garis**, bukan pendapat data.

## Soal 6

**Jawaban: D**

Data tercatat pada rentang 2–5 jam.

- **D (3.5 jam)** berada **di dalam** rentang → interpolasi. ✔
- **B (0 jam)** di luar rentang (di bawah 2) → ekstrapolasi. Nilai \(\hat y = 1.5\) liter di sini adalah intersepnya, dan intersep tidak wajib menggambarkan keadaan nyata.
- **C (12 jam)** dan **A (40 jam)** di atas 5 → ekstrapolasi.

Ekstrapolasi tidak hanya terjadi ke kanan. Nilai \(x=0\) juga di luar rentang bukti.

---

# Catatan pengajar

| Soal | Struktur | Jebakan khas |
|---|---|---|
| 1 | memilih lewat kolom validasi | memilih Q karena data latihnya paling kecil |
| 2 | jurang latih–validasi | menghitung jurang model P atau R |
| 3 | rata-rata lipatan | menjumlahkan tanpa membagi 5; menjawab 60 |
| 4 | pencilan memutar garis | membuang titik ke-4 padahal soal meminta "sebagaimana tertulis" |
| 5 | ekstrapolasi jauh | mengira soal ini jebakan dan menolak menghitung |
| 6 | interpolasi vs ekstrapolasi | melupakan bahwa \(x=0\) juga di luar rentang |

Soal 5 dan 6 sengaja berpasangan. Soal 5 **memang** meminta siswa menghitung, dan jawabannya **memang** 33.5. Aritmetika bukan bagian yang salah. Barulah Soal 6 memaksa siswa menyebut nama masalahnya. Urutan ini penting: siswa harus merasakan bahwa perhitungan yang benar sempurna tetap bisa menghasilkan angka yang tidak layak dipercaya.

Soal 4 layak dibahas lisan sampai tuntas. Setelah siswa memperoleh 10.2, tanyakan tiga hal berurutan:

1. *"Berapa \(\beta\) kalau angkanya ditulis 17 dengan benar?"* → 3, dengan MSE nol.
2. *"Berapa prediksi garis yang tercemar untuk blok tanpa pohon sadapan?"* → \(-7\) kg.
3. *"Jadi, boleh langsung kita hapus saja titik keempatnya?"* → **Tidak.** Di sini kita **kebetulan tahu** bahwa itu salah ketik. Di dunia nyata, titik yang menyimpang bisa berarti kesalahan catat, kasus langka yang asli, atau tanda bahwa modelnya kurang lengkap. Selidiki dulu, jangan hapus otomatis.

Pertanyaan ketiga itulah yang paling penting, dan paling sering dilewati.
