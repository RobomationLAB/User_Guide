---
title: CSD-02 LED RGB
---

# CSD-02 LED RGB

## Deklarasi instans {#instance}

Saat Anda menambahkan blok CSD-02 LED RGB(CSD02) ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Memulai LED RGB {#start}

Mulai memakai LED RGB.  
Tanpa blok ini, LED RGB tidak aktif.

<BlockImage module="CheeseStick/CSD02" id="start" />

### Parameter

(tidak ada)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.start()
```

## Mengatur warna {#set_color}

Mengatur warna LED modul CSD02 ke warna yang dipilih.  
Warna yang Anda pilih di palet warna diubah menjadi **nama warna** (untai teks Inggris) lalu masuk ke kode dalam bentuk itu. (Kode memuat nama warna, bukan tiga angka R, G, B.)

<BlockImage module="CheeseStick/CSD02" id="set_color" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| color | Warna | Pilihan di palet warna → diubah menjadi nama warna (Inggris) | Nama warna: `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'violet'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color('orange')
```

## Mengatur warna dengan blok kategori Warna {#set_color_with_block}

Mengatur warna LED modul CSD02 memakai blok dari kategori Warna (misalnya larik `[R, G, B]`).

<BlockImage module="CheeseStick/CSD02" id="set_color_with_block" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| data | Nilai masukan (warna) | Keluaran blok kategori Warna atau larik `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color(*Utils.color('yellow'))
```

## Mengubah warna sebesar RGB {#change_by_rgb}

Menambahkan besar perubahan R, G, B yang Anda masukkan ke warna LED saat ini untuk membentuk warna baru.

<BlockImage module="CheeseStick/CSD02" id="change_by_rgb" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| r | Nilai masukan (bidang) | Besar perubahan merah | bilangan bulat -255 sampai 255 | 0 |
| g | Nilai masukan (bidang) | Besar perubahan hijau | bilangan bulat -255 sampai 255 | 0 |
| b | Nilai masukan (bidang) | Besar perubahan biru | bilangan bulat -255 sampai 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.change_color(10, 0, 0)
```

## Mematikan LED {#turn_off}

Menghapus warna LED RGB.

<BlockImage module="CheeseStick/CSD02" id="turn_off" />

### Parameter

(tidak ada)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.turn_off()
```
