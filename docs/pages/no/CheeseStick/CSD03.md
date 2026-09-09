---
title: CSD-03 Dreiepotensiometer
---

# CSD-03 Dreiepotensiometer

## Instanserklæring {#instance}

Når du legger til en CSD-03 Dreiepotensiometer(CSD03)-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Start med port {#set_input_port}

Angir hvilken port CSD03 (den variable motstanden) er koblet til.

<BlockImage module="CheeseStick/CSD03" id="set_input_port" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Port som skal kobles til | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_port('Sa')
```

## Sett området for inngangen {#set_input_range}

Gjør inngangsverdien fra den porten du velger, om til det minste~største området du angir.  
Inngangsverdien går fra 0 til 255.  
Verdiene den kan gjøres om til, går fra -100 til 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Porten det gjelder | Sa, Sb, Sc | - |
| src_min | Inndata (felt) | Minsteverdien i kilden | Heltall 0 til 255 | - |
| src_max | Inndata (felt) | Størsteverdien i kilden | Heltall 0 til 255 | - |
| dst_min | Inndata (felt) | Minsteverdien etter omregningen | Heltall -100 til 100 | - |
| dst_max | Inndata (felt) | Størsteverdien etter omregningen | Heltall -100 til 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range('Sa', 0, 255, 0, 100)
```

## Sett området for inngangen med en midtverdi {#set_input_range_median}

Gjør inngangsverdien fra den porten du velger, om til det minste~midterste~største området du angir.  
Inngangsverdien går fra 0 til 255.  
Verdiene den kan gjøres om til, går fra -100 til 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range_median" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Porten det gjelder | Sa, Sb, Sc | - |
| src_min | Inndata (felt) | Minsteverdien i kilden | Heltall 0 til 255 | - |
| src_median | Inndata (felt) | Midtverdien i kilden | Heltall 0 til 255 | - |
| src_max | Inndata (felt) | Størsteverdien i kilden | Heltall 0 til 255 | - |
| dst_min | Inndata (felt) | Minsteverdien etter omregningen | Heltall -100 til 100 | - |
| dst_median | Inndata (felt) | Midtverdien etter omregningen | Heltall -100 til 100 | - |
| dst_max | Inndata (felt) | Størsteverdien etter omregningen | Heltall -100 til 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Inngangsverdien {#get_input}

Inngangsverdien fra dreiepotensiometeret på den porten du velger  
Har du ikke satt inngangsområdet selv, går inngangsverdien fra 0 til 255.

<BlockImage module="CheeseStick/CSD03" id="get_input" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Port som skal leses | Sa, Sb, Sc | Porten fra den siste `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.get_input('Sa')
```
