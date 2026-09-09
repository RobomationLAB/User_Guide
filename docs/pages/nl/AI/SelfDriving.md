---
title: Zelfrijden met camera
---

# Zelfrijden met camera

## Instantie declareren {#instance}

Voeg je een Zelfrijden met camera(SelfDriving)-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
self_driving = SelfDriving(0)
# als er meerdere instanties zijn
self_driving_1 = SelfDriving(1)
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Camera instellen {#device}

Stelt de camera voor het zelfrijden met camera in.

<BlockImage module="AI/SelfDriving" id="device" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Naam van het camera-apparaat | Cameralabel van het systeem | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.device('')
```

## Rijstrookkleur instellen {#set_lane_color}

Stelt de kleur van de linker- en de rechterrijstrook in.

<BlockImage module="AI/SelfDriving" id="set_lane_color" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| left | Keuzelijstoptie | Kleur van de linkerrijstrook | rood(red), groen(green), blauw(blue) | - |
| right | Keuzelijstoptie | Kleur van de rechterrijstrook | rood(red), groen(green), blauw(blue) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.set_lane('green', 'blue')
```

## Eenmaal detecteren {#detect_once}

Zoekt de gekozen kleuren of rijstroken in het beeld en markeert hun gebieden precies één keer.

<BlockImage module="AI/SelfDriving" id="detect_once" />

### Parameters

(geen)

### Python
```python
self_driving = SelfDriving(0)

self_driving.detect_once()
```

## Continue detectie starten / stoppen {#detect_continuous}

Volgt de gekozen kleuren of rijstroken in het beeld voortdurend en markeert hun gebieden op het scherm.

<BlockImage module="AI/SelfDriving" id="detect_continuous" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Actie | starten(start), stoppen(stop) | - |

### Python
```python
self_driving = SelfDriving(0)

# unit = "start"
self_driving.detect_continuous()
# unit = "stop"
self_driving.stop()
```

## Resultaat tonen {#display}

Bepaalt of het resultaat van de kleur- of rijstrookdetectie in het camerabeeld wordt getoond of niet.

<BlockImage module="AI/SelfDriving" id="display" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| on | Keuzelijstoptie | Weergave ON / OFF | tonen(on=True), verbergen(off=False) | TRUE |

### Python
```python
self_driving = SelfDriving(0)

self_driving.display(True)
self_driving.display(False)
```

## Rijstrookgegevens {#lane_data}

Geeft de positie of de afstand van de opgegeven rijstrook terug.

<BlockImage module="AI/SelfDriving" id="lane_data" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| lane | Keuzelijstoptie | Rijstrook | links(left), rechts(right) | - |
| unit | Keuzelijstoptie | Soort meetwaarde | x, afstand(distance) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane('left', 'x')
self_driving.lane('right', 'distance')
```

## Kleurgegevens {#color_data}

Geeft de positie en de grootte van de opgegeven kleur terug.

<BlockImage module="AI/SelfDriving" id="color_data" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| color | Keuzelijstoptie | Naam van de kleur | rood(red), groen(green), blauw(blue) | - |
| unit | Keuzelijstoptie | Soort coördinaat / grootte | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color('red', 'x')
self_driving.color('green', 'y')
self_driving.color('blue', 'area')
```

## Afstand tussen twee kleurgebieden {#color_to_color}

Geeft de afstand tussen twee kleuren terug.

<BlockImage module="AI/SelfDriving" id="color_to_color" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit1 | Keuzelijstoptie | Eerste kleur | rood(red), groen(green), blauw(blue) | - |
| unit2 | Keuzelijstoptie | Tweede kleur | rood(red), groen(green), blauw(blue) | - |
| type | Keuzelijstoptie | Soort afstand | afstand (weggelaten of None), horizontale afstand(horizontal), verticale afstand(vertical) | None |

### Python
```python
self_driving = SelfDriving(0)

self_driving.get_distance('red', 'blue')  # afstand
self_driving.get_distance('green', 'blue', 'horizontal')  # horizontale afstand
```

## Rijstrook gedetecteerd? {#lane_detected}

Of een bepaalde rijstrook is gevonden

<BlockImage module="AI/SelfDriving" id="lane_detected" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| lane | Keuzelijstoptie | Rijstrook | links(left), rechts(right), beide(both), willekeurig(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane_detected('left')
```

## Kleurgebied gedetecteerd? {#color_detected}

Of een bepaald kleurgebied is gevonden

<BlockImage module="AI/SelfDriving" id="color_detected" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| color | Keuzelijstoptie | Naam van de kleur | rood(red), groen(green), blauw(blue), willekeurig(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color_detected('red')
```
