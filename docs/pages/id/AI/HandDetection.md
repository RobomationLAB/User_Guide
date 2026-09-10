---
title: Deteksi Tangan
---

# Deteksi Tangan

## Deklarasi instans {#instance}

Saat Anda menambahkan blok Deteksi Tangan(HandDetection) ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
hand_detection = HandDetection(0)
# Bila ada beberapa instans
hand_detection_1 = HandDetection(1)
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Mengatur kamera {#device}

Mengatur kamera yang dipakai untuk deteksi tangan.

<BlockImage module="AI/HandDetection" id="device" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Nama perangkat kamera | label kamera sistem | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.device('')
```

## Memuat model tangan {#load_model}

Memuat model tangan yang sudah dilatih. Anda wajib melakukannya agar fungsi-fungsi modul 'Deteksi Tangan' dapat dipakai.

<BlockImage module="AI/HandDetection" id="load_model" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| wait | Kotak centang | Menunggu pemuatan selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.load_model(wait=True)
```

## Mengatur jumlah tangan target {#max_hands}

Menentukan apakah pencarian tangan memakai satu tangan atau kedua tangan sebagai target.

<BlockImage module="AI/HandDetection" id="max_hands" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Jumlah tangan | satu(one), dua(both) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.max_hands('one')
hand_detection.max_hands('both')
```

## Deteksi tangan sekali {#detect_once}

Mencari tangan yang ada di layar saat ini lalu menandainya satu kali saja.

<BlockImage module="AI/HandDetection" id="detect_once" />

### Parameter

(tidak ada)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detect_once()
```

## Mulai / hentikan deteksi tangan berkelanjutan {#detect_continuous}

Terus mengikuti tangan yang ada di layar saat ini dan menandainya di layar.

<BlockImage module="AI/HandDetection" id="detect_continuous" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Tindakan | mulai(start), hentikan(stop) | - |

### Python
```python
hand_detection = HandDetection(0)

# unit = "start"
hand_detection.detect_continuous()
# unit = "stop"
hand_detection.stop()
```

## Menampilkan hasil {#display}

Menentukan apakah hasil deteksi tangan ditampilkan di layar kamera atau tidak.

<BlockImage module="AI/HandDetection" id="display" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| on | Pilihan daftar turun | Tampilan NYALA / MATI | tampilkan(on=True), sembunyikan(off=False) | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.display(True)
hand_detection.display(False)
```

## Koordinat bagian tangan {#hand_data}

Mengembalikan informasi posisi telapak/pergelangan tangan yang ditentukan.

<BlockImage module="AI/HandDetection" id="hand_data" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| side | Pilihan daftar turun | Sisi tangan | kiri(left), kanan(right) | - |
| unit | Pilihan daftar turun | Bagian tangan | telapak(palm), pergelangan(wrist) | - |
| pos | Pilihan daftar turun | Jenis koordinat / ukuran | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'palm', 'x')
hand_detection.hand('right', 'wrist', 'y')
hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Koordinat sendi jari {#joint_data}

Mengembalikan koordinat sendi jari yang ditentukan.

<BlockImage module="AI/HandDetection" id="joint_data" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| side | Pilihan daftar turun | Sisi tangan | kiri(left), kanan(right) | - |
| unit | Pilihan daftar turun | Jari | ibu jari(thumb), telunjuk(index), tengah(middle), manis(ring), kelingking(pinky) | - |
| joint | Pilihan daftar turun | Letak sendi | sendi pertama(first), sendi kedua(second), sendi ketiga(third), ujung(last) | - |
| pos | Pilihan daftar turun | Koordinat | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.finger('left', 'index', 'first', 'x')
hand_detection.finger('right', 'thumb', 'last', 'y')
```

## Informasi persegi panjang tangan {#hand_square}

Mengembalikan nilai posisi/ukuran persegi panjang yang mengelilingi tangan yang ditentukan.

<BlockImage module="AI/HandDetection" id="hand_square" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| side | Pilihan daftar turun | Sisi tangan | kiri(left), kanan(right) | - |
| unit | Pilihan daftar turun | Bagian tangan | tangan(hand), telapak(palm) | - |
| pos | Pilihan daftar turun | Informasi persegi panjang | posisi x min(min_x), posisi x maks(max_x), posisi y min(min_y), posisi y maks(max_y), lebar(width), tinggi(height), luas(area) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Jarak antara dua tangan {#hand_to_hand_distance}

Mengembalikan jarak antara dua bagian tangan.

<BlockImage module="AI/HandDetection" id="hand_to_hand_distance" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit1 | Nilai masukan (teks) | Bagian tangan pertama | tangan: `'side_unit'` (contoh: `'left_palm'`). side=left/right, unit=palm/wrist/hand  | - |
| unit2 | Nilai masukan (teks) | Bagian tangan kedua | tangan: `'side_unit'` (contoh: `'right_palm'`). side=left/right, unit=palm/wrist/hand | - |
| type | Pilihan daftar turun | Jenis jarak | jarak (dilewati atau None), jarak mendatar(horizontal), jarak tegak(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# tangan ↔ tangan / jarak
hand_detection.get_distance('left_palm', 'right_palm')  
```

## Jarak antara tangan dan jari {#hand_to_joint_distance}

Mengembalikan jarak antara sebuah bagian tangan dan sebuah sendi jari.

<BlockImage module="AI/HandDetection" id="hand_to_joint_distance" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit1 | Nilai masukan (teks) | Bagian pertama | tangan: `'side_unit'` (contoh: `'left_palm'`).side=left/right, unit=palm/wrist/hand | - |
| unit2 | Nilai masukan (teks) | Bagian kedua | jari: `'side_unit_joint'` (contoh: `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Pilihan daftar turun | Jenis jarak | jarak (dilewati atau None), jarak mendatar(horizontal), jarak tegak(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# tangan ↔ sendi jari / jarak mendatar
hand_detection.get_distance('left_palm', 'right_index_first')
```

## Jarak antara dua jari {#joint_to_joint_distance}

Mengembalikan jarak antara dua sendi jari.

<BlockImage module="AI/HandDetection" id="joint_to_joint_distance" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit1 | Nilai masukan (teks) | Bagian pertama | jari: `'side_unit_joint'` (contoh: `'left_thumb_last'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| unit2 | Nilai masukan (teks) | Bagian kedua | jari: `'side_unit_joint'` (contoh: `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Pilihan daftar turun | Jenis jarak | jarak (dilewati atau None), jarak mendatar(horizontal), jarak tegak(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# sendi jari ↔ sendi jari / jarak tegak
hand_detection.get_distance('left_thumb_last', 'right_index_first', 'vertical')
```

## Status model {#model_state}

Mengembalikan status pemuatan model tangan.  
Mengembalikan 0 bila belum dimuat, 1 bila sedang dimuat, dan 2 bila pemuatan sudah selesai.

<BlockImage module="AI/HandDetection" id="model_state" />

### Parameter

(tidak ada)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.model_state()
```

## Tangan terdeteksi? {#detected}

Apakah tangan ditemukan atau tidak

<BlockImage module="AI/HandDetection" id="detected" />

### Parameter

(tidak ada)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detected()
```
