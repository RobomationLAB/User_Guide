---
title: CSD-02 RGB-LED
---

# CSD-02 RGB-LED

## Instanz deklarieren {#instance}

Wenn du einen CSD-02 RGB-LED(CSD02)-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## RGB-LED starten {#start}

Beginnt mit der Verwendung der RGB-LED.  
Ohne diesen Block wird die RGB-LED nicht aktiviert.

<BlockImage module="CheeseStick/CSD02" id="start" />

### Parameter

(keine)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.start()
```

## Farbe setzen {#set_color}

Setzt die LED-Farbe von CSD02 auf die angegebene Farbe.  
Wenn du in der Farbpalette eine Farbe auswählst, wird sie als **Farbname** (englische Zeichenkette) übergeben. (Der Code wird nicht mit R-, G-, B-Zahlenwerten, sondern mit dem Farbnamen erzeugt.)

<BlockImage module="CheeseStick/CSD02" id="set_color" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| color | Farbe | Auswahl in der Farbpalette → wird zum Farbnamen (englisch) | Farbname: `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'violet'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color('orange')
```

## Farbe mit einem Block der Kategorie Farbe setzen {#set_color_with_block}

Nimmt einen Block aus der Kategorie Farbe (z. B. ein `[R, G, B]`-Array) als Eingabe und setzt damit die LED-Farbe von CSD02.

<BlockImage module="CheeseStick/CSD02" id="set_color_with_block" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Farbe) | Ausgabe eines Blocks der Kategorie Farbe oder ein `[R, G, B]`-Array | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color(*Utils.color('yellow'))
```

## Farbe um RGB-Werte ändern {#change_by_rgb}

Addiert die eingegebenen Änderungswerte für R, G und B zur aktuellen LED-Farbe und setzt so eine neue Farbe.

<BlockImage module="CheeseStick/CSD02" id="change_by_rgb" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| r | Eingabe (Feld) | Änderung von Rot | ganze Zahl -255 ~ 255 | 0 |
| g | Eingabe (Feld) | Änderung von Grün | ganze Zahl -255 ~ 255 | 0 |
| b | Eingabe (Feld) | Änderung von Blau | ganze Zahl -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.change_color(10, 0, 0)
```

## LED ausschalten {#turn_off}

Löscht die Farbe der RGB-LED.

<BlockImage module="CheeseStick/CSD02" id="turn_off" />

### Parameter

(keine)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.turn_off()
```
