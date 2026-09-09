---
title: RaccoonBot
---

# RaccoonBot

## Instansdeklaration {#instance}

När du lägger till ett RaccoonBot-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
raccoon = RaccoonBot(0)
# När det finns flera instanser
raccoon_1 = RaccoonBot(1)
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Slå på / stänga av ledmotorernas styrning {#motor}

Bestämmer om styrningen av varje ledmotor ska släppas eller behållas.  
Om du inte ställer in något startar roboten med motorstyrningen påslagen för alla leder.

<BlockImage module="roboids/Raccoon4" id="motor" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Ledens nummer | alla(-1), 1(1), 2(2), 3(3), 4(4) | -1 |
| on | Kryssruta | Motorstyrning PÅ / AV | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# alla leder, motorstyrningen av
raccoon.motor(-1, False)

# led 1, motorstyrningen på
raccoon.motor(1, True)
```

## Ställa in ledens hastighet {#speed_joint}

Ställer in hastigheten för den valda leden.

<BlockImage module="roboids/Raccoon4" id="speed_joint" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| joint | Rullgardinsalternativ | Ledens nummer | alla(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Inmatning (block) | Ledens hastighet | Heltal -100 till 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_speed_joint(1, 100)
```

## Ändra ledens hastighet {#change_speed_joint}

Ändrar hastigheten för den valda leden.

<BlockImage module="roboids/Raccoon4" id="change_speed_joint" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| joint | Rullgardinsalternativ | Ledens nummer | alla(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Inmatning (block) | Hastighetsändring | Heltal -200 till 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_speed_joint(1, 50)
```

## Ställa in ledernas hastighet på en gång {#speed_joints}

Ställer in hastigheten för alla fyra leder på en gång.

<BlockImage module="roboids/Raccoon4" id="speed_joints" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (array) | Fält med de fyra ledernas hastighet | `[joint1, joint2, joint3, joint4]`, var och en -100~100 | - |

### Python
```python
raccoon = RaccoonBot(0)

# literalt fält [10, 20, 30, 40]
raccoon.set_speed_joints(10, 20, 30, 40)

# fält i en variabel
raccoon.set_speed_joints(*arr)
```

## Ställa in hastigheten för ledvinkelstyrning {#angle_speed}

Ställer in hastigheten som lederna styrs med i vinkelstyrningsläget.

<BlockImage module="roboids/Raccoon4" id="angle_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Högsta hastighet vid vinkelstyrning | Heltal 0 till 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.angle_max_speed(100)
```

## Ställa in ledens vinkel {#angle_joint}

Ställer in vinkeln för den valda leden.

| joint | min | max |
|-------|-----|-----|
| 1 | -120 | 120 |
| 2 | -90 | 30 |
| 3 | -150 | 0 |
| 4 | -105 | 105 |

<BlockImage module="roboids/Raccoon4" id="angle_joint" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| joint | Rullgardinsalternativ | Ledens nummer | alla(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Inmatning (block) | Ledens vinkel (grader) | Se tabellen ovan (klipps automatiskt) | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_angle_joint(1, 90, wait=True)
```

## Ändra ledens vinkel {#change_angle_joint}

Ändrar vinkeln för den valda leden.

<BlockImage module="roboids/Raccoon4" id="change_angle_joint" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| joint | Rullgardinsalternativ | Ledens nummer | alla(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Inmatning (block) | Vinkeländring (grader) | Se tabellen ovan (klipps automatiskt) | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_angle_joint(1, 10, wait=True)
```

## Ställa in ledvinklarna på en gång {#angle_joints}

Ställer in vinkeln för alla fyra leder på en gång.

<BlockImage module="roboids/Raccoon4" id="angle_joints" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (array) | Fält med de fyra ledernas vinkel, eller ett lägesnamn | Fältet `[j1, j2, j3, j4]` | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# uttryckligt fält
raccoon.set_angle_joints(0, 0, 0, 0, wait=True)
```

## Initiera ledernas läge {#default_angle_joints}

Ställer in de fyra ledernas vinklar till ett fördefinierat läge (`'zero'`, `'park'`, `'home'`).

<BlockImage module="roboids/Raccoon4" id="default_angle_joints" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Rullgardinsmeny | Lägets namn | `'zero'` / `'park'` / `'home'` | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

Fördefinierade lägen:
- `'zero'` → `[0, 0, 0, 0]`
- `'park'` → `[0, 25, -145, -60]`
- `'home'` → `[0, -10, -140, 60]`

### Python
```python
raccoon = RaccoonBot(0)

# fördefinierat läge
raccoon.set_angle_joints('home', wait=True)
```

## Spara ledvinklarna {#save_encoder}

Sparar de nuvarande kodarvärdena i en valfri variabel.

<BlockImage module="roboids/Raccoon4" id="save_encoder" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| encoder | Variabel | Namnet på variabeln att spara i | Variabel | - |
| data | Inmatning (array) | Startfältet som ska sparas | Fält med fyra element eller ett tomt fält | - |

### Python
```python
raccoon = RaccoonBot(0)
encoder = None

encoder = raccoon.save_encoder([3, -6, -73, 60])
```

## Ställa in en koordinat {#set_coordinate}

Flyttar robotarmen genom att du ställer in en viss koordinat.  
Koordinaterna har följande intervall.  
Relativt handleden => x: -20,0 cm ~ 20,0 cm, y: -10,0 cm ~ 20,0 cm, z: -2,0 mm ~ 28,0 cm  
Relativt gripdonet => intervallet kan variera beroende på vilken enhet som är ansluten.  
Gripdonets riktning är låst antingen vågrätt eller lodrätt mot underlaget.  
Om du anger en koordinat som roboten inte kan nå hoppas kommandot över.

<BlockImage module="roboids/Raccoon4" id="set_coordinate" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| origin | Rullgardinsalternativ | Utgångspunkt | handled(wrist), ändeffektor(end_effector) | - |
| pos | Rullgardinsalternativ | Axel | x, y, z | - |
| data | Inmatning (block) | Koordinatvärde | x: -20 till 20 cm, y: -10 till 20 cm, z: -2 till 28 cm | - |
| unit | Rullgardinsalternativ | Enhet | cm, mm, tum(inch) | cm |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# ställ in x-koordinaten till 10 cm
raccoon.set_coordinate('wrist', 'x', 10, 'cm', wait=True)

# z-koordinaten relativt end_effector
raccoon.set_coordinate('end_effector', 'z', 15, 'cm', wait=True)
```

## Ändra en koordinat {#change_coordinate}

Flyttar robotarmen genom att du ändrar en viss koordinat utifrån det nuvarande läget.  
Koordinaterna har följande intervall.  
Relativt handleden => x: -20,0 cm ~ 20,0 cm, y: -10,0 cm ~ 20,0 cm, z: -2,0 mm ~ 28,0 cm  
Relativt gripdonet => intervallet kan variera beroende på vilken enhet som är ansluten.  
Gripdonets riktning är låst antingen vågrätt eller lodrätt mot underlaget.  
Om du anger en koordinat som roboten inte kan nå hoppas kommandot över.

<BlockImage module="roboids/Raccoon4" id="change_coordinate" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| origin | Rullgardinsalternativ | Utgångspunkt | handled(wrist), ändeffektor(end_effector) | - |
| pos | Rullgardinsalternativ | Axel | x, y, z | - |
| data | Inmatning (block) | Koordinatändring | Reellt tal | - |
| unit | Rullgardinsalternativ | Enhet | cm, mm, tum(inch) | cm |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_coordinate('wrist', 'y', 5, 'cm', wait=True)
```

## Flytta till xyz-koordinater {#set_coordinates}

Ställer in x-, y- och z-koordinaterna till angivna värden på en gång.  

<BlockImage module="roboids/Raccoon4" id="set_coordinates" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| origin | Rullgardinsalternativ | Utgångspunkt | handled(wrist), ändeffektor(end_effector) | - |
| x | Inmatning (block) | x-koordinat | Reellt tal | - |
| y | Inmatning (block) | y-koordinat | Reellt tal | - |
| z | Inmatning (block) | z-koordinat | Reellt tal | - |
| unit | Rullgardinsalternativ | Enhet | cm, mm, tum(inch) | cm |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_coordinates('wrist', 0, 15, 20, 'cm', wait=True)
```

## Låsa gripdonet (ändeffektorn) {#lock}

Ställer in i vilken riktning gripdonet ska låsas. När alternativet är satt till vågrätt eller lodrätt går det inte längre att styra hastighet eller vinkel för led 4.

<BlockImage module="roboids/Raccoon4" id="lock" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| mode | Rullgardinsalternativ | Låsriktning | ingen(none), vågrätt(horizontal), lodrätt(vertical) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.lock('horizontal')
```

## Plocka upp / placera med gripdonet {#end_effector}

Griper eller släpper ett föremål med gripdonet (ändeffektorn).  
Beroende på värdet i rullgardinsmenyn unit anropas en av de två metoderna.

<BlockImage module="roboids/Raccoon4" id="end_effector" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Åtgärd | plocka (stäng)(pick), placera (öppna)(place) | - |

### Python
```python
raccoon = RaccoonBot(0)

# unit = "pick"
raccoon.pick()
# unit = "place"
raccoon.place()
```

## Gripdonets enhet {#end_effector_device}

Numret på det gripdon som är anslutet just nu  
(1, 3, 4: gripklo, 2: vakuumgripdon)

<BlockImage module="roboids/Raccoon4" id="end_effector_device" />

### Parametrar

(ingen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_device()
```

## Gripdonets status {#end_effector_status}

Om gripdonet håller ett föremål  
(0: släppt, 1: gripet)

<BlockImage module="roboids/Raccoon4" id="end_effector_status" />

### Parametrar

(ingen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_status()
```

## Spela en ton {#sound_note}

RaccoonBot spelar den angivna tonen.

<BlockImage module="roboids/Raccoon4" id="sound_note" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| note | Rullgardinsalternativ | Ton | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Rullgardinsalternativ | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_note('D', 5)
```

## Spela ett ljudklipp {#sound_clip}

RaccoonBot spelar upp ett visst ljudklipp.

<BlockImage module="roboids/Raccoon4" id="sound_clip" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| clip | Rullgardinsalternativ | Namn på ljudklipp | `'mute'`, `'beep'`, `'siren'`, `'robot'`, `'connect'`, `'wake_up'`, `'start'`, `'bye'` med flera | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_clip('siren', wait=True)
```

## Stänga av ljudet {#sound_off}

Stänger av ljudet hos RaccoonBot.

<BlockImage module="roboids/Raccoon4" id="sound_off" />

### Parametrar

(ingen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_off()
```

## Kodarens värde {#encoder}

Kodarens värde för den valda leden

<BlockImage module="roboids/Raccoon4" id="encoder" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| joint | Rullgardinsalternativ | Ledens nummer (eller alla leder) | 1, 2, 3, 4, alla(-1) | -1 |

### Python
```python
raccoon = RaccoonBot(0)

# joint = 1
raccoon.encoder(1)

# alla leder
raccoon.encoder(-1)
```

## Koordinaten för det valda elementet {#coordinate}

Returnerar utgångspunktens nuvarande xyz-koordinater.  
Om du utelämnar `pos` returneras hela fältet `[x, y, z]`, annars bara värdet för den axeln.

<BlockImage module="roboids/Raccoon4" id="coordinate" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| origin | Rullgardinsalternativ | Utgångspunkt | handled(wrist), ändeffektor(end_effector) | wrist |
| pos | Rullgardinsalternativ | Axel (eller alla) | x, y, z, xyz (utelämnad → hela fältet returneras) | None (alla) |

### Python
```python
raccoon = RaccoonBot(0)

# en viss axel
raccoon.get_coordinates('wrist', 'x')

# alla (fält med tre element)
raccoon.get_coordinates('wrist')
```

## Signalstyrkans värde {#signal_strength}

Signalstyrka

<BlockImage module="roboids/Raccoon4" id="signal_strength" />

### Parametrar

(ingen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.signal_strength()
```

## Batterispänning {#battery}

Batterispänning

<BlockImage module="roboids/Raccoon4" id="battery" />

### Parametrar

(ingen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.battery()
```

## Är knappen nedtryckt? {#button}

Om den valda knappen är nedtryckt eller om en klickhändelse har inträffat

<BlockImage module="roboids/Raccoon4" id="button" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Knappens namn | teach(teach), play(play), power(power), delete(delete), vilken knapp som helst(any) | - |
| event | Rullgardinsalternativ | Slags händelse | nedtryckt(pressed), klickad(click), länge klickad(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.button('teach', 'pressed')
```

## Ställa in transportörens hastighet {#conveyor_speed}

Ställer in hastigheten för transportbandet. Hastigheten går från -100 till 100.

<BlockImage module="roboids/Raccoon4" id="conveyor_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Transportörens hastighet | Heltal -100 till 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_conveyor_speed(100)
```

## Flytta transportören en sträcka {#conveyor_distance}

Flyttar transportören en viss sträcka.

<BlockImage module="roboids/Raccoon4" id="conveyor_distance" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Sträcka att flytta | Reellt tal 0 eller större | - |
| unit | Rullgardinsalternativ | Längdenhet | cm, mm, tum(inch) | cm |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_move(50, 'cm', wait=True)
```

## Ändra transportörens hastighet {#change_conveyor_speed}

Ändrar hastigheten för transportbandet.

<BlockImage module="roboids/Raccoon4" id="change_conveyor_speed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (block) | Hastighetsändring | Heltal -200 till 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_conveyor_speed(10)
```

## Stoppa transportören {#stop_conveyor}

Stoppar transportören.

<BlockImage module="roboids/Raccoon4" id="stop_conveyor" />

### Parametrar

(ingen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.stop_conveyor()
```

## Är transportören igång? {#conveyor_running}

Om transportbandet är igång

<BlockImage module="roboids/Raccoon4" id="conveyor_running" />

### Parametrar

(ingen)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_running()
```

## Är transportörens knapp nedtryckt? {#conveyor_button}

Om transportörens knapp är nedtryckt eller om en klickhändelse har inträffat

<BlockImage module="roboids/Raccoon4" id="conveyor_button" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| event | Rullgardinsalternativ | Slags händelse | nedtryckt(pressed), klickad(click), länge klickad(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_button('pressed')
```
