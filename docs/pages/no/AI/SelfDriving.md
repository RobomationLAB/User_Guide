---
title: Selvkjøring med kamera
---

# Selvkjøring med kamera

## Instanserklæring {#instance}

Når du legger til en Selvkjøring med kamera(SelfDriving)-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
self_driving = SelfDriving(0)
# Når det finnes flere instanser
self_driving_1 = SelfDriving(1)
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Velg kameraenhet {#device}

Angir hvilket kamera som skal brukes til selvkjøringen.

<BlockImage module="AI/SelfDriving" id="device" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Navn på kameraenhet | Systemets kameraetikett | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.device('')
```

## Sett kjørefeltfargen {#set_lane_color}

Angir fargen på det venstre og det høyre kjørefeltet.

<BlockImage module="AI/SelfDriving" id="set_lane_color" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| left | Nedtrekksalternativ | Fargen på det venstre kjørefeltet | rød(red), grønn(green), blå(blue) | - |
| right | Nedtrekksalternativ | Fargen på det høyre kjørefeltet | rød(red), grønn(green), blå(blue) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.set_lane('green', 'blue')
```

## Gjenkjenn én gang {#detect_once}

Finner de fargene og kjørefeltene du har valgt, på skjermbildet og markerer områdene deres én enkelt gang.

<BlockImage module="AI/SelfDriving" id="detect_once" />

### Parametere

(ingen)

### Python
```python
self_driving = SelfDriving(0)

self_driving.detect_once()
```

## Start / stopp kontinuerlig gjenkjenning {#detect_continuous}

Følger de fargene og kjørefeltene du har valgt, på skjermbildet hele tiden og markerer områdene deres på skjermen.

<BlockImage module="AI/SelfDriving" id="detect_continuous" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Handling | start(start), stopp(stop) | - |

### Python
```python
self_driving = SelfDriving(0)

# unit = "start"
self_driving.detect_continuous()
# unit = "stop"
self_driving.stop()
```

## Vis resultatet {#display}

Bestemmer om resultatet av farge- og kjørefeltgjenkjenningen skal vises i kamerabildet eller ikke.

<BlockImage module="AI/SelfDriving" id="display" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| on | Nedtrekksalternativ | Visning PÅ / AV | vis(on=True), skjul(off=False) | TRUE |

### Python
```python
self_driving = SelfDriving(0)

self_driving.display(True)
self_driving.display(False)
```

## Kjørefeltdata {#lane_data}

Returnerer posisjonen til eller avstanden til det kjørefeltet du angir.

<BlockImage module="AI/SelfDriving" id="lane_data" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| lane | Nedtrekksalternativ | Kjørefelt | venstre(left), høyre(right) | - |
| unit | Nedtrekksalternativ | Type måling | x, avstand(distance) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane('left', 'x')
self_driving.lane('right', 'distance')
```

## Fargedata {#color_data}

Returnerer posisjonen og størrelsen til den fargen du angir.

<BlockImage module="AI/SelfDriving" id="color_data" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Nedtrekksalternativ | Fargenavn | rød(red), grønn(green), blå(blue) | - |
| unit | Nedtrekksalternativ | Type koordinat/størrelse | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color('red', 'x')
self_driving.color('green', 'y')
self_driving.color('blue', 'area')
```

## Avstanden mellom to farger {#color_to_color}

Returnerer avstanden mellom to farger.

<BlockImage module="AI/SelfDriving" id="color_to_color" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit1 | Nedtrekksalternativ | Første farge | rød(red), grønn(green), blå(blue) | - |
| unit2 | Nedtrekksalternativ | Andre farge | rød(red), grønn(green), blå(blue) | - |
| type | Nedtrekksalternativ | Type avstand | avstand (utelates eller None), vannrett avstand(horizontal), loddrett avstand(vertical) | None |

### Python
```python
self_driving = SelfDriving(0)

self_driving.get_distance('red', 'blue')  # avstand
self_driving.get_distance('green', 'blue', 'horizontal')  # vannrett avstand
```

## Er kjørefeltet oppdaget? {#lane_detected}

Om et bestemt kjørefelt er funnet

<BlockImage module="AI/SelfDriving" id="lane_detected" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| lane | Nedtrekksalternativ | Kjørefelt | venstre(left), høyre(right), begge(both), hvilket som helst(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane_detected('left')
```

## Er fargen oppdaget? {#color_detected}

Om et bestemt fargeområde er funnet

<BlockImage module="AI/SelfDriving" id="color_detected" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Nedtrekksalternativ | Fargenavn | rød(red), grønn(green), blå(blue), hvilken som helst(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color_detected('red')
```
