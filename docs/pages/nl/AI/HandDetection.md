---
title: Handdetectie
---

# Handdetectie

## Instantie declareren {#instance}

Voeg je een Handdetectie(HandDetection)-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
hand_detection = HandDetection(0)
# als er meerdere instanties zijn
hand_detection_1 = HandDetection(1)
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Camera instellen {#device}

Stelt de camera voor de handdetectie in.

<BlockImage module="AI/HandDetection" id="device" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Naam van het camera-apparaat | Cameralabel van het systeem | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.device('')
```

## Handmodel laden {#load_model}

Laadt het getrainde handmodel. Deze stap is beslist nodig om de functies van de module „Handdetectie" te gebruiken.

<BlockImage module="AI/HandDetection" id="load_model" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| wait | Aankruisvak | Wachten tot het laden klaar is | TRUE / FALSE | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.load_model(wait=True)
```

## Doel instellen {#max_hands}

Bepaalt of de handdetectie op één hand of op beide handen wordt gebaseerd.

<BlockImage module="AI/HandDetection" id="max_hands" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Aantal handen | één hand(one), beide handen(both) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.max_hands('one')
hand_detection.max_hands('both')
```

## Eenmaal hand detecteren {#detect_once}

Zoekt de hand in het huidige beeld en markeert die precies één keer.

<BlockImage module="AI/HandDetection" id="detect_once" />

### Parameters

(geen)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detect_once()
```

## Continue handdetectie starten / stoppen {#detect_continuous}

Volgt de hand in het huidige beeld voortdurend en markeert die op het scherm.

<BlockImage module="AI/HandDetection" id="detect_continuous" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Actie | starten(start), stoppen(stop) | - |

### Python
```python
hand_detection = HandDetection(0)

# unit = "start"
hand_detection.detect_continuous()
# unit = "stop"
hand_detection.stop()
```

## Resultaat tonen {#display}

Bepaalt of het resultaat van de handdetectie in het camerabeeld wordt getoond of niet.

<BlockImage module="AI/HandDetection" id="display" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| on | Keuzelijstoptie | Weergave ON / OFF | tonen(on=True), verbergen(off=False) | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.display(True)
hand_detection.display(False)
```

## Positie van handdelen {#hand_data}

Geeft de positie van de handpalm / pols van de opgegeven hand terug.

<BlockImage module="AI/HandDetection" id="hand_data" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| side | Keuzelijstoptie | Kant van de hand | links(left), rechts(right) | - |
| unit | Keuzelijstoptie | Deel van de hand | handpalm(palm), pols(wrist) | - |
| pos | Keuzelijstoptie | Soort coördinaat / grootte | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'palm', 'x')
hand_detection.hand('right', 'wrist', 'y')
hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Positie van vingergewrichten {#joint_data}

Geeft de coördinaten van de gewrichten van de opgegeven vinger terug.

<BlockImage module="AI/HandDetection" id="joint_data" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| side | Keuzelijstoptie | Kant van de hand | links(left), rechts(right) | - |
| unit | Keuzelijstoptie | Vinger | duim(thumb), wijsvinger(index), middelvinger(middle), ringvinger(ring), pink(pinky) | - |
| joint | Keuzelijstoptie | Plaats van het gewricht | eerste gewricht(first), tweede gewricht(second), derde gewricht(third), vingertop(last) | - |
| pos | Keuzelijstoptie | Coördinaat | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.finger('left', 'index', 'first', 'x')
hand_detection.finger('right', 'thumb', 'last', 'y')
```

## Handrechthoek {#hand_square}

Geeft de positie en de grootte van de rechthoek rond het opgegeven handgebied terug.

<BlockImage module="AI/HandDetection" id="hand_square" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| side | Keuzelijstoptie | Kant van de hand | links(left), rechts(right) | - |
| unit | Keuzelijstoptie | Deel van de hand | hand(hand), handpalm(palm) | - |
| pos | Keuzelijstoptie | Gegeven over de rechthoek | min. x-positie(min_x), max. x-positie(max_x), min. y-positie(min_y), max. y-positie(max_y), breedte(width), hoogte(height), oppervlak(area) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Afstand tussen hand en hand {#hand_to_hand_distance}

Geeft de afstand tussen twee handdelen terug.

<BlockImage module="AI/HandDetection" id="hand_to_hand_distance" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit1 | Invoer (tekst) | Eerste handdeel | Hand: `'side_unit'` (bijv. `'left_palm'`). side=left/right, unit=palm/wrist/hand | - |
| unit2 | Invoer (tekst) | Tweede handdeel | Hand: `'side_unit'` (bijv. `'right_palm'`). side=left/right, unit=palm/wrist/hand | - |
| type | Keuzelijstoptie | Soort afstand | afstand (weggelaten of None), horizontale afstand(horizontal), verticale afstand(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# hand ↔ hand / afstand
hand_detection.get_distance('left_palm', 'right_palm')  
```

## Afstand tussen hand en vinger {#hand_to_joint_distance}

Geeft de afstand tussen een handdeel en een vingergewricht terug.

<BlockImage module="AI/HandDetection" id="hand_to_joint_distance" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit1 | Invoer (tekst) | Eerste deel | Hand: `'side_unit'` (bijv. `'left_palm'`). side=left/right, unit=palm/wrist/hand | - |
| unit2 | Invoer (tekst) | Tweede deel | Vinger: `'side_unit_joint'` (bijv. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Keuzelijstoptie | Soort afstand | afstand (weggelaten of None), horizontale afstand(horizontal), verticale afstand(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# hand ↔ vingergewricht / horizontale afstand
hand_detection.get_distance('left_palm', 'right_index_first')
```

## Afstand tussen vinger en vinger {#joint_to_joint_distance}

Geeft de afstand tussen twee vingergewrichten terug.

<BlockImage module="AI/HandDetection" id="joint_to_joint_distance" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit1 | Invoer (tekst) | Eerste deel | Vinger: `'side_unit_joint'` (bijv. `'left_thumb_last'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| unit2 | Invoer (tekst) | Tweede deel | Vinger: `'side_unit_joint'` (bijv. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Keuzelijstoptie | Soort afstand | afstand (weggelaten of None), horizontale afstand(horizontal), verticale afstand(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# vingergewricht ↔ vingergewricht / verticale afstand
hand_detection.get_distance('left_thumb_last', 'right_index_first', 'vertical')
```

## Laadstatus van het handmodel {#model_state}

Geeft de laadstatus van het handmodel terug.  
Is het nog niet geladen, dan komt 0 terug, tijdens het laden 1 en na het laden 2.

<BlockImage module="AI/HandDetection" id="model_state" />

### Parameters

(geen)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.model_state()
```

## Hand gedetecteerd? {#detected}

Of er een hand is gevonden

<BlockImage module="AI/HandDetection" id="detected" />

### Parameters

(geen)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detected()
```
