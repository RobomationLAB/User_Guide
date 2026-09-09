---
title: Beagle
---

# Beagle

## Instanz deklarieren {#instance}

Wenn du einen Beagle-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
beagle = Beagle(0)
# wenn es mehrere Instanzen gibt
beagle_1 = Beagle(1)
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |

## Radgeschwindigkeit setzen {#set_wheel_speed}

Legt die Radgeschwindigkeit fest. Der Bereich der Geschwindigkeit ist -100 ~ 100.

<BlockImage module="roboids/Beagle" id="set_wheel_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Art des Rads | links(left), rechts(right), beide(both) | - |
| speed | Eingabe (Block) | Radgeschwindigkeit | ganze Zahl -100 ~ 100, 0: Stopp | - |

### Python
```python
beagle = Beagle(0)

beagle.set_wheel_speed('both', 50)
```

## Strecke bewegen {#move_distance}

Bewegt sich mit der aktuellen Radgeschwindigkeit die angegebene Strecke.  
Ist keine Radgeschwindigkeit gesetzt, bewegt sich der Roboter mit der Standardgeschwindigkeit vorwärts.  
Ist der Streckenwert 0, bewegt er sich entsprechend der aktuellen Radgeschwindigkeit weiter.  
Wenn du warten aktivierst, wird gewartet, bis die Bewegung abgeschlossen ist.

<BlockImage module="roboids/Beagle" id="move_distance" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Strecke | reelle Zahl ≥ 0 | - |
| unit | Dropdown-Option | Längeneinheit | cm, mm, Zoll(inch) | cm |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.move_distance(50, 'cm', wait=True)
```

## Zeit bewegen {#move_time}

Bewegt sich mit der aktuellen Radgeschwindigkeit für die angegebene Zeit.  
Ist keine Radgeschwindigkeit gesetzt, bewegt sich der Roboter mit der Standardgeschwindigkeit vorwärts.  
Wenn du warten aktivierst, wird gewartet, bis die Bewegung abgeschlossen ist.

<BlockImage module="roboids/Beagle" id="move_time" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Zeit (Sekunden) | reelle Zahl ≥ 0 | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

# wait = TRUE
beagle.move_time(5, wait=True)
# wait = FALSE
beagle.move_time(0.5, wait=False)
```

## Auf der Stelle drehen {#turn_degree}

Legt Richtung und Winkel für die Drehung auf der Stelle fest.  
Wenn du warten aktivierst, wird gewartet, bis die Drehung abgeschlossen ist.

<BlockImage module="roboids/Beagle" id="turn_degree" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| direction | Dropdown-Option | Drehrichtung | links(left), rechts(right) | - |
| data | Eingabe (Block) | Drehwinkel (Grad) | reelle Zahl ≥ 0 | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.turn_degree('left', 90, wait=True)
```

## Radgeschwindigkeit ändern {#change_speed}

Ändert die Radgeschwindigkeit von Beagle.  
Die eingegebene Geschwindigkeit wird zur aktuellen Radgeschwindigkeit addiert und ergibt die neue Radgeschwindigkeit.  
Die neu gesetzte Radgeschwindigkeit wird auf den Bereich -100 ~ 100 begrenzt.

<BlockImage module="roboids/Beagle" id="change_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Art des Rads | links(left), rechts(right), beide(both) | - |
| speed | Eingabe (Block) | Geschwindigkeitsdifferenz | ganze Zahl -200 ~ 200 | - |

### Python
```python
beagle = Beagle(0)

beagle.change_wheel_speed('both', 10)
```

## Anhalten {#stop}

Stoppt die Bewegung von Beagle.  
Beide Radgeschwindigkeiten von Beagle werden auf 0 zurückgesetzt.

<BlockImage module="roboids/Beagle" id="stop" />

### Parameter

(keine)

### Python
```python
beagle = Beagle(0)

beagle.stop()
```

## Rad bewegt sich? {#wheel_moving}

Gibt true zurück, wenn sich das Rad bewegt, und false, wenn es stillsteht.

<BlockImage module="roboids/Beagle" id="wheel_moving" />

### Parameter

(keine)

### Python
```python
beagle = Beagle(0)

beagle.wheel_moving()
```

## Summerton setzen {#sound_buzz}

Legt den Summerton von Beagle mit der angegebenen Frequenz fest.  
Der Frequenzbereich, in dem ein Ton erzeugt werden kann, ist 27,5 Hz ~ 6553,5 Hz.  
Bei anderen Werten wird kein Summerton erzeugt.

<BlockImage module="roboids/Beagle" id="sound_buzz" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| hz | Eingabe (Block) | Frequenz (Hz) | reelle Zahl 0, 27,5 ~ 6553,5 (sonst 0) | - |

### Python
```python
beagle = Beagle(0)

beagle.sound_buzz(440)
```

## Note spielen {#sound_note}

Beagle spielt die angegebene Note.

<BlockImage module="roboids/Beagle" id="sound_note" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| note | Dropdown-Option | Note | C, C#, D, D#, E, F, F#, G, G#, A, A#, B | - |
| octave | Dropdown-Option | Oktave | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
beagle = Beagle(0)

beagle.sound_note('D', 5)
```

## Soundclip abspielen {#sound_clip}

Beagle spielt einen bestimmten Soundclip ab.  
Wenn du warten aktivierst, wird gewartet, bis das Abspielen abgeschlossen ist.

<BlockImage module="roboids/Beagle" id="sound_clip" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| clip | Dropdown-Option | Name des Soundclips | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'dibidibidip'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'` usw. | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.sound_clip('siren', wait=True)
```

## Ton aus {#sound_off}

Schaltet den Ton von Beagle aus.

<BlockImage module="roboids/Beagle" id="sound_off" />

### Parameter

(keine)

### Python
```python
beagle = Beagle(0)

beagle.sound_off()
```

## Ton wird abgespielt? {#sound_playing}

Gibt true zurück, wenn ein Ton abgespielt wird, und false, wenn nicht.

<BlockImage module="roboids/Beagle" id="sound_playing" />

### Parameter

(keine)

### Python
```python
beagle = Beagle(0)

beagle.sound_playing()
```

## Radgeschwindigkeit {#wheel_speed}

Die Geschwindigkeit eines bestimmten Rads

<BlockImage module="roboids/Beagle" id="wheel_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ziel-Rad | links(left), rechts(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.wheel_speed('left')
```

## Encoder {#encoder}

Der Encoder-Wert eines bestimmten Rads

<BlockImage module="roboids/Beagle" id="encoder" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ziel-Rad | links(left), rechts(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.encoder('left')
```

## Gyroskop {#gyroscope}

Der Wert des Gyroskop-Sensors auf einer bestimmten Achse

<BlockImage module="roboids/Beagle" id="gyroscope" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Gemessene Achse | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.gyroscope('x')
```

## Beschleunigungssensor {#accelerometer}

Der Wert des Beschleunigungssensors auf einer bestimmten Achse

<BlockImage module="roboids/Beagle" id="accelerometer" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Gemessene Achse | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.accelerometer('x')
```

## Magnetometer {#magnetometer}

Der Wert des Magnetfeldsensors auf einer bestimmten Achse

<BlockImage module="roboids/Beagle" id="magnetometer" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Gemessene Achse | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.magnetometer('x')
```

## Temperatur {#temperature}

Wert des Temperatursensors

<BlockImage module="roboids/Beagle" id="temperature" />

### Parameter

(keine)

### Python
```python
beagle = Beagle(0)

beagle.temperature()
```

## Signalstärke {#signal_strength}

Signalstärke

<BlockImage module="roboids/Beagle" id="signal_strength" />

### Parameter

(keine)

### Python
```python
beagle = Beagle(0)

beagle.signal_strength()
```

## Batterie {#battery}

Batteriespannung

<BlockImage module="roboids/Beagle" id="battery" />

### Parameter

(keine)

### Python
```python
beagle = Beagle(0)

beagle.battery()
```

## Zustandsänderung {#state_change}

Ob sich der Zustand des Roboters geändert hat

<BlockImage module="roboids/Beagle" id="state_change" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Art des Zustands | 0 ~ 5 (siehe Tabelle unten) | - |

| unit | Bedingung |
|------|------|
| 0 | `accelerometer('x') > 0.8` |
| 1 | `accelerometer('x') < -0.8` |
| 2 | `accelerometer('y') > 0.8` |
| 3 | `accelerometer('y') < -0.8` |
| 4 | `accelerometer('z') > 0` |
| 5 | `accelerometer('z') < 0` |

### Python
```python
beagle = Beagle(0)

# unit = 0
beagle.accelerometer('x') > 0.8
```

## Lidar starten / stoppen {#lidar_power}

Aktiviert oder deaktiviert den Lidar-Sensor.

<BlockImage module="roboids/Beagle" id="lidar_power" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| on | Dropdown-Option | Lidar ON / OFF | starten(on=True), stoppen(off=False) | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.lidar_power(True)
```

## Lidar-Wert Nr. ~ {#lidar_value}

Der Lidar-Sensor kann die Entfernung zu Objekten rund um 360 Grad messen.  
Ausgehend von der Vorderseite von Beagle (Wert Nr. 0) erhöht sich die Nummer gegen den Uhrzeigersinn jeweils um 1.

<BlockImage module="roboids/Beagle" id="lidar_value" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Eingabe (Feld) | Nummer des Objekts (ab 0) | ganze Zahl ≥ 0 | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_value(0)
```

## Lidar-Wert je Richtung {#lidar_directions}

Zeigt die vom Lidar-Sensor gemessene Entfernung nach vorn, hinten, zu beiden Seiten und in die diagonalen Richtungen.  
Ausgegeben wird der Mittelwert der Entfernungen im Bereich von 45 Grad links und rechts der jeweiligen Richtung.

<BlockImage module="roboids/Beagle" id="lidar_directions" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| direction | Dropdown-Option | Gemessene Richtung | vorne(front), links vorne(left front), links(left), links hinten(left back), hinten(back), rechts hinten(right back), rechts(right), rechts vorne(right front) | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_directions('front')
```

## Lidar bereit? {#lidar_state}

Gibt zurück, ob der Lidar eingeschaltet ist, als **true(True) / false(False)**.

<BlockImage module="roboids/Beagle" id="lidar_state" />

### Parameter

(keine)

### Python
```python
beagle = Beagle(0)

beagle.lidar_ready()
```
