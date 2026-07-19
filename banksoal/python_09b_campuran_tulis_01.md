# Campuran — Tulis Kode 01

Set latihan campuran yang memadukan **enam topik dasar pertama**, dari perulangan sampai grid. Kerjakan setelah keenam topik tersebut selesai; jika dikerjakan lebih awal, wajar jika soal 5 dan 6 belum dapat diselesaikan. Keenam soal disusun dari yang lebih ringan ke yang lebih menantang, dan masing-masing mewakili pola yang dapat muncul dalam soal seleksi.

## Petunjuk jawaban

Setiap soal memberi kamu kerangka fungsi dan beberapa baris uji. Tugasmu: tulis isi fungsinya sampai **semua baris uji bernilai True**. Tekan **Jalankan** untuk mengujinya sebanyak yang kamu mau — tidak ada hukuman untuk mencoba.

Nilaimu dihitung per baris uji, jadi lulus 3 dari 4 tetap mendapat sebagian nilai. Baris uji juga menunjukkan perilaku fungsi yang diharapkan. Bacalah semuanya sebelum menulis kode agar kasus-kasus khusus tidak terlewat.

Hanya Python standar. **Tanpa NumPy** — pustaka luar memang tidak tersedia di sini, persis seperti aturan seleksi 2025. `math`, `collections`, dan `itertools` boleh.

## Rumus cepat

- Kandungan GC \(= \dfrac{\#G + \#C}{\text{panjang urutan}}\)
- \(\mathrm{MSE} = \dfrac{1}{n}\displaystyle\sum_{i=1}^{n}(y_i - \hat{y}_i)^2\)
- Jarak kuadrat \((x_1,y_1)\) ke \((x_2,y_2)\) \(= (x_1-x_2)^2 + (y_1-y_2)^2\) — akar tidak perlu jika hanya membandingkan.
- Sel \((r, k)\) punya paling banyak 8 tetangga: semua \((r+dr,\ k+dk)\) dengan \(dr, dk \in \{-1,0,1\}\), kecuali \((0,0)\).

## Soal 1 — Skor lomba cerdas cermat

Panitia mencatat skor tiap babak. Karena aturan lomba, hanya skor **genap** yang dijumlahkan; skor ganjil dianggap batal dan diabaikan.

Tulis `jumlah_genap(data)` yang mengembalikan jumlah semua bilangan genap di dalam `data`. Kalau tidak ada yang genap, hasilnya `0`.

<pre class="starter">def jumlah_genap(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jumlah_genap([3, 8, 5, 4]) == 12
jumlah_genap([1, 3, 5]) == 0
jumlah_genap([]) == 0
jumlah_genap([-2, 7, -4]) == -6</pre>

**Jawaban:** `_____`

---

## Soal 2 — Pengunjung perpustakaan

Bu Ratna mencatat jumlah pengunjung perpustakaan tiap hari dan ingin tahu rata-ratanya.

Tulis `rata_rata(data)` yang mengembalikan rata-rata isi `data`.

*Tuliskan jawaban sebagai kode Python.*

<pre class="starter">def rata_rata(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">abs(rata_rata([14, 18, 11, 20, 12]) - 15.0) &lt; 1e-9
abs(rata_rata([7]) - 7.0) &lt; 1e-9
abs(rata_rata([1, 2]) - 1.5) &lt; 1e-9</pre>

**Jawaban:** `_____`

---

## Soal 3 — Kandungan GC

Sebuah urutan DNA hanya berisi huruf `A`, `T`, `G`, dan `C`. **Kandungan GC** adalah bagian dari urutan itu yang berupa `G` atau `C` — angka antara 0 dan 1.

Tulis `kandungan_gc(urutan)` yang mengembalikan kandungan GC dari `urutan`.

<pre class="starter">def kandungan_gc(urutan):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">abs(kandungan_gc("GGCC") - 1.0) &lt; 1e-9
abs(kandungan_gc("ATAT") - 0.0) &lt; 1e-9
abs(kandungan_gc("ATGC") - 0.5) &lt; 1e-9
abs(kandungan_gc("AAATTTGGGCCC") - 0.5) &lt; 1e-9</pre>

**Jawaban:** `_____`

---

## Soal 4 — Seberapa meleset ramalannya

Dua model meramalkan penjualan. Untuk menilai mana yang lebih baik, kita ukur **MSE**: rata-rata dari kuadrat selisih antara nilai asli dan ramalan.

Tulis `mse(asli, ramalan)` yang mengembalikan MSE dari kedua list itu. Panjang keduanya selalu sama.

<pre class="starter">def mse(asli, ramalan):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">abs(mse([2, 4, 6, 8], [3, 4, 5, 10]) - 1.5) &lt; 1e-9
abs(mse([1, 2], [1, 2]) - 0.0) &lt; 1e-9
abs(mse([0], [3]) - 9.0) &lt; 1e-9</pre>

**Jawaban:** `_____`

---

## Soal 5 — Warung terdekat

Sebuah aplikasi ojek menyimpan letak warung sebagai dictionary: namanya menjadi kunci, koordinatnya `(x, y)` menjadi nilai.

Tulis `warung_terdekat(pos, warung)` yang mengembalikan **nama** warung yang paling dekat ke `pos`. Selalu ada tepat satu yang terdekat.

<pre class="starter">def warung_terdekat(pos, warung):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">warung_terdekat((0, 0), {"sate": (1, 2), "bakso": (4, 6), "soto": (-3, 1)}) == "sate"
warung_terdekat((4, 6), {"sate": (1, 2), "bakso": (4, 6), "soto": (-3, 1)}) == "bakso"
warung_terdekat((0, 0), {"anggrek": (3, 0)}) == "anggrek"</pre>

**Jawaban:** `_____`

---

## Soal 6 — Drone di atas sawah

Sebuah drone memotret petak sawah dan menyimpannya sebagai list string — `grid[r][k]` adalah huruf di baris `r`, kolom `k`. Setiap petak punya **paling banyak** 8 tetangga; petak di tepi dan di pojok punya lebih sedikit.

Tulis `hitung_tetangga(grid, r, k, huruf)` yang mengembalikan banyaknya tetangga sel `(r, k)` yang isinya sama dengan `huruf`. Sel `(r, k)` sendiri tidak ikut dihitung.

<pre class="starter">def hitung_tetangga(grid, r, k, huruf):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">hitung_tetangga(["AB", "BA"], 0, 0, "B") == 2
hitung_tetangga(["AAA", "AAA", "AAA"], 1, 1, "A") == 8
hitung_tetangga(["AAA", "AAA", "AAA"], 0, 0, "A") == 3
hitung_tetangga(["A"], 0, 0, "A") == 0</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def jumlah_genap(data):
    total = 0
    for n in data:
        if n % 2 == 0:
            total += n
    return total</pre>

Polanya disebut **akumulasi**: siapkan wadah, tambahkan sedikit demi sedikit, kembalikan wadahnya. `total = 0` harus berada **sebelum** perulangan — kalau di dalam, ia lahir kembali setiap putaran dan hasilnya hanya angka terakhir.

Uji `[]` ada bukan untuk menyulitkan: ia memastikan `total = 0` benar-benar ditulis, bukan `total = data[0]`. Uji `[-2, 7, -4]` memastikan kamu memakai `n % 2 == 0` dan bukan `n > 0 and n % 2 == 0` — di Python, `-2 % 2` tetap `0`.

Versi ringkasnya: `return sum(n for n in data if n % 2 == 0)`.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def rata_rata(data):
    return sum(data) / len(data)</pre>

Jebakannya ada di uji ketiga. `sum([1, 2]) // len([1, 2])` memberi `1`, bukan `1.5`: `//` membuang bagian pecahannya. Dua uji pertama lolos dengan `//` karena hasilnya kebetulan bulat — itulah sebabnya uji ketiga ada.

Pakai `/` bila kamu mau angka pecahan, `//` hanya bila kamu memang mau membuang sisanya.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def kandungan_gc(urutan):
    gc = urutan.count("G") + urutan.count("C")
    return gc / len(urutan)</pre>

`.count()` menghitung berapa kali sebuah huruf muncul, jadi tidak perlu perulangan sendiri. Sama seperti Soal 2, `/` wajib — dengan `//` semua uji akan memberi `0` kecuali yang `"GGCC"`.

Ini persis bentuk yang kamu butuhkan pada soal DNA seleksi 2025: setiap urutan diringkas menjadi beberapa angka, lalu angka-angka itu yang dibandingkan.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def mse(asli, ramalan):
    total = 0
    for a, r in zip(asli, ramalan):
        total += (a - r) ** 2
    return total / len(asli)</pre>

`zip` memasangkan kedua list sekaligus, jadi kamu tidak perlu mengurus indeks. Alternatifnya `for i in range(len(asli))` lalu `asli[i] - ramalan[i]` — sama benarnya, hanya lebih panjang.

Tiga hal yang sering salah: mengkuadratkan **setelah** menjumlahkan (harus sebelum), lupa membagi `len(asli)` sehingga yang dihitung SSE bukan MSE, dan memakai `abs` bukan `** 2`. Yang terakhir menghasilkan MAE — ukuran yang sah, tetapi bukan yang diminta.

**Jangan membulatkan di dalam fungsi ini.** Kalau nanti kamu memakai MSE untuk membandingkan dua garis, pembulatan dini bisa membuat dua garis tampak seri padahal tidak.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def warung_terdekat(pos, warung):
    def jarak2(p):
        return (p[0] - pos[0]) ** 2 + (p[1] - pos[1]) ** 2
    return min(warung, key=lambda nama: jarak2(warung[nama]))</pre>

`min(warung, ...)` berjalan di atas **kunci** dictionary, jadi yang dikembalikan sudah berupa nama — persis yang diminta. Tanpa `key=`, `min(warung)` mengembalikan nama yang paling kecil menurut abjad, yang kebetulan `"bakso"` dan sama sekali tidak ada hubungannya dengan jarak.

Akar kuadrat tidak dipakai. Kalau \(a &lt; b\) maka \(\sqrt{a} &lt; \sqrt{b}\), jadi mengurutkan dengan jarak kuadrat memberi urutan yang sama dengan jarak sesungguhnya — lebih cepat dan tanpa galat pembulatan.

Versi perulangan biasa juga benar:

<pre class="code">def warung_terdekat(pos, warung):
    terbaik, jarak_terbaik = None, None
    for nama, (x, y) in warung.items():
        d = (x - pos[0]) ** 2 + (y - pos[1]) ** 2
        if jarak_terbaik is None or d &lt; jarak_terbaik:
            terbaik, jarak_terbaik = nama, d
    return terbaik</pre>

Inilah inti soal mencocokkan vektor kata di seleksi 2025: setiap kata dibandingkan jaraknya ke beberapa pusat, lalu diambil yang terdekat.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def hitung_tetangga(grid, r, k, huruf):
    baris, kolom = len(grid), len(grid[0])
    total = 0
    for dr in (-1, 0, 1):
        for dk in (-1, 0, 1):
            if dr == 0 and dk == 0:
                continue
            nr, nk = r + dr, k + dk
            if 0 &lt;= nr &lt; baris and 0 &lt;= nk &lt; kolom and grid[nr][nk] == huruf:
                total += 1
    return total</pre>

Dua perulangan bersarang atas `(-1, 0, 1)` menghasilkan sembilan pasangan; `continue` membuang satu-satunya yang bukan tetangga, yaitu selnya sendiri. Ini lebih pendek dan lebih sulit disalahtulis daripada mendaftar kedelapan arah satu per satu.

Pemeriksaan batas `0 &lt;= nr &lt; baris` adalah bagian yang paling sering gagal. Tanpanya, `grid[-1][k]` **tidak error** — Python membaca indeks negatif sebagai hitungan dari belakang, jadi kodemu akan diam-diam menghitung tetangga dari sisi grid yang berlawanan. Uji `["A"]` dan pojok `(0, 0)` ada khusus untuk menangkap ini: keduanya lolos pada kode yang salah kalau batasnya tidak diperiksa.

Fungsi ini adalah setengah dari soal menghitung lintasan `IOAI` di seleksi 2025. Setengahnya lagi adalah rekursi yang memanggil fungsi ini berulang-ulang.

# Catatan pengajar

## Kenapa set ini ada

Set diagnostik (Pertemuan 7) menguji apakah dia bisa **membaca** Python. Set ini menguji apakah dia bisa **menulisnya**. Keduanya beda keterampilan, dan yang kedua tidak bisa dipalsukan: kodenya jalan atau tidak.

Seleksi 2025 tidak pernah meminta kode. Tapi tiap jawaban di sana adalah angka yang hanya bisa didapat dengan menulis kode. Jadi keterampilan ini tetap wajib — hanya saja hasilnya, bukan kodenya, yang dikirim.

## Peta soal

| Soal | Keterampilan | Jebakan yang ditanam | Soal 2025 |
|---|---|---|---|
| 1 | akumulasi, `%` | `total = 0` di dalam loop; `-2 % 2 == 0` | dasar semua soal |
| 2 | `sum`/`len` | `//` bukan `/` | Q8 |
| 3 | `.count`, pecahan | `//` bukan `/` | Q26–40 |
| 4 | `zip`, kuadrat selisih | kuadrat setelah jumlah; lupa bagi n | Q8, Q9 |
| 5 | dictionary, `min(key=)` | `min` tanpa `key=`; akar yang tak perlu | Q12–21 |
| 6 | grid, batas, tetangga 8 | `grid[-1]` diam-diam sah | Q2 |

## Cara membaca hasilnya

Nilai per soal adalah **pecahan uji yang lulus**, bukan benar/salah. Jadi lihat *uji mana* yang gagal, bukan hanya angkanya:

- Gagal hanya di uji terakhir Soal 2 atau 3 → dia paham logikanya, belum paham `/` lawan `//`. Lima menit.
- Gagal di uji `[]` Soal 1 → dia belum berpikir tentang kasus tepi. Ini kebiasaan, bukan pengetahuan, dan perlu diulang.
- Gagal di uji `["A"]` atau pojok Soal 6 → pemeriksaan batasnya bolong. Ini yang paling mahal: di soal grid sungguhan, kodenya akan berjalan mulus dan memberi angka yang salah.
- Soal 5 dan 6 kosong sementara 1–4 penuh → berhentinya di dictionary dan grid. Itu justru bagian yang paling berbobot; jangan lanjut ke rekursi sebelum ini beres.

## Catatan jujur

Halaman ini bukan pengawas. Kunci jawaban ikut terkirim ke browser (lihat "Deliberate limits" di `quiz/README.md`), jadi dia bisa membacanya lewat DevTools kalau mau. Untuk latihan mandiri ini tidak masalah — yang curang hanya merugikan dirinya. Untuk penilaian sungguhan, awasi langsung.

Kode yang dia tulis **ikut tersimpan** di log. Buka `/admin`, unduh JSON, dan kamu bisa membaca persis apa yang dia ketik pada tiap soal — termasuk soal yang gagal. Itu jauh lebih berguna daripada skornya.
