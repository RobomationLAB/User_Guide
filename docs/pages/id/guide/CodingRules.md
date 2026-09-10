---
title: Aturan pemrograman
---

# Aturan pemrograman

Dokumen ini menjelaskan aturan pemrograman yang harus Anda patuhi saat memprogram robot di RobomationLAB.

> **Catatan**: Pemrograman dengan kode berjalan **khusus Python**, dan blok diubah satu lawan satu menjadi kode Python yang memakai paket Python `robomation`.

> **Urutan**: Dokumen ini disusun dengan urutan aturan inti bersama (1~2) → aturan kode blok (3~5) → aturan kode Python (6~11). Baik saat menghasilkan kode blok maupun kode Python, aturan-aturan ini penting dipatuhi.

<br>

## 1. Batasan konversi satu lawan satu antara blok dan Python {#1}
Penyunting pemrograman blok dan penyunting Python berpadanan satu lawan satu dan dikonversi dua arah secara waktu nyata.

- Blok → Python: blok selalu diubah menjadi kode Python yang sah.
- Python → blok: hanya **kode yang dapat dinyatakan dengan blok** yang dikonversi.

Karena itu, bila Anda menulis kode seperti di bawah ini di penyunting Python, peralihan dari Python ke penyunting pemrograman blok bisa gagal,  
dan dalam hal itu alasan kegagalannya juga ditampilkan.

1) Kode yang memuat galat sintaks Python
2) Kode yang memakai fungsi, metode, atau sintaks yang tidak berpadanan dengan blok (tidak didefinisikan dalam aturan konversi)

Agar peralihan ke penyunting pemrograman blok tetap lancar,  
Anda harus menulis kode dalam batas kelas, metode, fungsi, dan sintaks yang didefinisikan dalam dokumen ini serta dokumen tiap robot.

<br>

## 2. Aturan penyajian kode {#2}
Hanya kelas, metode, dan fungsi yang tercantum dalam **manual API Python robomation** dan **dokumen aturan konversi blok ↔ Python** yang boleh dipakai.  
Saat mengendalikan robot, membuat lalu memakai metode pengendali robot baru yang tidak didefinisikan dalam dokumen di atas benar-benar dilarang.
Hanya bila pengguna meminta pembuatan fungsi baru, hal itu diperbolehkan.

Variabel sementara yang tidak muncul dalam contoh konversi pada dokumen di atas (misalnya variabel tambahan selain variabel penampung instans robot) hanya boleh dideklarasikan bila pengguna meminta pembuatan variabel.  
Selain itu, nilai yang diberikan ke metode wajib ditulis sebagai literal.  

```python
# Contoh benar
hamster_s.set_wheel_speed('both', 100)

# Contoh salah - memakai fungsi yang tidak ada di manual API
hamster_s.set_wheel('both', 100)

# Contoh salah - mendeklarasikan variabel sembarangan
SPEED = 100
hamster_s.set_wheel_speed('both', SPEED)
```

<br>

## 3. Struktur dasar kode blok {#3}
Saat menyajikan kode blok, struktur dasar berupa blok fungsi tingkat teratas yang menjadi titik masuk program, yaitu fungsi setup dan fungsi loop, selalu disertakan.  
Dengan aturan ini, semua kode blok selanjutnya memiliki struktur dasar seperti di bawah ini.

| Struktur blok (Block Composer) | Cara penyajian (bentuk teks) |
| --- | --- |
| fungsi setup | fungsi setup |
| (blok di dalamnya) | (blok di dalamnya) |
| fungsi loop | fungsi loop |
| (blok di dalamnya) | (blok di dalamnya) |

<br>

## 4. Format kode blok (aturan ganti baris dan indentasi) {#4}
- Blok tingkat teratas (fungsi setup, fungsi loop, dan sebagainya) dirata kiri.
- Tiap blok perintah wajib dipisah dengan karakter ganti baris, dan satu baris hanya boleh memuat satu blok.
- Blok anak yang berada di dalam blok yang punya area eksekusi (jika, ulangi, definisi fungsi, dan sebagainya) diberi indentasi agar struktur bertingkatnya terlihat jelas.

<br>

## 5. Aturan penulisan blok di dalam dan kondisi {#5}
Nilai yang dipilih dari menu daftar turun atau nilai yang dimasukkan adalah argumen fungsional blok; nilai itu ditulis langsung di dalam kurung siku ([]) tepat pada posisinya di dalam kalimat blok.  
Dengan begitu kalimat khas blok dan nilai yang dipilih/dimasukkan pengguna digabungkan lalu ditampilkan ulang secara visual.

Semua kode blok harus disajikan dengan menyertakan nama khas blok, nilai yang dipilih dari daftar turun, dan nilai yang dimasukkan pengguna, semuanya di dalam kurung siku ([]),  
sehingga bentuk blok yang sebenarnya di Block Composer ditampilkan ulang dalam teks semirip mungkin.  

| Struktur blok (Block Composer) | Cara penyajian (bentuk teks) |
| --- | --- |
| jika [kondisi] kerjakan [perintah] jika tidak [perintah] | jika [kondisi] kerjakan [perintah] jika tidak [perintah] |
| RaccoonBot: atur ke mode kontrol [kecepatan] | RaccoonBot: atur ke mode kontrol [kecepatan] |
| RaccoonBot: atur kecepatan sendi [1] ke [100] | RaccoonBot: atur kecepatan sendi [1] ke [100] |

<br>

## 6. Struktur dasar kode Python {#6}
Saat menyajikan kode Python, struktur dasar berupa fungsi setup() dan loop() yang menjadi titik masuk program selalu disertakan.  
Selain itu, agar kelas/utilitas yang diperlukan untuk mengendalikan robot dapat dipakai, `from robomation import *` diletakkan di bagian paling atas kode dan robot yang dipakai dideklarasikan sebagai instans.  
Dengan aturan ini, semua kode Python selanjutnya memiliki struktur dasar seperti di bawah ini.

```python
# Struktur dasar kode Python
from robomation import *

# (bila ada robot yang dipakai, deklarasikan sebagai instans, contoh)
hamster_s = HamsterS(0)

# letakkan kode setup di sini, untuk dijalankan sekali:
def setup():
    pass

# letakkan kode kontrol di sini, untuk dijalankan berulang kali:
def loop():
    pass
```

<br>

## 7. Format kode Python (aturan ganti baris dan indentasi) {#7}
- Fungsi tingkat teratas (setup, loop, dan sebagainya) dirata kiri.
- Indentasi yang muncul saat ganti baris wajib memakai **1 tab (`\t`)**. (sama dengan ukuran indentasi penyunting)

<br>

## 8. Aturan pengendalian robot (instans / metode) {#8}
Saat mengendalikan robot, Anda harus mematuhi aturan berikut.  

1) Letakkan `from robomation import *` di bagian paling atas kode.
2) Deklarasikan robot yang dipakai sebagai instans. Nama variabelnya memakai nama variabel bawaan tiap robot, dan indeksnya mulai dari 0.
3) Panggil metode instans yang sudah dideklarasikan untuk mengendalikan robot.

```python
from robomation import *

hamster_s = HamsterS(0)

def setup():
    hamster_s.set_wheel_speed('both', 50)

def loop():
    pass
```

> Bila memakai beberapa robot sejenis, naikkan indeksnya menjadi 0, 1, 2 … saat mendeklarasikannya. (contoh: `hamster_s = HamsterS(0)`, `hamster_s_1 = HamsterS(1)`)

Pengaturan kecepatan roda, gerakan, dan sebagainya sudah menangani sendiri persiapan yang diperlukan di dalam metodenya (misalnya membereskan perintah gerak sebelumnya), jadi Anda tidak perlu menulis kode persiapan tambahan.

<br>

## 9. Aturan pemanggilan fungsi utilitas {#9}
Fungsi utilitas umum seperti jeda waktu, memutar suara, mencatat log, dan warna dipanggil lewat metode kelas `Utils`.  

```python
Utils.wait(1)  # (detik)
Utils.play_sound('', 100, False)
Utils.log(0, '', '')
```

Lihat daftar terperinci fungsi utilitas di dokumen berikut.
- [Warna](../common/Color)
- [Audio](../common/Audio)
- [Kontrol](../common/Control)

<br>

## 10. Aturan mengutamakan metode khusus robot {#10}
Saat mengendalikan perangkat keras robot (kecepatan roda, LED, suara, dan sebagainya),  
Anda harus mengutamakan metode khusus milik instans robot (misalnya 'Hamster-S') daripada fungsi utilitas umum.

Misalnya, bila Anda perlu mengeluarkan suara lewat robot,  
Anda harus mengutamakan metode `sound_clip()` milik instans 'Hamster-S' daripada fungsi utilitas `Utils.play_sound()`.

```python
# Mengeluarkan suara lewat robot Hamster S. (disarankan)
hamster_s.sound_clip('beep')

# Mengeluarkan suara lewat komputer / tablet / perangkat seluler. (tidak disarankan)
Utils.play_sound('beep', 100, False)
```

<br>

## 11. Aturan import {#11}
Saat menulis kode Python, hanya modul yang diperlukan untuk menjalankan kode yang diimpor.
- Untuk mengendalikan robot, `from robomation import *` disertakan sebagai bawaan di bagian paling atas kode.
- Kode yang memakai `math.` otomatis ditambahi `import math`, dan kode yang memakai `random.` otomatis ditambahi `import random`.
- Selain itu, modul yang tidak diperlukan tidak diimpor.
