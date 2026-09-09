---
title: Cheese Stick
---

# Cheese Stick

## Instanserklæring {#instance}

Når du legger til en Cheese Stick(CheeseStick)-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
cheesestick = CheeseStick(0)
# Når det finnes flere instanser
cheesestick_1 = CheeseStick(1)
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Sett inngangsmodus {#set_input_mode}

Angir inngangsmodus for den porten du velger.

<BlockImage module="roboids/CheeseStick" id="set_input_mode" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Inngangsport | Sa, Sb, Sc, La, Lb, Lc | - |
| option | Nedtrekksalternativ | Inngangsmodus | makey-inngang(makey), knappeinngang(button), digital pull-up(digital_pullup), digital pull-down(digital_pulldown), analog(analog), analog spenning(analog_voltage) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_mode('Sa', 'button')
```

## Sett inngangsområdet {#set_input_range}

Gjør inngangsverdien fra den porten du velger, om til det minste~største området du angir.  
Inngangsverdien går fra 0 til 255.  
Verdiene den kan gjøres om til, går fra -100 til 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Inngangsport | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Inndata (felt) | Minsteverdien i kilden | Heltall 0 til 255 | - |
| src_max | Inndata (felt) | Størsteverdien i kilden | Heltall 0 til 255 | - |
| dst_min | Inndata (felt) | Minsteverdien etter omregningen | Heltall -100 til 100 | - |
| dst_max | Inndata (felt) | Størsteverdien etter omregningen | Heltall -100 til 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range('Sa', 0, 255, 0, 100)
```

## Sett inngangsområdet med en midtverdi {#set_input_range_median}

Gjør inngangsverdien fra den porten du velger, om til det minste~midterste~største området du angir.  
Inngangsverdien går fra 0 til 255.  
Verdiene den kan gjøres om til, går fra -100 til 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range_median" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Inngangsport | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Inndata (felt) | Minsteverdien i kilden | Heltall 0 til 255 | - |
| src_median | Inndata (felt) | Midtverdien i kilden | Heltall 0 til 255 | - |
| src_max | Inndata (felt) | Størsteverdien i kilden | Heltall 0 til 255 | - |
| dst_min | Inndata (felt) | Minsteverdien etter omregningen | Heltall -100 til 100 | - |
| dst_median | Inndata (felt) | Midtverdien etter omregningen | Heltall -100 til 100 | - |
| dst_max | Inndata (felt) | Størsteverdien etter omregningen | Heltall -100 til 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Inngangsverdien {#get_input}

Inngangsverdien fra den porten du velger

<BlockImage module="roboids/CheeseStick" id="get_input" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Inngangsport | Sa, Sb, Sc, La, Lb, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_input('Sa')
```

## Sett pulsinngangsmodus {#set_pulse_input_mode}

Angir pulsinngangsmodus for den porten du velger.

<BlockImage module="roboids/CheeseStick" id="set_pulse_input_mode" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Pulsinngangsport | Sc, Lc | - |
| option | Nedtrekksalternativ | Pull-modus | puls (default), puls (pull-up), puls (pull-down) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pulse_input_mode('Sc', 'pull-up')
```

## Pulsinngangsverdien {#get_pulse_input}

Om det er registrert en pulsinngang på den porten du velger

<BlockImage module="roboids/CheeseStick" id="get_pulse_input" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Pulsinngangsport | Sc, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_pulse_input('Sc')
```

## Sett den digitale utgangen {#set_digital_output}

Angir den digitale utgangsverdien på den porten du velger.  
Du kan velge 0 eller 1.

<BlockImage module="roboids/CheeseStick" id="set_digital_output" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Digital utgangsport | Sa, Sb, Sc, La, Lb, Lc, Mab, Mcd | - |
| value | Nedtrekksalternativ | Utgangsverdi | 0 eller 1 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_digital_output('Sa', 1)
```

## Sett PWM-utgangen {#set_pwm_output}

Angir PWM-utgangsverdien på den porten du velger.  
Verdiene du kan velge, går fra 0 til 100.

<BlockImage module="roboids/CheeseStick" id="set_pwm_output" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | PWM-utgangsport | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Inndata (felt) | PWM-verdi | Heltall 0 til 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pwm_output('Sa', 50)
```

## Endre PWM-utgangen {#change_pwm_output}

Endrer PWM-utgangsverdien på den porten du velger.  
Verdiene du kan velge, går fra -100 til 100.

<BlockImage module="roboids/CheeseStick" id="change_pwm_output" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | PWM-utgangsport | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Inndata (felt) | PWM-endring | Heltall -100 til 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.change_pwm_output('Sa', 10)
```

## Sett summelyd {#sound_buzz}

Angir summelyden til Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_buzz" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| hz | Inndata (blokk) | Frekvens (Hz) | Desimaltall 0 til 6553.5 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_buzz(440)
```

## Spill tonen {#sound_note}

Cheese Stick spiller den tonen du velger.

<BlockImage module="roboids/CheeseStick" id="sound_note" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| note | Nedtrekksalternativ | Tone | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Nedtrekksalternativ | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_note('D', 5)
```

## Spill lydklipp {#sound_clip}

Cheese Stick spiller av et bestemt lydklipp.

<BlockImage module="roboids/CheeseStick" id="sound_clip" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| clip | Nedtrekksalternativ | Navn på lydklipp | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'happy'`, `'angry'`, `'sad'` med flere | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_clip('siren', wait=True)
```

## Lyd av {#sound_off}

Slår av lyden til Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_off" />

### Parametere

(ingen)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_off()
```

## Akselerasjonsverdien {#acceleration}

Tyngdeakselerasjonen langs en bestemt akse

<BlockImage module="roboids/CheeseStick" id="acceleration" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Akse som måles | x-akse(x), y-akse(y), z-akse(z) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x')
```

## Temperaturen {#temperature}

Verdien til temperatursensoren

<BlockImage module="roboids/CheeseStick" id="temperature" />

### Parametere

(ingen)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.temperature()
```

## Signalstyrken {#signal_strength}

Signalstyrken

<BlockImage module="roboids/CheeseStick" id="signal_strength" />

### Parametere

(ingen)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.signal_strength()
```

## Batteriet {#battery}

Batterispenningen

<BlockImage module="roboids/CheeseStick" id="battery" />

### Parametere

(ingen)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.battery()
```

## Har tilstanden endret seg? {#state_change}

Om robotens tilstand har endret seg

<BlockImage module="roboids/CheeseStick" id="state_change" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Type tilstand | 0 til 7 (se tabellen nedenfor) | - |

| unit | Betingelse |
|------|------|
| 0 | `acceleration('x') > 960` |
| 1 | `acceleration('x') < -960` |
| 2 | `acceleration('y') > 960` |
| 3 | `acceleration('y') < -960` |
| 4 | `acceleration('z') > 960` |
| 5 | `acceleration('z') < -960` |
| 6 | `tap()` (bankehendelse) |
| 7 | `fall()` (fallhendelse) |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x') > 960
cheesestick.tap()    # case 6
cheesestick.fall()   # case 7
```
