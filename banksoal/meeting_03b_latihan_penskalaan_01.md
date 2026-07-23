# Penskalaan 01

Sebuah sekolah menyiapkan data siswa untuk sebuah model berbasis jarak. Karena tiap ciri memiliki satuan yang berbeda, nilainya perlu **diskalakan** lebih dahulu agar bisa dibandingkan secara adil. Set ini melatih dua cara penskalaan: **standardisasi (z-score)** dan **penskalaan min-maks**.

## Petunjuk jawaban

Jawaban dapat berupa **angka** atau **nama**.

- Untuk angka, tuliskan nilainya **tanpa pembulatan**. Semua jawaban pada set ini berupa desimal berhenti, misalnya `0.9` atau `-1.5`. Gunakan titik sebagai pemisah desimal, dan tanda `-` untuk nilai negatif.
- Untuk nama, tuliskan persis seperti pada soal, misalnya `Sena`.

## Rumus cepat

Standardisasi (z-score), memakai rata-rata latih \(\mu\) dan simpangan baku latih \(\sigma\):

\[
z=\frac{x-\mu}{\sigma}.
\]

Membalik z-score menjadi nilai asli:

\[
x=\mu+z\,\sigma.
\]

Penskalaan min-maks, memakai nilai terkecil dan terbesar dari data latih:

\[
x'=\frac{x-x_{\min}}{x_{\max}-x_{\min}}.
\]

Kunci setiap penskalaan sama bentuknya: **kurangi sebuah acuan, lalu bagi dengan sebuah rentang.**

---

## Data latih

Dua ciri diringkas dari data latih (data yang dipakai untuk melatih model).

| Ciri | Rata-rata \(\mu\) | Simpangan baku \(\sigma\) | Terkecil | Terbesar |
|---|---:|---:|---:|---:|
| Skor kuis | 70 | 8 | 50 | 90 |
| Waktu pengerjaan (menit) | 60 | 25 | 20 | 120 |

Semua nilai acuan (rata-rata, simpangan baku, terkecil, terbesar) **hanya** dihitung dari data latih ini, lalu dipakai apa adanya untuk data mana pun.

---

## Soal 1 — Standarkan satu nilai

Seorang siswa memperoleh **skor kuis 86**. Ubah skor ini menjadi z-score memakai rata-rata dan simpangan baku latih pada tabel.

**Jawaban:** `_____`

---

## Soal 2 — Skalakan ke rentang 0–1

Ubah skor kuis 86 yang sama menggunakan **penskalaan min-maks** dengan nilai terkecil dan terbesar latih.

**Jawaban:** `_____`

---

## Soal 3 — Nilai dari data uji

Sebuah **skor 58** muncul pada data uji (data yang disembunyikan sampai penilaian akhir). Seorang teman mengusulkan menghitung ulang rata-rata dan simpangan baku dari data uji itu sendiri, lalu memakainya untuk menstandarkan skor 58.

Usulan itu keliru: acuan harus tetap berasal dari data latih, bukan data uji. Standarkan skor 58 dengan cara yang **benar**, yaitu memakai rata-rata dan simpangan baku **latih** (70 dan 8).

**Jawaban:** `_____`

---

## Soal 4 — Membaca mundur

Sebuah skor kuis memiliki z-score **0.25** (relatif terhadap rata-rata latih 70 dan simpangan baku latih 8). Berapa skor aslinya?

**Jawaban:** `_____`

---

## Soal 5 — Di luar rentang latih

Pada data uji muncul skor **98**, lebih tinggi daripada skor terbesar yang pernah dilihat pada data latih (90). Skalakan skor 98 memakai **penskalaan min-maks** dengan nilai terkecil dan terbesar latih (50 dan 90).

**Jawaban:** `_____`

---

## Soal 6 — Penskalaan mengubah tetangga terdekat

Dua siswa dibandingkan dengan seorang siswa acuan **Q** yang skornya 70 dan waktunya 60 menit (keduanya tepat di rata-rata).

| Siswa | Skor kuis | Waktu (menit) |
|---|---:|---:|
| Q (acuan) | 70 | 60 |
| Rani | 86 | 60 |
| Sena | 70 | 85 |

Pertama, hitung kuadrat jarak Rani dan Sena ke Q memakai angka **asli** (tanpa penskalaan). Kemudian standarkan kedua ciri (skor dengan \(\mu=70,\sigma=8\); waktu dengan \(\mu=60,\sigma=25\)) dan hitung ulang kuadrat jaraknya.

Setelah **kedua ciri distandarkan**, siswa mana yang lebih dekat ke Q?

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Jawaban: 2**

\[
z=\frac{86-70}{8}=\frac{16}{8}=2.
\]

Skor 86 berjarak dua simpangan baku di atas rata-rata latih.

## Soal 2

**Jawaban: 0.9**

Rentang latih skor adalah \(90-50=40\).

\[
x'=\frac{86-50}{40}=\frac{36}{40}=0.9.
\]

Nilai yang sama (86) menjadi `2` pada z-score dan `0.9` pada min-maks — dua penggaris berbeda untuk angka yang sama.

## Soal 3

**Jawaban: -1.5**

Gunakan rata-rata dan simpangan baku **latih**, bukan hasil hitung ulang dari data uji.

\[
z=\frac{58-70}{8}=\frac{-12}{8}=-1.5.
\]

Skor 58 berada 1.5 simpangan baku di bawah rata-rata latih.

Kalau rata-rata dan simpangan baku dihitung ulang dari data uji, angka acuan itu sudah "mengintip" data uji. Itulah **kebocoran (leakage)**: informasi yang seharusnya masih tersembunyi ikut menentukan penskalaan. Aturannya tetap: pas (fit) pada data latih, lalu terapkan (transform) pada data uji.

## Soal 4

**Jawaban: 72**

Balik rumusnya:

\[
x=\mu+z\,\sigma=70+(0.25)(8)=70+2=72.
\]

## Soal 5

**Jawaban: 1.2**

\[
x'=\frac{98-50}{40}=\frac{48}{40}=1.2.
\]

Hasil lebih dari 1 **bukan** kesalahan. Artinya nilai itu berada di atas nilai terbesar yang dilihat pada data latih. Min-maks memetakan rentang latih ke 0–1; nilai di luar rentang latih boleh keluar dari 0–1.

## Soal 6

**Jawaban: Sena**

Pada angka asli:

| Siswa | Kuadrat jarak ke Q | |
|---|---|---:|
| Rani | \((86-70)^2+(60-60)^2=256+0\) | 256 |
| Sena | \((70-70)^2+(85-60)^2=0+625\) | 625 |

Tanpa penskalaan, **Rani** lebih dekat (256 < 625).

Setelah distandarkan (skor dibagi 8, waktu dibagi 25):

| Siswa | z-skor | z-waktu | Kuadrat jarak ke Q |
|---|---:|---:|---:|
| Q | \((70-70)/8=0\) | \((60-60)/25=0\) | — |
| Rani | \((86-70)/8=2\) | \((60-60)/25=0\) | \(2^2+0^2=4\) |
| Sena | \((70-70)/8=0\) | \((85-60)/25=1\) | \(0^2+1^2=1\) |

Setelah penskalaan, **Sena** lebih dekat (1 < 4). Jadi jawabannya **Sena** — penskalaan membalik tetangga terdekatnya.

Sebabnya: pada angka asli, selisih waktu Sena 25 menit terlihat lebih besar daripada selisih skor Rani 16 poin, sehingga Sena tampak jauh. Tetapi diukur terhadap sebaran ciri masing-masing, selisih skor 16 poin itu dua simpangan baku, sedangkan selisih waktu 25 menit hanya satu simpangan baku. Penskalaan membuat kedua ciri berbicara dengan takaran yang sama.

---

# Catatan pengajar

**Satu bentuk, empat wajah.** Seluruh set memakai satu bentuk yang sama — *kurangi acuan, bagi rentang* — dalam empat rupa: z-score (Soal 1), min-maks (Soal 2, 5), z-score dari data uji (Soal 3), dan pembacaan mundur (Soal 4). Kalau siswa hafal rumus tetapi bingung memilih acuan/rentang, kembalikan ke kalimat itu.

**Soal 3 adalah soal kebocoran yang menyamar sebagai soal aritmetika.** Jawaban angkanya mudah (−1.5); yang dinilai adalah apakah siswa memakai rata-rata **latih**, bukan rata-rata data uji. Ini menutup materi Pertemuan 3 tentang *fit pada data latih, transform pada data uji*. Bila siswa menghitung ulang statistik dari data uji, angka −1.5 bisa berubah, dan justru di situ kebocorannya.

**Soal 5 sengaja melewati 1.** Banyak siswa mengira min-maks "harus" 0–1 dan menutupi hasil 1.2 sebagai kesalahan. Tegaskan: 0 dan 1 hanya menandai batas data **latih**; data uji boleh melampauinya. Menyensor nilai menjadi 1 justru membuang informasi.

**Soal 6 adalah puncaknya: penskalaan bukan kosmetik.** Ini satu-satunya soal yang jawabannya berubah karena penskalaan. Kunci memuat kedua tabel — sebelum dan sesudah — agar siswa melihat pembalikan Rani→Sena sendiri. Pertanyaan lanjutan yang bagus: "ciri mana yang tadinya menelan ciri lain, dan kenapa?" Jawabannya: pada angka asli, menit dan poin punya rentang berbeda, sehingga selisih yang lebih "besar angkanya" belum tentu lebih penting.

**Semua desimal berhenti — memang disengaja.** Simpangan baku 8 dipilih karena \(1/8=0.125\) berhenti, dan rentang 40 karena hanya memuat faktor 2 dan 5; keduanya membuat setiap hasil berhenti tanpa pembulatan. Pemeriksa jawaban menuntut ketelitian penuh: bila siswa melapor "0.90" atau "-1.50" itu tetap benar, tetapi "0.89" berarti ia salah baca, bukan salah bulat.
