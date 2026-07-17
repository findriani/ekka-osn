# List & Penyalinan — Baca Kode 01

Topik 2, membaca kode. Semua data di soal seleksi disimpan di dalam **list**: nilai, urutan DNA, koordinat, baris grid. Set ini melatih membacanya — mengambil isi lewat indeks, memotong dengan irisan, dan mengenali kapan sebuah list berubah tanpa kamu sadari.

## Petunjuk jawaban

Kerjakan **tanpa komputer**. Untuk soal list, cara paling cepat adalah menggambar isinya di kertas beserta nomor indeksnya, lalu mencoret dan menulis ulang tiap kali ada yang berubah.

Tuliskan jawaban sebagai bilangan bulat, kecuali pada soal pilihan ganda.

## Rumus cepat

- Indeks mulai dari **0**. `data[0]` isi pertama, `data[-1]` isi terakhir.
- `data[a:b]` mengambil dari indeks `a` sampai **sebelum** `b`.
- `data[a:]` sampai habis; `data[:b]` dari awal.
- `.append(x)` menambah di akhir. `.pop()` mengambil yang terakhir; `.pop(0)` yang pertama.
- `b = a` **bukan** menyalin — ia hanya memberi nama kedua pada list yang sama.

## Soal 1 — Menu warung

Pak Toni menuliskan menunya dan harganya di dua list sejajar. Ia menjumlahkan harga menu pertama, menu terakhir, dan menu ketiga. Cocokkan posisi setiap menu dengan indeks harganya: isi pertama berindeks 0, sedangkan isi terakhir dapat diambil dengan indeks `-1`.

<pre class="code">menu = ["nasi", "soto", "sate", "bakso", "es"]
harga = [8000, 10000, 3000, 12000, 5000]
total = harga[0] + harga[-1] + harga[2]
print(total)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 2 — Suhu sepekan

Stasiun cuaca mencatat suhu enam hari berturut-turut, lalu menjumlahkan suhu hari ke-2 sampai hari ke-4. Irisan `suhu[1:4]` dimulai dari indeks 1 dan berhenti sebelum indeks 4, sehingga tiga suhu di tengah itulah yang dijumlahkan.

<pre class="code">suhu = [28, 30, 33, 31, 29, 27]
print(sum(suhu[1:4]))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 3 — Memotong yang tepat

Bu Sari punya list nomor undian. Ia ingin mengambil dua nomor di tengah secara berurutan, tanpa mengambil nomor sebelum atau sesudahnya.

<pre class="code">angka = [10, 20, 30, 40, 50]</pre>

Manakah yang menghasilkan **tepat** `[20, 30]`?

- **A.** `angka[1:3]`
- **B.** `angka[1:2]`
- **C.** `angka[2:4]`
- **D.** `angka[-3:-1]`

**Jawaban:** `_____`

---

## Soal 4 — Tiga nilai tertinggi

Fungsi ini seharusnya mengembalikan tiga nilai tertinggi. Alih-alih memberi jawaban, ia justru melempar error `TypeError`. Ingat bahwa `sort()` mengurutkan list di tempatnya, tetapi nilai yang dikembalikannya bukan list hasil urutan.

<pre class="code">1  def tiga_tertinggi(nilai):
2      urut = nilai.sort()
3      return urut[-3:]</pre>

Baris nomor berapa yang menjadi penyebabnya?

**Jawaban:** `_____`

---

## Soal 5 — Titip belanja

Ani menulis daftar belanjanya. Budi bilang "titip, samain aja sama punyamu", lalu menambahkan satu barang. Ia tidak membuat salinan baru; kedua nama pada kode di bawah menunjuk ke daftar belanja yang sama.

<pre class="code">belanja_ani = ["gula", "teh"]
belanja_budi = belanja_ani
belanja_budi.append("kopi")
print(len(belanja_ani))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 6 — Antrean loket

Satu orang baru datang, lalu yang paling depan dilayani, lalu yang paling belakang pulang karena bosan. Gambarkan isi antrean setelah setiap operasi agar terlihat siapa yang tersisa sebelum nilainya dijumlahkan.

<pre class="code">antrean = [1, 2, 3, 4]
antrean.append(5)
antrean.pop(0)
antrean.pop()
print(sum(antrean))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: 16000**

Gambar indeksnya dulu:

| indeks | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| `menu` | nasi | soto | sate | bakso | es |
| `harga` | 8000 | 10000 | 3000 | 12000 | 5000 |

- `harga[0]` = **8000** (yang pertama)
- `harga[-1]` = **5000** (yang terakhir — indeks negatif menghitung dari belakang)
- `harga[2]` = **3000** (sate)

8000 + 5000 + 3000 = **16000**.

Jebakan yang paling sering: mengira `harga[2]` adalah menu **kedua**. Indeks 2 adalah isi **ketiga**, karena hitungannya mulai dari 0. Kalau kamu terjebak di sini, kamu akan terjebak lagi di setiap soal grid — biasakan menulis nomor indeksnya di atas datanya.

## Soal 2

**Jawaban: 94**

`suhu[1:4]` mengambil dari indeks 1 sampai **sebelum** indeks 4:

| indeks | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| `suhu` | 28 | **30** | **33** | **31** | 29 | 27 |

30 + 33 + 31 = **94**. Tiga angka, bukan empat — inilah arti "berhenti sebelum".

Cara cepat mengingat banyaknya: `data[a:b]` berisi \(b - a\) isi. Di sini \(4 - 1 = 3\).

## Soal 3

**Jawaban: A**

| pilihan | hasil |
|---|---|
| **A.** `angka[1:3]` | `[20, 30]` ✓ |
| **B.** `angka[1:2]` | `[20]` |
| **C.** `angka[2:4]` | `[30, 40]` |
| **D.** `angka[-3:-1]` | `[30, 40]` |

C dan D memberi hasil yang sama lewat dua jalan berbeda — bukti bahwa indeks negatif hanyalah cara lain menyebut posisi yang sama. `angka[-3]` adalah `angka[2]`, dan `angka[-1]` adalah `angka[4]`.

## Soal 4

**Jawaban: 2**

`.sort()` mengurutkan list **di tempat** dan mengembalikan `None`. Jadi `urut` bernilai `None`, dan baris 3 mencoba `None[-3:]` — yang melempar `TypeError`.

Ini salah satu keputusan Python yang paling sering menjebak. Aturannya:

| yang kamu tulis | mengubah aslinya? | mengembalikan |
|---|---|---|
| `nilai.sort()` | **ya** | `None` |
| `sorted(nilai)` | tidak | list baru yang terurut |

Kalau kamu ingin hasilnya, pakai `sorted`. Kalau kamu ingin mengubah list aslinya, pakai `.sort()` dan **jangan** ditampung ke variabel.

Pola yang sama berlaku untuk `.reverse()`, `.append()`, dan `.remove()` — semuanya mengembalikan `None`. Kalau kodemu tiba-tiba bilang `'NoneType' object is not subscriptable`, hampir pasti inilah sebabnya.

## Soal 5

**Jawaban: 3**

Baris `belanja_budi = belanja_ani` **tidak** membuat list baru. Ia hanya menempelkan nama kedua pada list yang sudah ada. Setelah itu, `belanja_ani` dan `belanja_budi` adalah **benda yang sama** dengan dua nama.

Jadi `belanja_budi.append("kopi")` mengubah list yang juga dilihat oleh `belanja_ani`, dan panjangnya menjadi **3**.

Bayangkan begini: kamu tidak memfotokopi daftarnya, kamu cuma menempelkan sticky note kedua di kertas yang sama. Siapa pun yang menulis di kertas itu, keduanya melihat perubahannya.

Kalau Budi mau daftarnya sendiri, ia harus menyalin: `belanja_budi = belanja_ani[:]` atau `list(belanja_ani)`.

Inilah inti topik ini, dan alasan kata "Penyalinan" ada di judulnya.

## Soal 6

**Jawaban: 9**

Tulis ulang list-nya di tiap langkah:

| perintah | isi `antrean` |
|---|---|
| awal | `[1, 2, 3, 4]` |
| `.append(5)` | `[1, 2, 3, 4, 5]` |
| `.pop(0)` | `[2, 3, 4, 5]` |
| `.pop()` | `[2, 3, 4]` |

2 + 3 + 4 = **9**.

Bedanya: `.pop()` tanpa isi mengambil yang **terakhir**; `.pop(0)` mengambil yang di indeks 0, yaitu yang **pertama**. Keduanya mengubah list aslinya dan mengembalikan isi yang diambil.

# Catatan pengajar

## Peta soal

| Soal | Bentuk | Keterampilan | Jebakan |
|---|---|---|---|
| 1 | lacak | indeks positif & negatif | mengira `harga[2]` = isi kedua |
| 2 | lacak | irisan | mengira batas atas ikut |
| 3 | pilihan ganda | irisan, indeks negatif | — |
| 4 | cari baris salah | `.sort()` mengembalikan `None` | menampung hasil `.sort()` |
| 5 | lacak | **aliasing** | mengira `b = a` menyalin |
| 6 | lacak | `append`/`pop` | `.pop()` lawan `.pop(0)` |

Soal 5 adalah soal terpenting di seluruh topik ini. Kalau dia salah di sini, semua soal grid nanti akan menghasilkan angka yang salah tanpa error apa pun.

## Cara membaca hasilnya

- **Salah di 1** → indeksnya mulai dari 1 di kepalanya. Perbaiki sekarang, sebelum topik grid; di sana kesalahan ini muncul dua kali lipat (baris **dan** kolom).
- **Salah di 4** → dia belum pernah kena `None` dari `.sort()`. Semua orang kena sekali; sekarang lebih baik daripada nanti.
- **Salah di 5** → jangan lanjut ke Tulis Kode 02 sebelum ini beres. Diskusikan pakai analogi fotokopi lawan sticky note; hampir selalu langsung nyantol.
- **Benar semua** → langsung Baca Kode 02, yang mengangkat aliasing ke bentuk paling berbahayanya: `[[0] * 3] * 3`.

## Catatan jujur

Set ini bisa dijawab sempurna dengan menyalin kodenya ke Python. Itu bukan kegagalan desain — set **Tulis Kode** memang mengharapkan dia menjalankan kode. Yang ini melatih menebak lebih dulu, dan hanya jujur di atas kertas atau kalau diawasi.
