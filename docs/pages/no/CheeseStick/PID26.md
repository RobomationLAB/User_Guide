---
title: PID-26 miljøsensor
---

# PID-26 miljøsensor

## Instanserklæring {#instance}

Når du legger til en PID-26 miljøsensor(PID26)-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Start miljøsensoren {#start}

Tar PID-26 miljøsensoren i bruk.

<BlockImage module="CheeseStick/PID26" id="start" />

### Parametere

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.start()
```

## Temperatur {#temperature}

Returnerer temperaturen som PID26-miljøsensoren måler. 

<BlockImage module="CheeseStick/PID26" id="temperature" />

### Parametere

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.temperature()
```

## Luftfuktighet {#humidity}

Returnerer luftfuktigheten som PID26-miljøsensoren måler.

<BlockImage module="CheeseStick/PID26" id="humidity" />

### Parametere

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.humidity()
```

## Trykk {#pressure}

Returnerer lufttrykket som PID26-miljøsensoren måler.  

<BlockImage module="CheeseStick/PID26" id="pressure" />

### Parametere

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.pressure()
```
