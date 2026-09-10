---
title: Wykrywanie kolorów
---

# Wykrywanie kolorów

## Deklaracja instancji {#instance}

Po dodaniu bloku Wykrywanie kolorów(ColorDetection) do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
color_detection = ColorDetection(0)
# Gdy instancji jest więcej
color_detection_1 = ColorDetection(1)
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Ustaw kamerę {#device}

Ustawia kamerę używaną do wykrywania kolorów.

<BlockImage module="AI/ColorDetection" id="device" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Nazwa urządzenia kamery | Nazwa kamery w systemie | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.device('')
```

## Dodaj kolor {#register_color}

Dodaje kolor, który ma być rozpoznawany przy wykrywaniu kolorów.

<BlockImage module="AI/ColorDetection" id="register_color" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| color | Opcja listy rozwijanej | Nazwa koloru | czarny(black), czerwony(red), żółty(yellow), zielony(green), cyjan(cyan), niebieski(blue), magenta(magenta), biały(white) | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.register_color('red', wait=True)
```

## Usuń kolor {#delete_color}

Usuwa dany kolor spośród kolorów rozpoznawanych przy wykrywaniu kolorów.

<BlockImage module="AI/ColorDetection" id="delete_color" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| color | Opcja listy rozwijanej | Nazwa koloru | czarny(black), czerwony(red), żółty(yellow), zielony(green), cyjan(cyan), niebieski(blue), magenta(magenta), biały(white) | - |
| wait | Pole wyboru | Czy czekać na zakończenie | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.delete_color('blue', wait=True)
```

## Ustaw warunek pola {#area_condition}

Określa najmniejsze pole obszaru koloru, jaki ma być rozpoznawany. Obszar pojawia się na ekranie tylko wtedy, gdy jego pole jest nie mniejsze niż podane.

<BlockImage module="AI/ColorDetection" id="area_condition" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Wartość warunku pola | Liczba rzeczywista 0 lub większa | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.area_condition(50)
```

## Wykryj kolor raz {#detect_once}

Spośród rozpoznawanych kolorów znajduje te, które są teraz na ekranie, i tylko raz zaznacza ich obszary.

<BlockImage module="AI/ColorDetection" id="detect_once" />

### Parametry

(brak)

### Python
```python
color_detection = ColorDetection(0)

color_detection.detect_once()
```

## Uruchom / zatrzymaj ciągłe wykrywanie koloru {#detect_continuous}

Spośród rozpoznawanych kolorów śledzi na bieżąco te, które są teraz na ekranie, i zaznacza ich obszary.

<BlockImage module="AI/ColorDetection" id="detect_continuous" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Działanie | uruchom(start), zatrzymaj(stop) | - |

### Python
```python
color_detection = ColorDetection(0)

# unit = "start"
color_detection.detect_continuous()
# unit = "stop"
color_detection.stop()
```

## Pokaż wynik {#display}

Decyduje, czy na obrazie z kamery ma być pokazywany wynik wykrywania kolorów.

<BlockImage module="AI/ColorDetection" id="display" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| on | Opcja listy rozwijanej | Wyświetlanie ON / OFF | pokaż(on=True), ukryj(off=False) | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.display(True)
color_detection.display(False)
```

## Informacje o kolorze {#color_data}

Zwraca położenie i rozmiar wskazanego koloru.

<BlockImage module="AI/ColorDetection" id="color_data" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| color | Opcja listy rozwijanej | Nazwa koloru | czarny(black), czerwony(red), żółty(yellow), zielony(green), cyjan(cyan), niebieski(blue), magenta(magenta), biały(white) | - |
| pos | Opcja listy rozwijanej | Rodzaj współrzędnej lub rozmiaru | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color('red', 'x')
color_detection.color('green', 'y')
color_detection.color('blue', 'area')
```

## Czy wykryto dany kolor {#color_detected}

Czy wybrany kolor został znaleziony

<BlockImage module="AI/ColorDetection" id="color_detected" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| color | Opcja listy rozwijanej | Nazwa koloru | czarny(black), czerwony(red), żółty(yellow), zielony(green), cyjan(cyan), niebieski(blue), magenta(magenta), biały(white) | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color_detected('red')
```
