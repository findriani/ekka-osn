# Konvolusi — Tulis Kode 01 (Mudah)

Topik 8, menulis kode, tingkat **mudah**. Rumus ukuran keluaran, versi dua dimensinya, jumlah parameter, padding "same", memotong sepetak masukan, dan menghitung satu nilai konvolusi. Ini alat-alat yang menjawab Soal 22–25 seleksi — rumusnya pendek, dan tugasmu di sini adalah menuliskannya tanpa jebakan kecil (padding dua kali, `//`, bias).

## Petunjuk jawaban

Bacalah cerita pada soal dulu. Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**. Nilaimu dihitung per baris uji.

Beberapa fungsi mengembalikan **pasangan** `(tinggi, lebar)` atau sebuah **list**; perhatikan bentuk yang diminta uji.

Hanya Python standar, **tanpa NumPy**.

## Rumus cepat

- Ukuran satu sisi: `(n - k + 2*p) // s + 1`. Padding `2*p`, pakai `//`.
- 2D: hitung tinggi dari tinggi, lebar dari lebar; kembalikan `(tinggi, lebar)`.
- Parameter: `bobot = kanal_masuk * kanal_keluar * kt * kl`, `bias = kanal_keluar`.
- Padding "same" untuk stride 1, kernel ganjil: `(k - 1) // 2`.
- Irisan `data[i:i+k]` mengambil `k` isi mulai dari indeks `i`.

## Soal 1 — Ukuran keluaran

Tulis `ukuran_keluar(n, k, s, p)` yang mengembalikan ukuran keluaran satu sisi: `(n - k + 2*p) // s + 1`.

<pre class="starter">def ukuran_keluar(n, k, s, p):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">ukuran_keluar(32, 5, 2, 1) == 15
ukuran_keluar(32, 3, 1, 0) == 30
ukuran_keluar(7, 7, 1, 0) == 1
ukuran_keluar(10, 3, 2, 0) == 4</pre>

**Jawaban:** `_____`

---

## Soal 2 — Ukuran keluaran 2D

Masukan dan kernel diberikan sebagai pasangan `(tinggi, lebar)`.

Tulis `ukuran_keluar_2d(ukuran, kernel, s, p)` yang mengembalikan `(tinggi_keluar, lebar_keluar)`. Hitung tinggi dari tinggi, lebar dari lebar.

<pre class="starter">def ukuran_keluar_2d(ukuran, kernel, s, p):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">ukuran_keluar_2d((32, 64), (5, 3), 1, 0) == (28, 62)
ukuran_keluar_2d((28, 28), (5, 1), 1, 0) == (24, 28)
ukuran_keluar_2d((10, 10), (3, 3), 1, 1) == (10, 10)</pre>

**Jawaban:** `_____`

---

## Soal 3 — Jumlah parameter

Tulis `jumlah_parameter(kanal_masuk, kanal_keluar, kernel)` dengan `kernel = (tinggi, lebar)`, yang mengembalikan jumlah parameter satu lapisan: bobot ditambah satu bias per kanal keluaran.

<pre class="starter">def jumlah_parameter(kanal_masuk, kanal_keluar, kernel):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jumlah_parameter(3, 16, (3, 3)) == 448
jumlah_parameter(64, 32, (1, 1)) == 2080
jumlah_parameter(1, 1, (1, 1)) == 2</pre>

**Jawaban:** `_____`

---

## Soal 4 — Padding "same"

Untuk stride 1 dan kernel ganjil, padding yang mempertahankan ukuran adalah `(k - 1) // 2`.

Tulis `padding_sama(k)` yang mengembalikan padding itu.

<pre class="starter">def padding_sama(k):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">padding_sama(3) == 1
padding_sama(5) == 2
padding_sama(1) == 0
padding_sama(7) == 3</pre>

**Jawaban:** `_____`

---

## Soal 5 — Memotong jendela

Konvolusi 1D menggeser jendela sepanjang `k` di sepanjang barisan.

Tulis `jendela(data, i, k)` yang mengembalikan sublist sepanjang `k` yang mulai di indeks `i`.

<pre class="starter">def jendela(data, i, k):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jendela([1, 2, 3, 4, 5], 1, 3) == [2, 3, 4]
jendela([9, 8, 7], 0, 2) == [9, 8]
jendela([1, 2, 3], 0, 3) == [1, 2, 3]</pre>

**Jawaban:** `_____`

---

## Soal 6 — Satu nilai konvolusi

Sebuah `patch` dan `kernel` berukuran sama, keduanya grid. Nilai konvolusi adalah perkalian titiknya: kalikan tiap entri yang seposisi, lalu jumlahkan.

Tulis `konvolusi_titik(patch, kernel)` yang mengembalikan nilai itu.

<pre class="starter">def konvolusi_titik(patch, kernel):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">konvolusi_titik([[1, 2], [3, 4]], [[1, 0], [0, 1]]) == 5
konvolusi_titik([[1, 1], [1, 1]], [[1, 1], [1, 1]]) == 4
konvolusi_titik([[2]], [[3]]) == 6</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def ukuran_keluar(n, k, s, p):
    return (n - k + 2 * p) // s + 1</pre>

Seluruh topik ini berdiri di atas satu baris ini. Dua hal wajib benar: `2 * p` (padding di kedua sisi) dan `//` (bagi bulat, dibuang ke bawah). Uji `ukuran_keluar(10, 3, 2, 0)` memberi `7 // 2 + 1 = 4`, menangkap keduanya — kalau kamu memakai `/`, hasilnya 4.5 dan gagal.

Uji `ukuran_keluar(32, 5, 2, 1)` memberi 15, contoh diagnostik yang sama dengan soal seleksi.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def ukuran_keluar_2d(ukuran, kernel, s, p):
    def satu(n, k):
        return (n - k + 2 * p) // s + 1
    tinggi, lebar = ukuran
    kt, kl = kernel
    return (satu(tinggi, kt), satu(lebar, kl))</pre>

Panggil rumus satu-sisi dua kali: sekali untuk tinggi (pakai tinggi masukan dan tinggi kernel), sekali untuk lebar. Kembalikan pasangannya dalam urutan `(tinggi, lebar)` — dan pertahankan urutan itu di seluruh jawabanmu.

Uji `((28, 28), (5, 1), 1, 0)` memberi `(24, 28)`: kernel 5×1 memangkas tinggi tetapi membiarkan lebar. Kalau kamu menukar tinggi dan lebar, hasilnya `(28, 24)` dan gagal. Inilah kesalahan paling sering di Soal 22–25.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def jumlah_parameter(kanal_masuk, kanal_keluar, kernel):
    kt, kl = kernel
    bobot = kanal_masuk * kanal_keluar * kt * kl
    bias = kanal_keluar
    return bobot + bias</pre>

Bobot adalah hasil kali keempat angka; bias adalah satu per kanal keluaran. Uji `(3, 16, (3, 3))` memberi `3*16*9 + 16 = 432 + 16 = 448`.

Jebakannya bias. Kalau kamu mengembalikan `bobot` saja (lupa bias), jawabannya 432 — kesalahan paling umum di soal parameter. Bias dihitung **satu per kanal keluaran**, bukan satu per lapisan.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def padding_sama(k):
    return (k - 1) // 2</pre>

Untuk stride 1 dan kernel ganjil, padding `(k-1)//2` di tiap sisi membuat keluaran sama besar dengan masukan: kernel memangkas `k-1`, padding mengembalikan `2 * (k-1)//2 = k-1`. Keduanya saling menutup.

`padding_sama(3)` memberi 1, `padding_sama(5)` memberi 2 — pola "same" yang kamu lihat di Baca Kode. Untuk kernel genap tidak ada padding simetris yang pas, jadi rumus ini memang untuk kernel ganjil.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def jendela(data, i, k):
    return data[i:i + k]</pre>

Irisan `data[i:i+k]` mengambil `k` isi mulai dari indeks `i`. Ingat dari Topik 2: irisan berhenti **sebelum** `i+k`, jadi persis `k` isi.

Ini potongan yang digeser konvolusi 1D di sepanjang barisan. Di Tulis Kode 02 kamu memanggilnya berulang di tiap posisi, mengalikannya dengan kernel, untuk membangun keluaran penuh.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def konvolusi_titik(patch, kernel):
    total = 0
    for r in range(len(patch)):
        for c in range(len(patch[0])):
            total += patch[r][c] * kernel[r][c]
    return total</pre>

Telusuri tiap sel, kalikan entri `patch` dengan entri `kernel` yang seposisi, jumlahkan. Ini perkalian titik dari Topik 5, hanya diatur dalam grid alih-alih list datar.

Inilah operasi konvolusi di satu posisi. Uji pertama memakai kernel diagonal (1 di pojok, 0 di sisanya) yang menjumlahkan diagonal petak: `1 + 4 = 5`. Menggeser operasi ini ke seluruh masukan menghasilkan satu peta fitur — pekerjaan Tulis Kode 03.

# Catatan pengajar

## Peta soal

| Soal | Keterampilan | Jebakan yang ditanam |
|---|---|---|
| 1 | rumus ukuran | `p` sekali; `/` bukan `//` |
| 2 | ukuran 2D | menukar tinggi/lebar |
| 3 | parameter + bias | lupa bias |
| 4 | padding "same" | — |
| 5 | irisan jendela | salah panjang irisan |
| 6 | nilai konvolusi | — |

Soal 1 dan 3 adalah dua yang paling sering diuji di seleksi, dan dua jebakannya (`//` dan bias) adalah dua kesalahan paling mahal. Kalau keduanya lancar, Soal 22–25 tinggal memasukkan angka.

## Cara membaca hasilnya

- **Soal 1 gagal di uji terakhir** → dia memakai `/`, bukan `//`. Ukuran harus bulat.
- **Soal 2 memberi pasangan terbalik** → tinggi dan lebar tertukar. Uji `((28,28),(5,1),...)` menangkapnya.
- **Soal 3 menjawab 432** → lupa bias. Jebakan paling umum topik ini.
- **Soal 6 salah** → biasanya salah indeks grid (`patch[r][c]`), pelajaran Topik 6 yang muncul lagi.
- **Lancar semua** → langsung Tulis Kode 02, tempat lapisan dirantai dan konvolusi 1D dibangun.
