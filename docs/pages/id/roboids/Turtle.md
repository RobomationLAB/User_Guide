---
title: Turtle
---

# Turtle

## Deklarasi instans {#instance}

Saat Anda menambahkan blok Turtle ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
turtle = Turtle(0)
# Bila ada beberapa instans
turtle_1 = Turtle(1)
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Mengatur kecepatan roda {#set_wheel_speed}

Mengatur kecepatan roda. Rentang kecepatan rodanya dari -100 sampai 100.

<BlockImage module="roboids/Turtle" id="set_wheel_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Jenis roda | kiri(left), kanan(right), keduanya(both) | - |
| speed | Nilai masukan (blok) | Kecepatan roda | bilangan bulat -100 sampai 100, 0: berhenti | - |

### Python
```python
turtle = Turtle(0)

turtle.set_wheel_speed('both', 50)
```

## Bergerak sejauh jarak tertentu {#move_distance}

Bergerak sejauh jarak yang ditentukan dengan kecepatan roda saat ini.  
Bila Anda belum mengatur kecepatan roda, robot maju dengan kecepatan bawaan.  
Bila nilai jaraknya 0, robot terus bergerak sesuai kecepatan roda saat ini.  
Bila Anda mencentang tunggu, robot menunggu sampai gerakannya selesai.

<BlockImage module="roboids/Turtle" id="move_distance" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Jarak tempuh | bilangan real 0 atau lebih | - |
| unit | Pilihan daftar turun | Satuan panjang | cm, mm, inci(inch) | cm |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.move_distance(50, 'cm', wait=True)
```

## Bergerak selama waktu tertentu {#move_time}

Bergerak selama waktu yang ditentukan dengan kecepatan roda saat ini.  
Bila Anda belum mengatur kecepatan roda, robot maju dengan kecepatan bawaan.  
Bila Anda mencentang tunggu, robot menunggu sampai gerakannya selesai.

<BlockImage module="roboids/Turtle" id="move_time" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Lama gerakan (detik) | bilangan real 0 atau lebih | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

# wait = TRUE
turtle.move_time(5, wait=True)
# wait = FALSE
turtle.move_time(5, wait=False)
```

## Berputar di tempat {#turn_degree}

Menetapkan arah dan sudut putaran di tempat.  
Bila Anda mencentang tunggu, robot menunggu sampai putarannya selesai.

<BlockImage module="roboids/Turtle" id="turn_degree" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| direction | Pilihan daftar turun | Arah putaran | kiri(left), kanan(right) | - |
| data | Nilai masukan (blok) | Sudut putaran (derajat) | bilangan real 0 atau lebih | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.turn_degree('left', 90, wait=True)
```

## Mengubah kecepatan roda {#change_speed}

Mengubah kecepatan roda Turtle.  
Kecepatan roda yang baru adalah kecepatan saat ini ditambah nilai yang Anda masukkan.

<BlockImage module="roboids/Turtle" id="change_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Jenis roda | kiri(left), kanan(right), keduanya(both) | - |
| speed | Nilai masukan (blok) | Besar perubahan kecepatan | bilangan bulat -200 sampai 200 | - |

### Python
```python
turtle = Turtle(0)

turtle.change_wheel_speed('both', 10)
```

## Berhenti {#stop}

Menghentikan gerakan Turtle.

<BlockImage module="roboids/Turtle" id="stop" />

### Parameter

(tidak ada)

### Python
```python
turtle = Turtle(0)

turtle.stop()
```

## Roda sedang bergerak? {#wheel_moving}

Mengembalikan true bila roda sedang bergerak dan false bila roda sedang diam.

<BlockImage module="roboids/Turtle" id="wheel_moving" />

### Parameter

(tidak ada)

### Python
```python
turtle = Turtle(0)

turtle.wheel_moving()
```

## Berputar mengelilingi roda {#pivot}

Menetapkan pusat putaran, arah, dan sudutnya.  
Bila Anda mencentang tunggu, robot menunggu sampai putarannya selesai.

<BlockImage module="roboids/Turtle" id="pivot" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| base | Pilihan daftar turun | Roda yang jadi pusat putaran | roda kiri(left_wheel), roda kanan(right_wheel) | - |
| direction | Pilihan daftar turun | Arah putaran | maju(forward), mundur(backward) | - |
| data | Nilai masukan (blok) | Sudut putaran (derajat) | bilangan real 0 atau lebih | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot('left_wheel', 'forward', 90, wait=True)
```

## Menggambar lingkaran {#pivot_circle}

Saat menggambar lingkaran dengan pena, menetapkan arah putaran, radius, dan sudutnya.  
Bila Anda mencentang tunggu, robot menunggu sampai putarannya selesai.

<BlockImage module="roboids/Turtle" id="pivot_circle" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| direction | Pilihan daftar turun | Arah putaran | kiri maju(left_forward), kiri mundur(left_backward), kanan maju(right_forward), kanan mundur(right_backward) | - |
| degree | Nilai masukan (blok) | Sudut putaran (derajat) | bilangan real 0 atau lebih | - |
| radius | Nilai masukan (blok) | Radius putaran | bilangan real 0 atau lebih | - |
| unit | Pilihan daftar turun | Satuan radius | cm, mm, inci(inch) | cm |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot_circle('left_forward', 90, 1, 'cm', wait=True)
```

## Mengikuti garis dengan sensor {#trace_line}

Memakai sensor warna di bagian bawah untuk mengikuti garis berwarna tertentu.

<BlockImage module="roboids/Turtle" id="trace_line" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| line | Pilihan daftar turun | Warna garis yang diikuti | hitam(black), merah(red), hijau(green), biru(blue), semua warna(any) | black |

### Python
```python
turtle = Turtle(0)

turtle.trace_line('black')
```

## Mengikuti garis hingga bertemu warna tertentu {#trace_line_until_color}

Memakai sensor warna di bagian bawah untuk mengikuti garis berwarna A sampai bertemu warna B.

<BlockImage module="roboids/Turtle" id="trace_line_until_color" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| line | Pilihan daftar turun | Warna garis yang diikuti | hitam(black), merah(red), hijau(green), biru(blue), semua warna(any) | - |
| color | Pilihan daftar turun | Warna tempat berhenti | hitam(black), merah(red), hijau(green), sian(cyan), biru(blue), magenta(magenta), semua warna(any) | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_line_until_color('black', 'red', wait=True)
```

## Melewati persimpangan lalu berhenti di persimpangan berikutnya {#intersection}

Turtle bergerak ke arah yang ditentukan di persimpangan, lalu terus berjalan sampai bertemu persimpangan berikutnya.  
Bila Anda mencentang tunggu, robot menunggu sampai gerakannya selesai.  

<BlockImage module="roboids/Turtle" id="intersection" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| direction | Pilihan daftar turun | Arah di persimpangan | maju(forward), belok kiri(left), belok kanan(right), putar balik(uturn) | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_intersection('left', wait=True)
```

## Mengatur kecepatan mengikuti garis {#set_trace_speed}

Mengatur kecepatan mengikuti garis. Rentang kecepatannya dari 1 sampai 10.

<BlockImage module="roboids/Turtle" id="set_trace_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Kecepatan mengikuti garis | bilangan bulat 1 sampai 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_speed(5)
```

## Mengatur penguatan pelacakan garis {#set_trace_gain}

Mengatur besar perubahan arah saat mengikuti garis. Rentang perubahannya dari 1 sampai 10.

<BlockImage module="roboids/Turtle" id="set_trace_gain" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Besar perubahan arah | bilangan bulat 1 sampai 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_gain(5)
```

## Berhenti mengikuti garis {#stop_trace}

Mengakhiri fungsi mengikuti garis pada Turtle.

<BlockImage module="roboids/Turtle" id="stop_trace" />

### Parameter

(tidak ada)

### Python
```python
turtle = Turtle(0)

turtle.stop_trace()
```

## Mengatur warna LED {#set_led_color}

Mengatur warna LED kepala Turtle.  
Warna yang Anda pilih di palet warna diubah menjadi **nama warna** (untai teks Inggris) lalu dipanggil dalam bentuk itu. (Kode yang dihasilkan memuat nama warna, bukan tiga angka R, G, B.)

<BlockImage module="roboids/Turtle" id="set_led_color" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| color | Warna | Pilihan di palet warna → diubah menjadi nama warna (Inggris) | Nama warna: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color('red')
```

## Mengatur warna LED dengan blok kategori Warna {#set_led_color_with_block}

Menerima keluaran blok kategori Warna (`[R, G, B]`) sebagai masukan lalu mengatur warna LED kepala.

<BlockImage module="roboids/Turtle" id="set_led_color_with_block" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (warna) | Blok kategori Warna atau larik `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color(*Utils.color('red'))
```

## Mengubah warna LED sebesar RGB {#change_by_rgb}

Menambahkan besar perubahan R, G, B yang Anda masukkan ke warna LED kepala saat ini untuk membentuk warna baru.

<BlockImage module="roboids/Turtle" id="change_by_rgb" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| r | Nilai masukan (bidang) | Besar perubahan merah | bilangan bulat -255 sampai 255 | 0 |
| g | Nilai masukan (bidang) | Besar perubahan hijau | bilangan bulat -255 sampai 255 | 0 |
| b | Nilai masukan (bidang) | Besar perubahan biru | bilangan bulat -255 sampai 255 | 0 |

### Python
```python
turtle = Turtle(0)

turtle.change_led_color(10, 0, 0)
```

## Mematikan LED {#turn_off}

Menghapus warna LED kepala.

<BlockImage module="roboids/Turtle" id="turn_off" />

### Parameter

(tidak ada)

### Python
```python
turtle = Turtle(0)

turtle.turn_off()
```

## Mengatur bunyi dengung {#sound_buzz}

Mengatur bunyi dengung Turtle pada frekuensi yang ditentukan.

<BlockImage module="roboids/Turtle" id="sound_buzz" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| hz | Nilai masukan (blok) | Frekuensi (Hz) | bilangan real 0 sampai 6553,5 | - |

### Python
```python
turtle = Turtle(0)

turtle.sound_buzz(440)
```

## Memainkan nada {#sound_note}

Turtle memainkan nada yang ditentukan.

<BlockImage module="roboids/Turtle" id="sound_note" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| note | Pilihan daftar turun | Nada | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Pilihan daftar turun | Oktaf | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
turtle = Turtle(0)

turtle.sound_note('D', 5)
```

## Memutar klip suara {#sound_clip}

Turtle memutar sebuah klip suara tertentu.

<BlockImage module="roboids/Turtle" id="sound_clip" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| clip | Pilihan daftar turun | Nama klip suara | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'`, dan lain-lain | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.sound_clip('siren', wait=True)
```

## Mematikan suara {#sound_off}

Mematikan suara Turtle.

<BlockImage module="roboids/Turtle" id="sound_off" />

### Parameter

(tidak ada)

### Python
```python
turtle = Turtle(0)

turtle.sound_off()
```

## Suara sedang diputar? {#sound_playing}

Mengembalikan true bila suara sedang diputar dan false bila tidak.

<BlockImage module="roboids/Turtle" id="sound_playing" />

### Parameter

(tidak ada)

### Python
```python
turtle = Turtle(0)

turtle.sound_playing()
```

## Nilai kecepatan roda {#wheel_speed}

Kecepatan roda tertentu

<BlockImage module="roboids/Turtle" id="wheel_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Roda yang dibaca | kiri(left), kanan(right) | - |

### Python
```python
turtle = Turtle(0)

turtle.wheel_speed('left')
```

## Nilai sensor warna lantai {#floor}

Nilai sensor warna di bagian bawah

<BlockImage module="roboids/Turtle" id="floor" />

### Parameter

(tidak ada)

### Python
```python
turtle = Turtle(0)

turtle.floor()
```

## Nama warna kartu {#card_color}

Nama warna kartu yang dibaca lewat sensor warna di bagian bawah

<BlockImage module="roboids/Turtle" id="card_color" />

### Parameter

(tidak ada)

### Python
```python
turtle = Turtle(0)

turtle.card_color()
```

## Pola warna kartu {#card_pattern}

Pola warna kartu yang dibaca lewat sensor warna di bagian bawah

<BlockImage module="roboids/Turtle" id="card_pattern" />

### Parameter

(tidak ada)

### Python
```python
turtle = Turtle(0)

turtle.card_pattern()
```

## Nilai percepatan gravitasi {#acceleration}

Nilai percepatan gravitasi pada sumbu tertentu

<BlockImage module="roboids/Turtle" id="acceleration" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Sumbu yang diukur | x, y, z | - |

### Python
```python
turtle = Turtle(0)

turtle.acceleration('x')
```

## Nilai sensor suhu {#temperature}

Nilai sensor suhu

<BlockImage module="roboids/Turtle" id="temperature" />

### Parameter

(tidak ada)

### Python
```python
turtle = Turtle(0)

turtle.temperature()
```

## Nilai kekuatan sinyal {#signal_strength}

Kekuatan sinyal

<BlockImage module="roboids/Turtle" id="signal_strength" />

### Parameter

(tidak ada)

### Python
```python
turtle = Turtle(0)

turtle.signal_strength()
```

## Tegangan baterai {#battery}

Tegangan baterai

<BlockImage module="roboids/Turtle" id="battery" />

### Parameter

(tidak ada)

### Python
```python
turtle = Turtle(0)

turtle.battery()
```

## Sedang menyentuh warna tertentu? {#color_read}

Mengukur lewat sensor warna Turtle apakah robot sedang menyentuh warna yang ditentukan, lalu mengembalikan **benar (True) / salah (False)**.

<BlockImage module="roboids/Turtle" id="color_read" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| color | Pilihan daftar turun | Nama warna | unknown, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_color('red')
```

## Apakah pola warna kartu adalah ~? {#pattern_read}

Mengembalikan **benar (True) / salah (False)** sesuai apakah pola warna kartu yang dikenali sensor warna cocok atau tidak.

<BlockImage module="roboids/Turtle" id="pattern_read" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| pattern | Pilihan daftar turun | Nama pola kartu | `'red_yellow'`, `'red_green'`, `'blue_red'` | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_pattern('red_yellow')
```

## Keadaan tombol belakang {#button}

Apakah tombol di bagian belakang sedang ditekan atau sudah diklik

<BlockImage module="roboids/Turtle" id="button" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| event | Pilihan daftar turun | Jenis keadaan tombol | ditekan(pressed), diklik(click), diklik lama(long_click) | - |  

### Python
```python
turtle = Turtle(0)

turtle.button('pressed')
```

## Perubahan keadaan {#state_change}

Apakah keadaan robot berubah atau tidak

<BlockImage module="roboids/Turtle" id="state_change" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Jenis keadaan | 0 ~ 5 (lihat tabel di bawah) | - |

| unit | Kondisi |
|------|------|
| 0 | `acceleration('x') > 50` |
| 1 | `acceleration('x') < -50` |
| 2 | `acceleration('y') > 50` |
| 3 | `acceleration('y') < -50` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -30` |

### Python
```python
turtle = Turtle(0)

# unit = 0
turtle.acceleration('x') > 50
```
