---
title: Ansigtsregistrering
---

# Ansigtsregistrering

## Instanserklæring {#instance}

Når du tilføjer en Ansigtsregistrering(FaceDetection)-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
face_detection = FaceDetection(0)
# Når der er flere instanser
face_detection_1 = FaceDetection(1)
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Vælg kameraenhed {#device}

Indstiller, hvilket kamera der skal bruges til ansigtsregistreringen.

<BlockImage module="AI/FaceDetection" id="device" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Kameraets enhedsnavn | Systemets kameraetiket | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.device('')
```

## Indlæs modellen {#load_model}

Indlæser den trænede ansigtsmodel. Dette trin er nødvendigt for at kunne bruge funktionerne i modulet Ansigtsregistrering.

<BlockImage module="AI/FaceDetection" id="load_model" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil indlæsningen er færdig | TRUE / FALSE | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.load_model(wait=True)
```

## Registrér én gang {#detect_once}

Finder de ansigter, der er i billedet lige nu, og viser dem én enkelt gang.

<BlockImage module="AI/FaceDetection" id="detect_once" />

### Parametre

(ingen)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detect_once()
```

## Start / stop kontinuerlig registrering {#detect_continuous}

Følger de ansigter, der er i billedet, hele tiden og viser dem på skærmen.

<BlockImage module="AI/FaceDetection" id="detect_continuous" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Handling | start(start), stop(stop) | - |

### Python
```python
face_detection = FaceDetection(0)

# unit = "start"
face_detection.detect_continuous()
# unit = "stop"
face_detection.stop()
```

## Vis resultatet {#display}

Bestemmer, om resultatet af ansigtsregistreringen skal vises i kamerabilledet eller ikke.

<BlockImage module="AI/FaceDetection" id="display" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| on | Rullemenupunkt | Visning TIL / FRA | vis(on=True), skjul(off=False) | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.display(True)
face_detection.display(False)
```

## Ansigtsdelenes position {#face_data}

Returnerer positionskoordinaterne for ansigtet eller en ansigtsdel.

<BlockImage module="AI/FaceDetection" id="face_data" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Ansigtsdel | ansigt(face), venstre øje(left eye), højre øje(right eye), venstre øre(left ear), højre øre(right ear), næse(nose), mund(mouth) | - |
| pos | Rullemenupunkt | Slags koordinat | x, y | - |

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

## Ansigtsrektanglens oplysninger {#face_square}

Returnerer position og størrelse for rektanglen omkring ansigtet.

<BlockImage module="AI/FaceDetection" id="face_square" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| pos | Rullemenupunkt | Rektangeloplysninger | min. x-position(min_x), maks. x-position(max_x), min. y-position(min_y), maks. y-position(max_y), bredde(width), højde(height), areal(area) | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('min_x')
face_detection.face('width')
face_detection.face('area')
```

## Afstand mellem to dele {#distance}

Returnerer afstanden mellem to dele af ansigtet.

<BlockImage module="AI/FaceDetection" id="distance" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Rullemenupunkt | Første del | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| unit2 | Rullemenupunkt | Anden del | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| type | Rullemenupunkt | Slags afstand | afstand (udelades eller None), vandret afstand(horizontal), lodret afstand(vertical) | None |

### Python
```python
face_detection = FaceDetection(0)

face_detection.get_distance('left_eye', 'right_eye')  # afstand
face_detection.get_distance('left_eye', 'right_eye', 'horizontal')  # vandret afstand
face_detection.get_distance('nose', 'mouth', 'vertical')  # lodret afstand
```

## Modellens tilstand {#model_state}

Returnerer ansigtsmodellens indlæsningsstatus.  
Den returnerer 0, hvis modellen ikke er indlæst endnu, 1 mens den indlæses, og 2 når indlæsningen er færdig.

<BlockImage module="AI/FaceDetection" id="model_state" />

### Parametre

(ingen)

### Python
```python
face_detection = FaceDetection(0)

face_detection.model_state()
```

## Er der registreret et ansigt? {#detected}

Om der er fundet et ansigt

<BlockImage module="AI/FaceDetection" id="detected" />

### Parametre

(ingen)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detected()
```
