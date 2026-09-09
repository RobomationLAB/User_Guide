---
title: Detaljerad ansiktsdetektering
---

# Detaljerad ansiktsdetektering

## Instansdeklaration {#instance}

När du lägger till ett Detaljerad ansiktsdetektering(DetailedFaceDetection)-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
detailed_face_detection = DetailedFaceDetection(0)
# När det finns flera instanser
detailed_face_detection_1 = DetailedFaceDetection(1)
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Välja kameraenhet {#device}

Ställer in vilken kamera som ska användas för den detaljerade ansiktsdetekteringen.

<BlockImage module="AI/DetailedFaceDetection" id="device" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Kamerans enhetsnamn | Systemets kameraetikett | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.device('')
```

## Ladda modellen {#load_model}

Läser in den tränade ansiktsmodellen. Det här steget krävs för att kunna använda funktionerna i modulen Detaljerad ansiktsdetektering.

<BlockImage module="AI/DetailedFaceDetection" id="load_model" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| wait | Kryssruta | Om körningen ska vänta tills inläsningen är klar | TRUE / FALSE | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.load_model(wait=True)
```

## Detektera en gång {#detect_once}

Hittar ansiktena som finns i bilden just nu och visar dem en enda gång.

<BlockImage module="AI/DetailedFaceDetection" id="detect_once" />

### Parametrar

(ingen)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detect_once()
```

## Starta / stoppa kontinuerlig detektering {#detect_continuous}

Följer ansiktena som finns i bilden hela tiden och visar dem på skärmen.

<BlockImage module="AI/DetailedFaceDetection" id="detect_continuous" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Åtgärd | starta(start), stoppa(stop) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

# unit = "start"
detailed_face_detection.detect_continuous()
# unit = "stop"
detailed_face_detection.stop()
```

## Visa resultatet {#display}

Bestämmer om resultatet av ansiktsdetekteringen ska visas i kamerabilden eller inte.

<BlockImage module="AI/DetailedFaceDetection" id="display" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| on | Rullgardinsalternativ | Visning PÅ / AV | visa(on=True), dölj(off=False) | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.display(True)
detailed_face_detection.display(False)
```

## Ansiktsdelarnas koordinater {#face_data}

Returnerar koordinaterna för varje ansiktsdel.

<BlockImage module="AI/DetailedFaceDetection" id="face_data" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Ansiktsdel | ansikte(face), vänster öga(left eye), höger öga(right eye), mun(mouth), näsa(nose), överläpp(upper lip), underläpp(lower lip), vänster mungipa(left lip), höger mungipa(right lip), vänster pupill(left pupil), höger pupill(right pupil) | - |
| pos | Rullgardinsalternativ | Koordinat | x, y | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('x')
detailed_face_detection.left_eye('y')
detailed_face_detection.upper_lip('x')
detailed_face_detection.right_pupil('y')
```

## Ansiktsdelarnas rektangelinformation {#face_square}

Returnerar position och storlek för rektangeln kring varje ansiktsdel.

<BlockImage module="AI/DetailedFaceDetection" id="face_square" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Ansiktsdel | ansikte(face), vänster öga(left eye), höger öga(right eye), mun(mouth) | - |
| pos | Rullgardinsalternativ | Rektangelinformation | min. x-position(min_x), max. x-position(max_x), min. y-position(min_y), max. y-position(max_y), bredd(width), höjd(height), area(area) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('min_x')
detailed_face_detection.left_eye('area')
```

## Avstånd mellan två delar {#distance}

Returnerar avståndet mellan två av ansiktets delar.

<BlockImage module="AI/DetailedFaceDetection" id="distance" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Rullgardinsalternativ | Första delen | Ansiktsdelens namn | - |
| unit2 | Rullgardinsalternativ | Andra delen | Ansiktsdelens namn | - |
| type | Rullgardinsalternativ | Slags avstånd | avstånd (utelämnas eller None), vågrätt avstånd(horizontal), lodrätt avstånd(vertical) | None |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.get_distance('left_eye', 'right_eye')  # avstånd
detailed_face_detection.get_distance('left_pupil', 'right_pupil', 'horizontal')  # vågrätt avstånd
detailed_face_detection.get_distance('upper_lip', 'lower_lip', 'vertical')  # lodrätt avstånd
```

## Modellens tillstånd {#model_state}

Returnerar ansiktsmodellens laddningsstatus.  
Det returnerar 0 om den inte har lästs in än, 1 medan den läses in och 2 när inläsningen är klar.

<BlockImage module="AI/DetailedFaceDetection" id="model_state" />

### Parametrar

(ingen)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.model_state()
```

## Har ett ansikte identifierats? {#detected}

Om ett ansikte har hittats

<BlockImage module="AI/DetailedFaceDetection" id="detected" />

### Parametrar

(ingen)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detected()
```
