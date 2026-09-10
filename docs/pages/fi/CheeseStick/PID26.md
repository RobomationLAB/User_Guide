---
title: PID-26 ympäristöanturi
---

# PID-26 ympäristöanturi

## Instanssin esittely {#instance}

Kun lisäät PID-26 ympäristöanturi(PID26)-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Käynnistä ympäristöanturi {#start}

Ottaa PID-26-ympäristöanturin käyttöön.

<BlockImage module="CheeseStick/PID26" id="start" />

### Parametrit

(ei mitään)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.start()
```

## Lämpötila {#temperature}

Palauttaa PID26-ympäristöanturin mittaaman lämpötilan. 

<BlockImage module="CheeseStick/PID26" id="temperature" />

### Parametrit

(ei mitään)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.temperature()
```

## Ilmankosteus {#humidity}

Palauttaa PID26-ympäristöanturin mittaaman ilmankosteuden.

<BlockImage module="CheeseStick/PID26" id="humidity" />

### Parametrit

(ei mitään)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.humidity()
```

## Ilmanpaine {#pressure}

Palauttaa PID26-ympäristöanturin mittaaman ilmanpaineen.  

<BlockImage module="CheeseStick/PID26" id="pressure" />

### Parametrit

(ei mitään)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.pressure()
```
