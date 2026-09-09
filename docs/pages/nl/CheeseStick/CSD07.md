---
title: CSD-07 Geluidssensor
---

# CSD-07 Geluidssensor

## Instantie declareren {#instance}

Voeg je een CSD-07 Geluidssensor(CSD07)-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Invoerpoort instellen {#set_input_port}

Stelt de poort in waarop CSD07 (geluidssensor) is aangesloten.

<BlockImage module="CheeseStick/CSD07" id="set_input_port" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Poort waarop wordt aangesloten | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.set_port('Sa')
```

## Waarde van de geluidssensor {#get_input}

De waarde van de geluidssensor op de gekozen poort

<BlockImage module="CheeseStick/CSD07" id="get_input" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Poort die wordt uitgelezen | Sa, Sb, Sc | de poort van de laatste `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.get_input('Sa')
```
