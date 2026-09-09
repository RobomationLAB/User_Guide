---
title: HamsterS
---

# HamsterS

## Instansdeklaration {#instance}

När du lägger till ett HamsterS-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
hamster_s = HamsterS(0)
# När det finns flera instanser
hamster_s_1 = HamsterS(1)
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Ställa in hjulhastigheten {#set_wheel_speed}

Bestämmer hjulens hastighet. Hastigheten går från -100 till 100.

<BlockImage module="roboids/HamsterS" id="set_wheel_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Hjul som ska styras | vänster(left), höger(right), båda(both) | - |
| speed | Inmatning (block) | Hjulhastighet | Heltal -100 till 100, 0: stopp | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_wheel_speed('both', 50)
```

## Köra en sträcka {#move_distance}

Kör den angivna sträckan med den nuvarande hjulhastigheten.  
Om hjulhastigheten inte har ställts in kör den framåt med standardhastigheten.  
Om sträckan är 0 fortsätter den att köra enligt den nuvarande hjulhastigheten.  
Om vänta är ikryssat väntar körningen tills förflyttningen är klar.

<BlockImage module="roboids/HamsterS" id="move_distance" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Sträcka att köra | Reellt tal 0 eller större | - |
| unit | Rullgardinsalternativ | Längdenhet | cm, mm, tum(inch) | cm |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.move_distance(50, 'cm', wait=True)
```

## Köra en viss tid {#move_time}

Kör under den angivna tiden med den nuvarande hjulhastigheten.  
Om hjulhastigheten inte har ställts in kör den framåt med standardhastigheten.  
Om vänta är ikryssat väntar körningen tills förflyttningen är klar.

<BlockImage module="roboids/HamsterS" id="move_time" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Tid att köra (sekunder) | Reellt tal 0 eller större | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

# wait = TRUE
hamster_s.move_time(5, wait=True)
# wait = FALSE
hamster_s.move_time(5, wait=False)
```

## Svänga på stället {#turn_degree}

Ställer in åt vilket håll och hur många grader roboten ska svänga på stället.  
Om vänta är ikryssat väntar körningen tills rotationen är klar.

<BlockImage module="roboids/HamsterS" id="turn_degree" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullgardinsalternativ | Rotationsriktning | vänster(left), höger(right) | - |
| data | Inmatning (block) | Rotationsvinkel (grader) | Reellt tal 0 eller större | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_degree('left', 90, wait=True)
```

## Ändra hjulhastigheten {#change_speed}

Ändrar hjulhastigheten på HamsterS.  
Den nya hjulhastigheten blir den nuvarande hjulhastigheten plus den hastighet du anger.

<BlockImage module="roboids/HamsterS" id="change_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Hjul som ska styras | vänster(left), höger(right), båda(both) | - |
| speed | Inmatning (block) | Hastighetsändring | Heltal -200 till 200 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_wheel_speed('both', 10)
```

## Stanna {#stop}

Stoppar HamsterS förflyttning.

<BlockImage module="roboids/HamsterS" id="stop" />

### Parametrar

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop()
```

## Rör sig hjulet? {#wheel_moving}

Returnerar true om hjulet rör sig och false om det står stilla.

<BlockImage module="roboids/HamsterS" id="wheel_moving" />

### Parametrar

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_moving()
```

## Köra ett steg framåt på brädet {#grid_move}

Kör ett steg i taget på brädet, enligt hur brädet är indelat.

<BlockImage module="roboids/HamsterS" id="grid_move" />

### Parametrar

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_move()
```

## Svänga en gång på brädet {#grid_turn}

Svänger 90 grader åt det angivna hållet på brädet.

<BlockImage module="roboids/HamsterS" id="grid_turn" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullgardinsalternativ | Rotationsriktning | vänster(left), höger(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_turn('left')
```

## Rotera runt pennhållaren {#pivot}

Ställer in vad roboten ska rotera runt samt riktning och vinkel när du använder pennhållaren.  
Om vänta är ikryssat väntar körningen tills rotationen är klar.

<BlockImage module="roboids/HamsterS" id="pivot" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| base | Rullgardinsalternativ | Vad rotationen sker runt | vänster penna(left_pen), höger penna(right_pen), vänster hjul(left_wheel), höger hjul(right_wheel) | - |
| direction | Rullgardinsalternativ | Rotationsriktning | framåt(forward), bakåt(backward) | - |
| degree | Inmatning (block) | Rotationsvinkel (grader) | Reellt tal 0 eller större | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot('left_pen', 'forward', 90, wait=True)
```

## Rita en cirkel runt pennhållaren {#pivot_circle}

Ställer in vad roboten ska rotera runt samt riktning, radie och vinkel när du ritar en cirkel med pennhållaren.  
Om vänta är ikryssat väntar körningen tills rotationen är klar.

<BlockImage module="roboids/HamsterS" id="pivot_circle" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| base | Rullgardinsalternativ | Vad rotationen sker runt | vänster penna(left_pen), höger penna(right_pen) | - |
| direction | Rullgardinsalternativ | Rotationsriktning | snett framåt vänster(left_forward), snett bakåt vänster(left_backward), snett framåt höger(right_forward), snett bakåt höger(right_backward) | - |
| degree | Inmatning (block) | Rotationsvinkel (grader) | Reellt tal 0 eller större | - |
| radius | Inmatning (block) | Rotationsradie | Reellt tal 0 eller större | - |
| unit | Rullgardinsalternativ | Radiens enhet | cm, mm, tum(inch) | cm |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot_circle('left_pen', 'left_forward', 90, 1, 'cm', wait=True)
```

## Följa en linje med sensorn {#trace_mode}

HamsterS följer en linje med en viss färg med hjälp av golvsensorn.

<BlockImage module="roboids/HamsterS" id="trace_mode" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| floor | Rullgardinsalternativ | Golvsensor som ska följa linjen | vänster(left), höger(right), mitten(center) | - |
| line | Rullgardinsalternativ | Linjens färg | svart(black), vit(white) | black |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_line('left', 'black')
```

## Köra genom en korsning och stanna vid nästa {#trace_until_grid}

HamsterS kör åt det angivna hållet i korsningen och fortsätter sedan tills den möter nästa korsning.  
Om vänta är ikryssat väntar körningen tills förflyttningen är klar.  

<BlockImage module="roboids/HamsterS" id="trace_until_grid" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullgardinsalternativ | Riktning i korsningen | sväng vänster(left), sväng höger(right), framåt(forward), u-sväng(uturn) | - |
| line | Rullgardinsalternativ | Linjens färg | svart(black), vit(white) | black |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_intersection('left', 'black', wait=True)
```

## Ställa in linjeföljningshastigheten {#set_trace_speed}

Ställer in hastigheten för linjeföljningen. Hastigheten går från 1 till 10.

<BlockImage module="roboids/HamsterS" id="set_trace_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Linjeföljningshastighet | Heltal 1 till 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_speed(5)
```

## Ställa in linjeföljningens förstärkning {#set_trace_gain}

Ställer in hur mycket riktningen ändras vid linjeföljning. Värdet går från 1 till 10.

<BlockImage module="roboids/HamsterS" id="set_trace_gain" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Riktningsändring | Heltal 1 till 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_gain(5)
```

## Stoppa linjeföljningen {#stop_trace}

Avslutar linjeföljningen hos HamsterS.

<BlockImage module="roboids/HamsterS" id="stop_trace" />

### Parametrar

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop_trace()
```

## Ställa in LED-färgen {#set_led_color}

Ställer in färgen på lysdioden hos HamsterS.  
När du väljer en färg i färgpaletten omvandlas den till ett **färgnamn** (en engelsk sträng) i anropet. (Koden skapas med färgnamnet, inte med siffervärden för R, G och B.)

<BlockImage module="roboids/HamsterS" id="set_led_color" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Lysdiod som ska styras | vänster(left), höger(right), båda(both) | - |
| color | Färg | Val i färgpaletten → omvandlas till ett färgnamn (engelska) | Färgnamn: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', 'red')
```

## Ställa in LED-färgen med ett block från Färg-kategorin {#set_led_color_with_block}

Tar emot ett block från Färg-kategorin (`[R, G, B]`) som inmatning och ställer in lysdiodens färg.

<BlockImage module="roboids/HamsterS" id="set_led_color_with_block" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Lysdiod som ska styras | vänster(left), höger(right), båda(both) | - |
| data | Inmatning (färg) | Block från Färg-kategorin eller fältet `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', *Utils.color_rgb(255, 128, 0))
```

## Ändra LED-färgen med RGB {#change_by_rgb}

Ändrar färgen på lysdioden hos HamsterS med de angivna R-, G- och B-värdena.

<BlockImage module="roboids/HamsterS" id="change_by_rgb" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Lysdiod som ska styras | vänster(left), höger(right), båda(both) | - |
| r | Inmatning (fält) | Ändring av rött | Heltal -255 till 255 | 0 |
| g | Inmatning (fält) | Ändring av grönt | Heltal -255 till 255 | 0 |
| b | Inmatning (fält) | Ändring av blått | Heltal -255 till 255 | 0 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_led_color('both', 10, 0, 0)
```

## Släcka LED {#turn_off}

Tar bort lysdiodens färg.

<BlockImage module="roboids/HamsterS" id="turn_off" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Lysdiod som ska styras | vänster(left), höger(right), båda(both) | both |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_off('both')
```

## Ställa in summerfrekvensen {#sound_buzz}

Ställer in summertonen hos HamsterS till den angivna frekvensen.  
Frekvenser som kan ljuda går från 122,1 Hz till 4186,0 Hz.  
Om du anger ett värde utanför det här intervallet hörs ingen summerton.

<BlockImage module="roboids/HamsterS" id="sound_buzz" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| hz | Inmatning (block) | Frekvens (Hz) | Reellt tal 122.1 till 4186.0 (annars 0) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_buzz(440)
```

## Spela en ton {#sound_note}

HamsterS spelar den angivna tonen.

<BlockImage module="roboids/HamsterS" id="sound_note" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| note | Rullgardinsalternativ | Ton | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Rullgardinsalternativ | Oktav | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_note('D', 5)
```

## Spela ett ljudklipp {#sound_clip}

HamsterS spelar upp ett visst ljudklipp.  
Om vänta är ikryssat väntar körningen tills uppspelningen är klar.

<BlockImage module="roboids/HamsterS" id="sound_clip" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| clip | Rullgardinsalternativ | Namn på ljudklipp | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'happy'`, `'angry'`, `'sad'` med flera | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_clip('siren', wait=True)
```

## Stänga av ljudet {#sound_off}

Stänger av ljudet hos HamsterS.

<BlockImage module="roboids/HamsterS" id="sound_off" />

### Parametrar

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_off()
```

## Spelas ljud? {#sound_playing}

Returnerar true om ett ljud spelas och false om inget spelas.

<BlockImage module="roboids/HamsterS" id="sound_playing" />

### Parametrar

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_playing()
```

## Hjulhastighetens värde {#wheel_speed}

Hastigheten hos ett visst hjul

<BlockImage module="roboids/HamsterS" id="wheel_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Hjul som ska läsas av | vänster(left), höger(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_speed('left')
```

## Avståndssensorns värde {#proximity}

Värdet hos en viss avståndssensor

<BlockImage module="roboids/HamsterS" id="proximity" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Sensorns placering | vänster(left), höger(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.proximity('left')
```

## Golvsensorns värde {#floor}

Värdet hos en viss golvsensor

<BlockImage module="roboids/HamsterS" id="floor" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Sensorns placering | vänster(left), höger(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.floor('left')
```

## Accelerationens värde {#acceleration}

Tyngdaccelerationens värde längs en viss axel

<BlockImage module="roboids/HamsterS" id="acceleration" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Axel som ska mätas | x, y, z | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.acceleration('x')
```

## Ljusstyrkans värde {#light}

Ljusstyrkans värde

<BlockImage module="roboids/HamsterS" id="light" />

### Parametrar

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.light()
```

## Temperatursensorns värde {#temperature}

Temperatursensorns värde

<BlockImage module="roboids/HamsterS" id="temperature" />

### Parametrar

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.temperature()
```

## Signalstyrkans värde {#signal_strength}

Signalstyrka

<BlockImage module="roboids/HamsterS" id="signal_strength" />

### Parametrar

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.signal_strength()
```

## Batterispänning {#battery}

Batterispänning

<BlockImage module="roboids/HamsterS" id="battery" />

### Parametrar

(ingen)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.battery()
```

## Om tillståndet har ändrats {#state_change}

Om robotens tillstånd har ändrats

<BlockImage module="roboids/HamsterS" id="state_change" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Slags tillstånd | 0 till 7 (se tabellen nedan) | - |

| unit | Betydelse | Python |
|------|------|--------|
| 0 | Lutar framåt | `acceleration('x') > 5000` |
| 1 | Lutar bakåt | `acceleration('x') < -5000` |
| 2 | Lutar åt vänster | `acceleration('y') > 5000` |
| 3 | Lutar åt höger | `acceleration('y') < -5000` |
| 4 | Upp och ner | `acceleration('z') > 0` |
| 5 | Inte upp och ner | `acceleration('z') < -3000` |
| 6 | Hinder/hand upptäckt | `proximity('left') > 50 or proximity('right') > 50` |
| 7 | Knackning | `tap()` |

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

## Ställa in in-/utgångsportens läge {#io_mode}

Ställer in ingångsläget för IO-porten.

<BlockImage module="roboids/HamsterS" id="io_mode" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | In-/utgångsport | A (`'a'`), B (`'b'`), båda(both) | - |
| option | Rullgardinsalternativ | In-/utgångsläge | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.io_mode('both', 'analog_input')
```

## Ställa in utgångsvärdet för in-/utgångsporten {#set_output}

Ställer in utgångsvärdet för den angivna IO-porten.

<BlockImage module="roboids/HamsterS" id="set_output" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | In-/utgångsport | A (`'a'`), B (`'b'`), båda(both) | - |
| data | Inmatning (block) | Utgångsvärde | Heltal 0 till 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_output('a', 90)
```

## Ändra utgångsvärdet för in-/utgångsporten {#change_output}

Ändrar utgångsvärdet för den angivna IO-porten.

<BlockImage module="roboids/HamsterS" id="change_output" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | In-/utgångsport | A (`'a'`), B (`'b'`), båda(both) | - |
| data | Inmatning (block) | Ändring av utgångsvärdet | Heltal | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_output('a', 10)
```

## Öppna / stänga gripklon {#gripper}

Öppnar eller stänger gripklon på HamsterS.  
Beroende på värdet på unit anropas en av de två metoderna.

<BlockImage module="roboids/HamsterS" id="gripper" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Åtgärd | öppna(open), stänga(close) | - |

### Python
```python
hamster_s = HamsterS(0)

# unit = "open"
hamster_s.open_gripper()
# unit = "close"
hamster_s.close_gripper()
```

## Ställa in avfyrarens vinkel {#shooter}

Styr avfyraren genom att ställa in dess vinkel. Vinkeln går från 0 till 180.

<BlockImage module="roboids/HamsterS" id="shooter" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Avfyrarens vinkel | Heltal 0 till 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.shooter(45)
```

## In-/utgångsportens ingångsvärde {#input}

Returnerar ingångsvärdet för in-/utgångsporten på HamsterS.

<BlockImage module="roboids/HamsterS" id="input" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | In-/utgångsport | A (`'a'`), B (`'b'`) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.get_input('a')
```
