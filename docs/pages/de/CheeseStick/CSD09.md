---
title: CSD-09 Motor
---

# CSD-09 Motor

## Instanz deklarieren {#instance}

Wenn du einen CSD-09 Motor(CSD09)-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Servomotor starten {#start_servo_motor}

Legt den Port fest, an dem der Servomotor verwendet wird.  
Ohne diese Portangabe arbeitet der Motor nicht richtig.

<BlockImage module="CheeseStick/CSD09" id="start_servo_motor" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Port des Servomotors | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_servo_motor('Sa')
```

## Winkel des Servomotors setzen {#set_servo_motor}

Setzt den Winkel des Servomotors am angegebenen Port.  
Der Bereich der wählbaren Werte ist 0 ~ 180.

<BlockImage module="CheeseStick/CSD09" id="set_servo_motor" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Port des Servomotors | Sa, Sb, Sc | der Port des letzten `start_servo_motor` |
| value | Eingabe (Feld) | Drehwinkel (Grad) | ganze Zahl 0 ~ 180 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_servo_motor('Sa', 90)
```

## Winkel des Servomotors ändern {#change_servo_motor}

Ändert den Winkel des Servomotors am angegebenen Port.  
Der Bereich der wählbaren Werte ist -180 ~ 180.

<BlockImage module="CheeseStick/CSD09" id="change_servo_motor" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Port des Servomotors | Sa, Sb, Sc | der Port des letzten `start_servo_motor` |
| value | Eingabe (Feld) | Winkeldifferenz der Änderung | ganze Zahl | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_servo_motor('Sa', 10)
```

## Servomotor stoppen {#stop_servo_motor}

Schaltet die Stromversorgung des Servomotors am angegebenen Port ab.

<BlockImage module="CheeseStick/CSD09" id="stop_servo_motor" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Port des Servomotors | Sa, Sb, Sc | der Port des letzten `start_servo_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_servo_motor('Sa')
```

## Gleichstrommotor starten {#start_DC_motor}

Ermöglicht die Steuerung des Gleichstrommotors über den angegebenen Port.
Dieser Block muss einmal aufgerufen werden, bevor du andere Blöcke für den Gleichstrommotor verwendest.

<BlockImage module="CheeseStick/CSD09" id="start_DC_motor" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Port des Gleichstrommotors | Mab, Mcd | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_dc_motor('Mab')
```

## Geschwindigkeit des Gleichstrommotors setzen {#set_DC_motor}

Setzt den PWM-Ausgabewert des Gleichstrommotors.

<BlockImage module="CheeseStick/CSD09" id="set_DC_motor" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Port des Gleichstrommotors | Mab, Mcd | der Port des letzten `start_dc_motor` |
| value | Eingabe (Feld) | PWM-Ausgabewert | ganze Zahl 0 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_dc_motor('Mab', 50)
```

## Geschwindigkeit des Gleichstrommotors ändern {#change_DC_motor}

Addiert die eingegebene Änderung zum aktuellen PWM-Ausgabewert des Gleichstrommotors und setzt so einen neuen Wert.

<BlockImage module="CheeseStick/CSD09" id="change_DC_motor" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Port des Gleichstrommotors | Mab, Mcd | der Port des letzten `start_dc_motor` |
| value | Eingabe (Feld) | PWM-Differenz der Änderung | ganze Zahl | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_dc_motor('Mab', 10)
```

## Gleichstrommotor stoppen {#stop_DC_motor}

Stoppt die Ausgabe des Gleichstrommotors.

<BlockImage module="CheeseStick/CSD09" id="stop_DC_motor" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Port des Gleichstrommotors | Mab, Mcd | der Port des letzten `start_dc_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_dc_motor('Mab')
```

## Schrittmotor starten {#start_step_motor}

Verwendet den Schrittmotor.

<BlockImage module="CheeseStick/CSD09" id="start_step_motor" />

### Parameter

(keine)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_step_motor()
```

## Modus des Schrittmotors setzen {#set_step_motor_mode}

Legt den Modus fest, in dem der Schrittmotor gesteuert wird.  
Wird kein eigener Modus festgelegt, ist standardmäßig der Modus „Power" gesetzt.  
Achtung! Der Modus darf nicht gewechselt werden, während sich der Schrittmotor dreht.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_mode" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Betriebsmodus | off (aus), normal(wave_step), Power(full_step) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_mode('full_step')
```

## Geschwindigkeit des Schrittmotors setzen {#set_step_motor_speed}

Setzt die Geschwindigkeit des Schrittmotors.  
Der Bereich der wählbaren Werte ist -1000 ~ 1000.  
Bei einem negativen Wert dreht sich der Motor in die Gegenrichtung.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| value | Eingabe (Feld) | Drehgeschwindigkeit (PPS) | ganze Zahl ≥ 0 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_speed(100)
```

## Schrittmotor drehen {#rotate_step_motor}

Legt die Anzahl der Impulse fest, um die sich der Schrittmotor dreht.  
Der Bereich der wählbaren Werte ist 0 ~ 65535.  
Ist keine Geschwindigkeit für den Schrittmotor gewählt, dreht er sich nicht.  
Ist „warten" angekreuzt, wird gewartet, bis die Drehung abgeschlossen ist.

<BlockImage module="CheeseStick/CSD09" id="rotate_step_motor" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| value | Eingabe (Feld) | Anzahl der Schritte | ganze Zahl | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# wait = TRUE
csd09.rotate_step_motor(360, wait=True)

# wait = FALSE
csd09.rotate_step_motor(360, wait=False)
```

## Geschwindigkeit des Schrittmotors ändern {#change_step_motor_speed}

Ändert die Geschwindigkeit des Schrittmotors.  
Der Bereich der wählbaren Werte ist -2000 ~ 2000.

<BlockImage module="CheeseStick/CSD09" id="change_step_motor_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| value | Eingabe (Feld) | PPS-Differenz der Änderung | ganze Zahl | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_step_motor_speed(10)
```

## Schrittmotor stoppen {#stop_step_motor}

Stoppt den Schrittmotor oder schaltet seine Stromversorgung ab.

<BlockImage module="CheeseStick/CSD09" id="stop_step_motor" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Art des Stoppens | stoppen(stop), Strom abschalten(power) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# unit = "stop"
csd09.stop_step_motor()

# unit = "power"
csd09.turn_off_step_motor()
```

## Schrittzahl {#step_motor_steps}

Gibt die Gesamtzahl der Schritte zurück, die der Schrittmotor bisher gedreht hat.

<BlockImage module="CheeseStick/CSD09" id="step_motor_steps" />

### Parameter

(keine)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.get_steps()
```
