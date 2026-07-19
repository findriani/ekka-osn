# Dictionary & Vektor — Baca Kode 02

Topik 5, membaca kode, tingkat lanjut. Sekarang kita membahas kesalahan yang sering terjadi: menaikkan nilai pada kunci yang belum ada, mengira `b = a` membuat salinan, memakai `.get` tanpa nilai cadangan, dan memakai `min(d)` ketika yang dicari sebenarnya kunci dengan nilai terkecil. Bagian terakhir membahas vektor dan pencarian pusat terdekat, seperti kerangka soal seleksi 12–21.

## Petunjuk jawaban

Kerjakan **tanpa komputer**. Untuk soal jarak, tulis dulu jarak kuadrat ke tiap pusat, baru bandingkan — akar tidak pernah diperlukan hanya untuk mencari yang terdekat.

Tuliskan jawaban sebagai bilangan bulat atau sepatah kata, kecuali pada soal pilihan ganda.

## Rumus cepat

- `d[k] += 1` **butuh** `k` sudah ada. Untuk kunci baru, pakai `d[k] = d.get(k, 0) + 1`.
- `b = d` **bukan** menyalin — dua nama untuk dictionary yang sama. Salin dengan `dict(d)` atau `d.copy()`.
- `min(d)` bekerja atas **kunci** menurut abjad. `min(d, key=d.get)` memberi kunci dengan nilai terkecil.
- Jarak kuadrat \((x_1,y_1)\) ke \((x_2,y_2)\) \(= (x_1-x_2)^2 + (y_1-y_2)^2\).

## Soal 1 — Menghitung tanpa cadangan

Fungsi ini seharusnya menghitung kemunculan tiap huruf, tetapi berhenti dengan error pada huruf yang **pertama** kali muncul. Ingat bahwa `+=` hanya bekerja pada sesuatu yang sudah ada.

<pre class="code">1  suara = {}
2  for x in ["a", "b", "a"]:
3      suara[x] += 1
4  print(suara)</pre>

Baris nomor berapa yang menyebabkan errornya?

**Jawaban:** `_____`

---

## Soal 2 — Titip catatan

Ani punya catatan. Budi bilang "samain aja sama punyamu", lalu menambah satu kunci. Ia tidak menyalin; kedua nama menunjuk dictionary yang sama.

<pre class="code">a = {"x": 1}
b = a
b["y"] = 2
print(len(a))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 3 — Nama dengan jarak terkecil

`jarak` menyimpan jarak tiap pos. Kita ingin **nama** pos dengan jarak paling kecil, yaitu `"B"`. Perhatikan bahwa `min` biasa bekerja atas kunci menurut abjad, bukan menurut nilainya.

<pre class="code">jarak = {"A": 5, "B": 2, "C": 8}</pre>

Manakah yang memberikan `"B"`?

- **A.** `min(jarak)`
- **B.** `min(jarak.values())`
- **C.** `min(jarak, key=jarak.get)`
- **D.** `min(jarak.keys())`

**Jawaban:** `_____`

---

## Soal 4 — Jarak kuadrat

Fungsi menghitung jarak kuadrat antara dua titik. Tuliskan tiap selisih dulu, kuadratkan, baru jumlahkan.

<pre class="code">def jarak2(p, q):
    return (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2

print(jarak2((1, 2), (4, 6)))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 5 — Menghitung huruf

Kode membangun kamus hitungan huruf dari sebuah kata, memakai pola `get(h, 0) + 1` yang aman untuk huruf baru.

<pre class="code">teks = "abracadabra"
hitung = {}
for h in teks:
    hitung[h] = hitung.get(h, 0) + 1
print(hitung["a"])</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 6 — Pusat terdekat

Tiga lokasi disimpan sebagai dictionary nama ke koordinat. Kode mencari **nama** lokasi yang paling dekat ke titik `q`, dengan membandingkan jarak kuadrat.

<pre class="code">def jarak2(p, q):
    return (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2

pusat = {"kota": (0, 0), "desa": (10, 0), "pantai": (5, 5)}
q = (6, 4)
terbaik = None
for nama in pusat:
    if terbaik is None or jarak2(q, pusat[nama]) &lt; jarak2(q, pusat[terbaik]):
        terbaik = nama
print(terbaik)</pre>

Kata apa yang dicetak?

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: 3**

`suara[x] += 1` berarti `suara[x] = suara[x] + 1`. Untuk menaikkan, Python harus **membaca** `suara[x]` dulu — dan pada huruf `"a"` yang pertama, kunci itu belum ada. Baris 3 melempar `KeyError`.

| yang ditulis | butuh kunci sudah ada? |
|---|---|
| `suara[x] += 1` | **ya** — gagal untuk kunci baru |
| `suara[x] = suara.get(x, 0) + 1` | tidak — `get` memberi 0 untuk yang baru |

Ini pasangan dari pelajaran `.sort()` di Topik 2: kode yang tampak wajar, gagal pada kasus yang paling biasa. Perbaikannya `get(x, 0)`, dan itu satu-satunya alasan pola menghitung selalu ditulis begitu.

## Soal 2

**Jawaban: 2**

`b = a` **tidak** membuat dictionary baru. Ia menempelkan nama kedua pada dictionary yang sudah ada. Jadi `b["y"] = 2` menambah kunci ke dictionary yang juga dilihat `a`, dan `len(a)` menjadi **2**.

Persis seperti list di Topik 2: menyalin butuh usaha. Untuk dictionary, `b = dict(a)` atau `b = a.copy()`. Tanpa itu, keduanya adalah satu benda dengan dua nama, dan menulis lewat yang satu terlihat lewat yang lain.

## Soal 3

**Jawaban: C**

| pilihan | hasil | kenapa |
|---|---|---|
| **A.** `min(jarak)` | `"A"` | `min` atas kunci → yang paling awal secara abjad |
| **B.** `min(jarak.values())` | `2` | ini **nilainya**, bukan namanya |
| **C.** `min(jarak, key=jarak.get)` | **"B"** ✓ | kunci yang nilainya terkecil |
| **D.** `min(jarak.keys())` | `"A"` | sama dengan A |

Inilah jebakan paling mahal di topik ini. `min(jarak)` memberi `"A"` — kelihatan masuk akal, tetapi itu nama yang paling awal secara abjad, sama sekali tidak berhubungan dengan jarak. `min(jarak.values())` memberi 2 — angka jaraknya, bukan nama yang kamu cari.

Yang benar butuh `key=jarak.get`: "urutkan kuncinya, tetapi nilai perbandingannya ambil dari `jarak.get`". Kamu akan memakai bentuk persis ini untuk menjawab "kata mana yang paling mirip" di seleksi.

## Soal 4

**Jawaban: 25**

Selisih tiap sumbu dulu, lalu kuadratkan:

- sumbu-x: \(1 - 4 = -3\), kuadratnya 9
- sumbu-y: \(2 - 6 = -4\), kuadratnya 16

9 + 16 = **25**.

Perhatikan tandanya hilang begitu dikuadratkan — `-3` dan `3` sama-sama memberi 9. Itu sebabnya kita tidak repot dengan "titik mana di kiri mana di kanan". Dan akar kuadrat sengaja tidak diambil: kalau tujuannya cuma **membandingkan** jarak, jarak kuadrat sudah cukup dan tidak membawa galat pembulatan.

## Soal 5

**Jawaban: 5**

Bangun kamusnya sambil membaca `"abracadabra"` huruf demi huruf. Yang ditanya cuma `"a"`, jadi hitung saja kemunculan `a`:

`a b r a c a d a b r a` — huruf `a` ada di posisi ke-1, 4, 6, 8, dan 11.

Jumlahnya **5**.

Pola `get(h, 0) + 1` ini adalah cara paling langsung membuat **vektor ciri** dari sebuah untai — meringkas seluruh teks menjadi hitungan tiap huruf. Di seleksi DNA (Soal 26–40), untai diringkas begini lalu hitungannya yang dibandingkan. `collections.Counter` melakukan hal yang sama dalam satu baris, tetapi ada baiknya menulis polanya sendiri sekali.

## Soal 6

**Jawaban: pantai**

Hitung jarak kuadrat dari `q = (6, 4)` ke tiap pusat:

| nama | pusat | jarak kuadrat |
|---|---|---|
| kota | (0, 0) | \(36 + 16 = 52\) |
| desa | (10, 0) | \(16 + 16 = 32\) |
| pantai | (5, 5) | \(1 + 1 = \mathbf{2}\) |

Yang terkecil adalah **pantai**.

Ini kerangka lengkap "pusat terdekat": simpan calon di dictionary, telusuri, pegang yang sejauh ini terbaik. Pola `if terbaik is None or ... < ...` adalah cara mencari minimum tanpa `min` — berguna saat kamu butuh **namanya**, bukan jaraknya. Kamu akan menuliskannya sendiri di Tulis Kode 02 dan 03, dan memakainya untuk mengklasifikasikan kata di seleksi.

# Catatan pengajar

## Peta soal

| Soal | Bentuk | Keterampilan | Jebakan |
|---|---|---|---|
| 1 | cari baris salah | `+=` butuh kunci ada | `d[k] += 1` untuk kunci baru |
| 2 | lacak | **aliasing** dictionary | `b = d` menyalin |
| 3 | pilihan ganda | `min(d, key=d.get)` | `min(d)` memberi kunci abjad |
| 4 | lacak | jarak kuadrat | — |
| 5 | lacak | vektor ciri lewat hitungan | — |
| 6 | lacak | pusat terdekat | — |

Soal 3 adalah inti seluruh topik ini. Tiga jawaban yang "hampir benar" — kunci abjad, nilai terkecil, kunci abjad lagi — semuanya masuk akal sampai kamu sadar mereka menjawab pertanyaan yang berbeda. Kalau dia paham kenapa `key=d.get` yang benar, dia sudah menguasai bagian dictionary yang paling sering diuji.

## Cara membaca hasilnya

- **Salah di 1** → dia belum kena `KeyError` dari `+=`. Semua orang kena sekali; sekarang lebih baik daripada di tengah soal seleksi.
- **Salah di 2** → aliasing dictionary. Sama persis dengan list Topik 2 Soal 5 — pakai analogi yang sama (fotokopi lawan sticky note).
- **Menjawab A atau nilai di soal 3** → paling penting untuk dibetulkan. `min(d, key=d.get)` layak dihafal sebagai satu bentuk utuh; ia muncul lagi di tiap soal "yang mana paling dekat/mirip".
- **Salah di 6** → biasanya karena salah di 4 (jarak kuadrat) lebih dulu. Perbaiki jaraknya, dan pusat terdekat ikut benar.

## Hubungan dengan seleksi

Soal 4 dan 6 adalah kerangka Soal 12–21 seleksi 2025: tiap kata menjadi vektor, jaraknya ke beberapa titik dihitung, lalu yang terdekat dipilih. Soal 5 menjadi jembatan dari Topik 4 (String & DNA) ke sini — vektor ciri yang sebelumnya berupa hitungan basa kini dapat berisi hitungan apa pun. Soal 1 dan 2 membahas dua kesalahan umum yang dapat menghentikan program atau menghasilkan perubahan yang tidak disadari.
