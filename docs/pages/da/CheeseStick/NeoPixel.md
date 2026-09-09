---
title: NeoPixel
---

# NeoPixel

## Instanserklæring {#instance}

Når du tilføjer en NeoPixel-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Start {#start}

Begynder at bruge NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="start" />

### Parametre

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.start()
```

## Indstil farvetilstanden {#mode}

Indstiller LED-tilstanden for NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="mode" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Tilstand for farvekanaler | GRBW, GRB | GRBW |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.mode('GRBW')
```

## Sæt farven på én pixel {#set_one_color}

Indstiller farven på én enkelt pixel med det angivne nummer.  
Når du vælger en farve i farvepaletten, omdannes den til et **farvenavn** (en engelsk streng) i kaldet. (Koden dannes med farvenavnet, ikke med talværdier for R, G og B.)

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| idx | Input (felt) | Pixelnummer (starter ved 1) | Heltal 1 eller større | - |
| color | Farve | Valg i farvepaletten → omdannes til et farvenavn (engelsk) | Farvenavn: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, 'red')
```

## Sæt farven på én pixel med en blok fra Farve-kategorien {#set_one_color_with_block}

Modtager en blok fra Farve-kategorien som input og indstiller farven på én pixel.  
Output fra farveblokken (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`, som alle returnerer `[R, G, B]`) pakkes ud med `*` (stjerne) og sendes som argumenterne r, g og b til `set_one_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color_with_block" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| idx | Input (felt) | Pixelnummer (starter ved 1) | Heltal 1 eller større | - |
| data | Input (farve) | Blok fra Farve-kategorien eller matricen `[R, G, B]` | [0~255, 0~255, 0~255] | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, *Utils.color('red'))
```

## Ændr én pixels farve med RGB {#change_one_by_rgb}

Lægger ændringerne til de nuværende RGB-værdier for den angivne pixel og indstiller den nye farve.

<BlockImage module="CheeseStick/NeoPixel" id="change_one_by_rgb" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| idx | Input (felt) | Pixelnummer (starter ved 1) | Heltal 1 eller større | - |
| r | Input (felt) | Ændring af rød | Heltal -255 til 255 | 0 |
| g | Input (felt) | Ændring af grøn | Heltal -255 til 255 | 0 |
| b | Input (felt) | Ændring af blå | Heltal -255 til 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_one_color(1, 10, 0, 0)
```

## Sluk én pixel {#turn_off_one}

Fjerner farven på LED nummer n.  
LED'ernes numre går fra 1 til 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_one" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| idx | Input (felt) | Pixelnummer (starter ved 1) | Heltal 1 eller større | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_one(1)
```

## Sæt mønster for et interval {#set_range_pattern}

Indstiller farvemønstret for alle LED'er i det angivne interval.  
LED'ernes numre går fra 1 til 144.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_pattern" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Input (felt) | Første pixelnummer (starter ved 1) | Heltal 1 eller større | - |
| to_idx | Input (felt) | Sidste pixelnummer (starter ved 1) | Heltal 1 eller større | - |
| pattern | Rullemenupunkt | Farvemønstrets navn | `3_colors`, `6_colors`, `12_colors`, `red_green`, `red_blue`, `red_white`, `green_red`, `green_blue`, `green_white`, `blue_red`, `blue_green`, `blue_white`, `white_red`, `white_green`, `white_blue`, `black_red`, `black_green`, `black_blue`, `black_white`, `red_black`, `green_black`, `blue_black`, `white_black` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_pattern(1, 10, '3_colors')
```

## Sæt farven for et interval {#set_range_color}

Indstiller den samme farve for hele det angivne pixelinterval.  
Når du vælger en farve i farvepaletten, omdannes den til et **farvenavn** (en engelsk streng) i kaldet.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Input (felt) | Første pixelnummer (starter ved 1) | Heltal 1 eller større | - |
| to_idx | Input (felt) | Sidste pixelnummer (starter ved 1) | Heltal 1 eller større | - |
| color | Farve | Valg i farvepaletten → omdannes til et farvenavn (engelsk) | Farvenavn: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, 'red')
```

## Sæt farven for et interval med en blok fra Farve-kategorien {#set_range_color_with_block}

Modtager en blok fra Farve-kategorien som input og indstiller farven for pixelintervallet.  
Output fra farveblokken (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) pakkes ud med `*` (stjerne) og sendes som argumenterne r, g og b til `set_range_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color_with_block" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Input (felt) | Første pixelnummer (starter ved 1) | Heltal 1 eller større | - |
| to_idx | Input (felt) | Sidste pixelnummer (starter ved 1) | Heltal 1 eller større | - |
| data | Input (farve) | Blok fra Farve-kategorien eller matricen `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, *Utils.color('red'))
```

## Ændr et intervals farve med RGB {#change_range_by_rgb}

Lægger RGB-ændringerne til den nuværende farve i det angivne pixelinterval og indstiller den nye farve.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_by_rgb" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Input (felt) | Første pixelnummer (starter ved 1) | Heltal 1 eller større | - |
| to_idx | Input (felt) | Sidste pixelnummer (starter ved 1) | Heltal 1 eller større | - |
| r | Input (felt) | Ændring af rød | Heltal -255 til 255 | 0 |
| g | Input (felt) | Ændring af grøn | Heltal -255 til 255 | 0 |
| b | Input (felt) | Ændring af blå | Heltal -255 til 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_color(1, 10, 10, 0, 0)
```

## Sluk et interval {#turn_off_range}

Fjerner farven på alle LED'er i det angivne interval.  
LED'ernes numre går fra 1 til 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Input (felt) | Første pixelnummer (starter ved 1) | Heltal 1 eller større | - |
| to_idx | Input (felt) | Sidste pixelnummer (starter ved 1) | Heltal 1 eller større | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range(1, 10)
```

## Sæt farven på hver n. pixel i et interval {#set_range_increment_color}

Indstiller farven på hver `increment`. pixel inden for det angivne pixelinterval.  
Når du vælger en farve i farvepaletten, omdannes den til et **farvenavn** (en engelsk streng) i kaldet.  
(f.eks. tændes kun pixel 1, 3, 5 …)

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Input (felt) | Første pixelnummer (starter ved 1) | Heltal 1 eller større | - |
| to_idx | Input (felt) | Sidste pixelnummer (starter ved 1) | Heltal 1 eller større | - |
| increment | Input (felt) | Interval (antal pixels) | Heltal 1 eller større | - |
| color | Farve | Valg i farvepaletten → omdannes til et farvenavn (engelsk) | Farvenavn: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, 'red')
```

## Sæt farven på hver n. pixel med en blok fra Farve-kategorien {#set_range_increment_color_with_block}

Modtager en blok fra Farve-kategorien som input og indstiller farven på hver n. pixel inden for det angivne pixelinterval.  
Output fra farveblokken (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) pakkes ud med `*` (stjerne) og sendes som argumenterne r, g og b til `set_range_increment_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color_with_block" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Input (felt) | Første pixelnummer (starter ved 1) | Heltal 1 eller større | - |
| to_idx | Input (felt) | Sidste pixelnummer (starter ved 1) | Heltal 1 eller større | - |
| increment | Input (felt) | Interval (antal pixels) | Heltal 1 eller større | - |
| data | Input (farve) | Blok fra Farve-kategorien eller matricen `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, *Utils.color('red'))
```

## Ændr hver n. pixel med RGB {#change_range_increment_by_rgb}

Lægger RGB-ændringerne til den nuværende farve på hver n. pixel og indstiller den nye farve.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_increment_by_rgb" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Input (felt) | Første pixelnummer (starter ved 1) | Heltal 1 eller større | - |
| to_idx | Input (felt) | Sidste pixelnummer (starter ved 1) | Heltal 1 eller større | - |
| increment | Input (felt) | Intervallets størrelse (antal pixels) | Heltal 1 eller større | - |
| r | Input (felt) | Ændring af rød | Heltal -255 til 255 | 0 |
| g | Input (felt) | Ændring af grøn | Heltal -255 til 255 | 0 |
| b | Input (felt) | Ændring af blå | Heltal -255 til 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_increment_color(1, 10, 2, 10, 0, 0)
```

## Sluk hver n. pixel {#turn_off_range_increment}

Fjerner farven på alle LED'er i det angivne interval og med det angivne spring.  
LED'ernes numre går fra 1 til 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range_increment" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Input (felt) | Første pixelnummer (starter ved 1) | Heltal 1 eller større | - |
| to_idx | Input (felt) | Sidste pixelnummer (starter ved 1) | Heltal 1 eller større | - |
| increment | Input (felt) | Intervallets størrelse (antal pixels) | Heltal 1 eller større | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range_increment(1, 10, 2)
```

## Forskyd / rotér {#shift}

Forskyder eller roterer LED'erne til den angivne side og så mange pixels, som du angiver.  
De værdier, du kan vælge, går fra 1 til 143.

<BlockImage module="CheeseStick/NeoPixel" id="shift" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Slags handling | forskyd(shift), rotér(rotate) | - |
| direction | Rullemenupunkt | Retning | venstre(left), højre(right) | - |
| pixel | Input (felt) | Antal pixels der skal flyttes | Heltal 1 eller større | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

# unit = 'shift'
neopixel.shift('left', 1)

# unit = 'rotate'
neopixel.rotate('left', 1)
```

## Sæt lysstyrken {#set_brightness}

Indstiller lysstyrken for NeoPixel.  
De værdier, du kan vælge, går fra 0 til 100.

<BlockImage module="CheeseStick/NeoPixel" id="set_brightness" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| value | Input (felt) | Lysstyrke | Heltal 0 til 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_brightness(50)
```

## Ændr lysstyrken {#change_brightness}

Ændrer lysstyrken for NeoPixel.  
De værdier, du kan vælge, går fra -100 til 100.

<BlockImage module="CheeseStick/NeoPixel" id="change_brightness" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| value | Input (felt) | Ændring af lysstyrken | Heltal -100 til 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_brightness(10)
```
