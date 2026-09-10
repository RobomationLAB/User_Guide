---
title: CSD-01 Przycisk chwilowy
---

# CSD-01 Przycisk chwilowy

## Deklaracja instancji {#instance}

Po dodaniu bloku CSD-01 Przycisk chwilowy(CSD01) do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Ustaw port wejścia {#set_input_port}

Ustawia port, do którego podłączony jest moduł CSD01 (Tact Switch).

<BlockImage module="CheeseStick/CSD01" id="set_input_port" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port do podłączenia | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.set_port('Sa')
```

## Wejście przycisku {#button_input}

Wartość wejściowa przycisku z wybranego portu  
Zwraca 0, gdy przycisk jest wciśnięty, a w przeciwnym razie 1.

<BlockImage module="CheeseStick/CSD01" id="button_input" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port do odczytu | Sa, Sb, Sc | port z ostatniego `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_input('Sa')
```

## Czy przycisk jest naciśnięty {#button_pressed}

Czy przycisk podłączony do wybranego portu jest wciśnięty

<BlockImage module="CheeseStick/CSD01" id="button_pressed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port do odczytu | Sa, Sb, Sc | port z ostatniego `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_pressed('Sa')
```
