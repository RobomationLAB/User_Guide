---
title: Piobot
---

# Piobot

## Instanserklæring {#instance}

Når du legger til en Piobot(Pio)-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
pio = Pio(0)
# Når det finnes flere instanser
pio_1 = Pio(1)
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Sett hjulhastigheten {#set_wheel_speed}

Angir hjulhastigheten. Hjulhastigheten går fra -100 til 100.

<BlockImage module="roboids/Pio" id="set_wheel_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Hjul som skal styres | venstre(left), høyre(right), begge(both) | - |
| speed | Inndata (blokk) | Hjulhastighet | Heltall -100 til 100, 0: stopp | - |

### Python
```python
pio = Pio(0)

pio.set_wheel_speed('both', 50)
```

## Flytt en strekning {#move_distance}

Kjører den strekningen du angir, med den hastigheten hjulene har nå.  
Er hjulhastigheten ikke satt, kjører den fremover med standardhastigheten.  
Er strekningen 0, fortsetter den å kjøre med den hastigheten hjulene har nå.  
Krysser du av for vent, venter kjøringen til bevegelsen er ferdig.

<BlockImage module="roboids/Pio" id="move_distance" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Strekning som skal kjøres | Desimaltall 0 eller større | - |
| unit | Nedtrekksalternativ | Avstandsenhet | cm, mm, tomme(inch) | cm |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.move_distance(50, 'cm', wait=True)
```

## Flytt i et tidsrom {#move_time}

Kjører i det tidsrommet du angir, med den hastigheten hjulene har nå.  
Er hjulhastigheten ikke satt, kjører den fremover med standardhastigheten.  
Krysser du av for vent, venter kjøringen til bevegelsen er ferdig.

<BlockImage module="roboids/Pio" id="move_time" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Tid det skal kjøres (sekunder) | Desimaltall 0 eller større | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# wait = TRUE
pio.move_time(5, wait=True)
# wait = FALSE
pio.move_time(5, wait=False)
```

## Snu på stedet {#turn_degree}

Angir hvilken retning og hvor mange grader roboten skal snu på stedet.  
Krysser du av for vent, venter kjøringen til rotasjonen er ferdig.

<BlockImage module="roboids/Pio" id="turn_degree" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Nedtrekksalternativ | Rotasjonsretning | venstre(left), høyre(right) | - |
| data | Inndata (blokk) | Rotasjonsvinkel (grader) | Desimaltall 0 eller større | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# direction = "left"
pio.turn_degree('left', 90, wait=True)
# direction = "right"
pio.turn_degree('right', 90, wait=True)
```

## Endre hjulhastigheten {#change_speed}

Endrer hjulhastigheten til Piobot.  
Den nye hjulhastigheten er den hastigheten hjulene har nå, pluss den hastigheten du skriver inn.  
Den nye hjulhastigheten begrenses til området -100 til 100.

<BlockImage module="roboids/Pio" id="change_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Hjul som skal styres | venstre(left), høyre(right), begge(both) | - |
| speed | Inndata (blokk) | Hastighetsendring | Heltall -200 til 200 | - |

### Python
```python
pio = Pio(0)

pio.change_wheel_speed('both', 50)
```

## Slå turbomodus på / av {#turbo}

Slår turbomodusen til Piobot på eller av.

<BlockImage module="roboids/Pio" id="turbo" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Turbomodus PÅ / AV | på(on=True), av(off=False) | TRUE |

### Python
```python
pio = Pio(0)

pio.turbo(True)
```

## Stopp {#stop}

Stopper bevegelsen til Piobot.  
Begge hjulhastighetene til Piobot settes til 0.

<BlockImage module="roboids/Pio" id="stop" />

### Parametere

(ingen)

### Python
```python
pio = Pio(0)

pio.stop()
```

## Beveger hjulet seg? {#wheel_moving}

Returnerer true hvis hjulet er i bevegelse, og false hvis det står stille.

<BlockImage module="roboids/Pio" id="wheel_moving" />

### Parametere

(ingen)

### Python
```python
pio = Pio(0)

pio.wheel_moving()
```

## Flytt ett trinn på brettet {#grid_move}

Beveger seg ett trinn om gangen på brettet, etter hvordan brettet er delt inn.

<BlockImage module="roboids/Pio" id="grid_move" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Bevegelsesretning | fremover(forward), bakover(backward), til venstre(left), til høyre(right) | - |

### Python
```python
pio = Pio(0)

pio.grid_move('forward')
```

## Snu én gang på brettet {#grid_turn}

Piobot snur 90 grader på brettet i den retningen du oppgir. Den venter alltid til rotasjonen er ferdig (internt er wait=True fast).

<BlockImage module="roboids/Pio" id="grid_turn" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Rotasjonsretning | venstre(left), høyre(right) | - |

### Python
```python
pio = Pio(0)

# unit = "left"
pio.grid_turn('left')
# unit = "right"
pio.grid_turn('right')
```

## Sett nakkehastigheten {#set_neck_speed}

Angir hvor fort nakken skal rotere. Nakkehastigheten går fra 1 til 6.

<BlockImage module="roboids/Pio" id="set_neck_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Nakkens rotasjonshastighet | Heltall 1 til 6 | 4 |

### Python
```python
pio = Pio(0)

pio.set_neck_speed(4)
```

## Sett nakkevinkelen {#set_neck_angle}

Angir hvilken vinkel nakken skal rotere til. Nakkevinkelen går fra -45 til 45.

<BlockImage module="roboids/Pio" id="set_neck_angle" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Nakkevinkel (grader) | Desimaltall -45 til 45 | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.set_neck_angle(15, wait=True)
```

## Beveger nakken seg? {#neck_moving}

Returnerer true hvis nakken er i bevegelse, og false hvis den står stille.

<BlockImage module="roboids/Pio" id="neck_moving" />

### Parametere

(ingen)

### Python
```python
pio = Pio(0)

pio.neck_moving()
```

## Sett øyenfargen {#set_eye_color}

Angir fargen på øyelysdiodene til Piobot.  
Du kan endre fargen på det venstre øyet, det høyre øyet eller begge.  
Velger du en av de ferdige fargene, gjøres den om til et **fargenavn** (en engelsk streng) i kallet. (Koden lages med fargenavnet, ikke med R-, G- og B-tall.)

<BlockImage module="roboids/Pio" id="set_eye_color" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Øye som skal styres | venstre(left), høyre(right), begge(both) | - |
| color | Nedtrekksalternativ | Ferdig farge → gjøres om til et fargenavn (engelsk) | svart(black), rød(red), gul(yellow), grønn(green), cyan(cyan), blå(blue), magenta(magenta), hvit(white) | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', 'red')
```

## Sett øyenfargen med en blokk fra Farge-kategorien {#set_eye_color_with_block}

Angir fargen på øyelysdiodene til Piobot med blokkene i Farge-kategorien.  
Du kan endre fargen på det venstre øyet, det høyre øyet eller begge.

<BlockImage module="roboids/Pio" id="set_eye_color_with_block" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Øye som skal styres | venstre(left), høyre(right), begge(both) | - |
| data | Inndata (farge) | [R, G, B]-tabell | En blokk fra Farge-kategorien eller `[0~255, 0~255, 0~255]` | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', *Utils.color('red'))
```

## Endre øyenfargen med RGB {#change_by_rgb}

Endrer fargen på øyelysdiodene til Piobot med de R-, G- og B-verdiene du angir.  
Du kan sette fargen på det venstre øyet, det høyre øyet eller begge.

<BlockImage module="roboids/Pio" id="change_by_rgb" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Øye som skal styres | venstre(left), høyre(right), begge(both) | - |
| r | Inndata (felt) | Endring i rødt | Heltall -255 til 255 | 0 |
| g | Inndata (felt) | Endring i grønt | Heltall -255 til 255 | 0 |
| b | Inndata (felt) | Endring i blått | Heltall -255 til 255 | 0 |

### Python
```python
pio = Pio(0)

pio.change_eye_color('both', 10, 0, 0)
```

## Sett øyemønsteret {#set_eye_pattern}

Angir mønsteret til øynene, og hvilken farge hvert øye skal ha når mønsteret starter.

<BlockImage module="roboids/Pio" id="set_eye_pattern" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| pattern | Nedtrekksalternativ | Type mønster | av(reset), blink(blink), dimming(dimming), regnbue(rainbow) | - |
| left | Nedtrekksalternativ | Fargen på det venstre øyet | standard(black), rød(red), gul(yellow), grønn(green), cyan(cyan), blå(blue), magenta(magenta), hvit(white) | white |
| right | Nedtrekksalternativ | Fargen på det høyre øyet | (samme som left) | white |

### Python
```python
pio = Pio(0)

pio.set_eye_pattern('dimming', 'green', 'red')
```

## Slå av øyet {#turn_off}

Fjerner fargen på øyet.

<BlockImage module="roboids/Pio" id="turn_off" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Øye som skal styres | venstre(left), høyre(right), begge(both) | both |

### Python
```python
pio = Pio(0)

pio.turn_off('both')
```

## Sett summelyden {#sound_buzz}

Angir summelyden til Piobot med den frekvensen du velger.  
Frekvensen kan gå fra 27.5 Hz til 6553.5 Hz.  
Skriver du inn en verdi utenfor dette området, kommer det ingen summelyd.

<BlockImage module="roboids/Pio" id="sound_buzz" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| hz | Inndata (blokk) | Frekvens (Hz) | Desimaltall 27.5 til 6553.5 | - |

### Python
```python
pio = Pio(0)

pio.sound_buzz(440)
```

## Spill tonen {#sound_note}

Piobot spiller den tonen du velger.

<BlockImage module="roboids/Pio" id="sound_note" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| note | Nedtrekksalternativ | Tone | Do(C), Do#/Re♭(C#), Re(D), Re#/Mi♭(D#), Mi(E), Fa(F), Fa#/Sol♭(F#), Sol(G), Sol#/La♭(G#), La(A), La#/Si♭(A#), Si(B) | - |
| octave | Nedtrekksalternativ | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
pio = Pio(0)

pio.sound_note('D', 5)
```

## Spill av lydklipp {#sound_clip}

Piobot spiller av et bestemt lydklipp.  
Krysser du av for vent, venter kjøringen til avspillingen er ferdig.

<BlockImage module="roboids/Pio" id="sound_clip" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| clip | Nedtrekksalternativ | Navn på lydklipp | `'mute'`, `'beep'`, `'beep2'`, `'beep3'`, `'siren'`, `'engine'`, `'robot'`, `'connect'` med flere | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_clip('siren', wait=True)
```

## Spill av melodi {#sound_melody}

Piobot spiller av en bestemt melodi.  
Krysser du av for vent, venter kjøringen til avspillingen er ferdig.

<BlockImage module="roboids/Pio" id="sound_melody" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| melody | Nedtrekksalternativ | Navn på melodi | `'mute'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` med flere | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_melody('happy', wait=True)
```

## Slå av lyd {#sound_off}

Slår av lyden til Piobot.

<BlockImage module="roboids/Pio" id="sound_off" />

### Parametere

(ingen)

### Python
```python
pio = Pio(0)

pio.sound_off()
```

## Spilles det lyd? {#sound_playing}

Returnerer true hvis det spilles en lyd, og false hvis det ikke gjør det.

<BlockImage module="roboids/Pio" id="sound_playing" />

### Parametere

(ingen)

### Python
```python
pio = Pio(0)

pio.sound_playing()
```

## Hjulhastigheten {#wheel_speed}

Hastigheten til et bestemt hjul

<BlockImage module="roboids/Pio" id="wheel_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Hjul som skal leses | venstre(left), høyre(right) | - |

### Python
```python
pio = Pio(0)

pio.wheel_speed('left')
```

## Signalstyrken {#signal_strength}

Signalstyrken

<BlockImage module="roboids/Pio" id="signal_strength" />

### Parametere

(ingen)

### Python
```python
pio = Pio(0)

pio.signal_strength()
```

## Batteriet {#battery}

Batterispenningen

<BlockImage module="roboids/Pio" id="battery" />

### Parametere

(ingen)

### Python
```python
pio = Pio(0)

pio.battery()
```

## Tastaturknapp {#keypad}

Registrerer hvilken knapp på tastaturet brukeren trykte på sist.

<BlockImage module="roboids/Pio" id="keypad" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| button | Nedtrekksalternativ | Knappen som skal registreres | kjør(play), gå fremover(forward), gå bakover(backward), gå til venstre(left), gå til høyre(right), handling(action), gjenta(repeat), slett(clear) | - |

### Python
```python
pio = Pio(0)

pio.keypad('forward')
```
