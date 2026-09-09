---
title: Körpererkennung
---

# Körpererkennung

## Instanz deklarieren {#instance}

Wenn du einen Körpererkennung(BodyDetection)-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
body_detection = BodyDetection(0)
# wenn es mehrere Instanzen gibt
body_detection_1 = BodyDetection(1)
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Kamera festlegen {#device}

Legt die Kamera für die Körpererkennung fest.

<BlockImage module="AI/BodyDetection" id="device" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Name des Kameragerätes | Kamerabezeichnung des Systems | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.device('')
```

## Körpermodell laden {#load_model}

Lädt das trainierte Körpermodell. Dieser Schritt ist zwingend nötig, um die Funktionen des Moduls „Körpererkennung" zu verwenden.

<BlockImage module="AI/BodyDetection" id="load_model" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| wait | Kontrollkästchen | Auf Abschluss des Ladens warten | TRUE / FALSE | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.load_model(wait=True)
```

## Körper einmal erkennen {#detect_once}

Findet den Körper im aktuellen Bild und markiert ihn genau einmal.

<BlockImage module="AI/BodyDetection" id="detect_once" />

### Parameter

(keine)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detect_once()
```

## Kontinuierliche Körpererkennung starten / stoppen {#detect_continuous}

Verfolgt den Körper im aktuellen Bild fortlaufend und markiert ihn auf dem Bildschirm.

<BlockImage module="AI/BodyDetection" id="detect_continuous" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Aktion | starten(start), stoppen(stop) | - |

### Python
```python
body_detection = BodyDetection(0)

# unit = "start"
body_detection.detect_continuous()
# unit = "stop"
body_detection.stop()
```

## Ergebnis anzeigen {#display}

Legt fest, ob das Ergebnis der Körpererkennung im Kamerabild angezeigt wird oder nicht.

<BlockImage module="AI/BodyDetection" id="display" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| on | Dropdown-Option | Anzeige ON / OFF | anzeigen(on=True), ausblenden(off=False) | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.display(True)
body_detection.display(False)
```

## Position von Körperteilen {#body_data}

Gibt die Koordinaten der einzelnen Körperteile zurück.

<BlockImage module="AI/BodyDetection" id="body_data" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Körperteil | Nase(nose), Mund(mouth), linkes Auge(left eye), rechtes Auge(right eye), linkes Ohr(left ear), rechtes Ohr(right ear), linke Schulter(left shoulder), rechte Schulter(right shoulder), linker Ellbogen(left elbow), rechter Ellbogen(right elbow), linkes Handgelenk(left wrist), rechtes Handgelenk(right wrist), linke Hand(left hand), rechte Hand(right hand), linke Hüfte(left hip), rechte Hüfte(right hip), linkes Knie(left knee), rechtes Knie(right knee), linker Knöchel(left ankle), rechter Knöchel(right ankle), linker Fuß(left foot), rechter Fuß(right foot) | - |
| pos | Dropdown-Option | Koordinate | x, y | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.nose('x')
body_detection.mouth('y')
body_detection.left_eye('x')
body_detection.right_shoulder('y')
body_detection.left_hand('x')
```

## Abstand zwischen zwei Körperteilen {#body_distance}

Gibt den Abstand zwischen zwei Körperteilen zurück.

<BlockImage module="AI/BodyDetection" id="body_distance" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit1 | Dropdown-Option | erstes Körperteil | (siehe Tabelle der Körperteile oben) | - |
| unit2 | Dropdown-Option | zweites Körperteil | (siehe Tabelle der Körperteile oben) | - |
| type | Dropdown-Option | Art des Abstands | Abstand (weggelassen oder None), horizontaler Abstand(horizontal), vertikaler Abstand(vertical) | None |

### Python
```python
body_detection = BodyDetection(0)

body_detection.get_distance('left_shoulder', 'right_shoulder')  # Abstand
body_detection.get_distance('left_wrist', 'right_wrist', 'horizontal')  # horizontaler Abstand
body_detection.get_distance('left_hip', 'left_knee', 'vertical')  # vertikaler Abstand
```

## Ladezustand des Körpermodells {#model_state}

Gibt den Ladezustand des Körpermodells zurück.  
Ist es noch nicht geladen, wird 0 zurückgegeben, während des Ladens 1 und nach dem Laden 2.

<BlockImage module="AI/BodyDetection" id="model_state" />

### Parameter

(keine)

### Python
```python
body_detection = BodyDetection(0)

body_detection.model_state()
```

## Körper erkannt? {#detected}

Ob ein Körper gefunden wurde

<BlockImage module="AI/BodyDetection" id="detected" />

### Parameter

(keine)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detected()
```
