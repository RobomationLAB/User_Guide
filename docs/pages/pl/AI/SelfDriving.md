---
title: Autonomiczna jazda z kamerą
---

# Autonomiczna jazda z kamerą

## Deklaracja instancji {#instance}

Po dodaniu bloku Autonomiczna jazda z kamerą(SelfDriving) do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
self_driving = SelfDriving(0)
# Gdy instancji jest więcej
self_driving_1 = SelfDriving(1)
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Ustaw kamerę {#device}

Ustawia kamerę używaną do autonomicznej jazdy z kamerą.

<BlockImage module="AI/SelfDriving" id="device" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Nazwa urządzenia kamery | Nazwa kamery w systemie | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.device('')
```

## Ustaw kolor pasa {#set_lane_color}

Ustawia kolor lewego i prawego pasa.

<BlockImage module="AI/SelfDriving" id="set_lane_color" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| left | Opcja listy rozwijanej | Kolor lewego pasa | czerwony(red), zielony(green), niebieski(blue) | - |
| right | Opcja listy rozwijanej | Kolor prawego pasa | czerwony(red), zielony(green), niebieski(blue) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.set_lane('green', 'blue')
```

## Wykryj kolor/pas jeden raz {#detect_once}

Znajduje na ekranie wybrany kolor albo pas i tylko raz zaznacza jego obszar.

<BlockImage module="AI/SelfDriving" id="detect_once" />

### Parametry

(brak)

### Python
```python
self_driving = SelfDriving(0)

self_driving.detect_once()
```

## Uruchom / zatrzymaj ciągłe wykrywanie koloru i pasa {#detect_continuous}

Śledzi na bieżąco wybrane kolory i pasy na obrazie i zaznacza ich obszary.

<BlockImage module="AI/SelfDriving" id="detect_continuous" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Działanie | uruchom(start), zatrzymaj(stop) | - |

### Python
```python
self_driving = SelfDriving(0)

# unit = "start"
self_driving.detect_continuous()
# unit = "stop"
self_driving.stop()
```

## Pokaż wynik {#display}

Decyduje, czy na obrazie z kamery ma być pokazywany wynik wykrywania kolorów i pasów.

<BlockImage module="AI/SelfDriving" id="display" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| on | Opcja listy rozwijanej | Wyświetlanie ON / OFF | pokaż(on=True), ukryj(off=False) | TRUE |

### Python
```python
self_driving = SelfDriving(0)

self_driving.display(True)
self_driving.display(False)
```

## Dane pasa {#lane_data}

Zwraca położenie albo odległość wskazanego pasa.

<BlockImage module="AI/SelfDriving" id="lane_data" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| lane | Opcja listy rozwijanej | Pas | lewy(left), prawy(right) | - |
| unit | Opcja listy rozwijanej | Rodzaj pomiaru | x, odległość(distance) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane('left', 'x')
self_driving.lane('right', 'distance')
```

## Dane koloru {#color_data}

Zwraca położenie i rozmiar wskazanego koloru.

<BlockImage module="AI/SelfDriving" id="color_data" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| color | Opcja listy rozwijanej | Nazwa koloru | czerwony(red), zielony(green), niebieski(blue) | - |
| unit | Opcja listy rozwijanej | Rodzaj współrzędnej lub rozmiaru | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color('red', 'x')
self_driving.color('green', 'y')
self_driving.color('blue', 'area')
```

## Odległość między dwoma kolorami {#color_to_color}

Zwraca odległość między dwoma kolorami.

<BlockImage module="AI/SelfDriving" id="color_to_color" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit1 | Opcja listy rozwijanej | Pierwszy kolor | czerwony(red), zielony(green), niebieski(blue) | - |
| unit2 | Opcja listy rozwijanej | Drugi kolor | czerwony(red), zielony(green), niebieski(blue) | - |
| type | Opcja listy rozwijanej | Rodzaj odległości | odległość (pominięta albo None), odległość pozioma(horizontal), odległość pionowa(vertical) | None |

### Python
```python
self_driving = SelfDriving(0)

self_driving.get_distance('red', 'blue')  # odległość
self_driving.get_distance('green', 'blue', 'horizontal')  # odległość pozioma
```

## Czy wykryto pas {#lane_detected}

Czy dany pas został znaleziony

<BlockImage module="AI/SelfDriving" id="lane_detected" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| lane | Opcja listy rozwijanej | Pas | lewy(left), prawy(right), oba(both), dowolny(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane_detected('left')
```

## Czy wykryto kolor {#color_detected}

Czy obszar danego koloru został znaleziony

<BlockImage module="AI/SelfDriving" id="color_detected" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| color | Opcja listy rozwijanej | Nazwa koloru | czerwony(red), zielony(green), niebieski(blue), dowolny(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color_detected('red')
```
