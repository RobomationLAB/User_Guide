---
title: Ansigtsudtryk
---

# Ansigtsudtryk

## Instanserklæring {#instance}

Når du tilføjer en Ansigtsudtryk(FaceExpression)-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
face_expression = FaceExpression(0)
# Når der er flere instanser
face_expression_1 = FaceExpression(1)
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Vælg kameraenhed {#device}

Indstiller, hvilket kamera der skal bruges til at genkende alder, køn og ansigtsudtryk.

<BlockImage module="AI/FaceExpression" id="device" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Kameraets enhedsnavn | Systemets kameraetiket | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.device('')
```

## Indlæs modellen {#load_model}

Indlæser den trænede model til alder, køn og ansigtsudtryk. Dette trin er nødvendigt for at kunne bruge funktionerne i modulet Ansigtsudtryk.

<BlockImage module="AI/FaceExpression" id="load_model" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil indlæsningen er færdig | TRUE / FALSE | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.load_model(wait=True)
```

## Registrér én gang {#detect_once}

Analyserer det ansigt, der er i billedet lige nu, og viser den anslåede alder, køn og ansigtsudtryk én enkelt gang.

<BlockImage module="AI/FaceExpression" id="detect_once" />

### Parametre

(ingen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.detect_once()
```

## Start / stop kontinuerlig registrering {#detect_continuous}

Analyserer det ansigt, der er i billedet, hele tiden og viser den anslåede alder, køn og ansigtsudtryk på skærmen.

<BlockImage module="AI/FaceExpression" id="detect_continuous" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Handling | start(start), stop(stop) | - |

### Python
```python
face_expression = FaceExpression(0)

# unit = "start"
face_expression.detect_continuous()
# unit = "stop"
face_expression.stop()
```

## Vis resultatet {#display}

Bestemmer, om resultatet for alder, køn og ansigtsudtryk skal vises i kamerabilledet eller ikke.

<BlockImage module="AI/FaceExpression" id="display" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| on | Rullemenupunkt | Visning TIL / FRA | vis(on=True), skjul(off=False) | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.display(True)
face_expression.display(False)
```

## Alder {#age}

Alder

<BlockImage module="AI/FaceExpression" id="age" />

### Parametre

(ingen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.age()
```

## Køn {#gender}

Køn

<BlockImage module="AI/FaceExpression" id="gender" />

### Parametre

(ingen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender()
```

## Ansigtsudtryk {#expression}

Ansigtsudtryk

<BlockImage module="AI/FaceExpression" id="expression" />

### Parametre

(ingen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression()
```

## Er kønnet registreret? {#gender_detected}

Om kønnet er genkendt

<BlockImage module="AI/FaceExpression" id="gender_detected" />

### Parametre

(ingen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_detected()
```

## Er det et bestemt køn? {#gender_check}

Returnerer **sand (True) / falsk (False)** alt efter, om det genkendte køn passer med den angivne værdi.

<BlockImage module="AI/FaceExpression" id="gender_check" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Køn | mand(male), kvinde(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_gender('male')
face_expression.is_gender('female')
```

## Kønnets sikkerhed {#gender_confidence}

Sandsynligheden (sikkerheden) for at det er det valgte køn

<BlockImage module="AI/FaceExpression" id="gender_confidence" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Køn | mand(male), kvinde(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_confidence('male')
face_expression.gender_confidence('female')
```

## Er ansigtsudtrykket registreret? {#expression_detected}

Om ansigtsudtrykket er genkendt

<BlockImage module="AI/FaceExpression" id="expression_detected" />

### Parametre

(ingen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_detected()
```

## Er det et bestemt ansigtsudtryk? {#expression_check}

Returnerer **sand (True) / falsk (False)** alt efter, om det genkendte ansigtsudtryk passer med den angivne værdi.

<BlockImage module="AI/FaceExpression" id="expression_check" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Ansigtsudtryk | vred(angry), væmmet(disgusted), bange(fearful), glad(happy), neutral(neutral), trist(sad), overrasket(surprised) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_expression('happy')
face_expression.is_expression('sad')
```

## Ansigtsudtrykkets sikkerhed {#expression_confidence}

Sandsynligheden (sikkerheden) for at det er det valgte ansigtsudtryk

<BlockImage module="AI/FaceExpression" id="expression_confidence" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Ansigtsudtryk | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_confidence('happy')
face_expression.expression_confidence('angry')
```

## Modellens tilstand {#model_state}

Returnerer indlæsningsstatus for modellen til alder, køn og ansigtsudtryk.  
Den returnerer 0, hvis modellen ikke er indlæst endnu, 1 mens den indlæses, og 2 når indlæsningen er færdig.

<BlockImage module="AI/FaceExpression" id="model_state" />

### Parametre

(ingen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.model_state()
```
