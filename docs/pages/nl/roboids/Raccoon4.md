---
title: RaccoonBot
---

# RaccoonBot

## Instantie declareren {#instance}

Voeg je een RaccoonBot-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
raccoon = RaccoonBot(0)
# als er meerdere instanties zijn
raccoon_1 = RaccoonBot(1)
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Motorbesturing van het gewricht aan / uit {#motor}

Bepaalt of de besturing van elke gewrichtsmotor wordt losgelaten of aangehouden.  
Stel je niets in, dan start de robot met de motorbesturing van alle gewrichten aan.

<BlockImage module="roboids/Raccoon4" id="motor" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Nummer van het gewricht | alle gewrichten(-1), nr. 1(1), nr. 2(2), nr. 3(3), nr. 4(4) | -1 |
| on | Aankruisvak | Motorbesturing ON / OFF | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# alle gewrichten, motorbesturing uit
raccoon.motor(-1, False)

# gewricht 1, motorbesturing aan
raccoon.motor(1, True)
```

## Gewrichtssnelheid instellen {#speed_joint}

Stelt de snelheid van het gekozen gewricht in.

<BlockImage module="roboids/Raccoon4" id="speed_joint" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| joint | Keuzelijstoptie | Nummer van het gewricht | alle gewrichten(-1), nr. 1(1), nr. 2(2), nr. 3(3), nr. 4(4) | - |
| data | Invoer (blok) | Gewrichtssnelheid | geheel getal -100 ~ 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_speed_joint(1, 100)
```

## Gewrichtssnelheid veranderen {#change_speed_joint}

Verandert de snelheid van het gekozen gewricht.

<BlockImage module="roboids/Raccoon4" id="change_speed_joint" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| joint | Keuzelijstoptie | Nummer van het gewricht | alle gewrichten(-1), nr. 1(1), nr. 2(2), nr. 3(3), nr. 4(4) | - |
| data | Invoer (blok) | Snelheidsverschil van de verandering | geheel getal -200 ~ 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_speed_joint(1, 50)
```

## Gewrichtssnelheden in één keer instellen {#speed_joints}

Stelt de snelheid van de vier gewrichten in één keer in.

<BlockImage module="roboids/Raccoon4" id="speed_joints" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (array) | Array met de snelheid van 4 gewrichten | `[joint1, joint2, joint3, joint4]`, elk -100~100 | - |

### Python
```python
raccoon = RaccoonBot(0)

# letterlijke array [10, 20, 30, 40]
raccoon.set_speed_joints(10, 20, 30, 40)

# array uit een variabele
raccoon.set_speed_joints(*arr)
```

## Snelheid van de gewrichtshoekbesturing instellen {#angle_speed}

Stelt de snelheid in waarmee de gewrichten in de hoekbesturingsmodus worden bestuurd.

<BlockImage module="roboids/Raccoon4" id="angle_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Maximumsnelheid van de hoekbesturing | geheel getal 0 ~ 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.angle_max_speed(100)
```

## Gewrichtshoek instellen {#angle_joint}

Stelt de hoek van het gekozen gewricht in.

| joint | min | max |
|-------|-----|-----|
| 1 | -120 | 120 |
| 2 | -90 | 30 |
| 3 | -150 | 0 |
| 4 | -105 | 105 |

<BlockImage module="roboids/Raccoon4" id="angle_joint" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| joint | Keuzelijstoptie | Nummer van het gewricht | alle gewrichten(-1), nr. 1(1), nr. 2(2), nr. 3(3), nr. 4(4) | - |
| data | Invoer (blok) | Gewrichtshoek (graden) | zie de tabel hierboven (wordt automatisch beperkt) | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_angle_joint(1, 90, wait=True)
```

## Gewrichtshoek veranderen {#change_angle_joint}

Verandert de hoek van het gekozen gewricht.

<BlockImage module="roboids/Raccoon4" id="change_angle_joint" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| joint | Keuzelijstoptie | Nummer van het gewricht | alle gewrichten(-1), nr. 1(1), nr. 2(2), nr. 3(3), nr. 4(4) | - |
| data | Invoer (blok) | Hoekverschil van de verandering (graden) | zie de tabel hierboven (wordt automatisch beperkt) | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_angle_joint(1, 10, wait=True)
```

## Gewrichtshoeken in één keer instellen {#angle_joints}

Stelt de hoek van de vier gewrichten in één keer in.

<BlockImage module="roboids/Raccoon4" id="angle_joints" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (array) | Array met de hoek van 4 gewrichten of de naam van een houding | `[j1, j2, j3, j4]`-array | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# expliciete array
raccoon.set_angle_joints(0, 0, 0, 0, wait=True)
```

## Gewrichtsstatus initialiseren {#default_angle_joints}

Zet de hoek van de vier gewrichten op een vooraf bepaalde houding (`'zero'`, `'park'`, `'home'`).

<BlockImage module="roboids/Raccoon4" id="default_angle_joints" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Keuzelijst | Naam van de houding | `'zero'` / `'park'` / `'home'` | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

Voorkeuzes voor de houding:
- `'zero'` → `[0, 0, 0, 0]`
- `'park'` → `[0, 25, -145, -60]`
- `'home'` → `[0, -10, -140, 60]`

### Python
```python
raccoon = RaccoonBot(0)

# voorkeuze voor de houding
raccoon.set_angle_joints('home', wait=True)
```

## Gewrichtshoeken opslaan {#save_encoder}

Slaat de huidige encoderwaarden op in een variabele naar keuze.

<BlockImage module="roboids/Raccoon4" id="save_encoder" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| encoder | Variabele | Naam van de variabele waarin wordt opgeslagen | variabele | - |
| data | Invoer (array) | Beginarray die wordt opgeslagen | array met 4 elementen of lege array | - |

### Python
```python
raccoon = RaccoonBot(0)
encoder = None

encoder = raccoon.save_encoder([3, -6, -73, 60])
```

## Een bepaalde coördinaat instellen {#set_coordinate}

Beweegt de robotarm door een bepaalde coördinaat in te stellen.  
De bereiken van de coördinaten zijn:  
ten opzichte van de pols => x: -20,0 cm ~ 20,0 cm, y: -10,0 cm ~ 20,0 cm, z: -2,0 mm ~ 28,0 cm  
ten opzichte van de grijper => het bereik kan verschillen per aangesloten apparaat.  
De richting van de grijper staat vast: horizontaal of verticaal ten opzichte van de grond.  
Voer je een coördinaat in die niet bereikbaar is, dan wordt de opdracht overgeslagen.

<BlockImage module="roboids/Raccoon4" id="set_coordinate" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| origin | Keuzelijstoptie | Referentiepunt | pols(wrist), eindeffector(end_effector) | - |
| pos | Keuzelijstoptie | As | x, y, z | - |
| data | Invoer (blok) | Coördinaatwaarde | x: -20 ~ 20 cm, y: -10 ~ 20 cm, z: -2 ~ 28 cm | - |
| unit | Keuzelijstoptie | Eenheid | cm, mm, inch(inch) | cm |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# de x-coördinaat op 10 cm zetten
raccoon.set_coordinate('wrist', 'x', 10, 'cm', wait=True)

# de z-coördinaat ten opzichte van end_effector
raccoon.set_coordinate('end_effector', 'z', 15, 'cm', wait=True)
```

## Een bepaalde coördinaat veranderen {#change_coordinate}

Beweegt de robotarm door een bepaalde coördinaat ten opzichte van de huidige positie te veranderen.  
De bereiken van de coördinaten zijn:  
ten opzichte van de pols => x: -20,0 cm ~ 20,0 cm, y: -10,0 cm ~ 20,0 cm, z: -2,0 mm ~ 28,0 cm  
ten opzichte van de grijper => het bereik kan verschillen per aangesloten apparaat.  
De richting van de grijper staat vast: horizontaal of verticaal ten opzichte van de grond.  
Voer je een coördinaat in die niet bereikbaar is, dan wordt de opdracht overgeslagen.

<BlockImage module="roboids/Raccoon4" id="change_coordinate" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| origin | Keuzelijstoptie | Referentiepunt | pols(wrist), eindeffector(end_effector) | - |
| pos | Keuzelijstoptie | As | x, y, z | - |
| data | Invoer (blok) | Coördinaatverschil van de verandering | decimaal getal | - |
| unit | Keuzelijstoptie | Eenheid | cm, mm, inch(inch) | cm |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_coordinate('wrist', 'y', 5, 'cm', wait=True)
```

## Naar een xyz-coördinaat bewegen {#set_coordinates}

Stelt de x-, y- en z-coördinaat in één keer op de opgegeven waarden in.  

<BlockImage module="roboids/Raccoon4" id="set_coordinates" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| origin | Keuzelijstoptie | Referentiepunt | pols(wrist), eindeffector(end_effector) | - |
| x | Invoer (blok) | x-coördinaat | decimaal getal | - |
| y | Invoer (blok) | y-coördinaat | decimaal getal | - |
| z | Invoer (blok) | z-coördinaat | decimaal getal | - |
| unit | Keuzelijstoptie | Eenheid | cm, mm, inch(inch) | cm |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_coordinates('wrist', 0, 15, 20, 'cm', wait=True)
```

## Vergrendeling van de eindeffector instellen {#lock}

Stelt de richting in waarin de grijper wordt vergrendeld. Zodra de optie op horizontaal of verticaal staat, kun je de snelheid of hoek van gewricht 4 niet meer besturen.

<BlockImage module="roboids/Raccoon4" id="lock" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| mode | Keuzelijstoptie | Richting van de vergrendeling | geen(none), horizontaal(horizontal), verticaal(vertical) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.lock('horizontal')
```

## Met de eindeffector iets pakken / neerzetten {#end_effector}

Pakt met de eindeffector een voorwerp of zet het neer.  
Afhankelijk van de waarde van de keuzelijst unit wordt een van de twee methoden aangeroepen.

<BlockImage module="roboids/Raccoon4" id="end_effector" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Actie | pakken (sluiten)(pick), neerzetten (openen)(place) | - |

### Python
```python
raccoon = RaccoonBot(0)

# unit = "pick"
raccoon.pick()
# unit = "place"
raccoon.place()
```

## Soort eindeffector {#end_effector_device}

Het nummer van de aangesloten grijper  
(1, 3, 4: knijpgrijper, 2: vacuümgrijper)

<BlockImage module="roboids/Raccoon4" id="end_effector_device" />

### Parameters

(geen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_device()
```

## Status van de eindeffector {#end_effector_status}

De toestand waarin de grijper een voorwerp vasthoudt  
(0: losgelaten, 1: vastgehouden)

<BlockImage module="roboids/Raccoon4" id="end_effector_status" />

### Parameters

(geen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_status()
```

## Een noot spelen {#sound_note}

RaccoonBot speelt de opgegeven noot.

<BlockImage module="roboids/Raccoon4" id="sound_note" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| note | Keuzelijstoptie | Noot | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Keuzelijstoptie | Octaaf | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_note('D', 5)
```

## Een geluid afspelen {#sound_clip}

RaccoonBot speelt een bepaalde geluidsclip af.

<BlockImage module="roboids/Raccoon4" id="sound_clip" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| clip | Keuzelijstoptie | Naam van de geluidsclip | `'mute'`, `'beep'`, `'siren'`, `'robot'`, `'connect'`, `'wake_up'`, `'start'`, `'bye'` en meer | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_clip('siren', wait=True)
```

## Geluid uitschakelen {#sound_off}

Zet het geluid van RaccoonBot uit.

<BlockImage module="roboids/Raccoon4" id="sound_off" />

### Parameters

(geen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_off()
```

## Waarde van de encoder {#encoder}

De encoderwaarde van het gekozen gewricht

<BlockImage module="roboids/Raccoon4" id="encoder" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| joint | Keuzelijstoptie | Nummer van het gewricht (of alle gewrichten) | 1, 2, 3, 4, alle gewrichten(-1) | -1 |

### Python
```python
raccoon = RaccoonBot(0)

# joint = 1
raccoon.encoder(1)

# alle gewrichten
raccoon.encoder(-1)
```

## Coördinaat van het gekozen onderdeel {#coordinate}

Geeft de huidige xyz-coördinaat van het referentiepunt terug.  
Laat je `pos` weg, dan komt de hele array `[x, y, z]` terug; geef je het op, dan alleen de waarde van die as.

<BlockImage module="roboids/Raccoon4" id="coordinate" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| origin | Keuzelijstoptie | Referentiepunt | pols(wrist), eindeffector(end_effector) | wrist |
| pos | Keuzelijstoptie | As (of alles) | x, y, z, alles (laat je het weg, dan komt de hele array terug) | None (alles) |

### Python
```python
raccoon = RaccoonBot(0)

# een bepaalde as
raccoon.get_coordinates('wrist', 'x')

# alles (array met 3 elementen)
raccoon.get_coordinates('wrist')
```

## Waarde van de signaalsterkte {#signal_strength}

De signaalsterkte

<BlockImage module="roboids/Raccoon4" id="signal_strength" />

### Parameters

(geen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.signal_strength()
```

## Batterijspanning {#battery}

De batterijspanning

<BlockImage module="roboids/Raccoon4" id="battery" />

### Parameters

(geen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.battery()
```

## Is de knop ingedrukt? {#button}

Of de gekozen knop ingedrukt is of dat er een klikgebeurtenis heeft plaatsgevonden

<BlockImage module="roboids/Raccoon4" id="button" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Naam van de knop | teach(teach), play(play), power(power), delete(delete), welke knop dan ook(any) | - |
| event | Keuzelijstoptie | Soort gebeurtenis | ingedrukt(pressed), aangeklikt(click), lang aangeklikt(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.button('teach', 'pressed')
```

## Snelheid van de transportband instellen {#conveyor_speed}

Stelt de snelheid van de transportband in. Het bereik van de snelheid is -100 ~ 100.

<BlockImage module="roboids/Raccoon4" id="conveyor_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Snelheid van de transportband | geheel getal -100 ~ 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_conveyor_speed(100)
```

## Afstand van de transportband instellen {#conveyor_distance}

Laat de transportband een bepaalde afstand verplaatsen.

<BlockImage module="roboids/Raccoon4" id="conveyor_distance" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Af te leggen afstand | decimaal getal ≥ 0 | - |
| unit | Keuzelijstoptie | Eenheid van afstand | cm, mm, inch(inch) | cm |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_move(50, 'cm', wait=True)
```

## Snelheid van de transportband veranderen {#change_conveyor_speed}

Verandert de snelheid van de transportband.

<BlockImage module="roboids/Raccoon4" id="change_conveyor_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Snelheidsverschil van de verandering | geheel getal -200 ~ 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_conveyor_speed(10)
```

## Transportband stoppen {#stop_conveyor}

Stopt de transportband.

<BlockImage module="roboids/Raccoon4" id="stop_conveyor" />

### Parameters

(geen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.stop_conveyor()
```

## Loopt de transportband? {#conveyor_running}

Of de transportband loopt

<BlockImage module="roboids/Raccoon4" id="conveyor_running" />

### Parameters

(geen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_running()
```

## Is de transportbandknop ingedrukt? {#conveyor_button}

Of de knop van de transportband ingedrukt is of dat er een klikgebeurtenis heeft plaatsgevonden

<BlockImage module="roboids/Raccoon4" id="conveyor_button" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| event | Keuzelijstoptie | Soort gebeurtenis | ingedrukt(pressed), aangeklikt(click), lang aangeklikt(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_button('pressed')
```
