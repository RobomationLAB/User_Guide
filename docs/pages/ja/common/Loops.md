---
title: ループ
---

# ループ

繰り返しの制御文には 2 つの種類があります:  
**条件文**と**繰り返し文**（変数の値に応じて、本体を何回実行するかを制御するもの）


## 繰り返し {#controls_repeat}

もっとも簡単な **繰り返し** ブロックは、本体のコードを指定した回数だけ実行します。 

<BlockImage module="common/loops" id="controls_repeat" />

### Python
```python
for count in range(times):
    # ...
```

## カウントする {#controls_for}

**カウントする** ブロック（多くの場合 **for loop** と呼ばれます）は、変数を 1 つ目の値から 3 つ目の値まで、増分（2 つ目の値）ずつ増やしながら、それぞれの値について本体を 1 回ずつ実行します。  

<BlockImage module="common/loops" id="controls_for" />

### Python
```python
for VAR in range(from, to + 1, by):
    # ...
```

## 各項目について {#controls_forEach}

**各項目について** ブロックは、数値の順番の代わりにリストの値を順に使うという点が異なるだけで、よく似ています。

<BlockImage module="common/loops" id="controls_forEach" />

### Python
```python
for VAR in list:
    # ...
```


## ~の間 / ~まで繰り返す {#controls_while}

**~の間繰り返す** ブロックは、条件が true である間、本体を繰り返します。  
**~まで繰り返す** ブロックは、条件が false である間、本体を繰り返し、条件が true になった時点で繰り返しを抜けます。

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

## 中断 / 次の繰り返し {#controls_flow_statements}

**中断** ブロックを使うと、**繰り返し文から早く抜け出す**ことができます。  
**次の繰り返し**（多くのプログラミング言語では **continue**）は、本体の残りのコードを飛ばして、次の繰り返し（パス）を始めます。

<BlockImage module="common/loops" id="controls_flow_statements" />

### Python
```python
break
continue
```
