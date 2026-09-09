---
title: Fargegjenkjenning
---

# Fargegjenkjenning

## Instanserklæring {#instance}

Når du legger til en Fargegjenkjenning(ColorDetection)-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
color_detection = ColorDetection(0)
# Når det finnes flere instanser
color_detection_1 = ColorDetection(1)
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Velg kameraenhet {#device}

Angir hvilket kamera som skal brukes til fargegjenkjenningen.

<BlockImage module="AI/ColorDetection" id="device" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Navn på kameraenhet | Systemets kameraetikett | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.device('')
```

## Registrer en farge {#register_color}

Legger til en farge blant målfargene som fargegjenkjenningen skal kjenne igjen.

<BlockImage module="AI/ColorDetection" id="register_color" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Nedtrekksalternativ | Fargenavn | svart(black), rød(red), gul(yellow), grønn(green), cyan(cyan), blå(blue), magenta(magenta), hvit(white) | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.register_color('red', wait=True)
```

## Slett en farge {#delete_color}

Sletter fargen fra målfargene som fargegjenkjenningen skal kjenne igjen.

<BlockImage module="AI/ColorDetection" id="delete_color" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Nedtrekksalternativ | Fargenavn | svart(black), rød(red), gul(yellow), grønn(green), cyan(cyan), blå(blue), magenta(magenta), hvit(white) | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.delete_color('blue', wait=True)
```

## Sett arealvilkåret {#area_condition}

Angir hvor stort et fargeområde minst må være for å bli gjenkjent. Bare områder med minst dette arealet vises på skjermen.

<BlockImage module="AI/ColorDetection" id="area_condition" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Verdien for arealvilkåret | Desimaltall 0 eller større | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.area_condition(50)
```

## Gjenkjenn én gang {#detect_once}

Finner de fargene på skjermbildet som kan gjenkjennes, og markerer områdene deres én enkelt gang.

<BlockImage module="AI/ColorDetection" id="detect_once" />

### Parametere

(ingen)

### Python
```python
color_detection = ColorDetection(0)

color_detection.detect_once()
```

## Start / stopp kontinuerlig gjenkjenning {#detect_continuous}

Følger de fargene på skjermbildet som kan gjenkjennes, hele tiden og markerer områdene deres på skjermen.

<BlockImage module="AI/ColorDetection" id="detect_continuous" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Handling | start(start), stopp(stop) | - |

### Python
```python
color_detection = ColorDetection(0)

# unit = "start"
color_detection.detect_continuous()
# unit = "stop"
color_detection.stop()
```

## Vis resultatet {#display}

Bestemmer om resultatet av fargegjenkjenningen skal vises i kamerabildet eller ikke.

<BlockImage module="AI/ColorDetection" id="display" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| on | Nedtrekksalternativ | Visning PÅ / AV | vis(on=True), skjul(off=False) | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.display(True)
color_detection.display(False)
```

## Fargeinformasjon {#color_data}

Returnerer posisjonen og størrelsen til den fargen du angir.

<BlockImage module="AI/ColorDetection" id="color_data" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Nedtrekksalternativ | Fargenavn | svart(black), rød(red), gul(yellow), grønn(green), cyan(cyan), blå(blue), magenta(magenta), hvit(white) | - |
| pos | Nedtrekksalternativ | Type koordinat/størrelse | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color('red', 'x')
color_detection.color('green', 'y')
color_detection.color('blue', 'area')
```

## Er en bestemt farge registrert? {#color_detected}

Om den fargen du velger, er funnet

<BlockImage module="AI/ColorDetection" id="color_detected" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Nedtrekksalternativ | Fargenavn | svart(black), rød(red), gul(yellow), grønn(green), cyan(cyan), blå(blue), magenta(magenta), hvit(white) | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color_detected('red')
```
