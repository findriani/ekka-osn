# Control Flow dan Operator — Baca Kode 02

Topik 1, membaca kode, tingkat lanjut. Perulangan bersarang, `while`, dan sifat-sifat `//` dan `%` yang tidak selalu sesuai dugaan. Kalau Baca Kode 01 terasa mudah, mulailah dari sini.

## Petunjuk jawaban

Kerjakan **tanpa komputer**, dengan tabel variabel di kertas. Soal-soal di sini dipilih justru karena jawaban "yang kelihatannya masuk akal" sering salah — jadi jangan menebak dari bentuknya, telusuri saja.

Tuliskan jawaban sebagai bilangan bulat, kecuali pada soal pilihan ganda.

## Rumus cepat

- Di Python, `%` selalu mengikuti tanda **pembagi**, bukan tanda yang dibagi. Jadi `-7 % 3` bernilai positif.
- `a // b` membulatkan **ke bawah** (ke arah minus tak hingga), bukan memotong ke arah nol.
- `while` berjalan selama syaratnya masih benar. Kalau tak ada yang mengubah syarat itu, ia tidak pernah berhenti.

## Soal 1 — Jadwal sparring

Empat sasana diundi untuk saling bertanding. Pasangan `(i, j)` hanya dicatat kalau `i` lebih kecil dari `j`, supaya pertandingan yang sama tidak tercatat dua kali. Bayangkan tabel pasangan nomor sasana, lalu hitung hanya kotak yang memenuhi syarat itu.

<pre class="code">n = 0
for i in range(3):
    for j in range(3):
        if i &lt; j:
            n += 1
print(n)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 2 — Lama perjalanan

Sebuah bus menempuh 3.725 detik perjalanan, yaitu tiga ribu tujuh ratus dua puluh lima detik. Kode ini memecahnya menjadi jam dan menit, lalu menggabungkannya menjadi satu bilangan seperti penulisan waktu `jammenit`.

<pre class="code">detik = 3725
jam = detik // 3600
sisa = detik % 3600
menit = sisa // 60
print(jam * 100 + menit)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 3 — Utang arisan

Bu Rina mencatat utang sebagai bilangan negatif. Ia mengira `-7 % 3` akan bernilai `-1`, seperti di kalkulatornya. Namun, aturan sisa pembagian Python berbeda; gunakan aturan Python yang tertulis pada Rumus cepat.

<pre class="code">print(-7 % 3)</pre>

Apa yang sebenarnya dicetak Python?

- **A.** `-1`
- **B.** `1`
- **C.** `2`
- **D.** `-2`

**Jawaban:** `_____`

---

## Soal 4 — Permainan tebak angka

Aturannya: kalau angkanya genap, bagi dua. Kalau ganjil, kalikan tiga lalu tambah satu. Ulangi sampai angkanya menjadi 1. Mulailah dari 6 dan catat perubahan nilai `n` satu per satu sebelum menghitung banyak langkahnya.

<pre class="code">n = 6
langkah = 0
while n != 1:
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3 * n + 1
    langkah += 1
print(langkah)</pre>

Berapa langkah yang dicetak?

**Jawaban:** `_____`

---

## Soal 5 — Menghitung yang ganjil

Fungsi ini seharusnya menghitung berapa bilangan ganjil dari 1 sampai `n`, termasuk `n` sendiri. Untuk `hitung_ganjil(5)` jawabannya seharusnya `3` — yaitu 1, 3, dan 5 — tetapi kode ini memberi `2`. Periksa batas akhir pada `range`: apakah nilai `n` benar-benar ikut dikunjungi?

<pre class="code">1  def hitung_ganjil(n):
2      count = 0
3      for i in range(1, n):
4          if i % 2 == 1:
5              count += 1
6      return count</pre>

Baris nomor berapa yang harus diperbaiki?

**Jawaban:** `_____`

---

## Soal 6 — Saldo e-wallet

Aplikasi menolak transaksi yang akan membuat saldo menjadi minus, lalu lanjut ke transaksi berikutnya. Proses transaksi berlangsung sesuai urutan di dalam list; transaksi yang ditolak tidak mengubah saldo sama sekali.

<pre class="code">saldo = 100000
for transaksi in [-30000, -50000, -40000, 20000]:
    if saldo + transaksi &lt; 0:
        continue
    saldo += transaksi
print(saldo)</pre>

Berapa saldo akhir yang dicetak?

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: 3**

`i` dan `j` sama-sama berjalan dari 0 sampai 2, jadi ada sembilan pasangan. Yang memenuhi `i < j` hanya:

| pasangan | `i < j`? |
|---|---|
| (0,1) | ya |
| (0,2) | ya |
| (1,2) | ya |

Tiga pasangan. Yang lain gagal karena `i` sama dengan `j` (tiga pasangan) atau `i` lebih besar (tiga pasangan) — 3 + 3 + 3 = 9, cocok.

Pola ini muncul lagi nanti di topik grid: dua perulangan bersarang, dengan satu syarat yang menyaring hasilnya. Kalau ragu, gambar saja tabel 3×3 dan centang kotaknya.

## Soal 2

**Jawaban: 102**

Langkah demi langkah:

- `jam = 3725 // 3600` = **1** (satu jam penuh)
- `sisa = 3725 % 3600` = **125** detik
- `menit = 125 // 60` = **2** (dua menit penuh, sisa 5 detik dibuang)
- `1 * 100 + 2` = **102**

Pasangan `//` dan `%` bekerja bersama: `//` memberi "berapa kali muat", `%` memberi "berapa yang tersisa". Hampir setiap konversi satuan berbentuk seperti ini.

Jebakan yang biasa: menghitung `menit = 3725 // 60` = 62, lalu lupa bahwa 60 menit di antaranya sudah dihitung sebagai satu jam.

## Soal 3

**Jawaban: C**

Python mencetak **2**.

Di Python, hasil `%` selalu **mengikuti tanda pembaginya**. Pembaginya 3 (positif), jadi hasilnya pasti 0, 1, atau 2 — tidak pernah negatif. Bahasa lain seperti C dan Java memberi `-1` di sini, dan kalkulator biasanya juga.

Alasannya konsisten dengan `//`, yang membulatkan **ke bawah**: `-7 // 3` bernilai `-3` (bukan `-2`), dan `-3 * 3 + 2 = -7` benar. Kedua operator itu selalu cocok satu sama lain.

Akibat praktisnya menyenangkan: `n % 2 == 0` tetap benar untuk bilangan negatif. `-4 % 2` bernilai 0, jadi kamu tidak perlu memberi perlakuan khusus untuk bilangan minus saat memeriksa genap-ganjil.

## Soal 4

**Jawaban: 8**

| langkah | `n` sebelum | aturan | `n` sesudah |
|---|---|---|---|
| 1 | 6 | genap → bagi 2 | 3 |
| 2 | 3 | ganjil → 3n+1 | 10 |
| 3 | 10 | genap → bagi 2 | 5 |
| 4 | 5 | ganjil → 3n+1 | 16 |
| 5 | 16 | genap → bagi 2 | 8 |
| 6 | 8 | genap → bagi 2 | 4 |
| 7 | 4 | genap → bagi 2 | 2 |
| 8 | 2 | genap → bagi 2 | 1 |

Setelah `n` menjadi 1, syarat `n != 1` gagal dan perulangan berhenti. Delapan langkah.

Dua kesalahan yang biasa: menghitung keadaan awal sebagai satu langkah (memberi 9), atau berhenti di 2 (memberi 7). `langkah += 1` ada **di dalam** perulangan dan **setelah** perubahan, jadi yang dihitung adalah banyaknya perubahan.

## Soal 5

**Jawaban: 3**

`range(1, n)` berhenti **sebelum** `n`, jadi untuk `n = 5` isinya hanya 1, 2, 3, 4 — angka 5 tidak pernah ikut diperiksa. Yang ganjil tinggal 1 dan 3, sehingga hasilnya 2.

Perbaikannya: `range(1, n + 1)`.

Soalnya bilang "termasuk `n` sendiri", dan di situlah letak petunjuknya. Setiap kali sebuah soal mengatakan "sampai N, termasuk N", hampir pasti kamu butuh `n + 1` di dalam `range`.

## Soal 6

**Jawaban: 40000**

| transaksi | `saldo + transaksi` | minus? | `saldo` |
|---|---|---|---|
| -30000 | 70000 | tidak | 70000 |
| -50000 | 20000 | tidak | 20000 |
| -40000 | **-20000** | ya → `continue` | 20000 (tetap) |
| +20000 | 40000 | tidak | 40000 |

Transaksi ketiga ditolak, jadi `saldo += transaksi` tidak pernah dijalankan untuk baris itu — dan yang penting, perulangannya **tetap lanjut**. Kalau `continue` diganti `break`, transaksi keempat tidak akan diproses dan hasilnya 20000.

Perhatikan syaratnya memeriksa `saldo + transaksi`, bukan `saldo`. Memeriksa akibat sebelum melakukannya adalah pola yang akan kamu pakai lagi di topik grid, saat memeriksa batas sebelum melangkah.

# Catatan pengajar

## Peta soal

| Soal | Bentuk | Keterampilan | Jebakan |
|---|---|---|---|
| 1 | hitung | perulangan bersarang + syarat | mengira 9, lupa menyaring |
| 2 | lacak | `//` dan `%` berpasangan | menghitung menit dari total detik |
| 3 | pilihan ganda | `%` pada bilangan negatif | mengira hasilnya `-1` seperti di C |
| 4 | lacak | `while` | meleset satu di titik berhenti |
| 5 | cari baris salah | batas `range` | `range(1, n)` tidak memuat `n` |
| 6 | lacak | `continue` di dalam syarat | mengira `continue` = `break` |

## Cara membaca hasilnya

- **Salah di 3** → bagus, memang itu tujuannya. Ini perilaku khas Python yang tidak bisa ditebak dari pengalaman kalkulator. Sekali tahu, selamanya tahu. Bonusnya: dia jadi mengerti kenapa `n % 2 == 0` aman untuk bilangan negatif.
- **Salah di 2 dan 5** → keduanya soal batas. Ini pola, bukan kebetulan; dia cenderung asal pakai `range` tanpa memeriksa ujungnya.
- **Salah di 4** → periksa apakah dia meleset **satu** (jawab 7 atau 9). Kalau ya, itu soal kebiasaan menelusuri, bukan soal `while`.
- **Salah di 1** → topik grid nanti akan terasa berat. Perulangan bersarang harus otomatis dulu.

## Hubungan dengan seleksi

Soal 1 adalah bentuk mini dari menghitung pasangan; soal 2 adalah bentuk mini dari setiap konversi satuan; soal 6 adalah bentuk mini dari pemeriksaan batas di soal grid. Tidak ada satu pun soal Python di arsip 2025 yang bisa dikerjakan tanpa ketiga kebiasaan ini.
