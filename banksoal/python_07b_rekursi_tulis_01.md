# Rekursi — Tulis Kode 01 (Mudah)

Topik 7, menulis kode, tingkat **mudah**. Keenam soal memakai rekursi dengan satu pemanggilan diri pada setiap langkah. Polanya sama: satu kasus dasar untuk berhenti dan satu panggilan dengan masukan yang lebih kecil. Latihannya mencakup faktorial, penjumlahan, pangkat, panjang list, jumlah isi list, dan penghitungan kemunculan. Jika pola ini sudah lancar, kamu akan lebih siap menghadapi rekursi yang bercabang atau memakai bentuk data lain di Tulis Kode 02 dan 03.

## Petunjuk jawaban

Bacalah cerita pada soal dulu. Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**. Nilaimu dihitung per baris uji.

Tiap fungsi butuh dua bagian: **kasus dasar** (`if ...: return ...`) yang berhenti, dan **kasus rekursif** yang memanggil versi lebih kecil. Tulis kasus dasarnya dulu — itu yang mencegah `RecursionError`.

Hanya Python standar, **tanpa NumPy**.

## Rumus cepat

- Rekursi angka mengecil dengan `n - 1`, berhenti di `n == 0`.
- Rekursi list mengecil dengan `data[1:]` (sisa setelah yang pertama), berhenti di `data == []`.
- Kasus dasar penjumlahan mengembalikan **0**; kasus dasar perkalian mengembalikan **1**.
- Percayai panggilan yang lebih kecil sudah benar; kamu cukup menggabungkan hasilnya dengan `data[0]` atau `n`.

## Soal 1 — Faktorial

Tulis `faktorial(n)` yang mengembalikan `n!` = `n × (n-1) × ... × 1`, dengan `faktorial(0)` bernilai 1.

<pre class="starter">def faktorial(n):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">faktorial(0) == 1
faktorial(1) == 1
faktorial(4) == 24
faktorial(5) == 120</pre>

**Jawaban:** `_____`

---

## Soal 2 — Jumlah sampai n

Tulis `jumlah_sampai(n)` yang mengembalikan `n + (n-1) + ... + 1 + 0`.

<pre class="starter">def jumlah_sampai(n):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jumlah_sampai(0) == 0
jumlah_sampai(1) == 1
jumlah_sampai(5) == 15</pre>

**Jawaban:** `_____`

---

## Soal 3 — Pangkat

Tulis `pangkat(a, n)` yang mengembalikan `a` pangkat `n`, dengan `pangkat(a, 0)` bernilai 1. Kecilkan `n`, bukan `a`.

<pre class="starter">def pangkat(a, n):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">pangkat(2, 0) == 1
pangkat(2, 5) == 32
pangkat(3, 2) == 9
pangkat(5, 1) == 5</pre>

**Jawaban:** `_____`

---

## Soal 4 — Panjang list

Tulis `panjang(data)` yang mengembalikan banyaknya isi `data`, secara rekursif. Jangan pakai `len`.

<pre class="starter">def panjang(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">panjang([]) == 0
panjang([7]) == 1
panjang([1, 2, 3, 4]) == 4</pre>

**Jawaban:** `_____`

---

## Soal 5 — Jumlah isi list

Tulis `jumlah_list(data)` yang mengembalikan jumlah semua angka di `data`, secara rekursif. Jangan pakai `sum`.

<pre class="starter">def jumlah_list(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jumlah_list([]) == 0
jumlah_list([5]) == 5
jumlah_list([1, 2, 3, 4]) == 10
jumlah_list([-1, 1]) == 0</pre>

**Jawaban:** `_____`

---

## Soal 6 — Menghitung kemunculan

Tulis `hitung(data, x)` yang mengembalikan berapa kali `x` muncul di `data`, secara rekursif.

<pre class="starter">def hitung(data, x):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">hitung([], 9) == 0
hitung([1, 2, 1, 1], 1) == 3
hitung([5], 9) == 0
hitung(["a", "b", "a"], "a") == 2</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def faktorial(n):
    if n == 0:
        return 1
    return n * faktorial(n - 1)</pre>

Kasus dasar `n == 0` mengembalikan 1 — titik awal aman untuk perkalian. Kasus rekursif mengalikan `n` dengan faktorial yang lebih kecil. Tulis kasus dasar **lebih dulu**; tanpa `if`, panggilan tak pernah berhenti.

Kamu tidak perlu tahu isi `faktorial(n - 1)` — percayai saja ia benar, dan kalikan dengan `n`. Kepercayaan itu inti rekursi.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def jumlah_sampai(n):
    if n == 0:
        return 0
    return n + jumlah_sampai(n - 1)</pre>

Sama polanya, dengan penjumlahan. Bedanya satu: kasus dasar mengembalikan **0**, bukan 1. Penjumlahan yang kosong adalah 0; kalau kamu memakai 1, semua jawabanmu meleset persis satu.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def pangkat(a, n):
    if n == 0:
        return 1
    return a * pangkat(a, n - 1)</pre>

Bentuknya faktorial, tetapi yang dikalikan `a` (tetap) dan yang mengecil `n`. Uji `pangkat(2, 0)` memastikan kasus dasarmu mengembalikan 1 — apa pun pangkat nol adalah 1.

Kalau kamu keliru mengecilkan `a` (`pangkat(a - 1, n - 1)`), uji `pangkat(3, 2)` akan menangkapnya: seharusnya 9, tetapi jadi salah.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def panjang(data):
    if data == []:
        return 0
    return 1 + panjang(data[1:])</pre>

Kasus dasar list kosong: panjangnya 0. Kasus rekursif: 1 (untuk isi pertama) ditambah panjang sisanya. `data[1:]` adalah "semua kecuali yang pertama" — inilah cara mengecilkan list.

Perhatikan `data[1:]` selalu lebih pendek dari `data`, jadi rekursinya pasti mencapai list kosong. Itu jaminan bahwa ia berhenti.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def jumlah_list(data):
    if data == []:
        return 0
    return data[0] + jumlah_list(data[1:])</pre>

Persis kerangka Soal 4, tetapi `1 +` diganti `data[0] +`. Alih-alih menghitung berapa isi, ia menjumlahkan isinya. Uji `[-1, 1]` memberi 0 — memastikan kamu menjumlahkan nilai sebenarnya, bukan mencacah.

Satu kerangka, dua pekerjaan: yang berubah cuma apa yang ditambahkan pada tiap langkah.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def hitung(data, x):
    if data == []:
        return 0
    pertama = 1 if data[0] == x else 0
    return pertama + hitung(data[1:], x)</pre>

Untuk isi pertama, tambahkan 1 kalau ia sama dengan `x`, selain itu 0; lalu tambahkan hitungan dari sisanya. Ini menggabungkan pola Soal 4 (mengupas satu) dengan sebuah syarat.

Versi ringkasnya menyatukan syarat ke dalam penjumlahan: `return (data[0] == x) + hitung(data[1:], x)`, karena `True` bernilai 1 dan `False` bernilai 0 di Python. Uji dengan teks (`"a"`) memastikan fungsimu tidak mengira isinya selalu angka.

# Catatan pengajar

## Peta soal

| Soal | Keterampilan | Jebakan yang ditanam |
|---|---|---|
| 1 | faktorial | kasus dasar = 1, bukan 0 |
| 2 | penjumlahan | kasus dasar = 0, bukan 1 |
| 3 | pangkat | mengecilkan `a`, bukan `n` |
| 4 | panjang rekursif | `data[1:]` tidak mengecil kalau salah tulis |
| 5 | jumlah rekursif | mencacah alih-alih menjumlahkan |
| 6 | menghitung | lupa merekursikan sisanya |

Keenamnya satu kerangka: kasus dasar + panggilan mengecil. Kalau dia menulis Soal 1 dengan lancar, sisanya adalah variasi. Fokuskan koreksi pada **kasus dasar mana yang benar** (0 untuk jumlah, 1 untuk kali) dan **apa yang mengecil** (`n - 1` atau `data[1:]`).

## Cara membaca hasilnya

- **Semua rekursi kena `RecursionError`** → kasus dasarnya hilang atau panggilan tidak mengecil. Cek satu fungsi bersama-sama; biasanya pola yang sama terulang.
- **Soal 2 meleset satu** → kasus dasar 1, bukan 0. Cepat.
- **Soal 3 salah di `pangkat(3, 2)`** → dia mengecilkan `a`. Tegaskan: `a` tetap, `n` yang turun.
- **Soal 5 memberi panjang, bukan jumlah** → dia menyalin Soal 4 dan lupa mengganti `1 +` menjadi `data[0] +`.
- **Lancar semua** → langsung Tulis Kode 02, tempat rekursi bercabang dua dan menyentuh string serta list bersarang.
