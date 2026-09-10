---
title: CSD-09 Motor
---

# CSD-09 Motor

## Deklarasi instans {#instance}

Saat Anda menambahkan blok CSD-09 Motor(CSD09) ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Memulai motor servo {#start_servo_motor}

Menetapkan port yang dipakai motor servo.  
Bila portnya tidak ditetapkan, motor tidak bekerja dengan benar.

<BlockImage module="CheeseStick/CSD09" id="start_servo_motor" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port motor servo | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_servo_motor('Sa')
```

## Mengatur sudut motor servo {#set_servo_motor}

Mengatur sudut motor servo pada port yang ditentukan.  
Rentang nilai yang dapat dipilih dari 0 sampai 180.

<BlockImage module="CheeseStick/CSD09" id="set_servo_motor" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port motor servo | Sa, Sb, Sc | port pada panggilan `start_servo_motor` terakhir |
| value | Nilai masukan (bidang) | Sudut putaran (derajat) | bilangan bulat 0 sampai 180 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_servo_motor('Sa', 90)
```

## Mengubah sudut motor servo {#change_servo_motor}

Mengubah sudut motor servo pada port yang ditentukan.  
Rentang nilai yang dapat dipilih dari -180 sampai 180.

<BlockImage module="CheeseStick/CSD09" id="change_servo_motor" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port motor servo | Sa, Sb, Sc | port pada panggilan `start_servo_motor` terakhir |
| value | Nilai masukan (bidang) | Besar perubahan sudut | bilangan bulat | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_servo_motor('Sa', 10)
```

## Mematikan motor servo {#stop_servo_motor}

Mematikan daya motor servo pada port yang ditentukan.

<BlockImage module="CheeseStick/CSD09" id="stop_servo_motor" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port motor servo | Sa, Sb, Sc | port pada panggilan `start_servo_motor` terakhir |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_servo_motor('Sa')
```

## Menyalakan motor DC {#start_DC_motor}

Membuat motor DC dapat dikendalikan lewat port yang ditentukan.
Anda harus memanggil blok ini sekali sebelum memakai blok lain yang berkaitan dengan motor DC.

<BlockImage module="CheeseStick/CSD09" id="start_DC_motor" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port motor DC | Mab, Mcd | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_dc_motor('Mab')
```

## Mengatur kecepatan motor DC {#set_DC_motor}

Mengatur nilai keluaran PWM motor DC.

<BlockImage module="CheeseStick/CSD09" id="set_DC_motor" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port motor DC | Mab, Mcd | port pada panggilan `start_dc_motor` terakhir |
| value | Nilai masukan (bidang) | Nilai keluaran PWM | bilangan bulat 0 sampai 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_dc_motor('Mab', 50)
```

## Mengubah kecepatan motor DC {#change_DC_motor}

Menambahkan besar perubahan yang Anda masukkan ke nilai keluaran PWM motor DC saat ini untuk menetapkan nilai baru.

<BlockImage module="CheeseStick/CSD09" id="change_DC_motor" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port motor DC | Mab, Mcd | port pada panggilan `start_dc_motor` terakhir |
| value | Nilai masukan (bidang) | Besar perubahan PWM | bilangan bulat | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_dc_motor('Mab', 10)
```

## Menghentikan motor DC {#stop_DC_motor}

Menghentikan keluaran motor DC.

<BlockImage module="CheeseStick/CSD09" id="stop_DC_motor" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port motor DC | Mab, Mcd | port pada panggilan `start_dc_motor` terakhir |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_dc_motor('Mab')
```

## Memulai motor stepper {#start_step_motor}

Membuat motor stepper dapat dipakai.

<BlockImage module="CheeseStick/CSD09" id="start_step_motor" />

### Parameter

(tidak ada)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_step_motor()
```

## Mengatur mode motor stepper {#set_step_motor_mode}

Mengatur mode yang dipakai untuk mengendalikan motor stepper.  
Bila modenya tidak diatur khusus, mode bawaannya adalah 'daya'.  
Perhatian! Mode tidak boleh diubah saat motor stepper sedang berputar.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_mode" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Mode penggerak | mati(off), normal(wave_step), daya(full_step) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_mode('full_step')
```

## Mengatur kecepatan motor stepper {#set_step_motor_speed}

Mengatur kecepatan motor stepper.  
Rentang nilai yang dapat dipilih dari -1000 sampai 1000.  
Bila nilainya negatif, motor berputar ke arah sebaliknya.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| value | Nilai masukan (bidang) | Kecepatan putaran (PPS) | bilangan bulat 0 atau lebih | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_speed(100)
```

## Memutar motor stepper {#rotate_step_motor}

Menetapkan jumlah pulsa untuk memutar motor stepper.  
Rentang nilai yang dapat dipilih dari 0 sampai 65535.  
Bila kecepatan motor stepper belum dipilih, motor tidak berputar.  
Bila Anda mencentang tunggu, program menunggu sampai putarannya selesai.

<BlockImage module="CheeseStick/CSD09" id="rotate_step_motor" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| value | Nilai masukan (bidang) | Jumlah langkah putaran | bilangan bulat | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# wait = TRUE
csd09.rotate_step_motor(360, wait=True)

# wait = FALSE
csd09.rotate_step_motor(360, wait=False)
```

## Mengubah kecepatan motor stepper {#change_step_motor_speed}

Mengubah kecepatan motor stepper.  
Rentang nilai yang dapat dipilih dari -2000 sampai 2000.

<BlockImage module="CheeseStick/CSD09" id="change_step_motor_speed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| value | Nilai masukan (bidang) | Besar perubahan PPS | bilangan bulat | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_step_motor_speed(10)
```

## Menghentikan motor stepper {#stop_step_motor}

Menghentikan motor stepper atau mematikan dayanya.

<BlockImage module="CheeseStick/CSD09" id="stop_step_motor" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Cara berhenti | berhenti(stop), matikan daya(power) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# unit = "stop"
csd09.stop_step_motor()

# unit = "power"
csd09.turn_off_step_motor()
```

## Jumlah langkah kumulatif {#step_motor_steps}

Mengembalikan jumlah langkah kumulatif yang sudah diputar motor stepper sampai sekarang.

<BlockImage module="CheeseStick/CSD09" id="step_motor_steps" />

### Parameter

(tidak ada)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.get_steps()
```
