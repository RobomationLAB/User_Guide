---
title: Variabel
---

# Variabel

Kita memakai istilah variabel dengan arti yang sama seperti dalam matematika atau bahasa pemrograman lain.  
Artinya, **sebuah unsur bernama yang menyimpan nilai dan nilainya dapat diubah**.  
  
Variabel dapat dibuat dengan beberapa cara.  

- Beberapa blok seperti [cacah dengan](Loops#controls_for) dan [untuk setiap item](Loops#controls_forEach) memakai variabel dan menentukan sendiri nilai variabel itu.  
Variabel semacam ini secara tradisional disebut **variabel perulangan (loop variables)**.  
- [Fungsi buatan pengguna](Functions#procedures_defnoreturn) juga memakai variabel untuk mendefinisikan parameter atau argumen.
- Anda dapat membuat variabel kapan saja lewat blok **tetapkan ... untuk**, dan variabel yang dibuat dideklarasikan sebagai **variabel global (global variables)**.  
- Lingkungan pemrograman blok RobomationLAB tidak mendukung **variabel lokal (local variables)**.  

Saat Anda mengeklik daftar turun pada blok variabel, muncul pilihan berikut.  

- Nama semua variabel yang sudah didefinisikan dalam program.  
- **"Ganti nama variabel"**: mengganti nama variabel itu di seluruh program. Bila Anda memilih ini, muncul jendela untuk memasukkan nama baru.  
- **"Hapus variabel"**: menghapus semua blok dalam program yang mengacu ke variabel ini. 


## Menetapkan variabel {#variables_set}

Blok **tetapkan ... untuk** memberikan sebuah nilai ke variabel.  
Bila variabel itu belum dideklarasikan dalam kode, blok ini mendeklarasikan variabel baru lalu memberikan nilainya.   

<BlockImage module="common/variables" id="variables_set" />

### Python
```python
item = VAL
```

## Mengubah nilai {#math_change}

Blok **ubah** menambahkan sebuah angka ke nilai variabel.

<BlockImage module="common/variables" id="math_change" />

### Python
```python
item = item + 1
```



## Mengambil nilai {#variables_get}

Blok di bawah ini memberikan nilai yang tersimpan di variabel, tetapi tidak mengubah nilai itu.  
Anda memang dapat memakai blok ini tanpa blok penetapan, tetapi itu bukan cara pemrograman yang benar.

<BlockImage module="common/variables" id="variables_get" />

### Python
```python
item
```
