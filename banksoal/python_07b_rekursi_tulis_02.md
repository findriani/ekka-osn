# Rekursi — Tulis Kode 02 (Sedang)

Topik 7, menulis kode, tingkat **sedang**. Sekarang rekursi bercabang dan berpindah bentuk data: Fibonacci (dua panggilan), membalik string, menjumlahkan digit sebuah angka, mencari maksimum, FPB, dan menjumlahkan list bersarang. Masing-masing memperkenalkan satu cara baru "memperkecil soal" — bukan cuma `n - 1`.

## Petunjuk jawaban

Bacalah cerita pada soal dulu. Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**. Nilaimu dihitung per baris uji.

Perhatikan bentuk yang mengecil di tiap soal: angka (`n - 1`, `n // 10`), string (`teks[1:]`), atau list (`data[1:]`). Kasus dasarnya selalu bentuk terkecil yang jawabannya sudah jelas.

Hanya Python standar, **tanpa NumPy**.

## Rumus cepat

- Fibonacci: dua panggilan, `fib(n-1) + fib(n-2)`, dua kasus dasar (`n < 2`).
- String mengecil dengan `teks[1:]`; kasus dasar `len(teks) <= 1`.
- Digit terakhir angka: `n % 10`; sisanya: `n // 10`.
- Maksimum list: bandingkan `data[0]` dengan maksimum sisanya.
- List bersarang: cek `isinstance(x, list)` untuk memutuskan menyelam atau menjumlah.

## Soal 1 — Fibonacci

Tulis `fib(n)` yang mengembalikan angka Fibonacci ke-`n`, dengan `fib(0) = 0` dan `fib(1) = 1`.

<pre class="starter">def fib(n):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">fib(0) == 0
fib(1) == 1
fib(2) == 1
fib(6) == 8
fib(10) == 55</pre>

**Jawaban:** `_____`

---

## Soal 2 — Membalik string

Tulis `balik(teks)` yang mengembalikan `teks` dengan urutan huruf terbalik, secara rekursif. Jangan pakai `teks[::-1]`.

<pre class="starter">def balik(teks):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">balik("") == ""
balik("a") == "a"
balik("abc") == "cba"
balik("halo") == "olah"</pre>

**Jawaban:** `_____`

---

## Soal 3 — Menjumlahkan digit

Tulis `jumlah_digit(n)` yang mengembalikan jumlah semua digit `n` (bilangan tak negatif), secara rekursif.

<pre class="starter">def jumlah_digit(n):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jumlah_digit(0) == 0
jumlah_digit(5) == 5
jumlah_digit(123) == 6
jumlah_digit(4062) == 12</pre>

**Jawaban:** `_____`

---

## Soal 4 — Maksimum

Tulis `maksimum(data)` yang mengembalikan angka terbesar di `data`, secara rekursif. Dijamin `data` tidak pernah kosong. Jangan pakai `max`.

<pre class="starter">def maksimum(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">maksimum([3]) == 3
maksimum([1, 9, 2]) == 9
maksimum([-5, -2, -8]) == -2</pre>

**Jawaban:** `_____`

---

## Soal 5 — FPB

Tulis `fpb(a, b)` yang mengembalikan faktor persekutuan terbesar `a` dan `b` dengan algoritma Euclid: `fpb(a, b) = fpb(b, a % b)`, berhenti saat `b == 0`.

<pre class="starter">def fpb(a, b):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">fpb(12, 8) == 4
fpb(18, 12) == 6
fpb(7, 1) == 1
fpb(5, 0) == 5</pre>

**Jawaban:** `_____`

---

## Soal 6 — Jumlah list bersarang

Sebuah list bisa berisi angka atau list lain, sedalam apa pun. Tulis `jumlah_bersarang(data)` yang mengembalikan jumlah **semua** angka di dalamnya, secara rekursif.

<pre class="starter">def jumlah_bersarang(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jumlah_bersarang([]) == 0
jumlah_bersarang([1, 2, 3]) == 6
jumlah_bersarang([1, [2, 3]]) == 6
jumlah_bersarang([[1], [2, [3, 4]]]) == 10</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def fib(n):
    if n &lt; 2:
        return n
    return fib(n - 1) + fib(n - 2)</pre>

Kasus dasar `n < 2` menangkap dua angka sekaligus: `fib(0) = 0` dan `fib(1) = 1`. Kasus rekursif menjumlahkan dua langkah ke belakang.

Fibonacci butuh dua kasus dasar karena tiap panggilan menoleh dua angka ke belakang — kalau cuma `n == 0`, `fib(1)` akan mencoba `fib(-1)` dan tak berhenti. Ingat dari Baca Kode 02: versi polos ini memanggil dirinya banyak kali, jadi `fib(30)` sudah lambat. Untuk uji sampai `fib(10)` ini masih cepat.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def balik(teks):
    if len(teks) &lt;= 1:
        return teks
    return balik(teks[1:]) + teks[0]</pre>

Ambil huruf pertama, balik sisanya, lalu **tempel huruf pertama di belakang**. Urutan `balik(teks[1:]) + teks[0]` itulah yang membalik: tiap huruf pertama pindah ke ekor.

Kasus dasar `len(teks) <= 1` menangani string kosong dan satu huruf sekaligus — keduanya sudah "terbalik". Kalau kamu menulis `teks[0] + balik(teks[1:])`, kamu justru mengembalikan string aslinya, tak berubah. Letak `teks[0]` yang membedakannya.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def jumlah_digit(n):
    if n &lt; 10:
        return n
    return n % 10 + jumlah_digit(n // 10)</pre>

`n % 10` mengambil digit terakhir; `n // 10` membuang digit terakhir itu. Jadi tiap panggilan menjumlahkan satu digit dan mengecilkan angkanya. Kasus dasar `n < 10` adalah angka satu digit, yang jumlah digitnya dirinya sendiri.

Perhatikan `%` dan `//` bekerja berpasangan di sini: yang satu mengambil, yang satu membuang. Ini pola membongkar angka digit demi digit, dan `//` (bukan `/`) wajib supaya hasilnya tetap bilangan bulat.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def maksimum(data):
    if len(data) == 1:
        return data[0]
    sisa = maksimum(data[1:])
    return data[0] if data[0] > sisa else sisa</pre>

Kasus dasar: list satu isi, maksimumnya isi itu sendiri. Kasus rekursif: bandingkan isi pertama dengan maksimum sisanya, kembalikan yang lebih besar.

Uji `[-5, -2, -8]` adalah yang penting — kalau kamu memulai perbandingan dari 0 (seperti `terbesar = 0` di soal grid), semua angka negatif akan kalah dan kamu salah menjawab 0. Di sini tidak ada 0 karangan: perbandingannya selalu antara isi yang **ada**, jadi list negatif pun benar.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def fpb(a, b):
    if b == 0:
        return a
    return fpb(b, a % b)</pre>

Euclid: ganti `(a, b)` dengan `(b, a % b)` sampai `b` mencapai 0; jawabannya `a` yang tersisa. Rekursi ini menyusut cepat karena `a % b` selalu lebih kecil dari `b`.

Uji `fpb(5, 0)` langsung mengenai kasus dasar: FPB sebuah angka dengan 0 adalah angka itu sendiri. Perhatikan argumen bertukar tiap panggilan — `b` menjadi `a` yang baru — yang membuat rekursi ini terasa berbeda dari yang lain, tetapi kasus dasarnya tetap sederhana.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def jumlah_bersarang(data):
    if data == []:
        return 0
    kepala = data[0]
    if isinstance(kepala, list):
        return jumlah_bersarang(kepala) + jumlah_bersarang(data[1:])
    return kepala + jumlah_bersarang(data[1:])</pre>

Dua sumber rekursi. Kalau isi pertama sebuah **list**, selami ia (`jumlah_bersarang(kepala)`) lalu lanjutkan ke sisanya. Kalau ia sebuah **angka**, tambahkan langsung lalu lanjutkan ke sisanya. `isinstance(kepala, list)` yang memutuskan mana yang berlaku.

Inilah rekursi yang bercabang mengikuti **bentuk data**, bukan sekadar mengecilkan angka. Pola ini — "kalau list, selami; kalau bukan, olah" — adalah dasar menelusuri struktur bersarang, dan muncul lagi saat menelusuri grid atau pohon di soal seleksi.

# Catatan pengajar

## Peta soal

| Soal | Keterampilan | Jebakan yang ditanam |
|---|---|---|
| 1 | Fibonacci, dua cabang | satu kasus dasar → `fib(-1)` |
| 2 | membalik string | `teks[0] + balik(sisa)` tak mengubah apa-apa |
| 3 | membongkar digit | `/` alih-alih `//` |
| 4 | maksimum rekursif | memulai dari 0, salah untuk negatif |
| 5 | FPB / Euclid | argumen bertukar |
| 6 | list bersarang | lupa menyelami sublist |

Soal 6 adalah yang paling menantang dan paling berharga: ia rekursi yang bercabang mengikuti bentuk data. Kalau dia paham kenapa ada **dua** panggilan `jumlah_bersarang` di sana — satu menyelam, satu melanjutkan — dia siap untuk rekursi grid di Tulis Kode 03.

## Cara membaca hasilnya

- **Soal 1 kena `RecursionError` di `fib(2)`** → kasus dasarnya cuma `n == 0`. Tegaskan perlu `n < 2` untuk menangkap `fib(1)` juga.
- **Soal 2 mengembalikan string asli** → dia menulis `teks[0] + balik(teks[1:])`. Balik urutannya.
- **Soal 4 menjawab 0 untuk list negatif** → dia memulai dari 0. Ingatkan pelajaran yang sama dari `sel_terbesar` di Topik 6.
- **Soal 6 hanya menjumlah lapisan luar** → dia tidak menyelami sublist. Suruh dia cetak `kepala` tiap langkah dan lihat kapan ia berupa list.
- **Lancar semua** → langsung Tulis Kode 03, tempat rekursi bertemu grid dan menghitung lintasan seleksi.
