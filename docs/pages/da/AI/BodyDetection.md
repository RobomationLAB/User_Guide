---
title: Kropsregistrering
---

# Kropsregistrering

## Instanserklæring {#instance}

Når du tilføjer en Kropsregistrering(BodyDetection)-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
body_detection = BodyDetection(0)
# Når der er flere instanser
body_detection_1 = BodyDetection(1)
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Vælg kameraenhed {#device}

Indstiller, hvilket kamera der skal bruges til kropsregistreringen.

<BlockImage module="AI/BodyDetection" id="device" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Kameraets enhedsnavn | Systemets kameraetiket | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.device('')
```

## Indlæs modellen {#load_model}

Indlæser den trænede kropsmodel. Dette trin er nødvendigt for at kunne bruge funktionerne i modulet Kropsregistrering.

<BlockImage module="AI/BodyDetection" id="load_model" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil indlæsningen er færdig | TRUE / FALSE | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.load_model(wait=True)
```

## Registrér én gang {#detect_once}

Finder den krop, der er i billedet lige nu, og viser den én enkelt gang.

<BlockImage module="AI/BodyDetection" id="detect_once" />

### Parametre

(ingen)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detect_once()
```

## Start / stop kontinuerlig registrering {#detect_continuous}

Følger den krop, der er i billedet, hele tiden og viser den på skærmen.

<BlockImage module="AI/BodyDetection" id="detect_continuous" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Handling | start(start), stop(stop) | - |

### Python
```python
body_detection = BodyDetection(0)

# unit = "start"
body_detection.detect_continuous()
# unit = "stop"
body_detection.stop()
```

## Vis resultatet {#display}

Bestemmer, om resultatet af kropsregistreringen skal vises i kamerabilledet eller ikke.

<BlockImage module="AI/BodyDetection" id="display" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| on | Rullemenupunkt | Visning TIL / FRA | vis(on=True), skjul(off=False) | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.display(True)
body_detection.display(False)
```

## Kropsdelenes koordinater {#body_data}

Returnerer koordinaterne for hver kropsdel.

<BlockImage module="AI/BodyDetection" id="body_data" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Kropsdel | næse(nose), mund(mouth), venstre øje(left eye), højre øje(right eye), venstre øre(left ear), højre øre(right ear), venstre skulder(left shoulder), højre skulder(right shoulder), venstre albue(left elbow), højre albue(right elbow), venstre håndled(left wrist), højre håndled(right wrist), venstre hånd(left hand), højre hånd(right hand), venstre hofte(left hip), højre hofte(right hip), venstre knæ(left knee), højre knæ(right knee), venstre ankel(left ankle), højre ankel(right ankle), venstre fod(left foot), højre fod(right foot) | - |
| pos | Rullemenupunkt | Koordinat | x, y | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.nose('x')
body_detection.mouth('y')
body_detection.left_eye('x')
body_detection.right_shoulder('y')
body_detection.left_hand('x')
```

## Afstand mellem to dele {#body_distance}

Returnerer afstanden mellem to af kroppens dele.

<BlockImage module="AI/BodyDetection" id="body_distance" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Rullemenupunkt | Første kropsdel | (se tabellen over kropsdele ovenfor) | - |
| unit2 | Rullemenupunkt | Anden kropsdel | (se tabellen over kropsdele ovenfor) | - |
| type | Rullemenupunkt | Slags afstand | afstand (udelades eller None), vandret afstand(horizontal), lodret afstand(vertical) | None |

### Python
```python
body_detection = BodyDetection(0)

body_detection.get_distance('left_shoulder', 'right_shoulder')  # afstand
body_detection.get_distance('left_wrist', 'right_wrist', 'horizontal')  # vandret afstand
body_detection.get_distance('left_hip', 'left_knee', 'vertical')  # lodret afstand
```

## Modellens tilstand {#model_state}

Returnerer kropsmodellens indlæsningstilstand.  
Den returnerer 0, hvis modellen ikke er indlæst endnu, 1 mens den indlæses, og 2 når indlæsningen er færdig.

<BlockImage module="AI/BodyDetection" id="model_state" />

### Parametre

(ingen)

### Python
```python
body_detection = BodyDetection(0)

body_detection.model_state()
```

## Er der registreret en krop? {#detected}

Om der er fundet en krop

<BlockImage module="AI/BodyDetection" id="detected" />

### Parametre

(ingen)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detected()
```
