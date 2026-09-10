---
title: Deteksi Wajah
---

# Deteksi Wajah

## Deklarasi instans {#instance}

Saat Anda menambahkan blok Deteksi Wajah(FaceDetection) ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
face_detection = FaceDetection(0)
# Bila ada beberapa instans
face_detection_1 = FaceDetection(1)
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Mengatur kamera {#device}

Mengatur kamera yang dipakai untuk deteksi wajah.

<BlockImage module="AI/FaceDetection" id="device" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Nama perangkat kamera | label kamera sistem | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.device('')
```

## Memuat model wajah {#load_model}

Memuat model wajah yang sudah dilatih. Anda wajib melakukannya agar fungsi-fungsi modul 'Deteksi Wajah' dapat dipakai.

<BlockImage module="AI/FaceDetection" id="load_model" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| wait | Kotak centang | Menunggu pemuatan selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.load_model(wait=True)
```

## Deteksi wajah sekali {#detect_once}

Mencari wajah yang ada di layar saat ini lalu menandainya satu kali saja.

<BlockImage module="AI/FaceDetection" id="detect_once" />

### Parameter

(tidak ada)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detect_once()
```

## Mulai / hentikan deteksi wajah berkelanjutan {#detect_continuous}

Terus mengikuti wajah yang ada di layar saat ini dan menandainya di layar.

<BlockImage module="AI/FaceDetection" id="detect_continuous" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Tindakan | mulai(start), hentikan(stop) | - |

### Python
```python
face_detection = FaceDetection(0)

# unit = "start"
face_detection.detect_continuous()
# unit = "stop"
face_detection.stop()
```

## Menampilkan hasil {#display}

Menentukan apakah hasil deteksi wajah ditampilkan di layar kamera atau tidak.

<BlockImage module="AI/FaceDetection" id="display" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| on | Pilihan daftar turun | Tampilan NYALA / MATI | tampilkan(on=True), sembunyikan(off=False) | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.display(True)
face_detection.display(False)
```

## Posisi bagian wajah {#face_data}

Mengembalikan koordinat posisi wajah atau bagian wajah.

<BlockImage module="AI/FaceDetection" id="face_data" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Bagian wajah | wajah(face), mata kiri(left eye), mata kanan(right eye), telinga kiri(left ear), telinga kanan(right ear), hidung(nose), mulut(mouth) | - |
| pos | Pilihan daftar turun | Jenis koordinat | x, y | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('x')
face_detection.left_eye('y')
face_detection.right_eye('x')
face_detection.left_ear('x')
face_detection.right_ear('y')
face_detection.nose('x')
face_detection.mouth('y')
```

## Informasi persegi panjang wajah {#face_square}

Mengembalikan nilai posisi/ukuran persegi panjang yang mengelilingi wajah.

<BlockImage module="AI/FaceDetection" id="face_square" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| pos | Pilihan daftar turun | Informasi persegi panjang | posisi x min(min_x), posisi x maks(max_x), posisi y min(min_y), posisi y maks(max_y), lebar(width), tinggi(height), luas(area) | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('min_x')
face_detection.face('width')
face_detection.face('area')
```

## Jarak antara dua bagian {#distance}

Mengembalikan jarak antara dua bagian wajah.

<BlockImage module="AI/FaceDetection" id="distance" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit1 | Pilihan daftar turun | Bagian pertama | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| unit2 | Pilihan daftar turun | Bagian kedua | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| type | Pilihan daftar turun | Jenis jarak | jarak (dilewati atau None), jarak mendatar(horizontal), jarak tegak(vertical) | None |

### Python
```python
face_detection = FaceDetection(0)

face_detection.get_distance('left_eye', 'right_eye')  # jarak
face_detection.get_distance('left_eye', 'right_eye', 'horizontal')  # jarak mendatar
face_detection.get_distance('nose', 'mouth', 'vertical')  # jarak tegak
```

## Status model {#model_state}

Mengembalikan status pemuatan model wajah.  
Mengembalikan 0 bila belum dimuat, 1 bila sedang dimuat, dan 2 bila pemuatan sudah selesai.

<BlockImage module="AI/FaceDetection" id="model_state" />

### Parameter

(tidak ada)

### Python
```python
face_detection = FaceDetection(0)

face_detection.model_state()
```

## Wajah terdeteksi? {#detected}

Apakah wajah ditemukan atau tidak

<BlockImage module="AI/FaceDetection" id="detected" />

### Parameter

(tidak ada)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detected()
```
