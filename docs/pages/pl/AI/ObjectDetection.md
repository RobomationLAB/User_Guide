---
title: Wykrywanie obiektów
---

# Wykrywanie obiektów

## Deklaracja instancji {#instance}

Po dodaniu bloku Wykrywanie obiektów(ObjectDetection) do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
object_detection = ObjectDetection(0)
# Gdy instancji jest więcej
object_detection_1 = ObjectDetection(1)
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Ustaw kamerę {#device}

Ustawia kamerę używaną do wykrywania obiektów.

<BlockImage module="AI/ObjectDetection" id="device" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Nazwa urządzenia kamery | Nazwa kamery w systemie | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.device('')
```

## Załaduj model obiektów {#load_model}

Wczytuje wytrenowany model obiektów. Bez tego kroku nie da się korzystać z funkcji modułu „Wykrywanie obiektów".

<BlockImage module="AI/ObjectDetection" id="load_model" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| wait | Pole wyboru | Czy czekać na zakończenie ładowania | TRUE / FALSE | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.load_model(wait=True)
```

## Ustaw maksymalną liczbę obiektów {#max_objects}

Ustawia, ile obiektów można znaleźć najwyżej. Zakres liczby obiektów to od 0 do 10.

<BlockImage module="AI/ObjectDetection" id="max_objects" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Maksymalna liczba obiektów | Liczba całkowita od 0 do 10 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.max_objects(5)
```

## Ustaw próg pewności {#confidence_threshold}

Ustawia najniższe prawdopodobieństwo (pewność) przy wykrywaniu obiektów. Obiekt pojawia się na ekranie tylko wtedy, gdy pewność jest nie mniejsza niż podana. Zakres pewności to od 0 do 1.

<BlockImage module="AI/ObjectDetection" id="confidence_threshold" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Próg pewności | Liczba rzeczywista od 0 do 1 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.confidence_threshold(0.5)
```

## Wykryj obiekty raz {#detect_once}

Znajduje obiekty obecne teraz na ekranie i zaznacza je tylko raz.

<BlockImage module="AI/ObjectDetection" id="detect_once" />

### Parametry

(brak)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detect_once()
```

## Uruchom / zatrzymaj ciągłe wykrywanie obiektów {#detect_continuous}

Śledzi na bieżąco obiekty obecne na ekranie i zaznacza je na obrazie.

<BlockImage module="AI/ObjectDetection" id="detect_continuous" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Działanie | uruchom(start), zatrzymaj(stop) | - |

### Python
```python
object_detection = ObjectDetection(0)

# unit = "start"
object_detection.detect_continuous()
# unit = "stop"
object_detection.stop()
```

## Pokaż wynik {#display}

Decyduje, czy na obrazie z kamery ma być pokazywany wynik wykrywania obiektów.

<BlockImage module="AI/ObjectDetection" id="display" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| on | Opcja listy rozwijanej | Wyświetlanie ON / OFF | pokaż(on=True), ukryj(off=False) | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.display(True)
object_detection.display(False)
```

## Położenie obiektu {#object_data}

Zwraca położenie i rozmiar wskazanego obiektu.

<BlockImage module="AI/ObjectDetection" id="object_data" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Nazwa obiektu | 80 klas obiektów (`'person'`, `'bicycle'`, `'car'`, `'motorcycle'`, `'airplane'`, `'bus'`, `'cat'`, `'dog'`, `'apple'`, `'cup'`, `'laptop'`, `'cell_phone'` i inne) | - |
| pos | Opcja listy rozwijanej | Współrzędna | x, y | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'x')
object_detection.object('bicycle', 'y')
```

## Prostokąt obiektu {#object_square}

Zwraca położenie i rozmiar prostokąta obejmującego wskazany obiekt.

<BlockImage module="AI/ObjectDetection" id="object_square" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Nazwa obiektu | 80 klas obiektów | - |
| pos | Opcja listy rozwijanej | Informacja o prostokącie | min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'width')
object_detection.object('car', 'area')
```

## Odległość między dwoma obiektami {#object_distance}

Zwraca odległość między dwiema klasami obiektów.

<BlockImage module="AI/ObjectDetection" id="object_distance" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit1 | Opcja listy rozwijanej | Nazwa pierwszego obiektu | 80 klas obiektów | - |
| unit2 | Opcja listy rozwijanej | Nazwa drugiego obiektu | 80 klas obiektów | - |
| type | Opcja listy rozwijanej | Rodzaj odległości | odległość (pominięta albo None), odległość pozioma(horizontal), odległość pionowa(vertical) | None |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.get_distance('person', 'bicycle')  # odległość
object_detection.get_distance('person', 'car', 'horizontal')  # odległość pozioma
```

## Pewność obiektu {#object_confidence}

Prawdopodobieństwo (pewność), że wybrany obiekt został rozpoznany poprawnie

<BlockImage module="AI/ObjectDetection" id="object_confidence" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Nazwa obiektu | 80 klas obiektów | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_confidence('person')
```

## Stan modelu {#model_state}

Zwraca stan ładowania modelu obiektów.  
Zwraca 0, jeśli model nie został jeszcze wczytany, 1 w trakcie wczytywania i 2 po jego zakończeniu.

<BlockImage module="AI/ObjectDetection" id="model_state" />

### Parametry

(brak)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.model_state()
```

## Czy wykryto obiekt {#detected}

Czy obiekt został znaleziony

<BlockImage module="AI/ObjectDetection" id="detected" />

### Parametry

(brak)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detected()
```

## Czy wykryto dany obiekt {#object_detected}

Czy wybrany obiekt został znaleziony

<BlockImage module="AI/ObjectDetection" id="object_detected" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Nazwa obiektu | 80 klas obiektów | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_detected('person')
```
