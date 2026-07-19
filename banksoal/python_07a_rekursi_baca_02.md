# Rekursi — Baca Kode 02

Topik 7, membaca kode, tingkat lanjut. Sekarang kita membahas tiga sumber kesalahan utama: argumen yang tidak pernah mengecil sehingga rekursi tidak berhenti, perbedaan antara pekerjaan yang dilakukan sebelum dan sesudah panggilan rekursif, serta jumlah pemanggilan yang bertambah sangat cepat ketika satu fungsi memanggil dirinya lebih dari sekali. Bagian terakhir memperkenalkan dua pola rekursif klasik, yaitu pangkat dan FPB, yang sering digunakan dalam soal pemrograman.

## Petunjuk jawaban

Kerjakan **tanpa komputer**. Untuk soal urutan cetak, tulis "turun" (panggilan) dan "naik" (kembali) sebagai dua kolom, lalu tandai di titik mana `print` terjadi.

Tuliskan jawaban sebagai bilangan bulat, kecuali pada soal pilihan ganda.

## Rumus cepat

- Tiap panggilan rekursif harus **mengecil** menuju kasus dasar. `f(n)` yang memanggil `f(n)` tak pernah berhenti.
- `print` **sebelum** panggilan → tercetak saat turun. `print` **sesudah** → tercetak saat naik (urutan terbalik).
- Fibonacci rekursif sederhana memanggil dirinya dua kali pada banyak langkah, sehingga jumlah pemanggilannya bertambah sangat cepat.
- Pangkat: `pangkat(a, n) = a * pangkat(a, n-1)`, dasar `pangkat(a, 0) = 1`.
- FPB (Euclid): `fpb(a, b) = fpb(b, a % b)`, dasar `fpb(a, 0) = a`.

## Soal 1 — Tak pernah mengecil

Fungsi ini punya kasus dasar, tetapi tetap tidak pernah berhenti. Perhatikan argumen pada panggilan rekursifnya.

<pre class="code">1  def jumlah_sampai(n):
2      if n == 0:
3          return 0
4      return n + jumlah_sampai(n)</pre>

Baris nomor berapa yang membuat rekursi ini tidak pernah mencapai kasus dasar?

**Jawaban:** `_____`

---

## Soal 2 — Fibonacci lagi

<pre class="code">def fib(n):
    if n &lt; 2:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(7))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 3 — Berapa kali dipanggil

Fibonacci rekursif sederhana menghitung angka yang sama berulang kali. Untuk menghitung `fib(4)`, gambar pohon panggilannya dan hitung **semua** simpulnya, termasuk `fib(4)` sendiri.

<pre class="code">def fib(n):
    if n &lt; 2:
        return n
    return fib(n - 1) + fib(n - 2)</pre>

Berapa kali `fib` dipanggil seluruhnya saat menghitung `fib(4)`?

- **A.** 4
- **B.** 5
- **C.** 8
- **D.** 9

**Jawaban:** `_____`

---

## Soal 4 — Pangkat

Fungsi ini menghitung `a` pangkat `n` dengan mengalikan `a` sebanyak `n` kali.

<pre class="code">def pangkat(a, n):
    if n == 0:
        return 1
    return a * pangkat(a, n - 1)

print(pangkat(2, 5))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 5 — Cetak saat naik

Perhatikan letak `print`: ia berada **setelah** panggilan rekursif, jadi baru berjalan saat panggilan kembali naik.

<pre class="code">def turun_naik(n):
    if n == 0:
        return
    turun_naik(n - 1)
    print(n)

turun_naik(3)</pre>

Angka **pertama** yang dicetak adalah?

**Jawaban:** `_____`

---

## Soal 6 — FPB

Algoritma Euclid: FPB dua bilangan sama dengan FPB dari bilangan kedua dan sisa bagi keduanya, berhenti saat bilangan kedua nol.

<pre class="code">def fpb(a, b):
    if b == 0:
        return a
    return fpb(b, a % b)

print(fpb(18, 12))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: 4**

Baris 4 memanggil `jumlah_sampai(n)` — dengan `n` yang **sama**, bukan `n - 1`. Karena argumennya tidak pernah mengecil, kasus dasar `n == 0` tidak pernah tercapai (kecuali `n` sudah 0 sejak awal), dan rekursi berlanjut sampai `RecursionError`.

Kasus dasar di baris 2–3 tidak salah; masalahnya panggilan di baris 4 tidak bergerak menujunya. Ini jebakan yang lebih halus daripada "lupa kasus dasar": kasus dasarnya ada, tetapi tak terjangkau. Aturannya tetap sama — **tiap panggilan wajib mengecil**. Perbaikannya cuma satu huruf: `jumlah_sampai(n - 1)`.

## Soal 2

**Jawaban: 13**

Lanjutkan barisan Fibonacci satu langkah dari soal sebelumnya:

| n | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| `fib(n)` | 0 | 1 | 1 | 2 | 3 | 5 | 8 | **13** |

`fib(7) = fib(6) + fib(5) = 8 + 5 = 13`.

## Soal 3

**Jawaban: D**

Gambar pohon panggilannya dan hitung tiap simpul:

<pre class="code">fib(4)
  fib(3)
    fib(2)
      fib(1)
      fib(0)
    fib(1)
  fib(2)
    fib(1)
    fib(0)</pre>

Hitung: `fib(4)`, `fib(3)`, dua `fib(2)`, tiga `fib(1)`, dua `fib(0)` = 1 + 1 + 2 + 3 + 2 = **9** panggilan.

Inilah sebabnya Fibonacci rekursif sederhana lambat: `fib(2)` dihitung dua kali dan `fib(1)` tiga kali. Untuk `fib(4)` hanya ada 9 panggilan, tetapi jumlahnya bertambah sangat cepat ketika `n` membesar — `fib(20)` membutuhkan belasan ribu panggilan. Dalam seleksi, perbedaan ini dapat menentukan apakah program selesai tepat waktu. Cara mempercepatnya adalah menyimpan hasil yang sudah pernah dihitung; sebelum mempelajari teknik itu, pahami dulu sumber pengulangan melalui pohon panggilan ini.

## Soal 4

**Jawaban: 32**

Tiap panggilan mengalikan satu `a` lalu mengecilkan `n`:

| panggilan | mengembalikan |
|---|---|
| `pangkat(2, 0)` | 1 |
| `pangkat(2, 1)` | 2 × 1 = 2 |
| `pangkat(2, 2)` | 2 × 2 = 4 |
| `pangkat(2, 3)` | 2 × 4 = 8 |
| `pangkat(2, 4)` | 2 × 8 = 16 |
| `pangkat(2, 5)` | 2 × 16 = **32** |

Bentuknya sama persis dengan faktorial, hanya "kalikan `n`" diganti "kalikan `a`". Kasus dasar `n == 0` mengembalikan 1 karena apa pun pangkat nol adalah 1 — dan karena 1 adalah titik awal yang aman untuk perkalian.

## Soal 5

**Jawaban: 1**

`print(n)` ada **setelah** `turun_naik(n - 1)`, jadi tiap panggilan turun dulu sampai dasar sebelum ada yang tercetak.

Telusuri: `turun_naik(3)` memanggil `turun_naik(2)` memanggil `turun_naik(1)` memanggil `turun_naik(0)` — yang langsung kembali tanpa mencetak. Baru setelah itu cetakan terjadi saat naik: `print(1)`, lalu `print(2)`, lalu `print(3)`.

Jadi urutan cetaknya **1, 2, 3**, dan yang pertama adalah **1** — walaupun fungsinya "menghitung mundur". Ini jebakan urutan yang penting: `print` sebelum panggilan mencetak 3, 2, 1; `print` sesudah panggilan mencetak 1, 2, 3. Meletakkan satu baris di atas atau di bawah panggilan rekursif membalik seluruh urutannya.

## Soal 6

**Jawaban: 6**

Terapkan Euclid, tiap langkah mengganti `(a, b)` dengan `(b, a % b)`:

| panggilan | `a % b` |
|---|---|
| `fpb(18, 12)` | 18 % 12 = 6 |
| `fpb(12, 6)` | 12 % 6 = 0 |
| `fpb(6, 0)` | — (kasus dasar) |

Saat `b` mencapai 0, jawabannya adalah `a` yang tersisa: **6**.

Perhatikan `18 % 12` memberi sisa 6, dan `12 % 6` memberi 0. Begitu sisanya 0, bilangan pertama saat itu adalah FPB-nya. Ini salah satu rekursi terpendek yang berguna: dua baris, dan ia menyusut cepat karena `a % b` selalu lebih kecil dari `b`.

# Catatan pengajar

## Peta soal

| Soal | Bentuk | Keterampilan | Jebakan |
|---|---|---|---|
| 1 | cari baris salah | panggilan harus mengecil | kasus dasar ada tapi tak terjangkau |
| 2 | lacak | barisan Fibonacci | — |
| 3 | pilihan ganda | pohon panggilan meledak | mengira `fib` dipanggil sekali per angka |
| 4 | lacak | pangkat rekursif | — |
| 5 | lacak | urutan cetak (naik vs turun) | mengira mencetak 3 dulu |
| 6 | lacak | FPB / Euclid | — |

Soal 1, 3, dan 5 adalah tiga jebakan yang sebenarnya. Soal 1: mengecil, bukan sekadar punya kasus dasar. Soal 3: panggilan berganda itu mahal. Soal 5: letak `print` menentukan urutan. Ketiganya tidak terlihat dari membaca sepintas — hanya menelusuri panggilan satu per satu yang memperlihatkannya.

## Cara membaca hasilnya

- **Salah di 1, menunjuk baris 2** → dia mengira kasus dasarnya yang salah. Tegaskan: kasus dasarnya benar, panggilan di baris 4 yang tak pernah menujunya.
- **Menjawab 4 atau 5 di soal 3** → dia mengira `fib` dipanggil sekali per angka. Suruh dia gambar pohonnya; melihat `fib(2)` muncul dua kali adalah momen kuncinya.
- **Menjawab 3 di soal 5** → dia mengira `print` berjalan saat turun. Ini pelajaran urutan yang paling sering menentukan soal cetak; latih dengan memindahkan `print` ke atas panggilan dan bandingkan.
- **Benar semua** → dia siap menulis rekursi sendiri. Langsung Tulis Kode 01.

## Hubungan dengan seleksi

Pangkat dan FPB (Soal 4, 6) adalah dua algoritma rekursif baku yang muncul apa adanya. Soal 3 (panggilan berganda) adalah alasan jawaban rekursif kadang menggantung di soal grid besar — dan mengapa menghitung lintasan sering lebih baik dengan pemrograman dinamis (Topik 6). Soal 5 (urutan) penting begitu rekursi mulai mencetak atau mengumpulkan lintasan, seperti pada soal menghitung kata di Tulis Kode 03.
