---
title: Cheese Stick
---

# Cheese Stick

## Deklarasi instans {#instance}

Saat Anda menambahkan blok Cheese Stick(CheeseStick) ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
cheesestick = CheeseStick(0)
# Bila ada beberapa instans
cheesestick_1 = CheeseStick(1)
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Mengatur mode input {#set_input_mode}

Mengatur mode input port yang dipilih.

<BlockImage module="roboids/CheeseStick" id="set_input_mode" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port input | Sa, Sb, Sc, La, Lb, Lc | - |
| option | Pilihan daftar turun | Mode input | makey(makey), tombol(button), digital pull-up(digital_pullup), digital pull-down(digital_pulldown), analog(analog), tegangan analog(analog_voltage) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_mode('Sa', 'button')
```

## Mengatur rentang input {#set_input_range}

Mengubah nilai input port yang dipilih menjadi rentang minimum~maksimum yang ditentukan.  
Rentang nilai inputnya dari 0 sampai 255.  
Rentang nilai hasil ubahnya dari -100 sampai 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port input | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Nilai masukan (bidang) | Nilai minimum sumber | bilangan bulat 0 sampai 255 | - |
| src_max | Nilai masukan (bidang) | Nilai maksimum sumber | bilangan bulat 0 sampai 255 | - |
| dst_min | Nilai masukan (bidang) | Nilai minimum setelah diubah | bilangan bulat -100 sampai 100 | - |
| dst_max | Nilai masukan (bidang) | Nilai maksimum setelah diubah | bilangan bulat -100 sampai 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range('Sa', 0, 255, 0, 100)
```

## Mengatur rentang input dengan nilai tengah {#set_input_range_median}

Mengubah nilai input port yang dipilih menjadi rentang minimum~tengah~maksimum yang ditentukan.  
Rentang nilai inputnya dari 0 sampai 255.  
Rentang nilai hasil ubahnya dari -100 sampai 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range_median" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port input | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Nilai masukan (bidang) | Nilai minimum sumber | bilangan bulat 0 sampai 255 | - |
| src_median | Nilai masukan (bidang) | Nilai tengah sumber | bilangan bulat 0 sampai 255 | - |
| src_max | Nilai masukan (bidang) | Nilai maksimum sumber | bilangan bulat 0 sampai 255 | - |
| dst_min | Nilai masukan (bidang) | Nilai minimum setelah diubah | bilangan bulat -100 sampai 100 | - |
| dst_median | Nilai masukan (bidang) | Nilai tengah setelah diubah | bilangan bulat -100 sampai 100 | - |
| dst_max | Nilai masukan (bidang) | Nilai maksimum setelah diubah | bilangan bulat -100 sampai 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Nilai input {#get_input}

Nilai input port yang dipilih

<BlockImage module="roboids/CheeseStick" id="get_input" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port input | Sa, Sb, Sc, La, Lb, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_input('Sa')
```

## Mengatur mode input pulsa {#set_pulse_input_mode}

Mengatur mode input pulsa port yang dipilih.

<BlockImage module="roboids/CheeseStick" id="set_pulse_input_mode" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port input pulsa | Sc, Lc | - |
| option | Pilihan daftar turun | Mode pull | pulsa (default), pulsa (pull-up) (pull-up), pulsa (pull-down) (pull-down) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pulse_input_mode('Sc', 'pull-up')
```

## Nilai input pulsa {#get_pulse_input}

Apakah input pulsa terdeteksi pada port yang dipilih

<BlockImage module="roboids/CheeseStick" id="get_pulse_input" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port input pulsa | Sc, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_pulse_input('Sc')
```

## Mengatur output digital {#set_digital_output}

Mengatur nilai output digital port yang ditentukan.  
Nilai yang dapat dipilih adalah 0 atau 1.

<BlockImage module="roboids/CheeseStick" id="set_digital_output" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port output digital | Sa, Sb, Sc, La, Lb, Lc, Mab, Mcd | - |
| value | Pilihan daftar turun | Nilai output | 0 atau 1 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_digital_output('Sa', 1)
```

## Mengatur output PWM {#set_pwm_output}

Mengatur nilai output PWM port yang ditentukan.  
Rentang nilai yang dapat dipilih dari 0 sampai 100.

<BlockImage module="roboids/CheeseStick" id="set_pwm_output" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port output PWM | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Nilai masukan (bidang) | Nilai PWM | bilangan bulat 0 sampai 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pwm_output('Sa', 50)
```

## Mengubah output PWM {#change_pwm_output}

Mengubah nilai output PWM port yang ditentukan.  
Rentang nilai yang dapat dipilih dari -100 sampai 100.

<BlockImage module="roboids/CheeseStick" id="change_pwm_output" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Port output PWM | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Nilai masukan (bidang) | Besar perubahan PWM | bilangan bulat -100 sampai 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.change_pwm_output('Sa', 10)
```

## Mengatur bunyi dengung {#sound_buzz}

Mengatur bunyi dengung Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_buzz" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| hz | Nilai masukan (blok) | Frekuensi (Hz) | bilangan real 0 sampai 6553,5 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_buzz(440)
```

## Memainkan nada {#sound_note}

Cheese Stick memainkan nada yang ditentukan.

<BlockImage module="roboids/CheeseStick" id="sound_note" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| note | Pilihan daftar turun | Nada | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Pilihan daftar turun | Oktaf | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_note('D', 5)
```

## Memutar klip suara {#sound_clip}

Cheese Stick memutar sebuah klip suara tertentu.

<BlockImage module="roboids/CheeseStick" id="sound_clip" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| clip | Pilihan daftar turun | Nama klip suara | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'happy'`, `'angry'`, `'sad'`, dan lain-lain | - |
| wait | Kotak centang | Menunggu selesai atau tidak | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_clip('siren', wait=True)
```

## Mematikan suara {#sound_off}

Mematikan suara Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_off" />

### Parameter

(tidak ada)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_off()
```

## Nilai percepatan {#acceleration}

Nilai percepatan gravitasi pada sumbu tertentu

<BlockImage module="roboids/CheeseStick" id="acceleration" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Sumbu yang diukur | x, y, z | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x')
```

## Nilai sensor suhu {#temperature}

Nilai sensor suhu

<BlockImage module="roboids/CheeseStick" id="temperature" />

### Parameter

(tidak ada)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.temperature()
```

## Nilai kekuatan sinyal {#signal_strength}

Kekuatan sinyal

<BlockImage module="roboids/CheeseStick" id="signal_strength" />

### Parameter

(tidak ada)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.signal_strength()
```

## Tegangan baterai {#battery}

Tegangan baterai

<BlockImage module="roboids/CheeseStick" id="battery" />

### Parameter

(tidak ada)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.battery()
```

## Perubahan keadaan {#state_change}

Apakah keadaan robot berubah atau tidak

<BlockImage module="roboids/CheeseStick" id="state_change" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Jenis keadaan | 0 ~ 7 (lihat tabel di bawah) | - |

| unit | Kondisi |
|------|------|
| 0 | `acceleration('x') > 960` |
| 1 | `acceleration('x') < -960` |
| 2 | `acceleration('y') > 960` |
| 3 | `acceleration('y') < -960` |
| 4 | `acceleration('z') > 960` |
| 5 | `acceleration('z') < -960` |
| 6 | `tap()` (peristiwa ketukan) |
| 7 | `fall()` (peristiwa jatuh) |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x') > 960
cheesestick.tap()    # case 6
cheesestick.fall()   # case 7
```
