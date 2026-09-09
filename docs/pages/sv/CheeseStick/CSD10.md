---
title: CSD-10 ALS-sensor
---

# CSD-10 ALS-sensor

## Instansdeklaration {#instance}

När du lägger till ett CSD-10 ALS-sensor(CSD10)-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Ställa in ingångsporten {#set_input_port}

Ställer in vilken port CSD10 (ljusstyrkesensorn) är ansluten till.

<BlockImage module="CheeseStick/CSD10" id="set_input_port" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Port att ansluta till | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.set_port('Sa')
```

## Ljusstyrkesensorns värde {#get_input}

Ljusstyrkesensorns värde för den valda porten

<BlockImage module="CheeseStick/CSD10" id="get_input" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Port att läsa från | Sa, Sb, Sc | Porten från senaste `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.get_input('Sa')
```
