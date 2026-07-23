# Proyeksi PCA 01

Sebuah tim ingin meringkas **dua** nilai ujian menjadi **satu** angka ringkas, dengan cara memproyeksikan setiap siswa ke sebuah arah. Ini langkah inti **PCA**: pusatkan data dahulu (kurangi rata-rata), lalu proyeksikan ke sebuah arah. Set ini melatih pemusatan dan proyeksi memakai arah yang **sudah diberikan** — mencari arah terbaiknya sendiri diserahkan ke materi lanjutan.

## Petunjuk jawaban

Semua jawaban berupa **angka**.

- Tuliskan nilainya **tanpa pembulatan**, memakai titik desimal, misalnya `2.8` atau `-2.8`.
- Pakai tanda `-` untuk nilai negatif.

## Rumus cepat

**Pemusatan (centring):** kurangi rata-rata tiap ciri.

\[
\text{titik terpusat}=(x-\bar x,\; y-\bar y).
\]

**Proyeksi ke arah \(v=(v_1, v_2)\):** kalikan koordinat yang bersesuaian, lalu jumlahkan (hasil kali titik / dot product).

\[
z=v_1\,x+v_2\,y.
\]

Arah pada set ini selalu berupa **vektor satuan** (panjangnya 1), misalnya \((0.6, 0.8)\) karena \(0.6^2+0.8^2=1\).

---

## Data

Tiga siswa, masing-masing dengan nilai Matematika \((x)\) dan Fisika \((y)\).

| Siswa | Matematika \(x\) | Fisika \(y\) |
|---|---:|---:|
| S1 | 2 | 4 |
| S2 | 4 | 6 |
| S3 | 6 | 8 |

---

## Soal 1 — Titik pusat data

Untuk memusatkan data, kita perlu titik rata-ratanya lebih dahulu. Berapa **rata-rata koordinat-x** (nilai Matematika) dari ketiga siswa?

**Jawaban:** `_____`

---

## Soal 2 — Pusatkan satu titik

Titik pusat data adalah \((\bar x, \bar y) = (4, 6)\). Kurangi titik pusat ini dari **S3** \((6, 8)\). Berapa **koordinat-x** S3 setelah dipusatkan?

**Jawaban:** `_____`

---

## Soal 3 — Proyeksikan ke sebuah arah

Setelah dipusatkan, S3 menjadi titik \((2, 2)\). Proyeksikan titik terpusat ini ke arah \(v = (0.6, 0.8)\):

\[
z = 0.6\times 2 + 0.8\times 2.
\]

Berapa nilai \(z\)?

**Jawaban:** `_____`

---

## Soal 4 — Arah yang sama, titik lain

Titik terpusat **S1** adalah \((-2, -2)\). Proyeksikan ke arah yang sama, \(v = (0.6, 0.8)\). Berapa nilai \(z\)?

**Jawaban:** `_____`

---

## Soal 5 — Seberapa lebar sebarannya

Setelah dipusatkan, ketiga siswa menjadi \((-2,-2)\), \((0,0)\), dan \((2,2)\). Proyeksikan **ketiganya** ke arah \(v=(0.6, 0.8)\), lalu hitung **rentang** proyeksinya, yaitu nilai terbesar dikurangi nilai terkecil.

**Jawaban:** `_____`

---

## Soal 6 — Arah lain, sebaran lain

Proyeksikan titik terpusat **S3** \((2, 2)\) ke arah **berbeda**, \(v = (0.8, -0.6)\):

\[
z = 0.8\times 2 + (-0.6)\times 2.
\]

Berapa nilai \(z\)?

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Jawaban: 4**

\[
\bar x=\frac{2+4+6}{3}=\frac{12}{3}=4.
\]

(Untuk lengkapnya, \(\bar y=\frac{4+6+8}{3}=6\), sehingga titik pusatnya \((4,6)\).)

## Soal 2

**Jawaban: 2**

\[
x-\bar x = 6-4 = 2.
\]

(Koordinat-y-nya \(8-6=2\), jadi S3 terpusat = \((2,2)\).)

## Soal 3

**Jawaban: 2.8**

\[
z = 0.6\times 2 + 0.8\times 2 = 1.2 + 1.6 = 2.8.
\]

## Soal 4

**Jawaban: -2.8**

\[
z = 0.6\times(-2) + 0.8\times(-2) = -1.2 - 1.6 = -2.8.
\]

Karena S1 terpusat adalah kebalikan arah dari S3 terpusat, hasilnya sama besar tetapi berlawanan tanda.

## Soal 5

**Jawaban: 5.6**

Proyeksikan ketiga titik terpusat ke \(v=(0.6,0.8)\):

| Titik terpusat | \(z = 0.6x + 0.8y\) |
|---|---:|
| \((-2,-2)\) | \(-1.2-1.6=-2.8\) |
| \((0,0)\) | \(0\) |
| \((2,2)\) | \(1.2+1.6=2.8\) |

Rentang = \(2.8-(-2.8)=5.6\).

Bandingkan dengan arah mendatar \(v=(1,0)\), yang hanya membaca koordinat-x: proyeksinya \(-2, 0, 2\) dengan rentang \(2-(-2)=4\). Arah \((0.6, 0.8)\) mempertahankan sebaran lebih lebar (5.6) daripada arah mendatar (4). Itulah yang dicari PCA: arah yang menjaga sebaran sebesar mungkin.

## Soal 6

**Jawaban: 0.4**

\[
z = 0.8\times 2 + (-0.6)\times 2 = 1.6 - 1.2 = 0.4.
\]

Perhatikan: titik yang sama \((2,2)\) memberi \(2.8\) pada arah \((0.6,0.8)\), tetapi hanya \(0.4\) pada arah \((0.8,-0.6)\). Arah kedua hampir tegak lurus dengan sebaran data, sehingga titik-titik yang tadinya berjauhan menjadi berdempetan (rentangnya hanya \(0.4-(-0.4)=0.8\)). Memilih arah yang salah "memipihkan" data dan membuang sebarannya — persis yang **tidak** diinginkan PCA.

---

# Catatan pengajar

**Alur satu pipa: rata-rata → pusatkan → proyeksikan.** Soal 1 menghitung rata-rata, Soal 2 memusatkan, Soal 3–6 memproyeksikan. Bila siswa mengerjakan berurutan, ia menelusuri seluruh langkah awal PCA tanpa pernah menyentuh matriks kovarians atau vektor eigen.

**Batas materi disengaja: arah selalu diberikan.** Set ini **tidak pernah** meminta siswa mencari arah utama sendiri (itu perlu vektor eigen dan angka \(1/\sqrt2\) yang tak berhenti, dan memang ditunda ke Meeting 8). Yang dilatih hanya mekanik proyeksi — *kalikan pasangan lalu jumlahkan* — yang persis Check 7 pada catatan. Semua arah dipilih sebagai vektor satuan dengan komponen berhenti (0.6/0.8) agar hasilnya selalu berhenti.

**Soal 5 dan 6 adalah inti gagasan PCA.** Soal 5 menunjukkan arah \((0.6,0.8)\) menjaga sebaran (rentang 5.6) lebih baik daripada arah mendatar (4). Soal 6 menunjukkan arah yang hampir tegak lurus \((0.8,-0.6)\) memipihkan data (rentang 0.8). Pertanyaan lanjutan yang bagus: "dari ketiga arah tadi, mana yang paling layak dipilih PCA, dan kenapa?" Jawaban: \((0.6,0.8)\), karena menjaga sebaran paling lebar.

**Kenapa \((0.6,0.8)\), bukan diagonal \((1/\sqrt2,1/\sqrt2)\)?** Data ini sebenarnya terletak pas di diagonal, sehingga arah utama sejatinya adalah diagonal. Tetapi diagonal satuannya memuat \(1/\sqrt2\approx0.707\) yang tak berhenti — tak bisa dijadikan jawaban bertoleransi ketat. \((0.6,0.8)\) dipakai sebagai arah "cukup dekat ke diagonal" yang tetap memberi angka berhenti, sekaligus tetap menyampaikan pelajaran sebaran. Bila mengajar dengan diagonal, sampaikan hasilnya sebagai \(\pm2\sqrt2\) secara lisan, jangan sebagai isian.

**Semua jawaban berbeda dan berhenti.** 4, 2, 2.8, −2.8, 5.6, 0.4 — tidak ada yang berulang, semuanya berhenti. Komponen arah dipilih dari pasangan Pythagoras 3-4-5 (0.6, 0.8) agar setiap hasil kali dengan bilangan bulat pun berhenti.
