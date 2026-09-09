---
title: ArUco-markerdetectie
---

# ArUco-markerdetectie

## Instantie declareren {#instance}

Voeg je een ArUco-markerdetectie(ArucoMarker)-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
aruco_marker = ArucoMarker(0)
# als er meerdere instanties zijn
aruco_marker_1 = ArucoMarker(1)
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Camera instellen {#device}

Stelt de camera voor de ArUco-markerdetectie in.

<BlockImage module="AI/ArucoMarker" id="device" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Naam van het camera-apparaat | Cameralabel van het systeem | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.device('')
```

## Maximaal aantal markers instellen {#max_count}

Bepaalt hoeveel markers er maximaal kunnen worden herkend. Het bereik van het aantal markers is 0 ~ 10.

<BlockImage module="AI/ArucoMarker" id="max_count" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Maximaal aantal markers | geheel getal 0 ~ 10 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.max_count(5)
```

## Eenmaal marker detecteren {#detect_once}

Zoekt de markers in het huidige beeld en markeert hun gebieden precies één keer.

<BlockImage module="AI/ArucoMarker" id="detect_once" />

### Parameters

(geen)

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.detect_once()
```

## Continue markerdetectie starten / stoppen {#detect_continuous}

Volgt de markers in het huidige beeld voortdurend en markeert hun gebieden op het scherm.

<BlockImage module="AI/ArucoMarker" id="detect_continuous" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Actie | starten(start), stoppen(stop) | - |

### Python
```python
aruco_marker = ArucoMarker(0)

# unit = "start"
aruco_marker.detect_continuous()
# unit = "stop"
aruco_marker.stop()
```

## Resultaat tonen {#display}

Bepaalt of het resultaat van de markerdetectie in het camerabeeld wordt getoond of niet.

<BlockImage module="AI/ArucoMarker" id="display" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| on | Keuzelijstoptie | Weergave ON / OFF | tonen(on=True), verbergen(off=False) | TRUE |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.display(True)
aruco_marker.display(False)
```

## Markergegevens {#marker_data}

Geeft de positie en de grootte van de marker met de opgegeven ID terug.

<BlockImage module="AI/ArucoMarker" id="marker_data" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Marker-ID | geheel getal ≥ 0 | - |
| unit | Keuzelijstoptie | Soort meetwaarde | x, y, min_x, max_x, min_y, max_y, width, height, area, rotation | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker(0, 'x')
aruco_marker.marker(3, 'area')
```

## Afstand tussen twee markers {#marker_to_marker}

Geeft de afstand tussen twee markers terug.

<BlockImage module="AI/ArucoMarker" id="marker_to_marker" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit1 | Invoer (blok) | ID van de eerste marker | geheel getal ≥ 0 | - |
| unit2 | Invoer (blok) | ID van de tweede marker | geheel getal ≥ 0 | - |
| type | Keuzelijstoptie | Soort afstand | afstand (weggelaten of None), horizontale afstand(horizontal), verticale afstand(vertical) | None |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.get_distance(0, 1)  # afstand
aruco_marker.get_distance(0, 2, 'horizontal')  # horizontale afstand
```

## Marker gedetecteerd? {#marker_detected}

Of er een marker met de opgegeven ID-waarde is gevonden

<BlockImage module="AI/ArucoMarker" id="marker_detected" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Marker-ID | geheel getal ≥ 0 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker_detected(0)
```
