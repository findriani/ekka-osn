# Rekursi — Baca Kode 01

Topik 7, membaca kode. **Rekursi** adalah fungsi yang memanggil dirinya sendiri untuk soal yang lebih kecil, sampai mencapai soal terkecil yang jawabannya sudah diketahui — **kasus dasar**. Ia muncul di seleksi tiap kali sebuah soal bisa dipecah menjadi versi kecil dirinya: menghitung lintasan di grid, menelusuri kata, memecah angka. Set ini melatih membacanya: mengikuti panggilan turun sampai kasus dasar, lalu menjumlahkan hasilnya saat naik kembali.

## Petunjuk jawaban

Kerjakan **tanpa komputer**. Untuk soal rekursi, tulis tiap panggilan di kertas sebagai baris baru yang menjorok ke kanan, lalu isi jawabannya dari panggilan terdalam (kasus dasar) ke atas.

Tuliskan jawaban sebagai bilangan bulat, kecuali pada soal pilihan ganda.

## Rumus cepat

- Rekursi butuh **kasus dasar** (berhenti) dan **kasus rekursif** (memanggil versi lebih kecil).
- Tiap panggilan harus menuju kasus dasar — biasanya `n - 1`, `data[1:]`, atau angka yang mengecil.
- Tanpa kasus dasar, fungsi memanggil dirinya selamanya sampai `RecursionError`.
- Bacalah dari dalam ke luar: panggilan terdalam selesai lebih dulu, hasilnya dipakai panggilan di atasnya.
- `faktorial(n) = n * faktorial(n-1)`, dengan `faktorial(0) = 1`.

## Soal 1 — Faktorial

Faktorial mengalikan `n` dengan faktorial dari `n - 1`, berhenti saat `n` mencapai 0 yang bernilai 1.

<pre class="code">def faktorial(n):
    if n == 0:
        return 1
    return n * faktorial(n - 1)

print(faktorial(4))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 2 — Menjumlahkan sampai n

Fungsi ini menjumlahkan `n + (n-1) + ... + 1`, berhenti di 0.

<pre class="code">def jumlah_sampai(n):
    if n == 0:
        return 0
    return n + jumlah_sampai(n - 1)

print(jumlah_sampai(5))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 3 — Lupa berhenti

Fungsi ini mencetak `n`, lalu memanggil dirinya dengan `n - 1`. Tetapi tidak ada kasus dasar yang menghentikannya.

<pre class="code">def hitung_mundur(n):
    print(n)
    hitung_mundur(n - 1)</pre>

Apa yang terjadi kalau `hitung_mundur(3)` dijalankan?

- **A.** Mencetak 3, 2, 1, lalu berhenti
- **B.** Mencetak 3, 2, 1, 0, lalu berhenti
- **C.** Mencetak 3, 2, 1, 0, -1, ... terus sampai `RecursionError`
- **D.** Tidak mencetak apa pun

**Jawaban:** `_____`

---

## Soal 4 — Panjang list

Panjang sebuah list adalah 1 ditambah panjang sisanya, berhenti di list kosong.

<pre class="code">def panjang(data):
    if data == []:
        return 0
    return 1 + panjang(data[1:])

print(panjang([5, 6, 7, 8]))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 5 — Fibonacci

Tiap angka Fibonacci adalah jumlah dua sebelumnya, dengan dua yang pertama bernilai 0 dan 1.

<pre class="code">def fib(n):
    if n &lt; 2:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(6))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 6 — Menjumlahkan isi list

Jumlah sebuah list adalah isi pertamanya ditambah jumlah sisanya.

<pre class="code">def total(data):
    if data == []:
        return 0
    return data[0] + total(data[1:])

print(total([3, 1, 4, 2]))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: 24**

Ikuti panggilannya turun sampai kasus dasar, lalu kalikan saat naik:

| panggilan | mengembalikan |
|---|---|
| `faktorial(0)` | 1 |
| `faktorial(1)` | 1 × 1 = 1 |
| `faktorial(2)` | 2 × 1 = 2 |
| `faktorial(3)` | 3 × 2 = 6 |
| `faktorial(4)` | 4 × 6 = **24** |

Kunci membaca rekursi: panggilan terdalam (`faktorial(0)`) selesai **lebih dulu**, dan jawabannya mengalir naik. `faktorial(4)` tidak bisa selesai sebelum `faktorial(3)` selesai, dan seterusnya sampai dasar. Kasus dasar `n == 0` adalah yang menghentikan seluruh rantai.

## Soal 2

**Jawaban: 15**

Sama polanya, dengan penjumlahan:

`5 + 4 + 3 + 2 + 1 + 0` = **15**.

Panggilan `jumlah_sampai(0)` memberi 0, lalu `jumlah_sampai(1)` memberi `1 + 0`, dan seterusnya. Perhatikan kasus dasarnya mengembalikan **0** (bukan 1 seperti faktorial), karena penjumlahan yang kosong adalah 0, sedangkan perkalian yang kosong adalah 1.

## Soal 3

**Jawaban: C**

Fungsi ini tidak punya `if` yang menghentikannya. Ia mencetak 3, memanggil `hitung_mundur(2)`, yang mencetak 2, memanggil `hitung_mundur(1)`, dan seterusnya — melewati 0, ke -1, -2, tanpa henti.

Python tidak membiarkan ini selamanya: setelah ribuan panggilan bertumpuk, ia menyerah dengan `RecursionError: maximum recursion depth exceeded`.

Inilah pelajaran terpenting rekursi: **setiap fungsi rekursif wajib punya kasus dasar**, dan tiap panggilan wajib bergerak menujunya. Di sini `n - 1` memang mengecil, tetapi tidak ada yang memeriksa `n == 0`, jadi ia melewatinya begitu saja. Bandingkan dengan Soal 1 dan 2 yang berhenti tepat di 0.

## Soal 4

**Jawaban: 4**

Tiap panggilan mengupas satu isi (`data[1:]` membuang yang pertama) dan menambah 1:

| panggilan | mengembalikan |
|---|---|
| `panjang([])` | 0 |
| `panjang([8])` | 1 + 0 = 1 |
| `panjang([7, 8])` | 1 + 1 = 2 |
| `panjang([6, 7, 8])` | 1 + 2 = 3 |
| `panjang([5, 6, 7, 8])` | 1 + 3 = **4** |

`data[1:]` adalah "sisa setelah yang pertama" — inilah cara rekursi memperkecil soal pada list. Kasus dasarnya list kosong, yang panjangnya 0. Ini `len` versi rekursif; kamu jarang menulisnya begini, tetapi polanya (kupas satu, rekursikan sisanya) dipakai di mana-mana.

## Soal 5

**Jawaban: 8**

Fibonacci punya **dua** panggilan rekursif, jadi bangun tabelnya dari bawah:

| n | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| `fib(n)` | 0 | 1 | 1 | 2 | 3 | 5 | **8** |

`fib(6) = fib(5) + fib(4) = 5 + 3 = 8`.

Perhatikan kasus dasarnya `n < 2`, yang menangkap **dua** angka sekaligus (`fib(0) = 0` dan `fib(1) = 1`). Fibonacci butuh dua kasus dasar karena tiap langkah menoleh dua angka ke belakang — kalau cuma `n == 0`, panggilan `fib(1)` akan mencoba `fib(-1)` dan tak pernah berhenti.

## Soal 6

**Jawaban: 10**

Isi pertama ditambah jumlah sisanya:

`3 + (1 + (4 + (2 + 0)))` = **10**.

Sama persis dengan Soal 4, tetapi `1 +` diganti `data[0] +`: alih-alih menghitung berapa isi, ia menjumlahkan isinya. Satu kerangka rekursi, dua pekerjaan berbeda — hanya bagian yang ditambahkan yang berubah. Ini `sum` versi rekursif.

# Catatan pengajar

## Peta soal

| Soal | Bentuk | Keterampilan | Jebakan |
|---|---|---|---|
| 1 | lacak | faktorial, kasus dasar = 1 | — |
| 2 | lacak | penjumlahan, kasus dasar = 0 | mengira dasar selalu 1 |
| 3 | pilihan ganda | kasus dasar hilang | mengira berhenti sendiri di 0 |
| 4 | lacak | `data[1:]` mengupas satu | — |
| 5 | lacak | dua panggilan, dua dasar | satu kasus dasar tak cukup |
| 6 | lacak | `sum` rekursif | — |

Soal 3 adalah inti seluruh topik. Kalau dia paham kenapa `hitung_mundur` tidak pernah berhenti — dan kenapa Soal 1, 2, 4, 6 berhenti — dia sudah memegang separuh rekursi. Separuh lainnya adalah percaya bahwa panggilan yang lebih kecil "sudah benar", yang datang dengan latihan.

## Cara membaca hasilnya

- **Salah di 2 dengan menjawab 16** → dia memakai kasus dasar 1, bukan 0. Tegaskan: perkalian kosong = 1, penjumlahan kosong = 0.
- **Salah di 3** → belum melihat pentingnya kasus dasar. Ini pelajaran nomor satu; suruh dia jalankan sendiri (dengan aman) dan lihat `RecursionError`-nya.
- **Salah di 5** → biasanya salah hitung tabel Fibonacci, bukan salah paham rekursi. Suruh dia tulis barisnya 0,1,1,2,3,5,8.
- **Benar semua** → langsung Baca Kode 02, tempat rekursi mulai menyimpan jebakan urutan dan panggilan berganda.

## Catatan jujur

Set ini bisa dijawab sempurna dengan menyalin kodenya ke Python. Itu bukan kegagalan desain — set **Tulis Kode** memang mengharapkan dia menjalankan kode. Yang ini melatih menebak lebih dulu, dan hanya jujur di atas kertas atau kalau diawasi.
