---
title: RaccoonBot
---

# RaccoonBot

## Deklarasi instans {#instance}

Saat Anda menambahkan blok RaccoonBot ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
raccoon = RaccoonBot(0)
# Bila ada beberapa instans
raccoon_1 = RaccoonBot(1)
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Menyalakan / mematikan kontrol motor sendi {#motor}

Menentukan apakah kontrol yang dikenakan pada tiap motor sendi dilepas atau dipertahankan.  
Bila Anda tidak mengaturnya, semua sendi mulai dengan kontrol motor menyala.

<BlockImage module="roboids/Raccoon4" id="motor" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Nomor sendi | semua(-1), nomor 1(1), nomor 2(2), nomor 3(3), nomor 4(4) | -1 |
| on | Kotak centang | Kontrol motor NYALA / MATI | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# semua sendi, kontrol motor dimatikan
raccoon.motor(-1, False)

# sendi nomor 1, kontrol motor dinyalakan
raccoon.motor(1, True)
```

## Mengatur kecepatan sendi {#speed_joint}

Mengatur kecepatan sendi yang dipilih.

<BlockImage module="roboids/Raccoon4" id="speed_joint" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| joint | Pilihan daftar turun | Nomor sendi | semua(-1), nomor 1(1), nomor 2(2), nomor 3(3), nomor 4(4) | - |
| data | Nilai masukan (blok) | Kecepatan sendi | bilangan bulat -100 sampai 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_speed_joint(1, 100)
```

## Mengubah kecepatan sendi {#change_speed_joint}

Mengubah kecepatan sendi yang dipilih.

<BlockImage module="roboids/Raccoon4" id="change_speed_joint" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| joint | Pilihan daftar turun | Nomor sendi | semua(-1), nomor 1(1), nomor 2(2), nomor 3(3), nomor 4(4) | - |
| data | Nilai masukan (blok) | Besar perubahan kecepatan | bilangan bulat -200 sampai 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_speed_joint(1, 50)
```

## Mengatur kecepatan empat sendi sekaligus {#speed_joints}

Mengatur kecepatan keempat sendi sekaligus.

<BlockImage module="roboids/Raccoon4" id="speed_joints" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (larik) | Larik kecepatan 4 sendi | `[joint1, joint2, joint3, joint4]`, masing-masing -100~100 | - |

### Python
```python
raccoon = RaccoonBot(0)

# larik langsung [10, 20, 30, 40]
raccoon.set_speed_joints(10, 20, 30, 40)

# larik dari variabel
raccoon.set_speed_joints(*arr)
```

## Mengatur kecepatan kontrol sudut sendi {#angle_speed}

Mengatur kecepatan yang dipakai untuk mengendalikan sendi dalam mode kontrol sudut.

<BlockImage module="roboids/Raccoon4" id="angle_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Kecepatan maksimum kontrol sudut | bilangan bulat 0 sampai 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.angle_max_speed(100)
```

## Mengatur sudut sendi {#angle_joint}

Mengatur sudut sendi yang dipilih.

| joint | min | max |
|-------|-----|-----|
| 1 | -120 | 120 |
| 2 | -90 | 30 |
| 3 | -150 | 0 |
| 4 | -105 | 105 |

<BlockImage module="roboids/Raccoon4" id="angle_joint" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| joint | Pilihan daftar turun | Nomor sendi | semua(-1), nomor 1(1), nomor 2(2), nomor 3(3), nomor 4(4) | - |
| data | Nilai masukan (blok) | Sudut sendi (derajat) | lihat tabel di atas (dibatasi otomatis) | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_angle_joint(1, 90, wait=True)
```

## Mengubah sudut sendi {#change_angle_joint}

Mengubah sudut sendi yang dipilih.

<BlockImage module="roboids/Raccoon4" id="change_angle_joint" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| joint | Pilihan daftar turun | Nomor sendi | semua(-1), nomor 1(1), nomor 2(2), nomor 3(3), nomor 4(4) | - |
| data | Nilai masukan (blok) | Besar perubahan sudut (derajat) | lihat tabel di atas (dibatasi otomatis) | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_angle_joint(1, 10, wait=True)
```

## Mengatur sudut empat sendi sekaligus {#angle_joints}

Mengatur sudut keempat sendi sekaligus.

<BlockImage module="roboids/Raccoon4" id="angle_joints" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (larik) | Larik sudut 4 sendi atau nama pose | larik `[j1, j2, j3, j4]` | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# larik yang ditulis jelas
raccoon.set_angle_joints(0, 0, 0, 0, wait=True)
```

## Menginisialisasi status sendi {#default_angle_joints}

Mengatur sudut keempat sendi ke sebuah pose yang sudah ditentukan (`'zero'`, `'park'`, `'home'`).

<BlockImage module="roboids/Raccoon4" id="default_angle_joints" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Daftar turun | Nama pose | `'zero'` / `'park'` / `'home'` | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

Pose siap pakai:
- `'zero'` → `[0, 0, 0, 0]`
- `'park'` → `[0, 25, -145, -60]`
- `'home'` → `[0, -10, -140, 60]`

### Python
```python
raccoon = RaccoonBot(0)

# pose siap pakai
raccoon.set_angle_joints('home', wait=True)
```

## Menyimpan sudut sendi {#save_encoder}

Menyimpan nilai enkoder saat ini ke sebuah variabel.

<BlockImage module="roboids/Raccoon4" id="save_encoder" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| encoder | Variabel | Nama variabel penyimpan | variabel | - |
| data | Nilai masukan (larik) | Larik awal yang disimpan | larik 4 anggota atau larik kosong | - |

### Python
```python
raccoon = RaccoonBot(0)
encoder = None

encoder = raccoon.save_encoder([3, -6, -73, 60])
```

## Menetapkan satu nilai koordinat {#set_coordinate}

Menggerakkan lengan robot dengan menetapkan satu nilai koordinat.  
Rentang tiap koordinatnya sebagai berikut.  
Relatif terhadap pergelangan => x: -20,0 cm ~ 20,0 cm, y: -10,0 cm ~ 20,0 cm, z: -2,0 mm ~ 28,0 cm  
Relatif terhadap pencengkeram => rentangnya dapat berbeda tergantung perangkat yang dipasang.  
Arah pencengkeram dikunci mendatar atau tegak lurus terhadap permukaan.  
Bila Anda memasukkan koordinat yang tidak dapat dicapai, perintahnya dilewati.

<BlockImage module="roboids/Raccoon4" id="set_coordinate" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| origin | Pilihan daftar turun | Titik acuan | pergelangan(wrist), pencengkeram(end_effector) | - |
| pos | Pilihan daftar turun | Sumbu | x, y, z | - |
| data | Nilai masukan (blok) | Nilai koordinat | x: -20 ~ 20 cm, y: -10 ~ 20 cm, z: -2 ~ 28 cm | - |
| unit | Pilihan daftar turun | Satuan | cm, mm, inci(inch) | cm |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# menetapkan koordinat x menjadi 10 cm
raccoon.set_coordinate('wrist', 'x', 10, 'cm', wait=True)

# koordinat z relatif terhadap end_effector
raccoon.set_coordinate('end_effector', 'z', 15, 'cm', wait=True)
```

## Mengubah satu nilai koordinat {#change_coordinate}

Menggerakkan lengan robot dengan mengubah satu nilai koordinat relatif terhadap posisi saat ini.  
Rentang tiap koordinatnya sebagai berikut.  
Relatif terhadap pergelangan => x: -20,0 cm ~ 20,0 cm, y: -10,0 cm ~ 20,0 cm, z: -2,0 mm ~ 28,0 cm  
Relatif terhadap pencengkeram => rentangnya dapat berbeda tergantung perangkat yang dipasang.  
Arah pencengkeram dikunci mendatar atau tegak lurus terhadap permukaan.  
Bila Anda memasukkan koordinat yang tidak dapat dicapai, perintahnya dilewati.

<BlockImage module="roboids/Raccoon4" id="change_coordinate" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| origin | Pilihan daftar turun | Titik acuan | pergelangan(wrist), pencengkeram(end_effector) | - |
| pos | Pilihan daftar turun | Sumbu | x, y, z | - |
| data | Nilai masukan (blok) | Besar perubahan koordinat | bilangan real | - |
| unit | Pilihan daftar turun | Satuan | cm, mm, inci(inch) | cm |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_coordinate('wrist', 'y', 5, 'cm', wait=True)
```

## Bergerak ke koordinat xyz {#set_coordinates}

Menetapkan koordinat x, y, dan z sekaligus ke nilai yang ditentukan.  

<BlockImage module="roboids/Raccoon4" id="set_coordinates" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| origin | Pilihan daftar turun | Titik acuan | pergelangan(wrist), pencengkeram(end_effector) | - |
| x | Nilai masukan (blok) | Koordinat x | bilangan real | - |
| y | Nilai masukan (blok) | Koordinat y | bilangan real | - |
| z | Nilai masukan (blok) | Koordinat z | bilangan real | - |
| unit | Pilihan daftar turun | Satuan | cm, mm, inci(inch) | cm |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_coordinates('wrist', 0, 15, 20, 'cm', wait=True)
```

## Mengatur kunci pencengkeram {#lock}

Mengatur arah kunci pencengkeram. Setelah opsinya diatur mendatar atau tegak lurus, Anda tidak lagi dapat mengendalikan kecepatan atau sudut sendi 4.

<BlockImage module="roboids/Raccoon4" id="lock" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| mode | Pilihan daftar turun | Arah kunci | tidak ada(none), mendatar(horizontal), tegak lurus(vertical) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.lock('horizontal')
```

## Mengambil / melepas benda dengan pencengkeram {#end_effector}

Mengambil atau melepas benda dengan pencengkeram.  
Sesuai nilai daftar turun unit, salah satu dari dua metode dipanggil.

<BlockImage module="roboids/Raccoon4" id="end_effector" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Tindakan | ambil (tutup)(pick), lepas (buka)(place) | - |

### Python
```python
raccoon = RaccoonBot(0)

# unit = "pick"
raccoon.pick()
# unit = "place"
raccoon.place()
```

## Perangkat pencengkeram {#end_effector_device}

Nomor pencengkeram yang sedang terpasang  
(1, 3, 4: pencengkeram penjepit, 2: pencengkeram vakum)

<BlockImage module="roboids/Raccoon4" id="end_effector_device" />

### Parameter

(tidak ada)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_device()
```

## Status pencengkeram {#end_effector_status}

Keadaan apakah pencengkeram sedang memegang benda  
(0: sudah dilepas, 1: sedang dipegang)

<BlockImage module="roboids/Raccoon4" id="end_effector_status" />

### Parameter

(tidak ada)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_status()
```

## Memainkan nada {#sound_note}

RaccoonBot memainkan nada yang ditentukan.

<BlockImage module="roboids/Raccoon4" id="sound_note" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| note | Pilihan daftar turun | Nada | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Pilihan daftar turun | Oktaf | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_note('D', 5)
```

## Memutar klip suara {#sound_clip}

RaccoonBot memutar sebuah klip suara tertentu.

<BlockImage module="roboids/Raccoon4" id="sound_clip" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| clip | Pilihan daftar turun | Nama klip suara | `'mute'`, `'beep'`, `'siren'`, `'robot'`, `'connect'`, `'wake_up'`, `'start'`, `'bye'`, dan lain-lain | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_clip('siren', wait=True)
```

## Mematikan suara {#sound_off}

Mematikan suara RaccoonBot.

<BlockImage module="roboids/Raccoon4" id="sound_off" />

### Parameter

(tidak ada)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_off()
```

## Nilai enkoder {#encoder}

Nilai enkoder sendi yang dipilih

<BlockImage module="roboids/Raccoon4" id="encoder" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| joint | Pilihan daftar turun | Nomor sendi (atau semua sendi) | 1, 2, 3, 4, semua(-1) | -1 |

### Python
```python
raccoon = RaccoonBot(0)

# joint = 1
raccoon.encoder(1)

# semua sendi
raccoon.encoder(-1)
```

## Koordinat bagian yang dipilih {#coordinate}

Mengembalikan koordinat xyz titik acuan saat ini.  
Bila `pos` dilewati, blok mengembalikan seluruh larik `[x, y, z]`; bila ditentukan, blok hanya mengembalikan nilai sumbu itu.

<BlockImage module="roboids/Raccoon4" id="coordinate" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| origin | Pilihan daftar turun | Titik acuan | pergelangan(wrist), pencengkeram(end_effector) | wrist |
| pos | Pilihan daftar turun | Sumbu (atau seluruhnya) | x, y, z, seluruhnya (bila dilewati, seluruh larik dikembalikan) | None (seluruhnya) |

### Python
```python
raccoon = RaccoonBot(0)

# satu sumbu tertentu
raccoon.get_coordinates('wrist', 'x')

# seluruhnya (larik 3 anggota)
raccoon.get_coordinates('wrist')
```

## Nilai kekuatan sinyal {#signal_strength}

Kekuatan sinyal

<BlockImage module="roboids/Raccoon4" id="signal_strength" />

### Parameter

(tidak ada)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.signal_strength()
```

## Tegangan baterai {#battery}

Tegangan baterai

<BlockImage module="roboids/Raccoon4" id="battery" />

### Parameter

(tidak ada)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.battery()
```

## Tombol sedang ditekan? {#button}

Apakah tombol yang dipilih sedang ditekan atau ada peristiwa klik

<BlockImage module="roboids/Raccoon4" id="button" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Nama tombol | teach(teach), play(play), power(power), delete(delete), tombol apa saja(any) | - |
| event | Pilihan daftar turun | Jenis peristiwa | ditekan(pressed), diklik(click), diklik lama(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.button('teach', 'pressed')
```

## Mengatur kecepatan konveyor {#conveyor_speed}

Mengatur kecepatan ban berjalan. Rentang kecepatannya dari -100 sampai 100.

<BlockImage module="roboids/Raccoon4" id="conveyor_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Kecepatan konveyor | bilangan bulat -100 sampai 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_conveyor_speed(100)
```

## Mengatur jarak gerak konveyor {#conveyor_distance}

Menggerakkan konveyor sejauh jarak tertentu.

<BlockImage module="roboids/Raccoon4" id="conveyor_distance" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Jarak tempuh | bilangan real 0 atau lebih | - |
| unit | Pilihan daftar turun | Satuan panjang | cm, mm, inci(inch) | cm |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_move(50, 'cm', wait=True)
```

## Mengubah kecepatan konveyor {#change_conveyor_speed}

Mengubah kecepatan ban berjalan.

<BlockImage module="roboids/Raccoon4" id="change_conveyor_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Besar perubahan kecepatan | bilangan bulat -200 sampai 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_conveyor_speed(10)
```

## Menghentikan konveyor {#stop_conveyor}

Menghentikan konveyor.

<BlockImage module="roboids/Raccoon4" id="stop_conveyor" />

### Parameter

(tidak ada)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.stop_conveyor()
```

## Konveyor sedang berjalan? {#conveyor_running}

Apakah ban berjalan sedang bekerja atau tidak

<BlockImage module="roboids/Raccoon4" id="conveyor_running" />

### Parameter

(tidak ada)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_running()
```

## Tombol konveyor sedang ditekan? {#conveyor_button}

Apakah tombol konveyor sedang ditekan atau ada peristiwa klik

<BlockImage module="roboids/Raccoon4" id="conveyor_button" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| event | Pilihan daftar turun | Jenis peristiwa | ditekan(pressed), diklik(click), diklik lama(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_button('pressed')
```
