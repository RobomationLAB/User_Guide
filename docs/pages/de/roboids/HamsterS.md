---
title: HamsterS
---

# HamsterS

## Instanz deklarieren {#instance}

Wenn du einen HamsterS-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
hamster_s = HamsterS(0)
# wenn es mehrere Instanzen gibt
hamster_s_1 = HamsterS(1)
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Radgeschwindigkeit setzen {#set_wheel_speed}

Legt die Radgeschwindigkeit fest. Der Bereich der Geschwindigkeit ist -100 ~ 100.

<BlockImage module="roboids/HamsterS" id="set_wheel_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Art des Rads | links(left), rechts(right), beide(both) | - |
| speed | Eingabe (Block) | Radgeschwindigkeit | ganze Zahl -100 ~ 100, 0: Stopp | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_wheel_speed('both', 50)
```

## Strecke fahren {#move_distance}

Fährt mit der aktuellen Radgeschwindigkeit die angegebene Strecke.  
Ist keine Radgeschwindigkeit gesetzt, fährt der Roboter mit der Standardgeschwindigkeit vorwärts.  
Ist der Streckenwert 0, fährt er entsprechend der aktuellen Radgeschwindigkeit weiter.  
Wenn du warten aktivierst, wird gewartet, bis die Fahrt abgeschlossen ist.

<BlockImage module="roboids/HamsterS" id="move_distance" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Fahrstrecke | reelle Zahl ≥ 0 | - |
| unit | Dropdown-Option | Längeneinheit | cm, mm, Zoll(inch) | cm |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.move_distance(50, 'cm', wait=True)
```

## Zeit fahren {#move_time}

Fährt mit der aktuellen Radgeschwindigkeit für die angegebene Zeit.  
Ist keine Radgeschwindigkeit gesetzt, fährt der Roboter mit der Standardgeschwindigkeit vorwärts.  
Wenn du warten aktivierst, wird gewartet, bis die Fahrt abgeschlossen ist.

<BlockImage module="roboids/HamsterS" id="move_time" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Fahrzeit (Sekunden) | reelle Zahl ≥ 0 | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

# wait = TRUE
hamster_s.move_time(5, wait=True)
# wait = FALSE
hamster_s.move_time(5, wait=False)
```

## Auf der Stelle drehen {#turn_degree}

Legt Richtung und Winkel für die Drehung auf der Stelle fest.  
Wenn du warten aktivierst, wird gewartet, bis die Drehung abgeschlossen ist.

<BlockImage module="roboids/HamsterS" id="turn_degree" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| direction | Dropdown-Option | Drehrichtung | links(left), rechts(right) | - |
| data | Eingabe (Block) | Drehwinkel (Grad) | reelle Zahl ≥ 0 | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_degree('left', 90, wait=True)
```

## Radgeschwindigkeit ändern {#change_speed}

Ändert die Radgeschwindigkeit von HamsterS.  
Die eingegebene Geschwindigkeit wird zur aktuellen Radgeschwindigkeit addiert und ergibt die neue Radgeschwindigkeit.

<BlockImage module="roboids/HamsterS" id="change_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Art des Rads | links(left), rechts(right), beide(both) | - |
| speed | Eingabe (Block) | Geschwindigkeitsdifferenz | ganze Zahl -200 ~ 200 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_wheel_speed('both', 10)
```

## Anhalten {#stop}

Stoppt die Fahrt von HamsterS.

<BlockImage module="roboids/HamsterS" id="stop" />

### Parameter

(keine)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop()
```

## Rad in Bewegung? {#wheel_moving}

Gibt true zurück, wenn sich das Rad bewegt, und false, wenn es stillsteht.

<BlockImage module="roboids/HamsterS" id="wheel_moving" />

### Parameter

(keine)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_moving()
```

## Auf dem Spielfeld einen Schritt vorwärts fahren {#grid_move}

Fährt auf dem Spielfeld wie vorgesehen Feld für Feld.

<BlockImage module="roboids/HamsterS" id="grid_move" />

### Parameter

(keine)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_move()
```

## Auf dem Spielfeld drehen {#grid_turn}

Dreht sich auf dem Spielfeld um 90 Grad in die angegebene Richtung.

<BlockImage module="roboids/HamsterS" id="grid_turn" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| direction | Dropdown-Option | Drehrichtung | links(left), rechts(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_turn('left')
```

## Um den Stift schwenken {#pivot}

Legt beim Einsatz des Stifthalters den Drehpunkt, die Richtung und den Winkel fest.  
Wenn du warten aktivierst, wird gewartet, bis die Drehung abgeschlossen ist.

<BlockImage module="roboids/HamsterS" id="pivot" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| base | Dropdown-Option | Drehpunkt | linker Stift(left_pen), rechter Stift(right_pen), linkes Rad(left_wheel), rechtes Rad(right_wheel) | - |
| direction | Dropdown-Option | Drehrichtung | vorwärts(forward), rückwärts(backward) | - |
| degree | Eingabe (Block) | Drehwinkel (Grad) | reelle Zahl ≥ 0 | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot('left_pen', 'forward', 90, wait=True)
```

## Kreis um den Stift zeichnen {#pivot_circle}

Legt beim Zeichnen eines Kreises mit dem Stifthalter den Mittelpunkt, die Richtung, den Radius und den Winkel fest.  
Wenn du warten aktivierst, wird gewartet, bis die Drehung abgeschlossen ist.

<BlockImage module="roboids/HamsterS" id="pivot_circle" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| base | Dropdown-Option | Mittelpunkt | linker(left_pen), rechter(right_pen) Stift | - |
| direction | Dropdown-Option | Drehrichtung | links vorwärts(left_forward), links rückwärts(left_backward), rechts vorwärts(right_forward), rechts rückwärts(right_backward) | - |
| degree | Eingabe (Block) | Drehwinkel (Grad) | reelle Zahl ≥ 0 | - |
| radius | Eingabe (Block) | Radius | reelle Zahl ≥ 0 | - |
| unit | Dropdown-Option | Einheit des Radius | cm, mm, Zoll(inch) | cm |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot_circle('left_pen', 'left_forward', 90, 1, 'cm', wait=True)
```

## Mit dem Sensor der Linie folgen {#trace_mode}

HamsterS folgt mit dem Bodensensor einer Linie in einer bestimmten Farbe.

<BlockImage module="roboids/HamsterS" id="trace_mode" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| floor | Dropdown-Option | Bodensensor für die Linienverfolgung | links(left), rechts(right), Mitte(center) | - |
| line | Dropdown-Option | Farbe der Linie | schwarz(black), weiß(white) | black |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_line('left', 'black')
```

## Der Linie bis zur nächsten Kreuzung folgen {#trace_until_grid}

HamsterS fährt an der Kreuzung in die angegebene Richtung und folgt dann der Linie, bis er die nächste Kreuzung erreicht.  
Wenn du warten aktivierst, wird gewartet, bis die Fahrt abgeschlossen ist.  

<BlockImage module="roboids/HamsterS" id="trace_until_grid" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| direction | Dropdown-Option | Fahrtrichtung an der Kreuzung | links abbiegen(left), rechts abbiegen(right), vorwärts(forward), wenden(uturn) | - |
| line | Dropdown-Option | Farbe der Linie | schwarz(black), weiß(white) | black |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_intersection('left', 'black', wait=True)
```

## Linienverfolgungsgeschwindigkeit setzen {#set_trace_speed}

Legt die Geschwindigkeit der Linienverfolgung fest. Der Bereich ist 1 ~ 10.

<BlockImage module="roboids/HamsterS" id="set_trace_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Geschwindigkeit der Linienverfolgung | ganze Zahl 1 ~ 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_speed(5)
```

## Linienverfolgungsverstärkung setzen {#set_trace_gain}

Legt die Richtungsänderung bei der Linienverfolgung fest. Der Bereich ist 1 ~ 10.

<BlockImage module="roboids/HamsterS" id="set_trace_gain" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Richtungsänderung | ganze Zahl 1 ~ 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_gain(5)
```

## Linienverfolgung beenden {#stop_trace}

Beendet die Linienverfolgung von HamsterS.

<BlockImage module="roboids/HamsterS" id="stop_trace" />

### Parameter

(keine)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop_trace()
```

## LED-Farbe setzen {#set_led_color}

Legt die LED-Farbe von HamsterS fest.  
Wenn du in der Farbpalette eine Farbe wählst, wird sie in den **Farbnamen** (englische Zeichenkette) umgewandelt und so aufgerufen. (Der Code verwendet den Farbnamen und nicht die R-, G-, B-Zahlenwerte.)

<BlockImage module="roboids/HamsterS" id="set_led_color" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ziel-LED | links(left), rechts(right), beide(both) | - |
| color | Farbe | Auswahl in der Farbpalette → Umwandlung in den Farbnamen (englisch) | Farbnamen: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', 'red')
```

## LED-Farbe mit einem Block der Kategorie Farbe setzen {#set_led_color_with_block}

Nimmt einen Block der Kategorie Farbe (`[R, G, B]`) als Eingabe und setzt damit die LED-Farbe.

<BlockImage module="roboids/HamsterS" id="set_led_color_with_block" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ziel-LED | links(left), rechts(right), beide(both) | - |
| data | Eingabe (Farbe) | Block der Kategorie Farbe oder Array `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', *Utils.color_rgb(255, 128, 0))
```

## LED-Farbe um RGB ändern {#change_by_rgb}

Ändert die LED-Farbe von HamsterS um die angegebenen R-, G-, B-Werte.

<BlockImage module="roboids/HamsterS" id="change_by_rgb" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ziel-LED | links(left), rechts(right), beide(both) | - |
| r | Eingabe (Feld) | Änderung von Rot | ganze Zahl -255 ~ 255 | 0 |
| g | Eingabe (Feld) | Änderung von Grün | ganze Zahl -255 ~ 255 | 0 |
| b | Eingabe (Feld) | Änderung von Blau | ganze Zahl -255 ~ 255 | 0 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_led_color('both', 10, 0, 0)
```

## LED ausschalten {#turn_off}

Löscht die Farbe der LED.

<BlockImage module="roboids/HamsterS" id="turn_off" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ziel-LED | links(left), rechts(right), beide(both) | both |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_off('both')
```

## Summerton setzen {#sound_buzz}

Legt den Summerton von HamsterS mit der angegebenen Frequenz fest.  
Der Frequenzbereich, in dem ein Ton erzeugt werden kann, ist 122,1 Hz ~ 4186,0 Hz.  
Bei anderen Werten wird kein Summerton erzeugt.

<BlockImage module="roboids/HamsterS" id="sound_buzz" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| hz | Eingabe (Block) | Frequenz (Hz) | reelle Zahl 122,1 ~ 4186,0 (sonst 0) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_buzz(440)
```

## Note spielen {#sound_note}

HamsterS spielt die angegebene Note.

<BlockImage module="roboids/HamsterS" id="sound_note" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| note | Dropdown-Option | Note | C, C#, D, D#, E, F, F#, G, G#, A, A#, B | - |
| octave | Dropdown-Option | Oktave | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_note('D', 5)
```

## Soundclip abspielen {#sound_clip}

HamsterS spielt einen bestimmten Soundclip ab.  
Wenn du warten aktivierst, wird gewartet, bis das Abspielen abgeschlossen ist.

<BlockImage module="roboids/HamsterS" id="sound_clip" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| clip | Dropdown-Option | Name des Soundclips | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'happy'`, `'angry'`, `'sad'` usw. | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_clip('siren', wait=True)
```

## Ton ausschalten {#sound_off}

Schaltet den Ton von HamsterS aus.

<BlockImage module="roboids/HamsterS" id="sound_off" />

### Parameter

(keine)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_off()
```

## Ton wird abgespielt? {#sound_playing}

Gibt true zurück, wenn ein Ton abgespielt wird, und false, wenn nicht.

<BlockImage module="roboids/HamsterS" id="sound_playing" />

### Parameter

(keine)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_playing()
```

## Radgeschwindigkeit {#wheel_speed}

Die Geschwindigkeit eines bestimmten Rads

<BlockImage module="roboids/HamsterS" id="wheel_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ziel-Rad | links(left), rechts(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_speed('left')
```

## Näherungssensor {#proximity}

Der Wert eines bestimmten Näherungssensors

<BlockImage module="roboids/HamsterS" id="proximity" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Position des Sensors | links(left), rechts(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.proximity('left')
```

## Bodensensor {#floor}

Der Wert eines bestimmten Bodensensors

<BlockImage module="roboids/HamsterS" id="floor" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Position des Sensors | links(left), rechts(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.floor('left')
```

## Beschleunigung {#acceleration}

Der Wert der Erdbeschleunigung auf einer bestimmten Achse

<BlockImage module="roboids/HamsterS" id="acceleration" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Gemessene Achse | x, y, z | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.acceleration('x')
```

## Helligkeit {#light}

Wert des Helligkeitssensors

<BlockImage module="roboids/HamsterS" id="light" />

### Parameter

(keine)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.light()
```

## Temperatur {#temperature}

Wert des Temperatursensors

<BlockImage module="roboids/HamsterS" id="temperature" />

### Parameter

(keine)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.temperature()
```

## Signalstärke {#signal_strength}

Signalstärke

<BlockImage module="roboids/HamsterS" id="signal_strength" />

### Parameter

(keine)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.signal_strength()
```

## Batterie {#battery}

Batteriespannung

<BlockImage module="roboids/HamsterS" id="battery" />

### Parameter

(keine)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.battery()
```

## Zustandsänderung {#state_change}

Ob sich der Zustand des Roboters geändert hat

<BlockImage module="roboids/HamsterS" id="state_change" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Art des Zustands | 0 ~ 7 (siehe Tabelle unten) | - |

| unit | Bedeutung | Python |
|------|------|--------|
| 0 | nach vorn neigen | `acceleration('x') > 5000` |
| 1 | nach hinten neigen | `acceleration('x') < -5000` |
| 2 | nach links neigen | `acceleration('y') > 5000` |
| 3 | nach rechts neigen | `acceleration('y') < -5000` |
| 4 | umgedreht | `acceleration('z') > 0` |
| 5 | nicht umgedreht | `acceleration('z') < -3000` |
| 6 | Hindernis / Hand erkannt | `proximity('left') > 50 or proximity('right') > 50` |
| 7 | Klopfen | `tap()` |

### Python
```python
hamster_s = HamsterS(0)

# unit = 0
hamster_s.acceleration('x') > 5000
# unit = 6
hamster_s.proximity('left') > 50 or hamster_s.proximity('right') > 50
# unit = 7
hamster_s.tap()
```

## Port-Eingabemodus festlegen {#io_mode}

Legt den Eingabemodus des IO-Ports fest.

<BlockImage module="roboids/HamsterS" id="io_mode" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ein-/Ausgabeport | a, b, beide(both) | - |
| option | Dropdown-Option | Ein-/Ausgabemodus | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.io_mode('both', 'analog_input')
```

## Ausgabe des Ports setzen {#set_output}

Setzt den Ausgabewert des angegebenen IO-Ports.

<BlockImage module="roboids/HamsterS" id="set_output" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ein-/Ausgabeport | a, b, beide(both) | - |
| data | Eingabe (Block) | Ausgabewert | ganze Zahl 0 ~ 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_output('a', 90)
```

## Ausgabe des Ports ändern {#change_output}

Ändert den Ausgabewert des angegebenen IO-Ports.

<BlockImage module="roboids/HamsterS" id="change_output" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ein-/Ausgabeport | a, b, beide(both) | - |
| data | Eingabe (Block) | Differenz des Ausgabewerts | ganze Zahl | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_output('a', 10)
```

## Greifer öffnen / schließen {#gripper}

Öffnet oder schließt den Greifer von HamsterS.  
Je nach Wert von unit wird eine der beiden Methoden aufgerufen.

<BlockImage module="roboids/HamsterS" id="gripper" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Aktion | öffnen(open), schließen(close) | - |

### Python
```python
hamster_s = HamsterS(0)

# unit = "open"
hamster_s.open_gripper()
# unit = "close"
hamster_s.close_gripper()
```

## Schusswinkel setzen {#shooter}

Steuert den Schussmechanismus über den Winkel. Der Bereich des Winkels ist 0 ~ 180.

<BlockImage module="roboids/HamsterS" id="shooter" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Schusswinkel | ganze Zahl 0 ~ 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.shooter(45)
```

## Eingabe {#input}

Gibt den Eingabewert des Ein-/Ausgabeports von HamsterS zurück.

<BlockImage module="roboids/HamsterS" id="input" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ein-/Ausgabeport | a, b | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.get_input('a')
```
