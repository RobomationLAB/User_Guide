---
title: Matemáticas
---

# Matemáticas

Este documento describe las funciones y el uso de los distintos bloques de matemáticas.  
Presenta bloques que realizan todo tipo de operaciones matemáticas: cálculos con números, tratamiento de listas, probabilidad, ángulos y más.

## Valor numérico {#math_number}

Un bloque que devuelve el **valor numérico** introducido tal cual.  
Con este bloque puedes guardar un número concreto en una variable o usarlo en otra operación.

<BlockImage module="common/math" id="math_number" />

### Python
```
50
```

## Crear y usar una matriz {#math_array}

Un bloque que crea una **matriz**.
Devuelve una matriz cuyos elementos son los valores que introduces entre los `[]`.
Puedes introducir los valores que quieras entre los `[]` para crear una lista; el texto debe ir entre " ".

<BlockImage module="common/math" id="math_array" />

### Python
```python
[]
```

## Operaciones aritméticas básicas {#math_arithmetic}

Un bloque que realiza una **operación aritmética** con dos valores numéricos (suma, resta, multiplicación, división, potencia).

<BlockImage module="common/math" id="math_arithmetic" />

### Python
```python
A + B
A - B
A * B
A / B
A ** B
```

## Operación con un solo valor {#math_single}

Un bloque que realiza una **operación con un solo valor**: raíz cuadrada, valor absoluto, cambio de signo, exponencial, logaritmo y más.

<BlockImage module="common/math" id="math_single" />

### Python
```python
math.sqrt(NUM)  # raíz cuadrada
math.fabs(NUM)  # valor absoluto
-NUM            # -
math.log(NUM)   # ln
math.log10(NUM) # log10
math.exp(NUM)   # e^
10 ** NUM       # 10^
```

## Funciones trigonométricas {#math_trig}

Un bloque que calcula el valor de las **funciones trigonométricas**: seno, coseno, tangente y más.

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

## Constantes {#math_constant}

Devuelve los **valores constantes especiales** que necesitas en los cálculos (π, e, proporción áurea, √2, √(1/2), infinito).

<BlockImage module="common/math" id="math_constant" />

### Python
```python
math.pi                      # π
math.e                       # e
(1 + math.sqrt(5)) / 2       # proporción áurea
math.sqrt(2)                 # √2
math.sqrt(1.0 / 2)           # √(1/2)
float('inf')                 # infinito
```

## Condición {#math_number_property}

Determina si el número introducido es par, impar, primo, entero, positivo o negativo, o múltiplo de un número concreto, y devuelve **verdadero/falso**.

<BlockImage module="common/math" id="math_number_property" />

### Python
```python
NUM % 2 == 0           # EVEN (par)
NUM % 2 == 1           # ODD (impar)
math_isPrime(NUM)      # PRIME (primo)
NUM % 1 == 0           # WHOLE (entero)
NUM > 0                # POSITIVE (positivo)
NUM < 0                # NEGATIVE (negativo)
NUM % DIVISOR == 0     # DIVISIBLE_BY (múltiplo)

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

## Redondear {#math_round}

**Redondea (round), redondea hacia arriba (ceil) o redondea hacia abajo (floor)** el número introducido y devuelve el valor.

<BlockImage module="common/math" id="math_round" />

### Python
```python
round(NUM)        # redondear
math.ceil(NUM)    # redondear hacia arriba
math.floor(NUM)   # redondear hacia abajo
```

## Operación sobre una lista {#math_on_list}

Realiza sobre una lista las operaciones suma, mínimo, máximo, media, mediana, moda, desviación típica y elemento aleatorio.

<BlockImage module="common/math" id="math_on_list" />

### Python
```python
sum(list)                          # suma
min(list)                          # mínimo
max(list)                          # máximo
math_mean(list)                    # media
math_median(list)                  # mediana
math_modes(list)                   # moda (el valor que más veces aparece)
math_standard_deviation(list)      # desviación típica
random.choice(list)                # elemento aleatorio de la lista

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

Un bloque que obtiene el **resto** de la división de dos números.

<BlockImage module="common/math" id="math_modulo" />

### Python
```python
A % B
```

## Rango entre mínimo y máximo {#math_constrain}

Limita el valor introducido para que no salga del rango de **mínimo/máximo** indicado.  
Los valores fuera del rango se ajustan al valor límite más cercano.

<BlockImage module="common/math" id="math_constrain" />

### Python
```python
min(max(VALUE, LOW), HIGH)
```

## Entero aleatorio {#math_random_int}

Un bloque que genera un **entero aleatorio** dentro del rango indicado.

<BlockImage module="common/math" id="math_random_int" />

### Python
```python
random.randint(FROM, TO)
```

## Fracción aleatoria {#math_random_float}

Genera una **fracción aleatoria** entre 0 y 1.

<BlockImage module="common/math" id="math_random_float" />

### Python
```python
random.random()
```

## atan2 {#math_atan2}

Un bloque que calcula el ángulo (atan2) que forma la coordenada (x, y) dada con el origen (0,0).  
Puedes usarlo para determinar la dirección a partir de una coordenada.

<BlockImage module="common/math" id="math_atan2" />

### Python
```python
math.atan2(Y, X) / math.pi * 180
```
