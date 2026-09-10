---
title: Matematyka
---

# Matematyka

Ten dokument opisuje działanie i zastosowanie różnych bloków matematycznych.  
Przedstawia bloki wykonujące rozmaite obliczenia: działania na liczbach, operacje na listach, losowanie czy obliczenia kątów.

## Wartość liczbowa {#math_number}

Blok zwracający wpisaną **wartość liczbową** bez zmian.  
Pozwala zapisać wybraną liczbę w zmiennej albo użyć jej w innych obliczeniach.

<BlockImage module="common/math" id="math_number" />

### Python
```
50
```

## Tworzenie tablicy {#math_array}

Blok tworzący **tablicę**.
Zwraca tablicę, której elementami są wartości wpisane w nawiasach `[]`.
Wpisując w `[]` wybrane wartości, można utworzyć listę; teksty należy ująć w " ".

<BlockImage module="common/math" id="math_array" />

### Python
```python
[]
```

## Podstawowe działania arytmetyczne {#math_arithmetic}

Blok wykonujący na dwóch liczbach **działania arytmetyczne** (dodawanie, odejmowanie, mnożenie, dzielenie, potęgowanie).

<BlockImage module="common/math" id="math_arithmetic" />

### Python
```python
A + B
A - B
A * B
A / B
A ** B
```

## Działania jednoargumentowe {#math_single}

Blok wykonujący **działania jednoargumentowe**: pierwiastek kwadratowy, wartość bezwzględną, zmianę znaku, funkcję wykładniczą, logarytm i inne.

<BlockImage module="common/math" id="math_single" />

### Python
```python
math.sqrt(NUM)  # pierwiastek kwadratowy
math.fabs(NUM)  # wartość bezwzględna
-NUM            # -
math.log(NUM)   # ln
math.log10(NUM) # log10
math.exp(NUM)   # e^
10 ** NUM       # 10^
```

## Funkcje trygonometryczne {#math_trig}

Blok obliczający wartości **funkcji trygonometrycznych**: sinusa, cosinusa, tangensa i innych.

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

## Stałe {#math_constant}

Zwraca **wartości stałych** przydatnych w obliczeniach (π, e, złota liczba, √2, √(1/2), nieskończoność).

<BlockImage module="common/math" id="math_constant" />

### Python
```python
math.pi                      # π
math.e                       # e
(1 + math.sqrt(5)) / 2       # złota liczba
math.sqrt(2)                 # √2
math.sqrt(1.0 / 2)           # √(1/2)
float('inf')                 # nieskończoność
```

## Właściwości liczby {#math_number_property}

Sprawdza, czy podana liczba jest parzysta, nieparzysta, pierwsza, całkowita, dodatnia, ujemna albo podzielna przez daną liczbę, i zwraca **prawdę lub fałsz**.

<BlockImage module="common/math" id="math_number_property" />

### Python
```python
NUM % 2 == 0           # EVEN (parzysta)
NUM % 2 == 1           # ODD (nieparzysta)
math_isPrime(NUM)      # PRIME (pierwsza)
NUM % 1 == 0           # WHOLE (całkowita)
NUM > 0                # POSITIVE (dodatnia)
NUM < 0                # NEGATIVE (ujemna)
NUM % DIVISOR == 0     # DIVISIBLE_BY (podzielna przez)

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

## Zaokrąglanie {#math_round}

Zwraca podaną liczbę po **zaokrągleniu (round), zaokrągleniu w górę (ceil) lub w dół (floor)**.

<BlockImage module="common/math" id="math_round" />

### Python
```python
round(NUM)        # zaokrąglij
math.ceil(NUM)    # zaokrąglij w górę
math.floor(NUM)   # zaokrąglij w dół
```

## Operacje na liście {#math_on_list}

Wykonuje na liście działania: sumę, wartość najmniejszą, największą, średnią, medianę, dominantę, odchylenie standardowe oraz losowanie elementu.

<BlockImage module="common/math" id="math_on_list" />

### Python
```python
sum(list)                          # suma
min(list)                          # wartość najmniejsza
max(list)                          # wartość największa
math_mean(list)                    # średnia
math_median(list)                  # mediana
math_modes(list)                   # dominanta (wartość występująca najczęściej)
math_standard_deviation(list)      # odchylenie standardowe
random.choice(list)                # losowy element listy

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

## Reszta z dzielenia {#math_modulo}

Blok obliczający **resztę** z dzielenia dwóch liczb.

<BlockImage module="common/math" id="math_modulo" />

### Python
```python
A % B
```

## Ograniczenie do zakresu {#math_constrain}

Pilnuje, żeby podana wartość nie wyszła poza zakres wyznaczony przez **wartość najmniejszą i największą**.  
Wartości spoza zakresu są zamieniane na bliższą granicę.

<BlockImage module="common/math" id="math_constrain" />

### Python
```python
min(max(VALUE, LOW), HIGH)
```

## Losowa liczba całkowita {#math_random_int}

Blok losujący **liczbę całkowitą** z podanego zakresu.

<BlockImage module="common/math" id="math_random_int" />

### Python
```python
random.randint(FROM, TO)
```

## Losowy ułamek {#math_random_float}

Losuje **ułamek** z przedziału od 0 do 1.

<BlockImage module="common/math" id="math_random_float" />

### Python
```python
random.random()
```

## atan2 {#math_atan2}

Blok obliczający kąt (atan2), jaki punkt o podanych współrzędnych (x, y) tworzy z początkiem układu (0,0).  
Przydaje się do wyznaczania kierunku na podstawie położenia punktu.

<BlockImage module="common/math" id="math_atan2" />

### Python
```python
math.atan2(Y, X) / math.pi * 180
```
