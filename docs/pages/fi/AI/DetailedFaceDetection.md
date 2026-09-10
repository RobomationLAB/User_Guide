---
title: Yksityiskohtainen kasvojentunnistus
---

# Yksityiskohtainen kasvojentunnistus

## Instanssin esittely {#instance}

Kun lisäät Yksityiskohtainen kasvojentunnistus(DetailedFaceDetection)-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
detailed_face_detection = DetailedFaceDetection(0)
# Kun instansseja on useita
detailed_face_detection_1 = DetailedFaceDetection(1)
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Aseta kamera {#device}

Määrittää, mitä kameraa käytetään yksityiskohtaiseen kasvojentunnistukseen.

<BlockImage module="AI/DetailedFaceDetection" id="device" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Kameralaitteen nimi | Järjestelmän kameran nimi | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.device('')
```

## Lataa malli {#load_model}

Lataa opetetun kasvomallin. Tämä on tehtävä, jotta 'Yksityiskohtainen kasvojentunnistus'-moduulin toiminnot toimivat.

<BlockImage module="AI/DetailedFaceDetection" id="load_model" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| wait | Valintaruutu | Odotetaanko, kunnes lataus on valmis | TRUE / FALSE | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.load_model(wait=True)
```

## Tunnista kerran {#detect_once}

Etsii kuvassa olevat kasvot ja merkitsee ne yhden kerran.

<BlockImage module="AI/DetailedFaceDetection" id="detect_once" />

### Parametrit

(ei mitään)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detect_once()
```

## Käynnistä / pysäytä jatkuva tunnistus {#detect_continuous}

Seuraa kuvassa olevia kasvoja jatkuvasti ja merkitsee ne näytölle.

<BlockImage module="AI/DetailedFaceDetection" id="detect_continuous" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Toiminto | käynnistä(start), pysäytä(stop) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

# unit = "start"
detailed_face_detection.detect_continuous()
# unit = "stop"
detailed_face_detection.stop()
```

## Näytä tulos {#display}

Määrittää, näytetäänkö kasvojentunnistuksen tulos kamerakuvassa vai ei.

<BlockImage module="AI/DetailedFaceDetection" id="display" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| on | Pudotusvalikon vaihtoehto | Näyttö PÄÄLLÄ / POIS | näytä(on=True), piilota(off=False) | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.display(True)
detailed_face_detection.display(False)
```

## Kasvojen osien koordinaatit {#face_data}

Palauttaa kunkin kasvojen osan koordinaatin.

<BlockImage module="AI/DetailedFaceDetection" id="face_data" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Kasvojen osa | kasvot(face), vasen silmä(left eye), oikea silmä(right eye), suu(mouth), nenä(nose), ylähuuli(upper lip), alahuuli(lower lip), vasen suupieli(left lip), oikea suupieli(right lip), vasen mustuainen(left pupil), oikea mustuainen(right pupil) | - |
| pos | Pudotusvalikon vaihtoehto | Koordinaatti | x, y | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('x')
detailed_face_detection.left_eye('y')
detailed_face_detection.upper_lip('x')
detailed_face_detection.right_pupil('y')
```

## Kasvojen osan suorakulmio {#face_square}

Palauttaa kunkin kasvojen osan alueen suorakulmion sijainnin ja koon.

<BlockImage module="AI/DetailedFaceDetection" id="face_square" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Kasvojen osa | kasvot(face), vasen silmä(left eye), oikea silmä(right eye), suu(mouth) | - |
| pos | Pudotusvalikon vaihtoehto | Suorakulmion arvot | pienin x-sijainti(min_x), suurin x-sijainti(max_x), pienin y-sijainti(min_y), suurin y-sijainti(max_y), leveys(width), korkeus(height), pinta-ala(area) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('min_x')
detailed_face_detection.left_eye('area')
```

## Kahden osan välinen etäisyys {#distance}

Palauttaa kahden kasvojen osan välisen etäisyyden.

<BlockImage module="AI/DetailedFaceDetection" id="distance" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit1 | Pudotusvalikon vaihtoehto | Ensimmäinen osa | Kasvojen osan nimi | - |
| unit2 | Pudotusvalikon vaihtoehto | Toinen osa | Kasvojen osan nimi | - |
| type | Pudotusvalikon vaihtoehto | Etäisyyden laji | etäisyys (jätetään pois tai None), vaakaetäisyys(horizontal), pystyetäisyys(vertical) | None |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.get_distance('left_eye', 'right_eye')  # etäisyys
detailed_face_detection.get_distance('left_pupil', 'right_pupil', 'horizontal')  # vaakaetäisyys
detailed_face_detection.get_distance('upper_lip', 'lower_lip', 'vertical')  # pystyetäisyys
```

## Mallin lataustila {#model_state}

Palauttaa kasvomallin lataustilan.  
Se palauttaa 0, jos mallia ei ole vielä ladattu, 1 latauksen aikana ja 2, kun lataus on valmis.

<BlockImage module="AI/DetailedFaceDetection" id="model_state" />

### Parametrit

(ei mitään)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.model_state()
```

## Havaittiinko kasvot? {#detected}

Onko kasvot löydetty

<BlockImage module="AI/DetailedFaceDetection" id="detected" />

### Parametrit

(ei mitään)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detected()
```
