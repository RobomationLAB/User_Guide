---
title: Farveregistrering
---

# Farveregistrering

## Instanserklæring {#instance}

Når du tilføjer en Farveregistrering(ColorDetection)-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
color_detection = ColorDetection(0)
# Når der er flere instanser
color_detection_1 = ColorDetection(1)
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Vælg kameraenhed {#device}

Indstiller, hvilket kamera der skal bruges til farveregistreringen.

<BlockImage module="AI/ColorDetection" id="device" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Kameraets enhedsnavn | Systemets kameraetiket | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.device('')
```

## Føj en farve til {#register_color}

Føjer en farve til de målfarver, som farveregistreringen skal genkende.

<BlockImage module="AI/ColorDetection" id="register_color" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Rullemenupunkt | Farvens navn | sort(black), rød(red), gul(yellow), grøn(green), cyan(cyan), blå(blue), magenta(magenta), hvid(white) | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.register_color('red', wait=True)
```

## Slet en farve {#delete_color}

Sletter farven fra de målfarver, som farveregistreringen skal genkende.

<BlockImage module="AI/ColorDetection" id="delete_color" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Rullemenupunkt | Farvens navn | sort(black), rød(red), gul(yellow), grøn(green), cyan(cyan), blå(blue), magenta(magenta), hvid(white) | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.delete_color('blue', wait=True)
```

## Indstil arealbetingelsen {#area_condition}

Bestemmer det mindste areal for det farveområde, der skal genkendes. Kun områder, hvis areal er mindst så stort, vises på skærmen.

<BlockImage module="AI/ColorDetection" id="area_condition" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Arealbetingelsens værdi | Reelt tal 0 eller større | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.area_condition(50)
```

## Registrér én gang {#detect_once}

Finder de farver blandt de genkendelige farver, der er i billedet lige nu, og markerer deres områder én enkelt gang.

<BlockImage module="AI/ColorDetection" id="detect_once" />

### Parametre

(ingen)

### Python
```python
color_detection = ColorDetection(0)

color_detection.detect_once()
```

## Start / stop kontinuerlig registrering {#detect_continuous}

Følger de farver blandt de genkendelige farver, der er i billedet, hele tiden og markerer deres områder på skærmen.

<BlockImage module="AI/ColorDetection" id="detect_continuous" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Handling | start(start), stop(stop) | - |

### Python
```python
color_detection = ColorDetection(0)

# unit = "start"
color_detection.detect_continuous()
# unit = "stop"
color_detection.stop()
```

## Vis resultatet {#display}

Bestemmer, om resultatet af farveregistreringen skal vises i kamerabilledet eller ikke.

<BlockImage module="AI/ColorDetection" id="display" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| on | Rullemenupunkt | Visning TIL / FRA | vis(on=True), skjul(off=False) | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.display(True)
color_detection.display(False)
```

## Farveområdets oplysninger {#color_data}

Returnerer position og størrelse for den angivne farve.

<BlockImage module="AI/ColorDetection" id="color_data" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Rullemenupunkt | Farvens navn | sort(black), rød(red), gul(yellow), grøn(green), cyan(cyan), blå(blue), magenta(magenta), hvid(white) | - |
| pos | Rullemenupunkt | Slags koordinat/størrelse | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color('red', 'x')
color_detection.color('green', 'y')
color_detection.color('blue', 'area')
```

## Er en bestemt farve registreret? {#color_detected}

Om den valgte farve er fundet

<BlockImage module="AI/ColorDetection" id="color_detected" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Rullemenupunkt | Farvens navn | sort(black), rød(red), gul(yellow), grøn(green), cyan(cyan), blå(blue), magenta(magenta), hvid(white) | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color_detected('red')
```
