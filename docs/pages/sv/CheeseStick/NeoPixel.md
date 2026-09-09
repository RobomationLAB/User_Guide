---
title: NeoPixel
---

# NeoPixel

## Instansdeklaration {#instance}

När du lägger till ett NeoPixel-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Starta {#start}

Börjar använda NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="start" />

### Parametrar

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.start()
```

## Ställa in färgläget {#mode}

Ställer in LED-läget för NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="mode" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Läge för färgkanaler | GRBW, GRB | GRBW |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.mode('GRBW')
```

## Ställa in färgen på en pixel {#set_one_color}

Ställer in färgen på en enda pixel med det angivna numret.  
När du väljer en färg i färgpaletten omvandlas den till ett **färgnamn** (en engelsk sträng) i anropet. (Koden skapas med färgnamnet, inte med siffervärden för R, G och B.)

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| idx | Inmatning (fält) | Pixelnummer (börjar på 1) | Heltal 1 eller större | - |
| color | Färg | Val i färgpaletten → omvandlas till ett färgnamn (engelska) | Färgnamn: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, 'red')
```

## Ställa in färgen på en pixel med ett block från Färg-kategorin {#set_one_color_with_block}

Tar emot ett block från Färg-kategorin som inmatning och ställer in färgen på en pixel.  
Utdata från färgblocket (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`, som alla returnerar `[R, G, B]`) packas upp med `*` (asterisk) och skickas som argumenten r, g och b till `set_one_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color_with_block" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| idx | Inmatning (fält) | Pixelnummer (börjar på 1) | Heltal 1 eller större | - |
| data | Inmatning (färg) | Block från Färg-kategorin eller fältet `[R, G, B]` | [0~255, 0~255, 0~255] | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, *Utils.color('red'))
```

## Ändra en pixels färg med RGB {#change_one_by_rgb}

Lägger ändringarna till de nuvarande RGB-värdena för den angivna pixeln och ställer in den nya färgen.

<BlockImage module="CheeseStick/NeoPixel" id="change_one_by_rgb" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| idx | Inmatning (fält) | Pixelnummer (börjar på 1) | Heltal 1 eller större | - |
| r | Inmatning (fält) | Ändring av rött | Heltal -255 till 255 | 0 |
| g | Inmatning (fält) | Ändring av grönt | Heltal -255 till 255 | 0 |
| b | Inmatning (fält) | Ändring av blått | Heltal -255 till 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_one_color(1, 10, 0, 0)
```

## Släcka en pixel {#turn_off_one}

Tar bort färgen på lysdiod nummer n.  
Lysdiodernas nummer går från 1 till 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_one" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| idx | Inmatning (fält) | Pixelnummer (börjar på 1) | Heltal 1 eller större | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_one(1)
```

## Ställa in mönster för ett intervall {#set_range_pattern}

Ställer in färgmönstret för alla lysdioder i det angivna intervallet.  
Lysdiodernas nummer går från 1 till 144.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_pattern" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Inmatning (fält) | Första pixelnumret (börjar på 1) | Heltal 1 eller större | - |
| to_idx | Inmatning (fält) | Sista pixelnumret (börjar på 1) | Heltal 1 eller större | - |
| pattern | Rullgardinsalternativ | Färgmönstrets namn | `3_colors`, `6_colors`, `12_colors`, `red_green`, `red_blue`, `red_white`, `green_red`, `green_blue`, `green_white`, `blue_red`, `blue_green`, `blue_white`, `white_red`, `white_green`, `white_blue`, `black_red`, `black_green`, `black_blue`, `black_white`, `red_black`, `green_black`, `blue_black`, `white_black` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_pattern(1, 10, '3_colors')
```

## Ställa in färgen för ett intervall {#set_range_color}

Ställer in samma färg för hela det angivna pixelintervallet.  
När du väljer en färg i färgpaletten omvandlas den till ett **färgnamn** (en engelsk sträng) i anropet.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Inmatning (fält) | Första pixelnumret (börjar på 1) | Heltal 1 eller större | - |
| to_idx | Inmatning (fält) | Sista pixelnumret (börjar på 1) | Heltal 1 eller större | - |
| color | Färg | Val i färgpaletten → omvandlas till ett färgnamn (engelska) | Färgnamn: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, 'red')
```

## Ställa in färgen för ett intervall med ett block från Färg-kategorin {#set_range_color_with_block}

Tar emot ett block från Färg-kategorin som inmatning och ställer in färgen för pixelintervallet.  
Utdata från färgblocket (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) packas upp med `*` (asterisk) och skickas som argumenten r, g och b till `set_range_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color_with_block" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Inmatning (fält) | Första pixelnumret (börjar på 1) | Heltal 1 eller större | - |
| to_idx | Inmatning (fält) | Sista pixelnumret (börjar på 1) | Heltal 1 eller större | - |
| data | Inmatning (färg) | Block från Färg-kategorin eller fältet `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, *Utils.color('red'))
```

## Ändra ett intervalls färg med RGB {#change_range_by_rgb}

Lägger RGB-ändringarna till den nuvarande färgen i det angivna pixelintervallet och ställer in den nya färgen.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_by_rgb" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Inmatning (fält) | Första pixelnumret (börjar på 1) | Heltal 1 eller större | - |
| to_idx | Inmatning (fält) | Sista pixelnumret (börjar på 1) | Heltal 1 eller större | - |
| r | Inmatning (fält) | Ändring av rött | Heltal -255 till 255 | 0 |
| g | Inmatning (fält) | Ändring av grönt | Heltal -255 till 255 | 0 |
| b | Inmatning (fält) | Ändring av blått | Heltal -255 till 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_color(1, 10, 10, 0, 0)
```

## Släcka ett intervall {#turn_off_range}

Tar bort färgen på alla lysdioder i det angivna intervallet.  
Lysdiodernas nummer går från 1 till 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Inmatning (fält) | Första pixelnumret (börjar på 1) | Heltal 1 eller större | - |
| to_idx | Inmatning (fält) | Sista pixelnumret (börjar på 1) | Heltal 1 eller större | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range(1, 10)
```

## Ställa in färgen på var n:e pixel i ett intervall {#set_range_increment_color}

Ställer in färgen på var `increment`:e pixel inom det angivna pixelintervallet.  
När du väljer en färg i färgpaletten omvandlas den till ett **färgnamn** (en engelsk sträng) i anropet.  
(t.ex. bara pixel 1, 3, 5 … tänds)

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Inmatning (fält) | Första pixelnumret (börjar på 1) | Heltal 1 eller större | - |
| to_idx | Inmatning (fält) | Sista pixelnumret (börjar på 1) | Heltal 1 eller större | - |
| increment | Inmatning (fält) | Steg (antal pixlar) | Heltal 1 eller större | - |
| color | Färg | Val i färgpaletten → omvandlas till ett färgnamn (engelska) | Färgnamn: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, 'red')
```

## Ställa in färgen på var n:e pixel med ett block från Färg-kategorin {#set_range_increment_color_with_block}

Tar emot ett block från Färg-kategorin som inmatning och ställer in färgen på var n:e pixel inom det angivna pixelintervallet.  
Utdata från färgblocket (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) packas upp med `*` (asterisk) och skickas som argumenten r, g och b till `set_range_increment_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color_with_block" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Inmatning (fält) | Första pixelnumret (börjar på 1) | Heltal 1 eller större | - |
| to_idx | Inmatning (fält) | Sista pixelnumret (börjar på 1) | Heltal 1 eller större | - |
| increment | Inmatning (fält) | Steg (antal pixlar) | Heltal 1 eller större | - |
| data | Inmatning (färg) | Block från Färg-kategorin eller fältet `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, *Utils.color('red'))
```

## Ändra var n:e pixel med RGB {#change_range_increment_by_rgb}

Lägger RGB-ändringarna till den nuvarande färgen på var n:e pixel och ställer in den nya färgen.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_increment_by_rgb" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Inmatning (fält) | Första pixelnumret (börjar på 1) | Heltal 1 eller större | - |
| to_idx | Inmatning (fält) | Sista pixelnumret (börjar på 1) | Heltal 1 eller större | - |
| increment | Inmatning (fält) | Stegets storlek (antal pixlar) | Heltal 1 eller större | - |
| r | Inmatning (fält) | Ändring av rött | Heltal -255 till 255 | 0 |
| g | Inmatning (fält) | Ändring av grönt | Heltal -255 till 255 | 0 |
| b | Inmatning (fält) | Ändring av blått | Heltal -255 till 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_increment_color(1, 10, 2, 10, 0, 0)
```

## Släcka var n:e pixel {#turn_off_range_increment}

Tar bort färgen på alla lysdioder i det angivna intervallet och med det angivna steget.  
Lysdiodernas nummer går från 1 till 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range_increment" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Inmatning (fält) | Första pixelnumret (börjar på 1) | Heltal 1 eller större | - |
| to_idx | Inmatning (fält) | Sista pixelnumret (börjar på 1) | Heltal 1 eller större | - |
| increment | Inmatning (fält) | Stegets storlek (antal pixlar) | Heltal 1 eller större | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range_increment(1, 10, 2)
```

## Förskjuta / rotera {#shift}

Förskjuter eller roterar lysdioderna åt det angivna hållet och så många pixlar som du anger.  
Värdena du kan välja går från 1 till 143.

<BlockImage module="CheeseStick/NeoPixel" id="shift" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Slags åtgärd | förskjut(shift), rotera(rotate) | - |
| direction | Rullgardinsalternativ | Riktning | vänster(left), höger(right) | - |
| pixel | Inmatning (fält) | Antal pixlar att flytta | Heltal 1 eller större | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

# unit = 'shift'
neopixel.shift('left', 1)

# unit = 'rotate'
neopixel.rotate('left', 1)
```

## Ställa in ljusstyrkan {#set_brightness}

Ställer in ljusstyrkan för NeoPixel.  
Värdena du kan välja går från 0 till 100.

<BlockImage module="CheeseStick/NeoPixel" id="set_brightness" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| value | Inmatning (fält) | Ljusstyrka | Heltal 0 till 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_brightness(50)
```

## Ändra ljusstyrkan {#change_brightness}

Ändrar ljusstyrkan för NeoPixel.  
Värdena du kan välja går från -100 till 100.

<BlockImage module="CheeseStick/NeoPixel" id="change_brightness" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| value | Inmatning (fält) | Ändring av ljusstyrkan | Heltal -100 till 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_brightness(10)
```
