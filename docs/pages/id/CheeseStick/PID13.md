---
title: PID-13 Joystick & Tombol
---

# PID-13 Joystick & Tombol

## Deklarasi instans {#instance}

Saat Anda menambahkan blok PID-13 Joystick & Tombol(PID13) ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Memulai joystick {#start}

Membuat joystick dan tombol dapat dipakai.

<BlockImage module="CheeseStick/PID13" id="start" />

### Parameter

(tidak ada)

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.start()
```

## Nilai joystick {#joystick}

Nilai x / y joystick.  
Rentang tiap nilainya dari -128 sampai 127.

<BlockImage module="CheeseStick/PID13" id="joystick" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Sumbu yang diukur | x, y | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.joystick('x')
```

## Nilai masukan tombol {#button_input}

Keadaan masukan tombol yang dipilih  
Mengembalikan 1 bila tombol sedang ditekan dan 0 bila tombol tidak ditekan.

<BlockImage module="CheeseStick/PID13" id="button_input" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Nama tombol | tombol A(a), tombol B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_input('a')
```

## Tombol diklik? {#button_click}

Apakah tombol yang dipilih diklik atau tidak  
Blok ini hanya mengembalikan benar tepat saat tombol yang dipilih diklik, selebihnya mengembalikan salah.

<BlockImage module="CheeseStick/PID13" id="button_click" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Nama tombol | tombol A(a), tombol B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_click('a')
```
