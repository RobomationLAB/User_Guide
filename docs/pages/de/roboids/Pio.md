---
title: Piobot
---

# Piobot

## Instanz deklarieren {#instance}

Wenn du einen Piobot(Pio)-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
pio = Pio(0)
# wenn es mehrere Instanzen gibt
pio_1 = Pio(1)
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Radgeschwindigkeit setzen {#set_wheel_speed}

Legt die Radgeschwindigkeit fest. Der Bereich der Radgeschwindigkeit ist -100 ~ 100.

<BlockImage module="roboids/Pio" id="set_wheel_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Art des Rads | links(left), rechts(right), beide(both) | - |
| speed | Eingabe (Block) | Radgeschwindigkeit | ganze Zahl -100 ~ 100, 0: Stopp | - |

### Python
```python
pio = Pio(0)

pio.set_wheel_speed('both', 50)
```

## Strecke bewegen {#move_distance}

Bewegt sich mit der aktuellen Radgeschwindigkeit die angegebene Strecke.  
Ist keine Radgeschwindigkeit gesetzt, bewegt sich der Roboter mit der Standardgeschwindigkeit vorwärts.  
Ist der Streckenwert 0, bewegt er sich entsprechend der aktuellen Radgeschwindigkeit weiter.  
Wenn du warten aktivierst, wird gewartet, bis die Bewegung abgeschlossen ist.

<BlockImage module="roboids/Pio" id="move_distance" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Strecke | reelle Zahl ≥ 0 | - |
| unit | Dropdown-Option | Längeneinheit | cm, mm, Zoll(inch) | cm |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.move_distance(50, 'cm', wait=True)
```

## Zeit bewegen {#move_time}

Bewegt sich mit der aktuellen Radgeschwindigkeit für die angegebene Zeit.  
Ist keine Radgeschwindigkeit gesetzt, bewegt sich der Roboter mit der Standardgeschwindigkeit vorwärts.  
Wenn du warten aktivierst, wird gewartet, bis die Bewegung abgeschlossen ist.

<BlockImage module="roboids/Pio" id="move_time" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Zeit (Sekunden) | reelle Zahl ≥ 0 | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# wait = TRUE
pio.move_time(5, wait=True)
# wait = FALSE
pio.move_time(5, wait=False)
```

## Auf der Stelle drehen {#turn_degree}

Legt Richtung und Winkel für die Drehung auf der Stelle fest.  
Wenn du warten aktivierst, wird gewartet, bis die Drehung abgeschlossen ist.

<BlockImage module="roboids/Pio" id="turn_degree" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| direction | Dropdown-Option | Drehrichtung | links(left), rechts(right) | - |
| data | Eingabe (Block) | Drehwinkel (Grad) | reelle Zahl ≥ 0 | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# direction = "left"
pio.turn_degree('left', 90, wait=True)
# direction = "right"
pio.turn_degree('right', 90, wait=True)
```

## Radgeschwindigkeit ändern {#change_speed}

Ändert die Radgeschwindigkeit von Piobot.  
Die eingegebene Geschwindigkeit wird zur aktuellen Radgeschwindigkeit addiert und ergibt die neue Radgeschwindigkeit.  
Die neu gesetzte Radgeschwindigkeit wird auf den Bereich -100 ~ 100 begrenzt.

<BlockImage module="roboids/Pio" id="change_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Art des Rads | links(left), rechts(right), beide(both) | - |
| speed | Eingabe (Block) | Geschwindigkeitsdifferenz | ganze Zahl -200 ~ 200 | - |

### Python
```python
pio = Pio(0)

pio.change_wheel_speed('both', 50)
```

## Turbomodus ein / aus {#turbo}

Schaltet den Turbomodus von Piobot ein oder aus.

<BlockImage module="roboids/Pio" id="turbo" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Turbomodus ON / OFF | ein(on=True), aus(off=False) | TRUE |

### Python
```python
pio = Pio(0)

pio.turbo(True)
```

## Anhalten {#stop}

Stoppt die Bewegung von Piobot.  
Beide Radgeschwindigkeiten von Piobot werden auf 0 zurückgesetzt.

<BlockImage module="roboids/Pio" id="stop" />

### Parameter

(keine)

### Python
```python
pio = Pio(0)

pio.stop()
```

## Rad bewegt sich? {#wheel_moving}

Gibt true zurück, wenn sich das Rad bewegt, und false, wenn es stillsteht.

<BlockImage module="roboids/Pio" id="wheel_moving" />

### Parameter

(keine)

### Python
```python
pio = Pio(0)

pio.wheel_moving()
```

## Auf dem Spielfeld einen Schritt bewegen {#grid_move}

Bewegt sich auf dem Spielfeld wie vorgesehen Feld für Feld.

<BlockImage module="roboids/Pio" id="grid_move" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Bewegungsrichtung | vorwärts(forward), rückwärts(backward), nach links(left), nach rechts(right) | - |

### Python
```python
pio = Pio(0)

pio.grid_move('forward')
```

## Auf dem Spielfeld drehen {#grid_turn}

Piobot dreht sich auf dem Spielfeld um 90 Grad in die eingegebene Richtung. Es wird immer auf den Abschluss gewartet (intern fest wait=True).

<BlockImage module="roboids/Pio" id="grid_turn" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Drehrichtung | links(left), rechts(right) | - |

### Python
```python
pio = Pio(0)

# unit = "left"
pio.grid_turn('left')
# unit = "right"
pio.grid_turn('right')
```

## Halsgeschwindigkeit setzen {#set_neck_speed}

Legt die Drehgeschwindigkeit des Halses fest. Der Bereich ist 1 ~ 6.

<BlockImage module="roboids/Pio" id="set_neck_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Drehgeschwindigkeit des Halses | ganze Zahl 1 ~ 6 | 4 |

### Python
```python
pio = Pio(0)

pio.set_neck_speed(4)
```

## Halswinkel setzen {#set_neck_angle}

Legt den Winkel fest, zu dem sich der Hals drehen soll. Der Bereich ist -45 ~ 45.

<BlockImage module="roboids/Pio" id="set_neck_angle" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Halswinkel (Grad) | reelle Zahl -45 ~ 45 | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.set_neck_angle(15, wait=True)
```

## Hals bewegt sich? {#neck_moving}

Gibt true zurück, wenn sich der Hals bewegt, und false, wenn er stillsteht.

<BlockImage module="roboids/Pio" id="neck_moving" />

### Parameter

(keine)

### Python
```python
pio = Pio(0)

pio.neck_moving()
```

## Augenfarbe setzen {#set_eye_color}

Legt die LED-Farbe der Augen von Piobot fest.  
Du kannst die Farbe des linken, des rechten oder beider Augen ändern.  
Wenn du eine Farbvorlage wählst, wird sie in den **Farbnamen** (englische Zeichenkette) umgewandelt und so aufgerufen. (Der Code verwendet den Farbnamen und nicht die R-, G-, B-Zahlenwerte.)

<BlockImage module="roboids/Pio" id="set_eye_color" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ziel-Auge | links(left), rechts(right), beide(both) | - |
| color | Dropdown-Option | Farbvorlage → Umwandlung in den Farbnamen (englisch) | schwarz(black), rot(red), gelb(yellow), grün(green), cyan(cyan), blau(blue), magenta(magenta), weiß(white) | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', 'red')
```

## Augenfarbe mit einem Block der Kategorie Farbe setzen {#set_eye_color_with_block}

Legt die LED-Farbe der Augen von Piobot mit Blöcken aus der Kategorie Farbe fest.  
Du kannst die Farbe des linken, des rechten oder beider Augen ändern.

<BlockImage module="roboids/Pio" id="set_eye_color_with_block" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ziel-Auge | links(left), rechts(right), beide(both) | - |
| data | Eingabe (Farbe) | Array [R, G, B] | Block der Kategorie Farbe oder `[0~255, 0~255, 0~255]` | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', *Utils.color('red'))
```

## Augenfarbe um RGB ändern {#change_by_rgb}

Ändert die LED-Farbe der Augen von Piobot um die angegebenen R-, G-, B-Werte.  
Du kannst die Farbe des linken, des rechten oder beider Augen einstellen.

<BlockImage module="roboids/Pio" id="change_by_rgb" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ziel-Auge | links(left), rechts(right), beide(both) | - |
| r | Eingabe (Feld) | Änderung von Rot | ganze Zahl -255 ~ 255 | 0 |
| g | Eingabe (Feld) | Änderung von Grün | ganze Zahl -255 ~ 255 | 0 |
| b | Eingabe (Feld) | Änderung von Blau | ganze Zahl -255 ~ 255 | 0 |

### Python
```python
pio = Pio(0)

pio.change_eye_color('both', 10, 0, 0)
```

## Augenmuster setzen {#set_eye_pattern}

Legt das Muster der Augen fest und bestimmt die Farbe jedes Auges beim Start des Musters.

<BlockImage module="roboids/Pio" id="set_eye_pattern" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| pattern | Dropdown-Option | Art des Musters | aus(reset), blinken(blink), dimmen(dimming), Regenbogen(rainbow) | - |
| left | Dropdown-Option | Farbe des linken Auges | Standard(black), rot(red), gelb(yellow), grün(green), cyan(cyan), blau(blue), magenta(magenta), weiß(white) | white |
| right | Dropdown-Option | Farbe des rechten Auges | (wie left) | white |

### Python
```python
pio = Pio(0)

pio.set_eye_pattern('dimming', 'green', 'red')
```

## Auge ausschalten {#turn_off}

Löscht die Farbe der Augen.

<BlockImage module="roboids/Pio" id="turn_off" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ziel-Auge | links(left), rechts(right), beide(both) | both |

### Python
```python
pio = Pio(0)

pio.turn_off('both')
```

## Summton setzen {#sound_buzz}

Legt den Summton von Piobot mit der angegebenen Frequenz fest.  
Der Frequenzbereich, in dem ein Ton erzeugt werden kann, ist 27,5 Hz ~ 6553,5 Hz.  
Bei anderen Werten wird kein Summton erzeugt.

<BlockImage module="roboids/Pio" id="sound_buzz" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| hz | Eingabe (Block) | Frequenz (Hz) | reelle Zahl 27,5 ~ 6553,5 | - |

### Python
```python
pio = Pio(0)

pio.sound_buzz(440)
```

## Ton spielen {#sound_note}

Piobot spielt den angegebenen Ton.

<BlockImage module="roboids/Pio" id="sound_note" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| note | Dropdown-Option | Ton | Do(C), Do#/Re♭(C#), Re(D), Re#/Mi♭(D#), Mi(E), Fa(F), Fa#/Sol♭(F#), Sol(G), Sol#/La♭(G#), La(A), La#/Si♭(A#), Si(B) | - |
| octave | Dropdown-Option | Oktave | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
pio = Pio(0)

pio.sound_note('D', 5)
```

## Soundclip abspielen {#sound_clip}

Piobot spielt einen bestimmten Soundclip ab.  
Wenn du warten aktivierst, wird gewartet, bis das Abspielen abgeschlossen ist.

<BlockImage module="roboids/Pio" id="sound_clip" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| clip | Dropdown-Option | Name des Soundclips | `'mute'`, `'beep'`, `'beep2'`, `'beep3'`, `'siren'`, `'engine'`, `'robot'`, `'connect'` usw. | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_clip('siren', wait=True)
```

## Melodie abspielen {#sound_melody}

Piobot spielt eine bestimmte Melodie ab.  
Wenn du warten aktivierst, wird gewartet, bis das Abspielen abgeschlossen ist.

<BlockImage module="roboids/Pio" id="sound_melody" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| melody | Dropdown-Option | Name der Melodie | `'mute'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` usw. | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_melody('happy', wait=True)
```

## Ton aus {#sound_off}

Schaltet den Ton von Piobot aus.

<BlockImage module="roboids/Pio" id="sound_off" />

### Parameter

(keine)

### Python
```python
pio = Pio(0)

pio.sound_off()
```

## Ton wird abgespielt? {#sound_playing}

Gibt true zurück, wenn ein Ton abgespielt wird, und false, wenn nicht.

<BlockImage module="roboids/Pio" id="sound_playing" />

### Parameter

(keine)

### Python
```python
pio = Pio(0)

pio.sound_playing()
```

## Geschwindigkeit von Rad {#wheel_speed}

Die Geschwindigkeit eines bestimmten Rads

<BlockImage module="roboids/Pio" id="wheel_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Ziel-Rad | links(left), rechts(right) | - |

### Python
```python
pio = Pio(0)

pio.wheel_speed('left')
```

## Signalstärke {#signal_strength}

Signalstärke

<BlockImage module="roboids/Pio" id="signal_strength" />

### Parameter

(keine)

### Python
```python
pio = Pio(0)

pio.signal_strength()
```

## Batterie {#battery}

Batteriespannung

<BlockImage module="roboids/Pio" id="battery" />

### Parameter

(keine)

### Python
```python
pio = Pio(0)

pio.battery()
```

## Taste gedrückt {#keypad}

Erkennt die Taste, die der Benutzer zuletzt gedrückt hat.

<BlockImage module="roboids/Pio" id="keypad" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| button | Dropdown-Option | Zu erkennende Taste | ausführen(play), vorwärts(forward), rückwärts(backward), nach links(left), nach rechts(right), Aktion(action), wiederholen(repeat), löschen(clear) | - |

### Python
```python
pio = Pio(0)

pio.keypad('forward')
```
