---
title: Objektgjenkjenning
---

# Objektgjenkjenning

## Instanserklæring {#instance}

Når du legger til en Objektgjenkjenning(ObjectDetection)-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
object_detection = ObjectDetection(0)
# Når det finnes flere instanser
object_detection_1 = ObjectDetection(1)
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Velg kameraenhet {#device}

Angir hvilket kamera som skal brukes til objektgjenkjenningen.

<BlockImage module="AI/ObjectDetection" id="device" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Navn på kameraenhet | Systemets kameraetikett | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.device('')
```

## Last inn modellen {#load_model}

Laster inn den opplærte objektmodellen. Dette må gjøres for at funksjonene i modulen 'Objektgjenkjenning' skal virke.

<BlockImage module="AI/ObjectDetection" id="load_model" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| wait | Avmerkingsboks | Om kjøringen skal vente til innlastingen er ferdig | TRUE / FALSE | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.load_model(wait=True)
```

## Sett maksimalt antall objekter {#max_objects}

Angir hvor mange objekter som kan finnes samtidig. Antallet går fra 0 til 10.

<BlockImage module="AI/ObjectDetection" id="max_objects" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Maks. antall objekter | Heltall 0 til 10 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.max_objects(5)
```

## Sett konfidensterskelen {#confidence_threshold}

Angir den minste sannsynligheten (konfidensen) for objektgjenkjenningen. Bare treff med minst denne sannsynligheten (konfidensen) vises på skjermen. Sannsynligheten (konfidensen) går fra 0 til 1.

<BlockImage module="AI/ObjectDetection" id="confidence_threshold" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Verdien for konfidensterskelen | Desimaltall 0 til 1 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.confidence_threshold(0.5)
```

## Gjenkjenn én gang {#detect_once}

Finner objektene på skjermbildet og markerer dem én enkelt gang.

<BlockImage module="AI/ObjectDetection" id="detect_once" />

### Parametere

(ingen)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detect_once()
```

## Start / stopp kontinuerlig gjenkjenning {#detect_continuous}

Følger objektene på skjermbildet hele tiden og markerer dem på skjermen.

<BlockImage module="AI/ObjectDetection" id="detect_continuous" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Handling | start(start), stopp(stop) | - |

### Python
```python
object_detection = ObjectDetection(0)

# unit = "start"
object_detection.detect_continuous()
# unit = "stop"
object_detection.stop()
```

## Vis resultatet {#display}

Bestemmer om resultatet av objektgjenkjenningen skal vises i kamerabildet eller ikke.

<BlockImage module="AI/ObjectDetection" id="display" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| on | Nedtrekksalternativ | Visning PÅ / AV | vis(on=True), skjul(off=False) | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.display(True)
object_detection.display(False)
```

## Objektets posisjon {#object_data}

Returnerer posisjonen og størrelsen til det objektet du angir.

<BlockImage module="AI/ObjectDetection" id="object_data" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Objektnavn | 80 objektklasser (`'person'`, `'bicycle'`, `'car'`, `'motorcycle'`, `'airplane'`, `'bus'`, `'cat'`, `'dog'`, `'apple'`, `'cup'`, `'laptop'`, `'cell_phone'` med flere) | - |
| pos | Nedtrekksalternativ | Koordinat | x, y | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'x')
object_detection.object('bicycle', 'y')
```

## Objektrektangelets verdier {#object_square}

Returnerer posisjonen og størrelsen til rektangelet rundt det objektet du angir.

<BlockImage module="AI/ObjectDetection" id="object_square" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Objektnavn | 80 objektklasser | - |
| pos | Nedtrekksalternativ | Rektangelets verdier | min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'width')
object_detection.object('car', 'area')
```

## Avstanden mellom to objekter {#object_distance}

Returnerer avstanden mellom to objektklasser.

<BlockImage module="AI/ObjectDetection" id="object_distance" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Nedtrekksalternativ | Navnet på det første objektet | 80 objektklasser | - |
| unit2 | Nedtrekksalternativ | Navnet på det andre objektet | 80 objektklasser | - |
| type | Nedtrekksalternativ | Type avstand | avstand (utelates eller None), vannrett avstand(horizontal), loddrett avstand(vertical) | None |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.get_distance('person', 'bicycle')  # avstand
object_detection.get_distance('person', 'car', 'horizontal')  # vannrett avstand
```

## Konfidensen for objektet {#object_confidence}

Sannsynligheten (konfidensen) for at det er det objektet du har valgt

<BlockImage module="AI/ObjectDetection" id="object_confidence" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Objektnavn | 80 objektklasser | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_confidence('person')
```

## Modellens tilstand {#model_state}

Returnerer innlastingstilstanden til objektmodellen.  
Den returnerer 0 hvis modellen ennå ikke er lastet inn, 1 mens den lastes inn, og 2 når innlastingen er ferdig.

<BlockImage module="AI/ObjectDetection" id="model_state" />

### Parametere

(ingen)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.model_state()
```

## Er et objekt gjenkjent? {#detected}

Om det er funnet et objekt


<BlockImage module="AI/ObjectDetection" id="detected" />

### Parametere

(ingen)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detected()
```

## Er et bestemt objekt gjenkjent? {#object_detected}

Om det objektet du velger, er funnet

<BlockImage module="AI/ObjectDetection" id="object_detected" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Objektnavn | 80 objektklasser | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_detected('person')
```
