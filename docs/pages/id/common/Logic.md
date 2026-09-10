---
title: Logika
---

# Logika

Blok logika umumnya dipakai untuk mengendalikan blok **pernyataan kondisi** dan blok [**perulangan**](Loops).

## Pernyataan kondisi (jika ~ maka) {#controls_if}

Dengan blok pernyataan kondisi, Anda dapat menetapkan **kondisi** dan **tindakan** yang dijalankan saat kondisi itu terpenuhi.

<BlockImage module="common/logic" id="controls_if" />

Misalnya, Anda dapat menulis kode seperti berikut.  
Jika nilai variabel **x** lebih besar dari 100, kondisinya **benar** dan teks "Ini bilangan besar." ditampilkan.  
Jika nilai **x** tidak lebih besar dari 100, kondisinya **salah** dan teks "Ini bukan bilangan besar." ditampilkan.

### Python
```python
if condition:
  # ...
elif condition2:
  # ...
else:
  # ...
```

## Operasi perbandingan {#logic_compare}

Ada enam operator perbandingan.  
Setiap operator menerima dua masukan (biasanya angka) dan mengembalikan benar atau salah sesuai hasil perbandingan kedua nilai itu.

<BlockImage module="common/logic" id="logic_compare" />

### Python
```python
A == B
A != B
A < B
A <= B
A > B
A >= B
```

## Operasi logika {#logic_operation}

Blok **dan** hanya mengembalikan benar bila kedua masukan bernilai benar.  
Blok **atau** mengembalikan benar bila salah satu dari kedua masukan bernilai benar.  

<BlockImage module="common/logic" id="logic_operation" />

### Python
```python
A and B
A or B
```

## Negasi {#logic_negate}

Blok **bukan (not)** mengubah masukan boolean menjadi kebalikannya.  

<BlockImage module="common/logic" id="logic_negate" />

### Python
```python
not A
```

## Boolean {#logic_boolean}

Anda memperoleh nilai boolean memakai satu blok yang punya daftar pilihan untuk memilih **benar** atau **salah**.  

<BlockImage module="common/logic" id="logic_boolean" />

### Python
```python
True
False
```

## Operator terner {#logic_ternary}

Blok terner bekerja seperti blok pernyataan kondisi sederhana.  
Blok ini menerima tiga masukan.  
Masukan pertama adalah kondisi boolean yang diuji, masukan kedua adalah nilai yang dikembalikan bila kondisinya **benar**.  
Masukan ketiga adalah nilai yang dikembalikan bila kondisinya **salah**.  

<BlockImage module="common/logic" id="logic_ternary" />

### Python
```python
thenValue if test else elseValue
```
