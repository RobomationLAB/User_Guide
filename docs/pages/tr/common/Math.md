---
title: Matematik
---

# Matematik

Bu belge farklı matematik bloklarının işleyişini ve kullanımını açıklar.  
Burada her türlü hesabı yapan bloklar tanıtılır: sayı işlemleri, liste işlemleri, rastgele seçim ve açı hesapları.

## Sayı değeri {#math_number}

Yazılan **sayı değerini** olduğu gibi döndüren bloktur.  
Bu blokla istediğiniz sayıyı bir değişkende saklayabilir ya da başka hesaplarda kullanabilirsiniz.

<BlockImage module="common/math" id="math_number" />

### Python
```
50
```

## Dizi oluşturma {#math_array}

**dizi** oluşturan bloktur.
`[]` içine yazılan değerleri öğe olarak taşıyan bir dizi döndürür.
`[]` içine istediğiniz değerleri yazarak liste oluşturabilirsiniz; metinleri " " içine almalısınız.

<BlockImage module="common/math" id="math_array" />

### Python
```python
[]
```

## Temel aritmetik işlemler {#math_arithmetic}

İki sayı üzerinde **aritmetik işlem** (toplama, çıkarma, çarpma, bölme, kuvvet alma) yapan bloktur.

<BlockImage module="common/math" id="math_arithmetic" />

### Python
```python
A + B
A - B
A * B
A / B
A ** B
```

## Tek terimli işlemler {#math_single}

**Tek terimli işlemler** yapan bloktur: karekök, mutlak değer, işaret değiştirme, üstel fonksiyon, logaritma ve diğerleri.

<BlockImage module="common/math" id="math_single" />

### Python
```python
math.sqrt(NUM)  # karekök
math.fabs(NUM)  # mutlak değer
-NUM            # -
math.log(NUM)   # ln
math.log10(NUM) # log10
math.exp(NUM)   # e^
10 ** NUM       # 10^
```

## Trigonometrik fonksiyonlar {#math_trig}

**Trigonometrik fonksiyonların** değerlerini hesaplayan bloktur: sinüs, kosinüs, tanjant ve diğerleri.

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

## Sabitler {#math_constant}

Hesaplarda gereken **sabit değerleri** döndürür (π, e, altın oran, √2, √(1/2), sonsuz).

<BlockImage module="common/math" id="math_constant" />

### Python
```python
math.pi                      # π
math.e                       # e
(1 + math.sqrt(5)) / 2       # altın oran
math.sqrt(2)                 # √2
math.sqrt(1.0 / 2)           # √(1/2)
float('inf')                 # sonsuz
```

## Sayının özellikleri {#math_number_property}

Verilen sayının çift, tek, asal, tam, pozitif, negatif ya da belirli bir sayının katı olup olmadığını denetler ve **doğru ya da yanlış** döndürür.

<BlockImage module="common/math" id="math_number_property" />

### Python
```python
NUM % 2 == 0           # EVEN (çift)
NUM % 2 == 1           # ODD (tek)
math_isPrime(NUM)      # PRIME (asal)
NUM % 1 == 0           # WHOLE (tam)
NUM > 0                # POSITIVE (pozitif)
NUM < 0                # NEGATIVE (negatif)
NUM % DIVISOR == 0     # DIVISIBLE_BY (katı)

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

## Yuvarlama {#math_round}

Verilen sayıyı **yuvarlayarak (round), yukarı yuvarlayarak (ceil) ya da aşağı yuvarlayarak (floor)** döndürür.

<BlockImage module="common/math" id="math_round" />

### Python
```python
round(NUM)        # yuvarla
math.ceil(NUM)    # yukarı yuvarla
math.floor(NUM)   # aşağı yuvarla
```

## Liste işlemleri {#math_on_list}

Liste üzerinde şu işlemleri yapar: toplam, en küçük değer, en büyük değer, ortalama, ortanca, mod, standart sapma ve rastgele öğe seçimi.

<BlockImage module="common/math" id="math_on_list" />

### Python
```python
sum(list)                          # toplam
min(list)                          # en küçük değer
max(list)                          # en büyük değer
math_mean(list)                    # ortalama
math_median(list)                  # ortanca
math_modes(list)                   # mod (en sık geçen değer)
math_standard_deviation(list)      # standart sapma
random.choice(list)                # listeden rastgele öğe

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

## Geri kalan kısım {#math_modulo}

İki sayının bölümünden **kalanı** bulan bloktur.

<BlockImage module="common/math" id="math_modulo" />

### Python
```python
A % B
```

## Aralıkla sınırlama {#math_constrain}

Verilen değerin **en düşük ve en yüksek** değerlerle belirlenen aralığın dışına çıkmamasını sağlar.  
Aralık dışındaki değerler en yakın sınıra çekilir.

<BlockImage module="common/math" id="math_constrain" />

### Python
```python
min(max(VALUE, LOW), HIGH)
```

## Rastgele tam sayı {#math_random_int}

Belirtilen aralıktan rastgele bir **tam sayı** üreten bloktur.

<BlockImage module="common/math" id="math_random_int" />

### Python
```python
random.randint(FROM, TO)
```

## Rastgele kesir {#math_random_float}

0 ile 1 arasında rastgele bir **kesir** üretir.

<BlockImage module="common/math" id="math_random_float" />

### Python
```python
random.random()
```

## atan2 {#math_atan2}

Verilen (x, y) koordinatlarının başlangıç noktası (0,0) ile yaptığı açıyı (atan2) hesaplayan bloktur.  
Bir noktanın konumundan yön belirlemek için işe yarar.

<BlockImage module="common/math" id="math_atan2" />

### Python
```python
math.atan2(Y, X) / math.pi * 180
```
