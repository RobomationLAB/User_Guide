---
title: HamsterS
---

# HamsterS

## Объявление экземпляра {#instance}

После добавления блока HamsterS в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:

```python
hamster_s = HamsterS(0)
# Когда экземпляров несколько
hamster_s_1 = HamsterS(1)
```

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| index | Пункт выпадающего списка | Номер экземпляра (начиная с 0) | Целое число 0 или больше | 0 |


## Установить скорость колеса {#set_wheel_speed}

Задаёт скорость колеса. Диапазон скорости — от -100 до 100.

<BlockImage module="roboids/HamsterS" id="set_wheel_speed" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Выбор колеса | левое(left), правое(right), оба(both) | - |
| speed | Ввод (блок) | Скорость колеса | Целое число от -100 до 100, 0: остановка | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_wheel_speed('both', 50)
```

## Двигаться на расстояние {#move_distance}

Едет с текущей скоростью колёс на заданное расстояние.  
Если скорость колёс не задана, робот едет вперёд со скоростью по умолчанию.  
Если значение расстояния равно 0, робот продолжает ехать с текущей скоростью колёс.  
Если установлен флажок ждать, программа ждёт завершения движения.

<BlockImage module="roboids/HamsterS" id="move_distance" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Пройденное расстояние | Вещественное число 0 или больше | - |
| unit | Пункт выпадающего списка | Единица расстояния | см(cm), мм(mm), дюйм(inch) | cm |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.move_distance(50, 'cm', wait=True)
```

## Двигаться в течение времени {#move_time}

Едет с текущей скоростью колёс заданное время.  
Если скорость колёс не задана, робот едет вперёд со скоростью по умолчанию.  
Если установлен флажок ждать, программа ждёт завершения движения.

<BlockImage module="roboids/HamsterS" id="move_time" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Время движения (в секундах) | Вещественное число 0 или больше | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

# wait = TRUE
hamster_s.move_time(5, wait=True)
# wait = FALSE
hamster_s.move_time(5, wait=False)
```

## Повернуть на месте {#turn_degree}

Задаёт направление и угол поворота на месте.  
Если установлен флажок ждать, программа ждёт завершения поворота.

<BlockImage module="roboids/HamsterS" id="turn_degree" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| direction | Пункт выпадающего списка | Направление поворота | слева(left), справа(right) | - |
| data | Ввод (блок) | Угол поворота (в градусах) | Вещественное число 0 или больше | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_degree('left', 90, wait=True)
```

## Изменить скорость колеса {#change_speed}

Изменяет скорость колёс робота HamsterS.  
Новая скорость колеса — это текущая скорость плюс введённое значение.

<BlockImage module="roboids/HamsterS" id="change_speed" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Выбор колеса | левое(left), правое(right), оба(both) | - |
| speed | Ввод (блок) | Изменение скорости | Целое число от -200 до 200 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_wheel_speed('both', 10)
```

## Остановиться {#stop}

Останавливает движение робота HamsterS.

<BlockImage module="roboids/HamsterS" id="stop" />

### Параметры

(нет)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop()
```

## Колесо движется? {#wheel_moving}

Возвращает true, если колесо движется, и false, если оно стоит.

<BlockImage module="roboids/HamsterS" id="wheel_moving" />

### Параметры

(нет)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_moving()
```

## Переместиться на одну клетку вперёд по полю {#grid_move}

Перемещается по полю на одну заданную клетку.

<BlockImage module="roboids/HamsterS" id="grid_move" />

### Параметры

(нет)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_move()
```

## Повернуть один раз на поле {#grid_turn}

Поворачивается на поле на 90 градусов в заданном направлении.

<BlockImage module="roboids/HamsterS" id="grid_turn" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| direction | Пункт выпадающего списка | Направление поворота | слева(left), справа(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_turn('left')
```

## Поворот вокруг маркера {#pivot}

При работе с держателем маркера задаёт точку, вокруг которой происходит поворот, а также направление и угол.  
Если установлен флажок ждать, программа ждёт завершения поворота.

<BlockImage module="roboids/HamsterS" id="pivot" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| base | Пункт выпадающего списка | Точка поворота | левый маркер(left_pen), правый маркер(right_pen), левое колесо(left_wheel), правое колесо(right_wheel) | - |
| direction | Пункт выпадающего списка | Направление поворота | вперёд(forward), назад(backward) | - |
| degree | Ввод (блок) | Угол поворота (в градусах) | Вещественное число 0 или больше | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot('left_pen', 'forward', 90, wait=True)
```

## Окружность вокруг маркера {#pivot_circle}

При рисовании окружности держателем маркера задаёт точку поворота, направление, радиус и угол.  
Если установлен флажок ждать, программа ждёт завершения поворота.

<BlockImage module="roboids/HamsterS" id="pivot_circle" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| base | Пункт выпадающего списка | Точка поворота | левый(left_pen), правый(right_pen) маркер | - |
| direction | Пункт выпадающего списка | Направление поворота | влево-вперёд(left_forward), влево-назад(left_backward), вправо-вперёд(right_forward), вправо-назад(right_backward) | - |
| degree | Ввод (блок) | Угол поворота (в градусах) | Вещественное число 0 или больше | - |
| radius | Ввод (блок) | Радиус поворота | Вещественное число 0 или больше | - |
| unit | Пункт выпадающего списка | Единица радиуса | см(cm), мм(mm), дюйм(inch) | cm |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot_circle('left_pen', 'left_forward', 90, 1, 'cm', wait=True)
```

## Следовать по линии с датчиком {#trace_mode}

HamsterS едет вдоль линии выбранного цвета, используя датчик поверхности.

<BlockImage module="roboids/HamsterS" id="trace_mode" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| floor | Пункт выпадающего списка | Датчик поверхности, которым робот следует по линии | левый(left), правый(right), средний(center) | - |
| line | Пункт выпадающего списка | Цвет линии | чёрный(black), белый(white) | black |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_line('left', 'black')
```

## Проезд перекрёстка и остановка на следующем {#trace_until_grid}

HamsterS поворачивает на перекрёстке в заданном направлении, а затем едет до следующего перекрёстка.  
Если установлен флажок ждать, программа ждёт завершения движения.  

<BlockImage module="roboids/HamsterS" id="trace_until_grid" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| direction | Пункт выпадающего списка | Направление движения на перекрёстке | повернуть налево(left), повернуть направо(right), ехать прямо(forward), развернуться(uturn) | - |
| line | Пункт выпадающего списка | Цвет линии | чёрный(black), белый(white) | black |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_intersection('left', 'black', wait=True)
```

## Установить скорость движения по линии {#set_trace_speed}

Задаёт скорость движения вдоль линии. Диапазон скорости — от 1 до 10.

<BlockImage module="roboids/HamsterS" id="set_trace_speed" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Скорость движения по линии | Целое число от 1 до 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_speed(5)
```

## Установить коэффициент движения по линии {#set_trace_gain}

Задаёт, насколько сильно робот корректирует направление при движении вдоль линии. Диапазон коэффициента — от 1 до 10.

<BlockImage module="roboids/HamsterS" id="set_trace_gain" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Коэффициент коррекции направления | Целое число от 1 до 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_gain(5)
```

## Прекратить движение по линии {#stop_trace}

Завершает движение робота HamsterS вдоль линии.

<BlockImage module="roboids/HamsterS" id="stop_trace" />

### Параметры

(нет)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop_trace()
```

## Установить цвет светодиода {#set_led_color}

Задаёт цвет светодиода робота HamsterS.  
Цвет, выбранный в палитре, превращается в **название цвета** (текст на английском) и в таком виде попадает в код. (В коде появляется название цвета, а не числовые значения R, G, B.)

<BlockImage module="roboids/HamsterS" id="set_led_color" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Выбор светодиода | левый(left), правый(right), оба(both) | - |
| color | Цвет | Выбор в палитре цветов → превращение в название цвета (на английском) | Названия цветов: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', 'red')
```

## Установить цвет светодиода блоком из категории Цвет {#set_led_color_with_block}

Задаёт цвет светодиода по блоку из категории Цвет (`[R, G, B]`).

<BlockImage module="roboids/HamsterS" id="set_led_color_with_block" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Выбор светодиода | левый(left), правый(right), оба(both) | - |
| data | Ввод (цвет) | Блок из категории Цвет или массив `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', *Utils.color_rgb(255, 128, 0))
```

## Изменить цвет светодиода на RGB {#change_by_rgb}

Изменяет цвет светодиода робота HamsterS на заданные значения R, G и B.

<BlockImage module="roboids/HamsterS" id="change_by_rgb" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Выбор светодиода | левый(left), правый(right), оба(both) | - |
| r | Ввод (поле) | Изменение красного | Целое число от -255 до 255 | 0 |
| g | Ввод (поле) | Изменение зелёного | Целое число от -255 до 255 | 0 |
| b | Ввод (поле) | Изменение синего | Целое число от -255 до 255 | 0 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_led_color('both', 10, 0, 0)
```

## Выключить светодиод {#turn_off}

Гасит цвет светодиода.

<BlockImage module="roboids/HamsterS" id="turn_off" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Выбор светодиода | левый(left), правый(right), оба(both) | both |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_off('both')
```

## Установить частоту зуммера {#sound_buzz}

Задаёт звук зуммера робота HamsterS с указанной частотой.  
Диапазон частот, которые робот может издать, — от 122,1 Гц до 4186,0 Гц.  
При вводе значения вне этого диапазона зуммер не издаёт звука.

<BlockImage module="roboids/HamsterS" id="sound_buzz" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| hz | Ввод (блок) | Частота (Гц) | Вещественное число от 122,1 до 4186,0 (иначе 0) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_buzz(440)
```

## Играть ноту {#sound_note}

HamsterS играет заданную ноту.

<BlockImage module="roboids/HamsterS" id="sound_note" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| note | Пункт выпадающего списка | Нота | До(C), До#(C#), Ре(D), Ре#(D#), Ми(E), Фа(F), Фа#(F#), Соль(G), Соль#(G#), Ля(A), Ля#(A#), Си(B) | - |
| octave | Пункт выпадающего списка | Октава | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_note('D', 5)
```

## Воспроизвести звук {#sound_clip}

HamsterS воспроизводит выбранный звуковой клип.  
Если установлен флажок ждать, программа ждёт завершения воспроизведения.

<BlockImage module="roboids/HamsterS" id="sound_clip" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| clip | Пункт выпадающего списка | Название звукового клипа | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'happy'`, `'angry'`, `'sad'` и другие | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_clip('siren', wait=True)
```

## Выключить звук {#sound_off}

Выключает звук робота HamsterS.

<BlockImage module="roboids/HamsterS" id="sound_off" />

### Параметры

(нет)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_off()
```

## Звук воспроизводится? {#sound_playing}

Возвращает true, если звук воспроизводится, и false, если нет.

<BlockImage module="roboids/HamsterS" id="sound_playing" />

### Параметры

(нет)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_playing()
```

## Скорость колеса {#wheel_speed}

Скорость выбранного колеса

<BlockImage module="roboids/HamsterS" id="wheel_speed" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Считываемое колесо | слева(left), справа(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_speed('left')
```

## Датчик приближения {#proximity}

Значение выбранного датчика приближения

<BlockImage module="roboids/HamsterS" id="proximity" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Положение считываемого датчика | слева(left), справа(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.proximity('left')
```

## Датчик поверхности {#floor}

Значение выбранного датчика поверхности

<BlockImage module="roboids/HamsterS" id="floor" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Положение считываемого датчика | слева(left), справа(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.floor('left')
```

## Ускорение по оси {#acceleration}

Значение ускорения свободного падения по выбранной оси

<BlockImage module="roboids/HamsterS" id="acceleration" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Измеряемая ось | x, y, z | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.acceleration('x')
```

## Яркость {#light}

Значение датчика яркости

<BlockImage module="roboids/HamsterS" id="light" />

### Параметры

(нет)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.light()
```

## Температура {#temperature}

Значение датчика температуры

<BlockImage module="roboids/HamsterS" id="temperature" />

### Параметры

(нет)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.temperature()
```

## Уровень сигнала {#signal_strength}

Уровень сигнала

<BlockImage module="roboids/HamsterS" id="signal_strength" />

### Параметры

(нет)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.signal_strength()
```

## Напряжение батареи {#battery}

Напряжение батареи

<BlockImage module="roboids/HamsterS" id="battery" />

### Параметры

(нет)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.battery()
```

## Изменение состояния {#state_change}

Изменилось ли состояние робота

<BlockImage module="roboids/HamsterS" id="state_change" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Вид состояния | От 0 до 7 (см. таблицу ниже) | - |

| unit | Значение | Python |
|------|------|--------|
| 0 | наклон вперёд | `acceleration('x') > 5000` |
| 1 | наклон назад | `acceleration('x') < -5000` |
| 2 | наклон влево | `acceleration('y') > 5000` |
| 3 | наклон вправо | `acceleration('y') < -5000` |
| 4 | переворот вверх дном | `acceleration('z') > 0` |
| 5 | нет переворота | `acceleration('z') < -3000` |
| 6 | обнаружение препятствия или руки | `proximity('left') > 50 or proximity('right') > 50` |
| 7 | постукивание | `tap()` |

### Python
```python
hamster_s = HamsterS(0)

# unit = 0
hamster_s.acceleration('x') > 5000
# unit = 6
hamster_s.proximity('left') > 50 or hamster_s.proximity('right') > 50
# unit = 7
hamster_s.tap()
```

## Установить режим порта ввода-вывода {#io_mode}

Задаёт режим входа порта IO.

<BlockImage module="roboids/HamsterS" id="io_mode" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт ввода-вывода | a, b, оба(both) | - |
| option | Пункт выпадающего списка | Режим ввода-вывода | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.io_mode('both', 'analog_input')
```

## Установить выход порта {#set_output}

Задаёт значение выхода выбранного порта IO.

<BlockImage module="roboids/HamsterS" id="set_output" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт ввода-вывода | a, b, оба(both) | - |
| data | Ввод (блок) | Значение выхода | Целое число от 0 до 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_output('a', 90)
```

## Изменить выход порта {#change_output}

Изменяет значение выхода выбранного порта IO.

<BlockImage module="roboids/HamsterS" id="change_output" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт ввода-вывода | a, b, оба(both) | - |
| data | Ввод (блок) | Изменение значения выхода | Целое число | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_output('a', 10)
```

## Открыть / закрыть захват {#gripper}

Открывает или закрывает захват робота HamsterS.  
В зависимости от значения unit вызывается один из двух методов.

<BlockImage module="roboids/HamsterS" id="gripper" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Действие | открыть(open), закрыть(close) | - |

### Python
```python
hamster_s = HamsterS(0)

# unit = "open"
hamster_s.open_gripper()
# unit = "close"
hamster_s.close_gripper()
```

## Установить угол пускового устройства {#shooter}

Управляет пусковым устройством, задавая его угол. Диапазон угла — от 0 до 180.

<BlockImage module="roboids/HamsterS" id="shooter" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Угол пускового устройства | Целое число от 0 до 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.shooter(45)
```

## Значение входа порта {#input}

Возвращает значение входа порта ввода-вывода робота HamsterS.

<BlockImage module="roboids/HamsterS" id="input" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт ввода-вывода | a, b | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.get_input('a')
```
