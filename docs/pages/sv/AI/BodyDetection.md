---
title: Kroppsdetektering
---

# Kroppsdetektering

## Instansdeklaration {#instance}

När du lägger till ett Kroppsdetektering(BodyDetection)-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
body_detection = BodyDetection(0)
# När det finns flera instanser
body_detection_1 = BodyDetection(1)
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Välja kameraenhet {#device}

Ställer in vilken kamera som ska användas för kroppsdetekteringen.

<BlockImage module="AI/BodyDetection" id="device" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Kamerans enhetsnamn | Systemets kameraetikett | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.device('')
```

## Ladda modellen {#load_model}

Läser in den tränade kroppsmodellen. Det här steget krävs för att kunna använda funktionerna i modulen Kroppsdetektering.

<BlockImage module="AI/BodyDetection" id="load_model" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| wait | Kryssruta | Om körningen ska vänta tills inläsningen är klar | TRUE / FALSE | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.load_model(wait=True)
```

## Detektera en gång {#detect_once}

Hittar kroppen som finns i bilden just nu och visar den en enda gång.

<BlockImage module="AI/BodyDetection" id="detect_once" />

### Parametrar

(ingen)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detect_once()
```

## Starta / stoppa kontinuerlig detektering {#detect_continuous}

Följer kroppen som finns i bilden hela tiden och visar den på skärmen.

<BlockImage module="AI/BodyDetection" id="detect_continuous" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Åtgärd | starta(start), stoppa(stop) | - |

### Python
```python
body_detection = BodyDetection(0)

# unit = "start"
body_detection.detect_continuous()
# unit = "stop"
body_detection.stop()
```

## Visa resultatet {#display}

Bestämmer om resultatet av kroppsdetekteringen ska visas i kamerabilden eller inte.

<BlockImage module="AI/BodyDetection" id="display" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| on | Rullgardinsalternativ | Visning PÅ / AV | visa(on=True), dölj(off=False) | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.display(True)
body_detection.display(False)
```

## Kroppsdelarnas koordinater {#body_data}

Returnerar koordinaterna för varje kroppsdel.

<BlockImage module="AI/BodyDetection" id="body_data" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Kroppsdel | näsa(nose), mun(mouth), vänster öga(left eye), höger öga(right eye), vänster öra(left ear), höger öra(right ear), vänster axel(left shoulder), höger axel(right shoulder), vänster armbåge(left elbow), höger armbåge(right elbow), vänster handled(left wrist), höger handled(right wrist), vänster hand(left hand), höger hand(right hand), vänster höft(left hip), höger höft(right hip), vänster knä(left knee), höger knä(right knee), vänster fotled(left ankle), höger fotled(right ankle), vänster fot(left foot), höger fot(right foot) | - |
| pos | Rullgardinsalternativ | Koordinat | x, y | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.nose('x')
body_detection.mouth('y')
body_detection.left_eye('x')
body_detection.right_shoulder('y')
body_detection.left_hand('x')
```

## Avstånd mellan två delar {#body_distance}

Returnerar avståndet mellan två av kroppens delar.

<BlockImage module="AI/BodyDetection" id="body_distance" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Rullgardinsalternativ | Första kroppsdelen | (se tabellen över kroppsdelar ovan) | - |
| unit2 | Rullgardinsalternativ | Andra kroppsdelen | (se tabellen över kroppsdelar ovan) | - |
| type | Rullgardinsalternativ | Slags avstånd | avstånd (utelämnas eller None), vågrätt avstånd(horizontal), lodrätt avstånd(vertical) | None |

### Python
```python
body_detection = BodyDetection(0)

body_detection.get_distance('left_shoulder', 'right_shoulder')  # avstånd
body_detection.get_distance('left_wrist', 'right_wrist', 'horizontal')  # vågrätt avstånd
body_detection.get_distance('left_hip', 'left_knee', 'vertical')  # lodrätt avstånd
```

## Modellens tillstånd {#model_state}

Returnerar kroppsmodellens laddningsstatus.  
Det returnerar 0 om den inte har lästs in än, 1 medan den läses in och 2 när inläsningen är klar.

<BlockImage module="AI/BodyDetection" id="model_state" />

### Parametrar

(ingen)

### Python
```python
body_detection = BodyDetection(0)

body_detection.model_state()
```

## Har en kropp identifierats? {#detected}

Om en kropp har hittats

<BlockImage module="AI/BodyDetection" id="detected" />

### Parametrar

(ingen)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detected()
```
