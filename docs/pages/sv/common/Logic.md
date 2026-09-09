---
title: Logik
---

# Logik

Logikblock används vanligtvis för att styra **villkorssatser** och [**loopar**](Loops).

## Villkorssats (om ...) {#controls_if}

Med villkorsblocket kan du ange ett **villkor** och den **åtgärd** som ska utföras när villkoret är uppfyllt.

<BlockImage module="common/logic" id="controls_if" />

Du kan till exempel skriva kod på följande sätt.  
Om värdet på variabeln **x** är större än 100 blir villkoret **sant** och texten "Det är ett stort tal." skrivs ut.  
Om värdet på **x** inte är större än 100 blir villkoret **falskt** och "Det är inte ett stort tal." skrivs ut.

### Python
```python
if condition:
  # ...
elif condition2:
  # ...
else:
  # ...
```

## Jämförelseoperatorer {#logic_compare}

Det finns sex jämförelseoperatorer.  
Varje operator tar två inmatningar (vanligtvis tal) och returnerar sant eller falskt beroende på hur värdena förhåller sig till varandra.

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

## Logiska operatorer {#logic_operation}

Blocket **och** returnerar sant endast när båda inmatningarna är sanna.  
Blocket **eller** returnerar sant om minst en av de två inmatningarna är sann.  

<BlockImage module="common/logic" id="logic_operation" />

### Python
```python
A and B
A or B
```

## Inte {#logic_negate}

Blocket **inte** vänder ett booleskt värde till dess motsats.  

<BlockImage module="common/logic" id="logic_negate" />

### Python
```python
not A
```

## Booleskt värde {#logic_boolean}

Du kan hämta ett booleskt värde med ett enda block som har en rullgardinsmeny där du väljer **sant** eller **falskt**.  

<BlockImage module="common/logic" id="logic_boolean" />

### Python
```python
True
False
```

## Ternär operator {#logic_ternary}

Det ternära blocket fungerar som en enkel villkorssats.  
Det tar tre inmatningar.  
Den första inmatningen är det booleska villkor som ska prövas, den andra är det värde som returneras när villkoret är **sant**.  
Den tredje inmatningen är det värde som returneras när villkoret är **falskt**.  

<BlockImage module="common/logic" id="logic_ternary" />

### Python
```python
thenValue if test else elseValue
```
