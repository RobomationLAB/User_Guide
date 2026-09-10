---
title: HamsterS
---

# HamsterS

## Deklaracja instancji {#instance}

Po dodaniu bloku HamsterS do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
hamster_s = HamsterS(0)
# Gdy instancji jest więcej
hamster_s_1 = HamsterS(1)
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Ustaw prędkość koła {#set_wheel_speed}

Określa prędkość koła. Zakres prędkości to od -100 do 100.

<BlockImage module="roboids/HamsterS" id="set_wheel_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybór koła | lewe(left), prawe(right), oba(both) | - |
| speed | Wejście (blok) | Prędkość koła | Liczba całkowita od -100 do 100, 0: zatrzymanie | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_wheel_speed('both', 50)
```

## Jedź na odległość {#move_distance}

Jedzie z obecną prędkością kół na podaną odległość.  
Jeśli prędkość kół nie została ustawiona, robot jedzie do przodu z prędkością domyślną.  
Gdy wartość odległości wynosi 0, robot jedzie dalej z obecną prędkością kół.  
Po zaznaczeniu pola czekaj program czeka, aż jazda się zakończy.

<BlockImage module="roboids/HamsterS" id="move_distance" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Pokonywana odległość | Liczba rzeczywista 0 lub większa | - |
| unit | Opcja listy rozwijanej | Jednostka odległości | cm, mm, cal(inch) | cm |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.move_distance(50, 'cm', wait=True)
```

## Jedź przez czas {#move_time}

Jedzie z obecną prędkością kół przez podany czas.  
Jeśli prędkość kół nie została ustawiona, robot jedzie do przodu z prędkością domyślną.  
Po zaznaczeniu pola czekaj program czeka, aż jazda się zakończy.

<BlockImage module="roboids/HamsterS" id="move_time" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Czas jazdy (w sekundach) | Liczba rzeczywista 0 lub większa | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

# wait = TRUE
hamster_s.move_time(5, wait=True)
# wait = FALSE
hamster_s.move_time(5, wait=False)
```

## Obróć się w miejscu {#turn_degree}

Ustawia kierunek i kąt obrotu w miejscu.  
Po zaznaczeniu pola czekaj program czeka, aż obrót się zakończy.

<BlockImage module="roboids/HamsterS" id="turn_degree" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| direction | Opcja listy rozwijanej | Kierunek obrotu | lewa(left), prawa(right) | - |
| data | Wejście (blok) | Kąt obrotu (w stopniach) | Liczba rzeczywista 0 lub większa | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_degree('left', 90, wait=True)
```

## Zmień prędkość koła {#change_speed}

Zmienia prędkość kół robota HamsterS.  
Nowa prędkość koła to obecna prędkość powiększona o wpisaną wartość.

<BlockImage module="roboids/HamsterS" id="change_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybór koła | lewe(left), prawe(right), oba(both) | - |
| speed | Wejście (blok) | Zmiana prędkości | Liczba całkowita od -200 do 200 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_wheel_speed('both', 10)
```

## Zatrzymaj {#stop}

Zatrzymuje jazdę robota HamsterS.

<BlockImage module="roboids/HamsterS" id="stop" />

### Parametry

(brak)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop()
```

## Czy koło się porusza? {#wheel_moving}

Zwraca true, gdy koło się porusza, i false, gdy stoi.

<BlockImage module="roboids/HamsterS" id="wheel_moving" />

### Parametry

(brak)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_moving()
```

## Jedź o jedno pole do przodu na planszy {#grid_move}

Przejeżdża po planszy o jedno wyznaczone pole.

<BlockImage module="roboids/HamsterS" id="grid_move" />

### Parametry

(brak)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_move()
```

## Obróć się raz na planszy {#grid_turn}

Obraca się na planszy o 90 stopni w podanym kierunku.

<BlockImage module="roboids/HamsterS" id="grid_turn" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| direction | Opcja listy rozwijanej | Kierunek obrotu | lewa(left), prawa(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_turn('left')
```

## Obrót wokół pisaka {#pivot}

Przy pracy z uchwytem na pisak ustawia punkt, wokół którego następuje obrót, oraz kierunek i kąt.  
Po zaznaczeniu pola czekaj program czeka, aż obrót się zakończy.

<BlockImage module="roboids/HamsterS" id="pivot" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| base | Opcja listy rozwijanej | Punkt obrotu | lewy pisak(left_pen), prawy pisak(right_pen), lewe koło(left_wheel), prawe koło(right_wheel) | - |
| direction | Opcja listy rozwijanej | Kierunek obrotu | do przodu(forward), do tyłu(backward) | - |
| degree | Wejście (blok) | Kąt obrotu (w stopniach) | Liczba rzeczywista 0 lub większa | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot('left_pen', 'forward', 90, wait=True)
```

## Okrąg wokół pisaka {#pivot_circle}

Przy rysowaniu okręgu uchwytem na pisak ustawia punkt obrotu, kierunek, promień i kąt.  
Po zaznaczeniu pola czekaj program czeka, aż obrót się zakończy.

<BlockImage module="roboids/HamsterS" id="pivot_circle" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| base | Opcja listy rozwijanej | Punkt obrotu | lewy(left_pen), prawy(right_pen) pisak | - |
| direction | Opcja listy rozwijanej | Kierunek obrotu | w lewo do przodu(left_forward), w lewo do tyłu(left_backward), w prawo do przodu(right_forward), w prawo do tyłu(right_backward) | - |
| degree | Wejście (blok) | Kąt obrotu (w stopniach) | Liczba rzeczywista 0 lub większa | - |
| radius | Wejście (blok) | Promień obrotu | Liczba rzeczywista 0 lub większa | - |
| unit | Opcja listy rozwijanej | Jednostka promienia | cm, mm, cal(inch) | cm |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot_circle('left_pen', 'left_forward', 90, 1, 'cm', wait=True)
```

## Śledź linię czujnikiem {#trace_mode}

HamsterS jedzie wzdłuż linii w wybranym kolorze, korzystając z czujnika podłoża.

<BlockImage module="roboids/HamsterS" id="trace_mode" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| floor | Opcja listy rozwijanej | Czujnik podłoża, którym jedzie wzdłuż linii | lewy(left), prawy(right), środkowy(center) | - |
| line | Opcja listy rozwijanej | Kolor linii | czarna(black), biała(white) | black |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_line('left', 'black')
```

## Przejazd przez skrzyżowanie i zatrzymanie na następnym {#trace_until_grid}

HamsterS skręca na skrzyżowaniu w podanym kierunku, a potem jedzie aż do następnego skrzyżowania.  
Po zaznaczeniu pola czekaj program czeka, aż jazda się zakończy.  

<BlockImage module="roboids/HamsterS" id="trace_until_grid" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| direction | Opcja listy rozwijanej | Kierunek jazdy na skrzyżowaniu | skręć w lewo(left), skręć w prawo(right), jedź prosto(forward), zawróć(uturn) | - |
| line | Opcja listy rozwijanej | Kolor linii | czarna(black), biała(white) | black |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_intersection('left', 'black', wait=True)
```

## Ustaw prędkość śledzenia linii {#set_trace_speed}

Ustawia prędkość jazdy wzdłuż linii. Zakres prędkości to od 1 do 10.

<BlockImage module="roboids/HamsterS" id="set_trace_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Prędkość śledzenia linii | Liczba całkowita od 1 do 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_speed(5)
```

## Ustaw wzmocnienie śledzenia linii {#set_trace_gain}

Ustawia, jak mocno robot koryguje kierunek podczas jazdy wzdłuż linii. Zakres wzmocnienia to od 1 do 10.

<BlockImage module="roboids/HamsterS" id="set_trace_gain" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Wzmocnienie korekty kierunku | Liczba całkowita od 1 do 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_gain(5)
```

## Zatrzymaj śledzenie linii {#stop_trace}

Kończy jazdę robota HamsterS wzdłuż linii.

<BlockImage module="roboids/HamsterS" id="stop_trace" />

### Parametry

(brak)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop_trace()
```

## Ustaw kolor diody LED {#set_led_color}

Ustawia kolor diody LED robota HamsterS.  
Kolor wybrany z palety jest zamieniany na **nazwę koloru** (tekst po angielsku) i w takiej postaci trafia do kodu. (W kodzie pojawia się nazwa koloru, a nie liczbowe wartości R, G, B.)

<BlockImage module="roboids/HamsterS" id="set_led_color" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybór diody LED | lewa(left), prawa(right), obie(both) | - |
| color | Kolor | Wybór z palety kolorów → zamiana na nazwę koloru (po angielsku) | Nazwy kolorów: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', 'red')
```

## Ustaw kolor diody LED blokiem z kategorii Kolor {#set_led_color_with_block}

Ustawia kolor diody LED na podstawie bloku z kategorii Kolor (`[R, G, B]`).

<BlockImage module="roboids/HamsterS" id="set_led_color_with_block" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybór diody LED | lewa(left), prawa(right), obie(both) | - |
| data | Wejście (kolor) | Blok z kategorii Kolor albo tablica `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', *Utils.color_rgb(255, 128, 0))
```

## Zmień kolor diody LED o RGB {#change_by_rgb}

Zmienia kolor diody LED robota HamsterS o podane wartości R, G i B.

<BlockImage module="roboids/HamsterS" id="change_by_rgb" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybór diody LED | lewa(left), prawa(right), obie(both) | - |
| r | Wejście (pole) | Zmiana wartości czerwonej | Liczba całkowita od -255 do 255 | 0 |
| g | Wejście (pole) | Zmiana wartości zielonej | Liczba całkowita od -255 do 255 | 0 |
| b | Wejście (pole) | Zmiana wartości niebieskiej | Liczba całkowita od -255 do 255 | 0 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_led_color('both', 10, 0, 0)
```

## Wyłącz diodę LED {#turn_off}

Gasi kolor diody LED.

<BlockImage module="roboids/HamsterS" id="turn_off" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybór diody LED | lewa(left), prawa(right), obie(both) | both |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_off('both')
```

## Ustaw częstotliwość brzęczyka {#sound_buzz}

Ustawia dźwięk brzęczyka robota HamsterS na podaną częstotliwość.  
Zakres częstotliwości, które robot potrafi wydać, to od 122,1 Hz do 4186,0 Hz.  
Po wpisaniu wartości spoza tego zakresu brzęczyk nie wydaje dźwięku.

<BlockImage module="roboids/HamsterS" id="sound_buzz" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| hz | Wejście (blok) | Częstotliwość (Hz) | Liczba rzeczywista od 122,1 do 4186,0 (poza tym 0) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_buzz(440)
```

## Zagraj nutę {#sound_note}

HamsterS gra podaną nutę.

<BlockImage module="roboids/HamsterS" id="sound_note" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| note | Opcja listy rozwijanej | Nuta | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Opcja listy rozwijanej | Oktawa | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_note('D', 5)
```

## Odtwórz klip dźwiękowy {#sound_clip}

HamsterS odtwarza wybrany klip dźwiękowy.  
Po zaznaczeniu pola czekaj program czeka, aż odtwarzanie się zakończy.

<BlockImage module="roboids/HamsterS" id="sound_clip" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| clip | Opcja listy rozwijanej | Nazwa klipu dźwiękowego | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'happy'`, `'angry'`, `'sad'` i inne | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_clip('siren', wait=True)
```

## Wyłącz dźwięk {#sound_off}

Wyłącza dźwięk robota HamsterS.

<BlockImage module="roboids/HamsterS" id="sound_off" />

### Parametry

(brak)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_off()
```

## Czy dźwięk jest odtwarzany? {#sound_playing}

Zwraca true, gdy dźwięk jest odtwarzany, i false, gdy nie jest.

<BlockImage module="roboids/HamsterS" id="sound_playing" />

### Parametry

(brak)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_playing()
```

## Prędkość koła {#wheel_speed}

Prędkość wybranego koła

<BlockImage module="roboids/HamsterS" id="wheel_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Odczytywane koło | lewa(left), prawa(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_speed('left')
```

## Czujnik zbliżeniowy {#proximity}

Wartość wybranego czujnika zbliżeniowego

<BlockImage module="roboids/HamsterS" id="proximity" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Położenie odczytywanego czujnika | lewa(left), prawa(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.proximity('left')
```

## Czujnik podłoża {#floor}

Wartość wybranego czujnika podłoża

<BlockImage module="roboids/HamsterS" id="floor" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Położenie odczytywanego czujnika | lewa(left), prawa(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.floor('left')
```

## Przyspieszenie ziemskie {#acceleration}

Wartość przyspieszenia ziemskiego wzdłuż wybranej osi

<BlockImage module="roboids/HamsterS" id="acceleration" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Mierzona oś | x, y, z | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.acceleration('x')
```

## Jasność {#light}

Wartość czujnika jasności

<BlockImage module="roboids/HamsterS" id="light" />

### Parametry

(brak)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.light()
```

## Temperatura {#temperature}

Wartość czujnika temperatury

<BlockImage module="roboids/HamsterS" id="temperature" />

### Parametry

(brak)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.temperature()
```

## Siła sygnału {#signal_strength}

Siła sygnału

<BlockImage module="roboids/HamsterS" id="signal_strength" />

### Parametry

(brak)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.signal_strength()
```

## Napięcie akumulatora {#battery}

Napięcie akumulatora

<BlockImage module="roboids/HamsterS" id="battery" />

### Parametry

(brak)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.battery()
```

## Zmiana stanu {#state_change}

Czy stan robota się zmienił

<BlockImage module="roboids/HamsterS" id="state_change" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Rodzaj stanu | Od 0 do 7 (patrz tabela poniżej) | - |

| unit | Znaczenie | Python |
|------|------|--------|
| 0 | pochylenie do przodu | `acceleration('x') > 5000` |
| 1 | pochylenie do tyłu | `acceleration('x') < -5000` |
| 2 | pochylenie w lewo | `acceleration('y') > 5000` |
| 3 | pochylenie w prawo | `acceleration('y') < -5000` |
| 4 | odwrócenie do góry nogami | `acceleration('z') > 0` |
| 5 | brak odwrócenia | `acceleration('z') < -3000` |
| 6 | wykrycie przeszkody lub dłoni | `proximity('left') > 50 or proximity('right') > 50` |
| 7 | stuknięcie | `tap()` |

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

## Ustaw tryb portu wejścia/wyjścia {#io_mode}

Ustawia tryb wejścia portu IO.

<BlockImage module="roboids/HamsterS" id="io_mode" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port wejścia/wyjścia | a, b, oba(both) | - |
| option | Opcja listy rozwijanej | Tryb wejścia/wyjścia | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.io_mode('both', 'analog_input')
```

## Ustaw wartość wyjścia portu {#set_output}

Ustawia wartość wyjścia wybranego portu IO.

<BlockImage module="roboids/HamsterS" id="set_output" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port wejścia/wyjścia | a, b, oba(both) | - |
| data | Wejście (blok) | Wartość wyjścia | Liczba całkowita od 0 do 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_output('a', 90)
```

## Zmień wartość wyjścia portu {#change_output}

Zmienia wartość wyjścia wybranego portu IO.

<BlockImage module="roboids/HamsterS" id="change_output" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port wejścia/wyjścia | a, b, oba(both) | - |
| data | Wejście (blok) | Zmiana wartości wyjścia | Liczba całkowita | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_output('a', 10)
```

## Otwórz / zamknij chwytak {#gripper}

Otwiera albo zamyka chwytak robota HamsterS.  
W zależności od wartości unit wywoływana jest jedna z dwóch metod.

<BlockImage module="roboids/HamsterS" id="gripper" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Działanie | otwórz(open), zamknij(close) | - |

### Python
```python
hamster_s = HamsterS(0)

# unit = "open"
hamster_s.open_gripper()
# unit = "close"
hamster_s.close_gripper()
```

## Ustaw kąt wyrzutni {#shooter}

Steruje wyrzutnią, ustawiając jej kąt. Zakres kąta to od 0 do 180.

<BlockImage module="roboids/HamsterS" id="shooter" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Kąt wyrzutni | Liczba całkowita od 0 do 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.shooter(45)
```

## Wartość wejścia portu {#input}

Zwraca wartość wejścia portu wejścia/wyjścia robota HamsterS.

<BlockImage module="roboids/HamsterS" id="input" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port wejścia/wyjścia | a, b | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.get_input('a')
```
