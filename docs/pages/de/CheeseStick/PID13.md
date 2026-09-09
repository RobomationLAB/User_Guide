---
title: PID-13 Joystick und Taste
---

# PID-13 Joystick und Taste

## Instanz deklarieren {#instance}

Wenn du einen PID-13 Joystick und Taste(PID13)-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Joystick starten {#start}

Verwendet den Joystick und die Tasten.

<BlockImage module="CheeseStick/PID13" id="start" />

### Parameter

(keine)

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.start()
```

## Joystick-Wert {#joystick}

Der x- / y-Wert des Joysticks.  
Der Bereich jedes Wertes ist -128 ~ 127.

<BlockImage module="CheeseStick/PID13" id="joystick" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | gemessene Achse | x, y | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.joystick('x')
```

## Tastereingang {#button_input}

Der Eingabezustand der gewählten Taste  
Ist die Taste gedrückt, wird 1 ausgegeben, ist sie nicht gedrückt, 0.

<BlockImage module="CheeseStick/PID13" id="button_input" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Name der Taste | Taste A(a), Taste B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_input('a')
```

## Taste angeklickt? {#button_click}

Ob die gewählte Taste angeklickt wurde  
Dieser Block gibt nur in dem Moment true zurück, in dem die gewählte Taste angeklickt wird, sonst false.

<BlockImage module="CheeseStick/PID13" id="button_click" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Name der Taste | Taste A(a), Taste B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_click('a')
```
