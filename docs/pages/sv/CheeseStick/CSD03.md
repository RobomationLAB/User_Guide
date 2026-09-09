---
title: CSD-03 Vridpotentiometer
---

# CSD-03 Vridpotentiometer

## Instansdeklaration {#instance}

När du lägger till ett CSD-03 Vridpotentiometer(CSD03)-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Ställa in ingångsporten {#set_input_port}

Ställer in vilken port CSD03 (den variabla resistorn) är ansluten till.

<BlockImage module="CheeseStick/CSD03" id="set_input_port" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Port att ansluta till | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_port('Sa')
```

## Ställa in ingångsintervallet {#set_input_range}

Omvandlar den valda portens ingångsvärde till det angivna intervallet från minsta till största värde.  
Ingångsvärdet går från 0 till 255.  
Värdena du kan omvandla till går från -100 till 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Port som avses | Sa, Sb, Sc | - |
| src_min | Inmatning (fält) | Källans minsta värde | Heltal 0 till 255 | - |
| src_max | Inmatning (fält) | Källans största värde | Heltal 0 till 255 | - |
| dst_min | Inmatning (fält) | Minsta värde efter omvandling | Heltal -100 till 100 | - |
| dst_max | Inmatning (fält) | Största värde efter omvandling | Heltal -100 till 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range('Sa', 0, 255, 0, 100)
```

## Ställa in ingångsintervallet med ett mittvärde {#set_input_range_median}

Omvandlar den valda portens ingångsvärde till det angivna intervallet från minsta via mittvärdet till största värde.  
Ingångsvärdet går från 0 till 255.  
Värdena du kan omvandla till går från -100 till 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range_median" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Port som avses | Sa, Sb, Sc | - |
| src_min | Inmatning (fält) | Källans minsta värde | Heltal 0 till 255 | - |
| src_median | Inmatning (fält) | Källans mittvärde | Heltal 0 till 255 | - |
| src_max | Inmatning (fält) | Källans största värde | Heltal 0 till 255 | - |
| dst_min | Inmatning (fält) | Minsta värde efter omvandling | Heltal -100 till 100 | - |
| dst_median | Inmatning (fält) | Mittvärde efter omvandling | Heltal -100 till 100 | - |
| dst_max | Inmatning (fält) | Största värde efter omvandling | Heltal -100 till 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Ingångsvärde {#get_input}

Vridpotentiometerns ingångsvärde för den valda porten  
Om du inte har ställt in något eget ingångsintervall går ingångsvärdet från 0 till 255.

<BlockImage module="CheeseStick/CSD03" id="get_input" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Port att läsa från | Sa, Sb, Sc | Porten från senaste `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.get_input('Sa')
```
