---
title: Turtle
---

# Turtle

## Объявление экземпляра {#instance}

После добавления блока Turtle в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:

```python
turtle = Turtle(0)
# Когда экземпляров несколько
turtle_1 = Turtle(1)
```

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| index | Пункт выпадающего списка | Номер экземпляра (начиная с 0) | Целое число 0 или больше | 0 |


## Установить скорость колеса {#set_wheel_speed}

Задаёт скорость колеса. Диапазон скорости — от -100 до 100.

<BlockImage module="roboids/Turtle" id="set_wheel_speed" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Выбор колеса | левое(left), правое(right), оба(both) | - |
| speed | Ввод (блок) | Скорость колеса | Целое число от -100 до 100, 0: остановка | - |

### Python
```python
turtle = Turtle(0)

turtle.set_wheel_speed('both', 50)
```

## Двигаться на расстояние {#move_distance}

Задаёт расстояние, которое робот должен проехать.  
Если скорость колёс не задана, робот не едет.  
Если значение расстояния равно 0, робот продолжает ехать с текущей скоростью колёс.  
Если установлен флажок ждать, программа ждёт завершения движения.

<BlockImage module="roboids/Turtle" id="move_distance" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Пройденное расстояние | Вещественное число 0 или больше | - |
| unit | Пункт выпадающего списка | Единица расстояния | см(cm), мм(mm), дюйм(inch) | cm |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.move_distance(50, 'cm', wait=True)
```

## Двигаться в течение времени {#move_time}

Едет с текущей скоростью колёс заданное время.  
Если скорость колёс не задана, робот едет вперёд со скоростью по умолчанию.  
Если установлен флажок ждать, программа ждёт завершения движения.

<BlockImage module="roboids/Turtle" id="move_time" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Время движения (в секундах) | Вещественное число 0 или больше | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

# wait = TRUE
turtle.move_time(5, wait=True)
# wait = FALSE
turtle.move_time(0.5, wait=False)
```

## Повернуть на месте {#turn_degree}

Задаёт направление и угол поворота на месте.  
Если установлен флажок ждать, программа ждёт завершения поворота.

<BlockImage module="roboids/Turtle" id="turn_degree" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| direction | Пункт выпадающего списка | Направление поворота | слева(left), справа(right) | - |
| data | Ввод (блок) | Угол поворота (в градусах) | Вещественное число 0 или больше | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.turn_degree('left', 90, wait=True)
```

## Изменить скорость колеса {#change_speed}

Изменяет скорость колёс робота Turtle.  
Новая скорость колеса — это текущая скорость плюс введённое значение.

<BlockImage module="roboids/Turtle" id="change_speed" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Выбор колеса | левое(left), правое(right), оба(both) | - |
| speed | Ввод (блок) | Изменение скорости | Целое число от -200 до 200 | - |

### Python
```python
turtle = Turtle(0)

turtle.change_wheel_speed('both', 10)
```

## Остановиться {#stop}

Останавливает движение робота Turtle.

<BlockImage module="roboids/Turtle" id="stop" />

### Параметры

(нет)

### Python
```python
turtle = Turtle(0)

turtle.stop()
```

## Колесо движется? {#wheel_moving}

Возвращает true, если колесо движется, и false, если оно стоит.

<BlockImage module="roboids/Turtle" id="wheel_moving" />

### Параметры

(нет)

### Python
```python
turtle = Turtle(0)

turtle.wheel_moving()
```

## Поворот вокруг колеса {#pivot}

Задаёт колесо, вокруг которого происходит поворот, а также направление и угол.  
Если установлен флажок ждать, программа ждёт завершения поворота.

<BlockImage module="roboids/Turtle" id="pivot" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| base | Пункт выпадающего списка | Колесо, вокруг которого происходит поворот | левое(left_wheel), правое(right_wheel) колесо | - |
| direction | Пункт выпадающего списка | Направление поворота | вперёд(forward), назад(backward) | - |
| data | Ввод (блок) | Угол поворота (в градусах) | Вещественное число 0 или больше | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot('left_wheel', 'forward', 90, wait=True)
```

## Нарисовать окружность {#pivot_circle}

При рисовании окружности маркером задаёт направление, радиус и угол поворота.  
Если установлен флажок ждать, программа ждёт завершения поворота.

<BlockImage module="roboids/Turtle" id="pivot_circle" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| direction | Пункт выпадающего списка | Направление поворота | вперёд-влево(left_forward), назад-влево(left_backward), вперёд-вправо(right_forward), назад-вправо(right_backward) | - |
| degree | Ввод (блок) | Угол поворота (в градусах) | Вещественное число 0 или больше | - |
| radius | Ввод (блок) | Радиус поворота | Вещественное число 0 или больше | - |
| unit | Пункт выпадающего списка | Единица радиуса | см(cm), мм(mm), дюйм(inch) | cm |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot_circle('left_forward', 90, 1, 'cm', wait=True)
```

## Следовать по линии {#trace_line}

Едет вдоль линии выбранного цвета, используя датчик цвета пола.

<BlockImage module="roboids/Turtle" id="trace_line" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| line | Пункт выпадающего списка | Цвет линии, вдоль которой едет робот | чёрный(black), красный(red), зелёный(green), синий(blue), любой(any) | black |

### Python
```python
turtle = Turtle(0)

turtle.trace_line('black')
```

## Следовать по линии до цвета {#trace_line_until_color}

Используя датчик цвета пола, едет вдоль линии цвета A, пока не встретит цвет B.

<BlockImage module="roboids/Turtle" id="trace_line_until_color" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| line | Пункт выпадающего списка | Цвет линии, вдоль которой едет робот | чёрный(black), красный(red), зелёный(green), синий(blue), любой(any) | - |
| color | Пункт выпадающего списка | Цвет, на котором робот остановится | чёрный(black), красный(red), зелёный(green), голубой(cyan), синий(blue), пурпурный(magenta), любой(any) | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_line_until_color('black', 'red', wait=True)
```

## Проезд перекрёстка и остановка на следующем {#intersection}

Turtle поворачивает на перекрёстке в заданном направлении, а затем едет до следующего перекрёстка.  
Если установлен флажок ждать, программа ждёт завершения движения.  

<BlockImage module="roboids/Turtle" id="intersection" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| direction | Пункт выпадающего списка | Направление движения на перекрёстке | ехать вперёд(forward), повернуть налево(left), повернуть направо(right), развернуться(uturn) | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_intersection('left', wait=True)
```

## Установить скорость движения по линии {#set_trace_speed}

Задаёт скорость движения вдоль линии. Диапазон скорости — от 1 до 10.

<BlockImage module="roboids/Turtle" id="set_trace_speed" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Скорость движения по линии | Целое число от 1 до 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_speed(5)
```

## Установить коэффициент движения по линии {#set_trace_gain}

Задаёт, насколько сильно робот корректирует направление при движении вдоль линии. Диапазон коэффициента — от 1 до 10.

<BlockImage module="roboids/Turtle" id="set_trace_gain" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Коэффициент коррекции направления | Целое число от 1 до 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_gain(5)
```

## Прекратить движение по линии {#stop_trace}

Завершает движение робота Turtle вдоль линии.

<BlockImage module="roboids/Turtle" id="stop_trace" />

### Параметры

(нет)

### Python
```python
turtle = Turtle(0)

turtle.stop_trace()
```

## Установить цвет головного светодиода {#set_led_color}

Задаёт цвет светодиода на голове робота Turtle.  
Цвет, выбранный в палитре, превращается в **название цвета** (текст на английском) и в таком виде попадает в код. (В коде появляется название цвета, а не числовые значения R, G, B.)

<BlockImage module="roboids/Turtle" id="set_led_color" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| color | Цвет | Выбор в палитре цветов → превращение в название цвета (на английском) | Названия цветов: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color('red')
```

## Установить цвет головного светодиода блоком из категории Цвет {#set_led_color_with_block}

Задаёт цвет светодиода на голове по результату блока из категории Цвет (`[R, G, B]`).

<BlockImage module="roboids/Turtle" id="set_led_color_with_block" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (цвет) | Блок из категории Цвет или массив `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color(*Utils.color('red'))
```

## Изменить цвет светодиода на RGB {#change_by_rgb}

Прибавляет введённые изменения R, G и B к текущему цвету светодиода на голове и задаёт новый цвет.

<BlockImage module="roboids/Turtle" id="change_by_rgb" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| r | Ввод (поле) | Изменение красного | Целое число от -255 до 255 | 0 |
| g | Ввод (поле) | Изменение зелёного | Целое число от -255 до 255 | 0 |
| b | Ввод (поле) | Изменение синего | Целое число от -255 до 255 | 0 |

### Python
```python
turtle = Turtle(0)

turtle.change_led_color(10, 0, 0)
```

## Выключить светодиод на голове {#turn_off}

Гасит цвет светодиода на голове.

<BlockImage module="roboids/Turtle" id="turn_off" />

### Параметры

(нет)

### Python
```python
turtle = Turtle(0)

turtle.turn_off()
```

## Установить частоту зуммера {#sound_buzz}

Задаёт звук зуммера робота Turtle с указанной частотой.

<BlockImage module="roboids/Turtle" id="sound_buzz" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| hz | Ввод (блок) | Частота (Гц) | Вещественное число от 0 до 6553,5 | - |

### Python
```python
turtle = Turtle(0)

turtle.sound_buzz(440)
```

## Играть ноту {#sound_note}

Turtle играет заданную ноту.

<BlockImage module="roboids/Turtle" id="sound_note" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| note | Пункт выпадающего списка | Нота | До(C), До#(C#), Ре(D), Ре#(D#), Ми(E), Фа(F), Фа#(F#), Соль(G), Соль#(G#), Ля(A), Ля#(A#), Си(B) | - |
| octave | Пункт выпадающего списка | Октава | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
turtle = Turtle(0)

turtle.sound_note('D', 5)
```

## Воспроизвести звук {#sound_clip}

Turtle воспроизводит выбранный звуковой клип.

<BlockImage module="roboids/Turtle" id="sound_clip" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| clip | Пункт выпадающего списка | Название звукового клипа | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` и другие | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.sound_clip('siren', wait=True)
```

## Выключить звук {#sound_off}

Выключает звук робота Turtle.

<BlockImage module="roboids/Turtle" id="sound_off" />

### Параметры

(нет)

### Python
```python
turtle = Turtle(0)

turtle.sound_off()
```

## Звук воспроизводится? {#sound_playing}

Возвращает true, если звук воспроизводится, и false, если нет.

<BlockImage module="roboids/Turtle" id="sound_playing" />

### Параметры

(нет)

### Python
```python
turtle = Turtle(0)

turtle.sound_playing()
```

## Скорость колеса {#wheel_speed}

Скорость выбранного колеса

<BlockImage module="roboids/Turtle" id="wheel_speed" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Считываемое колесо | слева(left), справа(right) | - |

### Python
```python
turtle = Turtle(0)

turtle.wheel_speed('left')
```

## Датчик цвета пола {#floor}

Значение датчика цвета пола

<BlockImage module="roboids/Turtle" id="floor" />

### Параметры

(нет)

### Python
```python
turtle = Turtle(0)

turtle.floor()
```

## Цвет карточки {#card_color}

Название цвета карточки, считанного датчиком цвета пола

<BlockImage module="roboids/Turtle" id="card_color" />

### Параметры

(нет)

### Python
```python
turtle = Turtle(0)

turtle.card_color()
```

## Цветовой узор карточки {#card_pattern}

Цветовой узор карточки, считанный датчиком цвета пола

<BlockImage module="roboids/Turtle" id="card_pattern" />

### Параметры

(нет)

### Python
```python
turtle = Turtle(0)

turtle.card_pattern()
```

## Ускорение по оси {#acceleration}

Значение ускорения свободного падения по выбранной оси

<BlockImage module="roboids/Turtle" id="acceleration" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Измеряемая ось | x, y, z | - |

### Python
```python
turtle = Turtle(0)

turtle.acceleration('x')
```

## Температура {#temperature}

Значение датчика температуры

<BlockImage module="roboids/Turtle" id="temperature" />

### Параметры

(нет)

### Python
```python
turtle = Turtle(0)

turtle.temperature()
```

## Уровень сигнала {#signal_strength}

Уровень сигнала

<BlockImage module="roboids/Turtle" id="signal_strength" />

### Параметры

(нет)

### Python
```python
turtle = Turtle(0)

turtle.signal_strength()
```

## Напряжение батареи {#battery}

Напряжение батареи

<BlockImage module="roboids/Turtle" id="battery" />

### Параметры

(нет)

### Python
```python
turtle = Turtle(0)

turtle.battery()
```

## Касается цвета? {#color_read}

Проверяет датчиком цвета робота Turtle, касается ли он указанного цвета, и возвращает **истину (True) или ложь (False)**.

<BlockImage module="roboids/Turtle" id="color_read" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| color | Пункт выпадающего списка | Название цвета | unknown, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_color('red')
```

## Узор карточки — это ~? {#pattern_read}

Возвращает **истину (True) или ложь (False)** в зависимости от того, совпадает ли цветовой узор карточки, считанный датчиком цвета, с заданным.

<BlockImage module="roboids/Turtle" id="pattern_read" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| pattern | Пункт выпадающего списка | Название узора карточки | `'red_yellow'`, `'red_green'`, `'blue_red'` | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_pattern('red_yellow')
```

## Состояние задней кнопки {#button}

Нажата ли кнопка на спине и было ли нажатие

<BlockImage module="roboids/Turtle" id="button" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| event | Пункт выпадающего списка | Вид состояния кнопки | нажата(pressed), щелчок(click), долгий щелчок(long_click) | - |  

### Python
```python
turtle = Turtle(0)

turtle.button('pressed')
```

## Изменение состояния {#state_change}

Изменилось ли состояние робота

<BlockImage module="roboids/Turtle" id="state_change" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Вид состояния | От 0 до 5 (см. таблицу ниже) | - |

| unit | Условие |
|------|------|
| 0 | `acceleration('x') > 50` |
| 1 | `acceleration('x') < -50` |
| 2 | `acceleration('y') > 50` |
| 3 | `acceleration('y') < -50` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -30` |

### Python
```python
turtle = Turtle(0)

# unit = 0
turtle.acceleration('x') > 50
```
