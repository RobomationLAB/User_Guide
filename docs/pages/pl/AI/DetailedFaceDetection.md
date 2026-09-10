---
title: Szczegółowe wykrywanie twarzy
---

# Szczegółowe wykrywanie twarzy

## Deklaracja instancji {#instance}

Po dodaniu bloku Szczegółowe wykrywanie twarzy(DetailedFaceDetection) do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
detailed_face_detection = DetailedFaceDetection(0)
# Gdy instancji jest więcej
detailed_face_detection_1 = DetailedFaceDetection(1)
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Ustaw kamerę {#device}

Ustawia kamerę używaną do szczegółowego wykrywania twarzy.

<BlockImage module="AI/DetailedFaceDetection" id="device" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Nazwa urządzenia kamery | Nazwa kamery w systemie | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.device('')
```

## Załaduj model twarzy {#load_model}

Wczytuje wytrenowany model twarzy. Bez tego kroku nie da się korzystać z funkcji modułu „Szczegółowe wykrywanie twarzy".

<BlockImage module="AI/DetailedFaceDetection" id="load_model" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| wait | Pole wyboru | Czy czekać na zakończenie ładowania | TRUE / FALSE | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.load_model(wait=True)
```

## Wykryj twarz raz {#detect_once}

Znajduje twarz obecną teraz na ekranie i zaznacza ją tylko raz.

<BlockImage module="AI/DetailedFaceDetection" id="detect_once" />

### Parametry

(brak)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detect_once()
```

## Uruchom / zatrzymaj ciągłe wykrywanie twarzy {#detect_continuous}

Śledzi na bieżąco twarz obecną na ekranie i zaznacza ją na obrazie.

<BlockImage module="AI/DetailedFaceDetection" id="detect_continuous" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Działanie | uruchom(start), zatrzymaj(stop) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

# unit = "start"
detailed_face_detection.detect_continuous()
# unit = "stop"
detailed_face_detection.stop()
```

## Pokaż wynik {#display}

Decyduje, czy na obrazie z kamery ma być pokazywany wynik wykrywania twarzy.

<BlockImage module="AI/DetailedFaceDetection" id="display" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| on | Opcja listy rozwijanej | Wyświetlanie ON / OFF | pokaż(on=True), ukryj(off=False) | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.display(True)
detailed_face_detection.display(False)
```

## Współrzędne części twarzy {#face_data}

Zwraca współrzędne poszczególnych części twarzy.

<BlockImage module="AI/DetailedFaceDetection" id="face_data" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Część twarzy | twarz(face), lewe oko(left eye), prawe oko(right eye), usta(mouth), nos(nose), górna warga(upper lip), dolna warga(lower lip), lewy kącik ust(left lip), prawy kącik ust(right lip), lewa źrenica(left pupil), prawa źrenica(right pupil) | - |
| pos | Opcja listy rozwijanej | Współrzędna | x, y | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('x')
detailed_face_detection.left_eye('y')
detailed_face_detection.upper_lip('x')
detailed_face_detection.right_pupil('y')
```

## Prostokąt części twarzy {#face_square}

Zwraca położenie i rozmiar prostokąta obejmującego daną część twarzy.

<BlockImage module="AI/DetailedFaceDetection" id="face_square" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Część twarzy | twarz(face), lewe oko(left eye), prawe oko(right eye), usta(mouth) | - |
| pos | Opcja listy rozwijanej | Informacja o prostokącie | min. położenie x(min_x), maks. położenie x(max_x), min. położenie y(min_y), maks. położenie y(max_y), szerokość(width), wysokość(height), pole(area) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('min_x')
detailed_face_detection.left_eye('area')
```

## Odległość między dwiema częściami {#distance}

Zwraca odległość między dwiema częściami twarzy.

<BlockImage module="AI/DetailedFaceDetection" id="distance" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit1 | Opcja listy rozwijanej | Pierwsza część | Nazwa części twarzy | - |
| unit2 | Opcja listy rozwijanej | Druga część | Nazwa części twarzy | - |
| type | Opcja listy rozwijanej | Rodzaj odległości | odległość (pominięta albo None), odległość pozioma(horizontal), odległość pionowa(vertical) | None |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.get_distance('left_eye', 'right_eye')  # odległość
detailed_face_detection.get_distance('left_pupil', 'right_pupil', 'horizontal')  # odległość pozioma
detailed_face_detection.get_distance('upper_lip', 'lower_lip', 'vertical')  # odległość pionowa
```

## Stan modelu {#model_state}

Zwraca stan ładowania modelu twarzy.  
Zwraca 0, jeśli model nie został jeszcze wczytany, 1 w trakcie wczytywania i 2 po jego zakończeniu.

<BlockImage module="AI/DetailedFaceDetection" id="model_state" />

### Parametry

(brak)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.model_state()
```

## Czy wykryto twarz {#detected}

Czy twarz została znaleziona

<BlockImage module="AI/DetailedFaceDetection" id="detected" />

### Parametry

(brak)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detected()
```
