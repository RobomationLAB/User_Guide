---
title: CSD-09 Motor
---

# CSD-09 Motor

## Instanserklæring {#instance}

Når du legger til en CSD-09 Motor(CSD09)-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Start servomotoren {#start_servo_motor}

Angir hvilken port servomotoren skal bruke.  
Angir du ikke porten, virker ikke motoren som den skal.

<BlockImage module="CheeseStick/CSD09" id="start_servo_motor" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Servomotorens port | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_servo_motor('Sa')
```

## Sett servomotorens vinkel {#set_servo_motor}

Angir vinkelen til servomotoren på den porten du velger.  
Verdiene du kan velge, går fra 0 til 180.

<BlockImage module="CheeseStick/CSD09" id="set_servo_motor" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Servomotorens port | Sa, Sb, Sc | Porten fra den siste `start_servo_motor` |
| value | Inndata (felt) | Rotasjonsvinkel (grader) | Heltall 0 til 180 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_servo_motor('Sa', 90)
```

## Endre servomotorens vinkel {#change_servo_motor}

Endrer vinkelen til servomotoren på den porten du velger.  
Verdiene du kan velge, går fra -180 til 180.

<BlockImage module="CheeseStick/CSD09" id="change_servo_motor" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Servomotorens port | Sa, Sb, Sc | Porten fra den siste `start_servo_motor` |
| value | Inndata (felt) | Vinkelendring | Heltall | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_servo_motor('Sa', 10)
```

## Slå av servomotoren {#stop_servo_motor}

Slår av strømmen til servomotoren på den porten du velger.

<BlockImage module="CheeseStick/CSD09" id="stop_servo_motor" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Servomotorens port | Sa, Sb, Sc | Porten fra den siste `start_servo_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_servo_motor('Sa')
```

## Start likestrømsmotoren {#start_DC_motor}

Gjør det mulig å styre likestrømsmotoren gjennom den porten du velger.
Du må kalle denne blokken én gang før du bruker de andre blokkene for likestrømsmotoren.

<BlockImage module="CheeseStick/CSD09" id="start_DC_motor" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Likestrømsmotorens port | Mab, Mcd | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_dc_motor('Mab')
```

## Sett hastigheten til likestrømsmotoren {#set_DC_motor}

Angir PWM-utgangsverdien til likestrømsmotoren.

<BlockImage module="CheeseStick/CSD09" id="set_DC_motor" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Likestrømsmotorens port | Mab, Mcd | Porten fra den siste `start_dc_motor` |
| value | Inndata (felt) | PWM-utgangsverdi | Heltall 0 til 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_dc_motor('Mab', 50)
```

## Endre hastigheten til likestrømsmotoren {#change_DC_motor}

Legger den endringen du skriver inn, til PWM-utgangsverdien likestrømsmotoren har nå, og setter den nye verdien.

<BlockImage module="CheeseStick/CSD09" id="change_DC_motor" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Likestrømsmotorens port | Mab, Mcd | Porten fra den siste `start_dc_motor` |
| value | Inndata (felt) | PWM-endring | Heltall | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_dc_motor('Mab', 10)
```

## Stopp likestrømsmotoren {#stop_DC_motor}

Stopper utgangen til likestrømsmotoren.

<BlockImage module="CheeseStick/CSD09" id="stop_DC_motor" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Likestrømsmotorens port | Mab, Mcd | Porten fra den siste `start_dc_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_dc_motor('Mab')
```

## Start trinnmotoren {#start_step_motor}

Tar trinnmotoren i bruk.

<BlockImage module="CheeseStick/CSD09" id="start_step_motor" />

### Parametere

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_step_motor()
```

## Sett trinnmotorens modus {#set_step_motor_mode}

Angir hvilken modus trinnmotoren skal styres i.  
Angir du ikke noen modus, brukes 'power'-modusen som standard.  
Merk! Du må ikke bytte modus mens trinnmotoren roterer.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_mode" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Kjøremodus | off(av), normal(wave_step), power(full_step) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_mode('full_step')
```

## Sett trinnmotorens hastighet {#set_step_motor_speed}

Angir hastigheten til trinnmotoren.  
Verdiene du kan velge, går fra -1000 til 1000.  
Er verdien negativ, roterer motoren motsatt vei.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| value | Inndata (felt) | Rotasjonshastighet (PPS) | Heltall 0 eller større | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_speed(100)
```

## Roter trinnmotoren {#rotate_step_motor}

Angir hvor mange pulser trinnmotoren skal rotere.  
Verdiene du kan velge, går fra 0 til 65535.  
Har du ikke valgt hastighet for trinnmotoren, roterer den ikke.  
Krysser du av for vent, venter kjøringen til rotasjonen er ferdig.

<BlockImage module="CheeseStick/CSD09" id="rotate_step_motor" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| value | Inndata (felt) | Antall trinn den skal rotere | Heltall | - |
| wait | Avmerkingsboks | Om kjøringen skal vente til det er ferdig | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# wait = TRUE
csd09.rotate_step_motor(360, wait=True)

# wait = FALSE
csd09.rotate_step_motor(360, wait=False)
```

## Endre trinnmotorens hastighet {#change_step_motor_speed}

Endrer hastigheten til trinnmotoren.  
Verdiene du kan velge, går fra -2000 til 2000.

<BlockImage module="CheeseStick/CSD09" id="change_step_motor_speed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| value | Inndata (felt) | PPS-endring | Heltall | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_step_motor_speed(10)
```

## Stopp trinnmotoren {#stop_step_motor}

Stopper trinnmotoren eller slår av strømmen til den.

<BlockImage module="CheeseStick/CSD09" id="stop_step_motor" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Måte å stoppe på | stopp(stop), slå av strømmen(power) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# unit = "stop"
csd09.stop_step_motor()

# unit = "power"
csd09.turn_off_step_motor()
```

## Trinntall {#step_motor_steps}

Returnerer hvor mange trinn trinnmotoren har rotert til sammen.

<BlockImage module="CheeseStick/CSD09" id="step_motor_steps" />

### Parametere

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.get_steps()
```
