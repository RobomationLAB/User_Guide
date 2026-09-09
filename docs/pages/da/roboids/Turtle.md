---
title: Turtle
---

# Turtle

## Instanserklæring {#instance}

Når du tilføjer en Turtle-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
turtle = Turtle(0)
# Når der er flere instanser
turtle_1 = Turtle(1)
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Indstil hjulhastigheden {#set_wheel_speed}

Bestemmer hjulenes hastighed. Hastigheden går fra -100 til 100.

<BlockImage module="roboids/Turtle" id="set_wheel_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Hjul der skal styres | venstre(left), højre(right), begge(both) | - |
| speed | Input (blok) | Hjulhastighed | Heltal -100 til 100, 0: stop | - |

### Python
```python
turtle = Turtle(0)

turtle.set_wheel_speed('both', 50)
```

## Kør en strækning {#move_distance}

Indstiller, hvor langt robotten skal køre.  
Hvis hjulhastigheden ikke er indstillet, kører den ikke.  
Hvis strækningen er 0, fortsætter den med at køre efter den nuværende hjulhastighed.  
Hvis vent er markeret, venter kørslen, indtil bevægelsen er færdig.

<BlockImage module="roboids/Turtle" id="move_distance" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Strækning der skal køres | Reelt tal 0 eller større | - |
| unit | Rullemenupunkt | Længdeenhed | cm, mm, tomme(inch) | cm |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.move_distance(50, 'cm', wait=True)
```

## Kør i et stykke tid {#move_time}

Kører i det angivne stykke tid med den nuværende hjulhastighed.  
Hvis hjulhastigheden ikke er indstillet, kører den fremad med standardhastigheden.  
Hvis vent er markeret, venter kørslen, indtil bevægelsen er færdig.

<BlockImage module="roboids/Turtle" id="move_time" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Tid der skal køres (sekunder) | Reelt tal 0 eller større | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

# wait = TRUE
turtle.move_time(5, wait=True)
# wait = FALSE
turtle.move_time(0.5, wait=False)
```

## Drej på stedet {#turn_degree}

Indstiller, til hvilken side og hvor mange grader robotten skal dreje på stedet.  
Hvis vent er markeret, venter kørslen, indtil drejningen er færdig.

<BlockImage module="roboids/Turtle" id="turn_degree" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullemenupunkt | Drejeretning | venstre(left), højre(right) | - |
| data | Input (blok) | Drejevinkel (grader) | Reelt tal 0 eller større | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.turn_degree('left', 90, wait=True)
```

## Ændr hjulhastigheden {#change_speed}

Ændrer hjulhastigheden på Turtle.  
Den nye hjulhastighed bliver den nuværende hjulhastighed plus den hastighed, du angiver.

<BlockImage module="roboids/Turtle" id="change_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Hjul der skal styres | venstre(left), højre(right), begge(both) | - |
| speed | Input (blok) | Hastighedsændring | Heltal -200 til 200 | - |

### Python
```python
turtle = Turtle(0)

turtle.change_wheel_speed('both', 10)
```

## Stop {#stop}

Standser Turtles bevægelse.

<BlockImage module="roboids/Turtle" id="stop" />

### Parametre

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.stop()
```

## Bevæger hjulet sig? {#wheel_moving}

Returnerer true, hvis hjulet bevæger sig, og false, hvis det står stille.

<BlockImage module="roboids/Turtle" id="wheel_moving" />

### Parametre

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.wheel_moving()
```

## Drej omkring et hjul {#pivot}

Indstiller, hvad robotten skal dreje omkring, samt retning og vinkel.  
Hvis vent er markeret, venter kørslen, indtil drejningen er færdig.

<BlockImage module="roboids/Turtle" id="pivot" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| base | Rullemenupunkt | Hjul som drejningen sker omkring | venstre hjul(left_wheel), højre hjul(right_wheel) | - |
| direction | Rullemenupunkt | Drejeretning | fremad(forward), bagud(backward) | - |
| data | Input (blok) | Drejevinkel (grader) | Reelt tal 0 eller større | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot('left_wheel', 'forward', 90, wait=True)
```

## Tegn en cirkel {#pivot_circle}

Indstiller retning, radius og vinkel, når du tegner en cirkel med pennen.  
Hvis vent er markeret, venter kørslen, indtil drejningen er færdig.

<BlockImage module="roboids/Turtle" id="pivot_circle" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullemenupunkt | Drejeretning | venstre fremad(left_forward), venstre bagud(left_backward), højre fremad(right_forward), højre bagud(right_backward) | - |
| degree | Input (blok) | Drejevinkel (grader) | Reelt tal 0 eller større | - |
| radius | Input (blok) | Drejeradius | Reelt tal 0 eller større | - |
| unit | Rullemenupunkt | Radiussens enhed | cm, mm, tomme(inch) | cm |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot_circle('left_forward', 90, 1, 'cm', wait=True)
```

## Følg en linje med sensoren {#trace_line}

Følger en linje i en bestemt farve ved hjælp af farvesensoren på undersiden.

<BlockImage module="roboids/Turtle" id="trace_line" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| line | Rullemenupunkt | Linjens farve der skal følges | sort(black), rød(red), grøn(green), blå(blue), alle farver(any) | black |

### Python
```python
turtle = Turtle(0)

turtle.trace_line('black')
```

## Følg en linje indtil en bestemt farve {#trace_line_until_color}

Følger en linje i farven A, indtil farven B mødes, ved hjælp af farvesensoren på undersiden.

<BlockImage module="roboids/Turtle" id="trace_line_until_color" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| line | Rullemenupunkt | Linjens farve der skal følges | sort(black), rød(red), grøn(green), blå(blue), alle farver(any) | - |
| color | Rullemenupunkt | Farve der skal stoppes ved | sort(black), rød(red), grøn(green), cyan(cyan), blå(blue), magenta(magenta), alle farver(any) | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_line_until_color('black', 'red', wait=True)
```

## Kør gennem et vejkryds og stop ved det næste {#intersection}

Turtle kører til den angivne side i vejkrydset og fortsætter derefter, indtil den møder det næste vejkryds.  
Hvis vent er markeret, venter kørslen, indtil bevægelsen er færdig.  

<BlockImage module="roboids/Turtle" id="intersection" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullemenupunkt | Retning i vejkrydset | kør fremad(forward), venstre(left), højre(right), u-vending(uturn) | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_intersection('left', wait=True)
```

## Indstil linjefølgningshastigheden {#set_trace_speed}

Indstiller hastigheden for linjefølgningen. Hastigheden går fra 1 til 10.

<BlockImage module="roboids/Turtle" id="set_trace_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Linjefølgningshastighed | Heltal 1 til 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_speed(5)
```

## Indstil linjefølgningens forstærkning {#set_trace_gain}

Indstiller, hvor meget retningen ændres ved linjefølgning. Værdien går fra 1 til 10.

<BlockImage module="roboids/Turtle" id="set_trace_gain" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Retningsændring | Heltal 1 til 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_gain(5)
```

## Stop linjefølgning {#stop_trace}

Afslutter linjefølgningen hos Turtle.

<BlockImage module="roboids/Turtle" id="stop_trace" />

### Parametre

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.stop_trace()
```

## Indstil LED-farven {#set_led_color}

Indstiller farven på hoved-LED'en hos Turtle.  
Når du vælger en farve i farvepaletten, omdannes den til et **farvenavn** (en engelsk streng) i kaldet. (Koden dannes med farvenavnet, ikke med talværdier for R, G og B.)

<BlockImage module="roboids/Turtle" id="set_led_color" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Farve | Valg i farvepaletten → omdannes til et farvenavn (engelsk) | Farvenavn: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color('red')
```

## Indstil LED-farven med en blok fra Farve-kategorien {#set_led_color_with_block}

Modtager output fra en blok i Farve-kategorien (`[R, G, B]`) som input og indstiller hoved-LED'ens farve.

<BlockImage module="roboids/Turtle" id="set_led_color_with_block" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (farve) | Blok fra Farve-kategorien eller matricen `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color(*Utils.color('red'))
```

## Ændr LED-farven med RGB {#change_by_rgb}

Lægger de angivne R-, G- og B-ændringer til hoved-LED'ens nuværende farve og indstiller den nye farve.

<BlockImage module="roboids/Turtle" id="change_by_rgb" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| r | Input (felt) | Ændring af rød | Heltal -255 til 255 | 0 |
| g | Input (felt) | Ændring af grøn | Heltal -255 til 255 | 0 |
| b | Input (felt) | Ændring af blå | Heltal -255 til 255 | 0 |

### Python
```python
turtle = Turtle(0)

turtle.change_led_color(10, 0, 0)
```

## Sluk LED {#turn_off}

Fjerner hoved-LED'ens farve.

<BlockImage module="roboids/Turtle" id="turn_off" />

### Parametre

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.turn_off()
```

## Indstil summelyden {#sound_buzz}

Indstiller summertonen hos Turtle til den angivne frekvens.

<BlockImage module="roboids/Turtle" id="sound_buzz" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| hz | Input (blok) | Frekvens (Hz) | Reelt tal 0 til 6553.5 | - |

### Python
```python
turtle = Turtle(0)

turtle.sound_buzz(440)
```

## Afspil en tone {#sound_note}

Turtle afspiller den angivne tone.

<BlockImage module="roboids/Turtle" id="sound_note" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| note | Rullemenupunkt | Tone | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Rullemenupunkt | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
turtle = Turtle(0)

turtle.sound_note('D', 5)
```

## Afspil et lydklip {#sound_clip}

Turtle afspiller et bestemt lydklip.

<BlockImage module="roboids/Turtle" id="sound_clip" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| clip | Rullemenupunkt | Navn på lydklip | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` med flere | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.sound_clip('siren', wait=True)
```

## Sluk lyd {#sound_off}

Slukker lyden hos Turtle.

<BlockImage module="roboids/Turtle" id="sound_off" />

### Parametre

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.sound_off()
```

## Afspilles lyd? {#sound_playing}

Returnerer true, hvis der afspilles en lyd, og false, hvis der ikke gør.

<BlockImage module="roboids/Turtle" id="sound_playing" />

### Parametre

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.sound_playing()
```

## Hjulhastighedens værdi {#wheel_speed}

Hastigheden for et bestemt hjul

<BlockImage module="roboids/Turtle" id="wheel_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Hjul der skal læses | venstre(left), højre(right) | - |

### Python
```python
turtle = Turtle(0)

turtle.wheel_speed('left')
```

## Gulvfarvesensorens værdi {#floor}

Værdien fra farvesensoren på undersiden

<BlockImage module="roboids/Turtle" id="floor" />

### Parametre

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.floor()
```

## Kortfarvens navn {#card_color}

Navnet på kortets farve, læst med farvesensoren på undersiden

<BlockImage module="roboids/Turtle" id="card_color" />

### Parametre

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.card_color()
```

## Kortets farvemønster {#card_pattern}

Mønstret i kortets farver, læst med farvesensoren på undersiden

<BlockImage module="roboids/Turtle" id="card_pattern" />

### Parametre

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.card_pattern()
```

## Accelerationens værdi {#acceleration}

Tyngdeaccelerationens værdi langs en bestemt akse

<BlockImage module="roboids/Turtle" id="acceleration" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Akse der skal måles | x, y, z | - |

### Python
```python
turtle = Turtle(0)

turtle.acceleration('x')
```

## Temperatursensorens værdi {#temperature}

Temperatursensorens værdi

<BlockImage module="roboids/Turtle" id="temperature" />

### Parametre

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.temperature()
```

## Signalstyrkens værdi {#signal_strength}

Signalstyrke

<BlockImage module="roboids/Turtle" id="signal_strength" />

### Parametre

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.signal_strength()
```

## Batterispænding {#battery}

Batterispænding

<BlockImage module="roboids/Turtle" id="battery" />

### Parametre

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.battery()
```

## Rører den ved en bestemt farve? {#color_read}

Måler med Turtles farvesensor, om robotten rører ved den angivne farve, og returnerer **sand (True) / falsk (False)**.

<BlockImage module="roboids/Turtle" id="color_read" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| color | Rullemenupunkt | Farvens navn | unknown, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_color('red')
```

## Er kortets farvemønster ~ ? {#pattern_read}

Returnerer **sand (True) / falsk (False)** alt efter, om mønstret i kortets farver, som farvesensoren har læst, passer.

<BlockImage module="roboids/Turtle" id="pattern_read" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| pattern | Rullemenupunkt | Kortmønstrets navn | `'red_yellow'`, `'red_green'`, `'blue_red'` | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_pattern('red_yellow')
```

## Tilbageknappens tilstand {#button}

Om knappen på ryggen er trykket ned eller er blevet klikket

<BlockImage module="roboids/Turtle" id="button" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| event | Rullemenupunkt | Slags knaptilstand | trykket(pressed), klikket(click), langt klik(long_click) | - |  

### Python
```python
turtle = Turtle(0)

turtle.button('pressed')
```

## Om tilstanden har ændret sig {#state_change}

Om robottens tilstand har ændret sig

<BlockImage module="roboids/Turtle" id="state_change" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Slags tilstand | 0 til 5 (se tabellen nedenfor) | - |

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
