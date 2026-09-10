---
title: CSD-01 Sakelar Taktil
---

# CSD-01 Sakelar Taktil

## Deklarasi instans {#instance}

Saat Anda menambahkan blok CSD-01 Sakelar Taktil(CSD01) ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Mulai dengan port input {#set_input_port}

Menetapkan port tempat modul CSD01 (sakelar taktil) dipasang.

<BlockImage module="CheeseStick/CSD01" id="set_input_port" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port yang dipakai | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.set_port('Sa')
```

## Masukan tombol {#button_input}

Nilai masukan tombol pada port yang dipilih  
Mengembalikan 0 bila tombol sedang ditekan dan 1 bila tombol tidak ditekan.

<BlockImage module="CheeseStick/CSD01" id="button_input" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port yang dibaca | Sa, Sb, Sc | port pada panggilan `set_port` terakhir |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_input('Sa')
```

## Tombol ditekan? {#button_pressed}

Apakah tombol sakelar pada port yang dipilih sedang ditekan

<BlockImage module="CheeseStick/CSD01" id="button_pressed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port yang dibaca | Sa, Sb, Sc | port pada panggilan `set_port` terakhir |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_pressed('Sa')
```
