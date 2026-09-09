---
title: Variablen
---

# Variablen

Wir verwenden den Begriff Variable in derselben Bedeutung wie in der Mathematik oder in anderen Programmiersprachen.  
Das heißt, es handelt sich um ein **benanntes Element, das einen Wert speichert und geändert werden kann**.  
  
Variablen können auf verschiedene Weise erzeugt werden.  

- Einige Blöcke wie [zähle](Loops#controls_for) und [für jeden Wert aus der Liste](Loops#controls_forEach) verwenden eine Variable und legen ihren Wert fest.  
Solche Variablen werden traditionell **Schleifenvariablen (loop variables)** genannt.  
- Auch [benutzerdefinierte Funktionen](Functions#procedures_defnoreturn) verwenden Variablen, um Parameter oder Argumente zu definieren.
- Über den Block **setze** kannst du jederzeit eine Variable erzeugen; die erzeugte Variable wird als **globale Variable (global variables)** deklariert.  
- Die Blockprogrammierumgebung von RobomationLAB unterstützt keine **lokalen Variablen (local variables)**.  

Wenn du auf das Dropdown eines Variablenblocks klickst, erscheinen die folgenden Optionen.  

- Alle im Programm definierten Variablennamen werden angezeigt.  
- **„Variable umbenennen"**: Ändert den Namen dieser Variable im gesamten Programm. Bei dieser Option erscheint ein Fenster, in das du den neuen Namen eingeben kannst.  
- **„Variable löschen"**: Löscht alle Blöcke im Programm, die auf diese Variable verweisen. 


## Variable setzen {#variables_set}

Der Block **setze ... auf** weist einer Variablen einen Wert zu.  
Ist die Variable im Code noch nicht deklariert, wird sie zuerst deklariert und dann der Wert zugewiesen.   

<BlockImage module="common/variables" id="variables_set" />

### Python
```python
item = VAL
```

## Wert ändern {#math_change}

Der Block **erhöhe ... um** addiert eine Zahl zum Wert der Variablen.

<BlockImage module="common/variables" id="math_change" />

### Python
```python
item = item + 1
```



## Wert holen {#variables_get}

Der folgende Block liefert den in der Variablen gespeicherten Wert, ändert ihn aber nicht.  
Du kannst den Block auch ohne einen setze-Block verwenden, aber das ist keine gute Programmierpraxis.

<BlockImage module="common/variables" id="variables_get" />

### Python
```python
item
```
