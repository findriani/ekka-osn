# K-Means 01

Sebuah aplikasi antar-makanan mengelompokkan titik **kedai** menjadi dua wilayah layanan memakai **K-Means**. Setiap kedai punya dua koordinat, \((x, y)\), pada peta kota. Dua **pusat** (centroid) menandai dua kelompok. Set ini melatih satu putaran penuh K-Means: menghitung jarak, menempatkan tiap titik ke pusat terdekat, lalu memperbarui pusat.

## Petunjuk jawaban

Jawaban dapat berupa **angka** atau **nama pusat**.

- Untuk angka, tuliskan nilainya **tanpa pembulatan**, memakai titik desimal bila perlu, misalnya `4.5`.
- Untuk nama pusat, tuliskan `P1` atau `P2` persis.

## Rumus cepat

Kuadrat jarak antara titik \((x,y)\) dan pusat \((a,b)\):

\[
d^2=(x-a)^2+(y-b)^2.
\]

Untuk mencari pusat **terdekat**, cukup bandingkan kuadrat jaraknya — tidak perlu mengambil akar, karena kuadrat yang lebih kecil selalu berarti jarak yang lebih kecil.

Memperbarui pusat = **rata-rata koordinat** semua titik anggotanya (rata-rata x sendiri, rata-rata y sendiri).

---

## Data

Enam kedai dan dua pusat awal.

| Kedai | x | y |
|---|---:|---:|
| A | 1 | 1 |
| B | 3 | 1 |
| C | 2 | 4 |
| D | 4 | 2 |
| E | 7 | 4 |
| F | 9 | 5 |

Pusat awal: **P1** di \((2, 2)\) dan **P2** di \((8, 4)\).

<figure class="q-image">
<svg viewBox="0 0 480 390" role="img">
  <title>Sebaran enam kedai dan dua pusat awal</title>
  <desc>Bidang koordinat x terhadap y. Enam kedai A sampai F sebagai titik, serta dua pusat P1 di (2,2) dan P2 di (8,4) sebagai belah ketupat. Kedua sumbu memakai skala yang sama.</desc>
  <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="12">
    <g stroke="currentColor" opacity="0.12" stroke-width="1">
      <path d="M 142 340 L 142 64 M 214 340 L 214 64 M 286 340 L 286 64 M 358 340 L 358 64 M 430 340 L 430 64"/>
      <path d="M 70 248 L 430 248 M 70 156 L 430 156 M 70 64 L 430 64"/>
    </g>
    <g stroke="currentColor" opacity="0.65" stroke-width="1.4" fill="none">
      <path d="M 70 340 L 430 340"/>
      <path d="M 70 340 L 70 64"/>
    </g>
    <g fill="currentColor" opacity="0.7" text-anchor="middle">
      <text x="70" y="358">0</text><text x="142" y="358">2</text><text x="214" y="358">4</text>
      <text x="286" y="358">6</text><text x="358" y="358">8</text><text x="430" y="358">10</text>
      <text x="250" y="378" opacity="0.9">koordinat x</text>
    </g>
    <g fill="currentColor" opacity="0.7" text-anchor="end">
      <text x="60" y="344">0</text><text x="60" y="252">2</text><text x="60" y="160">4</text><text x="60" y="68">6</text>
    </g>
    <text x="20" y="202" fill="currentColor" opacity="0.9" text-anchor="middle" transform="rotate(-90 20 202)">koordinat y</text>
    <g fill="currentColor">
      <circle cx="106" cy="294" r="6"/><circle cx="178" cy="294" r="6"/><circle cx="142" cy="156" r="6"/>
      <circle cx="214" cy="248" r="6"/><circle cx="322" cy="156" r="6"/><circle cx="394" cy="110" r="6"/>
    </g>
    <g fill="currentColor" opacity="0.8" font-size="12.5">
      <text x="114" y="290">A</text><text x="186" y="290">B</text><text x="150" y="150">C</text>
      <text x="222" y="244">D</text><text x="330" y="150">E</text><text x="402" y="106">F</text>
    </g>
    <path d="M 142 239 L 151 248 L 142 257 L 133 248 Z" fill="#0072B2"/>
    <path d="M 358 147 L 367 156 L 358 165 L 349 156 Z" fill="#D55E00"/>
    <g fill="currentColor" opacity="0.85" font-size="12.5">
      <text x="118" y="244">P1</text><text x="366" y="152">P2</text>
    </g>
    <g font-size="12" fill="currentColor" opacity="0.85">
      <circle cx="86" cy="30" r="5"/><text x="96" y="34">kedai</text>
      <path d="M 150 30 L 157 37 L 150 44 L 143 37 Z" fill="#0072B2"/><text x="162" y="34" fill="currentColor">Pusat P1</text>
      <path d="M 250 30 L 257 37 L 250 44 L 243 37 Z" fill="#D55E00"/><text x="262" y="34" fill="currentColor">Pusat P2</text>
    </g>
  </g>
</svg>
</figure>

---

## Soal 1 — Satu kuadrat jarak

Hitung **kuadrat jarak** kedai **E** \((7, 4)\) ke pusat **P2** \((8, 4)\).

**Jawaban:** `_____`

---

## Soal 2 — Tempatkan kedai A

Kedai **A** \((1, 1)\) ditempatkan ke pusat yang **terdekat**. Bandingkan kuadrat jaraknya ke P1 \((2,2)\) dan ke P2 \((8,4)\). Pusat mana yang terdekat?

**Jawaban:** `_____`

---

## Soal 3 — Tempatkan kedai E

Dengan cara yang sama, pusat mana yang terdekat dengan kedai **E** \((7, 4)\)?

**Jawaban:** `_____`

---

## Soal 4 — Berapa anggota P1

Tempatkan **keenam** kedai (A–F) ke pusat terdekatnya memakai P1 \((2,2)\) dan P2 \((8,4)\). Berapa banyak kedai yang masuk kelompok **P1**?

*Petunjuk: kamu tidak perlu mengambil akar. Bandingkan saja kuadrat jaraknya.*

**Jawaban:** `_____`

---

## Soal 5 — Kedai di garis tengah

Sebuah kedai baru, **G** \((5, 3)\), ingin ditempatkan. Hitung **kuadrat jarak** G ke pusat **P1** \((2, 2)\).

**Jawaban:** `_____`

---

## Soal 6 — Perbarui pusat P2

Setelah penempatan pada Soal 4, kelompok **P2** berisi kedai **E** \((7,4)\) dan **F** \((9,5)\). Perbarui pusat P2 dengan mengambil rata-rata koordinat kedua kedai itu. Berapa **koordinat-y** pusat P2 yang baru?

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Jawaban: 1**

\[
d^2=(7-8)^2+(4-4)^2=(-1)^2+0^2=1+0=1.
\]

## Soal 2

**Jawaban: P1**

| Ke pusat | Kuadrat jarak |
|---|---:|
| P1 \((2,2)\) | \((1-2)^2+(1-2)^2=1+1=2\) |
| P2 \((8,4)\) | \((1-8)^2+(1-4)^2=49+9=58\) |

Kuadrat jarak ke P1 (2) jauh lebih kecil, jadi kedai A masuk **P1**.

## Soal 3

**Jawaban: P2**

| Ke pusat | Kuadrat jarak |
|---|---:|
| P1 \((2,2)\) | \((7-2)^2+(4-2)^2=25+4=29\) |
| P2 \((8,4)\) | \((7-8)^2+(4-4)^2=1+0=1\) |

Kedai E jauh lebih dekat ke **P2** (1 < 29).

## Soal 4

**Jawaban: 4**

Hitung kuadrat jarak setiap kedai ke kedua pusat, lalu pilih yang lebih kecil.

| Kedai | ke P1 \((2,2)\) | ke P2 \((8,4)\) | Masuk |
|---|---:|---:|---|
| A \((1,1)\) | \(1+1=2\) | \(49+9=58\) | P1 |
| B \((3,1)\) | \(1+1=2\) | \(25+9=34\) | P1 |
| C \((2,4)\) | \(0+4=4\) | \(36+0=36\) | P1 |
| D \((4,2)\) | \(4+0=4\) | \(16+4=20\) | P1 |
| E \((7,4)\) | \(25+4=29\) | \(1+0=1\) | P2 |
| F \((9,5)\) | \(49+9=58\) | \(1+1=2\) | P2 |

Kelompok **P1** berisi A, B, C, D → **4** kedai. (P2 berisi E, F → 2 kedai.)

## Soal 5

**Jawaban: 10**

\[
d^2=(5-2)^2+(3-2)^2=9+1=10.
\]

Bandingkan dengan jaraknya ke P2: \((5-8)^2+(3-4)^2=9+1=10\) — **sama persis**. Kedai G berdiri tepat di garis tengah antara kedua pusat, jadi jaraknya seri. Bila terjadi seri, K-Means memakai aturan pemutus, misalnya memilih pusat bernomor lebih kecil (P1). Yang penting kamu sadari bahwa titik seperti ini ada, dan hasilnya bisa berpindah kelompok begitu pusat bergeser sedikit.

## Soal 6

**Jawaban: 4.5**

Kelompok P2 berisi E \((7,4)\) dan F \((9,5)\). Rata-rata tiap koordinat:

\[
x=\frac{7+9}{2}=\frac{16}{2}=8,\qquad
y=\frac{4+5}{2}=\frac{9}{2}=4.5.
\]

Pusat P2 baru = \((8, 4.5)\). Koordinat-y-nya **4.5**. Pusat bergeser dari \((8,4)\) ke \((8, 4.5)\): satu putaran K-Means memang menggeser pusat ke tengah anggotanya.

---

# Catatan pengajar

**Satu putaran, dari jarak sampai pembaruan.** Set ini menyusun satu putaran K-Means secara utuh: Soal 1 melatih satu kuadrat jarak, Soal 2–3 penempatan satu titik, Soal 4 penempatan seluruh titik (langkah *assign*), Soal 6 pembaruan pusat (langkah *update*). Bila siswa lancar keenamnya, ia sudah bisa menjalankan satu putaran penuh sendiri.

**Petunjuk "tanpa akar" bukan basa-basi.** Kalkulator dilarang. Seluruh penempatan selesai dengan penjumlahan dan perkalian saja karena mengakar tidak mengubah urutan. Pastikan siswa membandingkan **kuadrat** jarak, bukan jarak. Ini kebiasaan yang sama seperti pada bank KNN.

**Soal 5 menanam gagasan "seri" dan ketidakstabilan.** G \((5,3)\) sengaja berjarak sama ke kedua pusat (10 dan 10). Gunanya: menunjukkan bahwa penempatan bisa seri, dan sebuah titik di perbatasan mudah berpindah kelompok begitu pusat bergeser. Ini menyiapkan diskusi bahwa hasil K-Means bergantung pada pusat awal.

**Soal 6 dipilih agar berhenti.** Anggota P2 ada dua, sehingga rata-ratanya berhenti (8 dan 4.5). Sengaja: rata-rata tiga bilangan bulat sering menghasilkan pecahan berulang (sepertiga), yang tak bisa dijawab tepat tanpa alat. Bila kelak ingin menambah soal pembaruan, jaga agar jumlah anggota tiap kelompok membuat rata-ratanya berhenti (2 atau 4 anggota aman; 3 anggota berisiko).

**Kelompok P1 tidak diminta diperbarui — sengaja.** Rata-rata P1 \(=(2.5, 2)\): koordinat-x-nya berhenti, tetapi bila ada yang mencoba P1 dengan tiga anggota lain hasilnya bisa tidak berhenti. Soal hanya meminta P2 agar setiap jawaban tetap desimal berhenti.

**Semua jawaban berbeda dan berhenti.** 1, P1, P2, 4, 10, 4.5 — tidak ada angka yang berulang, dan satu-satunya pecahan (4.5) berhenti. Nama pusat ditulis `P1`/`P2` persis; jangan memakai huruf tunggal seperti `A` sebagai jawaban kelompok, karena mudah tertukar dengan nama kedai.
