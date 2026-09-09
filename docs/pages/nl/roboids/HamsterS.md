---
title: HamsterS
---

# HamsterS

## Instantie declareren {#instance}

Voeg je een HamsterS-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
hamster_s = HamsterS(0)
# als er meerdere instanties zijn
hamster_s_1 = HamsterS(1)
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Snelheid van het wiel instellen {#set_wheel_speed}

Bepaalt de snelheid van het wiel. Het bereik van de snelheid is -100 ~ 100.

<BlockImage module="roboids/HamsterS" id="set_wheel_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Soort wiel | links(left), rechts(right), beide(both) | - |
| speed | Invoer (blok) | Snelheid van het wiel | geheel getal -100 ~ 100, 0: stil | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_wheel_speed('both', 50)
```

## Een afstand rijden {#move_distance}

Rijdt met de huidige wielsnelheid de opgegeven afstand.  
Is er geen wielsnelheid ingesteld, dan rijdt de robot met de standaardsnelheid vooruit.  
Is de afstand 0, dan blijft de robot rijden met de huidige wielsnelheid.  
Zet je het vinkje wacht aan, dan wordt gewacht tot de rit klaar is.

<BlockImage module="roboids/HamsterS" id="move_distance" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Af te leggen afstand | decimaal getal ≥ 0 | - |
| unit | Keuzelijstoptie | Eenheid van afstand | cm, mm, inch(inch) | cm |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.move_distance(50, 'cm', wait=True)
```

## Een tijd rijden {#move_time}

Rijdt met de huidige wielsnelheid de opgegeven tijd.  
Is er geen wielsnelheid ingesteld, dan rijdt de robot met de standaardsnelheid vooruit.  
Zet je het vinkje wacht aan, dan wordt gewacht tot de rit klaar is.

<BlockImage module="roboids/HamsterS" id="move_time" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Rijtijd (seconden) | decimaal getal ≥ 0 | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

# wait = TRUE
hamster_s.move_time(5, wait=True)
# wait = FALSE
hamster_s.move_time(5, wait=False)
```

## Op de plaats draaien {#turn_degree}

Stelt de richting en de hoek in waarover de robot op de plaats draait.  
Zet je het vinkje wacht aan, dan wordt gewacht tot de draai klaar is.

<BlockImage module="roboids/HamsterS" id="turn_degree" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| direction | Keuzelijstoptie | Draairichting | links(left), rechts(right) | - |
| data | Invoer (blok) | Draaihoek (graden) | decimaal getal ≥ 0 | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_degree('left', 90, wait=True)
```

## Snelheid van het wiel veranderen {#change_speed}

Verandert de wielsnelheid van HamsterS.  
De nieuwe wielsnelheid is de huidige wielsnelheid plus de ingevoerde snelheid.

<BlockImage module="roboids/HamsterS" id="change_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Soort wiel | links(left), rechts(right), beide(both) | - |
| speed | Invoer (blok) | Snelheidsverschil van de verandering | geheel getal -200 ~ 200 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_wheel_speed('both', 10)
```

## Stoppen {#stop}

Stopt de beweging van HamsterS.

<BlockImage module="roboids/HamsterS" id="stop" />

### Parameters

(geen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop()
```

## Beweegt het wiel? {#wheel_moving}

Geeft true terug als het wiel beweegt en false als het stilstaat.

<BlockImage module="roboids/HamsterS" id="wheel_moving" />

### Parameters

(geen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_moving()
```

## Op het bord één stap vooruit {#grid_move}

Beweegt op het bord telkens één vak, zoals vastgelegd.

<BlockImage module="roboids/HamsterS" id="grid_move" />

### Parameters

geen.

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_move()
```

## Op het bord één keer draaien {#grid_turn}

Draait op het bord 90 graden in de opgegeven richting.

<BlockImage module="roboids/HamsterS" id="grid_turn" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| direction | Keuzelijstoptie | Draairichting | links(left), rechts(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_turn('left')
```

## Draaien om de penhouder {#pivot}

Stelt bij gebruik van de penhouder het draaipunt, de richting en de hoek in.  
Zet je het vinkje wacht aan, dan wordt gewacht tot de draai klaar is.

<BlockImage module="roboids/HamsterS" id="pivot" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| base | Keuzelijstoptie | Draaipunt | linkerpen(left_pen), rechterpen(right_pen), linkerwiel(left_wheel), rechterwiel(right_wheel) | - |
| direction | Keuzelijstoptie | Draairichting | vooruit(forward), achteruit(backward) | - |
| degree | Invoer (blok) | Draaihoek (graden) | decimaal getal ≥ 0 | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot('left_pen', 'forward', 90, wait=True)
```

## Een cirkel draaien om de penhouder {#pivot_circle}

Stelt bij het tekenen van een cirkel met de penhouder het draaipunt, de richting, de straal en de hoek in.  
Zet je het vinkje wacht aan, dan wordt gewacht tot de draai klaar is.

<BlockImage module="roboids/HamsterS" id="pivot_circle" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| base | Keuzelijstoptie | Draaipunt | linkerpen(left_pen), rechterpen(right_pen) | - |
| direction | Keuzelijstoptie | Draairichting | linksvooruit(left_forward), linksachteruit(left_backward), rechtsvooruit(right_forward), rechtsachteruit(right_backward) | - |
| degree | Invoer (blok) | Draaihoek (graden) | decimaal getal ≥ 0 | - |
| radius | Invoer (blok) | Straal van de draai | decimaal getal ≥ 0 | - |
| unit | Keuzelijstoptie | Eenheid van de straal | cm, mm, inch(inch) | cm |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot_circle('left_pen', 'left_forward', 90, 1, 'cm', wait=True)
```

## Een lijn volgen met de sensor {#trace_mode}

HamsterS volgt met de vloersensor een lijn van een bepaalde kleur.

<BlockImage module="roboids/HamsterS" id="trace_mode" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| floor | Keuzelijstoptie | Vloersensor waarmee wordt gevolgd | links(left), rechts(right), midden(center) | - |
| line | Keuzelijstoptie | Kleur van de lijn | zwart(black), wit(white) | black |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_line('left', 'black')
```

## Op een kruispunt afslaan en bij het volgende kruispunt stoppen {#trace_until_grid}

HamsterS slaat op een kruispunt in de opgegeven richting af en rijdt dan verder tot het volgende kruispunt.  
Zet je het vinkje wacht aan, dan wordt gewacht tot de rit klaar is.  

<BlockImage module="roboids/HamsterS" id="trace_until_grid" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| direction | Keuzelijstoptie | Richting op het kruispunt | linksaf(left), rechtsaf(right), rechtdoor(forward), keren(uturn) | - |
| line | Keuzelijstoptie | Kleur van de lijn | zwart(black), wit(white) | black |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_intersection('left', 'black', wait=True)
```

## Lijnvolgsnelheid instellen {#set_trace_speed}

Stelt de lijnvolgsnelheid in. Het bereik van de snelheid is 1 ~ 10.

<BlockImage module="roboids/HamsterS" id="set_trace_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Lijnvolgsnelheid | geheel getal 1 ~ 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_speed(5)
```

## Lijnvolgcorrectie instellen {#set_trace_gain}

Stelt de richtingscorrectie bij het lijnvolgen in. Het bereik van de correctie is 1 ~ 10.

<BlockImage module="roboids/HamsterS" id="set_trace_gain" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Richtingscorrectie | geheel getal 1 ~ 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_gain(5)
```

## Stoppen met lijnvolgen {#stop_trace}

Beëindigt de lijnvolgfunctie van HamsterS.

<BlockImage module="roboids/HamsterS" id="stop_trace" />

### Parameters

(geen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop_trace()
```

## Kleur van de led instellen {#set_led_color}

Stelt de ledkleur van HamsterS in.  
Kies je in het kleurenpalet een kleur, dan wordt die als **kleurnaam** (Engelse tekst) doorgegeven. (De code wordt niet met R-, G-, B-getalwaarden gemaakt, maar met de kleurnaam.)

<BlockImage module="roboids/HamsterS" id="set_led_color" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Betreffende led | links(left), rechts(right), beide(both) | - |
| color | Kleur | Keuze in het kleurenpalet → wordt de kleurnaam (Engels) | Kleurnaam: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', 'red')
```

## Kleur van de led instellen met een blok uit de categorie Kleur {#set_led_color_with_block}

Neemt een blok uit de categorie Kleur (`[R, G, B]`) als invoer en stelt daarmee de ledkleur in.

<BlockImage module="roboids/HamsterS" id="set_led_color_with_block" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Betreffende led | links(left), rechts(right), beide(both) | - |
| data | Invoer (kleur) | Blok uit de categorie Kleur of een `[R, G, B]`-array | `[0~255, 0~255, 0~255]` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', *Utils.color_rgb(255, 128, 0))
```

## Kleur van de led veranderen met RGB-waarden {#change_by_rgb}

Verandert de ledkleur van HamsterS met de opgegeven R-, G- en B-waarden.

<BlockImage module="roboids/HamsterS" id="change_by_rgb" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Betreffende led | links(left), rechts(right), beide(both) | - |
| r | Invoer (veld) | Verandering van rood | geheel getal -255 ~ 255 | 0 |
| g | Invoer (veld) | Verandering van groen | geheel getal -255 ~ 255 | 0 |
| b | Invoer (veld) | Verandering van blauw | geheel getal -255 ~ 255 | 0 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_led_color('both', 10, 0, 0)
```

## Led uitschakelen {#turn_off}

Wist de kleur van de led.

<BlockImage module="roboids/HamsterS" id="turn_off" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Betreffende led | links(left), rechts(right), beide(both) | both |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_off('both')
```

## Zoemtoon instellen {#sound_buzz}

Stelt de zoemtoon van HamsterS in op de opgegeven frequentie.  
Het bereik van de frequenties die klinken is 122,1 Hz ~ 4186,0 Hz.  
Voer je een andere waarde in, dan klinkt er geen zoemtoon.

<BlockImage module="roboids/HamsterS" id="sound_buzz" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| hz | Invoer (blok) | Frequentie (Hz) | decimaal getal 122,1 ~ 4186,0 (anders 0) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_buzz(440)
```

## Een noot spelen {#sound_note}

HamsterS speelt de opgegeven noot.

<BlockImage module="roboids/HamsterS" id="sound_note" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| note | Keuzelijstoptie | Noot | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Keuzelijstoptie | Octaaf | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_note('D', 5)
```

## Een geluid afspelen {#sound_clip}

HamsterS speelt een bepaalde geluidsclip af.  
Zet je het vinkje wacht aan, dan wordt gewacht tot het afspelen klaar is.

<BlockImage module="roboids/HamsterS" id="sound_clip" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| clip | Keuzelijstoptie | Naam van de geluidsclip | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'happy'`, `'angry'`, `'sad'` en meer | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_clip('siren', wait=True)
```

## Geluid uitschakelen {#sound_off}

Zet het geluid van HamsterS uit.

<BlockImage module="roboids/HamsterS" id="sound_off" />

### Parameters

(geen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_off()
```

## Wordt geluid afgespeeld? {#sound_playing}

Geeft true terug als er geluid wordt afgespeeld en false als dat niet zo is.

<BlockImage module="roboids/HamsterS" id="sound_playing" />

### Parameters

(geen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_playing()
```

## Snelheid van het wiel {#wheel_speed}

De snelheid van een bepaald wiel

<BlockImage module="roboids/HamsterS" id="wheel_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Betreffend wiel | links(left), rechts(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_speed('left')
```

## Waarde van de nabijheidssensor {#proximity}

De waarde van een bepaalde nabijheidssensor

<BlockImage module="roboids/HamsterS" id="proximity" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Plaats van de gemeten sensor | links(left), rechts(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.proximity('left')
```

## Waarde van de vloersensor {#floor}

De waarde van een bepaalde vloersensor

<BlockImage module="roboids/HamsterS" id="floor" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Plaats van de gemeten sensor | links(left), rechts(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.floor('left')
```

## Waarde van de versnelling {#acceleration}

De waarde van de zwaartekrachtversnelling op een bepaalde as

<BlockImage module="roboids/HamsterS" id="acceleration" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Gemeten as | x, y, z | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.acceleration('x')
```

## Waarde van de helderheidssensor {#light}

De waarde van de helderheidssensor

<BlockImage module="roboids/HamsterS" id="light" />

### Parameters

(geen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.light()
```

## Waarde van de temperatuursensor {#temperature}

De waarde van de temperatuursensor

<BlockImage module="roboids/HamsterS" id="temperature" />

### Parameters

(geen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.temperature()
```

## Waarde van de signaalsterkte {#signal_strength}

De signaalsterkte

<BlockImage module="roboids/HamsterS" id="signal_strength" />

### Parameters

(geen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.signal_strength()
```

## Batterijspanning {#battery}

De batterijspanning

<BlockImage module="roboids/HamsterS" id="battery" />

### Parameters

(geen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.battery()
```

## Is de toestand veranderd? {#state_change}

Of de toestand van de robot is veranderd

<BlockImage module="roboids/HamsterS" id="state_change" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Soort toestand | 0 ~ 7 (zie de tabel hieronder) | - |

| unit | Betekenis | Python |
|------|------|--------|
| 0 | voorover kantelen | `acceleration('x') > 5000` |
| 1 | achterover kantelen | `acceleration('x') < -5000` |
| 2 | naar links kantelen | `acceleration('y') > 5000` |
| 3 | naar rechts kantelen | `acceleration('y') < -5000` |
| 4 | omgekeerd op de kop | `acceleration('z') > 0` |
| 5 | niet omgekeerd | `acceleration('z') < -3000` |
| 6 | obstakel/hand opgemerkt | `proximity('left') > 50 or proximity('right') > 50` |
| 7 | tikken | `tap()` |

### Python
```python
hamster_s = HamsterS(0)

# unit = 0
hamster_s.acceleration('x') > 5000
# unit = 6
hamster_s.proximity('left') > 50 or hamster_s.proximity('right') > 50
# unit = 7
hamster_s.tap()
```

## Invoermodus van de in-/uitvoerpoort instellen {#io_mode}

Stelt de invoermodus van de IO-poort in.

<BlockImage module="roboids/HamsterS" id="io_mode" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | In-/uitvoerpoort | a, b, beide(both) | - |
| option | Keuzelijstoptie | In-/uitvoermodus | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.io_mode('both', 'analog_input')
```

## Uitvoerwaarde van de in-/uitvoerpoort instellen {#set_output}

Stelt de uitvoerwaarde van de opgegeven IO-poort in.

<BlockImage module="roboids/HamsterS" id="set_output" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | In-/uitvoerpoort | a, b, beide(both) | - |
| data | Invoer (blok) | Uitvoerwaarde | geheel getal 0 ~ 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_output('a', 90)
```

## Uitvoerwaarde van de in-/uitvoerpoort veranderen {#change_output}

Verandert de uitvoerwaarde van de opgegeven IO-poort.

<BlockImage module="roboids/HamsterS" id="change_output" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | In-/uitvoerpoort | a, b, beide(both) | - |
| data | Invoer (blok) | Verschil van de uitvoerwaarde | geheel getal | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_output('a', 10)
```

## Grijper openen / sluiten {#gripper}

Opent of sluit de grijper van HamsterS.  
Afhankelijk van de waarde van unit wordt een van de twee methoden aangeroepen.

<BlockImage module="roboids/HamsterS" id="gripper" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Actie | openen(open), sluiten(close) | - |

### Python
```python
hamster_s = HamsterS(0)

# unit = "open"
hamster_s.open_gripper()
# unit = "close"
hamster_s.close_gripper()
```

## Lanceerhoek instellen {#shooter}

Bestuurt de lanceerinrichting door de hoek in te stellen. Het bereik van de hoek is 0 ~ 180.

<BlockImage module="roboids/HamsterS" id="shooter" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Lanceerhoek | geheel getal 0 ~ 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.shooter(45)
```

## Invoerwaarde van de in-/uitvoerpoort {#input}

Geeft de invoerwaarde van de in-/uitvoerpoort van HamsterS terug.

<BlockImage module="roboids/HamsterS" id="input" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | In-/uitvoerpoort | a, b | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.get_input('a')
```
