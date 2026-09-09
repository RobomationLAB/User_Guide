---
title: CSD-01 Drukknop
---

# CSD-01 Drukknop

## Instantie declareren {#instance}

Voeg je een CSD-01 Drukknop(CSD01)-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Invoerpoort instellen {#set_input_port}

Stelt de poort in waarop CSD01 (Tact Switch) is aangesloten.

<BlockImage module="CheeseStick/CSD01" id="set_input_port" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Poort waarop wordt aangesloten | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.set_port('Sa')
```

## Knopinvoer {#button_input}

De invoerwaarde van de knop op de gekozen poort  
Is de knop ingedrukt, dan komt 0 terug, anders 1.

<BlockImage module="CheeseStick/CSD01" id="button_input" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Poort die wordt uitgelezen | Sa, Sb, Sc | de poort van de laatste `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_input('Sa')
```

## Knop ingedrukt? {#button_pressed}

Of de knop van de schakelaar op de gekozen poort ingedrukt is

<BlockImage module="CheeseStick/CSD01" id="button_pressed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Poort die wordt uitgelezen | Sa, Sb, Sc | de poort van de laatste `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_pressed('Sa')
```
