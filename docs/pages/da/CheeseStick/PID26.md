---
title: PID-26 miljøsensor
---

# PID-26 miljøsensor

## Instanserklæring {#instance}

Når du tilføjer en PID-26 miljøsensor(PID26)-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Start miljøsensoren {#start}

Begynder at bruge miljøsensoren PID-26.

<BlockImage module="CheeseStick/PID26" id="start" />

### Parametre

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.start()
```

## Temperatur {#temperature}

Returnerer den temperatur, miljøsensoren PID26 har målt. 

<BlockImage module="CheeseStick/PID26" id="temperature" />

### Parametre

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.temperature()
```

## Luftfugtighed {#humidity}

Returnerer den luftfugtighed, miljøsensoren PID26 har målt.

<BlockImage module="CheeseStick/PID26" id="humidity" />

### Parametre

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.humidity()
```

## Tryk {#pressure}

Returnerer det lufttryk, miljøsensoren PID26 har målt.  

<BlockImage module="CheeseStick/PID26" id="pressure" />

### Parametre

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.pressure()
```
