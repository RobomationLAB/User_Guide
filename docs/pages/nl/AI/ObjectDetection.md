---
title: Objectdetectie
---

# Objectdetectie

## Instantie declareren {#instance}

Voeg je een Objectdetectie(ObjectDetection)-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
object_detection = ObjectDetection(0)
# als er meerdere instanties zijn
object_detection_1 = ObjectDetection(1)
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Camera instellen {#device}

Stelt de camera voor de objectdetectie in.

<BlockImage module="AI/ObjectDetection" id="device" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Naam van het camera-apparaat | Cameralabel van het systeem | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.device('')
```

## Objectmodel laden {#load_model}

Laadt het getrainde objectmodel. Deze stap is beslist nodig om de functies van de module „Objectdetectie" te gebruiken.

<BlockImage module="AI/ObjectDetection" id="load_model" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| wait | Aankruisvak | Wachten tot het laden klaar is | TRUE / FALSE | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.load_model(wait=True)
```

## Maximaal aantal objecten instellen {#max_objects}

Bepaalt hoeveel objecten er maximaal kunnen worden gevonden. Het bereik van het aantal objecten is 0 ~ 10.

<BlockImage module="AI/ObjectDetection" id="max_objects" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Maximaal aantal objecten | geheel getal 0 ~ 10 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.max_objects(5)
```

## Betrouwbaarheidsdrempel instellen {#confidence_threshold}

Stelt de minimale waarschijnlijkheid (betrouwbaarheid) voor de objectdetectie in. Alleen objecten met een waarschijnlijkheid (betrouwbaarheid) boven deze waarde worden op het scherm getoond. Het bereik van de waarschijnlijkheid (betrouwbaarheid) is 0 ~ 1.

<BlockImage module="AI/ObjectDetection" id="confidence_threshold" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Betrouwbaarheidsdrempel | decimaal getal 0 ~ 1 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.confidence_threshold(0.5)
```

## Eenmaal object detecteren {#detect_once}

Zoekt de objecten in het huidige beeld en markeert die precies één keer.

<BlockImage module="AI/ObjectDetection" id="detect_once" />

### Parameters

(geen)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detect_once()
```

## Continue objectdetectie starten / stoppen {#detect_continuous}

Volgt de objecten in het huidige beeld voortdurend en markeert die op het scherm.

<BlockImage module="AI/ObjectDetection" id="detect_continuous" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Actie | starten(start), stoppen(stop) | - |

### Python
```python
object_detection = ObjectDetection(0)

# unit = "start"
object_detection.detect_continuous()
# unit = "stop"
object_detection.stop()
```

## Resultaat tonen {#display}

Bepaalt of het resultaat van de objectdetectie in het camerabeeld wordt getoond of niet.

<BlockImage module="AI/ObjectDetection" id="display" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| on | Keuzelijstoptie | Weergave ON / OFF | tonen(on=True), verbergen(off=False) | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.display(True)
object_detection.display(False)
```

## Positie van objecten {#object_data}

Geeft de positie en de grootte van het opgegeven object terug.

<BlockImage module="AI/ObjectDetection" id="object_data" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Naam van het object | 80 objectklassen (`'person'`, `'bicycle'`, `'car'`, `'motorcycle'`, `'airplane'`, `'bus'`, `'cat'`, `'dog'`, `'apple'`, `'cup'`, `'laptop'`, `'cell_phone'` enzovoort) | - |
| pos | Keuzelijstoptie | Coördinaat | x, y | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'x')
object_detection.object('bicycle', 'y')
```

## Objectrechthoek {#object_square}

Geeft de positie en de grootte van de rechthoek rond het opgegeven objectgebied terug.

<BlockImage module="AI/ObjectDetection" id="object_square" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Naam van het object | 80 objectklassen | - |
| pos | Keuzelijstoptie | Gegeven over de rechthoek | min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'width')
object_detection.object('car', 'area')
```

## Afstand tussen twee objecten {#object_distance}

Geeft de afstand tussen twee objectklassen terug.

<BlockImage module="AI/ObjectDetection" id="object_distance" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit1 | Keuzelijstoptie | Naam van het eerste object | 80 objectklassen | - |
| unit2 | Keuzelijstoptie | Naam van het tweede object | 80 objectklassen | - |
| type | Keuzelijstoptie | Soort afstand | afstand (weggelaten of None), horizontale afstand(horizontal), verticale afstand(vertical) | None |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.get_distance('person', 'bicycle')  # afstand
object_detection.get_distance('person', 'car', 'horizontal')  # horizontale afstand
```

## Betrouwbaarheid van het object {#object_confidence}

De waarschijnlijkheid (betrouwbaarheid) dat het gekozen object juist is herkend

<BlockImage module="AI/ObjectDetection" id="object_confidence" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Naam van het object | 80 objectklassen | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_confidence('person')
```

## Laadstatus van het objectmodel {#model_state}

Geeft de laadstatus van het objectmodel terug.  
Is het nog niet geladen, dan komt 0 terug, tijdens het laden 1 en na het laden 2.

<BlockImage module="AI/ObjectDetection" id="model_state" />

### Parameters

(geen)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.model_state()
```

## Object gedetecteerd? {#detected}

Of er een object is gevonden

<BlockImage module="AI/ObjectDetection" id="detected" />

### Parameters

(geen)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detected()
```

## Bepaald object gedetecteerd? {#object_detected}

Of het gekozen object is gevonden

<BlockImage module="AI/ObjectDetection" id="object_detected" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Naam van het object | 80 objectklassen | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_detected('person')
```
