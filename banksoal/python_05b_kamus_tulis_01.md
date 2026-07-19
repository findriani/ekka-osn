# Dictionary & Vektor — Tulis Kode 01 (Mudah)

Topik 5, menulis kode, tingkat **mudah**. Enam alat dasar: mengambil nilai dengan aman, memeriksa kunci, menghitung kunci, menjumlahkan nilai, perkalian titik, dan jarak kuadrat. Semua jawabannya satu atau dua baris, dan tidak ada satu pun yang butuh perulangan bersarang.

Kelihatannya remeh, memang sengaja. Kalau keenam alat ini otomatis, soal berat di Tulis Kode 02 dan 03 tinggal soal berpikir, bukan soal mengingat.

## Petunjuk jawaban

Bacalah cerita pada soal dulu. Kalimat `Tulis` menjelaskan nama fungsi, masukan, dan nilai yang dikembalikan; baris uji di bawahnya memperlihatkan bentuk jawabannya.

Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**. Nilaimu dihitung per baris uji.

Hanya Python standar, **tanpa NumPy**. `collections` boleh, tetapi belum diperlukan di sini.

## Rumus cepat

- `d.get(k, 0)` nilai untuk `k`, atau `0` kalau `k` tidak ada.
- `k in d` sudah bernilai `True`/`False` — itu jawaban, tak perlu `if`.
- `len(d)` banyaknya kunci · `sum(d.values())` jumlah semua nilai.
- Perkalian titik: `sum(x * y for x, y in zip(a, b))`.
- `zip(a, b)` memasangkan `a[i]` dengan `b[i]` tanpa mengurus indeks.

## Soal 1 — Stok atau nol

Kasir memeriksa stok sebuah barang. Kalau barang itu tidak tercatat, anggap stoknya 0.

Tulis `stok_atau_nol(gudang, barang)` yang mengembalikan stok `barang` di dalam dictionary `gudang`, atau `0` kalau barang itu tidak ada.

<pre class="starter">def stok_atau_nol(gudang, barang):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">stok_atau_nol({"pensil": 5}, "pensil") == 5
stok_atau_nol({"pensil": 5}, "spidol") == 0
stok_atau_nol({}, "apa saja") == 0</pre>

**Jawaban:** `_____`

---

## Soal 2 — Ada di daftar tamu?

Satpam memeriksa apakah sebuah nama tercantum sebagai kunci di daftar tamu.

Tulis `terdaftar(tamu, nama)` yang mengembalikan `True` kalau `nama` adalah kunci di `tamu`, dan `False` kalau tidak.

<pre class="starter">def terdaftar(tamu, nama):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">terdaftar({"ani": 1, "budi": 2}, "ani") is True
terdaftar({"ani": 1, "budi": 2}, "cici") is False
terdaftar({}, "x") is False</pre>

**Jawaban:** `_____`

---

## Soal 3 — Berapa jenis

Panitia ingin tahu **berapa jenis** barang yang tercatat, bukan totalnya.

Tulis `berapa_jenis(gudang)` yang mengembalikan banyaknya kunci di `gudang`.

<pre class="starter">def berapa_jenis(gudang):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">berapa_jenis({"a": 3, "b": 5}) == 2
berapa_jenis({}) == 0
berapa_jenis({"x": 9}) == 1</pre>

**Jawaban:** `_____`

---

## Soal 4 — Total seluruh stok

Sekarang totalnya: jumlahkan semua nilai di dalam dictionary, apa pun kuncinya.

Tulis `total_stok(gudang)` yang mengembalikan jumlah semua nilai di `gudang`.

<pre class="starter">def total_stok(gudang):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">total_stok({"a": 3, "b": 5}) == 8
total_stok({}) == 0
total_stok({"x": -2, "y": 2}) == 0</pre>

**Jawaban:** `_____`

---

## Soal 5 — Perkalian titik

Dua vektor diberikan sebagai list yang sama panjang.

Tulis `titik(a, b)` yang mengembalikan perkalian titik keduanya: jumlah dari `a[i] * b[i]` untuk tiap `i`.

<pre class="starter">def titik(a, b):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">titik([1, 2, 3], [4, 5, 6]) == 32
titik([2, 0], [0, 2]) == 0
titik([], []) == 0</pre>

**Jawaban:** `_____`

---

## Soal 6 — Jarak kuadrat

Dua titik pada bidang diberikan sebagai pasangan `(x, y)`.

Tulis `jarak2(p, q)` yang mengembalikan jarak **kuadrat** antara `p` dan `q` — selisih tiap sumbu dikuadratkan lalu dijumlahkan. Jangan ambil akarnya.

<pre class="starter">def jarak2(p, q):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jarak2((0, 0), (3, 4)) == 25
jarak2((1, 1), (1, 1)) == 0
jarak2((2, 0), (0, 0)) == 4</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def stok_atau_nol(gudang, barang):
    return gudang.get(barang, 0)</pre>

Seluruh soal ini adalah satu pemanggilan `.get` dengan cadangan `0`. Uji kedua dan ketiga ada khusus untuk memastikan kamu memakai `.get`, bukan `gudang[barang]` — yang akan melempar `KeyError` begitu barangnya tidak ada.

Ingat bedanya dengan `.get(barang)` tanpa cadangan: itu memberi `None`, dan `None` tidak bisa dijumlahkan nanti. Cadangan `0` membuat "tidak ada" menjadi angka.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def terdaftar(tamu, nama):
    return nama in tamu</pre>

`nama in tamu` **sudah** bernilai `True` atau `False`. Tidak perlu `if`, tidak perlu perulangan.

Perhatikan `in` pada dictionary memeriksa **kunci**, bukan nilai. `"ani" in {"ani": 1}` adalah `True`; `1 in {"ani": 1}` adalah `False`. Ini pengulangan pelajaran `x in data` dari Topik 2, dengan benda yang berbeda.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def berapa_jenis(gudang):
    return len(gudang)</pre>

`len` pada dictionary menghitung **kuncinya**. Sama seperti `len` pada list menghitung isinya.

Bandingkan dengan Soal 4: `len` menghitung *berapa jenis*, `sum(values)` menghitung *berapa banyak seluruhnya*. Dua pertanyaan berbeda, dua alat berbeda — dan soal seleksi sering menuntutmu tahu mana yang diminta.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def total_stok(gudang):
    return sum(gudang.values())</pre>

`gudang.values()` memberi semua nilainya; `sum` menjumlahkannya. Uji `{}` memberi 0 gratis — `sum` dari kosong adalah 0.

Kalau kamu menulis `sum(gudang)`, kamu menjumlahkan **kuncinya**. Untuk kunci berupa teks itu langsung error; untuk kunci berupa angka ia diam-diam salah. Selalu sebut `.values()` kalau yang kamu mau nilainya.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def titik(a, b):
    return sum(x * y for x, y in zip(a, b))</pre>

`zip(a, b)` memasangkan `a[i]` dengan `b[i]`, jadi kamu tidak perlu mengurus indeks. Tiap pasangan dikalikan, lalu semuanya dijumlahkan.

Versi perulangan biasa sama benarnya:

<pre class="code">def titik(a, b):
    total = 0
    for i in range(len(a)):
        total += a[i] * b[i]
    return total</pre>

Uji `titik([], [])` memberi 0: tidak ada pasangan, jadi `sum` dari kosong adalah 0. Inilah operasi yang mengukur kemiripan dua vektor — kamu memakainya lagi di Tulis Kode 03 untuk analogi kata.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def jarak2(p, q):
    return (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2</pre>

Selisih tiap sumbu, kuadratkan, jumlahkan. Kuadratnya membuang tanda, jadi tidak perlu `abs` dan tidak peduli titik mana yang "lebih besar".

**Jangan ambil akarnya.** Soal ini minta jarak kuadrat, dan untuk **membandingkan** jarak, akar tidak pernah diperlukan: kalau \(a &lt; b\) maka \(\sqrt a &lt; \sqrt b\). Menghindari akar berarti menghindari galat pembulatan — dan itulah yang kamu mau di tiap soal "cari yang terdekat". Bentuk ini akan kamu perluas ke vektor sepanjang apa pun di Tulis Kode 02.

# Catatan pengajar

## Peta soal

| Soal | Alat | Jebakan yang ditanam |
|---|---|---|
| 1 | `d.get(k, 0)` | `d[k]` → `KeyError` untuk kunci absen |
| 2 | `k in d` | menulis `if`/loop untuk yang sudah `True`/`False` |
| 3 | `len(d)` | — |
| 4 | `sum(d.values())` | `sum(d)` menjumlahkan kunci |
| 5 | `zip` + perkalian titik | mengurus indeks sendiri, salah panjang |
| 6 | jarak kuadrat | mengambil akar yang tak perlu |

## Cara membaca hasilnya

- **Semua uji gagal di semua soal** → `print` bukan `return`. Cek `/admin`; lima menit.
- **Soal 1 gagal di uji kedua/ketiga** → dia menulis `gudang[barang]`. Tunjukkan pesan `KeyError`-nya; itu petunjuk paling jelas.
- **Soal 4 dijawab `sum(gudang)`** → dia lupa `.values()`. Untuk kunci teks langsung error, jadi mudah ketahuan.
- **Soal 5 salah panjang** → biasanya karena `range(len(a))` padahal dia pakai indeks `b` yang beda; `zip` menghilangkan seluruh kelas kesalahan ini.
- **Lancar semua** → langsung Tulis Kode 02, tempat dictionary dan vektor mulai dipakai bersama.
