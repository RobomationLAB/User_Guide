---
title: CSD-10 ALS-sensor
---

# CSD-10 ALS-sensor

## Instantie declareren {#instance}

Voeg je een CSD-10 ALS-sensor(CSD10)-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Invoerpoort instellen {#set_input_port}

Stelt de poort in waarop CSD10 (omgevingslichtsensor) is aangesloten.

<BlockImage module="CheeseStick/CSD10" id="set_input_port" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Poort waarop wordt aangesloten | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.set_port('Sa')
```

## Waarde van de ALS-sensor {#get_input}

De waarde van de omgevingslichtsensor op de gekozen poort

<BlockImage module="CheeseStick/CSD10" id="get_input" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Poort die wordt uitgelezen | Sa, Sb, Sc | de poort van de laatste `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.get_input('Sa')
```
