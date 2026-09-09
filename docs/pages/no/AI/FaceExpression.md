---
title: Ansiktsuttrykk
---

# Ansiktsuttrykk

## Instanserklæring {#instance}

Når du legger til en Ansiktsuttrykk(FaceExpression)-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
face_expression = FaceExpression(0)
# Når det finnes flere instanser
face_expression_1 = FaceExpression(1)
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Velg kameraenhet {#device}

Angir hvilket kamera som skal brukes til å kjenne igjen alder, kjønn og ansiktsuttrykk.

<BlockImage module="AI/FaceExpression" id="device" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Navn på kameraenhet | Systemets kameraetikett | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.device('')
```

## Last inn modellen {#load_model}

Laster inn den opplærte modellen for alder, kjønn og ansiktsuttrykk. Dette må gjøres for at funksjonene i modulen 'Ansiktsuttrykk' skal virke.

<BlockImage module="AI/FaceExpression" id="load_model" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| wait | Avmerkingsboks | Om kjøringen skal vente til innlastingen er ferdig | TRUE / FALSE | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.load_model(wait=True)
```

## Oppdag én gang {#detect_once}

Analyserer ansiktene på skjermbildet og viser den alderen, det kjønnet og det ansiktsuttrykket den finner, én enkelt gang.

<BlockImage module="AI/FaceExpression" id="detect_once" />

### Parametere

(ingen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.detect_once()
```

## Start / stopp kontinuerlig gjenkjenning {#detect_continuous}

Analyserer ansiktene på skjermbildet hele tiden og viser den alderen, det kjønnet og det ansiktsuttrykket den finner, på skjermen.

<BlockImage module="AI/FaceExpression" id="detect_continuous" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Handling | start(start), stopp(stop) | - |

### Python
```python
face_expression = FaceExpression(0)

# unit = "start"
face_expression.detect_continuous()
# unit = "stop"
face_expression.stop()
```

## Vis resultatet {#display}

Bestemmer om resultatet for alder, kjønn og ansiktsuttrykk skal vises i kamerabildet eller ikke.

<BlockImage module="AI/FaceExpression" id="display" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| on | Nedtrekksalternativ | Visning PÅ / AV | vis(on=True), skjul(off=False) | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.display(True)
face_expression.display(False)
```

## Alder {#age}

Alder

<BlockImage module="AI/FaceExpression" id="age" />

### Parametere

(ingen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.age()
```

## Kjønn {#gender}

Kjønn

<BlockImage module="AI/FaceExpression" id="gender" />

### Parametere

(ingen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender()
```

## Ansiktsuttrykk {#expression}

Ansiktsuttrykk

<BlockImage module="AI/FaceExpression" id="expression" />

### Parametere

(ingen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression()
```

## Er kjønnet oppdaget? {#gender_detected}

Om kjønnet er kjent igjen

<BlockImage module="AI/FaceExpression" id="gender_detected" />

### Parametere

(ingen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_detected()
```

## Er det et bestemt kjønn? {#gender_check}

Returnerer **sann (True) / usann (False)** ut fra om kjønnet som er kjent igjen, stemmer med den verdien du angir.

<BlockImage module="AI/FaceExpression" id="gender_check" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Kjønn | mann(male), kvinne(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_gender('male')
face_expression.is_gender('female')
```

## Konfidensen for kjønnet {#gender_confidence}

Sannsynligheten (konfidensen) for at det er det kjønnet du har valgt

<BlockImage module="AI/FaceExpression" id="gender_confidence" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Kjønn | mann(male), kvinne(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_confidence('male')
face_expression.gender_confidence('female')
```

## Er ansiktsuttrykket oppdaget? {#expression_detected}

Om ansiktsuttrykket er kjent igjen

<BlockImage module="AI/FaceExpression" id="expression_detected" />

### Parametere

(ingen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_detected()
```

## Er det et bestemt ansiktsuttrykk? {#expression_check}

Returnerer **sann (True) / usann (False)** ut fra om ansiktsuttrykket som er kjent igjen, stemmer med den verdien du angir.

<BlockImage module="AI/FaceExpression" id="expression_check" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Ansiktsuttrykk | sint(angry), kvalm(disgusted), redd(fearful), glad(happy), nøytral(neutral), trist(sad), overrasket(surprised) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_expression('happy')
face_expression.is_expression('sad')
```

## Konfidensen for ansiktsuttrykket {#expression_confidence}

Sannsynligheten (konfidensen) for at det er det ansiktsuttrykket du har valgt

<BlockImage module="AI/FaceExpression" id="expression_confidence" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Ansiktsuttrykk | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_confidence('happy')
face_expression.expression_confidence('angry')
```

## Modellens tilstand {#model_state}

Returnerer innlastingstilstanden til modellen for alder, kjønn og ansiktsuttrykk.  
Den returnerer 0 hvis modellen ennå ikke er lastet inn, 1 mens den lastes inn, og 2 når innlastingen er ferdig.


<BlockImage module="AI/FaceExpression" id="model_state" />

### Parametere

(ingen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.model_state()
```
