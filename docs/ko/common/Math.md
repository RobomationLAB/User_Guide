---
title: 연산
---

# 연산

이 문서는 다양한 연산 블록의 기능과 사용법을 설명합니다.  
숫자 연산, 리스트 처리, 확률 및 각도 연산 등 다양한 수학적 연산을 수행하는 블록을 소개합니다.

## 숫자 값 {#math_number}

입력된 **숫자 값**을 그대로 반환하는 블록입니다.  
이 블록을 사용하면 특정 숫자를 변수에 저장하거나 다른 연산에 활용할 수 있습니다.

<BlockImage module="common/math" id="math_number" />

### Python
```
50
```

## 배열 생성 및 연산 {#math_array}

**배열**을 생성하는 블록입니다.
`[]` 안에 입력한 값들을 요소로 가지는 배열을 반환합니다.
`[]` 안에 원하는 값을 입력하여 리스트를 만들 수 있으며, 문자열은 " "로 감싸야 합니다.

<BlockImage module="common/math" id="math_array" />

### Python
```python
[]
```

## 기본 산술 연산 {#math_arithmetic}

두 개의 숫자 값을 사용하여 **산술 연산**(덧셈, 뺄셈, 곱셈, 나눗셈, 거듭제곱)을 수행하는 블록입니다.

<BlockImage module="common/math" id="math_arithmetic" />

### Python
```python
A + B
A - B
A * B
A / B
A ** B
```

## 단항 연산 {#math_single}

제곱근, 절댓값, 부호 반전, 지수, 로그 함수 등 **단항 연산**를 수행하는 블록입니다.

<BlockImage module="common/math" id="math_single" />

### Python
```python
math.sqrt(NUM)  # 제곱근
math.fabs(NUM)  # 절대값
-NUM            # -
math.log(NUM)   # ln
math.log10(NUM) # log10
math.exp(NUM)   # e^
10 ** NUM       # 10^
```

## 삼각 함수 {#math_trig}

사인, 코사인, 탄젠트 등 **삼각 함수** 값을 계산하는 블록입니다.

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

## 상수 {#math_constant}

연산에 필요한 **특수한 상수 값**(π, e, 황금비, √2, √(1/2), 무한대)를 반환합니다.

<BlockImage module="common/math" id="math_constant" />

### Python
```python
math.pi                      # π
math.e                       # e
(1 + math.sqrt(5)) / 2       # 황금비
math.sqrt(2)                 # √2
math.sqrt(1.0 / 2)           # √(1/2)
float('inf')                 # 무한대
```

## 조건 {#math_number_property}

입력된 숫자가 짝수, 홀수, 소수, 정수, 양수, 음수, 또는 특정 수의 배수인지를 판별하여 **참/거짓**을 반환합니다.

<BlockImage module="common/math" id="math_number_property" />

### Python
```python
NUM % 2 == 0           # EVEN (짝수)
NUM % 2 == 1           # ODD (홀수)
math_isPrime(NUM)      # PRIME (소수)
NUM % 1 == 0           # WHOLE (정수)
NUM > 0                # POSITIVE (양수)
NUM < 0                # NEGATIVE (음수)
NUM % DIVISOR == 0     # DIVISIBLE_BY (배수)

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

## 반올림 {#math_round}

입력된 숫자를 **반올림(round), 올림(ceil), 버림(floor)** 처리하여 값을 반환합니다.

<BlockImage module="common/math" id="math_round" />

### Python
```python
round(NUM)        # 반올림
math.ceil(NUM)    # 올림
math.floor(NUM)   # 내림
```

## 리스트 연산 {#math_on_list}

리스트를 대상으로 합계, 최솟값, 최댓값, 평균값, 중간값, 최빈값, 표준 편차, 임의 항목 추출 연산을 수행합니다.

<BlockImage module="common/math" id="math_on_list" />

### Python
```python
sum(list)                          # 합
min(list)                          # 최소값
max(list)                          # 최대값
math_mean(list)                    # 평균값
math_median(list)                  # 중간값
math_modes(list)                   # 최빈값(가장 여러개 있는 값)
math_standard_deviation(list)      # 표준 편차
random.choice(list)                # 목록의 임의 항목

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

## 나머지 {#math_modulo}

두 숫자의 나눗셈에서 **나머지**를 구하는 블록입니다.

<BlockImage module="common/math" id="math_modulo" />

### Python
```python
A % B
```

## 최대 최소 범위 {#math_constrain}

입력된 값이 지정한 **최솟값/최댓값** 범위를 벗어나지 않도록 제한합니다.  
범위 밖의 값은 가까운 경계값으로 조정됩니다.

<BlockImage module="common/math" id="math_constrain" />

### Python
```python
min(max(VALUE, LOW), HIGH)
```

## 랜덤 정수 {#math_random_int}

지정한 범위 내에서 **랜덤한 정수**를 생성하는 블록입니다.

<BlockImage module="common/math" id="math_random_int" />

### Python
```python
random.randint(FROM, TO)
```

## 임의 분수 {#math_random_float}

0과 1 사이에서 **무작위의 분수 값**을 생성합니다.

<BlockImage module="common/math" id="math_random_float" />

### Python
```python
random.random()
```

## atan2 {#math_atan2}

주어진 (x, y) 좌표가 원점 (0,0)과 이루는 각도(atan2)를 계산하는 블록입니다.  
좌표 위치를 기반으로 방향을 판별하는 데 사용할 수 있습니다.

<BlockImage module="common/math" id="math_atan2" />

### Python
```python
math.atan2(Y, X) / math.pi * 180
```
