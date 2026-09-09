---
title: Logikk
---

# Logikk

Logikkblokkene brukes vanligvis til å styre **betingelsessetninger** og [**løkke**](Loops)-blokker.

## Betingelsessetning (hvis ...) {#controls_if}

Med betingelsesblokken kan du angi en **betingelse** og den **handlingen** som skal utføres når betingelsen er oppfylt.

<BlockImage module="common/logic" id="controls_if" />

Du kan for eksempel skrive kode på denne måten.  
Hvis verdien til variabelen **x** er større enn 100, er betingelsen **sann**, og teksten "Det er et stort tall." skrives ut.  
Hvis verdien til **x** ikke er større enn 100, er betingelsen **usann**, og "Det er ikke et stort tall." skrives ut.

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

Det finnes seks sammenligningsoperatorer.  
Hver operator tar to inndata (som regel tall) og returnerer sann eller usann, alt etter hvordan verdiene forholder seg til hverandre.

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

Blokken **og** returnerer sann bare når begge inndataene er sanne.  
Blokken **eller** returnerer sann hvis minst én av inndataene er sann.  

<BlockImage module="common/logic" id="logic_operation" />

### Python
```python
A and B
A or B
```

## Ikke {#logic_negate}

Blokken **ikke** gjør en boolsk inndata om til det motsatte.  

<BlockImage module="common/logic" id="logic_negate" />

### Python
```python
not A
```

## Boolsk verdi {#logic_boolean}

Du kan få en boolsk verdi med én enkelt blokk som har en nedtrekksmeny der du velger **sann** eller **usann**.  

<BlockImage module="common/logic" id="logic_boolean" />

### Python
```python
True
False
```

## Ternær operator {#logic_ternary}

Den ternære blokken fungerer som en enkel betingelsesblokk.  
Den tar tre inndata.  
Den første inndataen er den boolske betingelsen som skal testes, og den andre er verdien som returneres hvis betingelsen er **sann**.  
Den tredje inndataen er verdien som returneres hvis betingelsen er **usann**.  

<BlockImage module="common/logic" id="logic_ternary" />

### Python
```python
thenValue if test else elseValue
```
