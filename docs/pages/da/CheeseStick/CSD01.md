---
title: CSD-01 Trykknap
---

# CSD-01 Trykknap

## Instanserklæring {#instance}

Når du tilføjer en CSD-01 Trykknap(CSD01)-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Indstil inputporten {#set_input_port}

Indstiller, hvilken port CSD01 (Tact Switch) er tilsluttet.

<BlockImage module="CheeseStick/CSD01" id="set_input_port" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Port der skal tilsluttes | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.set_port('Sa')
```

## Knapinputtets værdi {#button_input}

Knapinputtets værdi for den valgte port  
Den returnerer 0, når knappen er trykket ned, og ellers 1.

<BlockImage module="CheeseStick/CSD01" id="button_input" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Port der skal læses | Sa, Sb, Sc | Porten fra seneste `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_input('Sa')
```

## Er knappen trykket? {#button_pressed}

Om trykknappen, der er tilsluttet den valgte port, er trykket ned

<BlockImage module="CheeseStick/CSD01" id="button_pressed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Port der skal læses | Sa, Sb, Sc | Porten fra seneste `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_pressed('Sa')
```
