---
title: HamsterS
---

# HamsterS

## Instanserklæring {#instance}

Når du legger til en HamsterS-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
hamster_s = HamsterS(0)
# Når det finnes flere instanser
hamster_s_1 = HamsterS(1)
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Sett hjulhastigheten {#set_wheel_speed}

Bestemmer hjulhastigheten. Hastigheten går fra -100 til 100.

<BlockImage module="roboids/HamsterS" id="set_wheel_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Hjul som skal styres | venstre(left), høyre(right), begge(both) | - |
| speed | Inndata (blokk) | Hjulhastighet | Heltall -100 til 100, 0: stopp | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_wheel_speed('both', 50)
```

## Flytt en strekning {#move_distance}

Kjører den strekningen du angir, med den hastigheten hjulene har nå.  
Er hjulhastigheten ikke satt, kjører den fremover med standardhastigheten.  
Er strekningen 0, fortsetter den å kjøre med den hastigheten hjulene har nå.  
Krysser du av for vent, venter kjøringen til bevegelsen er ferdig.

<BlockImage module="roboids/HamsterS" id="move_distance" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Strekning som skal kjøres | Desimaltall 0 eller større | - |
| unit | Nedtrekksalternativ | Avstandsenhet | cm, mm, tomme(inch) | cm |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.move_distance(50, 'cm', wait=True)
```

## Flytt i et tidsrom {#move_time}

Kjører i det tidsrommet du angir, med den hastigheten hjulene har nå.  
Er hjulhastigheten ikke satt, kjører den fremover med standardhastigheten.  
Krysser du av for vent, venter kjøringen til bevegelsen er ferdig.

<BlockImage module="roboids/HamsterS" id="move_time" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Tid det skal kjøres (sekunder) | Desimaltall 0 eller større | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

# wait = TRUE
hamster_s.move_time(5, wait=True)
# wait = FALSE
hamster_s.move_time(5, wait=False)
```

## Snu på stedet {#turn_degree}

Angir hvilken retning og hvor mange grader roboten skal snu på stedet.  
Krysser du av for vent, venter kjøringen til rotasjonen er ferdig.

<BlockImage module="roboids/HamsterS" id="turn_degree" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Nedtrekksalternativ | Rotasjonsretning | venstre(left), høyre(right) | - |
| data | Inndata (blokk) | Rotasjonsvinkel (grader) | Desimaltall 0 eller større | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_degree('left', 90, wait=True)
```

## Endre hjulhastigheten {#change_speed}

Endrer hjulhastigheten til HamsterS.  
Den nye hjulhastigheten er den hastigheten hjulene har nå, pluss den hastigheten du skriver inn.

<BlockImage module="roboids/HamsterS" id="change_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Hjul som skal styres | venstre(left), høyre(right), begge(both) | - |
| speed | Inndata (blokk) | Hastighetsendring | Heltall -200 til 200 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_wheel_speed('both', 10)
```

## Stopp {#stop}

Stopper bevegelsen til HamsterS.

<BlockImage module="roboids/HamsterS" id="stop" />

### Parametere

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop()
```

## Beveger hjulet seg? {#wheel_moving}

Returnerer true hvis hjulet er i bevegelse, og false hvis det står stille.

<BlockImage module="roboids/HamsterS" id="wheel_moving" />

### Parametere

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_moving()
```

## Flytt ett trinn fremover på brettet {#grid_move}

Beveger seg ett trinn om gangen på brettet, etter hvordan brettet er delt inn.

<BlockImage module="roboids/HamsterS" id="grid_move" />

### Parametere

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_move()
```

## Snu én gang på brettet {#grid_turn}

Snur 90 grader i den retningen du angir, på brettet.

<BlockImage module="roboids/HamsterS" id="grid_turn" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Nedtrekksalternativ | Rotasjonsretning | venstre(left), høyre(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_turn('left')
```

## Roter rundt penneholderen {#pivot}

Angir rotasjonspunktet, retningen og vinkelen når du bruker penneholderen.  
Krysser du av for vent, venter kjøringen til rotasjonen er ferdig.

<BlockImage module="roboids/HamsterS" id="pivot" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| base | Nedtrekksalternativ | Rotasjonspunkt | venstre penn(left_pen), høyre penn(right_pen), venstre hjul(left_wheel), høyre hjul(right_wheel) | - |
| direction | Nedtrekksalternativ | Rotasjonsretning | fremover(forward), bakover(backward) | - |
| degree | Inndata (blokk) | Rotasjonsvinkel (grader) | Desimaltall 0 eller større | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot('left_pen', 'forward', 90, wait=True)
```

## Tegn en sirkel rundt penneholderen {#pivot_circle}

Angir rotasjonspunktet, retningen, radiusen og vinkelen når du tegner en sirkel med penneholderen.  
Krysser du av for vent, venter kjøringen til rotasjonen er ferdig.

<BlockImage module="roboids/HamsterS" id="pivot_circle" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| base | Nedtrekksalternativ | Rotasjonspunkt | venstre penn(left_pen), høyre penn(right_pen) | - |
| direction | Nedtrekksalternativ | Rotasjonsretning | venstre fremover(left_forward), venstre bakover(left_backward), høyre fremover(right_forward), høyre bakover(right_backward) | - |
| degree | Inndata (blokk) | Rotasjonsvinkel (grader) | Desimaltall 0 eller større | - |
| radius | Inndata (blokk) | Rotasjonsradius | Desimaltall 0 eller større | - |
| unit | Nedtrekksalternativ | Radiusenhet | cm, mm, tomme(inch) | cm |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot_circle('left_pen', 'left_forward', 90, 1, 'cm', wait=True)
```

## Følg en linje med sensoren {#trace_mode}

HamsterS følger en linje i en bestemt farge ved hjelp av gulvsensoren.

<BlockImage module="roboids/HamsterS" id="trace_mode" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| floor | Nedtrekksalternativ | Gulvsensor som skal følge linjen | venstre(left), høyre(right), midten(center) | - |
| line | Nedtrekksalternativ | Linjens farge | svart(black), hvit(white) | black |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_line('left', 'black')
```

## Kjør gjennom et kryss og stopp ved det neste {#trace_until_grid}

HamsterS kjører i den retningen du angir i krysset, og fortsetter til den møter neste kryss.  
Krysser du av for vent, venter kjøringen til bevegelsen er ferdig.  

<BlockImage module="roboids/HamsterS" id="trace_until_grid" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Nedtrekksalternativ | Retning i krysset | sving til venstre(left), sving til høyre(right), kjør fremover(forward), u-sving(uturn) | - |
| line | Nedtrekksalternativ | Linjens farge | svart(black), hvit(white) | black |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_intersection('left', 'black', wait=True)
```

## Sett linjefølgingshastigheten {#set_trace_speed}

Angir hastigheten når roboten følger en linje. Hastigheten går fra 1 til 10.

<BlockImage module="roboids/HamsterS" id="set_trace_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Linjefølgingshastighet | Heltall 1 til 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_speed(5)
```

## Sett linjefølgingsforsterkningen {#set_trace_gain}

Angir hvor mye retningen endrer seg når roboten følger en linje. Endringen går fra 1 til 10.

<BlockImage module="roboids/HamsterS" id="set_trace_gain" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Retningsendring | Heltall 1 til 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_gain(5)
```

## Stopp linjefølging {#stop_trace}

Avslutter linjefølgingen til HamsterS.

<BlockImage module="roboids/HamsterS" id="stop_trace" />

### Parametere

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop_trace()
```

## Sett LED-fargen {#set_led_color}

Angir fargen på LED-lyset til HamsterS.  
Velger du en farge i fargepaletten, gjøres den om til et **fargenavn** (en engelsk streng) i kallet. (Koden lages med fargenavnet, ikke med R-, G- og B-tall.)

<BlockImage module="roboids/HamsterS" id="set_led_color" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | LED-lys som skal styres | venstre(left), høyre(right), begge(both) | - |
| color | Farge | Velg fra fargepaletten → gjøres om til et fargenavn (engelsk) | Fargenavn: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', 'red')
```

## Sett LED-fargen med en blokk fra Farge-kategorien {#set_led_color_with_block}

Tar imot en blokk fra Farge-kategorien (`[R, G, B]`) som inndata og angir fargen på LED-lyset.

<BlockImage module="roboids/HamsterS" id="set_led_color_with_block" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | LED-lys som skal styres | venstre(left), høyre(right), begge(both) | - |
| data | Inndata (farge) | En blokk fra Farge-kategorien eller en `[R, G, B]`-tabell | `[0~255, 0~255, 0~255]` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', *Utils.color_rgb(255, 128, 0))
```

## Endre LED-fargen med RGB {#change_by_rgb}

Endrer fargen på LED-lyset til HamsterS med de R-, G- og B-verdiene du angir.

<BlockImage module="roboids/HamsterS" id="change_by_rgb" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | LED-lys som skal styres | venstre(left), høyre(right), begge(both) | - |
| r | Inndata (felt) | Endring i rødt | Heltall -255 til 255 | 0 |
| g | Inndata (felt) | Endring i grønt | Heltall -255 til 255 | 0 |
| b | Inndata (felt) | Endring i blått | Heltall -255 til 255 | 0 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_led_color('both', 10, 0, 0)
```

## Slå av LED-lyset {#turn_off}

Fjerner fargen på LED-lyset.

<BlockImage module="roboids/HamsterS" id="turn_off" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | LED-lys som skal styres | venstre(left), høyre(right), begge(both) | both |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_off('both')
```

## Sett summelyden {#sound_buzz}

Angir summelyden til HamsterS med den frekvensen du velger.  
Frekvensen kan gå fra 122.1 Hz til 4186.0 Hz.  
Skriver du inn en verdi utenfor dette området, kommer det ingen summelyd.

<BlockImage module="roboids/HamsterS" id="sound_buzz" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| hz | Inndata (blokk) | Frekvens (Hz) | Desimaltall 122.1 til 4186.0 (ellers 0) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_buzz(440)
```

## Spill tonen {#sound_note}

HamsterS spiller den tonen du velger.

<BlockImage module="roboids/HamsterS" id="sound_note" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| note | Nedtrekksalternativ | Tone | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Nedtrekksalternativ | Oktav | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_note('D', 5)
```

## Spill lydklippet {#sound_clip}

HamsterS spiller av et bestemt lydklipp.  
Krysser du av for vent, venter kjøringen til avspillingen er ferdig.

<BlockImage module="roboids/HamsterS" id="sound_clip" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| clip | Nedtrekksalternativ | Navn på lydklipp | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'happy'`, `'angry'`, `'sad'` med flere | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_clip('siren', wait=True)
```

## Slå av lyd {#sound_off}

Slår av lyden til HamsterS.

<BlockImage module="roboids/HamsterS" id="sound_off" />

### Parametere

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_off()
```

## Spilles det lyd? {#sound_playing}

Returnerer true hvis det spilles en lyd, og false hvis det ikke gjør det.

<BlockImage module="roboids/HamsterS" id="sound_playing" />

### Parametere

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_playing()
```

## Hjulhastigheten {#wheel_speed}

Hastigheten til et bestemt hjul

<BlockImage module="roboids/HamsterS" id="wheel_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Hjul som skal leses | venstre(left), høyre(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_speed('left')
```

## Avstandssensorens verdi {#proximity}

Verdien til en bestemt avstandssensor

<BlockImage module="roboids/HamsterS" id="proximity" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Sensorposisjon som måles | venstre(left), høyre(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.proximity('left')
```

## Gulvsensorens verdi {#floor}

Verdien til en bestemt gulvsensor

<BlockImage module="roboids/HamsterS" id="floor" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Sensorposisjon som måles | venstre(left), høyre(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.floor('left')
```

## Akselerasjonsverdien {#acceleration}

Tyngdeakselerasjonen langs en bestemt akse

<BlockImage module="roboids/HamsterS" id="acceleration" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Akse som måles | x-akse(x), y-akse(y), z-akse(z) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.acceleration('x')
```

## Lysstyrken {#light}

Verdien til lysstyrkesensoren

<BlockImage module="roboids/HamsterS" id="light" />

### Parametere

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.light()
```

## Temperaturen {#temperature}

Verdien til temperatursensoren

<BlockImage module="roboids/HamsterS" id="temperature" />

### Parametere

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.temperature()
```

## Signalstyrken {#signal_strength}

Signalstyrken

<BlockImage module="roboids/HamsterS" id="signal_strength" />

### Parametere

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.signal_strength()
```

## Batteriet {#battery}

Batterispenningen

<BlockImage module="roboids/HamsterS" id="battery" />

### Parametere

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.battery()
```

## Har tilstanden endret seg? {#state_change}

Om robotens tilstand har endret seg

<BlockImage module="roboids/HamsterS" id="state_change" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Type tilstand | 0 til 7 (se tabellen nedenfor) | - |

| unit | Betydning | Python |
|------|------|--------|
| 0 | Vippet fremover | `acceleration('x') > 5000` |
| 1 | Vippet bakover | `acceleration('x') < -5000` |
| 2 | Vippet mot venstre | `acceleration('y') > 5000` |
| 3 | Vippet mot høyre | `acceleration('y') < -5000` |
| 4 | Snudd opp ned | `acceleration('z') > 0` |
| 5 | Ikke snudd | `acceleration('z') < -3000` |
| 6 | Hindring/hånd registrert | `proximity('left') > 50 or proximity('right') > 50` |
| 7 | Banking | `tap()` |

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

## Sett inngangsmodus for I/O-porten {#io_mode}

Angir inngangsmodus for I/O-porten.

<BlockImage module="roboids/HamsterS" id="io_mode" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | I/O-port | A(a), B(b), begge(both) | - |
| option | Nedtrekksalternativ | I/O-modus | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.io_mode('both', 'analog_input')
```

## Sett utgangen på I/O-porten {#set_output}

Angir utgangsverdien på den I/O-porten du velger.

<BlockImage module="roboids/HamsterS" id="set_output" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | I/O-port | A(a), B(b), begge(both) | - |
| data | Inndata (blokk) | Utgangsverdi | Heltall 0 til 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_output('a', 90)
```

## Endre utgangen på I/O-porten {#change_output}

Endrer utgangsverdien på den I/O-porten du velger.

<BlockImage module="roboids/HamsterS" id="change_output" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | I/O-port | A(a), B(b), begge(both) | - |
| data | Inndata (blokk) | Endring i utgangsverdien | Heltall | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_output('a', 10)
```

## Åpne / lukke griperen {#gripper}

Åpner eller lukker griperen til HamsterS.  
Alt etter verdien av unit kalles den ene eller den andre av de to metodene.

<BlockImage module="roboids/HamsterS" id="gripper" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Handling | åpne(open), lukke(close) | - |

### Python
```python
hamster_s = HamsterS(0)

# unit = "open"
hamster_s.open_gripper()
# unit = "close"
hamster_s.close_gripper()
```

## Sett utskytervinkelen {#shooter}

Styrer utskyteren ved å angi vinkelen. Vinkelen går fra 0 til 180.

<BlockImage module="roboids/HamsterS" id="shooter" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Utskytervinkel | Heltall 0 til 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.shooter(45)
```

## Inngangsverdien på I/O-porten {#input}

Returnerer inngangsverdien på I/O-porten til HamsterS.

<BlockImage module="roboids/HamsterS" id="input" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | I/O-port | A(a), B(b) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.get_input('a')
```
