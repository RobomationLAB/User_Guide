---
title: Turtle
---

# Turtle

## Instanserklæring {#instance}

Når du legger til en Turtle-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
turtle = Turtle(0)
# Når det finnes flere instanser
turtle_1 = Turtle(1)
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Sett hjulhastigheten {#set_wheel_speed}

Bestemmer hjulhastigheten. Hastigheten går fra -100 til 100.

<BlockImage module="roboids/Turtle" id="set_wheel_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Hjul som skal styres | venstre(left), høyre(right), begge(both) | - |
| speed | Inndata (blokk) | Hjulhastighet | Heltall -100 til 100, 0: stopp | - |

### Python
```python
turtle = Turtle(0)

turtle.set_wheel_speed('both', 50)
```

## Flytt en strekning {#move_distance}

Angir strekningen roboten skal kjøre.  
Er hjulhastigheten ikke satt, kjører den ikke.  
Er strekningen 0, fortsetter den å kjøre med den hastigheten hjulene har nå.  
Krysser du av for vent, venter kjøringen til bevegelsen er ferdig.

<BlockImage module="roboids/Turtle" id="move_distance" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Strekning som skal kjøres | Desimaltall 0 eller større | - |
| unit | Nedtrekksalternativ | Avstandsenhet | cm, mm, tomme(inch) | cm |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.move_distance(50, 'cm', wait=True)
```

## Flytt i et tidsrom {#move_time}

Kjører i det tidsrommet du angir, med den hastigheten hjulene har nå.  
Er hjulhastigheten ikke satt, kjører den fremover med standardhastigheten.  
Krysser du av for vent, venter kjøringen til bevegelsen er ferdig.

<BlockImage module="roboids/Turtle" id="move_time" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Tid det skal kjøres (sekunder) | Desimaltall 0 eller større | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

# wait = TRUE
turtle.move_time(5, wait=True)
# wait = FALSE
turtle.move_time(0.5, wait=False)
```

## Snu på stedet {#turn_degree}

Angir hvilken retning og hvor mange grader roboten skal snu på stedet.  
Krysser du av for vent, venter kjøringen til rotasjonen er ferdig.

<BlockImage module="roboids/Turtle" id="turn_degree" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Nedtrekksalternativ | Rotasjonsretning | venstre(left), høyre(right) | - |
| data | Inndata (blokk) | Rotasjonsvinkel (grader) | Desimaltall 0 eller større | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.turn_degree('left', 90, wait=True)
```

## Endre hjulhastigheten {#change_speed}

Endrer hjulhastigheten til Turtle.  
Den nye hjulhastigheten er den hastigheten hjulene har nå, pluss den hastigheten du skriver inn.

<BlockImage module="roboids/Turtle" id="change_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Hjul som skal styres | venstre(left), høyre(right), begge(both) | - |
| speed | Inndata (blokk) | Hastighetsendring | Heltall -200 til 200 | - |

### Python
```python
turtle = Turtle(0)

turtle.change_wheel_speed('both', 10)
```

## Stopp {#stop}

Stopper bevegelsen til Turtle.

<BlockImage module="roboids/Turtle" id="stop" />

### Parametere

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.stop()
```

## Beveger hjulet seg? {#wheel_moving}

Returnerer true hvis hjulet er i bevegelse, og false hvis det står stille.

<BlockImage module="roboids/Turtle" id="wheel_moving" />

### Parametere

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.wheel_moving()
```

## Roter rundt hjulet {#pivot}

Angir rotasjonspunktet, retningen og vinkelen.  
Krysser du av for vent, venter kjøringen til rotasjonen er ferdig.

<BlockImage module="roboids/Turtle" id="pivot" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| base | Nedtrekksalternativ | Hjulet det roteres rundt | venstre hjul(left_wheel), høyre hjul(right_wheel) | - |
| direction | Nedtrekksalternativ | Rotasjonsretning | fremover(forward), bakover(backward) | - |
| data | Inndata (blokk) | Rotasjonsvinkel (grader) | Desimaltall 0 eller større | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot('left_wheel', 'forward', 90, wait=True)
```

## Tegn en sirkel {#pivot_circle}

Angir retningen, radiusen og vinkelen når du tegner en sirkel med pennen.  
Krysser du av for vent, venter kjøringen til rotasjonen er ferdig.

<BlockImage module="roboids/Turtle" id="pivot_circle" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Nedtrekksalternativ | Rotasjonsretning | venstre fremover(left_forward), venstre bakover(left_backward), høyre fremover(right_forward), høyre bakover(right_backward) | - |
| degree | Inndata (blokk) | Rotasjonsvinkel (grader) | Desimaltall 0 eller større | - |
| radius | Inndata (blokk) | Rotasjonsradius | Desimaltall 0 eller større | - |
| unit | Nedtrekksalternativ | Radiusenhet | cm, mm, tomme(inch) | cm |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot_circle('left_forward', 90, 1, 'cm', wait=True)
```

## Følg en linje med sensoren {#trace_line}

Følger en linje i en bestemt farge ved hjelp av fargesensoren i gulvet.

<BlockImage module="roboids/Turtle" id="trace_line" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| line | Nedtrekksalternativ | Fargen på linjen som skal følges | svart(black), rød(red), grønn(green), blå(blue), alle farger(any) | black |

### Python
```python
turtle = Turtle(0)

turtle.trace_line('black')
```

## Følg linjen til en bestemt farge {#trace_line_until_color}

Følger en linje i farge A ved hjelp av fargesensoren i gulvet, til den møter farge B.

<BlockImage module="roboids/Turtle" id="trace_line_until_color" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| line | Nedtrekksalternativ | Fargen på linjen som skal følges | svart(black), rød(red), grønn(green), blå(blue), alle farger(any) | - |
| color | Nedtrekksalternativ | Fargen den skal stoppe ved | svart(black), rød(red), grønn(green), cyan(cyan), blå(blue), magenta(magenta), alle farger(any) | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_line_until_color('black', 'red', wait=True)
```

## Kjør gjennom et kryss og stopp ved det neste {#intersection}

Turtle kjører i den retningen du angir i krysset, og fortsetter til den møter neste kryss.  
Krysser du av for vent, venter kjøringen til bevegelsen er ferdig.  

<BlockImage module="roboids/Turtle" id="intersection" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Nedtrekksalternativ | Retning i krysset | kjør fremover(forward), venstre(left), høyre(right), u-sving(uturn) | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_intersection('left', wait=True)
```

## Sett linjefølgingshastigheten {#set_trace_speed}

Angir hastigheten når roboten følger en linje. Hastigheten går fra 1 til 10.

<BlockImage module="roboids/Turtle" id="set_trace_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Linjefølgingshastighet | Heltall 1 til 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_speed(5)
```

## Sett linjefølgingsforsterkningen {#set_trace_gain}

Angir hvor mye retningen endrer seg når roboten følger en linje. Endringen går fra 1 til 10.

<BlockImage module="roboids/Turtle" id="set_trace_gain" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Retningsendring | Heltall 1 til 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_gain(5)
```

## Stopp linjefølging {#stop_trace}

Avslutter linjefølgingen til Turtle.

<BlockImage module="roboids/Turtle" id="stop_trace" />

### Parametere

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.stop_trace()
```

## Sett fargen på hodelysdioden {#set_led_color}

Angir fargen på hodelysdioden til Turtle.  
Velger du en farge i fargepaletten, gjøres den om til et **fargenavn** (en engelsk streng) i kallet. (Koden lages med fargenavnet, ikke med R-, G- og B-tall.)

<BlockImage module="roboids/Turtle" id="set_led_color" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Farge | Velg fra fargepaletten → gjøres om til et fargenavn (engelsk) | Fargenavn: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color('red')
```

## Sett hodelysdioden med en blokk fra Farge-kategorien {#set_led_color_with_block}

Tar imot utdataene fra en blokk i Farge-kategorien (`[R, G, B]`) som inndata og angir fargen på hodelysdioden.

<BlockImage module="roboids/Turtle" id="set_led_color_with_block" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (farge) | En blokk fra Farge-kategorien eller en `[R, G, B]`-tabell | `[0~255, 0~255, 0~255]` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color(*Utils.color('red'))
```

## Endre LED-fargen med RGB {#change_by_rgb}

Legger de R-, G- og B-endringene du skriver inn, til fargen hodelysdioden har nå, og setter den nye fargen.

<BlockImage module="roboids/Turtle" id="change_by_rgb" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| r | Inndata (felt) | Endring i rødt | Heltall -255 til 255 | 0 |
| g | Inndata (felt) | Endring i grønt | Heltall -255 til 255 | 0 |
| b | Inndata (felt) | Endring i blått | Heltall -255 til 255 | 0 |

### Python
```python
turtle = Turtle(0)

turtle.change_led_color(10, 0, 0)
```

## Slå av hodelysdioden {#turn_off}

Fjerner fargen på hodelysdioden.

<BlockImage module="roboids/Turtle" id="turn_off" />

### Parametere

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.turn_off()
```

## Sett summelyden {#sound_buzz}

Angir summelyden til Turtle med den frekvensen du velger.

<BlockImage module="roboids/Turtle" id="sound_buzz" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| hz | Inndata (blokk) | Frekvens (Hz) | Desimaltall 0 til 6553.5 | - |

### Python
```python
turtle = Turtle(0)

turtle.sound_buzz(440)
```

## Spill tonen {#sound_note}

Turtle spiller den tonen du velger.

<BlockImage module="roboids/Turtle" id="sound_note" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| note | Nedtrekksalternativ | Tone | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Nedtrekksalternativ | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
turtle = Turtle(0)

turtle.sound_note('D', 5)
```

## Spill lydklipp {#sound_clip}

Turtle spiller av et bestemt lydklipp.

<BlockImage module="roboids/Turtle" id="sound_clip" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| clip | Nedtrekksalternativ | Navn på lydklipp | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` med flere | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.sound_clip('siren', wait=True)
```

## Slå av lyd {#sound_off}

Slår av lyden til Turtle.

<BlockImage module="roboids/Turtle" id="sound_off" />

### Parametere

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.sound_off()
```

## Spilles det lyd? {#sound_playing}

Returnerer true hvis det spilles en lyd, og false hvis det ikke gjør det.

<BlockImage module="roboids/Turtle" id="sound_playing" />

### Parametere

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.sound_playing()
```

## Hjulhastigheten {#wheel_speed}

Hastigheten til et bestemt hjul

<BlockImage module="roboids/Turtle" id="wheel_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Hjul som skal leses | venstre(left), høyre(right) | - |

### Python
```python
turtle = Turtle(0)

turtle.wheel_speed('left')
```

## Gulvfargesensorens verdi {#floor}

Verdien til fargesensoren i gulvet

<BlockImage module="roboids/Turtle" id="floor" />

### Parametere

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.floor()
```

## Kortfargens navn {#card_color}

Navnet på fargen til kortet som fargesensoren i gulvet leser

<BlockImage module="roboids/Turtle" id="card_color" />

### Parametere

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.card_color()
```

## Kortets fargemønster {#card_pattern}

Fargemønsteret til kortet som fargesensoren i gulvet leser

<BlockImage module="roboids/Turtle" id="card_pattern" />

### Parametere

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.card_pattern()
```

## Akselerasjonsverdien {#acceleration}

Tyngdeakselerasjonen langs en bestemt akse

<BlockImage module="roboids/Turtle" id="acceleration" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Akse som måles | x-akse(x), y-akse(y), z-akse(z) | - |

### Python
```python
turtle = Turtle(0)

turtle.acceleration('x')
```

## Temperaturen {#temperature}

Verdien til temperatursensoren

<BlockImage module="roboids/Turtle" id="temperature" />

### Parametere

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.temperature()
```

## Signalstyrken {#signal_strength}

Signalstyrken

<BlockImage module="roboids/Turtle" id="signal_strength" />

### Parametere

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.signal_strength()
```

## Batteriet {#battery}

Batterispenningen

<BlockImage module="roboids/Turtle" id="battery" />

### Parametere

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.battery()
```

## Berører den en bestemt farge? {#color_read}

Måler med fargesensoren til Turtle om roboten berører den fargen du angir, og returnerer **sann (True) / usann (False)**.

<BlockImage module="roboids/Turtle" id="color_read" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Nedtrekksalternativ | Fargenavn | unknown, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_color('red')
```

## Er kortets fargemønster ~ ? {#pattern_read}

Returnerer **sann (True) / usann (False)** ut fra om fargemønsteret på kortet som fargesensoren leser, stemmer.

<BlockImage module="roboids/Turtle" id="pattern_read" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| pattern | Nedtrekksalternativ | Navn på kortmønster | `'red_yellow'`, `'red_green'`, `'blue_red'` | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_pattern('red_yellow')
```

## Bakknappens tilstand {#button}

Om knappen på ryggen holdes nede eller er klikket

<BlockImage module="roboids/Turtle" id="button" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| event | Nedtrekksalternativ | Type knappetilstand | trykket(pressed), klikket(click), langt klikk(long_click) | - |  

### Python
```python
turtle = Turtle(0)

turtle.button('pressed')
```

## Har tilstanden endret seg? {#state_change}

Om robotens tilstand har endret seg

<BlockImage module="roboids/Turtle" id="state_change" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Type tilstand | 0 til 5 (se tabellen nedenfor) | - |

| unit | Betingelse |
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
