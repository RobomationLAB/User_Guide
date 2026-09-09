---
title: CSD-03 Drehpotentiometer
---

# CSD-03 Drehpotentiometer

## Instanz deklarieren {#instance}

Wenn du einen CSD-03 Drehpotentiometer(CSD03)-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Eingangsport festlegen {#set_input_port}

Legt den Port fest, an dem CSD03 (Potentiometer) angeschlossen ist.

<BlockImage module="CheeseStick/CSD03" id="set_input_port" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | anzuschließender Port | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_port('Sa')
```

## Eingabebereich festlegen {#set_input_range}

Rechnet den Eingabewert des gewählten Ports auf den angegebenen Bereich von Minimum bis Maximum um.  
Der Bereich des Eingabewertes ist 0 ~ 255.  
Der Bereich, in den umgerechnet werden kann, ist -100 ~ 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Zielport | Sa, Sb, Sc | - |
| src_min | Eingabe (Feld) | Minimum des Originalwertes | ganze Zahl 0 ~ 255 | - |
| src_max | Eingabe (Feld) | Maximum des Originalwertes | ganze Zahl 0 ~ 255 | - |
| dst_min | Eingabe (Feld) | Minimum nach der Umrechnung | ganze Zahl -100 ~ 100 | - |
| dst_max | Eingabe (Feld) | Maximum nach der Umrechnung | ganze Zahl -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range('Sa', 0, 255, 0, 100)
```

## Eingabebereich mit Mittelwert festlegen {#set_input_range_median}

Rechnet den Eingabewert des gewählten Ports auf den angegebenen Bereich von Minimum über Mittelwert bis Maximum um.  
Der Bereich des Eingabewertes ist 0 ~ 255.  
Der Bereich, in den umgerechnet werden kann, ist -100 ~ 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range_median" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Zielport | Sa, Sb, Sc | - |
| src_min | Eingabe (Feld) | Minimum des Originalwertes | ganze Zahl 0 ~ 255 | - |
| src_median | Eingabe (Feld) | Mittelwert des Originalwertes | ganze Zahl 0 ~ 255 | - |
| src_max | Eingabe (Feld) | Maximum des Originalwertes | ganze Zahl 0 ~ 255 | - |
| dst_min | Eingabe (Feld) | Minimum nach der Umrechnung | ganze Zahl -100 ~ 100 | - |
| dst_median | Eingabe (Feld) | Mittelwert nach der Umrechnung | ganze Zahl -100 ~ 100 | - |
| dst_max | Eingabe (Feld) | Maximum nach der Umrechnung | ganze Zahl -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Eingabewert {#get_input}

Der Eingabewert des Drehpotentiometers am gewählten Port  
Wurde kein eigener Eingabebereich festgelegt, ist der Bereich des Eingabewertes 0 ~ 255.

<BlockImage module="CheeseStick/CSD03" id="get_input" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | auszulesender Port | Sa, Sb, Sc | der Port des letzten `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.get_input('Sa')
```
