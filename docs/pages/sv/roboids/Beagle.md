---
title: Beagle
---

# Beagle

## Instansdeklaration {#instance}

När du lägger till ett Beagle-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
beagle = Beagle(0)
# När det finns flera instanser
beagle_1 = Beagle(1)
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Ställa in hjulhastigheten {#set_wheel_speed}

Bestämmer hjulens hastighet. Hastigheten går från -100 till 100.

<BlockImage module="roboids/Beagle" id="set_wheel_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Hjul som ska styras | vänster(left), höger(right), båda(both) | - |
| speed | Inmatning (block) | Hjulhastighet | Heltal -100 till 100, 0: stopp | - |

### Python
```python
beagle = Beagle(0)

beagle.set_wheel_speed('both', 50)
```

## Köra en sträcka {#move_distance}

Kör den angivna sträckan med den nuvarande hjulhastigheten.  
Om hjulhastigheten inte har ställts in kör den framåt med standardhastigheten.  
Om sträckan är 0 fortsätter den att köra enligt den nuvarande hjulhastigheten.  
Om vänta är ikryssat väntar körningen tills förflyttningen är klar.

<BlockImage module="roboids/Beagle" id="move_distance" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Sträcka att köra | Reellt tal 0 eller större | - |
| unit | Rullgardinsalternativ | Längdenhet | cm, mm, tum(inch) | cm |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.move_distance(50, 'cm', wait=True)
```

## Köra en viss tid {#move_time}

Kör under den angivna tiden med den nuvarande hjulhastigheten.  
Om hjulhastigheten inte har ställts in kör den framåt med standardhastigheten.  
Om vänta är ikryssat väntar körningen tills förflyttningen är klar.

<BlockImage module="roboids/Beagle" id="move_time" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Tid att köra (sekunder) | Reellt tal 0 eller större | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

# wait = TRUE
beagle.move_time(5, wait=True)
# wait = FALSE
beagle.move_time(0.5, wait=False)
```

## Svänga på stället {#turn_degree}

Ställer in åt vilket håll och hur många grader roboten ska svänga på stället.  
Om vänta är ikryssat väntar körningen tills rotationen är klar.

<BlockImage module="roboids/Beagle" id="turn_degree" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullgardinsalternativ | Rotationsriktning | vänster(left), höger(right) | - |
| data | Inmatning (block) | Rotationsvinkel (grader) | Reellt tal 0 eller större | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.turn_degree('left', 90, wait=True)
```

## Ändra hjulhastigheten {#change_speed}

Ändrar hjulhastigheten på Beagle.  
Den nya hjulhastigheten blir den nuvarande hjulhastigheten plus den hastighet du anger.  
Den nyligen inställda hjulhastigheten begränsas till intervallet -100 till 100.

<BlockImage module="roboids/Beagle" id="change_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Hjul som ska styras | vänster(left), höger(right), båda(both) | - |
| speed | Inmatning (block) | Hastighetsändring | Heltal -200 till 200 | - |

### Python
```python
beagle = Beagle(0)

beagle.change_wheel_speed('both', 10)
```

## Stanna {#stop}

Stoppar Beagles förflyttning.  
Båda hjulens hastighet på Beagle nollställs till 0.

<BlockImage module="roboids/Beagle" id="stop" />

### Parametrar

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.stop()
```

## Rör sig hjulet? {#wheel_moving}

Returnerar true om hjulet rör sig och false om det står stilla.

<BlockImage module="roboids/Beagle" id="wheel_moving" />

### Parametrar

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.wheel_moving()
```

## Ställa in summerljudet {#sound_buzz}

Ställer in summertonen hos Beagle till den angivna frekvensen.  
Frekvenser som kan ljuda går från 27,5 Hz till 6553,5 Hz.  
Om du anger ett värde utanför det här intervallet hörs ingen summerton.

<BlockImage module="roboids/Beagle" id="sound_buzz" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| hz | Inmatning (block) | Frekvens (Hz) | Reellt tal 0, 27.5 till 6553.5 (annars 0) | - |

### Python
```python
beagle = Beagle(0)

beagle.sound_buzz(440)
```

## Spela en ton {#sound_note}

Beagle spelar den angivna tonen.

<BlockImage module="roboids/Beagle" id="sound_note" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| note | Rullgardinsalternativ | Ton | C, C#, D, D#, E, F, F#, G, G#, A, A#, B | - |
| octave | Rullgardinsalternativ | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
beagle = Beagle(0)

beagle.sound_note('D', 5)
```

## Spela ett ljudklipp {#sound_clip}

Beagle spelar upp ett visst ljudklipp.  
Om vänta är ikryssat väntar körningen tills uppspelningen är klar.

<BlockImage module="roboids/Beagle" id="sound_clip" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| clip | Rullgardinsalternativ | Namn på ljudklipp | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'dibidibidip'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'` med flera | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.sound_clip('siren', wait=True)
```

## Stänga av ljudet {#sound_off}

Stänger av ljudet hos Beagle.

<BlockImage module="roboids/Beagle" id="sound_off" />

### Parametrar

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.sound_off()
```

## Spelas ljud? {#sound_playing}

Returnerar true om ett ljud spelas och false om inget spelas.

<BlockImage module="roboids/Beagle" id="sound_playing" />

### Parametrar

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.sound_playing()
```

## Hjulhastighetens värde {#wheel_speed}

Hastigheten hos ett visst hjul

<BlockImage module="roboids/Beagle" id="wheel_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Hjul som ska läsas av | vänster(left), höger(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.wheel_speed('left')
```

## Pulsgivarens värde {#encoder}

Pulsgivarens värde för ett visst hjul

<BlockImage module="roboids/Beagle" id="encoder" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Hjul som ska läsas av | vänster(left), höger(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.encoder('left')
```

## Gyroskopets värde {#gyroscope}

Gyroskopets värde längs en viss axel

<BlockImage module="roboids/Beagle" id="gyroscope" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Axel som ska mätas | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.gyroscope('x')
```

## Accelerometerns värde {#accelerometer}

Accelerometerns värde längs en viss axel

<BlockImage module="roboids/Beagle" id="accelerometer" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Axel som ska mätas | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.accelerometer('x')
```

## Magnetometerns värde {#magnetometer}

Magnetometerns värde längs en viss axel

<BlockImage module="roboids/Beagle" id="magnetometer" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Axel som ska mätas | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.magnetometer('x')
```

## Temperatursensorns värde {#temperature}

Temperatursensorns värde

<BlockImage module="roboids/Beagle" id="temperature" />

### Parametrar

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.temperature()
```

## Signalstyrkans värde {#signal_strength}

Signalstyrka

<BlockImage module="roboids/Beagle" id="signal_strength" />

### Parametrar

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.signal_strength()
```

## Batterispänning {#battery}

Batterispänning

<BlockImage module="roboids/Beagle" id="battery" />

### Parametrar

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.battery()
```

## Om tillståndet har ändrats {#state_change}

Om robotens tillstånd har ändrats

<BlockImage module="roboids/Beagle" id="state_change" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Slags tillstånd | 0 till 5 (se tabellen nedan) | - |

| unit | Villkor |
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

## Starta / stoppa lidarn {#lidar_power}

Aktiverar eller inaktiverar lidarsensorn.

<BlockImage module="roboids/Beagle" id="lidar_power" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| on | Rullgardinsalternativ | Lidar PÅ / AV | start(on=True), stopp(off=False) | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.lidar_power(True)
```

## Avståndet till lidarns ~:e föremål {#lidar_value}

Lidarsensorn kan mäta avståndet till föremål runt om i 360 grader.  
Med Beagles framsida som utgångspunkt (värde 0) ökar numret med 1 moturs.

<BlockImage module="roboids/Beagle" id="lidar_value" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Inmatning (fält) | Föremålets nummer (från 0) | Heltal 0 eller större | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_value(0)
```

## Lidarns avstånd per riktning {#lidar_directions}

Visar avståndet framåt, bakåt, åt sidorna och diagonalt som lidarsensorn har mätt.  
Blocket ger medelvärdet av avstånden 45 grader åt vardera hållet i den riktningen.

<BlockImage module="roboids/Beagle" id="lidar_directions" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullgardinsalternativ | Riktning som ska mätas | fram(front), vänster fram(left front), vänster(left), vänster bak(left back), bak(back), höger bak(right back), höger(right), höger fram(right front) | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_directions('front')
```

## Är lidarn redo? {#lidar_state}

Returnerar **sant (True) / falskt (False)** beroende på om lidarn är igång.

<BlockImage module="roboids/Beagle" id="lidar_state" />

### Parametrar

(ingen)

### Python
```python
beagle = Beagle(0)

beagle.lidar_ready()
```
