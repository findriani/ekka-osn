# Control Flow dan Operator — Tulis Kode 02 (Sedang)

Topik 1, menulis kode, tingkat **sedang**. Sekarang kamu butuh perulangan. Semua soal di sini memakai pola yang sama — **akumulasi**: siapkan wadah, isi sedikit demi sedikit, kembalikan wadahnya. Kalau pola itu sudah otomatis, separuh soal Python di seleksi tinggal menyalin bentuknya.

## Petunjuk jawaban

Bacalah cerita pada soal terlebih dahulu. Kalimat yang diawali `Tulis` menjelaskan nama fungsi, masukan, dan nilai yang harus dikembalikan; contoh uji di bawahnya membantumu melihat bentuk jawabannya.

Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**. Nilaimu dihitung per baris uji, jadi lulus sebagian tetap dapat nilai sebagian.

Perhatikan uji yang memakai list kosong `[]`. Itu bukan iseng: uji itulah yang memastikan wadahmu disiapkan dengan benar, dan di soal sungguhan kasus kosong muncul lebih sering daripada dugaanmu.

Hanya Python standar, **tanpa NumPy**.

## Rumus cepat

Pola akumulasi, dalam tiga baris yang selalu sama:

<pre class="code">total = 0            # sebelum perulangan
for x in data:       # sekali untuk tiap isi
    total += x       # ubah wadahnya
return total         # setelah perulangan</pre>

- Menghitung **jumlah** → wadahnya `0`, isi dengan `+= x`
- Menghitung **banyaknya** → wadahnya `0`, isi dengan `+= 1`
- `zip(a, b)` memasangkan dua list: `for x, y in zip(a, b)`
- `range(len(data))` memberimu indeksnya kalau kamu butuh `data[i]` dan `data[i-1]` sekaligus.

## Soal 1 — Skor babak genap

Panitia menjumlahkan skor, tetapi hanya dari babak yang skornya genap. Skor ganjil dianggap batal.

Tulis `jumlah_genap(data)` yang mengembalikan jumlah semua bilangan genap di `data`. Kalau tidak ada yang genap, hasilnya `0`.

<pre class="starter">def jumlah_genap(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jumlah_genap([3, 8, 5, 4]) == 12
jumlah_genap([1, 3, 5]) == 0
jumlah_genap([]) == 0
jumlah_genap([-2, 7, -4]) == -6</pre>

**Jawaban:** `_____`

---

## Soal 2 — Berapa yang lulus

Bu Ratna ingin tahu berapa siswa yang nilainya mencapai KKM.

Tulis `hitung_lulus(nilai, kkm)` yang mengembalikan **banyaknya** nilai di `nilai` yang lebih besar atau sama dengan `kkm`.

<pre class="starter">def hitung_lulus(nilai, kkm):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">hitung_lulus([90, 40, 75], 70) == 2
hitung_lulus([70, 70, 70], 70) == 3
hitung_lulus([10, 20], 70) == 0
hitung_lulus([], 70) == 0</pre>

**Jawaban:** `_____`

---

## Soal 3 — Total belanja

Kasir punya dua list sejajar: harga tiap barang, dan berapa banyak yang dibeli. Barang ke-`i` di list pertama berpasangan dengan barang ke-`i` di list kedua.

Tulis `total_belanja(harga, jumlah)` yang mengembalikan total yang harus dibayar.

<pre class="starter">def total_belanja(harga, jumlah):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">total_belanja([8000, 3000], [2, 1]) == 19000
total_belanja([1000], [5]) == 5000
total_belanja([], []) == 0
total_belanja([5000, 2000], [0, 3]) == 6000</pre>

**Jawaban:** `_____`

---

## Soal 4 — Rata-rata pengunjung

Bu Ratna mencatat pengunjung perpustakaan tiap hari dan ingin rata-ratanya.

Tulis `rata_rata(data)` yang mengembalikan rata-rata isi `data`. List-nya dijamin tidak pernah kosong.

<pre class="starter">def rata_rata(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">abs(rata_rata([14, 18, 11, 20, 12]) - 15.0) &lt; 1e-9
abs(rata_rata([7]) - 7.0) &lt; 1e-9
abs(rata_rata([1, 2]) - 1.5) &lt; 1e-9</pre>

**Jawaban:** `_____`

---

## Soal 5 — Kelipatan

Panitia menandai setiap kursi yang nomornya kelipatan `k`, dari kursi 1 sampai kursi `n` (kursi `n` ikut dihitung).

Tulis `hitung_kelipatan(n, k)` yang mengembalikan **banyaknya** kursi yang ditandai.

<pre class="starter">def hitung_kelipatan(n, k):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">hitung_kelipatan(10, 3) == 3
hitung_kelipatan(12, 3) == 4
hitung_kelipatan(5, 7) == 0
hitung_kelipatan(6, 1) == 6</pre>

**Jawaban:** `_____`

---

## Soal 6 — Grafik yang menurun

Analis mencatat harga cabai tiap minggu dan ingin tahu berapa kali harganya **turun** dibanding minggu sebelumnya. Harga yang sama persis tidak dihitung turun.

Tulis `hitung_turun(data)` yang mengembalikan banyaknya penurunan.

<pre class="starter">def hitung_turun(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">hitung_turun([2, 5, 4, 4, 3]) == 2
hitung_turun([1, 2, 3]) == 0
hitung_turun([5]) == 0
hitung_turun([]) == 0</pre>

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

Pola akumulasi yang lengkap: wadah, perulangan, syarat, kembalikan. `total = 0` harus **sebelum** `for` — inilah bug yang kamu temukan di Baca Kode 01 Soal 4, sekarang dari sisi penulisnya.

Uji `[]` memastikan wadahnya benar-benar disiapkan, bukan diambil dari `data[0]`. Uji `[-2, 7, -4]` memastikan kamu memakai `n % 2 == 0` dan bukan menambahkan syarat `n > 0` yang tidak diminta — di Python `-2 % 2` bernilai `0`, jadi bilangan negatif pun genap.

Versi pendeknya: `return sum(n for n in data if n % 2 == 0)`.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def hitung_lulus(nilai, kkm):
    lulus = 0
    for n in nilai:
        if n &gt;= kkm:
            lulus += 1
    return lulus</pre>

Bentuknya sama persis dengan Soal 1, hanya wadahnya diisi `+= 1` alih-alih `+= n`. Menjumlah dan menghitung adalah pola yang sama; yang berbeda cuma apa yang ditambahkan. Sadari itu dan kamu baru saja mendapat dua keterampilan dari satu.

Uji `[70, 70, 70]` menguji `>=` lawan `>`. KKM artinya "mencapai", jadi nilai yang **tepat** sama dengan KKM lulus. Kalau kamu memakai `>`, hasilnya 0 dan hanya uji ini yang menangkapnya.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def total_belanja(harga, jumlah):
    total = 0
    for h, j in zip(harga, jumlah):
        total += h * j
    return total</pre>

`zip` memasangkan kedua list, jadi kamu tidak perlu mengurus indeks sama sekali. Versi dengan indeks sama benarnya:

<pre class="code">for i in range(len(harga)):
    total += harga[i] * jumlah[i]</pre>

Uji `[5000, 2000], [0, 3]` memastikan kamu mengalikan, bukan menjumlahkan. Kalau kodemu `total += h + j`, hasilnya 7003 — angka yang aneh, dan justru itu petunjuknya: harga dijumlahkan dengan **banyaknya** barang, bukan dikalikan.

`zip` akan kamu pakai lagi di topik Fungsi & Rumus untuk MSE, yang bentuknya persis sama: pasangkan dua list, olah tiap pasangan, jumlahkan.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def rata_rata(data):
    return sum(data) / len(data)</pre>

Jebakannya di uji ketiga. `sum([1, 2]) // len([1, 2])` memberi `1`, bukan `1.5`. Dua uji pertama lolos dengan `//` karena hasilnya kebetulan bulat — itulah gunanya uji ketiga.

Ini pengulangan dari Tulis Kode 01 Soal 3, dan memang disengaja: `/` lawan `//` adalah kesalahan yang paling sering kembali. Kalau di sini kamu masih memakai `//`, ulangi set yang mudah dulu.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def hitung_kelipatan(n, k):
    total = 0
    for i in range(1, n + 1):
        if i % k == 0:
            total += 1
    return total</pre>

Dua hal sekaligus. Pertama, `range(1, n + 1)`: soalnya bilang "kursi `n` ikut dihitung", dan uji `hitung_kelipatan(12, 3) == 4` memastikannya — dengan `range(1, n)` kursi 12 terlewat dan hasilnya 3. Kedua, `i % k == 0` adalah cara membaca "i kelipatan k".

Uji `hitung_kelipatan(6, 1) == 6` masuk akal: setiap bilangan adalah kelipatan 1.

Sebenarnya jawabannya bisa langsung `return n // k` tanpa perulangan sama sekali — dan itu **juga benar**, lolos keempat uji. Kalau kamu menemukannya sendiri, bagus sekali: itu tanda kamu melihat polanya, bukan sekadar menyalin bentuk.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def hitung_turun(data):
    turun = 0
    for i in range(1, len(data)):
        if data[i] &lt; data[i - 1]:
            turun += 1
    return turun</pre>

Soal ini beda dari yang lain: kamu butuh **dua** angka sekaligus, yang sekarang dan yang sebelumnya. Jadi `for n in data` tidak cukup — kamu perlu indeksnya.

Kuncinya `range(1, len(data))`, dimulai dari **1**, bukan 0. Angka pertama tidak punya "sebelumnya", jadi tidak ada yang bisa dibandingkan. Kalau kamu mulai dari 0, `data[-1]` **tidak error** — Python membacanya sebagai angka **terakhir**, jadi kodemu diam-diam membandingkan yang pertama dengan yang terakhir dan menambah hitungan yang tidak seharusnya ada.

Uji `[2, 5, 4, 4, 3]`: 2→5 naik, 5→4 **turun**, 4→4 sama (tidak dihitung), 4→3 **turun**. Dua. Kalau kamu mulai dari indeks 0, Python juga membandingkan `data[0] = 2` dengan `data[-1] = 3`, dan karena 2 < 3 hitungannya menjadi 3. Uji `[1, 2, 3]` menangkap hal yang sama: 1 < 3, jadi jawabannya menjadi 1, bukan 0.

Uji `[5]` dan `[]` mengerjakan tugas yang berbeda. Keduanya memastikan kamu tidak perlu `if` khusus untuk list pendek: `range(1, 1)` dan `range(1, 0)` sama-sama kosong, jadi perulangannya tidak jalan sama sekali dan `turun` tetap 0. Benar dengan sendirinya.

# Catatan pengajar

## Peta soal

| Soal | Keterampilan | Jebakan yang ditanam |
|---|---|---|
| 1 | akumulasi + syarat | wadah di dalam loop; `-2 % 2 == 0` |
| 2 | menghitung (`+= 1`) | `>` lawan `>=` |
| 3 | `zip`, dua list sejajar | menjumlah padahal harus mengali |
| 4 | `sum`/`len` | `//` lolos dua uji secara kebetulan |
| 5 | `range` inklusif, kelipatan | `range(1, n)` melewatkan `n` |
| 6 | indeks pasangan berurutan | `data[-1]` diam-diam sah |

Soal 1–3 bentuknya sama dengan isian yang berbeda; itu disengaja, supaya polanya terasa. Soal 6 sengaja memecahnya: begitu dia butuh dua nilai sekaligus, `for n in data` tidak lagi cukup, dan dia harus memilih alat lain.

## Cara membaca hasilnya

- **Soal 1 dan 2 benar, 3 salah** → dia belum kenal `zip` atau `range(len(...))`. Ini kosakata, bukan logika; tunjukkan sekali, selesai.
- **Soal 4 gagal hanya di uji ketiga** → `//` lagi. Kalau ini terulang setelah Tulis Kode 01, dia menghafal bentuk tanpa membaca artinya.
- **Soal 6 gagal di dua uji pertama tapi lolos `[5]` dan `[]`** → dia mulai dari indeks 0. Ini yang paling mahal dari set ini: `data[-1]` **tidak melempar error**, ia diam-diam mengambil isi terakhir, jadi kodenya memberi angka yang salah tanpa keluhan apa pun. Persis jenis kesalahan yang akan menghabiskan setengah waktunya di soal grid.
- **Soal 5 dijawab `n // k`** → dia melihat polanya. Puji, jangan koreksi.

## Hubungan dengan seleksi

Soal 3 adalah bentuk mini MSE (Q8/Q9): pasangkan dua list, olah tiap pasangan, jumlahkan. Soal 6 adalah bentuk mini pemeriksaan batas di soal grid (Q2). Soal 1 dan 2 adalah tulang punggung soal DNA (Q26–40), yang seluruhnya berupa "hitung berapa banyak yang memenuhi syarat".
