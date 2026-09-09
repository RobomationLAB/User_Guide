---
title: Detaillierte Gesichtserkennung
---

# Detaillierte Gesichtserkennung

## Instanz deklarieren {#instance}

Wenn du einen Detaillierte Gesichtserkennung(DetailedFaceDetection)-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
detailed_face_detection = DetailedFaceDetection(0)
# wenn es mehrere Instanzen gibt
detailed_face_detection_1 = DetailedFaceDetection(1)
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Kamera festlegen {#device}

Legt die Kamera für die detaillierte Gesichtserkennung fest.

<BlockImage module="AI/DetailedFaceDetection" id="device" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Name des Kameragerätes | Kamerabezeichnung des Systems | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.device('')
```

## Gesichtsmodell laden {#load_model}

Lädt das trainierte Gesichtsmodell. Dieser Schritt ist zwingend nötig, um die Funktionen des Moduls „Detaillierte Gesichtserkennung" zu verwenden.

<BlockImage module="AI/DetailedFaceDetection" id="load_model" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| wait | Kontrollkästchen | Auf Abschluss des Ladens warten | TRUE / FALSE | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.load_model(wait=True)
```

## Gesicht einmal erkennen {#detect_once}

Findet das Gesicht im aktuellen Bild und markiert es genau einmal.

<BlockImage module="AI/DetailedFaceDetection" id="detect_once" />

### Parameter

(keine)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detect_once()
```

## Kontinuierliche Gesichtserkennung starten / stoppen {#detect_continuous}

Verfolgt das Gesicht im aktuellen Bild fortlaufend und markiert es auf dem Bildschirm.

<BlockImage module="AI/DetailedFaceDetection" id="detect_continuous" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Aktion | starten(start), stoppen(stop) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

# unit = "start"
detailed_face_detection.detect_continuous()
# unit = "stop"
detailed_face_detection.stop()
```

## Ergebnis anzeigen {#display}

Legt fest, ob das Ergebnis der detaillierten Gesichtserkennung im Kamerabild angezeigt wird oder nicht.

<BlockImage module="AI/DetailedFaceDetection" id="display" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| on | Dropdown-Option | Anzeige ON / OFF | anzeigen(on=True), ausblenden(off=False) | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.display(True)
detailed_face_detection.display(False)
```

## Koordinaten von Gesichtspartien {#face_data}

Gibt die Koordinaten der einzelnen Gesichtspartien zurück.

<BlockImage module="AI/DetailedFaceDetection" id="face_data" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Gesichtspartie | Gesicht(face), linkes Auge(left eye), rechtes Auge(right eye), Mund(mouth), Nase(nose), Oberlippe(upper lip), Unterlippe(lower lip), linker Mundwinkel(left lip), rechter Mundwinkel(right lip), linke Pupille(left pupil), rechte Pupille(right pupil) | - |
| pos | Dropdown-Option | Koordinate | x, y | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('x')
detailed_face_detection.left_eye('y')
detailed_face_detection.upper_lip('x')
detailed_face_detection.right_pupil('y')
```

## Rechteck einer Gesichtspartie {#face_square}

Gibt Position und Größe des Rechtecks um die einzelnen Gesichtspartien zurück.

<BlockImage module="AI/DetailedFaceDetection" id="face_square" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Gesichtspartie | Gesicht(face), linkes Auge(left eye), rechtes Auge(right eye), Mund(mouth) | - |
| pos | Dropdown-Option | Angabe zum Rechteck | min. x-Position(min_x), max. x-Position(max_x), min. y-Position(min_y), max. y-Position(max_y), Breite(width), Höhe(height), Fläche(area) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('min_x')
detailed_face_detection.left_eye('area')
```

## Abstand zwischen zwei Partien {#distance}

Gibt den Abstand zwischen zwei Gesichtspartien zurück.

<BlockImage module="AI/DetailedFaceDetection" id="distance" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit1 | Dropdown-Option | erste Partie | Name einer Gesichtspartie | - |
| unit2 | Dropdown-Option | zweite Partie | Name einer Gesichtspartie | - |
| type | Dropdown-Option | Art des Abstands | Abstand (weggelassen oder None), horizontaler Abstand(horizontal), vertikaler Abstand(vertical) | None |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.get_distance('left_eye', 'right_eye')  # Abstand
detailed_face_detection.get_distance('left_pupil', 'right_pupil', 'horizontal')  # horizontaler Abstand
detailed_face_detection.get_distance('upper_lip', 'lower_lip', 'vertical')  # vertikaler Abstand
```

## Ladezustand des Gesichtsmodells {#model_state}

Gibt den Ladezustand des Gesichtsmodells zurück.  
Ist es noch nicht geladen, wird 0 zurückgegeben, während des Ladens 1 und nach dem Laden 2.

<BlockImage module="AI/DetailedFaceDetection" id="model_state" />

### Parameter

(keine)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.model_state()
```

## Gesicht erkannt? {#detected}

Ob ein Gesicht gefunden wurde

<BlockImage module="AI/DetailedFaceDetection" id="detected" />

### Parameter

(keine)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detected()
```
