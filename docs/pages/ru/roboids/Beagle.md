---
title: Beagle
---

# Beagle

## Объявление экземпляра {#instance}

После добавления блока Beagle в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:

```python
beagle = Beagle(0)
# Когда экземпляров несколько
beagle_1 = Beagle(1)
```

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| index | Пункт выпадающего списка | Номер экземпляра (начиная с 0) | Целое число 0 или больше | 0 |


## Установить скорость колеса {#set_wheel_speed}

Задаёт скорость колеса. Диапазон скорости — от -100 до 100.

<BlockImage module="roboids/Beagle" id="set_wheel_speed" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Выбор колеса | левое(left), правое(right), оба(both) | - |
| speed | Ввод (блок) | Скорость колеса | Целое число от -100 до 100, 0: остановка | - |

### Python
```python
beagle = Beagle(0)

beagle.set_wheel_speed('both', 50)
```

## Двигаться на расстояние {#move_distance}

Едет с текущей скоростью колёс на заданное расстояние.  
Если скорость колёс не задана, робот едет вперёд со скоростью по умолчанию.  
Если значение расстояния равно 0, робот продолжает ехать с текущей скоростью колёс.  
Если установлен флажок ждать, программа ждёт завершения движения.

<BlockImage module="roboids/Beagle" id="move_distance" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Пройденное расстояние | Вещественное число 0 или больше | - |
| unit | Пункт выпадающего списка | Единица расстояния | см(cm), мм(mm), дюйм(inch) | cm |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.move_distance(50, 'cm', wait=True)
```

## Двигаться в течение времени {#move_time}

Едет с текущей скоростью колёс заданное время.  
Если скорость колёс не задана, робот едет вперёд со скоростью по умолчанию.  
Если установлен флажок ждать, программа ждёт завершения движения.

<BlockImage module="roboids/Beagle" id="move_time" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| data | Ввод (блок) | Время движения (в секундах) | Вещественное число 0 или больше | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

# wait = TRUE
beagle.move_time(5, wait=True)
# wait = FALSE
beagle.move_time(0.5, wait=False)
```

## Повернуть на месте {#turn_degree}

Задаёт направление и угол поворота на месте.  
Если установлен флажок ждать, программа ждёт завершения поворота.

<BlockImage module="roboids/Beagle" id="turn_degree" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| direction | Пункт выпадающего списка | Направление поворота | слева(left), справа(right) | - |
| data | Ввод (блок) | Угол поворота (в градусах) | Вещественное число 0 или больше | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.turn_degree('left', 90, wait=True)
```

## Изменить скорость колеса {#change_speed}

Изменяет скорость колёс робота Beagle.  
Новая скорость колеса — это текущая скорость плюс введённое значение.  
Новая заданная скорость колеса ограничивается диапазоном от -100 до 100.

<BlockImage module="roboids/Beagle" id="change_speed" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Выбор колеса | левое(left), правое(right), оба(both) | - |
| speed | Ввод (блок) | Изменение скорости | Целое число от -200 до 200 | - |

### Python
```python
beagle = Beagle(0)

beagle.change_wheel_speed('both', 10)
```

## Остановиться {#stop}

Останавливает движение робота Beagle.  
Скорость обоих колёс робота Beagle обнуляется.

<BlockImage module="roboids/Beagle" id="stop" />

### Параметры

(нет)

### Python
```python
beagle = Beagle(0)

beagle.stop()
```

## Колесо движется? {#wheel_moving}

Возвращает true, если колесо движется, и false, если оно стоит.

<BlockImage module="roboids/Beagle" id="wheel_moving" />

### Параметры

(нет)

### Python
```python
beagle = Beagle(0)

beagle.wheel_moving()
```

## Установить частоту зуммера {#sound_buzz}

Задаёт звук зуммера робота Beagle с указанной частотой.  
Диапазон частот, которые робот может издать, — от 27,5 Гц до 6553,5 Гц.  
При вводе значения вне этого диапазона зуммер не издаёт звука.

<BlockImage module="roboids/Beagle" id="sound_buzz" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| hz | Ввод (блок) | Частота (Гц) | 0 или вещественное число от 27,5 до 6553,5 (иначе 0) | - |

### Python
```python
beagle = Beagle(0)

beagle.sound_buzz(440)
```

## Играть ноту {#sound_note}

Beagle играет заданную ноту.

<BlockImage module="roboids/Beagle" id="sound_note" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| note | Пункт выпадающего списка | Нота | До(C), До#(C#), Ре(D), Ре#(D#), Ми(E), Фа(F), Фа#(F#), Соль(G), Соль#(G#), Ля(A), Ля#(A#), Си(B) | - |
| octave | Пункт выпадающего списка | Октава | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
beagle = Beagle(0)

beagle.sound_note('D', 5)
```

## Воспроизвести звук {#sound_clip}

Beagle воспроизводит выбранный звуковой клип.  
Если установлен флажок ждать, программа ждёт завершения воспроизведения.

<BlockImage module="roboids/Beagle" id="sound_clip" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| clip | Пункт выпадающего списка | Название звукового клипа | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'dibidibidip'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'` и другие | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.sound_clip('siren', wait=True)
```

## Выключить звук {#sound_off}

Выключает звук робота Beagle.

<BlockImage module="roboids/Beagle" id="sound_off" />

### Параметры

(нет)

### Python
```python
beagle = Beagle(0)

beagle.sound_off()
```

## Звук воспроизводится? {#sound_playing}

Возвращает true, если звук воспроизводится, и false, если нет.

<BlockImage module="roboids/Beagle" id="sound_playing" />

### Параметры

(нет)

### Python
```python
beagle = Beagle(0)

beagle.sound_playing()
```

## Скорость колеса {#wheel_speed}

Скорость выбранного колеса

<BlockImage module="roboids/Beagle" id="wheel_speed" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Считываемое колесо | слева(left), справа(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.wheel_speed('left')
```

## Энкодер {#encoder}

Значение энкодера выбранного колеса

<BlockImage module="roboids/Beagle" id="encoder" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Считываемое колесо | слева(left), справа(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.encoder('left')
```

## Гироскоп {#gyroscope}

Значение гироскопа по выбранной оси

<BlockImage module="roboids/Beagle" id="gyroscope" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Измеряемая ось | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.gyroscope('x')
```

## Акселерометр {#accelerometer}

Значение акселерометра по выбранной оси

<BlockImage module="roboids/Beagle" id="accelerometer" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Измеряемая ось | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.accelerometer('x')
```

## Магнитометр {#magnetometer}

Значение магнитометра по выбранной оси

<BlockImage module="roboids/Beagle" id="magnetometer" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Измеряемая ось | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.magnetometer('x')
```

## Температура {#temperature}

Значение датчика температуры

<BlockImage module="roboids/Beagle" id="temperature" />

### Параметры

(нет)

### Python
```python
beagle = Beagle(0)

beagle.temperature()
```

## Уровень сигнала {#signal_strength}

Уровень сигнала

<BlockImage module="roboids/Beagle" id="signal_strength" />

### Параметры

(нет)

### Python
```python
beagle = Beagle(0)

beagle.signal_strength()
```

## Напряжение батареи {#battery}

Напряжение батареи

<BlockImage module="roboids/Beagle" id="battery" />

### Параметры

(нет)

### Python
```python
beagle = Beagle(0)

beagle.battery()
```

## Изменение состояния {#state_change}

Изменилось ли состояние робота

<BlockImage module="roboids/Beagle" id="state_change" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Вид состояния | От 0 до 5 (см. таблицу ниже) | - |

| unit | Условие |
|------|------|
| 0 | `accelerometer('x') > 0.8` |
| 1 | `accelerometer('x') < -0.8` |
| 2 | `accelerometer('y') > 0.8` |
| 3 | `accelerometer('y') < -0.8` |
| 4 | `accelerometer('z') > 0` |
| 5 | `accelerometer('z') < 0` |

### Python
```python
beagle = Beagle(0)

# unit = 0
beagle.accelerometer('x') > 0.8
```

## Запустить / остановить лидар {#lidar_power}

Включает или выключает датчик лидара.

<BlockImage module="roboids/Beagle" id="lidar_power" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| on | Пункт выпадающего списка | Лидар ON / OFF | старт(on=True), стоп(off=False) | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.lidar_power(True)
```

## Расстояние до ~ объекта по лидару {#lidar_value}

Датчик лидара измеряет расстояние до объектов вокруг, на все 360 градусов.  
Отсчёт начинается спереди робота Beagle (значение номер 0) и растёт на 1 против часовой стрелки.

<BlockImage module="roboids/Beagle" id="lidar_value" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Ввод (поле) | Номер объекта (начиная с 0) | Целое число 0 или больше | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_value(0)
```

## Расстояние по лидару по направлениям {#lidar_directions}

Показывает измеренное лидаром расстояние вперёд, назад, вбок и по диагонали.  
Результат — среднее из расстояний в пределах 45 градусов влево и вправо от этого направления.

<BlockImage module="roboids/Beagle" id="lidar_directions" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| direction | Пункт выпадающего списка | Измеряемое направление | вперёд(front), вперёд-влево(left front), влево(left), назад-влево(left back), назад(back), назад-вправо(right back), вправо(right), вперёд-вправо(right front) | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_directions('front')
```

## Лидар включён? {#lidar_state}

Возвращает **истину (True) или ложь (False)** в зависимости от того, включён ли лидар.

<BlockImage module="roboids/Beagle" id="lidar_state" />

### Параметры

(нет)

### Python
```python
beagle = Beagle(0)

beagle.lidar_ready()
```
