---
title: Распознавание тела
---

# Распознавание тела

## Объявление экземпляра {#instance}

После добавления блока Распознавание тела(BodyDetection) в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:

```python
body_detection = BodyDetection(0)
# Когда экземпляров несколько
body_detection_1 = BodyDetection(1)
```

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| index | Пункт выпадающего списка | Номер экземпляра (начиная с 0) | Целое число 0 или больше | 0 |


## Выбрать камеру {#device}

Задаёт камеру, используемую для распознавания тела.

<BlockImage module="AI/BodyDetection" id="device" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Название устройства камеры | Название камеры в системе | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.device('')
```

## Загрузить модель тела {#load_model}

Загружает обученную модель тела. Без этого шага функции модуля «Распознавание тела» использовать нельзя.

<BlockImage module="AI/BodyDetection" id="load_model" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| wait | Флажок | Ждать ли завершения загрузки | TRUE / FALSE | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.load_model(wait=True)
```

## Распознать тело один раз {#detect_once}

Находит тело, которое сейчас на экране, и отмечает его только один раз.

<BlockImage module="AI/BodyDetection" id="detect_once" />

### Параметры

(нет)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detect_once()
```

## Запустить / остановить непрерывное распознавание тела {#detect_continuous}

Непрерывно отслеживает тело на экране и отмечает его на изображении.

<BlockImage module="AI/BodyDetection" id="detect_continuous" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Действие | запустить(start), остановить(stop) | - |

### Python
```python
body_detection = BodyDetection(0)

# unit = "start"
body_detection.detect_continuous()
# unit = "stop"
body_detection.stop()
```

## Показать результат {#display}

Определяет, показывать ли на изображении с камеры результат распознавания тела.

<BlockImage module="AI/BodyDetection" id="display" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| on | Пункт выпадающего списка | Отображение ON / OFF | показать(on=True), скрыть(off=False) | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.display(True)
body_detection.display(False)
```

## Координаты частей тела {#body_data}

Возвращает координаты отдельных частей тела.

<BlockImage module="AI/BodyDetection" id="body_data" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Часть тела | нос(nose), рот(mouth), левый глаз(left eye), правый глаз(right eye), левое ухо(left ear), правое ухо(right ear), левое плечо(left shoulder), правое плечо(right shoulder), левый локоть(left elbow), правый локоть(right elbow), левое запястье(left wrist), правое запястье(right wrist), левая кисть(left hand), правая кисть(right hand), левое бедро(left hip), правое бедро(right hip), левое колено(left knee), правое колено(right knee), левая лодыжка(left ankle), правая лодыжка(right ankle), левая стопа(left foot), правая стопа(right foot) | - |
| pos | Пункт выпадающего списка | Координата | x, y | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.nose('x')
body_detection.mouth('y')
body_detection.left_eye('x')
body_detection.right_shoulder('y')
body_detection.left_hand('x')
```

## Расстояние между двумя частями {#body_distance}

Возвращает расстояние между двумя частями тела.

<BlockImage module="AI/BodyDetection" id="body_distance" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit1 | Пункт выпадающего списка | Первая часть тела | (см. таблицу частей тела выше) | - |
| unit2 | Пункт выпадающего списка | Вторая часть тела | (см. таблицу частей тела выше) | - |
| type | Пункт выпадающего списка | Вид расстояния | расстояние (пропущено или None), расстояние по горизонтали(horizontal), расстояние по вертикали(vertical) | None |

### Python
```python
body_detection = BodyDetection(0)

body_detection.get_distance('left_shoulder', 'right_shoulder')  # расстояние
body_detection.get_distance('left_wrist', 'right_wrist', 'horizontal')  # расстояние по горизонтали
body_detection.get_distance('left_hip', 'left_knee', 'vertical')  # расстояние по вертикали
```

## Состояние модели {#model_state}

Возвращает состояние загрузки модели тела.  
Возвращает 0, если модель ещё не загружена, 1 во время загрузки и 2 после её завершения.

<BlockImage module="AI/BodyDetection" id="model_state" />

### Параметры

(нет)

### Python
```python
body_detection = BodyDetection(0)

body_detection.model_state()
```

## Тело распознано {#detected}

Найдено ли тело

<BlockImage module="AI/BodyDetection" id="detected" />

### Параметры

(нет)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detected()
```
