# Dictionary & Vektor — Baca Kode 01

Topik 5, membaca kode. List menyimpan data lewat **urutan**; dictionary menyimpannya lewat **nama**. Di soal seleksi, dictionary muncul tiap kali sesuatu perlu dicari dari namanya — harga dari nama barang, koordinat dari nama kota, hitungan dari sebuah huruf. Set ini melatih membacanya: mengambil nilai lewat kunci, memberi nilai cadangan saat kunci tidak ada, dan menghitung dengan dictionary.

## Petunjuk jawaban

Kerjakan **tanpa komputer**. Untuk soal dictionary, gambar dua kolom di kertas — kunci di kiri, nilai di kanan — lalu coret dan tulis ulang tiap kali ada yang berubah.

Tuliskan jawaban sebagai bilangan bulat, kecuali pada soal pilihan ganda.

## Rumus cepat

- `d[k]` mengambil nilai untuk kunci `k`. Kalau kuncinya tidak ada, ini **error** (`KeyError`).
- `d.get(k)` memberi `None` kalau kunci tidak ada; `d.get(k, 0)` memberi `0`.
- `k in d` bernilai `True` atau `False` — memeriksa **kunci**, bukan nilai.
- `d[k] = d.get(k, 0) + 1` adalah pola menghitung: naikkan satu, mulai dari 0 kalau baru.
- Perkalian titik dua vektor: jumlahkan `a[i] * b[i]` untuk tiap `i`.

## Soal 1 — Harga di warung

Pak Toni menyimpan daftar harga sebagai dictionary: nama menu menjadi kunci, harganya menjadi nilai. Ia menjumlahkan harga nasi dan es.

<pre class="code">harga = {"nasi": 8000, "soto": 10000, "es": 5000}
print(harga["nasi"] + harga["es"])</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 2 — Stok yang belum ada

Bu Sari mengecek stok di kamusnya. Ia menjumlahkan stok pensil dan spidol. Perhatikan bahwa spidol **tidak** ada di dalam dictionary, dan `.get` diberi nilai cadangan `0`.

<pre class="code">stok = {"pensil": 12, "pulpen": 7}
print(stok.get("pensil", 0) + stok.get("spidol", 0))</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 3 — Mengambil dengan aman

Nilai ulangan tersimpan di `nilai`. Kita ingin mengambil nilai seorang siswa yang **belum tentu** terdaftar, dan mendapat tepat `0` kalau namanya tidak ada — tanpa error.

<pre class="code">nilai = {"ani": 90, "budi": 85}</pre>

Manakah yang menghasilkan tepat `0`?

- **A.** `nilai["cici"]`
- **B.** `nilai.get("cici")`
- **C.** `nilai.get("cici", 0)`
- **D.** `nilai.get("budi", 0)`

**Jawaban:** `_____`

---

## Soal 4 — Menghitung suara

Panitia menghitung suara satu per satu. Tiap suara menaikkan hitungan kandidatnya sebanyak satu, mulai dari 0 kalau kandidat itu baru pertama muncul.

<pre class="code">suara = {}
for x in ["a", "b", "a", "a", "c", "b"]:
    suara[x] = suara.get(x, 0) + 1
print(suara["a"])</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 5 — Menjumlahkan isi keranjang

Sebuah dictionary menyimpan jumlah setiap jenis buah. Perulangan `for buah in keranjang` menelusuri **kunci**-nya, lalu tiap nilainya diambil dan dijumlahkan.

<pre class="code">keranjang = {"apel": 3, "jeruk": 5, "mangga": 2}
total = 0
for buah in keranjang:
    total += keranjang[buah]
print(total)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

---

## Soal 6 — Perkalian titik

Dua vektor disimpan sebagai list sejajar. Kode ini mengalikan isi yang seposisi lalu menjumlahkan semuanya — persis operasi yang dipakai untuk mengukur kemiripan dua vektor kata di seleksi.

<pre class="code">a = [2, 5, 1]
b = [3, 1, 4]
hasil = 0
for i in range(3):
    hasil += a[i] * b[i]
print(hasil)</pre>

Berapa yang dicetak?

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: 13000**

`harga["nasi"]` adalah 8000 dan `harga["es"]` adalah 5000. Dictionary tidak peduli urutan penulisan — yang dicari adalah namanya, bukan posisinya.

8000 + 5000 = **13000**.

Perhatikan `"soto"` tidak ikut dihitung sama sekali. Itu bedanya dengan list: di sini kamu memanggil persis nama yang kamu mau, bukan indeks.

## Soal 2

**Jawaban: 12**

`stok.get("pensil", 0)` adalah 12 karena pensil ada. `stok.get("spidol", 0)` adalah **0** karena spidol tidak ada — dan `.get` memberi nilai cadangan `0` alih-alih melempar error.

12 + 0 = **12**.

Kalau ditulis `stok["spidol"]`, program akan berhenti dengan `KeyError`. Itulah gunanya `.get`: ia mengubah "tidak ada" menjadi sebuah angka yang bisa dihitung, bukan sebuah kecelakaan.

## Soal 3

**Jawaban: C**

| pilihan | hasil |
|---|---|
| **A.** `nilai["cici"]` | `KeyError` — berhenti dengan error |
| **B.** `nilai.get("cici")` | `None`, bukan `0` |
| **C.** `nilai.get("cici", 0)` | **0** ✓ |
| **D.** `nilai.get("budi", 0)` | 85 — budi ada, jadi cadangannya tak terpakai |

Tiga cara "salah" ini masing-masing salah dengan cara berbeda. A **error**. B memberi `None`, yang kelihatan mirip nol tetapi tidak bisa dijumlahkan (`None + 1` error). D mengembalikan nilai asli karena kuncinya kebetulan ada — nilai cadangan hanya dipakai saat kunci **tidak** ada.

## Soal 4

**Jawaban: 3**

Telusuri pelan-pelan, mulai dari `suara = {}` yang kosong:

| baca | `suara` |
|---|---|
| `"a"` | `{"a": 1}` |
| `"b"` | `{"a": 1, "b": 1}` |
| `"a"` | `{"a": 2, "b": 1}` |
| `"a"` | `{"a": 3, "b": 1}` |
| `"c"` | `{"a": 3, "b": 1, "c": 1}` |
| `"b"` | `{"a": 3, "b": 2, "c": 1}` |

`suara["a"]` = **3**.

Inti polanya ada di `d.get(x, 0) + 1`. Saat `x` muncul pertama kali, `get` memberi 0 lalu ditambah 1. Kalau kamu menulis `suara[x] += 1` tanpa `get`, kemunculan pertama akan melempar `KeyError` — tidak ada yang bisa ditambah satu.

## Soal 5

**Jawaban: 10**

`for buah in keranjang` menelusuri **kunci**-nya: `"apel"`, `"jeruk"`, `"mangga"`. Untuk tiap kunci, `keranjang[buah]` mengambil nilainya:

3 + 5 + 2 = **10**.

Ini yang sering menjebak: perulangan di atas dictionary memberimu **kunci**, bukan nilai. Kalau kamu mau langsung nilainya, tulis `for n in keranjang.values()`. Kalau kamu mau keduanya, `for buah, n in keranjang.items()`. Versi ringkas dari soal ini: `sum(keranjang.values())`.

## Soal 6

**Jawaban: 15**

Kalikan isi yang seposisi, lalu jumlahkan:

| `i` | `a[i]` | `b[i]` | `a[i] * b[i]` |
|---|---|---|---|
| 0 | 2 | 3 | 6 |
| 1 | 5 | 1 | 5 |
| 2 | 1 | 4 | 4 |

6 + 5 + 4 = **15**.

Operasi ini namanya **perkalian titik** (dot product). Ia meringkas "seberapa searah" dua vektor menjadi satu angka. Di Pertemuan 3 kamu memakainya untuk memproyeksikan titik ke sebuah arah; di seleksi kata, kamu memakainya untuk mengukur kemiripan dua kata. Bentuk kodenya selalu sama: kalikan yang seposisi, jumlahkan.

# Catatan pengajar

## Peta soal

| Soal | Bentuk | Keterampilan | Jebakan |
|---|---|---|---|
| 1 | lacak | `d[k]` mengambil lewat nama | mengira urutan penulisan berarti |
| 2 | lacak | `.get(k, 0)` | `d[k]` untuk kunci absen → `KeyError` |
| 3 | pilihan ganda | `.get` cadangan | `.get(k)` memberi `None`, bukan 0 |
| 4 | lacak | pola hitung `get(x,0)+1` | `d[x] += 1` tanpa init → error |
| 5 | lacak | perulangan memberi kunci | mengira loop memberi nilai |
| 6 | lacak | perkalian titik | — |

Soal 3 dan 5 adalah yang paling menentukan. Keduanya tentang satu kesalahpahaman: apa yang sebenarnya kamu pegang. Di Soal 3, `.get(k)` memberi `None`, bukan 0. Di Soal 5, perulangan memberi kunci, bukan nilai. Keduanya tidak melempar error — mereka memberi angka yang salah.

## Cara membaca hasilnya

- **Salah di 2 atau 3** → belum paham beda `d[k]` dan `d.get`. Ini pintu masuk seluruh topik; beresi sebelum lanjut. Lima menit.
- **Salah di 4** → dia belum melihat pola menghitung dengan dictionary. Ini pola paling sering muncul di seleksi (menghitung huruf, menghitung kata). Latih dengan satu contoh kecil di kertas.
- **Salah di 5, menjawab error atau angka aneh** → dia mengira `for x in d` memberi nilai. Tunjukkan `.keys()`, `.values()`, `.items()` berdampingan; biasanya langsung jelas.
- **Benar semua** → langsung Baca Kode 02, yang mengangkat tiap pola ini ke bentuk yang diam-diam salah.

## Catatan jujur

Set ini bisa dijawab sempurna dengan menyalin kodenya ke Python. Itu bukan kegagalan desain — set **Tulis Kode** memang mengharapkan dia menjalankan kode. Yang ini melatih menebak lebih dulu, dan hanya jujur di atas kertas atau kalau diawasi.
