---
title: ArUco-Marker-Erkennung
---

# ArUco-Marker-Erkennung

## Instanz deklarieren {#instance}

Wenn du einen ArUco-Marker-Erkennung(ArucoMarker)-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
aruco_marker = ArucoMarker(0)
# wenn es mehrere Instanzen gibt
aruco_marker_1 = ArucoMarker(1)
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Kamera festlegen {#device}

Legt die Kamera für die ArUco-Marker-Erkennung fest.

<BlockImage module="AI/ArucoMarker" id="device" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Name des Kameragerätes | Kamerabezeichnung des Systems | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.device('')
```

## Maximale Markeranzahl einstellen {#max_count}

Legt fest, wie viele Marker höchstens erkannt werden können. Der Bereich für die Markeranzahl ist 0 ~ 10.

<BlockImage module="AI/ArucoMarker" id="max_count" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | maximale Markeranzahl | ganze Zahl 0 ~ 10 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.max_count(5)
```

## Marker einmal erkennen {#detect_once}

Findet die Marker im aktuellen Bild und markiert deren Bereiche genau einmal.

<BlockImage module="AI/ArucoMarker" id="detect_once" />

### Parameter

(keine)

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.detect_once()
```

## Kontinuierliche Markererkennung starten / stoppen {#detect_continuous}

Verfolgt die Marker im aktuellen Bild fortlaufend und markiert deren Bereiche auf dem Bildschirm.

<BlockImage module="AI/ArucoMarker" id="detect_continuous" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Aktion | starten(start), stoppen(stop) | - |

### Python
```python
aruco_marker = ArucoMarker(0)

# unit = "start"
aruco_marker.detect_continuous()
# unit = "stop"
aruco_marker.stop()
```

## Ergebnis anzeigen {#display}

Legt fest, ob das Ergebnis der Markererkennung im Kamerabild angezeigt wird oder nicht.

<BlockImage module="AI/ArucoMarker" id="display" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| on | Dropdown-Option | Anzeige ON / OFF | anzeigen(on=True), ausblenden(off=False) | TRUE |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.display(True)
aruco_marker.display(False)
```

## Markerdaten {#marker_data}

Gibt Position und Größe des Markers mit der angegebenen ID zurück.

<BlockImage module="AI/ArucoMarker" id="marker_data" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Marker-ID | ganze Zahl ≥ 0 | - |
| unit | Dropdown-Option | Art des Messwerts | x, y, min_x, max_x, min_y, max_y, width, height, area, rotation | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker(0, 'x')
aruco_marker.marker(3, 'area')
```

## Abstand zwischen zwei Markern {#marker_to_marker}

Gibt den Abstand zwischen zwei Markern zurück.

<BlockImage module="AI/ArucoMarker" id="marker_to_marker" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit1 | Eingabe (Block) | ID des ersten Markers | ganze Zahl ≥ 0 | - |
| unit2 | Eingabe (Block) | ID des zweiten Markers | ganze Zahl ≥ 0 | - |
| type | Dropdown-Option | Art des Abstands | Abstand (weggelassen oder None), horizontaler Abstand(horizontal), vertikaler Abstand(vertical) | None |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.get_distance(0, 1)  # Abstand
aruco_marker.get_distance(0, 2, 'horizontal')  # horizontaler Abstand
```

## Marker erkannt? {#marker_detected}

Ob ein Marker mit dem angegebenen ID-Wert gefunden wurde

<BlockImage module="AI/ArucoMarker" id="marker_detected" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Marker-ID | ganze Zahl ≥ 0 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker_detected(0)
```
