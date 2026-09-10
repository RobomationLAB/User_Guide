---
title: Wykrywanie twarzy
---

# Wykrywanie twarzy

## Deklaracja instancji {#instance}

Po dodaniu bloku Wykrywanie twarzy(FaceDetection) do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
face_detection = FaceDetection(0)
# Gdy instancji jest więcej
face_detection_1 = FaceDetection(1)
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Ustaw kamerę {#device}

Ustawia kamerę używaną do wykrywania twarzy.

<BlockImage module="AI/FaceDetection" id="device" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Nazwa urządzenia kamery | Nazwa kamery w systemie | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.device('')
```

## Załaduj model twarzy {#load_model}

Wczytuje wytrenowany model twarzy. Bez tego kroku nie da się korzystać z funkcji modułu „Wykrywanie twarzy".

<BlockImage module="AI/FaceDetection" id="load_model" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| wait | Pole wyboru | Czy czekać na zakończenie ładowania | TRUE / FALSE | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.load_model(wait=True)
```

## Wykryj twarz raz {#detect_once}

Znajduje twarz obecną teraz na ekranie i zaznacza ją tylko raz.

<BlockImage module="AI/FaceDetection" id="detect_once" />

### Parametry

(brak)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detect_once()
```

## Uruchom / zatrzymaj ciągłe wykrywanie twarzy {#detect_continuous}

Śledzi na bieżąco twarz obecną na ekranie i zaznacza ją na obrazie.

<BlockImage module="AI/FaceDetection" id="detect_continuous" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Działanie | uruchom(start), zatrzymaj(stop) | - |

### Python
```python
face_detection = FaceDetection(0)

# unit = "start"
face_detection.detect_continuous()
# unit = "stop"
face_detection.stop()
```

## Pokaż wynik {#display}

Decyduje, czy na obrazie z kamery ma być pokazywany wynik wykrywania twarzy.

<BlockImage module="AI/FaceDetection" id="display" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| on | Opcja listy rozwijanej | Wyświetlanie ON / OFF | pokaż(on=True), ukryj(off=False) | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.display(True)
face_detection.display(False)
```

## Położenie części twarzy {#face_data}

Zwraca współrzędne położenia twarzy albo jej części.

<BlockImage module="AI/FaceDetection" id="face_data" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Część twarzy | twarz(face), lewe oko(left eye), prawe oko(right eye), lewe ucho(left ear), prawe ucho(right ear), nos(nose), usta(mouth) | - |
| pos | Opcja listy rozwijanej | Rodzaj współrzędnej | x, y | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('x')
face_detection.left_eye('y')
face_detection.right_eye('x')
face_detection.left_ear('x')
face_detection.right_ear('y')
face_detection.nose('x')
face_detection.mouth('y')
```

## Prostokąt twarzy {#face_square}

Zwraca położenie i rozmiar prostokąta obejmującego twarz.

<BlockImage module="AI/FaceDetection" id="face_square" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| pos | Opcja listy rozwijanej | Informacja o prostokącie | min. położenie x(min_x), maks. położenie x(max_x), min. położenie y(min_y), maks. położenie y(max_y), szerokość(width), wysokość(height), pole(area) | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('min_x')
face_detection.face('width')
face_detection.face('area')
```

## Odległość między dwiema częściami {#distance}

Zwraca odległość między dwiema częściami twarzy.

<BlockImage module="AI/FaceDetection" id="distance" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit1 | Opcja listy rozwijanej | Pierwsza część | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| unit2 | Opcja listy rozwijanej | Druga część | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| type | Opcja listy rozwijanej | Rodzaj odległości | odległość (pominięta albo None), odległość pozioma(horizontal), odległość pionowa(vertical) | None |

### Python
```python
face_detection = FaceDetection(0)

face_detection.get_distance('left_eye', 'right_eye')  # odległość
face_detection.get_distance('left_eye', 'right_eye', 'horizontal')  # odległość pozioma
face_detection.get_distance('nose', 'mouth', 'vertical')  # odległość pionowa
```

## Stan modelu {#model_state}

Zwraca stan ładowania modelu twarzy.  
Zwraca 0, jeśli model nie został jeszcze wczytany, 1 w trakcie wczytywania i 2 po jego zakończeniu.

<BlockImage module="AI/FaceDetection" id="model_state" />

### Parametry

(brak)

### Python
```python
face_detection = FaceDetection(0)

face_detection.model_state()
```

## Czy wykryto twarz {#detected}

Czy twarz została znaleziona

<BlockImage module="AI/FaceDetection" id="detected" />

### Parametry

(brak)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detected()
```
