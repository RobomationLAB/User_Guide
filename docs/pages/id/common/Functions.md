---
title: Fungsi
---

# Fungsi

**Fungsi (Function)** adalah **kumpulan perintah (blok)** yang melakukan suatu pekerjaan tertentu.  
Bila Anda merangkum tindakan yang dipakai berulang kali menjadi satu fungsi, kode menjadi **ringkas dan efisien**.

Fungsi punya ciri-ciri berikut.  
- **Dapat dipakai ulang**: sekali didefinisikan, fungsi dapat dipanggil berkali-kali.  
- **Masukan dan keluaran**: fungsi dapat menerima parameter (nilai masukan), mengolahnya, lalu mengembalikan hasil (nilai keluaran).  
- **Kode lebih mudah dibaca**: membantu Anda menyusun alur program secara logis.


## setup {#setup}

**Fungsi setup** hanya dipanggil satu kali, tepat saat kode mulai dijalankan.  
Di fungsi setup biasanya ditulis kode yang memberi nilai awal ke variabel atau mengatur mode dan opsi robot.  
Misalnya, saat mengendalikan robot yang bergerak dengan roda, Anda dapat mengatur kecepatan awal roda di fungsi setup.  

<BlockImage module="common/functions" id="setup" />
  
Dengan fungsi `Utils.wait(...)`, Anda dapat menulis kode yang berjalan berurutan menurut waktu. Bila digabungkan dengan **fungsi loop** yang berjalan paralel, Anda tidak hanya dapat menjalankan kode secara berurutan tetapi juga memprogram robot secara lebih hebat.  

### Python
```python
def setup():
    # ...
    return
```

## loop {#loop}

**Fungsi loop** dipanggil berulang setiap 10 ms selama program berjalan.  
Di fungsi loop biasanya ditulis kode yang terus-menerus menetapkan nilai variabel atau mengenali dan menangani kejadian pada robot.

<BlockImage module="common/functions" id="loop" />

### Python
```python
def loop():
    # ...
    return
```

## Mendefinisikan fungsi {#procedures_defnoreturn}

Dengan blok pendefinisi fungsi, Anda dapat membuat **fungsi baru**.  
Fungsi tanpa nilai kembalian melakukan tindakan tertentu tetapi **tidak mengembalikan nilai apa pun**.

<BlockImage module="common/functions" id="procedures_defnoreturn" />

### Python
```python
def myFunction(arg1, arg2):
    # ...
```

## Mendefinisikan fungsi dengan nilai kembalian {#procedures_defreturn}

Fungsi dengan nilai kembalian melakukan pekerjaan tertentu lalu **mengembalikan hasilnya** agar dapat dipakai blok lain.  

<BlockImage module="common/functions" id="procedures_defreturn" />

Fungsi di bawah ini **menerima parameter x, y lalu mengembalikan hasil x + y**.  

### Python
```python
def myFunction(x, y):
    return x + y
```

## Memanggil fungsi {#procedures_callnoreturn}

Saat Anda mendefinisikan sebuah fungsi, **blok fungsi buatan pengguna** langsung dibuat.  
Dengan blok itu Anda dapat memanggil dan menjalankan **fungsi yang sudah didefinisikan**.

<BlockImage module="common/functions" id="procedures_callnoreturn" />

### Python
```python
myFunction(arg1, arg2)
```

## Jika maka kembali {#procedures_ifreturn}

Blok ini **langsung mengembalikan nilai dan mengakhiri fungsi bila suatu kondisi terpenuhi** di dalam fungsi.  
Blok ini **hanya dapat dipakai di dalam fungsi**; di tempat lain blok ini dinonaktifkan.

<BlockImage module="common/functions" id="procedures_ifreturn" />

### Python
```python
if condition:
    return value
```
