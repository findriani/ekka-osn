# Konvolusi — Baca Kode 01

Topik 8, membaca kode. Sebuah lapisan konvolusi menggeser **kernel** kecil ke seluruh masukan; di tiap posisi ia mengalikan dan menjumlahkan, menghasilkan satu angka. Yang paling sering diuji di seleksi (Soal 22–25) bukan operasinya, tetapi **ukuran keluarannya**: berapa besar hasil sebuah lapisan, diberi ukuran masukan, kernel, stride, dan padding. Set ini melatih rumus itu — mudah, tetapi penuh jebakan kecil.

## Petunjuk jawaban

Kerjakan **tanpa komputer**. Untuk tiap soal ukuran, tulis dulu keempat angka `n, k, s, p`, masukkan ke rumus, dan ingat padding dihitung **dua kali** (kiri dan kanan).

Tuliskan jawaban sebagai bilangan bulat, kecuali pada soal pilihan ganda.

## Rumus cepat

- Ukuran keluaran satu sisi: `(n - k + 2*p) // s + 1`.
  - `n` = ukuran masukan · `k` = ukuran kernel · `s` = stride · `p` = padding satu sisi.
- Padding `p` ditambahkan di **kedua** sisi, jadi yang masuk rumus `2*p`.
- Pakai `//` (bagi bulat), bukan `/` — ukuran harus bilangan bulat.
- Untuk stride 1 dan kernel ganjil, `p = (k-1)//2` mempertahankan ukuran.
- Masukan 2D: tinggi dihitung dari tinggi, lebar dari lebar — pisahkan.

## Soal 1 — Tanpa padding

Kernel 3, stride 1, tanpa padding, pada masukan berukuran 28.

<pre class="code">def ukuran_keluar(n, k, s, p):
    return (n - k + 2 * p) // s + 1

print(ukuran_keluar(28, 3, 1, 0))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 2 — Padding menjaga ukuran

Sekarang dengan padding 1. Perhatikan padding masuk sebagai `2*p`.

<pre class="code">def ukuran_keluar(n, k, s, p):
    return (n - k + 2 * p) // s + 1

print(ukuran_keluar(32, 3, 1, 1))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 3 — Padding berapa

Masukan berukuran 10, kernel 3, stride 1. Kita ingin keluaran tetap **10**. Ingat bahwa untuk stride 1 dan kernel ganjil, padding yang menjaga ukuran adalah `(k-1)//2`.

Padding `p` berapa yang membuat `ukuran_keluar(10, 3, 1, p)` bernilai 10?

- **A.** 0
- **B.** 1
- **C.** 2
- **D.** 3

**Jawaban:** `_____`

---

## Soal 4 — Stride tidak membagi habis

Kernel 3, stride 2, tanpa padding, pada masukan 10. Di sinilah `//` penting: hasil pembagiannya tidak bulat, dan dibulatkan ke bawah.

<pre class="code">def ukuran_keluar(n, k, s, p):
    return (n - k + 2 * p) // s + 1

print(ukuran_keluar(10, 3, 2, 0))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 5 — Kernel sebesar masukan

Kernel 7 pada masukan 7, stride 1, tanpa padding — kernel menutupi seluruh masukan sekaligus.

<pre class="code">def ukuran_keluar(n, k, s, p):
    return (n - k + 2 * p) // s + 1

print(ukuran_keluar(7, 7, 1, 0))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 6 — Tinggi keluaran

Masukan 2D berukuran 28×28. Kernelnya **tidak** persegi: tinggi 5, lebar 1. Tinggi keluaran dihitung dari tinggi masukan dan tinggi kernel saja.

<pre class="code">def ukuran_keluar(n, k, s, p):
    return (n - k + 2 * p) // s + 1

tinggi = ukuran_keluar(28, 5, 1, 0)
lebar = ukuran_keluar(28, 1, 1, 0)
print(tinggi)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: 26**

`(28 - 3 + 2*0) // 1 + 1 = 25 // 1 + 1 = 25 + 1 = 26`.

Tanpa padding dan stride 1, keluaran selalu `n - k + 1`. Kernel 3 memangkas 2 dari tiap sisi lebar informasi (satu di kiri, satu di kanan tak punya tetangga lengkap), jadi 28 menjadi 26. Ini kasus paling dasar; hafalkan bentuknya sebagai titik acuan.

## Soal 2

**Jawaban: 32**

`(32 - 3 + 2*1) // 1 + 1 = 31 // 1 + 1 = 32`.

Padding 1 menambah satu piksel di **tiap** sisi, jadi `2*p = 2` masuk rumus. Hasilnya kembali ke 32 — ukuran masukan utuh. Inilah pola "same" yang sangat sering dipakai: kernel 3, stride 1, padding 1 mempertahankan ukuran, sehingga lapisan bisa ditumpuk tanpa gambar menyusut. Jebakan paling umum: menuliskan `p` sekali (jadi 31 → keluaran 31), lupa padding dihitung dua kali.

## Soal 3

**Jawaban: B**

Coba `p = 1`: `(10 - 3 + 2*1) // 1 + 1 = 9 // 1 + 1 = 10`. Tepat 10. ✓

| p | `(10 - 3 + 2p)//1 + 1` |
|---|---|
| **A.** 0 | 8 |
| **B.** 1 | **10** ✓ |
| **C.** 2 | 12 |
| **D.** 3 | 14 |

Untuk stride 1 dan kernel ganjil `k`, padding `p = (k-1)//2` selalu menjaga ukuran. Di sini `(3-1)//2 = 1`. Padding lebih besar justru **memperbesar** keluaran, karena rumusnya menambah `2*p`. Ingat: "same" bukan sihir, cuma padding yang pas.

## Soal 4

**Jawaban: 4**

`(10 - 3 + 2*0) // 2 + 1 = 7 // 2 + 1 = 3 + 1 = 4`.

Di sinilah `//` menentukan. `7 // 2` adalah 3 (dibuang ke bawah), bukan 3.5. Kalau kamu memakai `/`, hasilnya 4.5 — bukan ukuran yang sah. Stride 2 berarti kernel melompati satu posisi tiap langkah, dan saat lompatannya tidak membagi habis, posisi terakhir yang tak muat sekadar diabaikan. `//` menangkap "diabaikan" itu dengan benar.

## Soal 5

**Jawaban: 1**

`(7 - 7 + 2*0) // 1 + 1 = 0 // 1 + 1 = 0 + 1 = 1`.

Saat kernel sebesar masukan, cuma ada **satu** posisi: kernel menutupi semuanya sekaligus, tanpa ruang menggeser. Hasilnya satu angka — keluaran 1×1. Ini yang terjadi di ujung banyak jaringan, tempat peta fitur diciutkan menjadi satu nilai per kanal sebelum keputusan akhir.

## Soal 6

**Jawaban: 24**

Tinggi keluaran dihitung dari tinggi saja: `(28 - 5 + 0) // 1 + 1 = 23 + 1 = 24`.

Lebarnya, dari kernel selebar 1, adalah `(28 - 1) // 1 + 1 = 28` — tak berubah. Jadi keluaran 24×28: kernel 5×1 memangkas tinggi tetapi membiarkan lebar utuh. Inilah kenapa tinggi dan lebar **harus dihitung terpisah** saat kernel atau masukannya tidak persegi. Menukar keduanya adalah salah satu kesalahan paling sering di Soal 22–25.

# Catatan pengajar

## Peta soal

| Soal | Bentuk | Keterampilan | Jebakan |
|---|---|---|---|
| 1 | lacak | rumus dasar, `n - k + 1` | — |
| 2 | lacak | padding dihitung `2*p` | menuliskan `p` sekali |
| 3 | pilihan ganda | padding "same" | mengira padding besar tetap menjaga ukuran |
| 4 | lacak | `//` saat stride tak membagi habis | memakai `/`, hasil pecahan |
| 5 | lacak | kernel = masukan → 1 | — |
| 6 | lacak | tinggi dan lebar terpisah | menukar tinggi/lebar |

Empat jebakan yang membuat Soal 22–25 meleset semuanya ada di sini: padding dua kali (Soal 2), `//` bukan `/` (Soal 4), padding "same" (Soal 3), dan tinggi/lebar tertukar (Soal 6). Rumusnya sendiri sepele; yang menjatuhkan orang justru keempat hal kecil ini.

## Cara membaca hasilnya

- **Soal 2 menjawab 31** → dia menuliskan `p` sekali, bukan `2*p`. Jebakan nomor satu; tegaskan padding di kedua sisi.
- **Soal 4 menjawab 4.5 atau 5** → dia memakai `/`, bukan `//`. Ukuran harus bulat, dan pembulatannya ke bawah.
- **Soal 3 menjawab C atau D** → dia mengira padding lebih besar lebih baik. Tunjukkan rumusnya menambah `2*p`, jadi padding berlebih memperbesar keluaran.
- **Soal 6 menjawab 28** → dia menghitung dari lebar, bukan tinggi. Latih memisahkan (tinggi, lebar) secara eksplisit.
- **Benar semua** → langsung Baca Kode 02, tempat lapisan dirantai dan parameter dihitung.

## Catatan jujur

Set ini bisa dijawab sempurna dengan menyalin kodenya ke Python. Itu bukan kegagalan desain — set **Tulis Kode** memang mengharapkan dia menjalankan kode. Yang ini melatih menebak lebih dulu, dan hanya jujur di atas kertas atau kalau diawasi.
