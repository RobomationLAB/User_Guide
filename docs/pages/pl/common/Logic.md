---
title: Logika
---

# Logika

Bloki logiczne służą zwykle do sterowania blokami **instrukcji warunkowej** oraz [**pętli**](Loops).

## Instrukcja warunkowa (jeśli ~ to) {#controls_if}

Za pomocą bloku instrukcji warunkowej można ustawić **warunek** oraz **działanie** wykonywane wtedy, gdy warunek jest spełniony.

<BlockImage module="common/logic" id="controls_if" />

Można na przykład napisać taki kod.  
Jeśli wartość zmiennej **x** jest większa od 100, warunek ma wartość **prawda** i wypisywany jest tekst „To duża liczba.".  
Jeśli wartość **x** nie jest większa od 100, warunek ma wartość **fałsz** i wypisywane jest „To nie jest duża liczba.".

### Python
```python
if condition:
  # ...
elif condition2:
  # ...
else:
  # ...
```

## Porównania {#logic_compare}

Dostępnych jest sześć operatorów porównania.  
Każdy z nich przyjmuje dwie wartości wejściowe (zwykle liczby) i zwraca prawdę lub fałsz w zależności od tego, jak te wartości mają się do siebie.

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

## Operacje logiczne {#logic_operation}

Blok **i** zwraca prawdę tylko wtedy, gdy obie wartości wejściowe są prawdziwe.  
Blok **lub** zwraca prawdę, gdy przynajmniej jedna z wartości wejściowych jest prawdziwa.  

<BlockImage module="common/logic" id="logic_operation" />

### Python
```python
A and B
A or B
```

## Nie {#logic_negate}

Blok **nie** zamienia wartość logiczną na przeciwną.  

<BlockImage module="common/logic" id="logic_negate" />

### Python
```python
not A
```

## Wartość logiczna {#logic_boolean}

Wartość logiczną można uzyskać za pomocą pojedynczego bloku z listą rozwijaną, w której wybiera się **prawda** lub **fałsz**.  

<BlockImage module="common/logic" id="logic_boolean" />

### Python
```python
True
False
```

## Operator trójargumentowy {#logic_ternary}

Blok trójargumentowy działa jak prosta instrukcja warunkowa.  
Przyjmuje trzy wartości wejściowe.  
Pierwsza z nich to sprawdzany warunek logiczny, druga to wartość zwracana, gdy warunek ma wartość **prawda**.  
Trzecia to wartość zwracana, gdy warunek ma wartość **fałsz**.  

<BlockImage module="common/logic" id="logic_ternary" />

### Python
```python
thenValue if test else elseValue
```
