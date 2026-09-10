---
title: RaccoonBot
---

# RaccoonBot

## Deklaracja instancji {#instance}

Po dodaniu bloku RaccoonBot do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
raccoon = RaccoonBot(0)
# Gdy instancji jest więcej
raccoon_1 = RaccoonBot(1)
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Włącz / wyłącz silnik przegubu {#motor}

Decyduje, czy sterowanie silnikiem danego przegubu ma zostać zwolnione, czy utrzymane.  
Jeśli nic nie ustawisz, program zaczyna pracę z włączonym sterowaniem silnikami wszystkich przegubów.

<BlockImage module="roboids/Raccoon4" id="motor" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Numer przegubu | wszystkie(-1), 1(1), 2(2), 3(3), 4(4) | -1 |
| on | Pole wyboru | Sterowanie silnikiem ON / OFF | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# wszystkie przeguby, sterowanie silnikiem wyłączone
raccoon.motor(-1, False)

# przegub 1, sterowanie silnikiem włączone
raccoon.motor(1, True)
```

## Ustaw prędkość przegubu {#speed_joint}

Ustawia prędkość wybranego przegubu.

<BlockImage module="roboids/Raccoon4" id="speed_joint" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| joint | Opcja listy rozwijanej | Numer przegubu | wszystkie(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Wejście (blok) | Prędkość przegubu | Liczba całkowita od -100 do 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_speed_joint(1, 100)
```

## Zmień prędkość przegubu {#change_speed_joint}

Zmienia prędkość wybranego przegubu.

<BlockImage module="roboids/Raccoon4" id="change_speed_joint" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| joint | Opcja listy rozwijanej | Numer przegubu | wszystkie(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Wejście (blok) | Zmiana prędkości | Liczba całkowita od -200 do 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_speed_joint(1, 50)
```

## Ustaw prędkość wszystkich przegubów naraz {#speed_joints}

Ustawia naraz prędkość czterech przegubów.

<BlockImage module="roboids/Raccoon4" id="speed_joints" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (tablica) | Tablica prędkości 4 przegubów | `[joint1, joint2, joint3, joint4]`, każda od -100 do 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

# tablica wpisana wprost [10, 20, 30, 40]
raccoon.set_speed_joints(10, 20, 30, 40)

# tablica ze zmiennej
raccoon.set_speed_joints(*arr)
```

## Ustaw prędkość sterowania kątem przegubu {#angle_speed}

Ustawia prędkość, z jaką przeguby są sterowane w trybie sterowania kątem.

<BlockImage module="roboids/Raccoon4" id="angle_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Maksymalna prędkość sterowania kątem | Liczba całkowita od 0 do 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.angle_max_speed(100)
```

## Ustaw kąt przegubu {#angle_joint}

Ustawia kąt wybranego przegubu.

| joint | min | max |
|-------|-----|-----|
| 1 | -120 | 120 |
| 2 | -90 | 30 |
| 3 | -150 | 0 |
| 4 | -105 | 105 |

<BlockImage module="roboids/Raccoon4" id="angle_joint" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| joint | Opcja listy rozwijanej | Numer przegubu | wszystkie(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Wejście (blok) | Kąt przegubu (w stopniach) | Patrz tabela powyżej (automatyczne ograniczenie) | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_angle_joint(1, 90, wait=True)
```

## Zmień kąt przegubu {#change_angle_joint}

Zmienia kąt wybranego przegubu.

<BlockImage module="roboids/Raccoon4" id="change_angle_joint" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| joint | Opcja listy rozwijanej | Numer przegubu | wszystkie(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Wejście (blok) | Zmiana kąta (w stopniach) | Patrz tabela powyżej (automatyczne ograniczenie) | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_angle_joint(1, 10, wait=True)
```

## Ustaw kąty wszystkich przegubów naraz {#angle_joints}

Ustawia naraz kąty czterech przegubów.

<BlockImage module="roboids/Raccoon4" id="angle_joints" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (tablica) | Tablica kątów 4 przegubów albo nazwa pozycji | Tablica `[j1, j2, j3, j4]` | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# tablica podana wprost
raccoon.set_angle_joints(0, 0, 0, 0, wait=True)
```

## Zainicjuj stan przegubów {#default_angle_joints}

Ustawia kąty czterech przegubów zgodnie z gotową pozycją (`'zero'`, `'park'`, `'home'`).

<BlockImage module="roboids/Raccoon4" id="default_angle_joints" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Lista rozwijana | Nazwa pozycji | `'zero'` / `'park'` / `'home'` | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

Gotowe pozycje:
- `'zero'` → `[0, 0, 0, 0]`
- `'park'` → `[0, 25, -145, -60]`
- `'home'` → `[0, -10, -140, 60]`

### Python
```python
raccoon = RaccoonBot(0)

# gotowa pozycja
raccoon.set_angle_joints('home', wait=True)
```

## Zapisz kąty przegubów {#save_encoder}

Zapisuje obecne wartości enkoderów w wybranej zmiennej.

<BlockImage module="roboids/Raccoon4" id="save_encoder" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| encoder | Zmienna | Nazwa zmiennej, w której zapisujesz | Zmienna | - |
| data | Wejście (tablica) | Zapisywana tablica początkowa | Tablica 4-elementowa albo tablica pusta | - |

### Python
```python
raccoon = RaccoonBot(0)
encoder = None

encoder = raccoon.save_encoder([3, -6, -73, 60])
```

## Ustaw wybraną współrzędną {#set_coordinate}

Przesuwa ramię robota, ustawiając wybraną współrzędną.  
Zakresy poszczególnych współrzędnych są następujące.  
Względem nadgarstka => x: od -20,0 cm do 20,0 cm, y: od -10,0 cm do 20,0 cm, z: od -2,0 mm do 28,0 cm  
Względem chwytaka => zakres może się różnić w zależności od podłączonego urządzenia.  
Chwytak jest ustawiany na stałe poziomo albo pionowo względem podłoża.  
Po wpisaniu współrzędnych, do których nie da się dojechać, polecenie zostaje pominięte.

<BlockImage module="roboids/Raccoon4" id="set_coordinate" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| origin | Opcja listy rozwijanej | Punkt odniesienia | nadgarstek(wrist), chwytak(end_effector) | - |
| pos | Opcja listy rozwijanej | Oś | x, y, z | - |
| data | Wejście (blok) | Wartość współrzędnej | x: od -20 do 20 cm, y: od -10 do 20 cm, z: od -2 do 28 cm | - |
| unit | Opcja listy rozwijanej | Jednostka | cm, mm, cal(inch) | cm |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# ustawienie współrzędnej x na 10 cm
raccoon.set_coordinate('wrist', 'x', 10, 'cm', wait=True)

# współrzędna z względem end_effector
raccoon.set_coordinate('end_effector', 'z', 15, 'cm', wait=True)
```

## Zmień wybraną współrzędną {#change_coordinate}

Przesuwa ramię robota, zmieniając wybraną współrzędną względem obecnego położenia.  
Zakresy poszczególnych współrzędnych są następujące.  
Względem nadgarstka => x: od -20,0 cm do 20,0 cm, y: od -10,0 cm do 20,0 cm, z: od -2,0 mm do 28,0 cm  
Względem chwytaka => zakres może się różnić w zależności od podłączonego urządzenia.  
Chwytak jest ustawiany na stałe poziomo albo pionowo względem podłoża.  
Po wpisaniu współrzędnych, do których nie da się dojechać, polecenie zostaje pominięte.

<BlockImage module="roboids/Raccoon4" id="change_coordinate" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| origin | Opcja listy rozwijanej | Punkt odniesienia | nadgarstek(wrist), chwytak(end_effector) | - |
| pos | Opcja listy rozwijanej | Oś | x, y, z | - |
| data | Wejście (blok) | Zmiana współrzędnej | Liczba rzeczywista | - |
| unit | Opcja listy rozwijanej | Jednostka | cm, mm, cal(inch) | cm |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_coordinate('wrist', 'y', 5, 'cm', wait=True)
```

## Przejdź do współrzędnych xyz {#set_coordinates}

Ustawia naraz współrzędne x, y i z na podane wartości.  

<BlockImage module="roboids/Raccoon4" id="set_coordinates" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| origin | Opcja listy rozwijanej | Punkt odniesienia | nadgarstek(wrist), chwytak(end_effector) | - |
| x | Wejście (blok) | Współrzędna x | Liczba rzeczywista | - |
| y | Wejście (blok) | Współrzędna y | Liczba rzeczywista | - |
| z | Wejście (blok) | Współrzędna z | Liczba rzeczywista | - |
| unit | Opcja listy rozwijanej | Jednostka | cm, mm, cal(inch) | cm |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_coordinates('wrist', 0, 15, 20, 'cm', wait=True)
```

## Ustaw blokadę chwytaka {#lock}

Ustawia kierunek, w którym chwytak zostaje zablokowany. Po wybraniu opcji poziomo albo pionowo nie można już sterować prędkością ani kątem przegubu 4.

<BlockImage module="roboids/Raccoon4" id="lock" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| mode | Opcja listy rozwijanej | Kierunek blokady | brak(none), poziomo(horizontal), pionowo(vertical) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.lock('horizontal')
```

## Chwyć / odłóż przedmiot chwytakiem {#end_effector}

Chwyta albo odkłada przedmiot chwytakiem.  
W zależności od wartości z listy rozwijanej unit wywoływana jest jedna z dwóch metod.

<BlockImage module="roboids/Raccoon4" id="end_effector" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Działanie | chwyć (zamknij)(pick), odłóż (otwórz)(place) | - |

### Python
```python
raccoon = RaccoonBot(0)

# unit = "pick"
raccoon.pick()
# unit = "place"
raccoon.place()
```

## Urządzenie chwytaka {#end_effector_device}

Numer podłączonego obecnie chwytaka  
(1, 3, 4: chwytak szczękowy, 2: chwytak podciśnieniowy)

<BlockImage module="roboids/Raccoon4" id="end_effector_device" />

### Parametry

(brak)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_device()
```

## Stan chwytaka {#end_effector_status}

Czy chwytak trzyma przedmiot  
(0: odłożony, 1: chwycony)

<BlockImage module="roboids/Raccoon4" id="end_effector_status" />

### Parametry

(brak)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_status()
```

## Zagraj nutę {#sound_note}

RaccoonBot gra podaną nutę.

<BlockImage module="roboids/Raccoon4" id="sound_note" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| note | Opcja listy rozwijanej | Nuta | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Opcja listy rozwijanej | Oktawa | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_note('D', 5)
```

## Odtwórz klip dźwiękowy {#sound_clip}

RaccoonBot odtwarza wybrany klip dźwiękowy.

<BlockImage module="roboids/Raccoon4" id="sound_clip" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| clip | Opcja listy rozwijanej | Nazwa klipu dźwiękowego | `'mute'`, `'beep'`, `'siren'`, `'robot'`, `'connect'`, `'wake_up'`, `'start'`, `'bye'` i inne | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_clip('siren', wait=True)
```

## Wyłącz dźwięk {#sound_off}

Wyłącza dźwięk robota RaccoonBot.

<BlockImage module="roboids/Raccoon4" id="sound_off" />

### Parametry

(brak)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_off()
```

## Enkoder {#encoder}

Wartość enkodera wybranego przegubu

<BlockImage module="roboids/Raccoon4" id="encoder" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| joint | Opcja listy rozwijanej | Numer przegubu (albo wszystkie przeguby) | 1, 2, 3, 4, wszystkie(-1) | -1 |

### Python
```python
raccoon = RaccoonBot(0)

# joint = 1
raccoon.encoder(1)

# wszystkie przeguby
raccoon.encoder(-1)
```

## Współrzędna wybranego elementu {#coordinate}

Zwraca obecne współrzędne xyz punktu odniesienia.  
Po pominięciu `pos` zwracana jest cała tablica `[x, y, z]`, a po podaniu — tylko wartość dla tej osi.

<BlockImage module="roboids/Raccoon4" id="coordinate" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| origin | Opcja listy rozwijanej | Punkt odniesienia | nadgarstek(wrist), chwytak(end_effector) | wrist |
| pos | Opcja listy rozwijanej | Oś (albo wszystkie) | x, y, z, wszystkie (po pominięciu zwracana jest cała tablica) | None (wszystkie) |

### Python
```python
raccoon = RaccoonBot(0)

# wybrana oś
raccoon.get_coordinates('wrist', 'x')

# wszystkie (tablica 3-elementowa)
raccoon.get_coordinates('wrist')
```

## Siła sygnału {#signal_strength}

Siła sygnału

<BlockImage module="roboids/Raccoon4" id="signal_strength" />

### Parametry

(brak)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.signal_strength()
```

## Napięcie akumulatora {#battery}

Napięcie akumulatora

<BlockImage module="roboids/Raccoon4" id="battery" />

### Parametry

(brak)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.battery()
```

## Czy przycisk jest wciśnięty? {#button}

Czy wybrany przycisk jest wciśnięty albo czy zaszło zdarzenie kliknięcia

<BlockImage module="roboids/Raccoon4" id="button" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Nazwa przycisku | teach(teach), play(play), power(power), delete(delete), dowolny(any) | - |
| event | Opcja listy rozwijanej | Rodzaj zdarzenia | wciśnięcie(pressed), kliknięcie(click), długie kliknięcie(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.button('teach', 'pressed')
```

## Ustaw prędkość przenośnika {#conveyor_speed}

Ustawia prędkość taśmy przenośnika. Zakres prędkości to od -100 do 100.

<BlockImage module="roboids/Raccoon4" id="conveyor_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Prędkość przenośnika | Liczba całkowita od -100 do 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_conveyor_speed(100)
```

## Przesuń przenośnik o odległość {#conveyor_distance}

Przesuwa przenośnik o podaną odległość.

<BlockImage module="roboids/Raccoon4" id="conveyor_distance" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Pokonywana odległość | Liczba rzeczywista 0 lub większa | - |
| unit | Opcja listy rozwijanej | Jednostka odległości | cm, mm, cal(inch) | cm |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_move(50, 'cm', wait=True)
```

## Zmień prędkość przenośnika {#change_conveyor_speed}

Zmienia prędkość taśmy przenośnika.

<BlockImage module="roboids/Raccoon4" id="change_conveyor_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Zmiana prędkości | Liczba całkowita od -200 do 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_conveyor_speed(10)
```

## Zatrzymaj przenośnik {#stop_conveyor}

Zatrzymuje przenośnik.

<BlockImage module="roboids/Raccoon4" id="stop_conveyor" />

### Parametry

(brak)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.stop_conveyor()
```

## Czy przenośnik działa? {#conveyor_running}

Czy taśma przenośnika pracuje

<BlockImage module="roboids/Raccoon4" id="conveyor_running" />

### Parametry

(brak)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_running()
```

## Czy przycisk przenośnika jest wciśnięty? {#conveyor_button}

Czy przycisk przenośnika jest wciśnięty albo czy zaszło zdarzenie kliknięcia

<BlockImage module="roboids/Raccoon4" id="conveyor_button" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| event | Opcja listy rozwijanej | Rodzaj zdarzenia | wciśnięcie(pressed), kliknięcie(click), długie kliknięcie(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_button('pressed')
```
