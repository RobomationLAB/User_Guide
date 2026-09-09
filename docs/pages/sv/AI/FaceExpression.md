---
title: Ansiktsuttryck
---

# Ansiktsuttryck

## Instansdeklaration {#instance}

När du lägger till ett Ansiktsuttryck(FaceExpression)-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
face_expression = FaceExpression(0)
# När det finns flera instanser
face_expression_1 = FaceExpression(1)
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Välja kameraenhet {#device}

Ställer in vilken kamera som ska användas för att känna igen ålder, kön och ansiktsuttryck.

<BlockImage module="AI/FaceExpression" id="device" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Kamerans enhetsnamn | Systemets kameraetikett | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.device('')
```

## Ladda modellen {#load_model}

Läser in den tränade modellen för ålder, kön och ansiktsuttryck. Det här steget krävs för att kunna använda funktionerna i modulen Ansiktsuttryck.

<BlockImage module="AI/FaceExpression" id="load_model" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| wait | Kryssruta | Om körningen ska vänta tills inläsningen är klar | TRUE / FALSE | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.load_model(wait=True)
```

## Detektera en gång {#detect_once}

Analyserar ansiktet som finns i bilden just nu och visar den uppskattade åldern, könet och ansiktsuttrycket en enda gång.

<BlockImage module="AI/FaceExpression" id="detect_once" />

### Parametrar

(ingen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.detect_once()
```

## Starta / stoppa kontinuerlig detektering {#detect_continuous}

Analyserar ansiktet som finns i bilden hela tiden och visar den uppskattade åldern, könet och ansiktsuttrycket på skärmen.

<BlockImage module="AI/FaceExpression" id="detect_continuous" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Åtgärd | starta(start), stoppa(stop) | - |

### Python
```python
face_expression = FaceExpression(0)

# unit = "start"
face_expression.detect_continuous()
# unit = "stop"
face_expression.stop()
```

## Visa resultatet {#display}

Bestämmer om resultatet för ålder, kön och ansiktsuttryck ska visas i kamerabilden eller inte.

<BlockImage module="AI/FaceExpression" id="display" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| on | Rullgardinsalternativ | Visning PÅ / AV | visa(on=True), dölj(off=False) | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.display(True)
face_expression.display(False)
```

## Ålder {#age}

Ålder

<BlockImage module="AI/FaceExpression" id="age" />

### Parametrar

(ingen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.age()
```

## Kön {#gender}

Kön

<BlockImage module="AI/FaceExpression" id="gender" />

### Parametrar

(ingen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender()
```

## Ansiktsuttryck {#expression}

Ansiktsuttryck

<BlockImage module="AI/FaceExpression" id="expression" />

### Parametrar

(ingen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression()
```

## Har könet identifierats? {#gender_detected}

Om könet har känts igen

<BlockImage module="AI/FaceExpression" id="gender_detected" />

### Parametrar

(ingen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_detected()
```

## Är det ett visst kön? {#gender_check}

Returnerar **sant (True) / falskt (False)** beroende på om det igenkända könet stämmer med det angivna värdet.

<BlockImage module="AI/FaceExpression" id="gender_check" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Kön | man(male), kvinna(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_gender('male')
face_expression.is_gender('female')
```

## Könets säkerhet {#gender_confidence}

Sannolikheten (säkerheten) för att det är det valda könet

<BlockImage module="AI/FaceExpression" id="gender_confidence" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Kön | man(male), kvinna(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_confidence('male')
face_expression.gender_confidence('female')
```

## Har ansiktsuttrycket identifierats? {#expression_detected}

Om ansiktsuttrycket har känts igen

<BlockImage module="AI/FaceExpression" id="expression_detected" />

### Parametrar

(ingen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_detected()
```

## Är det ett visst ansiktsuttryck? {#expression_check}

Returnerar **sant (True) / falskt (False)** beroende på om det igenkända ansiktsuttrycket stämmer med det angivna värdet.

<BlockImage module="AI/FaceExpression" id="expression_check" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Ansiktsuttryck | arg(angry), äcklad(disgusted), rädd(fearful), glad(happy), neutral(neutral), ledsen(sad), överraskad(surprised) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_expression('happy')
face_expression.is_expression('sad')
```

## Ansiktsuttryckets säkerhet {#expression_confidence}

Sannolikheten (säkerheten) för att det är det valda ansiktsuttrycket

<BlockImage module="AI/FaceExpression" id="expression_confidence" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Ansiktsuttryck | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_confidence('happy')
face_expression.expression_confidence('angry')
```

## Modellens tillstånd {#model_state}

Returnerar laddningsstatus för modellen för ålder, kön och ansiktsuttryck.  
Det returnerar 0 om den inte har lästs in än, 1 medan den läses in och 2 när inläsningen är klar.

<BlockImage module="AI/FaceExpression" id="model_state" />

### Parametrar

(ingen)

### Python
```python
face_expression = FaceExpression(0)

face_expression.model_state()
```
