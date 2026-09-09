---
title: PID-13 styrespak og knapp
---

# PID-13 styrespak og knapp

## Instanserklæring {#instance}

Når du legger til en PID-13 styrespak og knapp(PID13)-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Start styrespaken {#start}

Tar styrespaken og knappene i bruk.

<BlockImage module="CheeseStick/PID13" id="start" />

### Parametere

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.start()
```

## Styrespakens verdi {#joystick}

x- og y-verdien til styrespaken.  
Hver verdi går fra -128 til 127.

<BlockImage module="CheeseStick/PID13" id="joystick" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Akse som måles | x, y | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.joystick('x')
```

## Knappens inngangsverdi {#button_input}

Inngangstilstanden til den knappen du velger  
Den gir 1 når knappen er trykket ned, og 0 når den ikke er det.

<BlockImage module="CheeseStick/PID13" id="button_input" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Knappenavn | knapp A(a), knapp B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_input('a')
```

## Ble knappen klikket? {#button_click}

Om den knappen du velger, er klikket  
Denne blokken returnerer sann bare i det øyeblikket knappen klikkes, og ellers usann.

<BlockImage module="CheeseStick/PID13" id="button_click" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Knappenavn | knapp A(a), knapp B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_click('a')
```
