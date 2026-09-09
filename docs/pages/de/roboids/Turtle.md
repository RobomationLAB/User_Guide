---
title: Turtle
---

# Turtle

## Instanz deklarieren {#instance}

Wenn du einen Turtle-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
turtle = Turtle(0)
# wenn es mehrere Instanzen gibt
turtle_1 = Turtle(1)
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Radgeschwindigkeit setzen {#set_wheel_speed}

Legt die Radgeschwindigkeit fest. Der Bereich der Geschwindigkeit ist -100 ~ 100.

<BlockImage module="roboids/Turtle" id="set_wheel_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Art des Rads | links(left), rechts(right), beide(both) | - |
| speed | Eingabe (Block) | Radgeschwindigkeit | ganze Zahl -100 ~ 100, 0: Stopp | - |

### Python
```python
turtle = Turtle(0)

turtle.set_wheel_speed('both', 50)
```

## Strecke bewegen {#move_distance}

Legt die zu fahrende Strecke fest.  
Ist keine Radgeschwindigkeit gesetzt, bewegt sich der Roboter nicht.  
Ist der Streckenwert 0, bewegt er sich entsprechend der aktuellen Radgeschwindigkeit weiter.  
Wenn du warten aktivierst, wird gewartet, bis die Bewegung abgeschlossen ist.

<BlockImage module="roboids/Turtle" id="move_distance" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Strecke | reelle Zahl ≥ 0 | - |
| unit | Dropdown-Option | Längeneinheit | cm, mm, Zoll(inch) | cm |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.move_distance(50, 'cm', wait=True)
```

## Zeit bewegen {#move_time}

Bewegt sich mit der aktuellen Radgeschwindigkeit für die angegebene Zeit.  
Ist keine Radgeschwindigkeit gesetzt, bewegt sich der Roboter mit der Standardgeschwindigkeit vorwärts.  
Wenn du warten aktivierst, wird gewartet, bis die Bewegung abgeschlossen ist.

<BlockImage module="roboids/Turtle" id="move_time" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Zeit (Sekunden) | reelle Zahl ≥ 0 | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

# wait = TRUE
turtle.move_time(5, wait=True)
# wait = FALSE
turtle.move_time(0.5, wait=False)
```

## Auf der Stelle drehen {#turn_degree}

Legt Richtung und Winkel für die Drehung auf der Stelle fest.  
Wenn du warten aktivierst, wird gewartet, bis die Drehung abgeschlossen ist.

<BlockImage module="roboids/Turtle" id="turn_degree" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| direction | Dropdown-Option | Drehrichtung | links(left), rechts(right) | - |
| data | Eingabe (Block) | Drehwinkel (Grad) | reelle Zahl ≥ 0 | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.turn_degree('left', 90, wait=True)
```

## Radgeschwindigkeit ändern {#change_speed}

Ändert die Radgeschwindigkeit von Turtle.  
Die eingegebene Geschwindigkeit wird zur aktuellen Radgeschwindigkeit addiert und ergibt die neue Radgeschwindigkeit.

<BlockImage module="roboids/Turtle" id="change_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Art des Rads | links(left), rechts(right), beide(both) | - |
| speed | Eingabe (Block) | Geschwindigkeitsdifferenz | ganze Zahl -200 ~ 200 | - |

### Python
```python
turtle = Turtle(0)

turtle.change_wheel_speed('both', 10)
```

## Anhalten {#stop}

Stoppt die Bewegung von Turtle.

<BlockImage module="roboids/Turtle" id="stop" />

### Parameter

(keine)

### Python
```python
turtle = Turtle(0)

turtle.stop()
```

## Rad bewegt sich? {#wheel_moving}

Gibt true zurück, wenn sich das Rad bewegt, und false, wenn es stillsteht.

<BlockImage module="roboids/Turtle" id="wheel_moving" />

### Parameter

(keine)

### Python
```python
turtle = Turtle(0)

turtle.wheel_moving()
```

## Um ein Rad schwenken {#pivot}

Legt den Drehpunkt, die Richtung und den Winkel fest.  
Wenn du warten aktivierst, wird gewartet, bis die Drehung abgeschlossen ist.

<BlockImage module="roboids/Turtle" id="pivot" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| base | Dropdown-Option | Rad als Drehpunkt | linkes Rad(left_wheel), rechtes Rad(right_wheel) | - |
| direction | Dropdown-Option | Drehrichtung | vorwärts(forward), rückwärts(backward) | - |
| data | Eingabe (Block) | Drehwinkel (Grad) | reelle Zahl ≥ 0 | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot('left_wheel', 'forward', 90, wait=True)
```

## Kreis zeichnen {#pivot_circle}

Legt beim Zeichnen eines Kreises mit dem Stift die Richtung, den Radius und den Winkel fest.  
Wenn du warten aktivierst, wird gewartet, bis die Drehung abgeschlossen ist.

<BlockImage module="roboids/Turtle" id="pivot_circle" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| direction | Dropdown-Option | Drehrichtung | links vorwärts(left_forward), links rückwärts(left_backward), rechts vorwärts(right_forward), rechts rückwärts(right_backward) | - |
| degree | Eingabe (Block) | Drehwinkel (Grad) | reelle Zahl ≥ 0 | - |
| radius | Eingabe (Block) | Radius | reelle Zahl ≥ 0 | - |
| unit | Dropdown-Option | Einheit des Radius | cm, mm, Zoll(inch) | cm |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot_circle('left_forward', 90, 1, 'cm', wait=True)
```

## Linie folgen {#trace_line}

Folgt mit dem Farbsensor am Boden einer Linie in einer bestimmten Farbe.

<BlockImage module="roboids/Turtle" id="trace_line" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| line | Dropdown-Option | Farbe der Linie | schwarz(black), rot(red), grün(green), blau(blue), alle Farben(any) | black |

### Python
```python
turtle = Turtle(0)

turtle.trace_line('black')
```

## Linie bis zu einer Farbe folgen {#trace_line_until_color}

Folgt mit dem Farbsensor am Boden der Linie in Farbe A, bis die Farbe B erreicht wird.

<BlockImage module="roboids/Turtle" id="trace_line_until_color" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| line | Dropdown-Option | Farbe der Linie | schwarz(black), rot(red), grün(green), blau(blue), alle Farben(any) | - |
| color | Dropdown-Option | Farbe zum Anhalten | schwarz(black), rot(red), grün(green), cyan(cyan), blau(blue), magenta(magenta), alle Farben(any) | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_line_until_color('black', 'red', wait=True)
```

## An der Kreuzung fahren {#intersection}

Turtle fährt an der Kreuzung in die angegebene Richtung und folgt dann der Linie, bis er die nächste Kreuzung erreicht.  
Wenn du warten aktivierst, wird gewartet, bis die Fahrt abgeschlossen ist.  

<BlockImage module="roboids/Turtle" id="intersection" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| direction | Dropdown-Option | Fahrtrichtung an der Kreuzung | geradeaus fahren(forward), links(left), rechts(right), wenden(uturn) | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_intersection('left', wait=True)
```

## Linienfolgegeschwindigkeit setzen {#set_trace_speed}

Legt die Geschwindigkeit der Linienfolge fest. Der Bereich ist 1 ~ 10.

<BlockImage module="roboids/Turtle" id="set_trace_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Geschwindigkeit der Linienfolge | ganze Zahl 1 ~ 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_speed(5)
```

## Linienfolge-Verstärkung setzen {#set_trace_gain}

Legt die Richtungsänderung bei der Linienfolge fest. Der Bereich ist 1 ~ 10.

<BlockImage module="roboids/Turtle" id="set_trace_gain" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Richtungsänderung | ganze Zahl 1 ~ 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_gain(5)
```

## Linienfolge beenden {#stop_trace}

Beendet die Linienfolge von Turtle.

<BlockImage module="roboids/Turtle" id="stop_trace" />

### Parameter

(keine)

### Python
```python
turtle = Turtle(0)

turtle.stop_trace()
```

## Kopf-LED-Farbe setzen {#set_led_color}

Legt die Farbe der Kopf-LED von Turtle fest.  
Wenn du in der Farbpalette eine Farbe wählst, wird sie in den **Farbnamen** (englische Zeichenkette) umgewandelt und so aufgerufen. (Der Code verwendet den Farbnamen und nicht die R-, G-, B-Zahlenwerte.)

<BlockImage module="roboids/Turtle" id="set_led_color" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| color | Farbe | Auswahl in der Farbpalette → Umwandlung in den Farbnamen (englisch) | Farbnamen: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color('red')
```

## Kopf-LED-Farbe mit einem Block der Kategorie Farbe setzen {#set_led_color_with_block}

Nimmt die Ausgabe eines Blocks der Kategorie Farbe (`[R, G, B]`) als Eingabe und setzt damit die Farbe der Kopf-LED.

<BlockImage module="roboids/Turtle" id="set_led_color_with_block" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Farbe) | Block der Kategorie Farbe oder Array `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color(*Utils.color('red'))
```

## LED-Farbe um RGB ändern {#change_by_rgb}

Addiert die eingegebenen R-, G-, B-Änderungen zur aktuellen Farbe der Kopf-LED und setzt so eine neue Farbe.

<BlockImage module="roboids/Turtle" id="change_by_rgb" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| r | Eingabe (Feld) | Änderung von Rot | ganze Zahl -255 ~ 255 | 0 |
| g | Eingabe (Feld) | Änderung von Grün | ganze Zahl -255 ~ 255 | 0 |
| b | Eingabe (Feld) | Änderung von Blau | ganze Zahl -255 ~ 255 | 0 |

### Python
```python
turtle = Turtle(0)

turtle.change_led_color(10, 0, 0)
```

## Kopf-LED ausschalten {#turn_off}

Löscht die Farbe der Kopf-LED.

<BlockImage module="roboids/Turtle" id="turn_off" />

### Parameter

(keine)

### Python
```python
turtle = Turtle(0)

turtle.turn_off()
```

## Summton einstellen {#sound_buzz}

Legt den Summton von Turtle mit der angegebenen Frequenz fest.

<BlockImage module="roboids/Turtle" id="sound_buzz" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| hz | Eingabe (Block) | Frequenz (Hz) | reelle Zahl 0 ~ 6553,5 | - |

### Python
```python
turtle = Turtle(0)

turtle.sound_buzz(440)
```

## Note spielen {#sound_note}

Turtle spielt die angegebene Note.

<BlockImage module="roboids/Turtle" id="sound_note" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| note | Dropdown-Option | Note | C, C#, D, D#, E, F, F#, G, G#, A, A#, B | - |
| octave | Dropdown-Option | Oktave | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
turtle = Turtle(0)

turtle.sound_note('D', 5)
```

## Soundclip abspielen {#sound_clip}

Turtle spielt einen bestimmten Soundclip ab.

<BlockImage module="roboids/Turtle" id="sound_clip" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| clip | Dropdown-Option | Name des Soundclips | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` usw. | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.sound_clip('siren', wait=True)
```

## Ton ausschalten {#sound_off}

Schaltet den Ton von Turtle aus.

<BlockImage module="roboids/Turtle" id="sound_off" />

### Parameter

(keine)

### Python
```python
turtle = Turtle(0)

turtle.sound_off()
```

## Ton wird abgespielt? {#sound_playing}

Gibt true zurück, wenn ein Ton abgespielt wird, und false, wenn nicht.

<BlockImage module="roboids/Turtle" id="sound_playing" />

### Parameter

(keine)

### Python
```python
turtle = Turtle(0)

turtle.sound_playing()
```

## Radgeschwindigkeit {#wheel_speed}

Die Geschwindigkeit eines bestimmten Rads

<BlockImage module="roboids/Turtle" id="wheel_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ziel-Rad | links(left), rechts(right) | - |

### Python
```python
turtle = Turtle(0)

turtle.wheel_speed('left')
```

## Bodenfarbsensor {#floor}

Wert des Farbsensors am Boden

<BlockImage module="roboids/Turtle" id="floor" />

### Parameter

(keine)

### Python
```python
turtle = Turtle(0)

turtle.floor()
```

## Kartenfarbe {#card_color}

Der **Name** der Kartenfarbe, die über den Farbsensor am Boden gelesen wurde

<BlockImage module="roboids/Turtle" id="card_color" />

### Parameter

(keine)

### Python
```python
turtle = Turtle(0)

turtle.card_color()
```

## Kartenfarbmuster {#card_pattern}

Das Muster der Kartenfarbe, das über den Farbsensor am Boden gelesen wurde

<BlockImage module="roboids/Turtle" id="card_pattern" />

### Parameter

(keine)

### Python
```python
turtle = Turtle(0)

turtle.card_pattern()
```

## Beschleunigung {#acceleration}

Der Wert der Erdbeschleunigung auf einer bestimmten Achse

<BlockImage module="roboids/Turtle" id="acceleration" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Gemessene Achse | x, y, z | - |

### Python
```python
turtle = Turtle(0)

turtle.acceleration('x')
```

## Temperatur {#temperature}

Wert des Temperatursensors

<BlockImage module="roboids/Turtle" id="temperature" />

### Parameter

(keine)

### Python
```python
turtle = Turtle(0)

turtle.temperature()
```

## Signalstärke {#signal_strength}

Signalstärke

<BlockImage module="roboids/Turtle" id="signal_strength" />

### Parameter

(keine)

### Python
```python
turtle = Turtle(0)

turtle.signal_strength()
```

## Batterie {#battery}

Batteriespannung

<BlockImage module="roboids/Turtle" id="battery" />

### Parameter

(keine)

### Python
```python
turtle = Turtle(0)

turtle.battery()
```

## Berührt eine Farbe? {#color_read}

Misst mit dem Farbsensor von Turtle, ob eine bestimmte Farbe berührt wird, und gibt **true(True) / false(False)** zurück.

<BlockImage module="roboids/Turtle" id="color_read" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| color | Dropdown-Option | Farbname | unknown, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_color('red')
```

## Kartenmuster ist ~ ? {#pattern_read}

Gibt zurück, ob das vom Farbsensor erkannte Kartenfarbmuster übereinstimmt, als **true(True) / false(False)**.

<BlockImage module="roboids/Turtle" id="pattern_read" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| pattern | Dropdown-Option | Name des Kartenmusters | `'red_yellow'`, `'red_green'`, `'blue_red'` | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_pattern('red_yellow')
```

## Rückseitentaste {#button}

Ob die Taste auf der Rückseite gedrückt oder geklickt wurde

<BlockImage module="roboids/Turtle" id="button" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| event | Dropdown-Option | Art des Tastenzustands | gedrückt(pressed), geklickt(click), lange geklickt(long_click) | - |  

### Python
```python
turtle = Turtle(0)

turtle.button('pressed')
```

## Zustandsänderung {#state_change}

Ob sich der Zustand des Roboters geändert hat

<BlockImage module="roboids/Turtle" id="state_change" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Art des Zustands | 0 ~ 5 (siehe Tabelle unten) | - |

| unit | Bedingung |
|------|------|
| 0 | `acceleration('x') > 50` |
| 1 | `acceleration('x') < -50` |
| 2 | `acceleration('y') > 50` |
| 3 | `acceleration('y') < -50` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -30` |

### Python
```python
turtle = Turtle(0)

# unit = 0
turtle.acceleration('x') > 50
```
