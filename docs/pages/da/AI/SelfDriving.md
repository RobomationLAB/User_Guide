---
title: Kamerabaseret selvkørsel
---

# Kamerabaseret selvkørsel

## Instanserklæring {#instance}

Når du tilføjer en Kamerabaseret selvkørsel(SelfDriving)-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
self_driving = SelfDriving(0)
# Når der er flere instanser
self_driving_1 = SelfDriving(1)
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Vælg kameraenhed {#device}

Indstiller, hvilket kamera der skal bruges til den kamerabaserede selvkørsel.

<BlockImage module="AI/SelfDriving" id="device" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Kameraets enhedsnavn | Systemets kameraetiket | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.device('')
```

## Indstil banernes farve {#set_lane_color}

Indstiller farven for den venstre og den højre bane.

<BlockImage module="AI/SelfDriving" id="set_lane_color" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| left | Rullemenupunkt | Venstre banes farve | rød(red), grøn(green), blå(blue) | - |
| right | Rullemenupunkt | Højre banes farve | rød(red), grøn(green), blå(blue) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.set_lane('green', 'blue')
```

## Registrér én gang {#detect_once}

Finder den valgte farve eller bane i billedet og markerer området én enkelt gang.

<BlockImage module="AI/SelfDriving" id="detect_once" />

### Parametre

(ingen)

### Python
```python
self_driving = SelfDriving(0)

self_driving.detect_once()
```

## Start / stop kontinuerlig registrering {#detect_continuous}

Følger de valgte farver og baner i billedet hele tiden og markerer deres områder på skærmen.

<BlockImage module="AI/SelfDriving" id="detect_continuous" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Handling | start(start), stop(stop) | - |

### Python
```python
self_driving = SelfDriving(0)

# unit = "start"
self_driving.detect_continuous()
# unit = "stop"
self_driving.stop()
```

## Vis resultatet {#display}

Bestemmer, om resultatet af farve- og baneregistreringen skal vises i kamerabilledet eller ikke.

<BlockImage module="AI/SelfDriving" id="display" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| on | Rullemenupunkt | Visning TIL / FRA | vis(on=True), skjul(off=False) | TRUE |

### Python
```python
self_driving = SelfDriving(0)

self_driving.display(True)
self_driving.display(False)
```

## Banens data {#lane_data}

Returnerer position eller afstand for den angivne bane.

<BlockImage module="AI/SelfDriving" id="lane_data" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| lane | Rullemenupunkt | Bane | venstre(left), højre(right) | - |
| unit | Rullemenupunkt | Slags måleværdi | x, afstand(distance) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane('left', 'x')
self_driving.lane('right', 'distance')
```

## Farveområdets data {#color_data}

Returnerer position og størrelse for den angivne farve.

<BlockImage module="AI/SelfDriving" id="color_data" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Rullemenupunkt | Farvens navn | rød(red), grøn(green), blå(blue) | - |
| unit | Rullemenupunkt | Slags koordinat/størrelse | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color('red', 'x')
self_driving.color('green', 'y')
self_driving.color('blue', 'area')
```

## Afstand mellem to farver {#color_to_color}

Returnerer afstanden mellem to farver.

<BlockImage module="AI/SelfDriving" id="color_to_color" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Rullemenupunkt | Første farve | rød(red), grøn(green), blå(blue) | - |
| unit2 | Rullemenupunkt | Anden farve | rød(red), grøn(green), blå(blue) | - |
| type | Rullemenupunkt | Slags afstand | afstand (udelades eller None), vandret afstand(horizontal), lodret afstand(vertical) | None |

### Python
```python
self_driving = SelfDriving(0)

self_driving.get_distance('red', 'blue')  # afstand
self_driving.get_distance('green', 'blue', 'horizontal')  # vandret afstand
```

## Er vognbanen registreret? {#lane_detected}

Om en bestemt vognbane er fundet

<BlockImage module="AI/SelfDriving" id="lane_detected" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| lane | Rullemenupunkt | Vognbane | venstre(left), højre(right), begge(both), en hvilken som helst(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane_detected('left')
```

## Er farveområdet registreret? {#color_detected}

Om et bestemt farveområde er fundet

<BlockImage module="AI/SelfDriving" id="color_detected" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Rullemenupunkt | Farvens navn | rød(red), grøn(green), blå(blue), en hvilken som helst(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color_detected('red')
```
