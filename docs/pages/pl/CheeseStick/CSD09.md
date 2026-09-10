---
title: CSD-09 Silnik
---

# CSD-09 Silnik

## Deklaracja instancji {#instance}

Po dodaniu bloku CSD-09 Silnik(CSD09) do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Uruchom serwomotor {#start_servo_motor}

Wskazuje port, na którym będzie pracował serwomotor.  
Bez wskazania portu silnik nie będzie działał poprawnie.

<BlockImage module="CheeseStick/CSD09" id="start_servo_motor" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port serwomotoru | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_servo_motor('Sa')
```

## Ustaw kąt serwomotoru {#set_servo_motor}

Ustawia kąt serwomotoru na wskazanym porcie.  
Zakres wartości do wyboru to od 0 do 180.

<BlockImage module="CheeseStick/CSD09" id="set_servo_motor" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port serwomotoru | Sa, Sb, Sc | port z ostatniego `start_servo_motor` |
| value | Wejście (pole) | Kąt obrotu (w stopniach) | Liczba całkowita od 0 do 180 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_servo_motor('Sa', 90)
```

## Zmień kąt serwomotoru {#change_servo_motor}

Zmienia kąt serwomotoru na wskazanym porcie.  
Zakres wartości do wyboru to od -180 do 180.

<BlockImage module="CheeseStick/CSD09" id="change_servo_motor" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port serwomotoru | Sa, Sb, Sc | port z ostatniego `start_servo_motor` |
| value | Wejście (pole) | Zmiana kąta | Liczba całkowita | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_servo_motor('Sa', 10)
```

## Zatrzymaj serwomotor {#stop_servo_motor}

Wyłącza zasilanie serwomotoru na wskazanym porcie.

<BlockImage module="CheeseStick/CSD09" id="stop_servo_motor" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port serwomotoru | Sa, Sb, Sc | port z ostatniego `start_servo_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_servo_motor('Sa')
```

## Uruchom silnik DC {#start_DC_motor}

Pozwala sterować silnikiem DC na wskazanym porcie.
Trzeba wywołać ten blok raz, zanim użyjesz pozostałych bloków silnika DC.

<BlockImage module="CheeseStick/CSD09" id="start_DC_motor" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port silnika DC | Mab, Mcd | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_dc_motor('Mab')
```

## Ustaw prędkość silnika DC {#set_DC_motor}

Ustawia wartość wyjścia PWM silnika DC.

<BlockImage module="CheeseStick/CSD09" id="set_DC_motor" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port silnika DC | Mab, Mcd | port z ostatniego `start_dc_motor` |
| value | Wejście (pole) | Wartość wyjścia PWM | Liczba całkowita od 0 do 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_dc_motor('Mab', 50)
```

## Zmień prędkość silnika DC {#change_DC_motor}

Dodaje wpisaną zmianę do obecnej wartości wyjścia PWM silnika DC i ustawia nową wartość.

<BlockImage module="CheeseStick/CSD09" id="change_DC_motor" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port silnika DC | Mab, Mcd | port z ostatniego `start_dc_motor` |
| value | Wejście (pole) | Zmiana wartości PWM | Liczba całkowita | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_dc_motor('Mab', 10)
```

## Zatrzymaj silnik DC {#stop_DC_motor}

Zatrzymuje wyjście silnika DC.

<BlockImage module="CheeseStick/CSD09" id="stop_DC_motor" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port silnika DC | Mab, Mcd | port z ostatniego `start_dc_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_dc_motor('Mab')
```

## Uruchom silnik krokowy {#start_step_motor}

Włącza silnik krokowy.

<BlockImage module="CheeseStick/CSD09" id="start_step_motor" />

### Parametry

(brak)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_step_motor()
```

## Ustaw tryb silnika krokowego {#set_step_motor_mode}

Ustawia tryb sterowania silnikiem krokowym.  
Bez osobnego ustawienia domyślnie używany jest tryb „mocny".  
Uwaga! Nie wolno zmieniać trybu w trakcie obrotu silnika krokowego.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_mode" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Tryb pracy | wył.(off), normalny(wave_step), mocny(full_step) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_mode('full_step')
```

## Ustaw prędkość silnika krokowego {#set_step_motor_speed}

Ustawia prędkość silnika krokowego.  
Zakres wartości do wyboru to od -1000 do 1000.  
Wartość ujemna oznacza obrót w przeciwną stronę.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| value | Wejście (pole) | Prędkość obrotu (PPS) | Liczba całkowita 0 lub większa | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_speed(100)
```

## Obróć silnik krokowy {#rotate_step_motor}

Ustawia liczbę impulsów, o jaką ma obrócić się silnik krokowy.  
Zakres wartości do wyboru to od 0 do 65535.  
Bez ustawionej prędkości silnik krokowy się nie obraca.  
Po zaznaczeniu pola czekaj program czeka, aż obrót się zakończy.

<BlockImage module="CheeseStick/CSD09" id="rotate_step_motor" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| value | Wejście (pole) | Liczba kroków obrotu | Liczba całkowita | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# wait = TRUE
csd09.rotate_step_motor(360, wait=True)

# wait = FALSE
csd09.rotate_step_motor(360, wait=False)
```

## Zmień prędkość silnika krokowego {#change_step_motor_speed}

Zmienia prędkość silnika krokowego.  
Zakres wartości do wyboru to od -2000 do 2000.

<BlockImage module="CheeseStick/CSD09" id="change_step_motor_speed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| value | Wejście (pole) | Zmiana wartości PPS | Liczba całkowita | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_step_motor_speed(10)
```

## Zatrzymaj silnik krokowy {#stop_step_motor}

Zatrzymuje silnik krokowy albo wyłącza jego zasilanie.

<BlockImage module="CheeseStick/CSD09" id="stop_step_motor" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Sposób zatrzymania | zatrzymaj(stop), wyłącz zasilanie(power) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# unit = "stop"
csd09.stop_step_motor()

# unit = "power"
csd09.turn_off_step_motor()
```

## Liczba kroków {#step_motor_steps}

Zwraca łączną liczbę kroków, jaką silnik krokowy wykonał do tej pory.

<BlockImage module="CheeseStick/CSD09" id="step_motor_steps" />

### Parametry

(brak)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.get_steps()
```
