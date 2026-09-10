---
title: CSD-10 Czujnik oświetlenia ALS
---

# CSD-10 Czujnik oświetlenia ALS

## Deklaracja instancji {#instance}

Po dodaniu bloku CSD-10 Czujnik oświetlenia ALS(CSD10) do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Ustaw port wejścia {#set_input_port}

Ustawia port, do którego podłączony jest moduł CSD10 (czujnik oświetlenia).

<BlockImage module="CheeseStick/CSD10" id="set_input_port" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port do podłączenia | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.set_port('Sa')
```

## Wartość czujnika oświetlenia {#get_input}

Wartość czujnika oświetlenia z wybranego portu

<BlockImage module="CheeseStick/CSD10" id="get_input" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port do odczytu | Sa, Sb, Sc | port z ostatniego `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.get_input('Sa')
```
