---
title: Автономное вождение с камерой
---

# Автономное вождение с камерой

## Объявление экземпляра {#instance}

После добавления блока Автономное вождение с камерой(SelfDriving) в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:

```python
self_driving = SelfDriving(0)
# Когда экземпляров несколько
self_driving_1 = SelfDriving(1)
```

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| index | Пункт выпадающего списка | Номер экземпляра (начиная с 0) | Целое число 0 или больше | 0 |


## Выбрать камеру {#device}

Задаёт камеру, используемую для автономного вождения с камерой.

<BlockImage module="AI/SelfDriving" id="device" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Название устройства камеры | Название камеры в системе | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.device('')
```

## Задать цвет полос {#set_lane_color}

Задаёт цвет левой и правой полос.

<BlockImage module="AI/SelfDriving" id="set_lane_color" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| left | Пункт выпадающего списка | Цвет левой полосы | красный(red), зелёный(green), синий(blue) | - |
| right | Пункт выпадающего списка | Цвет правой полосы | красный(red), зелёный(green), синий(blue) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.set_lane('green', 'blue')
```

## Распознать цвет/полосу один раз {#detect_once}

Находит на экране выбранный цвет или полосу и только один раз отмечает область.

<BlockImage module="AI/SelfDriving" id="detect_once" />

### Параметры

(нет)

### Python
```python
self_driving = SelfDriving(0)

self_driving.detect_once()
```

## Запустить / остановить непрерывное распознавание цвета и полосы {#detect_continuous}

Непрерывно отслеживает на изображении выбранные цвета и полосы и отмечает их области.

<BlockImage module="AI/SelfDriving" id="detect_continuous" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Действие | запустить(start), остановить(stop) | - |

### Python
```python
self_driving = SelfDriving(0)

# unit = "start"
self_driving.detect_continuous()
# unit = "stop"
self_driving.stop()
```

## Показать результат {#display}

Определяет, показывать ли на изображении с камеры результат распознавания цветов и полос.

<BlockImage module="AI/SelfDriving" id="display" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| on | Пункт выпадающего списка | Отображение ON / OFF | показать(on=True), скрыть(off=False) | TRUE |

### Python
```python
self_driving = SelfDriving(0)

self_driving.display(True)
self_driving.display(False)
```

## Данные полосы {#lane_data}

Возвращает положение или расстояние до указанной полосы.

<BlockImage module="AI/SelfDriving" id="lane_data" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| lane | Пункт выпадающего списка | Полоса | слева(left), справа(right) | - |
| unit | Пункт выпадающего списка | Вид измерения | x, расстояние(distance) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane('left', 'x')
self_driving.lane('right', 'distance')
```

## Данные цвета {#color_data}

Возвращает положение и размер указанного цвета.

<BlockImage module="AI/SelfDriving" id="color_data" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| color | Пункт выпадающего списка | Название цвета | красный(red), зелёный(green), синий(blue) | - |
| unit | Пункт выпадающего списка | Вид координаты или размера | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color('red', 'x')
self_driving.color('green', 'y')
self_driving.color('blue', 'area')
```

## Расстояние между двумя цветами {#color_to_color}

Возвращает расстояние между двумя цветами.

<BlockImage module="AI/SelfDriving" id="color_to_color" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit1 | Пункт выпадающего списка | Первый цвет | красный(red), зелёный(green), синий(blue) | - |
| unit2 | Пункт выпадающего списка | Второй цвет | красный(red), зелёный(green), синий(blue) | - |
| type | Пункт выпадающего списка | Вид расстояния | расстояние (пропущено или None), расстояние по горизонтали(horizontal), расстояние по вертикали(vertical) | None |

### Python
```python
self_driving = SelfDriving(0)

self_driving.get_distance('red', 'blue')  # расстояние
self_driving.get_distance('green', 'blue', 'horizontal')  # расстояние по горизонтали
```

## Полоса обнаружена {#lane_detected}

Найдена ли данная полоса

<BlockImage module="AI/SelfDriving" id="lane_detected" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| lane | Пункт выпадающего списка | Полоса | слева(left), справа(right), обе(both), любая(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane_detected('left')
```

## Цвет обнаружен {#color_detected}

Найдена ли область данного цвета

<BlockImage module="AI/SelfDriving" id="color_detected" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| color | Пункт выпадающего списка | Название цвета | красный(red), зелёный(green), синий(blue), любой(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color_detected('red')
```
