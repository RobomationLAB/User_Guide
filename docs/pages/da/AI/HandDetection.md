---
title: Håndregistrering
---

# Håndregistrering

## Instanserklæring {#instance}

Når du tilføjer en Håndregistrering(HandDetection)-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
hand_detection = HandDetection(0)
# Når der er flere instanser
hand_detection_1 = HandDetection(1)
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Vælg kameraenhed {#device}

Indstiller, hvilket kamera der skal bruges til håndregistreringen.

<BlockImage module="AI/HandDetection" id="device" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Kameraets enhedsnavn | Systemets kameraetiket | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.device('')
```

## Indlæs modellen {#load_model}

Indlæser den trænede håndmodel. Dette trin er nødvendigt for at kunne bruge funktionerne i modulet Håndregistrering.

<BlockImage module="AI/HandDetection" id="load_model" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil indlæsningen er færdig | TRUE / FALSE | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.load_model(wait=True)
```

## Indstil højeste antal hænder {#max_hands}

Bestemmer, om registreringen skal tage udgangspunkt i én hånd eller i begge hænder.

<BlockImage module="AI/HandDetection" id="max_hands" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Antal hænder | én hånd(one), to hænder(both) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.max_hands('one')
hand_detection.max_hands('both')
```

## Registrér én gang {#detect_once}

Finder de hænder, der er i billedet lige nu, og viser dem én enkelt gang.

<BlockImage module="AI/HandDetection" id="detect_once" />

### Parametre

(ingen)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detect_once()
```

## Start / stop kontinuerlig registrering {#detect_continuous}

Følger de hænder, der er i billedet, hele tiden og viser dem på skærmen.

<BlockImage module="AI/HandDetection" id="detect_continuous" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Handling | start(start), stop(stop) | - |

### Python
```python
hand_detection = HandDetection(0)

# unit = "start"
hand_detection.detect_continuous()
# unit = "stop"
hand_detection.stop()
```

## Vis resultatet {#display}

Bestemmer, om resultatet af håndregistreringen skal vises i kamerabilledet eller ikke.

<BlockImage module="AI/HandDetection" id="display" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| on | Rullemenupunkt | Visning TIL / FRA | vis(on=True), skjul(off=False) | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.display(True)
hand_detection.display(False)
```

## Håndens deles koordinater {#hand_data}

Returnerer positionen for håndfladen eller håndleddet på den angivne hånd.

<BlockImage module="AI/HandDetection" id="hand_data" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| side | Rullemenupunkt | Håndens side | venstre(left), højre(right) | - |
| unit | Rullemenupunkt | Hånddel | håndflade(palm), håndled(wrist) | - |
| pos | Rullemenupunkt | Slags koordinat/størrelse | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'palm', 'x')
hand_detection.hand('right', 'wrist', 'y')
hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Fingerleddenes koordinater {#joint_data}

Returnerer koordinaterne for leddene på den angivne finger.

<BlockImage module="AI/HandDetection" id="joint_data" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| side | Rullemenupunkt | Håndens side | venstre(left), højre(right) | - |
| unit | Rullemenupunkt | Finger | tommelfinger(thumb), pegefinger(index), langfinger(middle), ringfinger(ring), lillefinger(pinky) | - |
| joint | Rullemenupunkt | Leddets position | første led(first), andet led(second), tredje led(third), spidsen(last) | - |
| pos | Rullemenupunkt | Koordinat | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.finger('left', 'index', 'first', 'x')
hand_detection.finger('right', 'thumb', 'last', 'y')
```

## Håndrektanglens oplysninger {#hand_square}

Returnerer position og størrelse for rektanglen omkring den angivne hånd.

<BlockImage module="AI/HandDetection" id="hand_square" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| side | Rullemenupunkt | Håndens side | venstre(left), højre(right) | - |
| unit | Rullemenupunkt | Hånddel | hånd(hand), håndflade(palm) | - |
| pos | Rullemenupunkt | Rektangeloplysninger | min. x-position(min_x), maks. x-position(max_x), min. y-position(min_y), maks. y-position(max_y), bredde(width), højde(height), areal(area) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Afstand mellem hånd og hånd {#hand_to_hand_distance}

Returnerer afstanden mellem to hånddele.

<BlockImage module="AI/HandDetection" id="hand_to_hand_distance" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Input (streng) | Første hånddel | Hånd: `'side_unit'` (f.eks. `'left_palm'`). side=left/right, unit=palm/wrist/hand  | - |
| unit2 | Input (streng) | Anden hånddel | Hånd: `'side_unit'` (f.eks. `'right_palm'`). side=left/right, unit=palm/wrist/hand | - |
| type | Rullemenupunkt | Slags afstand | afstand (udelades eller None), vandret afstand(horizontal), lodret afstand(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# hånd ↔ hånd / afstand
hand_detection.get_distance('left_palm', 'right_palm')  
```

## Afstand mellem hånd og finger {#hand_to_joint_distance}

Returnerer afstanden mellem en hånddel og et fingerled.

<BlockImage module="AI/HandDetection" id="hand_to_joint_distance" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Input (streng) | Første del | Hånd: `'side_unit'` (f.eks. `'left_palm'`).side=left/right, unit=palm/wrist/hand | - |
| unit2 | Input (streng) | Anden del | Finger: `'side_unit_joint'` (f.eks. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Rullemenupunkt | Slags afstand | afstand (udelades eller None), vandret afstand(horizontal), lodret afstand(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# hånd ↔ fingerled / vandret afstand
hand_detection.get_distance('left_palm', 'right_index_first')
```

## Afstand mellem finger og finger {#joint_to_joint_distance}

Returnerer afstanden mellem to fingerled.

<BlockImage module="AI/HandDetection" id="joint_to_joint_distance" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Input (streng) | Første del | Finger: `'side_unit_joint'` (f.eks. `'left_thumb_last'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| unit2 | Input (streng) | Anden del | Finger: `'side_unit_joint'` (f.eks. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Rullemenupunkt | Slags afstand | afstand (udelades eller None), vandret afstand(horizontal), lodret afstand(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# fingerled ↔ fingerled / lodret afstand
hand_detection.get_distance('left_thumb_last', 'right_index_first', 'vertical')
```

## Modellens tilstand {#model_state}

Returnerer håndmodellens indlæsningstilstand.  
Den returnerer 0, hvis modellen ikke er indlæst endnu, 1 mens den indlæses, og 2 når indlæsningen er færdig.

<BlockImage module="AI/HandDetection" id="model_state" />

### Parametre

(ingen)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.model_state()
```

## Er der registreret en hånd? {#detected}

Om der er fundet en hånd

<BlockImage module="AI/HandDetection" id="detected" />

### Parametre

(ingen)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detected()
```
