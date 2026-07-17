# List & Penyalinan — Tulis Kode 03 (Sedang)

Topik 2, menulis kode, tingkat **sedang**. List di dalam list — dan dengan itu, jembatan menuju Topik 6. Setiap grid di soal seleksi, termasuk grid 7×7 pada soal menghitung lintasan, adalah list yang isinya list. Kalau kamu bisa membuat, membaca, dan menyalin grid dengan benar, separuh soal terberat di arsip tinggal soal berpikir.

Satu soal di sini — yang pertama — adalah kesalahan tunggal yang paling sering merusak jawaban grid. Kerjakan pelan-pelan.

## Petunjuk jawaban

Bacalah cerita pada soal terlebih dahulu. Kalimat yang diawali `Tulis` menjelaskan nama fungsi, masukan, dan nilai yang harus dikembalikan; contoh uji di bawahnya membantumu melihat bentuk jawabannya.

Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**.

Beberapa uji memakai `is not`, bukan `==`. Keduanya berbeda dan bedanya penting:

- `==` bertanya **"isinya sama?"**
- `is` bertanya **"benda yang sama?"**

Dua list bisa `==` tetapi bukan benda yang sama. Justru di situlah seluruh soal ini berada — dan uji `==` saja **tidak akan** menangkap kesalahannya.

Hanya Python standar, **tanpa NumPy**.

## Rumus cepat

- `grid[r][k]` → baris `r` dulu, baru kolom `k`.
- `len(grid)` banyaknya **baris** · `len(grid[0])` banyaknya **kolom**
- `[[0] * k] * b` → **satu** baris, ditunjuk `b` kali. Hampir selalu salah.
- `[[0] * k for _ in range(b)]` → `b` baris yang berbeda. Hampir selalu benar.
- Menelusuri semua sel: `for r in range(len(grid)): for k in range(len(grid[0])):`

## Soal 1 — Membuat papan kosong

Panitia butuh papan permainan berukuran `baris` × `kolom`, semuanya berisi 0. Nanti tiap petak akan diisi satu per satu.

Tulis `buat_grid(baris, kolom)` yang mengembalikan grid berisi `0` semua.

<pre class="starter">def buat_grid(baris, kolom):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">buat_grid(2, 3) == [[0, 0, 0], [0, 0, 0]]
buat_grid(1, 1) == [[0]]
(_g := buat_grid(2, 3))[0] is not _g[1]
(_h := buat_grid(3, 2))[0] is not _h[2]</pre>

**Jawaban:** `_____`

---

## Soal 2 — Jumlah satu baris

Panitia menjumlahkan nilai satu baris tempat duduk.

Tulis `jumlah_baris(grid, r)` yang mengembalikan jumlah semua angka di baris ke-`r`.

<pre class="starter">def jumlah_baris(grid, r):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jumlah_baris([[1, 2], [3, 4]], 0) == 3
jumlah_baris([[1, 2], [3, 4]], 1) == 7
jumlah_baris([[5]], 0) == 5</pre>

**Jawaban:** `_____`

---

## Soal 3 — Jumlah satu kolom

Sekarang arah yang lain — dan ini jauh lebih menarik daripada kelihatannya.

Tulis `jumlah_kolom(grid, k)` yang mengembalikan jumlah semua angka di kolom ke-`k`.

<pre class="starter">def jumlah_kolom(grid, k):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jumlah_kolom([[1, 2], [3, 4]], 0) == 4
jumlah_kolom([[1, 2], [3, 4]], 1) == 6
jumlah_kolom([[5]], 0) == 5
jumlah_kolom([[1, 2, 3], [4, 5, 6]], 2) == 9</pre>

**Jawaban:** `_____`

---

## Soal 4 — Meratakan grid

Untuk dihitung rata-ratanya, semua angka di grid perlu dijadikan satu list panjang, dibaca baris demi baris dari kiri ke kanan.

Tulis `ratakan(grid)` yang mengembalikan satu list berisi semua angka di `grid`.

<pre class="starter">def ratakan(grid):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">ratakan([[1, 2], [3]]) == [1, 2, 3]
ratakan([[5]]) == [5]
ratakan([[], [1]]) == [1]
ratakan([]) == []</pre>

**Jawaban:** `_____`

---

## Soal 5 — Menyalin papan

Sebelum mencoba sebuah langkah, panitia menyalin papannya dulu supaya papan asli bisa dikembalikan kalau langkahnya gagal.

Tulis `salin_grid(grid)` yang mengembalikan grid **baru** — yang mengubah salinannya **tidak** boleh mengubah aslinya, sampai ke tiap barisnya.

<pre class="starter">def salin_grid(grid):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">salin_grid([[1, 2], [3, 4]]) == [[1, 2], [3, 4]]
salin_grid([]) == []
salin_grid(_p := [[1, 2]]) is not _p
salin_grid(_r := [[1, 2]])[0] is not _r[0]</pre>

**Jawaban:** `_____`

---

## Soal 6 — Memutar denah

Denah kelas perlu dilihat dari samping: baris menjadi kolom, kolom menjadi baris.

Tulis `transpose(grid)` yang mengembalikan grid baru dengan baris dan kolom bertukar. Dijamin `grid` tidak pernah kosong dan semua barisnya sama panjang.

<pre class="starter">def transpose(grid):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">transpose([[1, 2], [3, 4]]) == [[1, 3], [2, 4]]
transpose([[1, 2, 3]]) == [[1], [2], [3]]
transpose([[5]]) == [[5]]</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def buat_grid(baris, kolom):
    return [[0] * kolom for _ in range(baris)]</pre>

Inilah soal terpenting di seluruh Topik 2, dan alasannya ada di dua uji terakhir.

Kode yang salah adalah:

<pre class="code">return [[0] * kolom] * baris</pre>

Sekarang lihat apa yang terjadi:

| uji | dengan `[[0] * kolom] * baris` |
|---|---|
| `buat_grid(2, 3) == [[0, 0, 0], [0, 0, 0]]` | **lolos** |
| `buat_grid(1, 1) == [[0]]` | **lolos** |
| `(_g := buat_grid(2, 3))[0] is not _g[1]` | gagal |
| `(_h := buat_grid(3, 2))[0] is not _h[2]` | gagal |

Kode yang salah **lolos setiap uji `==`**. Isinya memang benar. Yang salah adalah barisnya bukan baris-baris yang berbeda — ketiganya satu benda yang sama, ditunjuk berkali-kali. Ubah satu, berubah semua.

Itu sebabnya dua uji terakhir memakai `is not`: hanya pertanyaan **"benda yang sama?"** yang bisa membedakannya. Tidak ada uji `==` yang bisa, seberapa banyak pun kamu menambahkannya.

`[[0] * kolom for _ in range(baris)]` menjalankan `[0] * kolom` **sekali untuk tiap baris**, jadi benar-benar lahir list yang berbeda-beda. `_` cuma nama variabel yang artinya "aku tidak memakainya".

Kalau kamu ingat satu hal saja dari Topik 2, ingat ini. Kamu akan memakainya di tiap soal grid.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def jumlah_baris(grid, r):
    return sum(grid[r])</pre>

`grid[r]` **sudah** berupa list — satu baris utuh. Jadi `sum` bisa langsung dipakai; tidak perlu perulangan.

Ini yang membuat baris "murah" dan kolom "mahal", dan itulah inti Soal 3.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def jumlah_kolom(grid, k):
    total = 0
    for baris in grid:
        total += baris[k]
    return total</pre>

Bandingkan dengan Soal 2 dan rasakan bedanya.

Sebuah baris tersimpan **sebagai satu list**, jadi `sum(grid[r])` selesai. Sebuah kolom **tidak tersimpan di mana pun** — angka-angkanya terserak, satu di tiap baris. Kamu harus mendatanginya satu per satu dan mengambil isi ke-`k` dari masing-masing.

Versi ringkasnya: `return sum(baris[k] for baris in grid)`.

Yang salah: `sum(grid[k])`. Itu menjumlahkan **baris** ke-`k`, bukan kolom. Menariknya, uji pertama `jumlah_kolom([[1, 2], [3, 4]], 0)` akan memberi 3, bukan 4 — jadi langsung ketahuan. Tapi kalau gridnya kebetulan simetris, kesalahan ini bisa lolos tanpa jejak.

Ingat asimetri ini. Grid terlihat seperti kotak yang rapi, padahal di dalam Python ia adalah **tumpukan baris**. Baris itu benda; kolom cuma gagasan.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def ratakan(grid):
    hasil = []
    for baris in grid:
        for x in baris:
            hasil.append(x)
    return hasil</pre>

Pola akumulasi dengan perulangan bersarang: untuk tiap baris, untuk tiap isi baris itu, tambahkan ke wadah.

Yang sering dicoba: `sum(grid, [])` — dan itu memang berhasil, karena `+` pada list menyambung. Tapi jangan dibiasakan; untuk grid besar ia lambat, sebab tiap penyambungan membuat list baru.

Versi comprehension: `return [x for baris in grid for x in baris]`. Urutan `for`-nya sama dengan versi panjangnya — luar dulu, baru dalam. Ini satu-satunya tempat di Python yang urutannya terasa terbalik, dan cara mengingatnya adalah: tulis versi panjangnya dulu, lalu ratakan ke satu baris.

Uji `[[], [1]]` memastikan baris kosong tidak merusak apa pun — perulangan dalam tidak jalan, dan tidak ada yang perlu ditambal.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def salin_grid(grid):
    return [baris[:] for baris in grid]</pre>

Di sinilah Soal 1 dan Tulis Kode 02 bertemu.

Menyalin list biasa cukup `data[:]`. Untuk grid, itu **tidak cukup**:

<pre class="code">return grid[:]      # SALAH</pre>

`grid[:]` membuat list luar yang baru — jadi uji `salin_grid(_p := [[1, 2]]) is not _p` **lolos**. Tapi isinya tetap panah-panah yang menunjuk ke **baris yang sama**. Mengubah `salinan[0][0]` ikut mengubah `asli[0][0]`.

Uji terakhir, `salin_grid(_r := [[1, 2]])[0] is not _r[0]`, adalah satu-satunya yang menangkapnya. Perhatikan bedanya dengan uji ketiga: yang satu memeriksa list **luar**, yang satu memeriksa **barisnya**.

Namanya "salinan dangkal" lawan "salinan dalam". `grid[:]` menyalin satu lapis. Grid punya dua lapis, jadi kamu harus menyalin tiap baris juga — dan itulah arti `baris[:]` di dalam comprehension.

Kalau kamu paham kenapa `grid[:]` gagal di sini padahal `data[:]` cukup di Tulis Kode 02, kamu sudah paham penyalinan.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def transpose(grid):
    baris = len(grid)
    kolom = len(grid[0])
    return [[grid[r][k] for r in range(baris)] for k in range(kolom)]</pre>

Bacalah dari dalam ke luar. Untuk tiap kolom `k` di grid lama, kumpulkan `grid[r][k]` dari **semua** baris `r` — itu menjadi satu baris di grid baru.

Perhatikan hasilnya berganti ukuran: `transpose([[1, 2, 3]])` mengubah 1×3 menjadi 3×1. Karena itu comprehension luar berjalan atas `kolom`, bukan `baris`. Kalau kamu tertukar, `transpose([[1, 2, 3]])` akan memberi `IndexError` — dan uji kedua ada khusus untuk menangkap itu.

Versi panjangnya, kalau comprehension bersarang terasa terlalu padat:

<pre class="code">def transpose(grid):
    hasil = []
    for k in range(len(grid[0])):
        baris_baru = []
        for r in range(len(grid)):
            baris_baru.append(grid[r][k])
        hasil.append(baris_baru)
    return hasil</pre>

Sama benarnya. Tulis versi ini dulu kalau ragu, baru padatkan.

Soal ini adalah gabungan semua yang ada di Topik 2: indeks dua lapis, membangun list baru, dan `len(grid)` lawan `len(grid[0])`.

# Catatan pengajar

## Peta soal

| Soal | Keterampilan | Kode salah yang tetap lolos sebagian |
|---|---|---|
| 1 | `[[0]*k for _ in range(b)]` | `[[0]*k]*b` — **lolos semua uji `==`** |
| 2 | baris sudah berupa list | — |
| 3 | kolom harus dikumpulkan | `sum(grid[k])` — tertukar baris/kolom |
| 4 | perulangan bersarang | `sum(grid, [])` benar tapi lambat |
| 5 | salinan dalam | `grid[:]` — lolos uji `is not` yang luar |
| 6 | transpose | tertukar `baris`/`kolom` → `IndexError` |

Soal 1 dan 5 adalah alasan set ini ada. Keduanya punya sifat yang sama: **tidak ada uji `==` yang bisa membedakan benar dan salah**. Itu sebabnya `is not` dipakai, dan sebabnya konsep ini layak diajarkan pelan-pelan.

## Cara membaca hasilnya

- **Soal 1 lolos dua uji pertama, gagal dua terakhir** → dia menulis `[[0]*k]*b`. Ini hasil paling penting di seluruh Topik 2. Jangan cuma bilang jawabannya; gambar kotak-dan-panah, lalu suruh dia jalankan `[[0]*3]*3` sendiri dan ubah satu selnya. Melihat ketiga baris berubah bersamaan lebih meyakinkan daripada penjelasan apa pun.
- **Soal 5 gagal hanya di uji terakhir** → dia menulis `grid[:]`. Kabar baik: dia sudah tahu harus menyalin, cuma belum tahu grid punya dua lapis. Setengah langkah lagi.
- **Soal 3 memberi 3 alih-alih 4** → baris/kolom tertukar. Perbaiki sebelum Topik 6, di mana kesalahan ini muncul di tiap soal.
- **Soal 6 kena `IndexError` di uji kedua** → `baris` dan `kolom` tertukar di comprehension luar. Suruh dia tulis versi panjangnya; kesalahan ini nyaris mustahil terjadi kalau ditulis dengan `for` biasa.

## Hubungan dengan seleksi

Ini set yang paling dekat ke Q2 (menghitung lintasan `IOAI` di grid 7×7) tanpa menyentuh rekursi. Soal 1 adalah cara membuat gridnya, Soal 3 adalah cara membacanya, Soal 5 adalah cara mencobanya tanpa merusak. Anak yang lolos kelima uji `is not` di set ini tidak akan pernah kehilangan satu jam untuk bug grid yang tak kasatmata.

Kalau ketiga set Tulis Kode topik ini lancar, lanjut ke Topik 3 (Fungsi & Rumus).
