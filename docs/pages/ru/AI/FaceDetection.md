---
title: Распознавание лица
---

# Распознавание лица

## Объявление экземпляра {#instance}

После добавления блока Распознавание лица(FaceDetection) в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:

```python
face_detection = FaceDetection(0)
# Когда экземпляров несколько
face_detection_1 = FaceDetection(1)
```

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| index | Пункт выпадающего списка | Номер экземпляра (начиная с 0) | Целое число 0 или больше | 0 |


## Выбрать камеру {#device}

Задаёт камеру, используемую для распознавания лица.

<BlockImage module="AI/FaceDetection" id="device" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Название устройства камеры | Название камеры в системе | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.device('')
```

## Загрузить модель лица {#load_model}

Загружает обученную модель лица. Без этого шага функции модуля «Распознавание лица» использовать нельзя.

<BlockImage module="AI/FaceDetection" id="load_model" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| wait | Флажок | Ждать ли завершения загрузки | TRUE / FALSE | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.load_model(wait=True)
```

## Распознать лицо один раз {#detect_once}

Находит лицо, которое сейчас на экране, и отмечает его только один раз.

<BlockImage module="AI/FaceDetection" id="detect_once" />

### Параметры

(нет)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detect_once()
```

## Запустить / остановить непрерывное распознавание лица {#detect_continuous}

Непрерывно отслеживает лицо на экране и отмечает его на изображении.

<BlockImage module="AI/FaceDetection" id="detect_continuous" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Действие | запустить(start), остановить(stop) | - |

### Python
```python
face_detection = FaceDetection(0)

# unit = "start"
face_detection.detect_continuous()
# unit = "stop"
face_detection.stop()
```

## Показать результат {#display}

Определяет, показывать ли на изображении с камеры результат распознавания лица.

<BlockImage module="AI/FaceDetection" id="display" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| on | Пункт выпадающего списка | Отображение ON / OFF | показать(on=True), скрыть(off=False) | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.display(True)
face_detection.display(False)
```

## Положение части лица {#face_data}

Возвращает координаты положения лица или его части.

<BlockImage module="AI/FaceDetection" id="face_data" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Часть лица | лицо(face), левый глаз(left eye), правый глаз(right eye), левое ухо(left ear), правое ухо(right ear), нос(nose), рот(mouth) | - |
| pos | Пункт выпадающего списка | Вид координаты | x, y | - |

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

## Прямоугольник лица {#face_square}

Возвращает положение и размер прямоугольника, охватывающего лицо.

<BlockImage module="AI/FaceDetection" id="face_square" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| pos | Пункт выпадающего списка | Сведения о прямоугольнике | мин. позиция x(min_x), макс. позиция x(max_x), мин. позиция y(min_y), макс. позиция y(max_y), ширина(width), высота(height), площадь(area) | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('min_x')
face_detection.face('width')
face_detection.face('area')
```

## Расстояние между двумя частями {#distance}

Возвращает расстояние между двумя частями лица.

<BlockImage module="AI/FaceDetection" id="distance" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit1 | Пункт выпадающего списка | Первая часть | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| unit2 | Пункт выпадающего списка | Вторая часть | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| type | Пункт выпадающего списка | Вид расстояния | расстояние (пропущено или None), расстояние по горизонтали(horizontal), расстояние по вертикали(vertical) | None |

### Python
```python
face_detection = FaceDetection(0)

face_detection.get_distance('left_eye', 'right_eye')  # расстояние
face_detection.get_distance('left_eye', 'right_eye', 'horizontal')  # расстояние по горизонтали
face_detection.get_distance('nose', 'mouth', 'vertical')  # расстояние по вертикали
```

## Состояние модели {#model_state}

Возвращает состояние загрузки модели лица.  
Возвращает 0, если модель ещё не загружена, 1 во время загрузки и 2 после её завершения.

<BlockImage module="AI/FaceDetection" id="model_state" />

### Параметры

(нет)

### Python
```python
face_detection = FaceDetection(0)

face_detection.model_state()
```

## Лицо распознано {#detected}

Найдено ли лицо

<BlockImage module="AI/FaceDetection" id="detected" />

### Параметры

(нет)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detected()
```
