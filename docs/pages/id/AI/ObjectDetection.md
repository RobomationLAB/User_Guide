---
title: Deteksi Objek
---

# Deteksi Objek

## Deklarasi instans {#instance}

Saat Anda menambahkan blok Deteksi Objek(ObjectDetection) ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
object_detection = ObjectDetection(0)
# Bila ada beberapa instans
object_detection_1 = ObjectDetection(1)
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Mengatur kamera {#device}

Mengatur kamera yang dipakai untuk deteksi objek.

<BlockImage module="AI/ObjectDetection" id="device" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Nama perangkat kamera | label kamera sistem | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.device('')
```

## Memuat model objek {#load_model}

Memuat model objek yang sudah dilatih. Anda wajib melakukannya agar fungsi-fungsi modul 'Deteksi Objek' dapat dipakai.

<BlockImage module="AI/ObjectDetection" id="load_model" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| wait | Kotak centang | Menunggu pemuatan selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.load_model(wait=True)
```

## Mengatur jumlah maksimum objek {#max_objects}

Mengatur jumlah objek terbanyak yang dapat ditemukan. Rentang jumlah objeknya dari 0 sampai 10.

<BlockImage module="AI/ObjectDetection" id="max_objects" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Jumlah maksimum objek | bilangan bulat 0 sampai 10 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.max_objects(5)
```

## Mengatur ambang keyakinan {#confidence_threshold}

Mengatur peluang (tingkat keyakinan) terkecil untuk deteksi objek. Hanya bila peluang (tingkat keyakinan) lebih besar dari nilai ini, objeknya ditampilkan di layar. Rentang peluang (tingkat keyakinan) dari 0 sampai 1.

<BlockImage module="AI/ObjectDetection" id="confidence_threshold" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Ambang keyakinan | bilangan real 0 sampai 1 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.confidence_threshold(0.5)
```

## Deteksi objek sekali {#detect_once}

Mencari objek yang ada di layar saat ini lalu menandainya satu kali saja.

<BlockImage module="AI/ObjectDetection" id="detect_once" />

### Parameter

(tidak ada)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detect_once()
```

## Mulai / hentikan deteksi objek berkelanjutan {#detect_continuous}

Terus mengikuti objek yang ada di layar saat ini dan menandainya di layar.

<BlockImage module="AI/ObjectDetection" id="detect_continuous" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Tindakan | mulai(start), hentikan(stop) | - |

### Python
```python
object_detection = ObjectDetection(0)

# unit = "start"
object_detection.detect_continuous()
# unit = "stop"
object_detection.stop()
```

## Menampilkan hasil {#display}

Menentukan apakah hasil deteksi objek ditampilkan di layar kamera atau tidak.

<BlockImage module="AI/ObjectDetection" id="display" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| on | Pilihan daftar turun | Tampilan NYALA / MATI | tampilkan(on=True), sembunyikan(off=False) | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.display(True)
object_detection.display(False)
```

## Informasi posisi objek {#object_data}

Mengembalikan nilai posisi/ukuran objek yang ditentukan.

<BlockImage module="AI/ObjectDetection" id="object_data" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Nama objek | 80 kelas objek (`'person'`, `'bicycle'`, `'car'`, `'motorcycle'`, `'airplane'`, `'bus'`, `'cat'`, `'dog'`, `'apple'`, `'cup'`, `'laptop'`, `'cell_phone'`, dan lain-lain) | - |
| pos | Pilihan daftar turun | Koordinat | x, y | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'x')
object_detection.object('bicycle', 'y')
```

## Informasi persegi panjang objek {#object_square}

Mengembalikan nilai posisi/ukuran persegi panjang yang mengelilingi objek yang ditentukan.

<BlockImage module="AI/ObjectDetection" id="object_square" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Nama objek | 80 kelas objek | - |
| pos | Pilihan daftar turun | Informasi persegi panjang | min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'width')
object_detection.object('car', 'area')
```

## Jarak antara dua objek {#object_distance}

Mengembalikan jarak antara dua kelas objek.

<BlockImage module="AI/ObjectDetection" id="object_distance" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit1 | Pilihan daftar turun | Nama objek pertama | 80 kelas objek | - |
| unit2 | Pilihan daftar turun | Nama objek kedua | 80 kelas objek | - |
| type | Pilihan daftar turun | Jenis jarak | jarak (dilewati atau None), jarak mendatar(horizontal), jarak tegak(vertical) | None |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.get_distance('person', 'bicycle')  # jarak
object_detection.get_distance('person', 'car', 'horizontal')  # jarak mendatar
```

## Keyakinan objek {#object_confidence}

Peluang (tingkat keyakinan) bahwa objek yang dipilih memang benar

<BlockImage module="AI/ObjectDetection" id="object_confidence" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Nama objek | 80 kelas objek | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_confidence('person')
```

## Status model {#model_state}

Mengembalikan status pemuatan model objek.  
Mengembalikan 0 bila belum dimuat, 1 bila sedang dimuat, dan 2 bila pemuatan sudah selesai.

<BlockImage module="AI/ObjectDetection" id="model_state" />

### Parameter

(tidak ada)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.model_state()
```

## Objek terdeteksi? {#detected}

Apakah objek ditemukan atau tidak

<BlockImage module="AI/ObjectDetection" id="detected" />

### Parameter

(tidak ada)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detected()
```

## Objek tertentu terdeteksi? {#object_detected}

Apakah objek yang dipilih ditemukan atau tidak

<BlockImage module="AI/ObjectDetection" id="object_detected" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Nama objek | 80 kelas objek | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_detected('person')
```
