---
title: Matematika
---

# Matematika

Dokumen ini menjelaskan fungsi dan cara pakai berbagai blok matematika.  
Dokumen ini memperkenalkan blok-blok yang melakukan bermacam operasi matematika seperti operasi angka, pengolahan daftar, peluang, dan operasi sudut.

## Nilai angka {#math_number}

Blok yang mengembalikan **nilai angka** yang Anda masukkan apa adanya.  
Dengan blok ini Anda dapat menyimpan sebuah angka ke variabel atau memakainya di operasi lain.

<BlockImage module="common/math" id="math_number" />

### Python
```
50
```

## Membuat larik dan operasinya {#math_array}

Blok untuk membuat **larik**.
Blok ini mengembalikan larik yang anggotanya adalah nilai-nilai yang Anda tulis di dalam `[]`.
Anda dapat membuat daftar dengan menuliskan nilai yang diinginkan di dalam `[]`; teks harus diapit tanda " ".

<BlockImage module="common/math" id="math_array" />

### Python
```python
[]
```

## Operasi aritmetika dasar {#math_arithmetic}

Blok yang melakukan **operasi aritmetika** (penjumlahan, pengurangan, perkalian, pembagian, pemangkatan) memakai dua nilai angka.

<BlockImage module="common/math" id="math_arithmetic" />

### Python
```python
A + B
A - B
A * B
A / B
A ** B
```

## Operasi satu suku {#math_single}

Blok yang melakukan **operasi satu suku** seperti akar kuadrat, nilai mutlak, pembalikan tanda, eksponen, dan fungsi logaritma.

<BlockImage module="common/math" id="math_single" />

### Python
```python
math.sqrt(NUM)  # akar kuadrat
math.fabs(NUM)  # nilai mutlak
-NUM            # -
math.log(NUM)   # ln
math.log10(NUM) # log10
math.exp(NUM)   # e^
10 ** NUM       # 10^
```

## Fungsi trigonometri {#math_trig}

Blok yang menghitung nilai **fungsi trigonometri** seperti sinus, kosinus, dan tangen.

<BlockImage module="common/math" id="math_trig" />

### Python
```python
math.sin(NUM / 180.0 * math.pi) # sin
math.cos(NUM / 180.0 * math.pi) # cos
math.tan(NUM / 180.0 * math.pi) # tan
math.asin(NUM) / math.pi * 180  # asin
math.acos(NUM) / math.pi * 180  # acos
math.atan(NUM) / math.pi * 180  # atan
```

## Konstanta {#math_constant}

Mengembalikan **nilai konstanta khusus** yang dibutuhkan dalam operasi (π, e, rasio emas, √2, √(1/2), tak hingga).

<BlockImage module="common/math" id="math_constant" />

### Python
```python
math.pi                      # π
math.e                       # e
(1 + math.sqrt(5)) / 2       # rasio emas
math.sqrt(2)                 # √2
math.sqrt(1.0 / 2)           # √(1/2)
float('inf')                 # tak hingga
```

## Kondisi {#math_number_property}

Memeriksa apakah angka yang dimasukkan adalah bilangan genap, ganjil, prima, bulat, positif, negatif, atau kelipatan suatu bilangan, lalu mengembalikan **benar/salah**.

<BlockImage module="common/math" id="math_number_property" />

### Python
```python
NUM % 2 == 0           # EVEN (bilangan genap)
NUM % 2 == 1           # ODD (bilangan ganjil)
math_isPrime(NUM)      # PRIME (bilangan prima)
NUM % 1 == 0           # WHOLE (bilangan bulat)
NUM > 0                # POSITIVE (bilangan positif)
NUM < 0                # NEGATIVE (bilangan negatif)
NUM % DIVISOR == 0     # DIVISIBLE_BY (kelipatan)

def math_isPrime(n):
    if not isinstance(n, Number):
        try: n = float(n)
        except: return False
    if n == 2 or n == 3: return True
    if n <= 1 or n % 1 != 0 or n % 2 == 0 or n % 3 == 0: return False
    for x in range(6, int(math.sqrt(n)) + 2, 6):
        if n % (x - 1) == 0 or n % (x + 1) == 0: return False
    return True
```

## Pembulatan {#math_round}

Memproses angka yang dimasukkan dengan **pembulatan (round), pembulatan ke atas (ceil), atau pembulatan ke bawah (floor)** lalu mengembalikan nilainya.

<BlockImage module="common/math" id="math_round" />

### Python
```python
round(NUM)        # membulatkan
math.ceil(NUM)    # membulatkan ke atas
math.floor(NUM)   # membulatkan ke bawah
```

## Operasi pada daftar {#math_on_list}

Melakukan operasi pada daftar: jumlah, nilai terkecil, nilai terbesar, rata-rata, median, modus, simpangan baku, dan pengambilan item acak.

<BlockImage module="common/math" id="math_on_list" />

### Python
```python
sum(list)                          # jumlah
min(list)                          # nilai terkecil
max(list)                          # nilai terbesar
math_mean(list)                    # rata-rata
math_median(list)                  # median
math_modes(list)                   # modus (nilai yang paling sering muncul)
math_standard_deviation(list)      # simpangan baku
random.choice(list)                # item acak dari daftar

def math_mean(myList):
    localList = [e for e in myList if isinstance(e, Number)]
    if not localList: return
    return float(sum(localList)) / len(localList)

def math_median(myList):
    localList = sorted([e for e in myList if isinstance(e, Number)])
    if not localList: return
    if len(localList) % 2 == 0:
        return (localList[len(localList) // 2 - 1] + localList[len(localList) // 2]) / 2.0
    else:
        return localList[(len(localList) - 1) // 2]

def math_modes(some_list):
    modes = []
    counts = []
    maxCount = 1
    for item in some_list:
        found = False
        for count in counts:
            if count[0] == item:
                count[1] += 1
                maxCount = max(maxCount, count[1])
                found = True
        if not found:
            counts.append([item, 1])
    for counted_item, item_count in counts:
        if item_count == maxCount:
            modes.append(counted_item)
    return modes

def math_standard_deviation(numbers):
    n = len(numbers)
    if n == 0: return
    mean = float(sum(numbers)) / n
    variance = sum((x - mean) ** 2 for x in numbers) / n
    return math.sqrt(variance)
```

## Sisa bagi {#math_modulo}

Blok yang mencari **sisa** dari pembagian dua angka.

<BlockImage module="common/math" id="math_modulo" />

### Python
```python
A % B
```

## Batas terkecil dan terbesar {#math_constrain}

Membatasi nilai yang dimasukkan agar tidak keluar dari rentang **terkecil/terbesar** yang ditentukan.  
Nilai di luar rentang disesuaikan ke nilai batas terdekat.

<BlockImage module="common/math" id="math_constrain" />

### Python
```python
min(max(VALUE, LOW), HIGH)
```

## Bilangan bulat acak {#math_random_int}

Blok yang membuat **satu bilangan bulat acak** dalam rentang yang ditentukan.

<BlockImage module="common/math" id="math_random_int" />

### Python
```python
random.randint(FROM, TO)
```

## Nilai pecahan acak {#math_random_float}

Membuat **satu nilai pecahan acak** antara 0 dan 1.

<BlockImage module="common/math" id="math_random_float" />

### Python
```python
random.random()
```

## atan2 {#math_atan2}

Blok yang menghitung sudut (atan2) yang dibentuk koordinat (x, y) terhadap titik asal (0,0).  
Anda dapat memakainya untuk menentukan arah berdasarkan posisi koordinat.

<BlockImage module="common/math" id="math_atan2" />

### Python
```python
math.atan2(Y, X) / math.pi * 180
```
