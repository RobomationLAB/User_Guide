---
title: Turtle
---

# Turtle

## Instansdeklaration {#instance}

När du lägger till ett Turtle-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
turtle = Turtle(0)
# När det finns flera instanser
turtle_1 = Turtle(1)
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Ställa in hjulhastigheten {#set_wheel_speed}

Bestämmer hjulens hastighet. Hastigheten går från -100 till 100.

<BlockImage module="roboids/Turtle" id="set_wheel_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Hjul som ska styras | vänster(left), höger(right), båda(both) | - |
| speed | Inmatning (block) | Hjulhastighet | Heltal -100 till 100, 0: stopp | - |

### Python
```python
turtle = Turtle(0)

turtle.set_wheel_speed('both', 50)
```

## Köra en sträcka {#move_distance}

Ställer in hur långt roboten ska köra.  
Om hjulhastigheten inte har ställts in kör den inte alls.  
Om sträckan är 0 fortsätter den att köra enligt den nuvarande hjulhastigheten.  
Om vänta är ikryssat väntar körningen tills förflyttningen är klar.

<BlockImage module="roboids/Turtle" id="move_distance" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Sträcka att köra | Reellt tal 0 eller större | - |
| unit | Rullgardinsalternativ | Längdenhet | cm, mm, tum(inch) | cm |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.move_distance(50, 'cm', wait=True)
```

## Köra en viss tid {#move_time}

Kör under den angivna tiden med den nuvarande hjulhastigheten.  
Om hjulhastigheten inte har ställts in kör den framåt med standardhastigheten.  
Om vänta är ikryssat väntar körningen tills förflyttningen är klar.

<BlockImage module="roboids/Turtle" id="move_time" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Tid att köra (sekunder) | Reellt tal 0 eller större | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

# wait = TRUE
turtle.move_time(5, wait=True)
# wait = FALSE
turtle.move_time(0.5, wait=False)
```

## Svänga på stället {#turn_degree}

Ställer in åt vilket håll och hur många grader roboten ska svänga på stället.  
Om vänta är ikryssat väntar körningen tills rotationen är klar.

<BlockImage module="roboids/Turtle" id="turn_degree" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullgardinsalternativ | Rotationsriktning | vänster(left), höger(right) | - |
| data | Inmatning (block) | Rotationsvinkel (grader) | Reellt tal 0 eller större | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.turn_degree('left', 90, wait=True)
```

## Ändra hjulhastigheten {#change_speed}

Ändrar hjulhastigheten på Turtle.  
Den nya hjulhastigheten blir den nuvarande hjulhastigheten plus den hastighet du anger.

<BlockImage module="roboids/Turtle" id="change_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Hjul som ska styras | vänster(left), höger(right), båda(both) | - |
| speed | Inmatning (block) | Hastighetsändring | Heltal -200 till 200 | - |

### Python
```python
turtle = Turtle(0)

turtle.change_wheel_speed('both', 10)
```

## Stanna {#stop}

Stoppar Turtles förflyttning.

<BlockImage module="roboids/Turtle" id="stop" />

### Parametrar

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.stop()
```

## Rör sig hjulet? {#wheel_moving}

Returnerar true om hjulet rör sig och false om det står stilla.

<BlockImage module="roboids/Turtle" id="wheel_moving" />

### Parametrar

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.wheel_moving()
```

## Svänga runt ett hjul {#pivot}

Ställer in vad roboten ska svänga runt samt riktning och vinkel.  
Om vänta är ikryssat väntar körningen tills rotationen är klar.

<BlockImage module="roboids/Turtle" id="pivot" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| base | Rullgardinsalternativ | Hjul som rotationen sker runt | vänster hjul(left_wheel), höger hjul(right_wheel) | - |
| direction | Rullgardinsalternativ | Rotationsriktning | framåt(forward), bakåt(backward) | - |
| data | Inmatning (block) | Rotationsvinkel (grader) | Reellt tal 0 eller större | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot('left_wheel', 'forward', 90, wait=True)
```

## Rita en cirkel {#pivot_circle}

Ställer in riktning, radie och vinkel när du ritar en cirkel med pennan.  
Om vänta är ikryssat väntar körningen tills rotationen är klar.

<BlockImage module="roboids/Turtle" id="pivot_circle" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullgardinsalternativ | Rotationsriktning | snett framåt vänster(left_forward), snett bakåt vänster(left_backward), snett framåt höger(right_forward), snett bakåt höger(right_backward) | - |
| degree | Inmatning (block) | Rotationsvinkel (grader) | Reellt tal 0 eller större | - |
| radius | Inmatning (block) | Rotationsradie | Reellt tal 0 eller större | - |
| unit | Rullgardinsalternativ | Radiens enhet | cm, mm, tum(inch) | cm |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot_circle('left_forward', 90, 1, 'cm', wait=True)
```

## Följa en linje med sensorn {#trace_line}

Följer en linje med en viss färg med hjälp av färgsensorn på undersidan.

<BlockImage module="roboids/Turtle" id="trace_line" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| line | Rullgardinsalternativ | Linjens färg som ska följas | svart(black), röd(red), grön(green), blå(blue), alla färger(any) | black |

### Python
```python
turtle = Turtle(0)

turtle.trace_line('black')
```

## Följa en linje tills en viss färg {#trace_line_until_color}

Följer en linje i färgen A tills färgen B möts, med hjälp av färgsensorn på undersidan.

<BlockImage module="roboids/Turtle" id="trace_line_until_color" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| line | Rullgardinsalternativ | Linjens färg som ska följas | svart(black), röd(red), grön(green), blå(blue), alla färger(any) | - |
| color | Rullgardinsalternativ | Färg att stanna vid | svart(black), röd(red), grön(green), cyan(cyan), blå(blue), magenta(magenta), alla färger(any) | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_line_until_color('black', 'red', wait=True)
```

## Köra genom en korsning och stanna vid nästa {#intersection}

Turtle kör åt det angivna hållet i korsningen och fortsätter sedan tills den möter nästa korsning.  
Om vänta är ikryssat väntar körningen tills förflyttningen är klar.  

<BlockImage module="roboids/Turtle" id="intersection" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullgardinsalternativ | Riktning i korsningen | kör framåt(forward), vänster(left), höger(right), u-sväng(uturn) | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_intersection('left', wait=True)
```

## Ställa in linjeföljningshastigheten {#set_trace_speed}

Ställer in hastigheten för linjeföljningen. Hastigheten går från 1 till 10.

<BlockImage module="roboids/Turtle" id="set_trace_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Linjeföljningshastighet | Heltal 1 till 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_speed(5)
```

## Ställa in linjeföljningsförstärkningen {#set_trace_gain}

Ställer in hur mycket riktningen ändras vid linjeföljning. Värdet går från 1 till 10.

<BlockImage module="roboids/Turtle" id="set_trace_gain" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Riktningsändring | Heltal 1 till 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_gain(5)
```

## Sluta följa linjen {#stop_trace}

Avslutar linjeföljningen hos Turtle.

<BlockImage module="roboids/Turtle" id="stop_trace" />

### Parametrar

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.stop_trace()
```

## Ställa in LED-färgen {#set_led_color}

Ställer in färgen på huvudlysdioden hos Turtle.  
När du väljer en färg i färgpaletten omvandlas den till ett **färgnamn** (en engelsk sträng) i anropet. (Koden skapas med färgnamnet, inte med siffervärden för R, G och B.)

<BlockImage module="roboids/Turtle" id="set_led_color" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| color | Färg | Val i färgpaletten → omvandlas till ett färgnamn (engelska) | Färgnamn: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color('red')
```

## Ställa in LED-färgen med ett block från Färg-kategorin {#set_led_color_with_block}

Tar emot utdata från ett block i Färg-kategorin (`[R, G, B]`) som inmatning och ställer in huvudlysdiodens färg.

<BlockImage module="roboids/Turtle" id="set_led_color_with_block" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (färg) | Block från Färg-kategorin eller fältet `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color(*Utils.color('red'))
```

## Ändra LED-färgen med RGB {#change_by_rgb}

Lägger de angivna R-, G- och B-ändringarna till huvudlysdiodens nuvarande färg och ställer in den nya färgen.

<BlockImage module="roboids/Turtle" id="change_by_rgb" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| r | Inmatning (fält) | Ändring av rött | Heltal -255 till 255 | 0 |
| g | Inmatning (fält) | Ändring av grönt | Heltal -255 till 255 | 0 |
| b | Inmatning (fält) | Ändring av blått | Heltal -255 till 255 | 0 |

### Python
```python
turtle = Turtle(0)

turtle.change_led_color(10, 0, 0)
```

## Släcka LED {#turn_off}

Tar bort huvudlysdiodens färg.

<BlockImage module="roboids/Turtle" id="turn_off" />

### Parametrar

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.turn_off()
```

## Ställa in summerljudet {#sound_buzz}

Ställer in summertonen hos Turtle till den angivna frekvensen.

<BlockImage module="roboids/Turtle" id="sound_buzz" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| hz | Inmatning (block) | Frekvens (Hz) | Reellt tal 0 till 6553.5 | - |

### Python
```python
turtle = Turtle(0)

turtle.sound_buzz(440)
```

## Spela en ton {#sound_note}

Turtle spelar den angivna tonen.

<BlockImage module="roboids/Turtle" id="sound_note" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| note | Rullgardinsalternativ | Ton | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Rullgardinsalternativ | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
turtle = Turtle(0)

turtle.sound_note('D', 5)
```

## Spela ett ljudklipp {#sound_clip}

Turtle spelar upp ett visst ljudklipp.

<BlockImage module="roboids/Turtle" id="sound_clip" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| clip | Rullgardinsalternativ | Namn på ljudklipp | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` med flera | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.sound_clip('siren', wait=True)
```

## Stänga av ljudet {#sound_off}

Stänger av ljudet hos Turtle.

<BlockImage module="roboids/Turtle" id="sound_off" />

### Parametrar

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.sound_off()
```

## Spelas ljud? {#sound_playing}

Returnerar true om ett ljud spelas och false om inget spelas.

<BlockImage module="roboids/Turtle" id="sound_playing" />

### Parametrar

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.sound_playing()
```

## Hjulhastighetens värde {#wheel_speed}

Hastigheten hos ett visst hjul

<BlockImage module="roboids/Turtle" id="wheel_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Hjul som ska läsas av | vänster(left), höger(right) | - |

### Python
```python
turtle = Turtle(0)

turtle.wheel_speed('left')
```

## Golvfärgsensorns värde {#floor}

Värdet från färgsensorn på undersidan

<BlockImage module="roboids/Turtle" id="floor" />

### Parametrar

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.floor()
```

## Kortfärgens namn {#card_color}

Namnet på kortets färg, avläst med färgsensorn på undersidan

<BlockImage module="roboids/Turtle" id="card_color" />

### Parametrar

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.card_color()
```

## Kortets färgmönster {#card_pattern}

Mönstret hos kortets färger, avläst med färgsensorn på undersidan

<BlockImage module="roboids/Turtle" id="card_pattern" />

### Parametrar

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.card_pattern()
```

## Accelerationens värde {#acceleration}

Tyngdaccelerationens värde längs en viss axel

<BlockImage module="roboids/Turtle" id="acceleration" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Axel som ska mätas | x, y, z | - |

### Python
```python
turtle = Turtle(0)

turtle.acceleration('x')
```

## Temperatursensorns värde {#temperature}

Temperatursensorns värde

<BlockImage module="roboids/Turtle" id="temperature" />

### Parametrar

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.temperature()
```

## Signalstyrkans värde {#signal_strength}

Signalstyrka

<BlockImage module="roboids/Turtle" id="signal_strength" />

### Parametrar

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.signal_strength()
```

## Batterispänning {#battery}

Batterispänning

<BlockImage module="roboids/Turtle" id="battery" />

### Parametrar

(ingen)

### Python
```python
turtle = Turtle(0)

turtle.battery()
```

## Vidrör den en viss färg? {#color_read}

Mäter med Turtles färgsensor om roboten vidrör den angivna färgen och returnerar **sant (True) / falskt (False)**.

<BlockImage module="roboids/Turtle" id="color_read" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| color | Rullgardinsalternativ | Färgens namn | unknown, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_color('red')
```

## Är kortets färgmönster ~ ? {#pattern_read}

Returnerar **sant (True) / falskt (False)** beroende på om mönstret hos kortets färger som färgsensorn läst av stämmer.

<BlockImage module="roboids/Turtle" id="pattern_read" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| pattern | Rullgardinsalternativ | Kortmönstrets namn | `'red_yellow'`, `'red_green'`, `'blue_red'` | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_pattern('red_yellow')
```

## Bakåtknappens tillstånd {#button}

Om knappen på ryggen är nedtryckt eller har klickats

<BlockImage module="roboids/Turtle" id="button" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| event | Rullgardinsalternativ | Slags knapptillstånd | intryckt(pressed), klickad(click), länge klickad(long_click) | - |  

### Python
```python
turtle = Turtle(0)

turtle.button('pressed')
```

## Om tillståndet har ändrats {#state_change}

Om robotens tillstånd har ändrats

<BlockImage module="roboids/Turtle" id="state_change" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Slags tillstånd | 0 till 5 (se tabellen nedan) | - |

| unit | Villkor |
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
