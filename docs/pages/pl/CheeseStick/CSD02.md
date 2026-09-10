---
title: CSD-02 Dioda LED RGB
---

# CSD-02 Dioda LED RGB

## Deklaracja instancji {#instance}

Po dodaniu bloku CSD-02 Dioda LED RGB(CSD02) do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Uruchom diodę LED RGB {#start}

Rozpoczyna korzystanie z diody LED RGB.  
Bez tego bloku dioda LED RGB nie zostanie włączona.

<BlockImage module="CheeseStick/CSD02" id="start" />

### Parametry

(brak)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.start()
```

## Ustaw kolor {#set_color}

Ustawia kolor diody LED modułu CSD02 na wybrany kolor.  
Kolor wybrany z palety jest zamieniany na **nazwę koloru** (tekst po angielsku) i w takiej postaci trafia do kodu. (W kodzie pojawia się nazwa koloru, a nie liczbowe wartości R, G, B.)

<BlockImage module="CheeseStick/CSD02" id="set_color" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| color | Kolor | Wybór z palety kolorów → zamiana na nazwę koloru (po angielsku) | Nazwy kolorów: `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'violet'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color('orange')
```

## Ustaw kolor blokiem z kategorii Kolor {#set_color_with_block}

Ustawia kolor diody LED modułu CSD02 na podstawie bloku z kategorii Kolor (np. tablicy `[R, G, B]`).

<BlockImage module="CheeseStick/CSD02" id="set_color_with_block" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (kolor) | Wynik bloku z kategorii Kolor albo tablica `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color(*Utils.color('yellow'))
```

## Zmień kolor o RGB {#change_by_rgb}

Dodaje wpisane zmiany R, G i B do obecnego koloru diody LED i ustawia nowy kolor.

<BlockImage module="CheeseStick/CSD02" id="change_by_rgb" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| r | Wejście (pole) | Zmiana wartości czerwonej | Liczba całkowita od -255 do 255 | 0 |
| g | Wejście (pole) | Zmiana wartości zielonej | Liczba całkowita od -255 do 255 | 0 |
| b | Wejście (pole) | Zmiana wartości niebieskiej | Liczba całkowita od -255 do 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.change_color(10, 0, 0)
```

## Wyłącz LED {#turn_off}

Gasi kolor diody LED RGB.

<BlockImage module="CheeseStick/CSD02" id="turn_off" />

### Parametry

(brak)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.turn_off()
```
