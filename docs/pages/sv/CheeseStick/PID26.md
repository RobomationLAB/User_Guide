---
title: PID-26 miljösensor
---

# PID-26 miljösensor

## Instansdeklaration {#instance}

När du lägger till ett PID-26 miljösensor(PID26)-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Starta miljösensorn {#start}

Börjar använda miljösensorn PID-26.

<BlockImage module="CheeseStick/PID26" id="start" />

### Parametrar

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.start()
```

## Temperatur {#temperature}

Returnerar temperaturen som miljösensorn PID26 har mätt. 

<BlockImage module="CheeseStick/PID26" id="temperature" />

### Parametrar

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.temperature()
```

## Luftfuktighet {#humidity}

Returnerar luftfuktigheten som miljösensorn PID26 har mätt.

<BlockImage module="CheeseStick/PID26" id="humidity" />

### Parametrar

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.humidity()
```

## Lufttryck {#pressure}

Returnerar lufttrycket som miljösensorn PID26 har mätt.  

<BlockImage module="CheeseStick/PID26" id="pressure" />

### Parametrar

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.pressure()
```
