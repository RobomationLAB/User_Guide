---
title: Teks
---

# Teks {#text}

Contoh teks:
- "thing #1"
- "March 12, 2010"
- "" (teks kosong)

Teks dapat memuat huruf besar atau huruf kecil, angka, tanda baca, simbol lain, dan spasi di antara kata.  

<BlockImage module="common/text" id="text" />

## Membuat teks {#text_join}

Blok **buat teks dengan** menggabungkan (menyambung) nilai beberapa teks untuk membuat teks baru.

<BlockImage module="common/text" id="text_join" />

### Python
```python
'' + str(A) + str(B) + str(C)
```

## Menambahkan teks {#text_append}

Blok **tambahkan teks** menyambungkan teks yang diberikan ke variabel yang ditentukan.

<BlockImage module="common/text" id="text_append" />

### Python
```python
VAR = str(VAR) + TEXT
```

## Panjang teks {#text_length}

Blok **panjang dari** menghitung huruf, angka, dan sebagainya di dalam teks lalu mengembalikan panjang totalnya.  
Panjang `abc` di bawah ini adalah 3, sedangkan panjang teks kosong adalah 0.

<BlockImage module="common/text" id="text_length" />

### Python
```python
len(VALUE)
```

## Memeriksa teks kosong {#text_isEmpty}

Blok **kosong** memeriksa apakah teks yang diberikan kosong (panjangnya 0).

<BlockImage module="common/text" id="text_isEmpty" />

### Python
```python
len(VALUE) == 0
```

## Mencari teks {#text_indexOf}

Blok-blok ini memeriksa apakah suatu teks ada di dalam teks lain, dan mengembalikan posisinya bila ada.

<BlockImage module="common/text" id="text_indexOf" />

### Python
```python
(VALUE.find(FIND) + 1)
(VALUE.rfind(FIND) + 1)
```

## Mengambil satu huruf {#text_charAt}

Mengambil satu huruf pada posisi tertentu di dalam teks.  
Tersedia berbagai pilihan seperti huruf pertama, huruf terakhir, posisi acak, dan huruf ke-N.

<BlockImage module="common/text" id="text_charAt" />

### Python
```python
TEXT[N - 1]
TEXT[len(TEXT) - N]
TEXT[0]
TEXT[-1]
TEXT[int(random.random() * len(TEXT))]
```

## Mengambil bagian teks {#text_getSubstring}

Dengan blok **ambil bagian teks (substring)**, Anda dapat mengambil potongan teks pada rentang tertentu.

<BlockImage module="common/text" id="text_getSubstring" />

### Python
```python
TEXT[at1:at2]
```

## Mengubah huruf besar kecil {#text_changeCase}

Blok ini mengubah teks masukan menjadi salah satu bentuk berikut:

- **huruf kapital**: mengubah semua huruf menjadi huruf besar
- **huruf kecil**: mengubah semua huruf menjadi huruf kecil
- **Huruf Awal Kapital**: hanya huruf pertama setiap kata yang menjadi huruf besar, sisanya huruf kecil

<BlockImage module="common/text" id="text_changeCase" />

### Python
```python
TEXT.upper() # huruf kapital
TEXT.lower() # huruf kecil
TEXT.title() # huruf awal kapital
```

## Memangkas spasi {#text_trim}

Blok berikut memangkas spasi pada posisi berikut di dalam teks:
- kedua belah sisi
- sisi kiri
- sisi kanan

<BlockImage module="common/text" id="text_trim" />

### Python
```python
TEXT.strip()    # kedua belah sisi
TEXT.lstrip()   # sisi kiri
TEXT.rstrip()   # sisi kanan
```

## Menghitung kemunculan suatu teks {#text_count}

Menghitung dan mengembalikan berapa kali suatu potongan teks muncul di dalam teks yang diberikan.

<BlockImage module="common/text" id="text_count" />

### Python
```python
HAYSTACK.count(NEEDLE)
```

## Mengganti suatu teks {#text_replace}

Mengganti sekaligus suatu potongan teks di dalam teks dengan teks lain.

<BlockImage module="common/text" id="text_replace" />

### Python
```python
HAYSTACK.replace(NEEDLE, REPLACEMENT)
```

## Membalikkan teks {#text_reverse}

Mengembalikan teks baru yang urutannya terbalik dari teks semula.

<BlockImage module="common/text" id="text_reverse" />

### Python
```python
TEXT[::-1]
```

## Mencetak teks {#text_print}

Blok **cetak** menampilkan nilai masukan di jendela sembul.

<BlockImage module="common/text" id="text_print" />

### Python
```python
print(TEXT)
```

## Meminta masukan pengguna {#text_prompt_ext}

Blok berikut membuat jendela sembul yang meminta masukan dari pengguna, dan nilai yang dimasukkan disimpan ke variabel.  
Anda dapat menerima teks atau angka.

<BlockImage module="common/text" id="text_prompt_ext" />

### Python
```python
input(TEXT)
float(input(TEXT))
```
