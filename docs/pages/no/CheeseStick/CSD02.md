---
title: CSD-02 RGB-LED
---

# CSD-02 RGB-LED

## Instanserklæring {#instance}

Når du legger til en CSD-02 RGB-LED(CSD02)-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Start RGB-LED-en {#start}

Tar RGB-LED-en i bruk.  
Legger du ikke til denne blokken, blir RGB-LED-en ikke slått på.

<BlockImage module="CheeseStick/CSD02" id="start" />

### Parametere

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.start()
```

## Sett fargen {#set_color}

Setter LED-fargen til CSD02 til den fargen du velger.  
Velger du en farge i fargepaletten, gjøres den om til et **fargenavn** (en engelsk streng) i kallet. (Koden lages med fargenavnet, ikke med R-, G- og B-tall.)

<BlockImage module="CheeseStick/CSD02" id="set_color" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Farge | Velg fra fargepaletten → gjøres om til et fargenavn (engelsk) | Fargenavn: `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'violet'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color('orange')
```

## Sett fargen med en blokk fra Farge-kategorien {#set_color_with_block}

Tar imot en blokk fra Farge-kategorien (for eksempel en `[R, G, B]`-tabell) som inndata og setter LED-fargen til CSD02.

<BlockImage module="CheeseStick/CSD02" id="set_color_with_block" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (farge) | Utdataene fra en blokk i Farge-kategorien eller en `[R, G, B]`-tabell | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color(*Utils.color('yellow'))
```

## Endre fargen med RGB {#change_by_rgb}

Legger de R-, G- og B-endringene du skriver inn, til fargen LED-en har nå, og setter den nye fargen.

<BlockImage module="CheeseStick/CSD02" id="change_by_rgb" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| r | Inndata (felt) | Endring i rødt | Heltall -255 til 255 | 0 |
| g | Inndata (felt) | Endring i grønt | Heltall -255 til 255 | 0 |
| b | Inndata (felt) | Endring i blått | Heltall -255 til 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.change_color(10, 0, 0)
```

## Slå av LED {#turn_off}

Fjerner fargen på RGB-LED-en.

<BlockImage module="CheeseStick/CSD02" id="turn_off" />

### Parametere

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.turn_off()
```
