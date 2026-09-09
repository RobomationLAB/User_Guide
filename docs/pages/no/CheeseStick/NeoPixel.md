---
title: NeoPixel
---

# NeoPixel

## Instanserklæring {#instance}

Når du legger til en NeoPixel-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Start {#start}

Tar NeoPixel i bruk.

<BlockImage module="CheeseStick/NeoPixel" id="start" />

### Parametere

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.start()
```

## Sett LED-modus {#mode}

Angir LED-modusen til NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="mode" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Modus for fargekanaler | GRBW, GRB | GRBW |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.mode('GRBW')
```

## Sett fargen på én piksel {#set_one_color}

Setter fargen på den ene pikselen med det nummeret du angir.  
Velger du en farge i fargepaletten, gjøres den om til et **fargenavn** (en engelsk streng) i kallet. (Koden lages med fargenavnet, ikke med R-, G- og B-tall.)

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| idx | Inndata (felt) | Pikselnummer (starter på 1) | Heltall 1 eller større | - |
| color | Farge | Velg fra fargepaletten → gjøres om til et fargenavn (engelsk) | Fargenavn: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, 'red')
```

## Sett fargen på én piksel med en blokk fra Farge-kategorien {#set_one_color_with_block}

Tar imot en blokk fra Farge-kategorien som inndata og setter fargen på én piksel.  
Utdataene fra fargeblokken (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`, som alle returnerer `[R, G, B]`) pakkes ut med `*` (stjerne) og sendes som r-, g- og b-argumentene til `set_one_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color_with_block" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| idx | Inndata (felt) | Pikselnummer (starter på 1) | Heltall 1 eller større | - |
| data | Inndata (farge) | En blokk fra Farge-kategorien eller en `[R, G, B]`-tabell | [0~255, 0~255, 0~255] | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, *Utils.color('red'))
```

## Endre fargen på én piksel med RGB {#change_one_by_rgb}

Legger endringen til RGB-verdien den ene pikselen har nå, og setter den nye fargen.

<BlockImage module="CheeseStick/NeoPixel" id="change_one_by_rgb" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| idx | Inndata (felt) | Pikselnummer (starter på 1) | Heltall 1 eller større | - |
| r | Inndata (felt) | Endring i rødt | Heltall -255 til 255 | 0 |
| g | Inndata (felt) | Endring i grønt | Heltall -255 til 255 | 0 |
| b | Inndata (felt) | Endring i blått | Heltall -255 til 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_one_color(1, 10, 0, 0)
```

## Slå av én piksel {#turn_off_one}

Fjerner fargen på LED nummer n.  
LED-numrene går fra 1 til 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_one" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| idx | Inndata (felt) | Pikselnummer (starter på 1) | Heltall 1 eller større | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_one(1)
```

## Sett mønsteret for et område {#set_range_pattern}

Angir fargemønsteret for alle LED-ene i det området du velger.  
LED-numrene går fra 1 til 144.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_pattern" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Inndata (felt) | Første pikselnummer (starter på 1) | Heltall 1 eller større | - |
| to_idx | Inndata (felt) | Siste pikselnummer (starter på 1) | Heltall 1 eller større | - |
| pattern | Nedtrekksalternativ | Navn på fargemønster | `3_colors`, `6_colors`, `12_colors`, `red_green`, `red_blue`, `red_white`, `green_red`, `green_blue`, `green_white`, `blue_red`, `blue_green`, `blue_white`, `white_red`, `white_green`, `white_blue`, `black_red`, `black_green`, `black_blue`, `black_white`, `red_black`, `green_black`, `blue_black`, `white_black` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_pattern(1, 10, '3_colors')
```

## Sett fargen på et område {#set_range_color}

Setter den samme fargen på hele det pikselområdet du velger.  
Velger du en farge i fargepaletten, gjøres den om til et **fargenavn** (en engelsk streng) i kallet.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Inndata (felt) | Første pikselnummer (starter på 1) | Heltall 1 eller større | - |
| to_idx | Inndata (felt) | Siste pikselnummer (starter på 1) | Heltall 1 eller større | - |
| color | Farge | Velg fra fargepaletten → gjøres om til et fargenavn (engelsk) | Fargenavn: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, 'red')
```

## Sett fargen på et område med en blokk fra Farge-kategorien {#set_range_color_with_block}

Tar imot en blokk fra Farge-kategorien som inndata og setter fargen på et pikselområde.  
Utdataene fra fargeblokken (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) pakkes ut med `*` (stjerne) og sendes som r-, g- og b-argumentene til `set_range_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color_with_block" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Inndata (felt) | Første pikselnummer (starter på 1) | Heltall 1 eller større | - |
| to_idx | Inndata (felt) | Siste pikselnummer (starter på 1) | Heltall 1 eller større | - |
| data | Inndata (farge) | En blokk fra Farge-kategorien eller en `[R, G, B]`-tabell | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, *Utils.color('red'))
```

## Endre fargen på et område med RGB {#change_range_by_rgb}

Legger RGB-endringen til den fargen pikselområdet har nå, og setter den nye fargen.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_by_rgb" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Inndata (felt) | Første pikselnummer (starter på 1) | Heltall 1 eller større | - |
| to_idx | Inndata (felt) | Siste pikselnummer (starter på 1) | Heltall 1 eller større | - |
| r | Inndata (felt) | Endring i rødt | Heltall -255 til 255 | 0 |
| g | Inndata (felt) | Endring i grønt | Heltall -255 til 255 | 0 |
| b | Inndata (felt) | Endring i blått | Heltall -255 til 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_color(1, 10, 10, 0, 0)
```

## Slå av fargen på et område {#turn_off_range}

Fjerner fargen på alle LED-ene i det området du velger.  
LED-numrene går fra 1 til 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Inndata (felt) | Første pikselnummer (starter på 1) | Heltall 1 eller større | - |
| to_idx | Inndata (felt) | Siste pikselnummer (starter på 1) | Heltall 1 eller større | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range(1, 10)
```

## Sett fargen på hver n-te piksel i et område {#set_range_increment_color}

Setter fargen på hver `increment`-te piksel innenfor det pikselområdet du velger.  
Velger du en farge i fargepaletten, gjøres den om til et **fargenavn** (en engelsk streng) i kallet.  
(For eksempel bare piksel 1, 3, 5, ...)

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Inndata (felt) | Første pikselnummer (starter på 1) | Heltall 1 eller større | - |
| to_idx | Inndata (felt) | Siste pikselnummer (starter på 1) | Heltall 1 eller større | - |
| increment | Inndata (felt) | Intervall (antall plasser) | Heltall 1 eller større | - |
| color | Farge | Velg fra fargepaletten → gjøres om til et fargenavn (engelsk) | Fargenavn: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, 'red')
```

## Sett fargen på hver n-te piksel med en blokk fra Farge-kategorien {#set_range_increment_color_with_block}

Tar imot en blokk fra Farge-kategorien som inndata og setter fargen på hver n-te piksel innenfor det pikselområdet du velger.  
Utdataene fra fargeblokken (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) pakkes ut med `*` (stjerne) og sendes som r-, g- og b-argumentene til `set_range_increment_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color_with_block" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Inndata (felt) | Første pikselnummer (starter på 1) | Heltall 1 eller større | - |
| to_idx | Inndata (felt) | Siste pikselnummer (starter på 1) | Heltall 1 eller større | - |
| increment | Inndata (felt) | Intervall (antall plasser) | Heltall 1 eller større | - |
| data | Inndata (farge) | En blokk fra Farge-kategorien eller en `[R, G, B]`-tabell | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, *Utils.color('red'))
```

## Endre hver n-te piksel med RGB {#change_range_increment_by_rgb}

Legger RGB-endringen til den fargen hver n-te piksel har nå, og setter den nye fargen.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_increment_by_rgb" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Inndata (felt) | Første pikselnummer (starter på 1) | Heltall 1 eller større | - |
| to_idx | Inndata (felt) | Siste pikselnummer (starter på 1) | Heltall 1 eller større | - |
| increment | Inndata (felt) | Intervall (antall plasser) | Heltall 1 eller større | - |
| r | Inndata (felt) | Endring i rødt | Heltall -255 til 255 | 0 |
| g | Inndata (felt) | Endring i grønt | Heltall -255 til 255 | 0 |
| b | Inndata (felt) | Endring i blått | Heltall -255 til 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_increment_color(1, 10, 2, 10, 0, 0)
```

## Slå av fargen på hver n-te piksel {#turn_off_range_increment}

Fjerner fargen på alle LED-ene som ligger i det området og det intervallet du velger.  
LED-numrene går fra 1 til 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range_increment" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| from_idx | Inndata (felt) | Første pikselnummer (starter på 1) | Heltall 1 eller større | - |
| to_idx | Inndata (felt) | Siste pikselnummer (starter på 1) | Heltall 1 eller større | - |
| increment | Inndata (felt) | Intervall (antall plasser) | Heltall 1 eller større | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range_increment(1, 10, 2)
```

## Forskyv / roter {#shift}

Forskyver eller roterer LED-ene i den retningen og så mange plasser du angir.  
Verdiene du kan velge, går fra 1 til 143.

<BlockImage module="CheeseStick/NeoPixel" id="shift" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Type handling | forskyv(shift), roter(rotate) | - |
| direction | Nedtrekksalternativ | Retning | venstre(left), høyre(right) | - |
| pixel | Inndata (felt) | Antall piksler den skal flyttes | Heltall 1 eller større | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

# unit = 'shift'
neopixel.shift('left', 1)

# unit = 'rotate'
neopixel.rotate('left', 1)
```

## Sett lysstyrken {#set_brightness}

Angir lysstyrken til NeoPixel.  
Verdiene du kan velge, går fra 0 til 100.

<BlockImage module="CheeseStick/NeoPixel" id="set_brightness" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| value | Inndata (felt) | Lysstyrke | Heltall 0 til 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_brightness(50)
```

## Endre lysstyrken {#change_brightness}

Endrer lysstyrken til NeoPixel.  
Verdiene du kan velge, går fra -100 til 100.

<BlockImage module="CheeseStick/NeoPixel" id="change_brightness" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| value | Inndata (felt) | Endring i lysstyrke | Heltall -100 til 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_brightness(10)
```
