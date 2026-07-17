# Control Flow dan Operator — Tulis Kode 03 (Sedang)

Topik 1, menulis kode, tingkat **sedang**. Kalau Tulis Kode 02 semuanya "jalan dari awal sampai akhir, jumlahkan", set ini tentang perulangan yang **berhenti sendiri**, **melompat**, atau **bersarang**. Dua soal di sini adalah kode yang sudah kamu lacak di Baca Kode 02 — sekarang giliranmu yang menulisnya.

## Petunjuk jawaban

Bacalah cerita pada soal terlebih dahulu. Kalimat yang diawali `Tulis` menjelaskan nama fungsi, masukan, dan nilai yang harus dikembalikan; contoh uji di bawahnya membantumu melihat bentuk jawabannya.

Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**. Nilaimu dihitung per baris uji.

Hati-hati dengan `while`: kalau tidak ada yang mengubah syaratnya, kodemu berputar selamanya. Halaman ini akan menghentikannya setelah 5 detik dan memberitahumu — tidak apa-apa, itu bagian dari belajar.

Hanya Python standar, **tanpa NumPy**.

## Rumus cepat

- `range(a, b, s)` mulai dari `a`, melompat `s`, berhenti **sebelum** `b`.
- `return` di dalam perulangan **langsung** menghentikan seluruh fungsi — cara paling rapi untuk "cari yang pertama".
- Pola `while`: ubah keadaan tiap putaran, sampai syaratnya gagal.
- `n % 10` memberi digit terakhir; `n // 10` membuang digit terakhir.

## Soal 1 — Deret melompat

Petugas memeriksa gerbong secara berselang dan menjumlahkan nomor gerbong yang diperiksa.

Tulis `deret_lompat(a, b, langkah)` yang mengembalikan jumlah dari `a`, melompat sejauh `langkah`, berhenti **sebelum** `b`.

<pre class="starter">def deret_lompat(a, b, langkah):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">deret_lompat(2, 12, 3) == 26
deret_lompat(0, 5, 1) == 10
deret_lompat(1, 10, 4) == 15
deret_lompat(5, 5, 1) == 0</pre>

**Jawaban:** `_____`

---

## Soal 2 — Pasangan piket

Ada `n` siswa bernomor 0 sampai `n-1`. Dua siswa boleh sepiket kalau nomornya **berbeda** dan **jumlah nomornya genap**. Urutan diperhatikan: pasangan (0, 2) dan (2, 0) dihitung dua kali.

Tulis `hitung_pasangan(n)` yang mengembalikan banyaknya pasangan yang boleh.

<pre class="starter">def hitung_pasangan(n):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">hitung_pasangan(4) == 4
hitung_pasangan(3) == 2
hitung_pasangan(2) == 0
hitung_pasangan(1) == 0</pre>

**Jawaban:** `_____`

---

## Soal 3 — Mencari di antrean

Panitia mencari peserta bernomor tertentu di dalam antrean, dan hanya peduli pada yang **pertama** ditemukan.

Tulis `cari_pertama(data, x)` yang mengembalikan **indeks** kemunculan pertama `x` di dalam `data`, atau `-1` kalau tidak ada sama sekali.

<pre class="starter">def cari_pertama(data, x):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">cari_pertama([4, 7, 7, 1], 7) == 1
cari_pertama([5], 5) == 0
cari_pertama([4, 7], 9) == -1
cari_pertama([], 1) == -1</pre>

**Jawaban:** `_____`

---

## Soal 4 — Saldo e-wallet

Aplikasi menolak transaksi yang akan membuat saldo menjadi minus, lalu **lanjut** ke transaksi berikutnya.

Tulis `saldo_akhir(saldo, transaksi)` yang mengembalikan saldo setelah semua transaksi diproses.

<pre class="starter">def saldo_akhir(saldo, transaksi):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">saldo_akhir(100000, [-30000, -50000, -40000, 20000]) == 40000
saldo_akhir(1000, []) == 1000
saldo_akhir(100, [-200]) == 100
saldo_akhir(0, [50, -50]) == 0</pre>

**Jawaban:** `_____`

---

## Soal 5 — Permainan tebak angka

Aturannya: kalau angkanya genap, bagi dua. Kalau ganjil, kalikan tiga lalu tambah satu. Ulangi sampai angkanya menjadi 1.

Tulis `langkah_collatz(n)` yang mengembalikan **berapa langkah** yang dibutuhkan sampai `n` menjadi 1. Kalau `n` sudah 1 sejak awal, jawabannya `0`.

<pre class="starter">def langkah_collatz(n):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">langkah_collatz(6) == 8
langkah_collatz(3) == 7
langkah_collatz(2) == 1
langkah_collatz(1) == 0</pre>

**Jawaban:** `_____`

---

## Soal 6 — Jumlah digit

Petugas loket menjumlahkan angka-angka penyusun nomor antrean untuk mencari kode acak harian.

Tulis `jumlah_digit(n)` yang mengembalikan jumlah semua digit `n`. Contoh: `3725` → 3+7+2+5 = 17. `n` tidak pernah negatif.

<pre class="starter">def jumlah_digit(n):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jumlah_digit(3725) == 17
jumlah_digit(9) == 9
jumlah_digit(100) == 1
jumlah_digit(0) == 0</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def deret_lompat(a, b, langkah):
    total = 0
    for i in range(a, b, langkah):
        total += i
    return total</pre>

Yang perlu disadari: ketiga argumen soal ini **persis** ketiga argumen `range`. Jadi tidak ada yang perlu dihitung sendiri — cukup teruskan.

Versi pendeknya `return sum(range(a, b, langkah))`, dan itu sama benarnya.

Uji `deret_lompat(5, 5, 1) == 0` menangkap kasus kosong: `range(5, 5)` tidak berisi apa-apa, jadi perulangannya tidak jalan dan `total` tetap 0. Benar dengan sendirinya, tanpa `if` khusus — pola yang sama seperti `hitung_turun([])` di set sebelumnya.

Uji `deret_lompat(2, 12, 3)`: isinya 2, 5, 8, 11 (11 + 3 = 14 sudah lewat batas), jumlahnya 26. Ini kode yang kamu lacak di Baca Kode 02, sekarang dari sisi penulis.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def hitung_pasangan(n):
    total = 0
    for i in range(n):
        for j in range(n):
            if i != j and (i + j) % 2 == 0:
                total += 1
    return total</pre>

Perulangan bersarang: untuk **tiap** `i`, jalankan **seluruh** `j`. Hasilnya \(n^2\) pasangan, lalu disaring oleh `if`.

Karena soalnya bilang urutan diperhatikan, kedua perulangan berjalan penuh dari `0` sampai `n-1`. Kalau urutan **tidak** diperhatikan, `j` akan dimulai dari `i + 1` dan hasilnya separuh.

Periksa `hitung_pasangan(4)` dengan tangan:

| pasangan | `i != j` | `(i+j)` genap | ikut? |
|---|---|---|---|
| (0,2) | ya | 2 ya | ✓ |
| (2,0) | ya | 2 ya | ✓ |
| (1,3) | ya | 4 ya | ✓ |
| (3,1) | ya | 4 ya | ✓ |

Empat. Yang lain gagal di salah satu syarat. Uji `hitung_pasangan(2) == 0` menarik: (0,1) dan (1,0) sama-sama berjumlah ganjil, jadi tidak ada pasangan sama sekali walaupun ada dua siswa.

Bentuk `for` di dalam `for` inilah yang nanti menjadi tulang punggung topik Grid.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def cari_pertama(data, x):
    for i in range(len(data)):
        if data[i] == x:
            return i
    return -1</pre>

Dua hal penting.

Pertama, `return i` **di dalam** perulangan. Begitu ketemu, fungsinya selesai saat itu juga — tidak perlu `break`, tidak perlu variabel penampung. Itulah sebabnya uji `[4, 7, 7, 1]` menjawab `1` dan bukan `2`: yang pertama menang, lalu berhenti.

Kedua, `return -1` berada **di luar** perulangan, sejajar dengan `for`. Baris itu hanya tercapai kalau perulangan selesai tanpa pernah menemukan apa pun. Kalau kamu menaruhnya di dalam (`else: return -1`), fungsinya menyerah setelah memeriksa satu isi saja.

Uji `[]` gratis: perulangannya tidak jalan, langsung ke `return -1`.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def saldo_akhir(saldo, transaksi):
    for t in transaksi:
        if saldo + t &lt; 0:
            continue
        saldo += t
    return saldo</pre>

Ini kode yang kamu lacak di Baca Kode 02 Soal 6. Perhatikan dua hal.

Syaratnya memeriksa `saldo + t`, bukan `saldo` — kamu memeriksa **akibatnya** sebelum melakukannya. Ini pola yang akan kembali di topik Grid: periksa dulu apakah langkahnya sah, baru melangkah.

Dan `continue`, bukan `break`. Transaksi ketiga ditolak, tetapi yang keempat tetap diproses. Kalau kamu memakai `break`, uji pertama memberi 20000, bukan 40000.

Perhatikan juga bahwa `saldo` adalah parameter yang langsung dipakai sebagai wadah akumulasi. Tidak perlu variabel baru — nilai awalnya sudah diberikan lewat argumen.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def langkah_collatz(n):
    langkah = 0
    while n != 1:
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
        langkah += 1
    return langkah</pre>

`while`, bukan `for`, karena kamu **tidak tahu** berapa putaran yang dibutuhkan sebelum menjalankannya. Itulah bedanya: `for` untuk "sebanyak sekian kali", `while` untuk "sampai sesuatu terjadi".

`langkah += 1` ada di **dalam** `while` dan **setelah** perubahan, jadi yang dihitung adalah banyaknya perubahan. Uji `langkah_collatz(1) == 0` memastikannya: `n` sudah 1, syaratnya langsung gagal, perulangan tidak pernah jalan, jawabannya 0.

Yang wajib diperhatikan: sesuatu **harus** mengubah `n` di setiap putaran, kalau tidak `while n != 1` berputar selamanya. Coba saja hapus baris `n = n // 2` dan jalankan — halaman ini akan menghentikanmu setelah 5 detik. Melihatnya sekali jauh lebih berguna daripada dinasihati.

Pakai `//`, bukan `/`. Dengan `/`, `n` berubah menjadi pecahan (`6/2` = `3.0`), dan walaupun untuk kasus ini masih kebetulan berhasil, kamu sudah kehilangan jaminan bahwa `n` tetap bilangan bulat.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def jumlah_digit(n):
    total = 0
    while n &gt; 0:
        total += n % 10
        n = n // 10
    return total</pre>

Pasangan `%` dan `//` lagi, tetapi kali ini sebagai alat pengupas: `n % 10` mengambil digit terakhir, `n // 10` membuangnya. Ulangi sampai tidak ada yang tersisa.

Untuk 3725:

| `n` | `n % 10` | `total` | `n // 10` |
|---|---|---|---|
| 3725 | 5 | 5 | 372 |
| 372 | 2 | 7 | 37 |
| 37 | 7 | 14 | 3 |
| 3 | 3 | 17 | 0 |

`n` menjadi 0, syarat `n > 0` gagal, selesai. **17**.

Uji `jumlah_digit(0) == 0` gratis lagi: perulangannya tidak pernah jalan. Kalau kamu memakai `while n >= 0`, kodemu berputar selamanya di angka 0 — dan halaman ini akan menghentikanmu.

Ada jalan lain lewat teks: `sum(int(d) for d in str(n))`. Itu juga benar dan lolos semua uji. Tapi versi `%`/`//` lebih layak dikuasai, karena pola "kupas satu bagian, buang, ulangi" muncul di mana-mana — termasuk saat mengubah bilangan ke basis lain.

# Catatan pengajar

## Peta soal

| Soal | Keterampilan | Jebakan yang ditanam |
|---|---|---|
| 1 | `range` bertiga argumen | mengira harus menghitung batas sendiri |
| 2 | perulangan bersarang | mengira urutan tidak diperhatikan (jawab 2) |
| 3 | `return` dari dalam loop | `return -1` masuk ke dalam loop |
| 4 | `continue`, memeriksa akibat | `break` bukan `continue` |
| 5 | `while` | meleset satu; `/` bukan `//`; loop abadi |
| 6 | `%` dan `//` sebagai pengupas | `while n >= 0` → loop abadi |

Soal 4 dan 5 adalah kode yang persis dia lacak di Baca Kode 02 (Soal 6 dan 4). Itu disengaja: melacak dan menulis adalah keterampilan yang berbeda, dan memakai kode yang sama untuk keduanya memperlihatkan jaraknya dengan jujur. Kalau dia bisa melacaknya tapi tidak bisa menulisnya, itu bukan kegagalan — itu justru yang sedang kita ukur.

## Cara membaca hasilnya

- **Soal 3 gagal di uji `[4, 7]` (yang jawabannya -1)** → `return -1` ada di dalam perulangan. Ini kesalahan indentasi, bukan logika, dan dia mungkin tidak melihatnya sendiri. Buka kodenya di `/admin`; masalahnya akan langsung kelihatan.
- **Soal 5 atau 6 kena batas 5 detik** → bagus, biarkan dia yang menemukan sendiri. Pesan "perulangan yang tidak pernah berhenti" sudah cukup jadi petunjuk. Ini satu-satunya kesempatan yang aman untuk membuat loop abadi.
- **Soal 2 menjawab 2 untuk `hitung_pasangan(4)`** → dia menghitung setengah, artinya `j` dimulai dari `i + 1`. Diskusikan kenapa soalnya bilang "urutan diperhatikan"; ini soal membaca soal, bukan soal kode.
- **Soal 1 dijawab `sum(range(a, b, langkah))`** → dia melihat bahwa argumennya sudah cocok. Puji.

## Kalau ketiga set Tulis Kode topik ini lancar

Topik 1 selesai; lanjut ke Topik 2 (List & Penyalinan). Kalau Tulis Kode 01 saja masih tersendat, jangan naik — semua topik berikutnya berdiri di atas `def`, `return`, dan pola akumulasi.
