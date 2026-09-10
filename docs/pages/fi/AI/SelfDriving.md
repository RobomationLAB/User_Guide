---
title: Kamerapohjainen itseajo
---

# Kamerapohjainen itseajo

## Instanssin esittely {#instance}

Kun lisäät Kamerapohjainen itseajo(SelfDriving)-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
self_driving = SelfDriving(0)
# Kun instansseja on useita
self_driving_1 = SelfDriving(1)
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Aseta kamera {#device}

Määrittää, mitä kameraa käytetään itseajoon.

<BlockImage module="AI/SelfDriving" id="device" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Kameralaitteen nimi | Järjestelmän kameran nimi | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.device('')
```

## Aseta kaistan väri {#set_lane_color}

Määrittää vasemman ja oikean kaistan värin.

<BlockImage module="AI/SelfDriving" id="set_lane_color" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| left | Pudotusvalikon vaihtoehto | Vasemman kaistan väri | punainen(red), vihreä(green), sininen(blue) | - |
| right | Pudotusvalikon vaihtoehto | Oikean kaistan väri | punainen(red), vihreä(green), sininen(blue) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.set_lane('green', 'blue')
```

## Tunnista kerran {#detect_once}

Etsii kuvasta valitsemasi värit ja kaistat ja merkitsee niiden alueet yhden kerran.

<BlockImage module="AI/SelfDriving" id="detect_once" />

### Parametrit

(ei mitään)

### Python
```python
self_driving = SelfDriving(0)

self_driving.detect_once()
```

## Käynnistä / pysäytä jatkuva tunnistus {#detect_continuous}

Seuraa kuvassa valitsemiasi värejä ja kaistoja jatkuvasti ja merkitsee niiden alueet näytölle.

<BlockImage module="AI/SelfDriving" id="detect_continuous" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Toiminto | käynnistä(start), pysäytä(stop) | - |

### Python
```python
self_driving = SelfDriving(0)

# unit = "start"
self_driving.detect_continuous()
# unit = "stop"
self_driving.stop()
```

## Näytä tulos {#display}

Määrittää, näytetäänkö värien ja kaistojen tunnistuksen tulos kamerakuvassa vai ei.

<BlockImage module="AI/SelfDriving" id="display" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| on | Pudotusvalikon vaihtoehto | Näyttö PÄÄLLÄ / POIS | näytä(on=True), piilota(off=False) | TRUE |

### Python
```python
self_driving = SelfDriving(0)

self_driving.display(True)
self_driving.display(False)
```

## Kaistan tiedot {#lane_data}

Palauttaa antamasi kaistan sijainnin tai etäisyyden.

<BlockImage module="AI/SelfDriving" id="lane_data" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| lane | Pudotusvalikon vaihtoehto | Kaista | vasen(left), oikea(right) | - |
| unit | Pudotusvalikon vaihtoehto | Mittauksen laji | x, etäisyys(distance) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane('left', 'x')
self_driving.lane('right', 'distance')
```

## Värin tiedot {#color_data}

Palauttaa antamasi värin sijainnin ja koon.

<BlockImage module="AI/SelfDriving" id="color_data" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| color | Pudotusvalikon vaihtoehto | Värin nimi | punainen(red), vihreä(green), sininen(blue) | - |
| unit | Pudotusvalikon vaihtoehto | Koordinaatin/koon laji | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color('red', 'x')
self_driving.color('green', 'y')
self_driving.color('blue', 'area')
```

## Kahden värin välinen etäisyys {#color_to_color}

Palauttaa kahden värin välisen etäisyyden.

<BlockImage module="AI/SelfDriving" id="color_to_color" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit1 | Pudotusvalikon vaihtoehto | Ensimmäinen väri | punainen(red), vihreä(green), sininen(blue) | - |
| unit2 | Pudotusvalikon vaihtoehto | Toinen väri | punainen(red), vihreä(green), sininen(blue) | - |
| type | Pudotusvalikon vaihtoehto | Etäisyyden laji | etäisyys (jätetään pois tai None), vaakaetäisyys(horizontal), pystyetäisyys(vertical) | None |

### Python
```python
self_driving = SelfDriving(0)

self_driving.get_distance('red', 'blue')  # etäisyys
self_driving.get_distance('green', 'blue', 'horizontal')  # vaakaetäisyys
```

## Onko kaista havaittu? {#lane_detected}

Onko tietty kaista löydetty

<BlockImage module="AI/SelfDriving" id="lane_detected" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| lane | Pudotusvalikon vaihtoehto | Kaista | vasen(left), oikea(right), molemmat(both), mikä tahansa(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane_detected('left')
```

## Onko väri havaittu? {#color_detected}

Onko tietty väriala löydetty

<BlockImage module="AI/SelfDriving" id="color_detected" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| color | Pudotusvalikon vaihtoehto | Värin nimi | punainen(red), vihreä(green), sininen(blue), mikä tahansa(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color_detected('red')
```
