---
title: Cheese Stick
---

# Cheese Stick

## Instanz deklarieren {#instance}

Wenn du einen Cheese Stick(CheeseStick)-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
cheesestick = CheeseStick(0)
# wenn es mehrere Instanzen gibt
cheesestick_1 = CheeseStick(1)
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Eingangsmodus festlegen {#set_input_mode}

Legt den Eingangsmodus des gewählten Anschlusses fest.

<BlockImage module="roboids/CheeseStick" id="set_input_mode" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Eingangsanschluss | Sa, Sb, Sc, La, Lb, Lc | - |
| option | Dropdown-Option | Eingangsmodus | Makey(makey), Taster(button), Digital Pull-up(digital_pullup), Digital Pull-down(digital_pulldown), Analog(analog), Analogspannung(analog_voltage) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_mode('Sa', 'button')
```

## Eingangsbereich setzen {#set_input_range}

Wandelt den Eingangswert des gewählten Anschlusses in den angegebenen Bereich von Minimum bis Maximum um.  
Der Bereich der Eingangswerte ist 0 ~ 255.  
Der Bereich, in den umgewandelt werden kann, ist -100 ~ 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Eingangsanschluss | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Eingabe (Feld) | Minimum der Quelle | ganze Zahl 0 ~ 255 | - |
| src_max | Eingabe (Feld) | Maximum der Quelle | ganze Zahl 0 ~ 255 | - |
| dst_min | Eingabe (Feld) | Minimum nach der Umwandlung | ganze Zahl -100 ~ 100 | - |
| dst_max | Eingabe (Feld) | Maximum nach der Umwandlung | ganze Zahl -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range('Sa', 0, 255, 0, 100)
```

## Eingangsbereich mit Mittelwert setzen {#set_input_range_median}

Wandelt den Eingangswert des gewählten Anschlusses in den angegebenen Bereich von Minimum über Mittelwert bis Maximum um.  
Der Bereich der Eingangswerte ist 0 ~ 255.  
Der Bereich, in den umgewandelt werden kann, ist -100 ~ 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range_median" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Eingangsanschluss | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Eingabe (Feld) | Minimum der Quelle | ganze Zahl 0 ~ 255 | - |
| src_median | Eingabe (Feld) | Mittelwert der Quelle | ganze Zahl 0 ~ 255 | - |
| src_max | Eingabe (Feld) | Maximum der Quelle | ganze Zahl 0 ~ 255 | - |
| dst_min | Eingabe (Feld) | Minimum nach der Umwandlung | ganze Zahl -100 ~ 100 | - |
| dst_median | Eingabe (Feld) | Mittelwert nach der Umwandlung | ganze Zahl -100 ~ 100 | - |
| dst_max | Eingabe (Feld) | Maximum nach der Umwandlung | ganze Zahl -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Eingang {#get_input}

Der Eingangswert des gewählten Anschlusses

<BlockImage module="roboids/CheeseStick" id="get_input" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Eingangsanschluss | Sa, Sb, Sc, La, Lb, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_input('Sa')
```

## Impuls-Eingangsmodus festlegen {#set_pulse_input_mode}

Legt den Impuls-Eingangsmodus des gewählten Ports fest.

<BlockImage module="roboids/CheeseStick" id="set_pulse_input_mode" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Impuls-Eingangsport | Sc, Lc | - |
| option | Dropdown-Option | Pull-Modus | Impuls (default), Impuls (Pull-up) (pull-up), Impuls (Pull-down) (pull-down) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pulse_input_mode('Sc', 'pull-up')
```

## Impuls erkannt? {#get_pulse_input}

Ob am gewählten Port ein Impuls erkannt wurde

<BlockImage module="roboids/CheeseStick" id="get_pulse_input" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Impuls-Eingangsport | Sc, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_pulse_input('Sc')
```

## Digitalausgang setzen {#set_digital_output}

Setzt den Digitalausgang des angegebenen Anschlusses.  
Wählbar sind die Werte 0 oder 1.

<BlockImage module="roboids/CheeseStick" id="set_digital_output" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Digitalausgang | Sa, Sb, Sc, La, Lb, Lc, Mab, Mcd | - |
| value | Dropdown-Option | Ausgabewert | 0 oder 1 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_digital_output('Sa', 1)
```

## PWM-Ausgang setzen {#set_pwm_output}

Setzt den PWM-Ausgang des angegebenen Anschlusses.  
Der wählbare Bereich ist 0 ~ 100.

<BlockImage module="roboids/CheeseStick" id="set_pwm_output" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | PWM-Ausgang | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Eingabe (Feld) | PWM-Wert | ganze Zahl 0 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pwm_output('Sa', 50)
```

## PWM-Ausgang ändern {#change_pwm_output}

Ändert den PWM-Ausgang des angegebenen Anschlusses.  
Der wählbare Bereich ist -100 ~ 100.

<BlockImage module="roboids/CheeseStick" id="change_pwm_output" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | PWM-Ausgang | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Eingabe (Feld) | PWM-Differenz | ganze Zahl -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.change_pwm_output('Sa', 10)
```

## Summton setzen {#sound_buzz}

Legt den Summton von Cheese Stick fest.

<BlockImage module="roboids/CheeseStick" id="sound_buzz" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| hz | Eingabe (Block) | Frequenz (Hz) | reelle Zahl 0 ~ 6553,5 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_buzz(440)
```

## Note spielen {#sound_note}

Cheese Stick spielt die angegebene Note.

<BlockImage module="roboids/CheeseStick" id="sound_note" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| note | Dropdown-Option | Note | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Dropdown-Option | Oktave | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_note('D', 5)
```

## Soundclip abspielen {#sound_clip}

Cheese Stick spielt einen bestimmten Soundclip ab.

<BlockImage module="roboids/CheeseStick" id="sound_clip" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| clip | Dropdown-Option | Name des Soundclips | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'happy'`, `'angry'`, `'sad'` usw. | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_clip('siren', wait=True)
```

## Ton aus {#sound_off}

Schaltet den Ton von Cheese Stick aus.

<BlockImage module="roboids/CheeseStick" id="sound_off" />

### Parameter

(keine)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_off()
```

## Beschleunigung {#acceleration}

Der Wert der Erdbeschleunigung auf einer bestimmten Achse

<BlockImage module="roboids/CheeseStick" id="acceleration" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Gemessene Achse | x, y, z | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x')
```

## Temperatur {#temperature}

Wert des Temperatursensors

<BlockImage module="roboids/CheeseStick" id="temperature" />

### Parameter

(keine)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.temperature()
```

## Signalstärke {#signal_strength}

Signalstärke

<BlockImage module="roboids/CheeseStick" id="signal_strength" />

### Parameter

(keine)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.signal_strength()
```

## Batterie {#battery}

Batteriespannung

<BlockImage module="roboids/CheeseStick" id="battery" />

### Parameter

(keine)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.battery()
```

## Zustandsänderung {#state_change}

Ob sich der Zustand des Roboters geändert hat

<BlockImage module="roboids/CheeseStick" id="state_change" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Art des Zustands | 0 ~ 7 (siehe Tabelle unten) | - |

| unit | Bedingung |
|------|------|
| 0 | `acceleration('x') > 960` |
| 1 | `acceleration('x') < -960` |
| 2 | `acceleration('y') > 960` |
| 3 | `acceleration('y') < -960` |
| 4 | `acceleration('z') > 960` |
| 5 | `acceleration('z') < -960` |
| 6 | `tap()` (Klopf-Ereignis) |
| 7 | `fall()` (Fall-Ereignis) |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x') > 960
cheesestick.tap()    # case 6
cheesestick.fall()   # case 7
```
