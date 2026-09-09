---
title: CSD-07 Lydsensor
---

# CSD-07 Lydsensor

## Instanserklæring {#instance}

Når du legger til en CSD-07 Lydsensor(CSD07)-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Start med port {#set_input_port}

Angir hvilken port CSD07 (lydsensoren) er koblet til.

<BlockImage module="CheeseStick/CSD07" id="set_input_port" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Port som skal kobles til | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.set_port('Sa')
```

## Lydsensorens verdi {#get_input}

Verdien til lydsensoren på den porten du velger

<BlockImage module="CheeseStick/CSD07" id="get_input" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Port som skal leses | Sa, Sb, Sc | Porten fra den siste `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.get_input('Sa')
```
