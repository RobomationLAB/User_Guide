---
title: CSD-07 Czujnik dźwięku
---

# CSD-07 Czujnik dźwięku

## Deklaracja instancji {#instance}

Po dodaniu bloku CSD-07 Czujnik dźwięku(CSD07) do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Ustaw port wejścia {#set_input_port}

Ustawia port, do którego podłączony jest moduł CSD07 (czujnik dźwięku).

<BlockImage module="CheeseStick/CSD07" id="set_input_port" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port do podłączenia | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.set_port('Sa')
```

## Wartość czujnika dźwięku {#get_input}

Wartość czujnika dźwięku z wybranego portu

<BlockImage module="CheeseStick/CSD07" id="get_input" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port do odczytu | Sa, Sb, Sc | port z ostatniego `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.get_input('Sa')
```
