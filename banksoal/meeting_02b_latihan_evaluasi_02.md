# Evaluasi 02

Fokus set ini: membandingkan model dengan **baseline**, menghitung rata-rata yang benar untuk penskalaan, mengembalikan MSE ke satuan asal, dan mengetahui apa yang **tidak** dibuktikan oleh sebuah nilai \(\beta\).

## Petunjuk jawaban

Setiap soal menyebutkan **format jawabannya sendiri**. Untuk soal pilihan ganda, pilih tombol jawaban yang benar.

---

## Rumus cepat

\[
\hat y_{\text{baseline}}=\bar y_{\text{latih}},\qquad \operatorname{RMSE}=\sqrt{\operatorname{MSE}}.
\]

\[
\operatorname{MSE}=\frac{1}{n}\sum_i(y_i-\hat y_i)^2.
\]

Hitung rata-rata dan cocokkan praproses pada data latih saja, lalu terapkan ke validasi atau uji.

---

## Soal 1 — Angkot Trayek 3

Sebuah model memprediksi jumlah penumpang angkot. Model dicocokkan pada data latih, dan rata-rata penumpang pada data latih adalah \(\bar y = 25\) orang.

Model kemudian diuji pada tiga hari **baru**:

| Hari | Penumpang sebenarnya \(y\) | Prediksi model \(\hat y\) |
|---|---:|---:|
| Senin | 20 | 22 |
| Selasa | 26 | 27 |
| Rabu | 32 | 30 |

Sebagai pembanding, seorang siswa mengusulkan **baseline**: abaikan semua fitur, dan tebak \(\bar y = 25\) untuk setiap hari.

Berapa MSE **baseline** tersebut pada tiga hari baru ini?

*Tuliskan jawaban sebagai bilangan bulat.*

**Jawaban:** `_____`

---

## Soal 2 — Penskalaan fitur

Sebuah dataset berisi enam pengamatan. Data sudah dibagi lebih dahulu:

- **Data latih:** 4, 8, 6, 10
- **Data uji:** 20, 24

Sebelum melatih model, fitur ini perlu diskalakan, dan penskalaan memerlukan sebuah **nilai rata-rata**.

Berapa nilai rata-rata yang **benar** dipakai untuk penskalaan?

*Tuliskan jawaban sebagai bilangan bulat.*

**Jawaban:** `_____`

---

## Soal 3 — Data uji milik panitia

Seorang peserta lomba memiliki data uji di komputernya. Ia melatih model, memeriksa skornya pada data uji, menyetel ulang modelnya, memeriksa lagi, dan mengulangi langkah ini sebanyak lima kali sampai skor data ujinya bagus. Ia lalu melaporkan skor terakhir itu sebagai taksiran performa pada data baru.

Apa yang salah?

- **A.** Tidak ada yang salah; ia memakai data uji persis seperti fungsinya.
- **B.** Data uji telah berubah menjadi bagian dari pengembangan, sehingga skor terakhirnya bukan lagi taksiran jujur untuk data baru.
- **C.** Kesalahannya hanya pada jumlah pengulangan; lima kali terlalu banyak, dua kali masih boleh.
- **D.** Ia seharusnya melatih model langsung pada data uji agar skornya lebih tinggi.

**Jawaban:** `_____`

---

## Soal 4 — Kereta Bandara

Sebuah model memprediksi waktu tempuh kereta dan memperoleh

\[
\operatorname{MSE} = 49 \text{ menit}^2
\]

pada data uji. Kepala stasiun mengeluh bahwa "menit kuadrat" tidak dapat ia bayangkan, dan meminta angka yang satuannya **menit**.

Berapa angka yang harus dilaporkan?

*Tuliskan jawaban sebagai bilangan bulat.*

**Jawaban:** `_____`

---

## Soal 5 — Genteng Jatiwangi

Sebuah usaha genteng mencatat empat hari produksi:

| Pekerja \(x\) | Genteng \(y\) (ratus buah) |
|---:|---:|
| 2 | 11 |
| 4 | 18 |
| 6 | 25 |
| 8 | 70 |

Setelah diselidiki, catatan hari keempat ternyata **menggabungkan produksi dua hari sekaligus**, sehingga tidak sebanding dengan tiga baris lainnya. Titik itu dikeluarkan dari analisis dengan alasan yang jelas dan tercatat.

Hitunglah nilai \(\beta\) (kemiringan) yang menghasilkan MSE terkecil dari **tiga** baris yang tersisa.

*Tuliskan jawaban dalam bentuk desimal dengan 1 angka di belakang koma.*

**Jawaban:** `_____`

---

## Soal 6 — Payung dan pengunjung mal

Sepanjang musim hujan, sebuah tim mencatat tiga akhir pekan:

| Payung terjual \(x\) (lusin) | Pengunjung mal \(y\) (ratus orang) |
|---:|---:|
| 2 | 5 |
| 4 | 8 |
| 6 | 14 |

Nilai \(\beta\) (kemiringan) yang menghasilkan MSE terkecil adalah \(2.25\), yaitu **positif**.

Apa yang dibuktikan oleh nilai positif ini?

- **A.** Menjual lebih banyak payung **menyebabkan** lebih banyak orang datang ke mal.
- **B.** Mal sebaiknya membagikan payung gratis agar pengunjungnya bertambah.
- **C.** Pada data yang teramati, kedua besaran ini bergerak naik bersama-sama — tidak lebih dari itu.
- **D.** Pengunjung mal **menyebabkan** penjualan payung meningkat.

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Jawaban: 25**

Baseline memprediksi 25 untuk setiap hari.

| \(y\) | \(\hat y\) | \(r\) | \(r^2\) |
|---:|---:|---:|---:|
| 20 | 25 | \(-5\) | 25 |
| 26 | 25 | \(+1\) | 1 |
| 32 | 25 | \(+7\) | 49 |
| | | **Jumlah** | **75** |

\[
\operatorname{MSE}_{\text{baseline}} = \frac{75}{3} = 25.
\]

Sebagai pembanding, MSE modelnya:

\[
\frac{(-2)^2 + (-1)^2 + 2^2}{3} = \frac{4+1+4}{3} = 3.
\]

Modelnya jauh lebih baik daripada baseline — **25 lawan 3**. Itulah gunanya baseline: tanpa pembanding, angka 3 tidak berarti apa-apa. Bagus atau buruk selalu **relatif terhadap sesuatu**.

## Soal 2

**Jawaban: 7**

Rata-rata dihitung dari **data latih saja**:

\[
\frac{4+8+6+10}{4} = \frac{28}{4} = 7.
\]

Rata-rata seluruh enam data adalah

\[
\frac{4+8+6+10+20+24}{6} = \frac{72}{6} = 12,
\]

dan angka **12 itulah jawaban yang salah**. Angka 12 memuat informasi dari data uji (20 dan 24). Kalau model dilatih memakai 12, maka proses pelatihan sudah "melihat" ringkasan data uji, dan skor ujinya berhenti menjadi taksiran yang jujur. Inilah **kebocoran data**.

Perhatikan seberapa jauh keduanya: 7 lawan 12. Kebocoran di sini bukan perbedaan halus.

Aturannya: **bagi dulu, baru cocokkan penskalaannya.** Setiap langkah praproses yang **mempelajari sesuatu dari data** — rata-rata, simpangan baku, proyeksi PCA, kosakata dari teks — harus dicocokkan pada data latih saja, lalu diterapkan apa adanya ke data validasi dan data uji.

## Soal 3

**Jawaban: B**

Memeriksa data uji, menyetel, lalu memeriksa lagi berarti ia **memilih model karena model itu bagus di data uji**. Data uji telah diam-diam menjadi bagian dari pengembangan — kesalahan yang sama seperti menilai model pada data latihnya sendiri, hanya naik satu tingkat.

Skornya mungkin tetap terlihat bagus. Yang hilang adalah **artinya**: angka itu tidak lagi memberi tahu siapa pun bagaimana model bekerja pada data yang benar-benar baru.

Pilihan **C** menggoda tetapi keliru: masalahnya bukan pada berapa kali, melainkan pada **alurnya**. Bahkan sekali penyetelan berdasarkan skor uji sudah mencemari perannya. Buka data uji **satu kali, di akhir**.

## Soal 4

**Jawaban: 7**

\[
\sqrt{\operatorname{MSE}} = \sqrt{49} = 7 \text{ menit}.
\]

MSE mengkuadratkan residual, sehingga satuannya ikut terkuadratkan. Menarik akarnya mengembalikan angka itu ke satuan asal — di sini, menit.

**Perhatikan penamaannya.** Angka 7 ini **bukan** MSE. MSE model tersebut tetap \(49\ \text{menit}^2\); ia tidak berubah. Yang dilaporkan kepada kepala stasiun adalah **ukuran yang berbeda**, yaitu akar dari MSE, yang bernama **RMSE** (*root mean squared error*):

\[
\operatorname{MSE} = 49\ \text{menit}^2,
\qquad
\operatorname{RMSE} = \sqrt{\operatorname{MSE}} = 7\ \text{menit}.
\]

Keduanya adalah dua angka berbeda dengan dua satuan berbeda. Menyebut 7 sebagai "MSE" adalah kekeliruan yang sering terjadi.

> **Istilah baru.** Catatan Meeting 2A hanya menyebutnya \(\sqrt{\operatorname{MSE}}\) tanpa memberinya nama. Nama resminya adalah RMSE, dan istilah itu akan sering ditemui di luar catatan ini.

Ini **tidak** membuat MSE menjadi tidak berguna. Untuk **membandingkan** dua model pada target dan data yang sama, MSE yang lebih kecil berarti prediksi yang lebih dekat, dan itu sudah cukup — RMSE akan memberi urutan yang sama persis. RMSE hanya diperlukan ketika angkanya harus dibacakan kepada orang yang memerlukan satuannya.

## Soal 5

**Jawaban: 3.5**

Tanpa baris keempat:

\[
\bar x = \frac{2+4+6}{3} = 4,
\qquad
\bar y = \frac{11+18+25}{3} = 18.
\]

| \(x_i\) | \(y_i\) | \(x_i-\bar x\) | \(y_i-\bar y\) | Hasil kali | \((x_i-\bar x)^2\) |
|---:|---:|---:|---:|---:|---:|
| 2 | 11 | \(-2\) | \(-7\) | \(+14\) | 4 |
| 4 | 18 | \(0\) | \(0\) | \(0\) | 0 |
| 6 | 25 | \(+2\) | \(+7\) | \(+14\) | 4 |
| **Jumlah** | | | | **28** | **8** |

\[
\beta = \frac{28}{8} = 3.5.
\]

Kalau baris keempat **ikut** disertakan, kemiringannya melonjak menjadi \(\beta = 9.2\) — hampir tiga kali lipat.

Yang membedakan soal ini dari sekadar "buang titik yang aneh": titik itu dikeluarkan karena **alasan yang dapat dijelaskan** — ia mengukur hal yang berbeda (dua hari, bukan satu), sehingga memang tidak sebanding dengan baris lain. Bukan karena angkanya tidak kita sukai.

## Soal 6

**Jawaban: C**

Nilai \(\beta = 2.25\) menyatakan bahwa **pada data yang teramati**, ketika penjualan payung lebih tinggi, jumlah pengunjung mal cenderung lebih tinggi juga. Hanya itu.

Regresi mengukur **hubungan**, bukan **sebab-akibat**. Di sini penjelasan yang jauh lebih masuk akal adalah adanya penyebab ketiga: **hujan**. Hujan membuat orang membeli payung, dan hujan juga membuat orang berteduh di mal. Kedua besaran itu naik bersama tanpa yang satu menyebabkan yang lain.

Pilihan **B** memperlihatkan bahayanya secara konkret. Membagikan payung gratis tidak akan mendatangkan hujan, jadi tidak ada alasan pengunjung akan bertambah. Kebijakan yang dibangun di atas kesalahan sebab-akibat akan gagal, sekalipun aritmetika regresinya sempurna.

---

# Catatan pengajar

| Soal | Struktur | Jebakan khas |
|---|---|---|
| 1 | baseline sebagai pembanding | menghitung MSE model (3), bukan MSE baseline |
| 2 | kebocoran lewat rata-rata | menjawab 12 — rata-rata seluruh data |
| 3 | data uji harus tersegel | memilih C — mengira masalahnya soal jumlah pengulangan |
| 4 | RMSE \(=\sqrt{\operatorname{MSE}}\) mengembalikan satuan | menjawab 24.5 (membagi dua) atau 2401 (mengkuadratkan); menyebut 7 sebagai "MSE" |
| 5 | mengeluarkan pencilan **dengan alasan** | menyertakan baris keempat; menjawab 9.2 |
| 6 | hubungan bukan sebab-akibat | memilih A atau B |

Soal 2 adalah satu-satunya soal kebocoran data yang murni aritmetika di seluruh bank soal ini, dan justru karena itu ia berharga. Siswa sering menghafal kalimat "bagi dulu, baru praproses" tanpa pernah melihat **dua angka yang berbeda**. Di sini angkanya nyata: 7 lawan 12.

Soal 5 sengaja dipasangkan dengan Soal 4 pada Latihan Evaluasi 01, dan keduanya **harus** dibahas berdampingan. Pada latihan sebelumnya, titik menyimpang **tidak boleh** dibuang — kita hanya tahu itu salah ketik karena soal memberi tahu. Di sini titik menyimpang **boleh** dikeluarkan, karena ada alasan yang dapat dijelaskan dan dicatat: baris itu mengukur dua hari sekaligus, jadi memang bukan pengamatan yang sejenis.

Bedanya bukan pada seberapa jauh titik itu menyimpang. Bedanya pada **apakah kita punya alasan**. Jika siswa menyimpulkan "pencilan itu dibuang kalau nilainya besar", set ini justru gagal mengajarkan maksudnya.

Soal 6 menutup rangkaian Meeting 2 dengan sengaja. Seluruh Meeting 2A mengajarkan cara memperoleh \(\beta\); Soal 6 mengingatkan bahwa memperoleh \(\beta\) dan memahami artinya adalah dua pekerjaan yang berbeda. Pilihan B layak dibacakan keras-keras — ia terdengar seperti keputusan bisnis yang wajar, dan itulah sebabnya kesalahan ini mahal.
