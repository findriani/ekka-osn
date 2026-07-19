# Grid — Baca Kode 01

Topik 6, membaca kode. Grid adalah **list yang isinya list**: `grid[r][k]` adalah sel di baris `r`, kolom `k`. Setiap soal peta, papan, dan citra di seleksi berbentuk begini — termasuk grid 7×7 pada soal menghitung lintasan. Set ini melatih membacanya: menelusuri semua sel, membaca `grid[r][k]` dengan urutan yang benar, dan membedakan `len(grid)` dari `len(grid[0])`.

## Petunjuk jawaban

Kerjakan **tanpa komputer**. Untuk soal grid, gambar kotaknya di kertas dan tulis nomor baris di kiri, nomor kolom di atas. Hampir semua kesalahan grid adalah baris dan kolom yang tertukar; menuliskannya membuatnya kelihatan.

Tuliskan jawaban sebagai bilangan bulat, kecuali pada soal pilihan ganda.

## Rumus cepat

- `grid[r][k]` → baris `r` **dulu**, baru kolom `k`.
- `len(grid)` banyaknya **baris** · `len(grid[0])` banyaknya **kolom**.
- Menelusuri semua sel: `for r in range(len(grid)): for k in range(len(grid[0])):`.
- Menelusuri isi langsung: `for baris in grid: for x in baris:`.
- Diagonal utama sebuah grid persegi: `grid[i][i]` untuk tiap `i`.

## Soal 1 — Menjumlahkan seluruh papan

Panitia menjumlahkan semua angka di papan skor. Perulangan luar mengambil tiap baris; perulangan dalam mengambil tiap angka di baris itu.

<pre class="code">grid = [[1, 2], [3, 4]]
total = 0
for baris in grid:
    for x in baris:
        total += x
print(total)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 2 — Menghitung petak berisi

Sebuah peta menyimpan 1 untuk petak terisi dan 0 untuk petak kosong. Kode menghitung berapa petak yang berisi 1, menelusuri tiap baris dan tiap kolom.

<pre class="code">grid = [[1, 0, 1], [0, 1, 0]]
c = 0
for r in range(len(grid)):
    for k in range(len(grid[0])):
        if grid[r][k] == 1:
            c += 1
print(c)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 3 — Baris atau kolom

Grid ini punya 2 baris dan 3 kolom. Ingat bahwa `len(grid)` menghitung baris, sedangkan `len(grid[0])` menghitung isi baris pertama, yaitu banyaknya kolom.

<pre class="code">grid = [[1, 2, 3], [4, 5, 6]]</pre>

Manakah yang bernilai **3** (banyaknya kolom)?

- **A.** `len(grid)`
- **B.** `len(grid[0])`
- **C.** `len(grid[0][0])`
- **D.** `len(grid) * len(grid[0])`

**Jawaban:** `_____`

---

## Soal 4 — Dua sel

Kode membaca dua sel dan menjumlahkannya. Perhatikan urutan indeks: yang pertama baris, yang kedua kolom.

<pre class="code">grid = [[5, 6, 7], [8, 9, 10]]
print(grid[0][2] + grid[1][0])</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 5 — Diagonal

Kode menjumlahkan diagonal utama sebuah grid persegi, yaitu sel-sel yang baris dan kolomnya sama: `grid[0][0]`, `grid[1][1]`, `grid[2][2]`.

<pre class="code">grid = [[2, 1, 1], [1, 3, 1], [1, 1, 4]]
total = 0
for i in range(3):
    total += grid[i][i]
print(total)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 6 — Angka terbesar

Kode mencari angka terbesar di seluruh grid. Ia mulai dengan menganggap sel pertama sebagai juara sementara, lalu menggantinya tiap kali menemukan yang lebih besar.

<pre class="code">grid = [[3, 8, 1], [6, 2, 7]]
m = grid[0][0]
for baris in grid:
    for x in baris:
        if x > m:
            m = x
print(m)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: 10**

Perulangan bersarang: untuk tiap baris, untuk tiap angka di baris itu, tambahkan.

| baris | angka | `total` |
|---|---|---|
| `[1, 2]` | 1, 2 | 1, 3 |
| `[3, 4]` | 3, 4 | 6, 10 |

1 + 2 + 3 + 4 = **10**.

Bentuk `for baris in grid: for x in baris:` adalah cara paling lugas menyentuh tiap sel — tanpa indeks sama sekali. Pakai ini kalau kamu cuma butuh **isinya**; pakai indeks kalau kamu butuh tahu **di mana** selnya.

## Soal 2

**Jawaban: 3**

Telusuri tiap `(r, k)` dan hitung yang berisi 1:

| sel | isi | hitung? |
|---|---|---|
| (0,0) | 1 | ✓ |
| (0,1) | 0 | |
| (0,2) | 1 | ✓ |
| (1,0) | 0 | |
| (1,1) | 1 | ✓ |
| (1,2) | 0 | |

Ada **3** petak berisi 1.

Perhatikan `range(len(grid))` memberi nomor **baris** (0, 1) dan `range(len(grid[0]))` memberi nomor **kolom** (0, 1, 2). Dua `len` yang berbeda, dua arti yang berbeda — dan menukarnya adalah kesalahan grid nomor satu.

## Soal 3

**Jawaban: B**

| pilihan | hasil | kenapa |
|---|---|---|
| **A.** `len(grid)` | 2 | banyaknya baris |
| **B.** `len(grid[0])` | **3** ✓ | banyaknya isi di baris pertama = kolom |
| **C.** `len(grid[0][0])` | error | `grid[0][0]` adalah `1`, sebuah angka — `len` sebuah angka error |
| **D.** `len(grid) * len(grid[0])` | 6 | banyaknya seluruh sel |

`grid[0]` adalah baris pertama, `[1, 2, 3]`, dan panjangnya 3 — itulah banyaknya kolom. Ingat: `len(grid)` baris, `len(grid[0])` kolom. Pilihan C adalah pengingat bahwa `grid[0][0]` sudah berupa **angka**, bukan list, jadi tidak punya panjang.

## Soal 4

**Jawaban: 15**

Baca urutan indeksnya baik-baik:

- `grid[0][2]` → baris 0, kolom 2 → **7**
- `grid[1][0]` → baris 1, kolom 0 → **8**

7 + 8 = **15**.

Kalau kamu tertukar dan membaca `grid[2][0]`, Python melempar `IndexError` — grid ini cuma punya baris 0 dan 1. Kesalahan urutan seperti ini kadang error (kalau ukuran baris dan kolom berbeda), kadang diam-diam salah (kalau gridnya persegi). Selalu: baris dulu, kolom kemudian.

## Soal 5

**Jawaban: 9**

Diagonal utama mengambil sel yang baris dan kolomnya sama:

- `grid[0][0]` = 2
- `grid[1][1]` = 3
- `grid[2][2]` = 4

2 + 3 + 4 = **9**.

`grid[i][i]` dengan indeks yang sama di kedua tempat adalah cara menyusuri diagonal. Untuk diagonal yang satunya (kanan-atas ke kiri-bawah), indeksnya `grid[i][n - 1 - i]` — sering muncul di soal papan.

## Soal 6

**Jawaban: 8**

Mulai dari `m = grid[0][0] = 3`, lalu telusuri:

| angka | lebih besar dari `m`? | `m` |
|---|---|---|
| 3 | — | 3 |
| 8 | ya | 8 |
| 1 | tidak | 8 |
| 6 | tidak | 8 |
| 2 | tidak | 8 |
| 7 | tidak | 8 |

Terbesar = **8**.

Pola "juara sementara" ini sama dengan mencari pusat terdekat di Topik 5 — mulai dengan satu tebakan, perbaiki tiap kali menemukan yang lebih baik. Memulai dari `grid[0][0]` aman karena grid dijamin tidak kosong; kalau bisa kosong, mulailah dari `None` seperti di pencarian terdekat.

# Catatan pengajar

## Peta soal

| Soal | Bentuk | Keterampilan | Jebakan |
|---|---|---|---|
| 1 | lacak | perulangan bersarang atas isi | — |
| 2 | lacak | menelusuri `(r, k)`, menghitung | menukar baris/kolom |
| 3 | pilihan ganda | `len(grid)` vs `len(grid[0])` | `grid[0][0]` bukan list |
| 4 | lacak | urutan `grid[r][k]` | membaca kolom lebih dulu |
| 5 | lacak | diagonal `grid[i][i]` | — |
| 6 | lacak | juara sementara | — |

Soal 2, 3, dan 4 semuanya satu pelajaran dari sudut berbeda: **baris dulu, kolom kemudian**, dan dua `len` yang berbeda. Kalau dia mantap di sini, seluruh Topik 6 tinggal menyusun ulang alat yang sama.

## Cara membaca hasilnya

- **Salah di 3** → dia belum memisahkan `len(grid)` dari `len(grid[0])`. Ini dasar segalanya di topik ini; beresi dulu. Gambar grid dengan label baris/kolom.
- **Salah di 4** → dia membaca kolom sebelum baris. Suruh dia baca ulang `grid[r][k]` sebagai "masuk ke baris `r`, lalu ambil isi ke-`k`".
- **Kena `IndexError` di mana pun** → hampir selalu baris/kolom tertukar pada grid yang tidak persegi. Ini justru kabar baik: error itu menunjuk langsung ke bugnya. Yang berbahaya adalah grid persegi, tempat kesalahan yang sama diam saja.
- **Benar semua** → langsung Baca Kode 02, tempat grid mulai menyimpan bug yang tidak melempar error.

## Catatan jujur

Set ini bisa dijawab sempurna dengan menyalin kodenya ke Python. Itu bukan kegagalan desain — set **Tulis Kode** memang mengharapkan dia menjalankan kode. Yang ini melatih menebak lebih dulu, dan hanya jujur di atas kertas atau kalau diawasi.
