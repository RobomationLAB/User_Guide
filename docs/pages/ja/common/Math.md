---
title: 数学
---

# 数学

この文書では、さまざまな数学ブロックの機能と使い方を説明します。  
数値の演算、リストの処理、確率や角度の演算など、いろいろな数学的な演算を行うブロックを紹介します。

## 数値 {#math_number}

入力された **数値** をそのまま返すブロックです。  
このブロックを使うと、特定の数値を変数に保存したり、ほかの演算に活用したりできます。

<BlockImage module="common/math" id="math_number" />

### Python
```
50
```

## 配列の作成と演算 {#math_array}

**配列** を作るブロックです。
`[]` の中に入力した値を要素として持つ配列を返します。
`[]` の中に好きな値を入力してリストを作ることができ、文字列は " " で囲む必要があります。

<BlockImage module="common/math" id="math_array" />

### Python
```python
[]
```

## 基本の算術演算 {#math_arithmetic}

2 つの数値を使って **算術演算**（足し算、引き算、掛け算、割り算、べき乗）を行うブロックです。

<BlockImage module="common/math" id="math_arithmetic" />

### Python
```python
A + B
A - B
A * B
A / B
A ** B
```

## 単項演算 {#math_single}

平方根、絶対値、符号の反転、指数、対数関数など **単項演算** を行うブロックです。

<BlockImage module="common/math" id="math_single" />

### Python
```python
math.sqrt(NUM)  # 平方根
math.fabs(NUM)  # 絶対値
-NUM            # -
math.log(NUM)   # ln
math.log10(NUM) # log10
math.exp(NUM)   # e^
10 ** NUM       # 10^
```

## 三角関数 {#math_trig}

サイン、コサイン、タンジェントなど **三角関数** の値を計算するブロックです。

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

## 定数 {#math_constant}

演算に必要な **特別な定数の値**（π, e, 黄金比, √2, √(1/2), 無限大）を返します。

<BlockImage module="common/math" id="math_constant" />

### Python
```python
math.pi                      # π
math.e                       # e
(1 + math.sqrt(5)) / 2       # 黄金比
math.sqrt(2)                 # √2
math.sqrt(1.0 / 2)           # √(1/2)
float('inf')                 # 無限大
```

## 条件 {#math_number_property}

入力された数値が偶数、奇数、素数、整数、正の数、負の数、または特定の数の倍数かどうかを判定して **true/false** を返します。

<BlockImage module="common/math" id="math_number_property" />

### Python
```python
NUM % 2 == 0           # EVEN (偶数)
NUM % 2 == 1           # ODD (奇数)
math_isPrime(NUM)      # PRIME (素数)
NUM % 1 == 0           # WHOLE (整数)
NUM > 0                # POSITIVE (正の数)
NUM < 0                # NEGATIVE (負の数)
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

## 四捨五入 {#math_round}

入力された数値を **四捨五入(round)、切り上げ(ceil)、切り捨て(floor)** して値を返します。

<BlockImage module="common/math" id="math_round" />

### Python
```python
round(NUM)        # 四捨五入
math.ceil(NUM)    # 切り上げ
math.floor(NUM)   # 切り捨て
```

## リストの演算 {#math_on_list}

リストを対象に、合計、最小値、最大値、平均値、中央値、最頻値、標準偏差、ランダムな項目の取り出しの演算を行います。

<BlockImage module="common/math" id="math_on_list" />

### Python
```python
sum(list)                          # 合計
min(list)                          # 最小値
max(list)                          # 最大値
math_mean(list)                    # 平均値
math_median(list)                  # 中央値
math_modes(list)                   # 最頻値(もっとも多く現れる値)
math_standard_deviation(list)      # 標準偏差
random.choice(list)                # リストのランダムな項目

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

## 余り {#math_modulo}

2 つの数値の割り算の **余り** を求めるブロックです。

<BlockImage module="common/math" id="math_modulo" />

### Python
```python
A % B
```

## 最大・最小の範囲 {#math_constrain}

入力された値が指定した **最小値/最大値** の範囲から外れないように制限します。  
範囲の外の値は、近い境界の値に調整されます。

<BlockImage module="common/math" id="math_constrain" />

### Python
```python
min(max(VALUE, LOW), HIGH)
```

## ランダムな整数 {#math_random_int}

指定した範囲の中で **ランダムな整数** を生成するブロックです。

<BlockImage module="common/math" id="math_random_int" />

### Python
```python
random.randint(FROM, TO)
```

## ランダムな小数 {#math_random_float}

0 と 1 の間で **ランダムな小数の値** を生成します。

<BlockImage module="common/math" id="math_random_float" />

### Python
```python
random.random()
```

## atan2 {#math_atan2}

与えられた (x, y) 座標が原点 (0,0) と作る角度(atan2)を計算するブロックです。  
座標の位置をもとに方向を判定するのに使えます。

<BlockImage module="common/math" id="math_atan2" />

### Python
```python
math.atan2(Y, X) / math.pi * 180
```
