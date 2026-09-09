---
title: Turtle
---

# Turtle

## Instantie declareren {#instance}

Voeg je een Turtle-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
turtle = Turtle(0)
# als er meerdere instanties zijn
turtle_1 = Turtle(1)
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Snelheid van het wiel instellen {#set_wheel_speed}

Bepaalt de snelheid van het wiel. Het bereik van de snelheid is -100 ~ 100.

<BlockImage module="roboids/Turtle" id="set_wheel_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Soort wiel | links(left), rechts(right), beide(both) | - |
| speed | Invoer (blok) | Snelheid van het wiel | geheel getal -100 ~ 100, 0: stil | - |

### Python
```python
turtle = Turtle(0)

turtle.set_wheel_speed('both', 50)
```

## Een afstand rijden {#move_distance}

Stelt de af te leggen afstand in.  
Is er geen wielsnelheid ingesteld, dan rijdt de robot niet.  
Is de afstand 0, dan blijft de robot rijden met de huidige wielsnelheid.  
Zet je het vinkje wacht aan, dan wordt gewacht tot de rit klaar is.

<BlockImage module="roboids/Turtle" id="move_distance" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Af te leggen afstand | decimaal getal ≥ 0 | - |
| unit | Keuzelijstoptie | Eenheid van afstand | cm, mm, inch(inch) | cm |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.move_distance(50, 'cm', wait=True)
```

## Een tijd rijden {#move_time}

Rijdt met de huidige wielsnelheid de opgegeven tijd.  
Is er geen wielsnelheid ingesteld, dan rijdt de robot met de standaardsnelheid vooruit.  
Zet je het vinkje wacht aan, dan wordt gewacht tot de rit klaar is.

<BlockImage module="roboids/Turtle" id="move_time" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Rijtijd (seconden) | decimaal getal ≥ 0 | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

# wait = TRUE
turtle.move_time(5, wait=True)
# wait = FALSE
turtle.move_time(0.5, wait=False)
```

## Op de plaats draaien {#turn_degree}

Stelt de richting en de hoek in waarover de robot op de plaats draait.  
Zet je het vinkje wacht aan, dan wordt gewacht tot de draai klaar is.

<BlockImage module="roboids/Turtle" id="turn_degree" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| direction | Keuzelijstoptie | Draairichting | links(left), rechts(right) | - |
| data | Invoer (blok) | Draaihoek (graden) | decimaal getal ≥ 0 | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.turn_degree('left', 90, wait=True)
```

## Snelheid van het wiel veranderen {#change_speed}

Verandert de wielsnelheid van Turtle.  
De nieuwe wielsnelheid is de huidige wielsnelheid plus de ingevoerde snelheid.

<BlockImage module="roboids/Turtle" id="change_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Soort wiel | links(left), rechts(right), beide(both) | - |
| speed | Invoer (blok) | Snelheidsverschil van de verandering | geheel getal -200 ~ 200 | - |

### Python
```python
turtle = Turtle(0)

turtle.change_wheel_speed('both', 10)
```

## Stoppen {#stop}

Stopt de beweging van Turtle.

<BlockImage module="roboids/Turtle" id="stop" />

### Parameters

(geen)

### Python
```python
turtle = Turtle(0)

turtle.stop()
```

## Beweegt het wiel? {#wheel_moving}

Geeft true terug als het wiel beweegt en false als het stilstaat.

<BlockImage module="roboids/Turtle" id="wheel_moving" />

### Parameters

(geen)

### Python
```python
turtle = Turtle(0)

turtle.wheel_moving()
```

## Draaien om een wiel {#pivot}

Stelt het draaipunt, de richting en de hoek in.  
Zet je het vinkje wacht aan, dan wordt gewacht tot de draai klaar is.

<BlockImage module="roboids/Turtle" id="pivot" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| base | Keuzelijstoptie | Wiel als draaipunt | linkerwiel(left_wheel), rechterwiel(right_wheel) | - |
| direction | Keuzelijstoptie | Draairichting | vooruit(forward), achteruit(backward) | - |
| data | Invoer (blok) | Draaihoek (graden) | decimaal getal ≥ 0 | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot('left_wheel', 'forward', 90, wait=True)
```

## Een cirkel draaien {#pivot_circle}

Stelt bij het tekenen van een cirkel met de pen de richting, de straal en de hoek in.  
Zet je het vinkje wacht aan, dan wordt gewacht tot de draai klaar is.

<BlockImage module="roboids/Turtle" id="pivot_circle" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| direction | Keuzelijstoptie | Draairichting | linksvooruit(left_forward), linksachteruit(left_backward), rechtsvooruit(right_forward), rechtsachteruit(right_backward) | - |
| degree | Invoer (blok) | Draaihoek (graden) | decimaal getal ≥ 0 | - |
| radius | Invoer (blok) | Straal van de draai | decimaal getal ≥ 0 | - |
| unit | Keuzelijstoptie | Eenheid van de straal | cm, mm, inch(inch) | cm |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot_circle('left_forward', 90, 1, 'cm', wait=True)
```

## Een lijn volgen met de sensor {#trace_line}

Volgt met de kleursensor aan de onderkant een lijn van een bepaalde kleur.

<BlockImage module="roboids/Turtle" id="trace_line" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| line | Keuzelijstoptie | Kleur van de te volgen lijn | zwart(black), rood(red), groen(green), blauw(blue), elke kleur(any) | black |

### Python
```python
turtle = Turtle(0)

turtle.trace_line('black')
```

## Een lijn volgen tot een bepaalde kleur {#trace_line_until_color}

Volgt met de kleursensor aan de onderkant de lijn met kleur A tot de robot kleur B tegenkomt.

<BlockImage module="roboids/Turtle" id="trace_line_until_color" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| line | Keuzelijstoptie | Kleur van de te volgen lijn | zwart(black), rood(red), groen(green), blauw(blue), elke kleur(any) | - |
| color | Keuzelijstoptie | Kleur waarbij wordt gestopt | zwart(black), rood(red), groen(green), cyaan(cyan), blauw(blue), magenta(magenta), elke kleur(any) | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_line_until_color('black', 'red', wait=True)
```

## Op een kruising afslaan en bij de volgende kruising stoppen {#intersection}

Turtle slaat op een kruising in de opgegeven richting af en rijdt dan verder tot de volgende kruising.  
Zet je het vinkje wacht aan, dan wordt gewacht tot de rit klaar is.  

<BlockImage module="roboids/Turtle" id="intersection" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| direction | Keuzelijstoptie | Richting op de kruising | ga vooruit(forward), links(left), rechts(right), keren(uturn) | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_intersection('left', wait=True)
```

## Lijnvolgsnelheid instellen {#set_trace_speed}

Stelt de lijnvolgsnelheid in. Het bereik van de snelheid is 1 ~ 10.

<BlockImage module="roboids/Turtle" id="set_trace_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Lijnvolgsnelheid | geheel getal 1 ~ 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_speed(5)
```

## Lijnvolgcorrectie instellen {#set_trace_gain}

Stelt de richtingscorrectie bij het lijnvolgen in. Het bereik van de correctie is 1 ~ 10.

<BlockImage module="roboids/Turtle" id="set_trace_gain" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Richtingscorrectie | geheel getal 1 ~ 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_gain(5)
```

## Stoppen met lijnvolgen {#stop_trace}

Beëindigt de lijnvolgfunctie van Turtle.

<BlockImage module="roboids/Turtle" id="stop_trace" />

### Parameters

(geen)

### Python
```python
turtle = Turtle(0)

turtle.stop_trace()
```

## Kleur van de led instellen {#set_led_color}

Stelt de kleur van de kop-LED van Turtle in.  
Kies je in het kleurenpalet een kleur, dan wordt die als **kleurnaam** (Engelse tekst) doorgegeven. (De code wordt niet met R-, G-, B-getalwaarden gemaakt, maar met de kleurnaam.)

<BlockImage module="roboids/Turtle" id="set_led_color" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| color | Kleur | Keuze in het kleurenpalet → wordt de kleurnaam (Engels) | Kleurnaam: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color('red')
```

## Kleur van de led instellen met een blok uit de categorie Kleur {#set_led_color_with_block}

Neemt de uitvoer van een blok uit de categorie Kleur (`[R, G, B]`) als invoer en stelt daarmee de kleur van de kop-LED in.

<BlockImage module="roboids/Turtle" id="set_led_color_with_block" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (kleur) | Blok uit de categorie Kleur of een `[R, G, B]`-array | `[0~255, 0~255, 0~255]` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color(*Utils.color('red'))
```

## Kleur van de led veranderen met RGB-waarden {#change_by_rgb}

Telt de ingevoerde R-, G- en B-veranderingen bij de huidige kleur van de kop-LED op en stelt zo een nieuwe kleur in.

<BlockImage module="roboids/Turtle" id="change_by_rgb" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| r | Invoer (veld) | Verandering van rood | geheel getal -255 ~ 255 | 0 |
| g | Invoer (veld) | Verandering van groen | geheel getal -255 ~ 255 | 0 |
| b | Invoer (veld) | Verandering van blauw | geheel getal -255 ~ 255 | 0 |

### Python
```python
turtle = Turtle(0)

turtle.change_led_color(10, 0, 0)
```

## Led uitschakelen {#turn_off}

Wist de kleur van de kop-LED.

<BlockImage module="roboids/Turtle" id="turn_off" />

### Parameters

(geen)

### Python
```python
turtle = Turtle(0)

turtle.turn_off()
```

## Zoemtoon instellen {#sound_buzz}

Stelt de zoemtoon van Turtle in op de opgegeven frequentie.

<BlockImage module="roboids/Turtle" id="sound_buzz" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| hz | Invoer (blok) | Frequentie (Hz) | decimaal getal 0 ~ 6553,5 | - |

### Python
```python
turtle = Turtle(0)

turtle.sound_buzz(440)
```

## Een noot spelen {#sound_note}

Turtle speelt de opgegeven noot.

<BlockImage module="roboids/Turtle" id="sound_note" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| note | Keuzelijstoptie | Noot | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Keuzelijstoptie | Octaaf | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
turtle = Turtle(0)

turtle.sound_note('D', 5)
```

## Een geluid afspelen {#sound_clip}

Turtle speelt een bepaalde geluidsclip af.

<BlockImage module="roboids/Turtle" id="sound_clip" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| clip | Keuzelijstoptie | Naam van de geluidsclip | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` en meer | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.sound_clip('siren', wait=True)
```

## Geluid uitschakelen {#sound_off}

Zet het geluid van Turtle uit.

<BlockImage module="roboids/Turtle" id="sound_off" />

### Parameters

(geen)

### Python
```python
turtle = Turtle(0)

turtle.sound_off()
```

## Wordt geluid afgespeeld? {#sound_playing}

Geeft true terug als er geluid wordt afgespeeld en false als dat niet zo is.

<BlockImage module="roboids/Turtle" id="sound_playing" />

### Parameters

(geen)

### Python
```python
turtle = Turtle(0)

turtle.sound_playing()
```

## Snelheid van het wiel {#wheel_speed}

De snelheid van een bepaald wiel

<BlockImage module="roboids/Turtle" id="wheel_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Betreffend wiel | links(left), rechts(right) | - |

### Python
```python
turtle = Turtle(0)

turtle.wheel_speed('left')
```

## Waarde van de vloerkleursensor {#floor}

De waarde van de kleursensor aan de onderkant

<BlockImage module="roboids/Turtle" id="floor" />

### Parameters

(geen)

### Python
```python
turtle = Turtle(0)

turtle.floor()
```

## Naam van de kaartkleur {#card_color}

De naam van de kleur van de kaart die met de kleursensor aan de onderkant is gelezen

<BlockImage module="roboids/Turtle" id="card_color" />

### Parameters

(geen)

### Python
```python
turtle = Turtle(0)

turtle.card_color()
```

## Kaartkleurpatroon {#card_pattern}

Het patroon van de kleuren van de kaart die met de kleursensor aan de onderkant is gelezen

<BlockImage module="roboids/Turtle" id="card_pattern" />

### Parameters

(geen)

### Python
```python
turtle = Turtle(0)

turtle.card_pattern()
```

## Waarde van de versnelling {#acceleration}

De waarde van de zwaartekrachtversnelling op een bepaalde as

<BlockImage module="roboids/Turtle" id="acceleration" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Gemeten as | x, y, z | - |

### Python
```python
turtle = Turtle(0)

turtle.acceleration('x')
```

## Waarde van de temperatuursensor {#temperature}

De waarde van de temperatuursensor

<BlockImage module="roboids/Turtle" id="temperature" />

### Parameters

(geen)

### Python
```python
turtle = Turtle(0)

turtle.temperature()
```

## Waarde van de signaalsterkte {#signal_strength}

De signaalsterkte

<BlockImage module="roboids/Turtle" id="signal_strength" />

### Parameters

(geen)

### Python
```python
turtle = Turtle(0)

turtle.signal_strength()
```

## Batterijspanning {#battery}

De batterijspanning

<BlockImage module="roboids/Turtle" id="battery" />

### Parameters

(geen)

### Python
```python
turtle = Turtle(0)

turtle.battery()
```

## Raakt de robot een bepaalde kleur aan? {#color_read}

Meet met de kleursensor van Turtle of de robot de opgegeven kleur aanraakt en geeft het resultaat als **waar(True) / onwaar(False)** terug.

<BlockImage module="roboids/Turtle" id="color_read" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| color | Keuzelijstoptie | Naam van de kleur | unknown, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_color('red')
```

## Is het kaartkleurpatroon ~ ? {#pattern_read}

Geeft als **waar(True) / onwaar(False)** terug of het door de kleursensor herkende kaartkleurpatroon overeenkomt.

<BlockImage module="roboids/Turtle" id="pattern_read" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| pattern | Keuzelijstoptie | Naam van het kaartpatroon | `'red_yellow'`, `'red_green'`, `'blue_red'` | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_pattern('red_yellow')
```

## Toestand van de achterknop {#button}

Of de knop op de rug is ingedrukt of aangeklikt

<BlockImage module="roboids/Turtle" id="button" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| event | Keuzelijstoptie | Soort knoptoestand | ingedrukt(pressed), aangeklikt(click), lang aangeklikt(long_click) | - |  

### Python
```python
turtle = Turtle(0)

turtle.button('pressed')
```

## Is de toestand veranderd? {#state_change}

Of de toestand van de robot is veranderd

<BlockImage module="roboids/Turtle" id="state_change" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Soort toestand | 0 ~ 5 (zie de tabel hieronder) | - |

| unit | Voorwaarde |
|------|------|
| 0 | `acceleration('x') > 50` |
| 1 | `acceleration('x') < -50` |
| 2 | `acceleration('y') > 50` |
| 3 | `acceleration('y') < -50` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -30` |

### Python
```python
turtle = Turtle(0)

# unit = 0
turtle.acceleration('x') > 50
```
