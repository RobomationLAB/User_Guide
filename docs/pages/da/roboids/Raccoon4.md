---
title: RaccoonBot
---

# RaccoonBot

## Instanserklæring {#instance}

Når du tilføjer en RaccoonBot-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
raccoon = RaccoonBot(0)
# Når der er flere instanser
raccoon_1 = RaccoonBot(1)
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Slå ledmotorernes styring til / fra {#motor}

Bestemmer, om styringen af hver ledmotor skal slippes eller bevares.  
Hvis du ikke indstiller noget, starter robotten med motorstyringen slået til for alle led.

<BlockImage module="roboids/Raccoon4" id="motor" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Leddets nummer | alle(-1), 1(1), 2(2), 3(3), 4(4) | -1 |
| on | Afkrydsningsfelt | Motorstyring TIL / FRA | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# alle led, motorstyringen fra
raccoon.motor(-1, False)

# led 1, motorstyringen til
raccoon.motor(1, True)
```

## Indstil leddets hastighed {#speed_joint}

Indstiller hastigheden for det valgte led.

<BlockImage module="roboids/Raccoon4" id="speed_joint" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| joint | Rullemenupunkt | Leddets nummer | alle(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Input (blok) | Leddets hastighed | Heltal -100 til 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_speed_joint(1, 100)
```

## Ændr leddets hastighed {#change_speed_joint}

Ændrer hastigheden for det valgte led.

<BlockImage module="roboids/Raccoon4" id="change_speed_joint" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| joint | Rullemenupunkt | Leddets nummer | alle(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Input (blok) | Hastighedsændring | Heltal -200 til 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_speed_joint(1, 50)
```

## Indstil leddenes hastighed på én gang {#speed_joints}

Indstiller hastigheden for alle fire led på én gang.

<BlockImage module="roboids/Raccoon4" id="speed_joints" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (array) | Matrix med de fire leds hastighed | `[joint1, joint2, joint3, joint4]`, hver -100~100 | - |

### Python
```python
raccoon = RaccoonBot(0)

# literal matrix [10, 20, 30, 40]
raccoon.set_speed_joints(10, 20, 30, 40)

# matrix i en variabel
raccoon.set_speed_joints(*arr)
```

## Indstil hastigheden for ledvinkelstyring {#angle_speed}

Indstiller den hastighed, leddene styres med i vinkelstyringstilstanden.

<BlockImage module="roboids/Raccoon4" id="angle_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Højeste hastighed ved vinkelstyring | Heltal 0 til 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.angle_max_speed(100)
```

## Indstil leddets vinkel {#angle_joint}

Indstiller vinklen for det valgte led.

| joint | min | max |
|-------|-----|-----|
| 1 | -120 | 120 |
| 2 | -90 | 30 |
| 3 | -150 | 0 |
| 4 | -105 | 105 |

<BlockImage module="roboids/Raccoon4" id="angle_joint" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| joint | Rullemenupunkt | Leddets nummer | alle(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Input (blok) | Leddets vinkel (grader) | Se tabellen ovenfor (klippes automatisk) | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_angle_joint(1, 90, wait=True)
```

## Ændr leddets vinkel {#change_angle_joint}

Ændrer vinklen for det valgte led.

<BlockImage module="roboids/Raccoon4" id="change_angle_joint" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| joint | Rullemenupunkt | Leddets nummer | alle(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Input (blok) | Vinkelændring (grader) | Se tabellen ovenfor (klippes automatisk) | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_angle_joint(1, 10, wait=True)
```

## Indstil ledvinklerne på én gang {#angle_joints}

Indstiller vinklen for alle fire led på én gang.

<BlockImage module="roboids/Raccoon4" id="angle_joints" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (array) | Matrix med de fire leds vinkel, eller et tilstandsnavn | Matricen `[j1, j2, j3, j4]` | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# udtrykkelig matrix
raccoon.set_angle_joints(0, 0, 0, 0, wait=True)
```

## Initialiser leddenes tilstand {#default_angle_joints}

Indstiller de fire leds vinkler til en foruddefineret tilstand (`'zero'`, `'park'`, `'home'`).

<BlockImage module="roboids/Raccoon4" id="default_angle_joints" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Rullemenu | Tilstandens navn | `'zero'` / `'park'` / `'home'` | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

Foruddefinerede tilstande:
- `'zero'` → `[0, 0, 0, 0]`
- `'park'` → `[0, 25, -145, -60]`
- `'home'` → `[0, -10, -140, 60]`

### Python
```python
raccoon = RaccoonBot(0)

# foruddefineret tilstand
raccoon.set_angle_joints('home', wait=True)
```

## Gem ledvinklerne {#save_encoder}

Gemmer de nuværende enkoderværdier i en valgfri variabel.

<BlockImage module="roboids/Raccoon4" id="save_encoder" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| encoder | Variabel | Navnet på variablen der skal gemmes i | Variabel | - |
| data | Input (array) | Startmatricen der skal gemmes | Matrix med fire elementer eller en tom matrix | - |

### Python
```python
raccoon = RaccoonBot(0)
encoder = None

encoder = raccoon.save_encoder([3, -6, -73, 60])
```

## Indstil en koordinat {#set_coordinate}

Flytter robotarmen, ved at du indstiller en bestemt koordinat.  
Koordinaterne har følgende intervaller.  
I forhold til håndleddet => x: -20,0 cm ~ 20,0 cm, y: -10,0 cm ~ 20,0 cm, z: -2,0 mm ~ 28,0 cm  
I forhold til griberen => intervallet kan variere alt efter, hvilken enhed der er tilsluttet.  
Griberens retning er låst enten vandret eller lodret i forhold til underlaget.  
Hvis du angiver en koordinat, robotten ikke kan nå, springes kommandoen over.

<BlockImage module="roboids/Raccoon4" id="set_coordinate" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| origin | Rullemenupunkt | Udgangspunkt | håndled(wrist), endeeffektor(end_effector) | - |
| pos | Rullemenupunkt | Akse | x, y, z | - |
| data | Input (blok) | Koordinatværdi | x: -20 til 20 cm, y: -10 til 20 cm, z: -2 til 28 cm | - |
| unit | Rullemenupunkt | Enhed | cm, mm, tomme(inch) | cm |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# indstil x-koordinaten til 10 cm
raccoon.set_coordinate('wrist', 'x', 10, 'cm', wait=True)

# z-koordinaten i forhold til end_effector
raccoon.set_coordinate('end_effector', 'z', 15, 'cm', wait=True)
```

## Ændr en koordinat {#change_coordinate}

Flytter robotarmen, ved at du ændrer en bestemt koordinat ud fra den nuværende position.  
Koordinaterne har følgende intervaller.  
I forhold til håndleddet => x: -20,0 cm ~ 20,0 cm, y: -10,0 cm ~ 20,0 cm, z: -2,0 mm ~ 28,0 cm  
I forhold til griberen => intervallet kan variere alt efter, hvilken enhed der er tilsluttet.  
Griberens retning er låst enten vandret eller lodret i forhold til underlaget.  
Hvis du angiver en koordinat, robotten ikke kan nå, springes kommandoen over.

<BlockImage module="roboids/Raccoon4" id="change_coordinate" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| origin | Rullemenupunkt | Udgangspunkt | håndled(wrist), endeeffektor(end_effector) | - |
| pos | Rullemenupunkt | Akse | x, y, z | - |
| data | Input (blok) | Koordinatændring | Reelt tal | - |
| unit | Rullemenupunkt | Enhed | cm, mm, tomme(inch) | cm |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_coordinate('wrist', 'y', 5, 'cm', wait=True)
```

## Flyt til xyz-koordinater {#set_coordinates}

Indstiller x-, y- og z-koordinaterne til angivne værdier på én gang.  

<BlockImage module="roboids/Raccoon4" id="set_coordinates" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| origin | Rullemenupunkt | Udgangspunkt | håndled(wrist), endeeffektor(end_effector) | - |
| x | Input (blok) | x-koordinat | Reelt tal | - |
| y | Input (blok) | y-koordinat | Reelt tal | - |
| z | Input (blok) | z-koordinat | Reelt tal | - |
| unit | Rullemenupunkt | Enhed | cm, mm, tomme(inch) | cm |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_coordinates('wrist', 0, 15, 20, 'cm', wait=True)
```

## Lås griberen (endeeffektoren) {#lock}

Indstiller, i hvilken retning griberen skal låses. Når indstillingen er sat til vandret eller lodret, kan hastighed og vinkel for led 4 ikke længere styres.

<BlockImage module="roboids/Raccoon4" id="lock" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| mode | Rullemenupunkt | Låseretning | ingen(none), vandret(horizontal), lodret(vertical) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.lock('horizontal')
```

## Grib / placér med griberen {#end_effector}

Griber eller slipper en genstand med griberen (endeeffektoren).  
Alt efter værdien i rullemenuen unit kaldes en af de to metoder.

<BlockImage module="roboids/Raccoon4" id="end_effector" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Handling | grib (luk)(pick), placér (åbn)(place) | - |

### Python
```python
raccoon = RaccoonBot(0)

# unit = "pick"
raccoon.pick()
# unit = "place"
raccoon.place()
```

## Griberenhed {#end_effector_device}

Nummeret på den griber, der er tilsluttet lige nu  
(1, 3, 4: klogriber, 2: vakuumgriber)

<BlockImage module="roboids/Raccoon4" id="end_effector_device" />

### Parametre

(ingen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_device()
```

## Griberens status {#end_effector_status}

Om griberen holder en genstand  
(0: sluppet, 1: grebet)

<BlockImage module="roboids/Raccoon4" id="end_effector_status" />

### Parametre

(ingen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_status()
```

## Afspil en tone {#sound_note}

RaccoonBot afspiller den angivne tone.

<BlockImage module="roboids/Raccoon4" id="sound_note" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| note | Rullemenupunkt | Tone | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Rullemenupunkt | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_note('D', 5)
```

## Afspil et lydklip {#sound_clip}

RaccoonBot afspiller et bestemt lydklip.

<BlockImage module="roboids/Raccoon4" id="sound_clip" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| clip | Rullemenupunkt | Navn på lydklip | `'mute'`, `'beep'`, `'siren'`, `'robot'`, `'connect'`, `'wake_up'`, `'start'`, `'bye'` med flere | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_clip('siren', wait=True)
```

## Slå lyd fra {#sound_off}

Slår lyden fra hos RaccoonBot.

<BlockImage module="roboids/Raccoon4" id="sound_off" />

### Parametre

(ingen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_off()
```

## Enkoderens værdi {#encoder}

Enkoderens værdi for det valgte led

<BlockImage module="roboids/Raccoon4" id="encoder" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| joint | Rullemenupunkt | Leddets nummer (eller alle led) | 1, 2, 3, 4, alle(-1) | -1 |

### Python
```python
raccoon = RaccoonBot(0)

# joint = 1
raccoon.encoder(1)

# alle led
raccoon.encoder(-1)
```

## Koordinaten for det valgte element {#coordinate}

Returnerer udgangspunktets nuværende xyz-koordinater.  
Hvis du udelader `pos`, returneres hele matricen `[x, y, z]`, ellers kun værdien for den akse.

<BlockImage module="roboids/Raccoon4" id="coordinate" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| origin | Rullemenupunkt | Udgangspunkt | håndled(wrist), endeeffektor(end_effector) | wrist |
| pos | Rullemenupunkt | Akse (eller alle) | x, y, z, xyz (udeladt → hele matricen returneres) | None (alle) |

### Python
```python
raccoon = RaccoonBot(0)

# en bestemt akse
raccoon.get_coordinates('wrist', 'x')

# alle (matrix med tre elementer)
raccoon.get_coordinates('wrist')
```

## Signalstyrkens værdi {#signal_strength}

Signalstyrke

<BlockImage module="roboids/Raccoon4" id="signal_strength" />

### Parametre

(ingen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.signal_strength()
```

## Batterispænding {#battery}

Batterispænding

<BlockImage module="roboids/Raccoon4" id="battery" />

### Parametre

(ingen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.battery()
```

## Er knappen trykket ned? {#button}

Om den valgte knap er trykket ned, eller om der er sket en klikhændelse

<BlockImage module="roboids/Raccoon4" id="button" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Knappens navn | teach(teach), play(play), power(power), delete(delete), enhver knap(any) | - |
| event | Rullemenupunkt | Slags hændelse | trykket(pressed), klikket(click), langt klik(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.button('teach', 'pressed')
```

## Indstil transportbåndets hastighed {#conveyor_speed}

Indstiller hastigheden for transportbåndet. Hastigheden går fra -100 til 100.

<BlockImage module="roboids/Raccoon4" id="conveyor_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Transportbåndets hastighed | Heltal -100 til 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_conveyor_speed(100)
```

## Flyt transportbåndet en strækning {#conveyor_distance}

Flytter transportbåndet en bestemt strækning.

<BlockImage module="roboids/Raccoon4" id="conveyor_distance" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Strækning der skal flyttes | Reelt tal 0 eller større | - |
| unit | Rullemenupunkt | Længdeenhed | cm, mm, tomme(inch) | cm |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_move(50, 'cm', wait=True)
```

## Ændr transportbåndets hastighed {#change_conveyor_speed}

Ændrer hastigheden for transportbåndet.

<BlockImage module="roboids/Raccoon4" id="change_conveyor_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Hastighedsændring | Heltal -200 til 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_conveyor_speed(10)
```

## Stop transportbåndet {#stop_conveyor}

Standser transportbåndet.

<BlockImage module="roboids/Raccoon4" id="stop_conveyor" />

### Parametre

(ingen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.stop_conveyor()
```

## Kører transportbåndet? {#conveyor_running}

Om transportbåndet kører

<BlockImage module="roboids/Raccoon4" id="conveyor_running" />

### Parametre

(ingen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_running()
```

## Er transportbåndsknappen trykket ned? {#conveyor_button}

Om transportbåndets knap er trykket ned, eller om der er sket en klikhændelse

<BlockImage module="roboids/Raccoon4" id="conveyor_button" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| event | Rullemenupunkt | Slags hændelse | trykket(pressed), klikket(click), langt klik(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_button('pressed')
```
