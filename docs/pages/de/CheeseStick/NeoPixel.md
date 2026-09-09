---
title: NeoPixel
---

# NeoPixel

## Instanz deklarieren {#instance}

Wenn du einen NeoPixel(NeoPixel)-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Starten {#start}

Verwendet NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="start" />

### Parameter

(keine)

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.start()
```

## LED-Modus setzen {#mode}

Setzt den LED-Modus von NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="mode" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Modus der Farbkanäle | GRBW, GRB | GRBW |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.mode('GRBW')
```

## Farbe eines Pixels setzen {#set_one_color}

Setzt die Farbe eines einzelnen Pixels mit der angegebenen Nummer.  
Wenn du in der Farbpalette eine Farbe auswählst, wird sie als **Farbname** (englische Zeichenkette) übergeben. (Der Code wird nicht mit R-, G-, B-Zahlenwerten, sondern mit dem Farbnamen erzeugt.)

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| idx | Eingabe (Feld) | Pixelnummer (beginnt bei 1) | ganze Zahl ≥ 1 | - |
| color | Farbe | Auswahl in der Farbpalette → wird zum Farbnamen (englisch) | Farbname: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, 'red')
```

## Farbe eines Pixels mit einem Block der Kategorie Farbe setzen {#set_one_color_with_block}

Nimmt einen Block aus der Kategorie Farbe als Eingabe und setzt damit die Farbe eines Pixels.  
Die Ausgabe des Farbblocks (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`, alle geben `[R, G, B]` zurück) wird mit `*` (Stern) entpackt und als Argumente r, g, b an `set_one_color` übergeben.

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color_with_block" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| idx | Eingabe (Feld) | Pixelnummer (beginnt bei 1) | ganze Zahl ≥ 1 | - |
| data | Eingabe (Farbe) | Block der Kategorie Farbe oder ein `[R, G, B]`-Array | [0~255, 0~255, 0~255] | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, *Utils.color('red'))
```

## Farbe eines Pixels um RGB-Werte ändern {#change_one_by_rgb}

Addiert die Änderungswerte zu den aktuellen RGB-Werten des angegebenen Pixels und setzt so eine neue Farbe.

<BlockImage module="CheeseStick/NeoPixel" id="change_one_by_rgb" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| idx | Eingabe (Feld) | Pixelnummer (beginnt bei 1) | ganze Zahl ≥ 1 | - |
| r | Eingabe (Feld) | Änderung von Rot | ganze Zahl -255 ~ 255 | 0 |
| g | Eingabe (Feld) | Änderung von Grün | ganze Zahl -255 ~ 255 | 0 |
| b | Eingabe (Feld) | Änderung von Blau | ganze Zahl -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_one_color(1, 10, 0, 0)
```

## Ein Pixel ausschalten {#turn_off_one}

Löscht die Farbe der n-ten LED.  
Der Bereich der LED-Nummern ist 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_one" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| idx | Eingabe (Feld) | Pixelnummer (beginnt bei 1) | ganze Zahl ≥ 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_one(1)
```

## Muster für einen Bereich setzen {#set_range_pattern}

Setzt das Farbmuster aller LEDs im angegebenen Bereich.  
Der Bereich der LED-Nummern ist 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_pattern" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| from_idx | Eingabe (Feld) | Nummer des ersten Pixels (beginnt bei 1) | ganze Zahl ≥ 1 | - |
| to_idx | Eingabe (Feld) | Nummer des letzten Pixels (beginnt bei 1) | ganze Zahl ≥ 1 | - |
| pattern | Dropdown-Option | Name des Farbmusters | `3_colors`, `6_colors`, `12_colors`, `red_green`, `red_blue`, `red_white`, `green_red`, `green_blue`, `green_white`, `blue_red`, `blue_green`, `blue_white`, `white_red`, `white_green`, `white_blue`, `black_red`, `black_green`, `black_blue`, `black_white`, `red_black`, `green_black`, `blue_black`, `white_black` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_pattern(1, 10, '3_colors')
```

## Farbe eines Bereichs setzen {#set_range_color}

Setzt für den gesamten angegebenen Pixelbereich dieselbe Farbe.  
Wenn du in der Farbpalette eine Farbe auswählst, wird sie als **Farbname** (englische Zeichenkette) übergeben.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| from_idx | Eingabe (Feld) | Nummer des ersten Pixels (beginnt bei 1) | ganze Zahl ≥ 1 | - |
| to_idx | Eingabe (Feld) | Nummer des letzten Pixels (beginnt bei 1) | ganze Zahl ≥ 1 | - |
| color | Farbe | Auswahl in der Farbpalette → wird zum Farbnamen (englisch) | Farbname: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, 'red')
```

## Farbe eines Bereichs mit einem Block der Kategorie Farbe setzen {#set_range_color_with_block}

Nimmt einen Block aus der Kategorie Farbe als Eingabe und setzt damit die Farbe eines Pixelbereichs.  
Die Ausgabe des Farbblocks (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) wird mit `*` (Stern) entpackt und als Argumente r, g, b an `set_range_color` übergeben.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color_with_block" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| from_idx | Eingabe (Feld) | Nummer des ersten Pixels (beginnt bei 1) | ganze Zahl ≥ 1 | - |
| to_idx | Eingabe (Feld) | Nummer des letzten Pixels (beginnt bei 1) | ganze Zahl ≥ 1 | - |
| data | Eingabe (Farbe) | Block der Kategorie Farbe oder ein `[R, G, B]`-Array | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, *Utils.color('red'))
```

## Farbe eines Bereichs um RGB-Werte ändern {#change_range_by_rgb}

Addiert die RGB-Änderungswerte zur aktuellen Farbe des angegebenen Pixelbereichs und setzt so eine neue Farbe.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_by_rgb" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| from_idx | Eingabe (Feld) | Nummer des ersten Pixels (beginnt bei 1) | ganze Zahl ≥ 1 | - |
| to_idx | Eingabe (Feld) | Nummer des letzten Pixels (beginnt bei 1) | ganze Zahl ≥ 1 | - |
| r | Eingabe (Feld) | Änderung von Rot | ganze Zahl -255 ~ 255 | 0 |
| g | Eingabe (Feld) | Änderung von Grün | ganze Zahl -255 ~ 255 | 0 |
| b | Eingabe (Feld) | Änderung von Blau | ganze Zahl -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_color(1, 10, 10, 0, 0)
```

## Farben eines Bereichs ausschalten {#turn_off_range}

Löscht die Farben aller LEDs im angegebenen Bereich.  
Der Bereich der LED-Nummern ist 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| from_idx | Eingabe (Feld) | Nummer des ersten Pixels (beginnt bei 1) | ganze Zahl ≥ 1 | - |
| to_idx | Eingabe (Feld) | Nummer des letzten Pixels (beginnt bei 1) | ganze Zahl ≥ 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range(1, 10)
```

## Farbe jeder n-ten LED eines Bereichs setzen {#set_range_increment_color}

Setzt innerhalb des angegebenen Pixelbereichs die Farbe jeder `increment`-ten LED.  
Wenn du in der Farbpalette eine Farbe auswählst, wird sie als **Farbname** (englische Zeichenkette) übergeben.  
(z. B. nur die LEDs 1, 3, 5, … einschalten)

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| from_idx | Eingabe (Feld) | Nummer des ersten Pixels (beginnt bei 1) | ganze Zahl ≥ 1 | - |
| to_idx | Eingabe (Feld) | Nummer des letzten Pixels (beginnt bei 1) | ganze Zahl ≥ 1 | - |
| increment | Eingabe (Feld) | Abstand (Anzahl der LEDs) | ganze Zahl ≥ 1 | - |
| color | Farbe | Auswahl in der Farbpalette → wird zum Farbnamen (englisch) | Farbname: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, 'red')
```

## Farbe jeder n-ten LED eines Bereichs mit einem Block der Kategorie Farbe setzen {#set_range_increment_color_with_block}

Nimmt einen Block aus der Kategorie Farbe als Eingabe und setzt damit innerhalb des angegebenen Pixelbereichs die Farbe jeder n-ten LED.  
Die Ausgabe des Farbblocks (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) wird mit `*` (Stern) entpackt und als Argumente r, g, b an `set_range_increment_color` übergeben.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color_with_block" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| from_idx | Eingabe (Feld) | Nummer des ersten Pixels (beginnt bei 1) | ganze Zahl ≥ 1 | - |
| to_idx | Eingabe (Feld) | Nummer des letzten Pixels (beginnt bei 1) | ganze Zahl ≥ 1 | - |
| increment | Eingabe (Feld) | Abstand (Anzahl der LEDs) | ganze Zahl ≥ 1 | - |
| data | Eingabe (Farbe) | Block der Kategorie Farbe oder ein `[R, G, B]`-Array | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, *Utils.color('red'))
```

## Farbe jeder n-ten LED um RGB-Werte ändern {#change_range_increment_by_rgb}

Addiert die RGB-Änderungswerte zur aktuellen Farbe jeder n-ten LED und setzt so eine neue Farbe.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_increment_by_rgb" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| from_idx | Eingabe (Feld) | Nummer des ersten Pixels (beginnt bei 1) | ganze Zahl ≥ 1 | - |
| to_idx | Eingabe (Feld) | Nummer des letzten Pixels (beginnt bei 1) | ganze Zahl ≥ 1 | - |
| increment | Eingabe (Feld) | Abstand der Schritte (Anzahl der LEDs) | ganze Zahl ≥ 1 | - |
| r | Eingabe (Feld) | Änderung von Rot | ganze Zahl -255 ~ 255 | 0 |
| g | Eingabe (Feld) | Änderung von Grün | ganze Zahl -255 ~ 255 | 0 |
| b | Eingabe (Feld) | Änderung von Blau | ganze Zahl -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_increment_color(1, 10, 2, 10, 0, 0)
```

## Farbe jeder n-ten LED ausschalten {#turn_off_range_increment}

Löscht die Farben aller LEDs, die dem angegebenen Bereich und Abstand entsprechen.  
Der Bereich der LED-Nummern ist 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range_increment" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| from_idx | Eingabe (Feld) | Nummer des ersten Pixels (beginnt bei 1) | ganze Zahl ≥ 1 | - |
| to_idx | Eingabe (Feld) | Nummer des letzten Pixels (beginnt bei 1) | ganze Zahl ≥ 1 | - |
| increment | Eingabe (Feld) | Abstand der Schritte (Anzahl der LEDs) | ganze Zahl ≥ 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range_increment(1, 10, 2)
```

## Verschieben / Rotieren {#shift}

Verschiebt oder rotiert die LEDs um die angegebene Richtung und Anzahl von Stellen.  
Der Bereich der wählbaren Werte ist 1 ~ 143.

<BlockImage module="CheeseStick/NeoPixel" id="shift" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Art der Aktion | verschieben(shift), rotieren(rotate) | - |
| direction | Dropdown-Option | Richtung | links(left), rechts(right) | - |
| pixel | Eingabe (Feld) | Anzahl der zu verschiebenden Pixel | ganze Zahl ≥ 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

# unit = 'shift'
neopixel.shift('left', 1)

# unit = 'rotate'
neopixel.rotate('left', 1)
```

## Helligkeit setzen {#set_brightness}

Setzt die Helligkeit von NeoPixel.  
Der Bereich der wählbaren Werte ist 0 ~ 100.

<BlockImage module="CheeseStick/NeoPixel" id="set_brightness" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| value | Eingabe (Feld) | Helligkeit | ganze Zahl 0 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_brightness(50)
```

## Helligkeit ändern {#change_brightness}

Ändert die Helligkeit von NeoPixel.  
Der Bereich der wählbaren Werte ist -100 ~ 100.

<BlockImage module="CheeseStick/NeoPixel" id="change_brightness" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| value | Eingabe (Feld) | Änderung der Helligkeit | ganze Zahl -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_brightness(10)
```
