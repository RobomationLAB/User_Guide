---
title: PID-13 joystick en knop
---

# PID-13 joystick en knop

## Instantie declareren {#instance}

Voeg je een PID-13 joystick en knop(PID13)-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Joystick starten {#start}

Gebruikt de joystick en de knoppen.

<BlockImage module="CheeseStick/PID13" id="start" />

### Parameters

(geen)

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.start()
```

## Joystickwaarde {#joystick}

De x-/y-waarde van de joystick.  
Het bereik van elke waarde is -128 ~ 127.

<BlockImage module="CheeseStick/PID13" id="joystick" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Gemeten as | x, y | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.joystick('x')
```

## Knopinvoer {#button_input}

De invoertoestand van de gekozen knop  
Is de knop ingedrukt, dan wordt 1 uitgevoerd, is die niet ingedrukt, dan 0.

<BlockImage module="CheeseStick/PID13" id="button_input" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Naam van de knop | knop A(a), knop B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_input('a')
```

## Op knop geklikt? {#button_click}

Of op de gekozen knop is geklikt  
Dit blok geeft alleen op het moment dat op de gekozen knop wordt geklikt true terug, anders false.

<BlockImage module="CheeseStick/PID13" id="button_click" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Naam van de knop | knop A(a), knop B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_click('a')
```
