# Grid — Tulis Kode 01 (Mudah)

Topik 6, menulis kode, tingkat **mudah**. Di Topik 2 kamu sudah membuat, menyalin, dan memutar grid. Sekarang kamu **membaca seluruhnya**: menjumlahkan semua sel, mengukur, memeriksa apakah sebuah sel ada, menghitung nilai tertentu, mencari yang terbesar, dan mengambil diagonal. Semua satu perulangan atau satu comprehension.

## Petunjuk jawaban

Bacalah cerita pada soal dulu. Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**. Nilaimu dihitung per baris uji.

Ingat: `grid[r][k]` baris dulu, kolom kemudian. `len(grid)` baris, `len(grid[0])` kolom.

Hanya Python standar, **tanpa NumPy**.

## Rumus cepat

- Jumlah seluruh grid: `sum(sum(baris) for baris in grid)`.
- Ukuran: `len(grid)` baris, `len(grid[0])` kolom.
- Sel `(r, k)` di dalam grid: `0 <= r < len(grid) and 0 <= k < len(grid[0])`.
- Menelusuri semua isi: `for baris in grid: for x in baris:`.
- Diagonal utama grid persegi: `grid[i][i]` untuk `i` dari `0` sampai `len(grid) - 1`.

## Soal 1 — Total papan

Panitia menjumlahkan semua angka di papan skor.

Tulis `jumlah_semua(grid)` yang mengembalikan jumlah semua sel di `grid`.

<pre class="starter">def jumlah_semua(grid):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jumlah_semua([[1, 2], [3, 4]]) == 10
jumlah_semua([[5]]) == 5
jumlah_semua([]) == 0</pre>

**Jawaban:** `_____`

---

## Soal 2 — Ukuran papan

Sebuah program perlu tahu bentuk papan sebelum mengolahnya.

Tulis `ukuran(grid)` yang mengembalikan pasangan `(baris, kolom)`. Dijamin `grid` tidak pernah kosong dan semua barisnya sama panjang.

<pre class="starter">def ukuran(grid):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">ukuran([[1, 2, 3], [4, 5, 6]]) == (2, 3)
ukuran([[9]]) == (1, 1)
ukuran([[1], [2], [3]]) == (3, 1)</pre>

**Jawaban:** `_____`

---

## Soal 3 — Apakah sel ada

Sebelum membaca sebuah sel, program harus memastikan koordinatnya sah — termasuk menolak angka negatif, yang oleh Python akan diam-diam dibaca dari belakang.

Tulis `di_dalam(grid, r, k)` yang mengembalikan `True` kalau `(r, k)` adalah sel yang sah di `grid`, dan `False` kalau tidak (termasuk kalau `r` atau `k` negatif).

<pre class="starter">def di_dalam(grid, r, k):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">di_dalam([[1, 2], [3, 4]], 0, 1) is True
di_dalam([[1, 2], [3, 4]], 2, 0) is False
di_dalam([[1, 2], [3, 4]], -1, 0) is False
di_dalam([[1, 2], [3, 4]], 0, 5) is False</pre>

**Jawaban:** `_____`

---

## Soal 4 — Menghitung nilai

Sebuah peta menyimpan angka di tiap petak. Panitia ingin tahu berapa petak yang berisi nilai tertentu.

Tulis `hitung_nilai(grid, x)` yang mengembalikan banyaknya sel di `grid` yang isinya sama dengan `x`.

<pre class="starter">def hitung_nilai(grid, x):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">hitung_nilai([[1, 0, 1], [0, 1, 0]], 1) == 3
hitung_nilai([[1, 0], [0, 0]], 0) == 3
hitung_nilai([[5]], 9) == 0</pre>

**Jawaban:** `_____`

---

## Soal 5 — Sel terbesar

Panitia mencari nilai tertinggi di seluruh papan.

Tulis `sel_terbesar(grid)` yang mengembalikan angka terbesar di `grid`. Dijamin `grid` tidak pernah kosong.

<pre class="starter">def sel_terbesar(grid):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">sel_terbesar([[3, 8], [1, 9]]) == 9
sel_terbesar([[5]]) == 5
sel_terbesar([[-1, -2], [-3, -4]]) == -1</pre>

**Jawaban:** `_____`

---

## Soal 6 — Diagonal

Kartu bingo dibaca diagonalnya: sel-sel yang baris dan kolomnya sama.

Tulis `diagonal(grid)` yang mengembalikan **list** berisi `grid[0][0]`, `grid[1][1]`, dan seterusnya. Dijamin `grid` persegi.

<pre class="starter">def diagonal(grid):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">diagonal([[1, 2], [3, 4]]) == [1, 4]
diagonal([[9]]) == [9]
diagonal([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) == [1, 5, 9]</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def jumlah_semua(grid):
    return sum(sum(baris) for baris in grid)</pre>

Tiap baris sudah berupa list, jadi `sum(baris)` menjumlahkan satu baris. `sum(... for baris in grid)` lalu menjumlahkan hasil tiap baris — jumlah dari jumlah. Uji `[]` memberi 0 gratis: tidak ada baris, jadi `sum` dari kosong adalah 0.

Versi perulangan biasa sama benarnya:

<pre class="code">def jumlah_semua(grid):
    total = 0
    for baris in grid:
        for x in baris:
            total += x
    return total</pre>

## Soal 2

**Jawaban: kode**

<pre class="kunci">def ukuran(grid):
    return (len(grid), len(grid[0]))</pre>

`len(grid)` banyaknya baris; `len(grid[0])` banyaknya isi di baris pertama, yaitu kolom. Karena semua baris dijamin sama panjang, baris pertama mewakili semuanya.

Ini menegaskan asimetri Topik 6: baris "murah" karena `len(grid)` langsung memberinya, sedangkan kolom butuh mengintip ke dalam sebuah baris. Uji `[[1], [2], [3]]` (3×1) ada khusus untuk menangkap tertukarnya kedua angka ini.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def di_dalam(grid, r, k):
    return 0 &lt;= r &lt; len(grid) and 0 &lt;= k &lt; len(grid[0])</pre>

Sebuah sel sah kalau barisnya di rentang `[0, len(grid))` **dan** kolomnya di rentang `[0, len(grid[0]))`. Bagian `0 <=` itulah yang menolak angka negatif — dan itu yang paling sering lupa ditulis.

Uji `di_dalam(..., -1, 0)` adalah inti soal ini. Tanpa `0 <=`, fungsi akan menjawab `True` untuk `-1`, karena `-1 < len(grid)` memang benar. Lalu `grid[-1]` diam-diam membaca baris terakhir, dan seluruh perhitunganmu meleset tanpa error. Fungsi kecil ini adalah tameng terhadap bug itu; kamu memakainya di tiap soal tetangga di Tulis Kode 02 dan 03.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def hitung_nilai(grid, x):
    c = 0
    for baris in grid:
        for isi in baris:
            if isi == x:
                c += 1
    return c</pre>

Pola menghitung dengan perulangan bersarang: telusuri tiap sel, tambah satu tiap kali isinya cocok. Versi ringkas: `sum(1 for baris in grid for isi in baris if isi == x)`, atau `sum(baris.count(x) for baris in grid)`.

Uji `[[5]], 9` memberi 0: tidak ada sel yang cocok, hitungannya tetap 0. Ini pola yang dipakai untuk menghitung petak hidup di soal citra dan papan.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def sel_terbesar(grid):
    m = grid[0][0]
    for baris in grid:
        for isi in baris:
            if isi > m:
                m = isi
    return m</pre>

Pola juara sementara: mulai dari sel pertama, ganti tiap kali menemukan yang lebih besar. Uji dengan semua angka **negatif** adalah yang penting — kalau kamu memulai dari `m = 0` alih-alih `grid[0][0]`, fungsimu akan salah menjawab 0, karena tidak ada sel yang melampaui 0.

Versi ringkas memakai bawaan Python: `max(max(baris) for baris in grid)`. Aman di sini karena grid dijamin tidak kosong.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def diagonal(grid):
    return [grid[i][i] for i in range(len(grid))]</pre>

Diagonal utama adalah sel-sel dengan baris dan kolom yang sama, jadi indeksnya `grid[i][i]`. `range(len(grid))` berjalan dari 0 sampai baris terakhir.

Yang perlu diperhatikan: **satu** indeks `i` dipakai di dua tempat. Kalau kamu menulis dua perulangan bersarang, kamu justru mengambil semua sel, bukan diagonalnya. Diagonal yang satunya (kanan-atas ke kiri-bawah) adalah `grid[i][len(grid) - 1 - i]` — variasi yang sering muncul di soal papan.

# Catatan pengajar

## Peta soal

| Soal | Keterampilan | Jebakan yang ditanam |
|---|---|---|
| 1 | jumlah bersarang | — |
| 2 | `len(grid)` vs `len(grid[0])` | menukar baris/kolom |
| 3 | pemeriksaan batas | lupa `0 <=`, sehingga negatif lolos |
| 4 | menghitung sel | — |
| 5 | juara sementara | memulai dari `0`, bukan `grid[0][0]` |
| 6 | diagonal `grid[i][i]` | dua perulangan → semua sel, bukan diagonal |

Soal 3 adalah yang paling berharga. `di_dalam` adalah satu-satunya tameng terhadap bug `grid[-1]` yang diam, dan dia akan memanggilnya di hampir tiap soal Tulis Kode 02 dan 03. Kalau `0 <=`-nya bolong, semua soal tetangga nanti akan diam-diam salah.

## Cara membaca hasilnya

- **Soal 2 memberi ukuran terbalik** → `len(grid)` dan `len(grid[0])` tertukar. Uji 3×1 menangkapnya; gambar gridnya dengan label.
- **Soal 3 lolos semua kecuali uji `-1`** → dia lupa `0 <=`. Ini justru bug yang paling penting untuk dibetulkan, karena dampaknya muncul jauh kemudian sebagai angka salah tanpa error.
- **Soal 5 menjawab 0 untuk grid negatif** → dia memulai dari `m = 0`. Tegaskan: mulai dari sel yang **ada**, bukan dari angka karangan.
- **Soal 6 mengembalikan semua sel** → dia menulis dua perulangan alih-alih satu indeks `i` yang dipakai dua kali.
- **Lancar semua** → langsung Tulis Kode 02, tempat batas dan tetangga mulai bekerja bersama.
