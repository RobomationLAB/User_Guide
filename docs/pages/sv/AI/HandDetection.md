---
title: Handdetektering
---

# Handdetektering

## Instansdeklaration {#instance}

När du lägger till ett Handdetektering(HandDetection)-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
hand_detection = HandDetection(0)
# När det finns flera instanser
hand_detection_1 = HandDetection(1)
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Välja kameraenhet {#device}

Ställer in vilken kamera som ska användas för handdetekteringen.

<BlockImage module="AI/HandDetection" id="device" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Kamerans enhetsnamn | Systemets kameraetikett | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.device('')
```

## Ladda modellen {#load_model}

Läser in den tränade handmodellen. Det här steget krävs för att kunna använda funktionerna i modulen Handdetektering.

<BlockImage module="AI/HandDetection" id="load_model" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| wait | Kryssruta | Om körningen ska vänta tills inläsningen är klar | TRUE / FALSE | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.load_model(wait=True)
```

## Ställa in högsta antal händer {#max_hands}

Bestämmer om detekteringen ska utgå från en hand eller från båda händerna.

<BlockImage module="AI/HandDetection" id="max_hands" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Antal händer | en hand(one), två händer(both) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.max_hands('one')
hand_detection.max_hands('both')
```

## Detektera en gång {#detect_once}

Hittar händerna som finns i bilden just nu och visar dem en enda gång.

<BlockImage module="AI/HandDetection" id="detect_once" />

### Parametrar

(ingen)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detect_once()
```

## Starta / stoppa kontinuerlig detektering {#detect_continuous}

Följer händerna som finns i bilden hela tiden och visar dem på skärmen.

<BlockImage module="AI/HandDetection" id="detect_continuous" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Åtgärd | starta(start), stoppa(stop) | - |

### Python
```python
hand_detection = HandDetection(0)

# unit = "start"
hand_detection.detect_continuous()
# unit = "stop"
hand_detection.stop()
```

## Visa resultatet {#display}

Bestämmer om resultatet av handdetekteringen ska visas i kamerabilden eller inte.

<BlockImage module="AI/HandDetection" id="display" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| on | Rullgardinsalternativ | Visning PÅ / AV | visa(on=True), dölj(off=False) | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.display(True)
hand_detection.display(False)
```

## Handdelarnas koordinater {#hand_data}

Returnerar positionen för handflatan eller handleden på den angivna handen.

<BlockImage module="AI/HandDetection" id="hand_data" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| side | Rullgardinsalternativ | Handens sida | vänster(left), höger(right) | - |
| unit | Rullgardinsalternativ | Handdel | handflata(palm), handled(wrist) | - |
| pos | Rullgardinsalternativ | Slags koordinat/storlek | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'palm', 'x')
hand_detection.hand('right', 'wrist', 'y')
hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Fingerledernas koordinater {#joint_data}

Returnerar koordinaterna för lederna på det angivna fingret.

<BlockImage module="AI/HandDetection" id="joint_data" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| side | Rullgardinsalternativ | Handens sida | vänster(left), höger(right) | - |
| unit | Rullgardinsalternativ | Finger | tumme(thumb), pekfinger(index), långfinger(middle), ringfinger(ring), lillfinger(pinky) | - |
| joint | Rullgardinsalternativ | Ledens position | första leden(first), andra leden(second), tredje leden(third), spetsen(last) | - |
| pos | Rullgardinsalternativ | Koordinat | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.finger('left', 'index', 'first', 'x')
hand_detection.finger('right', 'thumb', 'last', 'y')
```

## Handrektangelns information {#hand_square}

Returnerar position och storlek för rektangeln kring den angivna handen.

<BlockImage module="AI/HandDetection" id="hand_square" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| side | Rullgardinsalternativ | Handens sida | vänster(left), höger(right) | - |
| unit | Rullgardinsalternativ | Handdel | hand(hand), handflata(palm) | - |
| pos | Rullgardinsalternativ | Rektangelinformation | minsta x-position(min_x), största x-position(max_x), minsta y-position(min_y), största y-position(max_y), bredd(width), höjd(height), area(area) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Avstånd mellan hand och hand {#hand_to_hand_distance}

Returnerar avståndet mellan två handdelar.

<BlockImage module="AI/HandDetection" id="hand_to_hand_distance" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Inmatning (sträng) | Första handdelen | Hand: `'side_unit'` (t.ex. `'left_palm'`). side=left/right, unit=palm/wrist/hand  | - |
| unit2 | Inmatning (sträng) | Andra handdelen | Hand: `'side_unit'` (t.ex. `'right_palm'`). side=left/right, unit=palm/wrist/hand | - |
| type | Rullgardinsalternativ | Slags avstånd | avstånd (utelämnas eller None), vågrätt avstånd(horizontal), lodrätt avstånd(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# hand ↔ hand / avstånd
hand_detection.get_distance('left_palm', 'right_palm')  
```

## Avstånd mellan hand och finger {#hand_to_joint_distance}

Returnerar avståndet mellan en handdel och en fingerled.

<BlockImage module="AI/HandDetection" id="hand_to_joint_distance" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Inmatning (sträng) | Första delen | Hand: `'side_unit'` (t.ex. `'left_palm'`).side=left/right, unit=palm/wrist/hand | - |
| unit2 | Inmatning (sträng) | Andra delen | Finger: `'side_unit_joint'` (t.ex. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Rullgardinsalternativ | Slags avstånd | avstånd (utelämnas eller None), vågrätt avstånd(horizontal), lodrätt avstånd(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# hand ↔ fingerled / vågrätt avstånd
hand_detection.get_distance('left_palm', 'right_index_first')
```

## Avstånd mellan finger och finger {#joint_to_joint_distance}

Returnerar avståndet mellan två fingerleder.

<BlockImage module="AI/HandDetection" id="joint_to_joint_distance" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Inmatning (sträng) | Första delen | Finger: `'side_unit_joint'` (t.ex. `'left_thumb_last'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| unit2 | Inmatning (sträng) | Andra delen | Finger: `'side_unit_joint'` (t.ex. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Rullgardinsalternativ | Slags avstånd | avstånd (utelämnas eller None), vågrätt avstånd(horizontal), lodrätt avstånd(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# fingerled ↔ fingerled / lodrätt avstånd
hand_detection.get_distance('left_thumb_last', 'right_index_first', 'vertical')
```

## Modellens tillstånd {#model_state}

Returnerar handmodellens laddningsstatus.  
Det returnerar 0 om den inte har lästs in än, 1 medan den läses in och 2 när inläsningen är klar.

<BlockImage module="AI/HandDetection" id="model_state" />

### Parametrar

(ingen)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.model_state()
```

## Har en hand detekterats? {#detected}

Om en hand har hittats

<BlockImage module="AI/HandDetection" id="detected" />

### Parametrar

(ingen)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detected()
```
