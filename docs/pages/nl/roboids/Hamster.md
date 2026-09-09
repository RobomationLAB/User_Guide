---
title: Hamster
---

# Hamster

## Instantie declareren {#instance}

Voeg je een Hamster-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
hamster = Hamster(0)
# als er meerdere instanties zijn
hamster_1 = Hamster(1)
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Snelheid van het wiel instellen {#set_wheel_speed}

Bepaalt de snelheid van het wiel. Het bereik van de snelheid is -100 ~ 100.

<BlockImage module="roboids/Hamster" id="set_wheel_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Soort wiel | links(left), rechts(right), beide(both) | - |
| speed | Invoer (blok) | Snelheid van het wiel | geheel getal -100 ~ 100, 0: stil | - |

### Python
```python
hamster = Hamster(0)

hamster.set_wheel_speed('both', 50)
```

## Een tijd rijden {#move_time}

Rijdt met de huidige wielsnelheid de opgegeven tijd.  
Is er geen wielsnelheid ingesteld, dan rijdt de robot met de standaardsnelheid vooruit.  
Zet je het vinkje wacht aan, dan wordt gewacht tot de rit klaar is.

<BlockImage module="roboids/Hamster" id="move_time" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Rijtijd (seconden) | decimaal getal ≥ 0 | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

# wait = TRUE
hamster.move_time(5, wait=True)
# wait = FALSE
hamster.move_time(0.5, wait=False)
```

## Snelheid van het wiel veranderen {#change_speed}

Verandert de wielsnelheid van Hamster.  
De nieuwe wielsnelheid is de huidige wielsnelheid plus de ingevoerde snelheid.  
De nieuw ingestelde wielsnelheid wordt binnen het bereik -100 ~ 100 gehouden.

<BlockImage module="roboids/Hamster" id="change_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Soort wiel | links(left), rechts(right), beide(both) | - |
| speed | Invoer (blok) | Snelheidsverschil van de verandering | geheel getal -200 ~ 200 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_wheel_speed('both', 10)
```

## Stoppen {#stop}

Stopt de beweging van Hamster.  
De snelheid van beide wielen van Hamster wordt op 0 gezet.

<BlockImage module="roboids/Hamster" id="stop" />

### Parameters

(geen)

### Python
```python
hamster = Hamster(0)

hamster.stop()
```

## Op het bord één stap vooruit {#grid_move}

Beweegt op het bord telkens één vak, zoals vastgelegd.

<BlockImage module="roboids/Hamster" id="grid_move" />

### Parameters

geen.

### Python
```python
hamster = Hamster(0)

hamster.grid_move()
```

## Op het bord één keer draaien {#grid_turn}

Draait op het bord 90 graden in de opgegeven richting.

<BlockImage module="roboids/Hamster" id="grid_turn" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| direction | Keuzelijstoptie | Draairichting | links(left), rechts(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.grid_turn('left')
```

## Een lijn volgen met de sensor {#trace_mode}

Hamster volgt met de vloersensor een lijn van een bepaalde kleur.

<BlockImage module="roboids/Hamster" id="trace_mode" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| floor | Keuzelijstoptie | Vloersensor waarmee wordt gevolgd | links(left), rechts(right), midden(center) | - |
| line | Keuzelijstoptie | Kleur van de lijn | zwart(black), wit(white) | black |

### Python
```python
hamster = Hamster(0)

hamster.trace_line('left', 'black')
```

## Op een kruispunt afslaan en bij het volgende kruispunt stoppen {#trace_until_grid}

Hamster slaat op een kruispunt in de opgegeven richting af en rijdt dan verder tot het volgende kruispunt.  
Zet je het vinkje wacht aan, dan wordt gewacht tot de rit klaar is.

<BlockImage module="roboids/Hamster" id="trace_until_grid" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| direction | Keuzelijstoptie | Richting op het kruispunt | links(left), rechts(right), vooruit(forward), keren(uturn) | - |
| line | Keuzelijstoptie | Kleur van de lijn | zwart(black), wit(white) | black |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

hamster.trace_intersection('left', 'black', wait=True)
```

## Lijnvolgsnelheid instellen {#set_trace_speed}

Stelt de lijnvolgsnelheid in. Het bereik van de snelheid is 1 ~ 10.

<BlockImage module="roboids/Hamster" id="set_trace_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Lijnvolgsnelheid | geheel getal 1 ~ 10 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_trace_speed(5)
```

## Stoppen met lijnvolgen {#stop_trace}

Beëindigt de lijnvolgfunctie van Hamster.

<BlockImage module="roboids/Hamster" id="stop_trace" />

### Parameters

(geen)

### Python
```python
hamster = Hamster(0)

hamster.stop_trace()
```

## Kleur van de led instellen {#set_led_color}

Stelt de ledkleur in.

<BlockImage module="roboids/Hamster" id="set_led_color" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Betreffende led | links(left), rechts(right), beide(both) | - |
| color | Keuzelijstoptie | Kleur | zwart(black), blauw(blue), groen(green), cyaan(cyan), rood(red), magenta(magenta), geel(yellow), wit(white) | - |

### Python
```python
hamster = Hamster(0)

hamster.set_led_color('both', 'red')
```

## Led uitschakelen {#turn_off}

Wist de kleur van de led.

<BlockImage module="roboids/Hamster" id="turn_off" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Betreffende led | links(left), rechts(right), beide(both) | both |

### Python
```python
hamster = Hamster(0)

hamster.turn_off('both')
```

## Zoemtoon instellen {#sound_buzz}

Stelt de zoemtoon van Hamster in op de opgegeven frequentie.  
Het bereik van de frequenties die klinken is 1,0 Hz ~ 6553,5 Hz.  
Voer je een andere waarde in, dan klinkt er geen zoemtoon.

<BlockImage module="roboids/Hamster" id="sound_buzz" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| hz | Invoer (blok) | Frequentie (Hz) | decimaal getal 0 ~ 6553,5 | - |

### Python
```python
hamster = Hamster(0)

hamster.sound_buzz(440)
```

## Een noot spelen {#sound_note}

Hamster speelt de opgegeven noot.

<BlockImage module="roboids/Hamster" id="sound_note" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| note | Keuzelijstoptie | Noot | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Keuzelijstoptie | Octaaf | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster = Hamster(0)

hamster.sound_note('D', 5)
```

## Geluid uitschakelen {#sound_off}

Zet het geluid van Hamster uit.

<BlockImage module="roboids/Hamster" id="sound_off" />

### Parameters

(geen)

### Python
```python
hamster = Hamster(0)

hamster.sound_off()
```

## Snelheid van het wiel {#wheel_speed}

De snelheid van een bepaald wiel

<BlockImage module="roboids/Hamster" id="wheel_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Betreffend wiel | links(left), rechts(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.wheel_speed('left')
```

## Waarde van de nabijheidssensor {#proximity}

De waarde van een bepaalde nabijheidssensor

<BlockImage module="roboids/Hamster" id="proximity" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Plaats van de gemeten sensor | links(left), rechts(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.proximity('left')
```

## Waarde van de vloersensor {#floor}

De waarde van een bepaalde vloersensor

<BlockImage module="roboids/Hamster" id="floor" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Plaats van de gemeten sensor | links(left), rechts(right), midden(center) | - |

### Python
```python
hamster = Hamster(0)

hamster.floor('left')
```

## Waarde van de versnelling {#acceleration}

De waarde van de zwaartekrachtversnelling op een bepaalde as

<BlockImage module="roboids/Hamster" id="acceleration" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Gemeten as | x, y, z | - |

### Python
```python
hamster = Hamster(0)

hamster.acceleration('x')
```

## Waarde van de helderheidssensor {#light}

De waarde van de helderheidssensor

<BlockImage module="roboids/Hamster" id="light" />

### Parameters

(geen)

### Python
```python
hamster = Hamster(0)

hamster.light()
```

## Waarde van de temperatuursensor {#temperature}

De waarde van de temperatuursensor

<BlockImage module="roboids/Hamster" id="temperature" />

### Parameters

(geen)

### Python
```python
hamster = Hamster(0)

hamster.temperature()
```

## Waarde van de signaalsterkte {#signal_strength}

De signaalsterkte

<BlockImage module="roboids/Hamster" id="signal_strength" />

### Parameters

(geen)

### Python
```python
hamster = Hamster(0)

hamster.signal_strength()
```

## Batterijspanning {#battery}

De batterijspanning

<BlockImage module="roboids/Hamster" id="battery" />

### Parameters

(geen)

### Python
```python
hamster = Hamster(0)

hamster.battery()
```

## Is de toestand veranderd? {#state_change}

Of de toestand van de robot is veranderd

<BlockImage module="roboids/Hamster" id="state_change" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Soort toestand | 0 ~ 6 (zie de tabel hieronder) | - |

| unit | Voorwaarde |
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

## Invoermodus van de in-/uitvoerpoort instellen {#io_mode}

Stelt de invoermodus van de IO-poort in.

<BlockImage module="roboids/Hamster" id="io_mode" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | In-/uitvoerpoort | a, b, beide(both) | - |
| option | Keuzelijstoptie | In-/uitvoermodus | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster = Hamster(0)

hamster.io_mode('both', 'analog_input')
```

## Uitvoerwaarde van de in-/uitvoerpoort instellen {#set_output}

Stelt de uitvoerwaarde van de opgegeven IO-poort in.

<BlockImage module="roboids/Hamster" id="set_output" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | In-/uitvoerpoort | a, b, beide(both) | - |
| data | Invoer (blok) | Uitvoerwaarde | geheel getal 0 ~ 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_output('both', 90)
```

## Uitvoerwaarde van de in-/uitvoerpoort veranderen {#change_output}

Verandert de uitvoerwaarde van de opgegeven IO-poort.

<BlockImage module="roboids/Hamster" id="change_output" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | In-/uitvoerpoort | a, b, beide(both) | - |
| data | Invoer (blok) | Verschil van de uitvoerwaarde | geheel getal | - |

### Python
```python
hamster = Hamster(0)

hamster.change_output('a', 10)
```

## Grijper openen / sluiten {#gripper}

Opent of sluit de grijper van Hamster.  
Afhankelijk van de waarde van unit wordt een van de twee methoden aangeroepen.

<BlockImage module="roboids/Hamster" id="gripper" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Actie | sluiten(close), openen(open) | - |

### Python
```python
hamster = Hamster(0)

# unit = "open"
hamster.open_gripper()
# unit = "close"
hamster.close_gripper()
```

## Schiethoek instellen {#shooter}

Bestuurt de lanceerinrichting door de hoek in te stellen. Het bereik van de hoek is 0 ~ 180.

<BlockImage module="roboids/Hamster" id="shooter" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Schiethoek | geheel getal 0 ~ 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.shooter(45)
```

## Invoerwaarde van de in-/uitvoerpoort {#input}

Geeft de invoerwaarde van de in-/uitvoerpoort van Hamster terug.

<BlockImage module="roboids/Hamster" id="input" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | In-/uitvoerpoort | a, b | - |

### Python
```python
hamster = Hamster(0)

hamster.get_input('a')
```
