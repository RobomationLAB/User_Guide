---
title: 論理
---

# 論理

論理ブロックは、一般的に**条件分岐**と[**ループ**](Loops)ブロックを制御するために使われます。

## 条件分岐（もし ~ ならば） {#controls_if}

条件分岐ブロックでは、**条件**と、それを満たしたときの**動作**を設定できます。

<BlockImage module="common/logic" id="controls_if" />

たとえば、次のようにコードを書くことができます。  
変数 **x** の値が 100 より大きければ、条件は **true** になり「大きい数です。」というテキストが出力されます。  
**x** の値が 100 より大きくなければ、条件は **false** になり「大きくない数です。」が出力されます。

### Python
```python
if condition:
  # ...
elif condition2:
  # ...
else:
  # ...
```

## 比較演算 {#logic_compare}

比較演算子は 6 種類あります。  
どの演算子も 2 つの入力（通常は数値）を受け取り、入力どうしがどのように比較されるかによって true または false を返します。

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

## 論理演算 {#logic_operation}

**かつ** ブロックは、2 つの入力がどちらも true のときだけ true を返します。  
**または** ブロックは、2 つの入力のどちらか一方でも true なら true を返します。  

<BlockImage module="common/logic" id="logic_operation" />

### Python
```python
A and B
A or B
```

## ではない {#logic_negate}

**ではない** ブロックは、ブール値の入力をその反対に変換します。  

<BlockImage module="common/logic" id="logic_negate" />

### Python
```python
not A
```

## ブール値 {#logic_boolean}

**true** または **false** を指定するドロップダウンが付いた 1 つのブロックを使って、ブール値を得ることができます。  

<BlockImage module="common/logic" id="logic_boolean" />

### Python
```python
True
False
```

## 三項演算子 {#logic_ternary}

三項ブロックは、簡単な条件分岐ブロックのように動作します。  
3 つの入力を受け取ります。  
1 つ目の入力はテストするブール条件、2 つ目の入力は条件が **true** の場合に返す値です。  
3 つ目の入力は条件が **false** の場合に返す値です。  

<BlockImage module="common/logic" id="logic_ternary" />

### Python
```python
thenValue if test else elseValue
```
