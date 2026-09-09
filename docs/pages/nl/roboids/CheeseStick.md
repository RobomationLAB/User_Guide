---
title: Cheese Stick
---

# Cheese Stick

## Instantie declareren {#instance}

Voeg je een Cheese Stick(CheeseStick)-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
cheesestick = CheeseStick(0)
# als er meerdere instanties zijn
cheesestick_1 = CheeseStick(1)
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Invoermodus instellen {#set_input_mode}

Stelt de invoermodus van de gekozen poort in.

<BlockImage module="roboids/CheeseStick" id="set_input_mode" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Invoerpoort | Sa, Sb, Sc, La, Lb, Lc | - |
| option | Keuzelijstoptie | Invoermodus | makey-invoer(makey), knopinvoer(button), digitaal pull-up(digital_pullup), digitaal pull-down(digital_pulldown), analoog(analog), analoge spanning(analog_voltage) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_mode('Sa', 'button')
```

## Invoerbereik instellen {#set_input_range}

Rekent de invoerwaarde van de gekozen poort om naar het opgegeven bereik van minimum tot maximum.  
Het bereik van de invoerwaarde is 0 ~ 255.  
Het bereik waarnaar kan worden omgerekend is -100 ~ 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Invoerpoort | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Invoer (veld) | Minimum van de oorspronkelijke waarde | geheel getal 0 ~ 255 | - |
| src_max | Invoer (veld) | Maximum van de oorspronkelijke waarde | geheel getal 0 ~ 255 | - |
| dst_min | Invoer (veld) | Minimum na de omrekening | geheel getal -100 ~ 100 | - |
| dst_max | Invoer (veld) | Maximum na de omrekening | geheel getal -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range('Sa', 0, 255, 0, 100)
```

## Invoerbereik met middenwaarde instellen {#set_input_range_median}

Rekent de invoerwaarde van de gekozen poort om naar het opgegeven bereik van minimum via middenwaarde tot maximum.  
Het bereik van de invoerwaarde is 0 ~ 255.  
Het bereik waarnaar kan worden omgerekend is -100 ~ 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range_median" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Invoerpoort | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Invoer (veld) | Minimum van de oorspronkelijke waarde | geheel getal 0 ~ 255 | - |
| src_median | Invoer (veld) | Middenwaarde van de oorspronkelijke waarde | geheel getal 0 ~ 255 | - |
| src_max | Invoer (veld) | Maximum van de oorspronkelijke waarde | geheel getal 0 ~ 255 | - |
| dst_min | Invoer (veld) | Minimum na de omrekening | geheel getal -100 ~ 100 | - |
| dst_median | Invoer (veld) | Middenwaarde na de omrekening | geheel getal -100 ~ 100 | - |
| dst_max | Invoer (veld) | Maximum na de omrekening | geheel getal -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Invoerwaarde {#get_input}

De invoerwaarde van de gekozen poort

<BlockImage module="roboids/CheeseStick" id="get_input" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Invoerpoort | Sa, Sb, Sc, La, Lb, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_input('Sa')
```

## Pulsinvoermodus instellen {#set_pulse_input_mode}

Stelt de pulsinvoermodus van de gekozen poort in.

<BlockImage module="roboids/CheeseStick" id="set_pulse_input_mode" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Pulsinvoerpoort | Sc, Lc | - |
| option | Keuzelijstoptie | Pull-modus | puls (default), puls (pull-up) (pull-up), puls (pull-down) (pull-down) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pulse_input_mode('Sc', 'pull-up')
```

## Pulsinvoerwaarde {#get_pulse_input}

Of er op de gekozen poort een pulsinvoer is gedetecteerd

<BlockImage module="roboids/CheeseStick" id="get_pulse_input" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Pulsinvoerpoort | Sc, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_pulse_input('Sc')
```

## Digitale uitgang instellen {#set_digital_output}

Stelt de digitale uitgangswaarde van de opgegeven poort in.  
De waarden die je kunt kiezen zijn 0 of 1.

<BlockImage module="roboids/CheeseStick" id="set_digital_output" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Digitale uitgangspoort | Sa, Sb, Sc, La, Lb, Lc, Mab, Mcd | - |
| value | Keuzelijstoptie | Uitgangswaarde | 0 of 1 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_digital_output('Sa', 1)
```

## PWM-uitgang instellen {#set_pwm_output}

Stelt de PWM-uitgangswaarde van de opgegeven poort in.  
Het bereik van de waarden die je kunt kiezen is 0 ~ 100.

<BlockImage module="roboids/CheeseStick" id="set_pwm_output" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | PWM-uitgangspoort | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Invoer (veld) | PWM-waarde | geheel getal 0 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pwm_output('Sa', 50)
```

## PWM-uitgang veranderen {#change_pwm_output}

Verandert de PWM-uitgangswaarde van de opgegeven poort.  
Het bereik van de waarden die je kunt kiezen is -100 ~ 100.

<BlockImage module="roboids/CheeseStick" id="change_pwm_output" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | PWM-uitgangspoort | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Invoer (veld) | PWM-verschil van de verandering | geheel getal -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.change_pwm_output('Sa', 10)
```

## Zoemtoon instellen {#sound_buzz}

Stelt de zoemtoon van Cheese Stick in.

<BlockImage module="roboids/CheeseStick" id="sound_buzz" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| hz | Invoer (blok) | Frequentie (Hz) | decimaal getal 0 ~ 6553,5 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_buzz(440)
```

## Een noot spelen {#sound_note}

Cheese Stick speelt de opgegeven noot.

<BlockImage module="roboids/CheeseStick" id="sound_note" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| note | Keuzelijstoptie | Noot | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Keuzelijstoptie | Octaaf | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_note('D', 5)
```

## Een geluid afspelen {#sound_clip}

Cheese Stick speelt een bepaalde geluidsclip af.

<BlockImage module="roboids/CheeseStick" id="sound_clip" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| clip | Keuzelijstoptie | Naam van de geluidsclip | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'happy'`, `'angry'`, `'sad'` en meer | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_clip('siren', wait=True)
```

## Geluid uitschakelen {#sound_off}

Zet het geluid van Cheese Stick uit.

<BlockImage module="roboids/CheeseStick" id="sound_off" />

### Parameters

(geen)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_off()
```

## Waarde van de versnelling {#acceleration}

De waarde van de zwaartekrachtversnelling op een bepaalde as

<BlockImage module="roboids/CheeseStick" id="acceleration" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Gemeten as | x, y, z | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x')
```

## Waarde van de temperatuursensor {#temperature}

De waarde van de temperatuursensor

<BlockImage module="roboids/CheeseStick" id="temperature" />

### Parameters

(geen)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.temperature()
```

## Waarde van de signaalsterkte {#signal_strength}

De signaalsterkte

<BlockImage module="roboids/CheeseStick" id="signal_strength" />

### Parameters

(geen)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.signal_strength()
```

## Batterijspanning {#battery}

De batterijspanning

<BlockImage module="roboids/CheeseStick" id="battery" />

### Parameters

(geen)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.battery()
```

## Is de toestand veranderd? {#state_change}

Of de toestand van de robot is veranderd

<BlockImage module="roboids/CheeseStick" id="state_change" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Soort toestand | 0 ~ 7 (zie de tabel hieronder) | - |

| unit | Voorwaarde |
|------|------|
| 0 | `acceleration('x') > 960` |
| 1 | `acceleration('x') < -960` |
| 2 | `acceleration('y') > 960` |
| 3 | `acceleration('y') < -960` |
| 4 | `acceleration('z') > 960` |
| 5 | `acceleration('z') < -960` |
| 6 | `tap()` (tikgebeurtenis) |
| 7 | `fall()` (valgebeurtenis) |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x') > 960
cheesestick.tap()    # case 6
cheesestick.fall()   # case 7
```
