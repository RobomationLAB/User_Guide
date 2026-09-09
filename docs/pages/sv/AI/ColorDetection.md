---
title: Färgdetektering
---

# Färgdetektering

## Instansdeklaration {#instance}

När du lägger till ett Färgdetektering(ColorDetection)-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
color_detection = ColorDetection(0)
# När det finns flera instanser
color_detection_1 = ColorDetection(1)
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Välja kameraenhet {#device}

Ställer in vilken kamera som ska användas för färgdetekteringen.

<BlockImage module="AI/ColorDetection" id="device" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Kamerans enhetsnamn | Systemets kameraetikett | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.device('')
```

## Lägga till en färg {#register_color}

Lägger till en färg bland de målfärger som färgdetekteringen ska känna igen.

<BlockImage module="AI/ColorDetection" id="register_color" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| color | Rullgardinsalternativ | Färgens namn | svart(black), röd(red), gul(yellow), grön(green), cyan(cyan), blå(blue), magenta(magenta), vit(white) | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.register_color('red', wait=True)
```

## Ta bort en färg {#delete_color}

Tar bort färgen från de målfärger som färgdetekteringen ska känna igen.

<BlockImage module="AI/ColorDetection" id="delete_color" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| color | Rullgardinsalternativ | Färgens namn | svart(black), röd(red), gul(yellow), grön(green), cyan(cyan), blå(blue), magenta(magenta), vit(white) | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.delete_color('blue', wait=True)
```

## Ställa in areavillkoret {#area_condition}

Bestämmer den minsta arean för det färgområde som ska kännas igen. Bara områden vars area är minst så stor visas på skärmen.

<BlockImage module="AI/ColorDetection" id="area_condition" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Areavillkorets värde | Reellt tal 0 eller större | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.area_condition(50)
```

## Detektera en gång {#detect_once}

Hittar de färger bland de igenkännbara färgerna som finns i bilden just nu och markerar deras områden en enda gång.

<BlockImage module="AI/ColorDetection" id="detect_once" />

### Parametrar

(ingen)

### Python
```python
color_detection = ColorDetection(0)

color_detection.detect_once()
```

## Starta / stoppa kontinuerlig detektering {#detect_continuous}

Följer de färger bland de igenkännbara färgerna som finns i bilden hela tiden och markerar deras områden på skärmen.

<BlockImage module="AI/ColorDetection" id="detect_continuous" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Åtgärd | starta(start), stoppa(stop) | - |

### Python
```python
color_detection = ColorDetection(0)

# unit = "start"
color_detection.detect_continuous()
# unit = "stop"
color_detection.stop()
```

## Visa resultatet {#display}

Bestämmer om resultatet av färgdetekteringen ska visas i kamerabilden eller inte.

<BlockImage module="AI/ColorDetection" id="display" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| on | Rullgardinsalternativ | Visning PÅ / AV | visa(on=True), dölj(off=False) | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.display(True)
color_detection.display(False)
```

## Färgområdets information {#color_data}

Returnerar position och storlek för den angivna färgen.

<BlockImage module="AI/ColorDetection" id="color_data" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| color | Rullgardinsalternativ | Färgens namn | svart(black), röd(red), gul(yellow), grön(green), cyan(cyan), blå(blue), magenta(magenta), vit(white) | - |
| pos | Rullgardinsalternativ | Slags koordinat/storlek | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color('red', 'x')
color_detection.color('green', 'y')
color_detection.color('blue', 'area')
```

## Har en viss färg detekterats? {#color_detected}

Om den valda färgen har hittats

<BlockImage module="AI/ColorDetection" id="color_detected" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| color | Rullgardinsalternativ | Färgens namn | svart(black), röd(red), gul(yellow), grön(green), cyan(cyan), blå(blue), magenta(magenta), vit(white) | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color_detected('red')
```
