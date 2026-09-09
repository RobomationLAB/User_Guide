---
title: Matemática
---

# Matemática

Este documento descreve as funções e a utilização dos vários blocos de matemática.  
Apresenta blocos que executam todo o tipo de operações matemáticas: cálculos com números, tratamento de listas, probabilidade, ângulos e mais.

## Valor numérico {#math_number}

Um bloco que devolve o **valor numérico** introduzido tal como está.  
Com este bloco podes guardar um número numa variável ou usá-lo noutra operação.

<BlockImage module="common/math" id="math_number" />

### Python
```
50
```

## Criar e usar uma matriz {#math_array}

Um bloco que cria uma **matriz**.
Devolve uma matriz cujos elementos são os valores que introduzes entre os `[]`.
Podes introduzir os valores que quiseres entre os `[]` para criar uma lista; o texto tem de ir entre " ".

<BlockImage module="common/math" id="math_array" />

### Python
```python
[]
```

## Operações aritméticas básicas {#math_arithmetic}

Um bloco que executa com dois valores numéricos uma **operação aritmética** (soma, subtração, multiplicação, divisão, potência).

<BlockImage module="common/math" id="math_arithmetic" />

### Python
```python
A + B
A - B
A * B
A / B
A ** B
```

## Operação com um só valor {#math_single}

Um bloco que executa uma **operação com um só valor**: raiz quadrada, valor absoluto, troca de sinal, exponencial, logaritmo e mais.

<BlockImage module="common/math" id="math_single" />

### Python
```python
math.sqrt(NUM)  # raiz quadrada
math.fabs(NUM)  # valor absoluto
-NUM            # -
math.log(NUM)   # ln
math.log10(NUM) # log10
math.exp(NUM)   # e^
10 ** NUM       # 10^
```

## Funções trigonométricas {#math_trig}

Um bloco que calcula o valor das **funções trigonométricas**: seno, cosseno, tangente e mais.

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

Devolve os **valores constantes especiais** de que precisas nos cálculos (π, e, proporção de ouro, √2, √(1/2), infinito).

<BlockImage module="common/math" id="math_constant" />

### Python
```python
math.pi                      # π
math.e                       # e
(1 + math.sqrt(5)) / 2       # proporção de ouro
math.sqrt(2)                 # √2
math.sqrt(1.0 / 2)           # √(1/2)
float('inf')                 # infinito
```

## Condição {#math_number_property}

Determina se o número introduzido é par, ímpar, primo, inteiro, positivo ou negativo, ou múltiplo de um número, e devolve **verdadeiro/falso**.

<BlockImage module="common/math" id="math_number_property" />

### Python
```python
NUM % 2 == 0           # EVEN (par)
NUM % 2 == 1           # ODD (ímpar)
math_isPrime(NUM)      # PRIME (primo)
NUM % 1 == 0           # WHOLE (inteiro)
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

## Arredondar {#math_round}

**Arredonda (round), arredonda para cima (ceil) ou arredonda para baixo (floor)** o número introduzido e devolve o valor.

<BlockImage module="common/math" id="math_round" />

### Python
```python
round(NUM)        # arredondar
math.ceil(NUM)    # arredondar para cima
math.floor(NUM)   # arredondar para baixo
```

## Operação sobre uma lista {#math_on_list}

Executa sobre uma lista as operações soma, mínimo, máximo, média, mediana, moda, desvio padrão e item aleatório.

<BlockImage module="common/math" id="math_on_list" />

### Python
```python
sum(list)                          # soma
min(list)                          # mínimo
max(list)                          # máximo
math_mean(list)                    # média
math_median(list)                  # mediana
math_modes(list)                   # moda (o valor que aparece mais vezes)
math_standard_deviation(list)      # desvio padrão
random.choice(list)                # item aleatório da lista

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

## Resto da divisão {#math_modulo}

Um bloco que obtém o **resto** da divisão de dois números.

<BlockImage module="common/math" id="math_modulo" />

### Python
```python
A % B
```

## Intervalo entre mínimo e máximo {#math_constrain}

Restringe o valor introduzido para que não saia do intervalo de **mínimo/máximo** indicado.  
Os valores fora do intervalo são ajustados para o valor limite mais próximo.

<BlockImage module="common/math" id="math_constrain" />

### Python
```python
min(max(VALUE, LOW), HIGH)
```

## Inteiro aleatório {#math_random_int}

Um bloco que gera um **inteiro aleatório** dentro do intervalo indicado.

<BlockImage module="common/math" id="math_random_int" />

### Python
```python
random.randint(FROM, TO)
```

## Fração aleatória {#math_random_float}

Gera uma **fração aleatória** entre 0 e 1.

<BlockImage module="common/math" id="math_random_float" />

### Python
```python
random.random()
```

## atan2 {#math_atan2}

Um bloco que calcula o ângulo (atan2) que a coordenada (x, y) dada forma com a origem (0,0).  
Podes usá-lo para determinar a direção a partir de uma coordenada.

<BlockImage module="common/math" id="math_atan2" />

### Python
```python
math.atan2(Y, X) / math.pi * 180
```
