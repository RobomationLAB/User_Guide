---
title: Piobot
---

# Piobot

## Deklarasi instans {#instance}

Saat Anda menambahkan blok Piobot(Pio) ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
pio = Pio(0)
# Bila ada beberapa instans
pio_1 = Pio(1)
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Mengatur kecepatan roda {#set_wheel_speed}

Mengatur kecepatan roda. Rentang kecepatan rodanya dari -100 sampai 100.

<BlockImage module="roboids/Pio" id="set_wheel_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Jenis roda | kiri(left), kanan(right), keduanya(both) | - |
| speed | Nilai masukan (blok) | Kecepatan roda | bilangan bulat -100 sampai 100, 0: berhenti | - |

### Python
```python
pio = Pio(0)

pio.set_wheel_speed('both', 50)
```

## Bergerak sejauh jarak tertentu {#move_distance}

Bergerak sejauh jarak yang ditentukan dengan kecepatan roda saat ini.  
Bila Anda belum mengatur kecepatan roda, robot maju dengan kecepatan bawaan.  
Bila nilai jaraknya 0, robot terus bergerak sesuai kecepatan roda saat ini.  
Bila Anda mencentang tunggu, robot menunggu sampai gerakannya selesai.

<BlockImage module="roboids/Pio" id="move_distance" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Jarak tempuh | bilangan real 0 atau lebih | - |
| unit | Pilihan daftar turun | Satuan panjang | cm, mm, inci(inch) | cm |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.move_distance(50, 'cm', wait=True)
```

## Bergerak selama waktu tertentu {#move_time}

Bergerak selama waktu yang ditentukan dengan kecepatan roda saat ini.  
Bila Anda belum mengatur kecepatan roda, robot maju dengan kecepatan bawaan.  
Bila Anda mencentang tunggu, robot menunggu sampai gerakannya selesai.

<BlockImage module="roboids/Pio" id="move_time" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Lama gerakan (detik) | bilangan real 0 atau lebih | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# wait = TRUE
pio.move_time(5, wait=True)
# wait = FALSE
pio.move_time(5, wait=False)
```

## Berputar di tempat {#turn_degree}

Menetapkan arah dan sudut putaran di tempat.  
Bila Anda mencentang tunggu, robot menunggu sampai putarannya selesai.

<BlockImage module="roboids/Pio" id="turn_degree" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| direction | Pilihan daftar turun | Arah putaran | kiri(left), kanan(right) | - |
| data | Nilai masukan (blok) | Sudut putaran (derajat) | bilangan real 0 atau lebih | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# direction = "left"
pio.turn_degree('left', 90, wait=True)
# direction = "right"
pio.turn_degree('right', 90, wait=True)
```

## Mengubah kecepatan roda {#change_speed}

Mengubah kecepatan roda Piobot.  
Kecepatan roda yang baru adalah kecepatan saat ini ditambah nilai yang Anda masukkan.  
Kecepatan roda yang baru ditetapkan dalam rentang -100 sampai 100.

<BlockImage module="roboids/Pio" id="change_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Jenis roda | kiri(left), kanan(right), keduanya(both) | - |
| speed | Nilai masukan (blok) | Besar perubahan kecepatan | bilangan bulat -200 sampai 200 | - |

### Python
```python
pio = Pio(0)

pio.change_wheel_speed('both', 50)
```

## Menyalakan / mematikan mode turbo {#turbo}

Menyalakan atau mematikan mode turbo Piobot.

<BlockImage module="roboids/Pio" id="turbo" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Mode turbo NYALA / MATI | nyala(on=True), mati(off=False) | TRUE |

### Python
```python
pio = Pio(0)

pio.turbo(True)
```

## Berhenti {#stop}

Menghentikan gerakan Piobot.  
Kecepatan kedua roda Piobot dikembalikan ke 0.

<BlockImage module="roboids/Pio" id="stop" />

### Parameter

(tidak ada)

### Python
```python
pio = Pio(0)

pio.stop()
```

## Roda sedang bergerak? {#wheel_moving}

Mengembalikan true bila roda sedang bergerak dan false bila roda sedang diam.

<BlockImage module="roboids/Pio" id="wheel_moving" />

### Parameter

(tidak ada)

### Python
```python
pio = Pio(0)

pio.wheel_moving()
```

## Bergerak satu langkah di papan {#grid_move}

Bergerak satu petak demi satu petak di atas papan sesuai aturan yang ditetapkan.

<BlockImage module="roboids/Pio" id="grid_move" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Arah gerakan | maju(forward), mundur(backward), ke kiri(left), ke kanan(right) | - |

### Python
```python
pio = Pio(0)

pio.grid_move('forward')
```

## Berputar sekali di papan {#grid_turn}

Piobot berputar 90 derajat di atas papan ke arah yang Anda masukkan. Robot selalu menunggu sampai selesai (di dalamnya wait=True selalu dipakai).

<BlockImage module="roboids/Pio" id="grid_turn" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Arah putaran | kiri(left), kanan(right) | - |

### Python
```python
pio = Pio(0)

# unit = "left"
pio.grid_turn('left')
# unit = "right"
pio.grid_turn('right')
```

## Mengatur kecepatan leher {#set_neck_speed}

Mengatur kecepatan putaran leher. Rentang kecepatan lehernya dari 1 sampai 6.

<BlockImage module="roboids/Pio" id="set_neck_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Kecepatan putaran leher | bilangan bulat 1 sampai 6 | 4 |

### Python
```python
pio = Pio(0)

pio.set_neck_speed(4)
```

## Mengatur sudut leher {#set_neck_angle}

Mengatur sudut tujuan putaran leher. Rentang sudut lehernya dari -45 sampai 45.

<BlockImage module="roboids/Pio" id="set_neck_angle" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Sudut leher (derajat) | bilangan real -45 sampai 45 | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.set_neck_angle(15, wait=True)
```

## Leher sedang bergerak? {#neck_moving}

Mengembalikan true bila leher sedang bergerak dan false bila leher sedang diam.

<BlockImage module="roboids/Pio" id="neck_moving" />

### Parameter

(tidak ada)

### Python
```python
pio = Pio(0)

pio.neck_moving()
```

## Mengatur warna mata {#set_eye_color}

Mengatur warna LED mata Piobot.  
Anda dapat mengubah warna LED mata kiri, kanan, atau keduanya.  
Warna yang Anda pilih dari warna siap pakai diubah menjadi **nama warna** (untai teks Inggris) lalu dipanggil dalam bentuk itu. (Kode yang dihasilkan memuat nama warna, bukan tiga angka R, G, B.)

<BlockImage module="roboids/Pio" id="set_eye_color" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Mata yang diatur | kiri(left), kanan(right), keduanya(both) | - |
| color | Pilihan daftar turun | Warna siap pakai → diubah menjadi nama warna (Inggris) | hitam(black), merah(red), kuning(yellow), hijau(green), sian(cyan), biru(blue), magenta(magenta), putih(white) | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', 'red')
```

## Mengatur warna mata dengan blok kategori Warna {#set_eye_color_with_block}

Mengatur warna LED mata Piobot memakai blok-blok dari kategori Warna.  
Anda dapat mengubah warna LED mata kiri, kanan, atau keduanya.

<BlockImage module="roboids/Pio" id="set_eye_color_with_block" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Mata yang diatur | kiri(left), kanan(right), keduanya(both) | - |
| data | Nilai masukan (warna) | Larik [R, G, B] | Blok kategori Warna atau `[0~255, 0~255, 0~255]` | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', *Utils.color('red'))
```

## Mengubah warna mata sebesar RGB {#change_by_rgb}

Mengubah warna LED mata Piobot sebesar nilai R, G, B yang ditentukan.  
Anda dapat mengatur warna mata kiri, kanan, atau keduanya.

<BlockImage module="roboids/Pio" id="change_by_rgb" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Mata yang diatur | kiri(left), kanan(right), keduanya(both) | - |
| r | Nilai masukan (bidang) | Besar perubahan merah | bilangan bulat -255 sampai 255 | 0 |
| g | Nilai masukan (bidang) | Besar perubahan hijau | bilangan bulat -255 sampai 255 | 0 |
| b | Nilai masukan (bidang) | Besar perubahan biru | bilangan bulat -255 sampai 255 | 0 |

### Python
```python
pio = Pio(0)

pio.change_eye_color('both', 10, 0, 0)
```

## Mengatur pola mata {#set_eye_pattern}

Mengatur pola tampilan mata dan menentukan warna tiap mata saat pola itu dimulai.

<BlockImage module="roboids/Pio" id="set_eye_pattern" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| pattern | Pilihan daftar turun | Jenis pola | mati(reset), berkedip(blink), meredup(dimming), pelangi(rainbow) | - |
| left | Pilihan daftar turun | Warna mata kiri | bawaan(black), merah(red), kuning(yellow), hijau(green), sian(cyan), biru(blue), magenta(magenta), putih(white) | white |
| right | Pilihan daftar turun | Warna mata kanan | (sama seperti left) | white |

### Python
```python
pio = Pio(0)

pio.set_eye_pattern('dimming', 'green', 'red')
```

## Mematikan mata {#turn_off}

Menghapus warna mata.

<BlockImage module="roboids/Pio" id="turn_off" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Mata yang dimatikan | kiri(left), kanan(right), keduanya(both) | both |

### Python
```python
pio = Pio(0)

pio.turn_off('both')
```

## Mengatur bunyi dengung {#sound_buzz}

Mengatur bunyi dengung Piobot pada frekuensi yang ditentukan.  
Rentang frekuensi yang dapat dibunyikan adalah 27,5 Hz sampai 6553,5 Hz.  
Bila Anda memasukkan nilai di luar rentang itu, bunyi dengung tidak keluar.

<BlockImage module="roboids/Pio" id="sound_buzz" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| hz | Nilai masukan (blok) | Frekuensi (Hz) | bilangan real 27,5 sampai 6553,5 | - |

### Python
```python
pio = Pio(0)

pio.sound_buzz(440)
```

## Memainkan nada {#sound_note}

Piobot memainkan nada yang ditentukan.

<BlockImage module="roboids/Pio" id="sound_note" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| note | Pilihan daftar turun | Nada | Do(C), Do#/Re♭(C#), Re(D), Re#/Mi♭(D#), Mi(E), Fa(F), Fa#/Sol♭(F#), Sol(G), Sol#/La♭(G#), La(A), La#/Si♭(A#), Si(B) | - |
| octave | Pilihan daftar turun | Oktaf | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
pio = Pio(0)

pio.sound_note('D', 5)
```

## Memutar klip suara {#sound_clip}

Piobot memutar sebuah klip suara tertentu.  
Bila Anda mencentang tunggu, robot menunggu sampai pemutarannya selesai.

<BlockImage module="roboids/Pio" id="sound_clip" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| clip | Pilihan daftar turun | Nama klip suara | `'mute'`, `'beep'`, `'beep2'`, `'beep3'`, `'siren'`, `'engine'`, `'robot'`, `'connect'`, dan lain-lain | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_clip('siren', wait=True)
```

## Memutar melodi {#sound_melody}

Piobot memutar sebuah melodi tertentu.  
Bila Anda mencentang tunggu, robot menunggu sampai pemutarannya selesai.

<BlockImage module="roboids/Pio" id="sound_melody" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| melody | Pilihan daftar turun | Nama melodi | `'mute'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'`, dan lain-lain | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_melody('happy', wait=True)
```

## Mematikan suara {#sound_off}

Mematikan suara Piobot.

<BlockImage module="roboids/Pio" id="sound_off" />

### Parameter

(tidak ada)

### Python
```python
pio = Pio(0)

pio.sound_off()
```

## Suara sedang diputar? {#sound_playing}

Mengembalikan true bila suara sedang diputar dan false bila tidak.

<BlockImage module="roboids/Pio" id="sound_playing" />

### Parameter

(tidak ada)

### Python
```python
pio = Pio(0)

pio.sound_playing()
```

## Nilai kecepatan roda {#wheel_speed}

Kecepatan roda tertentu

<BlockImage module="roboids/Pio" id="wheel_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Roda yang dibaca | kiri(left), kanan(right) | - |

### Python
```python
pio = Pio(0)

pio.wheel_speed('left')
```

## Nilai kekuatan sinyal {#signal_strength}

Kekuatan sinyal

<BlockImage module="roboids/Pio" id="signal_strength" />

### Parameter

(tidak ada)

### Python
```python
pio = Pio(0)

pio.signal_strength()
```

## Tegangan baterai {#battery}

Tegangan baterai

<BlockImage module="roboids/Pio" id="battery" />

### Parameter

(tidak ada)

### Python
```python
pio = Pio(0)

pio.battery()
```

## Tombol keypad {#keypad}

Mengenali tombol keypad yang terakhir ditekan pengguna.

<BlockImage module="roboids/Pio" id="keypad" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| button | Pilihan daftar turun | Tombol yang dikenali | jalankan(play), bergerak maju(forward), bergerak mundur(backward), bergerak ke kiri(left), bergerak ke kanan(right), beraksi(action), ulangi(repeat), hapus(clear) | - |

### Python
```python
pio = Pio(0)

pio.keypad('forward')
```
