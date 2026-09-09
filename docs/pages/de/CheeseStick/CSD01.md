---
title: CSD-01 Drucktaster
---

# CSD-01 Drucktaster

## Instanz deklarieren {#instance}

Wenn du einen CSD-01 Drucktaster(CSD01)-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Eingangsport festlegen {#set_input_port}

Legt den Port fest, an dem CSD01 (Tact Switch) angeschlossen ist.

<BlockImage module="CheeseStick/CSD01" id="set_input_port" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | anzuschließender Port | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.set_port('Sa')
```

## Tastereingang {#button_input}

Der Eingabewert des Tasters am gewählten Port  
Ist die Taste gedrückt, wird 0 zurückgegeben, andernfalls 1.

<BlockImage module="CheeseStick/CSD01" id="button_input" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | auszulesender Port | Sa, Sb, Sc | der Port des letzten `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_input('Sa')
```

## Taste gedrückt? {#button_pressed}

Ob die Taste des am gewählten Port angeschlossenen Schalters gedrückt ist

<BlockImage module="CheeseStick/CSD01" id="button_pressed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | auszulesender Port | Sa, Sb, Sc | der Port des letzten `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_pressed('Sa')
```
