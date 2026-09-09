---
title: ArUco-markørgjenkjenning
---

# ArUco-markørgjenkjenning

## Instanserklæring {#instance}

Når du legger til en ArUco-markørgjenkjenning(ArucoMarker)-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
aruco_marker = ArucoMarker(0)
# Når det finnes flere instanser
aruco_marker_1 = ArucoMarker(1)
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Velg kameraenhet {#device}

Angir hvilket kamera som skal brukes til markørgjenkjenningen.

<BlockImage module="AI/ArucoMarker" id="device" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Navn på kameraenhet | Systemets kameraetikett | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.device('')
```

## Sett maks. antall markører {#max_count}

Angir hvor mange markører som kan gjenkjennes samtidig. Antallet går fra 0 til 10.

<BlockImage module="AI/ArucoMarker" id="max_count" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Maks. antall markører | Heltall 0 til 10 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.max_count(5)
```

## Registrer én gang {#detect_once}

Finner markørene på skjermbildet og markerer områdene deres én enkelt gang.

<BlockImage module="AI/ArucoMarker" id="detect_once" />

### Parametere

(ingen)

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.detect_once()
```

## Start / stopp kontinuerlig gjenkjenning {#detect_continuous}

Følger markørene på skjermbildet hele tiden og markerer områdene deres på skjermen.

<BlockImage module="AI/ArucoMarker" id="detect_continuous" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Handling | start(start), stopp(stop) | - |

### Python
```python
aruco_marker = ArucoMarker(0)

# unit = "start"
aruco_marker.detect_continuous()
# unit = "stop"
aruco_marker.stop()
```

## Vis resultatet {#display}

Bestemmer om resultatet av markørgjenkjenningen skal vises i kamerabildet eller ikke.

<BlockImage module="AI/ArucoMarker" id="display" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| on | Nedtrekksalternativ | Visning PÅ / AV | vis(on=True), skjul(off=False) | TRUE |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.display(True)
aruco_marker.display(False)
```

## Markørdata {#marker_data}

Returnerer posisjonen og størrelsen til markøren med den ID-en du angir.

<BlockImage module="AI/ArucoMarker" id="marker_data" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Markør-ID | Heltall 0 eller større | - |
| unit | Nedtrekksalternativ | Type måling | x, y, min_x, max_x, min_y, max_y, width, height, area, rotation | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker(0, 'x')
aruco_marker.marker(3, 'area')
```

## Avstanden mellom markører {#marker_to_marker}

Returnerer avstanden mellom to markører.

<BlockImage module="AI/ArucoMarker" id="marker_to_marker" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Inndata (blokk) | ID-en til den første markøren | Heltall 0 eller større | - |
| unit2 | Inndata (blokk) | ID-en til den andre markøren | Heltall 0 eller større | - |
| type | Nedtrekksalternativ | Type avstand | avstand (utelates eller None), vannrett avstand(horizontal), loddrett avstand(vertical) | None |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.get_distance(0, 1)  # avstand
aruco_marker.get_distance(0, 2, 'horizontal')  # vannrett avstand
```

## Er markøren oppdaget? {#marker_detected}

Om det er funnet en markør med en bestemt id

<BlockImage module="AI/ArucoMarker" id="marker_detected" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Markør-ID | Heltall 0 eller større | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker_detected(0)
```
