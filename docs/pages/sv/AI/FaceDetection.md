---
title: Ansiktsdetektering
---

# Ansiktsdetektering

## Instansdeklaration {#instance}

När du lägger till ett Ansiktsdetektering(FaceDetection)-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
face_detection = FaceDetection(0)
# När det finns flera instanser
face_detection_1 = FaceDetection(1)
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Välja kameraenhet {#device}

Ställer in vilken kamera som ska användas för ansiktsdetekteringen.

<BlockImage module="AI/FaceDetection" id="device" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Kamerans enhetsnamn | Systemets kameraetikett | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.device('')
```

## Ladda modellen {#load_model}

Läser in den tränade ansiktsmodellen. Det här steget krävs för att kunna använda funktionerna i modulen Ansiktsdetektering.

<BlockImage module="AI/FaceDetection" id="load_model" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| wait | Kryssruta | Om körningen ska vänta tills inläsningen är klar | TRUE / FALSE | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.load_model(wait=True)
```

## Detektera en gång {#detect_once}

Hittar ansiktena som finns i bilden just nu och visar dem en enda gång.

<BlockImage module="AI/FaceDetection" id="detect_once" />

### Parametrar

(ingen)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detect_once()
```

## Starta / stoppa kontinuerlig detektering {#detect_continuous}

Följer ansiktena som finns i bilden hela tiden och visar dem på skärmen.

<BlockImage module="AI/FaceDetection" id="detect_continuous" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Åtgärd | starta(start), stoppa(stop) | - |

### Python
```python
face_detection = FaceDetection(0)

# unit = "start"
face_detection.detect_continuous()
# unit = "stop"
face_detection.stop()
```

## Visa resultatet {#display}

Bestämmer om resultatet av ansiktsdetekteringen ska visas i kamerabilden eller inte.

<BlockImage module="AI/FaceDetection" id="display" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| on | Rullgardinsalternativ | Visning PÅ / AV | visa(on=True), dölj(off=False) | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.display(True)
face_detection.display(False)
```

## Ansiktsdelarnas position {#face_data}

Returnerar positionskoordinaterna för ansiktet eller en ansiktsdel.

<BlockImage module="AI/FaceDetection" id="face_data" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Ansiktsdel | ansikte(face), vänster öga(left eye), höger öga(right eye), vänster öra(left ear), höger öra(right ear), näsa(nose), mun(mouth) | - |
| pos | Rullgardinsalternativ | Slags koordinat | x, y | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('x')
face_detection.left_eye('y')
face_detection.right_eye('x')
face_detection.left_ear('x')
face_detection.right_ear('y')
face_detection.nose('x')
face_detection.mouth('y')
```

## Ansiktsrektangelns information {#face_square}

Returnerar position och storlek för rektangeln kring ansiktet.

<BlockImage module="AI/FaceDetection" id="face_square" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| pos | Rullgardinsalternativ | Rektangelinformation | minsta x-position(min_x), största x-position(max_x), minsta y-position(min_y), största y-position(max_y), bredd(width), höjd(height), area(area) | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('min_x')
face_detection.face('width')
face_detection.face('area')
```

## Avstånd mellan två delar {#distance}

Returnerar avståndet mellan två delar av ansiktet.

<BlockImage module="AI/FaceDetection" id="distance" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Rullgardinsalternativ | Första delen | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| unit2 | Rullgardinsalternativ | Andra delen | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| type | Rullgardinsalternativ | Slags avstånd | avstånd (utelämnas eller None), vågrätt avstånd(horizontal), lodrätt avstånd(vertical) | None |

### Python
```python
face_detection = FaceDetection(0)

face_detection.get_distance('left_eye', 'right_eye')  # avstånd
face_detection.get_distance('left_eye', 'right_eye', 'horizontal')  # vågrätt avstånd
face_detection.get_distance('nose', 'mouth', 'vertical')  # lodrätt avstånd
```

## Modellens tillstånd {#model_state}

Returnerar ansiktsmodellens inläsningsstatus.  
Det returnerar 0 om den inte har lästs in än, 1 medan den läses in och 2 när inläsningen är klar.

<BlockImage module="AI/FaceDetection" id="model_state" />

### Parametrar

(ingen)

### Python
```python
face_detection = FaceDetection(0)

face_detection.model_state()
```

## Har ett ansikte detekterats? {#detected}

Om ett ansikte har hittats

<BlockImage module="AI/FaceDetection" id="detected" />

### Parametrar

(ingen)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detected()
```
