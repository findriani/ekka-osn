# Regresi 03

Fokus set ini: **pembulatan di akhir**, membaca simetri kurva MSE, dan mengenali garis yang tampak benar tetapi bukan yang terbaik. Set ini lebih sulit daripada Latihan 01 dan 02.

## Petunjuk jawaban

Setiap soal menyebutkan **format jawabannya sendiri**. Untuk soal pilihan ganda, pilih tombol jawaban yang benar.

> **Peringatan.** Simpan hasil antara sebagai **pecahan**. Membulatkan di tengah jalan akan mengubah jawaban akhir pada set ini.

---

## Rumus cepat

\[
r_i=y_i-\hat y_i,\qquad \operatorname{MSE}=\frac{1}{n}\sum_i r_i^2.
\]

\[
\hat y=\alpha+\beta x.
\]

Simpan pecahan saat menghitung; bulatkan hanya pada jawaban akhir. Jumlah residual nol bukan bukti garis terbaik.

---

## Soal 1 — Gula aren Bantul

Sebuah kelompok tani mencatat produksi gula aren dari tiga pohon:

| Umur pohon \(x\) (tahun) | Produksi \(y\) (kg/bulan) |
|---:|---:|
| 4 | 30 |
| 7 | 50 |
| 10 | 61 |

Hitunglah nilai \(\beta\) (kemiringan) yang menghasilkan MSE terkecil.

*Tuliskan jawaban dalam bentuk desimal dengan 1 angka di belakang koma.*

**Jawaban:** `_____`

---

## Soal 2 — Gula aren Bantul (lanjutan)

Gunakan data yang sama dengan Soal 1.

Hitunglah intersep \(\alpha\), lalu bulatkan ke 1 angka di belakang koma.

- **A.** \(\alpha = 36.4\)
- **B.** \(\alpha = 10.6\)
- **C.** \(\alpha = 10.8\)
- **D.** \(\alpha = 11.0\)

**Jawaban:** `_____`

---

## Soal 3 — Tambak garam Madura

Seorang petambak garam memakai model yang sudah ditetapkan sebelumnya:

\[
\hat y = 20 + 2.6x,
\]

dengan \(x\) = jumlah hari kemarau berturut-turut dan \(\hat y\) = hasil garam dalam karung.

Tiga musim tercatat sebagai berikut:

| \(x\) (hari) | \(y\) (karung) |
|---:|---:|
| 10 | 42 |
| 20 | 75 |
| 30 | 96 |

Hitunglah MSE model tersebut. Parameter **sudah diberikan** — jangan mencocokkan ulang garisnya.

*Tuliskan jawaban dalam bentuk desimal dengan 1 angka di belakang koma.*

**Jawaban:** `_____`

---

## Soal 4 — Anyaman purun Amuntai

Seorang perajin anyaman purun mencari kemiringan terbaik dengan cara mencoba beberapa nilai. Setiap garis yang ia coba **dipasak melewati titik rata-rata** \((\bar x,\bar y)\), lalu ia hitung total luas kuadrat kesalahannya.

Diketahui bahwa nilai \(x\) pada data **tidak semuanya sama**, sehingga total kuadrat kesalahan sebagai fungsi \(\beta\) membentuk parabola U dengan satu titik minimum.

| Kemiringan \(\beta\) | Total luas kuadrat |
|---:|---:|
| 2 | 24 |
| 6 | 24 |

Kedua percobaan menghasilkan total luas yang **persis sama**.

Berapa kemiringan terbaik untuk data ini?

*Tuliskan jawaban sebagai bilangan bulat.*

**Jawaban:** `_____`

---

## Soal 5 — Panggung pentas seni

Panitia pentas seni mencatat tiga pertunjukan:

| Durasi \(x\) (jam) | Penonton \(y\) (puluhan orang) |
|---:|---:|
| 1 | 10 |
| 2 | 12 |
| 3 | 20 |

Seorang siswa mengusulkan garis \(\hat y = 8 + 3x\). Ia memeriksa residualnya, memperoleh \(-1\), \(-2\), dan \(+3\), lalu menjumlahkannya menjadi **tepat nol**. Ia menyimpulkan bahwa garisnya pasti garis terbaik.

Manakah tanggapan yang benar?

- **A.** Benar. Jumlah residual nol adalah definisi garis kuadrat terkecil.
- **B.** Salah. Garis kuadrat terkecil memiliki MSE 2, lebih kecil daripada MSE garis tersebut.
- **C.** Salah. Jumlah residual seharusnya positif untuk garis yang baik.
- **D.** Benar, tetapi hanya karena data ini hanya memuat tiga titik.

**Jawaban:** `_____`

---

## Soal 6 — Sapi perah Boyolali

Seorang peternak mencatat empat ekor sapi perah:

| Pakan konsentrat \(x\) (kg/hari) | Susu \(y\) (liter/hari) |
|---:|---:|
| 1 | 6 |
| 2 | 5 |
| 3 | 9 |
| 4 | 12 |

Hitunglah nilai \(\beta\) (kemiringan) yang menghasilkan MSE terkecil.

*Tuliskan jawaban dalam bentuk desimal dengan 1 angka di belakang koma.*

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Jawaban: 5.2**

\[
\bar x = \frac{4+7+10}{3} = 7,
\qquad
\bar y = \frac{30+50+61}{3} = \frac{141}{3} = 47.
\]

| \(x_i\) | \(y_i\) | \(x_i-\bar x\) | \(y_i-\bar y\) | Hasil kali | \((x_i-\bar x)^2\) |
|---:|---:|---:|---:|---:|---:|
| 4 | 30 | \(-3\) | \(-17\) | \(+51\) | 9 |
| 7 | 50 | \(0\) | \(+3\) | \(0\) | 0 |
| 10 | 61 | \(+3\) | \(+14\) | \(+42\) | 9 |
| **Jumlah** | | | | **93** | **18** |

\[
\beta = \frac{93}{18} = \frac{31}{6} = 5.1666\ldots \approx 5.2.
\]

**Simpan \(\tfrac{31}{6}\), bukan 5.2.** Soal 2 memerlukan nilai yang belum dibulatkan.

## Soal 2

**Jawaban: C**

Pakai \(\beta\) yang **belum dibulatkan**:

\[
\alpha = \bar y - \beta\bar x = 47 - \frac{31}{6}(7) = 47 - \frac{217}{6} = \frac{282-217}{6} = \frac{65}{6} = 10.8333\ldots
\]

Dibulatkan ke 1 angka di belakang koma: \(\alpha \approx \mathbf{10.8}\).

Pilihan **B (10.6)** adalah hasil membulatkan \(\beta\) lebih dahulu:

\[
\alpha = 47 - (5.2)(7) = 47 - 36.4 = 10.6.
\]

Selisihnya 0.2 — kecil, tetapi salah. Kesalahan kecil pada \(\beta\) tiba di \(\alpha\) setelah dikalikan \(\bar x = 7\).

**Dan inilah bagian yang perlu diwaspadai.** Periksa loss kedua pasangan:

\[
L(10.8,\; 5.2) = \frac{341}{75} \approx 4.547,
\qquad
L(10.6,\; 5.2) = \frac{338}{75} \approx 4.507.
\]

Pasangan yang diperoleh dengan **membulatkan lebih awal justru memiliki loss lebih kecil.** Pasangan itu tetap **bukan** jawaban yang diminta, karena soal meminta nilai \(\alpha\) dan \(\beta\) yang meminimumkan \(L\) — baru kemudian dibulatkan. Bukan pasangan satu-desimal terbaik.

Ini persis peringatan yang dilampirkan pada soal Ekshibisi 2025:

> *Cari nilai \(\alpha\) dan \(\beta\) yang menghasilkan \(L(\alpha,\beta)\) sekecil mungkin terlebih dahulu, baru kemudian dibulatkan sesuai permintaan soal. Saat sudah dibulatkan, solusinya belum tentu menjadi yang paling optimal lagi di presisi tersebut.*

## Soal 3

**Jawaban: 9.7**

| \(x\) | \(y\) | \(\hat y = 20+2.6x\) | \(r\) | \(r^2\) |
|---:|---:|---:|---:|---:|
| 10 | 42 | 46 | \(-4\) | 16 |
| 20 | 75 | 72 | \(+3\) | 9 |
| 30 | 96 | 98 | \(-2\) | 4 |
| | | | **Jumlah** | **29** |

\[
\operatorname{MSE} = \frac{29}{3} = 9.6666\ldots \approx 9.7.
\]

Parameternya diberikan, jadi tugasnya hanya **mengevaluasi**: prediksi, kurangkan, kuadratkan, jumlahkan, bagi.

## Soal 4

**Jawaban: 4**

Ketika garis dipasak di \((\bar x,\bar y)\), total luas kuadrat sebagai fungsi \(\beta\) berbentuk **parabola** — kurva U dengan satu titik terendah, dan **simetris** terhadap titik terendah itu.

Dua nilai \(\beta\) yang menghasilkan total luas sama pasti berjarak sama dari titik terendah. Maka titik terendahnya tepat di tengah:

\[
\beta_{\text{terbaik}} = \frac{2+6}{2} = 4.
\]

Tidak perlu data mentahnya sama sekali. Simetri sudah cukup.

**Mengapa syarat "nilai \(x\) tidak semuanya sama" perlu disebut?** Koefisien pemimpin parabola itu adalah \(\sum(x_i-\bar x)^2\). Kalau semua \(x_i\) bernilai sama, koefisien itu nol, dan kurvanya **datar** — bukan parabola. Setiap \(\beta\) akan menghasilkan total luas yang persis sama, termasuk 2 dan 6, sehingga tidak ada kemiringan terbaik yang tunggal. Tanpa syarat itu, angka 4 tidak dapat disimpulkan. Bandingkan dengan Latihan 02 Soal 6, yang justru menguji keadaan datar tersebut.

## Soal 5

**Jawaban: B**

Hitung garis kuadrat terkecilnya:

\[
\bar x = 2, \qquad \bar y = \frac{10+12+20}{3} = 14.
\]

| \(x_i\) | \(y_i\) | \(x_i-\bar x\) | \(y_i-\bar y\) | Hasil kali | \((x_i-\bar x)^2\) |
|---:|---:|---:|---:|---:|---:|
| 1 | 10 | \(-1\) | \(-4\) | \(+4\) | 1 |
| 2 | 12 | \(0\) | \(-2\) | \(0\) | 0 |
| 3 | 20 | \(+1\) | \(+6\) | \(+6\) | 1 |
| **Jumlah** | | | | **10** | **2** |

\[
\beta = \frac{10}{2} = 5,
\qquad
\alpha = 14 - 5(2) = 4,
\qquad
\hat y = 4 + 5x.
\]

Bandingkan keduanya:

| Garis | Residual | MSE |
|---|---|---:|
| \(\hat y = 8+3x\) | \(-1,\; -2,\; +3\) | \(\frac{1+4+9}{3} = \frac{14}{3} \approx 4.667\) |
| \(\hat y = 4+5x\) | \(+1,\; -2,\; +1\) | \(\frac{1+4+1}{3} = 2\) |

**Kedua garis memiliki jumlah residual nol.** Jumlah residual nol bukan sesuatu yang istimewa: **setiap** garis yang melewati titik rata-rata \((\bar x,\bar y)=(2,14)\) memilikinya, dan ada tak hingga banyaknya garis semacam itu — satu untuk setiap kemiringan.

Yang membedakan garis terbaik bukan jumlah residualnya, melainkan **jumlah kuadrat** residualnya.

## Soal 6

**Jawaban: 2.2**

\[
\bar x = \frac{1+2+3+4}{4} = 2.5,
\qquad
\bar y = \frac{6+5+9+12}{4} = 8.
\]

| \(x_i\) | \(y_i\) | \(x_i-\bar x\) | \(y_i-\bar y\) | Hasil kali | \((x_i-\bar x)^2\) |
|---:|---:|---:|---:|---:|---:|
| 1 | 6 | \(-1.5\) | \(-2\) | \(+3\) | 2.25 |
| 2 | 5 | \(-0.5\) | \(-3\) | \(+1.5\) | 0.25 |
| 3 | 9 | \(+0.5\) | \(+1\) | \(+0.5\) | 0.25 |
| 4 | 12 | \(+1.5\) | \(+4\) | \(+6\) | 2.25 |
| **Jumlah** | | | | **11** | **5** |

\[
\beta = \frac{11}{5} = 2.2.
\]

Perhatikan bahwa \(\bar x\) di sini **bukan** bilangan bulat, sehingga tidak ada titik yang menyumbang hasil kali nol. Keempat sapi ikut memilih.

(Intersepnya \(\alpha = 8 - 2.2(2.5) = 2.5\).)

---

# Catatan pengajar

| Soal | Struktur | Jebakan khas |
|---|---|---|
| 1 | \(\beta\) berupa pecahan berulang \(\tfrac{31}{6}\) | membulatkan menjadi 5.2 lalu memakainya di Soal 2 |
| 2 | pembulatan di akhir — **soal bintang** | memilih B (10.6), hasil pembulatan dini |
| 3 | evaluasi, bukan pencocokan | mencocokkan ulang garis padahal parameter sudah diberi |
| 4 | simetri parabola | mengira data mentah diperlukan; menjawab 24 |
| 5 | jumlah residual nol ≠ terbaik | memilih A |
| 6 | \(\bar x\) pecahan, empat titik | membulatkan \(\bar x\) menjadi 2 atau 3 |

**Soal 1 dan 2 adalah inti set ini.** Keduanya sengaja dirancang agar mereproduksi fenomena soal Ekshibisi 2025 secara persis: pasangan hasil pembulatan dini \((10.6,\,5.2)\) **benar-benar memiliki loss lebih kecil** daripada jawaban yang benar \((10.8,\,5.2)\) — 4.507 lawan 4.547.

Ini bukan kebetulan yang saya susun agar tampak dramatis; ini konsekuensi matematis. Untuk \(\beta\) yang **sudah dipatok**, nilai \(\alpha\) yang meminimumkan loss adalah tepat \(\bar y - \beta\bar x\). Membulatkan \(\beta\) menjadi 5.2 lalu menghitung \(\alpha = 47-5.2(7)\) berarti **mengoptimalkan ulang \(\alpha\) terhadap kemiringan yang salah** — dan optimasi itu berhasil. Karena itulah cara yang keliru bisa menang pada loss.

Jika siswa memilih B dan bersikeras karena "loss-nya lebih kecil", ia sebenarnya sudah berpikir benar dan hanya salah membaca pertanyaan. Tunjukkan kalimat kedua pada catatan soal 2025: *setelah dibulatkan, solusinya belum tentu paling optimal lagi di presisi tersebut.* Yang diminta adalah **peminimum sejati, lalu dibulatkan** — bukan pasangan satu-desimal terbaik.

Soal 4 dapat dikerjakan dalam sepuluh detik oleh siswa yang mengenali kurva U pada §8.3, dan tidak dapat dikerjakan sama sekali oleh siswa yang mencari data mentahnya. Itulah maksudnya.
