---
title: Kamera Kemudi Otomatis
---

# Kamera Kemudi Otomatis

## Deklarasi instans {#instance}

Saat Anda menambahkan blok Kamera Kemudi Otomatis(SelfDriving) ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
self_driving = SelfDriving(0)
# Bila ada beberapa instans
self_driving_1 = SelfDriving(1)
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Mengatur kamera {#device}

Mengatur kamera yang dipakai untuk kemudi otomatis.

<BlockImage module="AI/SelfDriving" id="device" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Nama perangkat kamera | label kamera sistem | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.device('')
```

## Mengatur warna jalur {#set_lane_color}

Mengatur warna jalur kiri/kanan.

<BlockImage module="AI/SelfDriving" id="set_lane_color" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| left | Pilihan daftar turun | Warna jalur kiri | merah(red), hijau(green), biru(blue) | - |
| right | Pilihan daftar turun | Warna jalur kanan | merah(red), hijau(green), biru(blue) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.set_lane('green', 'blue')
```

## Deteksi warna/jalur sekali {#detect_once}

Mencari warna dan jalur yang ada di layar saat ini lalu menandainya satu kali saja.

<BlockImage module="AI/SelfDriving" id="detect_once" />

### Parameter

(tidak ada)

### Python
```python
self_driving = SelfDriving(0)

self_driving.detect_once()
```

## Mulai / hentikan deteksi warna/jalur berkelanjutan {#detect_continuous}

Terus mengikuti warna dan jalur yang ada di layar saat ini dan menandainya di layar.

<BlockImage module="AI/SelfDriving" id="detect_continuous" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Tindakan | mulai(start), hentikan(stop) | - |

### Python
```python
self_driving = SelfDriving(0)

# unit = "start"
self_driving.detect_continuous()
# unit = "stop"
self_driving.stop()
```

## Menampilkan hasil {#display}

Menentukan apakah hasil pengenalan ditampilkan di layar kamera atau tidak.

<BlockImage module="AI/SelfDriving" id="display" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| on | Pilihan daftar turun | Tampilan NYALA / MATI | tampilkan(on=True), sembunyikan(off=False) | TRUE |

### Python
```python
self_driving = SelfDriving(0)

self_driving.display(True)
self_driving.display(False)
```

## Data jalur {#lane_data}

Mengembalikan nilai posisi atau jarak jalur yang ditentukan.

<BlockImage module="AI/SelfDriving" id="lane_data" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| lane | Pilihan daftar turun | Jalur | kiri(left), kanan(right) | - |
| unit | Pilihan daftar turun | Jenis nilai yang diukur | x, jarak(distance) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane('left', 'x')
self_driving.lane('right', 'distance')
```

## Data warna {#color_data}

Mengembalikan nilai posisi/ukuran warna yang ditentukan.

<BlockImage module="AI/SelfDriving" id="color_data" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| color | Pilihan daftar turun | Nama warna | merah(red), hijau(green), biru(blue) | - |
| unit | Pilihan daftar turun | Jenis koordinat / ukuran | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color('red', 'x')
self_driving.color('green', 'y')
self_driving.color('blue', 'area')
```

## Jarak antara dua warna {#color_to_color}

Mengembalikan jarak antara dua warna.

<BlockImage module="AI/SelfDriving" id="color_to_color" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit1 | Pilihan daftar turun | Warna pertama | merah(red), hijau(green), biru(blue) | - |
| unit2 | Pilihan daftar turun | Warna kedua | merah(red), hijau(green), biru(blue) | - |
| type | Pilihan daftar turun | Jenis jarak | jarak (dilewati atau None), jarak mendatar(horizontal), jarak tegak(vertical) | None |

### Python
```python
self_driving = SelfDriving(0)

self_driving.get_distance('red', 'blue')  # jarak
self_driving.get_distance('green', 'blue', 'horizontal')  # jarak mendatar
```

## Jalur terdeteksi? {#lane_detected}

Apakah jalur tertentu ditemukan atau tidak

<BlockImage module="AI/SelfDriving" id="lane_detected" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| lane | Pilihan daftar turun | Jalur | kiri(left), kanan(right), keduanya(both), apa saja(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane_detected('left')
```

## Warna terdeteksi? {#color_detected}

Apakah area warna tertentu ditemukan atau tidak

<BlockImage module="AI/SelfDriving" id="color_detected" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| color | Pilihan daftar turun | Nama warna | merah(red), hijau(green), biru(blue), apa saja(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color_detected('red')
```
