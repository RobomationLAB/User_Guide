---
title: CSD-01 Кнопочный переключатель
---

# CSD-01 Кнопочный переключатель

## Объявление экземпляра {#instance}

После добавления блока CSD-01 Кнопочный переключатель(CSD01) в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:

```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()
```

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| index | Пункт выпадающего списка | Номер экземпляра (начиная с 0) | Целое число 0 или больше | 0 |


## Задать порт входа {#set_input_port}

Задаёт порт, к которому подключён модуль CSD01 (Tact Switch).

<BlockImage module="CheeseStick/CSD01" id="set_input_port" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт для подключения | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.set_port('Sa')
```

## Вход кнопки {#button_input}

Входное значение кнопки с выбранного порта  
Возвращает 0, если кнопка нажата, и 1 в остальных случаях.

<BlockImage module="CheeseStick/CSD01" id="button_input" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт для чтения | Sa, Sb, Sc | порт из последнего `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_input('Sa')
```

## Кнопка нажата {#button_pressed}

Нажата ли кнопка переключателя, подключённого к выбранному порту

<BlockImage module="CheeseStick/CSD01" id="button_pressed" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт для чтения | Sa, Sb, Sc | порт из последнего `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_pressed('Sa')
```
