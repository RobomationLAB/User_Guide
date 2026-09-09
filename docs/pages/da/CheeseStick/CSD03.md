---
title: CSD-03 Drejepotentiometer
---

# CSD-03 Drejepotentiometer

## Instanserklæring {#instance}

Når du tilføjer en CSD-03 Drejepotentiometer(CSD03)-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Indstil inputporten {#set_input_port}

Indstiller, hvilken port CSD03 (den variable modstand) er tilsluttet.

<BlockImage module="CheeseStick/CSD03" id="set_input_port" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Port der skal tilsluttes | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_port('Sa')
```

## Indstil inputintervallet {#set_input_range}

Konverterer den valgte ports inputværdi til det angivne interval fra mindste til største værdi.  
Inputværdien går fra 0 til 255.  
De værdier, du kan konvertere til, går fra -100 til 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Port det gælder | Sa, Sb, Sc | - |
| src_min | Input (felt) | Kildens mindste værdi | Heltal 0 til 255 | - |
| src_max | Input (felt) | Kildens største værdi | Heltal 0 til 255 | - |
| dst_min | Input (felt) | Mindste værdi efter konvertering | Heltal -100 til 100 | - |
| dst_max | Input (felt) | Største værdi efter konvertering | Heltal -100 til 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range('Sa', 0, 255, 0, 100)
```

## Indstil inputintervallet med en midterværdi {#set_input_range_median}

Konverterer den valgte ports inputværdi til det angivne interval fra mindste via midterværdien til største værdi.  
Inputværdien går fra 0 til 255.  
De værdier, du kan konvertere til, går fra -100 til 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range_median" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Port det gælder | Sa, Sb, Sc | - |
| src_min | Input (felt) | Kildens mindste værdi | Heltal 0 til 255 | - |
| src_median | Input (felt) | Kildens midterværdi | Heltal 0 til 255 | - |
| src_max | Input (felt) | Kildens største værdi | Heltal 0 til 255 | - |
| dst_min | Input (felt) | Mindste værdi efter konvertering | Heltal -100 til 100 | - |
| dst_median | Input (felt) | Midterværdi efter konvertering | Heltal -100 til 100 | - |
| dst_max | Input (felt) | Største værdi efter konvertering | Heltal -100 til 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Inputværdi {#get_input}

Drejepotentiometerets inputværdi for den valgte port  
Hvis du ikke har indstillet et eget inputinterval, går inputværdien fra 0 til 255.

<BlockImage module="CheeseStick/CSD03" id="get_input" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Port der skal læses | Sa, Sb, Sc | Porten fra seneste `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.get_input('Sa')
```
