---
title: Kleurdetectie
---

# Kleurdetectie

## Instantie declareren {#instance}

Voeg je een Kleurdetectie(ColorDetection)-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
color_detection = ColorDetection(0)
# als er meerdere instanties zijn
color_detection_1 = ColorDetection(1)
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Camera instellen {#device}

Stelt de camera voor de kleurdetectie in.

<BlockImage module="AI/ColorDetection" id="device" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Naam van het camera-apparaat | Cameralabel van het systeem | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.device('')
```

## Doelkleur toevoegen {#register_color}

Voegt een kleur toe die door de kleurdetectie moet worden herkend.

<BlockImage module="AI/ColorDetection" id="register_color" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| color | Keuzelijstoptie | Naam van de kleur | zwart(black), rood(red), geel(yellow), groen(green), cyaan(cyan), blauw(blue), magenta(magenta), wit(white) | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.register_color('red', wait=True)
```

## Doelkleur verwijderen {#delete_color}

Verwijdert de opgegeven kleur uit de kleuren die door de kleurdetectie moeten worden herkend.

<BlockImage module="AI/ColorDetection" id="delete_color" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| color | Keuzelijstoptie | Naam van de kleur | zwart(black), rood(red), geel(yellow), groen(green), cyaan(cyan), blauw(blue), magenta(magenta), wit(white) | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.delete_color('blue', wait=True)
```

## Detectievoorwaarde voor het oppervlakte instellen {#area_condition}

Bepaalt de minimale grootte van het gebied dat als kleurgebied wordt herkend. Alleen gebieden met een oppervlakte boven deze waarde worden op het scherm getoond.

<BlockImage module="AI/ColorDetection" id="area_condition" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Waarde van de oppervlaktevoorwaarde | decimaal getal ≥ 0 | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.area_condition(50)
```

## Eenmaal kleur detecteren {#detect_once}

Zoekt onder de toegevoegde kleuren die in het huidige beeld voorkomen en markeert hun gebieden precies één keer.

<BlockImage module="AI/ColorDetection" id="detect_once" />

### Parameters

(geen)

### Python
```python
color_detection = ColorDetection(0)

color_detection.detect_once()
```

## Continue kleurdetectie starten / stoppen {#detect_continuous}

Volgt onder de toegevoegde kleuren die in het huidige beeld voorkomen voortdurend en markeert hun gebieden op het scherm.

<BlockImage module="AI/ColorDetection" id="detect_continuous" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Actie | starten(start), stoppen(stop) | - |

### Python
```python
color_detection = ColorDetection(0)

# unit = "start"
color_detection.detect_continuous()
# unit = "stop"
color_detection.stop()
```

## Resultaat tonen {#display}

Bepaalt of het resultaat van de kleurdetectie in het camerabeeld wordt getoond of niet.

<BlockImage module="AI/ColorDetection" id="display" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| on | Keuzelijstoptie | Weergave ON / OFF | tonen(on=True), verbergen(off=False) | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.display(True)
color_detection.display(False)
```

## Positie van het kleurgebied {#color_data}

Geeft de positie en de grootte van de opgegeven kleur terug.

<BlockImage module="AI/ColorDetection" id="color_data" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| color | Keuzelijstoptie | Naam van de kleur | zwart(black), rood(red), geel(yellow), groen(green), cyaan(cyan), blauw(blue), magenta(magenta), wit(white) | - |
| pos | Keuzelijstoptie | Soort coördinaat / grootte | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color('red', 'x')
color_detection.color('green', 'y')
color_detection.color('blue', 'area')
```

## Bepaalde kleur gedetecteerd? {#color_detected}

Of de gekozen kleur is gevonden

<BlockImage module="AI/ColorDetection" id="color_detected" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| color | Keuzelijstoptie | Naam van de kleur | zwart(black), rood(red), geel(yellow), groen(green), cyaan(cyan), blauw(blue), magenta(magenta), wit(white) | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color_detected('red')
```
