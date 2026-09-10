---
title: Käden tunnistus
---

# Käden tunnistus

## Instanssin esittely {#instance}

Kun lisäät Käden tunnistus(HandDetection)-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
hand_detection = HandDetection(0)
# Kun instansseja on useita
hand_detection_1 = HandDetection(1)
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Aseta kamera {#device}

Määrittää, mitä kameraa käytetään käden tunnistukseen.

<BlockImage module="AI/HandDetection" id="device" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Kameralaitteen nimi | Järjestelmän kameran nimi | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.device('')
```

## Lataa malli {#load_model}

Lataa opetetun käsimallin. Tämä on tehtävä, jotta 'Käden tunnistus'-moduulin toiminnot toimivat.

<BlockImage module="AI/HandDetection" id="load_model" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| wait | Valintaruutu | Odotetaanko, kunnes lataus on valmis | TRUE / FALSE | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.load_model(wait=True)
```

## Aseta käsien kohde {#max_hands}

Määrittää, etsitäänkö käden tunnistuksessa yhtä kättä vai molempia käsiä.

<BlockImage module="AI/HandDetection" id="max_hands" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Käsien määrä | yksi käsi(one), molemmat kädet(both) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.max_hands('one')
hand_detection.max_hands('both')
```

## Tunnista kerran {#detect_once}

Etsii kuvassa olevat kädet ja merkitsee ne yhden kerran.

<BlockImage module="AI/HandDetection" id="detect_once" />

### Parametrit

(ei mitään)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detect_once()
```

## Käynnistä / pysäytä jatkuva tunnistus {#detect_continuous}

Seuraa kuvassa olevia käsiä jatkuvasti ja merkitsee ne näytölle.

<BlockImage module="AI/HandDetection" id="detect_continuous" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Toiminto | käynnistä(start), pysäytä(stop) | - |

### Python
```python
hand_detection = HandDetection(0)

# unit = "start"
hand_detection.detect_continuous()
# unit = "stop"
hand_detection.stop()
```

## Näytä tulos {#display}

Määrittää, näytetäänkö käden tunnistuksen tulos kamerakuvassa vai ei.

<BlockImage module="AI/HandDetection" id="display" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| on | Pudotusvalikon vaihtoehto | Näyttö PÄÄLLÄ / POIS | näytä(on=True), piilota(off=False) | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.display(True)
hand_detection.display(False)
```

## Käden osien koordinaatit {#hand_data}

Palauttaa antamasi käden kämmenen tai ranteen sijainnin.

<BlockImage module="AI/HandDetection" id="hand_data" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| side | Pudotusvalikon vaihtoehto | Kumpi käsi | vasen(left), oikea(right) | - |
| unit | Pudotusvalikon vaihtoehto | Käden osa | kämmen(palm), ranne(wrist) | - |
| pos | Pudotusvalikon vaihtoehto | Koordinaatin/koon laji | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'palm', 'x')
hand_detection.hand('right', 'wrist', 'y')
hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Sormen nivelten koordinaatit {#joint_data}

Palauttaa antamasi sormen nivelen koordinaatin.

<BlockImage module="AI/HandDetection" id="joint_data" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| side | Pudotusvalikon vaihtoehto | Kumpi käsi | vasen(left), oikea(right) | - |
| unit | Pudotusvalikon vaihtoehto | Sormi | peukalo(thumb), etusormi(index), keskisormi(middle), nimetön(ring), pikkusormi(pinky) | - |
| joint | Pudotusvalikon vaihtoehto | Mikä nivel | ensimmäinen nivel(first), toinen nivel(second), kolmas nivel(third), kärki(last) | - |
| pos | Pudotusvalikon vaihtoehto | Koordinaatti | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.finger('left', 'index', 'first', 'x')
hand_detection.finger('right', 'thumb', 'last', 'y')
```

## Käden suorakulmion arvot {#hand_square}

Palauttaa antamasi käden alueen suorakulmion sijainnin ja koon.

<BlockImage module="AI/HandDetection" id="hand_square" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| side | Pudotusvalikon vaihtoehto | Kumpi käsi | vasen(left), oikea(right) | - |
| unit | Pudotusvalikon vaihtoehto | Käden osa | käsi(hand), kämmen(palm) | - |
| pos | Pudotusvalikon vaihtoehto | Suorakulmion arvot | pienin x-sijainti(min_x), suurin x-sijainti(max_x), pienin y-sijainti(min_y), suurin y-sijainti(max_y), leveys(width), korkeus(height), pinta-ala(area) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Käden ja käden välinen etäisyys {#hand_to_hand_distance}

Palauttaa kahden käden osan välisen etäisyyden.

<BlockImage module="AI/HandDetection" id="hand_to_hand_distance" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit1 | Syöte (merkkijono) | Ensimmäinen käden osa | Käsi: `'side_unit'` (esim. `'left_palm'`). side=left/right, unit=palm/wrist/hand  | - |
| unit2 | Syöte (merkkijono) | Toinen käden osa | Käsi: `'side_unit'` (esim. `'right_palm'`). side=left/right, unit=palm/wrist/hand | - |
| type | Pudotusvalikon vaihtoehto | Etäisyyden laji | etäisyys (jätetään pois tai None), vaakaetäisyys(horizontal), pystyetäisyys(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# käsi ↔ käsi / etäisyys
hand_detection.get_distance('left_palm', 'right_palm')  
```

## Käden ja sormen välinen etäisyys {#hand_to_joint_distance}

Palauttaa käden osan ja sormen nivelen välisen etäisyyden.

<BlockImage module="AI/HandDetection" id="hand_to_joint_distance" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit1 | Syöte (merkkijono) | Ensimmäinen osa | Käsi: `'side_unit'` (esim. `'left_palm'`). side=left/right, unit=palm/wrist/hand | - |
| unit2 | Syöte (merkkijono) | Toinen osa | Sormi: `'side_unit_joint'` (esim. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Pudotusvalikon vaihtoehto | Etäisyyden laji | etäisyys (jätetään pois tai None), vaakaetäisyys(horizontal), pystyetäisyys(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# käsi ↔ sormen nivel / vaakaetäisyys
hand_detection.get_distance('left_palm', 'right_index_first')
```

## Sormen ja sormen välinen etäisyys {#joint_to_joint_distance}

Palauttaa kahden sormen nivelen välisen etäisyyden.

<BlockImage module="AI/HandDetection" id="joint_to_joint_distance" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit1 | Syöte (merkkijono) | Ensimmäinen osa | Sormi: `'side_unit_joint'` (esim. `'left_thumb_last'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| unit2 | Syöte (merkkijono) | Toinen osa | Sormi: `'side_unit_joint'` (esim. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Pudotusvalikon vaihtoehto | Etäisyyden laji | etäisyys (jätetään pois tai None), vaakaetäisyys(horizontal), pystyetäisyys(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# sormen nivel ↔ sormen nivel / pystyetäisyys
hand_detection.get_distance('left_thumb_last', 'right_index_first', 'vertical')
```

## Mallin lataustila {#model_state}

Palauttaa käsimallin lataustilan.  
Se palauttaa 0, jos mallia ei ole vielä ladattu, 1 latauksen aikana ja 2, kun lataus on valmis.

<BlockImage module="AI/HandDetection" id="model_state" />

### Parametrit

(ei mitään)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.model_state()
```

## Onko käsi tunnistettu? {#detected}

Onko käsi löydetty

<BlockImage module="AI/HandDetection" id="detected" />

### Parametrit

(ei mitään)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detected()
```
