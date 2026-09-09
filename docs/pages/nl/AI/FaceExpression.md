---
title: Gezichtsuitdrukking
---

# Gezichtsuitdrukking

## Instantie declareren {#instance}

Voeg je een Gezichtsuitdrukking(FaceExpression)-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
face_expression = FaceExpression(0)
# als er meerdere instanties zijn
face_expression_1 = FaceExpression(1)
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Camera instellen {#device}

Stelt de camera in voor het herkennen van leeftijd, geslacht en gezichtsuitdrukking.

<BlockImage module="AI/FaceExpression" id="device" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Naam van het camera-apparaat | Cameralabel van het systeem | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.device('')
```

## Model voor gezichtsuitdrukking laden {#load_model}

Laadt de getrainde modellen voor leeftijd, geslacht en gezichtsuitdrukking. Deze stap is beslist nodig om de functies van de module „Gezichtsuitdrukking" te gebruiken.

<BlockImage module="AI/FaceExpression" id="load_model" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| wait | Aankruisvak | Wachten tot het laden klaar is | TRUE / FALSE | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.load_model(wait=True)
```

## Eenmaal detecteren {#detect_once}

Analyseert het gezicht in het huidige beeld en toont de geschatte waarden voor leeftijd, geslacht en gezichtsuitdrukking precies één keer.

<BlockImage module="AI/FaceExpression" id="detect_once" />

### Parameters

(geen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.detect_once()
```

## Continue detectie starten / stoppen {#detect_continuous}

Analyseert het gezicht in het huidige beeld voortdurend en toont de geschatte waarden voor leeftijd, geslacht en gezichtsuitdrukking op het scherm.

<BlockImage module="AI/FaceExpression" id="detect_continuous" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Actie | starten(start), stoppen(stop) | - |

### Python
```python
face_expression = FaceExpression(0)

# unit = "start"
face_expression.detect_continuous()
# unit = "stop"
face_expression.stop()
```

## Resultaat tonen {#display}

Bepaalt of het resultaat van de herkenning van leeftijd, geslacht en gezichtsuitdrukking in het camerabeeld wordt getoond of niet.

<BlockImage module="AI/FaceExpression" id="display" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| on | Keuzelijstoptie | Weergave ON / OFF | tonen(on=True), verbergen(off=False) | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.display(True)
face_expression.display(False)
```

## Leeftijd {#age}

De leeftijd

<BlockImage module="AI/FaceExpression" id="age" />

### Parameters

(geen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.age()
```

## Geslacht {#gender}

Het geslacht

<BlockImage module="AI/FaceExpression" id="gender" />

### Parameters

(geen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender()
```

## Gezichtsuitdrukking {#expression}

De gezichtsuitdrukking

<BlockImage module="AI/FaceExpression" id="expression" />

### Parameters

(geen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression()
```

## Geslacht gedetecteerd? {#gender_detected}

Of het geslacht is herkend

<BlockImage module="AI/FaceExpression" id="gender_detected" />

### Parameters

(geen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_detected()
```

## Is het geslacht ~ ? {#gender_check}

Geeft als **waar(True) / onwaar(False)** terug of het herkende geslacht met de opgegeven waarde overeenkomt.

<BlockImage module="AI/FaceExpression" id="gender_check" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Geslacht | mannelijk(male), vrouwelijk(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_gender('male')
face_expression.is_gender('female')
```

## Betrouwbaarheid van het geslacht {#gender_confidence}

De waarschijnlijkheid (betrouwbaarheid) van het gekozen geslacht

<BlockImage module="AI/FaceExpression" id="gender_confidence" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Geslacht | mannelijk(male), vrouwelijk(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_confidence('male')
face_expression.gender_confidence('female')
```

## Gezichtsuitdrukking gedetecteerd? {#expression_detected}

Of de gezichtsuitdrukking is herkend

<BlockImage module="AI/FaceExpression" id="expression_detected" />

### Parameters

(geen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_detected()
```

## Is de gezichtsuitdrukking ~ ? {#expression_check}

Geeft als **waar(True) / onwaar(False)** terug of de herkende gezichtsuitdrukking met de opgegeven waarde overeenkomt.

<BlockImage module="AI/FaceExpression" id="expression_check" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Gezichtsuitdrukking | boos(angry), vies(disgusted), angstig(fearful), blij(happy), neutraal(neutral), verdrietig(sad), verrast(surprised) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_expression('happy')
face_expression.is_expression('sad')
```

## Betrouwbaarheid van de gezichtsuitdrukking {#expression_confidence}

De waarschijnlijkheid (betrouwbaarheid) van de gekozen gezichtsuitdrukking

<BlockImage module="AI/FaceExpression" id="expression_confidence" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Gezichtsuitdrukking | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_confidence('happy')
face_expression.expression_confidence('angry')
```

## Laadstatus van het model {#model_state}

Geeft de laadstatus van de modellen voor leeftijd, geslacht en gezichtsuitdrukking terug.  
Is het nog niet geladen, dan komt 0 terug, tijdens het laden 1 en na het laden 2.

<BlockImage module="AI/FaceExpression" id="model_state" />

### Parameters

(geen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.model_state()
```
