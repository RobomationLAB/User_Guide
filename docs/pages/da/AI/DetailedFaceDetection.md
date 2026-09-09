---
title: Detaljeret ansigtsregistrering
---

# Detaljeret ansigtsregistrering

## Instanserklæring {#instance}

Når du tilføjer en Detaljeret ansigtsregistrering(DetailedFaceDetection)-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
detailed_face_detection = DetailedFaceDetection(0)
# Når der er flere instanser
detailed_face_detection_1 = DetailedFaceDetection(1)
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Vælg kameraenhed {#device}

Indstiller, hvilket kamera der skal bruges til den detaljerede ansigtsregistrering.

<BlockImage module="AI/DetailedFaceDetection" id="device" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Kameraets enhedsnavn | Systemets kameraetiket | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.device('')
```

## Indlæs modellen {#load_model}

Indlæser den trænede ansigtsmodel. Dette trin er nødvendigt for at kunne bruge funktionerne i modulet Detaljeret ansigtsregistrering.

<BlockImage module="AI/DetailedFaceDetection" id="load_model" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil indlæsningen er færdig | TRUE / FALSE | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.load_model(wait=True)
```

## Registrér én gang {#detect_once}

Finder de ansigter, der er i billedet lige nu, og viser dem én enkelt gang.

<BlockImage module="AI/DetailedFaceDetection" id="detect_once" />

### Parametre

(ingen)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detect_once()
```

## Start / stop kontinuerlig registrering {#detect_continuous}

Følger de ansigter, der er i billedet, hele tiden og viser dem på skærmen.

<BlockImage module="AI/DetailedFaceDetection" id="detect_continuous" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Handling | start(start), stop(stop) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

# unit = "start"
detailed_face_detection.detect_continuous()
# unit = "stop"
detailed_face_detection.stop()
```

## Vis resultatet {#display}

Bestemmer, om resultatet af ansigtsregistreringen skal vises i kamerabilledet eller ikke.

<BlockImage module="AI/DetailedFaceDetection" id="display" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| on | Rullemenupunkt | Visning TIL / FRA | vis(on=True), skjul(off=False) | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.display(True)
detailed_face_detection.display(False)
```

## Ansigtsdelenes koordinater {#face_data}

Returnerer koordinaterne for hver ansigtsdel.

<BlockImage module="AI/DetailedFaceDetection" id="face_data" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Ansigtsdel | ansigt(face), venstre øje(left eye), højre øje(right eye), mund(mouth), næse(nose), overlæbe(upper lip), underlæbe(lower lip), venstre mundvig(left lip), højre mundvig(right lip), venstre pupil(left pupil), højre pupil(right pupil) | - |
| pos | Rullemenupunkt | Koordinat | x, y | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('x')
detailed_face_detection.left_eye('y')
detailed_face_detection.upper_lip('x')
detailed_face_detection.right_pupil('y')
```

## Ansigtsdelenes rektangeloplysninger {#face_square}

Returnerer position og størrelse for rektanglen omkring hver ansigtsdel.

<BlockImage module="AI/DetailedFaceDetection" id="face_square" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Ansigtsdel | ansigt(face), venstre øje(left eye), højre øje(right eye), mund(mouth) | - |
| pos | Rullemenupunkt | Rektangeloplysninger | min. x-position(min_x), maks. x-position(max_x), min. y-position(min_y), maks. y-position(max_y), bredde(width), højde(height), areal(area) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('min_x')
detailed_face_detection.left_eye('area')
```

## Afstand mellem to dele {#distance}

Returnerer afstanden mellem to af ansigtets dele.

<BlockImage module="AI/DetailedFaceDetection" id="distance" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Rullemenupunkt | Første del | Ansigtsdelens navn | - |
| unit2 | Rullemenupunkt | Anden del | Ansigtsdelens navn | - |
| type | Rullemenupunkt | Slags afstand | afstand (udelades eller None), vandret afstand(horizontal), lodret afstand(vertical) | None |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.get_distance('left_eye', 'right_eye')  # afstand
detailed_face_detection.get_distance('left_pupil', 'right_pupil', 'horizontal')  # vandret afstand
detailed_face_detection.get_distance('upper_lip', 'lower_lip', 'vertical')  # lodret afstand
```

## Modellens tilstand {#model_state}

Returnerer ansigtsmodellens indlæsningsstatus.  
Den returnerer 0, hvis modellen ikke er indlæst endnu, 1 mens den indlæses, og 2 når indlæsningen er færdig.

<BlockImage module="AI/DetailedFaceDetection" id="model_state" />

### Parametre

(ingen)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.model_state()
```

## Er der registreret et ansigt? {#detected}

Om der er fundet et ansigt

<BlockImage module="AI/DetailedFaceDetection" id="detected" />

### Parametre

(ingen)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detected()
```
