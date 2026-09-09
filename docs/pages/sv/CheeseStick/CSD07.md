---
title: CSD-07 Ljudsensor
---

# CSD-07 Ljudsensor

## Instansdeklaration {#instance}

När du lägger till ett CSD-07 Ljudsensor(CSD07)-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Ställa in ingångsporten {#set_input_port}

Ställer in vilken port CSD07 (ljudsensorn) är ansluten till.

<BlockImage module="CheeseStick/CSD07" id="set_input_port" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Port att ansluta till | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.set_port('Sa')
```

## Ljudsensorns värde {#get_input}

Ljudsensorns värde för den valda porten

<BlockImage module="CheeseStick/CSD07" id="get_input" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Port att läsa från | Sa, Sb, Sc | Porten från senaste `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.get_input('Sa')
```
