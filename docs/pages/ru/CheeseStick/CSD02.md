---
title: CSD-02 RGB-светодиод
---

# CSD-02 RGB-светодиод

## Объявление экземпляра {#instance}

После добавления блока CSD-02 RGB-светодиод(CSD02) в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:

```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()
```

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| index | Пункт выпадающего списка | Номер экземпляра (начиная с 0) | Целое число 0 или больше | 0 |


## Запустить RGB-светодиод {#start}

Начинает работу с RGB-светодиодом.  
Без этого блока RGB-светодиод не включится.

<BlockImage module="CheeseStick/CSD02" id="start" />

### Параметры

(нет)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.start()
```

## Установить цвет {#set_color}

Задаёт цвет светодиода модуля CSD02.  
Цвет, выбранный в палитре, превращается в **название цвета** (текст на английском) и в таком виде попадает в код. (В коде появляется название цвета, а не числовые значения R, G, B.)

<BlockImage module="CheeseStick/CSD02" id="set_color" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| color | Цвет | Выбор в палитре цветов → превращение в название цвета (на английском) | Названия цветов: `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'violet'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color('orange')
```

## Установить цвет блоком из категории Цвет {#set_color_with_block}

Задаёт цвет светодиода модуля CSD02 по блоку из категории Цвет (например, массиву `[R, G, B]`).

<BlockImage module="CheeseStick/CSD02" id="set_color_with_block" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (цвет) | Результат блока из категории Цвет или массив `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color(*Utils.color('yellow'))
```

## Изменить цвет на RGB {#change_by_rgb}

Прибавляет введённые изменения R, G и B к текущему цвету светодиода и задаёт новый цвет.

<BlockImage module="CheeseStick/CSD02" id="change_by_rgb" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| r | Ввод (поле) | Изменение красного | Целое число от -255 до 255 | 0 |
| g | Ввод (поле) | Изменение зелёного | Целое число от -255 до 255 | 0 |
| b | Ввод (поле) | Изменение синего | Целое число от -255 до 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.change_color(10, 0, 0)
```

## Выключить светодиод {#turn_off}

Гасит цвет RGB-светодиода.

<BlockImage module="CheeseStick/CSD02" id="turn_off" />

### Параметры

(нет)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.turn_off()
```
