---
title: Ilmeentunnistus
---

# Ilmeentunnistus

## Instanssin esittely {#instance}

Kun lisäät Ilmeentunnistus(FaceExpression)-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
face_expression = FaceExpression(0)
# Kun instansseja on useita
face_expression_1 = FaceExpression(1)
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Aseta kamera {#device}

Määrittää, mitä kameraa käytetään iän, sukupuolen ja kasvonilmeen tunnistukseen.

<BlockImage module="AI/FaceExpression" id="device" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Kameralaitteen nimi | Järjestelmän kameran nimi | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.device('')
```

## Lataa malli {#load_model}

Lataa opetetun iän, sukupuolen ja kasvonilmeen mallin. Tämä on tehtävä, jotta 'Ilmeentunnistus'-moduulin toiminnot toimivat.

<BlockImage module="AI/FaceExpression" id="load_model" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| wait | Valintaruutu | Odotetaanko, kunnes lataus on valmis | TRUE / FALSE | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.load_model(wait=True)
```

## Tunnista kerran {#detect_once}

Analysoi kuvassa olevat kasvot ja näyttää arvioimansa iän, sukupuolen ja kasvonilmeen yhden kerran.

<BlockImage module="AI/FaceExpression" id="detect_once" />

### Parametrit

(ei mitään)

### Python
```python
face_expression = FaceExpression(0)

face_expression.detect_once()
```

## Käynnistä / pysäytä jatkuva tunnistus {#detect_continuous}

Analysoi kuvassa olevia kasvoja jatkuvasti ja näyttää arvioimansa iän, sukupuolen ja kasvonilmeen näytöllä.

<BlockImage module="AI/FaceExpression" id="detect_continuous" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Toiminto | käynnistä(start), pysäytä(stop) | - |

### Python
```python
face_expression = FaceExpression(0)

# unit = "start"
face_expression.detect_continuous()
# unit = "stop"
face_expression.stop()
```

## Näytä tulos {#display}

Määrittää, näytetäänkö iän, sukupuolen ja kasvonilmeen tunnistuksen tulos kamerakuvassa vai ei.

<BlockImage module="AI/FaceExpression" id="display" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| on | Pudotusvalikon vaihtoehto | Näyttö PÄÄLLÄ / POIS | näytä(on=True), piilota(off=False) | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.display(True)
face_expression.display(False)
```

## Ikä {#age}

Ikä

<BlockImage module="AI/FaceExpression" id="age" />

### Parametrit

(ei mitään)

### Python
```python
face_expression = FaceExpression(0)

face_expression.age()
```

## Sukupuoli {#gender}

Sukupuoli

<BlockImage module="AI/FaceExpression" id="gender" />

### Parametrit

(ei mitään)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender()
```

## Kasvonilme {#expression}

Kasvonilme

<BlockImage module="AI/FaceExpression" id="expression" />

### Parametrit

(ei mitään)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression()
```

## Onko sukupuoli tunnistettu? {#gender_detected}

Onko sukupuoli tunnistettu

<BlockImage module="AI/FaceExpression" id="gender_detected" />

### Parametrit

(ei mitään)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_detected()
```

## Onko sukupuoli tietty? {#gender_check}

Palauttaa **toden (True) / epätoden (False)** sen mukaan, täsmääkö tunnistettu sukupuoli antamaasi arvoa.

<BlockImage module="AI/FaceExpression" id="gender_check" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Sukupuoli | mies(male), nainen(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_gender('male')
face_expression.is_gender('female')
```

## Sukupuolen tunnistusvarmuus {#gender_confidence}

Todennäköisyys (varmuus), että kyseessä on valitsemasi sukupuoli

<BlockImage module="AI/FaceExpression" id="gender_confidence" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Sukupuoli | mies(male), nainen(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_confidence('male')
face_expression.gender_confidence('female')
```

## Onko kasvonilme tunnistettu? {#expression_detected}

Onko kasvonilme tunnistettu

<BlockImage module="AI/FaceExpression" id="expression_detected" />

### Parametrit

(ei mitään)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_detected()
```

## Onko kasvonilme tietty? {#expression_check}

Palauttaa **toden (True) / epätoden (False)** sen mukaan, täsmääkö tunnistettu kasvonilme antamaasi arvoa.

<BlockImage module="AI/FaceExpression" id="expression_check" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Kasvonilme | vihainen(angry), inhoava(disgusted), pelokas(fearful), iloinen(happy), neutraali(neutral), surullinen(sad), yllättynyt(surprised) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_expression('happy')
face_expression.is_expression('sad')
```

## Kasvonilmeen tunnistusvarmuus {#expression_confidence}

Todennäköisyys (varmuus), että kyseessä on valitsemasi kasvonilme

<BlockImage module="AI/FaceExpression" id="expression_confidence" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Kasvonilme | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_confidence('happy')
face_expression.expression_confidence('angry')
```

## Mallin lataustila {#model_state}

Palauttaa iän, sukupuolen ja kasvonilmeen mallin lataustilan.  
Se palauttaa 0, jos mallia ei ole vielä ladattu, 1 latauksen aikana ja 2, kun lataus on valmis.


<BlockImage module="AI/FaceExpression" id="model_state" />

### Parametrit

(ei mitään)

### Python
```python
face_expression = FaceExpression(0)

face_expression.model_state()
```
