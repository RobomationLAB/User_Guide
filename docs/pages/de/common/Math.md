---
title: Mathematik
---

# Mathematik

Dieses Dokument erklärt die Funktionen und die Verwendung der verschiedenen Mathematik-Blöcke.  
Es stellt Blöcke vor, die verschiedene mathematische Operationen ausführen: Zahlenrechnung, Listenverarbeitung, Wahrscheinlichkeit und Winkelberechnung.

## Zahlenwert {#math_number}

Ein Block, der den eingegebenen **Zahlenwert** unverändert zurückgibt.  
Mit diesem Block kannst du eine bestimmte Zahl in einer Variablen speichern oder in anderen Berechnungen verwenden.

<BlockImage module="common/math" id="math_number" />

### Python
```
50
```

## Array erzeugen und rechnen {#math_array}

Ein Block, der ein **Array** erzeugt.
Er gibt ein Array zurück, dessen Elemente die in `[]` eingegebenen Werte sind.
Du kannst in `[]` die gewünschten Werte eingeben, um eine Liste zu erstellen; Zeichenketten müssen in " " stehen.

<BlockImage module="common/math" id="math_array" />

### Python
```python
[]
```

## Grundrechenarten {#math_arithmetic}

Ein Block, der mit zwei Zahlenwerten **Rechenoperationen** ausführt (Addition, Subtraktion, Multiplikation, Division, Potenz).

<BlockImage module="common/math" id="math_arithmetic" />

### Python
```python
A + B
A - B
A * B
A / B
A ** B
```

## Einstellige Operation {#math_single}

Ein Block, der **einstellige Operationen** ausführt: Quadratwurzel, Absolutwert, Vorzeichenumkehr, Exponential- und Logarithmusfunktionen.

<BlockImage module="common/math" id="math_single" />

### Python
```python
math.sqrt(NUM)  # Quadratwurzel
math.fabs(NUM)  # Absolutwert
-NUM            # -
math.log(NUM)   # ln
math.log10(NUM) # log10
math.exp(NUM)   # e^
10 ** NUM       # 10^
```

## Trigonometrische Funktionen {#math_trig}

Ein Block, der die Werte **trigonometrischer Funktionen** wie Sinus, Kosinus und Tangens berechnet.

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

## Konstante {#math_constant}

Gibt **besondere Konstanten** zurück, die man beim Rechnen braucht (π, e, goldener Schnitt, √2, √(1/2), unendlich).

<BlockImage module="common/math" id="math_constant" />

### Python
```python
math.pi                      # π
math.e                       # e
(1 + math.sqrt(5)) / 2       # goldener Schnitt
math.sqrt(2)                 # √2
math.sqrt(1.0 / 2)           # √(1/2)
float('inf')                 # unendlich
```

## Eigenschaft {#math_number_property}

Prüft, ob die eingegebene Zahl gerade, ungerade, eine Primzahl, ganzzahlig, positiv, negativ oder ein Vielfaches einer bestimmten Zahl ist, und gibt **true / false** zurück.

<BlockImage module="common/math" id="math_number_property" />

### Python
```python
NUM % 2 == 0           # EVEN (gerade)
NUM % 2 == 1           # ODD (ungerade)
math_isPrime(NUM)      # PRIME (Primzahl)
NUM % 1 == 0           # WHOLE (ganzzahlig)
NUM > 0                # POSITIVE (positiv)
NUM < 0                # NEGATIVE (negativ)
NUM % DIVISOR == 0     # DIVISIBLE_BY (Vielfaches)

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

## Runden {#math_round}

Verarbeitet die eingegebene Zahl mit **runde (round), runde auf (ceil), runde ab (floor)** und gibt den Wert zurück.

<BlockImage module="common/math" id="math_round" />

### Python
```python
round(NUM)        # runde
math.ceil(NUM)    # runde auf
math.floor(NUM)   # runde ab
```

## Listenoperation {#math_on_list}

Führt auf einer Liste die Operationen Summe, Minimum, Maximum, Mittelwert, Median, Modus, Standardabweichung und Zufallselement aus.

<BlockImage module="common/math" id="math_on_list" />

### Python
```python
sum(list)                          # Summe
min(list)                          # Minimum
max(list)                          # Maximum
math_mean(list)                    # Mittelwert
math_median(list)                  # Median
math_modes(list)                   # Modus (häufigster Wert)
math_standard_deviation(list)      # Standardabweichung
random.choice(list)                # Zufallselement der Liste

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

Ein Block, der den **Rest** der Division zweier Zahlen berechnet.

<BlockImage module="common/math" id="math_modulo" />

### Python
```python
A % B
```

## Begrenzen {#math_constrain}

Begrenzt den eingegebenen Wert so, dass er den angegebenen Bereich **zwischen Minimum und Maximum** nicht verlässt.  
Werte außerhalb des Bereichs werden auf den nächstgelegenen Grenzwert gesetzt.

<BlockImage module="common/math" id="math_constrain" />

### Python
```python
min(max(VALUE, LOW), HIGH)
```

## Ganzzahlige Zufallszahl {#math_random_int}

Ein Block, der im angegebenen Bereich eine **ganzzahlige Zufallszahl** erzeugt.

<BlockImage module="common/math" id="math_random_int" />

### Python
```python
random.randint(FROM, TO)
```

## Zufallszahl (0.0 - 1.0) {#math_random_float}

Erzeugt einen **zufälligen Bruchwert** zwischen 0 und 1.

<BlockImage module="common/math" id="math_random_float" />

### Python
```python
random.random()
```

## atan2 {#math_atan2}

Ein Block, der den Winkel (atan2) berechnet, den die gegebenen Koordinaten (x, y) mit dem Ursprung (0,0) bilden.  
Damit kannst du anhand der Position eine Richtung bestimmen.

<BlockImage module="common/math" id="math_atan2" />

### Python
```python
math.atan2(Y, X) / math.pi * 180
```
