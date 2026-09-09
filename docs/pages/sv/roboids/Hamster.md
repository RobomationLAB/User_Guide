---
title: Hamster
---

# Hamster

## Instansdeklaration {#instance}

När du lägger till ett Hamster-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
hamster = Hamster(0)
# När det finns flera instanser
hamster_1 = Hamster(1)
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Ställa in hjulhastigheten {#set_wheel_speed}

Bestämmer hjulens hastighet. Hastigheten går från -100 till 100.

<BlockImage module="roboids/Hamster" id="set_wheel_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Hjul som ska styras | vänster(left), höger(right), båda(both) | - |
| speed | Inmatning (block) | Hjulhastighet | Heltal -100 till 100, 0: stopp | - |

### Python
```python
hamster = Hamster(0)

hamster.set_wheel_speed('both', 50)
```

## Köra en viss tid {#move_time}

Kör under den angivna tiden med den nuvarande hjulhastigheten.  
Om hjulhastigheten inte har ställts in kör den framåt med standardhastigheten.  
Om vänta är ikryssat väntar körningen tills förflyttningen är klar.

<BlockImage module="roboids/Hamster" id="move_time" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Tid att köra (sekunder) | Reellt tal 0 eller större | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

# wait = TRUE
hamster.move_time(5, wait=True)
# wait = FALSE
hamster.move_time(0.5, wait=False)
```

## Ändra hjulhastigheten {#change_speed}

Ändrar hjulhastigheten på Hamster.  
Den nya hjulhastigheten blir den nuvarande hjulhastigheten plus den hastighet du anger.  
Den nyligen inställda hjulhastigheten begränsas till intervallet -100 till 100.

<BlockImage module="roboids/Hamster" id="change_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Hjul som ska styras | vänster(left), höger(right), båda(both) | - |
| speed | Inmatning (block) | Hastighetsändring | Heltal -200 till 200 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_wheel_speed('both', 10)
```

## Stanna {#stop}

Stoppar Hamster förflyttning.  
Båda hjulens hastighet på Hamster nollställs till 0.

<BlockImage module="roboids/Hamster" id="stop" />

### Parametrar

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.stop()
```

## Köra ett steg framåt på brädet {#grid_move}

Kör ett steg i taget på brädet, enligt hur brädet är indelat.

<BlockImage module="roboids/Hamster" id="grid_move" />

### Parametrar

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.grid_move()
```

## Svänga en gång på brädet {#grid_turn}

Svänger 90 grader åt det angivna hållet på brädet.

<BlockImage module="roboids/Hamster" id="grid_turn" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullgardinsalternativ | Rotationsriktning | vänster(left), höger(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.grid_turn('left')
```

## Följa en linje med sensorn {#trace_mode}

Hamster följer en linje med en viss färg med hjälp av golvsensorn.

<BlockImage module="roboids/Hamster" id="trace_mode" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| floor | Rullgardinsalternativ | Golvsensor som ska följa linjen | vänster(left), höger(right), mitten(center) | - |
| line | Rullgardinsalternativ | Linjens färg | svart(black), vit(white) | black |

### Python
```python
hamster = Hamster(0)

hamster.trace_line('left', 'black')
```

## Köra genom en korsning och stanna vid nästa {#trace_until_grid}

Hamster kör åt det angivna hållet i korsningen och fortsätter sedan tills den möter nästa korsning.  
Om vänta är ikryssat väntar körningen tills förflyttningen är klar.  

<BlockImage module="roboids/Hamster" id="trace_until_grid" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullgardinsalternativ | Riktning i korsningen | sväng vänster(left), sväng höger(right), framåt(forward), u-sväng(uturn) | - |
| line | Rullgardinsalternativ | Linjens färg | svart(black), vit(white) | black |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

hamster.trace_intersection('left', 'black', wait=True)
```

## Ställa in linjeföljningshastigheten {#set_trace_speed}

Ställer in hastigheten för linjeföljningen. Hastigheten går från 1 till 10.

<BlockImage module="roboids/Hamster" id="set_trace_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Linjeföljningshastighet | Heltal 1 till 10 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_trace_speed(5)
```

## Stoppa linjeföljningen {#stop_trace}

Avslutar linjeföljningen hos Hamster.

<BlockImage module="roboids/Hamster" id="stop_trace" />

### Parametrar

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.stop_trace()
```

## Ställa in LED-färgen {#set_led_color}

Ställer in färgen på lysdioden.

<BlockImage module="roboids/Hamster" id="set_led_color" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Lysdiod som ska styras | vänster(left), höger(right), båda(both) | - |
| color | Rullgardinsalternativ | Färg | svart(black), blå(blue), grön(green), cyan(cyan), röd(red), magenta(magenta), gul(yellow), vit(white) | - |

### Python
```python
hamster = Hamster(0)

hamster.set_led_color('both', 'red')
```

## Släcka LED {#turn_off}

Tar bort lysdiodens färg.

<BlockImage module="roboids/Hamster" id="turn_off" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Lysdiod som ska styras | vänster(left), höger(right), båda(both) | both |

### Python
```python
hamster = Hamster(0)

hamster.turn_off('both')
```

## Ställa in summerfrekvensen {#sound_buzz}

Ställer in summertonen hos Hamster till den angivna frekvensen.  
Frekvenser som kan ljuda går från 1,0 Hz till 6553,5 Hz.  
Om du anger ett värde utanför det här intervallet hörs ingen summerton.

<BlockImage module="roboids/Hamster" id="sound_buzz" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| hz | Inmatning (block) | Frekvens (Hz) | Reellt tal 0 till 6553.5 | - |

### Python
```python
hamster = Hamster(0)

hamster.sound_buzz(440)
```

## Spela en ton {#sound_note}

Hamster spelar den angivna tonen.

<BlockImage module="roboids/Hamster" id="sound_note" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| note | Rullgardinsalternativ | Ton | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Rullgardinsalternativ | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster = Hamster(0)

hamster.sound_note('D', 5)
```

## Stänga av ljudet {#sound_off}

Stänger av ljudet hos Hamster.

<BlockImage module="roboids/Hamster" id="sound_off" />

### Parametrar

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.sound_off()
```

## Hjulhastighetens värde {#wheel_speed}

Hastigheten hos ett visst hjul

<BlockImage module="roboids/Hamster" id="wheel_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Hjul som ska läsas av | vänster(left), höger(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.wheel_speed('left')
```

## Närhetssensorns värde {#proximity}

Värdet hos en viss närhetssensor

<BlockImage module="roboids/Hamster" id="proximity" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Sensorns placering | vänster(left), höger(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.proximity('left')
```

## Golvsensorns värde {#floor}

Värdet hos en viss golvsensor

<BlockImage module="roboids/Hamster" id="floor" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Sensorns placering | vänster(left), höger(right), mitten(center) | - |

### Python
```python
hamster = Hamster(0)

hamster.floor('left')
```

## Accelerationens värde {#acceleration}

Tyngdaccelerationens värde längs en viss axel

<BlockImage module="roboids/Hamster" id="acceleration" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Axel som ska mätas | x, y, z | - |

### Python
```python
hamster = Hamster(0)

hamster.acceleration('x')
```

## Ljusstyrkans värde {#light}

Ljusstyrkans värde

<BlockImage module="roboids/Hamster" id="light" />

### Parametrar

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.light()
```

## Temperatursensorns värde {#temperature}

Temperatursensorns värde

<BlockImage module="roboids/Hamster" id="temperature" />

### Parametrar

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.temperature()
```

## Signalstyrkans värde {#signal_strength}

Signalstyrka

<BlockImage module="roboids/Hamster" id="signal_strength" />

### Parametrar

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.signal_strength()
```

## Batterispänning {#battery}

Batterispänning

<BlockImage module="roboids/Hamster" id="battery" />

### Parametrar

(ingen)

### Python
```python
hamster = Hamster(0)

hamster.battery()
```

## Om tillståndet har ändrats {#state_change}

Om robotens tillstånd har ändrats

<BlockImage module="roboids/Hamster" id="state_change" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Slags tillstånd | 0 till 6 (se tabellen nedan) | - |

| unit | Villkor |
|------|------|
| 0 | `acceleration('x') > 5000` |
| 1 | `acceleration('x') < -5000` |
| 2 | `acceleration('y') > 5000` |
| 3 | `acceleration('y') < -5000` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -3000` |
| 6 | `proximity('left') > 50 or proximity('right') > 50` |

### Python
```python
hamster = Hamster(0)

# unit = 0
hamster.acceleration('x') > 5000
# unit = 6
hamster.proximity('left') > 50 or hamster.proximity('right') > 50
```

## Ställa in in-/utgångsportens läge {#io_mode}

Ställer in ingångsläget för IO-porten.

<BlockImage module="roboids/Hamster" id="io_mode" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | In-/utgångsport | A (`'a'`), B (`'b'`), båda(both) | - |
| option | Rullgardinsalternativ | In-/utgångsläge | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster = Hamster(0)

hamster.io_mode('both', 'analog_input')
```

## Ställa in utgångsvärdet för in-/utgångsporten {#set_output}

Ställer in utgångsvärdet för den angivna IO-porten.

<BlockImage module="roboids/Hamster" id="set_output" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | In-/utgångsport | A (`'a'`), B (`'b'`), båda(both) | - |
| data | Inmatning (block) | Utgångsvärde | Heltal 0 till 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_output('both', 90)
```

## Ändra utgångsvärdet för in-/utgångsporten {#change_output}

Ändrar utgångsvärdet för den angivna IO-porten.

<BlockImage module="roboids/Hamster" id="change_output" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | In-/utgångsport | A (`'a'`), B (`'b'`), båda(both) | - |
| data | Inmatning (block) | Ändring av utgångsvärdet | Heltal | - |

### Python
```python
hamster = Hamster(0)

hamster.change_output('a', 10)
```

## Öppna / stänga gripklon {#gripper}

Öppnar eller stänger gripklon på Hamster.  
Beroende på värdet på unit anropas en av de två metoderna.

<BlockImage module="roboids/Hamster" id="gripper" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Åtgärd | stänga(close), öppna(open) | - |

### Python
```python
hamster = Hamster(0)

# unit = "open"
hamster.open_gripper()
# unit = "close"
hamster.close_gripper()
```

## Ställa in avfyrarens vinkel {#shooter}

Styr avfyraren genom att ställa in dess vinkel. Vinkeln går från 0 till 180.

<BlockImage module="roboids/Hamster" id="shooter" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Avfyrarens vinkel | Heltal 0 till 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.shooter(45)
```

## In-/utgångsportens ingångsvärde {#input}

Returnerar ingångsvärdet för in-/utgångsporten på Hamster.

<BlockImage module="roboids/Hamster" id="input" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | In-/utgångsport | A (`'a'`), B (`'b'`) | - |

### Python
```python
hamster = Hamster(0)

hamster.get_input('a')
```
