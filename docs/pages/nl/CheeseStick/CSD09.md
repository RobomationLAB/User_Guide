---
title: CSD-09 Motor
---

# CSD-09 Motor

## Instantie declareren {#instance}

Voeg je een CSD-09 Motor(CSD09)-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Servomotor starten {#start_servo_motor}

Geeft de poort op waarop de servomotor wordt gebruikt.  
Zonder poortopgave werkt de motor niet naar behoren.

<BlockImage module="CheeseStick/CSD09" id="start_servo_motor" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Poort van de servomotor | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_servo_motor('Sa')
```

## Hoek van de servomotor instellen {#set_servo_motor}

Stelt de hoek van de servomotor op de opgegeven poort in.  
Het bereik van de waarden die je kunt kiezen is 0 ~ 180.

<BlockImage module="CheeseStick/CSD09" id="set_servo_motor" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Poort van de servomotor | Sa, Sb, Sc | de poort van de laatste `start_servo_motor` |
| value | Invoer (veld) | Draaihoek (graden) | geheel getal 0 ~ 180 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_servo_motor('Sa', 90)
```

## Hoek van de servomotor veranderen {#change_servo_motor}

Verandert de hoek van de servomotor op de opgegeven poort.  
Het bereik van de waarden die je kunt kiezen is -180 ~ 180.

<BlockImage module="CheeseStick/CSD09" id="change_servo_motor" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Poort van de servomotor | Sa, Sb, Sc | de poort van de laatste `start_servo_motor` |
| value | Invoer (veld) | Hoekverschil van de verandering | geheel getal | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_servo_motor('Sa', 10)
```

## Servomotor stoppen {#stop_servo_motor}

Schakelt de voeding van de servomotor op de opgegeven poort uit.

<BlockImage module="CheeseStick/CSD09" id="stop_servo_motor" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Poort van de servomotor | Sa, Sb, Sc | de poort van de laatste `start_servo_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_servo_motor('Sa')
```

## DC-motor starten {#start_DC_motor}

Maakt het mogelijk de DC-motor via de opgegeven poort te besturen.
Dit blok moet één keer worden aangeroepen voordat je andere blokken voor de DC-motor gebruikt.

<BlockImage module="CheeseStick/CSD09" id="start_DC_motor" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Poort van de DC-motor | Mab, Mcd | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_dc_motor('Mab')
```

## Snelheid van de DC-motor instellen {#set_DC_motor}

Stelt de PWM-uitgangswaarde van de DC-motor in.

<BlockImage module="CheeseStick/CSD09" id="set_DC_motor" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Poort van de DC-motor | Mab, Mcd | de poort van de laatste `start_dc_motor` |
| value | Invoer (veld) | PWM-uitgangswaarde | geheel getal 0 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_dc_motor('Mab', 50)
```

## Snelheid van de DC-motor veranderen {#change_DC_motor}

Telt de ingevoerde verandering bij de huidige PWM-uitgangswaarde van de DC-motor op en stelt zo een nieuwe waarde in.

<BlockImage module="CheeseStick/CSD09" id="change_DC_motor" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Poort van de DC-motor | Mab, Mcd | de poort van de laatste `start_dc_motor` |
| value | Invoer (veld) | PWM-verschil van de verandering | geheel getal | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_dc_motor('Mab', 10)
```

## DC-motor stoppen {#stop_DC_motor}

Stopt de uitgang van de DC-motor.

<BlockImage module="CheeseStick/CSD09" id="stop_DC_motor" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Poort van de DC-motor | Mab, Mcd | de poort van de laatste `start_dc_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_dc_motor('Mab')
```

## Stappenmotor starten {#start_step_motor}

Gebruikt de stappenmotor.

<BlockImage module="CheeseStick/CSD09" id="start_step_motor" />

### Parameters

(geen)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_step_motor()
```

## Modus van de stappenmotor instellen {#set_step_motor_mode}

Stelt de modus in waarin de stappenmotor wordt bestuurd.  
Stel je geen eigen modus in, dan staat standaard de modus „Power" ingesteld.  
Let op! Wissel de modus niet terwijl de stappenmotor draait.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_mode" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Bedrijfsmodus | off (uit), normaal(wave_step), Power(full_step) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_mode('full_step')
```

## Snelheid van de stappenmotor instellen {#set_step_motor_speed}

Stelt de snelheid van de stappenmotor in.  
Het bereik van de waarden die je kunt kiezen is -1000 ~ 1000.  
Bij een negatieve waarde draait de motor de andere kant op.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| value | Invoer (veld) | Draaisnelheid (PPS) | geheel getal ≥ 0 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_speed(100)
```

## Stappenmotor draaien {#rotate_step_motor}

Stelt het aantal pulsen in waarover de stappenmotor draait.  
Het bereik van de waarden die je kunt kiezen is 0 ~ 65535.  
Is er geen snelheid voor de stappenmotor gekozen, dan draait die niet.  
Zet je het vinkje „wacht" aan, dan wordt gewacht tot de draai klaar is.

<BlockImage module="CheeseStick/CSD09" id="rotate_step_motor" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| value | Invoer (veld) | Aantal stappen | geheel getal | - |
| wait | Aankruisvak | Wachten tot het klaar is | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# wait = TRUE
csd09.rotate_step_motor(360, wait=True)

# wait = FALSE
csd09.rotate_step_motor(360, wait=False)
```

## Snelheid van de stappenmotor veranderen {#change_step_motor_speed}

Verandert de snelheid van de stappenmotor.  
Het bereik van de waarden die je kunt kiezen is -2000 ~ 2000.

<BlockImage module="CheeseStick/CSD09" id="change_step_motor_speed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| value | Invoer (veld) | PPS-verschil van de verandering | geheel getal | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_step_motor_speed(10)
```

## Stappenmotor stoppen {#stop_step_motor}

Stopt de stappenmotor of schakelt de voeding ervan uit.

<BlockImage module="CheeseStick/CSD09" id="stop_step_motor" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Manier van stoppen | stop(stop), voeding uit(power) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# unit = "stop"
csd09.stop_step_motor()

# unit = "power"
csd09.turn_off_step_motor()
```

## Aantal stappen {#step_motor_steps}

Geeft het totale aantal stappen terug dat de stappenmotor tot nu toe heeft gedraaid.

<BlockImage module="CheeseStick/CSD09" id="step_motor_steps" />

### Parameters

(geen)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.get_steps()
```
