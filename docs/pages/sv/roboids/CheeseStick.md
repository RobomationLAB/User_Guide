---
title: Cheese Stick
---

# Cheese Stick

## Instansdeklaration {#instance}

När du lägger till ett Cheese Stick(CheeseStick)-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
cheesestick = CheeseStick(0)
# När det finns flera instanser
cheesestick_1 = CheeseStick(1)
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Ställa in ingångsläget {#set_input_mode}

Ställer in ingångsläget för den valda porten.

<BlockImage module="roboids/CheeseStick" id="set_input_mode" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Ingångsport | Sa, Sb, Sc, La, Lb, Lc | - |
| option | Rullgardinsalternativ | Ingångsläge | makey(makey), knapp(button), digital pull-up(digital_pullup), digital pull-down(digital_pulldown), analog(analog), analog spänning(analog_voltage) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_mode('Sa', 'button')
```

## Ställa in ingångsintervallet {#set_input_range}

Omvandlar den valda portens ingångsvärde till det angivna intervallet från minsta till största värde.  
Ingångsvärdet går från 0 till 255.  
Värdena du kan omvandla till går från -100 till 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Ingångsport | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Inmatning (fält) | Källans minsta värde | Heltal 0 till 255 | - |
| src_max | Inmatning (fält) | Källans största värde | Heltal 0 till 255 | - |
| dst_min | Inmatning (fält) | Minsta värde efter omvandling | Heltal -100 till 100 | - |
| dst_max | Inmatning (fält) | Största värde efter omvandling | Heltal -100 till 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range('Sa', 0, 255, 0, 100)
```

## Ställa in ingångsintervallet med ett mittvärde {#set_input_range_median}

Omvandlar den valda portens ingångsvärde till det angivna intervallet från minsta via mittvärdet till största värde.  
Ingångsvärdet går från 0 till 255.  
Värdena du kan omvandla till går från -100 till 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range_median" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Ingångsport | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Inmatning (fält) | Källans minsta värde | Heltal 0 till 255 | - |
| src_median | Inmatning (fält) | Källans mittvärde | Heltal 0 till 255 | - |
| src_max | Inmatning (fält) | Källans största värde | Heltal 0 till 255 | - |
| dst_min | Inmatning (fält) | Minsta värde efter omvandling | Heltal -100 till 100 | - |
| dst_median | Inmatning (fält) | Mittvärde efter omvandling | Heltal -100 till 100 | - |
| dst_max | Inmatning (fält) | Största värde efter omvandling | Heltal -100 till 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Ingångsvärde {#get_input}

Ingångsvärdet för den valda porten

<BlockImage module="roboids/CheeseStick" id="get_input" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Ingångsport | Sa, Sb, Sc, La, Lb, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_input('Sa')
```

## Ställa in pulsingångsläget {#set_pulse_input_mode}

Ställer in pulsingångsläget för den valda porten.

<BlockImage module="roboids/CheeseStick" id="set_pulse_input_mode" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Pulsingångsport | Sc, Lc | - |
| option | Rullgardinsalternativ | Pull-läge | puls (default), puls (pull-up), puls (pull-down) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pulse_input_mode('Sc', 'pull-up')
```

## Pulsingångens värde {#get_pulse_input}

Om en pulsingång har registrerats på den valda porten

<BlockImage module="roboids/CheeseStick" id="get_pulse_input" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Pulsingångsport | Sc, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_pulse_input('Sc')
```

## Ställa in den digitala utgången {#set_digital_output}

Ställer in det digitala utgångsvärdet för den angivna porten.  
Du kan välja värdet 0 eller 1.

<BlockImage module="roboids/CheeseStick" id="set_digital_output" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Digital utgångsport | Sa, Sb, Sc, La, Lb, Lc, Mab, Mcd | - |
| value | Rullgardinsalternativ | Utgångsvärde | 0 eller 1 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_digital_output('Sa', 1)
```

## Ställa in PWM-utgången {#set_pwm_output}

Ställer in PWM-utgångsvärdet för den angivna porten.  
Värdena du kan välja går från 0 till 100.

<BlockImage module="roboids/CheeseStick" id="set_pwm_output" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | PWM-utgångsport | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Inmatning (fält) | PWM-värde | Heltal 0 till 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pwm_output('Sa', 50)
```

## Ändra PWM-utgången {#change_pwm_output}

Ändrar PWM-utgångsvärdet för den angivna porten.  
Värdena du kan välja går från -100 till 100.

<BlockImage module="roboids/CheeseStick" id="change_pwm_output" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | PWM-utgångsport | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Inmatning (fält) | PWM-ändring | Heltal -100 till 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.change_pwm_output('Sa', 10)
```

## Ställa in summerljudet {#sound_buzz}

Ställer in summertonen hos Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_buzz" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| hz | Inmatning (block) | Frekvens (Hz) | Reellt tal 0 till 6553.5 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_buzz(440)
```

## Spela en ton {#sound_note}

Cheese Stick spelar den angivna tonen.

<BlockImage module="roboids/CheeseStick" id="sound_note" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| note | Rullgardinsalternativ | Ton | C, C#, D, D#, E, F, F#, G, G#, A, A#, B | - |
| octave | Rullgardinsalternativ | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_note('D', 5)
```

## Spela ett ljudklipp {#sound_clip}

Cheese Stick spelar upp ett visst ljudklipp.

<BlockImage module="roboids/CheeseStick" id="sound_clip" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| clip | Rullgardinsalternativ | Namn på ljudklipp | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'happy'`, `'angry'`, `'sad'` med flera | - |
| wait | Kryssruta | Om körningen ska vänta tills det är klart | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_clip('siren', wait=True)
```

## Stänga av ljudet {#sound_off}

Stänger av ljudet hos Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_off" />

### Parametrar

(ingen)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_off()
```

## Accelerationens värde {#acceleration}

Tyngdaccelerationens värde längs en viss axel

<BlockImage module="roboids/CheeseStick" id="acceleration" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Axel som ska mätas | x, y, z | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x')
```

## Temperatursensorns värde {#temperature}

Temperatursensorns värde

<BlockImage module="roboids/CheeseStick" id="temperature" />

### Parametrar

(ingen)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.temperature()
```

## Signalstyrkans värde {#signal_strength}

Signalstyrka

<BlockImage module="roboids/CheeseStick" id="signal_strength" />

### Parametrar

(ingen)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.signal_strength()
```

## Batterispänning {#battery}

Batterispänning

<BlockImage module="roboids/CheeseStick" id="battery" />

### Parametrar

(ingen)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.battery()
```

## Om tillståndet har ändrats {#state_change}

Om robotens tillstånd har ändrats

<BlockImage module="roboids/CheeseStick" id="state_change" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Slags tillstånd | 0 till 7 (se tabellen nedan) | - |

| unit | Villkor |
|------|------|
| 0 | `acceleration('x') > 960` |
| 1 | `acceleration('x') < -960` |
| 2 | `acceleration('y') > 960` |
| 3 | `acceleration('y') < -960` |
| 4 | `acceleration('z') > 960` |
| 5 | `acceleration('z') < -960` |
| 6 | `tap()` (knackningshändelse) |
| 7 | `fall()` (fallhändelse) |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x') > 960
cheesestick.tap()    # case 6
cheesestick.fall()   # case 7
```
