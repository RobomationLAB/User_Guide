---
title: Warna
---

# Warna

Warna dipakai di berbagai program grafis. 


## Warna dasar {#color_picker}

Cara paling sederhana untuk memperoleh warna adalah memakai **palet warna**.  
Saat Anda mengeklik kotak bersudut bulat berwarna putih, palet warna muncul dan Anda dapat memilih warna yang diinginkan.

<BlockImage module="common/color" id="color_picker" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| color | Warna | Warna siap pakai | hitam(black), merah(red), kuning(yellow), hijau(green),<br>sian(cyan), biru(blue), magenta(magenta), putih(white) | - |

### Python
```python
# contoh: saat memilih warna merah siap pakai
Utils.color('red')
```

## Warna penggeser {#color_slider}

Dengan blok **warna penggeser**, Anda dapat meramu sendiri warna memakai penggeser lingkaran / batang.  
Saat Anda mengeklik kotak bersudut bulat berwarna putih, muncul roda warna untuk mengatur nilai **merah (R), hijau (G), biru (B)** dan penggeser batang untuk mengatur **kecerahan**.

<BlockImage module="common/color" id="color_slider" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| color | Warna | Roda warna + penggeser kecerahan | r: 0~255, g: 0~255, b: 0~255 | - |

### Python
```python
# warna yang dipilih pada roda warna → [R, G, B]
Utils.color_slider(255, 128, 0)
```

## Warna RGB {#color_rgb}

Blok **warna RGB** membuat larik RGB dari nilai merah, hijau, dan biru yang Anda tentukan.

<BlockImage module="common/color" id="color_rgb" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| r | Nilai masukan (blok) | Nilai merah | bilangan bulat 0 sampai 255 | - |
| g | Nilai masukan (blok) | Nilai hijau | bilangan bulat 0 sampai 255 | - |
| b | Nilai masukan (blok) | Nilai biru | bilangan bulat 0 sampai 255 | - |

### Python
```python
Utils.color_rgb(red, green, blue)
```

## Warna acak {#color_random}

Blok **warna acak** membuat satu warna RGB acak setiap kali dipanggil.

<BlockImage module="common/color" id="color_random" />

### Parameter

(tidak ada)

### Python
```python
Utils.random_color()
```
