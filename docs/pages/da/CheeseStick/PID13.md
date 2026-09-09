---
title: PID-13 joystick og -knap
---

# PID-13 joystick og -knap

## Instanserklæring {#instance}

Når du tilføjer en PID-13 joystick og -knap(PID13)-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Start joysticket {#start}

Begynder at bruge joysticket og knapperne.

<BlockImage module="CheeseStick/PID13" id="start" />

### Parametre

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.start()
```

## Joystickets værdi {#joystick}

Joystickets x- og y-værdi.  
Hver værdi går fra -128 til 127.

<BlockImage module="CheeseStick/PID13" id="joystick" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Akse der skal måles | x, y | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.joystick('x')
```

## Knappens inputværdi {#button_input}

Inputtilstanden for den valgte knap  
Den giver 1, når knappen er trykket ned, og 0, når den ikke er.

<BlockImage module="CheeseStick/PID13" id="button_input" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Knappens navn | knap A(a), knap B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_input('a')
```

## Blev der klikket på knappen? {#button_click}

Om der er klikket på den valgte knap  
Blokken returnerer sand kun i samme øjeblik knappen klikkes, og falsk ellers.

<BlockImage module="CheeseStick/PID13" id="button_click" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Knappens navn | knap A(a), knap B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_click('a')
```
