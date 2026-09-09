---
title: Detektering av ArUco-markörer
---

# Detektering av ArUco-markörer

## Instansdeklaration {#instance}

När du lägger till ett Detektering av ArUco-markörer(ArucoMarker)-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
aruco_marker = ArucoMarker(0)
# När det finns flera instanser
aruco_marker_1 = ArucoMarker(1)
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Välja kameraenhet {#device}

Ställer in vilken kamera som ska användas för detekteringen av ArUco-markörer.

<BlockImage module="AI/ArucoMarker" id="device" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Kamerans enhetsnamn | Systemets kameraetikett | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.device('')
```

## Ställa in maximalt antal markörer {#max_count}

Ställer in hur många markörer som som mest kan kännas igen. Antalet går från 0 till 10.

<BlockImage module="AI/ArucoMarker" id="max_count" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Maximalt antal markörer | Heltal 0 till 10 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.max_count(5)
```

## Detektera en gång {#detect_once}

Hittar markörerna som finns i bilden just nu och markerar deras områden en enda gång.

<BlockImage module="AI/ArucoMarker" id="detect_once" />

### Parametrar

(ingen)

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.detect_once()
```

## Starta / stoppa kontinuerlig detektering {#detect_continuous}

Följer markörerna som finns i bilden hela tiden och markerar deras områden på skärmen.

<BlockImage module="AI/ArucoMarker" id="detect_continuous" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Åtgärd | starta(start), stoppa(stop) | - |

### Python
```python
aruco_marker = ArucoMarker(0)

# unit = "start"
aruco_marker.detect_continuous()
# unit = "stop"
aruco_marker.stop()
```

## Visa resultatet {#display}

Bestämmer om resultatet av markördetekteringen ska visas i kamerabilden eller inte.

<BlockImage module="AI/ArucoMarker" id="display" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| on | Rullgardinsalternativ | Visning PÅ / AV | visa(on=True), dölj(off=False) | TRUE |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.display(True)
aruco_marker.display(False)
```

## Markörens data {#marker_data}

Returnerar position och storlek för markören med det angivna ID:t.

<BlockImage module="AI/ArucoMarker" id="marker_data" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Markörens ID | Heltal 0 eller större | - |
| unit | Rullgardinsalternativ | Slags mätvärde | x, y, min_x, max_x, min_y, max_y, width, height, area, rotation | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker(0, 'x')
aruco_marker.marker(3, 'area')
```

## Avstånd mellan markörer {#marker_to_marker}

Returnerar avståndet mellan två markörer.

<BlockImage module="AI/ArucoMarker" id="marker_to_marker" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Inmatning (block) | Första markörens ID | Heltal 0 eller större | - |
| unit2 | Inmatning (block) | Andra markörens ID | Heltal 0 eller större | - |
| type | Rullgardinsalternativ | Slags avstånd | avstånd (utelämnas eller None), vågrätt avstånd(horizontal), lodrätt avstånd(vertical) | None |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.get_distance(0, 1)  # avstånd
aruco_marker.get_distance(0, 2, 'horizontal')  # vågrätt avstånd
```

## Har markören upptäckts? {#marker_detected}

Om markören med ett visst id-värde har hittats

<BlockImage module="AI/ArucoMarker" id="marker_detected" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Markörens ID | Heltal 0 eller större | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker_detected(0)
```
