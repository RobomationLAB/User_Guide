---
title: Распознавание маркеров ArUco
---

# Распознавание маркеров ArUco

## Объявление экземпляра {#instance}

После добавления блока Распознавание маркеров ArUco(ArucoMarker) в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:

```python
aruco_marker = ArucoMarker(0)
# Когда экземпляров несколько
aruco_marker_1 = ArucoMarker(1)
```

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| index | Пункт выпадающего списка | Номер экземпляра (начиная с 0) | Целое число 0 или больше | 0 |


## Выбрать камеру {#device}

Задаёт камеру, используемую для распознавания маркеров ArUco.

<BlockImage module="AI/ArucoMarker" id="device" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Название устройства камеры | Название камеры в системе | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.device('')
```

## Установить макс. число маркеров {#max_count}

Задаёт, сколько маркеров можно распознать самое большее. Диапазон числа маркеров — от 0 до 10.

<BlockImage module="AI/ArucoMarker" id="max_count" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Максимальное число маркеров | Целое число от 0 до 10 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.max_count(5)
```

## Распознать маркер один раз {#detect_once}

Находит маркеры, которые сейчас на экране, и только один раз отмечает их области.

<BlockImage module="AI/ArucoMarker" id="detect_once" />

### Параметры

(нет)

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.detect_once()
```

## Запустить / остановить непрерывное распознавание маркеров {#detect_continuous}

Непрерывно отслеживает маркеры на экране и отмечает их области на изображении.

<BlockImage module="AI/ArucoMarker" id="detect_continuous" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Действие | запустить(start), остановить(stop) | - |

### Python
```python
aruco_marker = ArucoMarker(0)

# unit = "start"
aruco_marker.detect_continuous()
# unit = "stop"
aruco_marker.stop()
```

## Показать результат {#display}

Определяет, показывать ли на изображении с камеры результат распознавания маркеров.

<BlockImage module="AI/ArucoMarker" id="display" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| on | Пункт выпадающего списка | Отображение ON / OFF | показать(on=True), скрыть(off=False) | TRUE |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.display(True)
aruco_marker.display(False)
```

## Данные маркера {#marker_data}

Возвращает положение и размер маркера с указанным ID.

<BlockImage module="AI/ArucoMarker" id="marker_data" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | ID маркера | Целое число 0 или больше | - |
| unit | Пункт выпадающего списка | Вид измерения | x, y, min_x, max_x, min_y, max_y, width, height, area, rotation | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker(0, 'x')
aruco_marker.marker(3, 'area')
```

## Расстояние между маркерами {#marker_to_marker}

Возвращает расстояние между двумя маркерами.

<BlockImage module="AI/ArucoMarker" id="marker_to_marker" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit1 | Ввод (блок) | ID первого маркера | Целое число 0 или больше | - |
| unit2 | Ввод (блок) | ID второго маркера | Целое число 0 или больше | - |
| type | Пункт выпадающего списка | Вид расстояния | расстояние (пропущено или None), расстояние по горизонтали(horizontal), расстояние по вертикали(vertical) | None |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.get_distance(0, 1)  # расстояние
aruco_marker.get_distance(0, 2, 'horizontal')  # расстояние по горизонтали
```

## Маркер распознан {#marker_detected}

Найден ли маркер с указанным id

<BlockImage module="AI/ArucoMarker" id="marker_detected" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | ID маркера | Целое число 0 или больше | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker_detected(0)
```
