---
title: Deteksi Warna
---

# Deteksi Warna

## Deklarasi instans {#instance}

Saat Anda menambahkan blok Deteksi Warna(ColorDetection) ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
color_detection = ColorDetection(0)
# Bila ada beberapa instans
color_detection_1 = ColorDetection(1)
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Mengatur kamera {#device}

Mengatur kamera yang dipakai untuk deteksi warna.

<BlockImage module="AI/ColorDetection" id="device" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Nama perangkat kamera | label kamera sistem | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.device('')
```

## Mendaftarkan ke warna target {#register_color}

Menambahkan sebuah warna ke daftar warna yang dikenali oleh deteksi warna.

<BlockImage module="AI/ColorDetection" id="register_color" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| color | Pilihan daftar turun | Nama warna | hitam(black), merah(red), kuning(yellow), hijau(green), sian(cyan), biru(blue), magenta(magenta), putih(white) | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.register_color('red', wait=True)
```

## Menghapus dari warna target {#delete_color}

Menghapus sebuah warna dari daftar warna yang dikenali oleh deteksi warna.

<BlockImage module="AI/ColorDetection" id="delete_color" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| color | Pilihan daftar turun | Nama warna | hitam(black), merah(red), kuning(yellow), hijau(green), sian(cyan), biru(blue), magenta(magenta), putih(white) | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.delete_color('blue', wait=True)
```

## Mengatur kondisi deteksi berdasarkan luas {#area_condition}

Menetapkan luas terkecil area warna yang dikenali. Hanya bila luas areanya lebih besar dari nilai ini, area itu ditampilkan di layar.

<BlockImage module="AI/ColorDetection" id="area_condition" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Nilai kondisi luas | bilangan real 0 atau lebih | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.area_condition(50)
```

## Deteksi warna sekali {#detect_once}

Di antara warna-warna yang dikenali, mencari warna yang ada di layar saat ini lalu menandai areanya satu kali saja.

<BlockImage module="AI/ColorDetection" id="detect_once" />

### Parameter

(tidak ada)

### Python
```python
color_detection = ColorDetection(0)

color_detection.detect_once()
```

## Mulai / hentikan deteksi warna berkelanjutan {#detect_continuous}

Di antara warna-warna yang dikenali, terus mengikuti warna yang ada di layar saat ini dan menandai areanya di layar.

<BlockImage module="AI/ColorDetection" id="detect_continuous" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Tindakan | mulai(start), hentikan(stop) | - |

### Python
```python
color_detection = ColorDetection(0)

# unit = "start"
color_detection.detect_continuous()
# unit = "stop"
color_detection.stop()
```

## Menampilkan hasil {#display}

Menentukan apakah hasil deteksi warna ditampilkan di layar kamera atau tidak.

<BlockImage module="AI/ColorDetection" id="display" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| on | Pilihan daftar turun | Tampilan NYALA / MATI | tampilkan(on=True), sembunyikan(off=False) | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.display(True)
color_detection.display(False)
```

## Informasi area warna {#color_data}

Mengembalikan nilai posisi/ukuran warna yang ditentukan.

<BlockImage module="AI/ColorDetection" id="color_data" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| color | Pilihan daftar turun | Nama warna | hitam(black), merah(red), kuning(yellow), hijau(green), sian(cyan), biru(blue), magenta(magenta), putih(white) | - |
| pos | Pilihan daftar turun | Jenis koordinat / ukuran | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color('red', 'x')
color_detection.color('green', 'y')
color_detection.color('blue', 'area')
```

## Warna tertentu terdeteksi? {#color_detected}

Apakah warna yang dipilih ditemukan atau tidak

<BlockImage module="AI/ColorDetection" id="color_detected" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| color | Pilihan daftar turun | Nama warna | hitam(black), merah(red), kuning(yellow), hijau(green), sian(cyan), biru(blue), magenta(magenta), putih(white) | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color_detected('red')
```
