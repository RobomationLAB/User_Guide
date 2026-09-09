---
title: Ansiktsgjenkjenning
---

# Ansiktsgjenkjenning

## Instanserklæring {#instance}

Når du legger til en Ansiktsgjenkjenning(FaceDetection)-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
face_detection = FaceDetection(0)
# Når det finnes flere instanser
face_detection_1 = FaceDetection(1)
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Velg kameraenhet {#device}

Angir hvilket kamera som skal brukes til ansiktsgjenkjenningen.

<BlockImage module="AI/FaceDetection" id="device" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Navn på kameraenhet | Systemets kameraetikett | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.device('')
```

## Last inn modellen {#load_model}

Laster inn den opplærte ansiktsmodellen. Dette må gjøres for at funksjonene i modulen 'Ansiktsgjenkjenning' skal virke.

<BlockImage module="AI/FaceDetection" id="load_model" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| wait | Avmerkingsboks | Om kjøringen skal vente til innlastingen er ferdig | TRUE / FALSE | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.load_model(wait=True)
```

## Oppdag én gang {#detect_once}

Finner ansiktene på skjermbildet og markerer dem én enkelt gang.

<BlockImage module="AI/FaceDetection" id="detect_once" />

### Parametere

(ingen)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detect_once()
```

## Start / stopp kontinuerlig gjenkjenning {#detect_continuous}

Følger ansiktene på skjermbildet hele tiden og markerer dem på skjermen.

<BlockImage module="AI/FaceDetection" id="detect_continuous" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Handling | start(start), stopp(stop) | - |

### Python
```python
face_detection = FaceDetection(0)

# unit = "start"
face_detection.detect_continuous()
# unit = "stop"
face_detection.stop()
```

## Vis resultatet {#display}

Bestemmer om resultatet av ansiktsgjenkjenningen skal vises i kamerabildet eller ikke.

<BlockImage module="AI/FaceDetection" id="display" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| on | Nedtrekksalternativ | Visning PÅ / AV | vis(on=True), skjul(off=False) | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.display(True)
face_detection.display(False)
```

## Posisjonen til en del av ansiktet {#face_data}

Returnerer posisjonskoordinaten til ansiktet eller til en del av ansiktet.

<BlockImage module="AI/FaceDetection" id="face_data" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Del av ansiktet | ansikt(face), venstre øye(left eye), høyre øye(right eye), venstre øre(left ear), høyre øre(right ear), nese(nose), munn(mouth) | - |
| pos | Nedtrekksalternativ | Type koordinat | x, y | - |

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

## Ansiktsrektangelets verdier {#face_square}

Returnerer posisjonen og størrelsen til rektangelet rundt ansiktet.

<BlockImage module="AI/FaceDetection" id="face_square" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| pos | Nedtrekksalternativ | Rektangelets verdier | minste x-posisjon(min_x), største x-posisjon(max_x), minste y-posisjon(min_y), største y-posisjon(max_y), bredde(width), høyde(height), areal(area) | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('min_x')
face_detection.face('width')
face_detection.face('area')
```

## Avstanden mellom to deler {#distance}

Returnerer avstanden mellom to deler av ansiktet.

<BlockImage module="AI/FaceDetection" id="distance" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Nedtrekksalternativ | Første del | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| unit2 | Nedtrekksalternativ | Andre del | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| type | Nedtrekksalternativ | Type avstand | avstand (utelates eller None), vannrett avstand(horizontal), loddrett avstand(vertical) | None |

### Python
```python
face_detection = FaceDetection(0)

face_detection.get_distance('left_eye', 'right_eye')  # avstand
face_detection.get_distance('left_eye', 'right_eye', 'horizontal')  # vannrett avstand
face_detection.get_distance('nose', 'mouth', 'vertical')  # loddrett avstand
```

## Modellens tilstand {#model_state}

Returnerer innlastingstilstanden til ansiktsmodellen.  
Den returnerer 0 hvis modellen ennå ikke er lastet inn, 1 mens den lastes inn, og 2 når innlastingen er ferdig.

<BlockImage module="AI/FaceDetection" id="model_state" />

### Parametere

(ingen)

### Python
```python
face_detection = FaceDetection(0)

face_detection.model_state()
```

## Er et ansikt oppdaget? {#detected}

Om det er funnet et ansikt

<BlockImage module="AI/FaceDetection" id="detected" />

### Parametere

(ingen)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detected()
```
