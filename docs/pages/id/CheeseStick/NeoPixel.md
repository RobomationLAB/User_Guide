---
title: NeoPixel
---

# NeoPixel

## Deklarasi instans {#instance}

Saat Anda menambahkan blok NeoPixel ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Memulai {#start}

Membuat NeoPixel dapat dipakai.

<BlockImage module="CheeseStick/NeoPixel" id="start" />

### Parameter

(tidak ada)

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.start()
```

## Mengatur mode warna {#mode}

Mengatur mode LED NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="mode" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Mode kanal warna | GRBW, GRB | GRBW |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.mode('GRBW')
```

## Mengatur warna satu piksel {#set_one_color}

Mengatur warna satu piksel bernomor tertentu.  
Warna yang Anda pilih di palet warna diubah menjadi **nama warna** (untai teks Inggris) lalu masuk ke kode dalam bentuk itu. (Kode memuat nama warna, bukan tiga angka R, G, B.)

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| idx | Nilai masukan (bidang) | Nomor piksel (mulai dari 1) | bilangan bulat 1 atau lebih | - |
| color | Warna | Pilihan di palet warna → diubah menjadi nama warna (Inggris) | Nama warna: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, 'red')
```

## Mengatur warna satu piksel dengan blok kategori Warna {#set_one_color_with_block}

Menerima blok kategori Warna sebagai masukan lalu mengatur warna satu piksel.  
Keluaran blok warna (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`, semuanya mengembalikan `[R, G, B]`) dibuka dengan `*` (tanda bintang) lalu diteruskan ke argumen r, g, b pada `set_one_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color_with_block" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| idx | Nilai masukan (bidang) | Nomor piksel (mulai dari 1) | bilangan bulat 1 atau lebih | - |
| data | Nilai masukan (warna) | Blok kategori Warna atau larik `[R, G, B]` | [0~255, 0~255, 0~255] | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, *Utils.color('red'))
```

## Mengubah warna satu piksel sebesar RGB {#change_one_by_rgb}

Menambahkan besar perubahan ke nilai RGB satu piksel yang ditentukan untuk membentuk warna baru.

<BlockImage module="CheeseStick/NeoPixel" id="change_one_by_rgb" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| idx | Nilai masukan (bidang) | Nomor piksel (mulai dari 1) | bilangan bulat 1 atau lebih | - |
| r | Nilai masukan (bidang) | Besar perubahan merah | bilangan bulat -255 sampai 255 | 0 |
| g | Nilai masukan (bidang) | Besar perubahan hijau | bilangan bulat -255 sampai 255 | 0 |
| b | Nilai masukan (bidang) | Besar perubahan biru | bilangan bulat -255 sampai 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_one_color(1, 10, 0, 0)
```

## Mematikan satu piksel {#turn_off_one}

Menghapus warna LED ke-n.  
Rentang nomor LED dari 1 sampai 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_one" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| idx | Nilai masukan (bidang) | Nomor piksel (mulai dari 1) | bilangan bulat 1 atau lebih | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_one(1)
```

## Mengatur pola satu rentang {#set_range_pattern}

Mengatur pola warna semua LED dalam rentang yang ditentukan.  
Rentang nomor LED dari 1 sampai 144.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_pattern" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| from_idx | Nilai masukan (bidang) | Nomor piksel awal (mulai dari 1) | bilangan bulat 1 atau lebih | - |
| to_idx | Nilai masukan (bidang) | Nomor piksel akhir (mulai dari 1) | bilangan bulat 1 atau lebih | - |
| pattern | Pilihan daftar turun | Nama pola warna | `3_colors`, `6_colors`, `12_colors`, `red_green`, `red_blue`, `red_white`, `green_red`, `green_blue`, `green_white`, `blue_red`, `blue_green`, `blue_white`, `white_red`, `white_green`, `white_blue`, `black_red`, `black_green`, `black_blue`, `black_white`, `red_black`, `green_black`, `blue_black`, `white_black` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_pattern(1, 10, '3_colors')
```

## Mengatur warna satu rentang {#set_range_color}

Mengatur warna yang sama untuk seluruh rentang piksel yang ditentukan.  
Warna yang Anda pilih di palet warna diubah menjadi **nama warna** (untai teks Inggris) lalu masuk ke kode dalam bentuk itu.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| from_idx | Nilai masukan (bidang) | Nomor piksel awal (mulai dari 1) | bilangan bulat 1 atau lebih | - |
| to_idx | Nilai masukan (bidang) | Nomor piksel akhir (mulai dari 1) | bilangan bulat 1 atau lebih | - |
| color | Warna | Pilihan di palet warna → diubah menjadi nama warna (Inggris) | Nama warna: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, 'red')
```

## Mengatur warna satu rentang dengan blok kategori Warna {#set_range_color_with_block}

Menerima blok kategori Warna sebagai masukan lalu mengatur warna rentang piksel.  
Keluaran blok warna (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) dibuka dengan `*` (tanda bintang) lalu diteruskan ke argumen r, g, b pada `set_range_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color_with_block" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| from_idx | Nilai masukan (bidang) | Nomor piksel awal (mulai dari 1) | bilangan bulat 1 atau lebih | - |
| to_idx | Nilai masukan (bidang) | Nomor piksel akhir (mulai dari 1) | bilangan bulat 1 atau lebih | - |
| data | Nilai masukan (warna) | Blok kategori Warna atau larik `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, *Utils.color('red'))
```

## Mengubah warna satu rentang sebesar RGB {#change_range_by_rgb}

Menambahkan besar perubahan RGB ke warna rentang piksel yang ditentukan untuk membentuk warna baru.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_by_rgb" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| from_idx | Nilai masukan (bidang) | Nomor piksel awal (mulai dari 1) | bilangan bulat 1 atau lebih | - |
| to_idx | Nilai masukan (bidang) | Nomor piksel akhir (mulai dari 1) | bilangan bulat 1 atau lebih | - |
| r | Nilai masukan (bidang) | Besar perubahan merah | bilangan bulat -255 sampai 255 | 0 |
| g | Nilai masukan (bidang) | Besar perubahan hijau | bilangan bulat -255 sampai 255 | 0 |
| b | Nilai masukan (bidang) | Besar perubahan biru | bilangan bulat -255 sampai 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_color(1, 10, 10, 0, 0)
```

## Mematikan warna satu rentang {#turn_off_range}

Menghapus warna semua LED dalam rentang yang ditentukan.  
Rentang nomor LED dari 1 sampai 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| from_idx | Nilai masukan (bidang) | Nomor piksel awal (mulai dari 1) | bilangan bulat 1 atau lebih | - |
| to_idx | Nilai masukan (bidang) | Nomor piksel akhir (mulai dari 1) | bilangan bulat 1 atau lebih | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range(1, 10)
```

## Mengatur warna setiap n LED dalam satu rentang {#set_range_increment_color}

Di dalam rentang piksel yang ditentukan, mengatur warna setiap `increment` kotak sekali.  
Warna yang Anda pilih di palet warna diubah menjadi **nama warna** (untai teks Inggris) lalu masuk ke kode dalam bentuk itu.  
(misalnya hanya menyalakan kotak 1, 3, 5, ...)

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| from_idx | Nilai masukan (bidang) | Nomor piksel awal (mulai dari 1) | bilangan bulat 1 atau lebih | - |
| to_idx | Nilai masukan (bidang) | Nomor piksel akhir (mulai dari 1) | bilangan bulat 1 atau lebih | - |
| increment | Nilai masukan (bidang) | Jarak lompat (jumlah kotak) | bilangan bulat 1 atau lebih | - |
| color | Warna | Pilihan di palet warna → diubah menjadi nama warna (Inggris) | Nama warna: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, 'red')
```

## Mengatur warna setiap n LED dalam satu rentang dengan blok kategori Warna {#set_range_increment_color_with_block}

Menerima blok kategori Warna sebagai masukan lalu mengatur warna setiap n kotak di dalam rentang piksel yang ditentukan.  
Keluaran blok warna (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) dibuka dengan `*` (tanda bintang) lalu diteruskan ke argumen r, g, b pada `set_range_increment_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color_with_block" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| from_idx | Nilai masukan (bidang) | Nomor piksel awal (mulai dari 1) | bilangan bulat 1 atau lebih | - |
| to_idx | Nilai masukan (bidang) | Nomor piksel akhir (mulai dari 1) | bilangan bulat 1 atau lebih | - |
| increment | Nilai masukan (bidang) | Jarak lompat (jumlah kotak) | bilangan bulat 1 atau lebih | - |
| data | Nilai masukan (warna) | Blok kategori Warna atau larik `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, *Utils.color('red'))
```

## Mengubah setiap n LED dalam satu rentang sebesar RGB {#change_range_increment_by_rgb}

Setiap n kotak, menambahkan besar perubahan RGB ke warna piksel itu untuk membentuk warna baru.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_increment_by_rgb" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| from_idx | Nilai masukan (bidang) | Nomor piksel awal (mulai dari 1) | bilangan bulat 1 atau lebih | - |
| to_idx | Nilai masukan (bidang) | Nomor piksel akhir (mulai dari 1) | bilangan bulat 1 atau lebih | - |
| increment | Nilai masukan (bidang) | Jarak lompat (jumlah kotak) | bilangan bulat 1 atau lebih | - |
| r | Nilai masukan (bidang) | Besar perubahan merah | bilangan bulat -255 sampai 255 | 0 |
| g | Nilai masukan (bidang) | Besar perubahan hijau | bilangan bulat -255 sampai 255 | 0 |
| b | Nilai masukan (bidang) | Besar perubahan biru | bilangan bulat -255 sampai 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_increment_color(1, 10, 2, 10, 0, 0)
```

## Mematikan setiap n LED dalam satu rentang {#turn_off_range_increment}

Menghapus warna semua LED yang masuk dalam rentang dan jarak lompat yang ditentukan.  
Rentang nomor LED dari 1 sampai 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range_increment" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| from_idx | Nilai masukan (bidang) | Nomor piksel awal (mulai dari 1) | bilangan bulat 1 atau lebih | - |
| to_idx | Nilai masukan (bidang) | Nomor piksel akhir (mulai dari 1) | bilangan bulat 1 atau lebih | - |
| increment | Nilai masukan (bidang) | Jarak lompat (jumlah kotak) | bilangan bulat 1 atau lebih | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range_increment(1, 10, 2)
```

## Geser / putar {#shift}

Menggeser atau memutar LED sesuai arah dan jumlah kotak yang ditentukan.  
Rentang nilai yang dapat dipilih dari 1 sampai 143.

<BlockImage module="CheeseStick/NeoPixel" id="shift" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Jenis tindakan | geser(shift), putar(rotate) | - |
| direction | Pilihan daftar turun | Arah | kiri(left), kanan(right) | - |
| pixel | Nilai masukan (bidang) | Jumlah piksel yang digeser | bilangan bulat 1 atau lebih | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

# unit = 'shift'
neopixel.shift('left', 1)

# unit = 'rotate'
neopixel.rotate('left', 1)
```

## Mengatur kecerahan {#set_brightness}

Mengatur kecerahan NeoPixel.  
Rentang nilai yang dapat dipilih dari 0 sampai 100.

<BlockImage module="CheeseStick/NeoPixel" id="set_brightness" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| value | Nilai masukan (bidang) | Kecerahan | bilangan bulat 0 sampai 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_brightness(50)
```

## Mengubah kecerahan {#change_brightness}

Mengubah kecerahan NeoPixel.  
Rentang nilai yang dapat dipilih dari -100 sampai 100.

<BlockImage module="CheeseStick/NeoPixel" id="change_brightness" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| value | Nilai masukan (bidang) | Besar perubahan kecerahan | bilangan bulat -100 sampai 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_brightness(10)
```
