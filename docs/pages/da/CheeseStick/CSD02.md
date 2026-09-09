---
title: CSD-02 RGB-LED
---

# CSD-02 RGB-LED

## Instanserklæring {#instance}

Når du tilføjer en CSD-02 RGB-LED(CSD02)-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Start RGB-LED'en {#start}

Begynder at bruge RGB-LED'en.  
Hvis du ikke tilføjer denne blok, aktiveres RGB-LED'en ikke.

<BlockImage module="CheeseStick/CSD02" id="start" />

### Parametre

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.start()
```

## Indstil farven {#set_color}

Indstiller LED'ens farve på CSD02 til den angivne farve.  
Når du vælger en farve i farvepaletten, omdannes den til et **farvenavn** (en engelsk streng) i kaldet. (Koden dannes med farvenavnet, ikke med talværdier for R, G og B.)

<BlockImage module="CheeseStick/CSD02" id="set_color" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Farve | Valg i farvepaletten → omdannes til et farvenavn (engelsk) | Farvenavn: `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'violet'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color('orange')
```

## Indstil farven med en blok fra Farve-kategorien {#set_color_with_block}

Modtager en blok fra Farve-kategorien (f.eks. matricen `[R, G, B]`) som input og indstiller LED'ens farve på CSD02.

<BlockImage module="CheeseStick/CSD02" id="set_color_with_block" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (farve) | Output fra en blok i Farve-kategorien eller matricen `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color(*Utils.color('yellow'))
```

## Ændr farven med RGB {#change_by_rgb}

Lægger de angivne R-, G- og B-ændringer til LED'ens nuværende farve og indstiller den nye farve.

<BlockImage module="CheeseStick/CSD02" id="change_by_rgb" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| r | Input (felt) | Ændring af rød | Heltal -255 til 255 | 0 |
| g | Input (felt) | Ændring af grøn | Heltal -255 til 255 | 0 |
| b | Input (felt) | Ændring af blå | Heltal -255 til 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.change_color(10, 0, 0)
```

## Sluk LED {#turn_off}

Fjerner RGB-LED'ens farve.

<BlockImage module="CheeseStick/CSD02" id="turn_off" />

### Parametre

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.turn_off()
```
