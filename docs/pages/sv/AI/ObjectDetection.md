---
title: Objektdetektering
---

# Objektdetektering

## Instansdeklaration {#instance}

När du lägger till ett Objektdetektering(ObjectDetection)-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
object_detection = ObjectDetection(0)
# När det finns flera instanser
object_detection_1 = ObjectDetection(1)
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Välja kameraenhet {#device}

Ställer in vilken kamera som ska användas för objektdetekteringen.

<BlockImage module="AI/ObjectDetection" id="device" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Kamerans enhetsnamn | Systemets kameraetikett | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.device('')
```

## Ladda modellen {#load_model}

Läser in den tränade objektmodellen. Det här steget krävs för att kunna använda funktionerna i modulen Objektdetektering.

<BlockImage module="AI/ObjectDetection" id="load_model" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| wait | Kryssruta | Om körningen ska vänta tills inläsningen är klar | TRUE / FALSE | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.load_model(wait=True)
```

## Ställa in maximalt antal objekt {#max_objects}

Ställer in hur många objekt som som mest kan hittas. Antalet går från 0 till 10.

<BlockImage module="AI/ObjectDetection" id="max_objects" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Maximalt antal objekt | Heltal 0 till 10 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.max_objects(5)
```

## Ställa in konfidenströskeln {#confidence_threshold}

Ställer in den minsta sannolikheten (konfidensen) för objektdetekteringen. Bara objekt vars sannolikhet (konfidens) är minst så hög visas på skärmen. Sannolikheten (konfidensen) går från 0 till 1.

<BlockImage module="AI/ObjectDetection" id="confidence_threshold" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Konfidenströskel | Reellt tal 0 till 1 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.confidence_threshold(0.5)
```

## Detektera en gång {#detect_once}

Hittar objekten som finns i bilden just nu och visar dem en enda gång.

<BlockImage module="AI/ObjectDetection" id="detect_once" />

### Parametrar

(ingen)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detect_once()
```

## Starta / stoppa kontinuerlig detektering {#detect_continuous}

Följer objekten som finns i bilden hela tiden och visar dem på skärmen.

<BlockImage module="AI/ObjectDetection" id="detect_continuous" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Åtgärd | starta(start), stoppa(stop) | - |

### Python
```python
object_detection = ObjectDetection(0)

# unit = "start"
object_detection.detect_continuous()
# unit = "stop"
object_detection.stop()
```

## Visa resultatet {#display}

Bestämmer om resultatet av objektdetekteringen ska visas i kamerabilden eller inte.

<BlockImage module="AI/ObjectDetection" id="display" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| on | Rullgardinsalternativ | Visning PÅ / AV | visa(on=True), dölj(off=False) | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.display(True)
object_detection.display(False)
```

## Objektets positionsinformation {#object_data}

Returnerar position och storlek för det angivna objektet.

<BlockImage module="AI/ObjectDetection" id="object_data" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Objektets namn | 80 objektklasser (`'person'`, `'bicycle'`, `'car'`, `'motorcycle'`, `'airplane'`, `'bus'`, `'cat'`, `'dog'`, `'apple'`, `'cup'`, `'laptop'`, `'cell_phone'` med flera) | - |
| pos | Rullgardinsalternativ | Koordinat | x, y | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'x')
object_detection.object('bicycle', 'y')
```

## Objektrektangelns information {#object_square}

Returnerar position och storlek för rektangeln kring det angivna objektet.

<BlockImage module="AI/ObjectDetection" id="object_square" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Objektets namn | 80 objektklasser | - |
| pos | Rullgardinsalternativ | Rektangelinformation | min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'width')
object_detection.object('car', 'area')
```

## Avstånd mellan två objekt {#object_distance}

Returnerar avståndet mellan två objektklasser.

<BlockImage module="AI/ObjectDetection" id="object_distance" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Rullgardinsalternativ | Första objektets namn | 80 objektklasser | - |
| unit2 | Rullgardinsalternativ | Andra objektets namn | 80 objektklasser | - |
| type | Rullgardinsalternativ | Slags avstånd | avstånd (utelämnas eller None), vågrätt avstånd(horizontal), lodrätt avstånd(vertical) | None |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.get_distance('person', 'bicycle')  # avstånd
object_detection.get_distance('person', 'car', 'horizontal')  # vågrätt avstånd
```

## Objektets konfidens {#object_confidence}

Sannolikheten (konfidensen) för att det valda objektet stämmer

<BlockImage module="AI/ObjectDetection" id="object_confidence" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Objektets namn | 80 objektklasser | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_confidence('person')
```

## Modellens tillstånd {#model_state}

Returnerar objektmodellens inläsningsstatus.  
Det returnerar 0 om den inte har lästs in än, 1 medan den läses in och 2 när inläsningen är klar.

<BlockImage module="AI/ObjectDetection" id="model_state" />

### Parametrar

(ingen)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.model_state()
```

## Har ett objekt detekterats? {#detected}

Om ett objekt har hittats

<BlockImage module="AI/ObjectDetection" id="detected" />

### Parametrar

(ingen)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detected()
```

## Har ett visst objekt detekterats? {#object_detected}

Om det valda objektet har hittats

<BlockImage module="AI/ObjectDetection" id="object_detected" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Objektets namn | 80 objektklasser | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_detected('person')
```
