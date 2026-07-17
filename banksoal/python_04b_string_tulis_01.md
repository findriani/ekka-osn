# String & DNA — Tulis Kode 01 (Mudah)

Topik 4, menulis kode, tingkat **mudah**. Semua jawabannya **satu baris**, dan tidak ada satu pun perulangan.

Kalau kamu sudah mengerjakan Topik 2 Tulis Kode 01, set ini akan terasa seperti *déjà vu* — dan memang begitu maksudnya. Lima dari enam soalnya adalah soal yang sama persis, dengan list diganti teks. Yang ingin ditunjukkan bukan enam alat baru, melainkan satu kalimat: **apa yang kamu tahu tentang list, hampir semuanya langsung berlaku untuk teks.**

Yang keenam adalah tempat kemiripan itu berhenti.

## Petunjuk jawaban

Bacalah cerita pada soal terlebih dahulu. Kalimat yang diawali `Tulis` menjelaskan nama fungsi, masukan, dan nilai yang harus dikembalikan; contoh uji di bawahnya membantumu melihat bentuk jawabannya.

Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**. Nilaimu dihitung per baris uji.

Hanya Python standar, **tanpa NumPy**.

## Rumus cepat

- `len(dna)` panjangnya · `dna[0]` basa pertama · `dna[-1]` basa terakhir
- `dna[::-1]` untai baru dengan urutan terbalik
- `dna.count("A")` banyaknya A
- `"ATG" in dna` bernilai `True`/`False` — itu sudah jawaban, tidak perlu `if`
- `dna.upper()` mengembalikan untai **baru** berhuruf besar. Aslinya tidak berubah.

## Soal 1 — Panjang untai

Tulis `panjang(dna)` yang mengembalikan banyaknya basa di `dna`.

<pre class="starter">def panjang(dna):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">panjang("AGCT") == 4
panjang("") == 0
panjang("A") == 1</pre>

**Jawaban:** `_____`

---

## Soal 2 — Basa pertama

Tulis `basa_pertama(dna)` yang mengembalikan basa pertama dari `dna`. Dijamin `dna` tidak pernah kosong.

<pre class="starter">def basa_pertama(dna):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">basa_pertama("AGCT") == "A"
basa_pertama("G") == "G"
basa_pertama("TTT") == "T"</pre>

**Jawaban:** `_____`

---

## Soal 3 — Menghitung A

Tulis `hitung_a(dna)` yang mengembalikan banyaknya basa `A` di `dna`.

<pre class="starter">def hitung_a(dna):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">hitung_a("AGCTA") == 2
hitung_a("GGG") == 0
hitung_a("AAAA") == 4
hitung_a("") == 0</pre>

**Jawaban:** `_____`

---

## Soal 4 — Untai terbalik

Tulis `dibalik(dna)` yang mengembalikan untai baru dengan urutan terbalik.

<pre class="starter">def dibalik(dna):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">dibalik("AGCT") == "TCGA"
dibalik("AAGC") == "CGAA"
dibalik("A") == "A"
dibalik("") == ""</pre>

**Jawaban:** `_____`

---

## Soal 5 — Ada kodon start?

Setiap gen dimulai dengan urutan `ATG`, yang disebut kodon start.

Tulis `ada_start(dna)` yang mengembalikan `True` kalau `"ATG"` muncul di dalam `dna`, dan `False` kalau tidak.

<pre class="starter">def ada_start(dna):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">ada_start("AGATGCT") is True
ada_start("AGCT") is False
ada_start("ATG") is True
ada_start("") is False</pre>

**Jawaban:** `_____`

---

## Soal 6 — Merapikan penulisan

Data dari laboratorium kadang tertulis huruf kecil.

Tulis `huruf_besar(dna)` yang mengembalikan untai baru dengan semua huruf dibesarkan.

<pre class="starter">def huruf_besar(dna):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">huruf_besar("agct") == "AGCT"
huruf_besar("AGCT") == "AGCT"
huruf_besar("aGcT") == "AGCT"
huruf_besar("") == ""</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def panjang(dna):
    return len(dna)</pre>

`len` bekerja pada teks persis seperti pada list. Tidak ada yang baru.

Yang layak diperhatikan justru bedanya dengan Topik 2 Soal 6. Di sana, `banyaknya([[1, 2], [3]])` memberi **2** — `len` hanya menghitung lapisan terluar. Teks tidak punya lapisan; ia selalu datar. Jadi `len` pada teks selalu berarti "berapa huruf", tanpa kecuali dan tanpa jebakan.

Satu-satunya kelas soal yang bisa membingungkan: `len("")` adalah 0, bukan 1. Teks kosong berisi nol huruf — ia bukan berisi "satu huruf kosong".

## Soal 2

**Jawaban: kode**

<pre class="kunci">def basa_pertama(dna):
    return dna[0]</pre>

Indeks mulai dari **0**, sama seperti list.

Perhatikan apa yang dikembalikan: `dna[0]` memberi `"A"` — sebuah **teks sepanjang satu huruf**, bukan jenis "huruf" yang khusus. Python tidak punya jenis tersendiri untuk satu karakter; satu huruf tetaplah teks, cuma pendek.

Karena itu semua yang berlaku untuk teks berlaku juga untuknya. `dna[0].upper()` sah, `dna[0] + dna[1]` menyambung, dan `dna[0][0]` bahkan tetap memberi huruf yang sama. Kalau kedengarannya aneh, memang aneh — tapi itu yang membuat `for basa in dna` berjalan mulus: tiap `basa` adalah teks utuh, jadi ia bisa dibandingkan dan disambung tanpa dikonversi.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def hitung_a(dna):
    return dna.count("A")</pre>

`.count` menghitung berapa kali sesuatu muncul. Untuk satu huruf, ia sederhana dan aman.

Kata **"untuk satu huruf"** itu yang penting. Baca Kode 01 Soal 6 sudah menunjukkan `.count` mulai berulah begitu polanya lebih dari satu huruf: `"AAAAA".count("AA")` memberi 2, bukan 4. Untuk pola sepanjang satu, tumpang tindih tidak mungkin terjadi, jadi jebakannya tidak ada.

Aturan praktis: `.count` aman untuk satu basa, mencurigakan untuk pola. Kamu akan menulis versi jendela yang benar di Tulis Kode 03 Soal 2.

Perhatikan juga `"A"` pakai tanda kutip. Tanpa kutip, `A` adalah nama variabel yang tidak ada, dan kamu dapat `NameError`.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def dibalik(dna):
    return dna[::-1]</pre>

Sama persis dengan Topik 2 Tulis Kode 01 Soal 4 — bahkan namanya sama. Irisan berlangkah −1 bekerja pada teks tanpa perbedaan sedikit pun.

Yang **berbeda** adalah kesalahan yang mungkin. Di list, godaannya `data.reverse()`, yang mengembalikan `None` dan membuat semua uji gagal. Di teks, `dna.reverse()` bahkan tidak ada — kamu langsung dapat `AttributeError`.

| | list | teks |
|---|---|---|
| `x[::-1]` | ✓ | ✓ |
| `x.reverse()` | ada, mengubah aslinya, memberi `None` | **tidak ada sama sekali** |

Error itu sebenarnya hadiah. Ia memberitahumu langsung, alih-alih membiarkanmu bingung kenapa jawabanmu `None`.

Uji `dibalik("AAGC") == "CGAA"` sengaja memakai untai yang **tidak simetris**. Perhatikan uji pertama, `dibalik("AGCT") == "TCGA"`: untai itu kebetulan punya sifat langka — kebalikannya sama dengan komplemennya. Kalau cuma ada uji itu, kode yang menghitung komplemen (bukan kebalikan) akan lolos. Uji kedua ada khusus untuk menutup celah itu, dan bedanya akan sangat terasa di Tulis Kode 02.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def ada_start(dna):
    return "ATG" in dna</pre>

`in` bekerja pada teks, dan **lebih pintar** daripada versinya di list.

Di list, `x in data` menanyakan "apakah `x` salah satu isinya". Di teks, `"ATG" in dna` menanyakan "apakah `ATG` muncul sebagai **potongan berurutan**". Jadi ia tidak mencari satu huruf, ia mencari **urutannya**.

Uji `ada_start("AGATGCT")` membuktikan ia mencari di mana saja:

<pre class="code">A G A T G C T
    ^-^-^           ATG ada, mulai indeks 2</pre>

Kamu tidak perlu tahu di mana; `in` yang mencarikan.

Perhatikan hasilnya **sudah** `True` atau `False`. Ini pelajaran ketiga kalinya, setelah `n % 2 == 0` di Topik 1 dan `x in data` di Topik 2: perbandingan adalah nilai, dan nilai bisa langsung dikembalikan. Kalau kamu menulis

<pre class="code">if "ATG" in dna:
    return True
else:
    return False</pre>

kodemu benar, tetapi kamu menulis empat baris untuk mengatakan satu.

Uji `ada_start("") is False` gratis — tidak ada apa pun di untai kosong, jadi tidak ada `ATG`.

Kalau kamu butuh **posisinya**, bukan sekadar ada-tidaknya, alatnya `dna.find("ATG")` — yang memberi indeks kemunculan pertama, atau −1 kalau tidak ketemu.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def huruf_besar(dna):
    return dna.upper()</pre>

Di sinilah kemiripan dengan list berhenti.

`.upper()` **mengembalikan untai baru** dan tidak menyentuh aslinya. Bandingkan dengan method list yang mengubah isinya:

| | mengubah aslinya | mengembalikan |
|---|---|---|
| `data.sort()` (list) | **ya** | `None` |
| `dna.upper()` (teks) | **tidak** | **untai baru** |

Dua kolom, dua-duanya berlawanan. Dan dari situ, dua cara berbeda untuk gagal:

<pre class="code">urut = data.sort()      # SALAH — urut berisi None
dna.upper()             # SALAH — hasilnya dibuang</pre>

Yang pertama salah karena kamu **menampung**. Yang kedua salah karena kamu **tidak menampung**.

Kenapa berbeda? Karena teks tidak bisa diubah — sama sekali, tidak pernah. Sebuah method teks **tidak punya pilihan** selain membuat yang baru; tidak ada aslinya yang bisa dicoret-coret. Sekali kamu menerima kalimat itu, seluruh perilaku teks jadi bisa ditebak: `.upper`, `.lower`, `.replace`, `.strip` — semuanya sama, semuanya mengembalikan yang baru, tidak satu pun mengubah.

Uji `huruf_besar("AGCT") == "AGCT"` memastikan huruf yang sudah besar tidak rusak, dan `huruf_besar("aGcT")` memastikan campuran ditangani. `.upper()` tidak peduli — ia membesarkan yang perlu dan membiarkan sisanya.

Kalau kamu menulis `dna.upper()` tanpa `return`, fungsimu mengembalikan `None` dan semua uji gagal. Itu Baca Kode 01 Soal 4, sekarang di tanganmu sendiri.

# Catatan pengajar

## Peta soal

| Soal | Alat | Padanannya di Topik 2 | Jebakan |
|---|---|---|---|
| 1 | `len(dna)` | Soal 6 | — |
| 2 | `dna[0]` | Soal 1 | indeks mulai dari 1 |
| 3 | `dna.count("A")` | — | aman hanya untuk satu huruf |
| 4 | `dna[::-1]` | Soal 4 | `.reverse()` tidak ada di teks |
| 5 | `"ATG" in dna` | Soal 5 | menulis `if` untuk sesuatu yang sudah bernilai |
| 6 | `dna.upper()` | — | **hasilnya dibuang** |

Set ini sengaja dibuat hampir identik dengan Topik 2 Tulis Kode 01. Kalau di sana lancar dan di sini tersendat, yang bermasalah bukan konsepnya melainkan keyakinan bahwa teks itu "hal baru". Katakan saja: teks adalah list huruf yang tidak bisa dicoret.

Soal 6 satu-satunya yang benar-benar baru, dan ia yang paling penting.

## Cara membaca hasilnya

- **Semua uji gagal di soal 6 saja** → dia menulis `dna.upper()` tanpa `return`, atau tanpa menampung. Tunjukkan tabel `.sort()` lawan `.upper()`. Dua arah yang berlawanan itu yang membuatnya melekat; menjelaskan salah satunya saja jarang berhasil.
- **Soal 4 kena `AttributeError`** → dia menulis `.reverse()` dari kebiasaan list. Kabar baik: errornya jelas, dan ini justru pelajaran yang murah. Bandingkan dengan bug `None` di Topik 2, yang diam-diam.
- **Soal 5 dijawab dengan `if/else`** → benar, tapi tunjukkan versi satu barisnya. Ini pengulangan ketiga dari pelajaran yang sama; kalau masih muncul, dia belum percaya bahwa `True` adalah nilai biasa.
- **Lancar semua** → langsung Tulis Kode 02. Set ini cuma memindahkan perkakas Topik 2 ke teks; DNA yang sebenarnya dimulai di set berikutnya.

## Hubungan dengan seleksi

Tidak ada satu pun soal 2025 yang berbunyi "besarkan hurufnya". Tapi keenam alat ini adalah yang dipakai untuk membaca untai di Soal 26–40, dan tidak satu pun soal DNA bisa dikerjakan tanpa `len`, indeks, `.count`, dan `in`. Yang paling penting dari set ini bukan alatnya, melainkan Soal 6: anak yang belum menerima bahwa teks tidak bisa diubah akan menulis komplemen dengan `.replace` berantai, dan itu **selalu** salah.
