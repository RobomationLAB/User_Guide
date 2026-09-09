---
title: Beagle
---

# Beagle

## Instanserklæring {#instance}

Når du legger til en Beagle-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
beagle = Beagle(0)
# Når det finnes flere instanser
beagle_1 = Beagle(1)
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Sett hjulhastigheten {#set_wheel_speed}

Bestemmer hjulhastigheten. Hastigheten går fra -100 til 100.

<BlockImage module="roboids/Beagle" id="set_wheel_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Hjul som skal styres | venstre(left), høyre(right), begge(both) | - |
| speed | Inndata (blokk) | Hjulhastighet | Heltall -100 til 100, 0: stopp | - |

### Python
```python
beagle = Beagle(0)

beagle.set_wheel_speed('both', 50)
```

## Kjør en strekning {#move_distance}

Kjører den strekningen du angir, med den hastigheten hjulene har nå.  
Er hjulhastigheten ikke satt, kjører den fremover med standardhastigheten.  
Er strekningen 0, fortsetter den å kjøre med den hastigheten hjulene har nå.  
Krysser du av for vent, venter kjøringen til bevegelsen er ferdig.

<BlockImage module="roboids/Beagle" id="move_distance" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Strekning som skal kjøres | Desimaltall 0 eller større | - |
| unit | Nedtrekksalternativ | Avstandsenhet | cm, mm, tomme(inch) | cm |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.move_distance(50, 'cm', wait=True)
```

## Kjør i et tidsrom {#move_time}

Kjører i det tidsrommet du angir, med den hastigheten hjulene har nå.  
Er hjulhastigheten ikke satt, kjører den fremover med standardhastigheten.  
Krysser du av for vent, venter kjøringen til bevegelsen er ferdig.

<BlockImage module="roboids/Beagle" id="move_time" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata (blokk) | Tid det skal kjøres (sekunder) | Desimaltall 0 eller større | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

# wait = TRUE
beagle.move_time(5, wait=True)
# wait = FALSE
beagle.move_time(0.5, wait=False)
```

## Snu på stedet {#turn_degree}

Angir hvilken retning og hvor mange grader roboten skal snu på stedet.  
Krysser du av for vent, venter kjøringen til rotasjonen er ferdig.

<BlockImage module="roboids/Beagle" id="turn_degree" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Nedtrekksalternativ | Rotasjonsretning | venstre(left), høyre(right) | - |
| data | Inndata (blokk) | Rotasjonsvinkel (grader) | Desimaltall 0 eller større | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.turn_degree('left', 90, wait=True)
```

## Endre hjulhastigheten {#change_speed}

Endrer hjulhastigheten til Beagle.  
Den nye hjulhastigheten er den hastigheten hjulene har nå, pluss den hastigheten du skriver inn.  
Den nye hjulhastigheten begrenses til området -100 til 100.

<BlockImage module="roboids/Beagle" id="change_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Hjul som skal styres | venstre(left), høyre(right), begge(both) | - |
| speed | Inndata (blokk) | Hastighetsendring | Heltall -200 til 200 | - |

### Python
```python
beagle = Beagle(0)

beagle.change_wheel_speed('both', 10)
```

## Stopp {#stop}

Stopper bevegelsen til Beagle.  
Begge hjulhastighetene til Beagle settes til 0.

<BlockImage module="roboids/Beagle" id="stop" />

### Parametere

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.stop()
```

## Beveger hjulet seg? {#wheel_moving}

Returnerer true hvis hjulet er i bevegelse, og false hvis det står stille.

<BlockImage module="roboids/Beagle" id="wheel_moving" />

### Parametere

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.wheel_moving()
```

## Sett summelyden {#sound_buzz}

Angir summelyden til Beagle med den frekvensen du velger.  
Frekvensen kan gå fra 27.5 Hz til 6553.5 Hz.  
Skriver du inn en verdi utenfor dette området, kommer det ingen summelyd.

<BlockImage module="roboids/Beagle" id="sound_buzz" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| hz | Inndata (blokk) | Frekvens (Hz) | Desimaltall 0, 27.5 til 6553.5 (ellers 0) | - |

### Python
```python
beagle = Beagle(0)

beagle.sound_buzz(440)
```

## Spill tonen {#sound_note}

Beagle spiller den tonen du velger.

<BlockImage module="roboids/Beagle" id="sound_note" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| note | Nedtrekksalternativ | Tone | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Nedtrekksalternativ | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
beagle = Beagle(0)

beagle.sound_note('D', 5)
```

## Spill lydklippet {#sound_clip}

Beagle spiller av et bestemt lydklipp.  
Krysser du av for vent, venter kjøringen til avspillingen er ferdig.

<BlockImage module="roboids/Beagle" id="sound_clip" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| clip | Nedtrekksalternativ | Navn på lydklipp | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'dibidibidip'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'` med flere | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.sound_clip('siren', wait=True)
```

## Lyd av {#sound_off}

Slår av lyden til Beagle.

<BlockImage module="roboids/Beagle" id="sound_off" />

### Parametere

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.sound_off()
```

## Spilles det lyd? {#sound_playing}

Returnerer true hvis det spilles en lyd, og false hvis det ikke gjør det.

<BlockImage module="roboids/Beagle" id="sound_playing" />

### Parametere

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.sound_playing()
```

## Hjulhastigheten {#wheel_speed}

Hastigheten til et bestemt hjul

<BlockImage module="roboids/Beagle" id="wheel_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Hjul som skal leses | venstre(left), høyre(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.wheel_speed('left')
```

## Enkoderverdien {#encoder}

Enkoderverdien til et bestemt hjul

<BlockImage module="roboids/Beagle" id="encoder" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Hjul som skal leses | venstre(left), høyre(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.encoder('left')
```

## Gyroskopets verdi {#gyroscope}

Verdien til gyroskopet langs en bestemt akse

<BlockImage module="roboids/Beagle" id="gyroscope" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Akse som måles | x-akse(x), y-akse(y), z-akse(z) | - |

### Python
```python
beagle = Beagle(0)

beagle.gyroscope('x')
```

## Akselerometerets verdi {#accelerometer}

Verdien til akselerometeret langs en bestemt akse

<BlockImage module="roboids/Beagle" id="accelerometer" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Akse som måles | x-akse(x), y-akse(y), z-akse(z) | - |

### Python
```python
beagle = Beagle(0)

beagle.accelerometer('x')
```

## Magnetometerets verdi {#magnetometer}

Verdien til magnetometeret langs en bestemt akse

<BlockImage module="roboids/Beagle" id="magnetometer" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Akse som måles | x-akse(x), y-akse(y), z-akse(z) | - |

### Python
```python
beagle = Beagle(0)

beagle.magnetometer('x')
```

## Temperaturen {#temperature}

Verdien til temperatursensoren

<BlockImage module="roboids/Beagle" id="temperature" />

### Parametere

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.temperature()
```

## Signalstyrken {#signal_strength}

Signalstyrken

<BlockImage module="roboids/Beagle" id="signal_strength" />

### Parametere

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.signal_strength()
```

## Batteriet {#battery}

Batterispenningen

<BlockImage module="roboids/Beagle" id="battery" />

### Parametere

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.battery()
```

## Har tilstanden endret seg? {#state_change}

Om robotens tilstand har endret seg

<BlockImage module="roboids/Beagle" id="state_change" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Type tilstand | 0 til 5 (se tabellen nedenfor) | - |

| unit | Betingelse |
|------|------|
| 0 | `accelerometer('x') > 0.8` |
| 1 | `accelerometer('x') < -0.8` |
| 2 | `accelerometer('y') > 0.8` |
| 3 | `accelerometer('y') < -0.8` |
| 4 | `accelerometer('z') > 0` |
| 5 | `accelerometer('z') < 0` |

### Python
```python
beagle = Beagle(0)

# unit = 0
beagle.accelerometer('x') > 0.8
```

## Start / stopp lidar {#lidar_power}

Slår lidarsensoren på eller av.

<BlockImage module="roboids/Beagle" id="lidar_power" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| on | Nedtrekksalternativ | Lidar PÅ / AV | start(on=True), stopp(off=False) | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.lidar_power(True)
```

## Avstanden til objekt nr. ~ fra lidaren {#lidar_value}

Lidarsensoren kan måle avstanden til objekter hele veien rundt, 360 grader.  
Rett foran Beagle er verdi nummer 0, og nummeret øker med 1 mot klokken.

<BlockImage module="roboids/Beagle" id="lidar_value" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Inndata (felt) | Objektnummer (fra 0) | Heltall 0 eller større | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_value(0)
```

## Avstanden fra lidaren i hver retning {#lidar_directions}

Viser avstanden lidarsensoren måler foran, bak, til begge sider og på skrå.  
Den gir gjennomsnittet av avstandsverdiene 45 grader til hver side av den retningen.

<BlockImage module="roboids/Beagle" id="lidar_directions" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Nedtrekksalternativ | Retning som måles | foran(front), foran til venstre(left front), venstre(left), bak til venstre(left back), bak(back), bak til høyre(right back), høyre(right), foran til høyre(right front) | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_directions('front')
```

## Er lidaren klar? {#lidar_state}

Returnerer **sann (True) / usann (False)** ut fra om lidaren er slått på.

<BlockImage module="roboids/Beagle" id="lidar_state" />

### Parametere

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.lidar_ready()
```
