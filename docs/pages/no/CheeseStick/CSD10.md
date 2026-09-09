---
title: CSD-10 Sensor for omgivelseslys
---

# CSD-10 Sensor for omgivelseslys

## Instanserklæring {#instance}

Når du legger til en CSD-10 Sensor for omgivelseslys(CSD10)-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Start med port {#set_input_port}

Angir hvilken port CSD10 (sensoren for omgivelseslys) er koblet til.

<BlockImage module="CheeseStick/CSD10" id="set_input_port" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Port som skal kobles til | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.set_port('Sa')
```

## Lyssensorens verdi {#get_input}

Verdien til sensoren for omgivelseslys på den porten du velger

<BlockImage module="CheeseStick/CSD10" id="get_input" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Port som skal leses | Sa, Sb, Sc | Porten fra den siste `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.get_input('Sa')
```
