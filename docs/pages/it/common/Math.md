---
title: Matematica
---

# Matematica

Questo documento descrive le funzioni e l'uso dei vari blocchi matematici.  
Presenta i blocchi che eseguono operazioni matematiche di ogni tipo: calcoli con numeri, elaborazione di liste, probabilità, angoli e altro.

## Valore numerico {#math_number}

È il blocco che restituisce tale e quale il **valore numerico** inserito.  
Con questo blocco puoi salvare un numero preciso in una variabile o usarlo in un'altra operazione.

<BlockImage module="common/math" id="math_number" />

### Python
```
50
```

## Creare un array e operarci {#math_array}

È il blocco che crea un **array**.
Restituisce un array che ha come elementi i valori inseriti tra `[]`.
Inserendo tra `[]` i valori che vuoi puoi creare una lista; le stringhe vanno racchiuse tra " ".

<BlockImage module="common/math" id="math_array" />

### Python
```python
[]
```

## Operazioni aritmetiche di base {#math_arithmetic}

È il blocco che esegue un'**operazione aritmetica** (addizione, sottrazione, moltiplicazione, divisione, potenza) con due valori numerici.

<BlockImage module="common/math" id="math_arithmetic" />

### Python
```python
A + B
A - B
A * B
A / B
A ** B
```

## Operazioni unarie {#math_single}

È il blocco che esegue un'**operazione unaria**: radice quadrata, valore assoluto, inversione del segno, esponenziale, logaritmo e altre.

<BlockImage module="common/math" id="math_single" />

### Python
```python
math.sqrt(NUM)  # radice quadrata
math.fabs(NUM)  # valore assoluto
-NUM            # -
math.log(NUM)   # ln
math.log10(NUM) # log10
math.exp(NUM)   # e^
10 ** NUM       # 10^
```

## Funzioni trigonometriche {#math_trig}

È il blocco che calcola il valore di una **funzione trigonometrica**: seno, coseno, tangente e altre.

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

## Costanti {#math_constant}

Restituisce una **costante particolare** che serve nei calcoli (π, e, sezione aurea, √2, √(1/2), infinito).

<BlockImage module="common/math" id="math_constant" />

### Python
```python
math.pi                      # π
math.e                       # e
(1 + math.sqrt(5)) / 2       # sezione aurea
math.sqrt(2)                 # √2
math.sqrt(1.0 / 2)           # √(1/2)
float('inf')                 # infinito
```

## Condizione {#math_number_property}

Verifica se il numero inserito è pari, dispari, primo, intero, positivo, negativo o multiplo di un numero determinato e restituisce **vero/falso**.

<BlockImage module="common/math" id="math_number_property" />

### Python
```python
NUM % 2 == 0           # EVEN (pari)
NUM % 2 == 1           # ODD (dispari)
math_isPrime(NUM)      # PRIME (primo)
NUM % 1 == 0           # WHOLE (intero)
NUM > 0                # POSITIVE (positivo)
NUM < 0                # NEGATIVE (negativo)
NUM % DIVISOR == 0     # DIVISIBLE_BY (multiplo)

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

## Arrotondamento {#math_round}

Applica al numero inserito l'**arrotondamento (round), l'arrotondamento per eccesso (ceil) o per difetto (floor)** e restituisce il valore.

<BlockImage module="common/math" id="math_round" />

### Python
```python
round(NUM)        # arrotonda
math.ceil(NUM)    # arrotonda per eccesso
math.floor(NUM)   # arrotonda per difetto
```

## Operazioni sulle liste {#math_on_list}

Esegue su una lista le operazioni di somma, minimo, massimo, media, mediana, moda, deviazione standard ed estrazione di un elemento a caso.

<BlockImage module="common/math" id="math_on_list" />

### Python
```python
sum(list)                          # somma
min(list)                          # minimo
max(list)                          # massimo
math_mean(list)                    # media
math_median(list)                  # mediana
math_modes(list)                   # moda (il valore che compare più volte)
math_standard_deviation(list)      # deviazione standard
random.choice(list)                # un elemento a caso della lista

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

## Resto {#math_modulo}

È il blocco che ricava il **resto** della divisione di due numeri.

<BlockImage module="common/math" id="math_modulo" />

### Python
```python
A % B
```

## Intervallo tra minimo e massimo {#math_constrain}

Limita il valore inserito perché non esca dall'intervallo **minimo/massimo** indicato.  
I valori fuori dall'intervallo vengono portati al limite più vicino.

<BlockImage module="common/math" id="math_constrain" />

### Python
```python
min(max(VALUE, LOW), HIGH)
```

## Intero casuale {#math_random_int}

È il blocco che genera un **intero casuale** entro l'intervallo indicato.

<BlockImage module="common/math" id="math_random_int" />

### Python
```python
random.randint(FROM, TO)
```

## Frazione casuale {#math_random_float}

Genera un **valore frazionario casuale** tra 0 e 1.

<BlockImage module="common/math" id="math_random_float" />

### Python
```python
random.random()
```

## atan2 {#math_atan2}

È il blocco che calcola l'angolo (atan2) che le coordinate (x, y) indicate formano con l'origine (0,0).  
Si può usare per determinare una direzione a partire dalla posizione delle coordinate.

<BlockImage module="common/math" id="math_atan2" />

### Python
```python
math.atan2(Y, X) / math.pi * 180
```
