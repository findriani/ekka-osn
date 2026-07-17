# Fungsi & Rumus — Tulis Kode 01 (Mudah)

Topik 3, menulis kode, tingkat **mudah**. Semua jawabannya **satu baris**, dan tidak ada satu pun perulangan. Yang dilatih cuma satu hal: memindahkan rumus dari kertas ke dalam `return`.

Enam rumus di sini bukan pilihan acak. Empat di antaranya adalah potongan dari MSE dan garis regresi — soal 8 dan 9 seleksi 2025 — yang sengaja dipecah sampai sekecil mungkin. Di Tulis Kode 02 kamu akan menyusunnya kembali menjadi utuh.

## Petunjuk jawaban

Bacalah cerita pada soal terlebih dahulu. Kalimat yang diawali `Tulis` menjelaskan nama fungsi, masukan, dan nilai yang harus dikembalikan; contoh uji di bawahnya membantumu melihat bentuk jawabannya.

Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**. Nilaimu dihitung per baris uji.

Pakai `return`, **bukan** `print`. Kalau kamu menulis `print`, jawabannya akan terlihat benar di layar dan semua ujimu tetap gagal — persis seperti Baca Kode 01 Soal 3.

Hanya Python standar, **tanpa NumPy**.

## Rumus cepat

- `n ** 2` kuadrat · `abs(x)` jarak dari nol, tandanya dibuang
- `sum(data)` jumlah semua isi · `len(data)` banyaknya isi
- Rata-rata: `sum(data) / len(data)` — **selalu `/`, jangan `//`**
- Garis lurus: \(\hat y = a + b\,x\)
- Sebuah rumus adalah **nilai**. Nilai bisa langsung dikembalikan; tidak perlu ditampung dulu.

## Soal 1 — Luas ubin

Tukang menghitung luas satu ubin persegi panjang.

Tulis `luas_persegi_panjang(p, l)` yang mengembalikan luasnya.

<pre class="starter">def luas_persegi_panjang(p, l):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">luas_persegi_panjang(3, 4) == 12
luas_persegi_panjang(5, 1) == 5
luas_persegi_panjang(0, 9) == 0</pre>

**Jawaban:** `_____`

---

## Soal 2 — Kuadrat

Tulis `kuadrat(n)` yang mengembalikan `n` dipangkatkan dua.

<pre class="starter">def kuadrat(n):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">kuadrat(3) == 9
kuadrat(-4) == 16
kuadrat(0) == 0
kuadrat(1) == 1</pre>

**Jawaban:** `_____`

---

## Soal 3 — Seberapa jauh

Dua pos berjajar di garis lurus. Yang ditanya cuma jaraknya, bukan siapa yang di kiri.

Tulis `selisih_mutlak(a, b)` yang mengembalikan jarak antara `a` dan `b` — selalu tidak negatif.

<pre class="starter">def selisih_mutlak(a, b):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">selisih_mutlak(10, 4) == 6
selisih_mutlak(4, 10) == 6
selisih_mutlak(5, 5) == 0
selisih_mutlak(-3, 2) == 5</pre>

**Jawaban:** `_____`

---

## Soal 4 — Garis tebakan

Sebuah garis regresi punya bentuk \(\hat y = a + b\,x\). Beri ia `a`, `b`, dan sebuah `x`, dan ia menebak `y`.

Tulis `prediksi(a, b, x)` yang mengembalikan tebakan garis itu.

<pre class="starter">def prediksi(a, b, x):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">prediksi(5, 3, 2) == 11
prediksi(5, 3, 0) == 5
prediksi(0, 2, 4) == 8
prediksi(1, 1, 1) == 2</pre>

**Jawaban:** `_____`

---

## Soal 5 — Meleset berapa

Kenyataannya `y`, tebakan garisnya `y_topi`. Yang ditanya: melesetnya berapa, **dan ke arah mana**.

Tulis `galat(y, y_topi)` yang mengembalikan kenyataan dikurangi tebakan.

<pre class="starter">def galat(y, y_topi):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">galat(10, 8) == 2
galat(8, 10) == -2
galat(5, 5) == 0</pre>

**Jawaban:** `_____`

---

## Soal 6 — Rata-rata

Tulis `rata_rata(data)` yang mengembalikan rata-rata isi `data`. Dijamin `data` tidak pernah kosong.

<pre class="starter">def rata_rata(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">rata_rata([1, 2, 3]) == 2
rata_rata([1, 2]) == 1.5
rata_rata([1, 2, 2]) == 5 / 3
rata_rata([4]) == 4</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def luas_persegi_panjang(p, l):
    return p * l</pre>

Rumusnya sudah kamu tahu sejak SD. Yang baru cuma tempatnya: rumus itu diletakkan sesudah kata `return`.

Perhatikan kamu **tidak perlu** menampung dulu:

<pre class="code">hasil = p * l
return hasil</pre>

Itu benar, tetapi `p * l` sudah **berupa nilai** — ia tidak perlu diberi nama untuk bisa dikembalikan. Beri nama hanya kalau namanya menjelaskan sesuatu, atau kalau nilainya dipakai lebih dari sekali.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def kuadrat(n):
    return n ** 2</pre>

`n ** 2` berarti \(n^2\). Bisa juga `n * n` — sama benarnya dan sama cepatnya.

Uji `kuadrat(-4) == 16` ada untuk satu alasan: **kuadrat membuang tanda**. Meleset ke bawah 4 dan meleset ke atas 4 sama-sama memberi 16. Itulah satu-satunya alasan MSE memakai kuadrat, dan kamu akan melihatnya lagi tiga kali di topik ini.

Perhatikan juga apa yang **tidak** terjadi di sini. Baca Kode 02 Soal 3 menunjukkan `-2 ** 2` bernilai −4. Tetapi di sini, `n` sudah berisi −4 sebelum `**` bekerja, jadi hasilnya 16 dengan benar. Jebakan itu cuma menggigit kalau kamu mengetik angka negatifnya langsung, bukan lewat variabel.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def selisih_mutlak(a, b):
    return abs(a - b)</pre>

`abs` membuang tandanya. Yang tersisa adalah jarak.

Yang salah: `return a - b`. Uji pertama lolos (10 − 4 = 6), lalu uji kedua memberi −6 dan gagal. Sekali lagi: satu uji tidak pernah cukup, dan uji kedua di sini adalah **uji pertama yang dibalik** — sengaja.

Yang juga sering ditulis, dan benar tetapi bertele-tele:

<pre class="code">if a &gt; b:
    return a - b
else:
    return b - a</pre>

Empat baris untuk sesuatu yang sudah ada namanya. Kalau kamu menulis ini, kamu tidak salah — kamu cuma belum tahu `abs`. Sekarang sudah.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def prediksi(a, b, x):
    return a + b * x</pre>

Ini garis regresi, dan ia akan muncul di setiap soal sisa topik ini.

Perkalian dikerjakan sebelum penjumlahan, sama seperti di matematika — jadi `a + b * x` sudah berarti \(a + (b \times x)\). Tidak perlu kurung.

Yang salah, dan menarik: `return (a + b) * x`. Kode ini **lolos 2 dari 4 uji**:

| uji | dengan `(a + b) * x` | |
|---|---|---|
| `prediksi(5, 3, 2) == 11` | \((5+3) \times 2 = 16\) | gagal |
| `prediksi(5, 3, 0) == 5` | \((5+3) \times 0 = 0\) | gagal |
| `prediksi(0, 2, 4) == 8` | \((0+2) \times 4 = 8\) | **lolos** |
| `prediksi(1, 1, 1) == 2` | \((1+1) \times 1 = 2\) | **lolos** |

Lihat kenapa dua itu lolos. Yang ketiga lolos karena `a` kebetulan **0** — dan menambah nol tidak mengubah apa pun, jadi kedua rumus bertemu. Yang keempat lolos karena `a`, `b`, dan `x` semuanya **1**, dan pada angka 1 hampir semua rumus memberi jawaban yang sama.

Itu pelajaran tersendiri: **angka 0 dan 1 adalah saksi yang buruk**. Keduanya membuat perkalian dan penjumlahan berperilaku mirip, jadi rumus yang salah pun sering lolos. Kalau kamu menguji kodemu sendiri, pakai angka yang tidak istimewa.

Uji kedua yang paling tajam di sini. Titik \(x = 0\) adalah tempat garis memotong sumbu tegak, dan nilainya **harus** `a`. Versi salah memberi 0. Kalau fungsimu tidak memberi `a` saat `x = 0`, ia bukan garis \(a + bx\).

## Soal 5

**Jawaban: kode**

<pre class="kunci">def galat(y, y_topi):
    return y - y_topi</pre>

Urutannya penting, dan tidak boleh ditebak: **kenyataan dikurangi tebakan**. Bukan sebaliknya.

Uji `galat(8, 10) == -2` memaksanya. Kalau kamu menulis `y_topi - y`, uji itu memberi +2 dan gagal.

Kenapa urutan ini yang dipilih dunia? Karena tandanya jadi punya arti: galat **positif** berarti kenyataannya di **atas** garis (garisnya menebak terlalu rendah), dan galat negatif berarti sebaliknya. Kalau dibalik, artinya jadi terbalik juga dan semua orang bingung.

Perhatikan bahwa `galat` di sini **tidak** membuang tanda — beda dengan Soal 3. Itu disengaja. Tandanya baru dibuang nanti, saat dikuadratkan.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def rata_rata(data):
    return sum(data) / len(data)</pre>

Satu garis miring, bukan dua.

Kalau kamu menulis `//`, kodemu **lolos 2 dari 4 uji** — dan justru itu yang membuatnya berbahaya:

| uji | dengan `//` | |
|---|---|---|
| `rata_rata([1, 2, 3]) == 2` | `6 // 3` = 2 | **lolos** |
| `rata_rata([1, 2]) == 1.5` | `3 // 2` = 1 | gagal |
| `rata_rata([1, 2, 2]) == 5 / 3` | `5 // 3` = 1 | gagal |
| `rata_rata([4]) == 4` | `4 // 1` = 4 | **lolos** |

Dua uji yang lolos punya kesamaan: **hasilnya kebetulan bulat**. Selama datamu bagus, `//` terlihat benar seumur hidup. Uji kedua dan ketiga sengaja dipilih supaya hasilnya **tidak** bulat.

Perhatikan `rata_rata([1, 2, 3]) == 2` tetap lolos walau `/` memberi `2.0`, bukan `2`. Python menganggap `2.0 == 2` benar — nilainya sama, cuma jenisnya beda. Jadi jangan pernah pakai `//` demi "supaya bulat"; kalau kamu memang butuh bilangan bulat, `round` di **paling akhir** yang benar.

# Catatan pengajar

## Peta soal

| Soal | Alat | Kode salah yang tetap lolos sebagian |
|---|---|---|
| 1 | `p * l` | — |
| 2 | `n ** 2` | `n * 2` — lolos uji `kuadrat(0)` saja |
| 3 | `abs(a - b)` | `a - b` — lolos **2 dari 4** |
| 4 | `a + b * x` | `(a + b) * x` — lolos **2 dari 4** |
| 5 | `y - y_topi` | `y_topi - y` — lolos **1 dari 3** |
| 6 | `sum / len` | `//` — lolos **2 dari 4** |

Kolom terakhir adalah alasan tiap uji dipilih. Setiap jebakan di sini punya satu uji khusus yang menangkapnya, dan uji itu selalu kasus yang **tidak simetris** atau **tidak bulat** — karena kasus yang rapi tidak bisa membedakan apa pun.

## Cara membaca hasilnya

- **Semua uji gagal di semua soal** → `print` bukan `return`. Cek kodenya di `/admin`; ini kesalahan lima menit, dan hampir semua orang melakukannya sekali.
- **Soal 6 lolos 2 dari 4** → dia menulis `//`. Ini hasil paling berguna di set ini. Tunjukkan tabel di kunci; melihat "dua yang lolos kebetulan bulat" lebih meyakinkan daripada aturan hafalan.
- **Soal 3 lolos 2 dari 4** → dia lupa `abs`. Tanya "kalau posnya ditukar, jaraknya berubah tidak?" — biasanya langsung ketawa sendiri.
- **Soal 4 lolos 2 dari 4** → dia menulis `(a + b) * x`. Tanya "apa nilai garisnya saat x nol?" Ini pertanyaan yang sama yang akan menolongnya membaca grafik regresi di Pertemuan 2. Layak juga ditunjukkan **kenapa** dua uji lolos: keduanya berisi 0 dan 1, angka yang terlalu jinak untuk membedakan rumus.
- **Lolos semua dengan cepat** → jangan berhenti, langsung Tulis Kode 02. Set ini memang tidak dirancang menghambat; ia cuma memastikan keenam potongan MSE sudah otomatis sebelum dirakit.

## Hubungan dengan seleksi

Soal 4 dan 5 adalah dua bagian dari Soal 9 seleksi 2025 (memilih garis terbaik): kamu butuh `prediksi` untuk membuat tebakan, dan `galat` untuk mengukur melesetnya. Soal 2 dan 6 melengkapi Soal 8 (MSE): kuadratkan galatnya, lalu rata-ratakan. Keempatnya dirakit menjadi satu fungsi di Tulis Kode 02 Soal 5.
