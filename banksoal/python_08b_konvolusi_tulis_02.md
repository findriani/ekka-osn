# Konvolusi — Tulis Kode 02 (Sedang)

Topik 8, menulis kode, tingkat **sedang**. Sekarang lapisan dirantai dan operasinya benar-benar dijalankan — dalam satu dimensi dulu, yang lebih mudah dilihat. Merantai ukuran, menjumlahkan parameter seluruh jaringan, konvolusi 1D, max pooling 1D, satu nilai konvolusi 2D, dan aktivasi ReLU. Semua bahan sebuah lapisan, sebelum dirakit menjadi 2D penuh di Tulis Kode 03.

## Petunjuk jawaban

Bacalah cerita pada soal dulu. Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**. Nilaimu dihitung per baris uji.

Beberapa soal mengembalikan **list** (urutan penting) dan beberapa **pasangan** `(tinggi, lebar)`.

Hanya Python standar, **tanpa NumPy**.

## Rumus cepat

- Ukuran satu sisi: `(n - k + 2*p) // s + 1`; rantai mengalirkannya lapisan demi lapisan.
- Parameter satu lapisan: `kanal_masuk * kanal_keluar * kt * kl + kanal_keluar`.
- Konvolusi 1D valid: keluaran ke-`i` adalah perkalian titik `data[i:i+k]` dengan kernel.
- Max pooling 1D: bagi menjadi jendela sepanjang `k`, ambil maksimum tiap jendela.
- ReLU: ganti tiap nilai negatif dengan 0, biarkan yang lain.

## Soal 1 — Merantai lapisan

`ukuran` adalah `(tinggi, lebar)` masukan. `lapisan` adalah list, tiap lapisan `(kernel, s, p)` dengan `kernel = (kt, kl)`. Keluaran satu lapisan menjadi masukan berikutnya.

Tulis `rantai(ukuran, lapisan)` yang mengembalikan `(tinggi, lebar)` akhir.

<pre class="starter">def rantai(ukuran, lapisan):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">rantai((32, 32), [((3, 3), 1, 1), ((3, 3), 1, 1)]) == (32, 32)
rantai((32, 32), []) == (32, 32)
rantai((64, 32), [((3, 3), 1, 1), ((3, 3), 2, 1), ((3, 3), 1, 1), ((3, 3), 2, 1), ((3, 3), 1, 0)]) == (14, 6)</pre>

**Jawaban:** `_____`

---

## Soal 2 — Total parameter jaringan

`lapisan` adalah list, tiap lapisan `(kanal_masuk, kanal_keluar, kernel)` dengan `kernel = (kt, kl)`.

Tulis `total_parameter(lapisan)` yang mengembalikan jumlah parameter seluruh lapisan, termasuk bias tiap lapisan.

<pre class="starter">def total_parameter(lapisan):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">total_parameter([(3, 16, (3, 3))]) == 448
total_parameter([(3, 16, (3, 3)), (16, 32, (3, 3))]) == 5088
total_parameter([]) == 0</pre>

**Jawaban:** `_____`

---

## Soal 3 — Konvolusi 1D

Sebuah kernel 1D digeser di sepanjang `data`, stride 1, tanpa padding. Di tiap posisi, keluarannya adalah perkalian titik jendela dengan kernel.

Tulis `konvolusi_1d(data, kernel)` yang mengembalikan list keluarannya.

<pre class="starter">def konvolusi_1d(data, kernel):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">konvolusi_1d([1, 2, 3, 4], [1, 1]) == [3, 5, 7]
konvolusi_1d([1, 2, 3], [1, 0]) == [1, 2]
konvolusi_1d([5], [1]) == [5]
konvolusi_1d([1, 2, 3, 4], [1, -1]) == [-1, -1, -1]</pre>

**Jawaban:** `_____`

---

## Soal 4 — Max pooling 1D

Bagi `data` menjadi jendela **tak bertumpang** sepanjang `k`, dan ambil nilai terbesar tiap jendela. Panjang `data` selalu habis dibagi `k`.

Tulis `max_pool_1d(data, k)` yang mengembalikan list maksimum tiap jendela.

<pre class="starter">def max_pool_1d(data, k):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">max_pool_1d([1, 3, 2, 5], 2) == [3, 5]
max_pool_1d([4, 1, 2, 8, 7, 3], 3) == [4, 8]
max_pool_1d([9], 1) == [9]</pre>

**Jawaban:** `_____`

---

## Soal 5 — Nilai konvolusi di satu posisi

`kernel` ditempatkan pada `grid` dengan pojok kiri-atasnya di `(r, c)`. Nilainya adalah perkalian titik kernel dengan petak grid di bawahnya.

Tulis `nilai_di(grid, kernel, r, c)` yang mengembalikan nilai itu.

<pre class="starter">def nilai_di(grid, kernel, r, c):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">nilai_di([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 0], [0, 1]], 0, 0) == 6
nilai_di([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 0], [0, 1]], 1, 1) == 14
nilai_di([[2, 2], [2, 2]], [[1, 1], [1, 1]], 0, 0) == 8</pre>

**Jawaban:** `_____`

---

## Soal 6 — ReLU

Aktivasi ReLU mengganti tiap nilai negatif dengan 0 dan membiarkan yang tak-negatif.

Tulis `relu_1d(data)` yang mengembalikan **list baru** hasil ReLU.

<pre class="starter">def relu_1d(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">relu_1d([1, -2, 3, -4]) == [1, 0, 3, 0]
relu_1d([-1, -2]) == [0, 0]
relu_1d([]) == []
relu_1d([5]) == [5]</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def rantai(ukuran, lapisan):
    def satu(n, k, s, p):
        return (n - k + 2 * p) // s + 1
    tinggi, lebar = ukuran
    for (kt, kl), s, p in lapisan:
        tinggi = satu(tinggi, kt, s, p)
        lebar = satu(lebar, kl, s, p)
    return (tinggi, lebar)</pre>

Jalankan rumus ukuran untuk tiap lapisan, memperbarui tinggi dan lebar sambil jalan. Kunci: `tinggi` dan `lebar` yang **baru** dipakai lapisan berikutnya — itu arti merantai. Uji list kosong memberi ukuran awal apa adanya (tak ada lapisan, tak ada perubahan).

Uji lima lapisan mencakup pola nyata: lapisan penjaga ukuran (stride 1, padding 1) diselingi lapisan stride 2 yang menciutkan. Dari 64×32 turun ke 14×6. Perhatikan pembongkaran `for (kt, kl), s, p in lapisan` — tiap lapisan adalah `((kt, kl), s, p)`.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def total_parameter(lapisan):
    total = 0
    for kanal_masuk, kanal_keluar, (kt, kl) in lapisan:
        total += kanal_masuk * kanal_keluar * kt * kl + kanal_keluar
    return total</pre>

Untuk tiap lapisan, hitung bobot (`kanal_masuk * kanal_keluar * kt * kl`) ditambah bias (`kanal_keluar`), lalu jumlahkan seluruh lapisan. Uji dua lapisan: `448 + (16*32*9 + 32) = 448 + 4640 = 5088`.

Perhatikan `(kt, kl)` dibongkar langsung di `for`. Jangan lupa bias di **tiap** lapisan — melewatkannya adalah kesalahan yang sama seperti di Tulis Kode 01, kali ini terkumpul lintas lapisan.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def konvolusi_1d(data, kernel):
    k = len(kernel)
    hasil = []
    for i in range(len(data) - k + 1):
        nilai = 0
        for j in range(k):
            nilai += data[i + j] * kernel[j]
        hasil.append(nilai)
    return hasil</pre>

Jumlah posisi adalah `len(data) - k + 1` — rumus ukuran keluaran untuk stride 1 tanpa padding, muncul lagi. Di tiap posisi `i`, kalikan `data[i+j]` dengan `kernel[j]` dan jumlahkan: perkalian titik jendela dengan kernel.

Uji `[1, 2, 3, 4]` dengan kernel `[1, -1]` memberi `[-1, -1, -1]` — kernel selisih ini mendeteksi perubahan; karena datanya naik rata, tiap selisih sama. Inilah versi 1D dari mendeteksi tepi.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def max_pool_1d(data, k):
    hasil = []
    for i in range(0, len(data), k):
        hasil.append(max(data[i:i + k]))
    return hasil</pre>

`range(0, len(data), k)` melompat `k` tiap langkah, jadi jendelanya tak bertumpang: `[0:k]`, `[k:2k]`, dan seterusnya. `max` tiap irisan mengambil nilai terbesarnya.

Beda dari konvolusi: pooling tidak memakai kernel yang dipelajari — ia cuma meringkas. Dan strid­e-nya sama dengan ukuran jendela (`k`), jadi tiap isi masuk tepat satu jendela. Itu sebabnya keluarannya `len(data) // k`.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def nilai_di(grid, kernel, r, c):
    kt = len(kernel)
    kl = len(kernel[0])
    total = 0
    for i in range(kt):
        for j in range(kl):
            total += grid[r + i][c + j] * kernel[i][j]
    return total</pre>

Petak grid mulai di `(r, c)`, jadi entri kernel `(i, j)` bertemu sel grid `(r+i, c+j)`. Kalikan yang seposisi, jumlahkan — perkalian titik `konvolusi_titik` dari Tulis Kode 01, tetapi petaknya diambil dari grid besar alih-alih diberikan langsung.

Uji `(1, 1)` menggeser kernel ke tengah: `grid[1][1] + grid[2][2] = 5 + 9 = 14`. Inilah satu keluaran; menyusun `nilai_di` di semua `(r, c)` yang sah membangun peta fitur penuh di Tulis Kode 03.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def relu_1d(data):
    return [x if x &gt; 0 else 0 for x in data]</pre>

Untuk tiap nilai, pertahankan kalau positif, ganti dengan 0 kalau tidak. `x if x > 0 else 0` sama dengan `max(x, 0)` — keduanya benar.

ReLU adalah aktivasi paling umum di CNN: ia membuang respons negatif dan meneruskan yang positif. Uji list kosong memberi list kosong. Di Tulis Kode 03 kamu menerapkannya ke seluruh grid setelah konvolusi, bukan cuma ke satu list.

# Catatan pengajar

## Peta soal

| Soal | Keterampilan | Jebakan yang ditanam |
|---|---|---|
| 1 | merantai ukuran | tidak mengalirkan ukuran |
| 2 | total parameter | lupa bias per lapisan |
| 3 | konvolusi 1D | salah jumlah posisi (`- k + 1`) |
| 4 | max pooling 1D | jendela bertumpang (stride salah) |
| 5 | nilai konvolusi 2D | salah pemetaan `(r+i, c+j)` |
| 6 | ReLU | — |

Soal 1 dan 5 adalah dua tiang untuk 2D penuh: Soal 1 memberi ukuran keluaran, Soal 5 memberi cara menghitung tiap selnya. Tulis Kode 03 menggabungkan keduanya — telusuri semua posisi, hitung tiap nilai, susun jadi grid.

## Cara membaca hasilnya

- **Soal 1 memberi ukuran lapisan kedua salah** → dia tidak mengalirkan ukuran; menghitung dari ukuran awal tiap kali.
- **Soal 3 kelebihan atau kekurangan satu isi** → jumlah posisinya salah. Tegaskan `len(data) - k + 1`.
- **Soal 4 hasilnya bertumpang** → dia memakai stride 1, bukan `k`. Jendela pooling tak bertumpang.
- **Soal 5 salah geser** → pemetaan `(r+i, c+j)` tertukar. Gambar petaknya di kertas.
- **Lancar semua** → langsung Tulis Kode 03, tempat semuanya menjadi grid 2D penuh.
