# Control Flow dan Operator — Baca Kode 01

Topik 1, membaca kode. Kamu tidak menulis apa pun di sini: kamu **melacak** kode yang sudah ada dan mengatakan apa hasilnya. Yang dilatih: perulangan `for`, percabangan `if`/`else`, akumulasi, serta `//` dan `%`. Semua ini adalah dasar dari hampir setiap soal Python di seleksi.

## Petunjuk jawaban

Kerjakan **tanpa komputer**. Ambil kertas, jalankan kodenya di kepala baris demi baris, dan tulis nilai tiap variabel saat berubah. Kalau kamu langsung menyalinnya ke Python, kamu memang dapat nilai — tapi bukan itu yang sedang dilatih, dan pada hari-H kamu harus bisa menebak lebih dulu apa yang akan dicetak kodemu sendiri.

Tuliskan jawaban sebagai bilangan bulat, kecuali pada soal pilihan ganda.

## Rumus cepat

- `a // b` = hasil bagi yang dibulatkan ke bawah. `a % b` = sisanya.
- `range(a, b)` mulai dari `a`, berhenti **sebelum** `b`. Isinya ada \(b - a\) buah.
- `range(a, b, s)` melompat sejauh `s`.
- `continue` melompat ke putaran berikutnya. `break` keluar dari perulangan sama sekali.

## Soal 1 — Tukang parkir Pasar Kalindo

Pak Damar memungut Rp2.000 untuk parkir sampai 2 jam, dan Rp5.000 kalau lebih dari 2 jam. Sore ini ada empat motor yang parkir selama 1, 3, 2, dan 5 jam. Ikuti penambahan tarif untuk setiap motor; motor yang parkir tepat 2 jam masih memakai tarif Rp2.000.

<pre class="code">tarif = 0
for jam in [1, 3, 2, 5]:
    if jam &gt; 2:
        tarif += 5000
    else:
        tarif += 2000
print(tarif)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 2 — Pemeriksaan gerbong

Petugas memeriksa gerbong kereta secara berselang: mulai dari gerbong ke-2, lalu melompat tiga gerbong setiap kali, dan berhenti sebelum gerbong ke-12. Variabel `periksa` bertambah satu setiap kali sebuah nomor gerbong masuk ke dalam rentang tersebut.

<pre class="code">periksa = 0
for i in range(2, 12, 3):
    periksa += 1
print(periksa)</pre>

Berapa gerbong yang diperiksa?

**Jawaban:** `_____`

---

## Soal 3 — Menjumlah dengan cara lain

Bu Wati menulis kode ini untuk menjumlahkan angka 1 sampai 5. Ia ingin menuliskannya dengan bentuk yang lebih ringkas, tetapi hasil penjumlahannya harus tetap sama.

<pre class="code">total = 0
for n in range(1, 6):
    total += n</pre>

Manakah yang menghasilkan `total` yang **sama persis**?

- **A.** `sum(range(1, 6))`
- **B.** `sum(range(1, 5))`
- **C.** `sum(range(5))`
- **D.** `sum(range(2, 7))`

**Jawaban:** `_____`

---

## Soal 4 — Menghitung yang lulus

Fungsi ini seharusnya menghitung berapa siswa yang nilainya mencapai KKM. Untuk `hitung_lulus([90, 40, 75], 70)` jawabannya seharusnya `2`, tetapi kode ini selalu memberi `1` atau `0`. Perhatikan apakah penghitung `lulus` disiapkan sekali saja, atau justru diatur ulang ketika setiap nilai diperiksa.

<pre class="code">1  def hitung_lulus(nilai, kkm):
2      lulus = 0
3      for n in nilai:
4          lulus = 0
5          if n &gt;= kkm:
6              lulus += 1
7      return lulus</pre>

Baris nomor berapa yang harus dihapus supaya benar?

**Jawaban:** `_____`

---

## Soal 5 — Panen cabai

Sebuah mesin sortir memeriksa cabai satu per satu. Cabai bernomor ganjil dilewati begitu saja. Kalau menemukan cabai lebih berat dari 5 ons, mesin berhenti total. Telusuri urutan cabai dari kiri ke kanan, karena cabai setelah perintah `break` tidak lagi diperiksa.

<pre class="code">skor = 0
for n in [4, 7, 2, 9, 6]:
    if n % 2 == 1:
        continue
    if n &gt; 5:
        break
    skor += n
print(skor)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 6 — Tumpukan batu bata

Tukang menumpuk bata berbentuk tangga: lapis ke-1 berisi 1 bata, lapis ke-2 berisi 2 bata, dan seterusnya. Cobalah nilai `n` secara berurutan sambil melihat jumlah bata yang sudah terkumpul.

<pre class="code">def tumpuk(n):
    total = 0
    for i in range(1, n + 1):
        total += i
    return total</pre>

Berapa **nilai `n` terkecil** yang membuat `tumpuk(n)` bernilai 20 atau lebih?

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: 14000**

Telusuri satu per satu, dan tulis `tarif` tiap kali berubah:

| `jam` | `jam > 2`? | ditambah | `tarif` |
|---|---|---|---|
| 1 | tidak | 2000 | 2000 |
| 3 | ya | 5000 | 7000 |
| 2 | tidak | 2000 | 9000 |
| 5 | ya | 5000 | 14000 |

Perhatikan `jam = 2`: `2 > 2` bernilai **False**, jadi masuk ke `else`. Inilah bedanya `>` dan `>=`, dan inilah kenapa angka 2 sengaja ada di dalam list.

## Soal 2

**Jawaban: 4**

`range(2, 12, 3)` mulai dari 2 lalu melompat 3: **2, 5, 8, 11**. Angka berikutnya adalah 14, yang sudah melewati batas, jadi berhenti. Empat gerbong.

Kesalahan yang biasa: mengira 12 ikut. `range` selalu berhenti **sebelum** angka kedua. Kalau ragu, tulis saja isinya — untuk `range` yang pendek itu lebih cepat daripada menghitung rumus.

## Soal 3

**Jawaban: A**

Kode aslinya menjumlahkan `range(1, 6)`, yaitu 1+2+3+4+5 = **15**.

- **A.** `sum(range(1, 6))` = 15 ✓
- **B.** `sum(range(1, 5))` = 1+2+3+4 = 10
- **C.** `sum(range(5))` = 0+1+2+3+4 = 10
- **D.** `sum(range(2, 7))` = 2+3+4+5+6 = 20

B dan C sama-sama memberi 10 lewat jalan yang berbeda, dan keduanya adalah kesalahan "meleset satu" yang paling sering terjadi. `range(5)` berarti `range(0, 5)`: dimulai dari nol.

## Soal 4

**Jawaban: 4**

Baris 4 mengembalikan `lulus` ke nol **di setiap putaran**, jadi semua hitungan sebelumnya hilang. Yang tersisa hanya hasil dari siswa terakhir — 1 kalau dia lulus, 0 kalau tidak.

Ini kesalahan paling sering pada pola akumulasi: wadahnya harus disiapkan **sekali, sebelum** perulangan. Baris 2 sudah melakukannya dengan benar; baris 4 merusaknya.

Cara mengenalinya cepat: kalau hasil sebuah akumulasi selalu terlihat seperti "hanya data terakhir yang dihitung", carilah penyetelan ulang di dalam perulangan.

## Soal 5

**Jawaban: 6**

| `n` | yang terjadi | `skor` |
|---|---|---|
| 4 | genap, tidak > 5 → ditambahkan | 4 |
| 7 | ganjil → `continue`, dilewati | 4 |
| 2 | genap, tidak > 5 → ditambahkan | 6 |
| 9 | ganjil → `continue`, dilewati | 6 |
| 6 | genap, **> 5** → `break` | 6 |

Yang membedakan: `continue` hanya membatalkan **satu** putaran, `break` menghentikan **seluruh** perulangan. Angka 6 tidak pernah ditambahkan karena `break` terjadi sebelum baris `skor += n`.

## Soal 6

**Jawaban: 6**

`tumpuk(n)` menjumlahkan 1 sampai `n`. Hitung menaik sampai lewat 20:

| `n` | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| `tumpuk(n)` | 1 | 3 | 6 | 10 | 15 | **21** |

`tumpuk(5)` = 15 masih kurang; `tumpuk(6)` = 21 sudah cukup. Jadi 6.

Soal seperti ini — "berapa nilai masukan yang menghasilkan keluaran X" — memaksamu membaca fungsinya sebagai **mesin**, bukan sekadar deretan baris. Kemampuan itu yang dipakai untuk menebak-lalu-memeriksa di soal seleksi.

# Catatan pengajar

## Peta soal

| Soal | Bentuk | Keterampilan | Jebakan |
|---|---|---|---|
| 1 | lacak keluaran | `if`/`else`, akumulasi | `2 > 2` itu False |
| 2 | hitung putaran | `range` dengan langkah | mengira batas atas ikut |
| 3 | pilih yang setara | `range` lawan `sum` | `range(5)` mulai dari 0 |
| 4 | cari baris salah | akumulasi | menyetel ulang di dalam loop |
| 5 | lacak keluaran | `continue` lawan `break` | mengira keduanya sama |
| 6 | kerja terbalik | fungsi sebagai mesin | — |

Bentuknya sengaja diputar: kalau enam-enamnya "apa yang dicetak?", dia belajar satu keterampilan saja dan bosan di soal ketiga.

## Cara membaca hasilnya

- **Salah di 1 atau 5** → dia belum benar-benar melacak, hanya membaca sekilas. Minta dia menulis tabel variabelnya di kertas; itu satu-satunya obatnya.
- **Salah di 2 atau 3** → `range` belum melekat. Ini murni hafalan-plus-latihan, sepuluh menit selesai.
- **Salah di 4** → ini yang paling penting dari set ini. Menyetel ulang akumulator di dalam perulangan adalah bug yang akan dia buat sendiri berkali-kali. Kalau salah di sini, kerjakan Tulis Kode 02 sampai polanya otomatis.
- **Benar semua kecuali 6** → tidak apa-apa. Soal 6 memang paling abstrak dan tidak menghalangi apa pun.

## Catatan jujur

Set ini hanya jujur di atas kertas atau kalau diawasi. Semua soalnya bisa dijawab sempurna dengan menyalin kodenya ke Python — dan pada set **Tulis Kode** hal itu justru yang diharapkan. Bedakan keduanya saat memberi tugas: yang ini untuk melatih membaca, yang itu untuk melatih menulis.
