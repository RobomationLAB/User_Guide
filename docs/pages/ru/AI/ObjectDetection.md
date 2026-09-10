---
title: Распознавание объектов
---

# Распознавание объектов

## Объявление экземпляра {#instance}

После добавления блока Распознавание объектов(ObjectDetection) в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:

```python
object_detection = ObjectDetection(0)
# Когда экземпляров несколько
object_detection_1 = ObjectDetection(1)
```

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| index | Пункт выпадающего списка | Номер экземпляра (начиная с 0) | Целое число 0 или больше | 0 |


## Выбрать камеру {#device}

Задаёт камеру, используемую для распознавания объектов.

<BlockImage module="AI/ObjectDetection" id="device" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Название устройства камеры | Название камеры в системе | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.device('')
```

## Загрузить модель объектов {#load_model}

Загружает обученную модель объектов. Без этого шага функции модуля «Распознавание объектов» использовать нельзя.

<BlockImage module="AI/ObjectDetection" id="load_model" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| wait | Флажок | Ждать ли завершения загрузки | TRUE / FALSE | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.load_model(wait=True)
```

## Установить макс. количество объектов {#max_objects}

Задаёт, сколько объектов можно найти самое большее. Диапазон количества объектов — от 0 до 10.

<BlockImage module="AI/ObjectDetection" id="max_objects" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Максимальное количество объектов | Целое число от 0 до 10 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.max_objects(5)
```

## Установить порог уверенности {#confidence_threshold}

Задаёт наименьшую вероятность (уверенность) при распознавании объектов. Объект появляется на экране, только если уверенность не меньше заданной. Диапазон уверенности — от 0 до 1.

<BlockImage module="AI/ObjectDetection" id="confidence_threshold" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Порог уверенности | Вещественное число от 0 до 1 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.confidence_threshold(0.5)
```

## Распознать объекты один раз {#detect_once}

Находит объекты, которые сейчас на экране, и отмечает их только один раз.

<BlockImage module="AI/ObjectDetection" id="detect_once" />

### Параметры

(нет)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detect_once()
```

## Запустить / остановить непрерывное распознавание объектов {#detect_continuous}

Непрерывно отслеживает объекты на экране и отмечает их на изображении.

<BlockImage module="AI/ObjectDetection" id="detect_continuous" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Действие | запустить(start), остановить(stop) | - |

### Python
```python
object_detection = ObjectDetection(0)

# unit = "start"
object_detection.detect_continuous()
# unit = "stop"
object_detection.stop()
```

## Показать результат {#display}

Определяет, показывать ли на изображении с камеры результат распознавания объектов.

<BlockImage module="AI/ObjectDetection" id="display" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| on | Пункт выпадающего списка | Отображение ON / OFF | показать(on=True), скрыть(off=False) | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.display(True)
object_detection.display(False)
```

## Положение объекта {#object_data}

Возвращает положение и размер указанного объекта.

<BlockImage module="AI/ObjectDetection" id="object_data" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Название объекта | 80 классов объектов (`'person'`, `'bicycle'`, `'car'`, `'motorcycle'`, `'airplane'`, `'bus'`, `'cat'`, `'dog'`, `'apple'`, `'cup'`, `'laptop'`, `'cell_phone'` и другие) | - |
| pos | Пункт выпадающего списка | Координата | x, y | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'x')
object_detection.object('bicycle', 'y')
```

## Прямоугольник объекта {#object_square}

Возвращает положение и размер прямоугольника, охватывающего указанный объект.

<BlockImage module="AI/ObjectDetection" id="object_square" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Название объекта | 80 классов объектов | - |
| pos | Пункт выпадающего списка | Сведения о прямоугольнике | min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'width')
object_detection.object('car', 'area')
```

## Расстояние между двумя объектами {#object_distance}

Возвращает расстояние между двумя классами объектов.

<BlockImage module="AI/ObjectDetection" id="object_distance" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit1 | Пункт выпадающего списка | Название первого объекта | 80 классов объектов | - |
| unit2 | Пункт выпадающего списка | Название второго объекта | 80 классов объектов | - |
| type | Пункт выпадающего списка | Вид расстояния | расстояние (пропущено или None), расстояние по горизонтали(horizontal), расстояние по вертикали(vertical) | None |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.get_distance('person', 'bicycle')  # расстояние
object_detection.get_distance('person', 'car', 'horizontal')  # расстояние по горизонтали
```

## Уверенность для объекта {#object_confidence}

Вероятность (уверенность) того, что выбранный объект распознан верно

<BlockImage module="AI/ObjectDetection" id="object_confidence" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Название объекта | 80 классов объектов | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_confidence('person')
```

## Состояние модели {#model_state}

Возвращает состояние загрузки модели объектов.  
Возвращает 0, если модель ещё не загружена, 1 во время загрузки и 2 после её завершения.

<BlockImage module="AI/ObjectDetection" id="model_state" />

### Параметры

(нет)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.model_state()
```

## Объект распознан {#detected}

Найден ли объект

<BlockImage module="AI/ObjectDetection" id="detected" />

### Параметры

(нет)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detected()
```

## Обнаружен ли данный объект {#object_detected}

Найден ли выбранный объект

<BlockImage module="AI/ObjectDetection" id="object_detected" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Название объекта | 80 классов объектов | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_detected('person')
```
