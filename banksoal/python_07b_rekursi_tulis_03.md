# Rekursi — Tulis Kode 03 (Sedang)

Topik 7, menulis kode, tingkat **sedang**, dan puncak topik ini. Rekursi bertemu grid. Menghitung lintasan, mengukur kedalaman, membanjiri sebuah wilayah, dan — puncaknya — menghitung berapa cara sebuah kata bisa dieja menyusuri papan. Yang terakhir adalah bentuk kecil dari Soal 2 seleksi 2025 (mengeja `IOAI` di grid 7×7), dan ternyata cuma rekursi yang memanggil dirinya untuk tiap huruf berikutnya.

## Petunjuk jawaban

Bacalah cerita pada soal dulu. Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**. Nilaimu dihitung per baris uji, jadi lulus sebagian tetap bernilai.

Soal 3 dan 6 berpasangan: `tetangga_valid` adalah alat yang dipakai `hitung_kata`. Kerjakan Soal 3 dulu.

Hanya Python standar, **tanpa NumPy**.

## Rumus cepat

- Lintasan kanan/bawah: `lintasan(b, k) = lintasan(b-1, k) + lintasan(b, k-1)`, dasar di tepi (`b == 1` atau `k == 1`).
- Kedelapan tetangga: `for dr in (-1,0,1): for dk in (-1,0,1)`, lewati `(0,0)`, saring dengan batas.
- Banjir (flood fill): tandai sel yang sudah dikunjungi (ubah jadi 0) supaya tidak dihitung dua kali.
- Mengeja kata: dari sel huruf ke-`i`, lanjutkan ke tetangga yang berisi huruf ke-`i+1`.
- Kasus dasar mengeja: huruf terakhir tercapai → satu lintasan lengkap.

## Soal 1 — Menghitung lintasan

Robot mulai di pojok kiri-atas papan `baris × kolom`, hanya melangkah **kanan atau bawah**, menuju kanan-bawah.

Tulis `jumlah_lintasan(baris, kolom)` yang mengembalikan banyaknya lintasan, secara **rekursif** (tanpa grid `dp`).

<pre class="starter">def jumlah_lintasan(baris, kolom):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jumlah_lintasan(1, 1) == 1
jumlah_lintasan(2, 2) == 2
jumlah_lintasan(2, 3) == 3
jumlah_lintasan(3, 3) == 6</pre>

**Jawaban:** `_____`

---

## Soal 2 — Kedalaman list

Sebuah list bisa berisi list, sedalam apa pun. **Kedalaman** list datar adalah 1; tiap lapis sarang menambah satu.

Tulis `kedalaman(data)` yang mengembalikan kedalaman sarang terdalam di `data`.

<pre class="starter">def kedalaman(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">kedalaman([1, 2, 3]) == 1
kedalaman([1, [2, 3]]) == 2
kedalaman([1, [2, [3, 4]]]) == 3
kedalaman([]) == 1</pre>

**Jawaban:** `_____`

---

## Soal 3 — Tetangga yang sah

Untuk menyusuri papan, kita butuh daftar tetangga sebuah sel yang masih di dalam grid — kedelapan arah, termasuk diagonal.

Tulis `tetangga_valid(grid, r, k)` yang mengembalikan **list** pasangan `(nr, nk)` untuk tiap tetangga `(r, k)` yang di dalam grid. Urutkan dengan mencoba `dr` lalu `dk` dari `-1` ke `1`.

<pre class="starter">def tetangga_valid(grid, r, k):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">tetangga_valid([[0, 0], [0, 0]], 0, 0) == [(0, 1), (1, 0), (1, 1)]
len(tetangga_valid([[0, 0, 0], [0, 0, 0], [0, 0, 0]], 1, 1)) == 8
tetangga_valid([[5]], 0, 0) == []</pre>

**Jawaban:** `_____`

---

## Soal 4 — Lintasan dengan halangan

Sekarang papannya berisi halangan: sel `1` tak boleh diinjak, sel `0` boleh. Robot mulai di kiri-atas, melangkah kanan/bawah, menuju kanan-bawah. Sel awal dan akhir dijamin `0`.

Tulis `jumlah_lintasan_halangan(grid)` yang mengembalikan banyaknya lintasan sah, secara **rekursif**.

<pre class="starter">def jumlah_lintasan_halangan(grid):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jumlah_lintasan_halangan([[0, 0], [0, 0]]) == 2
jumlah_lintasan_halangan([[0, 1], [0, 0]]) == 1
jumlah_lintasan_halangan([[0, 0, 0], [0, 1, 0], [0, 0, 0]]) == 2
jumlah_lintasan_halangan([[0]]) == 1</pre>

**Jawaban:** `_____`

---

## Soal 5 — Luas pulau

Sebuah peta berisi 1 (daratan) dan 0 (laut). Sebuah **pulau** adalah kumpulan sel daratan yang terhubung ke atas/bawah/kiri/kanan.

Tulis `luas_pulau(grid, r, k)` yang mengembalikan banyaknya sel daratan yang terhubung dengan `(r, k)`. Kalau `(r, k)` adalah laut, hasilnya 0. Kamu boleh mengubah `grid` untuk menandai sel yang sudah dihitung.

<pre class="starter">def luas_pulau(grid, r, k):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">luas_pulau([[1, 1, 0], [1, 0, 0], [0, 0, 1]], 0, 0) == 3
luas_pulau([[1]], 0, 0) == 1
luas_pulau([[0, 0], [0, 0]], 0, 0) == 0
luas_pulau([[1, 0, 1], [1, 0, 1], [1, 1, 1]], 0, 0) == 7</pre>

**Jawaban:** `_____`

---

## Soal 6 — Menghitung kata di grid

Papan huruf disimpan sebagai list string: `grid[r][k]` adalah huruf di baris `r`, kolom `k`. Sebuah kata dieja dengan melangkah dari huruf ke huruf berikutnya melalui salah satu dari **delapan** tetangga. Sel yang sama boleh dilewati lagi.

Tulis `hitung_kata(grid, kata)` yang mengembalikan banyaknya lintasan berbeda yang mengeja `kata`.

<pre class="starter">def hitung_kata(grid, kata):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">hitung_kata(["AB", "CD"], "A") == 1
hitung_kata(["CAT"], "CAT") == 1
hitung_kata(["CAT", "CAT"], "CAT") == 8
hitung_kata(["CAT", "CAT"], "DOG") == 0
hitung_kata(["AB"], "ABA") == 1</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def jumlah_lintasan(baris, kolom):
    if baris == 1 or kolom == 1:
        return 1
    return jumlah_lintasan(baris - 1, kolom) + jumlah_lintasan(baris, kolom - 1)</pre>

Kasus dasar: papan setinggi atau selebar 1 hanya punya satu lintasan (lurus terus). Kasus rekursif: sel tujuan dicapai dari **atas** atau **kiri**, jadi lintasannya jumlah keduanya.

Ini jawaban yang sama dengan versi grid `dp` di Topik 6, ditulis dari arah sebaliknya: `dp` membangun dari sel kecil ke besar, rekursi memecah dari besar ke kecil. Keduanya benar; rekursi lebih pendek ditulis, tetapi memanggil dirinya berulang untuk sel yang sama — untuk papan besar, `dp` lebih cepat.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def kedalaman(data):
    d = 1
    for x in data:
        if isinstance(x, list):
            d = max(d, 1 + kedalaman(x))
    return d</pre>

Mulai dari kedalaman 1 (list ini sendiri). Untuk tiap isi yang berupa **list**, kedalaman yang mungkin adalah `1 + kedalaman(isi itu)`; ambil yang terbesar. Isi yang bukan list tidak menambah kedalaman.

Uji `[]` memberi 1: perulangan tidak jalan, `d` tetap 1. Ini rekursi yang bercabang mengikuti bentuk data, seperti `jumlah_bersarang` di Tulis Kode 02 — tetapi alih-alih menjumlahkan, ia mengambil maksimum lapisan. Kerangka yang sama, ukuran yang berbeda.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def tetangga_valid(grid, r, k):
    baris, kolom = len(grid), len(grid[0])
    hasil = []
    for dr in (-1, 0, 1):
        for dk in (-1, 0, 1):
            if dr == 0 and dk == 0:
                continue
            nr, nk = r + dr, k + dk
            if 0 &lt;= nr &lt; baris and 0 &lt;= nk &lt; kolom:
                hasil.append((nr, nk))
    return hasil</pre>

Kedelapan geseran dicoba; `(0, 0)` dilewati (sel itu sendiri), dan hanya tetangga di dalam grid yang masuk daftar. Urutan `dr` lalu `dk` dari `-1` ke `1` menentukan urutan hasilnya — itu sebabnya uji pertama memeriksa list yang persis.

Ini `tetangga8` dari Topik 6, tetapi mengembalikan **koordinatnya**, bukan menghitung. Bentuk ini yang dibutuhkan `hitung_kata`: dari sel sekarang, ke mana saja langkah berikutnya boleh pergi.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def jumlah_lintasan_halangan(grid):
    baris, kolom = len(grid), len(grid[0])
    def cari(r, k):
        if r &gt;= baris or k &gt;= kolom:
            return 0
        if grid[r][k] == 1:
            return 0
        if r == baris - 1 and k == kolom - 1:
            return 1
        return cari(r + 1, k) + cari(r, k + 1)
    return cari(0, 0)</pre>

Fungsi dalam `cari(r, k)` menghitung lintasan dari `(r, k)` ke sudut kanan-bawah. Tiga kasus dasar: keluar grid (0 lintasan), menabrak halangan (0 lintasan), dan tiba di tujuan (1 lintasan). Selain itu, jumlahkan lintasan lewat bawah dan lewat kanan.

Berbeda dari Soal 1 yang memakai jumlah baris/kolom, di sini kita bergerak dengan **koordinat** `(r, k)` karena tiap sel bisa terhalang. Uji 3×3 dengan pusat terhalang memberi 2 — dari 6 lintasan tanpa halangan, empat yang lewat pusat gugur. Inilah bentuk rekursif dari soal menghitung lintasan berhalangan di seleksi.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def luas_pulau(grid, r, k):
    if not (0 &lt;= r &lt; len(grid) and 0 &lt;= k &lt; len(grid[0])):
        return 0
    if grid[r][k] != 1:
        return 0
    grid[r][k] = 0
    return 1 + luas_pulau(grid, r - 1, k) + luas_pulau(grid, r + 1, k) \
             + luas_pulau(grid, r, k - 1) + luas_pulau(grid, r, k + 1)</pre>

Kalau sel di luar grid atau bukan daratan, ia menyumbang 0. Kalau daratan, hitung ia (1) lalu banjiri keempat tetangganya. Kuncinya `grid[r][k] = 0` **sebelum** merekursi: menandai sel yang sudah dihitung sebagai laut, supaya tidak dihitung ulang dan rekursinya tidak berputar selamanya.

Tanpa penandaan itu, dua sel daratan bertetangga akan saling memanggil tak henti → `RecursionError`. Inilah beda "banjir" dari "mengeja kata": banjir **melarang** kembali ke sel yang sama, sedangkan mengeja kata (Soal 6) **mengizinkannya**. Perhatikan mana yang menandai kunjungan dan mana yang tidak — itu yang membedakan keduanya.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def hitung_kata(grid, kata):
    if not kata or not grid:
        return 0
    baris, kolom = len(grid), len(grid[0])
    def tetangga(r, k):
        hasil = []
        for dr in (-1, 0, 1):
            for dk in (-1, 0, 1):
                if dr == 0 and dk == 0:
                    continue
                nr, nk = r + dr, k + dk
                if 0 &lt;= nr &lt; baris and 0 &lt;= nk &lt; kolom:
                    hasil.append((nr, nk))
        return hasil
    def lanjut(r, k, i):
        if i == len(kata) - 1:
            return 1
        total = 0
        for nr, nk in tetangga(r, k):
            if grid[nr][nk] == kata[i + 1]:
                total += lanjut(nr, nk, i + 1)
        return total
    total = 0
    for r in range(baris):
        for k in range(kolom):
            if grid[r][k] == kata[0]:
                total += lanjut(r, k, 0)
    return total</pre>

`lanjut(r, k, i)` mengembalikan banyaknya cara mengeja **sisa** kata, dengan `grid[r][k]` berisi huruf ke-`i`. Kasus dasar: kalau `i` sudah huruf terakhir, satu lintasan selesai. Selain itu, jumlahkan lintasan dari tiap tetangga yang berisi huruf berikutnya.

Bagian luar mencoba tiap sel yang cocok dengan huruf **pertama** sebagai titik mulai. Tidak ada penandaan kunjungan — soalnya mengizinkan sel dilewati lagi (lihat uji `hitung_kata(["AB"], "ABA")`, yang bolak-balik di dua sel). Untuk `["CAT", "CAT"]` mengeja `"CAT"`, ada 8 lintasan: dua huruf C awal, masing-masing punya dua A, dan tiap A punya dua T. Ganti grid 2×3 ini dengan 7×7 dan kata `IOAI`, dan kamu punya Soal 2 seleksi 2025 utuh — kode yang sama, ukuran yang lebih besar.

# Catatan pengajar

## Peta soal

| Soal | Keterampilan | Menyiapkan | Jebakan |
|---|---|---|---|
| 1 | lintasan rekursif | Q2 seleksi | — |
| 2 | kedalaman, cabang data | pola pohon | mengira sarang kosong = 0 |
| 3 | tetangga sebagai koordinat | Soal 6 | urutan/batas |
| 4 | lintasan berhalangan | Q2 seleksi | koordinat, bukan hitungan baris |
| 5 | flood fill, **tandai kunjungan** | soal wilayah | lupa menandai → `RecursionError` |
| 6 | **mengeja kata** (Q2) | Soal 2 seleksi | menandai kunjungan padahal boleh lewat lagi |

Soal 5 dan 6 adalah pasangan yang mengajarkan satu keputusan besar: **boleh kembali ke sel yang sama atau tidak**. Flood fill melarang (dan menandai); mengeja kata mengizinkan (dan tidak menandai). Kalau dia paham perbedaan ini, dia paham hal tersulit tentang rekursi di grid.

## Cara membaca hasilnya

- **Soal 1 lambat atau salah untuk papan besar** → wajar untuk rekursi polos; tegaskan `dp` Topik 6 lebih cepat untuk ukuran penuh.
- **Soal 5 kena `RecursionError`** → dia lupa `grid[r][k] = 0`. Dua sel bertetangga saling memanggil tanpa henti. Ini pelajaran intinya.
- **Soal 6 memberi angka terlalu kecil** → biasanya dia menandai kunjungan (menyalin pola flood fill), padahal kata boleh melewati sel lagi. Uji `["AB"], "ABA"` menangkapnya.
- **Soal 6 memberi angka terlalu besar** → batas tetangga bolong, atau ia menghitung huruf yang salah. Suruh dia cetak lintasan pada contoh `["CAT"]`.
- **Lancar semua** → dia sudah menguasai rekursi grid, bagian tersulit dari jalur Python. Topik berikutnya (Konvolusi) kembali ke aritmetika yang lebih tenang.

## Hubungan dengan seleksi

Soal 6 adalah Soal 2 seleksi 2025 dalam bentuk kecil: mengeja kata menyusuri grid dengan delapan arah dan boleh mengulang sel. Soal 1 dan 4 adalah versi menghitung lintasan yang murni, tanpa mengeja. Soal 5 (flood fill) adalah pola menghitung wilayah yang muncul di soal citra. Ketiganya rekursi grid — dan menandai atau tidak menandai kunjungan adalah satu-satunya hal yang membedakan jawaban benar dari yang menggantung.
