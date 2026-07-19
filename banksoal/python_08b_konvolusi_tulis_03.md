# Konvolusi — Tulis Kode 03 (Sedang)

Topik 8, menulis kode, tingkat **sedang**, dengan latihan terpadu untuk operasi CNN. Kamu akan membuat konvolusi 2D, ReLU pada grid, max pooling 2D, konvolusi dengan padding, pencarian respons terbesar, dan satu blok CNN sederhana berupa konvolusi yang diikuti pooling. Semuanya memakai operasi dasar yang sama: perkalian titik antara kernel dan petak masukan pada setiap posisi. Jika kamu dapat merakitnya, berarti kamu memahami perhitungan yang dilakukan sebuah lapisan konvolusi.

## Petunjuk jawaban

Bacalah cerita pada soal dulu. Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**. Nilaimu dihitung per baris uji, jadi lulus sebagian tetap bernilai.

Semua fungsi ini membangun **grid baru**; ukuran keluarannya mengikuti rumus Topik 8. Ingat `[[0]*lebar for _ in range(tinggi)]`, bukan `[[0]*lebar]*tinggi`.

Hanya Python standar, **tanpa NumPy**.

## Rumus cepat

- Konvolusi valid: keluaran `(tinggi - kt + 1) × (lebar - kl + 1)`; tiap sel adalah perkalian titik kernel dengan petak di bawahnya.
- ReLU grid: ganti tiap sel negatif dengan 0.
- Max pool `k×k`: bagi grid jadi petak `k×k` tak bertumpang, ambil maksimum tiap petak.
- Padding `p`: kelilingi grid dengan `p` lapis nol dulu, baru konvolusi valid.
- Bangun baris demi baris, dan **jangan** pakai `[[..]*n]*m` (baris kembar).

## Soal 1 — Konvolusi 2D

Geser `kernel` ke seluruh `grid` (stride 1, tanpa padding). Di tiap posisi, keluarannya adalah perkalian titik kernel dengan petak di bawahnya.

Tulis `konvolusi_2d(grid, kernel)` yang mengembalikan grid keluaran.

<pre class="starter">def konvolusi_2d(grid, kernel):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">konvolusi_2d([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 0], [0, 1]]) == [[6, 8], [12, 14]]
konvolusi_2d([[1, 1], [1, 1]], [[1, 1], [1, 1]]) == [[4]]
konvolusi_2d([[1, 2, 3]], [[1, 1]]) == [[3, 5]]</pre>

**Jawaban:** `_____`

---

## Soal 2 — ReLU pada grid

Terapkan ReLU ke tiap sel: negatif menjadi 0, sisanya tetap.

Tulis `relu(grid)` yang mengembalikan grid baru hasil ReLU.

<pre class="starter">def relu(grid):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">relu([[1, -2], [-3, 4]]) == [[1, 0], [0, 4]]
relu([[-1, -1], [-1, -1]]) == [[0, 0], [0, 0]]
relu([[5]]) == [[5]]</pre>

**Jawaban:** `_____`

---

## Soal 3 — Max pooling 2D

Bagi `grid` menjadi petak `k×k` tak bertumpang, dan ambil nilai terbesar tiap petak. Tinggi dan lebar `grid` selalu habis dibagi `k`.

Tulis `max_pool_2d(grid, k)` yang mengembalikan grid keluarannya.

<pre class="starter">def max_pool_2d(grid, k):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">max_pool_2d([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 2) == [[6, 8], [14, 16]]
max_pool_2d([[1, 0], [0, 0]], 2) == [[1]]
max_pool_2d([[5, 3], [2, 9]], 1) == [[5, 3], [2, 9]]</pre>

**Jawaban:** `_____`

---

## Soal 4 — Konvolusi dengan padding

Kelilingi `grid` dengan `p` lapis nol di keempat sisi, lalu lakukan konvolusi valid dengan `kernel`.

Tulis `konvolusi_2d_padding(grid, kernel, p)` yang mengembalikan grid keluarannya.

<pre class="starter">def konvolusi_2d_padding(grid, kernel, p):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">konvolusi_2d_padding([[1, 2], [3, 4]], [[1, 1], [1, 1]], 0) == [[10]]
konvolusi_2d_padding([[1, 1], [1, 1]], [[1, 1], [1, 1]], 1) == [[1, 2, 1], [2, 4, 2], [1, 2, 1]]
konvolusi_2d_padding([[5]], [[1, 1], [1, 1]], 1) == [[5, 5], [5, 5]]</pre>

**Jawaban:** `_____`

---

## Soal 5 — Respons terkuat

Sebuah kernel mendeteksi pola; posisi dengan respons terbesar adalah tempat pola itu paling cocok.

Tulis `respons_maks(grid, kernel)` yang mengembalikan **nilai** konvolusi terbesar di antara semua posisi valid.

<pre class="starter">def respons_maks(grid, kernel):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">respons_maks([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 0], [0, 1]]) == 14
respons_maks([[1, 1], [1, 1]], [[1, 1], [1, 1]]) == 4
respons_maks([[0, 0, 5], [0, 0, 0], [0, 0, 0]], [[1, 1], [1, 1]]) == 5</pre>

**Jawaban:** `_____`

---

## Soal 6 — Satu blok CNN

Sebuah blok CNN sederhana: konvolusi valid dengan `kernel`, lalu max pooling 2×2. Ini pola yang menciutkan gambar sambil menyoroti pola — diulang berkali-kali di sebuah jaringan. Ukuran keluaran konvolusi selalu habis dibagi 2.

Tulis `konvolusi_lalu_pool(grid, kernel)` yang mengembalikan grid setelah konvolusi lalu pooling 2×2.

<pre class="starter">def konvolusi_lalu_pool(grid, kernel):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">konvolusi_lalu_pool([[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]], [[1, 1], [1, 1]]) == [[4, 4], [4, 4]]
konvolusi_lalu_pool([[2, 2, 2], [2, 2, 2], [2, 2, 2]], [[1, 1], [1, 1]]) == [[8]]
konvolusi_lalu_pool([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]], [[1, 0], [0, 0]]) == [[7, 9], [17, 19]]</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def konvolusi_2d(grid, kernel):
    kt, kl = len(kernel), len(kernel[0])
    tinggi = len(grid) - kt + 1
    lebar = len(grid[0]) - kl + 1
    hasil = []
    for r in range(tinggi):
        baris = []
        for c in range(lebar):
            total = 0
            for i in range(kt):
                for j in range(kl):
                    total += grid[r + i][c + j] * kernel[i][j]
            baris.append(total)
        hasil.append(baris)
    return hasil</pre>

Empat perulangan bersarang, tetapi dua yang luar cuma memilih posisi `(r, c)` dan dua yang dalam adalah `nilai_di` dari Tulis Kode 02 — perkalian titik kernel dengan petak. Ukuran keluaran `(tinggi - kt + 1) × (lebar - kl + 1)` adalah rumus Topik 8, kali ini menentukan berapa baris dan kolom yang dibangun.

Uji `[[1, 2, 3]]` dengan kernel `[[1, 1]]` memberi `[[3, 5]]` — masukan 1×3, kernel 1×2, keluaran 1×2. Bangun `hasil` baris demi baris; jangan tergoda `[[0]*lebar]*tinggi`, yang membuat baris kembar.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def relu(grid):
    return [[x if x &gt; 0 else 0 for x in baris] for baris in grid]</pre>

ReLU pada grid adalah ReLU pada tiap baris. Comprehension bersarang: untuk tiap baris, untuk tiap sel, pertahankan kalau positif, ganti dengan 0 kalau tidak. `x if x > 0 else 0` sama dengan `max(x, 0)`.

Ini versi grid dari `relu_1d` Tulis Kode 02. Di sebuah jaringan, ReLU dipasang tepat setelah konvolusi, membuang respons negatif sebelum pooling — persis urutan yang kamu rakit di Soal 6 (di sana ReLU digabung, tetapi konsepnya sama).

## Soal 3

**Jawaban: kode**

<pre class="kunci">def max_pool_2d(grid, k):
    tinggi = len(grid) // k
    lebar = len(grid[0]) // k
    hasil = []
    for r in range(tinggi):
        baris = []
        for c in range(lebar):
            terbesar = grid[r * k][c * k]
            for i in range(k):
                for j in range(k):
                    if grid[r * k + i][c * k + j] &gt; terbesar:
                        terbesar = grid[r * k + i][c * k + j]
            baris.append(terbesar)
        hasil.append(baris)
    return hasil</pre>

Petak `(r, c)` di keluaran berasal dari sel `grid[r*k .. r*k+k]` dan `[c*k .. c*k+k]` — pojok kiri-atasnya di `(r*k, c*k)`. Telusuri petak `k×k` itu dan simpan yang terbesar (pola juara sementara dari Topik 6).

Keluaran berukuran `tinggi//k × lebar//k`: pooling 2×2 memotong tiap sisi menjadi setengah. Uji `k = 1` mengembalikan grid apa adanya — tiap petak 1×1 adalah selnya sendiri. Perhatikan perkalian `r * k` dan `c * k`: itu yang membuat jendela tak bertumpang.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def konvolusi_2d_padding(grid, kernel, p):
    tinggi, lebar = len(grid), len(grid[0])
    besar = [[0] * (lebar + 2 * p) for _ in range(tinggi + 2 * p)]
    for r in range(tinggi):
        for c in range(lebar):
            besar[r + p][c + p] = grid[r][c]
    kt, kl = len(kernel), len(kernel[0])
    ht = len(besar) - kt + 1
    hl = len(besar[0]) - kl + 1
    hasil = []
    for r in range(ht):
        baris = []
        for c in range(hl):
            total = 0
            for i in range(kt):
                for j in range(kl):
                    total += besar[r + i][c + j] * kernel[i][j]
            baris.append(total)
        hasil.append(baris)
    return hasil</pre>

Dua langkah. Pertama, bangun grid berpadding: sebuah grid nol yang lebih besar `2*p` di tiap sisi, lalu salin grid asli ke tengahnya (`besar[r+p][c+p]`). Kedua, konvolusi valid pada grid besar itu — kode yang sama dengan Soal 1.

Perhatikan `[[0] * (lebar + 2*p) for _ in range(tinggi + 2*p)]` memakai comprehension, bukan `* (tinggi + 2*p)` — kalau baris kembar, menyalin satu sel akan muncul di semua baris dan seluruh hasilnya rusak. Ini bug baris kembar dari Topik 6, dan di sini akibatnya fatal. Uji `[[5]]` dengan padding 1 menyebar satu nilai ke keluaran 2×2, memperlihatkan padding sedang bekerja.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def respons_maks(grid, kernel):
    kt, kl = len(kernel), len(kernel[0])
    tinggi = len(grid) - kt + 1
    lebar = len(grid[0]) - kl + 1
    terbesar = None
    for r in range(tinggi):
        for c in range(lebar):
            total = 0
            for i in range(kt):
                for j in range(kl):
                    total += grid[r + i][c + j] * kernel[i][j]
            if terbesar is None or total &gt; terbesar:
                terbesar = total
    return terbesar</pre>

Sama seperti `konvolusi_2d`, tetapi alih-alih menyimpan tiap nilai ke grid, kita cuma menyimpan yang **terbesar**. `terbesar = None` di awal (belum ada juara), lalu diperbarui tiap kali menemukan respons lebih besar — pola juara sementara yang sama dari `terdekat` (Topik 5) dan `sel_terbesar` (Topik 6).

Uji ketiga menaruh satu nilai besar (5) di pojok grid nol; posisi yang petaknya memuat 5 memberi respons tertinggi. Inilah cara sebuah kernel "menemukan" pola: posisi respons terkuat adalah tempat pola paling cocok.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def konvolusi_lalu_pool(grid, kernel):
    kt, kl = len(kernel), len(kernel[0])
    ct = len(grid) - kt + 1
    cl = len(grid[0]) - kl + 1
    conv = []
    for r in range(ct):
        baris = []
        for c in range(cl):
            total = 0
            for i in range(kt):
                for j in range(kl):
                    total += grid[r + i][c + j] * kernel[i][j]
            baris.append(total)
        conv.append(baris)
    pt, pl = len(conv) // 2, len(conv[0]) // 2
    hasil = []
    for r in range(pt):
        baris = []
        for c in range(pl):
            terbesar = conv[2 * r][2 * c]
            for i in range(2):
                for j in range(2):
                    if conv[2 * r + i][2 * c + j] &gt; terbesar:
                        terbesar = conv[2 * r + i][2 * c + j]
            baris.append(terbesar)
        hasil.append(baris)
    return hasil</pre>

Puncak topik, dan ternyata cuma dua bagian yang sudah kamu tulis, dipasang berurutan: `konvolusi_2d` menghasilkan peta fitur, lalu `max_pool_2d` dengan `k = 2` menciutkannya. Keluaran konvolusi menjadi masukan pooling.

Inilah satu **blok** CNN. Sebuah jaringan menumpuk banyak blok: tiap blok menyoroti pola (konvolusi) lalu memampatkan (pooling), sehingga gambar mengecil sementara maknanya mengental. Uji grid 5×5 menjadi 4×4 setelah konvolusi, lalu 2×2 setelah pooling — ukuran menyusut persis seperti rumus Topik 8 meramalkan. Merakit dua fungsi yang sudah teruji menjadi satu adalah keterampilan terakhir jalur ini.

# Catatan pengajar

## Peta soal

| Soal | Keterampilan | Menyiapkan / jebakan |
|---|---|---|
| 1 | konvolusi 2D penuh | ukuran keluaran; baris kembar |
| 2 | ReLU grid | — |
| 3 | max pooling 2D | jendela `r*k`, tak bertumpang |
| 4 | konvolusi + padding | comprehension, bukan baris kembar |
| 5 | respons terkuat | juara sementara mulai dari `None` |
| 6 | satu blok CNN | merakit dua fungsi teruji |

Soal 6 merangkum topik ini dengan menggabungkan `konvolusi_2d` (Soal 1) dan `max_pool_2d` (Soal 3) menjadi satu blok. Jika siswa dapat merakitnya dari dua bagian yang sudah lulus uji, berarti ia memahami bagaimana operasi dalam sebuah blok CNN disusun — pemahaman yang dibutuhkan untuk menghitung ukuran lapisan pada Soal 22–25.

## Cara membaca hasilnya

- **Semua soal grid rusak dengan pola aneh** → hampir pasti `[[..]*n]*m` (baris kembar). Suruh dia cetak hasilnya; baris-barisnya identik. Bug Topik 6 muncul lagi, kini fatal.
- **Soal 3 hasilnya bertumpang atau salah ukuran** → dia lupa mengalikan `r * k`. Jendela pooling melompat `k`, bukan 1.
- **Soal 4 salah di tepi** → padding-nya kurang atau lebih. Suruh dia cetak `besar` dan periksa lapisan nolnya.
- **Soal 5 salah untuk grid negatif** → dia memulai `terbesar = 0`. Mulai dari `None`, pelajaran yang sama berulang sejak Topik 5.
- **Soal 6 ukuran akhir salah** → biasanya konvolusinya benar tetapi pooling-nya keliru, atau sebaliknya. Suruh dia cetak `conv` di tengah untuk memisahkan kedua tahap.
- **Lancar semua** → dia telah menyelesaikan seluruh jalur Python: dari alur, list, fungsi, string, dictionary, grid, rekursi, sampai konvolusi. Set **Campuran** menanti sebagai ujian gabungan.

## Hubungan dengan seleksi

Soal 22–25 seleksi 2025 meminta ukuran keluaran dan jumlah parameter — yang dijawab Tulis Kode 01 dan 02. Tulis Kode 03 ini melangkah lebih jauh: benar-benar **menjalankan** konvolusi dan pooling, bukan cuma menghitung ukurannya. Jarang diminta di seleksi, tetapi menjalankannya sekali membuat rumus ukuran tidak lagi terasa seperti sihir — kamu tahu persis dari mana tiap angka datang.
