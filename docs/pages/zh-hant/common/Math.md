---
title: 數學
---

# 數學

本文件說明各種數學積木的功能和用法。  
介紹執行數字運算、列表處理、機率和角度運算等各種數學運算的積木。

## 數字值 {#math_number}

原樣回傳輸入的 **數字值** 的積木。  
使用這個積木可以把特定數字儲存到變數中，或用於其他運算。

<BlockImage module="common/math" id="math_number" />

### Python
```
50
```

## 陣列的建立與運算 {#math_array}

建立 **陣列** 的積木。
回傳以 `[]` 中輸入的值作為元素的陣列。
在 `[]` 中輸入需要的值就可以建立列表，字串要用 " " 括起來。

<BlockImage module="common/math" id="math_array" />

### Python
```python
[]
```

## 基本算術運算 {#math_arithmetic}

使用兩個數字值執行 **算術運算**（加法、減法、乘法、除法、次方）的積木。

<BlockImage module="common/math" id="math_arithmetic" />

### Python
```python
A + B
A - B
A * B
A / B
A ** B
```

## 一元運算 {#math_single}

執行開根號、絕對值、正負反轉、指數、對數函數等 **一元運算** 的積木。

<BlockImage module="common/math" id="math_single" />

### Python
```python
math.sqrt(NUM)  # 開根號
math.fabs(NUM)  # 絕對值
-NUM            # -
math.log(NUM)   # ln
math.log10(NUM) # log10
math.exp(NUM)   # e^
10 ** NUM       # 10^
```

## 三角函數 {#math_trig}

計算正弦、餘弦、正切等 **三角函數** 值的積木。

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

## 常數 {#math_constant}

回傳運算所需的 **特殊常數值**（π、e、黃金比例、√2、√(1/2)、無限大）。

<BlockImage module="common/math" id="math_constant" />

### Python
```python
math.pi                      # π
math.e                       # e
(1 + math.sqrt(5)) / 2       # 黃金比例
math.sqrt(2)                 # √2
math.sqrt(1.0 / 2)           # √(1/2)
float('inf')                 # 無限大
```

## 條件 {#math_number_property}

判斷輸入的數字是偶數、奇數、質數、整數、正數、負數，還是特定數的倍數，並回傳 **true / false**。

<BlockImage module="common/math" id="math_number_property" />

### Python
```python
NUM % 2 == 0           # EVEN (偶數)
NUM % 2 == 1           # ODD (奇數)
math_isPrime(NUM)      # PRIME (質數)
NUM % 1 == 0           # WHOLE (整數)
NUM > 0                # POSITIVE (正數)
NUM < 0                # NEGATIVE (負數)
NUM % DIVISOR == 0     # DIVISIBLE_BY (倍數)

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

## 四捨五入 {#math_round}

把輸入的數字進行 **四捨五入(round)、向上取整(ceil)、向下取整(floor)** 處理後回傳值。

<BlockImage module="common/math" id="math_round" />

### Python
```python
round(NUM)        # 四捨五入
math.ceil(NUM)    # 向上取整
math.floor(NUM)   # 向下取整
```

## 列表運算 {#math_on_list}

對列表執行求和、最小值、最大值、平均值、中位數、眾數、標準差、隨機取項的運算。

<BlockImage module="common/math" id="math_on_list" />

### Python
```python
sum(list)                          # 和
min(list)                          # 最小值
max(list)                          # 最大值
math_mean(list)                    # 平均值
math_median(list)                  # 中位數
math_modes(list)                   # 眾數(出現次數最多的值)
math_standard_deviation(list)      # 標準差
random.choice(list)                # 列表中的隨機一項

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

## 餘數 {#math_modulo}

求兩個數字相除的 **餘數** 的積木。

<BlockImage module="common/math" id="math_modulo" />

### Python
```python
A % B
```

## 限制數字範圍 {#math_constrain}

限制輸入的值，使它不超出指定的 **低 ~ 高** 範圍。  
範圍之外的值會被調整為最接近的邊界值。

<BlockImage module="common/math" id="math_constrain" />

### Python
```python
min(max(VALUE, LOW), HIGH)
```

## 隨機取整數 {#math_random_int}

在指定範圍內產生 **隨機整數** 的積木。

<BlockImage module="common/math" id="math_random_int" />

### Python
```python
random.randint(FROM, TO)
```

## 隨機取分數 {#math_random_float}

在 0 和 1 之間產生 **隨機的分數值**。

<BlockImage module="common/math" id="math_random_float" />

### Python
```python
random.random()
```

## atan2 {#math_atan2}

計算給定的 (x, y) 座標與原點 (0,0) 所成角度(atan2)的積木。  
可以用來根據座標位置判斷方向。

<BlockImage module="common/math" id="math_atan2" />

### Python
```python
math.atan2(Y, X) / math.pi * 180
```
