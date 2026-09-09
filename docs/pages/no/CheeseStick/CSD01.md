---
title: CSD-01 Trykknapp
---

# CSD-01 Trykknapp

## Instanserklæring {#instance}

Når du legger til en CSD-01 Trykknapp(CSD01)-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Start med port {#set_input_port}

Angir hvilken port CSD01 (Tact Switch) er koblet til.

<BlockImage module="CheeseStick/CSD01" id="set_input_port" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Port som skal kobles til | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.set_port('Sa')
```

## Knappeinngangens verdi {#button_input}

Verdien til knappeinngangen på den porten du velger  
Den returnerer 0 når knappen er trykket ned, og ellers 1.

<BlockImage module="CheeseStick/CSD01" id="button_input" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Port som skal leses | Sa, Sb, Sc | Porten fra den siste `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_input('Sa')
```

## Er knappen trykket? {#button_pressed}

Om bryterknappen som er koblet til den porten du velger, er trykket ned

<BlockImage module="CheeseStick/CSD01" id="button_pressed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Port som skal leses | Sa, Sb, Sc | Porten fra den siste `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_pressed('Sa')
```
