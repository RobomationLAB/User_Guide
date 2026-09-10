---
title: Lainnya
---

# Lainnya

Dalam pemrograman blok, **blok lainnya** berisi kode yang tidak memengaruhi gerak robot.  
Blok ini dipakai untuk menulis komentar atau menghentikan jalannya kode.  

## Komentar satu baris {#comment}

Dengan blok **komentar satu baris**, Anda dapat menambahkan **penjelasan** tanpa memengaruhi jalannya kode.  
Komentar membuat kode lebih mudah dibaca dan lebih mudah dirawat.

<BlockImage module="common/others" id="comment" />

### Python
```python
# isi komentar
```

## Komentar multibaris {#long_comment}

Dengan blok **komentar multibaris**, Anda dapat menulis beberapa baris komentar sekaligus.  
Setiap baris otomatis ditandai sebagai komentar, dan baris kosong tetap dipertahankan.

<BlockImage module="common/others" id="long_comment" />

### Python
```python
"""
baris pertama
baris kedua

baris keempat
"""
```

## Tautan {#link}

Dengan blok **tautan**, Anda dapat memakai **komentar** untuk menambahkan **tautan halaman** yang ingin dibuka.  
Saat Anda mengeklik tombol **buka**, peramban membuka halaman dari tautan yang dimasukkan.

<BlockImage module="common/others" id="link" />

### Python
```python
# https://example.com
```

## Keluar {#exit}

Blok **keluar** langsung menghentikan jalannya kode dalam program.  
Blok ini berguna saat Anda ingin menambahkan penghentian paksa pada kondisi tertentu.

<BlockImage module="common/others" id="exit" />

### Python
```python
Utils.exit()
```
