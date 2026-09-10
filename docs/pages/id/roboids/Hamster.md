---
title: Hamster
---

# Hamster

## Deklarasi instans {#instance}

Saat Anda menambahkan blok Hamster ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
hamster = Hamster(0)
# Bila ada beberapa instans
hamster_1 = Hamster(1)
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Mengatur kecepatan roda {#set_wheel_speed}

Menentukan kecepatan roda. Rentang kecepatannya dari -100 sampai 100.

<BlockImage module="roboids/Hamster" id="set_wheel_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Jenis roda | kiri(left), kanan(right), keduanya(both) | - |
| speed | Nilai masukan (blok) | Kecepatan roda | bilangan bulat -100 sampai 100, 0: berhenti | - |

### Python
```python
hamster = Hamster(0)

hamster.set_wheel_speed('both', 50)
```

## Bergerak selama waktu tertentu {#move_time}

Bergerak selama waktu yang ditentukan dengan kecepatan roda saat ini.  
Bila Anda belum mengatur kecepatan roda, robot maju dengan kecepatan bawaan.  
Bila Anda mencentang tunggu, robot menunggu sampai gerakannya selesai.

<BlockImage module="roboids/Hamster" id="move_time" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Lama gerakan (detik) | bilangan real 0 atau lebih | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

# wait = TRUE
hamster.move_time(5, wait=True)
# wait = FALSE
hamster.move_time(0.5, wait=False)
```

## Mengubah kecepatan roda {#change_speed}

Mengubah kecepatan roda Hamster.  
Kecepatan roda yang baru adalah kecepatan saat ini ditambah nilai yang Anda masukkan.  
Kecepatan roda yang baru ditetapkan dalam rentang -100 sampai 100.

<BlockImage module="roboids/Hamster" id="change_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Jenis roda | kiri(left), kanan(right), keduanya(both) | - |
| speed | Nilai masukan (blok) | Besar perubahan kecepatan | bilangan bulat -200 sampai 200 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_wheel_speed('both', 10)
```

## Berhenti {#stop}

Menghentikan gerakan Hamster.  
Kecepatan kedua roda Hamster dikembalikan ke 0.

<BlockImage module="roboids/Hamster" id="stop" />

### Parameter

(tidak ada)

### Python
```python
hamster = Hamster(0)

hamster.stop()
```

## Maju satu langkah di papan {#grid_move}

Bergerak satu petak demi satu petak di atas papan sesuai aturan yang ditetapkan.

<BlockImage module="roboids/Hamster" id="grid_move" />

### Parameter

Tidak ada.

### Python
```python
hamster = Hamster(0)

hamster.grid_move()
```

## Berputar sekali di papan {#grid_turn}

Berputar 90 derajat ke arah yang ditentukan di atas papan.

<BlockImage module="roboids/Hamster" id="grid_turn" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| direction | Pilihan daftar turun | Arah putaran | kiri(left), kanan(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.grid_turn('left')
```

## Menelusuri garis dengan sensor {#trace_mode}

Hamster memakai sensor lantai untuk menelusuri garis berwarna tertentu.

<BlockImage module="roboids/Hamster" id="trace_mode" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| floor | Pilihan daftar turun | Sensor lantai yang dipakai | kiri(left), kanan(right), tengah(center) | - |
| line | Pilihan daftar turun | Warna garis | hitam(black), putih(white) | black |

### Python
```python
hamster = Hamster(0)

hamster.trace_line('left', 'black')
```

## Melewati persimpangan lalu berhenti di persimpangan berikutnya {#trace_until_grid}

Hamster bergerak ke arah yang ditentukan di persimpangan, lalu terus berjalan sampai bertemu persimpangan berikutnya.  
Bila Anda mencentang tunggu, robot menunggu sampai gerakannya selesai.

<BlockImage module="roboids/Hamster" id="trace_until_grid" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| direction | Pilihan daftar turun | Arah di persimpangan | belok kiri(left), belok kanan(right), lurus(forward), putar balik(uturn) | - |
| line | Pilihan daftar turun | Warna garis | hitam(black), putih(white) | black |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

hamster.trace_intersection('left', 'black', wait=True)
```

## Mengatur kecepatan penelusuran garis {#set_trace_speed}

Mengatur kecepatan penelusuran garis. Rentang kecepatannya dari 1 sampai 10.

<BlockImage module="roboids/Hamster" id="set_trace_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Kecepatan penelusuran garis | bilangan bulat 1 sampai 10 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_trace_speed(5)
```

## Menghentikan penelusuran garis {#stop_trace}

Mengakhiri fungsi penelusuran garis Hamster.

<BlockImage module="roboids/Hamster" id="stop_trace" />

### Parameter

(tidak ada)

### Python
```python
hamster = Hamster(0)

hamster.stop_trace()
```

## Mengatur warna LED {#set_led_color}

Mengatur warna LED.

<BlockImage module="roboids/Hamster" id="set_led_color" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | LED yang diatur | kiri(left), kanan(right), keduanya(both) | - |
| color | Pilihan daftar turun | Warna | hitam(black), biru(blue), hijau(green), sian(cyan), merah(red), magenta(magenta), kuning(yellow), putih(white) | - |

### Python
```python
hamster = Hamster(0)

hamster.set_led_color('both', 'red')
```

## Mematikan LED {#turn_off}

Menghapus warna LED.

<BlockImage module="roboids/Hamster" id="turn_off" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | LED yang dimatikan | kiri(left), kanan(right), keduanya(both) | both |

### Python
```python
hamster = Hamster(0)

hamster.turn_off('both')
```

## Mengatur bunyi dengung {#sound_buzz}

Mengatur bunyi dengung Hamster pada frekuensi yang ditentukan.  
Rentang frekuensi yang dapat dibunyikan adalah 1,0 Hz sampai 6553,5 Hz.  
Bila Anda memasukkan nilai di luar rentang itu, bunyi dengung tidak keluar.

<BlockImage module="roboids/Hamster" id="sound_buzz" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| hz | Nilai masukan (blok) | Frekuensi (Hz) | bilangan real 0 sampai 6553,5 | - |

### Python
```python
hamster = Hamster(0)

hamster.sound_buzz(440)
```

## Memainkan nada {#sound_note}

Hamster memainkan nada yang ditentukan.

<BlockImage module="roboids/Hamster" id="sound_note" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| note | Pilihan daftar turun | Nada | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Pilihan daftar turun | Oktaf | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster = Hamster(0)

hamster.sound_note('D', 5)
```

## Mematikan suara {#sound_off}

Mematikan suara Hamster.

<BlockImage module="roboids/Hamster" id="sound_off" />

### Parameter

(tidak ada)

### Python
```python
hamster = Hamster(0)

hamster.sound_off()
```

## Nilai kecepatan roda {#wheel_speed}

Kecepatan roda tertentu

<BlockImage module="roboids/Hamster" id="wheel_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Roda yang dibaca | kiri(left), kanan(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.wheel_speed('left')
```

## Nilai sensor jarak {#proximity}

Nilai sensor jarak tertentu

<BlockImage module="roboids/Hamster" id="proximity" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Letak sensor yang dibaca | kiri(left), kanan(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.proximity('left')
```

## Nilai sensor lantai {#floor}

Nilai sensor lantai tertentu

<BlockImage module="roboids/Hamster" id="floor" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Letak sensor yang dibaca | kiri(left), kanan(right), tengah(center) | - |

### Python
```python
hamster = Hamster(0)

hamster.floor('left')
```

## Nilai percepatan gravitasi {#acceleration}

Nilai percepatan gravitasi pada sumbu tertentu

<BlockImage module="roboids/Hamster" id="acceleration" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Sumbu yang diukur | x, y, z | - |

### Python
```python
hamster = Hamster(0)

hamster.acceleration('x')
```

## Nilai sensor kecerahan {#light}

Nilai sensor kecerahan

<BlockImage module="roboids/Hamster" id="light" />

### Parameter

(tidak ada)

### Python
```python
hamster = Hamster(0)

hamster.light()
```

## Nilai sensor suhu {#temperature}

Nilai sensor suhu

<BlockImage module="roboids/Hamster" id="temperature" />

### Parameter

(tidak ada)

### Python
```python
hamster = Hamster(0)

hamster.temperature()
```

## Nilai kekuatan sinyal {#signal_strength}

Kekuatan sinyal

<BlockImage module="roboids/Hamster" id="signal_strength" />

### Parameter

(tidak ada)

### Python
```python
hamster = Hamster(0)

hamster.signal_strength()
```

## Tegangan baterai {#battery}

Tegangan baterai

<BlockImage module="roboids/Hamster" id="battery" />

### Parameter

(tidak ada)

### Python
```python
hamster = Hamster(0)

hamster.battery()
```

## Perubahan keadaan {#state_change}

Apakah keadaan robot berubah atau tidak

<BlockImage module="roboids/Hamster" id="state_change" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Jenis keadaan | 0 ~ 6 (lihat tabel di bawah) | - |

| unit | Kondisi |
|------|------|
| 0 | `acceleration('x') > 5000` |
| 1 | `acceleration('x') < -5000` |
| 2 | `acceleration('y') > 5000` |
| 3 | `acceleration('y') < -5000` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -3000` |
| 6 | `proximity('left') > 50 or proximity('right') > 50` |

### Python
```python
hamster = Hamster(0)

# unit = 0
hamster.acceleration('x') > 5000
# unit = 6
hamster.proximity('left') > 50 or hamster.proximity('right') > 50
```

## Mengatur mode input port masukan keluaran {#io_mode}

Mengatur mode input port IO.

<BlockImage module="roboids/Hamster" id="io_mode" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port masukan keluaran | a, b, keduanya(both) | - |
| option | Pilihan daftar turun | Mode masukan keluaran | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster = Hamster(0)

hamster.io_mode('both', 'analog_input')
```

## Mengatur output port masukan keluaran {#set_output}

Mengatur nilai output port IO yang ditentukan.

<BlockImage module="roboids/Hamster" id="set_output" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port masukan keluaran | a, b, keduanya(both) | - |
| data | Nilai masukan (blok) | Nilai output | bilangan bulat 0 sampai 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_output('both', 90)
```

## Mengubah output port masukan keluaran {#change_output}

Mengubah nilai output port IO yang ditentukan.

<BlockImage module="roboids/Hamster" id="change_output" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port masukan keluaran | a, b, keduanya(both) | - |
| data | Nilai masukan (blok) | Besar perubahan nilai output | bilangan bulat | - |

### Python
```python
hamster = Hamster(0)

hamster.change_output('a', 10)
```

## Membuka / menutup gripper {#gripper}

Membuka atau menutup gripper Hamster.  
Sesuai nilai unit, salah satu dari dua metode dipanggil.

<BlockImage module="roboids/Hamster" id="gripper" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Tindakan | tutup(close), buka(open) | - |

### Python
```python
hamster = Hamster(0)

# unit = "open"
hamster.open_gripper()
# unit = "close"
hamster.close_gripper()
```

## Mengatur sudut penembak {#shooter}

Mengendalikan penembak dengan mengatur sudutnya. Rentang sudutnya dari 0 sampai 180.

<BlockImage module="roboids/Hamster" id="shooter" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Sudut penembak | bilangan bulat 0 sampai 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.shooter(45)
```

## Nilai input port masukan keluaran {#input}

Mengembalikan nilai input port masukan keluaran Hamster.

<BlockImage module="roboids/Hamster" id="input" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port masukan keluaran | a, b | - |

### Python
```python
hamster = Hamster(0)

hamster.get_input('a')
```
