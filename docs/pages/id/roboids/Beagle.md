---
title: Beagle
---

# Beagle

## Deklarasi instans {#instance}

Saat Anda menambahkan blok Beagle ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
beagle = Beagle(0)
# Bila ada beberapa instans
beagle_1 = Beagle(1)
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Mengatur kecepatan roda {#set_wheel_speed}

Mengatur kecepatan roda. Rentang kecepatan rodanya dari -100 sampai 100.

<BlockImage module="roboids/Beagle" id="set_wheel_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Jenis roda | kiri(left), kanan(right), keduanya(both) | - |
| speed | Nilai masukan (blok) | Kecepatan roda | bilangan bulat -100 sampai 100, 0: berhenti | - |

### Python
```python
beagle = Beagle(0)

beagle.set_wheel_speed('both', 50)
```

## Bergerak sejauh jarak tertentu {#move_distance}

Bergerak sejauh jarak yang ditentukan dengan kecepatan roda saat ini.  
Bila Anda belum mengatur kecepatan roda, robot maju dengan kecepatan bawaan.  
Bila nilai jaraknya 0, robot terus bergerak sesuai kecepatan roda saat ini.  
Bila Anda mencentang tunggu, robot menunggu sampai gerakannya selesai.

<BlockImage module="roboids/Beagle" id="move_distance" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Jarak tempuh | bilangan real 0 atau lebih | - |
| unit | Pilihan daftar turun | Satuan panjang | cm, mm, inci(inch) | cm |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.move_distance(50, 'cm', wait=True)
```

## Bergerak selama waktu tertentu {#move_time}

Bergerak selama waktu yang ditentukan dengan kecepatan roda saat ini.  
Bila Anda belum mengatur kecepatan roda, robot maju dengan kecepatan bawaan.  
Bila Anda mencentang tunggu, robot menunggu sampai gerakannya selesai.

<BlockImage module="roboids/Beagle" id="move_time" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Lama gerakan (detik) | bilangan real 0 atau lebih | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

# wait = TRUE
beagle.move_time(5, wait=True)
# wait = FALSE
beagle.move_time(5, wait=False)
```

## Berputar di tempat {#turn_degree}

Menetapkan arah dan sudut putaran di tempat.  
Bila Anda mencentang tunggu, robot menunggu sampai putarannya selesai.

<BlockImage module="roboids/Beagle" id="turn_degree" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| direction | Pilihan daftar turun | Arah putaran | kiri(left), kanan(right) | - |
| data | Nilai masukan (blok) | Sudut putaran (derajat) | bilangan real 0 atau lebih | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.turn_degree('left', 90, wait=True)
```

## Mengubah kecepatan roda {#change_speed}

Mengubah kecepatan roda Beagle.  
Kecepatan roda yang baru adalah kecepatan saat ini ditambah nilai yang Anda masukkan.  
Kecepatan roda yang baru ditetapkan dalam rentang -100 sampai 100.

<BlockImage module="roboids/Beagle" id="change_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Jenis roda | kiri(left), kanan(right), keduanya(both) | - |
| speed | Nilai masukan (blok) | Besar perubahan kecepatan | bilangan bulat -200 sampai 200 | - |

### Python
```python
beagle = Beagle(0)

beagle.change_wheel_speed('both', 10)
```

## Berhenti {#stop}

Menghentikan gerakan Beagle.  
Kecepatan kedua roda Beagle dikembalikan ke 0.

<BlockImage module="roboids/Beagle" id="stop" />

### Parameter

(tidak ada)

### Python
```python
beagle = Beagle(0)

beagle.stop()
```

## Roda sedang bergerak? {#wheel_moving}

Mengembalikan true bila roda sedang bergerak dan false bila roda sedang diam.

<BlockImage module="roboids/Beagle" id="wheel_moving" />

### Parameter

(tidak ada)

### Python
```python
beagle = Beagle(0)

beagle.wheel_moving()
```

## Mengatur bunyi dengung {#sound_buzz}

Mengatur bunyi dengung Beagle pada frekuensi yang ditentukan.  
Rentang frekuensi yang dapat dibunyikan adalah 27,5 Hz sampai 6553,5 Hz.  
Bila Anda memasukkan nilai di luar rentang itu, bunyi dengung tidak keluar.

<BlockImage module="roboids/Beagle" id="sound_buzz" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| hz | Nilai masukan (blok) | Frekuensi (Hz) | 0, bilangan real 27,5 sampai 6553,5 (selain itu 0) | - |

### Python
```python
beagle = Beagle(0)

beagle.sound_buzz(440)
```

## Memainkan nada {#sound_note}

Beagle memainkan nada yang ditentukan.

<BlockImage module="roboids/Beagle" id="sound_note" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| note | Pilihan daftar turun | Nada | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Pilihan daftar turun | Oktaf | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
beagle = Beagle(0)

beagle.sound_note('D', 5)
```

## Memutar klip suara {#sound_clip}

Beagle memutar sebuah klip suara tertentu.  
Bila Anda mencentang tunggu, robot menunggu sampai pemutarannya selesai.

<BlockImage module="roboids/Beagle" id="sound_clip" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| clip | Pilihan daftar turun | Nama klip suara | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'dibidibidip'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`, dan lain-lain | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.sound_clip('siren', wait=True)
```

## Mematikan suara {#sound_off}

Mematikan suara Beagle.

<BlockImage module="roboids/Beagle" id="sound_off" />

### Parameter

(tidak ada)

### Python
```python
beagle = Beagle(0)

beagle.sound_off()
```

## Suara sedang diputar? {#sound_playing}

Mengembalikan true bila suara sedang diputar dan false bila tidak.

<BlockImage module="roboids/Beagle" id="sound_playing" />

### Parameter

(tidak ada)

### Python
```python
beagle = Beagle(0)

beagle.sound_playing()
```

## Nilai kecepatan roda {#wheel_speed}

Kecepatan roda tertentu

<BlockImage module="roboids/Beagle" id="wheel_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Roda yang dibaca | kiri(left), kanan(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.wheel_speed('left')
```

## Nilai enkoder {#encoder}

Nilai enkoder roda tertentu

<BlockImage module="roboids/Beagle" id="encoder" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Roda yang dibaca | kiri(left), kanan(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.encoder('left')
```

## Nilai sensor giroskop {#gyroscope}

Nilai sensor giroskop pada sumbu tertentu

<BlockImage module="roboids/Beagle" id="gyroscope" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Sumbu yang diukur | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.gyroscope('x')
```

## Nilai sensor akselerometer {#accelerometer}

Nilai sensor akselerometer pada sumbu tertentu

<BlockImage module="roboids/Beagle" id="accelerometer" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Sumbu yang diukur | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.accelerometer('x')
```

## Nilai sensor magnetometer {#magnetometer}

Nilai sensor magnetometer pada sumbu tertentu

<BlockImage module="roboids/Beagle" id="magnetometer" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Sumbu yang diukur | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.magnetometer('x')
```

## Nilai sensor suhu {#temperature}

Nilai sensor suhu

<BlockImage module="roboids/Beagle" id="temperature" />

### Parameter

(tidak ada)

### Python
```python
beagle = Beagle(0)

beagle.temperature()
```

## Nilai kekuatan sinyal {#signal_strength}

Kekuatan sinyal

<BlockImage module="roboids/Beagle" id="signal_strength" />

### Parameter

(tidak ada)

### Python
```python
beagle = Beagle(0)

beagle.signal_strength()
```

## Tegangan baterai {#battery}

Tegangan baterai

<BlockImage module="roboids/Beagle" id="battery" />

### Parameter

(tidak ada)

### Python
```python
beagle = Beagle(0)

beagle.battery()
```

## Perubahan keadaan {#state_change}

Apakah keadaan robot berubah atau tidak

<BlockImage module="roboids/Beagle" id="state_change" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Jenis keadaan | 0 ~ 5 (lihat tabel di bawah) | - |

| unit | Kondisi |
|------|------|
| 0 | `accelerometer('x') > 0.8` |
| 1 | `accelerometer('x') < -0.8` |
| 2 | `accelerometer('y') > 0.8` |
| 3 | `accelerometer('y') < -0.8` |
| 4 | `accelerometer('z') > 0` |
| 5 | `accelerometer('z') < 0` |

### Python
```python
beagle = Beagle(0)

# unit = 0
beagle.accelerometer('x') > 0.8
```

## Menyalakan / mematikan lidar {#lidar_power}

Mengaktifkan atau menonaktifkan sensor lidar.

<BlockImage module="roboids/Beagle" id="lidar_power" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| on | Pilihan daftar turun | Lidar NYALA / MATI | mulai(on=True), berhenti(off=False) | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.lidar_power(True)
```

## Nilai jarak ke benda ke-~ dari lidar {#lidar_value}

Sensor lidar dapat mengukur jarak ke benda-benda di sekelilingnya dalam 360 derajat.  
Dengan bagian depan Beagle sebagai acuan (nilai ke-0), nomornya bertambah 1 searah berlawanan jarum jam.

<BlockImage module="roboids/Beagle" id="lidar_value" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Nilai masukan (bidang) | Nomor benda (mulai dari 0) | bilangan bulat 0 atau lebih | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_value(0)
```

## Nilai jarak per arah dari lidar {#lidar_directions}

Menunjukkan jarak yang diukur sensor lidar ke arah depan, belakang, kedua sisi, dan arah diagonal.  
Blok ini mengeluarkan nilai rata-rata jarak dalam rentang 45 derajat ke kiri dan ke kanan dari arah itu.

<BlockImage module="roboids/Beagle" id="lidar_directions" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| direction | Pilihan daftar turun | Arah yang diukur | depan(front), depan kiri(left front), kiri(left), belakang kiri(left back), belakang(back), belakang kanan(right back), kanan(right), depan kanan(right front) | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_directions('front')
```

## Lidar siap? {#lidar_state}

Mengembalikan **benar (True) / salah (False)** sesuai apakah lidar sedang menyala.

<BlockImage module="roboids/Beagle" id="lidar_state" />

### Parameter

(tidak ada)

### Python
```python
beagle = Beagle(0)

beagle.lidar_ready()
```
