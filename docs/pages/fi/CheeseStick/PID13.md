---
title: PID-13 ohjaussauva ja painike
---

# PID-13 ohjaussauva ja painike

## Instanssin esittely {#instance}

Kun lisäät PID-13 ohjaussauva ja painike(PID13)-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Käynnistä ohjaussauva {#start}

Ottaa ohjaussauvan ja painikkeet käyttöön.

<BlockImage module="CheeseStick/PID13" id="start" />

### Parametrit

(ei mitään)

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.start()
```

## Ohjaussauvan arvo {#joystick}

Ohjaussauvan x- ja y-arvo.  
Kumpikin arvo on välillä -128 ja 127.

<BlockImage module="CheeseStick/PID13" id="joystick" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Mitattava akseli | x, y | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.joystick('x')
```

## Painikkeen tuloarvo {#button_input}

Valitsemasi painikkeen tulotila  
Se antaa 1, kun painike on painettuna, ja 0, kun ei ole.

<BlockImage module="CheeseStick/PID13" id="button_input" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Painikkeen nimi | painike A(a), painike B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_input('a')
```

## Onko painiketta napsautettu? {#button_click}

Onko valitsemaasi painiketta napsautettu  
Tämä lohko palauttaa toden vain sillä hetkellä, kun painiketta napsautetaan, ja muuten epätoden.

<BlockImage module="CheeseStick/PID13" id="button_click" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Painikkeen nimi | painike A(a), painike B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_click('a')
```
