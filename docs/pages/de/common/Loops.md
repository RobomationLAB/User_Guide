---
title: Schleifen
---

# Schleifen

Es gibt zwei Arten von Schleifensteuerung:  
**Bedingungen** und **Schleifen** (sie steuern anhand der Werte von Variablen, wie oft der Rumpf ausgeführt wird)


## wiederhole {#controls_repeat}

Der einfachste Block **wiederhole** führt den Code im Rumpf so oft aus, wie angegeben. 

<BlockImage module="common/loops" id="controls_repeat" />

### Python
```python
for count in range(times):
    # ...
```

## zähle {#controls_for}

Der Block **zähle** (meist **for loop** genannt) erhöht eine Variable vom ersten Wert bis zum zweiten Wert in Schritten (dritter Wert) und führt den Rumpf für jeden Wert einmal aus.  

<BlockImage module="common/loops" id="controls_for" />

### Python
```python
for VAR in range(from, to + 1, by):
    # ...
```

## für jeden Wert aus der Liste {#controls_forEach}

Der Block **für jeden Wert aus der Liste** ist ähnlich, verwendet aber der Reihe nach die Werte einer Liste statt einer Zahlenfolge.

<BlockImage module="common/loops" id="controls_forEach" />

### Python
```python
for VAR in list:
    # ...
```


## wiederhole solange / bis {#controls_while}

Der Block **wiederhole solange** wiederholt den Rumpf, solange die Bedingung true ist.  
Der Block **wiederhole bis** wiederholt den Rumpf, solange die Bedingung false ist, und verlässt die Schleife in dem Moment, in dem die Bedingung true wird.

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

## abbrechen / fortfahren {#controls_flow_statements}

Der Block **abbrechen** erlaubt es dir, **eine Schleife früher zu verlassen**.  
**fortfahren** (in den meisten Programmiersprachen **continue**) überspringt den restlichen Code im Rumpf und beginnt sofort den nächsten Durchlauf.

<BlockImage module="common/loops" id="controls_flow_statements" />

### Python
```python
break
continue
```
