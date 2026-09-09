---
title: 迴圈
---

# 迴圈

迴圈控制敘述有兩種類型：  
**條件敘述** 和 **迴圈敘述**（根據變數的值控制主體執行幾次的敘述）


## 重複 {#controls_repeat}

最簡單的 **重複** 積木會把主體中的程式碼執行指定的次數。 

<BlockImage module="common/loops" id="controls_repeat" />

### Python
```python
for count in range(times):
    # ...
```

## 迴圈計數 {#controls_for}

**迴圈計數** 積木（大多稱為 **for loop**）讓變數從第一個值按增量（第三個值）遞增到第二個值，並對每個值把主體執行一次。  

<BlockImage module="common/loops" id="controls_for" />

### Python
```python
for VAR in range(from, to + 1, by):
    # ...
```

## 為列表裡的每一項 {#controls_forEach}

**為列表裡的每一項** 積木與它相似，差別在於依序使用列表中的值，而不是按數字順序。

<BlockImage module="common/loops" id="controls_forEach" />

### Python
```python
for VAR in list:
    # ...
```


## 重複當 / 重複直到 {#controls_while}

**重複當** 積木在條件為 true 期間反覆執行主體。  
**重複直到** 積木在條件為 false 期間反覆執行主體，條件變為 true 的那一刻跳出迴圈。

<BlockImage module="common/loops" id="controls_while" />

### Python
```python
# unit = "while"
while condition:
    # ...

# unit = "until"
while not condition:
    # ...
```

## 中斷 / 繼續 {#controls_flow_statements}

**中斷** 積木讓你可以 **提前離開迴圈**。  
**繼續**（在大多數程式語言中是 **continue**）會跳過主體中剩下的程式碼，直接開始下一次迴圈。

<BlockImage module="common/loops" id="controls_flow_statements" />

### Python
```python
break
continue
```
