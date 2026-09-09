---
title: Functies
---

# Functies

Een **functie** is een **verzameling opdrachten (blokken)** die een bepaalde taak uitvoert.  
Door acties die je steeds opnieuw gebruikt als één functie te definiëren, houd je de code **compact en efficiënt**.

Functies hebben de volgende eigenschappen.  
- **Herbruikbaar**: als je een functie één keer definieert, kun je die daarna zo vaak aanroepen als je wilt.  
- **Invoer en uitvoer**: een functie kan parameters (invoerwaarden) aannemen, die verwerken en het resultaat (uitvoerwaarde) teruggeven.  
- **Betere leesbaarheid van de code**: je kunt het verloop van het programma logisch indelen.


## setup {#setup}

De **functie setup** wordt op het moment dat je de code uitvoert precies één keer aangeroepen.  
In de functie setup schrijf je vooral code die variabelen initialiseert of de modi en opties van de robot voorbereidt.  
Bestuur je bijvoorbeeld een robot die zich op wielen voortbeweegt, dan kun je in de functie setup de beginsnelheid van de wielen instellen.  

<BlockImage module="common/functions" id="setup" />
  
Met de functie `Utils.wait(...)` kun je code schrijven die door sequentiële uitvoering op tijd achter elkaar verloopt. Daarmee is niet alleen eenvoudige sequentiële uitvoering mogelijk, maar samen met de **functie loop**, die de parallelle uitvoering verzorgt, ook zeer krachtige roboprogrammering.  

### Python
```python
def setup():
    # ...
    return
```

## loop {#loop}

De **functie loop** wordt zolang het programma loopt elke 10 ms opnieuw aangeroepen.  
In de functie loop schrijf je vooral code die de waarde van variabelen steeds opnieuw instelt of die bepaalde gebeurtenissen bij de robot opmerkt en verwerkt.

<BlockImage module="common/functions" id="loop" />

### Python
```python
def loop():
    # ...
    return
```

## Een functie definiëren {#procedures_defnoreturn}

Met het blok waarmee je een functie definieert kun je een **nieuwe functie** maken.  
Een functie zonder retourwaarde voert een bepaalde actie uit, maar **geeft geen waarde terug**.

<BlockImage module="common/functions" id="procedures_defnoreturn" />

### Python
```python
def myFunction(arg1, arg2):
    # ...
```

## Een functie met retourwaarde definiëren {#procedures_defreturn}

Een functie met retourwaarde voert een bepaalde taak uit en **geeft daarna de resulterende waarde terug**, zodat andere blokken die kunnen gebruiken.  

<BlockImage module="common/functions" id="procedures_defreturn" />

De functie hieronder **neemt de parameters x en y aan en geeft het resultaat van x + y terug**.  

### Python
```python
def myFunction(x, y):
    return x + y
```

## Een functie aanroepen {#procedures_callnoreturn}

Zodra je een functie definieert, wordt automatisch een **blok voor die zelfgemaakte functie** gemaakt.  
Daarmee kun je de **eerder gedefinieerde functie** aanroepen en uitvoeren.

<BlockImage module="common/functions" id="procedures_callnoreturn" />

### Python
```python
myFunction(arg1, arg2)
```

## Als ... uitvoeren {#procedures_ifreturn}

Een blok dat binnen een functie **onmiddellijk een waarde teruggeeft** en de functie beëindigt zodra aan een bepaalde voorwaarde wordt voldaan.  
Dit blok kun je **alleen binnen een functie** gebruiken; elders is het uitgeschakeld.

<BlockImage module="common/functions" id="procedures_ifreturn" />

### Python
```python
if condition:
    return value
```
