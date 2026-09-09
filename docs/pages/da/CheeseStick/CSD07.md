---
title: CSD-07 Lydsensor
---

# CSD-07 Lydsensor

## Instanserklæring {#instance}

Når du tilføjer en CSD-07 Lydsensor(CSD07)-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Indstil inputporten {#set_input_port}

Indstiller, hvilken port CSD07 (lydsensoren) er tilsluttet.

<BlockImage module="CheeseStick/CSD07" id="set_input_port" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Port der skal tilsluttes | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.set_port('Sa')
```

## Lydsensorens værdi {#get_input}

Lydsensorens værdi for den valgte port

<BlockImage module="CheeseStick/CSD07" id="get_input" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Port der skal læses | Sa, Sb, Sc | Porten fra seneste `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.get_input('Sa')
```
