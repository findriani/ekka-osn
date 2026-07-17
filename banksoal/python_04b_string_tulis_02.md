# String & DNA — Tulis Kode 02 (Sedang)

Topik 4, menulis kode, tingkat **sedang**. Sekarang DNA yang sebenarnya.

Enam fungsi di set ini adalah enam hal yang benar-benar dilakukan orang terhadap untai DNA: mengukur kandungan GC-nya, mencari pasangannya, membandingkannya dengan untai lain, memeriksa apakah datanya waras. Soal 26–40 seleksi 2025 dibangun dari bahan-bahan ini.

Satu soal — yang ketiga — adalah tempat rantai `.replace` dari Baca Kode 02 Soal 4 akhirnya menagih harganya.

## Petunjuk jawaban

Bacalah cerita pada soal terlebih dahulu. Kalimat yang diawali `Tulis` menjelaskan nama fungsi, masukan, dan nilai yang harus dikembalikan; contoh uji di bawahnya membantumu melihat bentuk jawabannya.

Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**.

Hanya Python standar, **tanpa NumPy**.

## Rumus cepat

- Pasangan basa: **A↔T**, **G↔C**. Selalu berpasangan, selalu begitu.
- Kandungan GC: \(\dfrac{\text{banyaknya G} + \text{banyaknya C}}{\text{panjang}} \times 100\)
- Menyusun teks: mulai dari `hasil = ""`, lalu `hasil += basa`
- `basa not in "AGCT"` memeriksa apakah sebuah huruf **bukan** salah satu dari keempatnya
- **Selalu `/`, jangan `//`.**

## Soal 1 — Menghitung G dan C

Tulis `hitung_gc(dna)` yang mengembalikan banyaknya basa G ditambah banyaknya basa C.

<pre class="starter">def hitung_gc(dna):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">hitung_gc("AGGC") == 3
hitung_gc("AT") == 0
hitung_gc("") == 0
hitung_gc("GCGC") == 4</pre>

**Jawaban:** `_____`

---

## Soal 2 — Kandungan GC dalam persen

Tulis `persen_gc(dna)` yang mengembalikan kandungan GC sebagai persentase. **Jangan dibulatkan.** Dijamin `dna` tidak pernah kosong.

<pre class="starter">def persen_gc(dna):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">persen_gc("AGGC") == 75
persen_gc("AT") == 0
persen_gc("GC") == 100
persen_gc("AGGCCTGA") == 62.5</pre>

**Jawaban:** `_____`

---

## Soal 3 — Untai pasangan

Setiap basa punya pasangannya: A berpasangan dengan T, G berpasangan dengan C — dan sebaliknya.

Tulis `komplemen(dna)` yang mengembalikan untai baru, tiap basanya diganti pasangannya. Urutannya **tetap**.

<pre class="starter">def komplemen(dna):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">komplemen("AAGC") == "TTCG"
komplemen("AGCT") == "TCGA"
komplemen("A") == "T"
komplemen("") == ""
komplemen("GGCC") == "CCGG"</pre>

**Jawaban:** `_____`

---

## Soal 4 — Untai seberang

Untai DNA yang kedua bukan cuma pasangan tiap basanya — ia juga terbaca dari **arah berlawanan**. Jadi: pasangkan semuanya, lalu balik urutannya.

Tulis `komplemen_balik(dna)`.

<pre class="starter">def komplemen_balik(dna):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">komplemen_balik("AAGC") == "GCTT"
komplemen_balik("ATGC") == "GCAT"
komplemen_balik("AGCT") == "AGCT"
komplemen_balik("A") == "T"
komplemen_balik("") == ""</pre>

**Jawaban:** `_____`

---

## Soal 5 — Berapa basa yang berbeda

Dua untai sama panjang dibandingkan posisi per posisi.

Tulis `jarak_hamming(a, b)` yang mengembalikan banyaknya posisi yang isinya berbeda.

<pre class="starter">def jarak_hamming(a, b):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jarak_hamming("AGCT", "AGGT") == 1
jarak_hamming("AGCT", "AGCT") == 0
jarak_hamming("AAA", "TTT") == 3
jarak_hamming("", "") == 0
jarak_hamming("AGCTA", "AGGTT") == 2</pre>

**Jawaban:** `_____`

---

## Soal 6 — Apakah datanya waras

Untai yang sah hanya boleh berisi A, G, C, dan T. Basa yang tidak terbaca ditulis `N`, dan huruf lain berarti datanya rusak.

Tulis `dna_valid(dna)` yang mengembalikan `True` kalau **semua** basanya sah, dan `False` kalau ada satu saja yang tidak. Untai kosong dianggap sah.

<pre class="starter">def dna_valid(dna):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">dna_valid("AGCT") is True
dna_valid("AGXT") is False
dna_valid("") is True
dna_valid("N") is False
dna_valid("AAAA") is True</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def hitung_gc(dna):
    return dna.count("G") + dna.count("C")</pre>

Dua `.count`, dijumlahkan. Aman, karena polanya cuma satu huruf — jebakan tumpang tindih dari Baca Kode 01 Soal 6 tidak bisa terjadi.

Versi perulangannya juga benar, dan itu yang kamu lacak di Baca Kode 01 Soal 5:

<pre class="code">def hitung_gc(dna):
    hitung = 0
    for basa in dna:
        if basa == "G" or basa == "C":
            hitung += 1
    return hitung</pre>

Ada juga bentuk ketiga yang lebih rapi: `sum(1 for basa in dna if basa in "GC")`. Perhatikan `basa in "GC"` — memeriksa keanggotaan pada teks pendek adalah cara singkat menulis "salah satu dari huruf-huruf ini". Kamu akan memakainya lagi di Soal 6.

Uji `hitung_gc("") == 0` gratis untuk ketiga bentuk. Itu bukan kebetulan — menghitung selalu berangkat dari nol.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def persen_gc(dna):
    return (dna.count("G") + dna.count("C")) / len(dna) * 100</pre>

Kalau kamu sudah menulis `hitung_gc`, tulis ulang di editor ini dan pakai: `return hitung_gc(dna) / len(dna) * 100`.

**Kurungnya wajib.** Tanpa kurung, `dna.count("G") + dna.count("C") / len(dna) * 100` berarti "banyaknya G, ditambah persentase C" — karena pembagian dikerjakan sebelum penjumlahan. Untuk `"AGGC"` hasilnya \(2 + 25 = 27\), bukan 75. Kodenya berjalan mulus.

Dan **`/`, bukan `//`**. Dengan `//`, uji pertama memberi `3 // 4` = 0, dikali 100 → **0**. Kandungan GC 75 persen dilaporkan sebagai nol persen, tanpa satu pun error.

Kode itu **lolos 2 dari 4 uji**:

| uji | dengan `//` | |
|---|---|---|
| `persen_gc("AGGC") == 75` | `3 // 4` = 0 → **0** | gagal |
| `persen_gc("AT") == 0` | `0 // 2` = 0 → **0** | **lolos** |
| `persen_gc("GC") == 100` | `2 // 2` = 1 → **100** | **lolos** |
| `persen_gc("AGGCCTGA") == 62.5` | `5 // 8` = 0 → **0** | gagal |

Perhatikan pola dua yang lolos: satu untai **tanpa GC sama sekali**, satu untai **GC semuanya**. Pembagian bulat hanya benar kalau pecahannya kebetulan tepat 0 atau tepat 1 — yaitu di dua ujung yang paling ekstrem. Segala sesuatu di antaranya, yang berarti hampir semua untai sungguhan, dilaporkan **nol persen**.

Renungkan sebentar: satu garis miring yang hilang mengubah 75 menjadi 0, dan kedua uji yang lolos adalah uji yang lolos **karena alasan yang salah**.

Uji terakhir memberi **62.5** — bukan 62. Soal ini melarang pembulatan dengan sengaja. Kalau kamu membungkusnya dengan `round`, uji itu gagal, dan gagalnya benar: fungsi yang **menghitung** tidak boleh membulatkan. Bulatkan hanya saat **menuliskan** jawaban, di paling akhir, sekali. Itu Baca Kode 02 Soal 4, dan alasan `round(62.5)` memberi 62 ada di Baca Kode 02 Soal 6.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def komplemen(dna):
    hasil = ""
    for basa in dna:
        if basa == "A":
            hasil += "T"
        elif basa == "T":
            hasil += "A"
        elif basa == "G":
            hasil += "C"
        else:
            hasil += "G"
    return hasil</pre>

Inilah tagihan dari Baca Kode 02 Soal 4.

Yang **hampir semua orang** coba pertama kali:

<pre class="code">return dna.replace("A", "T").replace("T", "A").replace("G", "C").replace("C", "G")</pre>

Terlihat masuk akal — empat penggantian, empat basa. Telusuri `"AAGC"`:

| langkah | hasil | |
|---|---|---|
| awal | `"AAGC"` | |
| `.replace("A", "T")` | `"TTGC"` | A jadi T |
| `.replace("T", "A")` | `"AAGC"` | **T yang barusan dibuat ikut jadi A lagi** |
| `.replace("G", "C")` | `"AACC"` | |
| `.replace("C", "G")` | `"AAGG"` | C yang barusan dibuat ikut jadi G |

Hasilnya `"AAGG"`, bukan `"TTCG"`. Rantai itu **lolos 1 dari 5 uji** — hanya `komplemen("") == ""`.

Penyebabnya persis Baca Kode 02 Soal 4: penggantian kedua tidak bisa membedakan T asli dari T yang baru dibuat penggantian pertama. Setiap basa diputuskan **dua kali**, dan keputusan kedua membatalkan yang pertama.

Perulangan tidak punya masalah itu, karena tiap basa diputuskan **sekali** berdasarkan aslinya, lalu ditulis ke untai baru yang tidak diperiksa lagi. `hasil` dan `dna` adalah dua teks yang berbeda; itulah yang menyelamatkannya.

Perhatikan `elif`, **bukan** `if` berulang. Dengan `if` terpisah semua, `basa` tetap aman — karena kamu memeriksa `basa`, bukan `hasil` — jadi di sini kebetulan tidak apa-apa. Tapi biasakan `elif`: kalau syaratnya saling meniadakan, `elif` yang benar, dan ia berhenti memeriksa begitu ketemu.

Kalau kamu merasa lima cabang ini bertele-tele, kamu benar. Di Topik 5 ada `dictionary`, dan seluruh fungsi ini menjadi satu baris:

<pre class="code">pasangan = {"A": "T", "T": "A", "G": "C", "C": "G"}
return "".join(pasangan[basa] for basa in dna)</pre>

Itu bukan sekadar lebih pendek — ia juga tidak bisa salah dengan cara yang sama, karena tabelnya dibaca sekali per basa. Tapi tulis versi `if` dulu; kamu perlu tahu apa yang sedang diringkas.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def komplemen_balik(dna):
    hasil = ""
    for basa in dna:
        if basa == "A":
            hasil += "T"
        elif basa == "T":
            hasil += "A"
        elif basa == "G":
            hasil += "C"
        else:
            hasil += "G"
    return hasil[::-1]</pre>

Kalau `komplemen` kamu tulis ulang di editor ini, jawabannya satu baris:

<pre class="code">def komplemen_balik(dna):
    return komplemen(dna)[::-1]</pre>

Pasangkan dulu, lalu balik. Dua langkah, keduanya sudah kamu punya.

Urutannya tidak masalah — `komplemen(dna[::-1])` memberi hasil yang sama persis. Balik-lalu-pasangkan dan pasangkan-lalu-balik menghasilkan untai yang identik, karena tiap basa dipasangkan sendiri-sendiri tanpa melihat tetangganya.

Sekarang perhatikan uji ketiga: **`komplemen_balik("AGCT") == "AGCT"`**.

Untai itu adalah komplemen-balik dari dirinya sendiri. Bukan kebetulan dan bukan bug:

| | |
|---|---|
| `"AGCT"` | untai asli |
| komplemennya | `"TCGA"` |
| dibalik | `"AGCT"` ← kembali ke asal |

Ini disebut **palindrom** dalam arti DNA, dan ia nyata: enzim yang memotong DNA hampir selalu mengenali urutan seperti ini, justru karena kedua untai seberangnya membaca hal yang sama. `GAATTC` adalah contoh yang terkenal.

Uji itu juga menjaga sesuatu yang licik. Kalau kamu **lupa membalik** dan cuma menulis `komplemen(dna)`, uji ketiga tetap lolos — karena untuk untai ini komplemen dan komplemen-balik kebetulan sama. Uji pertama dan kedua yang menangkapnya. Sekali lagi: untai yang rapi tidak bisa membedakan apa pun, dan itulah kenapa `"AAGC"` ada di daftar.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def jarak_hamming(a, b):
    beda = 0
    for i in range(len(a)):
        if a[i] != b[i]:
            beda += 1
    return beda</pre>

Versi `zip`-nya lebih rapi: `return sum(1 for x, y in zip(a, b) if x != y)`.

Kenapa `range(len(a))` dan bukan `for basa in a`? Karena kamu butuh **posisi**. `a[i]` harus dibandingkan dengan basa yang **posisinya sama** di `b`. Menelusuri hurufnya saja tidak cukup — kamu tidak akan tahu sedang berdiri di mana. Ini soal pertama di topik ini yang benar-benar memerlukan indeks.

`!=` berarti "tidak sama". Kalau kamu memakai `==`, kamu menghitung yang **cocok** — uji pertama memberi 3 alih-alih 1, uji kedua memberi 4 alih-alih 0. Kode itu **lolos 1 dari 5 uji**: hanya `jarak_hamming("", "")`, yang nol dari dua arah.

Jarak Hamming mengukur seberapa mirip dua untai, dan ia dasar dari hampir semua pencocokan DNA. Dua untai dengan jarak 1 kemungkinan besar kerabat dekat dengan satu mutasi; jarak 3 dari untai sepanjang 3 berarti tidak ada satu pun yang sama.

Satu batasnya: ia **hanya** untuk untai yang sama panjang. Kalau `b` lebih pendek, kode di kunci akan melempar `IndexError`, sedangkan versi `zip` diam-diam berhenti di yang terpendek dan memberi jawaban yang salah. Perhatikan bahwa versi yang lebih rapi justru gagal lebih diam-diam — itu bukan alasan menghindarinya, tapi alasan mengetahuinya.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def dna_valid(dna):
    for basa in dna:
        if basa not in "AGCT":
            return False
    return True</pre>

Pola **"cari satu pelanggar"**, dan bentuknya patut diperhatikan.

Kamu tidak memeriksa "apakah semuanya sah". Kamu mencari **satu** yang tidak sah, dan begitu ketemu, langsung pulang dengan `False`. Kalau perulangannya sampai habis tanpa menemukan apa pun, barulah `True`.

`return` di dalam perulangan menghentikan seluruh fungsi saat itu juga — Topik 3 Baca Kode 01 Soal 2. Untuk untai sepanjang sejuta dengan huruf rusak di posisi kedua, fungsi ini berhenti di posisi kedua.

Perhatikan letak `return True`: **di luar** perulangan, sejajar dengan `for`. Kalau kamu menaruhnya di dalam:

<pre class="code">for basa in dna:
    if basa not in "AGCT":
        return False
    return True          # SALAH — di dalam perulangan</pre>

fungsinya pulang di putaran **pertama**, jadi ia cuma memeriksa basa pertama. Kode itu **lolos 3 dari 5 uji**, dan dua yang gagal gagal karena alasan yang sama sekali berbeda:

| uji | apa yang terjadi | |
|---|---|---|
| `dna_valid("AGCT") is True` | `A` sah → `True` | **lolos** |
| `dna_valid("AGXT") is False` | `A` sah → `True`; `X` tidak pernah dilihat | gagal |
| `dna_valid("") is True` | perulangan tidak jalan → **`None`** | gagal |
| `dna_valid("N") is False` | `N` tidak sah → `False` | **lolos** |
| `dna_valid("AAAA") is True` | `A` sah → `True` | **lolos** |

Uji `"AGXT"` gagal karena fungsinya berhenti memeriksa setelah satu basa. Uji `""` gagal karena sesuatu yang lain: perulangannya tidak pernah jalan, jadi **tidak ada `return` sama sekali** — dan fungsi yang habis tanpa `return` mengembalikan `None`. Lalu `None is True` bernilai `False`.

Satu tingkat indentasi, dua bug yang berbeda, dan tiga uji yang tetap lolos sambil fungsimu hanya melihat 25 persen datanya.

Uji `dna_valid("") is True` adalah yang paling menarik. Untai kosong tidak punya basa yang salah, jadi ia sah — kosong berarti tidak ada pelanggaran. Pola ini memberikannya **gratis**: perulangannya tidak jalan, langsung ke `return True`. Tapi kalau kamu berpikir "harus periksa dulu apakah kosong" dan menambahkan `if len(dna) == 0: return False`, kamu justru memasang bug dengan tanganmu sendiri.

Versi satu barisnya: `return all(basa in "AGCT" for basa in dna)`. `all` mengembalikan `True` untuk yang kosong, dengan alasan yang sama persis.

Dan perhatikan `basa not in "AGCT"` — memeriksa keanggotaan pada teks. `"X" not in "AGCT"` bernilai `True`. Alat yang sama dengan `"ATG" in dna` di set mudah, dipakai terbalik.

# Catatan pengajar

## Peta soal

| Soal | Keterampilan | Kode salah yang tetap lolos sebagian |
|---|---|---|
| 1 | `.count` untuk satu basa | — |
| 2 | `/` dan kurung | `//` — lolos **2 dari 4** |
| 3 | **komplemen dengan `if`** | rantai `.replace` — lolos **1 dari 5** |
| 4 | menyusun dua fungsi | lupa `[::-1]` — lolos di untai palindrom |
| 5 | jarak Hamming | `==` alih-alih `!=` — lolos **1 dari 5** |
| 6 | pola "cari satu pelanggar" | `return True` di dalam loop — lolos **3 dari 5** |

Soal 3 adalah alasan set ini ada. Rantai `.replace` adalah jawaban yang **paling wajar** untuk komplemen DNA, ia terlihat pintar, dan ia selalu salah. Baca Kode 02 Soal 4 sudah menyiapkan diagnosisnya; di sini dia merasakannya sendiri.

Soal 6 punya bahaya berbeda: `return True` yang salah indentasi **lolos 3 dari 5 uji** sambil hanya memeriksa basa pertama. Ini kesalahan indentasi yang paling mahal di Python. Yang menangkapnya cuma dua uji, dan keduanya sengaja: `"AGXT"` menaruh huruf rusaknya **bukan di depan**, dan `""` membongkar bahwa fungsinya bahkan tidak punya jalan pulang kalau perulangannya tidak jalan.

## Cara membaca hasilnya

- **Soal 3 lolos 1 dari 5 dengan rantai `.replace`** → hasil yang paling diharapkan dari set ini. Jangan langsung koreksi; suruh dia telusuri `"AAGC"` di kertas, satu `.replace` per baris. Momen "oh, T-nya jadi A lagi" jauh lebih berharga daripada jawabannya.
- **Soal 6 lolos 3 dari 5** → indentasi `return True`. Tanya "basa keberapa saja yang diperiksa kodemu?" Kalau perlu, suruh dia taruh `print(basa)` di dalam loop dan jalankan dengan `"AGXT"`; melihat hanya satu huruf tercetak langsung menjelaskan. Uji `""` yang gagal patut dibahas terpisah — itu `None` yang diam-diam, bukan pemeriksaan yang terpotong.
- **Soal 2 lolos 2 dari 4** → `//` lagi, ketiga kalinya setelah Topik 3. Kalau masih terulang, ini bukan lagi soal paham — ini soal refleks. Tempel aturannya: rata-rata dan persen selalu `/`. Tunjukkan juga bahwa dua uji yang lolos adalah untai 0 persen dan 100 persen; itu menjelaskan kenapa bug ini bisa lolos dari pemeriksaan sepintas.
- **Soal 4 lolos kecuali uji pertama dan kedua** → dia lupa `[::-1]`. Tunjukkan uji ketiga yang lolos padahal kodenya salah; palindrom adalah contoh sempurna kenapa satu uji yang "rapi" tidak membuktikan apa-apa.
- **Soal 5 kena `IndexError`** → dia memakai `range(len(a))` dengan `b` lebih pendek — tapi tidak ada uji seperti itu di sini, jadi kalau muncul, dia menukar `a` dan `b` di suatu tempat.

## Hubungan dengan seleksi

Soal 1, 2, dan 5 adalah tiga ciri yang dipakai untuk mengklasifikasikan untai di Soal 26–40: seberapa kaya GC-nya, dan seberapa mirip ia dengan untai acuan. Soal 3 dan 4 adalah operasi DNA yang paling dasar, dan keduanya punya jawaban "wajar" yang salah. Soal 6 adalah kebiasaan yang menyelamatkan waktu: data yang rusak lebih baik ketahuan di awal daripada muncul sebagai angka aneh di akhir.
