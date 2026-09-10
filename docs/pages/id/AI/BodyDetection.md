---
title: Deteksi Tubuh
---

# Deteksi Tubuh

## Deklarasi instans {#instance}

Saat Anda menambahkan blok Deteksi Tubuh(BodyDetection) ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
body_detection = BodyDetection(0)
# Bila ada beberapa instans
body_detection_1 = BodyDetection(1)
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Mengatur kamera {#device}

Mengatur kamera yang dipakai untuk deteksi tubuh.

<BlockImage module="AI/BodyDetection" id="device" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Nama perangkat kamera | label kamera sistem | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.device('')
```

## Memuat model tubuh {#load_model}

Memuat model tubuh yang sudah dilatih. Anda wajib melakukannya agar fungsi-fungsi modul 'Deteksi Tubuh' dapat dipakai.

<BlockImage module="AI/BodyDetection" id="load_model" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| wait | Kotak centang | Menunggu pemuatan selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.load_model(wait=True)
```

## Deteksi tubuh sekali {#detect_once}

Mencari tubuh yang ada di layar saat ini lalu menandainya satu kali saja.

<BlockImage module="AI/BodyDetection" id="detect_once" />

### Parameter

(tidak ada)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detect_once()
```

## Mulai / hentikan deteksi tubuh berkelanjutan {#detect_continuous}

Terus mengikuti tubuh yang ada di layar saat ini dan menandainya di layar.

<BlockImage module="AI/BodyDetection" id="detect_continuous" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Tindakan | mulai(start), hentikan(stop) | - |

### Python
```python
body_detection = BodyDetection(0)

# unit = "start"
body_detection.detect_continuous()
# unit = "stop"
body_detection.stop()
```

## Menampilkan hasil {#display}

Menentukan apakah hasil deteksi tubuh ditampilkan di layar kamera atau tidak.

<BlockImage module="AI/BodyDetection" id="display" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| on | Pilihan daftar turun | Tampilan NYALA / MATI | tampilkan(on=True), sembunyikan(off=False) | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.display(True)
body_detection.display(False)
```

## Koordinat bagian tubuh {#body_data}

Mengembalikan koordinat tiap bagian tubuh.

<BlockImage module="AI/BodyDetection" id="body_data" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Bagian tubuh | hidung(nose), mulut(mouth), mata kiri(left eye), mata kanan(right eye), telinga kiri(left ear), telinga kanan(right ear), bahu kiri(left shoulder), bahu kanan(right shoulder), siku kiri(left elbow), siku kanan(right elbow), pergelangan tangan kiri(left wrist), pergelangan tangan kanan(right wrist), tangan kiri(left hand), tangan kanan(right hand), pinggul kiri(left hip), pinggul kanan(right hip), lutut kiri(left knee), lutut kanan(right knee), pergelangan kaki kiri(left ankle), pergelangan kaki kanan(right ankle), kaki kiri(left foot), kaki kanan(right foot) | - |
| pos | Pilihan daftar turun | Koordinat | x, y | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.nose('x')
body_detection.mouth('y')
body_detection.left_eye('x')
body_detection.right_shoulder('y')
body_detection.left_hand('x')
```

## Jarak antara dua bagian {#body_distance}

Mengembalikan jarak antara dua bagian tubuh.

<BlockImage module="AI/BodyDetection" id="body_distance" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit1 | Pilihan daftar turun | Bagian tubuh pertama | (lihat tabel bagian tubuh di atas) | - |
| unit2 | Pilihan daftar turun | Bagian tubuh kedua | (lihat tabel bagian tubuh di atas) | - |
| type | Pilihan daftar turun | Jenis jarak | jarak (dilewati atau None), jarak mendatar(horizontal), jarak tegak(vertical) | None |

### Python
```python
body_detection = BodyDetection(0)

body_detection.get_distance('left_shoulder', 'right_shoulder')  # jarak
body_detection.get_distance('left_wrist', 'right_wrist', 'horizontal')  # jarak mendatar
body_detection.get_distance('left_hip', 'left_knee', 'vertical')  # jarak tegak
```

## Status model {#model_state}

Mengembalikan status pemuatan model tubuh.  
Mengembalikan 0 bila belum dimuat, 1 bila sedang dimuat, dan 2 bila pemuatan sudah selesai.

<BlockImage module="AI/BodyDetection" id="model_state" />

### Parameter

(tidak ada)

### Python
```python
body_detection = BodyDetection(0)

body_detection.model_state()
```

## Tubuh terdeteksi? {#detected}

Apakah tubuh ditemukan atau tidak

<BlockImage module="AI/BodyDetection" id="detected" />

### Parameter

(tidak ada)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detected()
```
