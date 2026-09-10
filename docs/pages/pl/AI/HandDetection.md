---
title: Wykrywanie dłoni
---

# Wykrywanie dłoni

## Deklaracja instancji {#instance}

Po dodaniu bloku Wykrywanie dłoni(HandDetection) do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
hand_detection = HandDetection(0)
# Gdy instancji jest więcej
hand_detection_1 = HandDetection(1)
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Ustaw kamerę {#device}

Ustawia kamerę używaną do wykrywania dłoni.

<BlockImage module="AI/HandDetection" id="device" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Nazwa urządzenia kamery | Nazwa kamery w systemie | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.device('')
```

## Załaduj model dłoni {#load_model}

Wczytuje wytrenowany model dłoni. Bez tego kroku nie da się korzystać z funkcji modułu „Wykrywanie dłoni".

<BlockImage module="AI/HandDetection" id="load_model" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| wait | Pole wyboru | Czy czekać na zakończenie ładowania | TRUE / FALSE | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.load_model(wait=True)
```

## Ustaw cel wykrywania {#max_hands}

Decyduje, czy przy wykrywaniu dłoni brana jest pod uwagę jedna ręka, czy obie.

<BlockImage module="AI/HandDetection" id="max_hands" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Liczba rąk | jedna ręka(one), obie ręce(both) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.max_hands('one')
hand_detection.max_hands('both')
```

## Wykryj dłoń raz {#detect_once}

Znajduje dłoń obecną teraz na ekranie i zaznacza ją tylko raz.

<BlockImage module="AI/HandDetection" id="detect_once" />

### Parametry

(brak)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detect_once()
```

## Uruchom / zatrzymaj ciągłe wykrywanie dłoni {#detect_continuous}

Śledzi na bieżąco dłoń obecną na ekranie i zaznacza ją na obrazie.

<BlockImage module="AI/HandDetection" id="detect_continuous" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Działanie | uruchom(start), zatrzymaj(stop) | - |

### Python
```python
hand_detection = HandDetection(0)

# unit = "start"
hand_detection.detect_continuous()
# unit = "stop"
hand_detection.stop()
```

## Pokaż wynik {#display}

Decyduje, czy na obrazie z kamery ma być pokazywany wynik wykrywania dłoni.

<BlockImage module="AI/HandDetection" id="display" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| on | Opcja listy rozwijanej | Wyświetlanie ON / OFF | pokaż(on=True), ukryj(off=False) | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.display(True)
hand_detection.display(False)
```

## Współrzędne części dłoni {#hand_data}

Zwraca położenie śródręcza albo nadgarstka wybranej ręki.

<BlockImage module="AI/HandDetection" id="hand_data" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| side | Opcja listy rozwijanej | Która ręka | lewa(left), prawa(right) | - |
| unit | Opcja listy rozwijanej | Część dłoni | śródręcze(palm), nadgarstek(wrist) | - |
| pos | Opcja listy rozwijanej | Rodzaj współrzędnej lub rozmiaru | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'palm', 'x')
hand_detection.hand('right', 'wrist', 'y')
hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Współrzędne stawów palców {#joint_data}

Zwraca współrzędne stawów wybranego palca.

<BlockImage module="AI/HandDetection" id="joint_data" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| side | Opcja listy rozwijanej | Która ręka | lewa(left), prawa(right) | - |
| unit | Opcja listy rozwijanej | Palec | kciuk(thumb), wskazujący(index), środkowy(middle), serdeczny(ring), mały(pinky) | - |
| joint | Opcja listy rozwijanej | Położenie stawu | pierwszy staw(first), drugi staw(second), trzeci staw(third), koniec(last) | - |
| pos | Opcja listy rozwijanej | Współrzędna | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.finger('left', 'index', 'first', 'x')
hand_detection.finger('right', 'thumb', 'last', 'y')
```

## Prostokąt dłoni {#hand_square}

Zwraca położenie i rozmiar prostokąta obejmującego wybraną dłoń.

<BlockImage module="AI/HandDetection" id="hand_square" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| side | Opcja listy rozwijanej | Która ręka | lewa(left), prawa(right) | - |
| unit | Opcja listy rozwijanej | Część dłoni | dłoń(hand), śródręcze(palm) | - |
| pos | Opcja listy rozwijanej | Informacja o prostokącie | min. pozycja x(min_x), maks. pozycja x(max_x), min. pozycja y(min_y), maks. pozycja y(max_y), szerokość(width), wysokość(height), pole(area) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Odległość między dłońmi {#hand_to_hand_distance}

Zwraca odległość między dwiema częściami dłoni.

<BlockImage module="AI/HandDetection" id="hand_to_hand_distance" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit1 | Wejście (ciąg znaków) | Pierwsza część dłoni | dłoń: `'side_unit'` (np. `'left_palm'`). side=left/right, unit=palm/wrist/hand  | - |
| unit2 | Wejście (ciąg znaków) | Druga część dłoni | dłoń: `'side_unit'` (np. `'right_palm'`). side=left/right, unit=palm/wrist/hand | - |
| type | Opcja listy rozwijanej | Rodzaj odległości | odległość (pominięta albo None), odległość pozioma(horizontal), odległość pionowa(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# dłoń ↔ dłoń / odległość
hand_detection.get_distance('left_palm', 'right_palm')  
```

## Odległość między dłonią a palcem {#hand_to_joint_distance}

Zwraca odległość między częścią dłoni a stawem palca.

<BlockImage module="AI/HandDetection" id="hand_to_joint_distance" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit1 | Wejście (ciąg znaków) | Pierwsza część | dłoń: `'side_unit'` (np. `'left_palm'`).side=left/right, unit=palm/wrist/hand | - |
| unit2 | Wejście (ciąg znaków) | Druga część | palec: `'side_unit_joint'` (np. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Opcja listy rozwijanej | Rodzaj odległości | odległość (pominięta albo None), odległość pozioma(horizontal), odległość pionowa(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# dłoń ↔ staw palca / odległość pozioma
hand_detection.get_distance('left_palm', 'right_index_first')
```

## Odległość między palcami {#joint_to_joint_distance}

Zwraca odległość między dwoma stawami palców.

<BlockImage module="AI/HandDetection" id="joint_to_joint_distance" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit1 | Wejście (ciąg znaków) | Pierwsza część | palec: `'side_unit_joint'` (np. `'left_thumb_last'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| unit2 | Wejście (ciąg znaków) | Druga część | palec: `'side_unit_joint'` (np. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Opcja listy rozwijanej | Rodzaj odległości | odległość (pominięta albo None), odległość pozioma(horizontal), odległość pionowa(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# staw palca ↔ staw palca / odległość pionowa
hand_detection.get_distance('left_thumb_last', 'right_index_first', 'vertical')
```

## Stan modelu {#model_state}

Zwraca stan ładowania modelu dłoni.  
Zwraca 0, jeśli model nie został jeszcze wczytany, 1 w trakcie wczytywania i 2 po jego zakończeniu.

<BlockImage module="AI/HandDetection" id="model_state" />

### Parametry

(brak)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.model_state()
```

## Czy wykryto dłoń {#detected}

Czy dłoń została znaleziona

<BlockImage module="AI/HandDetection" id="detected" />

### Parametry

(brak)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detected()
```
