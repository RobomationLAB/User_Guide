---
title: PID-26 omgevingssensor
---

# PID-26 omgevingssensor

## Instantie declareren {#instance}

Voeg je een PID-26 omgevingssensor(PID26)-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Omgevingssensor starten {#start}

Gebruikt de PID-26 omgevingssensor.

<BlockImage module="CheeseStick/PID26" id="start" />

### Parameters

(geen)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.start()
```

## Temperatuur {#temperature}

Geeft de met de PID26 omgevingssensor gemeten temperatuurwaarde terug. 

<BlockImage module="CheeseStick/PID26" id="temperature" />

### Parameters

(geen)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.temperature()
```

## Luchtvochtigheid {#humidity}

Geeft de met de PID26 omgevingssensor gemeten luchtvochtigheidswaarde terug.

<BlockImage module="CheeseStick/PID26" id="humidity" />

### Parameters

(geen)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.humidity()
```

## Luchtdruk {#pressure}

Geeft de met de PID26 omgevingssensor gemeten luchtdrukwaarde terug.  

<BlockImage module="CheeseStick/PID26" id="pressure" />

### Parameters

(geen)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.pressure()
```
