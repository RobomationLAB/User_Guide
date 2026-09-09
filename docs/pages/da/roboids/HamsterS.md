---
title: HamsterS
---

# HamsterS

## Instanserklæring {#instance}

Når du tilføjer en HamsterS-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
hamster_s = HamsterS(0)
# Når der er flere instanser
hamster_s_1 = HamsterS(1)
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Indstil hjulhastigheden {#set_wheel_speed}

Bestemmer hjulenes hastighed. Hastigheden går fra -100 til 100.

<BlockImage module="roboids/HamsterS" id="set_wheel_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Hjul der skal styres | venstre(left), højre(right), begge(both) | - |
| speed | Input (blok) | Hjulhastighed | Heltal -100 til 100, 0: stop | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_wheel_speed('both', 50)
```

## Kør en strækning {#move_distance}

Kører den angivne strækning med den nuværende hjulhastighed.  
Hvis hjulhastigheden ikke er indstillet, kører den fremad med standardhastigheden.  
Hvis strækningen er 0, fortsætter den med at køre efter den nuværende hjulhastighed.  
Hvis vent er markeret, venter kørslen, indtil bevægelsen er færdig.

<BlockImage module="roboids/HamsterS" id="move_distance" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Strækning der skal køres | Reelt tal 0 eller større | - |
| unit | Rullemenupunkt | Længdeenhed | cm, mm, tomme(inch) | cm |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.move_distance(50, 'cm', wait=True)
```

## Kør i et stykke tid {#move_time}

Kører i det angivne stykke tid med den nuværende hjulhastighed.  
Hvis hjulhastigheden ikke er indstillet, kører den fremad med standardhastigheden.  
Hvis vent er markeret, venter kørslen, indtil bevægelsen er færdig.

<BlockImage module="roboids/HamsterS" id="move_time" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Tid der skal køres (sekunder) | Reelt tal 0 eller større | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

# wait = TRUE
hamster_s.move_time(5, wait=True)
# wait = FALSE
hamster_s.move_time(5, wait=False)
```

## Drej på stedet {#turn_degree}

Indstiller, til hvilken side og hvor mange grader robotten skal dreje på stedet.  
Hvis vent er markeret, venter kørslen, indtil drejningen er færdig.

<BlockImage module="roboids/HamsterS" id="turn_degree" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullemenupunkt | Drejeretning | venstre(left), højre(right) | - |
| data | Input (blok) | Drejevinkel (grader) | Reelt tal 0 eller større | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_degree('left', 90, wait=True)
```

## Ændr hjulhastigheden {#change_speed}

Ændrer hjulhastigheden på HamsterS.  
Den nye hjulhastighed bliver den nuværende hjulhastighed plus den hastighed, du angiver.

<BlockImage module="roboids/HamsterS" id="change_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Hjul der skal styres | venstre(left), højre(right), begge(both) | - |
| speed | Input (blok) | Hastighedsændring | Heltal -200 til 200 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_wheel_speed('both', 10)
```

## Stop {#stop}

Standser HamsterS' bevægelse.

<BlockImage module="roboids/HamsterS" id="stop" />

### Parametre

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop()
```

## Kører hjulet? {#wheel_moving}

Returnerer true, hvis hjulet kører, og false, hvis det står stille.

<BlockImage module="roboids/HamsterS" id="wheel_moving" />

### Parametre

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_moving()
```

## Kør ét felt frem på brættet {#grid_move}

Bevæger sig ét felt ad gangen på brættet, efter hvordan brættet er inddelt.

<BlockImage module="roboids/HamsterS" id="grid_move" />

### Parametre

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_move()
```

## Drej én gang på brættet {#grid_turn}

Drejer 90 grader til den angivne side på brættet.

<BlockImage module="roboids/HamsterS" id="grid_turn" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullemenupunkt | Drejeretning | venstre(left), højre(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_turn('left')
```

## Drej omkring penneholderen {#pivot}

Indstiller, hvad robotten skal dreje omkring, samt retning og vinkel, når du bruger penneholderen.  
Hvis vent er markeret, venter kørslen, indtil drejningen er færdig.

<BlockImage module="roboids/HamsterS" id="pivot" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| base | Rullemenupunkt | Hvad drejningen sker omkring | venstre pen(left_pen), højre pen(right_pen), venstre hjul(left_wheel), højre hjul(right_wheel) | - |
| direction | Rullemenupunkt | Drejeretning | fremad(forward), bagud(backward) | - |
| degree | Input (blok) | Drejevinkel (grader) | Reelt tal 0 eller større | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot('left_pen', 'forward', 90, wait=True)
```

## Tegn en cirkel omkring penneholderen {#pivot_circle}

Indstiller, hvad robotten skal dreje omkring, samt retning, radius og vinkel, når du tegner en cirkel med penneholderen.  
Hvis vent er markeret, venter kørslen, indtil drejningen er færdig.

<BlockImage module="roboids/HamsterS" id="pivot_circle" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| base | Rullemenupunkt | Hvad drejningen sker omkring | venstre pen(left_pen), højre pen(right_pen) | - |
| direction | Rullemenupunkt | Drejeretning | frem mod venstre(left_forward), tilbage mod venstre(left_backward), frem mod højre(right_forward), tilbage mod højre(right_backward) | - |
| degree | Input (blok) | Drejevinkel (grader) | Reelt tal 0 eller større | - |
| radius | Input (blok) | Drejeradius | Reelt tal 0 eller større | - |
| unit | Rullemenupunkt | Radiussens enhed | cm, mm, tomme(inch) | cm |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot_circle('left_pen', 'left_forward', 90, 1, 'cm', wait=True)
```

## Følg en linje med sensoren {#trace_mode}

HamsterS følger en linje i en bestemt farve ved hjælp af gulvsensoren.

<BlockImage module="roboids/HamsterS" id="trace_mode" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| floor | Rullemenupunkt | Gulvsensor der skal følge linjen | venstre(left), højre(right), midten(center) | - |
| line | Rullemenupunkt | Linjens farve | sort(black), hvid(white) | black |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_line('left', 'black')
```

## Kør gennem et kryds og stop ved det næste {#trace_until_grid}

HamsterS kører til den angivne side i krydset og fortsætter derefter, indtil den møder det næste kryds.  
Hvis vent er markeret, venter kørslen, indtil bevægelsen er færdig.  

<BlockImage module="roboids/HamsterS" id="trace_until_grid" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullemenupunkt | Retning i krydset | drej til venstre(left), drej til højre(right), fremad(forward), u-vending(uturn) | - |
| line | Rullemenupunkt | Linjens farve | sort(black), hvid(white) | black |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_intersection('left', 'black', wait=True)
```

## Indstil linjefølgningshastigheden {#set_trace_speed}

Indstiller hastigheden for linjefølgningen. Hastigheden går fra 1 til 10.

<BlockImage module="roboids/HamsterS" id="set_trace_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Linjefølgningshastighed | Heltal 1 til 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_speed(5)
```

## Indstil linjefølgningens forstærkning {#set_trace_gain}

Indstiller, hvor meget retningen ændres ved linjefølgning. Værdien går fra 1 til 10.

<BlockImage module="roboids/HamsterS" id="set_trace_gain" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Retningsændring | Heltal 1 til 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_gain(5)
```

## Stop linjefølgning {#stop_trace}

Afslutter linjefølgningen hos HamsterS.

<BlockImage module="roboids/HamsterS" id="stop_trace" />

### Parametre

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop_trace()
```

## Indstil LED-farven {#set_led_color}

Indstiller farven på lysdioden hos HamsterS.  
Når du vælger en farve i farvepaletten, omdannes den til et **farvenavn** (en engelsk streng) i kaldet. (Koden dannes med farvenavnet, ikke med talværdier for R, G og B.)

<BlockImage module="roboids/HamsterS" id="set_led_color" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Lysdiode der skal styres | venstre(left), højre(right), begge(both) | - |
| color | Farve | Valg i farvepaletten → omdannes til et farvenavn (engelsk) | Farvenavn: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', 'red')
```

## Indstil LED-farven med en blok fra Farve-kategorien {#set_led_color_with_block}

Modtager en blok fra Farve-kategorien (`[R, G, B]`) som input og indstiller lysdiodens farve.

<BlockImage module="roboids/HamsterS" id="set_led_color_with_block" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Lysdiode der skal styres | venstre(left), højre(right), begge(both) | - |
| data | Input (farve) | Blok fra Farve-kategorien eller matricen `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', *Utils.color_rgb(255, 128, 0))
```

## Ændr LED-farven med RGB {#change_by_rgb}

Ændrer farven på lysdioden hos HamsterS med de angivne R-, G- og B-værdier.

<BlockImage module="roboids/HamsterS" id="change_by_rgb" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Lysdiode der skal styres | venstre(left), højre(right), begge(both) | - |
| r | Input (felt) | Ændring af rød | Heltal -255 til 255 | 0 |
| g | Input (felt) | Ændring af grøn | Heltal -255 til 255 | 0 |
| b | Input (felt) | Ændring af blå | Heltal -255 til 255 | 0 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_led_color('both', 10, 0, 0)
```

## Sluk LED {#turn_off}

Fjerner lysdiodens farve.

<BlockImage module="roboids/HamsterS" id="turn_off" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Lysdiode der skal styres | venstre(left), højre(right), begge(both) | both |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_off('both')
```

## Indstil summerlyden {#sound_buzz}

Indstiller summertonen hos HamsterS til den angivne frekvens.  
Frekvenser, der kan lyde, går fra 122,1 Hz til 4186,0 Hz.  
Hvis du angiver en værdi uden for dette interval, høres der ingen summertone.

<BlockImage module="roboids/HamsterS" id="sound_buzz" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| hz | Input (blok) | Frekvens (Hz) | Reelt tal 122.1 til 4186.0 (ellers 0) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_buzz(440)
```

## Spil en tone {#sound_note}

HamsterS spiller den angivne tone.

<BlockImage module="roboids/HamsterS" id="sound_note" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| note | Rullemenupunkt | Tone | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Rullemenupunkt | Oktav | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_note('D', 5)
```

## Afspil et lydklip {#sound_clip}

HamsterS afspiller et bestemt lydklip.  
Hvis vent er markeret, venter kørslen, indtil afspilningen er færdig.

<BlockImage module="roboids/HamsterS" id="sound_clip" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| clip | Rullemenupunkt | Navn på lydklip | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'happy'`, `'angry'`, `'sad'` med flere | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_clip('siren', wait=True)
```

## Slå lyd fra {#sound_off}

Slår lyden fra hos HamsterS.

<BlockImage module="roboids/HamsterS" id="sound_off" />

### Parametre

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_off()
```

## Afspilles lyd? {#sound_playing}

Returnerer true, hvis der afspilles en lyd, og false, hvis der ikke gør.

<BlockImage module="roboids/HamsterS" id="sound_playing" />

### Parametre

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_playing()
```

## Hjulhastighedens værdi {#wheel_speed}

Hastigheden for et bestemt hjul

<BlockImage module="roboids/HamsterS" id="wheel_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Hjul der skal læses | venstre(left), højre(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_speed('left')
```

## Afstandssensorens værdi {#proximity}

Værdien for en bestemt afstandssensor

<BlockImage module="roboids/HamsterS" id="proximity" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Sensorens placering | venstre(left), højre(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.proximity('left')
```

## Gulvsensorens værdi {#floor}

Værdien for en bestemt gulvsensor

<BlockImage module="roboids/HamsterS" id="floor" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Sensorens placering | venstre(left), højre(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.floor('left')
```

## Accelerationens værdi {#acceleration}

Tyngdeaccelerationens værdi langs en bestemt akse

<BlockImage module="roboids/HamsterS" id="acceleration" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Akse der skal måles | x, y, z | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.acceleration('x')
```

## Lysstyrkens værdi {#light}

Lysstyrkens værdi

<BlockImage module="roboids/HamsterS" id="light" />

### Parametre

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.light()
```

## Temperatursensorens værdi {#temperature}

Temperatursensorens værdi

<BlockImage module="roboids/HamsterS" id="temperature" />

### Parametre

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.temperature()
```

## Signalstyrkens værdi {#signal_strength}

Signalstyrke

<BlockImage module="roboids/HamsterS" id="signal_strength" />

### Parametre

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.signal_strength()
```

## Batterispænding {#battery}

Batterispænding

<BlockImage module="roboids/HamsterS" id="battery" />

### Parametre

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.battery()
```

## Om tilstanden har ændret sig {#state_change}

Om robottens tilstand har ændret sig

<BlockImage module="roboids/HamsterS" id="state_change" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Slags tilstand | 0 til 7 (se tabellen nedenfor) | - |

| unit | Betydning | Python |
|------|------|--------|
| 0 | Vipper fremad | `acceleration('x') > 5000` |
| 1 | Vipper bagud | `acceleration('x') < -5000` |
| 2 | Vipper mod venstre | `acceleration('y') > 5000` |
| 3 | Vipper mod højre | `acceleration('y') < -5000` |
| 4 | På hovedet | `acceleration('z') > 0` |
| 5 | Ikke på hovedet | `acceleration('z') < -3000` |
| 6 | Forhindring/hånd registreret | `proximity('left') > 50 or proximity('right') > 50` |
| 7 | Bank | `tap()` |

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

## Indstil in-/udgangsportens tilstand {#io_mode}

Indstiller indgangstilstanden for IO-porten.

<BlockImage module="roboids/HamsterS" id="io_mode" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | In-/udgangsport | A (`'a'`), B (`'b'`), begge(both) | - |
| option | Rullemenupunkt | In-/udgangstilstand | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.io_mode('both', 'analog_input')
```

## Indstil in-/udgangsportens outputværdi {#set_output}

Indstiller outputværdien for den angivne IO-port.

<BlockImage module="roboids/HamsterS" id="set_output" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | In-/udgangsport | A (`'a'`), B (`'b'`), begge(both) | - |
| data | Input (blok) | Outputværdi | Heltal 0 til 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_output('a', 90)
```

## Ændr in-/udgangsportens outputværdi {#change_output}

Ændrer outputværdien for den angivne IO-port.

<BlockImage module="roboids/HamsterS" id="change_output" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | In-/udgangsport | A (`'a'`), B (`'b'`), begge(both) | - |
| data | Input (blok) | Ændring af outputværdien | Heltal | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_output('a', 10)
```

## Åbn / luk griberen {#gripper}

Åbner eller lukker griberen på HamsterS.  
Alt efter værdien af unit kaldes en af de to metoder.

<BlockImage module="roboids/HamsterS" id="gripper" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Handling | åbn(open), luk(close) | - |

### Python
```python
hamster_s = HamsterS(0)

# unit = "open"
hamster_s.open_gripper()
# unit = "close"
hamster_s.close_gripper()
```

## Indstil skyderens vinkel {#shooter}

Styrer skyderen ved at indstille dens vinkel. Vinklen går fra 0 til 180.

<BlockImage module="roboids/HamsterS" id="shooter" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Skyderens vinkel | Heltal 0 til 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.shooter(45)
```

## In-/udgangsportens indgangsværdi {#input}

Returnerer indgangsværdien for in-/udgangsporten på HamsterS.

<BlockImage module="roboids/HamsterS" id="input" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | In-/udgangsport | A (`'a'`), B (`'b'`) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.get_input('a')
```
