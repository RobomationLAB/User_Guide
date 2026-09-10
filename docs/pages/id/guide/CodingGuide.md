---
title: Panduan pemrograman
---

# Panduan pemrograman

Dokumen ini menjelaskan RobomationLAB, platform pendidikan pemrograman robot yang merupakan bagian dari 'mesin eksekusi dan lingkungan penulisan terpadu untuk layanan streaming gerakan robot' yang dikembangkan Robomation.  

Penjelasan terperinci disajikan dengan urutan berikut:
- Ciri utama RobomationLAB
- Cara memprogram robot di RobomationLAB
- Sistem sintaks dasar pemrograman robot di RobomationLAB

<br>

## Daftar isi {#table-of-contents}
1. [Platform pendidikan pemrograman robot RobomationLAB](#platform)  
    1-1) [Program pemrograman robot](#coding-programs)  
    1-2) [Konversi dua arah waktu nyata antara blok dan Python](#block-python-conversion)  
    1-3) [Ciri utama program pemrograman](#features)  
    1-4) [Cara mengendalikan robot secara waktu nyata](#control-method)  

2. [Cara memprogram robot di RobomationLAB](#programming-method)  
    2-1) [Eksekusi berurutan dan eksekusi paralel](#sequential-parallel)  
    2-2) [Fungsi setup](#setup)  
    2-3) [Fungsi loop](#loop)  

3. [Sistem sintaks dasar pemrograman robot di RobomationLAB](#grammar-syntax)  
    3-1) [Mengimpor paket robomation](#import-package)  
    3-2) [Membuat instans robot](#create-instance)  
    3-3) [Metode pengendali robot](#control-methods)  
    3-4) [Membaca sensor dan keadaan](#sensor)  
    3-5) [Mengenali peristiwa](#event)  
    3-6) [Menunggu sampai selesai (wait)](#wait)  
    3-7) [Fungsi utilitas (Utils)](#utils)   

<br><br>

## Platform pendidikan pemrograman robot RobomationLAB {#platform}
RobomationLAB adalah platform yang dirancang khusus untuk **pendidikan perangkat lunak AI dan robotika**,  
menyediakan lingkungan penulisan terpadu berbasis peramban web Chrome untuk pendidikan pemrograman robot bagi siswa SD dan SMP.  

RobomationLAB menyediakan program pendidikan pemrograman robot dengan berbagai cara seperti **pemrograman blok** dan **pemrograman dengan kode**.  
Anda tidak hanya mempelajari teori pemrograman, tetapi juga benar-benar menggerakkan dan mengendalikan robot Robomation,  
sehingga dapat belajar pemrograman dan robot sekaligus.

<br>

### Program pemrograman robot {#coding-programs}

#### Block Composer {#block-composer}
**Block Composer adalah alat yang memudahkan Anda mengendalikan robot perusahaan dengan cepat lewat pemrograman blok sekaligus mempelajari dasar-dasar pengendalian robot.**  

- Lingkungan penulisan yang dirancang khusus untuk komputasi fisik

- Pemula pun mudah membuat kode dengan cara seret dan lepas blok  
- Lingkungan belajar tanpa galat sintaks, mulai dari konsep dasar  
- Otomatis diubah menjadi kode Python  
- Kumpulan blok siap pakai untuk tiap robot dan aneka contoh untuk dicoba  
- Melihat hasilnya seketika dengan menjalankan kode  
- Meningkatkan kemampuan memecahkan masalah dan daya cipta lewat penggabungan blok  
- Umpan balik terbaik lewat analisis kode berbasis AI  

<br>

#### Script Composer {#script-composer}
**Script Composer adalah alat yang memudahkan Anda mengendalikan robot perusahaan dengan cepat lewat pemrograman Python sekaligus mempelajari sintaks Python dan dasar-dasar pemrograman robot.**  

- Penyunting Python

- Pelengkapan kode otomatis dan penyisipan kode per bahasa
- Aneka contoh kode untuk dicoba pada tiap robot
- Melihat hasilnya seketika dengan menjalankan kode
- Umpan balik terbaik lewat analisis kode berbasis AI

<br>

#### Ciri utama program pemrograman {#features}
Ciri utama program pemrograman robot yang disediakan RobomationLAB adalah sebagai berikut.  
1.	Berjalan di peramban web Chrome sehingga tidak terikat sistem operasi
2.	Lewat komunikasi Web Serial, perangkat keras robot dikendalikan langsung melalui dongle USB
3.	Mendukung pengendalian banyak robot sekaligus — tidak ada batasan jenis dan jumlah robot
4.	Saat menyimpan berkas, hasilnya diubah menjadi berkas teks JSON lalu disimpan

<br>

### Cara mengendalikan robot secara waktu nyata {#control-method}
Program pemrograman robot RobomationLAB mengendalikan robot secara waktu nyata melalui tahap-tahap berikut.  
1.	Lewat pemrograman blok atau pemrograman dengan kode,
Anda menulis kode yang menetapkan nilai objek Effector dan Command untuk mengendalikan robot
atau memanfaatkan nilai Sensor dan kejadian Event robot.
2.	Anda menjalankan kode.
3.	Lewat komunikasi Web Serial, paket berisi data Sensor dan Event diterima dari robot
lalu dimasukkan ke objek Device robot.
4.	Kode ditafsirkan secara waktu nyata,
data ditulis ke objek Effector dan Command atau nilai objek Sensor dan Event dibaca.
5.	Paket berisi data objek Device robot dibuat lalu
dikirim ke robot lewat komunikasi Web Serial dan Anda melihat robot benar-benar bekerja.
6.	Selama kode berjalan, tahap 3 sampai 5 diulang setiap sekitar 10 sampai 20 ms.  

<br>

### Konversi dua arah waktu nyata antara blok dan Python {#block-python-conversion}
RobomationLAB menyediakan penyunting pemrograman blok dan penyunting Python sekaligus, dan keduanya disinkronkan dua arah secara waktu nyata.

- Saat Anda menambah, mengubah, atau menghapus blok di penyunting pemrograman blok, perubahan itu langsung muncul di kode Python.
- Sebaliknya, saat Anda mengubah kode di penyunting Python, perubahan itu langsung muncul pada blok.

Karena blok dan kode Python berpadanan satu lawan satu dan dapat dikonversi dua arah,  
Anda dapat menyusun kerangka dengan cepat memakai blok lalu memoles detailnya dengan Python, atau mempelajari sintaks Python sambil membandingkannya dengan blok,  
yakni memprogram secara padu dengan berpindah-pindah antara pemrograman blok dan pemrograman dengan kode.

> Namun, konversi Python → blok hanya berlaku untuk kode yang dapat dinyatakan dengan blok.  
> (Bila sintaksnya salah atau kodenya tidak dapat diubah menjadi blok, peralihan bisa gagal.  
Lihat rinciannya di dokumen [Aturan pemrograman](CodingRules).)

<br>

<br><br>

## Cara memprogram robot di RobomationLAB {#programming-method}

### Eksekusi berurutan dan eksekusi paralel {#sequential-parallel}
Ada dua cara memprogram robot: eksekusi berurutan dan eksekusi paralel.  
Eksekusi berurutan adalah cara mengerjakan tindakan berikutnya setelah satu tindakan selesai; cara ini cocok untuk memprogram perilaku sederhana.  
Misalnya, bila Anda ingin robot maju lalu berhenti dan menyalakan LED, Anda perlu menyusun kode tiap tindakan secara berurutan dan menjalankannya menurut waktu, jadi eksekusi berurutan diperlukan.  

Eksekusi paralel adalah cara mengerjakan beberapa tindakan sekaligus; cara ini diperlukan untuk memprogram perilaku yang lebih rumit dan canggih.  
Misalnya, bila Anda ingin mewujudkan gerakan berjalan pada robot berkaki dua, Anda harus menggerakkan telapak dan kaki robot bersamaan, jadi Anda perlu dapat memprogram secara paralel.

Program pemrograman robot RobomationLAB dibangun di atas struktur setup / loop yang mirip lingkungan pengembangan perangkat keras Arduino,  
dan mendukung eksekusi berurutan sekaligus eksekusi paralel.

<BlockImage module="program/Editor" id="block-structure" />

Saat pertama kali membuka Block Composer, dua blok fungsi kosong muncul di area kerja;  
blok 'fungsi setup' mewakili fungsi `setup`, dan blok 'fungsi loop' mewakili fungsi `loop`.  

Blok diubah menjadi kode Python secara waktu nyata,  
dan kodenya memiliki struktur dasar berikut.  

```python
# Struktur dasar kode Python
from robomation import *

# letakkan kode setup di sini, untuk dijalankan sekali:
def setup():
    pass

# letakkan kode kontrol di sini, untuk dijalankan berulang kali:
def loop():
    pass
```

> Untuk mengendalikan robot, letakkan `from robomation import *` di bagian paling atas kode dan deklarasikan robot yang Anda pakai sebagai instans. (contoh: `hamster_s = HamsterS(0)`)


<br>

### Fungsi setup {#setup}
Fungsi setup hanya dijalankan satu kali, tepat saat Anda 'menjalankan kode'.  
Di fungsi setup biasanya ditulis kode yang memberi nilai awal ke variabel atau mengatur mode dan fungsi robot.  
Misalnya, saat mengendalikan robot yang bergerak dengan roda, Anda dapat mengatur kecepatan awal roda di fungsi setup.  

Bila Anda memerlukan jeda waktu di dalam fungsi, dengan fungsi `Utils.wait(...)` Anda dapat menulis kode yang berjalan menurut urutan waktu seolah-olah sinkron.  
`Utils.wait(...)` menunggu selama waktu (detik) yang Anda tentukan lalu menjalankan kode berikutnya, jadi setelah waktu atau tindakan yang ditetapkan ia bangun dan melanjutkan kode setelahnya.  
Dengan memanfaatkan fitur ini, Anda tidak hanya dapat menjalankan kode secara berurutan sederhana, tetapi juga memprogram robot secara hebat lewat perpaduan dengan fungsi loop yang berperan menjalankan kode secara paralel.

Berikut contoh menulis kode agar robot HamsterS maju 1 detik lalu mundur 1 detik.  
Bila Anda ingin mewujudkannya di dalam fungsi loop yang berjalan paralel, kode penghitungan waktu bercampur dengan kode kendali sehingga kodenya menjadi sangat rumit.  
Sebagai gantinya, dengan memakai fungsi jeda `Utils.wait` di dalam fungsi setup, Anda dapat menulis kode yang berjalan menurut urutan waktu seolah-olah sinkron.  
( Fungsi `Utils.wait` akan dijelaskan lagi nanti di [Fungsi utilitas (Utils)](#utils). )

Contoh kode (Python)  
```python
from robomation import *

hamster_s = HamsterS(0)

# letakkan kode setup di sini, untuk dijalankan sekali:
def setup():
    # Atur kecepatan kedua roda menjadi 50 untuk maju
    hamster_s.set_wheel_speed('both', 50)
    Utils.wait(1)   # tunggu 1 detik
    # Atur kecepatan kedua roda menjadi -50 untuk mundur
    hamster_s.set_wheel_speed('both', -50)
    Utils.wait(1)   # tunggu 1 detik
    hamster_s.stop()

# letakkan kode kontrol di sini, untuk dijalankan berulang kali:
def loop():
    pass
```
( Sintaks instans robot dan metodenya akan dijelaskan lagi nanti di [Sistem sintaks dasar pemrograman robot di RobomationLAB](#grammar-syntax). )


<br>

### Fungsi loop {#loop}
Fungsi loop mendukung eksekusi paralel dan diulang setiap sekitar 10 ms selama kode berjalan.  
Di fungsi loop biasanya ditulis kode yang terus-menerus menetapkan nilai variabel atau mengenali dan menangani peristiwa tertentu pada robot.  

Berikut contoh menulis kode agar kecepatan roda dan warna LED robot HamsterS berubah seiring waktu.  
( Saat mengubah variabel yang dideklarasikan di luar fungsi setup / loop dari dalam fungsi, deklarasikan variabel itu dengan kata kunci `global`. )

```python
from robomation import *

hamster_s = HamsterS(0)
frame = 0

# letakkan kode setup di sini, untuk dijalankan sekali:
def setup():
    global frame
    frame = 0

# letakkan kode kontrol di sini, untuk dijalankan berulang kali:
def loop():
    global frame
    frame += 1  # setiap kali fungsi loop dipanggil, nilai variabel frame bertambah 1

    # Pakai nilai frame yang berubah untuk mengatur kecepatan kedua roda dan nilai RGB kedua LED
    hamster_s.set_wheel_speed('both', frame % 100)
    hamster_s.set_led_color('left', frame % 256, 0, 0)
    hamster_s.set_led_color('right', 0, 0, frame % 256)
```
( Sintaks instans robot dan metodenya akan dijelaskan lagi nanti di [Sistem sintaks dasar pemrograman robot di RobomationLAB](#grammar-syntax). )  

Berikut contoh menulis kode agar LED menyala merah ketika badan robot HamsterS diketuk pelan (Tap).  

```python
from robomation import *

hamster_s = HamsterS(0)

# letakkan kode setup di sini, untuk dijalankan sekali:
def setup():
    pass

# letakkan kode kontrol di sini, untuk dijalankan berulang kali:
def loop():
    # Kenali peristiwa tepat saat tindakan Tap terjadi
    if hamster_s.tap():               # True saat peristiwa dikenali
        hamster_s.set_led_color('both', 'red')   # Nyalakan kedua LED dengan warna merah
    else:
        hamster_s.turn_off('both')               # Matikan kedua LED
```
( Sintaks seperti pengenalan peristiwa (`tap()`) akan dijelaskan lagi nanti di [Sistem sintaks dasar pemrograman robot di RobomationLAB](#grammar-syntax). )  

<br><br>

## Sistem sintaks dasar pemrograman robot di RobomationLAB {#grammar-syntax}
Sistem sintaks dasar yang harus Anda patuhi saat menulis kode di program pemrograman robot RobomationLAB adalah sebagai berikut.  
Pengendalian robot dilakukan lewat paket Python `robomation`;  
Anda membuat robot menjadi instans lalu menulis kode dengan memanggil metode instans itu.

### Mengimpor paket robomation {#import-package}
Agar kelas (robot) dan utilitas (`Utils`) yang diperlukan untuk mengendalikan robot dapat dipakai, sertakan satu baris berikut di bagian paling atas kode.

```python
from robomation import *
```

<br>

### Membuat instans robot {#create-instance}
Deklarasikan robot yang Anda pakai sebagai instans.  
Nama kelas menunjukkan jenis robot, dan angka di dalam kurung menunjukkan indeks instans (mulai dari 0).

```python
hamster_s = HamsterS(0)   # 1 unit Hamster S
```

Nama kelas dan nama variabel bawaan tiap robot adalah sebagai berikut.

| Robot | Nama kelas | Nama variabel bawaan |
| --- | --- | --- |
| Hamster S | HamsterS | hamster_s |
| Hamster | Hamster | hamster |
| Piobot | Pio | pio |
| Turtle | Turtle | turtle |
| Beagle | Beagle | beagle |
| RaccoonBot | RaccoonBot | raccoon |
| Cheese Stick | CheeseStick | cheesestick |

Bila Anda memakai beberapa robot sejenis, naikkan indeksnya menjadi 0, 1, 2 … saat mendeklarasikannya.

```python
hamster_s = HamsterS(0)
hamster_s_1 = HamsterS(1)
```

<br>

### Metode pengendali robot {#control-methods}
Saat mengendalikan robot, Anda memanggil metode instansnya.  
Metode menjalankan tindakan robot seperti mengatur kecepatan roda, bergerak, LED, dan suara.

```python
hamster_s.set_wheel_speed('both', 50)    # Atur kecepatan kedua roda
hamster_s.move_distance(10, 'cm')        # Maju 10 cm
hamster_s.set_led_color('both', 'red')   # Jadikan kedua LED merah
```

Lihat daftar metode yang tersedia dan parameternya untuk tiap robot di dokumen robot itu (misalnya 'Hamster-S').

<br>

### Membaca sensor dan keadaan {#sensor}
Saat membaca nilai sensor atau keadaan robot, Anda juga memanggil metode dan metode itu mengembalikan nilainya.

```python
left = hamster_s.floor('left')        # Baca nilai sensor lantai kiri
dist = hamster_s.proximity('right')   # Baca nilai sensor jarak kanan
```

<br>

### Mengenali peristiwa {#event}
Peristiwa yang muncul karena perubahan keadaan atau perubahan lingkungan dikenali dengan cara  
metode peristiwa yang bersangkutan mengembalikan True tepat pada saat peristiwa itu terjadi.

```python
if hamster_s.tap():        # True tepat saat peristiwa ketukan (Tap) terjadi
    hamster_s.set_led_color('both', 'red')
```

<br>

### Menunggu sampai selesai (wait) {#wait}
Metode yang perlu waktu sampai selesai seperti bergerak, berputar, dan memutar suara punya parameter `wait`.
- `wait=True` (bawaan): menunggu sampai tindakannya selesai lalu menjalankan kode berikutnya.
- `wait=False`: memulai tindakannya lalu langsung melanjutkan kode berikutnya.

```python
hamster_s.move_distance(10, 'cm', wait=True)    # Menunggu sampai gerakannya selesai
hamster_s.move_distance(10, 'cm', wait=False)   # Memulai gerakan lalu langsung menjalankan kode berikutnya
```

<br>

### Fungsi utilitas (Utils) {#utils}
Fungsi umum yang tidak bergantung pada jenis robot seperti jeda waktu, memutar suara, mencatat log, dan warna dipakai lewat metode kelas `Utils`.

```python
Utils.wait(1)              # Tunggu 1 detik
Utils.speak('Halo')        # Putar suara dari teks (TTS)
Utils.log(0, '', '')       # Catat log ke konsol
```

<br>
