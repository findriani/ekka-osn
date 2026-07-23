# Pelatihan 02 — Memperkecil Loss dengan Penurunan Gradien

Jaringan saraf biasanya memiliki banyak parameter, tetapi latihan ini sengaja menyederhanakannya menjadi satu **bobot** \(w\). Besar kesalahan model dinyatakan oleh fungsi loss \(L(w)=(w-4)^2\). Jika \(L(w)\) digambar terhadap \(w\), grafiknya berbentuk U dengan nilai minimum di \(w=4\). Bentuk ini dapat dibayangkan seperti mangkuk, dengan titik minimum di bagian dasarnya. Proses **penurunan gradien** (*gradient descent*) memperbarui \(w\) sedikit demi sedikit agar bergerak menuju titik minimum tersebut. Latihan ini menelusuri dua langkah pembaruan dan menunjukkan akibat laju belajar yang terlalu besar.

## Petunjuk jawaban

Jawaban berupa **angka**, memakai titik desimal bila perlu (misalnya `2.2`) dan tanda `-` untuk negatif (misalnya `-6`). Semua jawaban di latihan ini adalah desimal berhingga.

## Rumus cepat

Aturan **penurunan gradien** dengan laju belajar \(\eta\):

\[
w \leftarrow w - \eta\, L'(w).
\]

Gradien menunjukkan arah kenaikan loss. Agar loss berkurang, parameter diperbarui ke arah yang berlawanan, yang ditunjukkan oleh tanda minus pada rumus. Untuk fungsi loss berbentuk U berikut,

\[
L(w) = (w - 4)^2, \qquad L'(w) = 2(w - 4).
\]

Rumus gradien \(L'(w)\) di atas **sudah diberikan**. Siswa tidak diminta mencari rumus tersebut dengan kalkulus; cukup memasukkan nilai \(w\), menghitung gradien, lalu menerapkan aturan pembaruan.

Laju belajar \(\eta\) mengatur besar setiap langkah. Nilai yang terlalu kecil membuat proses berjalan lambat, sedangkan nilai yang terlalu besar dapat membuat parameter melampaui titik minimum.

---

## Data

Gunakan \(L(w)=(w-4)^2\) dan gradien \(L'(w)=2(w-4)\). Proses dimulai dari \(w_0=1\) dengan laju belajar \(\eta=0.2\). Soal 1–4 mengikuti satu rangkaian pembaruan yang sama.

<figure class="q-image">
<svg viewBox="0 0 460 380" role="img">
  <title>Penurunan gradien bergerak menuju titik minimum</title>
  <desc>Kurva loss berbentuk U, dengan L(w) sama dengan (w minus 4) kuadrat dan titik minimum di w sama dengan 4. Tiga titik menunjukkan parameter yang bergerak menuju minimum: w0 sama dengan 1 dengan loss 9, w1 sama dengan 2.2 dengan loss 3.24, dan w2 sama dengan 2.92 dengan loss 1.166. Panah putus-putus menunjukkan bahwa laju belajar yang terlalu besar membawa parameter dari w sama dengan 1 ke w sama dengan 7, dengan loss yang sama besar.</desc>
  <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="13">
    <g stroke="currentColor" opacity="0.6" stroke-width="1.4" fill="none">
      <path d="M 60 40 L 60 330"/>
      <path d="M 60 330 L 440 330"/>
    </g>
    <g stroke="currentColor" opacity="0.1" stroke-width="1" fill="none">
      <path d="M 60 233 L 440 233 M 60 137 L 440 137"/>
      <path d="M 250 40 L 250 330"/>
    </g>
    <g fill="currentColor" opacity="0.75" text-anchor="middle">
      <text x="60" y="348">0</text><text x="250" y="348">4</text><text x="440" y="348">8</text>
      <text x="250" y="368">w  (parameter model)</text>
    </g>
    <g fill="currentColor" opacity="0.75" text-anchor="end">
      <text x="50" y="334">0</text><text x="50" y="237">3</text><text x="50" y="141">6</text><text x="50" y="44">9</text>
    </g>
    <text x="22" y="185" fill="currentColor" opacity="0.85" text-anchor="middle" transform="rotate(-90 22 185)">loss L(w)</text>
    <path d="M 107.5,40.0 131.2,128.6 155.0,201.1 178.8,257.5 202.5,297.8 226.2,321.9 250.0,330.0 273.8,321.9 297.5,297.8 321.2,257.5 345.0,201.1 368.8,128.6 392.5,40.0"
      fill="none" stroke="#0072B2" stroke-width="2.6"/>
    <path d="M 120 46 C 180 90, 200 150, 196 285" stroke="#D55E00" stroke-width="1.6" fill="none" stroke-dasharray="6 5" opacity="0.6" marker-end="url(#gdar)"/>
    <path d="M 116 40 Q 250 12 386 40" stroke="#D55E00" stroke-width="1.8" fill="none" stroke-dasharray="7 5" opacity="0.7" marker-end="url(#gdar)"/>
    <text x="250" y="20" fill="#D55E00" text-anchor="middle" font-size="12">η terlalu besar: lompat ke seberang (loss sama)</text>
    <circle cx="107.5" cy="40.0" r="6.5" fill="#E69F00"/><text x="72" y="36" fill="currentColor" font-size="12.5">w₀=1</text>
    <circle cx="164.5" cy="225.6" r="6.5" fill="#E69F00"/><text x="120" y="222" fill="currentColor" font-size="12.5">w₁=2.2</text>
    <circle cx="198.7" cy="292.4" r="6.5" fill="#E69F00"/><text x="150" y="308" fill="currentColor" font-size="12.5">w₂=2.92</text>
    <path d="M 260 322 L 258 332 L 262 332 Z" fill="#009E73"/>
    <circle cx="250" cy="330" r="6.5" fill="#009E73"/><text x="262" y="326" fill="#009E73" font-size="12.5">dasar (w=4)</text>
    <defs>
      <marker id="gdar" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
        <path d="M0,0 L7,3 L0,6 Z" fill="#D55E00"/>
      </marker>
    </defs>
  </g>
</svg>
</figure>

---

## Soal 1 — Gradien di titik awal

Substitusikan nilai awal \(w=1\) ke rumus \(L'(w)=2(w-4)\). Berapa nilai gradien pada titik awal?

**Jawaban:** `_____`

---

## Soal 2 — Satu langkah penurunan gradien

Gunakan gradien dari Soal 1 dan laju belajar \(\eta=0.2\) pada aturan \(w\leftarrow w-\eta L'(w)\). Hitung nilai parameter baru \(w_1\).

**Jawaban:** `_____`

---

## Soal 3 — Apakah loss turun?

Nilai parameter setelah langkah pertama adalah hasil Soal 2. Masukkan nilai itu ke \(L(w)=(w-4)^2\), lalu hitung loss yang baru. Sebagai pembanding, loss awal adalah \(L(1)=9\).

**Jawaban:** `_____`

---

## Soal 4 — Langkah kedua

Mulai dari \(w_1=2.2\). Hitung gradien \(L'(2.2)\), kemudian lakukan satu pembaruan lagi dengan \(\eta=0.2\). Tuliskan nilai parameter setelah langkah kedua, yaitu \(w_2\).

**Jawaban:** `_____`

---

## Soal 5 — Laju belajar terlalu besar

Mulai kembali dari \(w=1\), tetapi gunakan laju belajar yang lebih besar, yaitu \(\eta=1\). Hitung nilai \(w\) setelah satu pembaruan, kemudian hitung \(L(w)\) pada posisi baru tersebut. **Jawaban akhir yang diminta adalah nilai loss**, untuk dibandingkan dengan loss awal \(L(1)=9\).

**Jawaban:** `_____`

---

## Soal 6 — Menentukan titik minimum

Titik minimum fungsi ini terjadi ketika gradiennya bernilai 0. Selesaikan \(L'(w)=2(w-4)=0\). Pada nilai \(w\) berapa kondisi tersebut tercapai?

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Jawaban: -6**

\[
L'(1) = 2(1 - 4) = 2(-3) = -6.
\]

Gradien negatif berarti loss **menurun** bila \(w\) diperbesar — jadi langkah berikutnya seharusnya menaikkan \(w\).

## Soal 2

**Jawaban: 2.2**

\[
w \leftarrow 1 - 0.2\,(-6) = 1 + 1.2 = 2.2.
\]

Tanda minus pada aturan bertemu gradien negatif menjadi plus, sehingga \(w\) bergerak naik menuju dasar (di \(w = 4\)).

## Soal 3

**Jawaban: 3.24**

\[
L(2.2) = (2.2 - 4)^2 = (-1.8)^2 = 3.24.
\]

Turun dari \(L(1) = 9\) menjadi 3.24 — satu langkah penurunan gradien memang menurunkan loss.

## Soal 4

**Jawaban: 2.92**

\[
L'(2.2) = 2(2.2 - 4) = 2(-1.8) = -3.6,
\]
\[
w \leftarrow 2.2 - 0.2\,(-3.6) = 2.2 + 0.72 = 2.92.
\]

Perhatikan bahwa ukuran langkah semakin **kecil**, dari \(+1.2\) menjadi \(+0.72\). Ketika parameter mendekati titik minimum, besar gradien mengecil sehingga pembaruannya juga mengecil. Loss kembali menurun: \(L(2.92)=(-1.08)^2=1.1664\).

## Soal 5

**Jawaban: 9**

\[
w \leftarrow 1 - 1\,(-6) = 7, \qquad L(7) = (7 - 4)^2 = 3^2 = 9.
\]

Loss **tidak menurun**; nilainya tetap 9, sama seperti pada titik awal. Langkah yang terlalu besar melompati titik minimum dan mencapai sisi lain kurva pada ketinggian yang sama, seperti ditunjukkan oleh panah putus-putus pada gambar. Jika \(\eta\) diperbesar lagi, loss dapat meningkat dan parameter dapat semakin menjauh dari titik minimum. Sebagai pembanding, \(\eta=0.5\) akan membawa parameter tepat ke \(w=4\).

## Soal 6

**Jawaban: 4**

\[
L'(w) = 2(w - 4) = 0 \;\Longleftrightarrow\; w = 4.
\]

Pada \(w=4\), gradien bernilai 0 dan \(L(4)=0\). Inilah titik minimum kurva. Dengan laju belajar yang sesuai, pembaruan penurunan gradien bergerak secara bertahap menuju titik tersebut.

---

# Catatan pengajar

**Satu rangkaian langkah yang dapat ditelusuri.** Soal 1–4 menyusun dua langkah lengkap penurunan gradien: hitung gradien → perbarui parameter → periksa perubahan loss → lakukan langkah berikutnya. Nilai \(c=4\), \(w_0=1\), dan \(\eta=0.2\) dipilih agar hasil perhitungannya sederhana, yaitu \(-6\), 2.2, 3.24, 2.92, dan 1.1664, sehingga seluruh rangkaian dapat dikerjakan tanpa kalkulator.

**Kalkulus tidak dituntut.** Rumus gradien \(L'(w) = 2(w-4)\) sudah diberikan; tujuan latihan ini adalah **menerapkan** aturan pembaruan, bukan menurunkan rumus gradien. Disarankan mengerjakan **Soal 1–2 bersama di kelas** sebagai satu contoh utuh, lalu memberikan sisanya (Soal 3–6) sebagai latihan mandiri.

**Soal 4 menunjukkan bahwa besar langkah dapat mengecil.** Karena gradien mengecil saat mendekati dasar, ukuran langkah menurun tanpa perlu mengubah \(\eta\). Tunjukkan ini — banyak siswa mengira laju belajar tetap berarti langkah tetap.

**Soal 5 memperlihatkan langkah yang melampaui titik minimum.** Nilai \(\eta=1\) memindahkan \(w\) dari 1 ke 7. Kedua posisi berjarak 3 satuan dari titik minimum, sehingga loss-nya sama, yaitu 9. Contoh ini menunjukkan bahwa laju belajar yang lebih besar tidak selalu mempercepat perbaikan model. Sebagai pembanding, \(\eta=0.5\) membawa parameter tepat ke \(w=4\). Dengan demikian, laju belajar dapat terlalu kecil, sesuai, atau terlalu besar.

**Soal 6 menutup gagasan konvergensi.** Pada contoh ini, dasar kurva adalah titik dengan gradien nol dan loss minimum. Penurunan gradien merupakan cara mencari titik minimum secara bertahap. Cara ini penting pada jaringan saraf yang memiliki jutaan parameter, ketika titik minimum tidak dapat ditemukan dengan menyelesaikan satu persamaan sederhana secara manual.

**Semua jawaban berbeda:** \(-6, 2.2, 3.24, 2.92, 9, 4\). Loss awal \(L(1)=9\) digunakan sebagai pembanding pada Soal 3 dan 5. Pada Soal 5, parameter berpindah ke sisi lain titik minimum tetapi kembali menghasilkan loss 9; langkah besar itu tidak memperbaiki model.
