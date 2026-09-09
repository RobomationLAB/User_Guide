---
title: Kleur
---

# Kleur

Kleur wordt in allerlei grafische programma's gebruikt. 


## Basiskleur {#color_picker}

De eenvoudigste manier om een kleur te krijgen is het **kleurenpalet**.  
Klik je op de witte afgeronde rechthoek, dan verschijnt het kleurenpalet en kun je de gewenste kleur kiezen.

<BlockImage module="common/color" id="color_picker" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| color | Kleur | Kleurvoorkeuze | zwart(black), rood(red), geel(yellow), groen(green),<br>cyaan(cyan), blauw(blue), magenta(magenta), wit(white) | - |

### Python
```python
# bijvoorbeeld: bij de voorkeuze rood
Utils.color('red')
```

## Schuifregelaarkleur {#color_slider}

Met het blok **schuifregelaarkleur** kun je met een ronde schuifregelaar en een balkschuifregelaar zelf een kleur samenstellen.  
Klik je op de witte afgeronde rechthoek, dan verschijnen een rond kleurenwiel waarmee je de waarden **rood (R), groen (G) en blauw (B)** instelt en een balkschuifregelaar waarmee je de **helderheid** instelt.

<BlockImage module="common/color" id="color_slider" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| color | Kleur | Kleurenwiel + helderheidsschuifregelaar | r: 0~255, g: 0~255, b: 0~255 | - |

### Python
```python
# de kleur die je in het kleurenwiel kiest → [R, G, B]
Utils.color_slider(255, 128, 0)
```

## RGB-kleur {#color_rgb}

Het blok **RGB-kleur** maakt een RGB-array door de waarden voor rood, groen en blauw elk apart op te geven.

<BlockImage module="common/color" id="color_rgb" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| r | Invoer (blok) | Waarde voor rood | geheel getal 0 ~ 255 | - |
| g | Invoer (blok) | Waarde voor groen | geheel getal 0 ~ 255 | - |
| b | Invoer (blok) | Waarde voor blauw | geheel getal 0 ~ 255 | - |

### Python
```python
Utils.color_rgb(red, green, blue)
```

## Willekeurige kleur {#color_random}

Het blok **willekeurige kleur** maakt bij elke aanroep een willekeurige RGB-kleur.

<BlockImage module="common/color" id="color_random" />

### Parameters

(geen)

### Python
```python
Utils.random_color()
```
