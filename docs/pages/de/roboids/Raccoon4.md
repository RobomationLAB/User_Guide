---
title: RaccoonBot
---

# RaccoonBot

## Instanz deklarieren {#instance}

Wenn du einen RaccoonBot-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
raccoon = RaccoonBot(0)
# wenn es mehrere Instanzen gibt
raccoon_1 = RaccoonBot(1)
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Gelenkmotor an / aus {#motor}

Legt fest, ob die Regelung der einzelnen Gelenkmotoren gelöst oder gehalten wird.  
Ohne Einstellung startet der Roboter mit eingeschalteter Motorregelung an allen Gelenken.

<BlockImage module="roboids/Raccoon4" id="motor" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Gelenknummer | alle(-1), 1(1), 2(2), 3(3), 4(4) | -1 |
| on | Kontrollkästchen | Motorregelung ON / OFF | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# alle Gelenke, Motorregelung aus
raccoon.motor(-1, False)

# Gelenk 1, Motorregelung an
raccoon.motor(1, True)
```

## Gelenkgeschwindigkeit setzen {#speed_joint}

Legt die Geschwindigkeit des gewählten Gelenks fest.

<BlockImage module="roboids/Raccoon4" id="speed_joint" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| joint | Dropdown-Option | Gelenknummer | alle(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Eingabe (Block) | Gelenkgeschwindigkeit | ganze Zahl -100 ~ 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_speed_joint(1, 100)
```

## Gelenkgeschwindigkeit ändern {#change_speed_joint}

Ändert die Geschwindigkeit des gewählten Gelenks.

<BlockImage module="roboids/Raccoon4" id="change_speed_joint" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| joint | Dropdown-Option | Gelenknummer | alle(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Eingabe (Block) | Geschwindigkeitsdifferenz | ganze Zahl -200 ~ 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_speed_joint(1, 50)
```

## Gelenkgeschwindigkeiten auf einmal setzen {#speed_joints}

Legt die Geschwindigkeiten der vier Gelenke auf einmal fest.

<BlockImage module="roboids/Raccoon4" id="speed_joints" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Array) | Array mit 4 Gelenkgeschwindigkeiten | `[joint1, joint2, joint3, joint4]`, jeweils -100~100 | - |

### Python
```python
raccoon = RaccoonBot(0)

# literales Array [10, 20, 30, 40]
raccoon.set_speed_joints(10, 20, 30, 40)

# Array in einer Variablen
raccoon.set_speed_joints(*arr)
```

## Geschwindigkeit der Gelenkwinkelsteuerung setzen {#angle_speed}

Legt die Geschwindigkeit fest, mit der die Gelenke im Winkelsteuerungsmodus bewegt werden.

<BlockImage module="roboids/Raccoon4" id="angle_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Maximalgeschwindigkeit der Winkelsteuerung | ganze Zahl 0 ~ 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.angle_max_speed(100)
```

## Gelenkwinkel setzen {#angle_joint}

Legt den Winkel des gewählten Gelenks fest.

| joint | min | max |
|-------|-----|-----|
| 1 | -120 | 120 |
| 2 | -90 | 30 |
| 3 | -150 | 0 |
| 4 | -105 | 105 |

<BlockImage module="roboids/Raccoon4" id="angle_joint" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| joint | Dropdown-Option | Gelenknummer | alle(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Eingabe (Block) | Gelenkwinkel (Grad) | siehe Tabelle oben (automatisch begrenzt) | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_angle_joint(1, 90, wait=True)
```

## Gelenkwinkel ändern {#change_angle_joint}

Ändert den Winkel des gewählten Gelenks.

<BlockImage module="roboids/Raccoon4" id="change_angle_joint" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| joint | Dropdown-Option | Gelenknummer | alle(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Eingabe (Block) | Winkeldifferenz (Grad) | siehe Tabelle oben (automatisch begrenzt) | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_angle_joint(1, 10, wait=True)
```

## Gelenkwinkel auf einmal setzen {#angle_joints}

Legt die Winkel der vier Gelenke auf einmal fest.

<BlockImage module="roboids/Raccoon4" id="angle_joints" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Array) | Array mit 4 Gelenkwinkeln oder Name einer Pose | Array `[j1, j2, j3, j4]` | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# explizites Array
raccoon.set_angle_joints(0, 0, 0, 0, wait=True)
```

## Gelenkzustand initialisieren {#default_angle_joints}

Setzt die Winkel der vier Gelenke auf eine vordefinierte Pose (`'zero'`, `'park'`, `'home'`).

Posen-Vorlagen:
- `'zero'` → `[0, 0, 0, 0]`
- `'park'` → `[0, 25, -145, -60]`
- `'home'` → `[0, -10, -140, 60]`

<BlockImage module="roboids/Raccoon4" id="default_angle_joints" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Dropdown | Name der Pose | `'zero'` / `'park'` / `'home'` | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# Posen-Vorlage
raccoon.set_angle_joints('home', wait=True)
```

## Gelenkwinkel speichern {#save_encoder}

Speichert die aktuellen Encoder-Werte in einer beliebigen Variablen.

<BlockImage module="roboids/Raccoon4" id="save_encoder" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| encoder | Variable | Name der Variablen zum Speichern | Variable | - |
| data | Eingabe (Array) | Anfangsarray zum Speichern | Array mit 4 Elementen oder leeres Array | - |

### Python
```python
raccoon = RaccoonBot(0)
encoder = None

encoder = raccoon.save_encoder([3, -6, -73, 60])
```

## Koordinate setzen {#set_coordinate}

Bewegt den Roboterarm, indem ein bestimmter Koordinatenwert gesetzt wird.  
Die Bereiche der Koordinaten sind:  
relativ zum Handgelenk => x: -20,0cm ~ 20,0cm, y: -10,0cm ~ 20,0cm, z: -2,0mm ~ 28,0cm  
relativ zum Greifer => der Bereich kann je nach angeschlossenem Gerät abweichen.  
Die Ausrichtung des Greifers ist waagerecht oder senkrecht zum Boden fixiert.  
Wird eine nicht erreichbare Koordinate eingegeben, wird der Befehl übersprungen.

<BlockImage module="roboids/Raccoon4" id="set_coordinate" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| origin | Dropdown-Option | Bezugspunkt | Handgelenk(wrist), Endeffektor(end_effector) | - |
| pos | Dropdown-Option | Achse | x, y, z | - |
| data | Eingabe (Block) | Koordinatenwert | x: -20 ~ 20cm, y: -10 ~ 20cm, z: -2 ~ 28cm | - |
| unit | Dropdown-Option | Einheit | cm, mm, Zoll(inch) | cm |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# x-Koordinate auf 10cm setzen
raccoon.set_coordinate('wrist', 'x', 10, 'cm', wait=True)

# z-Koordinate relativ zum end_effector
raccoon.set_coordinate('end_effector', 'z', 15, 'cm', wait=True)
```

## Koordinate ändern {#change_coordinate}

Bewegt den Roboterarm, indem ein bestimmter Koordinatenwert relativ zur aktuellen Position geändert wird.  
Die Bereiche der Koordinaten sind:  
relativ zum Handgelenk => x: -20,0cm ~ 20,0cm, y: -10,0cm ~ 20,0cm, z: -2,0mm ~ 28,0cm  
relativ zum Greifer => der Bereich kann je nach angeschlossenem Gerät abweichen.  
Die Ausrichtung des Greifers ist waagerecht oder senkrecht zum Boden fixiert.  
Wird eine nicht erreichbare Koordinate eingegeben, wird der Befehl übersprungen.

<BlockImage module="roboids/Raccoon4" id="change_coordinate" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| origin | Dropdown-Option | Bezugspunkt | Handgelenk(wrist), Endeffektor(end_effector) | - |
| pos | Dropdown-Option | Achse | x, y, z | - |
| data | Eingabe (Block) | Koordinatendifferenz | reelle Zahl | - |
| unit | Dropdown-Option | Einheit | cm, mm, Zoll(inch) | cm |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_coordinate('wrist', 'y', 5, 'cm', wait=True)
```

## Zu xyz-Koordinaten bewegen {#set_coordinates}

Setzt die Koordinaten x, y und z auf einmal auf die angegebenen Werte.  

<BlockImage module="roboids/Raccoon4" id="set_coordinates" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| origin | Dropdown-Option | Bezugspunkt | Handgelenk(wrist), Endeffektor(end_effector) | - |
| x | Eingabe (Block) | x-Koordinate | reelle Zahl | - |
| y | Eingabe (Block) | y-Koordinate | reelle Zahl | - |
| z | Eingabe (Block) | z-Koordinate | reelle Zahl | - |
| unit | Dropdown-Option | Einheit | cm, mm, Zoll(inch) | cm |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_coordinates('wrist', 0, 15, 20, 'cm', wait=True)
```

## Sperre des Greifers setzen {#lock}

Legt die Richtung fest, in der der Greifer fixiert wird. Sobald die Option auf waagerecht oder senkrecht gesetzt ist, lassen sich Geschwindigkeit und Winkel von Gelenk 4 nicht mehr steuern.

<BlockImage module="roboids/Raccoon4" id="lock" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| mode | Dropdown-Option | Richtung der Sperre | keine(none), waagerecht(horizontal), senkrecht(vertical) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.lock('horizontal')
```

## Mit dem Greifer greifen / ablegen {#end_effector}

Greift mit dem Endeffektor einen Gegenstand oder legt ihn ab.  
Je nach Wert der Dropdown-Option unit wird eine der beiden Methoden aufgerufen.

<BlockImage module="roboids/Raccoon4" id="end_effector" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Aktion | greifen (schließen)(pick), ablegen (öffnen)(place) | - |

### Python
```python
raccoon = RaccoonBot(0)

# unit = "pick"
raccoon.pick()
# unit = "place"
raccoon.place()
```

## Greifergerät {#end_effector_device}

Nummer des aktuell angeschlossenen Greifers  
(1, 3, 4: Zangengreifer, 2: Vakuumgreifer)

<BlockImage module="roboids/Raccoon4" id="end_effector_device" />

### Parameter

(keine)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_device()
```

## Status des Greifers {#end_effector_status}

Der Zustand, in dem der Greifer einen Gegenstand hält  
(0: abgelegt, 1: gegriffen)

<BlockImage module="roboids/Raccoon4" id="end_effector_status" />

### Parameter

(keine)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_status()
```

## Note spielen {#sound_note}

RaccoonBot spielt die angegebene Note.

<BlockImage module="roboids/Raccoon4" id="sound_note" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| note | Dropdown-Option | Note | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Dropdown-Option | Oktave | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_note('D', 5)
```

## Soundclip abspielen {#sound_clip}

RaccoonBot spielt einen bestimmten Soundclip ab.

<BlockImage module="roboids/Raccoon4" id="sound_clip" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| clip | Dropdown-Option | Name des Soundclips | `'mute'`, `'beep'`, `'siren'`, `'robot'`, `'connect'`, `'wake_up'`, `'start'`, `'bye'` usw. | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_clip('siren', wait=True)
```

## Ton aus {#sound_off}

Schaltet den Ton von RaccoonBot aus.

<BlockImage module="roboids/Raccoon4" id="sound_off" />

### Parameter

(keine)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_off()
```

## Encoder {#encoder}

Der Encoder-Wert des gewählten Gelenks

<BlockImage module="roboids/Raccoon4" id="encoder" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| joint | Dropdown-Option | Gelenknummer (oder alle Gelenke) | 1, 2, 3, 4, alle(-1) | -1 |

### Python
```python
raccoon = RaccoonBot(0)

# joint = 1
raccoon.encoder(1)

# alle Gelenke
raccoon.encoder(-1)
```

## Koordinate des gewählten Elements {#coordinate}

Gibt die aktuellen xyz-Koordinaten des Bezugspunkts zurück.  
Wird `pos` ausgelassen, wird das gesamte Array `[x, y, z]` zurückgegeben, andernfalls nur der Wert der angegebenen Achse.

<BlockImage module="roboids/Raccoon4" id="coordinate" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| origin | Dropdown-Option | Bezugspunkt | Handgelenk(wrist), Endeffektor(end_effector) | wrist |
| pos | Dropdown-Option | Achse (oder alle) | x, y, z, xyz (ohne Angabe wird das gesamte Array zurückgegeben) | None (alle) |

### Python
```python
raccoon = RaccoonBot(0)

# bestimmte Achse
raccoon.get_coordinates('wrist', 'x')

# alle (Array mit 3 Elementen)
raccoon.get_coordinates('wrist')
```

## Signalstärke {#signal_strength}

Signalstärke

<BlockImage module="roboids/Raccoon4" id="signal_strength" />

### Parameter

(keine)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.signal_strength()
```

## Batterie {#battery}

Batteriespannung

<BlockImage module="roboids/Raccoon4" id="battery" />

### Parameter

(keine)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.battery()
```

## Taste gedrückt? {#button}

Ob die gewählte Taste gedrückt ist oder ein Klick-Ereignis aufgetreten ist

<BlockImage module="roboids/Raccoon4" id="button" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Name der Taste | teach, play, power, delete, beliebige Taste(any) | - |
| event | Dropdown-Option | Art des Ereignisses | gedrückt(pressed), geklickt(click), lange geklickt(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.button('teach', 'pressed')
```

## Geschwindigkeit des Förderbands setzen {#conveyor_speed}

Legt die Geschwindigkeit des Förderbands fest. Der Bereich ist -100 ~ 100.

<BlockImage module="roboids/Raccoon4" id="conveyor_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Geschwindigkeit des Förderbands | ganze Zahl -100 ~ 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_conveyor_speed(100)
```

## Förderband um eine Strecke bewegen {#conveyor_distance}

Bewegt das Förderband um eine bestimmte Strecke.

<BlockImage module="roboids/Raccoon4" id="conveyor_distance" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Strecke | reelle Zahl ≥ 0 | - |
| unit | Dropdown-Option | Längeneinheit | cm, mm, Zoll(inch) | cm |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_move(50, 'cm', wait=True)
```

## Geschwindigkeit des Förderbands ändern {#change_conveyor_speed}

Ändert die Geschwindigkeit des Förderbands.

<BlockImage module="roboids/Raccoon4" id="change_conveyor_speed" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Geschwindigkeitsdifferenz | ganze Zahl -200 ~ 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_conveyor_speed(10)
```

## Förderband anhalten {#stop_conveyor}

Hält das Förderband an.

<BlockImage module="roboids/Raccoon4" id="stop_conveyor" />

### Parameter

(keine)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.stop_conveyor()
```

## Förderband läuft? {#conveyor_running}

Ob das Förderband läuft

<BlockImage module="roboids/Raccoon4" id="conveyor_running" />

### Parameter

(keine)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_running()
```

## Förderbandtaste gedrückt? {#conveyor_button}

Ob die Taste des Förderbands gedrückt ist oder ein Klick-Ereignis aufgetreten ist

<BlockImage module="roboids/Raccoon4" id="conveyor_button" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| event | Dropdown-Option | Art des Ereignisses | gedrückt(pressed), geklickt(click), lange geklickt(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_button('pressed')
```
