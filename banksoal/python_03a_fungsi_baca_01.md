# Fungsi & Rumus — Baca Kode 01

Topik 3, membaca kode. Sebuah fungsi adalah rumus yang diberi nama. Kamu memberinya masukan, ia memberimu satu jawaban kembali — dan sesudah itu ia lupa segalanya.

Kalimat terakhir itu yang paling sering disalahpahami, dan set ini melatihnya: apa yang keluar dari sebuah fungsi, apa yang tidak, dan apa yang tertinggal di dalamnya.

## Petunjuk jawaban

Kerjakan **tanpa komputer**. Untuk soal fungsi, cara paling cepat adalah mengerjakan yang **paling dalam dulu** — persis seperti kurung di pelajaran matematika.

Tuliskan jawaban sebagai bilangan bulat, kecuali pada soal pilihan ganda.

## Rumus cepat

- `def nama(a, b):` membuat fungsi. `return` mengirim jawaban keluar.
- `return` **langsung menghentikan** fungsinya. Baris sesudahnya tidak dijalankan.
- `print` **menampilkan** ke layar; `return` **mengirim nilai** ke pemanggil. Keduanya sangat berbeda.
- Fungsi tanpa `return` mengembalikan `None`.
- `f(g(x))` → kerjakan `g(x)` dulu, hasilnya masuk ke `f`.

## Soal 1 — Mesin bertingkat

Dua mesin dipasang berurutan. Barang masuk ke mesin yang di dalam dulu. Jadi, kerjakan `tambah_tiga(4)` terlebih dahulu, lalu gunakan hasilnya sebagai masukan untuk mesin pengali.

<pre class="code">def kali_dua(n):
    return n * 2

def tambah_tiga(n):
    return n + 3

print(kali_dua(tambah_tiga(4)))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 2 — Berhenti di yang pertama

Petugas memeriksa catatan satu per satu dari depan, dan berhenti begitu menemukan angka negatif. Nilai `hitung` menyatakan berapa catatan yang sudah dilewati sebelum angka negatif pertama ditemukan.

<pre class="code">def cari_negatif(data):
    hitung = 0
    for n in data:
        if n &lt; 0:
            return hitung
        hitung += 1
    return hitung

print(cari_negatif([4, 7, 1, -3, 9]))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 3 — Yang ditampilkan dan yang dikembalikan

Bu Rina menulis fungsi penghitung luas. Fungsi itu memang menampilkan hasil perhitungan, tetapi perhatikan apakah hasil tersebut juga dikirim kembali kepada variabel `hasil`.

<pre class="code">def luas(p, l):
    print(p * l)

hasil = luas(3, 4)</pre>

Apa isi `hasil`?

- **A.** `12`
- **B.** `None`
- **C.** Error, karena fungsinya tidak punya `return`
- **D.** `"12"`

**Jawaban:** `_____`

---

## Soal 4 — Menabung di dalam fungsi

Fungsi ini seharusnya menambahkan `n` ke `total`, tetapi ia justru melempar `UnboundLocalError`. Cari baris yang membuat Python menganggap `total` di dalam fungsi sebagai variabel baru, bukan memakai `total` yang sudah ada di luar fungsi.

<pre class="code">1  total = 0
2  def tambahkan(n):
3      total = total + n
4      return total
5  print(tambahkan(5))</pre>

Baris nomor berapa yang menjadi penyebabnya?

**Jawaban:** `_____`

---

## Soal 5 — Titipan angka

Perhatikan baik-baik apa yang terjadi pada `angka`. Fungsi menerima nilai 5 sebagai masukan, tetapi tidak ada kode yang menyimpan nilai hasil fungsi itu kembali ke variabel `angka`.

<pre class="code">def naikkan(n):
    n = n + 10
    return n

angka = 5
naikkan(angka)
print(angka)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 6 — Tiga kali sebuah rumus

Rumus ini akan sering kamu temui lagi: kuadrat dari selisih. Hitung galat untuk ketiga pasangan nilai secara terpisah, lalu jumlahkan ketiga hasil kuadratnya.

<pre class="code">def kuadrat_galat(y, p):
    return (y - p) ** 2

total = kuadrat_galat(10, 8) + kuadrat_galat(3, 6) + kuadrat_galat(5, 5)
print(total)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: 14**

Kerjakan dari **dalam ke luar**, persis seperti kurung di matematika:

1. `tambah_tiga(4)` → 4 + 3 = **7**
2. `kali_dua(7)` → 7 × 2 = **14**

Jebakannya adalah membaca dari kiri ke kanan seperti kalimat biasa: "kali dua dulu, baru tambah tiga" → 4 × 2 = 8, lalu 8 + 3 = **11**. Salah.

Yang di dalam kurung **selalu** selesai lebih dulu, karena `kali_dua` tidak bisa mulai bekerja sebelum tahu apa yang harus dikalikannya. Kamu sudah tahu aturan ini dari \(2 \times (3 + 4)\); fungsi tidak menambahkan aturan baru, ia hanya memakai aturan yang sama.

## Soal 2

**Jawaban: 3**

Telusuri:

| `n` | `hitung` sebelum | negatif? | tindakan |
|---|---|---|---|
| 4 | 0 | tidak | `hitung` → 1 |
| 7 | 1 | tidak | `hitung` → 2 |
| 1 | 2 | tidak | `hitung` → 3 |
| −3 | 3 | **ya** | `return 3` — selesai |

Fungsi berhenti **saat itu juga**. Angka 9 tidak pernah dilihat, dan `return hitung` di baris terakhir tidak pernah dijalankan.

Jadi yang dikembalikan bukan "banyaknya angka negatif" (yang jumlahnya 1), melainkan **posisi negatif pertama** — yaitu berapa banyak angka yang sempat dilewati sebelum berhenti.

Inilah gunanya `return` di dalam perulangan: ia adalah `break` yang sekaligus membawa pulang jawabannya. Kamu akan memakai pola ini untuk "cari yang pertama memenuhi syarat".

## Soal 3

**Jawaban: B**

Fungsi `luas` **menampilkan** hasilnya, lalu selesai tanpa `return`. Fungsi yang tidak pernah `return` mengembalikan `None` — selalu, tanpa kecuali.

Jadi layar memang menampilkan `12`, tetapi `hasil` berisi `None`. Angka 12 itu sudah menguap; ia dicetak ke layar dan tidak pernah dikirim ke mana pun.

| | `print(p * l)` | `return p * l` |
|---|---|---|
| muncul di layar | ya | tidak |
| bisa ditampung ke variabel | **tidak** | ya |
| bisa dipakai fungsi lain | **tidak** | ya |

Ingat baik-baik. Di set **Tulis Kode**, uji-ujinya memeriksa nilai yang **dikembalikan**. Kalau kamu menulis `print` alih-alih `return`, jawabanmu akan tampak benar di layar dan **seluruh ujimu gagal** — dan itu perasaan yang paling membingungkan di dunia sampai kamu tahu sebabnya.

Kenapa bukan C? Karena tidak ada yang salah di sini menurut Python. Fungsi tanpa `return` itu sah; ia cuma tidak berguna kalau kamu butuh jawabannya.

## Soal 4

**Jawaban: 3**

Baris 3 adalah `total = total + n`. Karena di baris itu ada **penugasan** ke `total`, Python memutuskan bahwa `total` adalah variabel **milik fungsi ini sendiri** — bukan `total` yang di luar.

Lalu ia mencoba menghitung `total + n` di ruas kanan, dan mendapati `total` miliknya belum pernah diisi apa-apa. Dari situlah `UnboundLocalError`.

Yang aneh: keputusan itu diambil untuk **seluruh fungsi sekaligus**, sebelum satu baris pun jalan. Jadi bukan "ambil yang di luar dulu, nanti timpa". Sekali sebuah nama ditugasi di dalam fungsi, nama itu jadi milik fungsi tersebut dari awal sampai akhir.

Bandingkan — ini **berjalan** dan mencetak 0:

<pre class="code">total = 0
def lihat():
    return total
print(lihat())</pre>

Membaca dari luar boleh. **Menulis** yang membuatnya jadi milik sendiri.

Cara benarnya bukan menambal ruang lingkup, melainkan memakai fungsi sebagaimana mestinya — masukan lewat parameter, jawaban lewat `return`:

<pre class="code">def tambahkan(total, n):
    return total + n
total = tambahkan(total, 5)</pre>

## Soal 5

**Jawaban: 5**

Ini pasangan yang mengejutkan untuk Topik 2.

`naikkan(angka)` menyalin **nilai** 5 ke dalam parameter `n`. Baris `n = n + 10` mengganti isi `n` — sebuah nama yang cuma hidup di dalam fungsi. `angka` di luar tidak tersentuh sama sekali. Dan hasil `return`-nya pun dibuang, karena tidak ditampung.

Sekarang bandingkan dengan Topik 2 Soal 5:

| | `naikkan(angka)` dengan angka | `.append` pada list |
|---|---|---|
| yang dikirim | angka 5 | list-nya |
| aslinya berubah? | **tidak** | **ya** |

Kenapa berbeda? Karena `n = n + 10` **memberi `n` benda baru**, sedangkan `data.append(x)` **mengubah benda yang sudah ada**. Yang pertama cuma memindahkan nama; yang kedua mencorat-coret kertasnya.

Aturan praktisnya: `nama = ...` tidak pernah mengubah apa pun di luar fungsi. `nama.sesuatu(...)` bisa. Itu satu kalimat yang menjelaskan seluruh kebingungan ini.

## Soal 6

**Jawaban: 13**

| panggilan | selisih | kuadrat |
|---|---|---|
| `kuadrat_galat(10, 8)` | 2 | **4** |
| `kuadrat_galat(3, 6)` | −3 | **9** |
| `kuadrat_galat(5, 5)` | 0 | **0** |

4 + 9 + 0 = **13**.

Perhatikan yang kedua: selisihnya **negatif**, tetapi kuadratnya positif. Itu bukan efek samping — itu justru alasan kuadratnya ada. Rumus ini tidak peduli kamu meleset ke atas atau ke bawah, ia cuma peduli **seberapa jauh**.

Ingat baik-baik, karena kamu baru saja menghitung inti dari MSE. Bagi 13 dengan 3 dan kamu mendapatkan MSE-nya. Seluruh Tulis Kode 02 dibangun di atas satu baris ini.

# Catatan pengajar

## Peta soal

| Soal | Bentuk | Keterampilan | Jebakan |
|---|---|---|---|
| 1 | lacak | fungsi bersarang | membaca kiri-ke-kanan |
| 2 | lacak | `return` menghentikan perulangan | mengira ia menghitung semua negatif |
| 3 | pilihan ganda | `print` lawan `return` | mengira `print` mengembalikan nilai |
| 4 | cari baris salah | ruang lingkup lokal | mengira fungsi bisa menulis ke luar |
| 5 | lacak | angka dikirim sebagai salinan | mengira `angka` ikut berubah |
| 6 | lacak | kuadrat selisih | lupa kuadrat membuang tanda |

Soal 3 adalah yang paling mendesak. Ia satu-satunya kesalahan di seluruh Topik 3 yang membuat **semua** uji gagal sekaligus di set Tulis Kode — dan anak yang belum pernah kena akan mengira websitenya rusak.

## Cara membaca hasilnya

- **Salah di 1** → dia membaca fungsi seperti kalimat. Tunjukkan padanannya di matematika: \(f(g(x))\). Biasanya langsung nyantol.
- **Menjawab A di soal 3** → hentikan dan selesaikan sekarang. Kalau tidak, sesi Tulis Kode pertamanya akan habis untuk kebingungan yang salah.
- **Salah di 4** → wajar, ini konsep yang benar-benar baru. Yang penting bukan hafal istilah "ruang lingkup", tetapi kebiasaan: masukan lewat parameter, jawaban lewat `return`.
- **Menjawab 15 di soal 5** → dia menyamakan angka dengan list. Sandingkan langsung dengan Topik 2 Soal 5; melihat keduanya berdampingan jauh lebih ampuh daripada menjelaskan salah satunya.

## Hubungan dengan seleksi

Soal 6 adalah Soal 8 seleksi 2025 (menghitung MSE) yang dipreteli sampai satu panggilan fungsi. Soal 2 adalah pola "cari yang pertama memenuhi syarat" yang muncul di mana-mana. Sisanya adalah perkakas: tanpa `return` yang benar, tidak ada satu pun soal Tulis Kode yang bisa dinilai.
