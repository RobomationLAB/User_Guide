---
title: Gedetailleerde gezichtsdetectie
---

# Gedetailleerde gezichtsdetectie

## Instantie declareren {#instance}

Voeg je een Gedetailleerde gezichtsdetectie(DetailedFaceDetection)-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
detailed_face_detection = DetailedFaceDetection(0)
# als er meerdere instanties zijn
detailed_face_detection_1 = DetailedFaceDetection(1)
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Camera instellen {#device}

Stelt de camera voor de gedetailleerde gezichtsdetectie in.

<BlockImage module="AI/DetailedFaceDetection" id="device" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Naam van het camera-apparaat | Cameralabel van het systeem | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.device('')
```

## Gezichtsmodel laden {#load_model}

Laadt het getrainde gezichtsmodel. Deze stap is beslist nodig om de functies van de module „Gedetailleerde gezichtsdetectie" te gebruiken.

<BlockImage module="AI/DetailedFaceDetection" id="load_model" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| wait | Aankruisvak | Wachten tot het laden klaar is | TRUE / FALSE | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.load_model(wait=True)
```

## Eenmaal gezicht detecteren {#detect_once}

Zoekt het gezicht in het huidige beeld en markeert het precies één keer.

<BlockImage module="AI/DetailedFaceDetection" id="detect_once" />

### Parameters

(geen)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detect_once()
```

## Continue gezichtsdetectie starten / stoppen {#detect_continuous}

Volgt het gezicht in het huidige beeld voortdurend en markeert het op het scherm.

<BlockImage module="AI/DetailedFaceDetection" id="detect_continuous" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Actie | starten(start), stoppen(stop) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

# unit = "start"
detailed_face_detection.detect_continuous()
# unit = "stop"
detailed_face_detection.stop()
```

## Resultaat tonen {#display}

Bepaalt of het resultaat van de gezichtsdetectie in het camerabeeld wordt getoond of niet.

<BlockImage module="AI/DetailedFaceDetection" id="display" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| on | Keuzelijstoptie | Weergave ON / OFF | tonen(on=True), verbergen(off=False) | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.display(True)
detailed_face_detection.display(False)
```

## Coördinaat van gezichtsdelen {#face_data}

Geeft de coördinaat per deel van het gezicht terug.

<BlockImage module="AI/DetailedFaceDetection" id="face_data" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Deel van het gezicht | gezicht(face), linkeroog(left eye), rechteroog(right eye), mond(mouth), neus(nose), bovenlip(upper lip), onderlip(lower lip), linkermondhoek(left lip), rechtermondhoek(right lip), linkerpupil(left pupil), rechterpupil(right pupil) | - |
| pos | Keuzelijstoptie | Coördinaat | x, y | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('x')
detailed_face_detection.left_eye('y')
detailed_face_detection.upper_lip('x')
detailed_face_detection.right_pupil('y')
```

## Rechthoek van gezichtsdelen {#face_square}

Geeft de positie en de grootte van de rechthoek rond een deel van het gezicht terug.

<BlockImage module="AI/DetailedFaceDetection" id="face_square" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Deel van het gezicht | gezicht(face), linkeroog(left eye), rechteroog(right eye), mond(mouth) | - |
| pos | Keuzelijstoptie | Gegeven over de rechthoek | min. x(min_x), max. x(max_x), min. y(min_y), max. y(max_y), breedte(width), hoogte(height), oppervlak(area) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('min_x')
detailed_face_detection.left_eye('area')
```

## Afstand tussen twee delen {#distance}

Geeft de afstand tussen twee delen van het gezicht terug.

<BlockImage module="AI/DetailedFaceDetection" id="distance" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit1 | Keuzelijstoptie | Eerste deel | Naam van een deel van het gezicht | - |
| unit2 | Keuzelijstoptie | Tweede deel | Naam van een deel van het gezicht | - |
| type | Keuzelijstoptie | Soort afstand | afstand (weggelaten of None), horizontale afstand(horizontal), verticale afstand(vertical) | None |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.get_distance('left_eye', 'right_eye')  # afstand
detailed_face_detection.get_distance('left_pupil', 'right_pupil', 'horizontal')  # horizontale afstand
detailed_face_detection.get_distance('upper_lip', 'lower_lip', 'vertical')  # verticale afstand
```

## Laadstatus van het gezichtsmodel {#model_state}

Geeft de laadstatus van het gezichtsmodel terug.  
Is het nog niet geladen, dan komt 0 terug, tijdens het laden 1 en na het laden 2.

<BlockImage module="AI/DetailedFaceDetection" id="model_state" />

### Parameters

(geen)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.model_state()
```

## Gezicht gedetecteerd? {#detected}

Of er een gezicht is gevonden

<BlockImage module="AI/DetailedFaceDetection" id="detected" />

### Parameters

(geen)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detected()
```
