# KNN 01

Sebuah pos pemantau lahan gambut di Kalimantan Selatan menilai petak-petak lahan dan mengelompokkannya sebagai **Rawan** (mudah terbakar) atau **Aman**. Pos ini memakai metode **K-Nearest Neighbors (KNN)**. Untuk menilai petak baru, KNN membandingkannya dengan petak-petak yang kelasnya sudah diketahui, lalu menentukan kelas berdasarkan tetangga yang paling dekat.

## Petunjuk jawaban

Jawaban dapat berupa **angka** atau **nama kelas**.

- Untuk angka, tuliskan nilainya **tanpa pembulatan**. Semua jawaban pada set ini berupa desimal berhenti, misalnya `0.75`. Gunakan titik sebagai pemisah desimal.
- Untuk nama kelas, tuliskan persis seperti pada soal: `Rawan` atau `Aman`.
- Kelas positif pada set ini selalu **Rawan**.

## Rumus cepat

\[
d(p,q)=\sqrt{(p_1-q_1)^2+(p_2-q_2)^2}.
\]

Penskalaan min-maks:

\[
x'=\frac{x-x_{\min}}{x_{\max}-x_{\min}}.
\]

\[
\text{akurasi}=\frac{TP+TN}{TP+TN+FP+FN}.
\]

\[
\text{precision}=\frac{TP}{TP+FP},\qquad
\text{recall}=\frac{TP}{TP+FN}.
\]

---

## Soal 1 — Enam petak yang sudah diketahui

Pos pemantau telah memeriksa enam petak di lapangan, sehingga kelas masing-masing petak sudah diketahui. Setiap petak dicatat menurut dua ciri: **kelembapan tanah** dan **kerapatan vegetasi**, keduanya dalam persen. Data ini akan menjadi pembanding untuk menilai petak baru.

| Petak | Kelembapan (%) | Kerapatan (%) | Kelas |
|---|---:|---:|---|
| R1 | 48 | 44 | Rawan |
| R2 | 20 | 30 | Rawan |
| R3 | 25 | 20 | Rawan |
| A1 | 52 | 34 | Aman |
| A2 | 55 | 45 | Aman |
| A3 | 70 | 60 | Aman |

Hari ini pos mengukur satu petak baru, **petak U**, dengan kelembapan 45% dan kerapatan vegetasi 40%. Kelasnya belum diketahui. Untuk soal ini, hitung jarak U ke R1 menggunakan kedua ciri tersebut.

<figure class="q-image">
<svg viewBox="0 0 470 460" role="img">
  <title>Sebaran enam petak latih dan petak uji U</title>
  <desc>Bidang kelembapan tanah terhadap kerapatan vegetasi. Tiga petak Rawan berupa persegi, tiga petak Aman berupa lingkaran, dan petak uji U berupa bintang di posisi 45 persen kelembapan dan 40 persen kerapatan. Kedua sumbu memakai skala yang sama.</desc>
  <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="12">
    <g stroke="currentColor" opacity="0.12" stroke-width="1">
      <path d="M 100 400 L 100 40 M 160 400 L 160 40 M 220 400 L 220 40 M 280 400 L 280 40 M 340 400 L 340 40 M 400 400 L 400 40"/>
      <path d="M 70 370 L 430 370 M 70 310 L 430 310 M 70 250 L 430 250 M 70 190 L 430 190 M 70 130 L 430 130 M 70 70 L 430 70"/>
    </g>
    <g stroke="currentColor" opacity="0.65" stroke-width="1.4" fill="none">
      <path d="M 70 400 L 430 400"/>
      <path d="M 70 400 L 70 40"/>
    </g>
    <g fill="currentColor" opacity="0.7" text-anchor="middle">
      <text x="100" y="418">20</text><text x="160" y="418">30</text><text x="220" y="418">40</text>
      <text x="280" y="418">50</text><text x="340" y="418">60</text><text x="400" y="418">70</text>
      <text x="250" y="440" opacity="0.9">kelembapan tanah (%)</text>
    </g>
    <g fill="currentColor" opacity="0.7" text-anchor="end">
      <text x="60" y="374">10</text><text x="60" y="314">20</text><text x="60" y="254">30</text>
      <text x="60" y="194">40</text><text x="60" y="134">50</text><text x="60" y="74">60</text>
    </g>
    <text x="22" y="220" fill="currentColor" opacity="0.9" text-anchor="middle" transform="rotate(-90 22 220)">kerapatan vegetasi (%)</text>
    <g fill="#D55E00">
      <rect x="261" y="159" width="14" height="14"/>
      <rect x="93" y="243" width="14" height="14"/>
      <rect x="123" y="303" width="14" height="14"/>
    </g>
    <g fill="currentColor" opacity="0.75" font-size="12">
      <text x="280" y="157">R1</text><text x="112" y="241">R2</text><text x="142" y="301">R3</text>
    </g>
    <g fill="#0072B2">
      <circle cx="292" cy="226" r="7"/>
      <circle cx="310" cy="160" r="7"/>
      <circle cx="400" cy="70" r="7"/>
    </g>
    <g fill="currentColor" opacity="0.75" font-size="12">
      <text x="303" y="244">A1</text><text x="321" y="150">A2</text><text x="411" y="60">A3</text>
    </g>
    <path d="M 250 176 l 4.3 8.8 9.7 1.4 -7 6.8 1.6 9.6 -8.6 -4.5 -8.6 4.5 1.6 -9.6 -7 -6.8 9.7 -1.4 z" fill="currentColor"/>
    <text x="266" y="196" fill="currentColor" font-size="13">U</text>
    <g font-size="12.5" fill="currentColor" opacity="0.85">
      <rect x="78" y="52" width="12" height="12" fill="#D55E00"/><text x="96" y="63">Rawan</text>
      <circle cx="160" cy="58" r="6" fill="#0072B2"/><text x="172" y="63">Aman</text>
      <text x="228" y="63">★ petak uji U</text>
    </g>
  </g>
</svg>
</figure>

Berapa jarak Euclid antara petak U dan petak **R1**?

**Jawaban:** `_____`

---

## Soal 2 — Satu tetangga saja

Pada percobaan pertama, pos memakai **k = 1**. Artinya, petak U mengikuti kelas dari **satu** petak pembanding yang jaraknya paling dekat. Tentukan lebih dahulu petak mana yang paling dekat dengan U.

Gunakan tabel dan gambar pada Soal 1. Kelas apa yang diberikan kepada petak U?

**Jawaban:** `_____`

---

## Soal 3 — Tiga tetangga

Kepala pos menilai keputusan yang hanya bergantung pada satu tetangga kurang dapat diandalkan. Ia mengubah pengaturan menjadi **k = 3**: ambil tiga petak pembanding terdekat, lalu pilih kelas yang jumlahnya paling banyak di antara ketiganya.

Gunakan data yang sama seperti Soal 1. Kelas apa yang sekarang diberikan kepada petak U?

*Petunjuk: untuk mengurutkan tetangga dari yang terdekat, kamu tidak perlu menghitung akar. Jika kuadrat jaraknya lebih kecil, jaraknya juga lebih kecil.*

**Jawaban:** `_____`

---

## Soal 4 — Pos yang menambah alat ukur

Pos pemantau kedua memakai dua ciri yang satuannya berbeda: **kelembapan tanah (%)** dan **jarak petak ke kanal drainase (meter)**. Petak yang lebih jauh dari kanal cenderung lebih basah. Karena skala kedua angka ini jauh berbeda, keduanya perlu disetarakan sebelum jarak antarpetak dibandingkan.

| Petak | Kelembapan (%) | Jarak ke kanal (m) | Kelas |
|---|---:|---:|---|
| P1 | 20 | 900 | Rawan |
| P2 | 30 | 500 | Rawan |
| P3 | 70 | 100 | Aman |
| P4 | 60 | 300 | Aman |

Pada seluruh data pos ini, kelembapan berada pada rentang **20 sampai 70**, sedangkan jarak ke kanal berada pada rentang **100 sampai 900** meter.

Sebuah petak baru, **petak V**, memiliki kelembapan 60% dan jarak ke kanal 700 m.

Gunakan penskalaan min-maks dengan rentang di atas untuk kedua ciri. Setelah itu, terapkan **k = 1** pada data yang sudah diskalakan. Kelas apa yang diberikan kepada petak V?

**Jawaban:** `_____`

---

## Soal 5 — Sepuluh petak yang sudah dicek

Pos menjalankan model KNN pada sepuluh petak lain. Setelah itu, tim lapangan memeriksa setiap petak untuk mengetahui kelas sebenarnya. Tabel berikut membandingkan hasil prediksi model dengan hasil pemeriksaan lapangan.

| Petak | Kelas sebenarnya | Prediksi model |
|---|---|---|
| U1 | Rawan | Rawan |
| U2 | Aman | Aman |
| U3 | Rawan | Aman |
| U4 | Rawan | Rawan |
| U5 | Aman | Rawan |
| U6 | Rawan | Aman |
| U7 | Aman | Aman |
| U8 | Rawan | Rawan |
| U9 | Rawan | Aman |
| U10 | Aman | Aman |

Susun **confusion matrix** (tabel perbandingan prediksi dan kelas sebenarnya) dengan **Rawan** sebagai kelas positif. Kemudian hitung **recall**, yaitu bagian petak yang benar-benar Rawan dan berhasil dikenali model.

**Jawaban:** `_____`

---

## Soal 6 — Laporan akhir musim

Setelah seluruh 20 petak uji diperiksa, hasil model diringkas dalam confusion matrix berikut. Baris menunjukkan kelas sebenarnya, sedangkan kolom menunjukkan prediksi model.

| Aktual ↓ / Prediksi → | Rawan | Aman |
|---|---:|---:|
| **Rawan** | 6 | 6 |
| **Aman** | 2 | 6 |

Hitung **akurasi** model ini.

**Jawaban:** `_____`

---

# Kunci jawaban

## Soal 1

**Jawaban: 5**

Selisih kelembapan \(48-45=3\), selisih kerapatan \(44-40=4\).

\[
d=\sqrt{3^2+4^2}=\sqrt{9+16}=\sqrt{25}=5.
\]

## Soal 2

**Jawaban: Rawan**

Hitung kuadrat jarak dari petak U (45, 40) ke setiap petak latih. Akarnya tidak perlu diambil: urutannya tidak berubah.

| Petak | Selisih | Kuadrat jarak | Kelas |
|---|---|---:|---|
| R1 | (3, 4) | \(9+16=25\) | Rawan |
| A1 | (7, 6) | \(49+36=85\) | Aman |
| A2 | (10, 5) | \(100+25=125\) | Aman |
| R2 | (25, 10) | \(625+100=725\) | Rawan |
| R3 | (20, 20) | \(400+400=800\) | Rawan |
| A3 | (25, 20) | \(625+400=1025\) | Aman |

Yang terdekat adalah **R1** dengan kuadrat jarak 25. Dengan \(k=1\), kelas petak U mengikuti R1, yaitu **Rawan**.

## Soal 3

**Jawaban: Aman**

Tiga petak terdekat menurut tabel pada Soal 2 adalah R1 (25), A1 (85), dan A2 (125).

Hasil pemungutan suaranya adalah 1 Rawan dan 2 Aman. Kelas yang paling banyak muncul adalah **Aman**.

Perhatikan bahwa jawaban ini **berbeda** dari jawaban \(k=1\) pada Soal 2. R1 adalah petak Rawan yang letaknya lebih dekat ke U daripada dua petak Rawan lainnya. Dengan \(k=1\), keputusan hanya mengikuti R1. Dengan \(k=3\), dua petak Aman yang juga dekat ikut diperhitungkan sehingga kelas Aman menjadi mayoritas.

## Soal 4

**Jawaban: Aman**

Skalakan dahulu. Kelembapan dibagi kisaran \(70-20=50\), jarak dibagi kisaran \(900-100=800\).

| Petak | Kelembapan' | Jarak' | Kelas |
|---|---:|---:|---|
| P1 | \((20-20)/50=0\) | \((900-100)/800=1\) | Rawan |
| P2 | \((30-20)/50=0.2\) | \((500-100)/800=0.5\) | Rawan |
| P3 | \((70-20)/50=1\) | \((100-100)/800=0\) | Aman |
| P4 | \((60-20)/50=0.8\) | \((300-100)/800=0.25\) | Aman |
| V | \((60-20)/50=0.8\) | \((700-100)/800=0.75\) | ? |

Kuadrat jarak dari V (0.8, 0.75):

| Petak | Kuadrat jarak | Kelas |
|---|---:|---|
| P4 | \(0^2+0.5^2=0.25\) | Aman |
| P2 | \(0.6^2+0.25^2=0.4225\) | Rawan |
| P3 | \(0.2^2+0.75^2=0.6025\) | Aman |
| P1 | \(0.8^2+0.25^2=0.7025\) | Rawan |

Yang terdekat adalah **P4**, sehingga kelas petak V adalah **Aman**.

Sekarang lihat apa yang terjadi bila penskalaan dilewati dan kuadrat jarak dihitung pada angka aslinya:

| Petak | Kuadrat jarak | Kelas |
|---|---:|---|
| P2 | \(30^2+200^2=40900\) | Rawan |
| P1 | \(40^2+200^2=41600\) | Rawan |
| P4 | \(0^2+400^2=160000\) | Aman |
| P3 | \(10^2+600^2=360100\) | Aman |

Tanpa penskalaan, yang terdekat adalah P2 dan jawabannya menjadi **Rawan** — berlawanan.

Sebabnya bisa dibaca langsung dari angkanya. Terhadap P4, selisih kelembapan V adalah **0**, tetapi selisih jaraknya 400 meter. Terhadap P2, selisih kelembapannya 30 (besar), tetapi selisih jaraknya hanya 200 meter. Karena jarak diukur dalam ratusan meter sedangkan kelembapan dalam puluhan persen, angka meter menelan angka persen: selisih kelembapan 30 poin pun tak terlihat di samping selisih 200 meter. Fitur yang paling menentukan justru diabaikan. Penskalaan mengembalikan keduanya ke rentang 0 sampai 1, sehingga keduanya sama-sama berbicara.

## Soal 5

**Jawaban: 0.5**

Hitung keempat kotak. Kelas positif adalah Rawan.

- **TP** (Rawan, diprediksi Rawan): U1, U4, U8 → **3**
- **FN** (Rawan, diprediksi Aman): U3, U6, U9 → **3**
- **FP** (Aman, diprediksi Rawan): U5 → **1**
- **TN** (Aman, diprediksi Aman): U2, U7, U10 → **3**

| Aktual ↓ / Prediksi → | Rawan | Aman |
|---|---:|---:|
| **Rawan** | 3 | 3 |
| **Aman** | 1 | 3 |

\[
\text{recall}=\frac{TP}{TP+FN}=\frac{3}{3+3}=\frac{3}{6}=0.5.
\]

Recall dihitung dari **baris** Rawan: dari enam petak yang sebenarnya rawan, model hanya menemukan tiga. Separuh petak rawan lolos tanpa tanda.

## Soal 6

**Jawaban: 0.6**

Dari tabel: \(TP=6\), \(FN=6\), \(FP=2\), \(TN=6\).

Akurasi menjumlahkan **dua kotak yang benar** — TP dan TN, yaitu diagonalnya — lalu membaginya dengan seluruh isi tabel.

\[
\text{akurasi}=\frac{TP+TN}{TP+TN+FP+FN}=\frac{6+6}{6+6+2+6}=\frac{12}{20}=0.6.
\]

Jumlahkan dahulu seluruh isi tabel untuk memastikan: \(6+6+2+6=20\), sesuai jumlah petak uji.

Sekarang bandingkan dengan Soal 5. Dua puluh petak ini memuat sepuluh petak yang sama seperti Soal 5, jadi rasionya tidak berubah: recall-nya tetap \(6/12=0.5\).

Jadi model yang sama menghasilkan **dua angka yang berbeda**: akurasi 0.6 dan recall 0.5. Keduanya benar, tetapi menjawab pertanyaan yang berlainan. Akurasi bertanya "berapa bagian tebakan yang benar?" — dan ia ikut menghitung enam petak Aman yang ditebak benar, padahal menebak "Aman" itu mudah. Recall bertanya "berapa bagian petak rawan yang berhasil ditemukan?" — dan jawabannya separuh. Untuk pemantauan kebakaran, angka kedua itulah yang menentukan apakah lahan terbakar atau tidak.

---

# Catatan pengajar

**Satu cerita, enam langkah.** Set ini sengaja dirangkai sebagai satu alur: Soal 1–4 menjadikan siswa sebagai model itu sendiri, Soal 5 menyusun confusion matrix, Soal 6 menilainya. Angka pada Soal 6 adalah tepat dua kali angka Soal 5 — dua puluh petak, bukan sepuluh — sehingga rasionya sama dan siswa dapat memeriksa sendiri bahwa recall tetap 0.5.

**Soal 2 dan 3 adalah pasangan, jangan dipisah.** Keduanya memakai data yang identik dan memberi jawaban yang berlawanan. Inilah inti KNN: \(k\) bukan detail teknis, melainkan penentu jawaban. Kalau siswa menjawab keduanya dengan benar tetapi tidak terkejut, tanyakan langsung: "kok bisa data yang sama memberi dua jawaban?" Jawaban yang dicari adalah R1 — satu petak Rawan yang duduk di tengah wilayah Aman. Dengan \(k=1\), satu titik ganjil menyandera seluruh keputusan.

**Petunjuk kuadrat jarak pada Soal 3 bukan sekadar penghemat waktu.** Kalkulator dilarang di babak Pra-Seleksi dan Seleksi. Dari enam jarak pada Soal 2, hanya satu (\(\sqrt{25}\)) yang berupa bilangan bulat; lima sisanya akar yang tidak bulat. Bila siswa memaksa menghitung akarnya, ia akan terjebak pada \(\sqrt{85}\) dan \(\sqrt{125}\) tanpa alat. Karena mengakar tidak mengubah urutan, seluruh soal selesai dengan penjumlahan dan perkalian saja. Pastikan ia menyadari kenapa hal itu boleh: akar adalah fungsi naik, jadi \(a<b\) berakibat \(\sqrt{a}<\sqrt{b}\).

**Soal 4 adalah satu-satunya soal yang jawabannya berubah karena satuan.** Ini bukan soal aritmetika, melainkan soal tentang apa yang membuat sebuah fitur "besar". Kunci sudah memuat kedua tabel — dengan dan tanpa penskalaan — supaya siswa melihat pembalikannya sendiri. Kalimat yang layak diulang: yang menentukan bukan besarnya angka, melainkan besarnya angka **dibanding rentangnya sendiri**. Selisih 200 meter terdengar besar, tetapi hanya 0.25 dari rentang jarak; selisih 30 poin kelembapan terdengar kecil, tetapi 0.6 dari rentang kelembapan.

**Soal 5 dan 6 adalah pasangan: satu model, dua angka.** Soal 5 meminta recall (0.5), Soal 6 meminta akurasi (0.6) — model yang sama, data yang sama, dua angka berbeda yang dua-duanya benar. Di situlah pelajarannya. Akurasi 0.6 ikut menghitung enam petak Aman yang ditebak benar, padahal menebak "Aman" itu perkara mudah; recall 0.5 mengatakan separuh petak rawan lolos tanpa tanda. Pertanyaan yang layak diajukan setelah keduanya selesai: "angka mana yang akan kamu laporkan kepada kepala pos, dan kenapa?" Inilah alasan silabus menuntut ketiganya dilaporkan, bukan salah satu.

**Batas materi set ini.** Seluruh set hanya memakai apa yang sudah diajarkan di Pertemuan 1 — jarak Euclid, KNN, confusion matrix, akurasi, precision, recall — ditambah penskalaan min-maks, yang sudah ia temui pada bank Evaluasi 02. **F1 sengaja tidak dipakai** karena belum diajarkan. Bila kelak F1 masuk ke materi, tempat alaminya adalah Soal 6: matriks yang sama (\(TP=6\), \(FN=6\), \(FP=2\), \(TN=6\)) memberi precision 0.75, recall 0.5, dan \(F_1=0.6\) — kebetulan sama dengan akurasinya, yang justru menjadikannya bahan diskusi bagus tentang apa yang sebenarnya diukur masing-masing.

**Angka pada set ini dipilih supaya berhenti.** Setiap desimal yang diminta — 0.5, 0.6, 0.25, 0.4225 — adalah desimal berhenti, bukan hasil pembulatan. Sengaja: pemeriksa jawaban menuntut ketelitian penuh, dan pembulatan di tengah jalan adalah jebakan yang sudah berulang kali muncul di bank soal lain. Bila siswa melapor "0.667", ia mengerjakan soal yang berbeda dari yang tertulis — periksa pembacaannya, jangan pembulatannya.
