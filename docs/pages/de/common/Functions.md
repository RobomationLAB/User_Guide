---
title: Funktionen
---

# Funktionen

Eine **Funktion (Function)** ist eine **Sammlung von Befehlen (Blöcken)**, die eine bestimmte Aufgabe erledigt.  
Wenn du wiederkehrende Abläufe als eine Funktion definierst, kannst du den Code **knapp und effizient** verwalten.

Funktionen haben folgende Eigenschaften.  
- **Wiederverwendbar**: Einmal definiert, kann sie mehrfach aufgerufen werden.  
- **Eingabe und Ausgabe**: Sie kann Parameter (Eingabewerte) annehmen, verarbeiten und ein Ergebnis (Ausgabewert) zurückgeben.  
- **Bessere Lesbarkeit des Codes**: Der Ablauf des Programms lässt sich logisch strukturieren.


## setup {#setup}

Die **Funktion Setup** wird in dem Moment, in dem der Code ausgeführt wird, genau einmal aufgerufen.  
In der Funktion Setup schreibst du hauptsächlich Code, der Variablen initialisiert oder Modi und Optionen des Roboters festlegt.  
Wenn du zum Beispiel einen Roboter mit Rädern steuerst, kannst du in der Funktion Setup die Anfangsgeschwindigkeit der Räder festlegen.  

<BlockImage module="common/functions" id="setup" />
  
Mit der Funktion `Utils.wait(...)` kannst du durch sequenzielle Ausführung Code schreiben, der zeitlich nacheinander abläuft. Damit ist nicht nur einfache sequenzielle Ausführung möglich, sondern im Zusammenspiel mit der **Funktion Schleife**, die die parallele Ausführung übernimmt, auch sehr leistungsfähige Roboterprogrammierung.  

### Python
```python
def setup():
    # ...
    return
```

## loop {#loop}

Die **Funktion Schleife** wird während der Programmausführung alle 10 ms wiederholt aufgerufen.  
In der Funktion Schleife schreibst du hauptsächlich Code, der wiederholt Werte von Variablen setzt oder bestimmte Ereignisse des Roboters erkennt und verarbeitet.

<BlockImage module="common/functions" id="loop" />

### Python
```python
def loop():
    # ...
    return
```

## Funktion definieren {#procedures_defnoreturn}

Mit dem Block zum Definieren einer Funktion kannst du eine **neue Funktion** erstellen.  
Eine Funktion ohne Rückgabewert führt eine bestimmte Aktion aus, **gibt aber keinen Wert zurück**.

<BlockImage module="common/functions" id="procedures_defnoreturn" />

### Python
```python
def myFunction(arg1, arg2):
    # ...
```

## Funktion mit Rückgabewert definieren {#procedures_defreturn}

Eine Funktion mit Rückgabewert führt eine bestimmte Aufgabe aus und **gibt danach ein Ergebnis zurück**, das in anderen Blöcken verwendet werden kann.  

<BlockImage module="common/functions" id="procedures_defreturn" />

Die folgende Funktion **nimmt die Parameter x und y an und gibt das Ergebnis von x + y zurück**.  

### Python
```python
def myFunction(x, y):
    return x + y
```

## Funktion aufrufen {#procedures_callnoreturn}

Sobald du eine Funktion definiert hast, wird automatisch ein **Block für die benutzerdefinierte Funktion** erzeugt.  
Damit kannst du die **vorher definierte Funktion** aufrufen und ausführen.

<BlockImage module="common/functions" id="procedures_callnoreturn" />

### Python
```python
myFunction(arg1, arg2)
```

## falls ... gib zurück {#procedures_ifreturn}

Dieser Block sorgt dafür, dass innerhalb einer Funktion **bei Erfüllung einer bestimmten Bedingung sofort ein Wert zurückgegeben** und die Funktion beendet wird.  
Dieser Block kann **nur innerhalb einer Funktion** verwendet werden; an anderen Stellen ist er deaktiviert.

<BlockImage module="common/functions" id="procedures_ifreturn" />

### Python
```python
if condition:
    return value
```
