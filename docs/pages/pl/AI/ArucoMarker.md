---
title: Wykrywanie znaczników ArUco
---

# Wykrywanie znaczników ArUco

## Deklaracja instancji {#instance}

Po dodaniu bloku Wykrywanie znaczników ArUco(ArucoMarker) do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
aruco_marker = ArucoMarker(0)
# Gdy instancji jest więcej
aruco_marker_1 = ArucoMarker(1)
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Ustaw kamerę {#device}

Ustawia kamerę używaną do wykrywania znaczników ArUco.

<BlockImage module="AI/ArucoMarker" id="device" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Nazwa urządzenia kamery | Nazwa kamery w systemie | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.device('')
```

## Ustaw maks. liczbę znaczników {#max_count}

Ustawia, ile znaczników można rozpoznać najwyżej. Zakres liczby znaczników to od 0 do 10.

<BlockImage module="AI/ArucoMarker" id="max_count" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | Maksymalna liczba znaczników | Liczba całkowita od 0 do 10 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.max_count(5)
```

## Wykryj znacznik jeden raz {#detect_once}

Znajduje znaczniki obecne teraz na ekranie i tylko raz zaznacza ich obszary.

<BlockImage module="AI/ArucoMarker" id="detect_once" />

### Parametry

(brak)

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.detect_once()
```

## Uruchom / zatrzymaj ciągłe wykrywanie znaczników {#detect_continuous}

Śledzi na bieżąco znaczniki obecne na ekranie i zaznacza ich obszary na obrazie.

<BlockImage module="AI/ArucoMarker" id="detect_continuous" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Działanie | uruchom(start), zatrzymaj(stop) | - |

### Python
```python
aruco_marker = ArucoMarker(0)

# unit = "start"
aruco_marker.detect_continuous()
# unit = "stop"
aruco_marker.stop()
```

## Pokaż wynik {#display}

Decyduje, czy na obrazie z kamery ma być pokazywany wynik wykrywania znaczników.

<BlockImage module="AI/ArucoMarker" id="display" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| on | Opcja listy rozwijanej | Wyświetlanie ON / OFF | pokaż(on=True), ukryj(off=False) | TRUE |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.display(True)
aruco_marker.display(False)
```

## Dane znacznika {#marker_data}

Zwraca położenie i rozmiar znacznika o wskazanym ID.

<BlockImage module="AI/ArucoMarker" id="marker_data" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | ID znacznika | Liczba całkowita 0 lub większa | - |
| unit | Opcja listy rozwijanej | Rodzaj pomiaru | x, y, min_x, max_x, min_y, max_y, width, height, area, rotation | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker(0, 'x')
aruco_marker.marker(3, 'area')
```

## Odległość między znacznikami {#marker_to_marker}

Zwraca odległość między dwoma znacznikami.

<BlockImage module="AI/ArucoMarker" id="marker_to_marker" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit1 | Wejście (blok) | ID pierwszego znacznika | Liczba całkowita 0 lub większa | - |
| unit2 | Wejście (blok) | ID drugiego znacznika | Liczba całkowita 0 lub większa | - |
| type | Opcja listy rozwijanej | Rodzaj odległości | odległość (pominięta albo None), odległość pozioma(horizontal), odległość pionowa(vertical) | None |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.get_distance(0, 1)  # odległość
aruco_marker.get_distance(0, 2, 'horizontal')  # odległość pozioma
```

## Czy wykryto znacznik {#marker_detected}

Czy znaleziono znacznik o podanym id

<BlockImage module="AI/ArucoMarker" id="marker_detected" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście (blok) | ID znacznika | Liczba całkowita 0 lub większa | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker_detected(0)
```
