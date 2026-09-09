---
title: Piobot
---

# Piobot

## Instansdeklaration {#instance}

När du lägger till ett Piobot(Pio)-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
pio = Pio(0)
# När det finns flera instanser
pio_1 = Pio(1)
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Ställa in hjulhastigheten {#set_wheel_speed}

Ställer in hjulens hastighet. Hjulhastigheten går från -100 till 100.

<BlockImage module="roboids/Pio" id="set_wheel_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Hjul som ska styras | vänster(left), höger(right), båda(both) | - |
| speed | Inmatning (block) | Hjulhastighet | Heltal -100 till 100, 0: stopp | - |

### Python
```python
pio = Pio(0)

pio.set_wheel_speed('both', 50)
```

## Köra en sträcka {#move_distance}

Kör den angivna sträckan med den nuvarande hjulhastigheten.  
Om hjulhastigheten inte har ställts in kör den framåt med standardhastigheten.  
Om sträckan är 0 fortsätter den att köra enligt den nuvarande hjulhastigheten.  
Om vänta är ikryssat väntar körningen tills förflyttningen är klar.

<BlockImage module="roboids/Pio" id="move_distance" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Sträcka att köra | Reellt tal 0 eller större | - |
| unit | Rullgardinsalternativ | Längdenhet | cm, mm, tum(inch) | cm |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.move_distance(50, 'cm', wait=True)
```

## Köra en viss tid {#move_time}

Kör under den angivna tiden med den nuvarande hjulhastigheten.  
Om hjulhastigheten inte har ställts in kör den framåt med standardhastigheten.  
Om vänta är ikryssat väntar körningen tills förflyttningen är klar.

<BlockImage module="roboids/Pio" id="move_time" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Tid att köra (sekunder) | Reellt tal 0 eller större | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# wait = TRUE
pio.move_time(5, wait=True)
# wait = FALSE
pio.move_time(5, wait=False)
```

## Svänga på stället {#turn_degree}

Ställer in åt vilket håll och hur många grader roboten ska svänga på stället.  
Om vänta är ikryssat väntar körningen tills rotationen är klar.

<BlockImage module="roboids/Pio" id="turn_degree" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| direction | Rullgardinsalternativ | Rotationsriktning | vänster(left), höger(right) | - |
| data | Inmatning (block) | Rotationsvinkel (grader) | Reellt tal 0 eller större | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# direction = "left"
pio.turn_degree('left', 90, wait=True)
# direction = "right"
pio.turn_degree('right', 90, wait=True)
```

## Ändra hjulhastigheten {#change_speed}

Ändrar hjulhastigheten på Piobot.  
Den nya hjulhastigheten blir den nuvarande hjulhastigheten plus den hastighet du anger.  
Den nyligen inställda hjulhastigheten begränsas till intervallet -100 till 100.

<BlockImage module="roboids/Pio" id="change_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Hjul som ska styras | vänster(left), höger(right), båda(both) | - |
| speed | Inmatning (block) | Hastighetsändring | Heltal -200 till 200 | - |

### Python
```python
pio = Pio(0)

pio.change_wheel_speed('both', 50)
```

## Slå på / stänga av turboläget {#turbo}

Slår på eller stänger av turboläget på Piobot.

<BlockImage module="roboids/Pio" id="turbo" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Turboläge PÅ / AV | på(on=True), av(off=False) | TRUE |

### Python
```python
pio = Pio(0)

pio.turbo(True)
```

## Stanna {#stop}

Stoppar Piobots förflyttning.  
Båda hjulens hastighet på Piobot nollställs till 0.

<BlockImage module="roboids/Pio" id="stop" />

### Parametrar

(ingen)

### Python
```python
pio = Pio(0)

pio.stop()
```

## Rör sig hjulen? {#wheel_moving}

Returnerar true om hjulen rör sig och false om de står stilla.

<BlockImage module="roboids/Pio" id="wheel_moving" />

### Parametrar

(ingen)

### Python
```python
pio = Pio(0)

pio.wheel_moving()
```

## Flytta ett steg på spelplanen {#grid_move}

Rör sig ett steg i taget på spelplanen, enligt hur den är indelad.

<BlockImage module="roboids/Pio" id="grid_move" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Riktning | framåt(forward), bakåt(backward), åt vänster(left), åt höger(right) | - |

### Python
```python
pio = Pio(0)

pio.grid_move('forward')
```

## Svänga en gång på spelplanen {#grid_turn}

Piobot svänger 90 grader åt det angivna hållet på spelplanen. Den väntar alltid tills det är klart (wait=True är fast inställt internt).

<BlockImage module="roboids/Pio" id="grid_turn" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Rotationsriktning | vänster(left), höger(right) | - |

### Python
```python
pio = Pio(0)

# unit = "left"
pio.grid_turn('left')
# unit = "right"
pio.grid_turn('right')
```

## Ställa in nackens hastighet {#set_neck_speed}

Ställer in hur snabbt nacken vrids. Nackens hastighet går från 1 till 6.

<BlockImage module="roboids/Pio" id="set_neck_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Nackens rotationshastighet | Heltal 1 till 6 | 4 |

### Python
```python
pio = Pio(0)

pio.set_neck_speed(4)
```

## Ställa in nackens vinkel {#set_neck_angle}

Ställer in vilken vinkel nacken ska vridas till. Nackens vinkel går från -45 till 45.

<BlockImage module="roboids/Pio" id="set_neck_angle" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Nackens vinkel (grader) | Reellt tal -45 till 45 | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.set_neck_angle(15, wait=True)
```

## Rör sig nacken? {#neck_moving}

Returnerar true om nacken rör sig och false om den står stilla.

<BlockImage module="roboids/Pio" id="neck_moving" />

### Parametrar

(ingen)

### Python
```python
pio = Pio(0)

pio.neck_moving()
```

## Ställa in ögonfärgen {#set_eye_color}

Ställer in färgen på ögonlysdioderna hos Piobot.  
Du kan ändra färgen på vänster öga, höger öga eller båda.  
När du väljer en färg bland färgförvalen omvandlas den till ett **färgnamn** (en engelsk sträng) i anropet. (Koden skapas med färgnamnet, inte med siffervärden för R, G och B.)

<BlockImage module="roboids/Pio" id="set_eye_color" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Öga som ska styras | vänster(left), höger(right), båda(both) | - |
| color | Rullgardinsalternativ | Färgförval → omvandlas till ett färgnamn (engelska) | svart(black), röd(red), gul(yellow), grön(green), cyan(cyan), blå(blue), magenta(magenta), vit(white) | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', 'red')
```

## Ställa in ögonfärgen med ett block från Färg-kategorin {#set_eye_color_with_block}

Ställer in färgen på ögonlysdioderna hos Piobot med blocken i Färg-kategorin.  
Du kan ändra färgen på vänster öga, höger öga eller båda.

<BlockImage module="roboids/Pio" id="set_eye_color_with_block" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Öga som ska styras | vänster(left), höger(right), båda(both) | - |
| data | Inmatning (färg) | Fältet [R, G, B] | Block från Färg-kategorin eller `[0~255, 0~255, 0~255]` | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', *Utils.color('red'))
```

## Ändra ögonfärgen med RGB {#change_by_rgb}

Ändrar färgen på ögonlysdioderna hos Piobot med de angivna R-, G- och B-värdena.  
Du kan ställa in vänster öga, höger öga eller båda.

<BlockImage module="roboids/Pio" id="change_by_rgb" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Öga som ska styras | vänster(left), höger(right), båda(both) | - |
| r | Inmatning (fält) | Ändring av rött | Heltal -255 till 255 | 0 |
| g | Inmatning (fält) | Ändring av grönt | Heltal -255 till 255 | 0 |
| b | Inmatning (fält) | Ändring av blått | Heltal -255 till 255 | 0 |

### Python
```python
pio = Pio(0)

pio.change_eye_color('both', 10, 0, 0)
```

## Ställa in ögonmönstret {#set_eye_pattern}

Ställer in ögonens mönster och anger vilken färg varje öga har när mönstret startar.

<BlockImage module="roboids/Pio" id="set_eye_pattern" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| pattern | Rullgardinsalternativ | Slags mönster | av(reset), blinka(blink), dimning(dimming), regnbåge(rainbow) | - |
| left | Rullgardinsalternativ | Vänster ögas färg | standard(black), röd(red), gul(yellow), grön(green), cyan(cyan), blå(blue), magenta(magenta), vit(white) | white |
| right | Rullgardinsalternativ | Höger ögas färg | (samma som left) | white |

### Python
```python
pio = Pio(0)

pio.set_eye_pattern('dimming', 'green', 'red')
```

## Släcka ögonen {#turn_off}

Tar bort ögonens färg.

<BlockImage module="roboids/Pio" id="turn_off" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Öga som ska styras | vänster(left), höger(right), båda(both) | both |

### Python
```python
pio = Pio(0)

pio.turn_off('both')
```

## Ställa in summerljudet {#sound_buzz}

Ställer in summertonen hos Piobot till den angivna frekvensen.  
Frekvenser som kan ljuda går från 27,5 Hz till 6553,5 Hz.  
Om du anger ett värde utanför det här intervallet hörs ingen summerton.

<BlockImage module="roboids/Pio" id="sound_buzz" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| hz | Inmatning (block) | Frekvens (Hz) | Reellt tal 27.5 till 6553.5 | - |

### Python
```python
pio = Pio(0)

pio.sound_buzz(440)
```

## Spela en ton {#sound_note}

Piobot spelar den angivna tonen.

<BlockImage module="roboids/Pio" id="sound_note" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| note | Rullgardinsalternativ | Ton | Do(C), Do#/Re♭(C#), Re(D), Re#/Mi♭(D#), Mi(E), Fa(F), Fa#/Sol♭(F#), Sol(G), Sol#/La♭(G#), La(A), La#/Si♭(A#), Si(B) | - |
| octave | Rullgardinsalternativ | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
pio = Pio(0)

pio.sound_note('D', 5)
```

## Spela ett ljudklipp {#sound_clip}

Piobot spelar upp ett visst ljudklipp.  
Om vänta är ikryssat väntar körningen tills uppspelningen är klar.

<BlockImage module="roboids/Pio" id="sound_clip" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| clip | Rullgardinsalternativ | Namn på ljudklipp | `'mute'`, `'beep'`, `'beep2'`, `'beep3'`, `'siren'`, `'engine'`, `'robot'`, `'connect'` med flera | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_clip('siren', wait=True)
```

## Spela upp en melodi {#sound_melody}

Piobot spelar upp en viss melodi.  
Om vänta är ikryssat väntar körningen tills uppspelningen är klar.

<BlockImage module="roboids/Pio" id="sound_melody" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| melody | Rullgardinsalternativ | Melodins namn | `'mute'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` med flera | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_melody('happy', wait=True)
```

## Stänga av ljudet {#sound_off}

Stänger av ljudet hos Piobot.

<BlockImage module="roboids/Pio" id="sound_off" />

### Parametrar

(ingen)

### Python
```python
pio = Pio(0)

pio.sound_off()
```

## Spelas ljud? {#sound_playing}

Returnerar true om ett ljud spelas och false om inget spelas.

<BlockImage module="roboids/Pio" id="sound_playing" />

### Parametrar

(ingen)

### Python
```python
pio = Pio(0)

pio.sound_playing()
```

## Hjulhastighetens värde {#wheel_speed}

Hastigheten hos ett visst hjul

<BlockImage module="roboids/Pio" id="wheel_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Hjul som ska läsas av | vänster(left), höger(right) | - |

### Python
```python
pio = Pio(0)

pio.wheel_speed('left')
```

## Signalstyrkans värde {#signal_strength}

Signalstyrka

<BlockImage module="roboids/Pio" id="signal_strength" />

### Parametrar

(ingen)

### Python
```python
pio = Pio(0)

pio.signal_strength()
```

## Batterispänning {#battery}

Batterispänning

<BlockImage module="roboids/Pio" id="battery" />

### Parametrar

(ingen)

### Python
```python
pio = Pio(0)

pio.battery()
```

## Knappsatsens knappar {#keypad}

Känner av vilken knapp på knappsatsen som användaren tryckte på senast.

<BlockImage module="roboids/Pio" id="keypad" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| button | Rullgardinsalternativ | Knapp att känna av | kör(play), gå framåt(forward), gå bakåt(backward), gå åt vänster(left), gå åt höger(right), utför(action), upprepa(repeat), rensa(clear) | - |

### Python
```python
pio = Pio(0)

pio.keypad('forward')
```
