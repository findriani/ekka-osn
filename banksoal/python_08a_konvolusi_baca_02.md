# Konvolusi — Baca Kode 02

Topik 8, membaca kode, tingkat lanjut. Rumus ukuran yang sama, dipakai untuk hal yang lebih besar: merantai beberapa lapisan, menghitung ukuran pooling, dan memisahkan tinggi dari lebar saat keduanya berbeda. Ditambah dua hal baru — menghitung **parameter** sebuah lapisan (jangan lupa bias) dan **operasi konvolusi** itu sendiri, yang ternyata cuma perkalian titik antara kernel dan sepetak masukan.

## Petunjuk jawaban

Kerjakan **tanpa komputer**. Untuk soal rantai, hitung lapisan satu per satu; keluaran satu lapisan menjadi masukan berikutnya. Untuk parameter, hitung bobot dulu, lalu tambahkan bias.

Tuliskan jawaban sebagai bilangan bulat, kecuali pada soal pilihan ganda.

## Rumus cepat

- Ukuran keluaran: `(n - k + 2*p) // s + 1`. Padding `2*p`, pakai `//`.
- Rantai: hitung lapisan secara berurutan; ukuran keluaran satu lapisan menjadi ukuran masukan lapisan berikutnya.
- Pooling `k×k` stride `s` memakai rumus yang sama (tanpa padding, `p = 0`).
- Parameter satu lapisan: `bobot = kanal_masuk * kanal_keluar * kt * kl`, `bias = kanal_keluar`, `total = bobot + bias`.
- Nilai konvolusi di satu posisi: jumlahkan `patch[r][c] * kernel[r][c]` — perkalian titik.

## Soal 1 — Padding dua

Masukan 30, kernel 5, stride 1, padding 2.

<pre class="code">def ukuran_keluar(n, k, s, p):
    return (n - k + 2 * p) // s + 1

print(ukuran_keluar(30, 5, 1, 2))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 2 — Dua lapisan berantai

Masukan 32. Lapisan pertama: kernel 3, stride 1, padding 1. Lapisan kedua: kernel 3, stride 2, padding 1. Keluaran lapisan pertama menjadi masukan lapisan kedua.

<pre class="code">def ukuran_keluar(n, k, s, p):
    return (n - k + 2 * p) // s + 1

n = 32
n = ukuran_keluar(n, 3, 1, 1)
n = ukuran_keluar(n, 3, 2, 1)
print(n)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 3 — Berapa parameter

Sebuah lapisan konvolusi punya 3 kanal masuk, 16 kanal keluar, dan kernel 3×3. Ingat tiap kanal keluaran punya satu bias tersendiri.

Berapa jumlah parameter lapisan ini, termasuk bias?

- **A.** 432
- **B.** 448
- **C.** 144
- **D.** 464

**Jawaban:** `_____`

---

## Soal 4 — Tinggi dari masukan tidak persegi

Masukan 2D berukuran 10×20 (tinggi × lebar). Kernel 3×5, stride 1, tanpa padding. Tinggi keluaran dihitung dari tinggi masukan dan tinggi kernel.

<pre class="code">def ukuran_keluar(n, k, s, p):
    return (n - k + 2 * p) // s + 1

tinggi = ukuran_keluar(10, 3, 1, 0)
lebar = ukuran_keluar(20, 5, 1, 0)
print(tinggi)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 5 — Ukuran setelah pooling

Max pooling 2×2 dengan stride 2 pada peta fitur 28×28. Pooling memakai rumus ukuran yang sama, dengan padding 0.

<pre class="code">def ukuran_keluar(n, k, s, p):
    return (n - k + 2 * p) // s + 1

print(ukuran_keluar(28, 2, 2, 0))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 6 — Nilai konvolusi

Sebuah kernel 2×2 ditempatkan di atas sepetak masukan 2×2. Nilai keluarannya adalah perkalian titik: kalikan tiap entri yang seposisi, lalu jumlahkan.

<pre class="code">patch = [[1, 2], [3, 4]]
kernel = [[1, 0], [0, 1]]
hasil = 0
for r in range(2):
    for c in range(2):
        hasil += patch[r][c] * kernel[r][c]
print(hasil)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: 30**

`(30 - 5 + 2*2) // 1 + 1 = (30 - 5 + 4) // 1 + 1 = 29 + 1 = 30`.

Padding 2 di kedua sisi menambah `2*p = 4`. Kernel 5 memangkas 4, jadi keduanya saling menutup dan ukuran kembali utuh — pola "same" untuk kernel 5 adalah padding 2, karena `(5-1)//2 = 2`. Jebakan yang paling sering: menuliskan `+ 2` (padding sekali) alih-alih `+ 4`, sehingga jawabannya 28.

## Soal 2

**Jawaban: 16**

Hitung lapisan satu per satu:

| lapisan | rumus | keluaran |
|---|---|---|
| awal | — | 32 |
| 1: k3 s1 p1 | `(32 - 3 + 2)//1 + 1` | 32 |
| 2: k3 s2 p1 | `(32 - 3 + 2)//2 + 1` | **16** |

Lapisan pertama (kernel 3, stride 1, padding 1) menjaga ukuran di 32. Lapisan kedua punya stride 2, jadi ia kira-kira **memotong ukuran menjadi setengah**: `31 // 2 + 1 = 16`. Inilah pola tumpuk yang lazim — beberapa lapisan penjaga ukuran, sesekali stride 2 untuk menciutkan. Kunci merantai: keluaran satu lapisan **wajib** menjadi masukan berikutnya, bukan 32 terus.

## Soal 3

**Jawaban: B**

Bobot: `3 × 16 × 3 × 3 = 432`. Bias: satu per kanal keluaran = `16`. Total: `432 + 16 = 448`.

| pilihan | dari mana |
|---|---|
| **A.** 432 | bobot saja, **lupa bias** |
| **B.** 448 | 432 + 16 ✓ |
| **C.** 144 | lupa kanal keluar (`3 × 3 × 16`? salah susun) |
| **D.** 464 | menghitung bias 32, bukan 16 |

Jebakan utamanya bias: ia dihitung **satu per kanal keluaran**, bukan satu per lapisan, dan bukan satu per bobot. Jadi 16 kanal keluar → 16 bias. Pilihan A (lupa bias sama sekali) adalah kesalahan paling umum di soal parameter.

## Soal 4

**Jawaban: 8**

Tinggi dihitung dari tinggi: `(10 - 3 + 0) // 1 + 1 = 7 + 1 = 8`.

Lebarnya, dari kernel selebar 5, adalah `(20 - 5) // 1 + 1 = 16` — dihitung dari lebar. Keluaran 8×16. Karena masukan (10×20) dan kernel (3×5) sama-sama tidak persegi, tinggi dan lebar punya perhitungan sendiri-sendiri. Menukar angka mana masuk ke mana adalah kesalahan klasik: pastikan tinggi selalu bertemu tinggi, lebar bertemu lebar.

## Soal 5

**Jawaban: 14**

`(28 - 2 + 0) // 2 + 1 = 26 // 2 + 1 = 13 + 1 = 14`.

Pooling 2×2 stride 2 memakai rumus yang sama dengan konvolusi, hanya tanpa parameter yang dipelajari — ia cuma meringkas tiap jendela 2×2 menjadi satu angka (maksimum atau rata-rata). Stride 2 dengan kernel 2 memotong ukuran menjadi tepat setengah: 28 → 14. Inilah kenapa pooling adalah cara umum menciutkan peta fitur separuh demi separuh.

## Soal 6

**Jawaban: 5**

Kalikan tiap entri yang seposisi, lalu jumlahkan:

| posisi | `patch` | `kernel` | hasil kali |
|---|---|---|---|
| (0,0) | 1 | 1 | 1 |
| (0,1) | 2 | 0 | 0 |
| (1,0) | 3 | 0 | 0 |
| (1,1) | 4 | 1 | 4 |

1 + 0 + 0 + 4 = **5**.

Inilah operasi konvolusi di **satu** posisi — perkalian titik antara kernel dan sepetak masukan, persis seperti perkalian titik vektor di Topik 5, hanya diatur dalam grid. Kernel ini (diagonal 1, sisanya 0) menjumlahkan diagonal petak. Menggeser kernel ini ke seluruh masukan, mengulang perhitungan yang sama di tiap posisi, menghasilkan satu peta fitur utuh — itulah yang kamu bangun di Tulis Kode 03.

# Catatan pengajar

## Peta soal

| Soal | Bentuk | Keterampilan | Jebakan |
|---|---|---|---|
| 1 | lacak | padding `2*p` | menuliskan `p` sekali |
| 2 | lacak | merantai lapisan | tidak mengalirkan ukuran |
| 3 | pilihan ganda | parameter + bias | lupa bias / salah hitung bias |
| 4 | lacak | tinggi/lebar terpisah | menukar tinggi dan lebar |
| 5 | lacak | ukuran pooling | mengira pooling beda rumus |
| 6 | lacak | nilai konvolusi (titik) | — |

Soal 3 adalah yang paling khas topik ini: hampir semua orang menjawab 432 karena lupa bias. Soal 2 dan 5 menegaskan bahwa merantai dan pooling memakai rumus yang sama, cuma dipakai berulang. Soal 6 memperkenalkan operasi sebenarnya, yang menjadi inti Tulis Kode.

## Cara membaca hasilnya

- **Soal 1 menjawab 28** → padding ditulis sekali. Sama dengan jebakan Baca Kode 01 Soal 2.
- **Soal 2 menjawab 32** → dia tidak mengalirkan ukuran; menghitung lapisan kedua dari 32, bukan dari keluaran lapisan pertama. Di sini kebetulan sama (32), tetapi tegaskan alurnya.
- **Soal 3 menjawab 432** → lupa bias. Jebakan paling umum; tekankan "satu bias per kanal keluaran".
- **Soal 4 menjawab 16** → dia menghitung lebar, bukan tinggi. Latih memisahkan.
- **Benar semua** → dia menguasai aritmetika CNN yang diuji di Soal 22–25. Langsung Tulis Kode 01.

## Hubungan dengan seleksi

Soal 1–5 adalah persis kerangka Soal 22–25 seleksi 2025: diberi ukuran masukan dan susunan lapisan, hitung ukuran keluaran dan jumlah parameter. Empat jebakan (padding dua kali, `//`, tinggi/lebar, bias) adalah empat cara jawaban ditolak walau "hampir benar". Soal 6 menjembatani ke operasi sebenarnya, yang jarang diminta di seleksi tetapi menjelaskan dari mana rumus ukuran itu berasal.
