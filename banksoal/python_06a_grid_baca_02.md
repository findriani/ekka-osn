# Grid — Baca Kode 02

Topik 6, membaca kode, tingkat lanjut. Sekarang kita membahas kesalahan yang sering tidak menimbulkan error. Bentuk `[[0] * k] * b` membuat semua baris merujuk ke list yang sama, sedangkan `grid[-1]` membaca baris terakhir meskipun indeks negatif mungkin tidak dimaksudkan. Ada juga indeks baris dan kolom yang tertukar, serta nama lain yang masih merujuk ke baris yang sama. Programnya tetap berjalan, tetapi hasilnya bisa keliru.

## Petunjuk jawaban

Kerjakan **tanpa komputer**. Untuk soal yang mengubah grid, gambar kotak-dan-panah: satu kotak untuk tiap baris, panah dari nama ke kotaknya. Bug grid selalu soal "berapa kotak sebenarnya ada", dan panah membuatnya kelihatan.

Tuliskan jawaban sebagai bilangan bulat, kecuali pada soal pilihan ganda.

## Rumus cepat

- `[[0] * k] * b` → **satu** baris ditunjuk `b` kali. Ubah satu sel, semua ikut.
- `[[0] * k for _ in range(b)]` → `b` baris berbeda. Hampir selalu yang kamu mau.
- `grid[-1]` adalah baris **terakhir**, bukan error. Indeks negatif menghitung dari belakang.
- `baris = grid[0]` **bukan** menyalin — menulis lewat `baris` mengubah `grid`.
- Sel `(r, k)` di dalam grid kalau `0 <= r < len(grid)` **dan** `0 <= k < len(grid[0])`.

## Soal 1 — Baris kembar

Kode ini membuat grid dengan cara yang kelihatan wajar, mengubah satu sel di baris pertama, lalu mencetak sel yang seharusnya tak tersentuh di baris kedua.

<pre class="code">grid = [[0] * 3] * 2
grid[0][1] = 5
print(grid[1][1])</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 2 — Indeks dari belakang

Kode membaca sebuah sel dengan indeks baris `-1`. Ingat bahwa `-1` bukan error; ia menunjuk baris terakhir.

<pre class="code">grid = [[1, 2], [3, 4], [5, 6]]
print(grid[-1][1])</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 3 — Membuat tiga baris berbeda

Kita ingin grid 3×3 berisi nol dengan tiga baris yang benar-benar terpisah, sehingga mengubah satu sel tidak mengubah baris lain.

Manakah yang menghasilkannya?

- **A.** `[[0] * 3] * 3`
- **B.** `[[0] * 3 for _ in range(3)]`
- **C.** `[[0, 0, 0]] * 3`
- **D.** `[0] * 3 * 3`

**Jawaban:** `_____`

---

## Soal 4 — Kolom yang tertukar

Fungsi ini seharusnya menjumlahkan kolom ke-`k`, tetapi memberi angka yang salah tanpa error (selama gridnya persegi). Perhatikan urutan indeks di dalam perulangan.

<pre class="code">1  def jumlah_kolom(grid, k):
2      total = 0
3      for r in range(len(grid)):
4          total += grid[k][r]
5      return total</pre>

Baris nomor berapa yang menjadi penyebab kesalahannya?

**Jawaban:** `_____`

---

## Soal 5 — Tetangga di dalam batas

Kode menghitung berapa tetangga sel `(1, 1)` yang masih di dalam grid 3×3. Kedelapan arah dicoba; sel itu sendiri dilewati dengan `continue`.

<pre class="code">grid = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
def di_dalam(r, k):
    return 0 &lt;= r &lt; 3 and 0 &lt;= k &lt; 3

c = 0
for dr in [-1, 0, 1]:
    for dk in [-1, 0, 1]:
        if dr == 0 and dk == 0:
            continue
        if di_dalam(1 + dr, 1 + dk):
            c += 1
print(c)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 6 — Menulis lewat nama lain

Kode memberi nama `baris` kepada baris pertama grid, mengubah satu selnya, lalu mencetak sel yang sama lewat `grid`.

<pre class="code">grid = [[1, 2], [3, 4]]
baris = grid[0]
baris[0] = 9
print(grid[0][0])</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: 5**

`[[0] * 3] * 2` **tidak** membuat dua baris. Ia membuat satu baris `[0, 0, 0]`, lalu membuat list yang menunjuk baris yang sama itu dua kali. `grid[0]` dan `grid[1]` adalah benda yang sama.

Jadi `grid[0][1] = 5` mengubah satu-satunya baris yang ada, dan `grid[1][1]` — yang menunjuk baris yang sama — ikut menjadi **5**.

| yang kamu tulis | apa yang terjadi |
|---|---|
| `[[0] * 3] * 2` | satu baris, ditunjuk dua kali — **kembar** |
| `[[0] * 3 for _ in range(2)]` | dua baris berbeda |

Ini kesalahan grid nomor satu, dan ia tidak pernah melempar error. Program berjalan mulus dan memberi angka yang salah. Satu-satunya obatnya adalah membuat tiap baris dengan `for`.

## Soal 2

**Jawaban: 6**

`grid[-1]` adalah baris **terakhir**, `[5, 6]`. Lalu `[1]` mengambil kolomnya yang ke-1 → **6**.

Indeks negatif menghitung dari belakang: `-1` yang terakhir, `-2` sebelumnya. Ini fitur yang berguna — tetapi juga alasan bug grid tidak melempar error. Kalau perhitungan barismu keliru menjadi `-1`, Python tidak protes; ia diam-diam membaca baris terakhir dan memberimu angka dari tempat yang salah. `IndexError` hanya muncul kalau indeksnya lebih negatif daripada panjang gridnya.

## Soal 3

**Jawaban: B**

| pilihan | hasil |
|---|---|
| **A.** `[[0] * 3] * 3` | tiga baris **kembar** — bug Soal 1 |
| **B.** `[[0] * 3 for _ in range(3)]` | tiga baris **berbeda** ✓ |
| **C.** `[[0, 0, 0]] * 3` | tiga baris kembar, cara lain menulis A |
| **D.** `[0] * 3 * 3` | `[0, 0, 0, 0, 0, 0, 0, 0, 0]` — list datar, bukan grid |

A dan C adalah jebakan yang sama dari dua arah: keduanya menyalin **acuan** ke satu baris, bukan membuat baris baru. D bahkan bukan grid — `[0] * 3 * 3` sama dengan `[0] * 9`, sembilan nol dalam satu baris tanpa struktur.

Hanya B yang menjalankan `[0] * 3` **sekali untuk tiap baris**, jadi lahir tiga list yang berbeda. Hafalkan bentuk ini; kamu memakainya di tiap soal Tulis Kode grid.

## Soal 4

**Jawaban: 4**

Baris 4 menulis `grid[k][r]`, padahal seharusnya `grid[r][k]`. Indeksnya tertukar: fungsi ini menjumlahkan **baris** ke-`k`, bukan kolom ke-`k`.

Selama gridnya persegi, ini tidak melempar error — ukuran baris dan kolom sama, jadi kedua indeks selalu sah. Ia cuma memberi angka dari arah yang salah. Kalau gridnya tidak persegi, `grid[k][r]` bisa keluar batas dan melempar `IndexError` di baris 4.

Aturannya, sekali lagi: `grid[r][k]` selalu baris dulu, kolom kemudian. Untuk kolom, kamu harus mengumpulkan `grid[r][k]` dari tiap baris `r` — bukan menukar indeksnya.

## Soal 5

**Jawaban: 8**

Sel `(1, 1)` ada di tengah grid 3×3, jadi **semua** delapan tetangganya berada di dalam grid. `continue` membuang satu-satunya pasangan `(0, 0)` (sel itu sendiri), menyisakan delapan arah, dan `di_dalam` meloloskan kedelapannya.

Jawabannya **8**.

Kalau sel yang ditanya ada di pojok, misalnya `(0, 0)`, hanya tiga tetangga yang di dalam grid dan `di_dalam` akan menolak lima sisanya. Itulah gunanya pemeriksaan batas: di tengah ia meloloskan semua, di tepi ia menyaring. Pola `for dr in [-1,0,1]: for dk in [-1,0,1]:` dengan `continue` untuk `(0,0)` adalah cara baku menyusuri delapan tetangga — kamu menulisnya sendiri di Tulis Kode 03.

## Soal 6

**Jawaban: 9**

`baris = grid[0]` tidak menyalin baris pertama; ia memberi nama kedua kepada baris yang sama. Jadi `baris[0] = 9` mengubah `grid[0][0]` juga, dan yang dicetak adalah **9**.

Ini aliasing dari Topik 2, muncul lagi di dalam grid. Sebuah baris grid adalah list biasa, dan `baris = grid[0]` tunduk pada aturan yang sama dengan `b = a`. Kalau kamu mau menyalin barisnya, tulis `baris = grid[0][:]`.

Inilah kenapa menyalin grid butuh menyalin **tiap baris**, bukan cuma list luarnya — persis yang kamu pelajari di `salin_grid` Topik 2, dan yang kamu pakai lagi saat mencoba langkah pada papan tanpa merusak aslinya.

# Catatan pengajar

## Peta soal

| Soal | Bentuk | Keterampilan | Jebakan |
|---|---|---|---|
| 1 | lacak | `[[0]*k]*b` baris kembar | mengira dua baris terpisah |
| 2 | lacak | `grid[-1]` baris terakhir | mengira indeks negatif error |
| 3 | pilihan ganda | membuat baris berbeda | A dan C kembar; D datar |
| 4 | cari baris salah | `grid[r][k]` urutan | menukar jadi `grid[k][r]` |
| 5 | lacak | tetangga + batas | — |
| 6 | lacak | aliasing baris | mengira `baris = grid[0]` menyalin |

Soal 1, 2, dan 6 adalah tiga wajah dari satu keluarga bug: acuan bersama dan indeks negatif. Ketiganya **tidak melempar error**, dan itulah yang membuatnya mahal — di soal seleksi, kodenya berjalan mulus sampai menit terakhir dan memberi angka yang salah tanpa jejak. Soal 3 adalah pencegahannya; Soal 5 adalah alat yang benar.

## Cara membaca hasilnya

- **Salah di 1 atau 3** → dia belum melihat baris kembar. Jangan cuma jelaskan; suruh dia jalankan `g = [[0]*3]*2; g[0][0] = 9; print(g)` sendiri. Melihat kedua baris berubah bersama lebih meyakinkan daripada kalimat apa pun.
- **Salah di 2** → dia mengira `grid[-1]` error. Justru sebaliknya, dan itu bahayanya. Hubungkan ke Soal 6: keduanya bug yang diam.
- **Salah di 4** → baris/kolom tertukar. Sama dengan `jumlah_kolom` Topik 2; kalau muncul lagi di sini, latih ulang pola kolom.
- **Salah di 6** → aliasing baris. Setengah langkah dari paham: dia sudah tahu grid punya baris, belum tahu baris itu bisa punya dua nama.
- **Benar semua** → dia siap menulis kode grid tanpa terjebak bug tak kasatmata. Langsung Tulis Kode 01.

## Hubungan dengan seleksi

Soal 1, 2, dan 6 adalah tepat kelas bug yang membuat jawaban soal grid 7×7 (menghitung lintasan `IOAI`, Q2 seleksi 2025) meleset tanpa peringatan. Soal 5 adalah pola delapan-tetangga yang menjadi tulang punggung soal citra dan papan. Anak yang lolos set ini tidak akan kehilangan satu jam memburu bug grid yang tidak pernah melempar error.
