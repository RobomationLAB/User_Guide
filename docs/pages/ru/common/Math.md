---
title: Математика
---

# Математика

Этот документ описывает работу и применение разных математических блоков.  
Здесь представлены блоки, выполняющие всевозможные вычисления: действия с числами, операции со списками, случайный выбор и вычисления углов.

## Числовое значение {#math_number}

Блок, возвращающий введённое **числовое значение** без изменений.  
Позволяет сохранить нужное число в переменной или использовать его в других вычислениях.

<BlockImage module="common/math" id="math_number" />

### Python
```
50
```

## Создание массива {#math_array}

Блок, создающий **массив**.
Возвращает массив, элементами которого являются значения, записанные в скобках `[]`.
Записав в `[]` нужные значения, можно составить список; текст следует заключать в " ".

<BlockImage module="common/math" id="math_array" />

### Python
```python
[]
```

## Основные арифметические действия {#math_arithmetic}

Блок, выполняющий над двумя числами **арифметические действия** (сложение, вычитание, умножение, деление, возведение в степень).

<BlockImage module="common/math" id="math_arithmetic" />

### Python
```python
A + B
A - B
A * B
A / B
A ** B
```

## Унарные операции {#math_single}

Блок, выполняющий **унарные операции**: квадратный корень, модуль, смену знака, показательную функцию, логарифм и другие.

<BlockImage module="common/math" id="math_single" />

### Python
```python
math.sqrt(NUM)  # квадратный корень
math.fabs(NUM)  # модуль
-NUM            # -
math.log(NUM)   # ln
math.log10(NUM) # log10
math.exp(NUM)   # e^
10 ** NUM       # 10^
```

## Тригонометрические функции {#math_trig}

Блок, вычисляющий значения **тригонометрических функций**: синуса, косинуса, тангенса и других.

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

## Константы {#math_constant}

Возвращает **значения констант**, нужных в вычислениях (π, e, золотое сечение, √2, √(1/2), бесконечность).

<BlockImage module="common/math" id="math_constant" />

### Python
```python
math.pi                      # π
math.e                       # e
(1 + math.sqrt(5)) / 2       # золотое сечение
math.sqrt(2)                 # √2
math.sqrt(1.0 / 2)           # √(1/2)
float('inf')                 # бесконечность
```

## Свойства числа {#math_number_property}

Проверяет, является ли заданное число чётным, нечётным, простым, целым, положительным, отрицательным или кратным заданному числу, и возвращает **истину или ложь**.

<BlockImage module="common/math" id="math_number_property" />

### Python
```python
NUM % 2 == 0           # EVEN (чётное)
NUM % 2 == 1           # ODD (нечётное)
math_isPrime(NUM)      # PRIME (простое)
NUM % 1 == 0           # WHOLE (целое)
NUM > 0                # POSITIVE (положительное)
NUM < 0                # NEGATIVE (отрицательное)
NUM % DIVISOR == 0     # DIVISIBLE_BY (кратное)

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

## Округление {#math_round}

Возвращает заданное число после **округления (round), округления вверх (ceil) или вниз (floor)**.

<BlockImage module="common/math" id="math_round" />

### Python
```python
round(NUM)        # округлить
math.ceil(NUM)    # округлить вверх
math.floor(NUM)   # округлить вниз
```

## Операции со списком {#math_on_list}

Выполняет над списком действия: сумму, наименьшее значение, наибольшее значение, среднее, медиану, моду, стандартное отклонение и выбор случайного элемента.

<BlockImage module="common/math" id="math_on_list" />

### Python
```python
sum(list)                          # сумма
min(list)                          # наименьшее значение
max(list)                          # наибольшее значение
math_mean(list)                    # среднее
math_median(list)                  # медиана
math_modes(list)                   # мода (наиболее часто встречающееся значение)
math_standard_deviation(list)      # стандартное отклонение
random.choice(list)                # случайный элемент списка

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

## Остаток от деления {#math_modulo}

Блок, вычисляющий **остаток** от деления двух чисел.

<BlockImage module="common/math" id="math_modulo" />

### Python
```python
A % B
```

## Ограничение диапазоном {#math_constrain}

Следит за тем, чтобы заданное значение не вышло за пределы, заданные **наименьшим и наибольшим значениями**.  
Значения вне диапазона заменяются ближайшей границей.

<BlockImage module="common/math" id="math_constrain" />

### Python
```python
min(max(VALUE, LOW), HIGH)
```

## Случайное целое число {#math_random_int}

Блок, выбирающий случайное **целое число** из заданного диапазона.

<BlockImage module="common/math" id="math_random_int" />

### Python
```python
random.randint(FROM, TO)
```

## Случайная дробь {#math_random_float}

Выбирает случайное **дробное число** от 0 до 1.

<BlockImage module="common/math" id="math_random_float" />

### Python
```python
random.random()
```

## atan2 {#math_atan2}

Блок, вычисляющий угол (atan2), который точка с заданными координатами (x, y) образует с началом координат (0,0).  
Пригодится для определения направления по положению точки.

<BlockImage module="common/math" id="math_atan2" />

### Python
```python
math.atan2(Y, X) / math.pi * 180
```
