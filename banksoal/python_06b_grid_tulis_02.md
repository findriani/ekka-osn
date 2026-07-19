# Grid — Tulis Kode 02 (Sedang)

Topik 6, menulis kode, tingkat **sedang**. Sekarang batas dan tetangga mulai bekerja: membaca sel dengan aman, menjumlahkan tetangga tanpa keluar grid, mencari letak sesuatu, menjumlahkan tepi, membandingkan baris, dan mencerminkan papan. Batas adalah tema besarnya — hampir tiap soal grid yang salah, salahnya di tepi.

## Petunjuk jawaban

Bacalah cerita pada soal dulu. Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**. Nilaimu dihitung per baris uji.

Beberapa soal mengembalikan sebuah **grid baru**; di sana urutan baris dan kolom penting. Beberapa mengembalikan pasangan `(r, k)` atau `None`.

Hanya Python standar, **tanpa NumPy**.

## Rumus cepat

- Sel `(r, k)` sah kalau `0 <= r < len(grid) and 0 <= k < len(grid[0])`.
- Empat tetangga (atas, bawah, kiri, kanan): geser `(r-1,k)`, `(r+1,k)`, `(r,k-1)`, `(r,k+1)`.
- Menyusuri tepi: sel dengan `r == 0` atau `r == baris-1` atau `k == 0` atau `k == kolom-1`.
- Membalik satu baris: `baris[::-1]`.
- Cari sambil tahu letaknya: `for r in range(...): for k in range(...):`, lalu kembalikan `(r, k)`.

## Soal 1 — Membaca dengan aman

Membaca `grid[r][k]` langsung berbahaya kalau `(r, k)` mungkin di luar grid — Python bisa error, atau lebih buruk, diam-diam membaca dari belakang lewat indeks negatif.

Tulis `nilai_aman(grid, r, k)` yang mengembalikan `grid[r][k]` kalau `(r, k)` sah, dan `0` kalau tidak (termasuk kalau `r` atau `k` negatif).

<pre class="starter">def nilai_aman(grid, r, k):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">nilai_aman([[1, 2], [3, 4]], 0, 0) == 1
nilai_aman([[1, 2], [3, 4]], 5, 0) == 0
nilai_aman([[1, 2], [3, 4]], -1, 0) == 0
nilai_aman([[1, 2], [3, 4]], 1, 1) == 4</pre>

**Jawaban:** `_____`

---

## Soal 2 — Menjumlahkan empat tetangga

Sebuah sel punya sampai empat tetangga langsung: atas, bawah, kiri, kanan. Sel di tepi punya lebih sedikit — tetangga yang keluar grid tidak dihitung.

Tulis `tetangga4(grid, r, k)` yang mengembalikan jumlah nilai keempat tetangga langsung `(r, k)` yang masih di dalam grid. Sel `(r, k)` sendiri tidak ikut.

<pre class="starter">def tetangga4(grid, r, k):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">tetangga4([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1, 1) == 20
tetangga4([[1, 2], [3, 4]], 0, 0) == 5
tetangga4([[5]], 0, 0) == 0</pre>

**Jawaban:** `_____`

---

## Soal 3 — Di mana letaknya

Panitia mencari petak berisi nilai tertentu dan ingin **koordinatnya**, bukan cuma tahu ada atau tidak.

Tulis `posisi(grid, x)` yang mengembalikan `(r, k)` sel **pertama** (dibaca baris demi baris, kiri ke kanan) yang isinya sama dengan `x`, atau `None` kalau tidak ada.

<pre class="starter">def posisi(grid, x):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">posisi([[1, 2], [3, 4]], 3) == (1, 0)
posisi([[1, 2], [3, 4]], 1) == (0, 0)
posisi([[1, 2], [3, 4]], 9) is None</pre>

**Jawaban:** `_____`

---

## Soal 4 — Jumlah tepi

Sebuah bingkai foto hanya menghitung piksel di tepinya: baris paling atas dan bawah, serta kolom paling kiri dan kanan. Tiap sel tepi dihitung sekali saja.

Tulis `jumlah_tepi(grid)` yang mengembalikan jumlah semua sel yang berada di tepi `grid`. Dijamin `grid` tidak pernah kosong.

<pre class="starter">def jumlah_tepi(grid):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jumlah_tepi([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) == 40
jumlah_tepi([[1, 2], [3, 4]]) == 10
jumlah_tepi([[5]]) == 5</pre>

**Jawaban:** `_____`

---

## Soal 5 — Baris terkuat

Papan skor punya beberapa tim per baris. Panitia mencari baris dengan jumlah terbesar. Dijamin ada satu pemenang tunggal.

Tulis `baris_terbesar(grid)` yang mengembalikan **indeks** baris yang jumlah isinya paling besar.

<pre class="starter">def baris_terbesar(grid):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">baris_terbesar([[1, 1], [5, 5]]) == 1
baris_terbesar([[9], [2], [4]]) == 0
baris_terbesar([[1, 2], [2, 2], [0, 0]]) == 1</pre>

**Jawaban:** `_____`

---

## Soal 6 — Mencerminkan papan

Denah perlu dilihat seperti di cermin: tiap baris dibalik kiri-kanan, tetapi urutan barisnya tetap.

Tulis `cermin(grid)` yang mengembalikan **grid baru** dengan tiap baris dibalik urutannya.

<pre class="starter">def cermin(grid):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">cermin([[1, 2, 3], [4, 5, 6]]) == [[3, 2, 1], [6, 5, 4]]
cermin([[1]]) == [[1]]
cermin([[1, 2]]) == [[2, 1]]</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def nilai_aman(grid, r, k):
    if 0 &lt;= r &lt; len(grid) and 0 &lt;= k &lt; len(grid[0]):
        return grid[r][k]
    return 0</pre>

Periksa batas **dulu**, baca **belakangan**. Kalau `(r, k)` sah, kembalikan selnya; kalau tidak, kembalikan 0. Ini `di_dalam` dari Tulis Kode 01 yang dipakai untuk melindungi satu pembacaan.

Uji `-1` adalah intinya. Tanpa `0 <=`, `nilai_aman(grid, -1, 0)` akan lolos pemeriksaan dan mengembalikan `grid[-1][0]` — baris terakhir, bukan 0. Fungsi ini adalah cara membuat tetangga di soal berikutnya "hilang dengan aman" saat mereka keluar grid, alih-alih diam-diam membungkus ke sisi yang berlawanan.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def tetangga4(grid, r, k):
    total = 0
    for dr, dk in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
        nr, nk = r + dr, k + dk
        if 0 &lt;= nr &lt; len(grid) and 0 &lt;= nk &lt; len(grid[0]):
            total += grid[nr][nk]
    return total</pre>

Empat geseran — atas, bawah, kiri, kanan — dicoba satu per satu. Untuk tiap tetangga, periksa dulu apakah masih di dalam grid; hanya yang sah yang dijumlahkan. Sel di tengah menyumbang empat tetangga; sel pojok cuma dua.

Kalau kamu sudah menulis `nilai_aman`, seluruh fungsi ini bisa memakainya: `sum(nilai_aman(grid, r+dr, k+dk) for dr, dk in [(-1,0),(1,0),(0,-1),(0,1)])`. Uji `[[5]]` (satu sel, tanpa tetangga) memberi 0 — semua geseran keluar grid dan tersaring habis.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def posisi(grid, x):
    for r in range(len(grid)):
        for k in range(len(grid[0])):
            if grid[r][k] == x:
                return (r, k)
    return None</pre>

Telusuri baris demi baris; begitu ketemu, **langsung kembalikan** `(r, k)`. `return` di dalam perulangan menghentikan pencarian pada kecocokan pertama — persis yang diminta.

`return None` di paling akhir hanya tercapai kalau perulangan selesai tanpa menemukan apa pun. Jangan menaruhnya di dalam perulangan: kalau `return None` ada di dalam `else`, fungsi akan menyerah setelah sel pertama tidak cocok. Uji `x = 9` (tidak ada) memastikan cabang `None` bekerja.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def jumlah_tepi(grid):
    baris, kolom = len(grid), len(grid[0])
    total = 0
    for r in range(baris):
        for k in range(kolom):
            if r == 0 or r == baris - 1 or k == 0 or k == kolom - 1:
                total += grid[r][k]
    return total</pre>

Sebuah sel ada di tepi kalau berada di baris pertama atau terakhir, atau kolom pertama atau terakhir. Empat syarat disatukan dengan `or`, jadi sel pojok — yang memenuhi dua syarat sekaligus — tetap **dihitung sekali**, karena `if` cuma bertanya "ya atau tidak", bukan "berapa kali".

Uji `[[5]]` menarik: di grid 1×1, sel satu-satunya memenuhi keempat syarat, dan tetap dihitung sekali → 5. Untuk grid 3×3, semua sel tepi kecuali pusatnya → jumlah total dikurangi sel tengah.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def baris_terbesar(grid):
    terbaik = 0
    for r in range(len(grid)):
        if sum(grid[r]) > sum(grid[terbaik]):
            terbaik = r
    return terbaik</pre>

Pola juara sementara atas **indeks**: mulai dari baris 0, ganti tiap kali menemukan baris yang jumlahnya lebih besar. Yang dikembalikan `r` (nomor barisnya), bukan `sum`-nya — karena yang diminta indeks.

Perhatikan `sum(grid[r])` dipanggil di dua tempat; boleh saja, tetapi kalau grid besar, hitung sekali dan simpan. Memulai dari `terbaik = 0` aman di sini karena grid dijamin punya minimal satu baris. Bandingkan dengan `terdekat` di Topik 5 — kerangkanya sama, cuma "lebih dekat" diganti "lebih besar".

## Soal 6

**Jawaban: kode**

<pre class="kunci">def cermin(grid):
    return [baris[::-1] for baris in grid]</pre>

`baris[::-1]` membuat **baris baru** yang urutannya terbalik, jadi grid asli tidak tersentuh. Comprehension menerapkannya ke tiap baris, mempertahankan urutan barisnya.

Karena `[::-1]` sudah menghasilkan list baru untuk tiap baris, hasilnya aman dari aliasing — mengubah grid cermin tidak mengubah aslinya. Bandingkan dengan `transpose` di Topik 2: transpose menukar baris dengan kolom, cermin cuma membalik tiap baris. Keduanya membangun grid baru, keduanya tidak boleh merusak yang lama.

# Catatan pengajar

## Peta soal

| Soal | Keterampilan | Jebakan yang ditanam |
|---|---|---|
| 1 | baca aman + batas | lupa `0 <=`, indeks negatif membungkus |
| 2 | empat tetangga + batas | menghitung tetangga yang keluar grid |
| 3 | cari letak, `return` awal | `return None` di dalam loop |
| 4 | menyusuri tepi | menghitung sel pojok dua kali (tak terjadi dengan `or`) |
| 5 | juara sementara atas indeks | mengembalikan jumlah, bukan indeks |
| 6 | grid baru, balik baris | merusak grid asli |

Soal 1 dan 2 adalah pasangan: `nilai_aman` adalah alat, `tetangga4` adalah pemakaian pertamanya. Kalau `0 <=`-nya bolong di Soal 1, Soal 2 akan diam-diam menjumlahkan sel dari sisi grid yang salah. Inilah pola yang naik ke delapan tetangga dan Game of Life di Tulis Kode 03.

## Cara membaca hasilnya

- **Soal 1 lolos kecuali uji `-1`** → `0 <=` hilang. Bug paling penting di set ini; dampaknya muncul jauh kemudian.
- **Soal 2 memberi angka terlalu besar di pojok** → dia tidak menyaring tetangga yang keluar grid, jadi `grid[-1]` ikut terjumlah.
- **Soal 3 selalu `None`** → `return None` ada di dalam perulangan (menyerah terlalu cepat). Pindahkan ke luar kedua perulangan.
- **Soal 5 mengembalikan angka besar** → dia mengembalikan `sum`-nya, bukan indeks barisnya.
- **Soal 6 mengubah grid asli** → langka dengan `[::-1]`, tetapi bisa terjadi kalau dia memakai `baris.reverse()` di tempatnya. Tunjukkan `reverse()` mengembalikan `None` dan merusak aslinya.
- **Lancar semua** → langsung Tulis Kode 03, puncak topik: delapan tetangga, lintasan, dan satu langkah Game of Life.
