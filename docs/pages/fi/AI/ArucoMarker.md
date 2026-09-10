---
title: ArUco-merkkien tunnistus
---

# ArUco-merkkien tunnistus

## Instanssin esittely {#instance}

Kun lisäät ArUco-merkkien tunnistus(ArucoMarker)-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
aruco_marker = ArucoMarker(0)
# Kun instansseja on useita
aruco_marker_1 = ArucoMarker(1)
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Aseta kamera {#device}

Määrittää, mitä kameraa käytetään merkkien tunnistukseen.

<BlockImage module="AI/ArucoMarker" id="device" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Kameralaitteen nimi | Järjestelmän kameran nimi | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.device('')
```

## Aseta merkkien enimmäismäärä {#max_count}

Määrittää, kuinka monta merkkiä voidaan tunnistaa samaan aikaan. Määrä on välillä 0 ja 10.

<BlockImage module="AI/ArucoMarker" id="max_count" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Merkkien enimmäismäärä | Kokonaisluku välillä 0 ja 10 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.max_count(5)
```

## Tunnista kerran {#detect_once}

Etsii kuvassa olevat merkit ja merkitsee niiden alueet yhden kerran.

<BlockImage module="AI/ArucoMarker" id="detect_once" />

### Parametrit

(ei mitään)

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.detect_once()
```

## Käynnistä / pysäytä jatkuva tunnistus {#detect_continuous}

Seuraa kuvassa olevia merkkejä jatkuvasti ja merkitsee niiden alueet näytölle.

<BlockImage module="AI/ArucoMarker" id="detect_continuous" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Toiminto | käynnistä(start), pysäytä(stop) | - |

### Python
```python
aruco_marker = ArucoMarker(0)

# unit = "start"
aruco_marker.detect_continuous()
# unit = "stop"
aruco_marker.stop()
```

## Näytä tulos {#display}

Määrittää, näytetäänkö merkkien tunnistuksen tulos kamerakuvassa vai ei.

<BlockImage module="AI/ArucoMarker" id="display" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| on | Pudotusvalikon vaihtoehto | Näyttö PÄÄLLÄ / POIS | näytä(on=True), piilota(off=False) | TRUE |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.display(True)
aruco_marker.display(False)
```

## Merkin tiedot {#marker_data}

Palauttaa antamallasi tunnuksella olevan merkin sijainnin ja koon.

<BlockImage module="AI/ArucoMarker" id="marker_data" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Merkin tunnus | Kokonaisluku 0 tai suurempi | - |
| unit | Pudotusvalikon vaihtoehto | Mittauksen laji | x, y, min_x, max_x, min_y, max_y, width, height, area, rotation | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker(0, 'x')
aruco_marker.marker(3, 'area')
```

## Merkkien välinen etäisyys {#marker_to_marker}

Palauttaa kahden merkin välisen etäisyyden.

<BlockImage module="AI/ArucoMarker" id="marker_to_marker" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit1 | Syöte (lohko) | Ensimmäisen merkin tunnus | Kokonaisluku 0 tai suurempi | - |
| unit2 | Syöte (lohko) | Toisen merkin tunnus | Kokonaisluku 0 tai suurempi | - |
| type | Pudotusvalikon vaihtoehto | Etäisyyden laji | etäisyys (jätetään pois tai None), vaakaetäisyys(horizontal), pystyetäisyys(vertical) | None |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.get_distance(0, 1)  # etäisyys
aruco_marker.get_distance(0, 2, 'horizontal')  # vaakaetäisyys
```

## Havaittiinko merkki? {#marker_detected}

Onko löydetty merkki, jolla on tietty id

<BlockImage module="AI/ArucoMarker" id="marker_detected" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Merkin tunnus | Kokonaisluku 0 tai suurempi | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker_detected(0)
```
