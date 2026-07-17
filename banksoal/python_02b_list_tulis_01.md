# List & Penyalinan — Tulis Kode 01 (Mudah)

Topik 2, menulis kode, tingkat **mudah**. Semua jawabannya **satu baris**, dan tidak ada satu pun perulangan. Yang dilatih hanya cara mengambil sesuatu dari list: lewat indeks, lewat irisan, lewat `len`, lewat `in`.

Kelihatannya remeh — dan memang sengaja. Kalau keenam alat ini sudah otomatis, soal-soal berat di Tulis Kode 02 dan 03 tinggal soal berpikir, bukan soal mengingat sintaks.

## Petunjuk jawaban

Bacalah cerita pada soal terlebih dahulu. Kalimat yang diawali `Tulis` menjelaskan nama fungsi, masukan, dan nilai yang harus dikembalikan; contoh uji di bawahnya membantumu melihat bentuk jawabannya.

Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**. Nilaimu dihitung per baris uji.

Hanya Python standar, **tanpa NumPy**.

## Rumus cepat

- `data[0]` isi pertama · `data[-1]` isi terakhir
- `data[:3]` tiga isi pertama · `data[2:]` dari indeks 2 sampai habis
- `data[::-1]` list baru dengan urutan terbalik
- `len(data)` banyaknya isi
- `x in data` bernilai `True` atau `False` — itu sudah jawaban, tidak perlu `if`.

## Soal 1 — Yang paling depan

Panitia memanggil peserta paling depan di antrean.

Tulis `ambil_pertama(data)` yang mengembalikan isi **pertama** dari `data`. Dijamin `data` tidak pernah kosong.

<pre class="starter">def ambil_pertama(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">ambil_pertama([7, 8, 9]) == 7
ambil_pertama([5]) == 5
ambil_pertama(["nasi", "soto"]) == "nasi"</pre>

**Jawaban:** `_____`

---

## Soal 2 — Yang paling belakang

Sekarang yang paling buncit.

Tulis `ambil_terakhir(data)` yang mengembalikan isi **terakhir** dari `data`. Dijamin `data` tidak pernah kosong.

<pre class="starter">def ambil_terakhir(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">ambil_terakhir([7, 8, 9]) == 9
ambil_terakhir([5]) == 5
ambil_terakhir(["nasi", "soto"]) == "soto"</pre>

**Jawaban:** `_____`

---

## Soal 3 — Tiga besar

Papan skor hanya muat menampilkan tiga nama teratas. Kalau pesertanya kurang dari tiga, tampilkan seadanya.

Tulis `tiga_awal(data)` yang mengembalikan **list baru** berisi paling banyak tiga isi pertama dari `data`.

<pre class="starter">def tiga_awal(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">tiga_awal([1, 2, 3, 4, 5]) == [1, 2, 3]
tiga_awal([1, 2]) == [1, 2]
tiga_awal([]) == []</pre>

**Jawaban:** `_____`

---

## Soal 4 — Urutan mundur

Panggilan diumumkan dari nomor terbesar ke terkecil, jadi urutannya perlu dibalik.

Tulis `dibalik(data)` yang mengembalikan **list baru** dengan urutan terbalik.

<pre class="starter">def dibalik(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">dibalik([1, 2, 3]) == [3, 2, 1]
dibalik([7]) == [7]
dibalik([]) == []</pre>

**Jawaban:** `_____`

---

## Soal 5 — Ada di daftar tamu?

Satpam memeriksa apakah sebuah nama tercantum di daftar tamu.

Tulis `ada_tidak(data, x)` yang mengembalikan `True` kalau `x` ada di dalam `data`, dan `False` kalau tidak.

<pre class="starter">def ada_tidak(data, x):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">ada_tidak([1, 2], 2) is True
ada_tidak([1, 2], 9) is False
ada_tidak([], 1) is False
ada_tidak(["ani", "budi"], "ani") is True</pre>

**Jawaban:** `_____`

---

## Soal 6 — Berapa banyak

Panitia menghitung isi kotak.

Tulis `banyaknya(data)` yang mengembalikan berapa isi yang ada di dalam `data`.

<pre class="starter">def banyaknya(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">banyaknya([1, 2, 3]) == 3
banyaknya([]) == 0
banyaknya([[1, 2], [3]]) == 2</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def ambil_pertama(data):
    return data[0]</pre>

Indeks mulai dari **0**, jadi isi pertama adalah `data[0]`, bukan `data[1]`.

Kalau kamu menulis `data[1]`, uji pertama memberi `8` dan gagal. Lebih menarik: uji `ambil_pertama([5])` akan melempar `IndexError` — list itu cuma punya indeks 0. Pesan error itu sendiri adalah petunjuknya.

Perhatikan uji ketiga memakai teks, bukan angka. Indeks bekerja sama saja apa pun isinya; list tidak peduli.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def ambil_terakhir(data):
    return data[-1]</pre>

`data[-1]` selalu isi terakhir, berapa pun panjangnya. Itu sebabnya ia lebih baik daripada `data[len(data) - 1]`, yang benar tetapi lebih panjang dan lebih mudah salah tulis.

Kalau kamu menulis `data[2]`, uji pertama lolos secara kebetulan — `[7, 8, 9]` memang punya isi terakhir di indeks 2. Lalu uji kedua, `ambil_terakhir([5])`, langsung melempar `IndexError`. Sekali lagi: satu uji tidak pernah cukup.

Ingat ini baik-baik. Indeks negatif adalah alasan kenapa bug grid di Topik 6 tidak pernah melempar error — Python dengan senang hati membaca `grid[-1]` sebagai baris terakhir.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def tiga_awal(data):
    return data[:3]</pre>

Yang perlu disadari: **irisan tidak pernah error karena kepanjangan**. `[1, 2][:3]` tidak protes bahwa isinya cuma dua — ia memberi apa adanya.

Karena itu kamu **tidak perlu** `if len(data) < 3`. Uji kedua dan ketiga ada khusus untuk memperlihatkan hal ini: irisan sudah menangani keduanya sendiri.

Bandingkan dengan `data[2]`, yang **akan** error kalau isinya kurang. Indeks tunggal galak; irisan pemaaf. Perbedaan itu berguna: banyak kasus tepi hilang sendiri kalau kamu memakai irisan.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def dibalik(data):
    return data[::-1]</pre>

`data[::-1]` berarti "dari awal sampai akhir, dengan langkah −1" — yaitu mundur. Hasilnya **list baru**; aslinya tidak tersentuh.

Yang sering ditulis: `data.reverse()`. Itu membalik list aslinya **di tempat** dan mengembalikan `None`, jadi fungsimu mengembalikan `None` dan semua uji gagal. Persis seperti `.sort()` di Baca Kode 01 Soal 4 — dan tidak kebetulan: semua method list yang mengubah isinya mengembalikan `None`.

Kalau kamu memang mau memakai `reverse`, harus dua langkah dan menyalin dulu:

<pre class="code">def dibalik(data):
    baru = data[:]
    baru.reverse()
    return baru</pre>

Tiga baris untuk pekerjaan satu baris — tapi perhatikan `data[:]` di situ. Tanpanya, kamu merusak list milik pemanggil. Itu isi Tulis Kode 02.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def ada_tidak(data, x):
    return x in data</pre>

`x in data` **sudah** bernilai `True` atau `False`. Tidak perlu perulangan, tidak perlu `if`.

Ini pengulangan pelajaran dari Topik 1 Soal 5 (`n % 2 == 0`), dengan alat yang berbeda: sebuah perbandingan adalah **nilai**, dan nilai bisa langsung dikembalikan.

Uji `ada_tidak([], 1) is False` gratis: tidak ada apa pun di list kosong.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def banyaknya(data):
    return len(data)</pre>

Uji ketiga yang menarik: `banyaknya([[1, 2], [3]]) == 2`.

List itu berisi **dua** isi — dan kebetulan kedua isinya sendiri berupa list. `len` hanya menghitung lapisan **paling luar**; ia tidak mengintip ke dalam. Ada tiga angka di sana, tetapi hanya dua isi.

Ini persis cara kerja grid nanti: `len(grid)` memberi banyaknya **baris**, dan `len(grid[0])` memberi banyaknya **kolom** di baris pertama. Dua panggilan `len` yang berbeda, dua arti yang berbeda.

# Catatan pengajar

## Peta soal

| Soal | Alat | Jebakan yang ditanam |
|---|---|---|
| 1 | `data[0]` | indeks mulai dari 1 di kepalanya |
| 2 | `data[-1]` | `data[2]` lolos uji pertama secara kebetulan |
| 3 | `data[:3]` | mengira perlu `if len(data) < 3` |
| 4 | `data[::-1]` | `.reverse()` mengembalikan `None` |
| 5 | `x in data` | menulis perulangan untuk sesuatu yang sudah ada |
| 6 | `len(data)` | mengira `len` menghitung sampai ke dalam |

## Cara membaca hasilnya

- **Semua uji gagal di semua soal** → `print` bukan `return` lagi. Cek di `/admin`; lima menit.
- **Soal 4 semua uji gagal, soal lain lancar** → `.reverse()`. Ini pelajaran `None` yang kedua setelah `.sort()`; sesudah ini biasanya melekat.
- **Soal 3 dijawab dengan `if`** → benar, tapi tunjukkan bahwa irisan sudah menanganinya. Ini pertama kalinya dia bisa melihat "pilih alat yang tepat, kasus tepinya hilang sendiri".
- **Soal 6 dijawab 3** → dia mengira `len` menghitung sampai ke dalam. Perbaiki sekarang; `len(grid)` lawan `len(grid[0])` adalah dasar seluruh Topik 6.

Set ini memang tidak dirancang menghambat siapa pun. Kalau lancar, langsung Tulis Kode 02 — di situlah topik ini sebenarnya dimulai.
