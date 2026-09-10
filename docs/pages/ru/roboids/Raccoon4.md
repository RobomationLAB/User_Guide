---
title: RaccoonBot
---

# RaccoonBot

## Объявление экземпляра {#instance}

После добавления блока RaccoonBot в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:

```python
raccoon = RaccoonBot(0)
# Когда экземпляров несколько
raccoon_1 = RaccoonBot(1)
```

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| index | Пункт выпадающего списка | Номер экземпляра (начиная с 0) | Целое число 0 или больше | 0 |


## Включить / выключить двигатель сустава {#motor}

Определяет, снять ли управление двигателем сустава или сохранить его.  
Если ничего не задать, программа начинает работу с включённым управлением двигателями всех суставов.

<BlockImage module="roboids/Raccoon4" id="motor" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Номер сустава | все(-1), 1(1), 2(2), 3(3), 4(4) | -1 |
| on | Флажок | Управление двигателем ON / OFF | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# все суставы, управление двигателем выключено
raccoon.motor(-1, False)

# сустав 1, управление двигателем включено
raccoon.motor(1, True)
```

## Установить скорость сустава {#speed_joint}

Задаёт скорость выбранного сустава.

<BlockImage module="roboids/Raccoon4" id="speed_joint" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| joint | Пункт выпадающего списка | Номер сустава | все(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Ввод (блок) | Скорость сустава | Целое число от -100 до 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_speed_joint(1, 100)
```

## Изменить скорость сустава {#change_speed_joint}

Изменяет скорость выбранного сустава.

<BlockImage module="roboids/Raccoon4" id="change_speed_joint" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| joint | Пункт выпадающего списка | Номер сустава | все(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Ввод (блок) | Изменение скорости | Целое число от -200 до 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_speed_joint(1, 50)
```

## Установить скорость всех суставов сразу {#speed_joints}

Задаёт скорость четырёх суставов сразу.

<BlockImage module="roboids/Raccoon4" id="speed_joints" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (массив) | Массив скоростей 4 суставов | `[joint1, joint2, joint3, joint4]`, каждая от -100 до 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

# массив, записанный напрямую [10, 20, 30, 40]
raccoon.set_speed_joints(10, 20, 30, 40)

# массив из переменной
raccoon.set_speed_joints(*arr)
```

## Установить скорость управления углом сустава {#angle_speed}

Задаёт скорость, с которой суставы управляются в режиме управления углом.

<BlockImage module="roboids/Raccoon4" id="angle_speed" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Максимальная скорость управления углом | Целое число от 0 до 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.angle_max_speed(100)
```

## Установить угол сустава {#angle_joint}

Задаёт угол выбранного сустава.

| joint | min | max |
|-------|-----|-----|
| 1 | -120 | 120 |
| 2 | -90 | 30 |
| 3 | -150 | 0 |
| 4 | -105 | 105 |

<BlockImage module="roboids/Raccoon4" id="angle_joint" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| joint | Пункт выпадающего списка | Номер сустава | все(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Ввод (блок) | Угол сустава (в градусах) | См. таблицу выше (ограничивается автоматически) | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_angle_joint(1, 90, wait=True)
```

## Изменить угол сустава {#change_angle_joint}

Изменяет угол выбранного сустава.

<BlockImage module="roboids/Raccoon4" id="change_angle_joint" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| joint | Пункт выпадающего списка | Номер сустава | все(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Ввод (блок) | Изменение угла (в градусах) | См. таблицу выше (ограничивается автоматически) | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_angle_joint(1, 10, wait=True)
```

## Установить углы всех суставов сразу {#angle_joints}

Задаёт углы четырёх суставов сразу.

<BlockImage module="roboids/Raccoon4" id="angle_joints" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (массив) | Массив углов 4 суставов или название положения | Массив `[j1, j2, j3, j4]` | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# массив, записанный напрямую
raccoon.set_angle_joints(0, 0, 0, 0, wait=True)
```

## Инициализировать положение суставов {#default_angle_joints}

Задаёт углы четырёх суставов по готовому положению (`'zero'`, `'park'`, `'home'`).

<BlockImage module="roboids/Raccoon4" id="default_angle_joints" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Выпадающий список | Название положения | `'zero'` / `'park'` / `'home'` | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

Готовые положения:
- `'zero'` → `[0, 0, 0, 0]`
- `'park'` → `[0, 25, -145, -60]`
- `'home'` → `[0, -10, -140, 60]`

### Python
```python
raccoon = RaccoonBot(0)

# готовое положение
raccoon.set_angle_joints('home', wait=True)
```

## Сохранить углы суставов {#save_encoder}

Сохраняет текущие значения энкодеров в выбранной переменной.

<BlockImage module="roboids/Raccoon4" id="save_encoder" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| encoder | Переменная | Название переменной для сохранения | Переменная | - |
| data | Ввод (массив) | Сохраняемый начальный массив | Массив из 4 элементов или пустой массив | - |

### Python
```python
raccoon = RaccoonBot(0)
encoder = None

encoder = raccoon.save_encoder([3, -6, -73, 60])
```

## Установить выбранную координату {#set_coordinate}

Перемещает руку робота, задавая выбранную координату.  
Диапазоны координат следующие.  
Относительно запястья => x: от -20,0 см до 20,0 см, y: от -10,0 см до 20,0 см, z: от -2,0 мм до 28,0 см  
Относительно захвата => диапазон может отличаться в зависимости от подключённого устройства.  
Захват фиксируется горизонтально или вертикально относительно поверхности.  
При вводе координат, до которых робот не может добраться, команда пропускается.

<BlockImage module="roboids/Raccoon4" id="set_coordinate" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| origin | Пункт выпадающего списка | Точка отсчёта | запястье(wrist), захват(end_effector) | - |
| pos | Пункт выпадающего списка | Ось | x, y, z | - |
| data | Ввод (блок) | Значение координаты | x: от -20 до 20 см, y: от -10 до 20 см, z: от -2 до 28 см | - |
| unit | Пункт выпадающего списка | Единица | см(cm), мм(mm), дюйм(inch) | cm |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# установка координаты x в 10 см
raccoon.set_coordinate('wrist', 'x', 10, 'cm', wait=True)

# координата z относительно end_effector
raccoon.set_coordinate('end_effector', 'z', 15, 'cm', wait=True)
```

## Изменить выбранную координату {#change_coordinate}

Перемещает руку робота, изменяя выбранную координату относительно текущего положения.  
Диапазоны координат следующие.  
Относительно запястья => x: от -20,0 см до 20,0 см, y: от -10,0 см до 20,0 см, z: от -2,0 мм до 28,0 см  
Относительно захвата => диапазон может отличаться в зависимости от подключённого устройства.  
Захват фиксируется горизонтально или вертикально относительно поверхности.  
При вводе координат, до которых робот не может добраться, команда пропускается.

<BlockImage module="roboids/Raccoon4" id="change_coordinate" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| origin | Пункт выпадающего списка | Точка отсчёта | запястье(wrist), захват(end_effector) | - |
| pos | Пункт выпадающего списка | Ось | x, y, z | - |
| data | Ввод (блок) | Изменение координаты | Вещественное число | - |
| unit | Пункт выпадающего списка | Единица | см(cm), мм(mm), дюйм(inch) | cm |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_coordinate('wrist', 'y', 5, 'cm', wait=True)
```

## Перейти к координатам xyz {#set_coordinates}

Задаёт координаты x, y и z сразу указанными значениями.  

<BlockImage module="roboids/Raccoon4" id="set_coordinates" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| origin | Пункт выпадающего списка | Точка отсчёта | запястье(wrist), захват(end_effector) | - |
| x | Ввод (блок) | Координата x | Вещественное число | - |
| y | Ввод (блок) | Координата y | Вещественное число | - |
| z | Ввод (блок) | Координата z | Вещественное число | - |
| unit | Пункт выпадающего списка | Единица | см(cm), мм(mm), дюйм(inch) | cm |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_coordinates('wrist', 0, 15, 20, 'cm', wait=True)
```

## Установить фиксацию захвата {#lock}

Задаёт направление, в котором фиксируется захват. После выбора варианта горизонтально или вертикально скоростью и углом сустава 4 управлять уже нельзя.

<BlockImage module="roboids/Raccoon4" id="lock" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| mode | Пункт выпадающего списка | Направление фиксации | нет(none), горизонтально(horizontal), вертикально(vertical) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.lock('horizontal')
```

## Взять / положить предмет захватом {#end_effector}

Берёт или кладёт предмет захватом.  
В зависимости от значения выпадающего списка unit вызывается один из двух методов.

<BlockImage module="roboids/Raccoon4" id="end_effector" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Действие | взять (закрыть)(pick), положить (открыть)(place) | - |

### Python
```python
raccoon = RaccoonBot(0)

# unit = "pick"
raccoon.pick()
# unit = "place"
raccoon.place()
```

## Устройство захвата {#end_effector_device}

Номер подключённого сейчас захвата  
(1, 3, 4: клещевой захват, 2: вакуумный захват)

<BlockImage module="roboids/Raccoon4" id="end_effector_device" />

### Параметры

(нет)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_device()
```

## Состояние захвата {#end_effector_status}

Держит ли захват предмет  
(0: положен, 1: взят)

<BlockImage module="roboids/Raccoon4" id="end_effector_status" />

### Параметры

(нет)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_status()
```

## Играть ноту {#sound_note}

RaccoonBot играет заданную ноту.

<BlockImage module="roboids/Raccoon4" id="sound_note" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| note | Пункт выпадающего списка | Нота | До(C), До#(C#), Ре(D), Ре#(D#), Ми(E), Фа(F), Фа#(F#), Соль(G), Соль#(G#), Ля(A), Ля#(A#), Си(B) | - |
| octave | Пункт выпадающего списка | Октава | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_note('D', 5)
```

## Воспроизвести звук {#sound_clip}

RaccoonBot воспроизводит выбранный звуковой клип.

<BlockImage module="roboids/Raccoon4" id="sound_clip" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| clip | Пункт выпадающего списка | Название звукового клипа | `'mute'`, `'beep'`, `'siren'`, `'robot'`, `'connect'`, `'wake_up'`, `'start'`, `'bye'` и другие | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_clip('siren', wait=True)
```

## Выключить звук {#sound_off}

Выключает звук робота RaccoonBot.

<BlockImage module="roboids/Raccoon4" id="sound_off" />

### Параметры

(нет)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_off()
```

## Энкодер {#encoder}

Значение энкодера выбранного сустава

<BlockImage module="roboids/Raccoon4" id="encoder" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| joint | Пункт выпадающего списка | Номер сустава (или все суставы) | 1, 2, 3, 4, все(-1) | -1 |

### Python
```python
raccoon = RaccoonBot(0)

# joint = 1
raccoon.encoder(1)

# все суставы
raccoon.encoder(-1)
```

## Координата выбранного элемента {#coordinate}

Возвращает текущие координаты xyz точки отсчёта.  
Если `pos` пропущен, возвращается весь массив `[x, y, z]`, а если задан — только значение для этой оси.

<BlockImage module="roboids/Raccoon4" id="coordinate" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| origin | Пункт выпадающего списка | Точка отсчёта | запястье(wrist), захват(end_effector) | wrist |
| pos | Пункт выпадающего списка | Ось (или все) | x, y, z, все (если пропущено, возвращается весь массив) | None (все) |

### Python
```python
raccoon = RaccoonBot(0)

# выбранная ось
raccoon.get_coordinates('wrist', 'x')

# все (массив из 3 элементов)
raccoon.get_coordinates('wrist')
```

## Уровень сигнала {#signal_strength}

Уровень сигнала

<BlockImage module="roboids/Raccoon4" id="signal_strength" />

### Параметры

(нет)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.signal_strength()
```

## Напряжение батареи {#battery}

Напряжение батареи

<BlockImage module="roboids/Raccoon4" id="battery" />

### Параметры

(нет)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.battery()
```

## Кнопка нажата? {#button}

Нажата ли выбранная кнопка и произошло ли событие щелчка

<BlockImage module="roboids/Raccoon4" id="button" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Название кнопки | teach(teach), play(play), power(power), delete(delete), любая(any) | - |
| event | Пункт выпадающего списка | Вид события | нажата(pressed), щелчок(click), долгий щелчок(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.button('teach', 'pressed')
```

## Установить скорость конвейера {#conveyor_speed}

Задаёт скорость ленты конвейера. Диапазон скорости — от -100 до 100.

<BlockImage module="roboids/Raccoon4" id="conveyor_speed" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Скорость конвейера | Целое число от -100 до 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_conveyor_speed(100)
```

## Переместить конвейер на расстояние {#conveyor_distance}

Перемещает конвейер на заданное расстояние.

<BlockImage module="roboids/Raccoon4" id="conveyor_distance" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Пройденное расстояние | Вещественное число 0 или больше | - |
| unit | Пункт выпадающего списка | Единица расстояния | см(cm), мм(mm), дюйм(inch) | cm |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_move(50, 'cm', wait=True)
```

## Изменить скорость конвейера {#change_conveyor_speed}

Изменяет скорость ленты конвейера.

<BlockImage module="roboids/Raccoon4" id="change_conveyor_speed" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Изменение скорости | Целое число от -200 до 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_conveyor_speed(10)
```

## Остановить конвейер {#stop_conveyor}

Останавливает конвейер.

<BlockImage module="roboids/Raccoon4" id="stop_conveyor" />

### Параметры

(нет)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.stop_conveyor()
```

## Конвейер работает? {#conveyor_running}

Работает ли лента конвейера

<BlockImage module="roboids/Raccoon4" id="conveyor_running" />

### Параметры

(нет)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_running()
```

## Кнопка конвейера нажата? {#conveyor_button}

Нажата ли кнопка конвейера и произошло ли событие щелчка

<BlockImage module="roboids/Raccoon4" id="conveyor_button" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| event | Пункт выпадающего списка | Вид события | нажата(pressed), щелчок(click), долгий щелчок(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_button('pressed')
```
