---
title: Detaljert ansiktsgjenkjenning
---

# Detaljert ansiktsgjenkjenning

## Instanserklæring {#instance}

Når du legger til en Detaljert ansiktsgjenkjenning(DetailedFaceDetection)-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
detailed_face_detection = DetailedFaceDetection(0)
# Når det finnes flere instanser
detailed_face_detection_1 = DetailedFaceDetection(1)
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Velg kameraenhet {#device}

Angir hvilket kamera som skal brukes til den detaljerte ansiktsgjenkjenningen.

<BlockImage module="AI/DetailedFaceDetection" id="device" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Navn på kameraenhet | Systemets kameraetikett | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.device('')
```

## Last inn modellen {#load_model}

Laster inn den opplærte ansiktsmodellen. Dette må gjøres for at funksjonene i modulen 'Detaljert ansiktsgjenkjenning' skal virke.

<BlockImage module="AI/DetailedFaceDetection" id="load_model" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| wait | Avmerkingsboks | Om kjøringen skal vente til innlastingen er ferdig | TRUE / FALSE | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.load_model(wait=True)
```

## Registrer én gang {#detect_once}

Finner ansiktene på skjermbildet og markerer dem én enkelt gang.

<BlockImage module="AI/DetailedFaceDetection" id="detect_once" />

### Parametere

(ingen)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detect_once()
```

## Start / stopp kontinuerlig gjenkjenning {#detect_continuous}

Følger ansiktene på skjermbildet hele tiden og markerer dem på skjermen.

<BlockImage module="AI/DetailedFaceDetection" id="detect_continuous" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Handling | start(start), stopp(stop) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

# unit = "start"
detailed_face_detection.detect_continuous()
# unit = "stop"
detailed_face_detection.stop()
```

## Vis resultatet {#display}

Bestemmer om resultatet av ansiktsgjenkjenningen skal vises i kamerabildet eller ikke.

<BlockImage module="AI/DetailedFaceDetection" id="display" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| on | Nedtrekksalternativ | Visning PÅ / AV | vis(on=True), skjul(off=False) | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.display(True)
detailed_face_detection.display(False)
```

## Koordinatene til ansiktsdelene {#face_data}

Returnerer koordinaten til hver del av ansiktet.

<BlockImage module="AI/DetailedFaceDetection" id="face_data" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Del av ansiktet | ansikt(face), venstre øye(left eye), høyre øye(right eye), munn(mouth), nese(nose), overleppe(upper lip), underleppe(lower lip), venstre munnvik(left lip), høyre munnvik(right lip), venstre pupill(left pupil), høyre pupill(right pupil) | - |
| pos | Nedtrekksalternativ | Koordinat | x, y | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('x')
detailed_face_detection.left_eye('y')
detailed_face_detection.upper_lip('x')
detailed_face_detection.right_pupil('y')
```

## Rektangelet rundt en ansiktsdel {#face_square}

Returnerer posisjonen og størrelsen til rektangelet rundt hver del av ansiktet.

<BlockImage module="AI/DetailedFaceDetection" id="face_square" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Del av ansiktet | ansikt(face), venstre øye(left eye), høyre øye(right eye), munn(mouth) | - |
| pos | Nedtrekksalternativ | Rektangelets verdier | minste x-posisjon(min_x), største x-posisjon(max_x), minste y-posisjon(min_y), største y-posisjon(max_y), bredde(width), høyde(height), areal(area) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('min_x')
detailed_face_detection.left_eye('area')
```

## Avstanden mellom to deler {#distance}

Returnerer avstanden mellom to av ansiktsdelene.

<BlockImage module="AI/DetailedFaceDetection" id="distance" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Nedtrekksalternativ | Første del | Navnet på en ansiktsdel | - |
| unit2 | Nedtrekksalternativ | Andre del | Navnet på en ansiktsdel | - |
| type | Nedtrekksalternativ | Type avstand | avstand (utelates eller None), vannrett avstand(horizontal), loddrett avstand(vertical) | None |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.get_distance('left_eye', 'right_eye')  # avstand
detailed_face_detection.get_distance('left_pupil', 'right_pupil', 'horizontal')  # vannrett avstand
detailed_face_detection.get_distance('upper_lip', 'lower_lip', 'vertical')  # loddrett avstand
```

## Modellens tilstand {#model_state}

Returnerer innlastingsstatusen til ansiktsmodellen.  
Den returnerer 0 hvis modellen ennå ikke er lastet inn, 1 mens den lastes inn, og 2 når innlastingen er ferdig.

<BlockImage module="AI/DetailedFaceDetection" id="model_state" />

### Parametere

(ingen)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.model_state()
```

## Er et ansikt oppdaget? {#detected}

Om det er funnet et ansikt

<BlockImage module="AI/DetailedFaceDetection" id="detected" />

### Parametere

(ingen)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detected()
```
