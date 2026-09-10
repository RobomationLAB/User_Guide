---
title: Cheese Stick
---

# Cheese Stick

## Deklaracja instancji {#instance}

Po dodaniu bloku Cheese Stick(CheeseStick) do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
cheesestick = CheeseStick(0)
# Gdy instancji jest więcej
cheesestick_1 = CheeseStick(1)
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Ustaw tryb wejścia {#set_input_mode}

Ustawia tryb wejścia wybranego portu.

<BlockImage module="roboids/CheeseStick" id="set_input_mode" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port wejścia | Sa, Sb, Sc, La, Lb, Lc | - |
| option | Opcja listy rozwijanej | Tryb wejścia | makey(makey), przycisk(button), cyfrowe pullup(digital_pullup), cyfrowe pulldown(digital_pulldown), analogowe(analog), napięcie analogowe(analog_voltage) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_mode('Sa', 'button')
```

## Ustaw zakres wejścia {#set_input_range}

Przelicza wartość wejściową wybranego portu na podany zakres od minimum do maksimum.  
Zakres wartości wejściowej to od 0 do 255.  
Zakres wartości, na które można przeliczyć, to od -100 do 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port wejścia | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Wejście (pole) | Wartość minimalna źródła | Liczba całkowita od 0 do 255 | - |
| src_max | Wejście (pole) | Wartość maksymalna źródła | Liczba całkowita od 0 do 255 | - |
| dst_min | Wejście (pole) | Wartość minimalna po przeliczeniu | Liczba całkowita od -100 do 100 | - |
| dst_max | Wejście (pole) | Wartość maksymalna po przeliczeniu | Liczba całkowita od -100 do 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range('Sa', 0, 255, 0, 100)
```

## Ustaw zakres wejścia z wartością środkową {#set_input_range_median}

Przelicza wartość wejściową wybranego portu na podany zakres: minimum, wartość środkowa, maksimum.  
Zakres wartości wejściowej to od 0 do 255.  
Zakres wartości, na które można przeliczyć, to od -100 do 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range_median" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port wejścia | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Wejście (pole) | Wartość minimalna źródła | Liczba całkowita od 0 do 255 | - |
| src_median | Wejście (pole) | Wartość środkowa źródła | Liczba całkowita od 0 do 255 | - |
| src_max | Wejście (pole) | Wartość maksymalna źródła | Liczba całkowita od 0 do 255 | - |
| dst_min | Wejście (pole) | Wartość minimalna po przeliczeniu | Liczba całkowita od -100 do 100 | - |
| dst_median | Wejście (pole) | Wartość środkowa po przeliczeniu | Liczba całkowita od -100 do 100 | - |
| dst_max | Wejście (pole) | Wartość maksymalna po przeliczeniu | Liczba całkowita od -100 do 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Wartość wejścia {#get_input}

Wartość wejściowa wybranego portu

<BlockImage module="roboids/CheeseStick" id="get_input" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port wejścia | Sa, Sb, Sc, La, Lb, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_input('Sa')
```

## Ustaw tryb wejścia impulsowego {#set_pulse_input_mode}

Ustawia tryb wejścia impulsowego wybranego portu.

<BlockImage module="roboids/CheeseStick" id="set_pulse_input_mode" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port wejścia impulsowego | Sc, Lc | - |
| option | Opcja listy rozwijanej | Tryb podciągania | impuls (default), impuls (pull-up), impuls (pull-down) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pulse_input_mode('Sc', 'pull-up')
```

## Wartość wejścia impulsowego {#get_pulse_input}

Czy na wybranym porcie wykryto impuls

<BlockImage module="roboids/CheeseStick" id="get_pulse_input" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port wejścia impulsowego | Sc, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_pulse_input('Sc')
```

## Ustaw wyjście cyfrowe {#set_digital_output}

Ustawia wartość wyjścia cyfrowego wybranego portu.  
Do wyboru są wartości 0 albo 1.

<BlockImage module="roboids/CheeseStick" id="set_digital_output" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port wyjścia cyfrowego | Sa, Sb, Sc, La, Lb, Lc, Mab, Mcd | - |
| value | Opcja listy rozwijanej | Wartość wyjścia | 0 albo 1 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_digital_output('Sa', 1)
```

## Ustaw wyjście PWM {#set_pwm_output}

Ustawia wartość wyjścia PWM wybranego portu.  
Zakres wartości do wyboru to od 0 do 100.

<BlockImage module="roboids/CheeseStick" id="set_pwm_output" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port wyjścia PWM | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Wejście (pole) | Wartość PWM | Liczba całkowita od 0 do 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pwm_output('Sa', 50)
```

## Zmień wyjście PWM {#change_pwm_output}

Zmienia wartość wyjścia PWM wybranego portu.  
Zakres wartości do wyboru to od -100 do 100.

<BlockImage module="roboids/CheeseStick" id="change_pwm_output" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port wyjścia PWM | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Wejście (pole) | Zmiana wartości PWM | Liczba całkowita od -100 do 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.change_pwm_output('Sa', 10)
```

## Ustaw częstotliwość brzęczyka {#sound_buzz}

Ustawia dźwięk brzęczyka modułu Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_buzz" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| hz | Wejście (blok) | Częstotliwość (Hz) | Liczba rzeczywista od 0 do 6553,5 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_buzz(440)
```

## Zagraj nutę {#sound_note}

Cheese Stick gra podaną nutę.

<BlockImage module="roboids/CheeseStick" id="sound_note" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| note | Opcja listy rozwijanej | Nuta | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Opcja listy rozwijanej | Oktawa | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_note('D', 5)
```

## Odtwórz klip dźwiękowy {#sound_clip}

Cheese Stick odtwarza wybrany klip dźwiękowy.

<BlockImage module="roboids/CheeseStick" id="sound_clip" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| clip | Opcja listy rozwijanej | Nazwa klipu dźwiękowego | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'happy'`, `'angry'`, `'sad'` i inne | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_clip('siren', wait=True)
```

## Wyłącz dźwięk {#sound_off}

Wyłącza dźwięk modułu Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_off" />

### Parametry

(brak)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_off()
```

## Przyspieszenie {#acceleration}

Wartość przyspieszenia ziemskiego wzdłuż wybranej osi

<BlockImage module="roboids/CheeseStick" id="acceleration" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Mierzona oś | x, y, z | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x')
```

## Temperatura {#temperature}

Wartość czujnika temperatury

<BlockImage module="roboids/CheeseStick" id="temperature" />

### Parametry

(brak)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.temperature()
```

## Siła sygnału {#signal_strength}

Siła sygnału

<BlockImage module="roboids/CheeseStick" id="signal_strength" />

### Parametry

(brak)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.signal_strength()
```

## Napięcie akumulatora {#battery}

Napięcie akumulatora

<BlockImage module="roboids/CheeseStick" id="battery" />

### Parametry

(brak)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.battery()
```

## Zmiana stanu {#state_change}

Czy stan robota się zmienił

<BlockImage module="roboids/CheeseStick" id="state_change" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Rodzaj stanu | Od 0 do 7 (patrz tabela poniżej) | - |

| unit | Warunek |
|------|------|
| 0 | `acceleration('x') > 960` |
| 1 | `acceleration('x') < -960` |
| 2 | `acceleration('y') > 960` |
| 3 | `acceleration('y') < -960` |
| 4 | `acceleration('z') > 960` |
| 5 | `acceleration('z') < -960` |
| 6 | `tap()` (zdarzenie stuknięcia) |
| 7 | `fall()` (zdarzenie upadku) |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x') > 960
cheesestick.tap()    # przypadek 6
cheesestick.fall()   # przypadek 7
```
