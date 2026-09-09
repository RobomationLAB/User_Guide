---
title: Matematikk
---

# Matematikk

Dette dokumentet beskriver hva de ulike matematikkblokkene gjør, og hvordan du bruker dem.  
Her finner du blokker som utfører mange slags matematiske operasjoner: tallregning, listebehandling, sannsynlighet, vinkelberegning med mer.

## Tallverdi {#math_number}

En blokk som returnerer den **tallverdien** du skriver inn, akkurat som den er.  
Med denne blokken kan du lagre et bestemt tall i en variabel eller bruke det i andre beregninger.

<BlockImage module="common/math" id="math_number" />

### Python
```
50
```

## Lage og regne med tabeller {#math_array}

En blokk som lager en **tabell**.
Den returnerer en tabell med de verdiene du skriver inn i `[]`, som elementer.
Du kan lage en liste ved å skrive de verdiene du vil ha inne i `[]`, og tekst må stå i " ".

<BlockImage module="common/math" id="math_array" />

### Python
```python
[]
```

## Grunnleggende regneoperasjoner {#math_arithmetic}

En blokk som utfører **regneoperasjoner** (addisjon, subtraksjon, multiplikasjon, divisjon, potens) med to tallverdier.

<BlockImage module="common/math" id="math_arithmetic" />

### Python
```python
A + B
A - B
A * B
A / B
A ** B
```

## Unære operasjoner {#math_single}

En blokk som utfører **unære operasjoner** som kvadratrot, absoluttverdi, fortegnsbytte, eksponential- og logaritmefunksjoner.

<BlockImage module="common/math" id="math_single" />

### Python
```python
math.sqrt(NUM)  # kvadratrot
math.fabs(NUM)  # absoluttverdi
-NUM            # -
math.log(NUM)   # ln
math.log10(NUM) # log10
math.exp(NUM)   # e^
10 ** NUM       # 10^
```

## Trigonometriske funksjoner {#math_trig}

En blokk som regner ut verdien av **trigonometriske funksjoner** som sinus, cosinus og tangens.

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

Returnerer de **spesielle konstantene** du trenger i beregninger (π, e, det gylne snitt, √2, √(1/2), uendelig).

<BlockImage module="common/math" id="math_constant" />

### Python
```python
math.pi                      # π
math.e                       # e
(1 + math.sqrt(5)) / 2       # det gylne snitt
math.sqrt(2)                 # √2
math.sqrt(1.0 / 2)           # √(1/2)
float('inf')                 # uendelig
```

## Betingelse {#math_number_property}

Avgjør om tallet du skriver inn, er et partall, et oddetall, et primtall, et heltall, et positivt tall, et negativt tall eller et multiplum av et bestemt tall, og returnerer **sann/usann**.

<BlockImage module="common/math" id="math_number_property" />

### Python
```python
NUM % 2 == 0           # EVEN (partall)
NUM % 2 == 1           # ODD (oddetall)
math_isPrime(NUM)      # PRIME (primtall)
NUM % 1 == 0           # WHOLE (heltall)
NUM > 0                # POSITIVE (positivt tall)
NUM < 0                # NEGATIVE (negativt tall)
NUM % DIVISOR == 0     # DIVISIBLE_BY (multiplum)

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

## Avrunding {#math_round}

Returnerer tallet du skriver inn, **avrundet (round), rundet opp (ceil) eller rundet ned (floor)**.

<BlockImage module="common/math" id="math_round" />

### Python
```python
round(NUM)        # avrunding
math.ceil(NUM)    # runde opp
math.floor(NUM)   # runde ned
```

## Listeoperasjoner {#math_on_list}

Regner ut summen, minsteverdien, størsteverdien, gjennomsnittet, medianen, typetallet og standardavviket for en liste, og henter et tilfeldig element fra den.

<BlockImage module="common/math" id="math_on_list" />

### Python
```python
sum(list)                          # sum
min(list)                          # minsteverdi
max(list)                          # størsteverdi
math_mean(list)                    # gjennomsnitt
math_median(list)                  # median
math_modes(list)                   # typetall (verdien som forekommer flest ganger)
math_standard_deviation(list)      # standardavvik
random.choice(list)                # tilfeldig element i listen

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

En blokk som finner **resten** når to tall divideres.

<BlockImage module="common/math" id="math_modulo" />

### Python
```python
A % B
```

## Minste og største verdi {#math_constrain}

Begrenser verdien du skriver inn, slik at den ikke går utenfor den **minste- og størsteverdien** du har angitt.  
Verdier utenfor området justeres til nærmeste grenseverdi.

<BlockImage module="common/math" id="math_constrain" />

### Python
```python
min(max(VALUE, LOW), HIGH)
```

## Tilfeldig heltall {#math_random_int}

En blokk som lager et **tilfeldig heltall** innenfor det området du angir.

<BlockImage module="common/math" id="math_random_int" />

### Python
```python
random.randint(FROM, TO)
```

## Tilfeldig flyttall {#math_random_float}

Lager en **tilfeldig brøkverdi** mellom 0 og 1.

<BlockImage module="common/math" id="math_random_float" />

### Python
```python
random.random()
```

## atan2 {#math_atan2}

En blokk som regner ut vinkelen (atan2) mellom origo (0,0) og de oppgitte koordinatene (x, y).  
Du kan bruke den til å finne retningen ut fra en posisjon.

<BlockImage module="common/math" id="math_atan2" />

### Python
```python
math.atan2(Y, X) / math.pi * 180
```
