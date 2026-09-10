---
title: CSD-09 Мотор
---

# CSD-09 Мотор

## Объявление экземпляра {#instance}

После добавления блока CSD-09 Мотор(CSD09) в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:

```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()
```

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| index | Пункт выпадающего списка | Номер экземпляра (начиная с 0) | Целое число 0 или больше | 0 |


## Запустить сервомотор {#start_servo_motor}

Указывает порт, на котором будет работать сервомотор.  
Без указания порта мотор не будет работать правильно.

<BlockImage module="CheeseStick/CSD09" id="start_servo_motor" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт сервомотора | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_servo_motor('Sa')
```

## Установить угол сервомотора {#set_servo_motor}

Задаёт угол сервомотора на указанном порте.  
Диапазон значений на выбор — от 0 до 180.

<BlockImage module="CheeseStick/CSD09" id="set_servo_motor" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт сервомотора | Sa, Sb, Sc | порт из последнего `start_servo_motor` |
| value | Ввод (поле) | Угол поворота (в градусах) | Целое число от 0 до 180 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_servo_motor('Sa', 90)
```

## Изменить угол сервомотора {#change_servo_motor}

Изменяет угол сервомотора на указанном порте.  
Диапазон значений на выбор — от -180 до 180.

<BlockImage module="CheeseStick/CSD09" id="change_servo_motor" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт сервомотора | Sa, Sb, Sc | порт из последнего `start_servo_motor` |
| value | Ввод (поле) | Изменение угла | Целое число | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_servo_motor('Sa', 10)
```

## Остановить сервомотор {#stop_servo_motor}

Выключает питание сервомотора на указанном порте.

<BlockImage module="CheeseStick/CSD09" id="stop_servo_motor" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт сервомотора | Sa, Sb, Sc | порт из последнего `start_servo_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_servo_motor('Sa')
```

## Запустить двигатель постоянного тока {#start_DC_motor}

Позволяет управлять двигателем постоянного тока на указанном порте.
Этот блок нужно вызвать один раз, прежде чем использовать остальные блоки двигателя постоянного тока.

<BlockImage module="CheeseStick/CSD09" id="start_DC_motor" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт двигателя постоянного тока | Mab, Mcd | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_dc_motor('Mab')
```

## Установить скорость двигателя постоянного тока {#set_DC_motor}

Задаёт значение ШИМ-выхода двигателя постоянного тока.

<BlockImage module="CheeseStick/CSD09" id="set_DC_motor" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт двигателя постоянного тока | Mab, Mcd | порт из последнего `start_dc_motor` |
| value | Ввод (поле) | Значение ШИМ-выхода | Целое число от 0 до 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_dc_motor('Mab', 50)
```

## Изменить скорость двигателя постоянного тока {#change_DC_motor}

Прибавляет введённое изменение к текущему значению ШИМ-выхода двигателя постоянного тока и задаёт новое значение.

<BlockImage module="CheeseStick/CSD09" id="change_DC_motor" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт двигателя постоянного тока | Mab, Mcd | порт из последнего `start_dc_motor` |
| value | Ввод (поле) | Изменение значения ШИМ | Целое число | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_dc_motor('Mab', 10)
```

## Остановить двигатель постоянного тока {#stop_DC_motor}

Останавливает выход двигателя постоянного тока.

<BlockImage module="CheeseStick/CSD09" id="stop_DC_motor" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт двигателя постоянного тока | Mab, Mcd | порт из последнего `start_dc_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_dc_motor('Mab')
```

## Запустить шаговый двигатель {#start_step_motor}

Включает шаговый двигатель.

<BlockImage module="CheeseStick/CSD09" id="start_step_motor" />

### Параметры

(нет)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_step_motor()
```

## Установить режим шагового двигателя {#set_step_motor_mode}

Задаёт режим управления шаговым двигателем.  
Без отдельной настройки по умолчанию используется режим «мощный».  
Внимание! Нельзя менять режим во время вращения шагового двигателя.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_mode" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Режим работы | выкл.(off), обычный(wave_step), мощный(full_step) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_mode('full_step')
```

## Установить скорость шагового двигателя {#set_step_motor_speed}

Задаёт скорость шагового двигателя.  
Диапазон значений на выбор — от -1000 до 1000.  
Отрицательное значение означает вращение в обратную сторону.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_speed" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| value | Ввод (поле) | Скорость вращения (PPS) | Целое число 0 или больше | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_speed(100)
```

## Повернуть шаговый двигатель {#rotate_step_motor}

Задаёт число импульсов, на которое повернётся шаговый двигатель.  
Диапазон значений на выбор — от 0 до 65535.  
Без заданной скорости шаговый двигатель не вращается.  
Если установлен флажок ждать, программа ждёт завершения поворота.

<BlockImage module="CheeseStick/CSD09" id="rotate_step_motor" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| value | Ввод (поле) | Число шагов поворота | Целое число | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# wait = TRUE
csd09.rotate_step_motor(360, wait=True)

# wait = FALSE
csd09.rotate_step_motor(360, wait=False)
```

## Изменить скорость шагового двигателя {#change_step_motor_speed}

Изменяет скорость шагового двигателя.  
Диапазон значений на выбор — от -2000 до 2000.

<BlockImage module="CheeseStick/CSD09" id="change_step_motor_speed" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| value | Ввод (поле) | Изменение значения PPS | Целое число | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_step_motor_speed(10)
```

## Остановить шаговый двигатель {#stop_step_motor}

Останавливает шаговый двигатель или выключает его питание.

<BlockImage module="CheeseStick/CSD09" id="stop_step_motor" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Способ остановки | остановить(stop), выключить питание(power) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# unit = "stop"
csd09.stop_step_motor()

# unit = "power"
csd09.turn_off_step_motor()
```

## Число шагов {#step_motor_steps}

Возвращает общее число шагов, которое шаговый двигатель прошёл до сих пор.

<BlockImage module="CheeseStick/CSD09" id="step_motor_steps" />

### Параметры

(нет)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.get_steps()
```
