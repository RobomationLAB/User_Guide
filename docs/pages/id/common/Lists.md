---
title: Daftar
---

# Daftar

Daftar adalah **kumpulan item yang tersusun berurutan**, seperti "daftar tugas" atau "daftar belanja".  
Item dalam daftar boleh bertipe apa saja, dan nilai yang sama boleh muncul beberapa kali dalam satu daftar.


## Membuat list kosong {#lists_create_with}

Daftar paling sederhana adalah daftar kosong; Anda membuatnya dengan blok **buat list kosong**.

<BlockImage module="common/lists" id="lists_create_with" />

### Python
```python
[]
```

## Membuat list dengan isi {#lists_create_with-2}

Dengan blok **buat list dengan**, Anda dapat menetapkan nilai awal untuk daftar baru.

<BlockImage module="common/lists" id="lists_create_with-2" />

### Python
```python
[item0, item1, item2]
```

## Mengulang item dalam list {#lists_repeat}

Dengan blok **buat list dengan item**, Anda dapat mengulang satu item tertentu untuk membuat daftar sebanyak jumlah yang diinginkan.

<BlockImage module="common/lists" id="lists_repeat" />

### Python
```python
[item] * times
```

## Panjang list {#lists_length}

Nilai blok **panjang dari** adalah jumlah item di dalam daftar.  
Panjang daftar kosong adalah 0.

<BlockImage module="common/lists" id="lists_length" />

### Python
```python
len(list)
```

## Memeriksa list kosong {#lists_isEmpty}

Nilai blok **kosong** adalah **benar** bila masukannya adalah daftar kosong, dan **salah** untuk keadaan lainnya.

<BlockImage module="common/lists" id="lists_isEmpty" />

### Python
```python
not len(list)
```

## Posisi kemunculan item dalam list {#lists_indexOf}

Mencari posisi suatu item di dalam daftar.  
Bila daftar tidak memuat item itu, hasilnya 0.

<BlockImage module="common/lists" id="lists_indexOf" />

### Python
```python
list.index(VALUE) + 1
```

## Mendapatkan / memotong / menghapus item {#lists_getIndex}

Blok ini dapat mendapatkan, memotong, atau menghapus item dari daftar.  
Tersedia berbagai pilihan seperti item pertama, terakhir, ke-N, dan acak.

<BlockImage module="common/lists" id="lists_getIndex" />

### Mendapatkan {#lists_getIndex_get}

Blok **dalam list dapatkan** mengambil item pada posisi tertentu di dalam daftar.  

### Python
```python
list[0]
list[-1]
list[int(random.random() * len(list))]
list[N - 1]
list[-N]
```

### Memotong {#lists_getIndex_cut}

Blok **dalam list dapatkan dan hapus** mengambil satu item dari daftar sekaligus menghapus item itu dari daftar.

### Python
```python
list.pop(N - 1)                        # ke #
list.pop(-N)                           # ke # dari akhir
list.pop(0)                            # pertama
list.pop()                             # terakhir 
lists_remove_random_item(list)         # acak

# random
def lists_remove_random_item(myList):
    x = int(random.random() * len(myList))
    return myList.pop(x)
```

### Menghapus {#lists_getIndex_remove}

Blok **dalam list hapus** hanya menghapus satu item dari daftar.  
Colokan di sisi kiri blok hilang, sehingga blok di atas dan di bawahnya dapat disambung.  

### Python
```python
list.pop(N - 1)                             # ke #
list.pop(-N)                                # ke # dari akhir
list.pop(0)                                 # pertama
list.pop()                                  # terakhir
list.pop(int(random.random() * len(list)))  # acak
```

## Menetapkan / menyisipkan item pada posisi tertentu {#lists_setIndex}

Blok ini dapat menetapkan atau menyisipkan item pada posisi yang diinginkan di dalam daftar.  
Tersedia berbagai pilihan seperti item pertama, terakhir, ke-N, dan acak.

<BlockImage module="common/lists" id="lists_setIndex" />

### Menetapkan item {#lists_setIndex_set}

Blok **dalam list tetapkan** mengganti item pada posisi yang ditentukan dengan item lain.

### Python
```python
list[N - 1] = value                         # ke #
list[-N] = value                            # ke # dari akhir
list[0] = value                             # pertama
list[-1] = value                            # terakhir

tmp_x = int(random.random() * len(list))
list[tmp_x] = value                         # acak
```

### Menyisipkan item {#lists_setIndex_insert}

Blok **dalam list sisipkan** menyisipkan item baru pada posisi yang ditentukan.  
Item yang sudah ada tetap dipertahankan dan panjangnya bertambah 1.

### Python
```python
list.insert(N - 1, value)                        # ke #
list.insert(-N, value)                           # ke # dari akhir
list.insert(0, value)                            # pertama
list.append(value)                               # terakhir

tmp_x = int(random.random() * len(list))
list.insert(tmp_x, value)                        # acak
```

## Mengambil sub-list {#lists_getSublist}

Blok **dalam list dapatkan sub-list** mengambil sebagian daftar berdasarkan posisi awal dan posisi akhir.  
Tersedia berbagai pilihan seperti item pertama, terakhir, ke-N, dan acak.  
Setelah dijalankan, daftar aslinya tetap tidak berubah.  

<BlockImage module="common/lists" id="lists_getSublist" />

### Python
```python
# awal pada posisi pertama (#1)
list[ : N]                             # #N (1-based)
list[ : -N]                            # last_#N
list[ : ]                              # last

# awal pada last_#N
list[-N : M]
list[-N : -M]
list[-N : ]

# awal pada first
list[ : N]
list[ : -N]
list[ : ]
```

## Mengambil list baru yang satu itemnya diganti {#lists_replace}

Blok **dalam daftar ganti** mengembalikan daftar baru yang item pada posisi tertentunya diganti dengan item lain.  
Tersedia berbagai pilihan seperti item pertama, terakhir, dan ke-N.  
Setelah dijalankan, daftar aslinya tetap tidak berubah.  

<BlockImage module="common/lists" id="lists_replace" />

### Python
```python
# unit = "#"
[value if i == (N - 1) else data for i, data in enumerate(list)]

# unit = "last_#"
[value if i == (len(list) - N) else data for i, data in enumerate(list)]

# unit = "first"
[value if i == 0 else data for i, data in enumerate(list)]

# unit = "last"
[value if i == (len(list) - 1) else data for i, data in enumerate(list)]
```

## Memisah / menggabung teks dengan pembatas {#lists_split}

<BlockImage module="common/lists" id="lists_split" />

### Membuat list dari teks {#text_to_list}

Blok **buat list dari teks** memotong teks yang diberikan berdasarkan pembatas lalu mengembalikannya sebagai daftar.

### Python
```python
text.split(delimiter)
```

### Membuat teks dari list {#list_to_text}

Blok **buat teks dari list** memakai pembatas untuk menggabungkan item-item daftar menjadi satu teks.

### Python
```python
delimiter.join(list)
```

## Mengurutkan list {#lists_sort}

Blok untuk **mengurutkan** daftar sesuai kriteria yang diinginkan.  
Anda dapat mengurutkan berdasarkan angka atau abjad, serta memilih urutan menaik atau menurun.  
Selain itu, saat mengurutkan berdasarkan abjad, Anda juga dapat mengurutkan tanpa membedakan huruf besar dan kecil.

<BlockImage module="common/lists" id="lists_sort" />

### Python
```python
lists_sort(my_list, "NUMERIC", False)      # angka, menaik
lists_sort(my_list, "NUMERIC", True)       # angka, menurun
lists_sort(my_list, "TEXT", False)         # huruf, menaik
lists_sort(my_list, "TEXT", True)          # huruf, menurun
lists_sort(my_list, "IGNORE_CASE", False)  # tanpa membedakan huruf besar kecil, menaik
lists_sort(my_list, "IGNORE_CASE", True)   # tanpa membedakan huruf besar kecil, menurun

def lists_sort(my_list, type, reverse):
    def try_float(s):
        try: return float(s)
        except: return 0
    key_funcs = {
        "NUMERIC": try_float,
        "TEXT": str,
        "IGNORE_CASE": lambda s: str(s).lower()
    }
    key_func = key_funcs[type]
    list_cpy = list(my_list)
    return sorted(list_cpy, key=key_func, reverse=reverse)
```

## Membalikkan list {#lists_reverse}

Blok **balikkan** membalik urutan anggota daftar.

<BlockImage module="common/lists" id="lists_reverse" />

### Python
```python
list(reversed(my_list))
```
