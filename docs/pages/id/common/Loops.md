---
title: Perulangan
---

# Perulangan

Pernyataan kendali perulangan ada dua jenis:  
**pernyataan kondisi** dan **pernyataan perulangan** (yang mengatur berapa kali badan blok dijalankan sesuai nilai variabel)


## Ulangi {#controls_repeat}

Blok **ulangi** paling sederhana menjalankan kode di badannya sebanyak jumlah yang ditentukan. 

<BlockImage module="common/loops" id="controls_repeat" />

### Python
```python
for count in range(times):
    # ...
```

## Cacah dengan {#controls_for}

Blok **cacah dengan** (umumnya disebut **for loop**) menaikkan variabel dari nilai pertama sampai nilai ketiga sebesar penambahan (nilai kedua), lalu menjalankan badannya sekali untuk setiap nilai.  

<BlockImage module="common/loops" id="controls_for" />

### Python
```python
for VAR in range(from, to + 1, by):
    # ...
```

## Untuk setiap item {#controls_forEach}

Blok **untuk setiap item** serupa, bedanya blok ini memakai nilai-nilai di dalam daftar secara berurutan, bukan deret angka.

<BlockImage module="common/loops" id="controls_forEach" />

### Python
```python
for VAR in list:
    # ...
```


## Ulangi selagi / sampai {#controls_while}

Blok **ulangi selagi** mengulang badannya selama kondisinya benar.  
Blok **ulangi sampai** mengulang badannya selama kondisinya salah, dan keluar dari perulangan tepat saat kondisinya menjadi benar.

<BlockImage module="common/loops" id="controls_while" />

### Python
```python
# unit = "while"
while condition:
    # ...

# unit = "until"
while not condition:
    # ...
```

## Hentikan / lanjutkan {#controls_flow_statements}

Blok **hentikan** membuat Anda dapat **keluar lebih awal dari perulangan**.  
Blok **lanjutkan** (di sebagian besar bahasa pemrograman disebut **continue**) melewati sisa kode di badannya dan langsung memulai putaran berikutnya.

<BlockImage module="common/loops" id="controls_flow_statements" />

### Python
```python
break
continue
```
