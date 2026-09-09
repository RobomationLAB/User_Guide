---
title: Registrering af ArUco-markører
---

# Registrering af ArUco-markører

## Instanserklæring {#instance}

Når du tilføjer en Registrering af ArUco-markører(ArucoMarker)-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
aruco_marker = ArucoMarker(0)
# Når der er flere instanser
aruco_marker_1 = ArucoMarker(1)
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Vælg kameraenhed {#device}

Indstiller, hvilket kamera der skal bruges til registreringen af ArUco-markører.

<BlockImage module="AI/ArucoMarker" id="device" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Kameraets enhedsnavn | Systemets kameraetiket | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.device('')
```

## Indstil maks. antal markører {#max_count}

Indstiller, hvor mange markører der højst kan genkendes. Antallet går fra 0 til 10.

<BlockImage module="AI/ArucoMarker" id="max_count" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Maks. antal markører | Heltal 0 til 10 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.max_count(5)
```

## Registrér én gang {#detect_once}

Finder de markører, der er i billedet lige nu, og markerer deres områder én enkelt gang.

<BlockImage module="AI/ArucoMarker" id="detect_once" />

### Parametre

(ingen)

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.detect_once()
```

## Start / stop kontinuerlig registrering {#detect_continuous}

Følger de markører, der er i billedet, hele tiden og markerer deres områder på skærmen.

<BlockImage module="AI/ArucoMarker" id="detect_continuous" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Handling | start(start), stop(stop) | - |

### Python
```python
aruco_marker = ArucoMarker(0)

# unit = "start"
aruco_marker.detect_continuous()
# unit = "stop"
aruco_marker.stop()
```

## Vis resultatet {#display}

Bestemmer, om resultatet af markørregistreringen skal vises i kamerabilledet eller ikke.

<BlockImage module="AI/ArucoMarker" id="display" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| on | Rullemenupunkt | Visning TIL / FRA | vis(on=True), skjul(off=False) | TRUE |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.display(True)
aruco_marker.display(False)
```

## Markørens data {#marker_data}

Returnerer position og størrelse for markøren med det angivne ID.

<BlockImage module="AI/ArucoMarker" id="marker_data" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Markørens ID | Heltal 0 eller større | - |
| unit | Rullemenupunkt | Slags måleværdi | x, y, min_x, max_x, min_y, max_y, width, height, area, rotation | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker(0, 'x')
aruco_marker.marker(3, 'area')
```

## Afstand mellem markører {#marker_to_marker}

Returnerer afstanden mellem to markører.

<BlockImage module="AI/ArucoMarker" id="marker_to_marker" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Input (blok) | Første markørs ID | Heltal 0 eller større | - |
| unit2 | Input (blok) | Anden markørs ID | Heltal 0 eller større | - |
| type | Rullemenupunkt | Slags afstand | afstand (udelades eller None), vandret afstand(horizontal), lodret afstand(vertical) | None |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.get_distance(0, 1)  # afstand
aruco_marker.get_distance(0, 2, 'horizontal')  # vandret afstand
```

## Er markøren registreret? {#marker_detected}

Om markøren med en bestemt id-værdi er fundet

<BlockImage module="AI/ArucoMarker" id="marker_detected" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Markørens ID | Heltal 0 eller større | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker_detected(0)
```
