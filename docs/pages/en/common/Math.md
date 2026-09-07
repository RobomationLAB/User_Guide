---
title: Math
---

# Math

This document explains what the various math blocks do and how to use them.  
It covers blocks that perform a range of mathematical operations, including number arithmetic, list processing, probability, and angle calculations.

## Number {#math_number}

A block that returns the **number** you enter, unchanged.  
You can use this block to store a specific number in a variable or to feed it into another operation.

<BlockImage module="common/math" id="math_number" />

### Python
```
50
```

## Create an array {#math_array}

A block that creates an **array**.
It returns an array whose elements are the values you enter inside `[]`.
You can build a list by entering the values you want inside `[]`; strings must be wrapped in " ".

<BlockImage module="common/math" id="math_array" />

### Python
```python
[]
```

## Basic arithmetic {#math_arithmetic}

A block that performs an **arithmetic operation** (addition, subtraction, multiplication, division, exponentiation) on two numbers.

<BlockImage module="common/math" id="math_arithmetic" />

### Python
```python
A + B
A - B
A * B
A / B
A ** B
```

## Unary operations {#math_single}

A block that performs a **unary operation** such as square root, absolute value, negation, exponential, or logarithm.

<BlockImage module="common/math" id="math_single" />

### Python
```python
math.sqrt(NUM)  # square root
math.fabs(NUM)  # absolute
-NUM            # -
math.log(NUM)   # ln
math.log10(NUM) # log10
math.exp(NUM)   # e^
10 ** NUM       # 10^
```

## Trigonometric functions {#math_trig}

A block that calculates a **trigonometric function** such as sine, cosine, or tangent.

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

## Constants {#math_constant}

Returns a **special constant value** used in calculations (π, e, the golden ratio, √2, √(1/2), infinity).

<BlockImage module="common/math" id="math_constant" />

### Python
```python
math.pi                      # π
math.e                       # e
(1 + math.sqrt(5)) / 2       # golden ratio
math.sqrt(2)                 # √2
math.sqrt(1.0 / 2)           # √(1/2)
float('inf')                 # infinity
```

## Number properties {#math_number_property}

Checks whether the number you enter is even, odd, prime, whole, positive, negative, or divisible by a given number, and returns **true/false**.

<BlockImage module="common/math" id="math_number_property" />

### Python
```python
NUM % 2 == 0           # EVEN
NUM % 2 == 1           # ODD
math_isPrime(NUM)      # PRIME
NUM % 1 == 0           # WHOLE
NUM > 0                # POSITIVE
NUM < 0                # NEGATIVE
NUM % DIVISOR == 0     # DIVISIBLE_BY

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

## Round {#math_round}

Returns the number you enter after applying **round, ceil, or floor**.

<BlockImage module="common/math" id="math_round" />

### Python
```python
round(NUM)        # round
math.ceil(NUM)    # ceil
math.floor(NUM)   # floor
```

## Operations on a list {#math_on_list}

Performs sum, min, max, average, median, modes, standard deviation, or random-item operations on a list.

<BlockImage module="common/math" id="math_on_list" />

### Python
```python
sum(list)                          # sum
min(list)                          # min
max(list)                          # max
math_mean(list)                    # average
math_median(list)                  # median
math_modes(list)                   # modes (the most frequent values)
math_standard_deviation(list)      # standard deviation
random.choice(list)                # random item of list

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

## Remainder {#math_modulo}

A block that finds the **remainder** of the division of two numbers.

<BlockImage module="common/math" id="math_modulo" />

### Python
```python
A % B
```

## Constrain to a range {#math_constrain}

Limits the value you enter so that it does not fall outside the specified **low/high** range.  
Values outside the range are adjusted to the nearest boundary.

<BlockImage module="common/math" id="math_constrain" />

### Python
```python
min(max(VALUE, LOW), HIGH)
```

## Random integer {#math_random_int}

A block that generates a **random integer** within the specified range.

<BlockImage module="common/math" id="math_random_int" />

### Python
```python
random.randint(FROM, TO)
```

## Random fraction {#math_random_float}

Generates a **random fraction** between 0 and 1.

<BlockImage module="common/math" id="math_random_float" />

### Python
```python
random.random()
```

## atan2 {#math_atan2}

A block that calculates the angle (atan2) that the given (x, y) coordinate forms with the origin (0, 0).  
It can be used to determine a direction based on a coordinate position.

<BlockImage module="common/math" id="math_atan2" />

### Python
```python
math.atan2(Y, X) / math.pi * 180
```
