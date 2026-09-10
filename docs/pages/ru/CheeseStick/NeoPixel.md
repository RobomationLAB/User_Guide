---
title: NeoPixel
---

# NeoPixel

## Объявление экземпляра {#instance}

После добавления блока NeoPixel в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:

```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()
```

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| index | Пункт выпадающего списка | Номер экземпляра (начиная с 0) | Целое число 0 или больше | 0 |


## Запустить {#start}

Включает модуль NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="start" />

### Параметры

(нет)

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.start()
```

## Установить режим светодиодов {#mode}

Задаёт режим светодиодов модуля NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="mode" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Режим цветовых каналов | GRBW, GRB | GRBW |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.mode('GRBW')
```

## Задать цвет одного пикселя {#set_one_color}

Задаёт цвет одного пикселя с указанным номером.  
Цвет, выбранный в палитре, превращается в **название цвета** (текст на английском) и в таком виде попадает в код. (В коде появляется название цвета, а не числовые значения R, G, B.)

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| idx | Ввод (поле) | Номер пикселя (начиная с 1) | Целое число 1 или больше | - |
| color | Цвет | Выбор в палитре цветов → превращение в название цвета (на английском) | Названия цветов: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, 'red')
```

## Задать цвет одного пикселя блоком из категории Цвет {#set_one_color_with_block}

Задаёт цвет одного пикселя по блоку из категории Цвет.  
Результат блока цвета (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`, каждый возвращает `[R, G, B]`) распаковывается звёздочкой `*` и передаётся как аргументы r, g, b функции `set_one_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color_with_block" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| idx | Ввод (поле) | Номер пикселя (начиная с 1) | Целое число 1 или больше | - |
| data | Ввод (цвет) | Блок из категории Цвет или массив `[R, G, B]` | [0~255, 0~255, 0~255] | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, *Utils.color('red'))
```

## Изменить цвет одного пикселя на RGB {#change_one_by_rgb}

Прибавляет заданные изменения к текущим значениям RGB указанного пикселя и задаёт новый цвет.

<BlockImage module="CheeseStick/NeoPixel" id="change_one_by_rgb" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| idx | Ввод (поле) | Номер пикселя (начиная с 1) | Целое число 1 или больше | - |
| r | Ввод (поле) | Изменение красного | Целое число от -255 до 255 | 0 |
| g | Ввод (поле) | Изменение зелёного | Целое число от -255 до 255 | 0 |
| b | Ввод (поле) | Изменение синего | Целое число от -255 до 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_one_color(1, 10, 0, 0)
```

## Выключить один пиксель {#turn_off_one}

Гасит цвет n-го светодиода.  
Диапазон номеров светодиодов — от 1 до 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_one" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| idx | Ввод (поле) | Номер пикселя (начиная с 1) | Целое число 1 или больше | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_one(1)
```

## Задать узор в диапазоне {#set_range_pattern}

Задаёт цветовой узор всех светодиодов из указанного диапазона.  
Диапазон номеров светодиодов — от 1 до 144.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_pattern" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| from_idx | Ввод (поле) | Номер начального пикселя (начиная с 1) | Целое число 1 или больше | - |
| to_idx | Ввод (поле) | Номер конечного пикселя (начиная с 1) | Целое число 1 или больше | - |
| pattern | Пункт выпадающего списка | Название цветового узора | `3_colors`, `6_colors`, `12_colors`, `red_green`, `red_blue`, `red_white`, `green_red`, `green_blue`, `green_white`, `blue_red`, `blue_green`, `blue_white`, `white_red`, `white_green`, `white_blue`, `black_red`, `black_green`, `black_blue`, `black_white`, `red_black`, `green_black`, `blue_black`, `white_black` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_pattern(1, 10, '3_colors')
```

## Задать цвет в диапазоне {#set_range_color}

Задаёт один и тот же цвет всему указанному диапазону пикселей.  
Цвет, выбранный в палитре, превращается в **название цвета** (текст на английском) и в таком виде попадает в код.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| from_idx | Ввод (поле) | Номер начального пикселя (начиная с 1) | Целое число 1 или больше | - |
| to_idx | Ввод (поле) | Номер конечного пикселя (начиная с 1) | Целое число 1 или больше | - |
| color | Цвет | Выбор в палитре цветов → превращение в название цвета (на английском) | Названия цветов: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, 'red')
```

## Задать цвет в диапазоне блоком из категории Цвет {#set_range_color_with_block}

Задаёт цвет диапазона пикселей по блоку из категории Цвет.  
Результат блока цвета (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) распаковывается звёздочкой `*` и передаётся как аргументы r, g, b функции `set_range_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color_with_block" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| from_idx | Ввод (поле) | Номер начального пикселя (начиная с 1) | Целое число 1 или больше | - |
| to_idx | Ввод (поле) | Номер конечного пикселя (начиная с 1) | Целое число 1 или больше | - |
| data | Ввод (цвет) | Блок из категории Цвет или массив `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, *Utils.color('red'))
```

## Изменить цвет в диапазоне на RGB {#change_range_by_rgb}

Прибавляет заданные изменения RGB к текущим цветам диапазона пикселей и задаёт новые цвета.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_by_rgb" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| from_idx | Ввод (поле) | Номер начального пикселя (начиная с 1) | Целое число 1 или больше | - |
| to_idx | Ввод (поле) | Номер конечного пикселя (начиная с 1) | Целое число 1 или больше | - |
| r | Ввод (поле) | Изменение красного | Целое число от -255 до 255 | 0 |
| g | Ввод (поле) | Изменение зелёного | Целое число от -255 до 255 | 0 |
| b | Ввод (поле) | Изменение синего | Целое число от -255 до 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_color(1, 10, 10, 0, 0)
```

## Выключить цвет в диапазоне {#turn_off_range}

Гасит цвета всех светодиодов из указанного диапазона.  
Диапазон номеров светодиодов — от 1 до 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| from_idx | Ввод (поле) | Номер начального пикселя (начиная с 1) | Целое число 1 или больше | - |
| to_idx | Ввод (поле) | Номер конечного пикселя (начиная с 1) | Целое число 1 или больше | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range(1, 10)
```

## Задать цвет каждому n-му пикселю {#set_range_increment_color}

Задаёт цвет каждому `increment`-му пикселю в указанном диапазоне.  
Цвет, выбранный в палитре, превращается в **название цвета** (текст на английском) и в таком виде попадает в код.  
(например, зажечь только пиксели 1, 3, 5, ...)

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| from_idx | Ввод (поле) | Номер начального пикселя (начиная с 1) | Целое число 1 или больше | - |
| to_idx | Ввод (поле) | Номер конечного пикселя (начиная с 1) | Целое число 1 или больше | - |
| increment | Ввод (поле) | Шаг (число пикселей) | Целое число 1 или больше | - |
| color | Цвет | Выбор в палитре цветов → превращение в название цвета (на английском) | Названия цветов: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, 'red')
```

## Задать цвет каждому n-му пикселю блоком из категории Цвет {#set_range_increment_color_with_block}

Задаёт цвет каждому n-му пикселю в указанном диапазоне по блоку из категории Цвет.  
Результат блока цвета (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) распаковывается звёздочкой `*` и передаётся как аргументы r, g, b функции `set_range_increment_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color_with_block" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| from_idx | Ввод (поле) | Номер начального пикселя (начиная с 1) | Целое число 1 или больше | - |
| to_idx | Ввод (поле) | Номер конечного пикселя (начиная с 1) | Целое число 1 или больше | - |
| increment | Ввод (поле) | Шаг (число пикселей) | Целое число 1 или больше | - |
| data | Ввод (цвет) | Блок из категории Цвет или массив `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, *Utils.color('red'))
```

## Изменить цвет каждого n-го пикселя на RGB {#change_range_increment_by_rgb}

Прибавляет заданные изменения RGB к текущим цветам пикселей, идущих через n, и задаёт новые цвета.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_increment_by_rgb" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| from_idx | Ввод (поле) | Номер начального пикселя (начиная с 1) | Целое число 1 или больше | - |
| to_idx | Ввод (поле) | Номер конечного пикселя (начиная с 1) | Целое число 1 или больше | - |
| increment | Ввод (поле) | Шаг (число пикселей) | Целое число 1 или больше | - |
| r | Ввод (поле) | Изменение красного | Целое число от -255 до 255 | 0 |
| g | Ввод (поле) | Изменение зелёного | Целое число от -255 до 255 | 0 |
| b | Ввод (поле) | Изменение синего | Целое число от -255 до 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_increment_color(1, 10, 2, 10, 0, 0)
```

## Выключить цвет каждого n-го пикселя {#turn_off_range_increment}

Гасит цвета всех светодиодов из указанного диапазона с заданным шагом.  
Диапазон номеров светодиодов — от 1 до 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range_increment" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| from_idx | Ввод (поле) | Номер начального пикселя (начиная с 1) | Целое число 1 или больше | - |
| to_idx | Ввод (поле) | Номер конечного пикселя (начиная с 1) | Целое число 1 или больше | - |
| increment | Ввод (поле) | Шаг (число пикселей) | Целое число 1 или больше | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range_increment(1, 10, 2)
```

## Сдвинуть / повернуть {#shift}

Сдвигает или поворачивает светодиоды на заданное число позиций в выбранном направлении.  
Диапазон значений на выбор — от 1 до 143.

<BlockImage module="CheeseStick/NeoPixel" id="shift" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Вид действия | сдвинуть(shift), повернуть(rotate) | - |
| direction | Пункт выпадающего списка | Направление | влево(left), вправо(right) | - |
| pixel | Ввод (поле) | Число пикселей сдвига | Целое число 1 или больше | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

# unit = 'shift'
neopixel.shift('left', 1)

# unit = 'rotate'
neopixel.rotate('left', 1)
```

## Установить яркость {#set_brightness}

Задаёт яркость модуля NeoPixel.  
Диапазон значений на выбор — от 0 до 100.

<BlockImage module="CheeseStick/NeoPixel" id="set_brightness" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| value | Ввод (поле) | Яркость | Целое число от 0 до 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_brightness(50)
```

## Изменить яркость {#change_brightness}

Изменяет яркость модуля NeoPixel.  
Диапазон значений на выбор — от -100 до 100.

<BlockImage module="CheeseStick/NeoPixel" id="change_brightness" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| value | Ввод (поле) | Изменение яркости | Целое число от -100 до 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_brightness(10)
```
