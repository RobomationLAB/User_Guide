---
title: Farbe
---

# Farbe

Farben werden in verschiedenen Grafikprogrammen verwendet. 


## Grundfarbe {#color_picker}

Der einfachste Weg, eine Farbe zu bekommen, ist die **Farbpalette**.  
Wenn du auf das weiße abgerundete Quadrat klickst, erscheint die Farbpalette und du kannst die gewünschte Farbe auswählen.

<BlockImage module="common/color" id="color_picker" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| color | Farbe | Farbvorlage | Schwarz(black), Rot(red), Gelb(yellow), Grün(green),<br>Cyan(cyan), Blau(blue), Magenta(magenta), Weiß(white) | - |

### Python
```python
# Beispiel: bei Auswahl der Vorlage Rot
Utils.color('red')
```

## Reglerfarbe {#color_slider}

Mit dem Block **Reglerfarbe** kannst du eine Farbe mit einem Ring- und einem Balkenregler selbst mischen.  
Wenn du auf das weiße abgerundete Quadrat klickst, erscheinen ein Farbring, mit dem du die Werte für **Rot (R), Grün (G) und Blau (B)** einstellst, und ein Balkenregler für die **Helligkeit**.

<BlockImage module="common/color" id="color_slider" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| color | Farbe | Farbring + Helligkeitsregler | r: 0~255, g: 0~255, b: 0~255 | - |

### Python
```python
# im Farbring gewählte Farbe → [R, G, B]
Utils.color_slider(255, 128, 0)
```

## RGB-Farbe {#color_rgb}

Der Block **RGB-Farbe** erzeugt ein RGB-Array, indem die Werte für Rot, Grün und Blau einzeln angegeben werden.

<BlockImage module="common/color" id="color_rgb" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| r | Eingabe (Block) | Wert für Rot | ganze Zahl 0 ~ 255 | - |
| g | Eingabe (Block) | Wert für Grün | ganze Zahl 0 ~ 255 | - |
| b | Eingabe (Block) | Wert für Blau | ganze Zahl 0 ~ 255 | - |

### Python
```python
Utils.color_rgb(red, green, blue)
```

## Zufallsfarbe {#color_random}

Der Block **Zufallsfarbe** erzeugt bei jedem Aufruf eine zufällige RGB-Farbe.

<BlockImage module="common/color" id="color_random" />

### Parameter

(keine)

### Python
```python
Utils.random_color()
```
