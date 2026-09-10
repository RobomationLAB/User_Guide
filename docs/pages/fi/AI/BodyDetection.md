---
title: Kehon tunnistus
---

# Kehon tunnistus

## Instanssin esittely {#instance}

Kun lisäät Kehon tunnistus(BodyDetection)-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
body_detection = BodyDetection(0)
# Kun instansseja on useita
body_detection_1 = BodyDetection(1)
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Aseta kamera {#device}

Määrittää, mitä kameraa käytetään kehon tunnistukseen.

<BlockImage module="AI/BodyDetection" id="device" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Kameralaitteen nimi | Järjestelmän kameran nimi | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.device('')
```

## Lataa malli {#load_model}

Lataa opetetun kehomallin. Tämä on tehtävä, jotta 'Kehon tunnistus'-moduulin toiminnot toimivat.

<BlockImage module="AI/BodyDetection" id="load_model" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| wait | Valintaruutu | Odotetaanko, kunnes lataus on valmis | TRUE / FALSE | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.load_model(wait=True)
```

## Tunnista kerran {#detect_once}

Etsii kuvassa olevat kehot ja merkitsee ne yhden kerran.

<BlockImage module="AI/BodyDetection" id="detect_once" />

### Parametrit

(ei mitään)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detect_once()
```

## Käynnistä / pysäytä jatkuva tunnistus {#detect_continuous}

Seuraa kuvassa olevia kehoja jatkuvasti ja merkitsee ne näytölle.

<BlockImage module="AI/BodyDetection" id="detect_continuous" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Toiminto | käynnistä(start), pysäytä(stop) | - |

### Python
```python
body_detection = BodyDetection(0)

# unit = "start"
body_detection.detect_continuous()
# unit = "stop"
body_detection.stop()
```

## Näytä tulos {#display}

Määrittää, näytetäänkö kehon tunnistuksen tulos kamerakuvassa vai ei.

<BlockImage module="AI/BodyDetection" id="display" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| on | Pudotusvalikon vaihtoehto | Näyttö PÄÄLLÄ / POIS | näytä(on=True), piilota(off=False) | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.display(True)
body_detection.display(False)
```

## Kehon osien koordinaatit {#body_data}

Palauttaa kunkin kehon osan koordinaatin.

<BlockImage module="AI/BodyDetection" id="body_data" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Kehon osa | nenä(nose), suu(mouth), vasen silmä(left eye), oikea silmä(right eye), vasen korva(left ear), oikea korva(right ear), vasen olkapää(left shoulder), oikea olkapää(right shoulder), vasen kyynärpää(left elbow), oikea kyynärpää(right elbow), vasen ranne(left wrist), oikea ranne(right wrist), vasen käsi(left hand), oikea käsi(right hand), vasen lonkka(left hip), oikea lonkka(right hip), vasen polvi(left knee), oikea polvi(right knee), vasen nilkka(left ankle), oikea nilkka(right ankle), vasen jalka(left foot), oikea jalka(right foot) | - |
| pos | Pudotusvalikon vaihtoehto | Koordinaatti | x, y | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.nose('x')
body_detection.mouth('y')
body_detection.left_eye('x')
body_detection.right_shoulder('y')
body_detection.left_hand('x')
```

## Kahden osan välinen etäisyys {#body_distance}

Palauttaa kahden kehon osan välisen etäisyyden.

<BlockImage module="AI/BodyDetection" id="body_distance" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit1 | Pudotusvalikon vaihtoehto | Ensimmäinen kehon osa | (katso yllä oleva kehon osien taulukko) | - |
| unit2 | Pudotusvalikon vaihtoehto | Toinen kehon osa | (katso yllä oleva kehon osien taulukko) | - |
| type | Pudotusvalikon vaihtoehto | Etäisyyden laji | etäisyys (jätetään pois tai None), vaakaetäisyys(horizontal), pystyetäisyys(vertical) | None |

### Python
```python
body_detection = BodyDetection(0)

body_detection.get_distance('left_shoulder', 'right_shoulder')  # etäisyys
body_detection.get_distance('left_wrist', 'right_wrist', 'horizontal')  # vaakaetäisyys
body_detection.get_distance('left_hip', 'left_knee', 'vertical')  # pystyetäisyys
```

## Mallin lataustila {#model_state}

Palauttaa kehomallin lataustilan.  
Se palauttaa 0, jos mallia ei ole vielä ladattu, 1 latauksen aikana ja 2, kun lataus on valmis.

<BlockImage module="AI/BodyDetection" id="model_state" />

### Parametrit

(ei mitään)

### Python
```python
body_detection = BodyDetection(0)

body_detection.model_state()
```

## Keho havaittu? {#detected}

Onko keho löydetty

<BlockImage module="AI/BodyDetection" id="detected" />

### Parametrit

(ei mitään)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detected()
```
