---
title: 邏輯
---

# 邏輯

邏輯積木通常用於控制 **條件敘述** 和 [**迴圈**](Loops) 積木。

## 條件敘述（如果 ~ 就） {#controls_if}

透過條件敘述積木，可以設定 **條件** 以及滿足該條件時的 **動作**。

<BlockImage module="common/logic" id="controls_if" />

例如，可以按下面的方式撰寫程式碼。  
如果變數 **x** 的值大於 100，條件為 **true**，就會輸出「是大的數。」這段文字。  
如果 **x** 的值不大於 100，條件為 **false**，就會輸出「不是大的數。」。

### Python
```python
if condition:
  # ...
elif condition2:
  # ...
else:
  # ...
```

## 比較運算 {#logic_compare}

共有六種比較運算子。  
每個運算子接受兩個輸入（通常是數字），並根據輸入值之間的比較結果回傳 true 或 false。

<BlockImage module="common/logic" id="logic_compare" />

### Python
```python
A == B
A != B
A < B
A <= B
A > B
A >= B
```

## 邏輯運算 {#logic_operation}

**且** 積木只有在兩個輸入都為 true 時才回傳 true。  
**或** 積木只要兩個輸入中有一個為 true 就回傳 true。  

<BlockImage module="common/logic" id="logic_operation" />

### Python
```python
A and B
A or B
```

## 不成立 {#logic_negate}

**不成立** 積木把布林輸入轉換成相反的值。  

<BlockImage module="common/logic" id="logic_negate" />

### Python
```python
not A
```

## 布林值 {#logic_boolean}

使用帶有下拉選單的單一積木指定 **true** 或 **false**，就可以取得布林值。  

<BlockImage module="common/logic" id="logic_boolean" />

### Python
```python
True
False
```

## 三元運算子 {#logic_ternary}

三元積木的作用和簡單的條件敘述積木相似。  
它接受三個輸入。  
第一個輸入是要判斷的布林條件，第二個輸入是條件為 **true** 時回傳的值。  
第三個輸入是條件為 **false** 時回傳的值。  

<BlockImage module="common/logic" id="logic_ternary" />

### Python
```python
thenValue if test else elseValue
```
