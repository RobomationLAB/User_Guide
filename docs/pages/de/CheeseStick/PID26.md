---
title: PID-26 Umweltsensor
---

# PID-26 Umweltsensor

## Instanz deklarieren {#instance}

Wenn du einen PID-26 Umweltsensor(PID26)-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Umweltsensor starten {#start}

Verwendet den PID-26 Umweltsensor.

<BlockImage module="CheeseStick/PID26" id="start" />

### Parameter

(keine)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.start()
```

## Temperatur {#temperature}

Gibt den mit dem PID26 Umweltsensor gemessenen Temperaturwert zurück. 

<BlockImage module="CheeseStick/PID26" id="temperature" />

### Parameter

(keine)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.temperature()
```

## Luftfeuchtigkeit {#humidity}

Gibt den mit dem PID26 Umweltsensor gemessenen Luftfeuchtigkeitswert zurück.

<BlockImage module="CheeseStick/PID26" id="humidity" />

### Parameter

(keine)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.humidity()
```

## Luftdruck {#pressure}

Gibt den mit dem PID26 Umweltsensor gemessenen Luftdruckwert zurück.  

<BlockImage module="CheeseStick/PID26" id="pressure" />

### Parameter

(keine)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.pressure()
```
