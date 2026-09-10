---
title: Turtle
---

# Turtle

## Deklaracja instancji {#instance}

Po dodaniu bloku Turtle do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
turtle = Turtle(0)
# Gdy instancji jest więcej
turtle_1 = Turtle(1)
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Ustaw prędkość koła {#set_wheel_speed}

Określa prędkość koła. Zakres prędkości to od -100 do 100.

<BlockImage module="roboids/Turtle" id="set_wheel_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybór koła | lewe(left), prawe(right), oba(both) | - |
| speed | Wejście (blok) | Prędkość koła | Liczba całkowita od -100 do 100, 0: zatrzymanie | - |

### Python
```python
turtle = Turtle(0)

turtle.set_wheel_speed('both', 50)
```

## Jedź na odległość {#move_distance}

Ustawia odległość, jaką robot ma pokonać.  
Jeśli prędkość kół nie została ustawiona, robot nie jedzie.  
Gdy wartość odległości wynosi 0, robot jedzie dalej z obecną prędkością kół.  
Po zaznaczeniu pola czekaj program czeka, aż jazda się zakończy.

<BlockImage module="roboids/Turtle" id="move_distance" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Pokonywana odległość | Liczba rzeczywista 0 lub większa | - |
| unit | Opcja listy rozwijanej | Jednostka odległości | cm, mm, cal(inch) | cm |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.move_distance(50, 'cm', wait=True)
```

## Jedź przez czas {#move_time}

Jedzie z obecną prędkością kół przez podany czas.  
Jeśli prędkość kół nie została ustawiona, robot jedzie do przodu z prędkością domyślną.  
Po zaznaczeniu pola czekaj program czeka, aż jazda się zakończy.

<BlockImage module="roboids/Turtle" id="move_time" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Czas jazdy (w sekundach) | Liczba rzeczywista 0 lub większa | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

# wait = TRUE
turtle.move_time(5, wait=True)
# wait = FALSE
turtle.move_time(0.5, wait=False)
```

## Obróć się w miejscu {#turn_degree}

Ustawia kierunek i kąt obrotu w miejscu.  
Po zaznaczeniu pola czekaj program czeka, aż obrót się zakończy.

<BlockImage module="roboids/Turtle" id="turn_degree" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| direction | Opcja listy rozwijanej | Kierunek obrotu | lewa(left), prawa(right) | - |
| data | Wejście (blok) | Kąt obrotu (w stopniach) | Liczba rzeczywista 0 lub większa | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.turn_degree('left', 90, wait=True)
```

## Zmień prędkość koła {#change_speed}

Zmienia prędkość kół robota Turtle.  
Nowa prędkość koła to obecna prędkość powiększona o wpisaną wartość.

<BlockImage module="roboids/Turtle" id="change_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybór koła | lewe(left), prawe(right), oba(both) | - |
| speed | Wejście (blok) | Zmiana prędkości | Liczba całkowita od -200 do 200 | - |

### Python
```python
turtle = Turtle(0)

turtle.change_wheel_speed('both', 10)
```

## Zatrzymaj {#stop}

Zatrzymuje jazdę robota Turtle.

<BlockImage module="roboids/Turtle" id="stop" />

### Parametry

(brak)

### Python
```python
turtle = Turtle(0)

turtle.stop()
```

## Czy koło się porusza? {#wheel_moving}

Zwraca true, gdy koło się porusza, i false, gdy stoi.

<BlockImage module="roboids/Turtle" id="wheel_moving" />

### Parametry

(brak)

### Python
```python
turtle = Turtle(0)

turtle.wheel_moving()
```

## Obrót wokół koła {#pivot}

Ustawia koło, wokół którego następuje obrót, oraz kierunek i kąt.  
Po zaznaczeniu pola czekaj program czeka, aż obrót się zakończy.

<BlockImage module="roboids/Turtle" id="pivot" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| base | Opcja listy rozwijanej | Koło, wokół którego następuje obrót | lewe koło(left_wheel), prawe koło(right_wheel) | - |
| direction | Opcja listy rozwijanej | Kierunek obrotu | do przodu(forward), do tyłu(backward) | - |
| data | Wejście (blok) | Kąt obrotu (w stopniach) | Liczba rzeczywista 0 lub większa | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot('left_wheel', 'forward', 90, wait=True)
```

## Narysuj okrąg {#pivot_circle}

Przy rysowaniu okręgu pisakiem ustawia kierunek, promień i kąt obrotu.  
Po zaznaczeniu pola czekaj program czeka, aż obrót się zakończy.

<BlockImage module="roboids/Turtle" id="pivot_circle" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| direction | Opcja listy rozwijanej | Kierunek obrotu | w lewo do przodu(left_forward), w lewo do tyłu(left_backward), w prawo do przodu(right_forward), w prawo do tyłu(right_backward) | - |
| degree | Wejście (blok) | Kąt obrotu (w stopniach) | Liczba rzeczywista 0 lub większa | - |
| radius | Wejście (blok) | Promień obrotu | Liczba rzeczywista 0 lub większa | - |
| unit | Opcja listy rozwijanej | Jednostka promienia | cm, mm, cal(inch) | cm |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot_circle('left_forward', 90, 1, 'cm', wait=True)
```

## Jedź wzdłuż linii {#trace_line}

Jedzie wzdłuż linii w wybranym kolorze, korzystając z czujnika koloru podłoża.

<BlockImage module="roboids/Turtle" id="trace_line" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| line | Opcja listy rozwijanej | Kolor linii, wzdłuż której jedzie | czarny(black), czerwony(red), zielony(green), niebieski(blue), dowolny(any) | black |

### Python
```python
turtle = Turtle(0)

turtle.trace_line('black')
```

## Jedź wzdłuż linii aż do koloru {#trace_line_until_color}

Korzystając z czujnika koloru podłoża, jedzie wzdłuż linii w kolorze A, aż napotka kolor B.

<BlockImage module="roboids/Turtle" id="trace_line_until_color" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| line | Opcja listy rozwijanej | Kolor linii, wzdłuż której jedzie | czarny(black), czerwony(red), zielony(green), niebieski(blue), dowolny(any) | - |
| color | Opcja listy rozwijanej | Kolor, przy którym się zatrzyma | czarny(black), czerwony(red), zielony(green), cyjan(cyan), niebieski(blue), magenta(magenta), dowolny(any) | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_line_until_color('black', 'red', wait=True)
```

## Przejazd przez skrzyżowanie i zatrzymanie na następnym {#intersection}

Turtle skręca na skrzyżowaniu w podanym kierunku, a potem jedzie aż do następnego skrzyżowania.  
Po zaznaczeniu pola czekaj program czeka, aż jazda się zakończy.  

<BlockImage module="roboids/Turtle" id="intersection" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| direction | Opcja listy rozwijanej | Kierunek jazdy na skrzyżowaniu | jedź prosto(forward), skręć w lewo(left), skręć w prawo(right), zawróć(uturn) | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_intersection('left', wait=True)
```

## Ustaw prędkość śledzenia linii {#set_trace_speed}

Ustawia prędkość jazdy wzdłuż linii. Zakres prędkości to od 1 do 10.

<BlockImage module="roboids/Turtle" id="set_trace_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Prędkość śledzenia linii | Liczba całkowita od 1 do 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_speed(5)
```

## Ustaw wzmocnienie śledzenia linii {#set_trace_gain}

Ustawia, jak mocno robot koryguje kierunek podczas jazdy wzdłuż linii. Zakres wzmocnienia to od 1 do 10.

<BlockImage module="roboids/Turtle" id="set_trace_gain" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Wzmocnienie korekty kierunku | Liczba całkowita od 1 do 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_gain(5)
```

## Zatrzymaj śledzenie linii {#stop_trace}

Kończy jazdę robota Turtle wzdłuż linii.

<BlockImage module="roboids/Turtle" id="stop_trace" />

### Parametry

(brak)

### Python
```python
turtle = Turtle(0)

turtle.stop_trace()
```

## Ustaw kolor diody LED głowy {#set_led_color}

Ustawia kolor diody LED na głowie robota Turtle.  
Kolor wybrany z palety jest zamieniany na **nazwę koloru** (tekst po angielsku) i w takiej postaci trafia do kodu. (W kodzie pojawia się nazwa koloru, a nie liczbowe wartości R, G, B.)

<BlockImage module="roboids/Turtle" id="set_led_color" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| color | Kolor | Wybór z palety kolorów → zamiana na nazwę koloru (po angielsku) | Nazwy kolorów: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color('red')
```

## Ustaw kolor diody LED głowy blokiem z kategorii Kolor {#set_led_color_with_block}

Ustawia kolor diody LED na głowie na podstawie wyniku bloku z kategorii Kolor (`[R, G, B]`).

<BlockImage module="roboids/Turtle" id="set_led_color_with_block" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (kolor) | Blok z kategorii Kolor albo tablica `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color(*Utils.color('red'))
```

## Zmień kolor diody LED o RGB {#change_by_rgb}

Dodaje wpisane zmiany R, G i B do obecnego koloru diody LED na głowie i ustawia nowy kolor.

<BlockImage module="roboids/Turtle" id="change_by_rgb" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| r | Wejście (pole) | Zmiana wartości czerwonej | Liczba całkowita od -255 do 255 | 0 |
| g | Wejście (pole) | Zmiana wartości zielonej | Liczba całkowita od -255 do 255 | 0 |
| b | Wejście (pole) | Zmiana wartości niebieskiej | Liczba całkowita od -255 do 255 | 0 |

### Python
```python
turtle = Turtle(0)

turtle.change_led_color(10, 0, 0)
```

## Wyłącz diodę LED na głowie {#turn_off}

Gasi kolor diody LED na głowie.

<BlockImage module="roboids/Turtle" id="turn_off" />

### Parametry

(brak)

### Python
```python
turtle = Turtle(0)

turtle.turn_off()
```

## Ustaw częstotliwość brzęczyka {#sound_buzz}

Ustawia dźwięk brzęczyka robota Turtle na podaną częstotliwość.

<BlockImage module="roboids/Turtle" id="sound_buzz" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| hz | Wejście (blok) | Częstotliwość (Hz) | Liczba rzeczywista od 0 do 6553,5 | - |

### Python
```python
turtle = Turtle(0)

turtle.sound_buzz(440)
```

## Zagraj nutę {#sound_note}

Turtle gra podaną nutę.

<BlockImage module="roboids/Turtle" id="sound_note" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| note | Opcja listy rozwijanej | Nuta | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Opcja listy rozwijanej | Oktawa | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
turtle = Turtle(0)

turtle.sound_note('D', 5)
```

## Odtwórz klip dźwiękowy {#sound_clip}

Turtle odtwarza wybrany klip dźwiękowy.

<BlockImage module="roboids/Turtle" id="sound_clip" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| clip | Opcja listy rozwijanej | Nazwa klipu dźwiękowego | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` i inne | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.sound_clip('siren', wait=True)
```

## Wyłącz dźwięk {#sound_off}

Wyłącza dźwięk robota Turtle.

<BlockImage module="roboids/Turtle" id="sound_off" />

### Parametry

(brak)

### Python
```python
turtle = Turtle(0)

turtle.sound_off()
```

## Czy dźwięk jest odtwarzany? {#sound_playing}

Zwraca true, gdy dźwięk jest odtwarzany, i false, gdy nie jest.

<BlockImage module="roboids/Turtle" id="sound_playing" />

### Parametry

(brak)

### Python
```python
turtle = Turtle(0)

turtle.sound_playing()
```

## Prędkość koła {#wheel_speed}

Prędkość wybranego koła

<BlockImage module="roboids/Turtle" id="wheel_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Odczytywane koło | lewa(left), prawa(right) | - |

### Python
```python
turtle = Turtle(0)

turtle.wheel_speed('left')
```

## Czujnik koloru podłoża {#floor}

Wartość czujnika koloru podłoża

<BlockImage module="roboids/Turtle" id="floor" />

### Parametry

(brak)

### Python
```python
turtle = Turtle(0)

turtle.floor()
```

## Kolor karty {#card_color}

Nazwa koloru karty odczytanego czujnikiem koloru podłoża

<BlockImage module="roboids/Turtle" id="card_color" />

### Parametry

(brak)

### Python
```python
turtle = Turtle(0)

turtle.card_color()
```

## Wzór kolorów karty {#card_pattern}

Wzór kolorów karty odczytany czujnikiem koloru podłoża

<BlockImage module="roboids/Turtle" id="card_pattern" />

### Parametry

(brak)

### Python
```python
turtle = Turtle(0)

turtle.card_pattern()
```

## Przyspieszenie ziemskie {#acceleration}

Wartość przyspieszenia ziemskiego wzdłuż wybranej osi

<BlockImage module="roboids/Turtle" id="acceleration" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Mierzona oś | x, y, z | - |

### Python
```python
turtle = Turtle(0)

turtle.acceleration('x')
```

## Temperatura {#temperature}

Wartość czujnika temperatury

<BlockImage module="roboids/Turtle" id="temperature" />

### Parametry

(brak)

### Python
```python
turtle = Turtle(0)

turtle.temperature()
```

## Siła sygnału {#signal_strength}

Siła sygnału

<BlockImage module="roboids/Turtle" id="signal_strength" />

### Parametry

(brak)

### Python
```python
turtle = Turtle(0)

turtle.signal_strength()
```

## Napięcie akumulatora {#battery}

Napięcie akumulatora

<BlockImage module="roboids/Turtle" id="battery" />

### Parametry

(brak)

### Python
```python
turtle = Turtle(0)

turtle.battery()
```

## Czy dotyka koloru? {#color_read}

Sprawdza czujnikiem koloru robota Turtle, czy robot dotyka wskazanego koloru, i zwraca **prawdę (True) lub fałsz (False)**.

<BlockImage module="roboids/Turtle" id="color_read" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| color | Opcja listy rozwijanej | Nazwa koloru | unknown, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_color('red')
```

## Czy wzór karty to ~? {#pattern_read}

Zwraca **prawdę (True) lub fałsz (False)** w zależności od tego, czy wzór kolorów karty odczytany czujnikiem koloru jest zgodny z podanym.

<BlockImage module="roboids/Turtle" id="pattern_read" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| pattern | Opcja listy rozwijanej | Nazwa wzoru karty | `'red_yellow'`, `'red_green'`, `'blue_red'` | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_pattern('red_yellow')
```

## Stan tylnego przycisku {#button}

Czy przycisk na plecach jest wciśnięty albo czy został kliknięty

<BlockImage module="roboids/Turtle" id="button" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| event | Opcja listy rozwijanej | Rodzaj stanu przycisku | naciśnięty(pressed), kliknięty(click), długo kliknięty(long_click) | - |  

### Python
```python
turtle = Turtle(0)

turtle.button('pressed')
```

## Zmiana stanu {#state_change}

Czy stan robota się zmienił

<BlockImage module="roboids/Turtle" id="state_change" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Rodzaj stanu | Od 0 do 5 (patrz tabela poniżej) | - |

| unit | Warunek |
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
