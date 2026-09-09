---
title: Wiskunde
---

# Wiskunde

Dit document beschrijft de functies en het gebruik van de verschillende wiskundeblokken.  
Het stelt blokken voor die allerlei wiskundige bewerkingen uitvoeren: rekenen met getallen, lijsten verwerken, kansen en hoeken berekenen en meer.

## Getalwaarde {#math_number}

Een blok dat de ingevoerde **getalwaarde** ongewijzigd teruggeeft.  
Met dit blok kun je een bepaald getal in een variabele opslaan of in een andere bewerking gebruiken.

<BlockImage module="common/math" id="math_number" />

### Python
```
50
```

## Array maken en gebruiken {#math_array}

Een blok dat een **array** maakt.
Het geeft een array terug met de waarden die je tussen de `[]` invoert als elementen.
Je kunt tussen de `[]` de gewenste waarden invoeren om een lijst te maken; tekst moet je tussen " " zetten.

<BlockImage module="common/math" id="math_array" />

### Python
```python
[]
```

## Basisrekenkunde {#math_arithmetic}

Een blok dat met twee getalwaarden een **rekenkundige bewerking** uitvoert (optellen, aftrekken, vermenigvuldigen, delen, machtsverheffen).

<BlockImage module="common/math" id="math_arithmetic" />

### Python
```python
A + B
A - B
A * B
A / B
A ** B
```

## Bewerking met één waarde {#math_single}

Een blok dat een **bewerking met één waarde** uitvoert: wortel, absolute waarde, tekenomkering, exponent, logaritme en meer.

<BlockImage module="common/math" id="math_single" />

### Python
```python
math.sqrt(NUM)  # wortel
math.fabs(NUM)  # absolute waarde
-NUM            # -
math.log(NUM)   # ln
math.log10(NUM) # log10
math.exp(NUM)   # e^
10 ** NUM       # 10^
```

## Goniometrische functies {#math_trig}

Een blok dat de waarde van **goniometrische functies** berekent: sinus, cosinus, tangens en meer.

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

## Constanten {#math_constant}

Geeft de **speciale constante waarden** terug die je bij bewerkingen nodig hebt (π, e, gulden snede, √2, √(1/2), oneindig).

<BlockImage module="common/math" id="math_constant" />

### Python
```python
math.pi                      # π
math.e                       # e
(1 + math.sqrt(5)) / 2       # gulden snede
math.sqrt(2)                 # √2
math.sqrt(1.0 / 2)           # √(1/2)
float('inf')                 # oneindig
```

## Voorwaarde {#math_number_property}

Bepaalt of het ingevoerde getal even, oneven, priem, geheel, positief of negatief is of een veelvoud van een bepaald getal, en geeft **waar/onwaar** terug.

<BlockImage module="common/math" id="math_number_property" />

### Python
```python
NUM % 2 == 0           # EVEN (even)
NUM % 2 == 1           # ODD (oneven)
math_isPrime(NUM)      # PRIME (priem)
NUM % 1 == 0           # WHOLE (geheel)
NUM > 0                # POSITIVE (positief)
NUM < 0                # NEGATIVE (negatief)
NUM % DIVISOR == 0     # DIVISIBLE_BY (veelvoud)

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

## Afronden {#math_round}

Rondt het ingevoerde getal **af (round), naar boven af (ceil) of naar beneden af (floor)** en geeft de waarde terug.

<BlockImage module="common/math" id="math_round" />

### Python
```python
round(NUM)        # afronden
math.ceil(NUM)    # naar boven afronden
math.floor(NUM)   # naar beneden afronden
```

## Bewerking op een lijst {#math_on_list}

Voert op een lijst de bewerkingen som, minimum, maximum, gemiddelde, mediaan, modus, standaardafwijking en willekeurig item uit.

<BlockImage module="common/math" id="math_on_list" />

### Python
```python
sum(list)                          # som
min(list)                          # minimum
max(list)                          # maximum
math_mean(list)                    # gemiddelde
math_median(list)                  # mediaan
math_modes(list)                   # modus (de waarde die het vaakst voorkomt)
math_standard_deviation(list)      # standaardafwijking
random.choice(list)                # willekeurig item uit de lijst

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

## Restgetal {#math_modulo}

Een blok dat het **restgetal** van de deling van twee getallen bepaalt.

<BlockImage module="common/math" id="math_modulo" />

### Python
```python
A % B
```

## Bereik van minimaal tot maximaal {#math_constrain}

Beperkt de ingevoerde waarde zodat ze het opgegeven bereik van **minimum/maximum** niet verlaat.  
Waarden buiten het bereik worden naar de dichtstbijzijnde grenswaarde bijgesteld.

<BlockImage module="common/math" id="math_constrain" />

### Python
```python
min(max(VALUE, LOW), HIGH)
```

## Willekeurig geheel getal {#math_random_int}

Een blok dat binnen het opgegeven bereik een **willekeurig geheel getal** genereert.

<BlockImage module="common/math" id="math_random_int" />

### Python
```python
random.randint(FROM, TO)
```

## Willekeurige fractie {#math_random_float}

Genereert een **willekeurige fractie** tussen 0 en 1.

<BlockImage module="common/math" id="math_random_float" />

### Python
```python
random.random()
```

## atan2 {#math_atan2}

Een blok dat de hoek (atan2) berekent die de gegeven coördinaat (x, y) met de oorsprong (0,0) maakt.  
Je kunt het gebruiken om aan de hand van een coördinaat de richting te bepalen.

<BlockImage module="common/math" id="math_atan2" />

### Python
```python
math.atan2(Y, X) / math.pi * 180
```
