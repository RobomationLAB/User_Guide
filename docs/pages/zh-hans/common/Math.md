---
title: 数学
---

# 数学

本文档说明各种数学积木的功能和用法。  
介绍执行数字运算、列表处理、概率和角度运算等各种数学运算的积木。

## 数字值 {#math_number}

原样返回输入的 **数字值** 的积木。  
使用这个积木可以把特定数字保存到变量中，或用于其他运算。

<BlockImage module="common/math" id="math_number" />

### Python
```
50
```

## 数组的创建和运算 {#math_array}

创建 **数组** 的积木。
返回以 `[]` 中输入的值作为元素的数组。
在 `[]` 中输入需要的值就可以创建列表，字符串要用 " " 括起来。

<BlockImage module="common/math" id="math_array" />

### Python
```python
[]
```

## 基本算术运算 {#math_arithmetic}

使用两个数字值执行 **算术运算**（加法、减法、乘法、除法、幂运算）的积木。

<BlockImage module="common/math" id="math_arithmetic" />

### Python
```python
A + B
A - B
A * B
A / B
A ** B
```

## 一元运算 {#math_single}

执行平方根、绝对值、符号反转、指数、对数函数等 **一元运算** 的积木。

<BlockImage module="common/math" id="math_single" />

### Python
```python
math.sqrt(NUM)  # 平方根
math.fabs(NUM)  # 绝对值
-NUM            # -
math.log(NUM)   # ln
math.log10(NUM) # log10
math.exp(NUM)   # e^
10 ** NUM       # 10^
```

## 三角函数 {#math_trig}

计算正弦、余弦、正切等 **三角函数** 值的积木。

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

## 常数 {#math_constant}

返回运算所需的 **特殊常数值**（π、e、黄金比例、√2、√(1/2)、无穷大）。

<BlockImage module="common/math" id="math_constant" />

### Python
```python
math.pi                      # π
math.e                       # e
(1 + math.sqrt(5)) / 2       # 黄金比例
math.sqrt(2)                 # √2
math.sqrt(1.0 / 2)           # √(1/2)
float('inf')                 # 无穷大
```

## 条件 {#math_number_property}

判断输入的数字是偶数、奇数、素数、整数、正数、负数，还是特定数的倍数，并返回 **true / false**。

<BlockImage module="common/math" id="math_number_property" />

### Python
```python
NUM % 2 == 0           # EVEN (偶数)
NUM % 2 == 1           # ODD (奇数)
math_isPrime(NUM)      # PRIME (素数)
NUM % 1 == 0           # WHOLE (整数)
NUM > 0                # POSITIVE (正数)
NUM < 0                # NEGATIVE (负数)
NUM % DIVISOR == 0     # DIVISIBLE_BY (倍数)

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

## 四舍五入 {#math_round}

把输入的数字进行 **四舍五入(round)、向上取整(ceil)、向下取整(floor)** 处理后返回值。

<BlockImage module="common/math" id="math_round" />

### Python
```python
round(NUM)        # 四舍五入
math.ceil(NUM)    # 向上取整
math.floor(NUM)   # 向下取整
```

## 列表运算 {#math_on_list}

对列表执行求和、最小值、最大值、平均值、中位数、众数、标准差、随机取项的运算。

<BlockImage module="common/math" id="math_on_list" />

### Python
```python
sum(list)                          # 和
min(list)                          # 最小值
max(list)                          # 最大值
math_mean(list)                    # 平均值
math_median(list)                  # 中位数
math_modes(list)                   # 众数(出现次数最多的值)
math_standard_deviation(list)      # 标准差
random.choice(list)                # 列表中的随机一项

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

## 余数 {#math_modulo}

求两个数字相除的 **余数** 的积木。

<BlockImage module="common/math" id="math_modulo" />

### Python
```python
A % B
```

## 最大最小范围 {#math_constrain}

限制输入的值，使它不超出指定的 **最低 / 最高** 范围。  
范围之外的值会被调整为最接近的边界值。

<BlockImage module="common/math" id="math_constrain" />

### Python
```python
min(max(VALUE, LOW), HIGH)
```

## 随机整数 {#math_random_int}

在指定范围内生成 **随机整数** 的积木。

<BlockImage module="common/math" id="math_random_int" />

### Python
```python
random.randint(FROM, TO)
```

## 随机小数 {#math_random_float}

在 0 和 1 之间生成 **随机的小数值**。

<BlockImage module="common/math" id="math_random_float" />

### Python
```python
random.random()
```

## atan2 {#math_atan2}

计算给定的 (x, y) 坐标与原点 (0,0) 所成角度(atan2)的积木。  
可以用来根据坐标位置判断方向。

<BlockImage module="common/math" id="math_atan2" />

### Python
```python
math.atan2(Y, X) / math.pi * 180
```
