---
title: CSD-07 Geräuschsensor
---

# CSD-07 Geräuschsensor

## Instanz deklarieren {#instance}

Wenn du einen CSD-07 Geräuschsensor(CSD07)-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Eingangsport festlegen {#set_input_port}

Legt den Port fest, an dem CSD07 (Geräuschsensor) angeschlossen ist.

<BlockImage module="CheeseStick/CSD07" id="set_input_port" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | anzuschließender Port | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.set_port('Sa')
```

## Wert des Geräuschsensors {#get_input}

Der Wert des Geräuschsensors am gewählten Port

<BlockImage module="CheeseStick/CSD07" id="get_input" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | auszulesender Port | Sa, Sb, Sc | der Port des letzten `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.get_input('Sa')
```
