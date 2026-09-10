---
title: PID-13 Joystick i przycisk
---

# PID-13 Joystick i przycisk

## Deklaracja instancji {#instance}

Po dodaniu bloku PID-13 Joystick i przycisk(PID13) do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Uruchom joystick {#start}

Włącza joystick i przyciski.

<BlockImage module="CheeseStick/PID13" id="start" />

### Parametry

(brak)

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.start()
```

## Wartość joysticka {#joystick}

Wartość x albo y joysticka.  
Zakres każdej wartości to od -128 do 127.

<BlockImage module="CheeseStick/PID13" id="joystick" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Mierzona oś | x, y | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.joystick('x')
```

## Wejście przycisku {#button_input}

Stan wejścia wybranego przycisku  
Zwraca 1, gdy przycisk jest wciśnięty, a 0, gdy nie jest.

<BlockImage module="CheeseStick/PID13" id="button_input" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Nazwa przycisku | przycisk A(a), przycisk B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_input('a')
```

## Czy przycisk został kliknięty {#button_click}

Czy wybrany przycisk został kliknięty  
Blok zwraca prawdę tylko w chwili kliknięcia wybranego przycisku, a poza tym fałsz.

<BlockImage module="CheeseStick/PID13" id="button_click" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Nazwa przycisku | przycisk A(a), przycisk B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_click('a')
```
