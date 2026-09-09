---
title: Hamster
---

# Hamster

## Instanz deklarieren {#instance}

Wenn du einen Hamster-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
hamster = Hamster(0)
# wenn es mehrere Instanzen gibt
hamster_1 = Hamster(1)
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Radgeschwindigkeit setzen {#set_wheel_speed}

Legt die Radgeschwindigkeit fest. Der Bereich der Geschwindigkeit ist -100 ~ 100.

<BlockImage module="roboids/Hamster" id="set_wheel_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Art des Rads | links(left), rechts(right), beide(both) | - |
| speed | Eingabe (Block) | Radgeschwindigkeit | ganze Zahl -100 ~ 100, 0: Stopp | - |

### Python
```python
hamster = Hamster(0)

hamster.set_wheel_speed('both', 50)
```

## Zeit fahren {#move_time}

Fährt mit der aktuellen Radgeschwindigkeit für die angegebene Zeit.  
Ist keine Radgeschwindigkeit gesetzt, fährt der Roboter mit der Standardgeschwindigkeit vorwärts.  
Wenn du warten aktivierst, wird gewartet, bis die Fahrt abgeschlossen ist.

<BlockImage module="roboids/Hamster" id="move_time" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Fahrzeit (Sekunden) | reelle Zahl ≥ 0 | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

# wait = TRUE
hamster.move_time(5, wait=True)
# wait = FALSE
hamster.move_time(0.5, wait=False)
```

## Radgeschwindigkeit ändern {#change_speed}

Ändert die Radgeschwindigkeit von Hamster.  
Die eingegebene Geschwindigkeit wird zur aktuellen Radgeschwindigkeit addiert und ergibt die neue Radgeschwindigkeit.  
Die neu gesetzte Radgeschwindigkeit wird auf den Bereich -100 ~ 100 begrenzt.

<BlockImage module="roboids/Hamster" id="change_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Art des Rads | links(left), rechts(right), beide(both) | - |
| speed | Eingabe (Block) | Geschwindigkeitsdifferenz | ganze Zahl -200 ~ 200 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_wheel_speed('both', 10)
```

## Anhalten {#stop}

Stoppt die Fahrt von Hamster.  
Beide Radgeschwindigkeiten von Hamster werden auf 0 zurückgesetzt.

<BlockImage module="roboids/Hamster" id="stop" />

### Parameter

(keine)

### Python
```python
hamster = Hamster(0)

hamster.stop()
```

## Auf dem Spielfeld einen Schritt vorwärts fahren {#grid_move}

Fährt auf dem Spielfeld wie vorgesehen Feld für Feld.

<BlockImage module="roboids/Hamster" id="grid_move" />

### Parameter

(keine)

### Python
```python
hamster = Hamster(0)

hamster.grid_move()
```

## Auf dem Spielfeld drehen {#grid_turn}

Dreht sich auf dem Spielfeld um 90 Grad in die angegebene Richtung.

<BlockImage module="roboids/Hamster" id="grid_turn" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| direction | Dropdown-Option | Drehrichtung | links(left), rechts(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.grid_turn('left')
```

## Der Linie mit dem Bodensensor folgen {#trace_mode}

Hamster folgt mit dem Bodensensor einer Linie in einer bestimmten Farbe.

<BlockImage module="roboids/Hamster" id="trace_mode" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| floor | Dropdown-Option | Bodensensor für die Linienverfolgung | links(left), rechts(right), Mitte(center) | - |
| line | Dropdown-Option | Farbe der Linie | schwarz(black), weiß(white) | black |

### Python
```python
hamster = Hamster(0)

hamster.trace_line('left', 'black')
```

## Der Linie bis zur nächsten Kreuzung folgen {#trace_until_grid}

Hamster fährt an der Kreuzung in die angegebene Richtung und folgt dann der Linie, bis er die nächste Kreuzung erreicht.  
Wenn du warten aktivierst, wird gewartet, bis die Fahrt abgeschlossen ist.  

<BlockImage module="roboids/Hamster" id="trace_until_grid" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| direction | Dropdown-Option | Fahrtrichtung an der Kreuzung | links abbiegen(left), rechts abbiegen(right), vorwärts(forward), wenden(uturn) | - |
| line | Dropdown-Option | Farbe der Linie | schwarz(black), weiß(white) | black |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

hamster.trace_intersection('left', 'black', wait=True)
```

## Linienverfolgungsgeschwindigkeit setzen {#set_trace_speed}

Legt die Geschwindigkeit der Linienverfolgung fest. Der Bereich ist 1 ~ 10.

<BlockImage module="roboids/Hamster" id="set_trace_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Geschwindigkeit der Linienverfolgung | ganze Zahl 1 ~ 10 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_trace_speed(5)
```

## Linienverfolgung beenden {#stop_trace}

Beendet die Linienverfolgung von Hamster.

<BlockImage module="roboids/Hamster" id="stop_trace" />

### Parameter

(keine)

### Python
```python
hamster = Hamster(0)

hamster.stop_trace()
```

## LED-Farbe setzen {#set_led_color}

Legt die Farbe der LED fest.

<BlockImage module="roboids/Hamster" id="set_led_color" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ziel-LED | links(left), rechts(right), beide(both) | - |
| color | Dropdown-Option | Farbe | schwarz(black), blau(blue), grün(green), cyan(cyan), rot(red), magenta(magenta), gelb(yellow), weiß(white) | - |

### Python
```python
hamster = Hamster(0)

hamster.set_led_color('both', 'red')
```

## LED ausschalten {#turn_off}

Löscht die Farbe der LED.

<BlockImage module="roboids/Hamster" id="turn_off" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ziel-LED | links(left), rechts(right), beide(both) | both |

### Python
```python
hamster = Hamster(0)

hamster.turn_off('both')
```

## Summerton setzen {#sound_buzz}

Legt den Summerton von Hamster mit der angegebenen Frequenz fest.  
Der Frequenzbereich, in dem ein Ton erzeugt werden kann, ist 1,0 Hz ~ 6553,5 Hz.  
Bei anderen Werten wird kein Summerton erzeugt.

<BlockImage module="roboids/Hamster" id="sound_buzz" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| hz | Eingabe (Block) | Frequenz (Hz) | reelle Zahl 0 ~ 6553,5 | - |

### Python
```python
hamster = Hamster(0)

hamster.sound_buzz(440)
```

## Note spielen {#sound_note}

Hamster spielt die angegebene Note.

<BlockImage module="roboids/Hamster" id="sound_note" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| note | Dropdown-Option | Note | C, C#, D, D#, E, F, F#, G, G#, A, A#, B | - |
| octave | Dropdown-Option | Oktave | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster = Hamster(0)

hamster.sound_note('D', 5)
```

## Ton ausschalten {#sound_off}

Schaltet den Ton von Hamster aus.

<BlockImage module="roboids/Hamster" id="sound_off" />

### Parameter

(keine)

### Python
```python
hamster = Hamster(0)

hamster.sound_off()
```

## Radgeschwindigkeit {#wheel_speed}

Die Geschwindigkeit eines bestimmten Rads

<BlockImage module="roboids/Hamster" id="wheel_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ziel-Rad | links(left), rechts(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.wheel_speed('left')
```

## Näherungssensor {#proximity}

Der Wert eines bestimmten Näherungssensors

<BlockImage module="roboids/Hamster" id="proximity" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Position des Sensors | links(left), rechts(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.proximity('left')
```

## Bodensensor {#floor}

Der Wert eines bestimmten Bodensensors

<BlockImage module="roboids/Hamster" id="floor" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Position des Sensors | links(left), rechts(right), Mitte(center) | - |

### Python
```python
hamster = Hamster(0)

hamster.floor('left')
```

## Beschleunigung {#acceleration}

Der Wert der Erdbeschleunigung auf einer bestimmten Achse

<BlockImage module="roboids/Hamster" id="acceleration" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Gemessene Achse | x, y, z | - |

### Python
```python
hamster = Hamster(0)

hamster.acceleration('x')
```

## Helligkeit {#light}

Wert des Helligkeitssensors

<BlockImage module="roboids/Hamster" id="light" />

### Parameter

(keine)

### Python
```python
hamster = Hamster(0)

hamster.light()
```

## Temperatur {#temperature}

Wert des Temperatursensors

<BlockImage module="roboids/Hamster" id="temperature" />

### Parameter

(keine)

### Python
```python
hamster = Hamster(0)

hamster.temperature()
```

## Signalstärke {#signal_strength}

Signalstärke

<BlockImage module="roboids/Hamster" id="signal_strength" />

### Parameter

(keine)

### Python
```python
hamster = Hamster(0)

hamster.signal_strength()
```

## Batterie {#battery}

Batteriespannung

<BlockImage module="roboids/Hamster" id="battery" />

### Parameter

(keine)

### Python
```python
hamster = Hamster(0)

hamster.battery()
```

## Zustandsänderung {#state_change}

Ob sich der Zustand des Roboters geändert hat

<BlockImage module="roboids/Hamster" id="state_change" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Art des Zustands | 0 ~ 6 (siehe Tabelle unten) | - |

| unit | Bedingung |
|------|------|
| 0 | `acceleration('x') > 5000` |
| 1 | `acceleration('x') < -5000` |
| 2 | `acceleration('y') > 5000` |
| 3 | `acceleration('y') < -5000` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -3000` |
| 6 | `proximity('left') > 50 or proximity('right') > 50` |

### Python
```python
hamster = Hamster(0)

# unit = 0
hamster.acceleration('x') > 5000
# unit = 6
hamster.proximity('left') > 50 or hamster.proximity('right') > 50
```

## Port-Eingabemodus festlegen {#io_mode}

Legt den Eingabemodus des IO-Ports fest.

<BlockImage module="roboids/Hamster" id="io_mode" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ein-/Ausgabeport | a, b, beide(both) | - |
| option | Dropdown-Option | Ein-/Ausgabemodus | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster = Hamster(0)

hamster.io_mode('both', 'analog_input')
```

## Ausgabe des Ports setzen {#set_output}

Setzt den Ausgabewert des angegebenen IO-Ports.

<BlockImage module="roboids/Hamster" id="set_output" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ein-/Ausgabeport | a, b, beide(both) | - |
| data | Eingabe (Block) | Ausgabewert | ganze Zahl 0 ~ 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_output('both', 90)
```

## Ausgabe des Ports ändern {#change_output}

Ändert den Ausgabewert des angegebenen IO-Ports.

<BlockImage module="roboids/Hamster" id="change_output" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ein-/Ausgabeport | a, b, beide(both) | - |
| data | Eingabe (Block) | Differenz des Ausgabewerts | ganze Zahl | - |

### Python
```python
hamster = Hamster(0)

hamster.change_output('a', 10)
```

## Greifer öffnen / schließen {#gripper}

Öffnet oder schließt den Greifer von Hamster.  
Je nach Wert von unit wird eine der beiden Methoden aufgerufen.

<BlockImage module="roboids/Hamster" id="gripper" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Aktion | schließen(close), öffnen(open) | - |

### Python
```python
hamster = Hamster(0)

# unit = "open"
hamster.open_gripper()
# unit = "close"
hamster.close_gripper()
```

## Abschusswinkel setzen {#shooter}

Steuert den Schussmechanismus über den Winkel. Der Bereich des Winkels ist 0 ~ 180.

<BlockImage module="roboids/Hamster" id="shooter" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Abschusswinkel | ganze Zahl 0 ~ 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.shooter(45)
```

## Eingabe {#input}

Gibt den Eingabewert des Ein-/Ausgabeports von Hamster zurück.

<BlockImage module="roboids/Hamster" id="input" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ein-/Ausgabeport | a, b | - |

### Python
```python
hamster = Hamster(0)

hamster.get_input('a')
```
