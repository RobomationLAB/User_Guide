---
title: Logik
---

# Logik

Logikblokke bruges typisk til at styre **betingelsessætninger** og [**løkker**](Loops).

## Betingelsessætning (hvis ...) {#controls_if}

Med betingelsesblokken kan du angive en **betingelse** og den **handling**, der skal udføres, når betingelsen er opfyldt.

<BlockImage module="common/logic" id="controls_if" />

Du kan for eksempel skrive kode på denne måde.  
Hvis værdien af variablen **x** er større end 100, er betingelsen **sand**, og teksten "Det er et stort tal." skrives ud.  
Hvis værdien af **x** ikke er større end 100, er betingelsen **falsk**, og "Det er ikke et stort tal." skrives ud.

### Python
```python
if condition:
  # ...
elif condition2:
  # ...
else:
  # ...
```

## Sammenligningsoperatorer {#logic_compare}

Der findes seks sammenligningsoperatorer.  
Hver operator tager to input (som regel tal) og returnerer sand eller falsk alt efter, hvordan værdierne forholder sig til hinanden.

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

## Logiske operatorer {#logic_operation}

Blokken **og** returnerer kun sand, når begge input er sande.  
Blokken **eller** returnerer sand, hvis bare ét af de to input er sandt.  

<BlockImage module="common/logic" id="logic_operation" />

### Python
```python
A and B
A or B
```

## Ikke {#logic_negate}

Blokken **ikke** vender en boolsk værdi om til det modsatte.  

<BlockImage module="common/logic" id="logic_negate" />

### Python
```python
not A
```

## Boolsk værdi {#logic_boolean}

Du kan få en boolsk værdi med en enkelt blok, der har en rullemenu, hvor du vælger **sand** eller **falsk**.  

<BlockImage module="common/logic" id="logic_boolean" />

### Python
```python
True
False
```

## Ternær operator {#logic_ternary}

Den ternære blok fungerer som en enkel betingelsessætning.  
Den tager tre input.  
Det første input er den boolske betingelse, der skal afprøves, og det andet er den værdi, der returneres, når betingelsen er **sand**.  
Det tredje input er den værdi, der returneres, når betingelsen er **falsk**.  

<BlockImage module="common/logic" id="logic_ternary" />

### Python
```python
thenValue if test else elseValue
```
