---
title: CSD-10 ALS-Sensor
---

# CSD-10 ALS-Sensor

## Instanz deklarieren {#instance}

Wenn du einen CSD-10 ALS-Sensor(CSD10)-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Eingangsport festlegen {#set_input_port}

Legt den Port fest, an dem CSD10 (Umgebungslichtsensor) angeschlossen ist.

<BlockImage module="CheeseStick/CSD10" id="set_input_port" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | anzuschließender Port | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.set_port('Sa')
```

## Wert des ALS-Sensors {#get_input}

Der Wert des Umgebungslichtsensors am gewählten Port

<BlockImage module="CheeseStick/CSD10" id="get_input" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | auszulesender Port | Sa, Sb, Sc | der Port des letzten `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.get_input('Sa')
```
