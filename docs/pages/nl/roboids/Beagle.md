---
title: Beagle
---

# Beagle

## Instantie declareren {#instance}

Voeg je een Beagle-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
beagle = Beagle(0)
# als er meerdere instanties zijn
beagle_1 = Beagle(1)
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Snelheid van het wiel instellen {#set_wheel_speed}

Bepaalt de snelheid van het wiel. Het bereik van de snelheid is -100 ~ 100.

<BlockImage module="roboids/Beagle" id="set_wheel_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Soort wiel | links(left), rechts(right), beide(both) | - |
| speed | Invoer (blok) | Snelheid van het wiel | geheel getal -100 ~ 100, 0: stil | - |

### Python
```python
beagle = Beagle(0)

beagle.set_wheel_speed('both', 50)
```

## Een afstand rijden {#move_distance}

Rijdt met de huidige wielsnelheid de opgegeven afstand.  
Is er geen wielsnelheid ingesteld, dan rijdt de robot met de standaardsnelheid vooruit.  
Is de afstand 0, dan blijft de robot rijden met de huidige wielsnelheid.  
Zet je het vinkje wacht aan, dan wordt gewacht tot de rit klaar is.

<BlockImage module="roboids/Beagle" id="move_distance" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Af te leggen afstand | decimaal getal ≥ 0 | - |
| unit | Keuzelijstoptie | Eenheid van afstand | cm, mm, inch(inch) | cm |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.move_distance(50, 'cm', wait=True)
```

## Een tijd rijden {#move_time}

Rijdt met de huidige wielsnelheid de opgegeven tijd.  
Is er geen wielsnelheid ingesteld, dan rijdt de robot met de standaardsnelheid vooruit.  
Zet je het vinkje wacht aan, dan wordt gewacht tot de rit klaar is.

<BlockImage module="roboids/Beagle" id="move_time" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer (blok) | Rijtijd (seconden) | decimaal getal ≥ 0 | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

# wait = TRUE
beagle.move_time(5, wait=True)
# wait = FALSE
beagle.move_time(0.5, wait=False)
```

## Op de plaats draaien {#turn_degree}

Stelt de richting en de hoek in waarover de robot op de plaats draait.  
Zet je het vinkje wacht aan, dan wordt gewacht tot de draai klaar is.

<BlockImage module="roboids/Beagle" id="turn_degree" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| direction | Keuzelijstoptie | Draairichting | links(left), rechts(right) | - |
| data | Invoer (blok) | Draaihoek (graden) | decimaal getal ≥ 0 | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.turn_degree('left', 90, wait=True)
```

## Snelheid van het wiel veranderen {#change_speed}

Verandert de wielsnelheid van Beagle.  
De nieuwe wielsnelheid is de huidige wielsnelheid plus de ingevoerde snelheid.  
De nieuw ingestelde wielsnelheid wordt binnen het bereik -100 ~ 100 gehouden.

<BlockImage module="roboids/Beagle" id="change_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Soort wiel | links(left), rechts(right), beide(both) | - |
| speed | Invoer (blok) | Snelheidsverschil van de verandering | geheel getal -200 ~ 200 | - |

### Python
```python
beagle = Beagle(0)

beagle.change_wheel_speed('both', 10)
```

## Stoppen {#stop}

Stopt de beweging van Beagle.  
De snelheid van beide wielen van Beagle wordt op 0 gezet.

<BlockImage module="roboids/Beagle" id="stop" />

### Parameters

(geen)

### Python
```python
beagle = Beagle(0)

beagle.stop()
```

## Beweegt het wiel? {#wheel_moving}

Geeft true terug als het wiel beweegt en false als het stilstaat.

<BlockImage module="roboids/Beagle" id="wheel_moving" />

### Parameters

(geen)

### Python
```python
beagle = Beagle(0)

beagle.wheel_moving()
```

## Zoemtoon instellen {#sound_buzz}

Stelt de zoemtoon van Beagle in op de opgegeven frequentie.  
Het bereik van de frequenties die klinken is 27,5 Hz ~ 6553,5 Hz.  
Voer je een andere waarde in, dan klinkt er geen zoemtoon.

<BlockImage module="roboids/Beagle" id="sound_buzz" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| hz | Invoer (blok) | Frequentie (Hz) | decimaal getal 0, 27,5 ~ 6553,5 (anders 0) | - |

### Python
```python
beagle = Beagle(0)

beagle.sound_buzz(440)
```

## Een noot spelen {#sound_note}

Beagle speelt de opgegeven noot.

<BlockImage module="roboids/Beagle" id="sound_note" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| note | Keuzelijstoptie | Noot | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Keuzelijstoptie | Octaaf | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
beagle = Beagle(0)

beagle.sound_note('D', 5)
```

## Een geluid afspelen {#sound_clip}

Beagle speelt een bepaalde geluidsclip af.  
Zet je het vinkje wacht aan, dan wordt gewacht tot het afspelen klaar is.

<BlockImage module="roboids/Beagle" id="sound_clip" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| clip | Keuzelijstoptie | Naam van de geluidsclip | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'dibidibidip'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'` en meer | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.sound_clip('siren', wait=True)
```

## Geluid uitschakelen {#sound_off}

Zet het geluid van Beagle uit.

<BlockImage module="roboids/Beagle" id="sound_off" />

### Parameters

(geen)

### Python
```python
beagle = Beagle(0)

beagle.sound_off()
```

## Wordt geluid afgespeeld? {#sound_playing}

Geeft true terug als er geluid wordt afgespeeld en false als dat niet zo is.

<BlockImage module="roboids/Beagle" id="sound_playing" />

### Parameters

(geen)

### Python
```python
beagle = Beagle(0)

beagle.sound_playing()
```

## Snelheid van het wiel {#wheel_speed}

De snelheid van een bepaald wiel

<BlockImage module="roboids/Beagle" id="wheel_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Betreffend wiel | links(left), rechts(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.wheel_speed('left')
```

## Waarde van de encoder {#encoder}

De encoderwaarde van een bepaald wiel

<BlockImage module="roboids/Beagle" id="encoder" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Betreffend wiel | links(left), rechts(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.encoder('left')
```

## Waarde van de gyroscoop {#gyroscope}

De waarde van de gyroscoop op een bepaalde as

<BlockImage module="roboids/Beagle" id="gyroscope" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Gemeten as | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.gyroscope('x')
```

## Waarde van de versnellingsmeter {#accelerometer}

De waarde van de versnellingsmeter op een bepaalde as

<BlockImage module="roboids/Beagle" id="accelerometer" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Gemeten as | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.accelerometer('x')
```

## Waarde van de magnetometer {#magnetometer}

De waarde van de magnetometer op een bepaalde as

<BlockImage module="roboids/Beagle" id="magnetometer" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Gemeten as | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.magnetometer('x')
```

## Waarde van de temperatuursensor {#temperature}

De waarde van de temperatuursensor

<BlockImage module="roboids/Beagle" id="temperature" />

### Parameters

(geen)

### Python
```python
beagle = Beagle(0)

beagle.temperature()
```

## Waarde van de signaalsterkte {#signal_strength}

De signaalsterkte

<BlockImage module="roboids/Beagle" id="signal_strength" />

### Parameters

(geen)

### Python
```python
beagle = Beagle(0)

beagle.signal_strength()
```

## Batterijspanning {#battery}

De batterijspanning

<BlockImage module="roboids/Beagle" id="battery" />

### Parameters

(geen)

### Python
```python
beagle = Beagle(0)

beagle.battery()
```

## Is de toestand veranderd? {#state_change}

Of de toestand van de robot is veranderd

<BlockImage module="roboids/Beagle" id="state_change" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Soort toestand | 0 ~ 5 (zie de tabel hieronder) | - |

| unit | Voorwaarde |
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

## Lidar starten / stoppen {#lidar_power}

Schakelt de lidarsensor in of uit.

<BlockImage module="roboids/Beagle" id="lidar_power" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| on | Keuzelijstoptie | Lidar ON / OFF | starten(on=True), stoppen(off=False) | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.lidar_power(True)
```

## Afstand tot het ~-de object volgens de lidar {#lidar_value}

De lidarsensor kan de afstand tot objecten in de volle 360 graden rondom meten.  
Vanaf de voorkant van Beagle (de 0-de waarde) loopt het nummer tegen de klok in telkens met 1 op.

<BlockImage module="roboids/Beagle" id="lidar_value" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Invoer (veld) | Nummer van het object (vanaf 0) | geheel getal ≥ 0 | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_value(0)
```

## Afstand per richting volgens de lidar {#lidar_directions}

Geeft de door de lidarsensor gemeten afstand naar voren, naar achteren, naar beide zijden en in de diagonale richtingen.  
De uitvoer is het gemiddelde van de afstandswaarden 45 graden links en rechts van die richting.

<BlockImage module="roboids/Beagle" id="lidar_directions" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| direction | Keuzelijstoptie | Gemeten richting | voor(front), linksvoor(left front), links(left), linksachter(left back), achter(back), rechtsachter(right back), rechts(right), rechtsvoor(right front) | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_directions('front')
```

## Is de lidar gereed? {#lidar_state}

Geeft als **waar(True) / onwaar(False)** terug of de lidar is ingeschakeld.

<BlockImage module="roboids/Beagle" id="lidar_state" />

### Parameters

(geen)

### Python
```python
beagle = Beagle(0)

beagle.lidar_ready()
```
