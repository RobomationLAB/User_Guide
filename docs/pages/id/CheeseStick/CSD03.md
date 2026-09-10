---
title: CSD-03 Potensiometer Putar
---

# CSD-03 Potensiometer Putar

## Deklarasi instans {#instance}

Saat Anda menambahkan blok CSD-03 Potensiometer Putar(CSD03) ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Mulai dengan port input {#set_input_port}

Menetapkan port tempat modul CSD03 (potensiometer) dipasang.

<BlockImage module="CheeseStick/CSD03" id="set_input_port" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port yang dipakai | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_port('Sa')
```

## Mengatur rentang input {#set_input_range}

Mengubah nilai input port yang dipilih menjadi rentang minimum~maksimum yang ditentukan.  
Rentang nilai inputnya dari 0 sampai 255.  
Rentang nilai hasil ubahnya dari -100 sampai 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port yang dipilih | Sa, Sb, Sc | - |
| src_min | Nilai masukan (bidang) | Nilai minimum sumber | bilangan bulat 0 sampai 255 | - |
| src_max | Nilai masukan (bidang) | Nilai maksimum sumber | bilangan bulat 0 sampai 255 | - |
| dst_min | Nilai masukan (bidang) | Nilai minimum setelah diubah | bilangan bulat -100 sampai 100 | - |
| dst_max | Nilai masukan (bidang) | Nilai maksimum setelah diubah | bilangan bulat -100 sampai 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range('Sa', 0, 255, 0, 100)
```

## Mengatur rentang input dengan nilai tengah {#set_input_range_median}

Mengubah nilai input port yang dipilih menjadi rentang minimum~tengah~maksimum yang ditentukan.  
Rentang nilai inputnya dari 0 sampai 255.  
Rentang nilai hasil ubahnya dari -100 sampai 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range_median" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port yang dipilih | Sa, Sb, Sc | - |
| src_min | Nilai masukan (bidang) | Nilai minimum sumber | bilangan bulat 0 sampai 255 | - |
| src_median | Nilai masukan (bidang) | Nilai tengah sumber | bilangan bulat 0 sampai 255 | - |
| src_max | Nilai masukan (bidang) | Nilai maksimum sumber | bilangan bulat 0 sampai 255 | - |
| dst_min | Nilai masukan (bidang) | Nilai minimum setelah diubah | bilangan bulat -100 sampai 100 | - |
| dst_median | Nilai masukan (bidang) | Nilai tengah setelah diubah | bilangan bulat -100 sampai 100 | - |
| dst_max | Nilai masukan (bidang) | Nilai maksimum setelah diubah | bilangan bulat -100 sampai 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Nilai masukan {#get_input}

Nilai masukan potensiometer putar pada port yang dipilih  
Bila Anda belum mengatur rentang input, nilainya berada antara 0 dan 255.

<BlockImage module="CheeseStick/CSD03" id="get_input" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port yang dibaca | Sa, Sb, Sc | port pada panggilan `set_port` terakhir |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.get_input('Sa')
```
