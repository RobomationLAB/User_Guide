---
title: Handerkennung
---

# Handerkennung

## Instanz deklarieren {#instance}

Wenn du einen Handerkennung(HandDetection)-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
hand_detection = HandDetection(0)
# wenn es mehrere Instanzen gibt
hand_detection_1 = HandDetection(1)
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Kamera festlegen {#device}

Legt die Kamera für die Handerkennung fest.

<BlockImage module="AI/HandDetection" id="device" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Name des Kameragerätes | Kamerabezeichnung des Systems | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.device('')
```

## Handmodell laden {#load_model}

Lädt das trainierte Handmodell. Dieser Schritt ist zwingend nötig, um die Funktionen des Moduls „Handerkennung" zu verwenden.

<BlockImage module="AI/HandDetection" id="load_model" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| wait | Kontrollkästchen | Auf Abschluss des Ladens warten | TRUE / FALSE | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.load_model(wait=True)
```

## Ziel setzen {#max_hands}

Legt fest, ob bei der Handerkennung eine Hand oder beide Hände als Grundlage dienen.

<BlockImage module="AI/HandDetection" id="max_hands" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Anzahl der Hände | eine Hand(one), beide Hände(both) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.max_hands('one')
hand_detection.max_hands('both')
```

## Hand einmal erkennen {#detect_once}

Findet die Hand im aktuellen Bild und markiert sie genau einmal.

<BlockImage module="AI/HandDetection" id="detect_once" />

### Parameter

(keine)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detect_once()
```

## Kontinuierliche Handerkennung starten / stoppen {#detect_continuous}

Verfolgt die Hand im aktuellen Bild fortlaufend und markiert sie auf dem Bildschirm.

<BlockImage module="AI/HandDetection" id="detect_continuous" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Aktion | starten(start), stoppen(stop) | - |

### Python
```python
hand_detection = HandDetection(0)

# unit = "start"
hand_detection.detect_continuous()
# unit = "stop"
hand_detection.stop()
```

## Ergebnis anzeigen {#display}

Legt fest, ob das Ergebnis der Handerkennung im Kamerabild angezeigt wird oder nicht.

<BlockImage module="AI/HandDetection" id="display" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| on | Dropdown-Option | Anzeige ON / OFF | anzeigen(on=True), ausblenden(off=False) | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.display(True)
hand_detection.display(False)
```

## Position von Handpartien {#hand_data}

Gibt die Position von Handfläche / Handgelenk der angegebenen Hand zurück.

<BlockImage module="AI/HandDetection" id="hand_data" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| side | Dropdown-Option | Seite der Hand | links(left), rechts(right) | - |
| unit | Dropdown-Option | Handpartie | Handfläche(palm), Handgelenk(wrist) | - |
| pos | Dropdown-Option | Art der Koordinate / Größe | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'palm', 'x')
hand_detection.hand('right', 'wrist', 'y')
hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Position von Fingergelenken {#joint_data}

Gibt die Koordinaten der Gelenke des angegebenen Fingers zurück.

<BlockImage module="AI/HandDetection" id="joint_data" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| side | Dropdown-Option | Seite der Hand | links(left), rechts(right) | - |
| unit | Dropdown-Option | Finger | Daumen(thumb), Zeigefinger(index), Mittelfinger(middle), Ringfinger(ring), kleiner Finger(pinky) | - |
| joint | Dropdown-Option | Lage des Gelenks | erstes Gelenk(first), zweites Gelenk(second), drittes Gelenk(third), Fingerspitze(last) | - |
| pos | Dropdown-Option | Koordinate | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.finger('left', 'index', 'first', 'x')
hand_detection.finger('right', 'thumb', 'last', 'y')
```

## Handrechteck {#hand_square}

Gibt Position und Größe des Rechtecks um den angegebenen Handbereich zurück.

<BlockImage module="AI/HandDetection" id="hand_square" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| side | Dropdown-Option | Seite der Hand | links(left), rechts(right) | - |
| unit | Dropdown-Option | Handpartie | Hand(hand), Handfläche(palm) | - |
| pos | Dropdown-Option | Angabe zum Rechteck | min. x-Position(min_x), max. x-Position(max_x), min. y-Position(min_y), max. y-Position(max_y), Breite(width), Höhe(height), Fläche(area) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Abstand zwischen Hand und Hand {#hand_to_hand_distance}

Gibt den Abstand zwischen zwei Handpartien zurück.

<BlockImage module="AI/HandDetection" id="hand_to_hand_distance" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit1 | Eingabe (Zeichenkette) | erste Handpartie | Hand: `'side_unit'` (z. B. `'left_palm'`). side=left/right, unit=palm/wrist/hand | - |
| unit2 | Eingabe (Zeichenkette) | zweite Handpartie | Hand: `'side_unit'` (z. B. `'right_palm'`). side=left/right, unit=palm/wrist/hand | - |
| type | Dropdown-Option | Art des Abstands | Abstand (weggelassen oder None), horizontaler Abstand(horizontal), vertikaler Abstand(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# Hand ↔ Hand / Abstand
hand_detection.get_distance('left_palm', 'right_palm')  
```

## Abstand zwischen Hand und Finger {#hand_to_joint_distance}

Gibt den Abstand zwischen einer Handpartie und einem Fingergelenk zurück.

<BlockImage module="AI/HandDetection" id="hand_to_joint_distance" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit1 | Eingabe (Zeichenkette) | erste Partie | Hand: `'side_unit'` (z. B. `'left_palm'`). side=left/right, unit=palm/wrist/hand | - |
| unit2 | Eingabe (Zeichenkette) | zweite Partie | Finger: `'side_unit_joint'` (z. B. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Dropdown-Option | Art des Abstands | Abstand (weggelassen oder None), horizontaler Abstand(horizontal), vertikaler Abstand(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# Hand ↔ Fingergelenk / horizontaler Abstand
hand_detection.get_distance('left_palm', 'right_index_first')
```

## Abstand zwischen Finger und Finger {#joint_to_joint_distance}

Gibt den Abstand zwischen zwei Fingergelenken zurück.

<BlockImage module="AI/HandDetection" id="joint_to_joint_distance" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit1 | Eingabe (Zeichenkette) | erste Partie | Finger: `'side_unit_joint'` (z. B. `'left_thumb_last'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| unit2 | Eingabe (Zeichenkette) | zweite Partie | Finger: `'side_unit_joint'` (z. B. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Dropdown-Option | Art des Abstands | Abstand (weggelassen oder None), horizontaler Abstand(horizontal), vertikaler Abstand(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# Fingergelenk ↔ Fingergelenk / vertikaler Abstand
hand_detection.get_distance('left_thumb_last', 'right_index_first', 'vertical')
```

## Ladezustand des Handmodells {#model_state}

Gibt den Ladezustand des Handmodells zurück.  
Ist es noch nicht geladen, wird 0 zurückgegeben, während des Ladens 1 und nach dem Laden 2.

<BlockImage module="AI/HandDetection" id="model_state" />

### Parameter

(keine)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.model_state()
```

## Hand erkannt? {#detected}

Ob eine Hand gefunden wurde

<BlockImage module="AI/HandDetection" id="detected" />

### Parameter

(keine)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detected()
```
