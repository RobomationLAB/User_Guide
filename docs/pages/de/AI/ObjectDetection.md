---
title: Objekterkennung
---

# Objekterkennung

## Instanz deklarieren {#instance}

Wenn du einen Objekterkennung(ObjectDetection)-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
object_detection = ObjectDetection(0)
# wenn es mehrere Instanzen gibt
object_detection_1 = ObjectDetection(1)
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Kamera festlegen {#device}

Legt die Kamera für die Objekterkennung fest.

<BlockImage module="AI/ObjectDetection" id="device" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Name des Kameragerätes | Kamerabezeichnung des Systems | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.device('')
```

## Objektmodell laden {#load_model}

Lädt das trainierte Objektmodell. Dieser Schritt ist zwingend nötig, um die Funktionen des Moduls „Objekterkennung" zu verwenden.

<BlockImage module="AI/ObjectDetection" id="load_model" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| wait | Kontrollkästchen | Auf Abschluss des Ladens warten | TRUE / FALSE | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.load_model(wait=True)
```

## Maximale Objektanzahl einstellen {#max_objects}

Legt fest, wie viele Objekte höchstens gefunden werden können. Der Bereich für die Objektanzahl ist 0 ~ 10.

<BlockImage module="AI/ObjectDetection" id="max_objects" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | maximale Objektanzahl | ganze Zahl 0 ~ 10 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.max_objects(5)
```

## Konfidenzschwelle einstellen {#confidence_threshold}

Legt die Mindestwahrscheinlichkeit (Konfidenz) für die Objekterkennung fest. Nur Objekte mit einer Wahrscheinlichkeit (Konfidenz) über diesem Wert werden auf dem Bildschirm angezeigt. Der Bereich der Wahrscheinlichkeit (Konfidenz) ist 0 ~ 1.

<BlockImage module="AI/ObjectDetection" id="confidence_threshold" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Konfidenzschwelle | Dezimalzahl 0 ~ 1 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.confidence_threshold(0.5)
```

## Objekt einmal erkennen {#detect_once}

Findet die Objekte im aktuellen Bild und markiert sie genau einmal.

<BlockImage module="AI/ObjectDetection" id="detect_once" />

### Parameter

(keine)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detect_once()
```

## Kontinuierliche Objekterkennung starten / stoppen {#detect_continuous}

Verfolgt die Objekte im aktuellen Bild fortlaufend und markiert sie auf dem Bildschirm.

<BlockImage module="AI/ObjectDetection" id="detect_continuous" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Aktion | starten(start), stoppen(stop) | - |

### Python
```python
object_detection = ObjectDetection(0)

# unit = "start"
object_detection.detect_continuous()
# unit = "stop"
object_detection.stop()
```

## Ergebnis anzeigen {#display}

Legt fest, ob das Ergebnis der Objekterkennung im Kamerabild angezeigt wird oder nicht.

<BlockImage module="AI/ObjectDetection" id="display" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| on | Dropdown-Option | Anzeige ON / OFF | anzeigen(on=True), ausblenden(off=False) | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.display(True)
object_detection.display(False)
```

## Position von Objekten {#object_data}

Gibt Position und Größe des angegebenen Objekts zurück.

<BlockImage module="AI/ObjectDetection" id="object_data" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Name des Objekts | 80 Objektklassen (`'person'`, `'bicycle'`, `'car'`, `'motorcycle'`, `'airplane'`, `'bus'`, `'cat'`, `'dog'`, `'apple'`, `'cup'`, `'laptop'`, `'cell_phone'` usw.) | - |
| pos | Dropdown-Option | Koordinate | x, y | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'x')
object_detection.object('bicycle', 'y')
```

## Objektrechteck {#object_square}

Gibt Position und Größe des Rechtecks um den angegebenen Objektbereich zurück.

<BlockImage module="AI/ObjectDetection" id="object_square" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Name des Objekts | 80 Objektklassen | - |
| pos | Dropdown-Option | Angabe zum Rechteck | min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'width')
object_detection.object('car', 'area')
```

## Abstand zwischen zwei Objekten {#object_distance}

Gibt den Abstand zwischen zwei Objektklassen zurück.

<BlockImage module="AI/ObjectDetection" id="object_distance" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit1 | Dropdown-Option | Name des ersten Objekts | 80 Objektklassen | - |
| unit2 | Dropdown-Option | Name des zweiten Objekts | 80 Objektklassen | - |
| type | Dropdown-Option | Art des Abstands | Abstand (weggelassen oder None), horizontaler Abstand(horizontal), vertikaler Abstand(vertical) | None |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.get_distance('person', 'bicycle')  # Abstand
object_detection.get_distance('person', 'car', 'horizontal')  # horizontaler Abstand
```

## Konfidenz des Objekts {#object_confidence}

Die Wahrscheinlichkeit (Konfidenz), dass das gewählte Objekt richtig erkannt wurde

<BlockImage module="AI/ObjectDetection" id="object_confidence" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Name des Objekts | 80 Objektklassen | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_confidence('person')
```

## Ladezustand des Objektmodells {#model_state}

Gibt den Ladezustand des Objektmodells zurück.  
Ist es noch nicht geladen, wird 0 zurückgegeben, während des Ladens 1 und nach dem Laden 2.

<BlockImage module="AI/ObjectDetection" id="model_state" />

### Parameter

(keine)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.model_state()
```

## Objekt erkannt? {#detected}

Ob ein Objekt gefunden wurde

<BlockImage module="AI/ObjectDetection" id="detected" />

### Parameter

(keine)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detected()
```

## Bestimmtes Objekt erkannt? {#object_detected}

Ob das gewählte Objekt gefunden wurde

<BlockImage module="AI/ObjectDetection" id="object_detected" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Name des Objekts | 80 Objektklassen | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_detected('person')
```
