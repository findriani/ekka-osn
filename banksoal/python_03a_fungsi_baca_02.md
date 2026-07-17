# Fungsi & Rumus — Baca Kode 02

Topik 3, membaca kode, tingkat lanjut. Sekarang soal **angkanya**.

Semua kode di set ini berjalan mulus, tanpa satu pun error — dan memberi angka yang bukan kamu maksud. Pembaginya salah jenis, pembulatannya terjadi terlalu awal, atau tanda pangkatnya mengikat lebih erat daripada dugaanmu. Di soal seleksi, kesalahan seperti ini tidak pernah muncul sebagai error. Ia muncul sebagai jawaban yang meleset sedikit, dan kamu tidak punya cara tahu dari mana.

## Petunjuk jawaban

Kerjakan **tanpa komputer**. Untuk soal pembagian, tulis dulu hasil pembagian yang sebenarnya, baru terapkan pembulatan atau pemotongannya.

Tuliskan jawaban sebagai bilangan bulat, kecuali pada soal pilihan ganda.

## Rumus cepat

- `/` selalu memberi pecahan: `4 / 2` adalah `2.0`, bukan `2`.
- `//` membuang bagian pecahannya ke **bawah**: `5 // 3` adalah `1`.
- `round(x)` membulatkan **ke genap terdekat** saat tepat di tengah: `round(2.5)` adalah `2`.
- `round(x, 2)` membulatkan ke 2 angka di belakang koma.
- `**` mengikat lebih erat daripada tanda minus: `-2 ** 2` adalah `-4`.

## Soal 1 — Rata-rata yang meleset

Fungsi ini menghitung rata-rata, dan berjalan tanpa error. Namun, perhatikan jenis pembagian yang dipakai: rata-rata sebenarnya bisa berupa pecahan, sedangkan `//` membuang bagian pecahannya.

<pre class="code">def rata(data):
    return sum(data) // len(data)

print(rata([1, 2, 2]))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 2 — Tiga pembulatan

Pembulatan di Python pada angka yang tepat berakhiran `.5` tidak selalu naik ke atas. Tentukan masing-masing hasil `round` terlebih dahulu, baru jumlahkan.

<pre class="code">print(round(2.5) + round(3.5) + round(4.5))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 3 — Pangkat dan tanda minus

Manakah di antara ini yang bernilai **4**? Bedakan tanda minus yang berada di luar operasi pangkat dengan minus yang menjadi bagian dari bilangan di dalam tanda kurung.

- **A.** `-2 ** 2`
- **B.** `(-2) ** 2`
- **C.** `-(2 ** 2)`
- **D.** `2 ** -2`

**Jawaban:** `_____`

---

## Soal 4 — Membulatkan terlalu pagi

Fungsi ini seharusnya memberi rata-rata dari `[1.4, 1.4, 1.4]`, yaitu sekitar 1.4. Yang keluar justru `1.0` — tanpa error apa pun.

<pre class="code">1  def rata_bulat(data):
2      total = 0
3      for n in data:
4          total += round(n)
5      return total / len(data)</pre>

Baris nomor berapa yang membuang informasinya?

**Jawaban:** `_____`

---

## Soal 5 — Seberapa jauh garisnya meleset

Garis \(\hat y = 5 + 3x\) dipakai untuk menebak tiga titik data. Untuk setiap nilai `x`, kode membuat tebakan terlebih dahulu, membandingkannya dengan nilai asli `y`, lalu menguadratkan selisihnya.

<pre class="code">def prediksi(x):
    return 5 + 3 * x

x = [1, 2, 3]
y = [9, 11, 13]
total = 0
for i in range(3):
    total += (y[i] - prediksi(x[i])) ** 2
print(total)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 6 — Jarak antar pos

Tiga pos berjajar di garis lurus. Petugas menghitung total jarak tempuh dari pos ke pos. Artinya, yang dijumlahkan adalah jarak dari 10 ke 4 dan dari 4 ke 7, bukan jarak langsung dari pos pertama ke pos terakhir.

<pre class="code">def selisih(a, b):
    return abs(a - b)

data = [10, 4, 7]
total = 0
for i in range(len(data) - 1):
    total += selisih(data[i], data[i + 1])
print(total)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: 1**

`sum([1, 2, 2])` adalah 5, dan `len` adalah 3. Rata-rata sebenarnya adalah \(5/3 = 1.666\ldots\)

Tetapi `//` bukan pembagian biasa. Ia membuang bagian pecahannya ke bawah, jadi `5 // 3` adalah **1**.

| yang kamu tulis | `5 ? 3` | jenisnya |
|---|---|---|
| `5 / 3` | `1.6666666666666667` | pecahan |
| `5 // 3` | `1` | bulat |

Kesalahannya sangat mudah lolos, karena `//` sering **kebetulan benar**. `rata([1, 2, 3])` memberi `6 // 3` = 2, yang memang jawaban yang tepat. Baru ketika hasilnya tidak bulat, kesalahannya muncul — dan saat itu kamu sudah lama percaya fungsinya benar.

Aturannya sederhana: **rata-rata, persentase, dan MSE selalu pakai `/`**. `//` hanya untuk hal yang memang harus bulat, seperti "berapa kotak penuh yang bisa diisi".

## Soal 2

**Jawaban: 10**

Ini mengejutkan hampir semua orang:

| | dugaan | sebenarnya |
|---|---|---|
| `round(2.5)` | 3 | **2** |
| `round(3.5)` | 4 | **4** |
| `round(4.5)` | 5 | **4** |

2 + 4 + 4 = **10**, bukan 12.

Python tidak memakai aturan "0.5 selalu ke atas". Saat sebuah angka jatuh **tepat di tengah**, ia membulatkan ke **bilangan genap terdekat**. Jadi 2.5 turun ke 2 (genap), 3.5 naik ke 4 (genap), dan 4.5 turun ke 4 (genap).

Kenapa begitu? Karena "selalu ke atas" punya bias: kalau kamu membulatkan ribuan angka, hasilnya pelan-pelan menggelembung ke atas. Membulatkan ke genap membagi rata pembulatan naik dan turun, sehingga rata-ratanya tetap jujur.

Yang perlu kamu lakukan: **jangan menebak** kalau angkanya berakhir tepat di `.5`. Itu satu-satunya kasus yang berbeda; `round(2.6)` tetap 3 seperti biasanya.

## Soal 3

**Jawaban: B**

| pilihan | hasil | kenapa |
|---|---|---|
| **A.** `-2 ** 2` | −4 | `**` dulu, baru minusnya |
| **B.** `(-2) ** 2` | **4** ✓ | kurung memaksa minusnya ikut |
| **C.** `-(2 ** 2)` | −4 | ini arti sebenarnya dari A |
| **D.** `2 ** -2` | 0.25 | \(1/2^2\) |

A dan C bernilai **sama persis** — dan itulah pelajarannya. `-2 ** 2` yang kelihatan seperti "kuadrat dari negatif dua" sebenarnya berarti "negatif dari dua kuadrat".

`**` mengikat lebih erat daripada tanda minus di depannya. Cuma kurung yang bisa mengubahnya.

Kabar baiknya: kesalahan ini hampir tidak pernah kena kalau kamu memakai **variabel**. Kalau `n = -2`, maka `n ** 2` memberi 4 dengan benar, karena minusnya sudah menyatu di dalam nilai `n` sebelum `**` bekerja. Bahayanya cuma saat kamu mengetik angka negatifnya langsung.

Dan D layak dilihat sekali: pangkat negatif memberi **pecahan**, bukan bilangan negatif.

## Soal 4

**Jawaban: 4**

Baris 4 menulis `total += round(n)`. Setiap `1.4` dibulatkan menjadi `1` **sebelum** dijumlahkan, jadi `total` menjadi 3, dan baris 5 memberi `3 / 3` = **1.0**.

Telusuri kedua urutannya:

| urutan | hitungan | hasil |
|---|---|---|
| bulatkan **lalu** bagi (yang ditulis) | (1 + 1 + 1) / 3 | **1.0** |
| bagi **lalu** bulatkan (yang benar) | round(4.2 / 3, 1) | **1.4** |

Baris 5 tidak bersalah — pembagiannya sudah memakai `/` dengan benar. Kerusakannya sudah terjadi satu baris sebelumnya, dan tidak ada yang bisa memulihkannya. Angka `0.4` itu sudah hilang tiga kali, dan tidak ada di mana pun lagi di dalam program.

Inilah aturan yang paling sering menentukan benar-salahnya jawaban seleksi: **bulatkan sekali, di paling akhir**. Hitung dengan angka penuh selama mungkin, dan baru bulatkan saat menuliskan jawabannya.

Kesalahan ini juga yang paling licik, karena kodenya terlihat rapi. `round` di tengah perhitungan selalu terasa seperti "merapikan", padahal ia membuang.

## Soal 5

**Jawaban: 2**

| `x` | `prediksi(x)` | `y` | selisih | kuadrat |
|---|---|---|---|---|
| 1 | 8 | 9 | +1 | **1** |
| 2 | 11 | 11 | 0 | **0** |
| 3 | 14 | 13 | −1 | **1** |

1 + 0 + 1 = **2**.

Perhatikan dua hal.

Pertama, selisihnya `+1`, `0`, `−1` — kalau dijumlahkan begitu saja hasilnya **nol**, seolah garisnya sempurna. Padahal ia meleset di dua titik. Itulah sebabnya rumusnya mengkuadratkan: tanpa kuadrat, meleset ke atas dan meleset ke bawah akan saling menghapus, dan garis terburuk pun bisa terlihat sempurna.

Kedua, kamu baru saja menghitung **jumlah kuadrat galat**. Bagi dengan 3 dan namanya menjadi MSE. Ini persis kerangka Soal 8 dan 9 seleksi 2025, dan persis yang akan kamu tulis sendiri di Tulis Kode 02.

## Soal 6

**Jawaban: 9**

| `i` | `data[i]` | `data[i+1]` | `selisih` |
|---|---|---|---|
| 0 | 10 | 4 | **6** |
| 1 | 4 | 7 | **3** |

6 + 3 = **9**.

Dua hal yang dilatih di sini.

`abs` membuang tandanya. Dari 4 ke 7 selisihnya `4 - 7 = -3`, tetapi jaraknya tetap 3 — orang tidak berjalan sejauh negatif tiga kilometer. Perhatikan `abs` dan kuadrat sama-sama membuang tanda, tetapi dengan harga berbeda: `abs(-3)` adalah 3, sedangkan `(-3) ** 2` adalah 9. Kuadrat **melebih-lebihkan** yang jauh. Itu bukan kecelakaan, dan kamu akan memakainya di Tulis Kode 03.

Lalu `range(len(data) - 1)`. Tiga pos hanya punya **dua** jarak antar-pos. Kalau kamu menulis `range(len(data))`, putaran terakhir akan mengambil `data[3]` yang tidak ada → `IndexError`. Pola "berpasangan dengan tetangga" **selalu** berjalan sampai `len - 1`.

# Catatan pengajar

## Peta soal

| Soal | Bentuk | Keterampilan | Jebakan |
|---|---|---|---|
| 1 | lacak | `/` lawan `//` | `//` sering kebetulan benar |
| 2 | lacak | `round` ke genap terdekat | mengira 0.5 selalu naik |
| 3 | pilihan ganda | `**` mengikat lebih erat | `-2 ** 2` bukan 4 |
| 4 | cari baris salah | **membulatkan terlalu awal** | mengira `round` merapikan |
| 5 | lacak | jumlah kuadrat galat | menjumlah selisih tanpa kuadrat |
| 6 | lacak | `abs` dan pola tetangga | `range(len(data))` → `IndexError` |

Soal 2 dan 4 adalah dua jebakan yang paling mahal di seluruh arsip. Keduanya tidak melempar error, keduanya memberi angka yang **hampir** benar, dan keduanya membuat jawaban isian ditolak mentah-mentah.

## Cara membaca hasilnya

- **Menjawab 12 di soal 2** → wajar, dan hampir semua orang menjawab begitu. Yang penting bukan hafal alasannya, tetapi refleks: begitu melihat `.5`, berhenti menebak.
- **Salah di 4** → ini yang paling perlu waktu. Ambil satu soal regresi dari Pertemuan 2 dan minta dia hitung dua kali: sekali membulatkan tiap langkah, sekali membulatkan di akhir. Selisihnya yang mengajari, bukan kalimatnya.
- **Menjawab 2 di soal 1** → dia menghitung rata-rata yang benar dan lupa `//` ada di situ. Tunjukkan bahwa `rata([1, 2, 3])` memberi jawaban yang benar; itu yang membuat bug ini bisa bertahan lama.
- **Salah di 6 dengan `IndexError`** → dia menulis `range(len(data))`. Murah diperbaiki; pola tetangga akan muncul lagi di Topik 4 (jendela k-mer).

## Hubungan dengan seleksi

Soal 5 adalah kerangka Soal 8 (MSE) dan Soal 9 (garis terbaik) seleksi 2025. Soal 1, 2, dan 4 adalah tiga cara berbeda untuk menjawab soal-soal itu dengan **benar tetapi salah angka** — dan isian tidak memberi nilai untuk hampir benar. Soal 6 menyiapkan pola jendela di Topik 4.
