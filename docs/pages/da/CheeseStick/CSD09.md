---
title: CSD-09 Motor
---

# CSD-09 Motor

## Instanserklæring {#instance}

Når du tilføjer en CSD-09 Motor(CSD09)-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Start servomotoren {#start_servo_motor}

Angiver, hvilken port servomotoren skal bruge.  
Hvis du ikke angiver en port, virker motoren ikke som den skal.

<BlockImage module="CheeseStick/CSD09" id="start_servo_motor" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Servomotorens port | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_servo_motor('Sa')
```

## Sæt servomotorens vinkel {#set_servo_motor}

Indstiller vinklen for servomotoren på den angivne port.  
De værdier, du kan vælge, går fra 0 til 180.

<BlockImage module="CheeseStick/CSD09" id="set_servo_motor" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Servomotorens port | Sa, Sb, Sc | Porten fra seneste `start_servo_motor` |
| value | Input (felt) | Drejevinkel (grader) | Heltal 0 til 180 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_servo_motor('Sa', 90)
```

## Ændr servomotorens vinkel {#change_servo_motor}

Ændrer vinklen for servomotoren på den angivne port.  
De værdier, du kan vælge, går fra -180 til 180.

<BlockImage module="CheeseStick/CSD09" id="change_servo_motor" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Servomotorens port | Sa, Sb, Sc | Porten fra seneste `start_servo_motor` |
| value | Input (felt) | Vinkelændring | Heltal | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_servo_motor('Sa', 10)
```

## Sluk servomotoren {#stop_servo_motor}

Slukker strømmen til servomotoren på den angivne port.

<BlockImage module="CheeseStick/CSD09" id="stop_servo_motor" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Servomotorens port | Sa, Sb, Sc | Porten fra seneste `start_servo_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_servo_motor('Sa')
```

## Start DC-motoren {#start_DC_motor}

Gør det muligt at styre DC-motoren via den angivne port.
Blokken skal kaldes én gang, før du bruger de andre blokke til DC-motoren.

<BlockImage module="CheeseStick/CSD09" id="start_DC_motor" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | DC-motorens port | Mab, Mcd | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_dc_motor('Mab')
```

## Sæt DC-motorens hastighed {#set_DC_motor}

Indstiller PWM-udgangsværdien for DC-motoren.

<BlockImage module="CheeseStick/CSD09" id="set_DC_motor" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | DC-motorens port | Mab, Mcd | Porten fra seneste `start_dc_motor` |
| value | Input (felt) | PWM-udgangsværdi | Heltal 0 til 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_dc_motor('Mab', 50)
```

## Ændr DC-motorens hastighed {#change_DC_motor}

Lægger den angivne ændring til DC-motorens nuværende PWM-udgangsværdi og indstiller den nye værdi.

<BlockImage module="CheeseStick/CSD09" id="change_DC_motor" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | DC-motorens port | Mab, Mcd | Porten fra seneste `start_dc_motor` |
| value | Input (felt) | PWM-ændring | Heltal | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_dc_motor('Mab', 10)
```

## Stop DC-motoren {#stop_DC_motor}

Standser DC-motorens udgang.

<BlockImage module="CheeseStick/CSD09" id="stop_DC_motor" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | DC-motorens port | Mab, Mcd | Porten fra seneste `start_dc_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_dc_motor('Mab')
```

## Start stepmotoren {#start_step_motor}

Begynder at bruge stepmotoren.

<BlockImage module="CheeseStick/CSD09" id="start_step_motor" />

### Parametre

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_step_motor()
```

## Sæt stepmotorens tilstand {#set_step_motor_mode}

Indstiller, hvilken tilstand stepmotoren skal styres i.  
Hvis du ikke indstiller en tilstand, bruges tilstanden power som standard.  
Bemærk! Du må ikke skifte tilstand, mens stepmotoren drejer.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_mode" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Drivtilstand | fra(off), normal(wave_step), power(full_step) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_mode('full_step')
```

## Sæt stepmotorens hastighed {#set_step_motor_speed}

Indstiller stepmotorens hastighed.  
De værdier, du kan vælge, går fra -1000 til 1000.  
Ved en negativ værdi drejer motoren den modsatte vej.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| value | Input (felt) | Drejehastighed (pps) | Heltal 0 eller større | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_speed(100)
```

## Rotér stepmotoren {#rotate_step_motor}

Indstiller, hvor mange pulser stepmotoren skal dreje.  
De værdier, du kan vælge, går fra 0 til 65535.  
Hvis du ikke har valgt en hastighed for stepmotoren, drejer den ikke.  
Hvis vent er markeret, venter kørslen, indtil drejningen er færdig.

<BlockImage module="CheeseStick/CSD09" id="rotate_step_motor" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| value | Input (felt) | Antal trin der skal drejes | Heltal | - |
| wait | Afkrydsningsfelt | Om kørslen skal vente, indtil det er færdigt | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# wait = TRUE
csd09.rotate_step_motor(360, wait=True)

# wait = FALSE
csd09.rotate_step_motor(360, wait=False)
```

## Ændr stepmotorens hastighed {#change_step_motor_speed}

Ændrer stepmotorens hastighed.  
De værdier, du kan vælge, går fra -2000 til 2000.

<BlockImage module="CheeseStick/CSD09" id="change_step_motor_speed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| value | Input (felt) | Ændring i pps | Heltal | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_step_motor_speed(10)
```

## Stop stepmotoren {#stop_step_motor}

Standser stepmotoren eller slukker strømmen til den.

<BlockImage module="CheeseStick/CSD09" id="stop_step_motor" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Måde at stoppe på | stop(stop), sluk strømmen(power) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# unit = "stop"
csd09.stop_step_motor()

# unit = "power"
csd09.turn_off_step_motor()
```

## Antal trin {#step_motor_steps}

Returnerer det samlede antal trin, stepmotoren har drejet indtil nu.

<BlockImage module="CheeseStick/CSD09" id="step_motor_steps" />

### Parametre

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.get_steps()
```
