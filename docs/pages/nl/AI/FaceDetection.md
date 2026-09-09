---
title: Gezichtsdetectie
---

# Gezichtsdetectie

## Instantie declareren {#instance}

Voeg je een Gezichtsdetectie(FaceDetection)-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
face_detection = FaceDetection(0)
# als er meerdere instanties zijn
face_detection_1 = FaceDetection(1)
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Camera instellen {#device}

Stelt de camera voor de gezichtsdetectie in.

<BlockImage module="AI/FaceDetection" id="device" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Naam van het camera-apparaat | Cameralabel van het systeem | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.device('')
```

## Gezichtsmodel laden {#load_model}

Laadt het getrainde gezichtsmodel. Deze stap is beslist nodig om de functies van de module „Gezichtsdetectie" te gebruiken.

<BlockImage module="AI/FaceDetection" id="load_model" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| wait | Aankruisvak | Wachten tot het laden klaar is | TRUE / FALSE | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.load_model(wait=True)
```

## Eenmaal gezicht detecteren {#detect_once}

Zoekt het gezicht in het huidige beeld en markeert het precies één keer.

<BlockImage module="AI/FaceDetection" id="detect_once" />

### Parameters

(geen)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detect_once()
```

## Continue gezichtsdetectie starten / stoppen {#detect_continuous}

Volgt het gezicht in het huidige beeld voortdurend en markeert het op het scherm.

<BlockImage module="AI/FaceDetection" id="detect_continuous" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Actie | starten(start), stoppen(stop) | - |

### Python
```python
face_detection = FaceDetection(0)

# unit = "start"
face_detection.detect_continuous()
# unit = "stop"
face_detection.stop()
```

## Resultaat tonen {#display}

Bepaalt of het resultaat van de gezichtsdetectie in het camerabeeld wordt getoond of niet.

<BlockImage module="AI/FaceDetection" id="display" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| on | Keuzelijstoptie | Weergave ON / OFF | tonen(on=True), verbergen(off=False) | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.display(True)
face_detection.display(False)
```

## Positie van gezichtsdelen {#face_data}

Geeft de positiecoördinaten van het gezicht of van een deel van het gezicht terug.

<BlockImage module="AI/FaceDetection" id="face_data" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Deel van het gezicht | gezicht(face), linkeroog(left eye), rechteroog(right eye), linkeroor(left ear), rechteroor(right ear), neus(nose), mond(mouth) | - |
| pos | Keuzelijstoptie | Soort coördinaat | x, y | - |

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

## Gezichtsrechthoek {#face_square}

Geeft de positie en de grootte van de rechthoek rond het gezichtsgebied terug.

<BlockImage module="AI/FaceDetection" id="face_square" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| pos | Keuzelijstoptie | Gegeven over de rechthoek | min. x(min_x), max. x(max_x), min. y(min_y), max. y(max_y), breedte(width), hoogte(height), oppervlak(area) | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('min_x')
face_detection.face('width')
face_detection.face('area')
```

## Afstand tussen twee delen {#distance}

Geeft de afstand tussen twee delen van het gezicht terug.

<BlockImage module="AI/FaceDetection" id="distance" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit1 | Keuzelijstoptie | Eerste deel | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| unit2 | Keuzelijstoptie | Tweede deel | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| type | Keuzelijstoptie | Soort afstand | afstand (weggelaten of None), horizontale afstand(horizontal), verticale afstand(vertical) | None |

### Python
```python
face_detection = FaceDetection(0)

face_detection.get_distance('left_eye', 'right_eye')  # afstand
face_detection.get_distance('left_eye', 'right_eye', 'horizontal')  # horizontale afstand
face_detection.get_distance('nose', 'mouth', 'vertical')  # verticale afstand
```

## Laadstatus van het gezichtsmodel {#model_state}

Geeft de laadstatus van het gezichtsmodel terug.  
Is het nog niet geladen, dan komt 0 terug, tijdens het laden 1 en na het laden 2.

<BlockImage module="AI/FaceDetection" id="model_state" />

### Parameters

(geen)

### Python
```python
face_detection = FaceDetection(0)

face_detection.model_state()
```

## Gezicht gedetecteerd? {#detected}

Of er een gezicht is gevonden

<BlockImage module="AI/FaceDetection" id="detected" />

### Parameters

(geen)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detected()
```
