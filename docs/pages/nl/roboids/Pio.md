---
title: Piobot
---

# Piobot

## Instantie declareren {#instance}

Voeg je een Piobot(Pio)-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
pio = Pio(0)
# als er meerdere instanties zijn
pio_1 = Pio(1)
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Snelheid van het wiel instellen {#set_wheel_speed}

Stelt de snelheid van het wiel in. Het bereik van de wielsnelheid is -100 ~ 100.

<BlockImage module="roboids/Pio" id="set_wheel_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Soort wiel | links(left), rechts(right), beide(both) | - |
| speed | Invoer (blok) | Snelheid van het wiel | geheel getal -100 ~ 100, 0: stil | - |

### Python
```python
pio = Pio(0)

pio.set_wheel_speed('both', 50)
```

## Een afstand rijden {#move_distance}

Rijdt met de huidige wielsnelheid de opgegeven afstand.  
Is er geen wielsnelheid ingesteld, dan rijdt de robot met de standaardsnelheid vooruit.  
Is de afstand 0, dan blijft de robot rijden met de huidige wielsnelheid.  
Zet je het vinkje wacht aan, dan wordt gewacht tot de rit klaar is.

<BlockImage module="roboids/Pio" id="move_distance" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Af te leggen afstand | decimaal getal ≥ 0 | - |
| unit | Keuzelijstoptie | Eenheid van afstand | cm, mm, inch(inch) | cm |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.move_distance(50, 'cm', wait=True)
```

## Een tijd rijden {#move_time}

Rijdt met de huidige wielsnelheid de opgegeven tijd.  
Is er geen wielsnelheid ingesteld, dan rijdt de robot met de standaardsnelheid vooruit.  
Zet je het vinkje wacht aan, dan wordt gewacht tot de rit klaar is.

<BlockImage module="roboids/Pio" id="move_time" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Rijtijd (seconden) | decimaal getal ≥ 0 | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# wait = TRUE
pio.move_time(5, wait=True)
# wait = FALSE
pio.move_time(5, wait=False)
```

## Op de plaats draaien {#turn_degree}

Stelt de richting en de hoek in waarover de robot op de plaats draait.  
Zet je het vinkje wacht aan, dan wordt gewacht tot de draai klaar is.

<BlockImage module="roboids/Pio" id="turn_degree" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| direction | Keuzelijstoptie | Draairichting | links(left), rechts(right) | - |
| data | Invoer (blok) | Draaihoek (graden) | decimaal getal ≥ 0 | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# direction = "left"
pio.turn_degree('left', 90, wait=True)
# direction = "right"
pio.turn_degree('right', 90, wait=True)
```

## Snelheid van het wiel veranderen {#change_speed}

Verandert de wielsnelheid van Piobot.  
De nieuwe wielsnelheid is de huidige wielsnelheid plus de ingevoerde snelheid.  
De nieuw ingestelde wielsnelheid wordt binnen het bereik -100 ~ 100 gehouden.

<BlockImage module="roboids/Pio" id="change_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Soort wiel | links(left), rechts(right), beide(both) | - |
| speed | Invoer (blok) | Snelheidsverschil van de verandering | geheel getal -200 ~ 200 | - |

### Python
```python
pio = Pio(0)

pio.change_wheel_speed('both', 50)
```

## Turbomodus aan / uit {#turbo}

Zet de turbomodus van Piobot aan of uit.

<BlockImage module="roboids/Pio" id="turbo" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Turbomodus ON / OFF | aan(on=True), uit(off=False) | TRUE |

### Python
```python
pio = Pio(0)

pio.turbo(True)
```

## Stoppen {#stop}

Stopt de beweging van Piobot.  
De snelheid van beide wielen van Piobot wordt op 0 gezet.

<BlockImage module="roboids/Pio" id="stop" />

### Parameters

(geen)

### Python
```python
pio = Pio(0)

pio.stop()
```

## Beweegt het wiel? {#wheel_moving}

Geeft true terug als het wiel beweegt en false als het stilstaat.

<BlockImage module="roboids/Pio" id="wheel_moving" />

### Parameters

(geen)

### Python
```python
pio = Pio(0)

pio.wheel_moving()
```

## Op het bord één stap bewegen {#grid_move}

Beweegt op het bord telkens één vak, zoals vastgelegd.

<BlockImage module="roboids/Pio" id="grid_move" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Bewegingsrichting | vooruit(forward), achteruit(backward), naar links(left), naar rechts(right) | - |

### Python
```python
pio = Pio(0)

pio.grid_move('forward')
```

## Op het bord één keer draaien {#grid_turn}

Piobot draait op het bord 90 graden in de opgegeven richting. Er wordt altijd gewacht tot het klaar is (intern staat wait=True vast).

<BlockImage module="roboids/Pio" id="grid_turn" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Draairichting | links(left), rechts(right) | - |

### Python
```python
pio = Pio(0)

# unit = "left"
pio.grid_turn('left')
# unit = "right"
pio.grid_turn('right')
```

## Neksnelheid instellen {#set_neck_speed}

Stelt de draaisnelheid van de nek in. Het bereik van de neksnelheid is 1 ~ 6.

<BlockImage module="roboids/Pio" id="set_neck_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Draaisnelheid van de nek | geheel getal 1 ~ 6 | 4 |

### Python
```python
pio = Pio(0)

pio.set_neck_speed(4)
```

## Nekhoek instellen {#set_neck_angle}

Stelt de hoek in waarop de nek na het draaien uitkomt. Het bereik van de nekhoek is -45 ~ 45.

<BlockImage module="roboids/Pio" id="set_neck_angle" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Nekhoek (graden) | decimaal getal -45 ~ 45 | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.set_neck_angle(15, wait=True)
```

## Beweegt de nek? {#neck_moving}

Geeft true terug als de nek beweegt en false als hij stilstaat.

<BlockImage module="roboids/Pio" id="neck_moving" />

### Parameters

(geen)

### Python
```python
pio = Pio(0)

pio.neck_moving()
```

## Kleur van de oogled instellen {#set_eye_color}

Stelt de kleur van de oogled van Piobot in.  
Je kunt de kleur van het linker, het rechter of beide ogen veranderen.  
Kies je een kleurvoorkeuze, dan wordt die als **kleurnaam** (Engelse tekst) doorgegeven. (De code wordt niet met R-, G-, B-getalwaarden gemaakt, maar met de kleurnaam.)

<BlockImage module="roboids/Pio" id="set_eye_color" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Betreffend oog | links(left), rechts(right), beide(both) | - |
| color | Keuzelijstoptie | Kleurvoorkeuze → wordt de kleurnaam (Engels) | zwart(black), rood(red), geel(yellow), groen(green), cyaan(cyan), blauw(blue), magenta(magenta), wit(white) | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', 'red')
```

## Kleur van de oogled instellen met een blok uit de categorie Kleur {#set_eye_color_with_block}

Stelt de kleur van de oogled van Piobot in met de blokken uit de categorie Kleur.  
Je kunt de kleur van het linker, het rechter of beide ogen veranderen.

<BlockImage module="roboids/Pio" id="set_eye_color_with_block" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Betreffend oog | links(left), rechts(right), beide(both) | - |
| data | Invoer (kleur) | [R, G, B]-array | Blok uit de categorie Kleur of `[0~255, 0~255, 0~255]` | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', *Utils.color('red'))
```

## Kleur van de oogled veranderen met RGB-waarden {#change_by_rgb}

Verandert de kleur van de oogled van Piobot met de opgegeven R-, G- en B-waarden.  
Je kunt de kleur van het linker, het rechter of beide ogen instellen.

<BlockImage module="roboids/Pio" id="change_by_rgb" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Betreffend oog | links(left), rechts(right), beide(both) | - |
| r | Invoer (veld) | Verandering van rood | geheel getal -255 ~ 255 | 0 |
| g | Invoer (veld) | Verandering van groen | geheel getal -255 ~ 255 | 0 |
| b | Invoer (veld) | Verandering van blauw | geheel getal -255 ~ 255 | 0 |

### Python
```python
pio = Pio(0)

pio.change_eye_color('both', 10, 0, 0)
```

## Oogpatroon instellen {#set_eye_pattern}

Stelt het patroon van de ogen in en geeft aan welke kleur elk oog heeft wanneer het patroon start.

<BlockImage module="roboids/Pio" id="set_eye_pattern" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| pattern | Keuzelijstoptie | Soort patroon | uit(reset), knipperen(blink), dimmen(dimming), regenboog(rainbow) | - |
| left | Keuzelijstoptie | Kleur van het linkeroog | standaard(black), rood(red), geel(yellow), groen(green), cyaan(cyan), blauw(blue), magenta(magenta), wit(white) | white |
| right | Keuzelijstoptie | Kleur van het rechteroog | (hetzelfde als left) | white |

### Python
```python
pio = Pio(0)

pio.set_eye_pattern('dimming', 'green', 'red')
```

## Oogled uitschakelen {#turn_off}

Wist de kleur van het oog.

<BlockImage module="roboids/Pio" id="turn_off" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Betreffend oog | links(left), rechts(right), beide(both) | both |

### Python
```python
pio = Pio(0)

pio.turn_off('both')
```

## Zoemtoon instellen {#sound_buzz}

Stelt de zoemtoon van Piobot in op de opgegeven frequentie.  
Het bereik van de frequenties die klinken is 27,5 Hz ~ 6553,5 Hz.  
Voer je een andere waarde in, dan klinkt er geen zoemtoon.

<BlockImage module="roboids/Pio" id="sound_buzz" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| hz | Invoer (blok) | Frequentie (Hz) | decimaal getal 27,5 ~ 6553,5 | - |

### Python
```python
pio = Pio(0)

pio.sound_buzz(440)
```

## Een noot spelen {#sound_note}

Piobot speelt de opgegeven noot.

<BlockImage module="roboids/Pio" id="sound_note" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| note | Keuzelijstoptie | Noot | Do(C), Do#/Re♭(C#), Re(D), Re#/Mi♭(D#), Mi(E), Fa(F), Fa#/Sol♭(F#), Sol(G), Sol#/La♭(G#), La(A), La#/Si♭(A#), Si(B) | - |
| octave | Keuzelijstoptie | Octaaf | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
pio = Pio(0)

pio.sound_note('D', 5)
```

## Een geluid afspelen {#sound_clip}

Piobot speelt een bepaalde geluidsclip af.  
Zet je het vinkje wacht aan, dan wordt gewacht tot het afspelen klaar is.

<BlockImage module="roboids/Pio" id="sound_clip" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| clip | Keuzelijstoptie | Naam van de geluidsclip | `'mute'`, `'beep'`, `'beep2'`, `'beep3'`, `'siren'`, `'engine'`, `'robot'`, `'connect'` en meer | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_clip('siren', wait=True)
```

## Een melodie afspelen {#sound_melody}

Piobot speelt een bepaalde melodie af.  
Zet je het vinkje wacht aan, dan wordt gewacht tot het afspelen klaar is.

<BlockImage module="roboids/Pio" id="sound_melody" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| melody | Keuzelijstoptie | Naam van de melodie | `'mute'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` en meer | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_melody('happy', wait=True)
```

## Geluid uitschakelen {#sound_off}

Zet het geluid van Piobot uit.

<BlockImage module="roboids/Pio" id="sound_off" />

### Parameters

(geen)

### Python
```python
pio = Pio(0)

pio.sound_off()
```

## Wordt geluid afgespeeld? {#sound_playing}

Geeft true terug als er geluid wordt afgespeeld en false als dat niet zo is.

<BlockImage module="roboids/Pio" id="sound_playing" />

### Parameters

(geen)

### Python
```python
pio = Pio(0)

pio.sound_playing()
```

## Snelheid van het wiel {#wheel_speed}

De snelheid van een bepaald wiel

<BlockImage module="roboids/Pio" id="wheel_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Betreffend wiel | links(left), rechts(right) | - |

### Python
```python
pio = Pio(0)

pio.wheel_speed('left')
```

## Waarde van de signaalsterkte {#signal_strength}

De signaalsterkte

<BlockImage module="roboids/Pio" id="signal_strength" />

### Parameters

(geen)

### Python
```python
pio = Pio(0)

pio.signal_strength()
```

## Batterijspanning {#battery}

De batterijspanning

<BlockImage module="roboids/Pio" id="battery" />

### Parameters

(geen)

### Python
```python
pio = Pio(0)

pio.battery()
```

## Toets van het toetsenblok {#keypad}

Merkt op welke toets van het toetsenblok de gebruiker het laatst heeft ingedrukt.

<BlockImage module="roboids/Pio" id="keypad" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| button | Keuzelijstoptie | Toets die wordt opgemerkt | uitvoeren(play), vooruit bewegen(forward), achteruit bewegen(backward), naar links bewegen(left), naar rechts bewegen(right), actie(action), herhalen(repeat), wissen(clear) | - |

### Python
```python
pio = Pio(0)

pio.keypad('forward')
```
