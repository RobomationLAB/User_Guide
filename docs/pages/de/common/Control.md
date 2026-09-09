---
title: Steuerung
---

# Steuerung

In der Blockprogrammierung dienen die **Steuerungsblöcke** dazu, den Ablauf des Programms zu beeinflussen.  
Damit kannst du eine bestimmte Zeit warten, Tastatureingaben erkennen, Protokolle ausgeben und Ähnliches.


## Warten {#wait_sec}

Wartet die angegebene Zeit (Sekunden) und führt danach den nächsten Befehl aus.

<BlockImage module="common/control" id="wait_sec" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| sec | Eingabe (Feld) | Wartezeit — **literale Zahl** (z. B. `Utils.wait(0.5)`) | reelle Zahl ≥ 0 | - |
| sec | Eingabe (Block) | Wartezeit — **Variable/Ausdruck** (z. B. `Utils.wait(time)`) | reelle Zahl ≥ 0 | - |

### Python
```python
# field sec = 2 → unverändert (in Sekunden)
Utils.wait(2)

# Eingabe über Variable
Utils.wait(myVar)
```

## Einen Frame warten {#wait_1msec}

Hält die Ausführung des Programms für einen Frame (etwa 0,001 Sekunden) an.

<BlockImage module="common/control" id="wait_1msec" />

### Parameter

(keine — fest 0,001 Sekunden)

### Python
```python
Utils.wait(0.001)
```

<!--
## Unendlich warten {#wait_forever}

Hält die Ausführung des Programms an und wartet unendlich.

### Parameter

(keine)

### Python
```python
Utils.wait_forever()
```
-->

## Taste gedrückt {#key_pressed}

Gibt zurück, ob eine bestimmte Taste gedrückt ist, als **true(True) / false(False)**.

<BlockImage module="common/control" id="key_pressed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| key | Eingabe | Tastenname | space, up, left, right, down, a~z, 0~9,<br>shift, ctrl, alt, enter, tab, esc, backspace | - |

### Python
```python
Utils.keypressed('space')
```

## Protokoll ausgeben {#log}

Gibt den Wert einer Variablen oder Eigenschaft in Echtzeit im Fenster **Konsole** aus.

<BlockImage module="common/control" id="log" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe | auszugebender Wert | beliebiger Wert | - |
| tag | Eingabe | Protokoll-Tag | Zeichenkette | - |
| unit | Eingabe | Einheitenanzeige | Zeichenkette | - |

### Python
```python
Utils.log(data, '', '')
```

## Oszilloskop ausgeben {#scope}

Zeigt die Veränderung eines Wertes als Echtzeitdiagramm im Fenster **Oszilloskop** an.  
Farbe, Minimum/Maximum und Bereich des Diagramms lassen sich einstellen.

<BlockImage module="common/control" id="scope" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| signal | Eingabe (Block) | Signalwert des Diagramms | reelle Zahl | - |
| name | Eingabe | Name des Diagramms | Zeichenkette | - |
| min_val | Eingabe (Feld) | Minimum des Diagramms | reelle Zahl | - |
| max_val | Eingabe (Feld) | Maximum des Diagramms | reelle Zahl | - |
| color | Farbe | Farbe des Diagramms (hex) | Hex-Zeichenkette | - |

### Python
```python
Utils.scope(signal, '', 0, 100, '#000000')
```
