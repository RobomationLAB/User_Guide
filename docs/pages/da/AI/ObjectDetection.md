---
title: Objektregistrering
---

# Objektregistrering

## Instanserklæring {#instance}

Når du tilføjer en Objektregistrering(ObjectDetection)-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
object_detection = ObjectDetection(0)
# Når der er flere instanser
object_detection_1 = ObjectDetection(1)
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Vælg kameraenhed {#device}

Indstiller, hvilket kamera der skal bruges til objektregistreringen.

<BlockImage module="AI/ObjectDetection" id="device" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Kameraets enhedsnavn | Systemets kameraetiket | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.device('')
```

## Indlæs modellen {#load_model}

Indlæser den trænede objektmodel. Dette trin er nødvendigt for at kunne bruge funktionerne i modulet Objektregistrering.

<BlockImage module="AI/ObjectDetection" id="load_model" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil indlæsningen er færdig | TRUE / FALSE | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.load_model(wait=True)
```

## Indstil maks. antal objekter {#max_objects}

Indstiller, hvor mange objekter der højst kan findes. Antallet går fra 0 til 10.

<BlockImage module="AI/ObjectDetection" id="max_objects" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Maks. antal objekter | Heltal 0 til 10 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.max_objects(5)
```

## Indstil sikkerhedsgrænsen {#confidence_threshold}

Indstiller den mindste sandsynlighed (sikkerhed) for objektgenkendelsen. Kun objekter, hvis sandsynlighed (sikkerhed) er mindst så høj, vises på skærmen. Sandsynligheden (sikkerheden) går fra 0 til 1.

<BlockImage module="AI/ObjectDetection" id="confidence_threshold" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Sikkerhedsgrænse | Reelt tal 0 til 1 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.confidence_threshold(0.5)
```

## Genkend én gang {#detect_once}

Finder de objekter, der er i billedet lige nu, og viser dem én enkelt gang.

<BlockImage module="AI/ObjectDetection" id="detect_once" />

### Parametre

(ingen)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detect_once()
```

## Start / stop kontinuerlig genkendelse {#detect_continuous}

Følger de objekter, der er i billedet, hele tiden og viser dem på skærmen.

<BlockImage module="AI/ObjectDetection" id="detect_continuous" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Handling | start(start), stop(stop) | - |

### Python
```python
object_detection = ObjectDetection(0)

# unit = "start"
object_detection.detect_continuous()
# unit = "stop"
object_detection.stop()
```

## Vis resultatet {#display}

Bestemmer, om resultatet af objektregistreringen skal vises i kamerabilledet eller ikke.

<BlockImage module="AI/ObjectDetection" id="display" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| on | Rullemenupunkt | Visning TIL / FRA | vis(on=True), skjul(off=False) | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.display(True)
object_detection.display(False)
```

## Objektets positionsoplysninger {#object_data}

Returnerer position og størrelse for det angivne objekt.

<BlockImage module="AI/ObjectDetection" id="object_data" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Objektets navn | 80 objektklasser (`'person'`, `'bicycle'`, `'car'`, `'motorcycle'`, `'airplane'`, `'bus'`, `'cat'`, `'dog'`, `'apple'`, `'cup'`, `'laptop'`, `'cell_phone'` med flere) | - |
| pos | Rullemenupunkt | Koordinat | x, y | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'x')
object_detection.object('bicycle', 'y')
```

## Objektrektanglens oplysninger {#object_square}

Returnerer position og størrelse for rektanglen omkring det angivne objekt.

<BlockImage module="AI/ObjectDetection" id="object_square" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Objektets navn | 80 objektklasser | - |
| pos | Rullemenupunkt | Rektangeloplysninger | min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'width')
object_detection.object('car', 'area')
```

## Afstand mellem to objekter {#object_distance}

Returnerer afstanden mellem to objektklasser.

<BlockImage module="AI/ObjectDetection" id="object_distance" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Rullemenupunkt | Første objekts navn | 80 objektklasser | - |
| unit2 | Rullemenupunkt | Andet objekts navn | 80 objektklasser | - |
| type | Rullemenupunkt | Slags afstand | afstand (udelades eller None), vandret afstand(horizontal), lodret afstand(vertical) | None |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.get_distance('person', 'bicycle')  # afstand
object_detection.get_distance('person', 'car', 'horizontal')  # vandret afstand
```

## Objektets sikkerhed {#object_confidence}

Sandsynligheden (sikkerheden) for at det valgte objekt passer

<BlockImage module="AI/ObjectDetection" id="object_confidence" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Objektets navn | 80 objektklasser | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_confidence('person')
```

## Modellens tilstand {#model_state}

Returnerer objektmodellens indlæsningsstatus.  
Den returnerer 0, hvis modellen ikke er indlæst endnu, 1 mens den indlæses, og 2 når indlæsningen er færdig.

<BlockImage module="AI/ObjectDetection" id="model_state" />

### Parametre

(ingen)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.model_state()
```

## Er der genkendt et objekt? {#detected}

Om der er fundet et objekt

<BlockImage module="AI/ObjectDetection" id="detected" />

### Parametre

(ingen)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detected()
```

## Er et bestemt objekt genkendt? {#object_detected}

Om det valgte objekt er fundet

<BlockImage module="AI/ObjectDetection" id="object_detected" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Objektets navn | 80 objektklasser | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_detected('person')
```
