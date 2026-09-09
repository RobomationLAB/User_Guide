---
title: Håndgjenkjenning
---

# Håndgjenkjenning

## Instanserklæring {#instance}

Når du legger til en Håndgjenkjenning(HandDetection)-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
hand_detection = HandDetection(0)
# Når det finnes flere instanser
hand_detection_1 = HandDetection(1)
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Velg kameraenhet {#device}

Angir hvilket kamera som skal brukes til håndgjenkjenningen.

<BlockImage module="AI/HandDetection" id="device" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Navn på kameraenhet | Systemets kameraetikett | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.device('')
```

## Last inn modellen {#load_model}

Laster inn den opplærte håndmodellen. Dette må gjøres for at funksjonene i modulen 'Håndgjenkjenning' skal virke.

<BlockImage module="AI/HandDetection" id="load_model" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| wait | Avmerkingsboks | Om kjøringen skal vente til innlastingen er ferdig | TRUE / FALSE | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.load_model(wait=True)
```

## Sett målet for antall hender {#max_hands}

Bestemmer om håndgjenkjenningen skal lete etter én hånd eller etter begge hendene.

<BlockImage module="AI/HandDetection" id="max_hands" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Antall hender | én hånd(one), begge hendene(both) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.max_hands('one')
hand_detection.max_hands('both')
```

## Registrer én gang {#detect_once}

Finner hendene på skjermbildet og markerer dem én enkelt gang.

<BlockImage module="AI/HandDetection" id="detect_once" />

### Parametere

(ingen)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detect_once()
```

## Start / stopp kontinuerlig gjenkjenning {#detect_continuous}

Følger hendene på skjermbildet hele tiden og markerer dem på skjermen.

<BlockImage module="AI/HandDetection" id="detect_continuous" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Handling | start(start), stopp(stop) | - |

### Python
```python
hand_detection = HandDetection(0)

# unit = "start"
hand_detection.detect_continuous()
# unit = "stop"
hand_detection.stop()
```

## Vis resultatet {#display}

Bestemmer om resultatet av håndgjenkjenningen skal vises i kamerabildet eller ikke.

<BlockImage module="AI/HandDetection" id="display" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| on | Nedtrekksalternativ | Visning PÅ / AV | vis(on=True), skjul(off=False) | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.display(True)
hand_detection.display(False)
```

## Koordinatene til hånddelene {#hand_data}

Returnerer posisjonen til håndflaten eller håndleddet på den hånden du angir.

<BlockImage module="AI/HandDetection" id="hand_data" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| side | Nedtrekksalternativ | Hvilken hånd | venstre(left), høyre(right) | - |
| unit | Nedtrekksalternativ | Del av hånden | håndflate(palm), håndledd(wrist) | - |
| pos | Nedtrekksalternativ | Type koordinat/størrelse | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'palm', 'x')
hand_detection.hand('right', 'wrist', 'y')
hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Koordinatene til fingerleddene {#joint_data}

Returnerer koordinaten til leddet på den fingeren du angir.

<BlockImage module="AI/HandDetection" id="joint_data" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| side | Nedtrekksalternativ | Hvilken hånd | venstre(left), høyre(right) | - |
| unit | Nedtrekksalternativ | Finger | tommel(thumb), pekefinger(index), langfinger(middle), ringfinger(ring), lillefinger(pinky) | - |
| joint | Nedtrekksalternativ | Hvilket ledd | første ledd(first), andre ledd(second), tredje ledd(third), tuppen(last) | - |
| pos | Nedtrekksalternativ | Koordinat | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.finger('left', 'index', 'first', 'x')
hand_detection.finger('right', 'thumb', 'last', 'y')
```

## Håndrektangelets verdier {#hand_square}

Returnerer posisjonen og størrelsen til rektangelet rundt den hånden du angir.

<BlockImage module="AI/HandDetection" id="hand_square" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| side | Nedtrekksalternativ | Hvilken hånd | venstre(left), høyre(right) | - |
| unit | Nedtrekksalternativ | Del av hånden | hånd(hand), håndflate(palm) | - |
| pos | Nedtrekksalternativ | Rektangelets verdier | minste x-posisjon(min_x), største x-posisjon(max_x), minste y-posisjon(min_y), største y-posisjon(max_y), bredde(width), høyde(height), areal(area) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Avstanden mellom hånd og hånd {#hand_to_hand_distance}

Returnerer avstanden mellom to hånddeler.

<BlockImage module="AI/HandDetection" id="hand_to_hand_distance" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Inndata (streng) | Første hånddel | Hånd: `'side_unit'` (f.eks. `'left_palm'`). side=left/right, unit=palm/wrist/hand  | - |
| unit2 | Inndata (streng) | Andre hånddel | Hånd: `'side_unit'` (f.eks. `'right_palm'`). side=left/right, unit=palm/wrist/hand | - |
| type | Nedtrekksalternativ | Type avstand | avstand (utelates eller None), vannrett avstand(horizontal), loddrett avstand(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# hånd ↔ hånd / avstand
hand_detection.get_distance('left_palm', 'right_palm')  
```

## Avstanden mellom hånd og finger {#hand_to_joint_distance}

Returnerer avstanden mellom en hånddel og et fingerledd.

<BlockImage module="AI/HandDetection" id="hand_to_joint_distance" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Inndata (streng) | Første del | Hånd: `'side_unit'` (f.eks. `'left_palm'`). side=left/right, unit=palm/wrist/hand | - |
| unit2 | Inndata (streng) | Andre del | Finger: `'side_unit_joint'` (f.eks. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Nedtrekksalternativ | Type avstand | avstand (utelates eller None), vannrett avstand(horizontal), loddrett avstand(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# hånd ↔ fingerledd / vannrett avstand
hand_detection.get_distance('left_palm', 'right_index_first')
```

## Avstanden mellom finger og finger {#joint_to_joint_distance}

Returnerer avstanden mellom to fingerledd.

<BlockImage module="AI/HandDetection" id="joint_to_joint_distance" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Inndata (streng) | Første del | Finger: `'side_unit_joint'` (f.eks. `'left_thumb_last'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| unit2 | Inndata (streng) | Andre del | Finger: `'side_unit_joint'` (f.eks. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Nedtrekksalternativ | Type avstand | avstand (utelates eller None), vannrett avstand(horizontal), loddrett avstand(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# fingerledd ↔ fingerledd / loddrett avstand
hand_detection.get_distance('left_thumb_last', 'right_index_first', 'vertical')
```

## Modellens tilstand {#model_state}

Returnerer innlastingsstatusen til håndmodellen.  
Den returnerer 0 hvis modellen ennå ikke er lastet inn, 1 mens den lastes inn, og 2 når innlastingen er ferdig.

<BlockImage module="AI/HandDetection" id="model_state" />

### Parametere

(ingen)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.model_state()
```

## Er en hånd registrert? {#detected}

Om det er funnet en hånd

<BlockImage module="AI/HandDetection" id="detected" />

### Parametere

(ingen)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detected()
```
