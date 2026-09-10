---
title: Beagle
---

# Beagle

## Deklaracja instancji {#instance}

Po dodaniu bloku Beagle do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
beagle = Beagle(0)
# Gdy instancji jest więcej
beagle_1 = Beagle(1)
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Ustaw prędkość koła {#set_wheel_speed}

Określa prędkość koła. Zakres prędkości to od -100 do 100.

<BlockImage module="roboids/Beagle" id="set_wheel_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybór koła | lewe(left), prawe(right), oba(both) | - |
| speed | Wejście (blok) | Prędkość koła | Liczba całkowita od -100 do 100, 0: zatrzymanie | - |

### Python
```python
beagle = Beagle(0)

beagle.set_wheel_speed('both', 50)
```

## Jedź na odległość {#move_distance}

Jedzie z obecną prędkością kół na podaną odległość.  
Jeśli prędkość kół nie została ustawiona, robot jedzie do przodu z prędkością domyślną.  
Gdy wartość odległości wynosi 0, robot jedzie dalej z obecną prędkością kół.  
Po zaznaczeniu pola czekaj program czeka, aż jazda się zakończy.

<BlockImage module="roboids/Beagle" id="move_distance" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Pokonywana odległość | Liczba rzeczywista 0 lub większa | - |
| unit | Opcja listy rozwijanej | Jednostka odległości | cm, mm, cal(inch) | cm |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.move_distance(50, 'cm', wait=True)
```

## Jedź przez czas {#move_time}

Jedzie z obecną prędkością kół przez podany czas.  
Jeśli prędkość kół nie została ustawiona, robot jedzie do przodu z prędkością domyślną.  
Po zaznaczeniu pola czekaj program czeka, aż jazda się zakończy.

<BlockImage module="roboids/Beagle" id="move_time" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Czas jazdy (w sekundach) | Liczba rzeczywista 0 lub większa | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

# wait = TRUE
beagle.move_time(5, wait=True)
# wait = FALSE
beagle.move_time(0.5, wait=False)
```

## Obróć się w miejscu {#turn_degree}

Ustawia kierunek i kąt obrotu w miejscu.  
Po zaznaczeniu pola czekaj program czeka, aż obrót się zakończy.

<BlockImage module="roboids/Beagle" id="turn_degree" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| direction | Opcja listy rozwijanej | Kierunek obrotu | lewa(left), prawa(right) | - |
| data | Wejście (blok) | Kąt obrotu (w stopniach) | Liczba rzeczywista 0 lub większa | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.turn_degree('left', 90, wait=True)
```

## Zmień prędkość koła {#change_speed}

Zmienia prędkość kół robota Beagle.  
Nowa prędkość koła to obecna prędkość powiększona o wpisaną wartość.  
Nowo ustawiona prędkość koła zostaje ograniczona do zakresu od -100 do 100.

<BlockImage module="roboids/Beagle" id="change_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybór koła | lewe(left), prawe(right), oba(both) | - |
| speed | Wejście (blok) | Zmiana prędkości | Liczba całkowita od -200 do 200 | - |

### Python
```python
beagle = Beagle(0)

beagle.change_wheel_speed('both', 10)
```

## Zatrzymaj {#stop}

Zatrzymuje jazdę robota Beagle.  
Prędkość obu kół robota Beagle zostaje wyzerowana.

<BlockImage module="roboids/Beagle" id="stop" />

### Parametry

(brak)

### Python
```python
beagle = Beagle(0)

beagle.stop()
```

## Czy koło się porusza? {#wheel_moving}

Zwraca true, gdy koło się porusza, i false, gdy stoi.

<BlockImage module="roboids/Beagle" id="wheel_moving" />

### Parametry

(brak)

### Python
```python
beagle = Beagle(0)

beagle.wheel_moving()
```

## Ustaw częstotliwość brzęczyka {#sound_buzz}

Ustawia dźwięk brzęczyka robota Beagle na podaną częstotliwość.  
Zakres częstotliwości, które robot potrafi wydać, to od 27,5 Hz do 6553,5 Hz.  
Po wpisaniu wartości spoza tego zakresu brzęczyk nie wydaje dźwięku.

<BlockImage module="roboids/Beagle" id="sound_buzz" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| hz | Wejście (blok) | Częstotliwość (Hz) | 0 albo liczba rzeczywista od 27,5 do 6553,5 (poza tym 0) | - |

### Python
```python
beagle = Beagle(0)

beagle.sound_buzz(440)
```

## Zagraj nutę {#sound_note}

Beagle gra podaną nutę.

<BlockImage module="roboids/Beagle" id="sound_note" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| note | Opcja listy rozwijanej | Nuta | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Opcja listy rozwijanej | Oktawa | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
beagle = Beagle(0)

beagle.sound_note('D', 5)
```

## Odtwórz klip dźwiękowy {#sound_clip}

Beagle odtwarza wybrany klip dźwiękowy.  
Po zaznaczeniu pola czekaj program czeka, aż odtwarzanie się zakończy.

<BlockImage module="roboids/Beagle" id="sound_clip" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| clip | Opcja listy rozwijanej | Nazwa klipu dźwiękowego | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'dibidibidip'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'` i inne | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.sound_clip('siren', wait=True)
```

## Wyłącz dźwięk {#sound_off}

Wyłącza dźwięk robota Beagle.

<BlockImage module="roboids/Beagle" id="sound_off" />

### Parametry

(brak)

### Python
```python
beagle = Beagle(0)

beagle.sound_off()
```

## Czy dźwięk jest odtwarzany? {#sound_playing}

Zwraca true, gdy dźwięk jest odtwarzany, i false, gdy nie jest.

<BlockImage module="roboids/Beagle" id="sound_playing" />

### Parametry

(brak)

### Python
```python
beagle = Beagle(0)

beagle.sound_playing()
```

## Prędkość koła {#wheel_speed}

Prędkość wybranego koła

<BlockImage module="roboids/Beagle" id="wheel_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Odczytywane koło | lewa(left), prawa(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.wheel_speed('left')
```

## Enkoder {#encoder}

Wartość enkodera wybranego koła

<BlockImage module="roboids/Beagle" id="encoder" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Odczytywane koło | lewa(left), prawa(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.encoder('left')
```

## Żyroskop {#gyroscope}

Wartość żyroskopu wzdłuż wybranej osi

<BlockImage module="roboids/Beagle" id="gyroscope" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Mierzona oś | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.gyroscope('x')
```

## Akcelerometr {#accelerometer}

Wartość akcelerometru wzdłuż wybranej osi

<BlockImage module="roboids/Beagle" id="accelerometer" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Mierzona oś | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.accelerometer('x')
```

## Magnetometr {#magnetometer}

Wartość magnetometru wzdłuż wybranej osi

<BlockImage module="roboids/Beagle" id="magnetometer" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Mierzona oś | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.magnetometer('x')
```

## Temperatura {#temperature}

Wartość czujnika temperatury

<BlockImage module="roboids/Beagle" id="temperature" />

### Parametry

(brak)

### Python
```python
beagle = Beagle(0)

beagle.temperature()
```

## Siła sygnału {#signal_strength}

Siła sygnału

<BlockImage module="roboids/Beagle" id="signal_strength" />

### Parametry

(brak)

### Python
```python
beagle = Beagle(0)

beagle.signal_strength()
```

## Napięcie akumulatora {#battery}

Napięcie akumulatora

<BlockImage module="roboids/Beagle" id="battery" />

### Parametry

(brak)

### Python
```python
beagle = Beagle(0)

beagle.battery()
```

## Zmiana stanu {#state_change}

Czy stan robota się zmienił

<BlockImage module="roboids/Beagle" id="state_change" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Rodzaj stanu | Od 0 do 5 (patrz tabela poniżej) | - |

| unit | Warunek |
|------|------|
| 0 | `accelerometer('x') > 0.8` |
| 1 | `accelerometer('x') < -0.8` |
| 2 | `accelerometer('y') > 0.8` |
| 3 | `accelerometer('y') < -0.8` |
| 4 | `accelerometer('z') > 0` |
| 5 | `accelerometer('z') < 0` |

### Python
```python
beagle = Beagle(0)

# unit = 0
beagle.accelerometer('x') > 0.8
```

## Uruchom / zatrzymaj lidar {#lidar_power}

Włącza albo wyłącza czujnik lidar.

<BlockImage module="roboids/Beagle" id="lidar_power" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| on | Opcja listy rozwijanej | Lidar ON / OFF | uruchom(on=True), zatrzymaj(off=False) | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.lidar_power(True)
```

## Odległość do ~ obiektu z lidaru {#lidar_value}

Czujnik lidar mierzy odległość do obiektów dookoła, w pełnym zakresie 360 stopni.  
Numeracja zaczyna się od przodu robota Beagle (wartość numer 0) i rośnie o 1 w kierunku przeciwnym do ruchu wskazówek zegara.

<BlockImage module="roboids/Beagle" id="lidar_value" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Wejście (pole) | Numer obiektu (licząc od 0) | Liczba całkowita 0 lub większa | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_value(0)
```

## Odległość z lidaru według kierunku {#lidar_directions}

Podaje zmierzoną przez lidar odległość do przodu, do tyłu, w bok i po przekątnej.  
Wynikiem jest średnia z odległości w zakresie 45 stopni w lewo i w prawo od tego kierunku.

<BlockImage module="roboids/Beagle" id="lidar_directions" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| direction | Opcja listy rozwijanej | Mierzony kierunek | przód(front), lewy przód(left front), lewo(left), lewy tył(left back), tył(back), prawy tył(right back), prawo(right), prawy przód(right front) | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_directions('front')
```

## Czy lidar jest włączony? {#lidar_state}

Zwraca **prawdę (True) lub fałsz (False)** w zależności od tego, czy lidar jest włączony.

<BlockImage module="roboids/Beagle" id="lidar_state" />

### Parametry

(brak)

### Python
```python
beagle = Beagle(0)

beagle.lidar_ready()
```
