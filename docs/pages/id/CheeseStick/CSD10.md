---
title: CSD-10 Sensor ALS
---

# CSD-10 Sensor ALS

## Deklarasi instans {#instance}

Saat Anda menambahkan blok CSD-10 Sensor ALS(CSD10) ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Mulai dengan port input {#set_input_port}

Menetapkan port tempat modul CSD10 (sensor cahaya) dipasang.

<BlockImage module="CheeseStick/CSD10" id="set_input_port" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port yang dipakai | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.set_port('Sa')
```

## Nilai sensor ALS {#get_input}

Nilai sensor cahaya pada port yang dipilih

<BlockImage module="CheeseStick/CSD10" id="get_input" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port yang dibaca | Sa, Sb, Sc | port pada panggilan `set_port` terakhir |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.get_input('Sa')
```
