---
title: Lichaamsdetectie
---

# Lichaamsdetectie

## Instantie declareren {#instance}

Voeg je een Lichaamsdetectie(BodyDetection)-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
body_detection = BodyDetection(0)
# als er meerdere instanties zijn
body_detection_1 = BodyDetection(1)
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Camera instellen {#device}

Stelt de camera voor de lichaamsdetectie in.

<BlockImage module="AI/BodyDetection" id="device" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Naam van het camera-apparaat | Cameralabel van het systeem | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.device('')
```

## Lichaamsmodel laden {#load_model}

Laadt het getrainde lichaamsmodel. Deze stap is beslist nodig om de functies van de module „Lichaamsdetectie" te gebruiken.

<BlockImage module="AI/BodyDetection" id="load_model" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| wait | Aankruisvak | Wachten tot het laden klaar is | TRUE / FALSE | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.load_model(wait=True)
```

## Eenmaal lichaam detecteren {#detect_once}

Zoekt het lichaam in het huidige beeld en markeert het precies één keer.

<BlockImage module="AI/BodyDetection" id="detect_once" />

### Parameters

(geen)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detect_once()
```

## Continue lichaamsdetectie starten / stoppen {#detect_continuous}

Volgt het lichaam in het huidige beeld voortdurend en markeert het op het scherm.

<BlockImage module="AI/BodyDetection" id="detect_continuous" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Actie | starten(start), stoppen(stop) | - |

### Python
```python
body_detection = BodyDetection(0)

# unit = "start"
body_detection.detect_continuous()
# unit = "stop"
body_detection.stop()
```

## Resultaat tonen {#display}

Bepaalt of het resultaat van de lichaamsdetectie in het camerabeeld wordt getoond of niet.

<BlockImage module="AI/BodyDetection" id="display" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| on | Keuzelijstoptie | Weergave ON / OFF | tonen(on=True), verbergen(off=False) | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.display(True)
body_detection.display(False)
```

## Coördinaat van lichaamsdelen {#body_data}

Geeft de coördinaat per lichaamsdeel terug.

<BlockImage module="AI/BodyDetection" id="body_data" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Lichaamsdeel | neus(nose), mond(mouth), linkeroog(left eye), rechteroog(right eye), linkeroor(left ear), rechteroor(right ear), linkerschouder(left shoulder), rechterschouder(right shoulder), linkerelleboog(left elbow), rechterelleboog(right elbow), linkerpols(left wrist), rechterpols(right wrist), linkerhand(left hand), rechterhand(right hand), linkerheup(left hip), rechterheup(right hip), linkerknie(left knee), rechterknie(right knee), linkerenkel(left ankle), rechterenkel(right ankle), linkervoet(left foot), rechtervoet(right foot) | - |
| pos | Keuzelijstoptie | Coördinaat | x, y | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.nose('x')
body_detection.mouth('y')
body_detection.left_eye('x')
body_detection.right_shoulder('y')
body_detection.left_hand('x')
```

## Afstand tussen twee delen {#body_distance}

Geeft de afstand tussen twee lichaamsdelen terug.

<BlockImage module="AI/BodyDetection" id="body_distance" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit1 | Keuzelijstoptie | Eerste lichaamsdeel | (zie de tabel met lichaamsdelen hierboven) | - |
| unit2 | Keuzelijstoptie | Tweede lichaamsdeel | (zie de tabel met lichaamsdelen hierboven) | - |
| type | Keuzelijstoptie | Soort afstand | afstand (weggelaten of None), horizontale afstand(horizontal), verticale afstand(vertical) | None |

### Python
```python
body_detection = BodyDetection(0)

body_detection.get_distance('left_shoulder', 'right_shoulder')  # afstand
body_detection.get_distance('left_wrist', 'right_wrist', 'horizontal')  # horizontale afstand
body_detection.get_distance('left_hip', 'left_knee', 'vertical')  # verticale afstand
```

## Laadstatus van het lichaamsmodel {#model_state}

Geeft de laadstatus van het lichaamsmodel terug.  
Is het nog niet geladen, dan komt 0 terug, tijdens het laden 1 en na het laden 2.

<BlockImage module="AI/BodyDetection" id="model_state" />

### Parameters

(geen)

### Python
```python
body_detection = BodyDetection(0)

body_detection.model_state()
```

## Lichaam gedetecteerd? {#detected}

Of er een lichaam is gevonden

<BlockImage module="AI/BodyDetection" id="detected" />

### Parameters

(geen)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detected()
```
