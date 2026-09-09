---
title: CSD-09 Motor
---

# CSD-09 Motor

## Instansdeklaration {#instance}

När du lägger till ett CSD-09 Motor(CSD09)-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Starta servomotorn {#start_servo_motor}

Anger vilken port servomotorn ska använda.  
Om du inte anger någon port fungerar motorn inte som den ska.

<BlockImage module="CheeseStick/CSD09" id="start_servo_motor" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Servomotorns port | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_servo_motor('Sa')
```

## Ställa in servomotorns vinkel {#set_servo_motor}

Ställer in vinkeln för servomotorn på den angivna porten.  
Värdena du kan välja går från 0 till 180.

<BlockImage module="CheeseStick/CSD09" id="set_servo_motor" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Servomotorns port | Sa, Sb, Sc | Porten från senaste `start_servo_motor` |
| value | Inmatning (fält) | Rotationsvinkel (grader) | Heltal 0 till 180 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_servo_motor('Sa', 90)
```

## Ändra servomotorns vinkel {#change_servo_motor}

Ändrar vinkeln för servomotorn på den angivna porten.  
Värdena du kan välja går från -180 till 180.

<BlockImage module="CheeseStick/CSD09" id="change_servo_motor" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Servomotorns port | Sa, Sb, Sc | Porten från senaste `start_servo_motor` |
| value | Inmatning (fält) | Vinkeländring | Heltal | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_servo_motor('Sa', 10)
```

## Stänga av servomotorn {#stop_servo_motor}

Stänger av strömmen till servomotorn på den angivna porten.

<BlockImage module="CheeseStick/CSD09" id="stop_servo_motor" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Servomotorns port | Sa, Sb, Sc | Porten från senaste `start_servo_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_servo_motor('Sa')
```

## Starta likströmsmotorn {#start_DC_motor}

Gör det möjligt att styra likströmsmotorn via den angivna porten.
Blocket måste anropas en gång innan du använder de andra blocken för likströmsmotorn.

<BlockImage module="CheeseStick/CSD09" id="start_DC_motor" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Likströmsmotorns port | Mab, Mcd | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_dc_motor('Mab')
```

## Ställa in likströmsmotorns hastighet {#set_DC_motor}

Ställer in PWM-utgångsvärdet för likströmsmotorn.

<BlockImage module="CheeseStick/CSD09" id="set_DC_motor" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Likströmsmotorns port | Mab, Mcd | Porten från senaste `start_dc_motor` |
| value | Inmatning (fält) | PWM-utgångsvärde | Heltal 0 till 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_dc_motor('Mab', 50)
```

## Ändra likströmsmotorns hastighet {#change_DC_motor}

Lägger den angivna ändringen till likströmsmotorns nuvarande PWM-utgångsvärde och ställer in det nya värdet.

<BlockImage module="CheeseStick/CSD09" id="change_DC_motor" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Likströmsmotorns port | Mab, Mcd | Porten från senaste `start_dc_motor` |
| value | Inmatning (fält) | PWM-ändring | Heltal | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_dc_motor('Mab', 10)
```

## Stoppa likströmsmotorn {#stop_DC_motor}

Stoppar likströmsmotorns utgång.

<BlockImage module="CheeseStick/CSD09" id="stop_DC_motor" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Likströmsmotorns port | Mab, Mcd | Porten från senaste `start_dc_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_dc_motor('Mab')
```

## Starta stegmotorn {#start_step_motor}

Börjar använda stegmotorn.

<BlockImage module="CheeseStick/CSD09" id="start_step_motor" />

### Parametrar

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_step_motor()
```

## Ställa in stegmotorns läge {#set_step_motor_mode}

Ställer in vilket läge stegmotorn ska styras i.  
Om du inte ställer in något läge används läget power som standard.  
Obs! Du får inte byta läge medan stegmotorn roterar.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_mode" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Drivläge | av(off), normal(wave_step), power(full_step) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_mode('full_step')
```

## Ställa in stegmotorns hastighet {#set_step_motor_speed}

Ställer in stegmotorns hastighet.  
Värdena du kan välja går från -1000 till 1000.  
Vid ett negativt värde roterar motorn åt motsatt håll.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| value | Inmatning (fält) | Rotationshastighet (pps) | Heltal 0 eller större | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_speed(100)
```

## Rotera stegmotorn {#rotate_step_motor}

Ställer in hur många pulser stegmotorn ska rotera.  
Värdena du kan välja går från 0 till 65535.  
Om du inte har valt någon hastighet för stegmotorn roterar den inte.  
Om vänta är ikryssat väntar körningen tills rotationen är klar.

<BlockImage module="CheeseStick/CSD09" id="rotate_step_motor" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| value | Inmatning (fält) | Antal steg att rotera | Heltal | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# wait = TRUE
csd09.rotate_step_motor(360, wait=True)

# wait = FALSE
csd09.rotate_step_motor(360, wait=False)
```

## Ändra stegmotorns hastighet {#change_step_motor_speed}

Ändrar stegmotorns hastighet.  
Värdena du kan välja går från -2000 till 2000.

<BlockImage module="CheeseStick/CSD09" id="change_step_motor_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| value | Inmatning (fält) | Ändring i pps | Heltal | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_step_motor_speed(10)
```

## Stoppa stegmotorn {#stop_step_motor}

Stoppar stegmotorn eller stänger av strömmen till den.

<BlockImage module="CheeseStick/CSD09" id="stop_step_motor" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Sätt att stoppa | stoppa(stop), stäng av strömmen(power) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# unit = "stop"
csd09.stop_step_motor()

# unit = "power"
csd09.turn_off_step_motor()
```

## Stegantal {#step_motor_steps}

Returnerar det totala antalet steg som stegmotorn har roterat hittills.

<BlockImage module="CheeseStick/CSD09" id="step_motor_steps" />

### Parametrar

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.get_steps()
```
