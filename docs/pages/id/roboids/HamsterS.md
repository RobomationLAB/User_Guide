---
title: HamsterS
---

# HamsterS

## Deklarasi instans {#instance}

Saat Anda menambahkan blok HamsterS ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
hamster_s = HamsterS(0)
# Bila ada beberapa instans
hamster_s_1 = HamsterS(1)
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Mengatur kecepatan roda {#set_wheel_speed}

Menentukan kecepatan roda. Rentang kecepatannya dari -100 sampai 100.

<BlockImage module="roboids/HamsterS" id="set_wheel_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Jenis roda | kiri(left), kanan(right), keduanya(both) | - |
| speed | Nilai masukan (blok) | Kecepatan roda | bilangan bulat -100 sampai 100, 0: berhenti | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_wheel_speed('both', 50)
```

## Bergerak sejauh jarak tertentu {#move_distance}

Bergerak sejauh jarak yang ditentukan dengan kecepatan roda saat ini.  
Bila Anda belum mengatur kecepatan roda, robot maju dengan kecepatan bawaan.  
Bila nilai jaraknya 0, robot terus bergerak sesuai kecepatan roda saat ini.  
Bila Anda mencentang tunggu, robot menunggu sampai gerakannya selesai.

<BlockImage module="roboids/HamsterS" id="move_distance" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Jarak tempuh | bilangan real 0 atau lebih | - |
| unit | Pilihan daftar turun | Satuan panjang | cm, mm, inci(inch) | cm |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.move_distance(50, 'cm', wait=True)
```

## Bergerak selama waktu tertentu {#move_time}

Bergerak selama waktu yang ditentukan dengan kecepatan roda saat ini.  
Bila Anda belum mengatur kecepatan roda, robot maju dengan kecepatan bawaan.  
Bila Anda mencentang tunggu, robot menunggu sampai gerakannya selesai.

<BlockImage module="roboids/HamsterS" id="move_time" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Lama gerakan (detik) | bilangan real 0 atau lebih | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

# wait = TRUE
hamster_s.move_time(5, wait=True)
# wait = FALSE
hamster_s.move_time(5, wait=False)
```

## Berputar di tempat {#turn_degree}

Menetapkan arah dan sudut putaran di tempat.  
Bila Anda mencentang tunggu, robot menunggu sampai putarannya selesai.

<BlockImage module="roboids/HamsterS" id="turn_degree" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| direction | Pilihan daftar turun | Arah putaran | kiri(left), kanan(right) | - |
| data | Nilai masukan (blok) | Sudut putaran (derajat) | bilangan real 0 atau lebih | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_degree('left', 90, wait=True)
```

## Mengubah kecepatan roda {#change_speed}

Mengubah kecepatan roda HamsterS.  
Kecepatan roda yang baru adalah kecepatan saat ini ditambah nilai yang Anda masukkan.

<BlockImage module="roboids/HamsterS" id="change_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Jenis roda | kiri(left), kanan(right), keduanya(both) | - |
| speed | Nilai masukan (blok) | Besar perubahan kecepatan | bilangan bulat -200 sampai 200 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_wheel_speed('both', 10)
```

## Berhenti {#stop}

Menghentikan gerakan HamsterS.

<BlockImage module="roboids/HamsterS" id="stop" />

### Parameter

(tidak ada)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop()
```

## Roda sedang bergerak? {#wheel_moving}

Mengembalikan true bila roda sedang bergerak dan false bila roda sedang diam.

<BlockImage module="roboids/HamsterS" id="wheel_moving" />

### Parameter

(tidak ada)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_moving()
```

## Maju satu langkah di papan {#grid_move}

Bergerak satu petak demi satu petak di atas papan sesuai aturan yang ditetapkan.

<BlockImage module="roboids/HamsterS" id="grid_move" />

### Parameter

Tidak ada.

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_move()
```

## Berputar sekali di papan {#grid_turn}

Berputar 90 derajat ke arah yang ditentukan di atas papan.

<BlockImage module="roboids/HamsterS" id="grid_turn" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| direction | Pilihan daftar turun | Arah putaran | kiri(left), kanan(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_turn('left')
```

## Berputar mengelilingi pena {#pivot}

Saat memakai dudukan pena, menetapkan pusat putaran, arah, dan sudutnya.  
Bila Anda mencentang tunggu, robot menunggu sampai putarannya selesai.

<BlockImage module="roboids/HamsterS" id="pivot" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| base | Pilihan daftar turun | Pusat putaran | pena kiri(left_pen), pena kanan(right_pen), roda kiri(left_wheel), roda kanan(right_wheel) | - |
| direction | Pilihan daftar turun | Arah putaran | maju(forward), mundur(backward) | - |
| degree | Nilai masukan (blok) | Sudut putaran (derajat) | bilangan real 0 atau lebih | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot('left_pen', 'forward', 90, wait=True)
```

## Menggambar lingkaran mengelilingi pena {#pivot_circle}

Saat menggambar lingkaran dengan dudukan pena, menetapkan pusat putaran, arah, radius, dan sudutnya.  
Bila Anda mencentang tunggu, robot menunggu sampai putarannya selesai.

<BlockImage module="roboids/HamsterS" id="pivot_circle" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| base | Pilihan daftar turun | Pusat putaran | pena kiri(left_pen), pena kanan(right_pen) | - |
| direction | Pilihan daftar turun | Arah putaran | kiri maju(left_forward), kiri mundur(left_backward), kanan maju(right_forward), kanan mundur(right_backward) | - |
| degree | Nilai masukan (blok) | Sudut putaran (derajat) | bilangan real 0 atau lebih | - |
| radius | Nilai masukan (blok) | Radius putaran | bilangan real 0 atau lebih | - |
| unit | Pilihan daftar turun | Satuan radius | cm, mm, inci(inch) | cm |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot_circle('left_pen', 'left_forward', 90, 1, 'cm', wait=True)
```

## Menelusuri garis dengan sensor {#trace_mode}

HamsterS memakai sensor lantai untuk menelusuri garis berwarna tertentu.

<BlockImage module="roboids/HamsterS" id="trace_mode" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| floor | Pilihan daftar turun | Sensor lantai yang dipakai | kiri(left), kanan(right), tengah(center) | - |
| line | Pilihan daftar turun | Warna garis | hitam(black), putih(white) | black |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_line('left', 'black')
```

## Melewati persimpangan lalu berhenti di persimpangan berikutnya {#trace_until_grid}

HamsterS bergerak ke arah yang ditentukan di persimpangan, lalu terus berjalan sampai bertemu persimpangan berikutnya.  
Bila Anda mencentang tunggu, robot menunggu sampai gerakannya selesai.  

<BlockImage module="roboids/HamsterS" id="trace_until_grid" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| direction | Pilihan daftar turun | Arah di persimpangan | belok kiri(left), belok kanan(right), lurus(forward), putar balik(uturn) | - |
| line | Pilihan daftar turun | Warna garis | hitam(black), putih(white) | black |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_intersection('left', 'black', wait=True)
```

## Mengatur kecepatan penelusuran garis {#set_trace_speed}

Mengatur kecepatan penelusuran garis. Rentang kecepatannya dari 1 sampai 10.

<BlockImage module="roboids/HamsterS" id="set_trace_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Kecepatan penelusuran garis | bilangan bulat 1 sampai 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_speed(5)
```

## Mengatur penguatan penelusuran garis {#set_trace_gain}

Mengatur besar perubahan arah saat menelusuri garis. Rentang perubahannya dari 1 sampai 10.

<BlockImage module="roboids/HamsterS" id="set_trace_gain" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Besar perubahan arah | bilangan bulat 1 sampai 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_gain(5)
```

## Menghentikan penelusuran garis {#stop_trace}

Mengakhiri fungsi penelusuran garis HamsterS.

<BlockImage module="roboids/HamsterS" id="stop_trace" />

### Parameter

(tidak ada)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop_trace()
```

## Mengatur warna LED {#set_led_color}

Mengatur warna LED HamsterS.  
Warna yang Anda pilih di palet warna diubah menjadi **nama warna** (untai teks Inggris) lalu dipanggil dalam bentuk itu. (Kode yang dihasilkan memuat nama warna, bukan tiga angka R, G, B.)

<BlockImage module="roboids/HamsterS" id="set_led_color" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | LED yang diatur | kiri(left), kanan(right), keduanya(both) | - |
| color | Warna | Pilihan di palet warna → diubah menjadi nama warna (Inggris) | Nama warna: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', 'red')
```

## Mengatur warna LED dengan blok kategori Warna {#set_led_color_with_block}

Menerima blok kategori Warna (`[R, G, B]`) sebagai masukan lalu mengatur warna LED.

<BlockImage module="roboids/HamsterS" id="set_led_color_with_block" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | LED yang diatur | kiri(left), kanan(right), keduanya(both) | - |
| data | Nilai masukan (warna) | Blok kategori Warna atau larik `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', *Utils.color_rgb(255, 128, 0))
```

## Mengubah warna LED sebesar RGB {#change_by_rgb}

Mengubah warna LED HamsterS sebesar nilai R, G, B yang ditentukan.

<BlockImage module="roboids/HamsterS" id="change_by_rgb" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | LED yang diatur | kiri(left), kanan(right), keduanya(both) | - |
| r | Nilai masukan (bidang) | Besar perubahan merah | bilangan bulat -255 sampai 255 | 0 |
| g | Nilai masukan (bidang) | Besar perubahan hijau | bilangan bulat -255 sampai 255 | 0 |
| b | Nilai masukan (bidang) | Besar perubahan biru | bilangan bulat -255 sampai 255 | 0 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_led_color('both', 10, 0, 0)
```

## Mematikan LED {#turn_off}

Menghapus warna LED.

<BlockImage module="roboids/HamsterS" id="turn_off" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | LED yang dimatikan | kiri(left), kanan(right), keduanya(both) | both |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_off('both')
```

## Mengatur bunyi dengung {#sound_buzz}

Mengatur bunyi dengung HamsterS pada frekuensi yang ditentukan.  
Rentang frekuensi yang dapat dibunyikan adalah 122,1 Hz sampai 4186,0 Hz.  
Bila Anda memasukkan nilai di luar rentang itu, bunyi dengung tidak keluar.

<BlockImage module="roboids/HamsterS" id="sound_buzz" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| hz | Nilai masukan (blok) | Frekuensi (Hz) | bilangan real 122,1 sampai 4186,0 (selain itu 0) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_buzz(440)
```

## Memainkan nada {#sound_note}

HamsterS memainkan nada yang ditentukan.

<BlockImage module="roboids/HamsterS" id="sound_note" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| note | Pilihan daftar turun | Nada | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Pilihan daftar turun | Oktaf | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_note('D', 5)
```

## Memutar klip suara {#sound_clip}

HamsterS memutar sebuah klip suara tertentu.  
Bila Anda mencentang tunggu, robot menunggu sampai pemutarannya selesai.

<BlockImage module="roboids/HamsterS" id="sound_clip" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| clip | Pilihan daftar turun | Nama klip suara | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'happy'`, `'angry'`, `'sad'`, dan lain-lain | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_clip('siren', wait=True)
```

## Mematikan suara {#sound_off}

Mematikan suara HamsterS.

<BlockImage module="roboids/HamsterS" id="sound_off" />

### Parameter

(tidak ada)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_off()
```

## Suara sedang diputar? {#sound_playing}

Mengembalikan true bila suara sedang diputar dan false bila tidak.

<BlockImage module="roboids/HamsterS" id="sound_playing" />

### Parameter

(tidak ada)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_playing()
```

## Nilai kecepatan roda {#wheel_speed}

Kecepatan roda tertentu

<BlockImage module="roboids/HamsterS" id="wheel_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Roda yang dibaca | kiri(left), kanan(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_speed('left')
```

## Nilai sensor jarak {#proximity}

Nilai sensor jarak tertentu

<BlockImage module="roboids/HamsterS" id="proximity" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Letak sensor yang dibaca | kiri(left), kanan(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.proximity('left')
```

## Nilai sensor lantai {#floor}

Nilai sensor lantai tertentu

<BlockImage module="roboids/HamsterS" id="floor" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Letak sensor yang dibaca | kiri(left), kanan(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.floor('left')
```

## Nilai percepatan gravitasi {#acceleration}

Nilai percepatan gravitasi pada sumbu tertentu

<BlockImage module="roboids/HamsterS" id="acceleration" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Sumbu yang diukur | x, y, z | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.acceleration('x')
```

## Nilai sensor kecerahan {#light}

Nilai sensor kecerahan

<BlockImage module="roboids/HamsterS" id="light" />

### Parameter

(tidak ada)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.light()
```

## Nilai sensor suhu {#temperature}

Nilai sensor suhu

<BlockImage module="roboids/HamsterS" id="temperature" />

### Parameter

(tidak ada)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.temperature()
```

## Nilai kekuatan sinyal {#signal_strength}

Kekuatan sinyal

<BlockImage module="roboids/HamsterS" id="signal_strength" />

### Parameter

(tidak ada)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.signal_strength()
```

## Tegangan baterai {#battery}

Tegangan baterai

<BlockImage module="roboids/HamsterS" id="battery" />

### Parameter

(tidak ada)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.battery()
```

## Perubahan keadaan {#state_change}

Apakah keadaan robot berubah atau tidak

<BlockImage module="roboids/HamsterS" id="state_change" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Jenis keadaan | 0 ~ 7 (lihat tabel di bawah) | - |

| unit | Arti | Python |
|------|------|--------|
| 0 | Miring ke depan | `acceleration('x') > 5000` |
| 1 | Miring ke belakang | `acceleration('x') < -5000` |
| 2 | Miring ke kiri | `acceleration('y') > 5000` |
| 3 | Miring ke kanan | `acceleration('y') < -5000` |
| 4 | Terbalik | `acceleration('z') > 0` |
| 5 | Tidak terbalik | `acceleration('z') < -3000` |
| 6 | Mendeteksi halangan/tangan | `proximity('left') > 50 or proximity('right') > 50` |
| 7 | Diketuk | `tap()` |

### Python
```python
hamster_s = HamsterS(0)

# unit = 0
hamster_s.acceleration('x') > 5000
# unit = 6
hamster_s.proximity('left') > 50 or hamster_s.proximity('right') > 50
# unit = 7
hamster_s.tap()
```

## Mengatur mode input port masukan keluaran {#io_mode}

Mengatur mode input port IO.

<BlockImage module="roboids/HamsterS" id="io_mode" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port masukan keluaran | a, b, keduanya(both) | - |
| option | Pilihan daftar turun | Mode masukan keluaran | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.io_mode('both', 'analog_input')
```

## Mengatur output port masukan keluaran {#set_output}

Mengatur nilai output port IO yang ditentukan.

<BlockImage module="roboids/HamsterS" id="set_output" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port masukan keluaran | a, b, keduanya(both) | - |
| data | Nilai masukan (blok) | Nilai output | bilangan bulat 0 sampai 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_output('a', 90)
```

## Mengubah output port masukan keluaran {#change_output}

Mengubah nilai output port IO yang ditentukan.

<BlockImage module="roboids/HamsterS" id="change_output" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port masukan keluaran | a, b, keduanya(both) | - |
| data | Nilai masukan (blok) | Besar perubahan nilai output | bilangan bulat | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_output('a', 10)
```

## Membuka / menutup gripper {#gripper}

Membuka atau menutup gripper HamsterS.  
Sesuai nilai unit, salah satu dari dua metode dipanggil.

<BlockImage module="roboids/HamsterS" id="gripper" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Tindakan | buka(open), tutup(close) | - |

### Python
```python
hamster_s = HamsterS(0)

# unit = "open"
hamster_s.open_gripper()
# unit = "close"
hamster_s.close_gripper()
```

## Mengatur sudut penembak {#shooter}

Mengendalikan penembak dengan mengatur sudutnya. Rentang sudutnya dari 0 sampai 180.

<BlockImage module="roboids/HamsterS" id="shooter" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Sudut penembak | bilangan bulat 0 sampai 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.shooter(45)
```

## Nilai input port masukan keluaran {#input}

Mengembalikan nilai input port masukan keluaran HamsterS.

<BlockImage module="roboids/HamsterS" id="input" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port masukan keluaran | a, b | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.get_input('a')
```
