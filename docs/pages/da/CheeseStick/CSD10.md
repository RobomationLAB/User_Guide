---
title: CSD-10 ALS-sensor
---

# CSD-10 ALS-sensor

## Instanserklæring {#instance}

Når du tilføjer en CSD-10 ALS-sensor(CSD10)-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Indstil inputporten {#set_input_port}

Indstiller, hvilken port CSD10 (lysstyrkesensoren) er tilsluttet.

<BlockImage module="CheeseStick/CSD10" id="set_input_port" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Port der skal tilsluttes | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.set_port('Sa')
```

## Lysstyrkesensorens værdi {#get_input}

Lysstyrkesensorens værdi for den valgte port

<BlockImage module="CheeseStick/CSD10" id="get_input" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Port der skal læses | Sa, Sb, Sc | Porten fra seneste `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.get_input('Sa')
```
