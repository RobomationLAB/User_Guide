---
title: PID-13 Джойстик и кнопка
---

# PID-13 Джойстик и кнопка

## Объявление экземпляра {#instance}

После добавления блока PID-13 Джойстик и кнопка(PID13) в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:

```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()
```

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| index | Пункт выпадающего списка | Номер экземпляра (начиная с 0) | Целое число 0 или больше | 0 |


## Запустить джойстик {#start}

Включает джойстик и кнопки.

<BlockImage module="CheeseStick/PID13" id="start" />

### Параметры

(нет)

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.start()
```

## Значение джойстика {#joystick}

Значение x или y джойстика.  
Диапазон каждого значения — от -128 до 127.

<BlockImage module="CheeseStick/PID13" id="joystick" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Измеряемая ось | x, y | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.joystick('x')
```

## Вход кнопки {#button_input}

Состояние входа выбранной кнопки  
Возвращает 1, если кнопка нажата, и 0, если нет.

<BlockImage module="CheeseStick/PID13" id="button_input" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Название кнопки | кнопка A(a), кнопка B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_input('a')
```

## Кнопка нажата {#button_click}

Была ли выбранная кнопка нажата  
Блок возвращает истину только в момент щелчка по выбранной кнопке, а в остальное время ложь.

<BlockImage module="CheeseStick/PID13" id="button_click" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Название кнопки | кнопка A(a), кнопка B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_click('a')
```
