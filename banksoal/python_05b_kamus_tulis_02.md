# Dictionary & Vektor — Tulis Kode 02 (Sedang)

Topik 5, menulis kode, tingkat **sedang**. Sekarang dictionary dibangun, bukan cuma dibaca: menghitung kemunculan, mencari yang terbanyak, menggabungkan dua kamus. Lalu vektor melar dari dua dimensi menjadi sepanjang apa pun, dan ditutup dengan mencari pusat terdekat — inti soal seleksi 12–21.

## Petunjuk jawaban

Bacalah cerita pada soal dulu. Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**. Nilaimu dihitung per baris uji.

Beberapa soal mengembalikan **dictionary**; uji membandingkannya dengan `==`, yang benar tak peduli urutan kunci. Beberapa mengembalikan **list**; di sana urutan penting.

Hanya Python standar, **tanpa NumPy**. `collections.Counter` boleh, tetapi menulis polanya sendiri lebih melatih.

## Rumus cepat

- Menghitung: `d[x] = d.get(x, 0) + 1` untuk tiap `x`.
- Kunci dengan nilai terbesar: `max(d, key=d.get)`; terkecil: `min(d, key=d.get)`.
- Menelusuri pasangan: `for kunci, nilai in d.items()`.
- Jarak kuadrat vektor sepanjang apa pun: jumlahkan `(a[i] - b[i]) ** 2`.
- Mencari terbaik tanpa `min`: simpan `terbaik = None`, perbarui saat menemukan yang lebih dekat.

## Soal 1 — Menghitung kemunculan

Panitia mencatat pilihan tiap peserta dan ingin tahu berapa kali tiap pilihan muncul.

Tulis `hitung(data)` yang mengembalikan dictionary: tiap isi `data` menjadi kunci, banyak kemunculannya menjadi nilai.

<pre class="starter">def hitung(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">hitung(["a", "b", "a"]) == {"a": 2, "b": 1}
hitung([]) == {}
hitung([1, 1, 1]) == {1: 3}</pre>

**Jawaban:** `_____`

---

## Soal 2 — Yang paling sering

Dari catatan yang sama, panitia ingin pilihan yang **paling sering** muncul. Dijamin selalu ada satu pemenang tunggal.

Tulis `terbanyak(data)` yang mengembalikan isi yang paling sering muncul di `data`.

<pre class="starter">def terbanyak(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">terbanyak(["a", "b", "a"]) == "a"
terbanyak([1, 2, 2, 3, 2]) == 2
terbanyak(["x"]) == "x"</pre>

**Jawaban:** `_____`

---

## Soal 3 — Menggabungkan dua gudang

Dua cabang mengirim catatan stoknya. Barang yang ada di keduanya harus **dijumlahkan**, bukan ditimpa.

Tulis `gabung(a, b)` yang mengembalikan dictionary baru berisi semua kunci dari `a` dan `b`; kalau sebuah kunci ada di keduanya, nilainya dijumlahkan.

<pre class="starter">def gabung(a, b):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">gabung({"a": 1, "b": 2}, {"b": 3, "c": 4}) == {"a": 1, "b": 5, "c": 4}
gabung({}, {"x": 1}) == {"x": 1}
gabung({"p": 2}, {}) == {"p": 2}</pre>

**Jawaban:** `_____`

---

## Soal 4 — Menjumlahkan dua vektor

Dua vektor sama panjang diberikan sebagai list.

Tulis `tambah(a, b)` yang mengembalikan **list baru** berisi `a[i] + b[i]` untuk tiap `i`.

<pre class="starter">def tambah(a, b):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">tambah([1, 2], [3, 4]) == [4, 6]
tambah([0, 0, 0], [1, 2, 3]) == [1, 2, 3]
tambah([], []) == []</pre>

**Jawaban:** `_____`

---

## Soal 5 — Jarak kuadrat, panjang berapa pun

Di Tulis Kode 01 jaraknya untuk titik dua dimensi. Sekarang vektornya bisa sepanjang apa pun — tetap satu rumus.

Tulis `jarak2(a, b)` yang mengembalikan jumlah dari `(a[i] - b[i]) ** 2` untuk tiap `i`. Kedua vektor selalu sama panjang.

<pre class="starter">def jarak2(a, b):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jarak2([0, 0], [3, 4]) == 25
jarak2([1, 2, 3], [1, 2, 3]) == 0
jarak2([1, 0, 0], [0, 0, 0]) == 1</pre>

**Jawaban:** `_____`

---

## Soal 6 — Pusat terdekat

Beberapa pusat disimpan sebagai dictionary: nama menjadi kunci, vektornya menjadi nilai. Sebuah titik `q` diberikan.

Tulis `terdekat(q, pusat)` yang mengembalikan **nama** pusat yang jarak kuadratnya ke `q` paling kecil. Dijamin ada satu pemenang tunggal.

<pre class="starter">def terdekat(q, pusat):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">terdekat([0, 0], {"a": [1, 1], "b": [9, 9]}) == "a"
terdekat([9, 9], {"a": [1, 1], "b": [9, 9]}) == "b"
terdekat([0, 0], {"solo": [3, 4], "medan": [1, 0]}) == "medan"</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def hitung(data):
    d = {}
    for x in data:
        d[x] = d.get(x, 0) + 1
    return d</pre>

Pola menghitung, kali ini dikembalikan utuh sebagai dictionary. `d = {}` **sebelum** perulangan; kalau di dalam, ia lahir kembali tiap putaran dan hasilnya cuma hitungan isi terakhir.

`d.get(x, 0) + 1` menangani kunci baru maupun lama sekaligus: yang baru mulai dari 0, yang lama naik satu. Uji `[]` memastikan dictionary kosong dikembalikan apa adanya. `collections.Counter(data)` melakukan semuanya dalam satu baris — tetapi tulis pola ini sendiri sekali, karena ia muncul di mana-mana.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def terbanyak(data):
    d = {}
    for x in data:
        d[x] = d.get(x, 0) + 1
    return max(d, key=d.get)</pre>

Dua langkah: hitung dulu (persis Soal 1), lalu ambil kunci dengan nilai terbesar. `max(d, key=d.get)` berarti "telusuri kuncinya, tetapi bandingkan pakai `d.get`" — jadi yang dikembalikan adalah **kunci** yang nilainya paling besar, bukan nilainya.

Kalau kamu menulis `max(d.values())`, kamu mendapat hitungan tertingginya (misalnya 3), bukan pilihan mana yang tercapai. Ini pasangan langsung dari `min(d, key=d.get)` yang kamu lihat di Baca Kode 02.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def gabung(a, b):
    hasil = dict(a)
    for kunci, nilai in b.items():
        hasil[kunci] = hasil.get(kunci, 0) + nilai
    return hasil</pre>

`dict(a)` membuat **salinan** `a` supaya `a` yang asli tidak berubah — pelajaran aliasing dari Baca Kode 02 Soal 2 dipakai di sini. Lalu tiap pasangan dari `b` ditambahkan: `hasil.get(kunci, 0) + nilai` menjumlahkan kalau kuncinya sudah ada, dan memasang apa adanya kalau belum.

Yang sering salah: `hasil[kunci] = nilai` (tanpa `get`) — itu **menimpa**, jadi `"b"` menjadi 3, bukan 5. Uji pertama ada khusus untuk menangkap ini. Yang lebih halus: menulis `hasil = a` alih-alih `dict(a)` diam-diam merusak `a` milik pemanggil.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def tambah(a, b):
    return [a[i] + b[i] for i in range(len(a))]</pre>

Untuk tiap indeks, jumlahkan isi yang seposisi, kumpulkan ke list baru. Versi `zip` juga rapi:

<pre class="code">def tambah(a, b):
    return [x + y for x, y in zip(a, b)]</pre>

Uji `tambah([], [])` memberi `[]`: tidak ada indeks, jadi list kosong. Ini pasangan penjumlahan dari perkalian titik — bedanya, di sini hasilnya **list** (tiap sumbu terpisah), sedangkan perkalian titik meringkasnya jadi **satu angka**.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def jarak2(a, b):
    total = 0
    for i in range(len(a)):
        total += (a[i] - b[i]) ** 2
    return total</pre>

Rumus yang sama dengan Tulis Kode 01, tetapi tidak lagi menyebut `[0]` dan `[1]` satu per satu — sebuah perulangan menanganinya untuk panjang berapa pun. Versi ringkas: `sum((a[i] - b[i]) ** 2 for i in range(len(a)))`, atau dengan `zip`: `sum((x - y) ** 2 for x, y in zip(a, b))`.

Ini bentuk yang sebenarnya dipakai di seleksi: vektor kata bisa berdimensi puluhan, dan rumus jaraknya tidak berubah sedikit pun. Menuliskannya dengan indeks tetap membuka jalan ke Soal 6.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def terdekat(q, pusat):
    def jarak2(a, b):
        return sum((a[i] - b[i]) ** 2 for i in range(len(a)))
    terbaik = None
    for nama in pusat:
        if terbaik is None or jarak2(q, pusat[nama]) &lt; jarak2(q, pusat[terbaik]):
            terbaik = nama
    return terbaik</pre>

Ini kerangka "cari yang terdekat" yang utuh. `terbaik = None` di awal, lalu tiap pusat dibandingkan: kalau belum ada juara, atau yang ini lebih dekat, ia menjadi juara baru. Yang dikembalikan **nama**, karena itu yang diminta — bukan jaraknya.

Kenapa `terbaik = None` dan bukan `terbaik = pusat[0]`? Karena dictionary tidak punya "yang ke-0". `None` adalah cara aman memulai "belum ada juara". Versi memakai `min`: `return min(pusat, key=lambda nama: jarak2(q, pusat[nama]))` — lebih pendek, tetapi versi perulangan memperlihatkan apa yang sebenarnya terjadi. Fungsi inilah yang mengklasifikasikan kata di seleksi 12–21: tiap kata dibandingkan jaraknya ke beberapa pusat, yang terdekat menang.

# Catatan pengajar

## Peta soal

| Soal | Keterampilan | Jebakan yang ditanam |
|---|---|---|
| 1 | pola menghitung → dict | `d = {}` di dalam loop |
| 2 | `max(d, key=d.get)` | `max(d.values())` memberi hitungan, bukan pilihan |
| 3 | gabung dengan `get` + salin | `hasil[k] = nilai` menimpa; `hasil = a` merusak asli |
| 4 | penjumlahan vektor → list | — |
| 5 | jarak kuadrat n-dimensi | menyebut `[0]`/`[1]` alih-alih perulangan |
| 6 | pusat terdekat | mengembalikan jarak, bukan nama; memulai dari `pusat[0]` |

Soal 6 adalah tujuan seluruh set ini, dan Soal 1–5 adalah bagian-bagiannya: menghitung, mencari terbaik, jarak. Kalau dia bisa merakit keenamnya, dia sudah memegang kerangka bagian seleksi yang paling berbobot.

## Cara membaca hasilnya

- **Soal 1 memberi hitungan salah** → `d = {}` di dalam loop. Klasik; sekali dilihat, jarang terulang.
- **Soal 2 mengembalikan angka, bukan pilihan** → dia menulis `max(d.values())`. Tegaskan beda "berapa banyak" dan "yang mana".
- **Soal 3 memberi `"b": 3`** → dia menimpa alih-alih menjumlahkan. Kalau `a` aslinya ikut berubah di uji lanjutan, dia menulis `hasil = a`.
- **Soal 6 mengembalikan angka** → dia mengembalikan jaraknya, bukan namanya. Ingatkan: yang diminta nama pusat.
- **Lancar semua** → Tulis Kode 03, tempat vektor dipakai untuk analogi kata.
