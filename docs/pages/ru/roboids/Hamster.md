---
title: Hamster
---

# Hamster

## Объявление экземпляра {#instance}

После добавления блока Hamster в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:

```python
hamster = Hamster(0)
# Когда экземпляров несколько
hamster_1 = Hamster(1)
```

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| index | Пункт выпадающего списка | Номер экземпляра (начиная с 0) | Целое число 0 или больше | 0 |


## Установить скорость колеса {#set_wheel_speed}

Задаёт скорость колеса. Диапазон скорости — от -100 до 100.

<BlockImage module="roboids/Hamster" id="set_wheel_speed" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Выбор колеса | левое(left), правое(right), оба(both) | - |
| speed | Ввод (блок) | Скорость колеса | Целое число от -100 до 100, 0: остановка | - |

### Python
```python
hamster = Hamster(0)

hamster.set_wheel_speed('both', 50)
```

## Двигаться в течение времени {#move_time}

Едет с текущей скоростью колёс заданное время.  
Если скорость колёс не задана, робот едет вперёд со скоростью по умолчанию.  
Если установлен флажок ждать, программа ждёт завершения движения.

<BlockImage module="roboids/Hamster" id="move_time" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Время движения (в секундах) | Вещественное число 0 или больше | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

# wait = TRUE
hamster.move_time(5, wait=True)
# wait = FALSE
hamster.move_time(5, wait=False)
```

## Изменить скорость колеса {#change_speed}

Изменяет скорость колёс робота Hamster.  
Новая скорость колеса — это текущая скорость плюс введённое значение.  
Новая заданная скорость колеса ограничивается диапазоном от -100 до 100.

<BlockImage module="roboids/Hamster" id="change_speed" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Выбор колеса | левое(left), правое(right), оба(both) | - |
| speed | Ввод (блок) | Изменение скорости | Целое число от -200 до 200 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_wheel_speed('both', 10)
```

## Остановиться {#stop}

Останавливает движение робота Hamster.  
Скорость обоих колёс робота Hamster обнуляется.

<BlockImage module="roboids/Hamster" id="stop" />

### Параметры

(нет)

### Python
```python
hamster = Hamster(0)

hamster.stop()
```

## Переместиться вперёд на одну клетку поля {#grid_move}

Перемещается по полю на одну заданную клетку.

<BlockImage module="roboids/Hamster" id="grid_move" />

### Параметры

(нет)

### Python
```python
hamster = Hamster(0)

hamster.grid_move()
```

## Повернуть один раз на поле {#grid_turn}

Поворачивается на поле на 90 градусов в заданном направлении.

<BlockImage module="roboids/Hamster" id="grid_turn" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| direction | Пункт выпадающего списка | Направление поворота | слева(left), справа(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.grid_turn('left')
```

## Следовать по линии с датчиком {#trace_mode}

Hamster едет вдоль линии выбранного цвета, используя датчик поверхности.

<BlockImage module="roboids/Hamster" id="trace_mode" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| floor | Пункт выпадающего списка | Датчик пола, которым робот следует по линии | левый(left), правый(right), средний(center) | - |
| line | Пункт выпадающего списка | Цвет линии | чёрная(black), белая(white) | black |

### Python
```python
hamster = Hamster(0)

hamster.trace_line('left', 'black')
```

## Проезд перекрёстка и остановка на следующем {#trace_until_grid}

Hamster поворачивает на перекрёстке в заданном направлении, а затем едет до следующего перекрёстка.  
Если установлен флажок ждать, программа ждёт завершения движения.  

<BlockImage module="roboids/Hamster" id="trace_until_grid" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| direction | Пункт выпадающего списка | Направление движения на перекрёстке | повернуть налево(left), повернуть направо(right), ехать прямо(forward), развернуться(uturn) | - |
| line | Пункт выпадающего списка | Цвет линии | чёрная(black), белая(white) | black |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

hamster.trace_intersection('left', 'black', wait=True)
```

## Установить скорость движения по линии {#set_trace_speed}

Задаёт скорость движения вдоль линии. Диапазон скорости — от 1 до 10.

<BlockImage module="roboids/Hamster" id="set_trace_speed" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Скорость движения по линии | Целое число от 1 до 10 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_trace_speed(5)
```

## Прекратить движение по линии {#stop_trace}

Завершает движение робота Hamster вдоль линии.

<BlockImage module="roboids/Hamster" id="stop_trace" />

### Параметры

(нет)

### Python
```python
hamster = Hamster(0)

hamster.stop_trace()
```

## Установить цвет светодиода {#set_led_color}

Задаёт цвет светодиода робота Hamster.  
Цвет, выбранный в палитре, превращается в **название цвета** (текст на английском) и в таком виде попадает в код. (В коде появляется название цвета, а не числовые значения R, G, B.)

<BlockImage module="roboids/Hamster" id="set_led_color" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Выбор светодиода | левый(left), правый(right), оба(both) | - |
| color | Цвет | Выбор в палитре цветов → превращение в название цвета (на английском) | Названия цветов: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster = Hamster(0)

hamster.set_led_color('both', 'red')
```

## Выключить светодиод {#turn_off}

Гасит цвет светодиода.

<BlockImage module="roboids/Hamster" id="turn_off" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Выбор светодиода | левый(left), правый(right), оба(both) | both |

### Python
```python
hamster = Hamster(0)

hamster.turn_off('both')
```

## Установить частоту зуммера {#sound_buzz}

Задаёт звук зуммера робота Hamster с указанной частотой.  
Диапазон частот, которые робот может издать, — от 1,0 Гц до 6553,5 Гц.  
При вводе значения вне этого диапазона зуммер не издаёт звука.

<BlockImage module="roboids/Hamster" id="sound_buzz" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| hz | Ввод (блок) | Частота (Гц) | Вещественное число от 0 до 6553,5 | - |

### Python
```python
hamster = Hamster(0)

hamster.sound_buzz(440)
```

## Играть ноту {#sound_note}

Hamster играет заданную ноту.

<BlockImage module="roboids/Hamster" id="sound_note" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| note | Пункт выпадающего списка | Нота | До(C), До#(C#), Ре(D), Ре#(D#), Ми(E), Фа(F), Фа#(F#), Соль(G), Соль#(G#), Ля(A), Ля#(A#), Си(B) | - |
| octave | Пункт выпадающего списка | Октава | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster = Hamster(0)

hamster.sound_note('D', 5)
```

## Выключить звук {#sound_off}

Выключает звук робота Hamster.

<BlockImage module="roboids/Hamster" id="sound_off" />

### Параметры

(нет)

### Python
```python
hamster = Hamster(0)

hamster.sound_off()
```

## Скорость колеса {#wheel_speed}

Скорость выбранного колеса

<BlockImage module="roboids/Hamster" id="wheel_speed" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Считываемое колесо | слева(left), справа(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.wheel_speed('left')
```

## Датчик приближения {#proximity}

Значение выбранного датчика приближения

<BlockImage module="roboids/Hamster" id="proximity" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Положение считываемого датчика | слева(left), справа(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.proximity('left')
```

## Датчик пола {#floor}

Значение выбранного датчика пола

<BlockImage module="roboids/Hamster" id="floor" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Положение считываемого датчика | слева(left), справа(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.floor('left')
```

## Ускорение по оси {#acceleration}

Значение ускорения свободного падения по выбранной оси

<BlockImage module="roboids/Hamster" id="acceleration" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Измеряемая ось | x, y, z | - |

### Python
```python
hamster = Hamster(0)

hamster.acceleration('x')
```

## Яркость {#light}

Значение датчика яркости

<BlockImage module="roboids/Hamster" id="light" />

### Параметры

(нет)

### Python
```python
hamster = Hamster(0)

hamster.light()
```

## Температура {#temperature}

Значение датчика температуры

<BlockImage module="roboids/Hamster" id="temperature" />

### Параметры

(нет)

### Python
```python
hamster = Hamster(0)

hamster.temperature()
```

## Уровень сигнала {#signal_strength}

Уровень сигнала

<BlockImage module="roboids/Hamster" id="signal_strength" />

### Параметры

(нет)

### Python
```python
hamster = Hamster(0)

hamster.signal_strength()
```

## Напряжение батареи {#battery}

Напряжение батареи

<BlockImage module="roboids/Hamster" id="battery" />

### Параметры

(нет)

### Python
```python
hamster = Hamster(0)

hamster.battery()
```

## Изменение состояния {#state_change}

Изменилось ли состояние робота

<BlockImage module="roboids/Hamster" id="state_change" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Вид состояния | От 0 до 6 (см. таблицу ниже) | - |

| unit | Условие |
|------|------|
| 0 | `acceleration('x') > 5000` |
| 1 | `acceleration('x') < -5000` |
| 2 | `acceleration('y') > 5000` |
| 3 | `acceleration('y') < -5000` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -3000` |
| 6 | `proximity('left') > 50 or proximity('right') > 50` |

### Python
```python
hamster = Hamster(0)

# unit = 0
hamster.acceleration('x') > 5000
# unit = 6
hamster.proximity('left') > 50 or hamster.proximity('right') > 50
```

## Установить режим порта ввода-вывода {#io_mode}

Задаёт режим входа порта IO.

<BlockImage module="roboids/Hamster" id="io_mode" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт ввода-вывода | a, b, оба(both) | - |
| option | Пункт выпадающего списка | Режим ввода-вывода | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster = Hamster(0)

hamster.io_mode('both', 'analog_input')
```

## Установить выход порта {#set_output}

Задаёт значение выхода выбранного порта IO.

<BlockImage module="roboids/Hamster" id="set_output" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт ввода-вывода | a, b, оба(both) | - |
| data | Ввод (блок) | Значение выхода | Целое число от 0 до 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_output('a', 90)
```

## Изменить выход порта {#change_output}

Изменяет значение выхода выбранного порта IO.

<BlockImage module="roboids/Hamster" id="change_output" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт ввода-вывода | a, b, оба(both) | - |
| data | Ввод (блок) | Изменение значения выхода | Целое число | - |

### Python
```python
hamster = Hamster(0)

hamster.change_output('a', 10)
```

## Открыть / закрыть захват {#gripper}

Открывает или закрывает захват робота Hamster.  
В зависимости от значения unit вызывается один из двух методов.

<BlockImage module="roboids/Hamster" id="gripper" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Действие | открыть(open), закрыть(close) | - |

### Python
```python
hamster = Hamster(0)

# unit = "open"
hamster.open_gripper()
# unit = "close"
hamster.close_gripper()
```

## Установить угол пускового устройства {#shooter}

Управляет пусковым устройством, задавая его угол. Диапазон угла — от 0 до 180.

<BlockImage module="roboids/Hamster" id="shooter" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Угол пускового устройства | Целое число от 0 до 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.shooter(45)
```

## Значение входа порта {#input}

Возвращает значение входа порта ввода-вывода робота Hamster.

<BlockImage module="roboids/Hamster" id="input" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт ввода-вывода | a, b | - |

### Python
```python
hamster = Hamster(0)

hamster.get_input('a')
```
