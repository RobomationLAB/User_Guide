---
title: Matematik
---

# Matematik

Det här dokumentet beskriver vad de olika matematikblocken gör och hur de används.  
Här presenteras block för olika slags matematiska beräkningar: taloperationer, listbehandling, sannolikhet och vinkelberäkningar.

## Talvärde {#math_number}

Ett block som returnerar det **talvärde** du skriver in, precis som det är.  
Med det här blocket kan du spara ett visst tal i en variabel eller använda det i andra beräkningar.

<BlockImage module="common/math" id="math_number" />

### Python
```
50
```

## Skapa fält och beräkna {#math_array}

Ett block som skapar ett **fält** (en array).
Det returnerar ett fält som har de värden du skriver in inuti `[]` som element.
Du kan skapa en lista genom att skriva önskade värden inuti `[]`, och strängar måste omges av " ".

<BlockImage module="common/math" id="math_array" />

### Python
```python
[]
```

## Grundläggande aritmetik {#math_arithmetic}

Ett block som utför **aritmetiska operationer** (addition, subtraktion, multiplikation, division, upphöjt till) med två talvärden.

<BlockImage module="common/math" id="math_arithmetic" />

### Python
```python
A + B
A - B
A * B
A / B
A ** B
```

## Unära operationer {#math_single}

Ett block som utför **unära operationer** som kvadratrot, absolutbelopp, teckenbyte, exponential- och logaritmfunktioner.

<BlockImage module="common/math" id="math_single" />

### Python
```python
math.sqrt(NUM)  # kvadratrot
math.fabs(NUM)  # absolutbelopp
-NUM            # -
math.log(NUM)   # ln
math.log10(NUM) # log10
math.exp(NUM)   # e^
10 ** NUM       # 10^
```

## Trigonometriska funktioner {#math_trig}

Ett block som beräknar värdet av **trigonometriska funktioner** som sinus, cosinus och tangens.

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

## Konstanter {#math_constant}

Returnerar **särskilda konstanta värden** som behövs i beräkningar (π, e, gyllene snittet, √2, √(1/2), oändligheten).

<BlockImage module="common/math" id="math_constant" />

### Python
```python
math.pi                      # π
math.e                       # e
(1 + math.sqrt(5)) / 2       # gyllene snittet
math.sqrt(2)                 # √2
math.sqrt(1.0 / 2)           # √(1/2)
float('inf')                 # oändligheten
```

## Talegenskap {#math_number_property}

Avgör om det angivna talet är jämnt, udda, ett primtal, ett heltal, positivt, negativt eller delbart med ett visst tal, och returnerar **sant/falskt**.

<BlockImage module="common/math" id="math_number_property" />

### Python
```python
NUM % 2 == 0           # EVEN (jämnt)
NUM % 2 == 1           # ODD (udda)
math_isPrime(NUM)      # PRIME (primtal)
NUM % 1 == 0           # WHOLE (heltal)
NUM > 0                # POSITIVE (positivt)
NUM < 0                # NEGATIVE (negativt)
NUM % DIVISOR == 0     # DIVISIBLE_BY (delbart med)

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

## Avrundning {#math_round}

Returnerar det angivna talet **avrundat (round), avrundat uppåt (ceil) eller avrundat nedåt (floor)**.

<BlockImage module="common/math" id="math_round" />

### Python
```python
round(NUM)        # avrunda
math.ceil(NUM)    # avrunda uppåt
math.floor(NUM)   # avrunda nedåt
```

## Listoperationer {#math_on_list}

Beräknar summa, minsta värde, största värde, medelvärde, median, typvärde, standardavvikelse eller plockar ut ett slumpmässigt objekt ur en lista.

<BlockImage module="common/math" id="math_on_list" />

### Python
```python
sum(list)                          # summa
min(list)                          # minsta värdet
max(list)                          # största värdet
math_mean(list)                    # medelvärde
math_median(list)                  # median
math_modes(list)                   # typvärde (det värde som förekommer flest gånger)
math_standard_deviation(list)      # standardavvikelse
random.choice(list)                # slumpmässigt objekt i listan

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

## Rest {#math_modulo}

Ett block som tar fram **resten** vid division mellan två tal.

<BlockImage module="common/math" id="math_modulo" />

### Python
```python
A % B
```

## Begränsa till intervall {#math_constrain}

Ser till att det angivna värdet inte hamnar utanför det **minsta/största** värde du anger.  
Värden utanför intervallet justeras till närmaste gränsvärde.

<BlockImage module="common/math" id="math_constrain" />

### Python
```python
min(max(VALUE, LOW), HIGH)
```

## Slumpartat heltal {#math_random_int}

Ett block som skapar ett **slumpartat heltal** inom det angivna intervallet.

<BlockImage module="common/math" id="math_random_int" />

### Python
```python
random.randint(FROM, TO)
```

## Slumpat decimaltal {#math_random_float}

Skapar ett **slumpmässigt decimaltal** mellan 0 och 1.

<BlockImage module="common/math" id="math_random_float" />

### Python
```python
random.random()
```

## atan2 {#math_atan2}

Ett block som beräknar vinkeln (atan2) mellan de angivna koordinaterna (x, y) och origo (0,0).  
Det kan användas för att avgöra en riktning utifrån en punkts läge.

<BlockImage module="common/math" id="math_atan2" />

### Python
```python
math.atan2(Y, X) / math.pi * 180
```
