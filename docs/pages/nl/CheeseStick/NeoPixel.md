---
title: NeoPixel
---

# NeoPixel

## Instantie declareren {#instance}

Voeg je een NeoPixel-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Starten {#start}

Gebruikt NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="start" />

### Parameters

(geen)

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.start()
```

## LED-modus instellen {#mode}

Stelt de LED-modus van NeoPixel in.

<BlockImage module="CheeseStick/NeoPixel" id="mode" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Modus van de kleurkanalen | GRBW, GRB | GRBW |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.mode('GRBW')
```

## Kleur van één pixel instellen {#set_one_color}

Stelt de kleur van één pixel met het opgegeven nummer in.  
Kies je in het kleurenpalet een kleur, dan wordt die als **kleurnaam** (Engelse tekst) doorgegeven. (De code wordt niet met R-, G-, B-getalwaarden gemaakt, maar met de kleurnaam.)

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| idx | Invoer (veld) | Pixelnummer (begint bij 1) | geheel getal ≥ 1 | - |
| color | Kleur | Keuze in het kleurenpalet → wordt de kleurnaam (Engels) | Kleurnaam: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, 'red')
```

## Kleur van één pixel instellen met een blok uit de categorie Kleur {#set_one_color_with_block}

Neemt een blok uit de categorie Kleur als invoer en stelt daarmee de kleur van één pixel in.  
De uitvoer van het kleurblok (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`, die alle `[R, G, B]` teruggeven) wordt met `*` (sterretje) uitgepakt en als argumenten r, g, b aan `set_one_color` doorgegeven.

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color_with_block" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| idx | Invoer (veld) | Pixelnummer (begint bij 1) | geheel getal ≥ 1 | - |
| data | Invoer (kleur) | Blok uit de categorie Kleur of een `[R, G, B]`-array | [0~255, 0~255, 0~255] | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, *Utils.color('red'))
```

## Kleur van één pixel wijzigen met RGB-waarden {#change_one_by_rgb}

Telt de veranderingen bij de huidige RGB-waarden van de opgegeven pixel op en stelt zo een nieuwe kleur in.

<BlockImage module="CheeseStick/NeoPixel" id="change_one_by_rgb" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| idx | Invoer (veld) | Pixelnummer (begint bij 1) | geheel getal ≥ 1 | - |
| r | Invoer (veld) | Verandering van rood | geheel getal -255 ~ 255 | 0 |
| g | Invoer (veld) | Verandering van groen | geheel getal -255 ~ 255 | 0 |
| b | Invoer (veld) | Verandering van blauw | geheel getal -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_one_color(1, 10, 0, 0)
```

## Eén pixel uitzetten {#turn_off_one}

Wist de kleur van de n-de led.  
Het bereik van de lednummers is 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_one" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| idx | Invoer (veld) | Pixelnummer (begint bij 1) | geheel getal ≥ 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_one(1)
```

## Patroon voor een bereik instellen {#set_range_pattern}

Stelt het kleurpatroon van alle leds in het opgegeven bereik in.  
Het bereik van de lednummers is 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_pattern" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| from_idx | Invoer (veld) | Nummer van de eerste pixel (begint bij 1) | geheel getal ≥ 1 | - |
| to_idx | Invoer (veld) | Nummer van de laatste pixel (begint bij 1) | geheel getal ≥ 1 | - |
| pattern | Keuzelijstoptie | Naam van het kleurpatroon | `3_colors`, `6_colors`, `12_colors`, `red_green`, `red_blue`, `red_white`, `green_red`, `green_blue`, `green_white`, `blue_red`, `blue_green`, `blue_white`, `white_red`, `white_green`, `white_blue`, `black_red`, `black_green`, `black_blue`, `black_white`, `red_black`, `green_black`, `blue_black`, `white_black` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_pattern(1, 10, '3_colors')
```

## Kleur van een bereik instellen {#set_range_color}

Stelt voor het hele opgegeven pixelbereik dezelfde kleur in.  
Kies je in het kleurenpalet een kleur, dan wordt die als **kleurnaam** (Engelse tekst) doorgegeven.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| from_idx | Invoer (veld) | Nummer van de eerste pixel (begint bij 1) | geheel getal ≥ 1 | - |
| to_idx | Invoer (veld) | Nummer van de laatste pixel (begint bij 1) | geheel getal ≥ 1 | - |
| color | Kleur | Keuze in het kleurenpalet → wordt de kleurnaam (Engels) | Kleurnaam: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, 'red')
```

## Kleur van een bereik instellen met een blok uit de categorie Kleur {#set_range_color_with_block}

Neemt een blok uit de categorie Kleur als invoer en stelt daarmee de kleur van een pixelbereik in.  
De uitvoer van het kleurblok (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) wordt met `*` (sterretje) uitgepakt en als argumenten r, g, b aan `set_range_color` doorgegeven.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color_with_block" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| from_idx | Invoer (veld) | Nummer van de eerste pixel (begint bij 1) | geheel getal ≥ 1 | - |
| to_idx | Invoer (veld) | Nummer van de laatste pixel (begint bij 1) | geheel getal ≥ 1 | - |
| data | Invoer (kleur) | Blok uit de categorie Kleur of een `[R, G, B]`-array | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, *Utils.color('red'))
```

## Kleur van een bereik wijzigen met RGB-waarden {#change_range_by_rgb}

Telt de RGB-veranderingen bij de huidige kleur van het opgegeven pixelbereik op en stelt zo een nieuwe kleur in.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_by_rgb" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| from_idx | Invoer (veld) | Nummer van de eerste pixel (begint bij 1) | geheel getal ≥ 1 | - |
| to_idx | Invoer (veld) | Nummer van de laatste pixel (begint bij 1) | geheel getal ≥ 1 | - |
| r | Invoer (veld) | Verandering van rood | geheel getal -255 ~ 255 | 0 |
| g | Invoer (veld) | Verandering van groen | geheel getal -255 ~ 255 | 0 |
| b | Invoer (veld) | Verandering van blauw | geheel getal -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_color(1, 10, 10, 0, 0)
```

## Kleuren van een bereik uitzetten {#turn_off_range}

Wist de kleuren van alle leds in het opgegeven bereik.  
Het bereik van de lednummers is 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| from_idx | Invoer (veld) | Nummer van de eerste pixel (begint bij 1) | geheel getal ≥ 1 | - |
| to_idx | Invoer (veld) | Nummer van de laatste pixel (begint bij 1) | geheel getal ≥ 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range(1, 10)
```

## Kleur van elke n-de led in een bereik instellen {#set_range_increment_color}

Stelt binnen het opgegeven pixelbereik de kleur van elke `increment`-de led in.  
Kies je in het kleurenpalet een kleur, dan wordt die als **kleurnaam** (Engelse tekst) doorgegeven.  
(bijv. alleen de leds 1, 3, 5, … aanzetten)

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| from_idx | Invoer (veld) | Nummer van de eerste pixel (begint bij 1) | geheel getal ≥ 1 | - |
| to_idx | Invoer (veld) | Nummer van de laatste pixel (begint bij 1) | geheel getal ≥ 1 | - |
| increment | Invoer (veld) | Interval (aantal leds) | geheel getal ≥ 1 | - |
| color | Kleur | Keuze in het kleurenpalet → wordt de kleurnaam (Engels) | Kleurnaam: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, 'red')
```

## Kleur van elke n-de led in een bereik instellen met een blok uit de categorie Kleur {#set_range_increment_color_with_block}

Neemt een blok uit de categorie Kleur als invoer en stelt daarmee binnen het opgegeven pixelbereik de kleur van elke n-de led in.  
De uitvoer van het kleurblok (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) wordt met `*` (sterretje) uitgepakt en als argumenten r, g, b aan `set_range_increment_color` doorgegeven.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color_with_block" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| from_idx | Invoer (veld) | Nummer van de eerste pixel (begint bij 1) | geheel getal ≥ 1 | - |
| to_idx | Invoer (veld) | Nummer van de laatste pixel (begint bij 1) | geheel getal ≥ 1 | - |
| increment | Invoer (veld) | Interval (aantal leds) | geheel getal ≥ 1 | - |
| data | Invoer (kleur) | Blok uit de categorie Kleur of een `[R, G, B]`-array | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, *Utils.color('red'))
```

## Kleur van elke n-de led wijzigen met RGB-waarden {#change_range_increment_by_rgb}

Telt de RGB-veranderingen bij de huidige kleur van elke n-de led op en stelt zo een nieuwe kleur in.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_increment_by_rgb" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| from_idx | Invoer (veld) | Nummer van de eerste pixel (begint bij 1) | geheel getal ≥ 1 | - |
| to_idx | Invoer (veld) | Nummer van de laatste pixel (begint bij 1) | geheel getal ≥ 1 | - |
| increment | Invoer (veld) | Interval van de stappen (aantal leds) | geheel getal ≥ 1 | - |
| r | Invoer (veld) | Verandering van rood | geheel getal -255 ~ 255 | 0 |
| g | Invoer (veld) | Verandering van groen | geheel getal -255 ~ 255 | 0 |
| b | Invoer (veld) | Verandering van blauw | geheel getal -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_increment_color(1, 10, 2, 10, 0, 0)
```

## Kleur van elke n-de led uitzetten {#turn_off_range_increment}

Wist de kleuren van alle leds die met het opgegeven bereik en interval overeenkomen.  
Het bereik van de lednummers is 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range_increment" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| from_idx | Invoer (veld) | Nummer van de eerste pixel (begint bij 1) | geheel getal ≥ 1 | - |
| to_idx | Invoer (veld) | Nummer van de laatste pixel (begint bij 1) | geheel getal ≥ 1 | - |
| increment | Invoer (veld) | Interval van de stappen (aantal leds) | geheel getal ≥ 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range_increment(1, 10, 2)
```

## Verschuiven / roteren {#shift}

Verschuift of roteert de leds met de opgegeven richting en het opgegeven aantal plaatsen.  
Het bereik van de waarden die je kunt kiezen is 1 ~ 143.

<BlockImage module="CheeseStick/NeoPixel" id="shift" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Soort actie | verschuiven(shift), roteren(rotate) | - |
| direction | Keuzelijstoptie | Richting | links(left), rechts(right) | - |
| pixel | Invoer (veld) | Aantal pixels dat wordt verschoven | geheel getal ≥ 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

# unit = 'shift'
neopixel.shift('left', 1)

# unit = 'rotate'
neopixel.rotate('left', 1)
```

## Helderheid instellen {#set_brightness}

Stelt de helderheid van NeoPixel in.  
Het bereik van de waarden die je kunt kiezen is 0 ~ 100.

<BlockImage module="CheeseStick/NeoPixel" id="set_brightness" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| value | Invoer (veld) | Helderheid | geheel getal 0 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_brightness(50)
```

## Helderheid veranderen {#change_brightness}

Verandert de helderheid van NeoPixel.  
Het bereik van de waarden die je kunt kiezen is -100 ~ 100.

<BlockImage module="CheeseStick/NeoPixel" id="change_brightness" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| value | Invoer (veld) | Verandering van de helderheid | geheel getal -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_brightness(10)
```
