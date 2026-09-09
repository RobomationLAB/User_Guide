---
title: Cheese Stick
---

# Cheese Stick

## Instanserklæring {#instance}

Når du tilføjer en Cheese Stick(CheeseStick)-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
cheesestick = CheeseStick(0)
# Når der er flere instanser
cheesestick_1 = CheeseStick(1)
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Indstil inputtilstanden {#set_input_mode}

Indstiller inputtilstanden for den valgte port.

<BlockImage module="roboids/CheeseStick" id="set_input_mode" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Inputport | Sa, Sb, Sc, La, Lb, Lc | - |
| option | Rullemenupunkt | Inputtilstand | makey(makey), knap(button), digital pull-up(digital_pullup), digital pull-down(digital_pulldown), analog(analog), analog spænding(analog_voltage) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_mode('Sa', 'button')
```

## Indstil inputområdet {#set_input_range}

Konverterer den valgte ports inputværdi til det angivne område fra mindste til største værdi.  
Inputværdien går fra 0 til 255.  
De værdier, du kan konvertere til, går fra -100 til 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Inputport | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Input (felt) | Kildens mindste værdi | Heltal 0 til 255 | - |
| src_max | Input (felt) | Kildens største værdi | Heltal 0 til 255 | - |
| dst_min | Input (felt) | Mindste værdi efter konvertering | Heltal -100 til 100 | - |
| dst_max | Input (felt) | Største værdi efter konvertering | Heltal -100 til 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range('Sa', 0, 255, 0, 100)
```

## Indstil inputområdet med en midterværdi {#set_input_range_median}

Konverterer den valgte ports inputværdi til det angivne område fra mindste via midterværdien til største værdi.  
Inputværdien går fra 0 til 255.  
De værdier, du kan konvertere til, går fra -100 til 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range_median" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Inputport | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Input (felt) | Kildens mindste værdi | Heltal 0 til 255 | - |
| src_median | Input (felt) | Kildens midterværdi | Heltal 0 til 255 | - |
| src_max | Input (felt) | Kildens største værdi | Heltal 0 til 255 | - |
| dst_min | Input (felt) | Mindste værdi efter konvertering | Heltal -100 til 100 | - |
| dst_median | Input (felt) | Midterværdi efter konvertering | Heltal -100 til 100 | - |
| dst_max | Input (felt) | Største værdi efter konvertering | Heltal -100 til 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Inputværdi {#get_input}

Inputværdien for den valgte port

<BlockImage module="roboids/CheeseStick" id="get_input" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Inputport | Sa, Sb, Sc, La, Lb, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_input('Sa')
```

## Indstil impulsinputtilstanden {#set_pulse_input_mode}

Indstiller impulsinputtilstanden for den valgte port.

<BlockImage module="roboids/CheeseStick" id="set_pulse_input_mode" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Impulsinputport | Sc, Lc | - |
| option | Rullemenupunkt | Pull-tilstand | impuls (default), impuls (pull-up), impuls (pull-down) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pulse_input_mode('Sc', 'pull-up')
```

## Impulsinputtets værdi {#get_pulse_input}

Om der er registreret et impulsinput på den valgte port

<BlockImage module="roboids/CheeseStick" id="get_pulse_input" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Impulsinputport | Sc, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_pulse_input('Sc')
```

## Indstil den digitale udgang {#set_digital_output}

Indstiller den digitale udgangsværdi for den angivne port.  
Du kan vælge værdien 0 eller 1.

<BlockImage module="roboids/CheeseStick" id="set_digital_output" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Digital udgangsport | Sa, Sb, Sc, La, Lb, Lc, Mab, Mcd | - |
| value | Rullemenupunkt | Udgangsværdi | 0 eller 1 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_digital_output('Sa', 1)
```

## Indstil PWM-udgangen {#set_pwm_output}

Indstiller PWM-udgangsværdien for den angivne port.  
De værdier, du kan vælge, går fra 0 til 100.

<BlockImage module="roboids/CheeseStick" id="set_pwm_output" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | PWM-udgangsport | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Input (felt) | PWM-værdi | Heltal 0 til 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pwm_output('Sa', 50)
```

## Ændr PWM-udgangen {#change_pwm_output}

Ændrer PWM-udgangsværdien for den angivne port.  
De værdier, du kan vælge, går fra -100 til 100.

<BlockImage module="roboids/CheeseStick" id="change_pwm_output" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | PWM-udgangsport | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Input (felt) | PWM-ændring | Heltal -100 til 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.change_pwm_output('Sa', 10)
```

## Indstil summelyden {#sound_buzz}

Indstiller summertonen hos Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_buzz" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| hz | Input (blok) | Frekvens (Hz) | Reelt tal 0 til 6553.5 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_buzz(440)
```

## Afspil en tone {#sound_note}

Cheese Stick afspiller den angivne tone.

<BlockImage module="roboids/CheeseStick" id="sound_note" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| note | Rullemenupunkt | Tone | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Rullemenupunkt | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_note('D', 5)
```

## Afspil et lydklip {#sound_clip}

Cheese Stick afspiller et bestemt lydklip.

<BlockImage module="roboids/CheeseStick" id="sound_clip" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| clip | Rullemenupunkt | Navn på lydklip | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'happy'`, `'angry'`, `'sad'` med flere | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_clip('siren', wait=True)
```

## Slå lyd fra {#sound_off}

Slår lyden fra hos Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_off" />

### Parametre

(ingen)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_off()
```

## Accelerationens værdi {#acceleration}

Tyngdeaccelerationens værdi langs en bestemt akse

<BlockImage module="roboids/CheeseStick" id="acceleration" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Akse der skal måles | x, y, z | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x')
```

## Temperatursensorens værdi {#temperature}

Temperatursensorens værdi

<BlockImage module="roboids/CheeseStick" id="temperature" />

### Parametre

(ingen)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.temperature()
```

## Signalstyrkens værdi {#signal_strength}

Signalstyrke

<BlockImage module="roboids/CheeseStick" id="signal_strength" />

### Parametre

(ingen)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.signal_strength()
```

## Batterispænding {#battery}

Batterispænding

<BlockImage module="roboids/CheeseStick" id="battery" />

### Parametre

(ingen)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.battery()
```

## Om tilstanden har ændret sig {#state_change}

Om robottens tilstand har ændret sig

<BlockImage module="roboids/CheeseStick" id="state_change" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Slags tilstand | 0 til 7 (se tabellen nedenfor) | - |

| unit | Betingelse |
|------|------|
| 0 | `acceleration('x') > 960` |
| 1 | `acceleration('x') < -960` |
| 2 | `acceleration('y') > 960` |
| 3 | `acceleration('y') < -960` |
| 4 | `acceleration('z') > 960` |
| 5 | `acceleration('z') < -960` |
| 6 | `tap()` (bankehændelse) |
| 7 | `fall()` (faldhændelse) |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x') > 960
cheesestick.tap()    # case 6
cheesestick.fall()   # case 7
```
