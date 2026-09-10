---
title: Deteksi Wajah Terperinci
---

# Deteksi Wajah Terperinci

## Deklarasi instans {#instance}

Saat Anda menambahkan blok Deteksi Wajah Terperinci(DetailedFaceDetection) ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
detailed_face_detection = DetailedFaceDetection(0)
# Bila ada beberapa instans
detailed_face_detection_1 = DetailedFaceDetection(1)
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Mengatur kamera {#device}

Mengatur kamera yang dipakai untuk deteksi wajah terperinci.

<BlockImage module="AI/DetailedFaceDetection" id="device" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Nama perangkat kamera | label kamera sistem | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.device('')
```

## Memuat model wajah {#load_model}

Memuat model wajah yang sudah dilatih. Anda wajib melakukannya agar fungsi-fungsi modul 'Deteksi Wajah Terperinci' dapat dipakai.

<BlockImage module="AI/DetailedFaceDetection" id="load_model" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| wait | Kotak centang | Menunggu pemuatan selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.load_model(wait=True)
```

## Deteksi wajah sekali {#detect_once}

Mencari wajah yang ada di layar saat ini lalu menandainya satu kali saja.

<BlockImage module="AI/DetailedFaceDetection" id="detect_once" />

### Parameter

(tidak ada)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detect_once()
```

## Mulai / hentikan deteksi wajah berkelanjutan {#detect_continuous}

Terus mengikuti wajah yang ada di layar saat ini dan menandainya di layar.

<BlockImage module="AI/DetailedFaceDetection" id="detect_continuous" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Tindakan | mulai(start), hentikan(stop) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

# unit = "start"
detailed_face_detection.detect_continuous()
# unit = "stop"
detailed_face_detection.stop()
```

## Menampilkan hasil {#display}

Menentukan apakah hasil deteksi wajah ditampilkan di layar kamera atau tidak.

<BlockImage module="AI/DetailedFaceDetection" id="display" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| on | Pilihan daftar turun | Tampilan NYALA / MATI | tampilkan(on=True), sembunyikan(off=False) | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.display(True)
detailed_face_detection.display(False)
```

## Koordinat bagian wajah {#face_data}

Mengembalikan koordinat tiap bagian wajah.

<BlockImage module="AI/DetailedFaceDetection" id="face_data" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Bagian wajah | wajah(face), mata kiri(left eye), mata kanan(right eye), mulut(mouth), hidung(nose), bibir atas(upper lip), bibir bawah(lower lip), sudut bibir kiri(left lip), sudut bibir kanan(right lip), pupil kiri(left pupil), pupil kanan(right pupil) | - |
| pos | Pilihan daftar turun | Koordinat | x, y | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('x')
detailed_face_detection.left_eye('y')
detailed_face_detection.upper_lip('x')
detailed_face_detection.right_pupil('y')
```

## Informasi persegi panjang bagian wajah {#face_square}

Mengembalikan nilai posisi/ukuran persegi panjang yang mengelilingi tiap bagian wajah.

<BlockImage module="AI/DetailedFaceDetection" id="face_square" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Bagian wajah | wajah(face), mata kiri(left eye), mata kanan(right eye), mulut(mouth) | - |
| pos | Pilihan daftar turun | Informasi persegi panjang | posisi x min(min_x), posisi x maks(max_x), posisi y min(min_y), posisi y maks(max_y), lebar(width), tinggi(height), luas(area) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('min_x')
detailed_face_detection.left_eye('area')
```

## Jarak antara dua bagian {#distance}

Mengembalikan jarak antara dua bagian wajah.

<BlockImage module="AI/DetailedFaceDetection" id="distance" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit1 | Pilihan daftar turun | Bagian pertama | nama bagian wajah | - |
| unit2 | Pilihan daftar turun | Bagian kedua | nama bagian wajah | - |
| type | Pilihan daftar turun | Jenis jarak | jarak (dilewati atau None), jarak mendatar(horizontal), jarak tegak(vertical) | None |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.get_distance('left_eye', 'right_eye')  # jarak
detailed_face_detection.get_distance('left_pupil', 'right_pupil', 'horizontal')  # jarak mendatar
detailed_face_detection.get_distance('upper_lip', 'lower_lip', 'vertical')  # jarak tegak
```

## Status model {#model_state}

Mengembalikan status pemuatan model wajah.  
Mengembalikan 0 bila belum dimuat, 1 bila sedang dimuat, dan 2 bila pemuatan sudah selesai.

<BlockImage module="AI/DetailedFaceDetection" id="model_state" />

### Parameter

(tidak ada)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.model_state()
```

## Wajah terdeteksi? {#detected}

Apakah wajah ditemukan atau tidak

<BlockImage module="AI/DetailedFaceDetection" id="detected" />

### Parameter

(tidak ada)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detected()
```
