---
title: Wykrywanie ciała
---

# Wykrywanie ciała

## Deklaracja instancji {#instance}

Po dodaniu bloku Wykrywanie ciała(BodyDetection) do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
body_detection = BodyDetection(0)
# Gdy instancji jest więcej
body_detection_1 = BodyDetection(1)
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Ustaw kamerę {#device}

Ustawia kamerę używaną do wykrywania ciała.

<BlockImage module="AI/BodyDetection" id="device" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Nazwa urządzenia kamery | Nazwa kamery w systemie | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.device('')
```

## Załaduj model ciała {#load_model}

Wczytuje wytrenowany model ciała. Bez tego kroku nie da się korzystać z funkcji modułu „Wykrywanie ciała".

<BlockImage module="AI/BodyDetection" id="load_model" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| wait | Pole wyboru | Czy czekać na zakończenie ładowania | TRUE / FALSE | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.load_model(wait=True)
```

## Wykryj ciało raz {#detect_once}

Znajduje ciało obecne teraz na ekranie i zaznacza je tylko raz.

<BlockImage module="AI/BodyDetection" id="detect_once" />

### Parametry

(brak)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detect_once()
```

## Uruchom / zatrzymaj ciągłe wykrywanie ciała {#detect_continuous}

Śledzi na bieżąco ciało obecne na ekranie i zaznacza je na obrazie.

<BlockImage module="AI/BodyDetection" id="detect_continuous" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Działanie | uruchom(start), zatrzymaj(stop) | - |

### Python
```python
body_detection = BodyDetection(0)

# unit = "start"
body_detection.detect_continuous()
# unit = "stop"
body_detection.stop()
```

## Pokaż wynik {#display}

Decyduje, czy na obrazie z kamery ma być pokazywany wynik wykrywania ciała.

<BlockImage module="AI/BodyDetection" id="display" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| on | Opcja listy rozwijanej | Wyświetlanie ON / OFF | pokaż(on=True), ukryj(off=False) | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.display(True)
body_detection.display(False)
```

## Współrzędne części ciała {#body_data}

Zwraca współrzędne poszczególnych części ciała.

<BlockImage module="AI/BodyDetection" id="body_data" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Część ciała | nos(nose), usta(mouth), lewe oko(left eye), prawe oko(right eye), lewe ucho(left ear), prawe ucho(right ear), lewe ramię(left shoulder), prawe ramię(right shoulder), lewy łokieć(left elbow), prawy łokieć(right elbow), lewy nadgarstek(left wrist), prawy nadgarstek(right wrist), lewa dłoń(left hand), prawa dłoń(right hand), lewe biodro(left hip), prawe biodro(right hip), lewe kolano(left knee), prawe kolano(right knee), lewa kostka(left ankle), prawa kostka(right ankle), lewa stopa(left foot), prawa stopa(right foot) | - |
| pos | Opcja listy rozwijanej | Współrzędna | x, y | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.nose('x')
body_detection.mouth('y')
body_detection.left_eye('x')
body_detection.right_shoulder('y')
body_detection.left_hand('x')
```

## Odległość między dwiema częściami {#body_distance}

Zwraca odległość między dwiema częściami ciała.

<BlockImage module="AI/BodyDetection" id="body_distance" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit1 | Opcja listy rozwijanej | Pierwsza część ciała | (patrz tabela części ciała powyżej) | - |
| unit2 | Opcja listy rozwijanej | Druga część ciała | (patrz tabela części ciała powyżej) | - |
| type | Opcja listy rozwijanej | Rodzaj odległości | odległość (pominięta albo None), odległość pozioma(horizontal), odległość pionowa(vertical) | None |

### Python
```python
body_detection = BodyDetection(0)

body_detection.get_distance('left_shoulder', 'right_shoulder')  # odległość
body_detection.get_distance('left_wrist', 'right_wrist', 'horizontal')  # odległość pozioma
body_detection.get_distance('left_hip', 'left_knee', 'vertical')  # odległość pionowa
```

## Stan modelu {#model_state}

Zwraca stan ładowania modelu ciała.  
Zwraca 0, jeśli model nie został jeszcze wczytany, 1 w trakcie wczytywania i 2 po jego zakończeniu.

<BlockImage module="AI/BodyDetection" id="model_state" />

### Parametry

(brak)

### Python
```python
body_detection = BodyDetection(0)

body_detection.model_state()
```

## Czy wykryto ciało {#detected}

Czy ciało zostało znalezione

<BlockImage module="AI/BodyDetection" id="detected" />

### Parametry

(brak)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detected()
```
