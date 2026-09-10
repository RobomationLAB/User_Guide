---
title: Deteksi Penanda ArUco
---

# Deteksi Penanda ArUco

## Deklarasi instans {#instance}

Saat Anda menambahkan blok Deteksi Penanda ArUco(ArucoMarker) ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
aruco_marker = ArucoMarker(0)
# Bila ada beberapa instans
aruco_marker_1 = ArucoMarker(1)
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Mengatur kamera {#device}

Mengatur kamera yang dipakai untuk deteksi penanda ArUco.

<BlockImage module="AI/ArucoMarker" id="device" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Nama perangkat kamera | label kamera sistem | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.device('')
```

## Mengatur jumlah maksimum penanda {#max_count}

Mengatur jumlah penanda terbanyak yang dapat dikenali. Rentang jumlah penandanya dari 0 sampai 10.

<BlockImage module="AI/ArucoMarker" id="max_count" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | Jumlah maksimum penanda | bilangan bulat 0 sampai 10 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.max_count(5)
```

## Deteksi penanda sekali {#detect_once}

Mencari penanda yang ada di layar saat ini lalu menandainya satu kali saja.

<BlockImage module="AI/ArucoMarker" id="detect_once" />

### Parameter

(tidak ada)

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.detect_once()
```

## Mulai / hentikan deteksi penanda berkelanjutan {#detect_continuous}

Terus mengikuti penanda yang ada di layar saat ini dan menandainya di layar.

<BlockImage module="AI/ArucoMarker" id="detect_continuous" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Tindakan | mulai(start), hentikan(stop) | - |

### Python
```python
aruco_marker = ArucoMarker(0)

# unit = "start"
aruco_marker.detect_continuous()
# unit = "stop"
aruco_marker.stop()
```

## Menampilkan hasil {#display}

Menentukan apakah hasil deteksi penanda ditampilkan di layar kamera atau tidak.

<BlockImage module="AI/ArucoMarker" id="display" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| on | Pilihan daftar turun | Tampilan NYALA / MATI | tampilkan(on=True), sembunyikan(off=False) | TRUE |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.display(True)
aruco_marker.display(False)
```

## Data penanda {#marker_data}

Mengembalikan nilai posisi/ukuran penanda dengan ID yang ditentukan.

<BlockImage module="AI/ArucoMarker" id="marker_data" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | ID penanda | bilangan bulat 0 atau lebih | - |
| unit | Pilihan daftar turun | Jenis nilai yang diukur | x, y, min_x, max_x, min_y, max_y, width, height, area, rotation | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker(0, 'x')
aruco_marker.marker(3, 'area')
```

## Jarak antara dua penanda {#marker_to_marker}

Mengembalikan jarak antara dua penanda.

<BlockImage module="AI/ArucoMarker" id="marker_to_marker" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit1 | Nilai masukan (blok) | ID penanda pertama | bilangan bulat 0 atau lebih | - |
| unit2 | Nilai masukan (blok) | ID penanda kedua | bilangan bulat 0 atau lebih | - |
| type | Pilihan daftar turun | Jenis jarak | jarak (dilewati atau None), jarak mendatar(horizontal), jarak tegak(vertical) | None |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.get_distance(0, 1)  # jarak
aruco_marker.get_distance(0, 2, 'horizontal')  # jarak mendatar
```

## Penanda terdeteksi? {#marker_detected}

Apakah penanda dengan nilai id tertentu ditemukan atau tidak

<BlockImage module="AI/ArucoMarker" id="marker_detected" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (blok) | ID penanda | bilangan bulat 0 atau lebih | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker_detected(0)
```
