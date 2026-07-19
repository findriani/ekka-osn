# Grid — Tulis Kode 03 (Sedang)

Topik 6, menulis kode, tingkat **sedang**, dengan latihan terpadu untuk materi grid. Kamu akan menangani delapan tetangga, puncak lokal, penghitungan lintasan di papan, peta jumlah tetangga, dan satu langkah Game of Life. Dua di antaranya — menghitung lintasan dengan halangan dan menjalankan satu langkah Game of Life — merupakan versi kecil dari soal-soal sulit di arsip seleksi. Semuanya memakai pola yang sama: telusuri tiap sel, periksa batas, lalu bangun grid baru.

## Petunjuk jawaban

Bacalah cerita pada soal dulu. Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**. Nilaimu dihitung per baris uji, jadi lulus sebagian tetap bernilai.

Soal 3–6 lebih berat. Kalau macet, kerjakan yang lebih ringan dulu — nilai per uji berarti tidak ada ruginya mengumpulkan bagian yang bisa.

Hanya Python standar, **tanpa NumPy**.

## Rumus cepat

- Delapan tetangga: `for dr in (-1,0,1): for dk in (-1,0,1):`, lewati `(0,0)` dengan `continue`.
- Selalu periksa batas sebelum membaca: `0 <= nr < baris and 0 <= nk < kolom`.
- Grid nol yang benar: `[[0] * kolom for _ in range(baris)]` — **bukan** `[[0]*kolom]*baris`.
- Menghitung lintasan (kanan/bawah): `dp[r][k] = dp[r-1][k] + dp[r][k-1]`, tepi diisi 1.
- Game of Life: sel hidup bertahan dengan 2 atau 3 tetangga hidup; sel mati menjadi hidup dengan tepat 3.

## Soal 1 — Delapan tetangga

Sebuah papan berisi 0 dan 1. Tiap sel punya sampai delapan tetangga (termasuk diagonal); sel di tepi punya lebih sedikit.

Tulis `tetangga8(grid, r, k)` yang mengembalikan banyaknya tetangga sel `(r, k)` yang isinya `1`. Sel `(r, k)` sendiri tidak ikut dihitung.

<pre class="starter">def tetangga8(grid, r, k):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">tetangga8([[1, 1, 1], [1, 0, 1], [1, 1, 1]], 1, 1) == 8
tetangga8([[1, 0], [0, 0]], 1, 1) == 1
tetangga8([[1, 1], [1, 1]], 0, 0) == 3
tetangga8([[0]], 0, 0) == 0</pre>

**Jawaban:** `_____`

---

## Soal 2 — Puncak lokal

Sebuah sel disebut **puncak** kalau nilainya lebih besar daripada **semua** tetangga (delapan arah) yang ada. Sel di pojok cukup mengalahkan tetangga yang ada saja; sel tunggal otomatis puncak karena tak punya tetangga.

Tulis `puncak(grid, r, k)` yang mengembalikan `True` kalau `grid[r][k]` lebih besar daripada semua tetangganya, dan `False` kalau tidak.

<pre class="starter">def puncak(grid, r, k):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">puncak([[1, 2, 1], [2, 9, 2], [1, 2, 1]], 1, 1) is True
puncak([[1, 2, 1], [2, 9, 2], [1, 2, 1]], 0, 0) is False
puncak([[5]], 0, 0) is True
puncak([[3, 3], [1, 1]], 0, 0) is False</pre>

**Jawaban:** `_____`

---

## Soal 3 — Menghitung lintasan

Sebuah robot mulai di pojok kiri-atas papan `baris × kolom` dan hanya boleh melangkah **ke kanan atau ke bawah**, menuju pojok kanan-bawah.

Tulis `jumlah_lintasan(baris, kolom)` yang mengembalikan banyaknya lintasan berbeda.

<pre class="starter">def jumlah_lintasan(baris, kolom):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jumlah_lintasan(1, 1) == 1
jumlah_lintasan(2, 2) == 2
jumlah_lintasan(2, 3) == 3
jumlah_lintasan(3, 3) == 6</pre>

**Jawaban:** `_____`

---

## Soal 4 — Lintasan dengan halangan

Sekarang papannya berisi halangan: sel bernilai `1` tidak boleh diinjak, sel bernilai `0` boleh. Robot tetap mulai di kiri-atas, hanya melangkah kanan/bawah, menuju kanan-bawah. Dijamin sel awal dan akhir selalu `0`.

Tulis `jumlah_lintasan_halangan(grid)` yang mengembalikan banyaknya lintasan yang menghindari semua halangan.

<pre class="starter">def jumlah_lintasan_halangan(grid):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jumlah_lintasan_halangan([[0, 0], [0, 0]]) == 2
jumlah_lintasan_halangan([[0, 1], [0, 0]]) == 1
jumlah_lintasan_halangan([[0, 0, 0], [0, 1, 0], [0, 0, 0]]) == 2
jumlah_lintasan_halangan([[0]]) == 1</pre>

**Jawaban:** `_____`

---

## Soal 5 — Peta tetangga hidup

Untuk satu langkah Game of Life, kita perlu tahu, untuk **tiap** sel, berapa tetangga hidupnya (`1`). Bangun grid baru yang isinya angka-angka itu.

Tulis `tetangga_hidup_grid(grid)` yang mengembalikan grid baru berukuran sama, di mana tiap sel berisi banyaknya tetangga hidup (delapan arah) dari sel itu di `grid`.

<pre class="starter">def tetangga_hidup_grid(grid):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">tetangga_hidup_grid([[1, 1], [1, 1]]) == [[3, 3], [3, 3]]
tetangga_hidup_grid([[0, 0, 0], [0, 1, 0], [0, 0, 0]]) == [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
tetangga_hidup_grid([[0]]) == [[0]]</pre>

**Jawaban:** `_____`

---

## Soal 6 — Satu langkah Game of Life

Papan berisi sel hidup (`1`) dan mati (`0`). Satu langkah menghasilkan papan baru dengan aturan:

- Sel **hidup** bertahan hidup kalau punya **2 atau 3** tetangga hidup; selain itu ia mati.
- Sel **mati** menjadi hidup kalau punya **tepat 3** tetangga hidup; selain itu tetap mati.

Semua sel dihitung dari papan **lama** secara serentak. Tetangga dihitung delapan arah.

Tulis `langkah(grid)` yang mengembalikan papan baru setelah satu langkah.

<pre class="starter">def langkah(grid):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">langkah([[0, 0, 0], [0, 0, 0], [0, 0, 0]]) == [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
langkah([[0, 0, 0], [1, 1, 1], [0, 0, 0]]) == [[0, 1, 0], [0, 1, 0], [0, 1, 0]]
langkah([[1, 1], [1, 1]]) == [[1, 1], [1, 1]]</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def tetangga8(grid, r, k):
    baris, kolom = len(grid), len(grid[0])
    c = 0
    for dr in (-1, 0, 1):
        for dk in (-1, 0, 1):
            if dr == 0 and dk == 0:
                continue
            nr, nk = r + dr, k + dk
            if 0 &lt;= nr &lt; baris and 0 &lt;= nk &lt; kolom and grid[nr][nk] == 1:
                c += 1
    return c</pre>

Dua perulangan atas `(-1, 0, 1)` menghasilkan sembilan pasangan `(dr, dk)`; `continue` membuang satu-satunya yang bukan tetangga, yaitu `(0, 0)` (sel itu sendiri). Ini lebih pendek dan lebih sulit salah daripada mendaftar kedelapan arah satu per satu.

Pemeriksaan `0 <= nr < baris` adalah yang paling sering bolong. Tanpanya, `grid[-1][k]` **tidak error** — Python membaca indeks negatif dari belakang, jadi tetangga di tepi kiri diam-diam terhitung dari tepi kanan. Uji `[[0]]` dan pojok `(0, 0)` ada khusus untuk menangkap ini: keduanya lolos pada kode yang batasnya bolong.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def puncak(grid, r, k):
    baris, kolom = len(grid), len(grid[0])
    for dr in (-1, 0, 1):
        for dk in (-1, 0, 1):
            if dr == 0 and dk == 0:
                continue
            nr, nk = r + dr, k + dk
            if 0 &lt;= nr &lt; baris and 0 &lt;= nk &lt; kolom:
                if grid[nr][nk] >= grid[r][k]:
                    return False
    return True</pre>

Susuri kedelapan tetangga yang ada. Begitu **satu** tetangga menyamai atau melampaui sel kita, ia bukan puncak — langsung `return False`. Kalau perulangan selesai tanpa menemukan penantang, ia puncak: `return True`.

Perhatikan `>=`, bukan `>`. Uji `[[3, 3], [1, 1]]` di `(0, 0)` menjelaskan kenapa: tetangga bernilai sama (3) berarti sel kita **tidak** lebih besar daripada semua, jadi bukan puncak. Sel tunggal `[[5]]` otomatis `True` karena perulangan tidak pernah menemukan penantang — pola "tidak ada tandingan berarti menang" yang sama dengan pencarian terdekat.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def jumlah_lintasan(baris, kolom):
    dp = [[1] * kolom for _ in range(baris)]
    for r in range(1, baris):
        for k in range(1, kolom):
            dp[r][k] = dp[r - 1][k] + dp[r][k - 1]
    return dp[baris - 1][kolom - 1]</pre>

Isi sebuah grid `dp` dengan banyaknya lintasan menuju tiap sel. Sel di baris atas dan kolom kiri hanya bisa dicapai satu cara (lurus terus), jadi diisi 1 — itulah kenapa `dp` dimulai penuh 1. Setiap sel lain dicapai dari **atas** atau **kiri**, jadi lintasannya adalah jumlah keduanya.

Ini namanya **pemrograman dinamis**: jawaban sel besar dirakit dari sel-sel kecil yang sudah dihitung, tanpa satu pun rekursi. Perhatikan `[[1] * kolom for _ in range(baris)]` — bukan `[[1]*kolom]*baris`, yang akan membuat baris kembar dan merusak seluruh perhitungan. Bug Baca Kode 02 Soal 1 muncul lagi, dan di sini akibatnya fatal.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def jumlah_lintasan_halangan(grid):
    baris, kolom = len(grid), len(grid[0])
    dp = [[0] * kolom for _ in range(baris)]
    for r in range(baris):
        for k in range(kolom):
            if grid[r][k] == 1:
                dp[r][k] = 0
            elif r == 0 and k == 0:
                dp[r][k] = 1
            else:
                atas = dp[r - 1][k] if r > 0 else 0
                kiri = dp[r][k - 1] if k > 0 else 0
                dp[r][k] = atas + kiri
    return dp[baris - 1][kolom - 1]</pre>

Ide yang sama dengan Soal 3, dengan dua tambahan. Pertama, sel halangan (`1`) menampung **0** lintasan — tidak ada cara sah melewatinya. Kedua, tepi tidak lagi otomatis 1: sebuah sel di baris atas menjadi tak terjangkau kalau ada halangan di kirinya. Karena itu tepi ikut dihitung dengan rumus `atas + kiri`, di mana arah yang keluar grid dianggap 0.

`dp` dimulai penuh 0 dan sel awal dipasang 1 (kalau ia bukan halangan). Contoh 3×3 dengan pusat terhalang: dari 6 lintasan tanpa halangan, keempat yang melewati pusat gugur, tersisa **2**. Inilah kerangka persis soal menghitung lintasan di papan berhalangan pada seleksi — hanya ukurannya yang lebih besar.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def tetangga_hidup_grid(grid):
    baris, kolom = len(grid), len(grid[0])
    def hidup(r, k):
        c = 0
        for dr in (-1, 0, 1):
            for dk in (-1, 0, 1):
                if dr == 0 and dk == 0:
                    continue
                nr, nk = r + dr, k + dk
                if 0 &lt;= nr &lt; baris and 0 &lt;= nk &lt; kolom and grid[nr][nk] == 1:
                    c += 1
        return c
    return [[hidup(r, k) for k in range(kolom)] for r in range(baris)]</pre>

Fungsi dalam `hidup` adalah `tetangga8` dari Soal 1. Yang baru: menerapkannya ke **tiap** sel dan menampung hasilnya di grid baru. Comprehension bersarang membangun grid itu — baris demi baris, kolom demi kolom.

Contoh kedua menjelaskan pola: satu sel hidup di tengah, dan kedelapan tetangganya masing-masing "melihat" satu sel hidup (sel tengah itu), sedangkan sel tengah sendiri melihat nol tetangga hidup. Inilah bahan mentah satu langkah Game of Life — semua hitungan diambil dari papan lama sebelum ada yang berubah.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def langkah(grid):
    baris, kolom = len(grid), len(grid[0])
    def hidup(r, k):
        c = 0
        for dr in (-1, 0, 1):
            for dk in (-1, 0, 1):
                if dr == 0 and dk == 0:
                    continue
                nr, nk = r + dr, k + dk
                if 0 &lt;= nr &lt; baris and 0 &lt;= nk &lt; kolom and grid[nr][nk] == 1:
                    c += 1
        return c
    baru = [[0] * kolom for _ in range(baris)]
    for r in range(baris):
        for k in range(kolom):
            n = hidup(r, k)
            if grid[r][k] == 1:
                baru[r][k] = 1 if n == 2 or n == 3 else 0
            else:
                baru[r][k] = 1 if n == 3 else 0
    return baru</pre>

Puncak topik ini, dan ternyata cuma menggabungkan yang sudah ada. Untuk tiap sel, hitung tetangga hidupnya (Soal 1), lalu terapkan aturan: sel hidup bertahan dengan 2 atau 3 tetangga, sel mati lahir dengan tepat 3.

Satu hal yang **wajib** benar: papan baru dibaca dari papan **lama**. Karena itu `baru` adalah grid terpisah, dan kita tidak pernah menulis balik ke `grid` selama menghitung. Kalau kamu mengubah `grid` di tengah jalan, sel yang sudah berubah akan mencemari tetangga yang belum — dan blinker tidak akan pernah berdenyut dengan benar. Uji blinker (baris tengah hidup) berubah menjadi kolom tengah hidup; uji blok 2×2 tidak berubah karena tiap selnya punya tepat 3 tetangga hidup dan bertahan.

# Catatan pengajar

## Peta soal

| Soal | Keterampilan | Menyiapkan | Jebakan |
|---|---|---|---|
| 1 | delapan tetangga + batas | Soal 5, 6 | `grid[-1]` diam-diam sah |
| 2 | puncak lokal | soal citra | `>` alih-alih `>=`; sel tunggal |
| 3 | menghitung lintasan (DP) | Q2 seleksi | `[[1]*k]*b` baris kembar |
| 4 | lintasan berhalangan (DP) | Q2 seleksi | tepi tak lagi otomatis 1 |
| 5 | peta tetangga | Soal 6 | membaca dari grid yang berubah |
| 6 | satu langkah Game of Life | citra, konvolusi | menulis balik ke papan lama |

Soal 1 adalah fondasi separuh set: `tetangga8` muncul lagi di Soal 5 dan 6. Soal 3 dan 4 adalah pasangan pemrograman dinamis — jembatan terdekat ke soal menghitung lintasan `IOAI` (Q2 seleksi 2025) tanpa menyentuh rekursi. Soal 6 adalah satu-satunya yang menuntut memisahkan papan lama dan baru; kalau itu beres, dia paham kenapa langkah simulasi selalu butuh dua salinan.

## Cara membaca hasilnya

- **Soal 1 gagal di pojok atau `[[0]]`** → pemeriksaan batasnya bolong. Ini yang paling mahal; di soal grid sungguhan, kodenya berjalan mulus dan memberi angka salah.
- **Soal 2 salah saat tetangga sama nilai** → dia memakai `>`, bukan `>=`. Uji `[[3,3],[1,1]]` menangkapnya.
- **Soal 3 memberi angka aneh dan membesar** → hampir pasti `[[1]*kolom]*baris` (baris kembar). Suruh dia cetak `dp`; barisnya akan identik.
- **Soal 4 salah di tepi** → dia menyalin pola Soal 3 yang mengisi tepi dengan 1, padahal di sini tepi bisa terputus oleh halangan. Rumus `atas + kiri` menangani keduanya.
- **Soal 6 blinker tidak berdenyut** → dia menulis balik ke `grid` saat menghitung. Tegaskan: baca lama, tulis baru, jangan campur.
- **Lancar semua** → dia sudah menguasai seluruh jalur Python inti. Set **Campuran** berikutnya meminta satu soal dari tiap topik sekaligus, dan tetangga-delapan di sini adalah versi besar dari soal terakhirnya.

## Hubungan dengan seleksi

Soal 3 dan 4 adalah bentuk kecil dari menghitung lintasan di grid 7×7 (Q2 seleksi 2025) — di sana lintasannya mengeja `IOAI` dan biasanya diselesaikan dengan rekursi, tetapi pemrograman dinamis di sini adalah setengah jalan ke sana tanpa risiko rekursi yang dalam. Soal 1, 5, dan 6 adalah pola delapan-tetangga yang mendasari soal citra dan konvolusi. Anak yang lolos set ini memegang setiap alat grid yang pernah diuji.
