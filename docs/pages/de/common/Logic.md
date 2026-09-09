---
title: Logik
---

# Logik

Logik-Blöcke werden im Allgemeinen verwendet, um **Bedingungen** und [**Schleifen**](Loops)-Blöcke zu steuern.

## Bedingung (falls ~ dann) {#controls_if}

Mit dem Bedingungsblock kannst du eine **Bedingung** und die **Aktion** festlegen, die ausgeführt wird, wenn sie erfüllt ist.

<BlockImage module="common/logic" id="controls_if" />

Zum Beispiel kannst du den Code so schreiben.  
Wenn der Wert der Variablen **x** größer als 100 ist, ist die Bedingung **true** und der Text „Große Zahl." wird ausgegeben.  
Wenn der Wert von **x** nicht größer als 100 ist, ist die Bedingung **false** und „Keine große Zahl." wird ausgegeben.

### Python
```python
if condition:
  # ...
elif condition2:
  # ...
else:
  # ...
```

## Vergleich {#logic_compare}

Es gibt sechs Vergleichsoperatoren.  
Jeder Operator nimmt zwei Eingaben (normalerweise Zahlen) und gibt je nach Vergleich der Eingabewerte true oder false zurück.

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

## Logische Verknüpfung {#logic_operation}

Der Block **und** gibt nur dann true zurück, wenn beide Eingaben true sind.  
Der Block **oder** gibt true zurück, wenn mindestens eine der beiden Eingaben true ist.  

<BlockImage module="common/logic" id="logic_operation" />

### Python
```python
A and B
A or B
```

## nicht {#logic_negate}

Der Block **nicht** wandelt eine boolesche Eingabe in ihr Gegenteil um.  

<BlockImage module="common/logic" id="logic_negate" />

### Python
```python
not A
```

## Boolescher Wert {#logic_boolean}

Mit einem einzelnen Block, der ein Dropdown für **true** oder **false** hat, kannst du einen booleschen Wert erhalten.  

<BlockImage module="common/logic" id="logic_boolean" />

### Python
```python
True
False
```

## Ternärer Operator {#logic_ternary}

Der ternäre Block verhält sich wie ein einfacher Bedingungsblock.  
Er nimmt drei Eingaben.  
Die erste Eingabe ist die zu prüfende boolesche Bedingung, die zweite Eingabe ist der Wert, der zurückgegeben wird, wenn die Bedingung **true** ist.  
Die dritte Eingabe ist der Wert, der zurückgegeben wird, wenn die Bedingung **false** ist.  

<BlockImage module="common/logic" id="logic_ternary" />

### Python
```python
thenValue if test else elseValue
```
