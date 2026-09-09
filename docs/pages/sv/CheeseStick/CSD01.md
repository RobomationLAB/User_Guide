---
title: CSD-01 Tryckknapp
---

# CSD-01 Tryckknapp

## Instansdeklaration {#instance}

När du lägger till ett CSD-01 Tryckknapp(CSD01)-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Ställa in ingångsporten {#set_input_port}

Ställer in vilken port CSD01 (Tact Switch) är ansluten till.

<BlockImage module="CheeseStick/CSD01" id="set_input_port" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Port att ansluta till | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.set_port('Sa')
```

## Knappingångens värde {#button_input}

Knappingångens värde för den valda porten  
Det returnerar 0 när knappen är nedtryckt och 1 annars.

<BlockImage module="CheeseStick/CSD01" id="button_input" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Port att läsa från | Sa, Sb, Sc | Porten från senaste `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_input('Sa')
```

## Är knappen nedtryckt? {#button_pressed}

Om tryckknappen som är ansluten till den valda porten är nedtryckt

<BlockImage module="CheeseStick/CSD01" id="button_pressed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Port att läsa från | Sa, Sb, Sc | Porten från senaste `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_pressed('Sa')
```
