# String & DNA — Tulis Kode 03 (Sedang)

Topik 4, menulis kode, tingkat **sedang**. Sekarang cara untai DNA sungguhan diperiksa: dipotong menjadi **jendela**, lalu dihitung mana yang paling sering muncul.

Potongan sepanjang `k` itu namanya **k-mer**, dan ia adalah bahasa kerja seluruh bagian DNA di seleksi 2025. Untai yang berbeda punya k-mer yang berbeda pula, dan dari situ ia bisa dikenali. Soal 26–40 pada dasarnya adalah: *hitung ciri-ciri untai ini, lalu tebak ia jenis apa.*

Satu soal di sini — yang kedua — adalah jebakan `.count` dari Baca Kode 01 Soal 6, sekarang harus kamu kalahkan sendiri.

## Petunjuk jawaban

Bacalah cerita pada soal terlebih dahulu. Kalimat yang diawali `Tulis` menjelaskan nama fungsi, masukan, dan nilai yang harus dikembalikan; contoh uji di bawahnya membantumu melihat bentuk jawabannya.

Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**.

Hanya Python standar, **tanpa NumPy**. `collections.Counter` boleh dipakai kalau kamu mengenalnya, tetapi tidak satu pun soal di sini memerlukannya.

## Rumus cepat

- Jendela sepanjang `k`: ada \(n - k + 1\) buah, di indeks `0` sampai `n - k`.
- `dna[i:i+k]` adalah jendela ke-`i` · `[dna[i:i+k] for i in range(len(dna) - k + 1)]` semuanya
- `.count` pada **teks** melewatkan yang tumpang tindih. `.count` pada **list** tidak punya masalah itu.
- Pola "terbanyak": simpan juara sementara, tantang tiap calon, ganti kalau **lebih besar** — `&gt;`, bukan `&gt;=`.

## Soal 1 — Memotong semua jendela

Tulis `potong_kmer(dna, k)` yang mengembalikan list berisi **semua** potongan sepanjang `k`, dari kiri ke kanan, termasuk yang tumpang tindih. Kalau `dna` lebih pendek dari `k`, kembalikan list kosong.

<pre class="starter">def potong_kmer(dna, k):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">potong_kmer("AGCT", 2) == ["AG", "GC", "CT"]
potong_kmer("AAA", 2) == ["AA", "AA"]
potong_kmer("AG", 2) == ["AG"]
potong_kmer("A", 2) == []
potong_kmer("AGCT", 1) == ["A", "G", "C", "T"]</pre>

**Jawaban:** `_____`

---

## Soal 2 — Menghitung pola yang tumpang tindih

Tulis `hitung_kmer(dna, pola)` yang mengembalikan berapa kali `pola` muncul di `dna`, **termasuk kemunculan yang tumpang tindih**.

<pre class="starter">def hitung_kmer(dna, pola):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">hitung_kmer("AAAA", "AA") == 3
hitung_kmer("AGCT", "GC") == 1
hitung_kmer("AGCT", "TT") == 0
hitung_kmer("AAAAA", "AA") == 4
hitung_kmer("AGAGAG", "AG") == 3</pre>

**Jawaban:** `_____`

---

## Soal 3 — Basa yang paling sering

Tulis `basa_terbanyak(dna)` yang mengembalikan basa yang paling sering muncul. Kalau seri, kembalikan yang **lebih dulu muncul** di untainya. Dijamin `dna` tidak pernah kosong.

<pre class="starter">def basa_terbanyak(dna):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">basa_terbanyak("AAGC") == "A"
basa_terbanyak("GGGA") == "G"
basa_terbanyak("AG") == "A"
basa_terbanyak("GA") == "G"
basa_terbanyak("T") == "T"</pre>

**Jawaban:** `_____`

---

## Soal 4 — Deret terpanjang

Kadang satu basa berulang berkali-kali berturut-turut. Panjang deret seperti itu adalah salah satu ciri untai.

Tulis `deret_terpanjang(dna)` yang mengembalikan panjang deret basa **sama** yang terpanjang. Untai kosong memberi 0.

<pre class="starter">def deret_terpanjang(dna):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">deret_terpanjang("AAGGGT") == 3
deret_terpanjang("AGCT") == 1
deret_terpanjang("") == 0
deret_terpanjang("AAAA") == 4
deret_terpanjang("GGA") == 2</pre>

**Jawaban:** `_____`

---

## Soal 5 — Kartu ciri untai

Tulis `hitung_semua_basa(dna)` yang mengembalikan list berisi empat angka: banyaknya **A**, **G**, **C**, dan **T** — dengan urutan itu.

<pre class="starter">def hitung_semua_basa(dna):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">hitung_semua_basa("AGCT") == [1, 1, 1, 1]
hitung_semua_basa("AAGG") == [2, 2, 0, 0]
hitung_semua_basa("") == [0, 0, 0, 0]
hitung_semua_basa("TTTT") == [0, 0, 0, 4]
hitung_semua_basa("AAGC") == [2, 1, 1, 0]</pre>

**Jawaban:** `_____`

---

## Soal 6 — K-mer yang paling sering

Semuanya bertemu di sini.

Tulis `kmer_terbanyak(dna, k)` yang mengembalikan potongan sepanjang `k` yang paling sering muncul. Kalau seri, kembalikan yang **lebih dulu muncul**. Dijamin `dna` selalu cukup panjang.

<pre class="starter">def kmer_terbanyak(dna, k):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">kmer_terbanyak("AGAGAG", 2) == "AG"
kmer_terbanyak("AAAA", 2) == "AA"
kmer_terbanyak("AGCT", 2) == "AG"
kmer_terbanyak("ATGATGC", 3) == "ATG"
kmer_terbanyak("AGCT", 4) == "AGCT"</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def potong_kmer(dna, k):
    return [dna[i:i + k] for i in range(len(dna) - k + 1)]</pre>

Versi panjangnya:

<pre class="code">def potong_kmer(dna, k):
    hasil = []
    for i in range(len(dna) - k + 1):
        hasil.append(dna[i:i + k])
    return hasil</pre>

Rumus \(n - k + 1\) adalah satu-satunya hal yang perlu diingat dari seluruh topik ini. Untai sepanjang 4, jendela selebar 2 → \(4 - 2 + 1 = 3\) jendela. Cara mengingatnya: jendela terakhir dimulai di indeks \(n - k\), dan hitungan yang mulai dari 0 selalu butuh tambah satu.

Uji `potong_kmer("A", 2) == []` adalah yang paling menarik, dan ia gratis. Untai sepanjang 1 dengan jendela 2 memberi \(1 - 2 + 1 = 0\), jadi `range(0)` tidak jalan sama sekali dan hasilnya list kosong. **Kamu tidak perlu memeriksa apa pun** — rumusnya sudah menangani sendiri.

Kalau kamu tergoda menambahkan `if len(dna) < k: return []`, tidak apa-apa, tapi tidak perlu. Ini pelajaran yang sama dengan `tiga_awal` di Topik 2: pilih alat yang benar, dan kasus tepinya lenyap sendiri.

Yang salah dan sering: `range(len(dna))`. Jendela terakhir menjadi `dna[3:5]` untuk `"AGCT"`, yang memberi `"T"` — **sehuruf, tanpa error**. Hasilnya `["AG", "GC", "CT", "T"]`, satu isi kelebihan dan panjangnya salah. Irisan di luar batas tidak pernah protes; ia cuma memberi apa adanya. Uji pertama menangkapnya.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def hitung_kmer(dna, pola):
    k = len(pola)
    hitung = 0
    for i in range(len(dna) - k + 1):
        if dna[i:i + k] == pola:
            hitung += 1
    return hitung</pre>

Inilah jawaban untuk Baca Kode 01 Soal 6.

Yang **hampir semua orang** tulis pertama kali:

<pre class="code">return dna.count(pola)</pre>

Satu baris, terlihat sempurna, dan **lolos 3 dari 5 uji**:

| uji | `.count` | benar |
|---|---|---|
| `hitung_kmer("AAAA", "AA") == 3` | 2 | gagal |
| `hitung_kmer("AGCT", "GC") == 1` | 1 | **lolos** |
| `hitung_kmer("AGCT", "TT") == 0` | 0 | **lolos** |
| `hitung_kmer("AAAAA", "AA") == 4` | 2 | gagal |
| `hitung_kmer("AGAGAG", "AG") == 3` | 3 | **lolos** |

Lihat baik-baik ketiga yang lolos. Tidak satu pun punya kemunculan yang **tumpang tindih** — di `"AGCT"` dan `"AGAGAG"`, tiap kemunculan pola berdiri sendiri, jadi melompat ke sesudahnya tidak membuang apa-apa. `.count` benar untuk untai-untai itu, dan akan tetap terlihat benar selamanya selama datamu kebetulan tidak berulang.

Hanya `"AAAA"` dan `"AAAAA"` yang bisa membedakan. Untai berulang adalah **satu-satunya** saksi.

Perhatikan `k = len(pola)` di baris pertama — polanya bisa sepanjang apa pun, jadi lebarnya diambil dari polanya sendiri. Kalau kamu menulis `dna[i:i+2]`, fungsimu cuma benar untuk pola dua huruf.

Kalau kamu sudah menulis `potong_kmer`, ada jalan yang lebih rapi:

<pre class="code">def hitung_kmer(dna, pola):
    daftar = potong_kmer(dna, len(pola))
    return daftar.count(pola)</pre>

Perhatikan ada `.count` di situ — dan kali ini **aman**. Kenapa? Karena ini `.count` pada **list**, yang menghitung isi yang sama persis, bukan mencari pola di dalam teks panjang. Begitu jendelanya sudah dipotong dan dijajarkan, tidak ada lagi yang bisa tumpang tindih; tiap jendela sudah menjadi isi tersendiri.

Jadi masalahnya tidak pernah pada `.count`. Masalahnya pada **memakai `.count` teks untuk pertanyaan jendela**. Dua nama yang sama, dua benda yang berbeda.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def basa_terbanyak(dna):
    terbaik = dna[0]
    for basa in dna:
        if dna.count(basa) &gt; dna.count(terbaik):
            terbaik = basa
    return terbaik</pre>

Pola "simpan juara sementara" dari Topik 3 Tulis Kode 03, dengan "lebih kecil" diganti "lebih sering".

`.count` aman di sini karena polanya cuma **satu huruf** — tumpang tindih tidak mungkin. Ini pasangan yang bagus untuk Soal 2: alat yang sama, satu aman satu tidak, dan bedanya cuma panjang polanya.

Perhatikan `&gt;`, **bukan** `&gt;=`. Uji `basa_terbanyak("AG") == "A"` dan `basa_terbanyak("GA") == "G"` adalah dua uji seri yang merupakan **satu untai dibalik**. A dan G sama-sama muncul sekali; yang menang adalah yang duluan. Dengan `&gt;=`, calon terakhir selalu merebut gelarnya, dan kedua uji itu memberi jawaban yang tertukar.

Ini persis pelajaran `&lt;` lawan `&lt;=` di Topik 3 Tulis Kode 03 Soal 1. Satu karakter menentukan aturan seri, dan tanpa uji seri kedua versi lolos sempurna.

Versi `Counter`-nya:

<pre class="code">from collections import Counter
def basa_terbanyak(dna):
    return Counter(dna).most_common(1)[0][0]</pre>

Ini benar, termasuk aturan serinya — `Counter` mengingat urutan kemunculan pertama, dan `most_common` tidak mengacaknya. Tapi perhatikan `[0][0]` di ujungnya: `most_common(1)` memberi `[("A", 2)]`, yaitu list berisi satu pasangan. `[0]` mengambil pasangannya, `[0]` lagi mengambil hurufnya. Kalau kamu memakai `Counter`, **selalu cek bentuk keluarannya**; itu sumber salah paling umum dari alat ini.

Versi kunci sengaja tidak memakai `Counter`, dan lebih lambat — ia memanggil `.count` sekali untuk tiap basa, jadi untainya dibaca berulang-ulang. Untuk untai seleksi yang panjangnya puluhan, itu tidak penting sama sekali. Untuk untai sejuta basa, `Counter` yang benar.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def deret_terpanjang(dna):
    if dna == "":
        return 0
    terpanjang = 1
    sekarang = 1
    for i in range(1, len(dna)):
        if dna[i] == dna[i - 1]:
            sekarang += 1
        else:
            sekarang = 1
        if sekarang &gt; terpanjang:
            terpanjang = sekarang
    return terpanjang</pre>

Dua penghitung: `sekarang` untuk deret yang sedang berjalan, `terpanjang` untuk rekor.

Perhatikan `range(1, len(dna))` — mulai dari **1**, bukan 0, karena tiap basa dibandingkan dengan **tetangga kirinya**. Basa pertama tidak punya tetangga kiri, jadi ia dilewati dan deretnya berangkat dari 1. Ini pola tetangga yang sama dengan Topik 3 Baca Kode 02 Soal 6, dari arah yang lain.

Sekarang bagian yang penting, dan yang paling sering salah. Bandingkan letak pemeriksaan rekornya:

<pre class="code">    else:
        if sekarang &gt; terpanjang:      # SALAH — hanya diperiksa saat berganti
            terpanjang = sekarang
        sekarang = 1
    return terpanjang</pre>

Kode itu **lolos 4 dari 5 uji**. Yang gagal hanya `deret_terpanjang("AAAA") == 4`.

Kenapa? Karena rekornya cuma diperbarui **saat basanya berganti**. Untuk `"AAAA"`, tidak pernah ada pergantian — jadi deret sepanjang 4 itu tidak pernah dicatat, dan fungsinya mengembalikan 1.

Ini bug **"deret terakhir tidak pernah dihitung"**, dan ia muncul di mana-mana: menghitung deret, mengelompokkan, memecah teks. Selalu ada satu kelompok terakhir yang tidak diakhiri oleh apa pun, karena datanya keburu habis. Obatnya seperti di kunci: periksa rekornya **tiap putaran**, bukan cuma saat berganti.

Perhatikan pula uji mana yang membongkarnya. `"AAGGGT"` lolos karena deret terpanjangnya berakhir di huruf T — ada pergantian sesudahnya. `"GGA"` lolos karena alasan yang sama. Hanya untai yang **berakhir dengan deret terpanjangnya** yang bisa menangkap bug ini, dan `"AAAA"` adalah kasus paling murni: seluruh untainya satu deret.

Uji `deret_terpanjang("") == 0` memerlukan penjagaan sendiri, dan ini satu-satunya soal di topik ini yang begitu. Tanpa `if dna == "": return 0`, baris `terpanjang = 1` akan mengembalikan 1 untuk untai kosong — sebuah "deret terpanjang sepanjang 1" di untai yang tidak punya basa sama sekali. Perhatikan bahwa ini kebalikan dari Soal 1: di sana penjagaan tidak perlu, di sini perlu. Yang membedakan bukan selera, melainkan apakah rumusnya sendiri sudah benar di titik nol.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def hitung_semua_basa(dna):
    return [dna.count("A"), dna.count("G"), dna.count("C"), dna.count("T")]</pre>

Versi yang lebih rapi: `return [dna.count(basa) for basa in "AGCT"]`.

Bentuk kedua layak dilihat baik-baik. `for basa in "AGCT"` menelusuri **teks** `"AGCT"` huruf per huruf — jadi teks itu dipakai sebagai daftar basa yang ingin dihitung, bukan sebagai untai DNA. Teks pendek sering berguna sebagai daftar kecil; kamu sudah melihatnya sebagai `basa not in "AGCT"` di Tulis Kode 02 Soal 6.

Urutannya **A, G, C, T** dan itu ditentukan soal, bukan alfabet. Tidak ada yang bisa menebaknya dari kode; ia harus dibaca dari perintahnya.

Sekarang lihat betapa sulitnya kesalahan ini ditangkap. Kalau kamu memakai urutan alfabet — `for basa in "ACGT"`, yang menukar posisi G dan C — kodemu **lolos 4 dari 5 uji**:

| uji | dengan urutan A,C,G,T | |
|---|---|---|
| `hitung_semua_basa("AGCT") == [1, 1, 1, 1]` | `[1, 1, 1, 1]` | **lolos** |
| `hitung_semua_basa("AAGG") == [2, 2, 0, 0]` | `[2, 0, 2, 0]` | gagal |
| `hitung_semua_basa("") == [0, 0, 0, 0]` | `[0, 0, 0, 0]` | **lolos** |
| `hitung_semua_basa("TTTT") == [0, 0, 0, 4]` | `[0, 0, 0, 4]` | **lolos** |
| `hitung_semua_basa("AAGC") == [2, 1, 1, 0]` | `[2, 1, 1, 0]` | **lolos** |

Empat uji lolos, dan semuanya lolos karena alasan yang sama: **G dan C kebetulan punya hitungan yang sama**, jadi menukar posisinya tidak terlihat. Di `"AGCT"` keduanya 1. Di `""` keduanya 0. Di `"TTTT"` keduanya 0. Di `"AAGC"` keduanya 1.

Hanya `"AAGG"` yang punya G dan C **berbeda** — G ada dua, C tidak ada sama sekali — dan hanya untai itulah yang bisa membuktikan urutanmu salah.

Itu pelajaran yang jauh lebih besar daripada soal ini. Uji yang datanya "seimbang" tidak bisa membedakan apa pun. Kalau kamu ingin tahu apakah dua hal tertukar, datamu **harus** membuat keduanya berbeda — dan itu benar untuk uji buatanmu sendiri, bukan cuma untuk uji di sini.

List empat angka ini adalah bentuk paling sederhana dari **vektor ciri** — cara meringkas seluruh untai menjadi beberapa angka yang bisa dibandingkan. Soal 26–40 seleksi 2025 bekerja begitu: ubah untai menjadi angka, bandingkan angkanya, tebak jenisnya. Di Topik 5 kamu akan melihat bentuk yang sama dipakai untuk kata, bukan basa.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def kmer_terbanyak(dna, k):
    daftar = [dna[i:i + k] for i in range(len(dna) - k + 1)]
    terbaik = daftar[0]
    for km in daftar:
        if daftar.count(km) &gt; daftar.count(terbaik):
            terbaik = km
    return terbaik</pre>

Soal 1 dan Soal 3 disatukan: **potong dulu, baru cari yang terbanyak**.

Baris pertama adalah `potong_kmer` dari Soal 1. Sisanya adalah `basa_terbanyak` dari Soal 3, dengan huruf diganti jendela. Kalau kamu menulis ulang kedua fungsi itu, jawabannya menjadi tiga baris yang bisa dibaca seperti kalimat:

<pre class="code">def kmer_terbanyak(dna, k):
    daftar = potong_kmer(dna, k)
    terbaik = daftar[0]
    for km in daftar:
        if daftar.count(km) &gt; daftar.count(terbaik):
            terbaik = km
    return terbaik</pre>

Perhatikan `daftar.count(km)` — sekali lagi `.count` pada **list**, dan sekali lagi aman. Setelah jendelanya dipotong, seluruh urusan tumpang tindih sudah selesai. Ini poin yang sama dengan Soal 2, sekarang terasa gunanya: memotong dulu bukan cuma cara menghindari jebakan, ia mengubah soal jendela menjadi soal list biasa.

Uji `kmer_terbanyak("AGCT", 2) == "AG"` adalah uji seri, dan yang paling kuat: **semua** jendelanya muncul tepat sekali. Tidak ada pemenang sungguhan, jadi yang menang adalah yang pertama. Dengan `&gt;=`, jawabannya menjadi `"CT"` — jendela terakhir merebut gelarnya. `&gt;` lawan `&gt;=` lagi, ketiga kalinya di dua topik terakhir.

Uji `kmer_terbanyak("AGCT", 4) == "AGCT"` adalah kasus tepi yang menyenangkan: jendelanya selebar untainya, jadi cuma ada satu, dan ia menang tanpa lawan. Rumus \(n - k + 1 = 1\) memberikannya tanpa penjagaan apa pun.

Versi `Counter`-nya, kalau kamu mengenalnya:

<pre class="code">from collections import Counter
def kmer_terbanyak(dna, k):
    daftar = [dna[i:i + k] for i in range(len(dna) - k + 1)]
    return Counter(daftar).most_common(1)[0][0]</pre>

Ini yang akan kamu pakai di soal sungguhan. `Counter` menghitung semuanya dalam satu kali jalan, sedangkan versi kunci memanggil `.count` sekali untuk tiap jendela — jauh lebih lambat, tapi tidak ada bedanya untuk untai sepanjang puluhan. Tulis versi loop dulu sampai kamu yakin paham apa yang dihitung; `Counter` adalah pemendek, bukan pengganti pemahaman.

# Catatan pengajar

## Peta soal

| Soal | Keterampilan | Kode salah yang tetap lolos sebagian |
|---|---|---|
| 1 | rumus \(n - k + 1\) | `range(len(dna))` — jendela terakhir cacat |
| 2 | **jendela lawan `.count`** | `dna.count(pola)` — lolos **3 dari 5** |
| 3 | pola "terbanyak" | `&gt;=` — gagal hanya di uji seri |
| 4 | dua penghitung | rekor diperiksa saat berganti — lolos **4 dari 5** |
| 5 | vektor ciri | urutan A,C,G,T — lolos **4 dari 5** |
| 6 | menyusun Soal 1 + Soal 3 | `&gt;=` — memberi jendela terakhir |

Dua soal yang paling patut waktu adalah 2 dan 4, dan keduanya karena alasan yang sama: kode yang salah **lolos sebagian besar uji**, dan yang menangkapnya cuma satu kasus yang sengaja dirancang. Untuk Soal 2 itu untai berulang; untuk Soal 4 itu untai yang berakhir dengan deret terpanjangnya.

Perhatikan `&gt;` lawan `&gt;=` muncul di Soal 3 dan 6, setelah `&lt;` lawan `&lt;=` di Topik 3. Kalau dia sudah kena di sana dan tidak kena di sini, itu tanda bagus — ia sedang belajar melihat aturan seri sebagai bagian dari soal, bukan detail.

## Cara membaca hasilnya

- **Soal 2 lolos 3 dari 5** → dia menulis `dna.count(pola)`. Hasil yang paling diharapkan dari set ini, dan yang paling layak dibicarakan. Tunjukkan tabelnya: ketiga yang lolos tidak punya tumpang tindih sama sekali. Lalu tanya "kalau datanya tidak pernah berulang, kodemu salah tidak?" — jawabannya "tidak", dan itulah yang membuat bug ini hidup lama.
- **Soal 4 lolos 4 dari 5, gagal di `"AAAA"`** → deret terakhir tidak pernah dihitung. Suruh dia telusuri `"AAAA"` dengan `print(sekarang, terpanjang)` di tiap putaran. Melihat `sekarang` naik sampai 4 sementara `terpanjang` diam di 1 langsung menjelaskan.
- **Soal 4 memberi 1 untuk untai kosong** → dia lupa penjagaannya. Ini kesempatan bagus menunjukkan bahwa "kasus tepi selalu gratis" itu **tidak benar** — di Soal 1 gratis, di sini tidak. Yang membedakan rumusnya, bukan keberuntungan.
- **Soal 3 atau 6 gagal hanya di uji seri** → `&gt;=`. Kalau ini sudah pernah muncul di Topik 3, jangan jelaskan lagi; suruh dia yang menunjuk uji mana yang gagal dan kenapa.
- **Soal 5 lolos 4 dari 5** → urutannya alfabet, bukan A,G,C,T. Bukan salah paham, cuma tidak baca perintahnya. Layak disebut sekali: di isian, urutan yang salah bernilai nol persis seperti hitungan yang salah. Dan tunjukkan tabelnya — empat uji lolos karena G dan C kebetulan sama banyak, jadi hanya `"AAGG"` yang bisa membuktikan apa pun.
- **Memakai `Counter` dengan benar** → bagus, dan tanya balik apa isi `most_common(1)`. Kalau dia bisa menjawab "list berisi satu pasangan", dia benar-benar paham. Kalau dia cuma hafal `[0][0]`, tunjukkan sekali.

## Hubungan dengan seleksi

Ini set yang paling dekat ke Soal 26–40 (klasifikasi untai DNA). Soal 5 adalah vektor ciri dalam bentuk paling sederhana; Soal 6 adalah cara ciri itu dibuat lebih tajam dengan k-mer. Soal 2 adalah satu-satunya alasan paling sering kenapa hitungan k-mer memberi angka yang salah — dan karena `.count` tidak pernah melempar error, anak yang tidak tahu akan mencari bugnya di tempat lain sampai waktunya habis.

Kalau ketiga set Tulis Kode topik ini lancar, lanjut ke Topik 5 (Dictionary & Vektor), yang akan membuat komplemen DNA di Tulis Kode 02 menjadi satu baris — dan membawa vektor ciri Soal 5 ke Soal 12–21.
