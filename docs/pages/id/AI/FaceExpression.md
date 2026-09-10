---
title: Ekspresi Wajah
---

# Ekspresi Wajah

## Deklarasi instans {#instance}

Saat Anda menambahkan blok Ekspresi Wajah(FaceExpression) ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
face_expression = FaceExpression(0)
# Bila ada beberapa instans
face_expression_1 = FaceExpression(1)
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Mengatur kamera {#device}

Mengatur kamera yang dipakai untuk mengenali usia, jenis kelamin, dan ekspresi.

<BlockImage module="AI/FaceExpression" id="device" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Nama perangkat kamera | label kamera sistem | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.device('')
```

## Memuat model ekspresi wajah {#load_model}

Memuat model usia, jenis kelamin, dan ekspresi yang sudah dilatih. Anda wajib melakukannya agar fungsi-fungsi modul 'Ekspresi Wajah' dapat dipakai.

<BlockImage module="AI/FaceExpression" id="load_model" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| wait | Kotak centang | Menunggu pemuatan selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.load_model(wait=True)
```

## Deteksi ekspresi wajah sekali {#detect_once}

Mencari wajah yang ada di layar saat ini lalu menandainya satu kali saja.

<BlockImage module="AI/FaceExpression" id="detect_once" />

### Parameter

(tidak ada)

### Python
```python
face_expression = FaceExpression(0)

face_expression.detect_once()
```

## Mulai / hentikan deteksi ekspresi wajah berkelanjutan {#detect_continuous}

Terus mengikuti wajah yang ada di layar saat ini dan menandainya di layar.

<BlockImage module="AI/FaceExpression" id="detect_continuous" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Tindakan | mulai(start), hentikan(stop) | - |

### Python
```python
face_expression = FaceExpression(0)

# unit = "start"
face_expression.detect_continuous()
# unit = "stop"
face_expression.stop()
```

## Menampilkan hasil {#display}

Menentukan apakah hasil pengenalan ditampilkan di layar kamera atau tidak.

<BlockImage module="AI/FaceExpression" id="display" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| on | Pilihan daftar turun | Tampilan NYALA / MATI | tampilkan(on=True), sembunyikan(off=False) | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.display(True)
face_expression.display(False)
```

## Usia {#age}

Usia

<BlockImage module="AI/FaceExpression" id="age" />

### Parameter

(tidak ada)

### Python
```python
face_expression = FaceExpression(0)

face_expression.age()
```

## Jenis kelamin {#gender}

Jenis kelamin

<BlockImage module="AI/FaceExpression" id="gender" />

### Parameter

(tidak ada)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender()
```

## Ekspresi {#expression}

Ekspresi

<BlockImage module="AI/FaceExpression" id="expression" />

### Parameter

(tidak ada)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression()
```

## Jenis kelamin terdeteksi? {#gender_detected}

Apakah jenis kelamin dikenali atau tidak

<BlockImage module="AI/FaceExpression" id="gender_detected" />

### Parameter

(tidak ada)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_detected()
```

## Apakah jenis kelaminnya ~? {#gender_check}

Mengembalikan **benar (True) / salah (False)** sesuai apakah jenis kelamin yang dikenali cocok dengan nilai yang Anda tentukan.

<BlockImage module="AI/FaceExpression" id="gender_check" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Jenis kelamin | laki-laki(male), perempuan(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_gender('male')
face_expression.is_gender('female')
```

## Tingkat keyakinan jenis kelamin {#gender_confidence}

Peluang (tingkat keyakinan) bahwa jenis kelaminnya adalah yang dipilih

<BlockImage module="AI/FaceExpression" id="gender_confidence" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Jenis kelamin | laki-laki(male), perempuan(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_confidence('male')
face_expression.gender_confidence('female')
```

## Ekspresi terdeteksi? {#expression_detected}

Apakah ekspresi dikenali atau tidak

<BlockImage module="AI/FaceExpression" id="expression_detected" />

### Parameter

(tidak ada)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_detected()
```

## Apakah ekspresinya ~? {#expression_check}

Mengembalikan **benar (True) / salah (False)** sesuai apakah ekspresi yang dikenali cocok dengan nilai yang Anda tentukan.

<BlockImage module="AI/FaceExpression" id="expression_check" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Ekspresi | marah(angry), jijik(disgusted), takut(fearful), senang(happy), netral(neutral), sedih(sad), terkejut(surprised) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_expression('happy')
face_expression.is_expression('sad')
```

## Tingkat keyakinan ekspresi {#expression_confidence}

Peluang (tingkat keyakinan) bahwa ekspresinya adalah yang dipilih

<BlockImage module="AI/FaceExpression" id="expression_confidence" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Ekspresi | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_confidence('happy')
face_expression.expression_confidence('angry')
```

## Status model {#model_state}

Mengembalikan status pemuatan model usia, jenis kelamin, dan ekspresi.  
Mengembalikan 0 bila belum dimuat, 1 bila sedang dimuat, dan 2 bila pemuatan sudah selesai.

<BlockImage module="AI/FaceExpression" id="model_state" />

### Parameter

(tidak ada)

### Python
```python
face_expression = FaceExpression(0)

face_expression.model_state()
```
