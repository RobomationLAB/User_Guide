---
title: Piobot
---

# Piobot

## Instanserklæring {#instance}

Når du tilføjer en Piobot(Pio)-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
pio = Pio(0)
# Når der er flere instanser
pio_1 = Pio(1)
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Indstil hjulhastigheden {#set_wheel_speed}

Indstiller hjulenes hastighed. Hjulhastigheden går fra -100 til 100.

<BlockImage module="roboids/Pio" id="set_wheel_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Hjul der skal styres | venstre(left), højre(right), begge(both) | - |
| speed | Input (blok) | Hjulhastighed | Heltal -100 til 100, 0: stop | - |

### Python
```python
pio = Pio(0)

pio.set_wheel_speed('both', 50)
```

## Kør en strækning {#move_distance}

Kører den angivne strækning med den nuværende hjulhastighed.  
Hvis hjulhastigheden ikke er indstillet, kører den fremad med standardhastigheden.  
Hvis strækningen er 0, fortsætter den med at køre efter den nuværende hjulhastighed.  
Hvis vent er markeret, venter kørslen, indtil bevægelsen er færdig.

<BlockImage module="roboids/Pio" id="move_distance" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Strækning der skal køres | Reelt tal 0 eller større | - |
| unit | Rullemenupunkt | Længdeenhed | cm, mm, tomme(inch) | cm |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.move_distance(50, 'cm', wait=True)
```

## Kør i et stykke tid {#move_time}

Kører i det angivne stykke tid med den nuværende hjulhastighed.  
Hvis hjulhastigheden ikke er indstillet, kører den fremad med standardhastigheden.  
Hvis vent er markeret, venter kørslen, indtil bevægelsen er færdig.

<BlockImage module="roboids/Pio" id="move_time" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Tid der skal køres (sekunder) | Reelt tal 0 eller større | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# wait = TRUE
pio.move_time(5, wait=True)
# wait = FALSE
pio.move_time(5, wait=False)
```

## Drej på stedet {#turn_degree}

Indstiller, til hvilken side og hvor mange grader robotten skal dreje på stedet.  
Hvis vent er markeret, venter kørslen, indtil drejningen er færdig.

<BlockImage module="roboids/Pio" id="turn_degree" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullemenupunkt | Drejeretning | venstre(left), højre(right) | - |
| data | Input (blok) | Drejevinkel (grader) | Reelt tal 0 eller større | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# direction = "left"
pio.turn_degree('left', 90, wait=True)
# direction = "right"
pio.turn_degree('right', 90, wait=True)
```

## Ændr hjulhastigheden {#change_speed}

Ændrer hjulhastigheden på Piobot.  
Den nye hjulhastighed bliver den nuværende hjulhastighed plus den hastighed, du angiver.  
Den nyligt indstillede hjulhastighed begrænses til intervallet -100 til 100.

<BlockImage module="roboids/Pio" id="change_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Hjul der skal styres | venstre(left), højre(right), begge(both) | - |
| speed | Input (blok) | Hastighedsændring | Heltal -200 til 200 | - |

### Python
```python
pio = Pio(0)

pio.change_wheel_speed('both', 50)
```

## Slå turbotilstand til / fra {#turbo}

Slår turbotilstanden til eller fra på Piobot.

<BlockImage module="roboids/Pio" id="turbo" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Turbotilstand TIL / FRA | til(on=True), fra(off=False) | TRUE |

### Python
```python
pio = Pio(0)

pio.turbo(True)
```

## Stop {#stop}

Standser Piobots bevægelse.  
Begge hjuls hastighed på Piobot nulstilles til 0.

<BlockImage module="roboids/Pio" id="stop" />

### Parametre

(ingen)

### Python
```python
pio = Pio(0)

pio.stop()
```

## Bevæger hjulet sig? {#wheel_moving}

Returnerer true, hvis hjulet bevæger sig, og false, hvis det står stille.

<BlockImage module="roboids/Pio" id="wheel_moving" />

### Parametre

(ingen)

### Python
```python
pio = Pio(0)

pio.wheel_moving()
```

## Flyt ét felt på brættet {#grid_move}

Bevæger sig ét felt ad gangen på brættet, efter hvordan brættet er inddelt.

<BlockImage module="roboids/Pio" id="grid_move" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Retning | fremad(forward), bagud(backward), mod venstre(left), mod højre(right) | - |

### Python
```python
pio = Pio(0)

pio.grid_move('forward')
```

## Drej én gang på brættet {#grid_turn}

Piobot drejer 90 grader til den angivne side på brættet. Den venter altid, indtil det er færdigt (wait=True er fast indstillet internt).

<BlockImage module="roboids/Pio" id="grid_turn" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Drejeretning | venstre(left), højre(right) | - |

### Python
```python
pio = Pio(0)

# unit = "left"
pio.grid_turn('left')
# unit = "right"
pio.grid_turn('right')
```

## Indstil halsens hastighed {#set_neck_speed}

Indstiller, hvor hurtigt halsen drejer. Halsens hastighed går fra 1 til 6.

<BlockImage module="roboids/Pio" id="set_neck_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Halsens drejehastighed | Heltal 1 til 6 | 4 |

### Python
```python
pio = Pio(0)

pio.set_neck_speed(4)
```

## Indstil halsens vinkel {#set_neck_angle}

Indstiller, hvilken vinkel halsen skal drejes til. Halsens vinkel går fra -45 til 45.

<BlockImage module="roboids/Pio" id="set_neck_angle" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Halsens vinkel (grader) | Reelt tal -45 til 45 | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.set_neck_angle(15, wait=True)
```

## Bevæger halsen sig? {#neck_moving}

Returnerer true, hvis halsen bevæger sig, og false, hvis den står stille.

<BlockImage module="roboids/Pio" id="neck_moving" />

### Parametre

(ingen)

### Python
```python
pio = Pio(0)

pio.neck_moving()
```

## Indstil øjenfarven {#set_eye_color}

Indstiller farven på øjenlysdioderne hos Piobot.  
Du kan ændre farven på venstre øje, højre øje eller begge.  
Når du vælger en farve blandt farveforvalgene, omdannes den til et **farvenavn** (en engelsk streng) i kaldet. (Koden dannes med farvenavnet, ikke med talværdier for R, G og B.)

<BlockImage module="roboids/Pio" id="set_eye_color" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Øje der skal styres | venstre(left), højre(right), begge(both) | - |
| color | Rullemenupunkt | Farveforvalg → omdannes til et farvenavn (engelsk) | sort(black), rød(red), gul(yellow), grøn(green), cyan(cyan), blå(blue), magenta(magenta), hvid(white) | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', 'red')
```

## Indstil øjenfarven med en blok fra Farve-kategorien {#set_eye_color_with_block}

Indstiller farven på øjenlysdioderne hos Piobot med blokkene i Farve-kategorien.  
Du kan ændre farven på venstre øje, højre øje eller begge.

<BlockImage module="roboids/Pio" id="set_eye_color_with_block" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Øje der skal styres | venstre(left), højre(right), begge(both) | - |
| data | Input (farve) | Matricen [R, G, B] | Blok fra Farve-kategorien eller `[0~255, 0~255, 0~255]` | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', *Utils.color('red'))
```

## Ændr øjenfarven med RGB {#change_by_rgb}

Ændrer farven på øjenlysdioderne hos Piobot med de angivne R-, G- og B-værdier.  
Du kan indstille venstre øje, højre øje eller begge.

<BlockImage module="roboids/Pio" id="change_by_rgb" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Øje der skal styres | venstre(left), højre(right), begge(both) | - |
| r | Input (felt) | Ændring af rød | Heltal -255 til 255 | 0 |
| g | Input (felt) | Ændring af grøn | Heltal -255 til 255 | 0 |
| b | Input (felt) | Ændring af blå | Heltal -255 til 255 | 0 |

### Python
```python
pio = Pio(0)

pio.change_eye_color('both', 10, 0, 0)
```

## Indstil øjenmønster {#set_eye_pattern}

Indstiller øjnenes mønster og angiver, hvilken farve hvert øje har, når mønstret starter.

<BlockImage module="roboids/Pio" id="set_eye_pattern" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| pattern | Rullemenupunkt | Slags mønster | fra(reset), blink(blink), dæmpning(dimming), regnbue(rainbow) | - |
| left | Rullemenupunkt | Venstre øjes farve | standard(black), rød(red), gul(yellow), grøn(green), cyan(cyan), blå(blue), magenta(magenta), hvid(white) | white |
| right | Rullemenupunkt | Højre øjes farve | (samme som left) | white |

### Python
```python
pio = Pio(0)

pio.set_eye_pattern('dimming', 'green', 'red')
```

## Sluk øjnene {#turn_off}

Fjerner øjnenes farve.

<BlockImage module="roboids/Pio" id="turn_off" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Øje der skal styres | venstre(left), højre(right), begge(both) | both |

### Python
```python
pio = Pio(0)

pio.turn_off('both')
```

## Indstil summerlyden {#sound_buzz}

Indstiller summertonen hos Piobot til den angivne frekvens.  
Frekvenser, der kan lyde, går fra 27,5 Hz til 6553,5 Hz.  
Hvis du angiver en værdi uden for dette interval, høres der ingen summertone.

<BlockImage module="roboids/Pio" id="sound_buzz" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| hz | Input (blok) | Frekvens (Hz) | Reelt tal 27.5 til 6553.5 | - |

### Python
```python
pio = Pio(0)

pio.sound_buzz(440)
```

## Afspil en tone {#sound_note}

Piobot afspiller den angivne tone.

<BlockImage module="roboids/Pio" id="sound_note" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| note | Rullemenupunkt | Tone | Do(C), Do#/Re♭(C#), Re(D), Re#/Mi♭(D#), Mi(E), Fa(F), Fa#/Sol♭(F#), Sol(G), Sol#/La♭(G#), La(A), La#/Si♭(A#), Si(B) | - |
| octave | Rullemenupunkt | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
pio = Pio(0)

pio.sound_note('D', 5)
```

## Afspil et lydklip {#sound_clip}

Piobot afspiller et bestemt lydklip.  
Hvis vent er markeret, venter kørslen, indtil afspilningen er færdig.

<BlockImage module="roboids/Pio" id="sound_clip" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| clip | Rullemenupunkt | Navn på lydklip | `'mute'`, `'beep'`, `'beep2'`, `'beep3'`, `'siren'`, `'engine'`, `'robot'`, `'connect'` med flere | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_clip('siren', wait=True)
```

## Afspil en melodi {#sound_melody}

Piobot afspiller en bestemt melodi.  
Hvis vent er markeret, venter kørslen, indtil afspilningen er færdig.

<BlockImage module="roboids/Pio" id="sound_melody" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| melody | Rullemenupunkt | Melodiens navn | `'mute'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` med flere | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_melody('happy', wait=True)
```

## Slå lyd fra {#sound_off}

Slår lyden fra hos Piobot.

<BlockImage module="roboids/Pio" id="sound_off" />

### Parametre

(ingen)

### Python
```python
pio = Pio(0)

pio.sound_off()
```

## Afspilles lyd? {#sound_playing}

Returnerer true, hvis der afspilles en lyd, og false, hvis der ikke gør.

<BlockImage module="roboids/Pio" id="sound_playing" />

### Parametre

(ingen)

### Python
```python
pio = Pio(0)

pio.sound_playing()
```

## Hjulhastighedens værdi {#wheel_speed}

Hastigheden for et bestemt hjul

<BlockImage module="roboids/Pio" id="wheel_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Hjul der skal læses | venstre(left), højre(right) | - |

### Python
```python
pio = Pio(0)

pio.wheel_speed('left')
```

## Signalstyrkens værdi {#signal_strength}

Signalstyrke

<BlockImage module="roboids/Pio" id="signal_strength" />

### Parametre

(ingen)

### Python
```python
pio = Pio(0)

pio.signal_strength()
```

## Batterispænding {#battery}

Batterispænding

<BlockImage module="roboids/Pio" id="battery" />

### Parametre

(ingen)

### Python
```python
pio = Pio(0)

pio.battery()
```

## Tastaturets knapper {#keypad}

Registrerer, hvilken knap på tastaturet brugeren sidst har trykket på.

<BlockImage module="roboids/Pio" id="keypad" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| button | Rullemenupunkt | Knap der skal registreres | kør(play), kør fremad(forward), kør bagud(backward), kør mod venstre(left), kør mod højre(right), udfør(action), gentag(repeat), ryd(clear) | - |

### Python
```python
pio = Pio(0)

pio.keypad('forward')
```
