---
title: Farve
---

# Farve

Farver bruges i mange forskellige grafikprogrammer. 


## Grundfarve {#color_picker}

Den enkleste måde at få en farve på er at bruge **farvepaletten**.  
Når du klikker på det hvide, afrundede felt, vises farvepaletten, og der kan du vælge den farve, du vil have.

<BlockImage module="common/color" id="color_picker" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Farve | Farveforvalg | sort(black), rød(red), gul(yellow), grøn(green),<br>cyan(cyan), blå(blue), magenta(magenta), hvid(white) | - |

### Python
```python
# f.eks. når forvalget rød er valgt
Utils.color('red')
```

## Skyderfarve {#color_slider}

Med blokken **skyderfarve** kan du selv blande en farve ved hjælp af en cirkelskyder og en bjælkeskyder.  
Når du klikker på det hvide, afrundede felt, vises et rundt farvehjul, hvor du kan justere værdierne for **rød (R), grøn (G) og blå (B)**, samt en bjælkeskyder til **lysstyrken**.

<BlockImage module="common/color" id="color_slider" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Farve | Farvehjul + lysstyrkeskyder | r: 0~255, g: 0~255, b: 0~255 | - |

### Python
```python
# farve valgt i farvehjulet → [R, G, B]
Utils.color_slider(255, 128, 0)
```

## RGB-farve {#color_rgb}

Blokken **RGB-farve** laver en RGB-matrix, ved at du angiver værdierne for rød, grøn og blå hver for sig.

<BlockImage module="common/color" id="color_rgb" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| r | Input (blok) | Værdi for rød | Heltal 0 til 255 | - |
| g | Input (blok) | Værdi for grøn | Heltal 0 til 255 | - |
| b | Input (blok) | Værdi for blå | Heltal 0 til 255 | - |

### Python
```python
Utils.color_rgb(red, green, blue)
```

## Tilfældig farve {#color_random}

Blokken **tilfældig farve** laver en tilfældig RGB-farve, hver gang den kaldes.

<BlockImage module="common/color" id="color_random" />

### Parametre

(ingen)

### Python
```python
Utils.random_color()
```
