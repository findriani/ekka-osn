# String & DNA — Baca Kode 02

Topik 4, membaca kode, tingkat lanjut. Sekarang alat yang sebenarnya dipakai di soal DNA: **jendela** yang bergeser sepanjang untai, dan **perbandingan** dua untai basa per basa.

Seperti Topik 2 Baca Kode 02, sebagian besar kode di sini berjalan tanpa error dan memberi angka yang salah. Bedanya, kali ini yang rusak bukan penyalinan melainkan **hitungan** — dan hitungan yang meleset satu tidak pernah terlihat mencurigakan.

## Petunjuk jawaban

Kerjakan **tanpa komputer**. Untuk soal jendela, gambar untainya sekali lalu tandai tiap jendela dengan garis bawah. Kamu akan langsung melihat ada berapa.

Tuliskan jawaban sebagai bilangan bulat, kecuali kalau yang diminta berupa untai — tulis untainya apa adanya. Untuk pilihan ganda, tulis hurufnya.

## Rumus cepat

- Jendela sepanjang `k` di untai sepanjang `n`: ada \(n - k + 1\) buah, di indeks `0` sampai `n - k`.
- `dna[i:i+k]` adalah jendela ke-`i`.
- `dna.count(pola)` **tidak** menghitung yang tumpang tindih; jendela **iya**.
- `dna[::-1]` membalik urutan. Teks tidak punya `.reverse()`.
- `round(x)` membulatkan ke **genap terdekat** kalau tepat di tengah.

## Soal 1 — Menghitung jendela AA

Kode menggeser jendela sepanjang dua basa dari kiri ke kanan. Karena jendelanya bergeser satu langkah setiap kali, dua kemunculan boleh saling tumpang tindih.

<pre class="code">dna = "AAAA"
hitung = 0
for i in range(len(dna) - 1):
    if dna[i:i + 2] == "AA":
        hitung += 1
print(hitung)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 2 — Menyusun dari depan

Setiap basa dibaca dari kiri ke kanan, tetapi selalu ditempatkan di depan `hasil`. Perhatikan bagaimana cara ini membalik urutan tanpa memakai irisan.

<pre class="code">dna = "AGCT"
hasil = ""
for basa in dna:
    hasil = basa + hasil
print(hasil)</pre>

Untai apa yang dicetak?

**Jawaban:** `_____`

---

## Soal 3 — Membalik untai

Untai perlu dibaca dari ujung kanan kembali ke ujung kiri. Pilih ekspresi yang benar-benar menghasilkan teks baru dengan urutan terbalik, bukan method milik list.

<pre class="code">dna = "AGCTA"</pre>

Manakah yang menghasilkan untai `"ATCGA"`?

- **A.** `dna.reverse()`
- **B.** `dna[::-1]`
- **C.** `reversed(dna)`
- **D.** `sorted(dna)`

**Jawaban:** `_____`

---

## Soal 4 — Menukar A dengan G

Fungsi ini seharusnya menukar setiap A menjadi G dan setiap G menjadi A. Untuk `tukar_ag("AG")` hasilnya seharusnya `"GA"`, tetapi yang keluar adalah `"AA"` — tanpa error apa pun.

<pre class="code">1  def tukar_ag(dna):
2      hasil = dna.replace("A", "G")
3      hasil = hasil.replace("G", "A")
4      return hasil</pre>

Baris nomor berapa yang sudah tidak bisa lagi membedakan G asli dari G buatan baris 2?

**Jawaban:** `_____`

---

## Soal 5 — Membandingkan dua untai

Dua untai sama panjang dibandingkan basa per basa. Setiap posisi yang hurufnya berbeda menambah satu pada penghitung `beda`; posisi yang sama tidak menambah apa pun.

<pre class="code">a = "AGCTA"
b = "AGGTT"
beda = 0
for i in range(len(a)):
    if a[i] != b[i]:
        beda += 1
print(beda)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 6 — Kandungan GC dalam persen

Kandungan GC adalah persentase basa G dan C terhadap seluruh panjang untai. Kode menghitung G dan C lebih dulu, membaginya dengan panjang untai, lalu mengubahnya menjadi persen dan membulatkannya.

<pre class="code">dna = "AGGCCTGA"
gc = dna.count("G") + dna.count("C")
print(round(gc / len(dna) * 100))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: 3**

`len(dna) - 1` adalah 3, jadi `i` bernilai 0, 1, 2 — tiga putaran, dan ketiga jendelanya `"AA"`:

<pre class="code">A A A A
^-^                 i = 0: dna[0:2] = "AA"  ✓
  ^-^               i = 1: dna[1:2+1] = "AA"  ✓
    ^-^             i = 2: dna[2:4] = "AA"  ✓</pre>

Jawabannya **3**.

Sekarang bagian pentingnya. Bandingkan dengan `"AAAA".count("AA")`, yang memberi **2**.

| cara | hasil | kenapa |
|---|---|---|
| jendela (kode ini) | **3** | tiap posisi diperiksa, boleh tumpang tindih |
| `.count("AA")` | **2** | melompat ke sesudah yang barusan ketemu |

Kode yang sama, untai yang sama, dua angka yang berbeda. Inilah lanjutan Baca Kode 01 Soal 6, dan sekarang kamu melihat versi yang benar untuk soal DNA: **jendela**.

Rumus banyaknya jendela: untai sepanjang \(n\), jendela selebar \(k\), ada \(n - k + 1\) buah. Di sini \(4 - 2 + 1 = 3\). Kode ini menulisnya sebagai `range(len(dna) - 1)` karena \(k = 2\) — bentuk yang sama dengan pola tetangga di Topik 3 Baca Kode 02 Soal 6.

Kalau kamu menulis `range(len(dna))`, putaran terakhir mengambil `dna[3:5]`, yang cuma berisi `"A"` — sehuruf, tidak sama dengan `"AA"`, jadi tidak dihitung. Perhatikan: **tidak ada `IndexError`**. Irisan di luar batas tidak protes, ia cuma memberi apa adanya. Jawabannya kebetulan tetap 3, dan bug-nya lolos tanpa jejak.

Itu bahaya yang khas untuk teks: irisan terlalu pemaaf. Di list kamu akan kena error; di sini kamu cuma dapat untai pendek yang diam-diam tidak cocok.

## Soal 2

**Jawaban: TCGA**

Kuncinya ada di urutan `basa + hasil`, bukan `hasil + basa`. Basa baru selalu dipasang di **depan**.

| `basa` | `hasil` sesudahnya |
|---|---|
| A | `"A"` |
| G | `"GA"` |
| C | `"CGA"` |
| T | `"TCGA"` |

Menambah di depan berulang-ulang **membalik urutannya** — yang terakhir masuk berakhir paling depan.

Kalau kodenya `hasil = hasil + basa`, hasilnya `"AGCT"`, yaitu untai aslinya, dan kodenya jadi tidak berguna. Satu penukaran urutan, dua arti yang berlawanan.

Ini cara membalik untai dengan tangan. Cara yang benar tetap `dna[::-1]` — satu langkah, dan jauh lebih cepat karena tidak membuat teks baru di tiap putaran.

## Soal 3

**Jawaban: B**

| pilihan | hasil |
|---|---|
| **A.** `dna.reverse()` | **`AttributeError`** — teks tidak punya `.reverse` |
| **B.** `dna[::-1]` | `"ATCGA"` ✓ |
| **C.** `reversed(dna)` | sebuah objek, bukan teks |
| **D.** `sorted(dna)` | `['A', 'A', 'C', 'G', 'T']` — list, dan terurut |

A adalah jebakan untuk orang yang baru selesai Topik 2. List **punya** `.reverse()`; teks tidak. Alasannya sudah kamu tahu: `.reverse()` membalik di tempat, dan teks tidak bisa diubah di tempat. Method yang mustahil itu tidak ada sama sekali.

C menarik karena "hampir". `reversed(dna)` memang berisi hurufnya dalam urutan terbalik, tetapi bentuknya bukan teks — ia perlu dirakit dulu: `"".join(reversed(dna))`. Kalau kamu langsung mencetaknya, yang muncul semacam `<reversed object at 0x...>`.

D memperlihatkan bedanya "terbalik" dan "terurut". `sorted` mengurutkan sesuai abjad, dan hasilnya **list huruf**, bukan teks. Dua kali salah sekaligus.

Aturan singkatnya: untuk membalik teks, cuma ada satu jawaban yang perlu diingat, dan itu `[::-1]`.

## Soal 4

**Jawaban: 3**

Telusuri `tukar_ag("AG")`:

| baris | `hasil` sesudahnya | |
|---|---|---|
| 2 — `replace("A", "G")` | `"GG"` | A jadi G — tetapi G yang lama **juga** masih G |
| 3 — `replace("G", "A")` | `"AA"` | **kedua** G jadi A, tak bisa dibedakan |

Yang keluar `"AA"`, bukan `"GA"`.

Kenapa jawabannya baris 3 dan bukan baris 2? Karena baris 2 sendiri melakukan persis yang diperintahkan, dan tidak salah apa-apa. Masalahnya muncul di baris 3: saat itu untainya berisi dua G, dan **tidak ada cara** membedakan mana yang dulunya A dan mana yang memang G sejak awal. Informasi itu sudah tercampur, dan baris 3 memperlakukan keduanya sama.

Ini pola kesalahan "penukaran lewat perantara" yang klasik. Kamu tidak bisa menukar dua benda dengan memindahkan satu ke tempat yang lain lalu balik lagi — perlu tempat ketiga.

Yang benar adalah menyusun untai baru huruf per huruf, sehingga tiap basa diputuskan **sekali** berdasarkan aslinya:

<pre class="code">def tukar_ag(dna):
    hasil = ""
    for basa in dna:
        if basa == "A":
            hasil += "G"
        elif basa == "G":
            hasil += "A"
        else:
            hasil += basa
    return hasil</pre>

Perhatikan `elif`, bukan `if` kedua. Dengan dua `if` terpisah, basa yang baru diubah menjadi G akan diperiksa lagi oleh syarat berikutnya — dan kamu kembali ke bug yang sama, di dalam satu putaran.

Ingat baik-baik. Komplemen DNA (A↔T, G↔C) adalah **dua penukaran sekaligus**, dan rantai `.replace` di sana gagal dengan cara yang persis sama. Kamu akan menulisnya dengan benar di Tulis Kode 02 Soal 3.

## Soal 5

**Jawaban: 2**

| indeks | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| `a` | A | G | **C** | T | **A** |
| `b` | A | G | **G** | T | **T** |
| beda? | | | ✓ | | ✓ |

Dua posisi berbeda → **2**.

Ini namanya **jarak Hamming**: ada berapa posisi yang isinya tidak sama. Ia mengukur seberapa mirip dua untai yang sama panjang, dan ia muncul di mana-mana — mencocokkan untai DNA, membandingkan kode, mencari mutasi.

Perhatikan kodenya memakai `range(len(a))` dan bukan `for basa in a`. Alasannya: kamu butuh **posisi**, karena `a[i]` harus dibandingkan dengan `b[i]` yang **posisinya sama**. Menelusuri hurufnya saja tidak cukup — kamu tidak akan tahu sedang di mana.

Dan `!=` berarti "tidak sama dengan". Kalau kamu memakai `==`, kamu menghitung yang **cocok**, yaitu 3 — jawaban yang benar untuk pertanyaan yang lain.

## Soal 6

**Jawaban: 62**

Bukan 63.

Hitung dulu:

| indeks | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| basa | A | **G** | **G** | **C** | **C** | T | **G** | A |

- `dna.count("G")` = **3**
- `dna.count("C")` = **2**
- `gc` = **5**, `len(dna)` = **8**

\(5 / 8 = 0.625\), dikali 100 → **62.5**.

Dan `round(62.5)` adalah **62**, bukan 63 — karena Python membulatkan ke **genap terdekat** saat angkanya jatuh tepat di tengah. Ini jebakan yang sama dengan Topik 3 Baca Kode 02 Soal 2, sekarang muncul di tempatnya yang paling wajar: persentase.

Bukan kebetulan. Persentase adalah tempat `.5` paling sering muncul, karena penyebutnya kecil dan bulat. Untai sepanjang 8 hanya bisa memberi kelipatan 12.5 persen; separuhnya berakhir di `.5`. Untai sepanjang 4, 8, 16, atau 40 — semuanya rawan.

Tiga hal yang layak dicatat dari satu baris ini.

Pertama, `gc / len(dna)` memakai `/`. Dengan `//`, hasilnya `5 // 8` = 0, lalu dikali 100 → **0**. Bukan meleset sedikit — hancur total, dan tanpa error.

Kedua, urutannya `gc / len(dna) * 100`, dikerjakan dari kiri: bagi dulu, baru kali. Hasilnya sama saja kalau dibalik menjadi `gc * 100 / len(dna)`, dan yang kedua ini justru lebih aman dari pembulatan — tetapi kamu tetap harus tahu keduanya berakhir di 62.5.

Ketiga, `round` ada di **paling luar**, dikerjakan paling akhir. Itu yang benar. Kalau `round` diselipkan di tengah — misalnya `round(gc / len(dna)) * 100` — hasilnya `round(0.625) * 100` = **100**. Membulatkan terlalu awal, Topik 3 Baca Kode 02 Soal 4, sekarang dengan akibat yang jauh lebih parah.

# Catatan pengajar

## Peta soal

| Soal | Bentuk | Keterampilan | Jebakan |
|---|---|---|---|
| 1 | lacak | jendela, \(n - k + 1\) | menyamakannya dengan `.count` |
| 2 | lacak | menyusun teks dari depan | `hasil + basa` — tidak membalik |
| 3 | pilihan ganda | `[::-1]` pada teks | `.reverse()` dari kebiasaan list |
| 4 | cari baris salah | `.replace` berantai merusak | mengira bisa tukar lewat perantara |
| 5 | lacak | jarak Hamming | `==` alih-alih `!=` |
| 6 | lacak | persen GC + `round` ke genap | menjawab 63 |

Soal 1 dan 6 adalah dua sumber terbesar jawaban DNA yang "hampir benar". Soal 4 adalah satu-satunya yang menyiapkan komplemen di Tulis Kode 02 — kalau dilewat, dia akan menemukan bug itu sendiri di sana, dengan cara yang lebih mahal.

## Cara membaca hasilnya

- **Menjawab 2 di soal 1** → dia menyamakan jendela dengan `.count`. Ini justru pertanda dia ingat Baca Kode 01 Soal 6, cuma belum melihat keduanya berbeda. Sandingkan langsung: satu untai, dua kode, dua angka.
- **Menjawab 63 di soal 6** → hampir semua orang. Yang penting refleksnya, bukan alasannya: begitu ada `.5`, jangan menebak. Kalau dia sudah kena di Topik 3 dan kena lagi di sini, itu tanda ia perlu ditulis di kertas dan ditempel, bukan dijelaskan ketiga kalinya.
- **Menjawab 2 di soal 4** → masuk akal, dan patut didengar dulu. Baris 2 memang di mana informasinya mulai tercampur. Tapi baris 2 melakukan persis yang diminta; baris 3-lah yang bertindak berdasarkan data yang sudah tidak bisa dibedakan. Diskusi ini lebih berharga daripada jawabannya.
- **Menjawab A di soal 3** → bawaan dari Topik 2. Satu kalimat cukup: teks tidak bisa diubah, jadi method yang mengubah di tempat tidak ada.
- **Salah di 5 dengan jawaban 3** → dia memakai `==`. Tanya "yang dihitung yang sama atau yang beda?"

## Hubungan dengan seleksi

Soal 1 adalah pola jendela yang dipakai untuk menghitung k-mer di Soal 26–40. Soal 5 adalah jarak Hamming, cara membandingkan dua untai. Soal 6 adalah ciri GC yang jadi dasar klasifikasinya — dan sekaligus dua cara paling umum untuk menghitungnya dengan benar tetapi salah angka.

Ketiganya punya sifat yang sama dan itu sebabnya set ini ada: **tidak satu pun melempar error**. Untai yang salah hitung terlihat persis seperti untai yang benar hitung.
