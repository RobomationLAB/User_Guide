---
title: Piobot
---

# Piobot

## Deklaracja instancji {#instance}

Po dodaniu bloku Piobot(Pio) do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
pio = Pio(0)
# Gdy instancji jest więcej
pio_1 = Pio(1)
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Ustaw prędkość koła {#set_wheel_speed}

Ustawia prędkość koła. Zakres prędkości koła to od -100 do 100.

<BlockImage module="roboids/Pio" id="set_wheel_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybór koła | lewe(left), prawe(right), oba(both) | - |
| speed | Wejście (blok) | Prędkość koła | Liczba całkowita od -100 do 100, 0: zatrzymanie | - |

### Python
```python
pio = Pio(0)

pio.set_wheel_speed('both', 50)
```

## Jedź na odległość {#move_distance}

Jedzie z obecną prędkością kół na podaną odległość.  
Jeśli prędkość kół nie została ustawiona, robot jedzie do przodu z prędkością domyślną.  
Gdy wartość odległości wynosi 0, robot jedzie dalej z obecną prędkością kół.  
Po zaznaczeniu pola czekaj program czeka, aż jazda się zakończy.

<BlockImage module="roboids/Pio" id="move_distance" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Pokonywana odległość | Liczba rzeczywista 0 lub większa | - |
| unit | Opcja listy rozwijanej | Jednostka odległości | cm, mm, cal(inch) | cm |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.move_distance(50, 'cm', wait=True)
```

## Jedź przez czas {#move_time}

Jedzie z obecną prędkością kół przez podany czas.  
Jeśli prędkość kół nie została ustawiona, robot jedzie do przodu z prędkością domyślną.  
Po zaznaczeniu pola czekaj program czeka, aż jazda się zakończy.

<BlockImage module="roboids/Pio" id="move_time" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Czas jazdy (w sekundach) | Liczba rzeczywista 0 lub większa | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# wait = TRUE
pio.move_time(5, wait=True)
# wait = FALSE
pio.move_time(5, wait=False)
```

## Obróć się w miejscu {#turn_degree}

Ustawia kierunek i kąt obrotu w miejscu.  
Po zaznaczeniu pola czekaj program czeka, aż obrót się zakończy.

<BlockImage module="roboids/Pio" id="turn_degree" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| direction | Opcja listy rozwijanej | Kierunek obrotu | lewa(left), prawa(right) | - |
| data | Wejście (blok) | Kąt obrotu (w stopniach) | Liczba rzeczywista 0 lub większa | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# direction = "left"
pio.turn_degree('left', 90, wait=True)
# direction = "right"
pio.turn_degree('right', 90, wait=True)
```

## Zmień prędkość koła {#change_speed}

Zmienia prędkość kół robota Piobot.  
Nowa prędkość koła to obecna prędkość powiększona o wpisaną wartość.  
Nowo ustawiona prędkość koła zostaje ograniczona do zakresu od -100 do 100.

<BlockImage module="roboids/Pio" id="change_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybór koła | lewe(left), prawe(right), oba(both) | - |
| speed | Wejście (blok) | Zmiana prędkości | Liczba całkowita od -200 do 200 | - |

### Python
```python
pio = Pio(0)

pio.change_wheel_speed('both', 50)
```

## Włącz / wyłącz tryb turbo {#turbo}

Włącza albo wyłącza tryb turbo robota Piobot.

<BlockImage module="roboids/Pio" id="turbo" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Tryb turbo ON / OFF | wł.(on=True), wył.(off=False) | TRUE |

### Python
```python
pio = Pio(0)

pio.turbo(True)
```

## Zatrzymaj {#stop}

Zatrzymuje jazdę robota Piobot.  
Prędkość obu kół robota Piobot zostaje wyzerowana.

<BlockImage module="roboids/Pio" id="stop" />

### Parametry

(brak)

### Python
```python
pio = Pio(0)

pio.stop()
```

## Czy koło się porusza? {#wheel_moving}

Zwraca true, gdy koło się porusza, i false, gdy stoi.

<BlockImage module="roboids/Pio" id="wheel_moving" />

### Parametry

(brak)

### Python
```python
pio = Pio(0)

pio.wheel_moving()
```

## Jedź o jedno pole na planszy {#grid_move}

Przejeżdża po planszy o jedno wyznaczone pole.

<BlockImage module="roboids/Pio" id="grid_move" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Kierunek jazdy | do przodu(forward), do tyłu(backward), w lewo(left), w prawo(right) | - |

### Python
```python
pio = Pio(0)

pio.grid_move('forward')
```

## Obróć się raz na planszy {#grid_turn}

Piobot obraca się na planszy o 90 stopni w podanym kierunku. Zawsze czeka na zakończenie (wewnętrznie wait=True na stałe).

<BlockImage module="roboids/Pio" id="grid_turn" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Kierunek obrotu | lewa(left), prawa(right) | - |

### Python
```python
pio = Pio(0)

# unit = "left"
pio.grid_turn('left')
# unit = "right"
pio.grid_turn('right')
```

## Ustaw prędkość szyi {#set_neck_speed}

Ustawia prędkość obrotu szyi. Zakres prędkości szyi to od 1 do 6.

<BlockImage module="roboids/Pio" id="set_neck_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Prędkość obrotu szyi | Liczba całkowita od 1 do 6 | 4 |

### Python
```python
pio = Pio(0)

pio.set_neck_speed(4)
```

## Ustaw kąt szyi {#set_neck_angle}

Ustawia kąt, do którego ma obrócić się szyja. Zakres kąta szyi to od -45 do 45.

<BlockImage module="roboids/Pio" id="set_neck_angle" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Kąt szyi (w stopniach) | Liczba rzeczywista od -45 do 45 | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.set_neck_angle(15, wait=True)
```

## Czy szyja się porusza? {#neck_moving}

Zwraca true, gdy szyja się porusza, i false, gdy stoi.

<BlockImage module="roboids/Pio" id="neck_moving" />

### Parametry

(brak)

### Python
```python
pio = Pio(0)

pio.neck_moving()
```

## Ustaw kolor oka {#set_eye_color}

Ustawia kolor diody LED w oku robota Piobot.  
Można zmienić kolor lewego oka, prawego oka albo obu naraz.  
Kolor wybrany spośród gotowych kolorów jest zamieniany na **nazwę koloru** (tekst po angielsku) i w takiej postaci trafia do kodu. (W kodzie pojawia się nazwa koloru, a nie liczbowe wartości R, G, B.)

<BlockImage module="roboids/Pio" id="set_eye_color" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybór oka | lewe(left), prawe(right), oba(both) | - |
| color | Opcja listy rozwijanej | Gotowy kolor → zamiana na nazwę koloru (po angielsku) | czarny(black), czerwony(red), żółty(yellow), zielony(green), cyjan(cyan), niebieski(blue), magenta(magenta), biały(white) | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', 'red')
```

## Ustaw kolor oka blokiem z kategorii Kolor {#set_eye_color_with_block}

Ustawia kolor diody LED w oku robota Piobot za pomocą bloków z kategorii Kolor.  
Można zmienić kolor lewego oka, prawego oka albo obu naraz.

<BlockImage module="roboids/Pio" id="set_eye_color_with_block" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybór oka | lewe(left), prawe(right), oba(both) | - |
| data | Wejście (kolor) | Tablica [R, G, B] | Blok z kategorii Kolor albo `[0~255, 0~255, 0~255]` | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', *Utils.color('red'))
```

## Zmień kolor oka o RGB {#change_by_rgb}

Zmienia kolor diody LED w oku robota Piobot o podane wartości R, G i B.  
Można ustawić kolor lewego oka, prawego oka albo obu naraz.

<BlockImage module="roboids/Pio" id="change_by_rgb" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybór oka | lewe(left), prawe(right), oba(both) | - |
| r | Wejście (pole) | Zmiana wartości czerwonej | Liczba całkowita od -255 do 255 | 0 |
| g | Wejście (pole) | Zmiana wartości zielonej | Liczba całkowita od -255 do 255 | 0 |
| b | Wejście (pole) | Zmiana wartości niebieskiej | Liczba całkowita od -255 do 255 | 0 |

### Python
```python
pio = Pio(0)

pio.change_eye_color('both', 10, 0, 0)
```

## Ustaw wzór oczu {#set_eye_pattern}

Ustawia wzór oczu oraz kolor każdego oka w chwili rozpoczęcia wzoru.

<BlockImage module="roboids/Pio" id="set_eye_pattern" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| pattern | Opcja listy rozwijanej | Rodzaj wzoru | wyłącz(reset), miganie(blink), ściemnianie(dimming), tęcza(rainbow) | - |
| left | Opcja listy rozwijanej | Kolor lewego oka | domyślny(black), czerwony(red), żółty(yellow), zielony(green), cyjan(cyan), niebieski(blue), magenta(magenta), biały(white) | white |
| right | Opcja listy rozwijanej | Kolor prawego oka | (tak samo jak left) | white |

### Python
```python
pio = Pio(0)

pio.set_eye_pattern('dimming', 'green', 'red')
```

## Wyłącz oko {#turn_off}

Gasi kolor oka.

<BlockImage module="roboids/Pio" id="turn_off" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybór oka | lewe(left), prawe(right), oba(both) | both |

### Python
```python
pio = Pio(0)

pio.turn_off('both')
```

## Ustaw częstotliwość brzęczyka {#sound_buzz}

Ustawia dźwięk brzęczyka robota Piobot na podaną częstotliwość.  
Zakres częstotliwości, które robot potrafi wydać, to od 27,5 Hz do 6553,5 Hz.  
Po wpisaniu wartości spoza tego zakresu brzęczyk nie wydaje dźwięku.

<BlockImage module="roboids/Pio" id="sound_buzz" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| hz | Wejście (blok) | Częstotliwość (Hz) | Liczba rzeczywista od 27,5 do 6553,5 | - |

### Python
```python
pio = Pio(0)

pio.sound_buzz(440)
```

## Zagraj nutę {#sound_note}

Piobot gra podaną nutę.

<BlockImage module="roboids/Pio" id="sound_note" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| note | Opcja listy rozwijanej | Nuta | Do(C), Do#/Re♭(C#), Re(D), Re#/Mi♭(D#), Mi(E), Fa(F), Fa#/Sol♭(F#), Sol(G), Sol#/La♭(G#), La(A), La#/Si♭(A#), Si(B) | - |
| octave | Opcja listy rozwijanej | Oktawa | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
pio = Pio(0)

pio.sound_note('D', 5)
```

## Odtwórz klip dźwiękowy {#sound_clip}

Piobot odtwarza wybrany klip dźwiękowy.  
Po zaznaczeniu pola czekaj program czeka, aż odtwarzanie się zakończy.

<BlockImage module="roboids/Pio" id="sound_clip" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| clip | Opcja listy rozwijanej | Nazwa klipu dźwiękowego | `'mute'`, `'beep'`, `'beep2'`, `'beep3'`, `'siren'`, `'engine'`, `'robot'`, `'connect'` i inne | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_clip('siren', wait=True)
```

## Odtwórz melodię {#sound_melody}

Piobot odtwarza wybraną melodię.  
Po zaznaczeniu pola czekaj program czeka, aż odtwarzanie się zakończy.

<BlockImage module="roboids/Pio" id="sound_melody" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| melody | Opcja listy rozwijanej | Nazwa melodii | `'mute'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` i inne | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_melody('happy', wait=True)
```

## Wyłącz dźwięk {#sound_off}

Wyłącza dźwięk robota Piobot.

<BlockImage module="roboids/Pio" id="sound_off" />

### Parametry

(brak)

### Python
```python
pio = Pio(0)

pio.sound_off()
```

## Czy dźwięk jest odtwarzany? {#sound_playing}

Zwraca true, gdy dźwięk jest odtwarzany, i false, gdy nie jest.

<BlockImage module="roboids/Pio" id="sound_playing" />

### Parametry

(brak)

### Python
```python
pio = Pio(0)

pio.sound_playing()
```

## Prędkość koła {#wheel_speed}

Prędkość wybranego koła

<BlockImage module="roboids/Pio" id="wheel_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Odczytywane koło | lewa(left), prawa(right) | - |

### Python
```python
pio = Pio(0)

pio.wheel_speed('left')
```

## Siła sygnału {#signal_strength}

Siła sygnału

<BlockImage module="roboids/Pio" id="signal_strength" />

### Parametry

(brak)

### Python
```python
pio = Pio(0)

pio.signal_strength()
```

## Napięcie akumulatora {#battery}

Napięcie akumulatora

<BlockImage module="roboids/Pio" id="battery" />

### Parametry

(brak)

### Python
```python
pio = Pio(0)

pio.battery()
```

## Przycisk klawiatury {#keypad}

Wykrywa przycisk klawiatury, który użytkownik nacisnął jako ostatni.

<BlockImage module="roboids/Pio" id="keypad" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| button | Opcja listy rozwijanej | Wykrywany przycisk | uruchom(play), jedź do przodu(forward), jedź do tyłu(backward), jedź w lewo(left), jedź w prawo(right), wykonaj(action), powtórz(repeat), usuń(clear) | - |

### Python
```python
pio = Pio(0)

pio.keypad('forward')
```
