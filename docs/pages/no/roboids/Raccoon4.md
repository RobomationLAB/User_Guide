---
title: RaccoonBot
---

# RaccoonBot

## Instanserklæring {#instance}

Når du legger til en RaccoonBot-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
raccoon = RaccoonBot(0)
# Når det finnes flere instanser
raccoon_1 = RaccoonBot(1)
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Slå leddmotorenes styring på / av {#motor}

Bestemmer om styringen av hver leddmotor skal slippes eller beholdes.  
Angir du ikke noe, starter roboten med motorstyringen slått på for alle ledd.

<BlockImage module="roboids/Raccoon4" id="motor" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Leddnummer | alle(-1), 1(1), 2(2), 3(3), 4(4) | -1 |
| on | Avmerkingsboks | Motorstyring PÅ / AV | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# alle ledd, motorstyringen av
raccoon.motor(-1, False)

# ledd 1, motorstyringen på
raccoon.motor(1, True)
```

## Sett leddets hastighet {#speed_joint}

Angir hastigheten til det leddet du velger.

<BlockImage module="roboids/Raccoon4" id="speed_joint" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| joint | Nedtrekksalternativ | Leddnummer | alle(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Inndata (blokk) | Leddets hastighet | Heltall -100 til 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_speed_joint(1, 100)
```

## Endre leddets hastighet {#change_speed_joint}

Endrer hastigheten til det leddet du velger.

<BlockImage module="roboids/Raccoon4" id="change_speed_joint" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| joint | Nedtrekksalternativ | Leddnummer | alle(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Inndata (blokk) | Hastighetsendring | Heltall -200 til 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_speed_joint(1, 50)
```

## Sett leddhastighetene på én gang {#speed_joints}

Angir hastigheten til alle fire ledd på én gang.

<BlockImage module="roboids/Raccoon4" id="speed_joints" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (tabell) | Tabell med hastighetene til de fire leddene | `[joint1, joint2, joint3, joint4]`, hver -100~100 | - |

### Python
```python
raccoon = RaccoonBot(0)

# tabell skrevet direkte [10, 20, 30, 40]
raccoon.set_speed_joints(10, 20, 30, 40)

# tabell fra en variabel
raccoon.set_speed_joints(*arr)
```

## Sett hastigheten for leddvinkelstyring {#angle_speed}

Angir hastigheten leddene skal styres med i vinkelstyringsmodus.

<BlockImage module="roboids/Raccoon4" id="angle_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Største hastighet ved vinkelstyring | Heltall 0 til 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.angle_max_speed(100)
```

## Sett leddets vinkel {#angle_joint}

Angir vinkelen til det leddet du velger.

| joint | min | max |
|-------|-----|-----|
| 1 | -120 | 120 |
| 2 | -90 | 30 |
| 3 | -150 | 0 |
| 4 | -105 | 105 |

<BlockImage module="roboids/Raccoon4" id="angle_joint" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| joint | Nedtrekksalternativ | Leddnummer | alle(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Inndata (blokk) | Leddets vinkel (grader) | Se tabellen ovenfor (begrenses automatisk) | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_angle_joint(1, 90, wait=True)
```

## Endre leddets vinkel {#change_angle_joint}

Endrer vinkelen til det leddet du velger.

<BlockImage module="roboids/Raccoon4" id="change_angle_joint" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| joint | Nedtrekksalternativ | Leddnummer | alle(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Inndata (blokk) | Vinkelendring (grader) | Se tabellen ovenfor (begrenses automatisk) | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_angle_joint(1, 10, wait=True)
```

## Sett leddvinklene på én gang {#angle_joints}

Angir vinkelen til alle fire ledd på én gang.

<BlockImage module="roboids/Raccoon4" id="angle_joints" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (tabell) | Tabell med vinklene til de fire leddene, eller navnet på en stilling | Tabellen `[j1, j2, j3, j4]` | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# tabell skrevet ut
raccoon.set_angle_joints(0, 0, 0, 0, wait=True)
```

## Initialiser leddtilstanden {#default_angle_joints}

Setter vinkelen til de fire leddene til en ferdig definert stilling (`'zero'`, `'park'`, `'home'`).

<BlockImage module="roboids/Raccoon4" id="default_angle_joints" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Nedtrekksmeny | Navnet på stillingen | `'zero'` / `'park'` / `'home'` | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

Ferdige stillinger:
- `'zero'` → `[0, 0, 0, 0]`
- `'park'` → `[0, 25, -145, -60]`
- `'home'` → `[0, -10, -140, 60]`

### Python
```python
raccoon = RaccoonBot(0)

# ferdig stilling
raccoon.set_angle_joints('home', wait=True)
```

## Lagre leddvinklene {#save_encoder}

Lagrer de gjeldende enkoderverdiene i en variabel du velger.

<BlockImage module="roboids/Raccoon4" id="save_encoder" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| encoder | Variabel | Navnet på variabelen det skal lagres i | Variabel | - |
| data | Inndata (tabell) | Starttabellen som skal lagres | Tabell med 4 elementer eller tom tabell | - |

### Python
```python
raccoon = RaccoonBot(0)
encoder = None

encoder = raccoon.save_encoder([3, -6, -73, 60])
```

## Sett en koordinat {#set_coordinate}

Flytter robotarmen ved å angi en bestemt koordinat.  
Koordinatene har disse områdene.  
Relativt til håndleddet => x: -20.0cm ~ 20.0cm, y: -10.0cm ~ 20.0cm, z: -2.0mm ~ 28.0cm  
Relativt til gripekloen => området kan variere med hvilken enhet som er koblet til.  
Gripekloen står fast enten vannrett eller loddrett i forhold til underlaget.  
Skriver du inn en koordinat roboten ikke kan flytte til, hoppes kommandoen over.

<BlockImage module="roboids/Raccoon4" id="set_coordinate" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| origin | Nedtrekksalternativ | Utgangspunkt | håndledd(wrist), gripeklo(end_effector) | - |
| pos | Nedtrekksalternativ | Akse | x, y, z | - |
| data | Inndata (blokk) | Koordinatverdi | x: -20 ~ 20cm, y: -10 ~ 20cm, z: -2 ~ 28cm | - |
| unit | Nedtrekksalternativ | Enhet | cm, mm, tomme(inch) | cm |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# sett x-koordinaten til 10 cm
raccoon.set_coordinate('wrist', 'x', 10, 'cm', wait=True)

# z-koordinaten relativt til end_effector
raccoon.set_coordinate('end_effector', 'z', 15, 'cm', wait=True)
```

## Endre en koordinat {#change_coordinate}

Flytter robotarmen ved å endre en bestemt koordinat i forhold til den posisjonen den har nå.  
Koordinatene har disse områdene.  
Relativt til håndleddet => x: -20.0cm ~ 20.0cm, y: -10.0cm ~ 20.0cm, z: -2.0mm ~ 28.0cm  
Relativt til gripekloen => området kan variere med hvilken enhet som er koblet til.  
Gripekloen står fast enten vannrett eller loddrett i forhold til underlaget.  
Skriver du inn en koordinat roboten ikke kan flytte til, hoppes kommandoen over.

<BlockImage module="roboids/Raccoon4" id="change_coordinate" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| origin | Nedtrekksalternativ | Utgangspunkt | håndledd(wrist), gripeklo(end_effector) | - |
| pos | Nedtrekksalternativ | Akse | x, y, z | - |
| data | Inndata (blokk) | Koordinatendring | Desimaltall | - |
| unit | Nedtrekksalternativ | Enhet | cm, mm, tomme(inch) | cm |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_coordinate('wrist', 'y', 5, 'cm', wait=True)
```

## Flytt til xyz-koordinater {#set_coordinates}

Setter x-, y- og z-koordinatene til de verdiene du angir, på én gang.  

<BlockImage module="roboids/Raccoon4" id="set_coordinates" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| origin | Nedtrekksalternativ | Utgangspunkt | håndledd(wrist), gripeklo(end_effector) | - |
| x | Inndata (blokk) | x-koordinat | Desimaltall | - |
| y | Inndata (blokk) | y-koordinat | Desimaltall | - |
| z | Inndata (blokk) | z-koordinat | Desimaltall | - |
| unit | Nedtrekksalternativ | Enhet | cm, mm, tomme(inch) | cm |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_coordinates('wrist', 0, 15, 20, 'cm', wait=True)
```

## Sett låsen til gripekloen {#lock}

Angir hvilken retning gripekloen skal låses i. Når valget er satt til vannrett eller loddrett, kan du ikke lenger styre hastigheten eller vinkelen til ledd 4.

<BlockImage module="roboids/Raccoon4" id="lock" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| mode | Nedtrekksalternativ | Låseretning | ingen(none), horisontal(horizontal), vertikal(vertical) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.lock('horizontal')
```

## Plukk opp / plasser med gripekloen {#end_effector}

Griper eller slipper en gjenstand med gripekloen.  
Alt etter verdien i nedtrekksmenyen unit kalles den ene eller den andre av de to metodene.

<BlockImage module="roboids/Raccoon4" id="end_effector" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Handling | plukk (lukk)(pick), plasser (åpne)(place) | - |

### Python
```python
raccoon = RaccoonBot(0)

# unit = "pick"
raccoon.pick()
# unit = "place"
raccoon.place()
```

## Gripekloenhet {#end_effector_device}

Nummeret på den gripekloen som er koblet til nå  
(1, 3, 4: klypegriper, 2: vakuumgriper)

<BlockImage module="roboids/Raccoon4" id="end_effector_device" />

### Parametere

(ingen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_device()
```

## Status for griperen {#end_effector_status}

Om griperen holder en gjenstand  
(0: sluppet, 1: grepet)

<BlockImage module="roboids/Raccoon4" id="end_effector_status" />

### Parametere

(ingen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_status()
```

## Spill tonen {#sound_note}

RaccoonBot spiller den tonen du velger.

<BlockImage module="roboids/Raccoon4" id="sound_note" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| note | Nedtrekksalternativ | Tone | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Nedtrekksalternativ | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_note('D', 5)
```

## Spill lydklippet {#sound_clip}

RaccoonBot spiller av et bestemt lydklipp.

<BlockImage module="roboids/Raccoon4" id="sound_clip" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| clip | Nedtrekksalternativ | Navn på lydklipp | `'mute'`, `'beep'`, `'siren'`, `'robot'`, `'connect'`, `'wake_up'`, `'start'`, `'bye'` med flere | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_clip('siren', wait=True)
```

## Lyd av {#sound_off}

Slår av lyden til RaccoonBot.

<BlockImage module="roboids/Raccoon4" id="sound_off" />

### Parametere

(ingen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_off()
```

## Enkoderverdien {#encoder}

Enkoderverdien til det leddet du velger

<BlockImage module="roboids/Raccoon4" id="encoder" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| joint | Nedtrekksalternativ | Leddnummer (eller alle ledd) | 1, 2, 3, 4, alle(-1) | -1 |

### Python
```python
raccoon = RaccoonBot(0)

# joint = 1
raccoon.encoder(1)

# alle ledd
raccoon.encoder(-1)
```

## Koordinaten til det valgte elementet {#coordinate}

Returnerer de gjeldende xyz-koordinatene til utgangspunktet.  
Utelater du `pos`, returneres hele tabellen `[x, y, z]`, og angir du den, returneres bare verdien for den aksen.

<BlockImage module="roboids/Raccoon4" id="coordinate" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| origin | Nedtrekksalternativ | Utgangspunkt | håndledd(wrist), gripeklo(end_effector) | wrist |
| pos | Nedtrekksalternativ | Akse (eller alle) | x, y, z, alle (utelates den, returneres hele tabellen) | None (alle) |

### Python
```python
raccoon = RaccoonBot(0)

# en bestemt akse
raccoon.get_coordinates('wrist', 'x')

# alle (tabell med 3 elementer)
raccoon.get_coordinates('wrist')
```

## Signalstyrken {#signal_strength}

Signalstyrken

<BlockImage module="roboids/Raccoon4" id="signal_strength" />

### Parametere

(ingen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.signal_strength()
```

## Batteriet {#battery}

Batterispenningen

<BlockImage module="roboids/Raccoon4" id="battery" />

### Parametere

(ingen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.battery()
```

## Er knappen trykket? {#button}

Om den knappen du velger, holdes nede, eller om det har skjedd en klikkhendelse

<BlockImage module="roboids/Raccoon4" id="button" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Knappenavn | teach(teach), play(play), power(power), delete(delete), hvilken som helst(any) | - |
| event | Nedtrekksalternativ | Type hendelse | trykket(pressed), klikket(click), langt klikk(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.button('teach', 'pressed')
```

## Sett hastigheten til transportbåndet {#conveyor_speed}

Angir hastigheten til transportbåndet. Hastigheten går fra -100 til 100.

<BlockImage module="roboids/Raccoon4" id="conveyor_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Transportbåndets hastighet | Heltall -100 til 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_conveyor_speed(100)
```

## Flytt transportbåndet en strekning {#conveyor_distance}

Flytter transportbåndet den strekningen du angir.

<BlockImage module="roboids/Raccoon4" id="conveyor_distance" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Strekning som skal flyttes | Desimaltall 0 eller større | - |
| unit | Nedtrekksalternativ | Avstandsenhet | cm, mm, tomme(inch) | cm |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_move(50, 'cm', wait=True)
```

## Endre hastigheten til transportbåndet {#change_conveyor_speed}

Endrer hastigheten til transportbåndet.

<BlockImage module="roboids/Raccoon4" id="change_conveyor_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Hastighetsendring | Heltall -200 til 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_conveyor_speed(10)
```

## Stopp transportbåndet {#stop_conveyor}

Stopper transportbåndet.

<BlockImage module="roboids/Raccoon4" id="stop_conveyor" />

### Parametere

(ingen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.stop_conveyor()
```

## Går transportbåndet? {#conveyor_running}

Om transportbåndet går

<BlockImage module="roboids/Raccoon4" id="conveyor_running" />

### Parametere

(ingen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_running()
```

## Er transportbåndknappen trykket? {#conveyor_button}

Om knappen på transportbåndet holdes nede, eller om det har skjedd en klikkhendelse

<BlockImage module="roboids/Raccoon4" id="conveyor_button" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| event | Nedtrekksalternativ | Type hendelse | trykket(pressed), klikket(click), langt klikk(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_button('pressed')
```
