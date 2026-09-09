---
title: Maths
---

# Maths

Ce document décrit les fonctions et l'utilisation des différents blocs mathématiques.  
Il présente les blocs qui effectuent toutes sortes d'opérations mathématiques : calculs sur les nombres, traitement des listes, probabilités, angles et autres.

## Valeur numérique {#math_number}

C'est le bloc qui renvoie telle quelle la **valeur numérique** saisie.  
Avec ce bloc tu peux enregistrer un nombre précis dans une variable ou l'utiliser dans une autre opération.

<BlockImage module="common/math" id="math_number" />

### Python
```
50
```

## Créer un tableau et opérer dessus {#math_array}

C'est le bloc qui crée un **tableau**.
Il renvoie un tableau qui a pour éléments les valeurs saisies entre `[]`.
En saisissant entre `[]` les valeurs que tu veux tu peux créer une liste ; les chaînes doivent être entourées de " ".

<BlockImage module="common/math" id="math_array" />

### Python
```python
[]
```

## Opérations arithmétiques de base {#math_arithmetic}

C'est le bloc qui effectue une **opération arithmétique** (addition, soustraction, multiplication, division, puissance) avec deux valeurs numériques.

<BlockImage module="common/math" id="math_arithmetic" />

### Python
```python
A + B
A - B
A * B
A / B
A ** B
```

## Opérations unaires {#math_single}

C'est le bloc qui effectue une **opération unaire** : racine carrée, valeur absolue, changement de signe, exponentielle, logarithme et autres.

<BlockImage module="common/math" id="math_single" />

### Python
```python
math.sqrt(NUM)  # racine carrée
math.fabs(NUM)  # valeur absolue
-NUM            # -
math.log(NUM)   # ln
math.log10(NUM) # log10
math.exp(NUM)   # e^
10 ** NUM       # 10^
```

## Fonctions trigonométriques {#math_trig}

C'est le bloc qui calcule la valeur d'une **fonction trigonométrique** : sinus, cosinus, tangente et autres.

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

Renvoie une **constante particulière** utile dans les calculs (π, e, nombre d'or, √2, √(1/2), infini).

<BlockImage module="common/math" id="math_constant" />

### Python
```python
math.pi                      # π
math.e                       # e
(1 + math.sqrt(5)) / 2       # nombre d'or
math.sqrt(2)                 # √2
math.sqrt(1.0 / 2)           # √(1/2)
float('inf')                 # infini
```

## Condition {#math_number_property}

Vérifie si le nombre saisi est pair, impair, premier, entier, positif, négatif ou multiple d'un nombre donné et renvoie **vrai/faux**.

<BlockImage module="common/math" id="math_number_property" />

### Python
```python
NUM % 2 == 0           # EVEN (pair)
NUM % 2 == 1           # ODD (impair)
math_isPrime(NUM)      # PRIME (premier)
NUM % 1 == 0           # WHOLE (entier)
NUM > 0                # POSITIVE (positif)
NUM < 0                # NEGATIVE (négatif)
NUM % DIVISOR == 0     # DIVISIBLE_BY (multiple)

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

## Arrondi {#math_round}

Applique au nombre saisi l'**arrondi (round), l'arrondi par excès (ceil) ou par défaut (floor)** et renvoie la valeur.

<BlockImage module="common/math" id="math_round" />

### Python
```python
round(NUM)        # arrondir
math.ceil(NUM)    # arrondir par excès
math.floor(NUM)   # arrondir par défaut
```

## Opérations sur les listes {#math_on_list}

Effectue sur une liste les opérations de somme, minimum, maximum, moyenne, médiane, mode, écart type et extraction d'un élément au hasard.

<BlockImage module="common/math" id="math_on_list" />

### Python
```python
sum(list)                          # somme
min(list)                          # minimum
max(list)                          # maximum
math_mean(list)                    # moyenne
math_median(list)                  # médiane
math_modes(list)                   # mode (la valeur qui revient le plus souvent)
math_standard_deviation(list)      # écart type
random.choice(list)                # un élément au hasard de la liste

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

## Reste {#math_modulo}

C'est le bloc qui donne le **reste** de la division de deux nombres.

<BlockImage module="common/math" id="math_modulo" />

### Python
```python
A % B
```

## Intervalle entre minimum et maximum {#math_constrain}

Contraint la valeur saisie à ne pas sortir de l'intervalle **minimum/maximum** indiqué.  
Les valeurs hors de l'intervalle sont ramenées à la borne la plus proche.

<BlockImage module="common/math" id="math_constrain" />

### Python
```python
min(max(VALUE, LOW), HIGH)
```

## Entier aléatoire {#math_random_int}

C'est le bloc qui génère un **entier aléatoire** dans l'intervalle indiqué.

<BlockImage module="common/math" id="math_random_int" />

### Python
```python
random.randint(FROM, TO)
```

## Fraction aléatoire {#math_random_float}

Génère une **valeur fractionnaire aléatoire** entre 0 et 1.

<BlockImage module="common/math" id="math_random_float" />

### Python
```python
random.random()
```

## atan2 {#math_atan2}

C'est le bloc qui calcule l'angle (atan2) que les coordonnées (x, y) données forment avec l'origine (0,0).  
On peut l'utiliser pour déterminer une direction à partir de la position des coordonnées.

<BlockImage module="common/math" id="math_atan2" />

### Python
```python
math.atan2(Y, X) / math.pi * 180
```
