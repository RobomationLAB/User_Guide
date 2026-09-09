---
title: Gesichtserkennung
---

# Gesichtserkennung

## Instanz deklarieren {#instance}

Wenn du einen Gesichtserkennung(FaceDetection)-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
face_detection = FaceDetection(0)
# wenn es mehrere Instanzen gibt
face_detection_1 = FaceDetection(1)
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Kamera festlegen {#device}

Legt die Kamera für die Gesichtserkennung fest.

<BlockImage module="AI/FaceDetection" id="device" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Name des Kameragerätes | Kamerabezeichnung des Systems | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.device('')
```

## Gesichtsmodell laden {#load_model}

Lädt das trainierte Gesichtsmodell. Dieser Schritt ist zwingend nötig, um die Funktionen des Moduls „Gesichtserkennung" zu verwenden.

<BlockImage module="AI/FaceDetection" id="load_model" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| wait | Kontrollkästchen | Auf Abschluss des Ladens warten | TRUE / FALSE | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.load_model(wait=True)
```

## Gesicht einmal erkennen {#detect_once}

Findet das Gesicht im aktuellen Bild und markiert es genau einmal.

<BlockImage module="AI/FaceDetection" id="detect_once" />

### Parameter

(keine)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detect_once()
```

## Kontinuierliche Gesichtserkennung starten / stoppen {#detect_continuous}

Verfolgt das Gesicht im aktuellen Bild fortlaufend und markiert es auf dem Bildschirm.

<BlockImage module="AI/FaceDetection" id="detect_continuous" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Aktion | starten(start), stoppen(stop) | - |

### Python
```python
face_detection = FaceDetection(0)

# unit = "start"
face_detection.detect_continuous()
# unit = "stop"
face_detection.stop()
```

## Ergebnis anzeigen {#display}

Legt fest, ob das Ergebnis der Gesichtserkennung im Kamerabild angezeigt wird oder nicht.

<BlockImage module="AI/FaceDetection" id="display" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| on | Dropdown-Option | Anzeige ON / OFF | anzeigen(on=True), ausblenden(off=False) | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.display(True)
face_detection.display(False)
```

## Position von Gesichtspartien {#face_data}

Gibt die Positionskoordinaten des Gesichts oder einer Gesichtspartie zurück.

<BlockImage module="AI/FaceDetection" id="face_data" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Gesichtspartie | Gesicht(face), linkes Auge(left eye), rechtes Auge(right eye), linkes Ohr(left ear), rechtes Ohr(right ear), Nase(nose), Mund(mouth) | - |
| pos | Dropdown-Option | Art der Koordinate | x, y | - |

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

## Gesichtsrechteck {#face_square}

Gibt Position und Größe des Rechtecks um den Gesichtsbereich zurück.

<BlockImage module="AI/FaceDetection" id="face_square" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| pos | Dropdown-Option | Angabe zum Rechteck | min. x-Position(min_x), max. x-Position(max_x), min. y-Position(min_y), max. y-Position(max_y), Breite(width), Höhe(height), Fläche(area) | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('min_x')
face_detection.face('width')
face_detection.face('area')
```

## Abstand zwischen zwei Partien {#distance}

Gibt den Abstand zwischen zwei Gesichtspartien zurück.

<BlockImage module="AI/FaceDetection" id="distance" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit1 | Dropdown-Option | erste Partie | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| unit2 | Dropdown-Option | zweite Partie | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| type | Dropdown-Option | Art des Abstands | Abstand (weggelassen oder None), horizontaler Abstand(horizontal), vertikaler Abstand(vertical) | None |

### Python
```python
face_detection = FaceDetection(0)

face_detection.get_distance('left_eye', 'right_eye')  # Abstand
face_detection.get_distance('left_eye', 'right_eye', 'horizontal')  # horizontaler Abstand
face_detection.get_distance('nose', 'mouth', 'vertical')  # vertikaler Abstand
```

## Ladezustand des Gesichtsmodells {#model_state}

Gibt den Ladezustand des Gesichtsmodells zurück.  
Ist es noch nicht geladen, wird 0 zurückgegeben, während des Ladens 1 und nach dem Laden 2.

<BlockImage module="AI/FaceDetection" id="model_state" />

### Parameter

(keine)

### Python
```python
face_detection = FaceDetection(0)

face_detection.model_state()
```

## Gesicht erkannt? {#detected}

Ob ein Gesicht gefunden wurde

<BlockImage module="AI/FaceDetection" id="detected" />

### Parameter

(keine)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detected()
```
