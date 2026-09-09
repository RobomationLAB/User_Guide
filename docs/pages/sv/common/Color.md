---
title: Färg
---

# Färg

Färger används i många olika grafikprogram. 


## Grundfärg {#color_picker}

Det enklaste sättet att få en färg är att använda **färgpaletten**.  
När du klickar på den vita rundade rutan visas färgpaletten, och där kan du välja den färg du vill ha.

<BlockImage module="common/color" id="color_picker" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| color | Färg | Färgförval | svart(black), röd(red), gul(yellow), grön(green),<br>cyan(cyan), blå(blue), magenta(magenta), vit(white) | - |

### Python
```python
# t.ex. när förvalet röd är valt
Utils.color('red')
```

## Reglagefärg {#color_slider}

Med blocket **reglagefärg** kan du blanda ihop en färg själv med hjälp av ett cirkelreglage och ett stapelreglage.  
När du klickar på den vita rundade rutan visas ett runt färghjul där du kan justera värdena för **rött (R), grönt (G) och blått (B)**, samt ett stapelreglage för **ljusheten**.

<BlockImage module="common/color" id="color_slider" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| color | Färg | Färghjul + ljushetsreglage | r: 0~255, g: 0~255, b: 0~255 | - |

### Python
```python
# färg vald i färghjulet → [R, G, B]
Utils.color_slider(255, 128, 0)
```

## RGB-färg {#color_rgb}

Blocket **RGB-färg** skapar ett RGB-fält genom att du anger värdena för rött, grönt och blått var för sig.

<BlockImage module="common/color" id="color_rgb" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| r | Inmatning (block) | Värde för rött | Heltal 0 till 255 | - |
| g | Inmatning (block) | Värde för grönt | Heltal 0 till 255 | - |
| b | Inmatning (block) | Värde för blått | Heltal 0 till 255 | - |

### Python
```python
Utils.color_rgb(red, green, blue)
```

## Slumpmässig färg {#color_random}

Blocket **slumpmässig färg** skapar en slumpmässig RGB-färg varje gång det anropas.

<BlockImage module="common/color" id="color_random" />

### Parametrar

(ingen)

### Python
```python
Utils.random_color()
```
