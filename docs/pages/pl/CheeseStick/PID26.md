---
title: PID-26 Czujnik środowiskowy
---

# PID-26 Czujnik środowiskowy

## Deklaracja instancji {#instance}

Po dodaniu bloku PID-26 Czujnik środowiskowy(PID26) do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Uruchom czujnik środowiskowy {#start}

Włącza czujnik środowiskowy PID-26.

<BlockImage module="CheeseStick/PID26" id="start" />

### Parametry

(brak)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.start()
```

## Temperatura {#temperature}

Zwraca temperaturę zmierzoną czujnikiem środowiskowym PID26. 

<BlockImage module="CheeseStick/PID26" id="temperature" />

### Parametry

(brak)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.temperature()
```

## Wilgotność {#humidity}

Zwraca wilgotność zmierzoną czujnikiem środowiskowym PID26.

<BlockImage module="CheeseStick/PID26" id="humidity" />

### Parametry

(brak)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.humidity()
```

## Ciśnienie {#pressure}

Zwraca ciśnienie zmierzone czujnikiem środowiskowym PID26.  

<BlockImage module="CheeseStick/PID26" id="pressure" />

### Parametry

(brak)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.pressure()
```
