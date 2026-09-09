---
title: Hamster
---

# Hamster

## Instanserklæring {#instance}

Når du tilføjer en Hamster-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
hamster = Hamster(0)
# Når der er flere instanser
hamster_1 = Hamster(1)
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Indstil hjulhastigheden {#set_wheel_speed}

Bestemmer hjulenes hastighed. Hastigheden går fra -100 til 100.

<BlockImage module="roboids/Hamster" id="set_wheel_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Hjul der skal styres | venstre(left), højre(right), begge(both) | - |
| speed | Input (blok) | Hjulhastighed | Heltal -100 til 100, 0: stop | - |

### Python
```python
hamster = Hamster(0)

hamster.set_wheel_speed('both', 50)
```

## Kør i et stykke tid {#move_time}

Kører i det angivne stykke tid med den nuværende hjulhastighed.  
Hvis hjulhastigheden ikke er indstillet, kører den fremad med standardhastigheden.  
Hvis vent er markeret, venter kørslen, indtil bevægelsen er færdig.

<BlockImage module="roboids/Hamster" id="move_time" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Tid der skal køres (sekunder) | Reelt tal 0 eller større | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

# wait = TRUE
hamster.move_time(5, wait=True)
# wait = FALSE
hamster.move_time(0.5, wait=False)
```

## Ændr hjulhastigheden {#change_speed}

Ændrer hjulhastigheden på Hamster.  
Den nye hjulhastighed bliver den nuværende hjulhastighed plus den hastighed, du angiver.  
Den nyligt indstillede hjulhastighed begrænses til intervallet -100 til 100.

<BlockImage module="roboids/Hamster" id="change_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Hjul der skal styres | venstre(left), højre(right), begge(both) | - |
| speed | Input (blok) | Hastighedsændring | Heltal -200 til 200 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_wheel_speed('both', 10)
```

## Stop {#stop}

Standser Hamsters bevægelse.  
Begge hjuls hastighed på Hamster nulstilles til 0.

<BlockImage module="roboids/Hamster" id="stop" />

### Parametre

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.stop()
```

## Kør ét felt frem på pladen {#grid_move}

Bevæger sig ét felt ad gangen på pladen, efter hvordan brættet er inddelt.

<BlockImage module="roboids/Hamster" id="grid_move" />

### Parametre

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.grid_move()
```

## Drej én gang på pladen {#grid_turn}

Drejer 90 grader til den angivne side på pladen.

<BlockImage module="roboids/Hamster" id="grid_turn" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullemenupunkt | Drejeretning | venstre(left), højre(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.grid_turn('left')
```

## Følg en linje med sensoren {#trace_mode}

Hamster følger en linje i en bestemt farve ved hjælp af gulvsensoren.

<BlockImage module="roboids/Hamster" id="trace_mode" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| floor | Rullemenupunkt | Gulvsensor der skal følge linjen | venstre(left), højre(right), midten(center) | - |
| line | Rullemenupunkt | Linjens farve | sort(black), hvid(white) | black |

### Python
```python
hamster = Hamster(0)

hamster.trace_line('left', 'black')
```

## Kør gennem et kryds og stop ved det næste {#trace_until_grid}

Hamster kører til den angivne side i krydset og fortsætter derefter, indtil den møder det næste kryds.  
Hvis vent er markeret, venter kørslen, indtil bevægelsen er færdig.  

<BlockImage module="roboids/Hamster" id="trace_until_grid" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullemenupunkt | Retning i krydset | drej til venstre(left), drej til højre(right), fremad(forward), u-vending(uturn) | - |
| line | Rullemenupunkt | Linjens farve | sort(black), hvid(white) | black |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

hamster.trace_intersection('left', 'black', wait=True)
```

## Indstil linjefølgningshastigheden {#set_trace_speed}

Indstiller hastigheden for linjefølgningen. Hastigheden går fra 1 til 10.

<BlockImage module="roboids/Hamster" id="set_trace_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Linjefølgningshastighed | Heltal 1 til 10 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_trace_speed(5)
```

## Stop linjefølgning {#stop_trace}

Afslutter linjefølgningen hos Hamster.

<BlockImage module="roboids/Hamster" id="stop_trace" />

### Parametre

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.stop_trace()
```

## Indstil LED-farven {#set_led_color}

Indstiller farven på lysdioden.

<BlockImage module="roboids/Hamster" id="set_led_color" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Lysdiode der skal styres | venstre(left), højre(right), begge(both) | - |
| color | Rullemenupunkt | Farve | sort(black), blå(blue), grøn(green), cyan(cyan), rød(red), magenta(magenta), gul(yellow), hvid(white) | - |

### Python
```python
hamster = Hamster(0)

hamster.set_led_color('both', 'red')
```

## Sluk LED {#turn_off}

Fjerner lysdiodens farve.

<BlockImage module="roboids/Hamster" id="turn_off" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Lysdiode der skal styres | venstre(left), højre(right), begge(both) | both |

### Python
```python
hamster = Hamster(0)

hamster.turn_off('both')
```

## Indstil summerlyden {#sound_buzz}

Indstiller summertonen hos Hamster til den angivne frekvens.  
Frekvenser, der kan lyde, går fra 1,0 Hz til 6553,5 Hz.  
Hvis du angiver en værdi uden for dette interval, høres der ingen summertone.

<BlockImage module="roboids/Hamster" id="sound_buzz" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| hz | Input (blok) | Frekvens (Hz) | Reelt tal 0 til 6553.5 | - |

### Python
```python
hamster = Hamster(0)

hamster.sound_buzz(440)
```

## Spil en tone {#sound_note}

Hamster spiller den angivne tone.

<BlockImage module="roboids/Hamster" id="sound_note" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| note | Rullemenupunkt | Tone | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Rullemenupunkt | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster = Hamster(0)

hamster.sound_note('D', 5)
```

## Slå lyd fra {#sound_off}

Slår lyden fra hos Hamster.

<BlockImage module="roboids/Hamster" id="sound_off" />

### Parametre

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.sound_off()
```

## Hjulhastighedens værdi {#wheel_speed}

Hastigheden for et bestemt hjul

<BlockImage module="roboids/Hamster" id="wheel_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Hjul der skal læses | venstre(left), højre(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.wheel_speed('left')
```

## Nærhedssensorens værdi {#proximity}

Værdien for en bestemt nærhedssensor

<BlockImage module="roboids/Hamster" id="proximity" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Sensorens placering | venstre(left), højre(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.proximity('left')
```

## Gulvsensorens værdi {#floor}

Værdien for en bestemt gulvsensor

<BlockImage module="roboids/Hamster" id="floor" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Sensorens placering | venstre(left), højre(right), midten(center) | - |

### Python
```python
hamster = Hamster(0)

hamster.floor('left')
```

## Accelerationens værdi {#acceleration}

Tyngdeaccelerationens værdi langs en bestemt akse

<BlockImage module="roboids/Hamster" id="acceleration" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Akse der skal måles | x, y, z | - |

### Python
```python
hamster = Hamster(0)

hamster.acceleration('x')
```

## Lysstyrkens værdi {#light}

Lysstyrkens værdi

<BlockImage module="roboids/Hamster" id="light" />

### Parametre

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.light()
```

## Temperatursensorens værdi {#temperature}

Temperatursensorens værdi

<BlockImage module="roboids/Hamster" id="temperature" />

### Parametre

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.temperature()
```

## Signalstyrkens værdi {#signal_strength}

Signalstyrke

<BlockImage module="roboids/Hamster" id="signal_strength" />

### Parametre

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.signal_strength()
```

## Batterispænding {#battery}

Batterispænding

<BlockImage module="roboids/Hamster" id="battery" />

### Parametre

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.battery()
```

## Om tilstanden har ændret sig {#state_change}

Om robottens tilstand har ændret sig

<BlockImage module="roboids/Hamster" id="state_change" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Slags tilstand | 0 til 6 (se tabellen nedenfor) | - |

| unit | Betingelse |
|------|------|
| 0 | `acceleration('x') > 5000` |
| 1 | `acceleration('x') < -5000` |
| 2 | `acceleration('y') > 5000` |
| 3 | `acceleration('y') < -5000` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -3000` |
| 6 | `proximity('left') > 50 or proximity('right') > 50` |

### Python
```python
hamster = Hamster(0)

# unit = 0
hamster.acceleration('x') > 5000
# unit = 6
hamster.proximity('left') > 50 or hamster.proximity('right') > 50
```

## Indstil in-/udgangsportens tilstand {#io_mode}

Indstiller indgangstilstanden for IO-porten.

<BlockImage module="roboids/Hamster" id="io_mode" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | In-/udgangsport | A (`'a'`), B (`'b'`), begge(both) | - |
| option | Rullemenupunkt | In-/udgangstilstand | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster = Hamster(0)

hamster.io_mode('both', 'analog_input')
```

## Indstil in-/udgangsportens outputværdi {#set_output}

Indstiller outputværdien for den angivne IO-port.

<BlockImage module="roboids/Hamster" id="set_output" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | In-/udgangsport | A (`'a'`), B (`'b'`), begge(both) | - |
| data | Input (blok) | Outputværdi | Heltal 0 til 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_output('both', 90)
```

## Ændr in-/udgangsportens outputværdi {#change_output}

Ændrer outputværdien for den angivne IO-port.

<BlockImage module="roboids/Hamster" id="change_output" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | In-/udgangsport | A (`'a'`), B (`'b'`), begge(both) | - |
| data | Input (blok) | Ændring af outputværdien | Heltal | - |

### Python
```python
hamster = Hamster(0)

hamster.change_output('a', 10)
```

## Åbn / luk griberen {#gripper}

Åbner eller lukker griberen på Hamster.  
Alt efter værdien af unit kaldes en af de to metoder.

<BlockImage module="roboids/Hamster" id="gripper" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Handling | luk(close), åbn(open) | - |

### Python
```python
hamster = Hamster(0)

# unit = "open"
hamster.open_gripper()
# unit = "close"
hamster.close_gripper()
```

## Indstil affyringsvinklen {#shooter}

Styrer skyderen ved at indstille affyringsvinklen. Vinklen går fra 0 til 180.

<BlockImage module="roboids/Hamster" id="shooter" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Affyringsvinkel | Heltal 0 til 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.shooter(45)
```

## In-/udgangsportens indgangsværdi {#input}

Returnerer indgangsværdien for in-/udgangsporten på Hamster.

<BlockImage module="roboids/Hamster" id="input" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | In-/udgangsport | A (`'a'`), B (`'b'`) | - |

### Python
```python
hamster = Hamster(0)

hamster.get_input('a')
```
