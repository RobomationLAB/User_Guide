---
title: Variabelen
---

# Variabelen

We gebruiken het woord variabele in dezelfde betekenis als in de wiskunde en in andere programmeertalen.  
Het is dus **een element met een naam dat een waarde bewaart en die waarde kan veranderen**.  
  
Je kunt variabelen op verschillende manieren maken.  

- Sommige blokken, zoals [rekenen met](Loops#controls_for) en [voor ieder item](Loops#controls_forEach), gebruiken een variabele en bepalen de waarde daarvan.  
Zulke variabelen worden traditioneel **lusvariabelen (loop variables)** genoemd.  
- Ook [zelfgemaakte functies](Functions#procedures_defnoreturn) gebruiken variabelen om parameters of argumenten te bepalen.
- Je kunt met het blok **variabele instellen** op elk moment een variabele maken; zo'n variabele wordt als **globale variabele (global variable)** gedeclareerd.  
- De blokprogrammeeromgeving van RobomationLAB ondersteunt geen **lokale variabelen (local variables)**.  

Klik je op de keuzelijst van een variabeleblok, dan verschijnen de volgende opties.  

- Alle namen van bestaande variabelen die in het programma zijn gedefinieerd, worden weergegeven.  
- **"Variabele hernoemen"**: verandert de naam van die variabele in het hele programma. Kies je deze optie, dan verschijnt een venster waarin je de nieuwe naam kunt invoeren.  
- **"Variabele verwijderen"**: verwijdert alle blokken in het programma die naar deze variabele verwijzen. 


## Variabele instellen {#variables_set}

Het blok **stel in op** kent een waarde aan een variabele toe.  
Is die variabele in de code nog niet gedeclareerd, dan wordt eerst een nieuwe variabele gedeclareerd en dan de waarde toegekend.   

<BlockImage module="common/variables" id="variables_set" />

### Python
```python
item = VAL
```

## Waarde wijzigen {#math_change}

Het blok **wijzigen met** telt een getal bij de waarde van een variabele op.

<BlockImage module="common/variables" id="math_change" />

### Python
```python
item = item + 1
```



## Waarde ophalen {#variables_get}

Het blok hieronder levert de waarde die in een variabele is opgeslagen, maar verandert die waarde niet.  
Je kunt dit blok ook zonder het instelblok gebruiken, maar dat is geen goede manier van programmeren.

<BlockImage module="common/variables" id="variables_get" />

### Python
```python
item
```
