---
title: Matematik
---

# Matematik

Dette dokument beskriver, hvad de forskellige matematikblokke gør, og hvordan de bruges.  
Her præsenteres blokke til mange slags matematiske beregninger: taloperationer, listebehandling, sandsynlighed og vinkelberegninger.

## Talværdi {#math_number}

En blok, der returnerer den **talværdi**, du skriver ind, præcis som den er.  
Med denne blok kan du gemme et bestemt tal i en variabel eller bruge det i andre beregninger.

<BlockImage module="common/math" id="math_number" />

### Python
```
50
```

## Opret matrix og beregn {#math_array}

En blok, der opretter en **matrix** (et array).
Den returnerer en matrix med de værdier, du skriver inde i `[]`, som elementer.
Du kan lave en liste ved at skrive de ønskede værdier inde i `[]`, og strenge skal omsluttes af " ".

<BlockImage module="common/math" id="math_array" />

### Python
```python
[]
```

## Grundlæggende regnearter {#math_arithmetic}

En blok, der udfører **regneoperationer** (addition, subtraktion, multiplikation, division, potensopløftning) med to talværdier.

<BlockImage module="common/math" id="math_arithmetic" />

### Python
```python
A + B
A - B
A * B
A / B
A ** B
```

## Enkeltoperationer {#math_single}

En blok, der udfører **enkeltoperationer** som kvadratrod, absolutværdi, fortegnsskift, eksponential- og logaritmefunktioner.

<BlockImage module="common/math" id="math_single" />

### Python
```python
math.sqrt(NUM)  # kvadratrod
math.fabs(NUM)  # absolutværdi
-NUM            # -
math.log(NUM)   # ln
math.log10(NUM) # log10
math.exp(NUM)   # e^
10 ** NUM       # 10^
```

## Trigonometriske funktioner {#math_trig}

En blok, der beregner værdien af **trigonometriske funktioner** som sinus, cosinus og tangens.

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

Returnerer **særlige konstante værdier**, der bruges i beregninger (π, e, det gyldne snit, √2, √(1/2), uendelig).

<BlockImage module="common/math" id="math_constant" />

### Python
```python
math.pi                      # π
math.e                       # e
(1 + math.sqrt(5)) / 2       # det gyldne snit
math.sqrt(2)                 # √2
math.sqrt(1.0 / 2)           # √(1/2)
float('inf')                 # uendelig
```

## Talegenskab {#math_number_property}

Afgør, om det angivne tal er lige, ulige, et primtal, et heltal, positivt, negativt eller deleligt med et bestemt tal, og returnerer **sand/falsk**.

<BlockImage module="common/math" id="math_number_property" />

### Python
```python
NUM % 2 == 0           # EVEN (lige)
NUM % 2 == 1           # ODD (ulige)
math_isPrime(NUM)      # PRIME (primtal)
NUM % 1 == 0           # WHOLE (heltal)
NUM > 0                # POSITIVE (positivt)
NUM < 0                # NEGATIVE (negativt)
NUM % DIVISOR == 0     # DIVISIBLE_BY (deleligt med)

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

## Afrunding {#math_round}

Returnerer det angivne tal **afrundet (round), rundet op (ceil) eller rundet ned (floor)**.

<BlockImage module="common/math" id="math_round" />

### Python
```python
round(NUM)        # afrund
math.ceil(NUM)    # rund op
math.floor(NUM)   # rund ned
```

## Listeoperationer {#math_on_list}

Beregner sum, mindste værdi, største værdi, gennemsnit, median, typetal eller standardafvigelse for en liste, eller trækker et tilfældigt element ud.

<BlockImage module="common/math" id="math_on_list" />

### Python
```python
sum(list)                          # sum
min(list)                          # mindste værdi
max(list)                          # største værdi
math_mean(list)                    # gennemsnit
math_median(list)                  # median
math_modes(list)                   # typetal (den værdi, der forekommer flest gange)
math_standard_deviation(list)      # standardafvigelse
random.choice(list)                # tilfældigt element i listen

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

En blok, der finder **resten** ved division mellem to tal.

<BlockImage module="common/math" id="math_modulo" />

### Python
```python
A % B
```

## Begræns til interval {#math_constrain}

Sørger for, at den angivne værdi ikke kommer uden for den **mindste/største** værdi, du angiver.  
Værdier uden for intervallet justeres til den nærmeste grænseværdi.

<BlockImage module="common/math" id="math_constrain" />

### Python
```python
min(max(VALUE, LOW), HIGH)
```

## Tilfældigt heltal {#math_random_int}

En blok, der laver et **tilfældigt heltal** inden for det angivne interval.

<BlockImage module="common/math" id="math_random_int" />

### Python
```python
random.randint(FROM, TO)
```

## Tilfældigt decimaltal {#math_random_float}

Laver et **tilfældigt decimaltal** mellem 0 og 1.

<BlockImage module="common/math" id="math_random_float" />

### Python
```python
random.random()
```

## atan2 {#math_atan2}

En blok, der beregner vinklen (atan2) mellem de angivne koordinater (x, y) og origo (0,0).  
Den kan bruges til at bestemme en retning ud fra et punkts placering.

<BlockImage module="common/math" id="math_atan2" />

### Python
```python
math.atan2(Y, X) / math.pi * 180
```
