---
title: Självkörning med kamera
---

# Självkörning med kamera

## Instansdeklaration {#instance}

När du lägger till ett Självkörning med kamera(SelfDriving)-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
self_driving = SelfDriving(0)
# När det finns flera instanser
self_driving_1 = SelfDriving(1)
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Välja kameraenhet {#device}

Ställer in vilken kamera som ska användas för självkörningen med kamera.

<BlockImage module="AI/SelfDriving" id="device" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Kamerans enhetsnamn | Systemets kameraetikett | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.device('')
```

## Ställa in körfältens färg {#set_lane_color}

Ställer in färgen för det vänstra och det högra körfältet.

<BlockImage module="AI/SelfDriving" id="set_lane_color" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| left | Rullgardinsalternativ | Vänstra körfältets färg | röd(red), grön(green), blå(blue) | - |
| right | Rullgardinsalternativ | Högra körfältets färg | röd(red), grön(green), blå(blue) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.set_lane('green', 'blue')
```

## Detektera en gång {#detect_once}

Hittar den valda färgen eller körfältet i bilden och markerar området en enda gång.

<BlockImage module="AI/SelfDriving" id="detect_once" />

### Parametrar

(ingen)

### Python
```python
self_driving = SelfDriving(0)

self_driving.detect_once()
```

## Starta / stoppa kontinuerlig detektering {#detect_continuous}

Följer de valda färgerna och körfälten i bilden hela tiden och markerar deras områden på skärmen.

<BlockImage module="AI/SelfDriving" id="detect_continuous" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Åtgärd | starta(start), stoppa(stop) | - |

### Python
```python
self_driving = SelfDriving(0)

# unit = "start"
self_driving.detect_continuous()
# unit = "stop"
self_driving.stop()
```

## Visa resultatet {#display}

Bestämmer om resultatet av färg- och körfältsidentifieringen ska visas i kamerabilden eller inte.

<BlockImage module="AI/SelfDriving" id="display" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| on | Rullgardinsalternativ | Visning PÅ / AV | visa(on=True), dölj(off=False) | TRUE |

### Python
```python
self_driving = SelfDriving(0)

self_driving.display(True)
self_driving.display(False)
```

## Körfältets data {#lane_data}

Returnerar position eller avstånd för det angivna körfältet.

<BlockImage module="AI/SelfDriving" id="lane_data" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| lane | Rullgardinsalternativ | Körfält | vänster(left), höger(right) | - |
| unit | Rullgardinsalternativ | Slags mätvärde | x, avstånd(distance) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane('left', 'x')
self_driving.lane('right', 'distance')
```

## Färgområdets data {#color_data}

Returnerar position och storlek för den angivna färgen.

<BlockImage module="AI/SelfDriving" id="color_data" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| color | Rullgardinsalternativ | Färgens namn | röd(red), grön(green), blå(blue) | - |
| unit | Rullgardinsalternativ | Slags koordinat/storlek | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color('red', 'x')
self_driving.color('green', 'y')
self_driving.color('blue', 'area')
```

## Avstånd mellan två färger {#color_to_color}

Returnerar avståndet mellan två färger.

<BlockImage module="AI/SelfDriving" id="color_to_color" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Rullgardinsalternativ | Första färgen | röd(red), grön(green), blå(blue) | - |
| unit2 | Rullgardinsalternativ | Andra färgen | röd(red), grön(green), blå(blue) | - |
| type | Rullgardinsalternativ | Slags avstånd | avstånd (utelämnas eller None), vågrätt avstånd(horizontal), lodrätt avstånd(vertical) | None |

### Python
```python
self_driving = SelfDriving(0)

self_driving.get_distance('red', 'blue')  # avstånd
self_driving.get_distance('green', 'blue', 'horizontal')  # vågrätt avstånd
```

## Har körfältet identifierats? {#lane_detected}

Om ett visst körfält har hittats

<BlockImage module="AI/SelfDriving" id="lane_detected" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| lane | Rullgardinsalternativ | Körfält | vänster(left), höger(right), båda(both), vilket som helst(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane_detected('left')
```

## Har färgområdet identifierats? {#color_detected}

Om ett visst färgområde har hittats

<BlockImage module="AI/SelfDriving" id="color_detected" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| color | Rullgardinsalternativ | Färgens namn | röd(red), grön(green), blå(blue), vilken som helst(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color_detected('red')
```
