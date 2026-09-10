---
title: Детальное распознавание лица
---

# Детальное распознавание лица

## Объявление экземпляра {#instance}

После добавления блока Детальное распознавание лица(DetailedFaceDetection) в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:

```python
detailed_face_detection = DetailedFaceDetection(0)
# Когда экземпляров несколько
detailed_face_detection_1 = DetailedFaceDetection(1)
```

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| index | Пункт выпадающего списка | Номер экземпляра (начиная с 0) | Целое число 0 или больше | 0 |


## Выбрать камеру {#device}

Задаёт камеру, используемую для детального распознавания лица.

<BlockImage module="AI/DetailedFaceDetection" id="device" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Название устройства камеры | Название камеры в системе | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.device('')
```

## Загрузить модель лица {#load_model}

Загружает обученную модель лица. Без этого шага функции модуля «Детальное распознавание лица» использовать нельзя.

<BlockImage module="AI/DetailedFaceDetection" id="load_model" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| wait | Флажок | Ждать ли завершения загрузки | TRUE / FALSE | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.load_model(wait=True)
```

## Обнаружить лицо один раз {#detect_once}

Находит лицо, которое сейчас на экране, и отмечает его только один раз.

<BlockImage module="AI/DetailedFaceDetection" id="detect_once" />

### Параметры

(нет)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detect_once()
```

## Запустить / остановить непрерывное обнаружение лица {#detect_continuous}

Непрерывно отслеживает лицо на экране и отмечает его на изображении.

<BlockImage module="AI/DetailedFaceDetection" id="detect_continuous" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Действие | запустить(start), остановить(stop) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

# unit = "start"
detailed_face_detection.detect_continuous()
# unit = "stop"
detailed_face_detection.stop()
```

## Показать результат {#display}

Определяет, показывать ли на изображении с камеры результат распознавания лица.

<BlockImage module="AI/DetailedFaceDetection" id="display" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| on | Пункт выпадающего списка | Отображение ON / OFF | показать(on=True), скрыть(off=False) | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.display(True)
detailed_face_detection.display(False)
```

## Координаты частей лица {#face_data}

Возвращает координаты отдельных частей лица.

<BlockImage module="AI/DetailedFaceDetection" id="face_data" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Часть лица | лицо(face), левый глаз(left eye), правый глаз(right eye), рот(mouth), нос(nose), верхняя губа(upper lip), нижняя губа(lower lip), левый уголок рта(left lip), правый уголок рта(right lip), левый зрачок(left pupil), правый зрачок(right pupil) | - |
| pos | Пункт выпадающего списка | Координата | x, y | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('x')
detailed_face_detection.left_eye('y')
detailed_face_detection.upper_lip('x')
detailed_face_detection.right_pupil('y')
```

## Прямоугольник части лица {#face_square}

Возвращает положение и размер прямоугольника, охватывающего выбранную часть лица.

<BlockImage module="AI/DetailedFaceDetection" id="face_square" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Часть лица | лицо(face), левый глаз(left eye), правый глаз(right eye), рот(mouth) | - |
| pos | Пункт выпадающего списка | Сведения о прямоугольнике | мин. позиция x(min_x), макс. позиция x(max_x), мин. позиция y(min_y), макс. позиция y(max_y), ширина(width), высота(height), площадь(area) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('min_x')
detailed_face_detection.left_eye('area')
```

## Расстояние между двумя частями {#distance}

Возвращает расстояние между двумя частями лица.

<BlockImage module="AI/DetailedFaceDetection" id="distance" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit1 | Пункт выпадающего списка | Первая часть | Название части лица | - |
| unit2 | Пункт выпадающего списка | Вторая часть | Название части лица | - |
| type | Пункт выпадающего списка | Вид расстояния | расстояние (пропущено или None), расстояние по горизонтали(horizontal), расстояние по вертикали(vertical) | None |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.get_distance('left_eye', 'right_eye')  # расстояние
detailed_face_detection.get_distance('left_pupil', 'right_pupil', 'horizontal')  # расстояние по горизонтали
detailed_face_detection.get_distance('upper_lip', 'lower_lip', 'vertical')  # расстояние по вертикали
```

## Состояние модели {#model_state}

Возвращает состояние загрузки модели лица.  
Возвращает 0, если модель ещё не загружена, 1 во время загрузки и 2 после её завершения.

<BlockImage module="AI/DetailedFaceDetection" id="model_state" />

### Параметры

(нет)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.model_state()
```

## Лицо распознано {#detected}

Найдено ли лицо

<BlockImage module="AI/DetailedFaceDetection" id="detected" />

### Параметры

(нет)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detected()
```
