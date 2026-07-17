# List & Penyalinan — Baca Kode 02

Topik 2, membaca kode, tingkat lanjut. List di dalam list, irisan berlangkah, dan bentuk paling berbahaya dari penyalinan yang gagal: `[[0] * 3] * 3`. Soal-soal di sini adalah kode yang **berjalan tanpa error** tetapi memberi jawaban salah — jenis bug yang paling mahal, karena tidak ada yang memberitahumu.

## Petunjuk jawaban

Kerjakan **tanpa komputer**, dengan menggambar isi list-nya di kertas.

Untuk soal list di dalam list, gambarlah kotak: satu kotak untuk tiap list yang **benar-benar ada**, lalu tarik panah dari yang menunjuk ke sana. Kalau dua panah menunjuk ke kotak yang sama, kamu baru saja menemukan jawabannya.

Tuliskan jawaban sebagai bilangan bulat, kecuali pada soal pilihan ganda.

## Rumus cepat

- `data[::2]` mengambil selang-seling mulai dari indeks 0. `data[1::2]` mulai dari indeks 1.
- `data[::-1]` membalik urutan.
- `[[0] * 3] * 3` membuat **satu** baris, lalu menunjuknya tiga kali.
- `[[0] * 3 for _ in range(3)]` membuat **tiga** baris yang berbeda.
- `sorted(data)` mengembalikan list baru; `data.sort()` mengubah aslinya dan mengembalikan `None`.

## Soal 1 — Papan dakon

Panitia membuat papan 3 baris × 2 lubang, lalu mengisi satu lubang dengan 5 biji. Kode pembuat papan ini tampak seperti membuat tiga baris terpisah, tetapi perhatikan apakah ketiganya benar-benar list yang berbeda.

<pre class="code">papan = [[0] * 2] * 3
papan[1][0] = 5
total = 0
for baris in papan:
    total += sum(baris)
print(total)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 2 — Nomor kursi selang-seling

Panitia memisahkan kursi bernomor ganjil dan genap posisinya, lalu mencari selisih jumlahnya. Di sini `kode[::2]` dan `kode[1::2]` memilih isi berdasarkan posisi indeks yang selang-seling.

<pre class="code">kode = [1, 2, 3, 4, 5, 6]
print(sum(kode[::2]) - sum(kode[1::2]))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 3 — Yang tidak merusak aslinya

Bu Rina punya list nilai yang **tidak boleh berubah**, tetapi ia butuh versi terurutnya. Jadi, yang diperlukan adalah list baru untuk `b`; list `a` harus tetap dengan urutan semula.

<pre class="code">a = [3, 1, 2]</pre>

Manakah yang membuat `b` terurut **tanpa mengubah** `a`?

- **A.** `b = a` lalu `b.sort()`
- **B.** `b = sorted(a)`
- **C.** `b = a` lalu `b.append(9)`
- **D.** `a.sort()` lalu `b = a`

**Jawaban:** `_____`

---

## Soal 4 — Membuang yang ganjil

Fungsi ini seharusnya membuang semua bilangan ganjil. Untuk `buang_ganjil([1, 3, 5])` hasilnya seharusnya `[]`, tetapi yang keluar adalah `[3]` — tanpa error apa pun. Saat sebuah isi dihapus, posisi isi berikutnya bergeser; itulah hal yang perlu dicermati pada perulangan ini.

<pre class="code">1  def buang_ganjil(data):
2      for n in data:
3          if n % 2 == 1:
4              data.remove(n)
5      return data</pre>

Baris nomor berapa yang mengubah list **yang sedang diulang** oleh baris 2?

**Jawaban:** `_____`

---

## Soal 5 — Denah kelas

Denah tempat duduk disimpan sebagai list berisi list. `denah[r][k]` adalah nomor siswa di baris `r`, kolom `k`. Ingat bahwa indeks baris dihitung lebih dahulu, baru kemudian indeks kolomnya.

<pre class="code">denah = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(denah[1][2] + denah[2][0])</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 6 — Tumpukan piring

Satu piring diselipkan di posisi kedua, lalu piring bernomor 8 diambil dari tumpukan. Tuliskan kembali list setelah `insert` dan setelah `remove`, kemudian baru ambil isi terakhirnya.

<pre class="code">tumpuk = [5, 3, 8]
tumpuk.insert(1, 9)
tumpuk.remove(8)
print(tumpuk[-1] * len(tumpuk))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: 15**

Ini jebakan paling penting di seluruh topik.

`[0] * 2` membuat **satu** list: `[0, 0]`. Lalu `[...] * 3` **tidak** membuat tiga list — ia membuat satu list berisi **tiga panah yang semuanya menunjuk ke `[0, 0]` yang sama itu**.

Gambarnya begini:

<pre class="code">papan ──┬──> [0, 0]   &lt;── satu-satunya list yang benar-benar ada
        ├──────^
        └──────^</pre>

Jadi `papan[1][0] = 5` mengubah satu-satunya baris yang ada, dan **ketiga** panah melihat perubahan itu. Isinya menjadi:

<pre class="code">[[5, 0], [5, 0], [5, 0]]</pre>

Totalnya 5 + 5 + 5 = **15**, bukan 5.

Yang benar:

<pre class="code">papan = [[0] * 2 for _ in range(3)]</pre>

Bentuk ini menjalankan `[0] * 2` **tiga kali**, jadi benar-benar lahir tiga list yang berbeda.

Kenapa ini berbahaya: kodenya berjalan mulus, tidak ada error, dan untuk grid kecil hasilnya kadang terlihat masuk akal. Di soal grid seleksi, bug ini memberimu angka yang salah dan kamu tidak akan tahu dari mana asalnya.

## Soal 2

**Jawaban: -3**

| irisan | isi | jumlah |
|---|---|---|
| `kode[::2]` | 1, 3, 5 | 9 |
| `kode[1::2]` | 2, 4, 6 | 12 |

9 − 12 = **−3**.

`data[::2]` artinya "dari awal sampai akhir, lompat 2". Karena indeks mulai dari 0, yang terambil adalah indeks 0, 2, 4 — yaitu isi **pertama, ketiga, kelima**. `data[1::2]` mulai dari indeks 1, jadi isi kedua, keempat, keenam.

Perhatikan jawabannya negatif. Kalau kamu menjawab 3, kamu membalik urutan pengurangannya.

## Soal 3

**Jawaban: B**

| pilihan | apa yang terjadi | `a` berubah? |
|---|---|---|
| **A.** `b = a` lalu `b.sort()` | `b` cuma nama kedua untuk `a` | **ya** — rusak |
| **B.** `b = sorted(a)` | `sorted` membuat list baru | tidak ✓ |
| **C.** `b = a` lalu `b.append(9)` | nama kedua lagi, dan tidak mengurutkan | **ya** — rusak |
| **D.** `a.sort()` lalu `b = a` | mengurutkan `a` itu sendiri | **ya** — rusak |

A adalah jawaban yang paling menggoda, dan justru itu intinya: ia terlihat seperti "salin dulu, baru urutkan", padahal `b = a` tidak menyalin apa pun. Setelah `b.sort()`, `a` ikut terurut.

Aturan praktis: kalau kamu **tidak boleh** merusak aslinya, jangan pernah memulai dengan `b = a`. Pakai `sorted(a)`, atau salin dulu dengan `a[:]`.

## Soal 4

**Jawaban: 4**

Baris 4 membuang isi dari `data` — list yang sedang diulang oleh baris 2. Perulangan `for` melacak posisinya dengan nomor indeks, dan indeks itu **tidak ikut mundur** saat ada isi yang hilang.

Telusuri:

| putaran | indeks | `data` saat itu | `n` | tindakan |
|---|---|---|---|---|
| 1 | 0 | `[1, 3, 5]` | 1 | ganjil → buang 1 → `[3, 5]` |
| 2 | 1 | `[3, 5]` | **5** | ganjil → buang 5 → `[3]` |
| 3 | 2 | `[3]` | — | indeks 2 sudah lewat ujung → berhenti |

Angka **3 tidak pernah diperiksa**. Setelah 1 dibuang, semua isi bergeser ke kiri: 3 pindah ke indeks 0, yang sudah dilewati. Perulangan lanjut ke indeks 1 dan menemukan 5.

Ini bug klasik "mengubah list sambil mengulanginya". Obatnya: jangan ubah, **bangun yang baru**.

<pre class="code">def buang_ganjil(data):
    return [n for n in data if n % 2 == 0]</pre>

Kamu akan menulisnya sendiri di Tulis Kode 02.

## Soal 5

**Jawaban: 13**

`denah[r][k]` dibaca dari kiri ke kanan: ambil dulu **baris** ke-`r`, lalu dari baris itu ambil **kolom** ke-`k`.

| | kolom 0 | kolom 1 | kolom 2 |
|---|---|---|---|
| **baris 0** | 1 | 2 | 3 |
| **baris 1** | 4 | 5 | **6** |
| **baris 2** | **7** | 8 | 9 |

- `denah[1][2]` → baris 1 = `[4, 5, 6]`, lalu kolom 2 = **6**
- `denah[2][0]` → baris 2 = `[7, 8, 9]`, lalu kolom 0 = **7**

6 + 7 = **13**.

Jebakannya: tertukar baris dan kolom. `denah[2][0]` bukan 3. Yang pertama **selalu** baris. Kalau kamu menjawab 3 + 8 = 11, kamu membacanya terbalik — dan itu tepat kesalahan yang akan membuat soal grid nanti memberi angka salah tanpa error.

## Soal 6

**Jawaban: 9**

| perintah | isi `tumpuk` |
|---|---|
| awal | `[5, 3, 8]` |
| `.insert(1, 9)` | `[5, 9, 3, 8]` |
| `.remove(8)` | `[5, 9, 3]` |

`tumpuk[-1]` = **3**, `len(tumpuk)` = **3**, jadi 3 × 3 = **9**.

Dua hal yang sering keliru. `.insert(1, 9)` menyisipkan **9 di indeks 1** — angkanya di belakang, posisinya di depan; urutan argumennya kebalikan dari dugaan banyak orang. Dan `.remove(8)` membuang **isi yang bernilai 8**, bukan isi di indeks 8. Bandingkan dengan `.pop(0)` di Baca Kode 01, yang bekerja dengan posisi.

Aturan singkat: `remove` bicara soal **nilai**, `pop` dan `insert` bicara soal **posisi**.

# Catatan pengajar

## Peta soal

| Soal | Bentuk | Keterampilan | Jebakan |
|---|---|---|---|
| 1 | lacak | `[[0]*n]*m` | mengira lahir tiga baris |
| 2 | lacak | irisan berlangkah | membalik urutan pengurangan |
| 3 | pilihan ganda | `sorted` lawan `.sort()` + aliasing | "salin dulu baru urutkan" yang palsu |
| 4 | cari baris salah | mengubah list sambil diulang | — |
| 5 | lacak | list di dalam list | tertukar baris dan kolom |
| 6 | lacak | `insert`/`remove` | `remove` pakai nilai, bukan indeks |

## Cara membaca hasilnya

Ketiga soal terpenting di sini — 1, 3, 4 — punya satu kesamaan: **kodenya jalan, errornya tidak ada, jawabannya salah**. Itu yang membuat topik ini layak dua set baca sendiri.

- **Salah di 1** → wajib diulang sampai paham. Ini penyebab tunggal paling sering dari soal grid yang "hampir benar". Pakai gambar kotak-dan-panah; penjelasan verbal jarang berhasil.
- **Menjawab A di soal 3** → dia mengira `b = a` menyalin. Sama akarnya dengan Baca Kode 01 Soal 5. Kalau dua-duanya salah, hentikan dan tuntaskan konsep ini dulu.
- **Salah di 5** → baris/kolom tertukar. Murah diperbaiki sekarang, mahal kalau ketemu pertama kali di Topik 6.
- **Salah di 2 atau 6** → kosakata, bukan konsep. Tunjukkan sekali, selesai.

## Hubungan dengan seleksi

Soal 1 dan 5 adalah prasyarat langsung Q2 (menghitung lintasan di grid 7×7). Grid di sana dibangun sebagai list berisi list, dan dibaca `grid[r][k]`. Anak yang belum kokoh di dua soal ini akan menulis kode yang berjalan mulus dan memberi angka yang salah — dan tidak punya cara menemukan kenapa.
