# Dictionary & Vektor — Tulis Kode 03 (Sedang)

Topik 5, menulis kode, tingkat **sedang**, dan puncak topik ini. Empat alat vektor kecil — kurang, skala, panjang, terdekat-kecuali — dirakit menjadi **analogi kata**: "raja ke ratu seperti pria ke ...?". Ini persis Soal 12–21 seleksi 2025, dan ternyata cuma penjumlahan vektor ditambah pencarian terdekat yang sudah kamu kuasai.

## Petunjuk jawaban

Bacalah cerita pada soal dulu. Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**. Nilaimu dihitung per baris uji.

Soal 4 dan 5 saling menumpuk: kerjakan berurutan. Kalau macet di 5, pastikan 1–4 sudah lulus dulu.

Hanya Python standar, **tanpa NumPy**.

## Rumus cepat

- Vektor sebagai list. Selisih: `[a[i] - b[i] for i in range(len(a))]`.
- Skala: `[a[i] * c for i in range(len(a))]`.
- Panjang kuadrat: `sum(a[i] ** 2 for i in range(len(a)))`.
- Analogi \(a \to b\) seperti \(c \to ?\): target \(= \text{vek}[b] - \text{vek}[a] + \text{vek}[c]\), lalu cari kata terdekat ke target.
- Saat mencari terdekat untuk analogi, **jangan** kembalikan `a`, `b`, atau `c` sendiri.

## Soal 1 — Selisih vektor

Dua vektor sama panjang diberikan sebagai list.

Tulis `kurang(a, b)` yang mengembalikan **list baru** berisi `a[i] - b[i]` untuk tiap `i`.

<pre class="starter">def kurang(a, b):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">kurang([5, 7], [2, 3]) == [3, 4]
kurang([0, 0], [0, 0]) == [0, 0]
kurang([1, 2, 3], [1, 1, 1]) == [0, 1, 2]</pre>

**Jawaban:** `_____`

---

## Soal 2 — Skala vektor

Sebuah vektor dikalikan dengan satu bilangan.

Tulis `skala(a, c)` yang mengembalikan **list baru** berisi tiap isi `a` dikalikan `c`.

<pre class="starter">def skala(a, c):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">skala([1, 2, 3], 2) == [2, 4, 6]
skala([5], 0) == [0]
skala([-1, 2], 3) == [-3, 6]</pre>

**Jawaban:** `_____`

---

## Soal 3 — Panjang kuadrat

Panjang kuadrat sebuah vektor adalah perkalian titiknya dengan dirinya sendiri — tiap isi dikuadratkan lalu dijumlahkan.

Tulis `panjang2(a)` yang mengembalikan jumlah dari `a[i] ** 2` untuk tiap `i`.

<pre class="starter">def panjang2(a):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">panjang2([3, 4]) == 25
panjang2([0, 0, 0]) == 0
panjang2([1, 1, 1, 1]) == 4</pre>

**Jawaban:** `_____`

---

## Soal 4 — Terdekat, kecuali beberapa

Seperti `terdekat` di Tulis Kode 02, tetapi beberapa nama harus **dilewati** — misalnya kata-kata yang sudah dipakai di soal analogi.

Tulis `terdekat_selain(q, kata, kecuali)` yang mengembalikan nama di dictionary `kata` (nama ke vektor) yang paling dekat ke `q`, tetapi **tidak pernah** mengembalikan nama yang ada di list `kecuali`. Dijamin masih ada minimal satu nama yang boleh dipilih.

<pre class="starter">def terdekat_selain(q, kata, kecuali):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">terdekat_selain([0, 0], {"a": [0, 0], "b": [3, 4]}, []) == "a"
terdekat_selain([0, 0], {"a": [0, 0], "b": [3, 4]}, ["a"]) == "b"
terdekat_selain([1, 1], {"x": [1, 1], "y": [2, 2], "z": [9, 9]}, ["x", "y"]) == "z"</pre>

**Jawaban:** `_____`

---

## Soal 5 — Analogi kata

Empat kata membentuk analogi: `a` ke `b` seperti `c` ke sesuatu. Semua kata punya vektor di dictionary `kata`. Targetnya adalah `vektor[b] - vektor[a] + vektor[c]`, dan jawabannya adalah kata yang vektornya paling dekat ke target — kecuali `a`, `b`, dan `c` sendiri.

Tulis `analogi(kata, a, b, c)` yang mengembalikan nama kata jawabannya.

<pre class="starter">def analogi(kata, a, b, c):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">analogi({"raja": [2, 2], "ratu": [2, 0], "pria": [0, 2], "wanita": [0, 0]}, "raja", "ratu", "pria") == "wanita"
analogi({"raja": [2, 2], "ratu": [2, 0], "pria": [0, 2], "wanita": [0, 0]}, "pria", "wanita", "raja") == "ratu"
analogi({"kecil": [1], "besar": [3], "pendek": [2], "panjang": [4]}, "kecil", "besar", "pendek") == "panjang"</pre>

**Jawaban:** `_____`

---

## Soal 6 — Titik pusat

Titik pusat (centroid) sekumpulan vektor adalah rata-ratanya: jumlahkan seposisi, lalu bagi banyaknya. Semua vektor sama panjang, dan daftarnya tidak pernah kosong.

Tulis `centroid(daftar)` yang mengembalikan vektor rata-rata sebagai **list**.

<pre class="starter">def centroid(daftar):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">centroid([[0, 0], [2, 0]]) == [1.0, 0.0]
centroid([[1, 2, 3]]) == [1.0, 2.0, 3.0]
centroid([[2, 4], [4, 8]]) == [3.0, 6.0]</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def kurang(a, b):
    return [a[i] - b[i] for i in range(len(a))]</pre>

Kembaran dari `tambah` di Tulis Kode 02, dengan `-` menggantikan `+`. Untuk tiap indeks, kurangi yang seposisi, kumpulkan ke list baru. Versi `zip`: `[x - y for x, y in zip(a, b)]`.

Selisih vektor adalah setengah dari analogi: `vektor[b] - vektor[a]` menangkap "arah perubahan" dari `a` ke `b`. Kamu memakainya di Soal 5.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def skala(a, c):
    return [x * c for x in a]</pre>

Tiap isi dikalikan `c`. Uji `skala([5], 0)` memberi `[0]` — mengalikan dengan nol tetap menghasilkan list, bukan list kosong. Uji dengan `c = 3` dan isi negatif memastikan tandanya ikut terkalikan dengan benar.

Skala jarang dipakai sendiri, tetapi ia bagian dari "geser sepanjang arah" — dan arah itulah yang kamu bangun di analogi.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def panjang2(a):
    return sum(x ** 2 for x in a)</pre>

Panjang kuadrat adalah perkalian titik vektor dengan dirinya sendiri: `titik(a, a)`. Karena tiap suku `x ** 2` tidak pernah negatif, hasilnya juga tidak pernah negatif — panjang tidak punya arah.

`panjang2([3, 4])` memberi 25, yang akarnya 5 — segitiga 3-4-5 yang sama yang muncul di jarak. Sekali lagi kita berhenti di kuadratnya: untuk membandingkan panjang, akar tidak diperlukan.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def terdekat_selain(q, kata, kecuali):
    def jarak2(u, v):
        return sum((u[i] - v[i]) ** 2 for i in range(len(u)))
    terbaik = None
    for nama in kata:
        if nama in kecuali:
            continue
        if terbaik is None or jarak2(kata[nama], q) &lt; jarak2(kata[terbaik], q):
            terbaik = nama
    return terbaik</pre>

Kerangka "cari terdekat" dari Tulis Kode 02, ditambah satu baris: `if nama in kecuali: continue` melompati nama yang dilarang **sebelum** ia sempat menjadi juara. Letaknya penting — kalau kamu memeriksanya belakangan, sebuah nama terlarang bisa terlanjur tersimpan sebagai `terbaik`.

Uji kedua dan ketiga adalah intinya: tanpa daftar `kecuali`, keduanya akan mengembalikan nama yang justru harus dilewati. Fungsi kecil ini yang membuat analogi mungkin.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def analogi(kata, a, b, c):
    n = len(kata[a])
    target = [kata[b][i] - kata[a][i] + kata[c][i] for i in range(n)]
    def jarak2(u, v):
        return sum((u[i] - v[i]) ** 2 for i in range(len(u)))
    terbaik = None
    for nama in kata:
        if nama in (a, b, c):
            continue
        if terbaik is None or jarak2(kata[nama], target) &lt; jarak2(kata[terbaik], target):
            terbaik = nama
    return terbaik</pre>

Dua langkah. Pertama, bangun `target = vektor[b] - vektor[a] + vektor[c]`. Bacalah sebagai: "ambil arah dari `a` ke `b` \((b - a)\), lalu terapkan mulai dari `c`". Untuk raja→ratu (menghilangkan sifat 'raja', menambahkan sifat 'ratu'), diterapkan ke pria, hasilnya jatuh tepat di wanita.

Kedua, cari kata terdekat ke `target` — persis `terdekat_selain` dengan `kecuali = (a, b, c)`. Ketiga kata itu **wajib** dilewati: tanpa itu, jawaban paling sering justru `c` sendiri, karena target biasanya jatuh di dekatnya.

Ini seluruh isi soal vektor kata di seleksi. Tidak ada yang ajaib — cuma satu penjumlahan vektor dan satu pencarian terdekat.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def centroid(daftar):
    n = len(daftar)
    dim = len(daftar[0])
    hasil = []
    for j in range(dim):
        total = 0
        for v in daftar:
            total += v[j]
        hasil.append(total / n)
    return hasil</pre>

Untuk tiap sumbu `j`, jumlahkan isi ke-`j` dari semua vektor, lalu bagi banyaknya. Perhatikan `/` (bukan `//`): rata-rata boleh pecahan, dan `[1, 0]` yang seharusnya `1.0` akan menjadi salah kalau dibagi dengan `//`.

Centroid adalah "titik tengah" sekumpulan vektor, dan ia pusat dari K-means di Pertemuan 3: tiap kelompok diringkas menjadi satu titik pusat, lalu titik-titik dibandingkan jaraknya ke pusat itu. Menggabungkan `centroid` (di sini) dengan `terdekat` (Tulis Kode 02) memberimu satu langkah penuh K-means.

# Catatan pengajar

## Peta soal

| Soal | Keterampilan | Menyiapkan |
|---|---|---|
| 1 | selisih vektor | arah `b - a` untuk analogi |
| 2 | skala vektor | menggeser sepanjang arah |
| 3 | panjang kuadrat | `titik(a, a)`, ukuran besar vektor |
| 4 | terdekat dengan pengecualian | inti analogi |
| 5 | **analogi kata** | Soal 12–21 seleksi |
| 6 | centroid | satu langkah K-means (Pertemuan 3) |

Soal 5 adalah tujuan seluruh Topik 5. Ia terlihat menakutkan sampai kamu sadar tiap bagiannya sudah dikerjakan: `b - a + c` adalah Soal 1 dua kali, dan pencarian terdekatnya adalah Soal 4 persis. Inilah pola yang berulang di seluruh kursus — soal besar adalah beberapa soal kecil yang sudah dikenal, dirakit.

## Cara membaca hasilnya

- **Soal 4 lulus, Soal 5 mengembalikan `c`** → dia lupa mengecualikan `a`, `b`, `c`. Ini kesalahan paling umum, dan uji pertama Soal 5 dirancang untuk menangkapnya.
- **Soal 5 memberi arah target yang salah** → biasanya `a - b` alih-alih `b - a`, atau lupa `+ c`. Suruh dia cetak `target` dan cocokkan dengan tangan pada contoh raja/ratu.
- **Soal 6 memberi bilangan bulat yang meleset** → dia memakai `//`. Sama dengan pelajaran `/` lawan `//` di Topik 3; di sini akibatnya vektor pusat yang salah.
- **Lancar semua** → dia siap ke Topik 6 (Grid), dan bagian vektor seleksi sudah tidak lagi menakutkan.

## Hubungan dengan seleksi

Topik ini menutup jarak antara "meringkas jadi vektor" (Topik 4) dan "membandingkan vektor" (di sini). Soal 5 adalah bentuk utuh soal analogi kata, dan Soal 6 menyambung ke K-means Pertemuan 3. Setelah Grid di Topik 6, set Campuran akan meminta satu soal dari tiap topik sekaligus — dan pusat terdekat di sana adalah fungsi yang baru saja dia tulis.
