---
title: Hamster
---

# Hamster

## Instanserklæring {#instance}

Når du legger til en Hamster-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
hamster = Hamster(0)
# Når det finnes flere instanser
hamster_1 = Hamster(1)
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Sett hjulhastigheten {#set_wheel_speed}

Bestemmer hjulhastigheten. Hastigheten går fra -100 til 100.

<BlockImage module="roboids/Hamster" id="set_wheel_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Hjul som skal styres | venstre(left), høyre(right), begge(both) | - |
| speed | Inndata (blokk) | Hjulhastighet | Heltall -100 til 100, 0: stopp | - |

### Python
```python
hamster = Hamster(0)

hamster.set_wheel_speed('both', 50)
```

## Flytt i et tidsrom {#move_time}

Kjører i det tidsrommet du angir, med den hastigheten hjulene har nå.  
Er hjulhastigheten ikke satt, kjører den fremover med standardhastigheten.  
Krysser du av for vent, venter kjøringen til bevegelsen er ferdig.

<BlockImage module="roboids/Hamster" id="move_time" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Tid det skal kjøres (sekunder) | Desimaltall 0 eller større | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

# wait = TRUE
hamster.move_time(5, wait=True)
# wait = FALSE
hamster.move_time(0.5, wait=False)
```

## Endre hjulhastigheten {#change_speed}

Endrer hjulhastigheten til Hamster.  
Den nye hjulhastigheten er den hastigheten hjulene har nå, pluss den hastigheten du skriver inn.  
Den nye hjulhastigheten begrenses til området -100 til 100.

<BlockImage module="roboids/Hamster" id="change_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Hjul som skal styres | venstre(left), høyre(right), begge(both) | - |
| speed | Inndata (blokk) | Hastighetsendring | Heltall -200 til 200 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_wheel_speed('both', 10)
```

## Stopp {#stop}

Stopper bevegelsen til Hamster.  
Begge hjulhastighetene til Hamster settes til 0.

<BlockImage module="roboids/Hamster" id="stop" />

### Parametere

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.stop()
```

## Gå ett trinn fremover på brettet {#grid_move}

Beveger seg ett trinn om gangen på brettet, etter hvordan brettet er delt inn.

<BlockImage module="roboids/Hamster" id="grid_move" />

### Parametere

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.grid_move()
```

## Snu én gang på brettet {#grid_turn}

Snur 90 grader i den retningen du angir, på brettet.

<BlockImage module="roboids/Hamster" id="grid_turn" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Nedtrekksalternativ | Rotasjonsretning | venstre(left), høyre(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.grid_turn('left')
```

## Følg en linje med sensoren {#trace_mode}

Hamster følger en linje i en bestemt farge ved hjelp av gulvsensoren.

<BlockImage module="roboids/Hamster" id="trace_mode" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| floor | Nedtrekksalternativ | Gulvsensor som skal følge linjen | venstre(left), høyre(right), midten(center) | - |
| line | Nedtrekksalternativ | Linjens farge | svart(black), hvit(white) | black |

### Python
```python
hamster = Hamster(0)

hamster.trace_line('left', 'black')
```

## Kjør gjennom et kryss og stopp ved det neste {#trace_until_grid}

Hamster kjører i den retningen du angir i krysset, og fortsetter til den møter neste kryss.  
Krysser du av for vent, venter kjøringen til bevegelsen er ferdig.

<BlockImage module="roboids/Hamster" id="trace_until_grid" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Nedtrekksalternativ | Retning i krysset | venstre(left), høyre(right), fremover(forward), u-sving(uturn) | - |
| line | Nedtrekksalternativ | Linjens farge | svart(black), hvit(white) | black |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

hamster.trace_intersection('left', 'black', wait=True)
```

## Sett linjefølgingshastigheten {#set_trace_speed}

Angir hastigheten når roboten følger en linje. Hastigheten går fra 1 til 10.

<BlockImage module="roboids/Hamster" id="set_trace_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Linjefølgingshastighet | Heltall 1 til 10 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_trace_speed(5)
```

## Stopp linjefølging {#stop_trace}

Avslutter linjefølgingen til Hamster.

<BlockImage module="roboids/Hamster" id="stop_trace" />

### Parametere

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.stop_trace()
```

## Sett LED-fargen {#set_led_color}

Angir LED-fargen.

<BlockImage module="roboids/Hamster" id="set_led_color" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | LED som skal styres | venstre(left), høyre(right), begge(both) | - |
| color | Nedtrekksalternativ | Farge | svart(black), blå(blue), grønn(green), cyan(cyan), rød(red), magenta(magenta), gul(yellow), hvit(white) | - |

### Python
```python
hamster = Hamster(0)

hamster.set_led_color('both', 'red')
```

## Slå av LED {#turn_off}

Fjerner LED-fargen.

<BlockImage module="roboids/Hamster" id="turn_off" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | LED som skal styres | venstre(left), høyre(right), begge(both) | both |

### Python
```python
hamster = Hamster(0)

hamster.turn_off('both')
```

## Sett summelyden {#sound_buzz}

Angir summelyden til Hamster med den frekvensen du velger.  
Frekvensen kan gå fra 1.0 Hz til 6553.5 Hz.  
Skriver du inn en verdi utenfor dette området, kommer det ingen summelyd.

<BlockImage module="roboids/Hamster" id="sound_buzz" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| hz | Inndata (blokk) | Frekvens (Hz) | Desimaltall 0 til 6553.5 | - |

### Python
```python
hamster = Hamster(0)

hamster.sound_buzz(440)
```

## Spill tonen {#sound_note}

Hamster spiller den tonen du velger.

<BlockImage module="roboids/Hamster" id="sound_note" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| note | Nedtrekksalternativ | Tone | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Nedtrekksalternativ | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster = Hamster(0)

hamster.sound_note('D', 5)
```

## Slå av lyd {#sound_off}

Slår av lyden til Hamster.

<BlockImage module="roboids/Hamster" id="sound_off" />

### Parametere

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.sound_off()
```

## Hjulhastigheten {#wheel_speed}

Hastigheten til et bestemt hjul

<BlockImage module="roboids/Hamster" id="wheel_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Hjul som skal leses | venstre(left), høyre(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.wheel_speed('left')
```

## Nærhetssensorens verdi {#proximity}

Verdien til en bestemt nærhetssensor

<BlockImage module="roboids/Hamster" id="proximity" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Sensorposisjon som måles | venstre(left), høyre(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.proximity('left')
```

## Gulvsensorens verdi {#floor}

Verdien til en bestemt gulvsensor

<BlockImage module="roboids/Hamster" id="floor" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Sensorposisjon som måles | venstre(left), høyre(right), midten(center) | - |

### Python
```python
hamster = Hamster(0)

hamster.floor('left')
```

## Akselerasjonsverdien {#acceleration}

Tyngdeakselerasjonen langs en bestemt akse

<BlockImage module="roboids/Hamster" id="acceleration" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Akse som måles | x-akse(x), y-akse(y), z-akse(z) | - |

### Python
```python
hamster = Hamster(0)

hamster.acceleration('x')
```

## Lysstyrken {#light}

Verdien til lysstyrkesensoren

<BlockImage module="roboids/Hamster" id="light" />

### Parametere

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.light()
```

## Temperaturen {#temperature}

Verdien til temperatursensoren

<BlockImage module="roboids/Hamster" id="temperature" />

### Parametere

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.temperature()
```

## Signalstyrken {#signal_strength}

Signalstyrken

<BlockImage module="roboids/Hamster" id="signal_strength" />

### Parametere

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.signal_strength()
```

## Batteriet {#battery}

Batterispenningen

<BlockImage module="roboids/Hamster" id="battery" />

### Parametere

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.battery()
```

## Har tilstanden endret seg? {#state_change}

Om robotens tilstand har endret seg

<BlockImage module="roboids/Hamster" id="state_change" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Type tilstand | 0 til 6 (se tabellen nedenfor) | - |

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

## Angi inngangsmodus for I/O-porten {#io_mode}

Angir inngangsmodus for I/O-porten.

<BlockImage module="roboids/Hamster" id="io_mode" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | I/O-port | A(a), B(b), begge(both) | - |
| option | Nedtrekksalternativ | I/O-modus | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster = Hamster(0)

hamster.io_mode('both', 'analog_input')
```

## Sett utgangen på I/O-porten {#set_output}

Angir utgangsverdien på den I/O-porten du velger.

<BlockImage module="roboids/Hamster" id="set_output" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | I/O-port | A(a), B(b), begge(both) | - |
| data | Inndata (blokk) | Utgangsverdi | Heltall 0 til 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_output('both', 90)
```

## Endre utgangen på I/O-porten {#change_output}

Endrer utgangsverdien på den I/O-porten du velger.

<BlockImage module="roboids/Hamster" id="change_output" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | I/O-port | A(a), B(b), begge(both) | - |
| data | Inndata (blokk) | Endring i utgangsverdien | Heltall | - |

### Python
```python
hamster = Hamster(0)

hamster.change_output('a', 10)
```

## Åpne / lukke griperen {#gripper}

Åpner eller lukker griperen til Hamster.  
Alt etter verdien av unit kalles den ene eller den andre av de to metodene.

<BlockImage module="roboids/Hamster" id="gripper" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Handling | lukke(close), åpne(open) | - |

### Python
```python
hamster = Hamster(0)

# unit = "open"
hamster.open_gripper()
# unit = "close"
hamster.close_gripper()
```

## Sett utskytervinkelen {#shooter}

Styrer utskyteren ved å angi vinkelen. Vinkelen går fra 0 til 180.

<BlockImage module="roboids/Hamster" id="shooter" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Utskytervinkel | Heltall 0 til 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.shooter(45)
```

## Inngangsverdien på I/O-porten {#input}

Returnerer inngangsverdien på I/O-porten til Hamster.

<BlockImage module="roboids/Hamster" id="input" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | I/O-port | A(a), B(b) | - |

### Python
```python
hamster = Hamster(0)

hamster.get_input('a')
```
