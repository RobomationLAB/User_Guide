---
title: PID-26 Sensor Lingkungan
---

# PID-26 Sensor Lingkungan

## Deklarasi instans {#instance}

Saat Anda menambahkan blok PID-26 Sensor Lingkungan(PID26) ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Memulai sensor lingkungan {#start}

Membuat PID-26 Sensor Lingkungan dapat dipakai.

<BlockImage module="CheeseStick/PID26" id="start" />

### Parameter

(tidak ada)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.start()
```

## Suhu {#temperature}

Mengembalikan nilai suhu yang diukur PID26 Sensor Lingkungan. 

<BlockImage module="CheeseStick/PID26" id="temperature" />

### Parameter

(tidak ada)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.temperature()
```

## Kelembapan {#humidity}

Mengembalikan nilai kelembapan yang diukur PID26 Sensor Lingkungan.

<BlockImage module="CheeseStick/PID26" id="humidity" />

### Parameter

(tidak ada)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.humidity()
```

## Tekanan {#pressure}

Mengembalikan nilai tekanan yang diukur PID26 Sensor Lingkungan.  

<BlockImage module="CheeseStick/PID26" id="pressure" />

### Parameter

(tidak ada)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.pressure()
```
