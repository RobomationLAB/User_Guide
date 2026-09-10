---
title: Kolor
---

# Kolor

Kolory są używane w wielu programach graficznych. 


## Kolor podstawowy {#color_picker}

Najprostszy sposób uzyskania koloru to skorzystanie z **palety kolorów**.  
Po kliknięciu białego zaokrąglonego kwadratu pojawia się paleta kolorów, z której można wybrać kolor.

<BlockImage module="common/color" id="color_picker" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| color | Kolor | Gotowy kolor | czarny(black), czerwony(red), żółty(yellow), zielony(green),<br>cyjan(cyan), niebieski(blue), magenta(magenta), biały(white) | - |

### Python
```python
# przykład: po wybraniu gotowego koloru czerwonego
Utils.color('red')
```

## Kolor z suwaka {#color_slider}

Blok **kolor z suwaka** pozwala samodzielnie skomponować kolor za pomocą koła i suwaka.  
Po kliknięciu białego zaokrąglonego kwadratu pojawia się koło kolorów, na którym ustawia się wartości **czerwoną (R), zieloną (G) i niebieską (B)**, oraz suwak regulujący **jasność**.

<BlockImage module="common/color" id="color_slider" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| color | Kolor | Koło kolorów + suwak jasności | r: 0~255, g: 0~255, b: 0~255 | - |

### Python
```python
# kolor wybrany na kole kolorów → [R, G, B]
Utils.color_slider(255, 128, 0)
```

## Kolor RGB {#color_rgb}

Blok **kolor RGB** tworzy tablicę RGB z osobno podanych wartości czerwonej, zielonej i niebieskiej.

<BlockImage module="common/color" id="color_rgb" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| r | Wejście (blok) | Wartość czerwona | Liczba całkowita od 0 do 255 | - |
| g | Wejście (blok) | Wartość zielona | Liczba całkowita od 0 do 255 | - |
| b | Wejście (blok) | Wartość niebieska | Liczba całkowita od 0 do 255 | - |

### Python
```python
Utils.color_rgb(red, green, blue)
```

## Losowy kolor {#color_random}

Blok **losowy kolor** przy każdym wywołaniu tworzy losowy kolor RGB.

<BlockImage module="common/color" id="color_random" />

### Parametry

(brak)

### Python
```python
Utils.random_color()
```
