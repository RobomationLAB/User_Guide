---
title: NeoPixel
---

# NeoPixel

## Deklaracja instancji {#instance}

Po dodaniu bloku NeoPixel do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Uruchom {#start}

Włącza moduł NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="start" />

### Parametry

(brak)

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.start()
```

## Ustaw tryb LED {#mode}

Ustawia tryb diod LED modułu NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="mode" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Tryb kanałów koloru | GRBW, GRB | GRBW |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.mode('GRBW')
```

## Ustaw kolor jednego piksela {#set_one_color}

Ustawia kolor jednego piksela o podanym numerze.  
Kolor wybrany z palety jest zamieniany na **nazwę koloru** (tekst po angielsku) i w takiej postaci trafia do kodu. (W kodzie pojawia się nazwa koloru, a nie liczbowe wartości R, G, B.)

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| idx | Wejście (pole) | Numer piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |
| color | Kolor | Wybór z palety kolorów → zamiana na nazwę koloru (po angielsku) | Nazwy kolorów: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, 'red')
```

## Ustaw kolor jednego piksela blokiem z kategorii Kolor {#set_one_color_with_block}

Ustawia kolor jednego piksela na podstawie bloku z kategorii Kolor.  
Wynik bloku koloru (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`, każdy zwraca `[R, G, B]`) jest rozpakowywany gwiazdką `*` i przekazywany jako argumenty r, g, b funkcji `set_one_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color_with_block" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| idx | Wejście (pole) | Numer piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |
| data | Wejście (kolor) | Blok z kategorii Kolor albo tablica `[R, G, B]` | [0~255, 0~255, 0~255] | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, *Utils.color('red'))
```

## Zmień kolor jednego piksela o RGB {#change_one_by_rgb}

Dodaje podane zmiany do obecnych wartości RGB wskazanego piksela i ustawia nowy kolor.

<BlockImage module="CheeseStick/NeoPixel" id="change_one_by_rgb" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| idx | Wejście (pole) | Numer piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |
| r | Wejście (pole) | Zmiana wartości czerwonej | Liczba całkowita od -255 do 255 | 0 |
| g | Wejście (pole) | Zmiana wartości zielonej | Liczba całkowita od -255 do 255 | 0 |
| b | Wejście (pole) | Zmiana wartości niebieskiej | Liczba całkowita od -255 do 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_one_color(1, 10, 0, 0)
```

## Wyłącz jeden piksel {#turn_off_one}

Gasi kolor n-tej diody LED.  
Zakres numerów diod LED to od 1 do 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_one" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| idx | Wejście (pole) | Numer piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_one(1)
```

## Ustaw wzór w zakresie {#set_range_pattern}

Ustawia wzór kolorów wszystkich diod LED z podanego zakresu.  
Zakres numerów diod LED to od 1 do 144.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_pattern" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| from_idx | Wejście (pole) | Numer początkowego piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |
| to_idx | Wejście (pole) | Numer końcowego piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |
| pattern | Opcja listy rozwijanej | Nazwa wzoru kolorów | `3_colors`, `6_colors`, `12_colors`, `red_green`, `red_blue`, `red_white`, `green_red`, `green_blue`, `green_white`, `blue_red`, `blue_green`, `blue_white`, `white_red`, `white_green`, `white_blue`, `black_red`, `black_green`, `black_blue`, `black_white`, `red_black`, `green_black`, `blue_black`, `white_black` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_pattern(1, 10, '3_colors')
```

## Ustaw kolor w zakresie {#set_range_color}

Ustawia ten sam kolor na całym podanym zakresie pikseli.  
Kolor wybrany z palety jest zamieniany na **nazwę koloru** (tekst po angielsku) i w takiej postaci trafia do kodu.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| from_idx | Wejście (pole) | Numer początkowego piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |
| to_idx | Wejście (pole) | Numer końcowego piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |
| color | Kolor | Wybór z palety kolorów → zamiana na nazwę koloru (po angielsku) | Nazwy kolorów: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, 'red')
```

## Ustaw kolor w zakresie blokiem z kategorii Kolor {#set_range_color_with_block}

Ustawia kolor zakresu pikseli na podstawie bloku z kategorii Kolor.  
Wynik bloku koloru (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) jest rozpakowywany gwiazdką `*` i przekazywany jako argumenty r, g, b funkcji `set_range_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color_with_block" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| from_idx | Wejście (pole) | Numer początkowego piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |
| to_idx | Wejście (pole) | Numer końcowego piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |
| data | Wejście (kolor) | Blok z kategorii Kolor albo tablica `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, *Utils.color('red'))
```

## Zmień kolor w zakresie o RGB {#change_range_by_rgb}

Dodaje podane zmiany RGB do obecnych kolorów zakresu pikseli i ustawia nowe kolory.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_by_rgb" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| from_idx | Wejście (pole) | Numer początkowego piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |
| to_idx | Wejście (pole) | Numer końcowego piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |
| r | Wejście (pole) | Zmiana wartości czerwonej | Liczba całkowita od -255 do 255 | 0 |
| g | Wejście (pole) | Zmiana wartości zielonej | Liczba całkowita od -255 do 255 | 0 |
| b | Wejście (pole) | Zmiana wartości niebieskiej | Liczba całkowita od -255 do 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_color(1, 10, 10, 0, 0)
```

## Wyłącz kolor w zakresie {#turn_off_range}

Gasi kolory wszystkich diod LED z podanego zakresu.  
Zakres numerów diod LED to od 1 do 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| from_idx | Wejście (pole) | Numer początkowego piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |
| to_idx | Wejście (pole) | Numer końcowego piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range(1, 10)
```

## Ustaw kolor co n pikseli {#set_range_increment_color}

Ustawia kolor co `increment` pikseli w podanym zakresie.  
Kolor wybrany z palety jest zamieniany na **nazwę koloru** (tekst po angielsku) i w takiej postaci trafia do kodu.  
(np. zapalenie tylko pikseli 1, 3, 5, ...)

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| from_idx | Wejście (pole) | Numer początkowego piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |
| to_idx | Wejście (pole) | Numer końcowego piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |
| increment | Wejście (pole) | Odstęp (liczba pikseli) | Liczba całkowita 1 lub większa | - |
| color | Kolor | Wybór z palety kolorów → zamiana na nazwę koloru (po angielsku) | Nazwy kolorów: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, 'red')
```

## Ustaw kolor co n pikseli blokiem z kategorii Kolor {#set_range_increment_color_with_block}

Ustawia kolor co n pikseli w podanym zakresie na podstawie bloku z kategorii Kolor.  
Wynik bloku koloru (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) jest rozpakowywany gwiazdką `*` i przekazywany jako argumenty r, g, b funkcji `set_range_increment_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color_with_block" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| from_idx | Wejście (pole) | Numer początkowego piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |
| to_idx | Wejście (pole) | Numer końcowego piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |
| increment | Wejście (pole) | Odstęp (liczba pikseli) | Liczba całkowita 1 lub większa | - |
| data | Wejście (kolor) | Blok z kategorii Kolor albo tablica `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, *Utils.color('red'))
```

## Zmień kolor co n pikseli o RGB {#change_range_increment_by_rgb}

Dodaje podane zmiany RGB do obecnych kolorów pikseli co n miejsc i ustawia nowe kolory.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_increment_by_rgb" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| from_idx | Wejście (pole) | Numer początkowego piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |
| to_idx | Wejście (pole) | Numer końcowego piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |
| increment | Wejście (pole) | Odstęp (liczba pikseli) | Liczba całkowita 1 lub większa | - |
| r | Wejście (pole) | Zmiana wartości czerwonej | Liczba całkowita od -255 do 255 | 0 |
| g | Wejście (pole) | Zmiana wartości zielonej | Liczba całkowita od -255 do 255 | 0 |
| b | Wejście (pole) | Zmiana wartości niebieskiej | Liczba całkowita od -255 do 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_increment_color(1, 10, 2, 10, 0, 0)
```

## Wyłącz kolor co n pikseli {#turn_off_range_increment}

Gasi kolory wszystkich diod LED z podanego zakresu i odstępu.  
Zakres numerów diod LED to od 1 do 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range_increment" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| from_idx | Wejście (pole) | Numer początkowego piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |
| to_idx | Wejście (pole) | Numer końcowego piksela (licząc od 1) | Liczba całkowita 1 lub większa | - |
| increment | Wejście (pole) | Odstęp (liczba pikseli) | Liczba całkowita 1 lub większa | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range_increment(1, 10, 2)
```

## Przesuń / obróć {#shift}

Przesuwa albo obraca diody LED o podaną liczbę miejsc w wybranym kierunku.  
Zakres wartości do wyboru to od 1 do 143.

<BlockImage module="CheeseStick/NeoPixel" id="shift" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Rodzaj działania | przesuń(shift), obróć(rotate) | - |
| direction | Opcja listy rozwijanej | Kierunek | w lewo(left), w prawo(right) | - |
| pixel | Wejście (pole) | Liczba pikseli przesunięcia | Liczba całkowita 1 lub większa | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

# unit = 'shift'
neopixel.shift('left', 1)

# unit = 'rotate'
neopixel.rotate('left', 1)
```

## Ustaw jasność {#set_brightness}

Ustawia jasność modułu NeoPixel.  
Zakres wartości do wyboru to od 0 do 100.

<BlockImage module="CheeseStick/NeoPixel" id="set_brightness" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| value | Wejście (pole) | Jasność | Liczba całkowita od 0 do 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_brightness(50)
```

## Zmień jasność {#change_brightness}

Zmienia jasność modułu NeoPixel.  
Zakres wartości do wyboru to od -100 do 100.

<BlockImage module="CheeseStick/NeoPixel" id="change_brightness" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| value | Wejście (pole) | Zmiana jasności | Liczba całkowita od -100 do 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_brightness(10)
```
