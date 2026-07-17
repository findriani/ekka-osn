# Regresi 01

Fokus set ini: menghitung prediksi dari sebuah aturan, menghitung residual beserta **tandanya**, dan menyusun MSE langkah demi langkah. Semua soal dapat dikerjakan di atas kertas.

## Petunjuk jawaban

Setiap soal menyebutkan **format jawabannya sendiri**. Bacalah format itu sebelum menulis jawaban — jawaban yang benar tetapi salah format dianggap salah.

Untuk soal pilihan ganda, pilih tombol jawaban yang benar.

---

## Rumus cepat

\[
\hat y=\alpha+\beta x,\qquad r=y-\hat y.
\]

\[
\operatorname{MSE}=\frac{1}{n}\sum_{i=1}^{n}(y_i-\hat y_i)^2.
\]

Untuk satu tebakan tetap, gunakan \(\hat y=\bar y\). Jumlah residual nol belum tentu MSE kecil.

---

## Soal 1 — Angkringan Malioboro

Sebuah angkringan memperkirakan jumlah porsi nasi kucing yang terjual setiap malam dengan aturan berikut:

> perkiraan porsi terjual = 12 porsi dasar + 4 porsi untuk setiap jam angkringan buka

Malam ini angkringan buka selama 7 jam.

Berapa porsi yang diperkirakan terjual?

*Tuliskan jawaban sebagai bilangan bulat.*

**Jawaban:** `_____`

---

## Soal 2 — Bengkel servis motor

Sebuah bengkel memakai model untuk menaksir biaya servis. Untuk satu motor, model memprediksi biaya **Rp320.000**. Ternyata biaya sebenarnya adalah **Rp275.000**.

Manakah pernyataan yang benar tentang residual \(r=y-\hat y\) pada kasus ini?

- **A.** \(r=+45.000\); model memprediksi terlalu rendah.
- **B.** \(r=-45.000\); artinya biaya servis motor tersebut bernilai negatif.
- **C.** \(r=+45.000\); model memprediksi terlalu tinggi.
- **D.** \(r=-45.000\); model memprediksi terlalu tinggi.

**Jawaban:** `_____`

---

## Soal 3 — Pendakian Gunung Rinjani

Seorang pendaki memakai aturan sederhana untuk menaksir suhu udara berdasarkan ketinggian:

\[
\hat y = 30 - x,
\]

dengan \(x\) = ketinggian dalam **ratusan meter** dan \(\hat y\) = suhu dalam °C.

Tiga pengukuran nyata dicatat sepanjang jalur pendakian:

| Ketinggian \(x\) (ratus m) | Suhu terukur \(y\) (°C) |
|---:|---:|
| 5 | 26 |
| 10 | 18 |
| 15 | 16 |

Berapa nilai MSE aturan tersebut pada tiga pengukuran ini?

*Tuliskan jawaban sebagai bilangan bulat.*

**Jawaban:** `_____`

---

## Soal 4 — Kerupuk jemur

Seorang perajin kerupuk mencatat jumlah kaleng yang terjual selama lima hari:

\[
14,\quad 18,\quad 11,\quad 20,\quad 12.
\]

Ia ingin menebak penjualan hari berikutnya dengan **satu bilangan tetap** saja, tanpa memakai informasi lain apa pun. Ia memilih bilangan yang membuat MSE sekecil mungkin.

Bilangan berapa yang harus ia pilih?

*Tuliskan jawaban sebagai bilangan bulat.*

**Jawaban:** `_____`

---

## Soal 5 — Fotokopi kampus

Sebuah usaha fotokopi memakai model biaya

\[
\hat y = 2000 + 150x,
\]

dengan \(x\) = jumlah lembar dan \(\hat y\) = biaya dalam rupiah.

Apa arti angka **150** dalam model ini?

- **A.** Tambahan biaya Rp150 untuk setiap satu lembar tambahan.
- **B.** Biaya tetap Rp150 yang dikenakan sekali untuk setiap pesanan.
- **C.** Total biaya rata-rata Rp150 untuk sebuah pesanan.
- **D.** Jumlah lembar yang dapat difotokopi dengan uang Rp150.

**Jawaban:** `_____`

---

## Soal 6 — Sablon kaos

Sebuah usaha sablon mengevaluasi model penaksir waktu pengerjaan pada empat pesanan terakhir. Residual keempat pesanan tersebut (dalam jam) adalah

\[
+3,\quad -3,\quad +4,\quad -4.
\]

Pemilik usaha menjumlahkan keempat residual, memperoleh 0, lalu menyimpulkan bahwa modelnya sempurna.

Hitunglah MSE model tersebut untuk menunjukkan bahwa kesimpulan itu keliru.

*Tuliskan jawaban dalam bentuk desimal dengan 1 angka di belakang koma.*

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Jawaban: 40**

\[
\hat y = 12 + 4(7) = 12 + 28 = 40.
\]

Perkalian dikerjakan sebelum penjumlahan.

## Soal 2

**Jawaban: D**

\[
r = y - \hat y = 275.000 - 320.000 = -45.000.
\]

Residual negatif berarti nilai **aktual lebih rendah** daripada prediksi — model menaksir terlalu tinggi.

Pilihan **B** adalah miskonsepsi yang sering muncul: residual negatif **tidak** berarti nilai yang diprediksi negatif. Biaya servisnya tetap Rp275.000, sebuah bilangan positif.

## Soal 3

**Jawaban: 2**

| \(x\) | \(y\) | \(\hat y = 30-x\) | \(r = y-\hat y\) | \(r^2\) |
|---:|---:|---:|---:|---:|
| 5 | 26 | 25 | \(+1\) | 1 |
| 10 | 18 | 20 | \(-2\) | 4 |
| 15 | 16 | 15 | \(+1\) | 1 |
| | | | **Jumlah** | **6** |

\[
\operatorname{MSE} = \frac{6}{3} = 2.
\]

Perhatikan bahwa jumlah residualnya \(1-2+1 = 0\). Kalau residual dijumlahkan begitu saja, aturan ini tampak sempurna — padahal tidak.

## Soal 4

**Jawaban: 15**

Konstanta terbaik adalah **rata-rata** \(\bar y\).

\[
\bar y = \frac{14+18+11+20+12}{5} = \frac{75}{5} = 15.
\]

## Soal 5

**Jawaban: A**

Angka 150 adalah **kemiringan** \(\beta\): perubahan biaya ketika jumlah lembar bertambah satu. Satuannya rupiah per lembar.

Angka 2000 adalah **intersep** \(\alpha\), yaitu biaya tetap yang tidak bergantung pada jumlah lembar.

## Soal 6

**Jawaban: 12.5**

\[
\operatorname{MSE} = \frac{3^2 + (-3)^2 + 4^2 + (-4)^2}{4}
= \frac{9+9+16+16}{4} = \frac{50}{4} = 12.5.
\]

Kuadrat sebuah bilangan tidak pernah negatif, sehingga kesalahan tidak dapat saling meniadakan. Rata-rata kesalahan model ini justru cukup besar.

---

# Catatan pengajar

| Soal | Bentuk | Jebakan khas |
|---|---|---|
| 1 | substitusi ke aturan verbal | menjumlahkan dulu: \((12+4)\times7\) |
| 2 | tanda residual | memilih B — mengira residual negatif berarti nilai negatif |
| 3 | MSE tiga titik | lupa mengkuadratkan, atau membagi dengan 2 alih-alih 3 |
| 4 | konstanta terbaik = \(\bar y\) | memilih median (14) atau modus |
| 5 | makna \(\beta\) beserta satuannya | tertukar dengan intersep 2000 |
| 6 | pembatalan tanda | menerima jumlah 0 sebagai bukti model sempurna |

Soal 3 dan Soal 6 sengaja **sepasang**: keduanya memiliki jumlah residual tepat nol. Soal 3 menyelipkannya diam-diam (siswa mungkin tidak sadar), sedangkan Soal 6 menyatakannya terang-terangan sebagai kesimpulan yang salah. Jika siswa mengerjakan Soal 3 tanpa curiga lalu terkejut di Soal 6, mintalah ia kembali menghitung jumlah residual pada Soal 3.

Soal 4 adalah versi latihan dari §8.1: siswa tidak perlu mencoba banyak konstanta, cukup mengenali bahwa jawabannya adalah rata-rata.
