# Fungsi & Rumus — Tulis Kode 02 (Sedang)

Topik 3, menulis kode, tingkat **sedang**. Sekarang keenam potongan dari set mudah dirakit menjadi satu benda: **MSE**.

Kerjakan berurutan. Tiap soal memakai gagasan dari soal sebelumnya, dan di Soal 5 semuanya bertemu menjadi satu fungsi yang menjawab pertanyaan sungguhan: *seberapa buruk garis ini?* Itu Soal 8 seleksi 2025, dan separuh dari Soal 9.

## Petunjuk jawaban

Bacalah cerita pada soal terlebih dahulu. Kalimat yang diawali `Tulis` menjelaskan nama fungsi, masukan, dan nilai yang harus dikembalikan; contoh uji di bawahnya membantumu melihat bentuk jawabannya.

Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**.

Kamu boleh — dan sebaiknya — memanggil fungsi yang sudah kamu tulis di soal sebelumnya, asalkan kamu menulis ulang fungsinya di editor soal ini. Tiap soal punya editornya sendiri dan tidak melihat editor tetangganya.

Beberapa uji memakai tanda `:=`, seperti di Topik 2:

<pre class="code">prediksi_semua(5, 3, _x := [1, 2]) == [8, 11]
_x == [1, 2]</pre>

Baris pertama memanggil fungsimu dengan list yang diberi nama `_x`, baris kedua memeriksa `_x` **masih utuh** sesudahnya.

Hanya Python standar, **tanpa NumPy**.

## Rumus cepat

- Galat: \(y - \hat y\) · Kuadrat galat: \((y - \hat y)^2\)
- \(\operatorname{MSE} = \dfrac{1}{n}\sum (y_i - \hat y_i)^2\) — kuadratkan semua, jumlahkan, **lalu** bagi \(n\)
- Garis: \(\hat y = a + b\,x\)
- Menjalankan dua list bersamaan: `for y, p in zip(y_list, p_list):`
- `max(data)` isi terbesar · `abs(x)` buang tanda
- **Selalu `/`, jangan `//`.** Bulatkan hanya di paling akhir, kalau memang diminta.

## Soal 1 — Satu titik meleset

Tulis `kuadrat_galat(y, p)` yang mengembalikan kuadrat dari selisih kenyataan `y` dan tebakan `p`.

<pre class="starter">def kuadrat_galat(y, p):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">kuadrat_galat(10, 8) == 4
kuadrat_galat(8, 10) == 4
kuadrat_galat(5, 5) == 0
kuadrat_galat(0, 3) == 9</pre>

**Jawaban:** `_____`

---

## Soal 2 — Semua titik dijumlahkan

`y` dan `p` sama panjang dan sejajar: `y[i]` adalah kenyataan untuk titik ke-`i`, `p[i]` tebakannya.

Tulis `jumlah_kuadrat(y, p)` yang mengembalikan jumlah kuadrat galat dari **semua** titik.

<pre class="starter">def jumlah_kuadrat(y, p):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jumlah_kuadrat([10, 3, 5], [8, 6, 5]) == 13
jumlah_kuadrat([1], [1]) == 0
jumlah_kuadrat([], []) == 0
jumlah_kuadrat([2, 4], [0, 0]) == 20</pre>

**Jawaban:** `_____`

---

## Soal 3 — MSE

Tulis `mse(y, p)` yang mengembalikan **rata-rata** kuadrat galat. Dijamin `y` tidak pernah kosong.

<pre class="starter">def mse(y, p):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">mse([10, 3, 5], [8, 6, 5]) == 13 / 3
mse([1, 1], [1, 0]) == 0.5
mse([4], [0]) == 16
mse([2, 4], [0, 0]) == 10</pre>

**Jawaban:** `_____`

---

## Soal 4 — Menebak semua sekaligus

Tulis `prediksi_semua(a, b, x)` yang mengembalikan **list baru** berisi \(a + b\,x_i\) untuk tiap `x_i` di `x`, tanpa mengubah `x`.

<pre class="starter">def prediksi_semua(a, b, x):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">prediksi_semua(5, 3, [1, 2, 3]) == [8, 11, 14]
prediksi_semua(0, 1, []) == []
prediksi_semua(2, 0, [9, 9]) == [2, 2]
prediksi_semua(5, 3, _x := [1, 2]) == [8, 11]
_x == [1, 2]</pre>

**Jawaban:** `_____`

---

## Soal 5 — Seberapa buruk garis ini

Semuanya bertemu di sini.

Tulis `mse_garis(x, y, a, b)` yang mengembalikan MSE dari garis \(\hat y = a + b\,x\) terhadap data `x` dan `y`. Dijamin `x` tidak pernah kosong.

<pre class="starter">def mse_garis(x, y, a, b):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">mse_garis([1, 2, 3], [9, 11, 13], 5, 3) == 2 / 3
mse_garis([1, 2, 3], [8, 11, 14], 5, 3) == 0
mse_garis([0], [10], 5, 3) == 25
mse_garis(_p := [1, 2], [8, 11], 5, 3) == 0
_p == [1, 2]</pre>

**Jawaban:** `_____`

---

## Soal 6 — Titik yang paling parah

MSE meratakan semuanya menjadi satu angka. Kadang yang ingin kamu tahu justru: **titik mana yang paling jauh?**

Tulis `residual_terbesar(y, p)` yang mengembalikan jarak meleset **terbesar** di antara semua titik. Dijamin `y` tidak pernah kosong.

<pre class="starter">def residual_terbesar(y, p):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">residual_terbesar([10, 3, 5], [8, 6, 5]) == 3
residual_terbesar([1], [1]) == 0
residual_terbesar([0, 0], [5, 1]) == 5
residual_terbesar([7], [2]) == 5</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def kuadrat_galat(y, p):
    return (y - p) ** 2</pre>

**Kurungnya wajib.** Tanpa kurung, `y - p ** 2` berarti \(y - p^2\) — sesuatu yang sama sekali lain, karena `**` mengikat lebih erat daripada `-`. Itu jebakan yang sama dengan Baca Kode 02 Soal 3, dalam pakaian yang berbeda.

Uji `kuadrat_galat(8, 10) == 4` adalah uji pertama yang dibalik. Kalau kamu lupa mengkuadratkan dan cuma menulis `y - p`, hasilmu 2 lalu −2 — **lolos 1 dari 4** (hanya yang ketiga, saat galatnya nol).

Dua uji pertama memberi jawaban yang **sama persis** dari arah yang berlawanan. Itulah seluruh isi MSE dalam satu kalimat: meleset 2 ke atas sama buruknya dengan meleset 2 ke bawah.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def jumlah_kuadrat(y, p):
    total = 0
    for i in range(len(y)):
        total += (y[i] - p[i]) ** 2
    return total</pre>

Pola akumulasi dari Topik 1, dengan rumus Soal 1 di dalamnya.

Karena `y` dan `p` sejajar, satu indeks `i` menunjuk ke keduanya sekaligus. Versi yang lebih rapi memakai `zip`, yang menjalankan dua list berdampingan:

<pre class="code">def jumlah_kuadrat(y, p):
    total = 0
    for yi, pi in zip(y, p):
        total += (yi - pi) ** 2
    return total</pre>

Atau satu baris: `return sum((yi - pi) ** 2 for yi, pi in zip(y, p))`.

Ketiganya sama benarnya. Pilih yang paling bisa kamu baca ulang besok pagi.

Uji `jumlah_kuadrat([], []) == 0` gratis kalau kamu memakai pola akumulasi — `total` berangkat dari 0 dan perulangannya tidak pernah jalan. Tapi ia **tidak** gratis kalau kamu tergoda membaginya di sini; itu Soal 3, dan di situ list kosong akan meledak.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def mse(y, p):
    total = 0
    for i in range(len(y)):
        total += (y[i] - p[i]) ** 2
    return total / len(y)</pre>

Kalau kamu sudah menulis `jumlah_kuadrat`, ini cuma satu baris:

<pre class="code">def mse(y, p):
    return jumlah_kuadrat(y, p) / len(y)</pre>

— asalkan `jumlah_kuadrat` ikut kamu tulis ulang di editor ini. Itu cara yang benar untuk berpikir: MSE **adalah** jumlah kuadrat dibagi banyaknya. Menyusun dari fungsi yang sudah ada mengalahkan menyalin rumusnya bulat-bulat.

Perhatikan **kapan** pembagiannya. Bagi **sekali di akhir**, bukan tiap putaran. Membagi di dalam perulangan bukan cuma boros — ia juga membuka pintu untuk pembulatan terlalu awal, jebakan dari Baca Kode 02 Soal 4.

Dan sekali lagi: `/`, bukan `//`. Uji pertama sengaja memberi \(13/3\) yang tidak bulat, dan uji kedua memberi 0.5. Dengan `//` kodemu **lolos 2 dari 4** — yang ketiga dan keempat, karena hasilnya kebetulan bulat.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def prediksi_semua(a, b, x):
    return [a + b * xi for xi in x]</pre>

Rumus `a + b * x` dari set mudah, dijalankan untuk tiap titik, hasilnya dikumpulkan ke list baru.

Versi panjangnya:

<pre class="code">def prediksi_semua(a, b, x):
    hasil = []
    for xi in x:
        hasil.append(a + b * xi)
    return hasil</pre>

Kedua bentuk membangun list **baru**, jadi uji `_x == [1, 2]` lolos dengan sendirinya. Itu bukan kebetulan: pola "bangun yang baru" dari Topik 2 memang membuat seluruh kelas bug ini lenyap. Kamu tidak perlu ingat untuk tidak merusak `x` — kamu cuma perlu tidak menyentuhnya.

Yang akan merusaknya, dan sesekali masih ditulis orang:

<pre class="code">for i in range(len(x)):
    x[i] = a + b * x[i]
return x</pre>

Ini **lolos 4 dari 5 uji**. Nilai kembaliannya benar **setiap kali** — keempat uji yang memeriksa hasil semuanya puas. Yang hancur adalah data `x` milik pemanggil, dan di soal seleksi, `x` yang sama akan dipakai lagi untuk garis kandidat berikutnya. Garis pertama akan dinilai dengan benar, dan semua garis sesudahnya salah.

Uji `_x == [1, 2]` adalah **satu-satunya** yang menangkapnya — satu uji dari lima berdiri di antara kode ini dan nilai sempurna. Renungkan itu: kalau ujinya cuma memeriksa apa yang dikembalikan, kode yang diam-diam merusak data pemanggilnya akan lulus dengan nilai penuh.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def mse_garis(x, y, a, b):
    total = 0
    for i in range(len(x)):
        p = a + b * x[i]
        total += (y[i] - p) ** 2
    return total / len(x)</pre>

Inilah Soal 8 seleksi 2025, utuh.

Kalau kamu menulis ulang dua fungsi sebelumnya, jawabannya menjadi satu baris yang bisa dibaca seperti kalimat:

<pre class="code">def mse_garis(x, y, a, b):
    return mse(y, prediksi_semua(a, b, x))</pre>

Baca dari dalam: **buat tebakan dari garisnya**, lalu **ukur melesetnya**. Dua langkah, dua fungsi, masing-masing sudah kamu uji sendiri. Itulah gunanya memecah rumus menjadi potongan kecil di set mudah — bukan supaya soalnya gampang, tetapi supaya potongannya bisa dirakit tanpa ragu.

Telusuri uji pertama:

| `x` | tebakan \(5 + 3x\) | `y` | galat | kuadrat |
|---|---|---|---|---|
| 1 | 8 | 9 | +1 | 1 |
| 2 | 11 | 11 | 0 | 0 |
| 3 | 14 | 13 | −1 | 1 |

Jumlahnya 2, dibagi 3 → \(2/3\). Ini data yang sama dengan Baca Kode 02 Soal 5; sekarang kamu menulis kodenya, bukan melacaknya.

Uji kedua memberi **0** — garis yang lewat persis di semua titik. MSE nol berarti cocok sempurna, dan itu satu-satunya nilai MSE yang punya arti mutlak. Selebihnya cuma berguna untuk **dibandingkan**, dan itu Tulis Kode 03.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def residual_terbesar(y, p):
    terbesar = 0
    for i in range(len(y)):
        jarak = abs(y[i] - p[i])
        if jarak &gt; terbesar:
            terbesar = jarak
    return terbesar</pre>

Versi ringkasnya: `return max(abs(yi - pi) for yi, pi in zip(y, p))`.

`abs`-nya **wajib**. Kalau kamu menulis `max(y[i] - p[i])` tanpa `abs`, uji pertama memberi galat 2, −3, 0 → maksimumnya **2**, bukan 3. Dan uji ketiga memberi −5, −1 → maksimumnya **−1**, sebuah "jarak terbesar" yang negatif. Tanpa `abs`, kodemu **lolos 2 dari 4**.

Sekarang bandingkan Soal 6 dengan Soal 3 pada data yang sama, `y = [10, 3, 5]` dan `p = [8, 6, 5]`:

| | nilainya | artinya |
|---|---|---|
| `mse` | \(13/3 \approx 4.33\) | rata-rata keburukan |
| `residual_terbesar` | 3 | titik terparah |

Dua angka, satu data, dua pertanyaan berbeda. MSE menjawab "rata-rata garis ini seberapa meleset"; residual terbesar menjawab "kasus terburuknya seberapa parah". Sebuah garis bisa punya MSE kecil tetapi satu titik yang meleset jauh — dan kadang justru titik itulah yang penting.

Ingat ini. Di Tulis Kode 03 kamu akan melihat kenapa MSE **sengaja** dibuat lebih peka terhadap titik yang jauh.

# Catatan pengajar

## Peta soal

| Soal | Keterampilan | Kode salah yang tetap lolos sebagian |
|---|---|---|
| 1 | `(y - p) ** 2` | lupa kuadrat — lolos **1 dari 4** |
| 2 | akumulasi dua list sejajar | — |
| 3 | bagi sekali di akhir | `//` — lolos **2 dari 4** |
| 4 | bangun list baru | menimpa `x` di tempat — lolos **4 dari 5** |
| 5 | menyusun dua fungsi | — |
| 6 | `max` + `abs` | lupa `abs` — lolos **2 dari 4** |

Soal 4 adalah yang paling patut diperhatikan: kode yang merusak masukannya **selalu memberi jawaban yang benar**, dan cuma satu uji dari lima yang tahu. Ini pertemuan langsung Topik 2 dengan Topik 3, dan bentuknya persis seperti bug ini muncul di ruang ujian.

## Cara membaca hasilnya

- **Soal 4 gagal hanya di uji `_x`** → dia menimpa `x` di tempat. Tunjukkan kenapa ini fatal khusus di Soal 9 seleksi: `x` dipakai ulang untuk tiap garis kandidat, jadi garis kedua dan seterusnya dinilai dengan data yang sudah rusak. Jawabannya akan salah, dan tidak akan ada error.
- **Soal 3 lolos 2 dari 4** → `//` lagi. Kalau ini muncul lagi setelah Tulis Kode 01 Soal 6, jangan diulangi penjelasannya; suruh dia sendiri yang menunjuk uji mana yang lolos dan kenapa.
- **Soal 5 ditulis ulang dari nol, bukan menyusun** → benar, dan tidak apa-apa. Tapi tunjukkan versi dua barisnya berdampingan. Yang ingin ditanam bukan kodenya, tetapi kebiasaan bertanya "apa aku sudah punya potongannya?"
- **Soal 6 lolos 2 dari 4** → lupa `abs`. Tanya "jarak terbesarnya negatif lima, masuk akal tidak?"
- **Semuanya lolos** → langsung Tulis Kode 03. Di situ MSE berhenti jadi rumus dan mulai jadi **alat pengambil keputusan**.

## Hubungan dengan seleksi

Soal 5 adalah Soal 8 seleksi 2025 secara langsung. Soal 1–4 adalah tangganya. Soal 6 adalah bekal untuk memahami kenapa satu titik salah catat bisa memutar seluruh garis — cerita residual 576 di bank Regresi Pertemuan 2, yang di Tulis Kode 03 akan muncul lagi sebagai angka yang bisa dia hitung sendiri.
