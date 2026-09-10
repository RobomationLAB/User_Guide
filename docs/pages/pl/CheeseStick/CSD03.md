---
title: CSD-03 Potencjometr obrotowy
---

# CSD-03 Potencjometr obrotowy

## Deklaracja instancji {#instance}

Po dodaniu bloku CSD-03 Potencjometr obrotowy(CSD03) do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Ustaw port wejścia {#set_input_port}

Ustawia port, do którego podłączony jest moduł CSD03 (potencjometr).

<BlockImage module="CheeseStick/CSD03" id="set_input_port" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port do podłączenia | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_port('Sa')
```

## Ustaw zakres wejścia {#set_input_range}

Przelicza wartość wejściową wybranego portu na podany zakres od minimum do maksimum.  
Zakres wartości wejściowej to od 0 do 255.  
Zakres wartości, na które można przeliczyć, to od -100 do 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybrany port | Sa, Sb, Sc | - |
| src_min | Wejście (pole) | Wartość minimalna źródła | Liczba całkowita od 0 do 255 | - |
| src_max | Wejście (pole) | Wartość maksymalna źródła | Liczba całkowita od 0 do 255 | - |
| dst_min | Wejście (pole) | Wartość minimalna po przeliczeniu | Liczba całkowita od -100 do 100 | - |
| dst_max | Wejście (pole) | Wartość maksymalna po przeliczeniu | Liczba całkowita od -100 do 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range('Sa', 0, 255, 0, 100)
```

## Ustaw zakres wejścia z wartością środkową {#set_input_range_median}

Przelicza wartość wejściową wybranego portu na podany zakres: minimum, wartość środkowa, maksimum.  
Zakres wartości wejściowej to od 0 do 255.  
Zakres wartości, na które można przeliczyć, to od -100 do 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range_median" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wybrany port | Sa, Sb, Sc | - |
| src_min | Wejście (pole) | Wartość minimalna źródła | Liczba całkowita od 0 do 255 | - |
| src_median | Wejście (pole) | Wartość środkowa źródła | Liczba całkowita od 0 do 255 | - |
| src_max | Wejście (pole) | Wartość maksymalna źródła | Liczba całkowita od 0 do 255 | - |
| dst_min | Wejście (pole) | Wartość minimalna po przeliczeniu | Liczba całkowita od -100 do 100 | - |
| dst_median | Wejście (pole) | Wartość środkowa po przeliczeniu | Liczba całkowita od -100 do 100 | - |
| dst_max | Wejście (pole) | Wartość maksymalna po przeliczeniu | Liczba całkowita od -100 do 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Wejście {#get_input}

Wartość wejściowa potencjometru obrotowego z wybranego portu  
Jeśli zakres wejścia nie został osobno ustawiony, wartości mieszczą się w zakresie od 0 do 255.

<BlockImage module="CheeseStick/CSD03" id="get_input" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Port do odczytu | Sa, Sb, Sc | port z ostatniego `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.get_input('Sa')
```
