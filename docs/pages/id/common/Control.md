---
title: Kontrol
---

# Kontrol

Dalam pemrograman blok, **blok kontrol** berperan mengatur alur jalannya program.  
Blok ini dapat menunggu selama waktu tertentu, mengenali tombol papan ketik, mencatat log, dan sebagainya.


## Tunggu {#wait_sec}

Menunggu selama waktu (detik) yang ditentukan lalu menjalankan perintah berikutnya.

<BlockImage module="common/control" id="wait_sec" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| sec | Nilai masukan (bidang) | Waktu tunggu — **angka langsung** (contoh: `Utils.wait(0.5)`) | bilangan real 0 atau lebih | - |
| sec | Nilai masukan (blok) | Waktu tunggu — **variabel/ekspresi** (contoh: `Utils.wait(time)`) | bilangan real 0 atau lebih | - |

### Python
```python
# bidang sec = 2 → apa adanya (satuan detik)
Utils.wait(2)

# nilai dari variabel
Utils.wait(myVar)
```

## Tunggu satu frame {#wait_1msec}

Menghentikan jalannya program selama satu frame (sekitar 0,001 detik).

<BlockImage module="common/control" id="wait_1msec" />

### Parameter

(tidak ada — tetap 0,001 detik)

### Python
```python
Utils.wait(0.001)
```

<!--
## Tunggu selamanya {#wait_forever}

Menghentikan jalannya program dan menunggu tanpa batas.

### Parameter

(tidak ada)

### Python
```python
Utils.wait_forever()
```
-->

## Tombol ditekan {#key_pressed}

Mengembalikan **benar (True) / salah (False)** sesuai apakah tombol tertentu sedang ditekan.

<BlockImage module="common/control" id="key_pressed" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| key | Nilai masukan | Nama tombol | space, up, left, right, down, a~z, 0~9,<br>shift, ctrl, alt, enter, tab, esc, backspace | - |

### Python
```python
Utils.keypressed('space')
```

## Mencatat log {#log}

Menampilkan nilai variabel atau properti tertentu ke jendela **konsol** secara waktu nyata.

<BlockImage module="common/control" id="log" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan | Nilai yang dicatat | nilai apa saja | - |
| tag | Nilai masukan | Tag log | untai teks | - |
| unit | Nilai masukan | Satuan yang ditampilkan | untai teks | - |

### Python
```python
Utils.log(data, '', '')
```

## Menampilkan grafik {#scope}

Menampilkan perubahan suatu nilai sebagai grafik waktu nyata di jendela **grafik**.  
Anda dapat mengatur warna, nilai minimum/maksimum, dan rentang grafik.

<BlockImage module="common/control" id="scope" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| signal | Nilai masukan (blok) | Nilai sinyal grafik | bilangan real | - |
| name | Nilai masukan | Nama grafik | untai teks | - |
| min_val | Nilai masukan (bidang) | Nilai minimum grafik | bilangan real | - |
| max_val | Nilai masukan (bidang) | Nilai maksimum grafik | bilangan real | - |
| color | Warna | Warna grafik (hex) | untai hex | - |

### Python
```python
Utils.scope(signal, '', 0, 100, '#000000')
```
