# String & DNA — Baca Kode 01

Topik 4, membaca kode. Sebuah untai DNA adalah **teks**: `"AGCTTAGC"`. Soal 26–40 seleksi 2025 seluruhnya dibangun di atas teks seperti itu — dihitung basanya, dipotong-potong, dibandingkan satu sama lain.

Kabar baiknya: teks bekerja **hampir persis** seperti list. Indeks mulai dari 0, irisan berhenti sebelum batas atas, `data[-1]` isi terakhir. Semua yang kamu pelajari di Topik 2 langsung berlaku.

Kabar yang perlu diwaspadai ada di kata "hampir". Ada satu perbedaan besar, dan set ini adalah tentang perbedaan itu.

## Petunjuk jawaban

Kerjakan **tanpa komputer**. Untuk soal DNA, tulis untainya di kertas dengan nomor indeks di atas tiap huruf. Sebagian besar jebakan di topik ini lenyap begitu kamu melihat nomornya.

Tuliskan jawaban sebagai bilangan bulat, kecuali kalau yang diminta berupa untai — tulis untainya apa adanya, misalnya `AGCT`. Untuk pilihan ganda, tulis hurufnya.

## Rumus cepat

- `len(dna)` panjangnya · `dna[0]` basa pertama · `dna[-1]` basa terakhir
- `dna[a:b]` dari indeks `a` sampai **sebelum** `b` · `dna[::-1]` urutan terbalik
- `dna.count("A")` banyaknya A
- `"ATG" in dna` bernilai `True`/`False`
- Teks **tidak bisa diubah**. Semua method-nya mengembalikan teks **baru**.

## Soal 1 — Menghitung basa

Untai di bawah memiliki beberapa basa A. Kode menjumlahkan panjang seluruh untai dengan banyaknya A yang muncul di dalamnya.

<pre class="code">dna = "AGCTTAGC"
print(len(dna) + dna.count("A"))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 2 — Memotong untai

Kode mengambil satu potongan dari tengah untai dan satu potongan dari ujung kanan, kemudian menyambungkannya. Tandai indeks tiap basa agar batas akhir irisannya tidak keliru.

<pre class="code">dna = "AGCTTAGC"
print(dna[2:5] + dna[-2:])</pre>

Untai apa yang dicetak?

**Jawaban:** `_____`

---

## Soal 3 — Mengganti basa pertama

Sebuah untai perlu diganti basa pertamanya dari A menjadi T. Karena teks tidak dapat diubah langsung pada satu posisinya, kita perlu membentuk untai baru dan menyimpannya kembali ke `dna`.

<pre class="code">dna = "AGCT"</pre>

Manakah yang membuat `dna` **menjadi** `"TGCT"`?

- **A.** `dna[0] = "T"`
- **B.** `dna = "T" + dna[1:]`
- **C.** `dna.replace("A", "T")`
- **D.** `dna[0].replace("A", "T")`

**Jawaban:** `_____`

---

## Soal 4 — Membuang basa rusak

Fungsi ini seharusnya membuang semua basa `N` yang tidak terbaca. Untuk `bersihkan("AGNCT")` hasilnya seharusnya `"AGCT"`, tetapi yang keluar adalah `"AGNCT"` — tanpa error apa pun. Perhatikan bahwa `replace` membuat teks baru; hasilnya perlu disimpan sebelum fungsi mengembalikannya.

<pre class="code">1  def bersihkan(dna):
2      dna.replace("N", "")
3      return dna</pre>

Baris nomor berapa yang hasilnya dibuang percuma?

**Jawaban:** `_____`

---

## Soal 5 — Menghitung G dan C

Dalam analisis DNA, banyaknya basa G dan C sering dihitung bersama. Kode ini memeriksa setiap huruf dan menambah penghitung hanya ketika hurufnya G atau C.

<pre class="code">dna = "AGCTTAGC"
hitung = 0
for basa in dna:
    if basa == "G" or basa == "C":
        hitung += 1
print(hitung)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 6 — Menghitung pasangan AA

Untai ini berisi A berurutan. Perhatikan bahwa method `count` pada teks tidak menghitung dua pasangan yang memakai huruf A yang sama.

<pre class="code">dna = "AAAAA"
print(dna.count("AA"))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: 10**

| indeks | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| basa | **A** | G | C | T | T | **A** | G | C |

- `len(dna)` = **8** — delapan basa
- `dna.count("A")` = **2** — A di indeks 0 dan 5

8 + 2 = **10**.

Perhatikan `len` dan `count` menjawab dua pertanyaan berbeda: "berapa banyak semuanya" dan "berapa banyak yang ini". Keduanya akan kamu pakai bersama di rumus kandungan GC, dan tertukar di situ akan memberi angka yang salah tanpa error.

## Soal 2

**Jawaban: CTTGC**

Dua irisan, lalu disambung.

| | | hasil |
|---|---|---|
| `dna[2:5]` | indeks 2, 3, 4 — berhenti **sebelum** 5 | `"CTT"` |
| `dna[-2:]` | dua terakhir | `"GC"` |

`"CTT" + "GC"` = **`"CTTGC"`**.

Tanda `+` pada teks berarti **menyambung**, bukan menjumlahkan. Aturan irisannya sama persis dengan list di Topik 2 — tidak ada yang baru, cuma isinya huruf.

Jebakan yang sering: mengira `dna[2:5]` mengambil empat huruf. Ingat rumusnya: `dna[a:b]` berisi \(b - a\) isi. Di sini \(5 - 2 = 3\).

## Soal 3

**Jawaban: B**

| pilihan | apa yang terjadi |
|---|---|
| **A.** `dna[0] = "T"` | **`TypeError`** — teks tidak bisa diubah |
| **B.** `dna = "T" + dna[1:]` | membuat teks baru, lalu memberi nama lama padanya ✓ |
| **C.** `dna.replace("A", "T")` | membuat `"TGCT"` — lalu **membuangnya** |
| **D.** `dna[0].replace("A", "T")` | membuat `"T"` — sehuruf, dan dibuang juga |

Inilah perbedaan besar antara teks dan list, dan seluruh sisa topik ini bergantung padanya.

**List bisa diubah. Teks tidak.**

<pre class="code">data = ["A", "G"]
data[0] = "T"        # boleh

dna = "AG"
dna[0] = "T"         # TypeError</pre>

Karena itu, tidak ada satu pun method teks yang mengubah teksnya. `.replace`, `.upper`, `.strip` — semuanya **membuat teks baru** dan mengembalikannya. Teks aslinya tidak tersentuh, selamanya.

C adalah pilihan yang paling menggoda, dan justru itu gunanya. Ia **memang menghasilkan** `"TGCT"`. Masalahnya hasil itu tidak ditampung ke mana pun, jadi ia lahir dan langsung hilang. `dna` masih `"AGCT"`.

Sekarang sandingkan dengan pelajaran `.sort()` di Topik 2 dan rasakan bahwa keduanya **berlawanan arah**:

| | mengubah aslinya | mengembalikan |
|---|---|---|
| `data.sort()` (list) | **ya** | `None` |
| `dna.replace(...)` (teks) | **tidak** | teks baru |

Dua cara berbeda untuk gagal. Dengan list, kamu salah karena **menampung** hasilnya. Dengan teks, kamu salah karena **tidak menampungnya**. Kalau kamu bisa mengucapkan tabel ini dari ingatan, dua kelas bug terbesar di Python sudah lewat.

## Soal 4

**Jawaban: 2**

Baris 2 memanggil `dna.replace("N", "")`, yang **membuat** untai bersih `"AGCT"` — lalu tidak menyimpannya ke mana pun. Baris 3 mengembalikan `dna` yang masih utuh seperti semula.

Yang benar adalah menampungnya:

<pre class="code">def bersihkan(dna):
    return dna.replace("N", "")</pre>

Atau, kalau ingin dua langkah: `dna = dna.replace("N", "")` lalu `return dna`.

Perhatikan tidak ada error sama sekali. Baris 2 adalah kode yang sah dan berjalan sempurna; ia cuma tidak berguna. Python tidak pernah memperingatkanmu kalau kamu membuang hasil sebuah perhitungan — mungkin saja kamu memang sengaja.

Ini kembaran Soal 3 pilihan C, dalam bentuk fungsi. Kalau kamu mengenali keduanya sebagai satu kesalahan yang sama, kamu sudah paham teks.

## Soal 5

**Jawaban: 4**

| indeks | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| basa | A | **G** | **C** | T | T | A | **G** | **C** |

Empat basa yang berupa G atau C → **4**.

Dua hal yang dilatih.

`for basa in dna` menelusuri teks **huruf per huruf**, persis seperti `for n in data` menelusuri list isi per isi. Kamu tidak perlu `range` dan tidak perlu indeks; teks sudah bisa ditelusuri langsung.

Dan `or` berarti "salah satu saja sudah cukup". Kalau kamu menulis `and`, syaratnya menjadi "basa ini G **dan sekaligus** C" — mustahil, dan `hitung` akan tetap 0 selamanya.

Kamu baru saja menghitung **kandungan GC**, ciri paling dasar sebuah untai DNA dan salah satu yang dipakai di Soal 26–40. Versi pendeknya: `dna.count("G") + dna.count("C")`.

## Soal 6

**Jawaban: 2**

Bukan 3, bukan 4. **2**.

Ini yang paling mengejutkan di seluruh topik, dan yang paling mahal kalau tidak diketahui.

`.count` mencari kemunculan yang **tidak boleh tumpang tindih**. Setelah menemukan satu, ia melanjutkan pencarian dari **sesudah** yang barusan ditemukan:

<pre class="code">A A A A A
^-^                 ketemu di indeks 0, lanjut cari dari indeks 2
    ^-^             ketemu di indeks 2, lanjut cari dari indeks 4
        ^           cuma sisa satu A — tidak cukup</pre>

Jadi hasilnya **2**.

Sekarang, kalau yang kamu maksud adalah "ada berapa **jendela** dua huruf yang isinya `AA`", jawabannya **4** — jendela di indeks 0, 1, 2, dan 3, semuanya `"AA"`, dan mereka saling tumpang tindih.

<pre class="code">A A A A A
^-^                 indeks 0: AA
  ^-^               indeks 1: AA
    ^-^             indeks 2: AA
      ^-^           indeks 3: AA</pre>

Dua pertanyaan berbeda, dua jawaban berbeda, dan `.count` cuma menjawab yang pertama.

Kenapa ini penting: di soal DNA, yang hampir selalu ditanyakan adalah versi **jendela** — berapa kali pola `"AT"` muncul di sepanjang untai, termasuk yang tumpang tindih. Kalau kamu memakai `.count`, kodemu berjalan mulus dan memberi angka yang terlalu kecil, dan untai yang tidak punya huruf berulang tidak akan memperlihatkan bedanya sama sekali.

Kamu akan menulis versi jendelanya sendiri di Tulis Kode 03 Soal 2. Untuk sekarang cukup ingat: **`.count` tidak menghitung yang tumpang tindih.**

# Catatan pengajar

## Peta soal

| Soal | Bentuk | Keterampilan | Jebakan |
|---|---|---|---|
| 1 | lacak | `len` dan `.count` | menukar keduanya |
| 2 | lacak | irisan pada teks | mengira batas atas ikut |
| 3 | pilihan ganda | **teks tidak bisa diubah** | C — hasilnya dibuang |
| 4 | cari baris salah | `.replace` mengembalikan teks baru | lupa menampung |
| 5 | lacak | menelusuri huruf, `or` | memakai `and` |
| 6 | lacak | **`.count` tidak tumpang tindih** | menjawab 3 atau 4 |

Soal 3 dan 4 adalah satu konsep dalam dua wajah, dan Soal 6 adalah satu-satunya jebakan di topik ini yang tidak bisa ditebak dari pengetahuan list. Ketiganya layak waktu.

## Cara membaca hasilnya

- **Salah di 6** → normal, dan justru bagus kalau salah sekarang. Hampir semua orang menjawab 3 (mengira ia mengambil AA, lalu AA lagi dari sisanya, lalu... ) atau 4 (jendela). Gambar diagram di kunci; yang meyakinkan adalah melihat penunjuk pencariannya melompat.
- **Menjawab C di soal 3** → dia belum memisahkan "menghasilkan" dari "mengubah". Sandingkan langsung dengan Soal 4; keduanya kesalahan yang sama. Lalu tunjukkan tabel `.sort()` lawan `.replace()` — arahnya berlawanan, dan itu yang membuatnya lengket.
- **Menjawab A di soal 3** → dia mengira teks itu list. Suruh dia jalankan `dna[0] = "T"` sendiri sekali; melihat `TypeError`-nya cukup.
- **Salah di 5 dengan jawaban 0** → dia memakai `and`. Kosakata, bukan konsep. Tunjukkan sekali, selesai.
- **Benar semua** → langsung Baca Kode 02, yang mengangkat jendela dan pembulatan ke bentuk yang sebenarnya dipakai di soal DNA.

## Hubungan dengan seleksi

Soal 26–40 seleksi 2025 mengklasifikasikan untai DNA dari cirinya: kandungan GC, banyaknya pola tertentu, panjangnya. Soal 5 adalah ciri pertama itu. Soal 6 adalah satu-satunya alasan paling sering kenapa hitungan pola memberi angka yang salah — dan karena tidak ada error, anak yang tidak tahu akan menghabiskan waktunya mencari bug di tempat lain.
