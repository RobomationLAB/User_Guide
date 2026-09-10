---
title: Kohteentunnistus
---

# Kohteentunnistus

## Instanssin esittely {#instance}

Kun lisäät Kohteentunnistus(ObjectDetection)-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
object_detection = ObjectDetection(0)
# Kun instansseja on useita
object_detection_1 = ObjectDetection(1)
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Aseta kamera {#device}

Määrittää, mitä kameraa käytetään kohteentunnistukseen.

<BlockImage module="AI/ObjectDetection" id="device" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Kameralaitteen nimi | Järjestelmän kameran nimi | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.device('')
```

## Lataa malli {#load_model}

Lataa opetetun esinemallin. Tämä on tehtävä, jotta 'Kohteentunnistus'-moduulin toiminnot toimivat.

<BlockImage module="AI/ObjectDetection" id="load_model" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| wait | Valintaruutu | Odotetaanko, kunnes lataus on valmis | TRUE / FALSE | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.load_model(wait=True)
```

## Aseta esineiden enimmäismäärä {#max_objects}

Määrittää, kuinka monta esinettä voidaan löytää samaan aikaan. Määrä on välillä 0 ja 10.

<BlockImage module="AI/ObjectDetection" id="max_objects" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Esineiden enimmäismäärä | Kokonaisluku välillä 0 ja 10 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.max_objects(5)
```

## Aseta tunnistuksen varmuusraja {#confidence_threshold}

Määrittää kohteentunnistuksen pienimmän todennäköisyyden (varmuuden). Vain vähintään tämän todennäköisyyden (varmuuden) osumat näkyvät näytöllä. Todennäköisyys (varmuus) on välillä 0 ja 1.

<BlockImage module="AI/ObjectDetection" id="confidence_threshold" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Varmuusrajan arvo | Desimaaliluku välillä 0 ja 1 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.confidence_threshold(0.5)
```

## Tunnista kerran {#detect_once}

Etsii kuvassa olevat esineet ja merkitsee ne yhden kerran.

<BlockImage module="AI/ObjectDetection" id="detect_once" />

### Parametrit

(ei mitään)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detect_once()
```

## Käynnistä / pysäytä jatkuva tunnistus {#detect_continuous}

Seuraa kuvassa olevia esineitä jatkuvasti ja merkitsee ne näytölle.

<BlockImage module="AI/ObjectDetection" id="detect_continuous" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Toiminto | käynnistä(start), pysäytä(stop) | - |

### Python
```python
object_detection = ObjectDetection(0)

# unit = "start"
object_detection.detect_continuous()
# unit = "stop"
object_detection.stop()
```

## Näytä tulos {#display}

Määrittää, näytetäänkö kohteentunnistuksen tulos kamerakuvassa vai ei.

<BlockImage module="AI/ObjectDetection" id="display" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| on | Pudotusvalikon vaihtoehto | Näyttö PÄÄLLÄ / POIS | näytä(on=True), piilota(off=False) | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.display(True)
object_detection.display(False)
```

## Esineen sijainti {#object_data}

Palauttaa antamasi esineen sijainnin ja koon.

<BlockImage module="AI/ObjectDetection" id="object_data" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Esineen nimi | 80 esineluokkaa (`'person'`, `'bicycle'`, `'car'`, `'motorcycle'`, `'airplane'`, `'bus'`, `'cat'`, `'dog'`, `'apple'`, `'cup'`, `'laptop'`, `'cell_phone'` ja muut) | - |
| pos | Pudotusvalikon vaihtoehto | Koordinaatti | x, y | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'x')
object_detection.object('bicycle', 'y')
```

## Esineen suorakulmion arvot {#object_square}

Palauttaa antamasi esineen alueen suorakulmion sijainnin ja koon.

<BlockImage module="AI/ObjectDetection" id="object_square" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Esineen nimi | 80 esineluokkaa | - |
| pos | Pudotusvalikon vaihtoehto | Suorakulmion arvot | min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'width')
object_detection.object('car', 'area')
```

## Kahden esineen välinen etäisyys {#object_distance}

Palauttaa kahden esineluokan välisen etäisyyden.

<BlockImage module="AI/ObjectDetection" id="object_distance" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit1 | Pudotusvalikon vaihtoehto | Ensimmäisen esineen nimi | 80 esineluokkaa | - |
| unit2 | Pudotusvalikon vaihtoehto | Toisen esineen nimi | 80 esineluokkaa | - |
| type | Pudotusvalikon vaihtoehto | Etäisyyden laji | etäisyys (jätetään pois tai None), vaakaetäisyys(horizontal), pystyetäisyys(vertical) | None |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.get_distance('person', 'bicycle')  # etäisyys
object_detection.get_distance('person', 'car', 'horizontal')  # vaakaetäisyys
```

## Kohteen tunnistusvarmuus {#object_confidence}

Todennäköisyys (varmuus), että kyseessä on valitsemasi esine

<BlockImage module="AI/ObjectDetection" id="object_confidence" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Esineen nimi | 80 esineluokkaa | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_confidence('person')
```

## Mallin lataustila {#model_state}

Palauttaa esinemallin lataustilan.  
Se palauttaa 0, jos mallia ei ole vielä ladattu, 1 latauksen aikana ja 2, kun lataus on valmis.

<BlockImage module="AI/ObjectDetection" id="model_state" />

### Parametrit

(ei mitään)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.model_state()
```

## Esine tunnistettu? {#detected}

Onko esine löydetty


<BlockImage module="AI/ObjectDetection" id="detected" />

### Parametrit

(ei mitään)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detected()
```

## Onko tietty esine tunnistettu? {#object_detected}

Onko valitsemasi esine löydetty

<BlockImage module="AI/ObjectDetection" id="object_detected" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Esineen nimi | 80 esineluokkaa | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_detected('person')
```
