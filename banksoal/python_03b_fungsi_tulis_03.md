# Fungsi & Rumus — Tulis Kode 03 (Sedang)

Topik 3, menulis kode, tingkat **sedang**. Di Tulis Kode 02 kamu belajar mengukur seberapa buruk sebuah garis. Sekarang pertanyaannya berubah, dan berubah menjadi pertanyaan yang sesungguhnya: **dari beberapa garis, mana yang terbaik?**

Itu Soal 9 seleksi 2025, dan jawabannya lebih sederhana daripada dugaan siapa pun. Kamu tidak menurunkan rumus dan tidak memakai kalkulus. Kamu **mencoba semua kandidat, mengukur masing-masing, lalu memilih yang paling kecil**. Soal 4 di set ini adalah soal itu, hampir kata per kata.

Beberapa soal di sini sudah menyediakan fungsi bantu di editornya. **Pakai**, jangan tulis ulang. Bisa memakai fungsi yang diberikan orang lain adalah keterampilan tersendiri, dan set ini melatihnya.

## Petunjuk jawaban

Bacalah cerita pada soal terlebih dahulu. Kalimat yang diawali `Tulis` menjelaskan nama fungsi, masukan, dan nilai yang harus dikembalikan; contoh uji di bawahnya membantumu melihat bentuk jawabannya.

Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**.

Sebuah garis di sini ditulis sebagai list dua isi: `[a, b]`, artinya \(\hat y = a + b\,x\). Jadi `[5, 3]` adalah garis \(\hat y = 5 + 3x\).

Hanya Python standar, **tanpa NumPy**.

## Rumus cepat

- `min(data)` isi terkecil · `data.index(x)` posisi kemunculan **pertama** `x`
- Pola memilih terbaik: simpan yang terbaik sejauh ini, bandingkan dengan calon berikutnya, ganti kalau lebih baik.
- Kalau **seri**, yang pertama menang. Itu berarti `&lt;`, bukan `&lt;=`.
- \(\operatorname{MSE} = \dfrac{1}{n}\sum (y_i - \hat y_i)^2\) · \(\operatorname{MAD} = \dfrac{1}{n}\sum |y_i - \hat y_i|\)

## Soal 1 — Yang terkecil ada di mana

Bukan **berapa** yang terkecil, tetapi di **posisi** mana ia berada.

Tulis `posisi_terkecil(data)` yang mengembalikan indeks isi terkecil. Kalau ada beberapa yang sama kecilnya, kembalikan yang **paling awal**. Dijamin `data` tidak pernah kosong, dan `data` tidak boleh berubah.

<pre class="starter">def posisi_terkecil(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">posisi_terkecil([5, 2, 8]) == 1
posisi_terkecil([3]) == 0
posisi_terkecil([4, 1, 1]) == 1
posisi_terkecil([9, 9, 2]) == 2
posisi_terkecil(_a := [5, 2, 8]) == 1
_a == [5, 2, 8]</pre>

**Jawaban:** `_____`

---

## Soal 2 — Menilai setiap kandidat

`daftar_p` adalah list berisi beberapa **himpunan tebakan**, masing-masing sejajar dengan `y`.

Tulis `daftar_mse(y, daftar_p)` yang mengembalikan list baru berisi MSE dari tiap tebakan, dengan urutan yang sama. Fungsi `mse` sudah disediakan — panggil saja.

<pre class="starter">def mse(y, p):
    total = 0
    for i in range(len(y)):
        total += (y[i] - p[i]) ** 2
    return total / len(y)

def daftar_mse(y, daftar_p):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">daftar_mse([1, 2], [[1, 2], [0, 0]]) == [0, 2.5]
daftar_mse([0], [[3], [4]]) == [9, 16]
daftar_mse([1], []) == []
daftar_mse([1, 2], _d := [[1, 2]]) == [0]
_d == [[1, 2]]</pre>

**Jawaban:** `_____`

---

## Soal 3 — Tebakan mana yang menang

Tulis `prediksi_terbaik(y, daftar_p)` yang mengembalikan **himpunan tebakan** dengan MSE terkecil. Kalau seri, kembalikan yang paling awal. Dijamin `daftar_p` tidak pernah kosong.

<pre class="starter">def mse(y, p):
    total = 0
    for i in range(len(y)):
        total += (y[i] - p[i]) ** 2
    return total / len(y)

def prediksi_terbaik(y, daftar_p):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">prediksi_terbaik([1, 2], [[0, 0], [1, 2], [5, 5]]) == [1, 2]
prediksi_terbaik([0], [[3], [1]]) == [1]
prediksi_terbaik([5], [[5]]) == [5]
prediksi_terbaik([0], [[1], [-1]]) == [1]</pre>

**Jawaban:** `_____`

---

## Soal 4 — Garis terbaik

Inilah soalnya.

`garis` adalah list berisi beberapa kandidat, masing-masing berbentuk `[a, b]`. Tulis `garis_terbaik(x, y, garis)` yang mengembalikan kandidat dengan MSE terkecil terhadap data `x` dan `y`. Kalau seri, kembalikan yang paling awal. `x` dan `y` tidak boleh berubah.

Dua fungsi bantu sudah disediakan.

<pre class="starter">def prediksi_semua(a, b, x):
    return [a + b * xi for xi in x]

def mse(y, p):
    total = 0
    for i in range(len(y)):
        total += (y[i] - p[i]) ** 2
    return total / len(y)

def garis_terbaik(x, y, garis):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">garis_terbaik([1, 2, 3], [8, 11, 14], [[5, 3], [0, 1]]) == [5, 3]
garis_terbaik([1, 2], [3, 5], [[0, 1], [1, 2]]) == [1, 2]
garis_terbaik([0], [10], [[10, 0], [0, 0]]) == [10, 0]
garis_terbaik([0], [0], [[1, 0], [-1, 0]]) == [1, 0]
garis_terbaik(_x := [0, 1], [1, 3], [[1, 2], [0, 0]]) == [1, 2]
_x == [0, 1]</pre>

**Jawaban:** `_____`

---

## Soal 5 — Adu dua garis

Tulis `lebih_baik(x, y, garis1, garis2)` yang mengembalikan `True` kalau `garis1` **lebih cocok** dengan data daripada `garis2`, dan `False` kalau tidak. Kalau keduanya sama baiknya, `garis1` **tidak** lebih baik.

<pre class="starter">def prediksi_semua(a, b, x):
    return [a + b * xi for xi in x]

def mse(y, p):
    total = 0
    for i in range(len(y)):
        total += (y[i] - p[i]) ** 2
    return total / len(y)

def lebih_baik(x, y, garis1, garis2):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">lebih_baik([1, 2], [3, 5], [1, 2], [0, 1]) is True
lebih_baik([1, 2], [3, 5], [0, 1], [1, 2]) is False
lebih_baik([0], [1], [1, 0], [1, 0]) is False
lebih_baik([0, 1], [0, 0], [0, 0], [1, 1]) is True</pre>

**Jawaban:** `_____`

---

## Soal 6 — Kalau melesetnya tidak dikuadratkan

MSE mengkuadratkan tiap galat. Ada ukuran lain yang cuma mengambil nilai mutlaknya, namanya **MAD**: rata-rata jarak meleset.

Tulis `mad_garis(x, y, a, b)` yang mengembalikan MAD dari garis \(\hat y = a + b\,x\). Dijamin `x` tidak pernah kosong.

<pre class="starter">def prediksi_semua(a, b, x):
    return [a + b * xi for xi in x]

def mad_garis(x, y, a, b):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">mad_garis([1, 2, 3], [9, 11, 13], 5, 3) == 2 / 3
mad_garis([0], [10], 5, 3) == 5
mad_garis([1, 2], [8, 11], 5, 3) == 0
mad_garis([0, 0], [0, 10], 0, 0) == 5</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def posisi_terkecil(data):
    terbaik = 0
    for i in range(len(data)):
        if data[i] &lt; data[terbaik]:
            terbaik = i
    return terbaik</pre>

Ini pola **"simpan yang terbaik sejauh ini"**, dan ia adalah tulang punggung seluruh set ini. Mulai dengan menganggap yang pertama sebagai juara sementara, lalu tantang ia dengan tiap calon berikutnya.

Versi satu barisnya juga benar: `return data.index(min(data))`. Cari nilai terkecilnya, lalu tanya di mana ia pertama kali muncul. `.index` selalu memberi kemunculan **pertama**, jadi aturan seri terpenuhi dengan sendirinya.

Sekarang bagian yang penting. Perhatikan tanda `&lt;`, bukan `&lt;=`:

| kalau kamu menulis | `posisi_terkecil([4, 1, 1])` |
|---|---|
| `if data[i] &lt; data[terbaik]` | **1** ✓ |
| `if data[i] &lt;= data[terbaik]` | **2** ✗ |

Dengan `&lt;=`, isi terakhir yang seri akan **selalu merebut** gelarnya, karena "sama kecil" dianggap "lebih baik". Satu karakter, dan aturan serinya terbalik.

Uji `posisi_terkecil([4, 1, 1]) == 1` ada khusus untuk itu. Tanpa uji seri, `&lt;` dan `&lt;=` tidak bisa dibedakan sama sekali.

Uji `_a == [5, 2, 8]` menangkap godaan lain: mengurutkan `data` dulu untuk mencari yang terkecil. Itu merusak list pemanggil **dan** menghapus posisi aslinya — yaitu satu-satunya hal yang ditanyakan.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def mse(y, p):
    total = 0
    for i in range(len(y)):
        total += (y[i] - p[i]) ** 2
    return total / len(y)

def daftar_mse(y, daftar_p):
    return [mse(y, p) for p in daftar_p]</pre>

Satu baris — karena `mse` sudah ada. Kamu tidak perlu tahu isi perutnya, cuma perlu tahu apa yang masuk dan apa yang keluar.

Perhatikan bentuk datanya. `daftar_p` adalah **list berisi list**, persis seperti grid di Topik 2. Tiap `p` di dalamnya adalah satu himpunan tebakan utuh, sejajar dengan `y`. Jadi `for p in daftar_p` menelusuri **kandidat**, bukan angka.

Versi panjangnya:

<pre class="code">hasil = []
for p in daftar_p:
    hasil.append(mse(y, p))
return hasil</pre>

Uji `daftar_mse([1], []) == []` gratis: tidak ada kandidat, tidak ada nilai. Tetapi ia menjaga sesuatu — kalau kamu tergoda menulis `min` di sini, list kosong akan meledak. Soal ini cuma **menilai**; memilih itu Soal 3.

Perhatikan juga `[0, 2.5]` di uji pertama, bukan `[0.0, 2.5]`. Python menganggap `0.0 == 0` benar, jadi keduanya sama saja. Nilainya yang dibandingkan, bukan jenisnya.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def mse(y, p):
    total = 0
    for i in range(len(y)):
        total += (y[i] - p[i]) ** 2
    return total / len(y)

def prediksi_terbaik(y, daftar_p):
    terbaik = daftar_p[0]
    for p in daftar_p:
        if mse(y, p) &lt; mse(y, terbaik):
            terbaik = p
    return terbaik</pre>

Pola Soal 1, dengan "lebih kecil" diganti "MSE-nya lebih kecil".

Kalau kamu sudah menulis `daftar_mse` dan `posisi_terkecil`, ada jalan yang lebih rapi — dan lebih pintar:

<pre class="code">nilai = [mse(y, p) for p in daftar_p]
return daftar_p[posisi_terkecil(nilai)]</pre>

Baca pelan-pelan. **Nilai semua kandidat**, **cari posisi yang terkecil**, **ambil kandidat di posisi itu**. Tiga langkah, dan dua di antaranya sudah kamu tulis di soal sebelumnya. Inilah alasan Soal 1 menanyakan *posisi* dan bukan *nilai*: nilai terkecilnya sendiri tidak berguna — yang kamu butuhkan adalah **siapa pemiliknya**.

Uji `prediksi_terbaik([0], [[1], [-1]]) == [1]` adalah uji seri. Tebakan `1` dan `-1` sama-sama meleset sejauh 1 dari kenyataan `0`, jadi MSE keduanya persis sama — kuadrat sudah membuang tandanya. Yang pertama menang, jadi `&lt;` lagi, bukan `&lt;=`.

Versi di kunci memanggil `mse(y, terbaik)` berulang-ulang, satu kali tiap putaran. Untuk soal seleksi itu tidak masalah. Kalau ingin rapi, simpan nilainya:

<pre class="code">terbaik = daftar_p[0]
nilai_terbaik = mse(y, terbaik)
for p in daftar_p:
    n = mse(y, p)
    if n &lt; nilai_terbaik:
        terbaik = p
        nilai_terbaik = n
return terbaik</pre>

## Soal 4

**Jawaban: kode**

<pre class="kunci">def prediksi_semua(a, b, x):
    return [a + b * xi for xi in x]

def mse(y, p):
    total = 0
    for i in range(len(y)):
        total += (y[i] - p[i]) ** 2
    return total / len(y)

def garis_terbaik(x, y, garis):
    terbaik = garis[0]
    nilai_terbaik = mse(y, prediksi_semua(terbaik[0], terbaik[1], x))
    for g in garis:
        n = mse(y, prediksi_semua(g[0], g[1], x))
        if n &lt; nilai_terbaik:
            terbaik = g
            nilai_terbaik = n
    return terbaik</pre>

**Ini Soal 9 seleksi 2025.** Berhenti sebentar dan lihat apa yang barusan kamu tulis.

Tidak ada rumus garis terbaik di sini. Tidak ada kalkulus, tidak ada turunan, tidak ada \(\sum xy - n\bar x\bar y\). Yang ada cuma: **coba tiap kandidat, ukur, ambil yang paling kecil**. Ketika soalnya sudah memberikan pilihannya, itu sudah cukup — dan jauh lebih sulit disalahtuliskan daripada rumus mana pun.

Perhatikan `g[0]` dan `g[1]`. Sebuah garis disimpan sebagai `[a, b]`, jadi `g[0]` adalah potongan sumbu tegaknya dan `g[1]` kemiringannya. Kalau kamu tertukar, kodemu tetap berjalan mulus dan memberi garis yang salah — tanpa satu pun error. Uji ketiga, `garis_terbaik([0], [10], [[10, 0], [0, 0]])`, menangkapnya: dengan `a` dan `b` tertukar, `[10, 0]` menjadi garis \(\hat y = 0 + 10x\), yang di titik \(x = 0\) menebak 0 dan meleset jauh.

Kenapa `x` dan `y` aman? Karena `prediksi_semua` **membangun list baru** — pelajaran Tulis Kode 02 Soal 4. Kalau di sana kamu menimpa `x` di tempat, di sini akibatnya baru terasa sepenuhnya: kandidat pertama dinilai dengan `x` yang benar, dan **setiap kandidat sesudahnya** dinilai dengan `x` yang sudah rusak. Pemenangnya akan salah, dan tidak ada yang memberitahumu.

Itulah kenapa uji `_x == [0, 1]` ada, dan kenapa Topik 2 harus datang sebelum Topik 3.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def prediksi_semua(a, b, x):
    return [a + b * xi for xi in x]

def mse(y, p):
    total = 0
    for i in range(len(y)):
        total += (y[i] - p[i]) ** 2
    return total / len(y)

def lebih_baik(x, y, garis1, garis2):
    n1 = mse(y, prediksi_semua(garis1[0], garis1[1], x))
    n2 = mse(y, prediksi_semua(garis2[0], garis2[1], x))
    return n1 &lt; n2</pre>

`n1 &lt; n2` **sudah** bernilai `True` atau `False`. Tidak perlu `if`.

Ini pelajaran yang sama dengan `x in data` di Topik 2 dan `n % 2 == 0` di Topik 1, muncul untuk ketiga kalinya dengan wajah baru: **perbandingan adalah nilai**. Kalau kamu menulis

<pre class="code">if n1 &lt; n2:
    return True
else:
    return False</pre>

kodemu benar, tetapi kamu baru saja menulis empat baris untuk mengatakan `n1 &lt; n2`.

Perhatikan arah tandanya. MSE **kecil** berarti **lebih baik** — itu ukuran keburukan, bukan kebaikan. Kalau kamu menulis `n1 &gt; n2`, kodemu akan selalu memilih garis yang lebih jelek, dan uji pertama serta terakhir menangkapnya.

Uji `lebih_baik([0], [1], [1, 0], [1, 0]) is False` adalah uji seri, dan sengaja memakai garis yang **persis sama**. Sesuatu tidak lebih baik daripada dirinya sendiri. Kalau kamu menulis `&lt;=`, uji ini gagal — dan itu tanda yang sama dengan `&lt;=` di Soal 1: aturan seri selalu ditentukan oleh satu karakter.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def prediksi_semua(a, b, x):
    return [a + b * xi for xi in x]

def mad_garis(x, y, a, b):
    p = prediksi_semua(a, b, x)
    total = 0
    for i in range(len(y)):
        total += abs(y[i] - p[i])
    return total / len(y)</pre>

Sama persis dengan `mse_garis`, dengan satu perubahan: `** 2` menjadi `abs`.

Sekarang bandingkan keduanya, dan di sinilah seluruh isi soal ini.

Uji pertama, `mad_garis([1, 2, 3], [9, 11, 13], 5, 3)`, memberi \(2/3\) — **angka yang sama persis** dengan `mse_garis` pada data yang sama di Tulis Kode 02 Soal 5. Kebetulan? Bukan: galatnya semua bernilai 1, 0, atau −1, dan untuk angka-angka itu \(|x|\) dan \(x^2\) memberi hasil yang identik. Selama melesetnya kecil, kedua ukuran nyaris tidak bisa dibedakan.

Sekarang uji terakhir, `mad_garis([0, 0], [0, 10], 0, 0)` — satu titik tepat sasaran, satu titik meleset **10**:

| ukuran | hitungan | hasil |
|---|---|---|
| MAD | \((0 + 10)/2\) | **5** |
| MSE | \((0 + 100)/2\) | **50** |

Sepuluh kali lipat. Itulah watak MSE: ia **melebih-lebihkan yang jauh**, dengan sengaja. Meleset 10 bukan sepuluh kali lebih buruk daripada meleset 1 — menurut MSE, ia **seratus** kali lebih buruk.

Dari situ mengalir semua yang aneh tentang kuadrat terkecil. Ingat cerita di bank Regresi Pertemuan 2: satu titik salah catat menyumbang residual 24, dan kuadratnya 576 — angka yang begitu besar sampai garisnya rela memutar dan merusak tiga titik yang tadinya sempurna, demi mengecilkannya. MAD tidak akan pernah melakukan itu; baginya titik itu cuma meleset 24, sama seperti 24 titik yang masing-masing meleset 1.

Jadi mana yang benar? Keduanya. Mereka menjawab pertanyaan yang berbeda. MSE dipakai di mana-mana karena matematikanya jauh lebih mudah — tetapi harganya adalah kepekaan berlebih terhadap pencilan, dan sekarang kamu bisa menghitung sendiri berapa harganya.

# Catatan pengajar

## Peta soal

| Soal | Keterampilan | Kode salah yang tetap lolos sebagian |
|---|---|---|
| 1 | pola "terbaik sejauh ini" | `&lt;=` — gagal **hanya** di uji seri |
| 2 | memakai fungsi yang diberikan | — |
| 3 | menyusun argmin + penilaian | `&lt;=` — gagal hanya di uji seri |
| 4 | **Soal 9 seleksi 2025** | `a`/`b` tertukar; `x` rusak |
| 5 | perbandingan adalah nilai | `&gt;` — arahnya terbalik |
| 6 | MAD lawan MSE | `** 2` tidak diganti — lolos **2 dari 4** |

Soal 4 adalah alasan seluruh Topik 3 ada. Kalau cuma satu soal yang sempat dikerjakan, kerjakan yang itu.

Perhatikan pola di Soal 1, 3, dan 5: ketiganya punya **satu uji seri**, dan uji itu satu-satunya yang membedakan `&lt;` dari `&lt;=`. Tanpa uji seri, kedua versi lolos sempurna. Ini pasangan yang bagus untuk `is not` di Topik 2 — sekali lagi, uji yang tepat harus **dirancang** untuk menangkap kesalahan tertentu, karena uji yang wajar tidak akan menangkapnya.

## Cara membaca hasilnya

- **Soal 1 gagal hanya di uji `[4, 1, 1]`** → dia menulis `&lt;=`. Diagnosis paling tajam di set ini. Jangan langsung beri tahu; tanya "kalau dua-duanya sama kecil, kodemu pilih yang mana?" dan biarkan dia menelusuri sendiri.
- **Soal 4 gagal di uji ketiga saja** → `a` dan `b` tertukar. Tanya "garis `[10, 0]` itu artinya apa?" Kalau dia bilang "kemiringan 10", di situ masalahnya.
- **Soal 4 gagal di uji `_x`** → dia menulis ulang `prediksi_semua` dengan versi yang menimpa `x`, padahal versi yang benar sudah disediakan di editor. Ini pantas dibicarakan: ada fungsi yang sudah jadi dan benar di layarnya, dan dia menulis ulang yang rusak. Kebiasaan memakai yang sudah ada adalah setengah dari kecepatan mengerjakan soal.
- **Soal 5 semua uji terbalik** → dia menulis `&gt;`. MSE itu ukuran **keburukan**; kecil berarti bagus. Sekali dikatakan, biasanya tidak terulang.
- **Soal 6 lolos 2 dari 4** → dia menyalin `mse_garis` dan lupa mengganti `** 2` dengan `abs`. Perhatikan uji mana yang lolos: uji pertama dan ketiga, yaitu **yang galatnya cuma 0 atau ±1** — dan untuk angka-angka itu \(|x|\) dan \(x^2\) memang identik. Uji kedua (meleset 5) dan keempat (meleset 10) yang membedakan. Tunjukkan tabel 5 lawan 50 di kunci; itu inti soalnya, bukan sekadar jebakan.

## Hubungan dengan seleksi

Soal 4 adalah Soal 9 seleksi 2025 (memilih garis regresi terbaik) tanpa penyamaran. Soal 1, 3, dan 5 adalah tangganya. Soal 6 menjelaskan **kenapa** jawaban Soal 9 kadang terasa aneh: garis kuadrat terkecil selalu condong ke titik yang jauh, dan anak yang sudah menghitung 5 lawan 50 sendiri tidak akan kaget melihatnya.

Kalau ketiga set Tulis Kode topik ini lancar, lanjut ke Topik 4 (String & DNA).
