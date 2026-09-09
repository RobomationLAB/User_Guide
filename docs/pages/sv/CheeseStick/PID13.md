---
title: PID-13 styrspak och knapp
---

# PID-13 styrspak och knapp

## Instansdeklaration {#instance}

När du lägger till ett PID-13 styrspak och knapp(PID13)-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Starta styrspaken {#start}

Börjar använda styrspaken och knapparna.

<BlockImage module="CheeseStick/PID13" id="start" />

### Parametrar

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.start()
```

## Styrspakens värde {#joystick}

Styrspakens x- och y-värde.  
Varje värde går från -128 till 127.

<BlockImage module="CheeseStick/PID13" id="joystick" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Axel som ska mätas | x, y | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.joystick('x')
```

## Knappens ingångsvärde {#button_input}

Ingångstillståndet för den valda knappen  
Det ger 1 när knappen är nedtryckt och 0 när den inte är det.

<BlockImage module="CheeseStick/PID13" id="button_input" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Knappens namn | knapp A(a), knapp B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_input('a')
```

## Klickades knappen? {#button_click}

Om den valda knappen har klickats  
Blocket returnerar sant bara i samma stund som knappen klickas, och falskt i övrigt.

<BlockImage module="CheeseStick/PID13" id="button_click" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Knappens namn | knapp A(a), knapp B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_click('a')
```
