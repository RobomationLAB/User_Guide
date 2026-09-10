---
title: CSD-07 Sensor Suara
---

# CSD-07 Sensor Suara

## Deklarasi instans {#instance}

Saat Anda menambahkan blok CSD-07 Sensor Suara(CSD07) ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Mulai dengan port input {#set_input_port}

Menetapkan port tempat modul CSD07 (sensor suara) dipasang.

<BlockImage module="CheeseStick/CSD07" id="set_input_port" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port yang dipakai | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.set_port('Sa')
```

## Nilai sensor suara {#get_input}

Nilai sensor suara pada port yang dipilih

<BlockImage module="CheeseStick/CSD07" id="get_input" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port yang dibaca | Sa, Sb, Sc | port pada panggilan `set_port` terakhir |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.get_input('Sa')
```
