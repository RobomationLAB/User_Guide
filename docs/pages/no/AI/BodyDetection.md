---
title: Kroppsgjenkjenning
---

# Kroppsgjenkjenning

## Instanserklæring {#instance}

Når du legger til en Ansiktsgjenkjenning(BodyDetection)-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
body_detection = BodyDetection(0)
# Når det finnes flere instanser
body_detection_1 = BodyDetection(1)
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Velg kameraenhet {#device}

Angir hvilket kamera som skal brukes til kroppsgjenkjenningen.

<BlockImage module="AI/BodyDetection" id="device" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Navn på kameraenhet | Systemets kameraetikett | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.device('')
```

## Last inn modellen {#load_model}

Laster inn den opplærte kroppsmodellen. Dette må gjøres for at funksjonene i modulen 'Kroppsgjenkjenning' skal virke.

<BlockImage module="AI/BodyDetection" id="load_model" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| wait | Avmerkingsboks | Om kjøringen skal vente til innlastingen er ferdig | TRUE / FALSE | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.load_model(wait=True)
```

## Registrer én gang {#detect_once}

Finner kroppene på skjermbildet og markerer dem én enkelt gang.

<BlockImage module="AI/BodyDetection" id="detect_once" />

### Parametere

(ingen)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detect_once()
```

## Start / stopp kontinuerlig gjenkjenning {#detect_continuous}

Følger kroppene på skjermbildet hele tiden og markerer dem på skjermen.

<BlockImage module="AI/BodyDetection" id="detect_continuous" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Handling | start(start), stopp(stop) | - |

### Python
```python
body_detection = BodyDetection(0)

# unit = "start"
body_detection.detect_continuous()
# unit = "stop"
body_detection.stop()
```

## Vis resultatet {#display}

Bestemmer om resultatet av kroppsgjenkjenningen skal vises i kamerabildet eller ikke.

<BlockImage module="AI/BodyDetection" id="display" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| on | Nedtrekksalternativ | Visning PÅ / AV | vis(on=True), skjul(off=False) | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.display(True)
body_detection.display(False)
```

## Kroppsdelenes koordinater {#body_data}

Returnerer koordinaten til hver kroppsdel.

<BlockImage module="AI/BodyDetection" id="body_data" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Kroppsdel | nese(nose), munn(mouth), venstre øye(left eye), høyre øye(right eye), venstre øre(left ear), høyre øre(right ear), venstre skulder(left shoulder), høyre skulder(right shoulder), venstre albue(left elbow), høyre albue(right elbow), venstre håndledd(left wrist), høyre håndledd(right wrist), venstre hånd(left hand), høyre hånd(right hand), venstre hofte(left hip), høyre hofte(right hip), venstre kne(left knee), høyre kne(right knee), venstre ankel(left ankle), høyre ankel(right ankle), venstre fot(left foot), høyre fot(right foot) | - |
| pos | Nedtrekksalternativ | Koordinat | x, y | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.nose('x')
body_detection.mouth('y')
body_detection.left_eye('x')
body_detection.right_shoulder('y')
body_detection.left_hand('x')
```

## Avstanden mellom to deler {#body_distance}

Returnerer avstanden mellom to kroppsdeler.

<BlockImage module="AI/BodyDetection" id="body_distance" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Nedtrekksalternativ | Første kroppsdel | (se tabellen over kroppsdeler ovenfor) | - |
| unit2 | Nedtrekksalternativ | Andre kroppsdel | (se tabellen over kroppsdeler ovenfor) | - |
| type | Nedtrekksalternativ | Type avstand | avstand (utelates eller None), vannrett avstand(horizontal), loddrett avstand(vertical) | None |

### Python
```python
body_detection = BodyDetection(0)

body_detection.get_distance('left_shoulder', 'right_shoulder')  # avstand
body_detection.get_distance('left_wrist', 'right_wrist', 'horizontal')  # vannrett avstand
body_detection.get_distance('left_hip', 'left_knee', 'vertical')  # loddrett avstand
```

## Modellens tilstand {#model_state}

Returnerer innlastingsstatusen til kroppsmodellen.  
Den returnerer 0 hvis modellen ennå ikke er lastet inn, 1 mens den lastes inn, og 2 når innlastingen er ferdig.

<BlockImage module="AI/BodyDetection" id="model_state" />

### Parametere

(ingen)

### Python
```python
body_detection = BodyDetection(0)

body_detection.model_state()
```

## Er en kropp oppdaget? {#detected}

Om det er funnet en kropp

<BlockImage module="AI/BodyDetection" id="detected" />

### Parametere

(ingen)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detected()
```
