---
title: Распознавание цвета
---

# Распознавание цвета

## Объявление экземпляра {#instance}

После добавления блока Распознавание цвета(ColorDetection) в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:

```python
color_detection = ColorDetection(0)
# Когда экземпляров несколько
color_detection_1 = ColorDetection(1)
```

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| index | Пункт выпадающего списка | Номер экземпляра (начиная с 0) | Целое число 0 или больше | 0 |


## Выбрать камеру {#device}

Задаёт камеру, используемую для распознавания цвета.

<BlockImage module="AI/ColorDetection" id="device" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Название устройства камеры | Название камеры в системе | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.device('')
```

## Добавить цвет {#register_color}

Добавляет цвет, который должен распознаваться при распознавании цвета.

<BlockImage module="AI/ColorDetection" id="register_color" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| color | Пункт выпадающего списка | Название цвета | чёрный(black), красный(red), жёлтый(yellow), зелёный(green), голубой(cyan), синий(blue), пурпурный(magenta), белый(white) | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.register_color('red', wait=True)
```

## Удалить цвет {#delete_color}

Удаляет этот цвет из цветов, распознаваемых при распознавании цвета.

<BlockImage module="AI/ColorDetection" id="delete_color" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| color | Пункт выпадающего списка | Название цвета | чёрный(black), красный(red), жёлтый(yellow), зелёный(green), голубой(cyan), синий(blue), пурпурный(magenta), белый(white) | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.delete_color('blue', wait=True)
```

## Задать условие по площади {#area_condition}

Задаёт наименьшую площадь области цвета, которая должна распознаваться. Область появляется на экране, только если её площадь не меньше заданной.

<BlockImage module="AI/ColorDetection" id="area_condition" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Значение условия по площади | Вещественное число 0 или больше | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.area_condition(50)
```

## Распознать цвет один раз {#detect_once}

Среди распознаваемых цветов находит те, что сейчас на экране, и только один раз отмечает их области.

<BlockImage module="AI/ColorDetection" id="detect_once" />

### Параметры

(нет)

### Python
```python
color_detection = ColorDetection(0)

color_detection.detect_once()
```

## Запустить / остановить непрерывное обнаружение цветов {#detect_continuous}

Среди распознаваемых цветов непрерывно отслеживает те, что сейчас на экране, и отмечает их области.

<BlockImage module="AI/ColorDetection" id="detect_continuous" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Действие | запустить(start), остановить(stop) | - |

### Python
```python
color_detection = ColorDetection(0)

# unit = "start"
color_detection.detect_continuous()
# unit = "stop"
color_detection.stop()
```

## Показать результат {#display}

Определяет, показывать ли на изображении с камеры результат распознавания цвета.

<BlockImage module="AI/ColorDetection" id="display" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| on | Пункт выпадающего списка | Отображение ON / OFF | показать(on=True), скрыть(off=False) | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.display(True)
color_detection.display(False)
```

## Сведения об области цвета {#color_data}

Возвращает положение и размер указанного цвета.

<BlockImage module="AI/ColorDetection" id="color_data" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| color | Пункт выпадающего списка | Название цвета | чёрный(black), красный(red), жёлтый(yellow), зелёный(green), голубой(cyan), синий(blue), пурпурный(magenta), белый(white) | - |
| pos | Пункт выпадающего списка | Вид координаты или размера | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color('red', 'x')
color_detection.color('green', 'y')
color_detection.color('blue', 'area')
```

## Обнаружен ли данный цвет {#color_detected}

Найден ли выбранный цвет

<BlockImage module="AI/ColorDetection" id="color_detected" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| color | Пункт выпадающего списка | Название цвета | чёрный(black), красный(red), жёлтый(yellow), зелёный(green), голубой(cyan), синий(blue), пурпурный(magenta), белый(white) | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color_detected('red')
```
