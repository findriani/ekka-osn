# Control Flow dan Operator — Tulis Kode 01 (Mudah)

Topik 1, menulis kode, tingkat **mudah**. Set pertama kamu menulis Python sungguhan. Semua jawabannya cukup **satu baris** — tidak ada perulangan sama sekali. Tujuannya bukan menyulitkan, melainkan membuat `def`, `return`, dan operator hitung menjadi otomatis, supaya nanti otakmu bebas memikirkan soalnya, bukan sintaksnya.

## Petunjuk jawaban

Bacalah cerita pada soal terlebih dahulu. Kalimat yang diawali `Tulis` menjelaskan nama fungsi, masukan, dan nilai yang harus dikembalikan; contoh uji di bawahnya membantumu melihat bentuk jawabannya.

Isi badan fungsi sampai **semua baris uji bernilai True**, lalu tekan **Jalankan**. Boleh dicoba sesering yang kamu mau; tidak ada hukuman untuk gagal. Nilaimu dihitung per baris uji, jadi lulus sebagian tetap dapat nilai sebagian.

Baris uji adalah spesifikasinya. Baca dulu sebelum menulis — di situlah semua jebakannya berada.

Hanya Python standar, **tanpa NumPy**.

## Rumus cepat

- `return` **mengembalikan** nilai; `print` hanya menampilkannya ke layar. Fungsi yang hanya nge-`print` mengembalikan `None`, dan semua ujinya akan gagal.
- `/` menghasilkan pecahan: `7 / 2` = `3.5`
- `//` membuang pecahannya: `7 // 2` = `3`
- `%` memberi sisanya: `7 % 2` = `1`
- `n % 2 == 0` bernilai `True` atau `False` — itu sudah jawaban, tidak perlu `if`.

## Soal 1 — Dua kali lipat

Panitia menggandakan setiap hadiah karena pesertanya membludak.

Tulis `dua_kali(x)` yang mengembalikan `x` dikali dua.

<pre class="starter">def dua_kali(x):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">dua_kali(5) == 10
dua_kali(0) == 0
dua_kali(-3) == -6</pre>

**Jawaban:** `_____`

---

## Soal 2 — Permen sisa

Bu Guru membagi permen rata ke semua anak. Yang tidak bisa dibagi rata disimpan lagi ke toples.

Tulis `sisa_permen(permen, anak)` yang mengembalikan **berapa permen yang tersisa** setelah dibagi rata.

<pre class="starter">def sisa_permen(permen, anak):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">sisa_permen(7, 2) == 1
sisa_permen(10, 5) == 0
sisa_permen(3, 5) == 3</pre>

**Jawaban:** `_____`

---

## Soal 3 — Permen per anak

Toples yang sama, pertanyaan yang berbeda.

Tulis `bagi_rata(permen, anak)` yang mengembalikan **berapa permen yang diterima setiap anak**. Permen tidak boleh dipotong, jadi hasilnya selalu bilangan bulat.

<pre class="starter">def bagi_rata(permen, anak):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">bagi_rata(7, 2) == 3
bagi_rata(10, 5) == 2
bagi_rata(3, 5) == 0</pre>

**Jawaban:** `_____`

---

## Soal 4 — Nilai rapor

Nilai akhir adalah rata-rata dari nilai tugas dan nilai ujian, dengan bobot sama.

Tulis `nilai_akhir(tugas, ujian)` yang mengembalikan rata-rata keduanya. Hasilnya boleh berupa pecahan.

<pre class="starter">def nilai_akhir(tugas, ujian):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">abs(nilai_akhir(80, 90) - 85.0) &lt; 1e-9
abs(nilai_akhir(70, 75) - 72.5) &lt; 1e-9
abs(nilai_akhir(0, 0) - 0.0) &lt; 1e-9</pre>

**Jawaban:** `_____`

---

## Soal 5 — Nomor undian genap

Panitia memberi doorprize hanya kepada pemegang nomor undian genap.

Tulis `apakah_genap(n)` yang mengembalikan `True` kalau `n` genap, dan `False` kalau ganjil.

<pre class="starter">def apakah_genap(n):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">apakah_genap(4) is True
apakah_genap(7) is False
apakah_genap(0) is True
apakah_genap(-2) is True</pre>

**Jawaban:** `_____`

---

## Soal 6 — Total sumbangan

Kotak amal dihitung isinya di akhir hari.

Tulis `jumlah_semua(data)` yang mengembalikan jumlah semua angka di dalam `data`. Kalau kosong, hasilnya `0`.

<pre class="starter">def jumlah_semua(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jumlah_semua([1, 2, 3]) == 6
jumlah_semua([]) == 0
jumlah_semua([-5, 5]) == 0</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def dua_kali(x):
    return x * 2</pre>

Sesederhana kelihatannya — dan itu memang maksudnya. Yang dilatih di sini cuma satu: `return` **mengembalikan** nilai kepada yang memanggil.

Kalau kamu menulis `print(x * 2)`, layarnya memang menampilkan angka yang benar, tetapi fungsinya mengembalikan `None`, dan `None == 10` bernilai False. Semua uji gagal walaupun "hasilnya terlihat benar". Ini kesalahan nomor satu bagi orang yang baru mulai, dan lebih baik ditemui sekarang daripada di soal grid nanti.

Uji `dua_kali(-3)` ada untuk memastikan kamu memakai `* 2`, bukan `+ x` yang kebetulan juga benar — sebenarnya `x + x` juga lolos semuanya, dan itu tidak apa-apa. Dua jalan menuju jawaban yang sama-sama benar.

## Soal 2

**Jawaban: kode**

<pre class="kunci">def sisa_permen(permen, anak):
    return permen % anak</pre>

`%` menjawab "berapa yang tersisa setelah dibagi habis". Itu saja.

Uji `sisa_permen(3, 5) == 3` yang paling menarik: permennya lebih sedikit daripada anaknya, jadi **tidak ada** yang bisa dibagikan dan **semuanya** tersisa. Banyak orang mengira jawabannya 0. Kalau kamu ragu, bayangkan saja: 3 permen, 5 anak, tidak ada yang kebagian satu pun — ketiganya kembali ke toples.

## Soal 3

**Jawaban: kode**

<pre class="kunci">def bagi_rata(permen, anak):
    return permen // anak</pre>

`//` menjawab "berapa kali muat", dan membuang sisanya. Pasangannya adalah `%` dari Soal 2: `7 = 2 * 3 + 1`, dan itulah `7 // 2 = 3` dengan `7 % 2 = 1`.

Kalau kamu memakai `/` biasa, perhatikan uji mana yang gagal:

| uji | dengan `/` | lulus? |
|---|---|---|
| `bagi_rata(7, 2) == 3` | `3.5` | **gagal** |
| `bagi_rata(10, 5) == 2` | `2.0` | lulus — karena `2.0 == 2` |
| `bagi_rata(3, 5) == 0` | `0.6` | **gagal** |

Uji kedua lolos **secara kebetulan**, karena kebetulan hasilnya bulat. Inilah kenapa satu uji tidak pernah cukup untuk membuktikan kodemu benar — dan kenapa tiap soal di sini punya beberapa uji yang berbeda-beda bentuknya.

## Soal 4

**Jawaban: kode**

<pre class="kunci">def nilai_akhir(tugas, ujian):
    return (tugas + ujian) / 2</pre>

Tanda kurungnya wajib. Tanpanya, `tugas + ujian / 2` berarti "tugas ditambah setengah ujian" — karena `/` dikerjakan lebih dulu daripada `+`, sama seperti di matematika. Untuk `(80, 90)` itu memberi 125, bukan 85.

Di sinilah `/` yang benar, bukan `//`. Uji `nilai_akhir(70, 75) = 72.5` sengaja dipilih agar hasilnya **tidak** bulat: dengan `//` jawabannya menjadi 72, dan ujinya gagal. Nilai rapor memang boleh koma.

## Soal 5

**Jawaban: kode**

<pre class="kunci">def apakah_genap(n):
    return n % 2 == 0</pre>

`n % 2 == 0` **sudah** bernilai `True` atau `False`. Ia adalah jawabannya; tinggal dikembalikan.

Yang sering ditulis pemula:

<pre class="code">if n % 2 == 0:
    return True
else:
    return False</pre>

Itu benar dan lolos semua uji — hanya saja empat baris untuk mengatakan hal yang sudah dikatakan oleh satu perbandingan. Kalau kamu menulisnya begitu, tidak ada yang salah; cukup sadari bahwa versi pendeknya ada.

Uji `apakah_genap(-2) is True` menyambung ke Baca Kode 02: `-2 % 2` bernilai `0` di Python, jadi bilangan negatif **tidak** perlu perlakuan khusus.

Kenapa ujinya memakai `is True` dan bukan `== True`? Karena di Python `1 == True` bernilai benar. Kalau fungsimu mengembalikan angka `1`, `== True` akan lolos padahal yang diminta adalah `True` yang sesungguhnya. `is` menuntut jenisnya tepat, dan `n % 2 == 0` memang menghasilkannya.

## Soal 6

**Jawaban: kode**

<pre class="kunci">def jumlah_semua(data):
    return sum(data)</pre>

`sum` sudah disediakan Python, dan untuk list kosong ia mengembalikan `0` — persis yang diminta uji kedua. Tidak perlu perulangan.

Menulisnya dengan tangan juga benar, dan justru itu latihan Soal 1 di set berikutnya:

<pre class="code">def jumlah_semua(data):
    total = 0
    for n in data:
        total += n
    return total</pre>

Perhatikan `total = 0` berada **sebelum** perulangan. Kalau di dalam, ia disetel ulang tiap putaran dan hasilnya hanya angka terakhir — persis bug yang kamu temukan di Baca Kode 01 Soal 4.

Uji `jumlah_semua([-5, 5]) == 0` ada supaya kamu tidak bisa lolos dengan `len(data)` atau semacamnya secara kebetulan.

# Catatan pengajar

## Kenapa set ini ada

Set Tulis Kode yang lama langsung meminta perulangan di soal pertama. Untuk anak yang baru menulis Python, itu dua hal baru sekaligus: sintaks fungsi **dan** logika perulangan. Kalau macet, kamu tidak tahu yang mana penyebabnya.

Set ini hanya satu hal baru: sintaks. Semua jawabannya satu baris, dan tidak ada perulangan sampai Soal 6 — yang pun bisa dijawab dengan `sum`. Kalau dia lolos set ini dengan lancar, macetnya di set berikutnya pasti soal logika, dan itu informasi yang berguna.

## Peta soal

| Soal | Keterampilan | Jebakan yang ditanam |
|---|---|---|
| 1 | `def` dan `return` | `print` bukan `return` |
| 2 | `%` | `sisa_permen(3, 5)` = 3, bukan 0 |
| 3 | `//` | `/` lolos satu uji secara kebetulan |
| 4 | `/` dan urutan operasi | kurung hilang; `//` merusak 72.5 |
| 5 | perbandingan sebagai nilai | `if/return True/return False` yang bertele-tele |
| 6 | `sum`, list kosong | — |

## Cara membaca hasilnya

- **Nol dari enam, semua uji gagal** → hampir pasti dia memakai `print`, bukan `return`. Periksa kodenya di `/admin`; ini lima menit untuk diperbaiki dan bukan tanda dia tidak paham.
- **Gagal hanya di Soal 3 uji 1 dan 3** → dia pakai `/`. Sengaja: uji kedua lolos, jadi dia harus membaca uji mana yang gagal, bukan sekadar melihat angkanya.
- **Soal 5 ditulis dengan `if/else` empat baris** → benar, biarkan. Jangan dikoreksi jadi satu baris di depan dia; sebutkan saja versi pendeknya ada. Set ini soal kepercayaan diri, bukan kerapian.
- **Lancar semua** → langsung ke Tulis Kode 02. Set ini memang tidak dirancang untuk menghambat siapa pun.

## Catatan jujur

Kodenya ikut tersimpan. Buka `/admin` → Unduh JSON, dan kamu bisa membaca persis apa yang dia ketik. Di set semudah ini, **gaya** menulisnya lebih berguna daripada skornya: apakah dia menamai variabel dengan masuk akal, apakah dia tahu perbandingan itu sendiri sudah bernilai benar-salah, apakah dia sudah kenal `sum`. Itu semua tidak terbaca dari angka 6/6.
