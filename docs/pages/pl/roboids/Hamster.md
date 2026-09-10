---
title: Hamster
---

# Hamster

## Deklaracja instancji {#instance}

Po dodaniu bloku Hamster do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
hamster = Hamster(0)
# Gdy instancji jest więcej
hamster_1 = Hamster(1)
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Ustaw prędkość koła {#set_wheel_speed}

Określa prędkość koła. Zakres prędkości to od -100 do 100.

<BlockImage module="roboids/Hamster" id="set_wheel_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybór koła | lewe(left), prawe(right), oba(both) | - |
| speed | Wejście (blok) | Prędkość koła | Liczba całkowita od -100 do 100, 0: zatrzymanie | - |

### Python
```python
hamster = Hamster(0)

hamster.set_wheel_speed('both', 50)
```

## Jedź przez czas {#move_time}

Jedzie z obecną prędkością kół przez podany czas.  
Jeśli prędkość kół nie została ustawiona, robot jedzie do przodu z prędkością domyślną.  
Po zaznaczeniu pola czekaj program czeka, aż jazda się zakończy.

<BlockImage module="roboids/Hamster" id="move_time" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Czas jazdy (w sekundach) | Liczba rzeczywista 0 lub większa | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

# wait = TRUE
hamster.move_time(5, wait=True)
# wait = FALSE
hamster.move_time(5, wait=False)
```

## Zmień prędkość koła {#change_speed}

Zmienia prędkość kół robota Hamster.  
Nowa prędkość koła to obecna prędkość powiększona o wpisaną wartość.  
Nowo ustawiona prędkość koła zostaje ograniczona do zakresu od -100 do 100.

<BlockImage module="roboids/Hamster" id="change_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybór koła | lewe(left), prawe(right), oba(both) | - |
| speed | Wejście (blok) | Zmiana prędkości | Liczba całkowita od -200 do 200 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_wheel_speed('both', 10)
```

## Zatrzymaj {#stop}

Zatrzymuje jazdę robota Hamster.  
Prędkość obu kół robota Hamster zostaje wyzerowana.

<BlockImage module="roboids/Hamster" id="stop" />

### Parametry

(brak)

### Python
```python
hamster = Hamster(0)

hamster.stop()
```

## Przesuń o jedno pole do przodu na planszy {#grid_move}

Przejeżdża po planszy o jedno wyznaczone pole.

<BlockImage module="roboids/Hamster" id="grid_move" />

### Parametry

(brak)

### Python
```python
hamster = Hamster(0)

hamster.grid_move()
```

## Skręć na planszy {#grid_turn}

Obraca się na planszy o 90 stopni w podanym kierunku.

<BlockImage module="roboids/Hamster" id="grid_turn" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| direction | Opcja listy rozwijanej | Kierunek obrotu | lewa(left), prawa(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.grid_turn('left')
```

## Śledź linię czujnikiem {#trace_mode}

Hamster jedzie wzdłuż linii w wybranym kolorze, korzystając z czujnika podłoża.

<BlockImage module="roboids/Hamster" id="trace_mode" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| floor | Opcja listy rozwijanej | Czujnik podłoża, którym jedzie wzdłuż linii | lewy(left), prawy(right), środkowy(center) | - |
| line | Opcja listy rozwijanej | Kolor linii | czarna(black), biała(white) | black |

### Python
```python
hamster = Hamster(0)

hamster.trace_line('left', 'black')
```

## Przejazd przez skrzyżowanie i zatrzymanie na następnym {#trace_until_grid}

Hamster skręca na skrzyżowaniu w podanym kierunku, a potem jedzie aż do następnego skrzyżowania.  
Po zaznaczeniu pola czekaj program czeka, aż jazda się zakończy.  

<BlockImage module="roboids/Hamster" id="trace_until_grid" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| direction | Opcja listy rozwijanej | Kierunek jazdy na skrzyżowaniu | skręć w lewo(left), skręć w prawo(right), jedź prosto(forward), zawróć(uturn) | - |
| line | Opcja listy rozwijanej | Kolor linii | czarna(black), biała(white) | black |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

hamster.trace_intersection('left', 'black', wait=True)
```

## Ustaw prędkość śledzenia linii {#set_trace_speed}

Ustawia prędkość jazdy wzdłuż linii. Zakres prędkości to od 1 do 10.

<BlockImage module="roboids/Hamster" id="set_trace_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Prędkość śledzenia linii | Liczba całkowita od 1 do 10 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_trace_speed(5)
```

## Zatrzymaj śledzenie linii {#stop_trace}

Kończy jazdę robota Hamster wzdłuż linii.

<BlockImage module="roboids/Hamster" id="stop_trace" />

### Parametry

(brak)

### Python
```python
hamster = Hamster(0)

hamster.stop_trace()
```

## Ustaw kolor diody LED {#set_led_color}

Ustawia kolor diody LED robota Hamster.  
Kolor wybrany z palety jest zamieniany na **nazwę koloru** (tekst po angielsku) i w takiej postaci trafia do kodu. (W kodzie pojawia się nazwa koloru, a nie liczbowe wartości R, G, B.)

<BlockImage module="roboids/Hamster" id="set_led_color" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybór diody LED | lewa(left), prawa(right), obie(both) | - |
| color | Kolor | Wybór z palety kolorów → zamiana na nazwę koloru (po angielsku) | Nazwy kolorów: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster = Hamster(0)

hamster.set_led_color('both', 'red')
```

## Wyłącz diodę LED {#turn_off}

Gasi kolor diody LED.

<BlockImage module="roboids/Hamster" id="turn_off" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybór diody LED | lewa(left), prawa(right), obie(both) | both |

### Python
```python
hamster = Hamster(0)

hamster.turn_off('both')
```

## Ustaw częstotliwość brzęczyka {#sound_buzz}

Ustawia dźwięk brzęczyka robota Hamster na podaną częstotliwość.  
Zakres częstotliwości, które robot potrafi wydać, to od 1,0 Hz do 6553,5 Hz.  
Po wpisaniu wartości spoza tego zakresu brzęczyk nie wydaje dźwięku.

<BlockImage module="roboids/Hamster" id="sound_buzz" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| hz | Wejście (blok) | Częstotliwość (Hz) | Liczba rzeczywista od 0 do 6553,5 | - |

### Python
```python
hamster = Hamster(0)

hamster.sound_buzz(440)
```

## Zagraj nutę {#sound_note}

Hamster gra podaną nutę.

<BlockImage module="roboids/Hamster" id="sound_note" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| note | Opcja listy rozwijanej | Nuta | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Opcja listy rozwijanej | Oktawa | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster = Hamster(0)

hamster.sound_note('D', 5)
```

## Wyłącz dźwięk {#sound_off}

Wyłącza dźwięk robota Hamster.

<BlockImage module="roboids/Hamster" id="sound_off" />

### Parametry

(brak)

### Python
```python
hamster = Hamster(0)

hamster.sound_off()
```

## Prędkość koła {#wheel_speed}

Prędkość wybranego koła

<BlockImage module="roboids/Hamster" id="wheel_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Odczytywane koło | lewa(left), prawa(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.wheel_speed('left')
```

## Czujnik zbliżeniowy {#proximity}

Wartość wybranego czujnika zbliżeniowego

<BlockImage module="roboids/Hamster" id="proximity" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Położenie odczytywanego czujnika | lewa(left), prawa(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.proximity('left')
```

## Czujnik podłoża {#floor}

Wartość wybranego czujnika podłoża

<BlockImage module="roboids/Hamster" id="floor" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Położenie odczytywanego czujnika | lewa(left), prawa(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.floor('left')
```

## Przyspieszenie ziemskie {#acceleration}

Wartość przyspieszenia ziemskiego wzdłuż wybranej osi

<BlockImage module="roboids/Hamster" id="acceleration" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Mierzona oś | x, y, z | - |

### Python
```python
hamster = Hamster(0)

hamster.acceleration('x')
```

## Jasność {#light}

Wartość czujnika jasności

<BlockImage module="roboids/Hamster" id="light" />

### Parametry

(brak)

### Python
```python
hamster = Hamster(0)

hamster.light()
```

## Temperatura {#temperature}

Wartość czujnika temperatury

<BlockImage module="roboids/Hamster" id="temperature" />

### Parametry

(brak)

### Python
```python
hamster = Hamster(0)

hamster.temperature()
```

## Siła sygnału {#signal_strength}

Siła sygnału

<BlockImage module="roboids/Hamster" id="signal_strength" />

### Parametry

(brak)

### Python
```python
hamster = Hamster(0)

hamster.signal_strength()
```

## Napięcie akumulatora {#battery}

Napięcie akumulatora

<BlockImage module="roboids/Hamster" id="battery" />

### Parametry

(brak)

### Python
```python
hamster = Hamster(0)

hamster.battery()
```

## Zmiana stanu {#state_change}

Czy stan robota się zmienił

<BlockImage module="roboids/Hamster" id="state_change" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Rodzaj stanu | Od 0 do 6 (patrz tabela poniżej) | - |

| unit | Warunek |
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

## Ustaw tryb portu wejścia/wyjścia {#io_mode}

Ustawia tryb wejścia portu IO.

<BlockImage module="roboids/Hamster" id="io_mode" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port wejścia/wyjścia | a, b, oba(both) | - |
| option | Opcja listy rozwijanej | Tryb wejścia/wyjścia | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster = Hamster(0)

hamster.io_mode('both', 'analog_input')
```

## Ustaw wartość wyjścia portu {#set_output}

Ustawia wartość wyjścia wybranego portu IO.

<BlockImage module="roboids/Hamster" id="set_output" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port wejścia/wyjścia | a, b, oba(both) | - |
| data | Wejście (blok) | Wartość wyjścia | Liczba całkowita od 0 do 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_output('a', 90)
```

## Zmień wartość wyjścia portu {#change_output}

Zmienia wartość wyjścia wybranego portu IO.

<BlockImage module="roboids/Hamster" id="change_output" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port wejścia/wyjścia | a, b, oba(both) | - |
| data | Wejście (blok) | Zmiana wartości wyjścia | Liczba całkowita | - |

### Python
```python
hamster = Hamster(0)

hamster.change_output('a', 10)
```

## Otwórz / zamknij chwytak {#gripper}

Otwiera albo zamyka chwytak robota Hamster.  
W zależności od wartości unit wywoływana jest jedna z dwóch metod.

<BlockImage module="roboids/Hamster" id="gripper" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Działanie | otwórz(open), zamknij(close) | - |

### Python
```python
hamster = Hamster(0)

# unit = "open"
hamster.open_gripper()
# unit = "close"
hamster.close_gripper()
```

## Ustaw kąt wyrzutni {#shooter}

Steruje wyrzutnią, ustawiając jej kąt. Zakres kąta to od 0 do 180.

<BlockImage module="roboids/Hamster" id="shooter" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Kąt wyrzutni | Liczba całkowita od 0 do 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.shooter(45)
```

## Wartość wejścia portu {#input}

Zwraca wartość wejścia portu wejścia/wyjścia robota Hamster.

<BlockImage module="roboids/Hamster" id="input" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port wejścia/wyjścia | a, b | - |

### Python
```python
hamster = Hamster(0)

hamster.get_input('a')
```
