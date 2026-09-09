---
title: Farge
---

# Farge

Farger brukes i mange slags grafiske programmer. 


## Grunnfarge {#color_picker}

Den enkleste måten å få en farge på er å bruke **fargepaletten**.  
Klikker du på det hvite, avrundede feltet, kommer fargepaletten fram, og du kan velge den fargen du vil ha.

<BlockImage module="common/color" id="color_picker" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Farge | Ferdige farger | svart(black), rød(red), gul(yellow), grønn(green),<br>cyan(cyan), blå(blue), magenta(magenta), hvit(white) | - |

### Python
```python
# f.eks. når du velger den røde fargen
Utils.color('red')
```

## Fargevelger {#color_slider}

Med blokken **fargevelger** kan du sette sammen fargen selv ved hjelp av et hjul og en glidebryter.  
Klikker du på det hvite, avrundede feltet, kommer det fram et rundt fargehjul der du justerer verdiene for **rød (R), grønn (G) og blå (B)**, og en glidebryter der du justerer **lysstyrken**.

<BlockImage module="common/color" id="color_slider" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Farge | Fargehjul + glidebryter for lysstyrke | r: 0~255, g: 0~255, b: 0~255 | - |

### Python
```python
# fargen du velger i fargehjulet → [R, G, B]
Utils.color_slider(255, 128, 0)
```

## RGB-farge {#color_rgb}

Blokken **RGB-farge** lager en RGB-tabell ut fra verdiene du angir for rød, grønn og blå.

<BlockImage module="common/color" id="color_rgb" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| r | Inndata (blokk) | Rødverdi | Heltall 0 til 255 | - |
| g | Inndata (blokk) | Grønnverdi | Heltall 0 til 255 | - |
| b | Inndata (blokk) | Blåverdi | Heltall 0 til 255 | - |

### Python
```python
Utils.color_rgb(red, green, blue)
```

## Tilfeldig farge {#color_random}

Blokken **tilfeldig farge** lager en tilfeldig RGB-farge hver gang den kalles.

<BlockImage module="common/color" id="color_random" />

### Parametere

(ingen)

### Python
```python
Utils.random_color()
```
