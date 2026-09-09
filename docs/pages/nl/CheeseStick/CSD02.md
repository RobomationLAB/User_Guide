---
title: CSD-02 RGB-led
---

# CSD-02 RGB-led

## Instantie declareren {#instance}

Voeg je een CSD-02 RGB-led(CSD02)-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## RGB-led starten {#start}

Begint met het gebruik van de RGB-led.  
Zonder dit blok wordt de RGB-led niet geactiveerd.

<BlockImage module="CheeseStick/CSD02" id="start" />

### Parameters

(geen)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.start()
```

## Kleur instellen {#set_color}

Zet de ledkleur van CSD02 op de opgegeven kleur.  
Kies je in het kleurenpalet een kleur, dan wordt die als **kleurnaam** (Engelse tekst) doorgegeven. (De code wordt niet met R-, G-, B-getalwaarden gemaakt, maar met de kleurnaam.)

<BlockImage module="CheeseStick/CSD02" id="set_color" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| color | Kleur | Keuze in het kleurenpalet → wordt de kleurnaam (Engels) | Kleurnaam: `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'violet'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color('orange')
```

## Kleur instellen met een blok uit de categorie Kleur {#set_color_with_block}

Neemt een blok uit de categorie Kleur (bijv. een `[R, G, B]`-array) als invoer en stelt daarmee de ledkleur van CSD02 in.

<BlockImage module="CheeseStick/CSD02" id="set_color_with_block" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (kleur) | Uitvoer van een blok uit de categorie Kleur of een `[R, G, B]`-array | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color(*Utils.color('yellow'))
```

## Kleur wijzigen met RGB-waarden {#change_by_rgb}

Telt de ingevoerde R-, G- en B-veranderingen bij de huidige ledkleur op en stelt zo een nieuwe kleur in.

<BlockImage module="CheeseStick/CSD02" id="change_by_rgb" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| r | Invoer (veld) | Verandering van rood | geheel getal -255 ~ 255 | 0 |
| g | Invoer (veld) | Verandering van groen | geheel getal -255 ~ 255 | 0 |
| b | Invoer (veld) | Verandering van blauw | geheel getal -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.change_color(10, 0, 0)
```

## Led uitschakelen {#turn_off}

Wist de kleur van de RGB-led.

<BlockImage module="CheeseStick/CSD02" id="turn_off" />

### Parameters

(geen)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.turn_off()
```
