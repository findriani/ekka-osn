# List & Penyalinan — Tulis Kode 02 (Sedang)

Topik 2, menulis kode, tingkat **sedang**. Inilah inti topik ini. Setiap fungsi di sini harus mengembalikan list **baru** dan meninggalkan list yang diberikan kepadanya **utuh**.

Kedengarannya sepele sampai kamu sadar Python tidak akan memperingatkanmu kalau kamu melanggarnya. Merusak list milik orang lain adalah bug yang berjalan mulus, tidak melempar error, dan baru ketahuan tiga soal kemudian.

## Petunjuk jawaban

Bacalah cerita pada soal terlebih dahulu. Kalimat yang diawali `Tulis` menjelaskan nama fungsi, masukan, dan nilai yang harus dikembalikan; contoh uji di bawahnya membantumu melihat bentuk jawabannya.

Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**. Nilaimu dihitung per baris uji.

Perhatikan uji yang berpasangan seperti ini:

<pre class="code">salin_lalu_tambah(_a := [1, 2, 3], 9) == [1, 2, 3, 9]
_a == [1, 2, 3]</pre>

Tanda `:=` adalah cara singkat Python untuk **memberi nama sambil memakainya**. Baris pertama memanggil fungsimu dengan sebuah list yang diberi nama `_a`, lalu baris kedua memeriksa apakah `_a` **masih utuh** sesudahnya. Kalau fungsimu mengubah list yang diberikan kepadanya, baris pertama lolos tetapi baris kedua gagal — dan itulah yang sedang diuji.

Hanya Python standar, **tanpa NumPy**.

## Rumus cepat

- `data[:]` dan `list(data)` sama-sama membuat **list baru** berisi hal yang sama.
- `b = data` **tidak** menyalin — ia cuma nama kedua.
- `sorted(data)` → list baru · `data.sort()` → mengubah aslinya, mengembalikan `None`
- `a + b` → list baru · `a.extend(b)` dan `a += b` → mengubah `a`
- Membangun list baru dari yang lama: `[n for n in data if syarat]`

## Soal 1 — Titipan belanja

Budi mau menitip satu barang di daftar Ani, tetapi daftar Ani sendiri **tidak boleh berubah**.

Tulis `salin_lalu_tambah(data, x)` yang mengembalikan **list baru** berisi isi `data` ditambah `x` di akhir, tanpa mengubah `data`.

<pre class="starter">def salin_lalu_tambah(data, x):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">salin_lalu_tambah([1, 2, 3], 4) == [1, 2, 3, 4]
salin_lalu_tambah([], 5) == [5]
salin_lalu_tambah(_a := [1, 2, 3], 9) == [1, 2, 3, 9]
_a == [1, 2, 3]</pre>

**Jawaban:** `_____`

---

## Soal 2 — Menyaring yang ganjil

Mesin sortir menyisihkan semua nomor ganjil, tetapi rekaman aslinya harus tetap tersimpan apa adanya.

Tulis `tanpa_ganjil(data)` yang mengembalikan **list baru** berisi hanya bilangan genap dari `data`, dengan urutan yang sama.

<pre class="starter">def tanpa_ganjil(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">tanpa_ganjil([1, 2, 3, 4]) == [2, 4]
tanpa_ganjil([1, 3]) == []
tanpa_ganjil([]) == []
tanpa_ganjil(_b := [1, 2, 3]) == [2]
_b == [1, 2, 3]</pre>

**Jawaban:** `_____`

---

## Soal 3 — Papan skor menurun

Papan skor menampilkan nilai dari besar ke kecil. Rekaman nilai aslinya, yang tersusun menurut nomor peserta, **tidak boleh diacak**.

Tulis `urut_menurun(data)` yang mengembalikan **list baru** berisi isi `data` terurut dari besar ke kecil.

<pre class="starter">def urut_menurun(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">urut_menurun([3, 1, 2]) == [3, 2, 1]
urut_menurun([5]) == [5]
urut_menurun([]) == []
urut_menurun(_c := [3, 1, 2]) == [3, 2, 1]
_c == [3, 1, 2]</pre>

**Jawaban:** `_____`

---

## Soal 4 — Tanpa nama kembar

Buku tamu punya nama yang tercatat dua kali. Panitia ingin daftar unik, tetapi **urutan kedatangan harus dipertahankan**.

Tulis `buang_kembar(data)` yang mengembalikan **list baru** tanpa isi kembar, mempertahankan urutan kemunculan **pertama**.

<pre class="starter">def buang_kembar(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">buang_kembar([1, 2, 1, 3, 2]) == [1, 2, 3]
buang_kembar([5, 5, 5]) == [5]
buang_kembar([3, 1, 2]) == [3, 1, 2]
buang_kembar([]) == []</pre>

**Jawaban:** `_____`

---

## Soal 5 — Menggabung dua kelas

Dua kelas digabung untuk satu kegiatan, tetapi daftar masing-masing kelas tetap dipakai untuk absen.

Tulis `gabung(a, b)` yang mengembalikan **list baru** berisi isi `a` diikuti isi `b`, tanpa mengubah `a` maupun `b`.

<pre class="starter">def gabung(a, b):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">gabung([1, 2], [3]) == [1, 2, 3]
gabung([], []) == []
gabung(_d := [1, 2], _e := [3]) == [1, 2, 3]
_d == [1, 2]
_e == [3]</pre>

**Jawaban:** `_____`

---

## Soal 6 — Giliran bergeser

Setiap hari jadwal piket bergeser: yang kemarin paling akhir jadi paling awal, sisanya mundur satu.

Tulis `geser_kanan(data)` yang mengembalikan **list baru** dengan isi terakhir dipindah ke depan.

<pre class="starter">def geser_kanan(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">geser_kanan([1, 2, 3]) == [3, 1, 2]
geser_kanan([7]) == [7]
geser_kanan([]) == []
geser_kanan(_f := [1, 2, 3]) == [3, 1, 2]
_f == [1, 2, 3]</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def salin_lalu_tambah(data, x):
    baru = data[:]
    baru.append(x)
    return baru</pre>

`data[:]` adalah irisan yang mengambil **semuanya** — dan karena setiap irisan menghasilkan list baru, itulah cara menyalin. `list(data)` sama saja.

Yang salah, dan kenapa:

<pre class="code">def salin_lalu_tambah(data, x):
    data.append(x)
    return data</pre>

Ini **lolos 3 dari 4 uji** — nilainya 75. Hasilnya memang selalu `[1, 2, 3, 4]`. Yang rusak adalah list milik pemanggil, dan **satu-satunya** uji yang menangkapnya adalah `_a == [1, 2, 3]`.

Renungkan itu sebentar. Kalau ujinya cuma memeriksa nilai kembalian, kode yang diam-diam merusak data orang lain akan lolos dengan nilai **sempurna**. Bug seperti ini bisa hidup berbulan-bulan tanpa ada yang tahu.

Yang juga salah: `baru = data` lalu `baru.append(x)`. `baru` cuma nama kedua — persis Baca Kode 01 Soal 5. Tanda `[:]`-nya kecil dan gampang terlupa, dan justru itulah seluruh isi soal ini.

Versi satu baris: `return data + [x]`, karena `+` pada list menghasilkan list baru.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def tanpa_ganjil(data):
    return [n for n in data if n % 2 == 0]</pre>

Ini **list comprehension**, dan artinya persis seperti bacaannya: "ambil tiap `n` dari `data`, simpan kalau genap". Hasilnya list baru; `data` tidak tersentuh.

Bentuk panjangnya sama benarnya:

<pre class="code">baru = []
for n in data:
    if n % 2 == 0:
        baru.append(n)
return baru</pre>

Perhatikan ini **pola akumulasi yang sama** dari Topik 1 — hanya wadahnya `[]` alih-alih `0`, dan diisi dengan `.append` alih-alih `+=`. Menjumlah, menghitung, menyaring: satu pola, tiga wadah.

Yang salah dan berbahaya:

<pre class="code">for n in data:
    if n % 2 == 1:
        data.remove(n)
return data</pre>

Ini kode dari Baca Kode 02 Soal 4. Ia merusak `data` **dan** melewatkan isi, karena membuang sesuatu dari list yang sedang diulang akan menggeser sisanya. Jangan ubah — **bangun yang baru**.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def urut_menurun(data):
    return sorted(data, reverse=True)</pre>

`sorted` mengembalikan list baru. Tambahkan `reverse=True` untuk urutan besar-ke-kecil.

Yang menggoda: `data.sort(reverse=True)` lalu `return data`. Itu **mengubah** list pemanggil, dan uji `_c == [3, 1, 2]` menangkapnya. Kalau kamu hanya menulis `return data.sort(reverse=True)`, hasilnya `None` dan semuanya gagal — pelajaran `None` untuk ketiga kalinya di topik ini.

Cara lain: `sorted(data)[::-1]` — urutkan naik, lalu balik. Sama benarnya, dua langkah, tetapi kalau kamu menemukannya sendiri berarti kamu menggabung dua alat yang berbeda. Bagus.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def buang_kembar(data):
    baru = []
    for n in data:
        if n not in baru:
            baru.append(n)
    return baru</pre>

Pola akumulasi lagi, dengan syarat yang melihat ke **wadahnya sendiri**: simpan `n` hanya kalau ia belum ada di `baru`. Karena kita menelusuri `data` dari depan, yang tersimpan selalu kemunculan **pertama** — persis yang diminta.

Godaan besarnya: `return list(set(data))`. Itu memang membuang yang kembar, dan **lolos 3 dari 4 uji**. Yang gagal hanya uji **ketiga**: `buang_kembar([3, 1, 2])` harus tetap `[3, 1, 2]`, tetapi `set` tidak punya urutan, dan `list(set([3, 1, 2]))` memberi `[1, 2, 3]`.

Perhatikan kenapa tiga uji lainnya lolos. `[1, 2, 1, 3, 2]` kebetulan sudah menghasilkan `[1, 2, 3]` yang memang terurut; `[5, 5, 5]` cuma satu isi; `[]` kosong. Hanya `[3, 1, 2]` — yang **sengaja tidak terurut** — yang bisa membedakan.

Itu pelajaran pentingnya: **`set` membuang urutan**. Kalau soalnya bilang "pertahankan urutan", `set` tidak bisa dipakai sendirian. Uji ketiga ada khusus untuk itu, dan tanpanya `list(set(data))` akan mendapat nilai sempurna.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def gabung(a, b):
    return a + b</pre>

`+` pada dua list menghasilkan list **baru**. Kedua list asal tidak tersentuh — jadi soal ini gratis, asalkan kamu memakai alat yang benar.

Yang salah: `a.extend(b); return a`, atau `a += b; return a`. Keduanya menempelkan isi `b` ke dalam `a` **di tempat**, jadi list pemanggil ikut memanjang. Uji `_d == [1, 2]` menangkapnya.

Perhatikan pasangan yang membingungkan ini:

| yang kamu tulis | membuat list baru? |
|---|---|
| `c = a + b` | **ya** |
| `a += b` | **tidak** — mengubah `a` |

Untuk angka, `x = x + 1` dan `x += 1` sama persis. Untuk list, **tidak**. Ini salah satu sudut Python yang paling tajam.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def geser_kanan(data):
    return data[-1:] + data[:-1]</pre>

Dipecah:

- `data[-1:]` = isi terakhir, **sebagai list** → `[3]`
- `data[:-1]` = semuanya kecuali yang terakhir → `[1, 2]`
- disambung → `[3, 1, 2]`

Kenapa `data[-1:]` dan bukan `data[-1]`? Karena `data[-1]` memberi **angka** `3`, dan `3 + [1, 2]` adalah error. Irisan memberi list, dan list bisa disambung dengan list.

Sekarang bagian terbaiknya: uji `geser_kanan([])`. Cara yang "kelihatan wajar" —

<pre class="code">baru = data[:]
akhir = baru.pop()
baru.insert(0, akhir)
return baru</pre>

— melempar `IndexError` pada list kosong, karena tidak ada yang bisa di-`pop`. Versi irisan **tidak**: `[][-1:]` adalah `[]`, `[][:-1]` adalah `[]`, dan `[] + []` adalah `[]`. Benar dengan sendirinya.

Ini pelajaran yang sama dengan `tiga_awal` di set mudah, dalam bentuk yang lebih besar: **indeks tunggal galak, irisan pemaaf**. Pilih alat yang benar dan kasus tepinya lenyap sendiri.

# Catatan pengajar

## Peta soal

| Soal | Keterampilan | Kode salah yang tetap lolos sebagian |
|---|---|---|
| 1 | `data[:]` menyalin | `data.append(x)` — lolos **3 dari 4** |
| 2 | list comprehension | `data.remove(n)` dalam loop — merusak **dan** melewatkan |
| 3 | `sorted` lawan `.sort()` | `.sort(reverse=True)` — lolos **4 dari 5** |
| 4 | akumulasi + `not in` | `list(set(data))` — lolos **3 dari 4** |
| 5 | `a + b` lawan `a += b` | `a.extend(b)` — lolos **4 dari 5** |
| 6 | irisan menangani kasus kosong | `pop`/`insert` — `IndexError` di `[]` |

Perhatikan kolom terakhir. **Setiap** soal di set ini bisa dijawab dengan kode yang salah namun lolos sebagian besar uji. Itu bukan kebetulan: begitulah rasanya bug aliasing di dunia nyata. Kodenya jalan, hasilnya benar, kerusakannya di tempat lain.

Karena itu nilai per-uji jauh lebih informatif di sini daripada di topik mana pun. **5 dari 5 dan 4 dari 5 adalah dua dunia yang berbeda** — yang satu paham penyalinan, yang satu tidak dan belum tahu.

## Cara membaca hasilnya

- **Uji `_a` / `_b` / `_c` gagal, sisanya lolos** → ini diagnosis paling berharga dari seluruh Topik 2. Dia bisa menghasilkan jawaban yang benar tetapi merusak masukannya. Tunjukkan kodenya di `/admin` berdampingan dengan uji yang gagal; kalimat "fungsimu benar, tapi lihat apa yang terjadi pada list Ani" biasanya cukup.
- **Soal 4 dijawab `list(set(data))`** → bagus, dia kenal `set`. Diskusikan bahwa `set` membuang urutan; ini akan penting lagi di Topik 5.
- **Soal 6 kena `IndexError`** → dia pakai `pop`. Benar untuk list berisi, salah untuk yang kosong. Ini kesempatan bagus memperlihatkan bahwa memilih alat mengalahkan menambal kasus tepi.
- **Semua `None`** → `.sort()` atau `.reverse()` ditampung. Sudah tiga kali muncul di topik ini; kalau masih kena, tempelkan aturannya di dinding.

## Hubungan dengan seleksi

Tidak ada soal 2025 yang berbunyi "salin list ini". Tapi Q2 (grid 7×7) dan Q26–40 (DNA) sama-sama menyimpan data di list yang dipakai berulang-ulang. Kode yang diam-diam merusak masukannya akan memberi jawaban benar pada percobaan pertama dan salah pada percobaan kedua — dan di ruang ujian, dia tidak akan punya waktu untuk mencari tahu kenapa.
