---
title: Beagle
---

# Beagle

## Instanserklæring {#instance}

Når du tilføjer en Beagle-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
beagle = Beagle(0)
# Når der er flere instanser
beagle_1 = Beagle(1)
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Indstil hjulhastigheden {#set_wheel_speed}

Bestemmer hjulenes hastighed. Hastigheden går fra -100 til 100.

<BlockImage module="roboids/Beagle" id="set_wheel_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Hjul der skal styres | venstre(left), højre(right), begge(both) | - |
| speed | Input (blok) | Hjulhastighed | Heltal -100 til 100, 0: stop | - |

### Python
```python
beagle = Beagle(0)

beagle.set_wheel_speed('both', 50)
```

## Kør en strækning {#move_distance}

Kører den angivne strækning med den nuværende hjulhastighed.  
Hvis hjulhastigheden ikke er indstillet, kører den fremad med standardhastigheden.  
Hvis strækningen er 0, fortsætter den med at køre efter den nuværende hjulhastighed.  
Hvis vent er markeret, venter kørslen, indtil bevægelsen er færdig.

<BlockImage module="roboids/Beagle" id="move_distance" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Strækning der skal køres | Reelt tal 0 eller større | - |
| unit | Rullemenupunkt | Længdeenhed | cm, mm, tomme(inch) | cm |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.move_distance(50, 'cm', wait=True)
```

## Kør i et stykke tid {#move_time}

Kører i det angivne stykke tid med den nuværende hjulhastighed.  
Hvis hjulhastigheden ikke er indstillet, kører den fremad med standardhastigheden.  
Hvis vent er markeret, venter kørslen, indtil bevægelsen er færdig.

<BlockImage module="roboids/Beagle" id="move_time" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input (blok) | Tid der skal køres (sekunder) | Reelt tal 0 eller større | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

# wait = TRUE
beagle.move_time(5, wait=True)
# wait = FALSE
beagle.move_time(0.5, wait=False)
```

## Drej på stedet {#turn_degree}

Indstiller, til hvilken side og hvor mange grader robotten skal dreje på stedet.  
Hvis vent er markeret, venter kørslen, indtil drejningen er færdig.

<BlockImage module="roboids/Beagle" id="turn_degree" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullemenupunkt | Drejeretning | venstre(left), højre(right) | - |
| data | Input (blok) | Drejevinkel (grader) | Reelt tal 0 eller større | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.turn_degree('left', 90, wait=True)
```

## Ændr hjulhastigheden {#change_speed}

Ændrer hjulhastigheden på Beagle.  
Den nye hjulhastighed bliver den nuværende hjulhastighed plus den hastighed, du angiver.  
Den nyligt indstillede hjulhastighed begrænses til intervallet -100 til 100.

<BlockImage module="roboids/Beagle" id="change_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Hjul der skal styres | venstre(left), højre(right), begge(both) | - |
| speed | Input (blok) | Hastighedsændring | Heltal -200 til 200 | - |

### Python
```python
beagle = Beagle(0)

beagle.change_wheel_speed('both', 10)
```

## Stop {#stop}

Standser Beagles bevægelse.  
Begge hjuls hastighed på Beagle nulstilles til 0.

<BlockImage module="roboids/Beagle" id="stop" />

### Parametre

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.stop()
```

## Kører hjulet? {#wheel_moving}

Returnerer true, hvis hjulet kører, og false, hvis det står stille.

<BlockImage module="roboids/Beagle" id="wheel_moving" />

### Parametre

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.wheel_moving()
```

## Indstil summelydens frekvens {#sound_buzz}

Indstiller summertonen hos Beagle til den angivne frekvens.  
Frekvenser, der kan lyde, går fra 27,5 Hz til 6553,5 Hz.  
Hvis du angiver en værdi uden for dette interval, høres der ingen summertone.

<BlockImage module="roboids/Beagle" id="sound_buzz" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| hz | Input (blok) | Frekvens (Hz) | Reelt tal 0, 27.5 til 6553.5 (ellers 0) | - |

### Python
```python
beagle = Beagle(0)

beagle.sound_buzz(440)
```

## Afspil en tone {#sound_note}

Beagle afspiller den angivne tone.

<BlockImage module="roboids/Beagle" id="sound_note" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| note | Rullemenupunkt | Tone | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Rullemenupunkt | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
beagle = Beagle(0)

beagle.sound_note('D', 5)
```

## Afspil et lydklip {#sound_clip}

Beagle afspiller et bestemt lydklip.  
Hvis vent er markeret, venter kørslen, indtil afspilningen er færdig.

<BlockImage module="roboids/Beagle" id="sound_clip" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| clip | Rullemenupunkt | Navn på lydklip | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'dibidibidip'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'` med flere | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.sound_clip('siren', wait=True)
```

## Slå lyd fra {#sound_off}

Slår lyden fra hos Beagle.

<BlockImage module="roboids/Beagle" id="sound_off" />

### Parametre

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.sound_off()
```

## Afspilles lyd? {#sound_playing}

Returnerer true, hvis der afspilles en lyd, og false, hvis der ikke gør.

<BlockImage module="roboids/Beagle" id="sound_playing" />

### Parametre

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.sound_playing()
```

## Hjulhastighedens værdi {#wheel_speed}

Hastigheden for et bestemt hjul

<BlockImage module="roboids/Beagle" id="wheel_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Hjul der skal læses | venstre(left), højre(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.wheel_speed('left')
```

## Enkoderens værdi {#encoder}

Enkoderens værdi for et bestemt hjul

<BlockImage module="roboids/Beagle" id="encoder" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Hjul der skal læses | venstre(left), højre(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.encoder('left')
```

## Gyroskopets værdi {#gyroscope}

Gyroskopets værdi langs en bestemt akse

<BlockImage module="roboids/Beagle" id="gyroscope" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Akse der skal måles | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.gyroscope('x')
```

## Accelerometerets værdi {#accelerometer}

Accelerometerets værdi langs en bestemt akse

<BlockImage module="roboids/Beagle" id="accelerometer" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Akse der skal måles | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.accelerometer('x')
```

## Magnetometerets værdi {#magnetometer}

Magnetometerets værdi langs en bestemt akse

<BlockImage module="roboids/Beagle" id="magnetometer" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Akse der skal måles | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.magnetometer('x')
```

## Temperatursensorens værdi {#temperature}

Temperatursensorens værdi

<BlockImage module="roboids/Beagle" id="temperature" />

### Parametre

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.temperature()
```

## Signalstyrkens værdi {#signal_strength}

Signalstyrke

<BlockImage module="roboids/Beagle" id="signal_strength" />

### Parametre

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.signal_strength()
```

## Batterispænding {#battery}

Batterispænding

<BlockImage module="roboids/Beagle" id="battery" />

### Parametre

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.battery()
```

## Om tilstanden har ændret sig {#state_change}

Om robottens tilstand har ændret sig

<BlockImage module="roboids/Beagle" id="state_change" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Slags tilstand | 0 til 5 (se tabellen nedenfor) | - |

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

## Start / stop lidaren {#lidar_power}

Aktiverer eller deaktiverer lidarsensoren.

<BlockImage module="roboids/Beagle" id="lidar_power" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| on | Rullemenupunkt | Lidar TIL / FRA | start(on=True), stop(off=False) | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.lidar_power(True)
```

## Afstanden til lidarens ~. genstand {#lidar_value}

Lidarsensoren kan måle afstanden til genstande hele vejen rundt i 360 grader.  
Med Beagles forside som udgangspunkt (værdi 0) stiger nummeret med 1 mod uret.

<BlockImage module="roboids/Beagle" id="lidar_value" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Input (felt) | Genstandens nummer (fra 0) | Heltal 0 eller større | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_value(0)
```

## Lidarens afstand pr. retning {#lidar_directions}

Viser den afstand fremad, bagud, til siderne og diagonalt, som lidarsensoren har målt.  
Blokken giver gennemsnittet af afstandene 45 grader til hver side i den retning.

<BlockImage module="roboids/Beagle" id="lidar_directions" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullemenupunkt | Retning der skal måles | foran(front), foran til venstre(left front), venstre(left), bagved til venstre(left back), bagved(back), bagved til højre(right back), højre(right), foran til højre(right front) | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_directions('front')
```

## Er lidaren klar? {#lidar_state}

Returnerer **sand (True) / falsk (False)** alt efter, om lidaren er i gang.

<BlockImage module="roboids/Beagle" id="lidar_state" />

### Parametre

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.lidar_ready()
```
