---
title: Kasvojentunnistus
---

# Kasvojentunnistus

## Instanssin esittely {#instance}

Kun lisäät Kasvojentunnistus(FaceDetection)-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
face_detection = FaceDetection(0)
# Kun instansseja on useita
face_detection_1 = FaceDetection(1)
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Aseta kamera {#device}

Määrittää, mitä kameraa käytetään kasvojentunnistukseen.

<BlockImage module="AI/FaceDetection" id="device" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Kameralaitteen nimi | Järjestelmän kameran nimi | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.device('')
```

## Lataa malli {#load_model}

Lataa opetetun kasvomallin. Tämä on tehtävä, jotta 'Kasvojentunnistus'-moduulin toiminnot toimivat.

<BlockImage module="AI/FaceDetection" id="load_model" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| wait | Valintaruutu | Odotetaanko, kunnes lataus on valmis | TRUE / FALSE | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.load_model(wait=True)
```

## Tunnista kerran {#detect_once}

Etsii kuvassa olevat kasvot ja merkitsee ne yhden kerran.

<BlockImage module="AI/FaceDetection" id="detect_once" />

### Parametrit

(ei mitään)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detect_once()
```

## Käynnistä / pysäytä jatkuva tunnistus {#detect_continuous}

Seuraa kuvassa olevia kasvoja jatkuvasti ja merkitsee ne näytölle.

<BlockImage module="AI/FaceDetection" id="detect_continuous" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Toiminto | käynnistä(start), pysäytä(stop) | - |

### Python
```python
face_detection = FaceDetection(0)

# unit = "start"
face_detection.detect_continuous()
# unit = "stop"
face_detection.stop()
```

## Näytä tulos {#display}

Määrittää, näytetäänkö kasvojentunnistuksen tulos kamerakuvassa vai ei.

<BlockImage module="AI/FaceDetection" id="display" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| on | Pudotusvalikon vaihtoehto | Näyttö PÄÄLLÄ / POIS | näytä(on=True), piilota(off=False) | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.display(True)
face_detection.display(False)
```

## Kasvojen osan sijainti {#face_data}

Palauttaa kasvojen tai kasvojen osan sijaintikoordinaatin.

<BlockImage module="AI/FaceDetection" id="face_data" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Kasvojen osa | kasvot(face), vasen silmä(left eye), oikea silmä(right eye), vasen korva(left ear), oikea korva(right ear), nenä(nose), suu(mouth) | - |
| pos | Pudotusvalikon vaihtoehto | Koordinaatin laji | x, y | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('x')
face_detection.left_eye('y')
face_detection.right_eye('x')
face_detection.left_ear('x')
face_detection.right_ear('y')
face_detection.nose('x')
face_detection.mouth('y')
```

## Kasvojen suorakulmion arvot {#face_square}

Palauttaa kasvoalueen suorakulmion sijainnin ja koon.

<BlockImage module="AI/FaceDetection" id="face_square" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| pos | Pudotusvalikon vaihtoehto | Suorakulmion arvot | pienin x-sijainti(min_x), suurin x-sijainti(max_x), pienin y-sijainti(min_y), suurin y-sijainti(max_y), leveys(width), korkeus(height), pinta-ala(area) | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('min_x')
face_detection.face('width')
face_detection.face('area')
```

## Kahden osan välinen etäisyys {#distance}

Palauttaa kasvojen kahden osan välisen etäisyyden.

<BlockImage module="AI/FaceDetection" id="distance" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit1 | Pudotusvalikon vaihtoehto | Ensimmäinen osa | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| unit2 | Pudotusvalikon vaihtoehto | Toinen osa | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| type | Pudotusvalikon vaihtoehto | Etäisyyden laji | etäisyys (jätetään pois tai None), vaakaetäisyys(horizontal), pystyetäisyys(vertical) | None |

### Python
```python
face_detection = FaceDetection(0)

face_detection.get_distance('left_eye', 'right_eye')  # etäisyys
face_detection.get_distance('left_eye', 'right_eye', 'horizontal')  # vaakaetäisyys
face_detection.get_distance('nose', 'mouth', 'vertical')  # pystyetäisyys
```

## Mallin lataustila {#model_state}

Palauttaa kasvomallin lataustilan.  
Se palauttaa 0, jos mallia ei ole vielä ladattu, 1 latauksen aikana ja 2, kun lataus on valmis.

<BlockImage module="AI/FaceDetection" id="model_state" />

### Parametrit

(ei mitään)

### Python
```python
face_detection = FaceDetection(0)

face_detection.model_state()
```

## Havaittiinko kasvot? {#detected}

Onko kasvot löydetty

<BlockImage module="AI/FaceDetection" id="detected" />

### Parametrit

(ei mitään)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detected()
```
