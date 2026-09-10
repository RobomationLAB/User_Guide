---
title: Cheese Stick
---

# Cheese Stick

## Объявление экземпляра {#instance}

После добавления блока Cheese Stick(CheeseStick) в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:

```python
cheesestick = CheeseStick(0)
# Когда экземпляров несколько
cheesestick_1 = CheeseStick(1)
```

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| index | Пункт выпадающего списка | Номер экземпляра (начиная с 0) | Целое число 0 или больше | 0 |


## Настроить порт как вход {#set_input_mode}

Задаёт режим входа выбранного порта.

<BlockImage module="roboids/CheeseStick" id="set_input_mode" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт входа | Sa, Sb, Sc, La, Lb, Lc | - |
| option | Пункт выпадающего списка | Режим входа | makey(makey), кнопка(button), цифровой pullup(digital_pullup), цифровой pulldown(digital_pulldown), аналоговый(analog), аналоговое напряжение(analog_voltage) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_mode('Sa', 'button')
```

## Преобразовать диапазон входа {#set_input_range}

Преобразует входное значение выбранного порта в заданный диапазон от минимума до максимума.  
Диапазон входного значения — от 0 до 255.  
Диапазон значений, в которые можно преобразовать, — от -100 до 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт входа | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Ввод (поле) | Минимальное значение источника | Целое число от 0 до 255 | - |
| src_max | Ввод (поле) | Максимальное значение источника | Целое число от 0 до 255 | - |
| dst_min | Ввод (поле) | Минимальное значение после преобразования | Целое число от -100 до 100 | - |
| dst_max | Ввод (поле) | Максимальное значение после преобразования | Целое число от -100 до 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range('Sa', 0, 255, 0, 100)
```

## Преобразовать диапазон входа со средним значением {#set_input_range_median}

Преобразует входное значение выбранного порта в заданный диапазон: минимум, среднее значение, максимум.  
Диапазон входного значения — от 0 до 255.  
Диапазон значений, в которые можно преобразовать, — от -100 до 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range_median" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт входа | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Ввод (поле) | Минимальное значение источника | Целое число от 0 до 255 | - |
| src_median | Ввод (поле) | Среднее значение источника | Целое число от 0 до 255 | - |
| src_max | Ввод (поле) | Максимальное значение источника | Целое число от 0 до 255 | - |
| dst_min | Ввод (поле) | Минимальное значение после преобразования | Целое число от -100 до 100 | - |
| dst_median | Ввод (поле) | Среднее значение после преобразования | Целое число от -100 до 100 | - |
| dst_max | Ввод (поле) | Максимальное значение после преобразования | Целое число от -100 до 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Значение входа {#get_input}

Входное значение выбранного порта

<BlockImage module="roboids/CheeseStick" id="get_input" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт входа | Sa, Sb, Sc, La, Lb, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_input('Sa')
```

## Установить режим импульсного входа {#set_pulse_input_mode}

Задаёт режим импульсного входа выбранного порта.

<BlockImage module="roboids/CheeseStick" id="set_pulse_input_mode" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт импульсного входа | Sc, Lc | - |
| option | Пункт выпадающего списка | Режим подтяжки | импульс (default), импульс (pull-up), импульс (pull-down) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pulse_input_mode('Sc', 'pull-up')
```

## Значение импульсного входа {#get_pulse_input}

Обнаружен ли импульс на выбранном порте

<BlockImage module="roboids/CheeseStick" id="get_pulse_input" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт импульсного входа | Sc, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_pulse_input('Sc')
```

## Установить цифровой выход {#set_digital_output}

Задаёт значение цифрового выхода выбранного порта.  
На выбор есть значения 0 и 1.

<BlockImage module="roboids/CheeseStick" id="set_digital_output" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт цифрового выхода | Sa, Sb, Sc, La, Lb, Lc, Mab, Mcd | - |
| value | Пункт выпадающего списка | Значение выхода | 0 или 1 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_digital_output('Sa', 1)
```

## Установить ШИМ-выход {#set_pwm_output}

Задаёт значение ШИМ-выхода выбранного порта.  
Диапазон значений на выбор — от 0 до 100.

<BlockImage module="roboids/CheeseStick" id="set_pwm_output" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт ШИМ-выхода | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Ввод (поле) | Значение ШИМ | Целое число от 0 до 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pwm_output('Sa', 50)
```

## Изменить ШИМ-выход {#change_pwm_output}

Изменяет значение ШИМ-выхода выбранного порта.  
Диапазон значений на выбор — от -100 до 100.

<BlockImage module="roboids/CheeseStick" id="change_pwm_output" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Порт ШИМ-выхода | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Ввод (поле) | Изменение значения ШИМ | Целое число от -100 до 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.change_pwm_output('Sa', 10)
```

## Установить частоту зуммера {#sound_buzz}

Задаёт звук зуммера модуля Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_buzz" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| hz | Ввод (блок) | Частота (Гц) | Вещественное число от 0 до 6553,5 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_buzz(440)
```

## Играть ноту {#sound_note}

Cheese Stick играет заданную ноту.

<BlockImage module="roboids/CheeseStick" id="sound_note" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| note | Пункт выпадающего списка | Нота | До(C), До#(C#), Ре(D), Ре#(D#), Ми(E), Фа(F), Фа#(F#), Соль(G), Соль#(G#), Ля(A), Ля#(A#), Си(B) | - |
| octave | Пункт выпадающего списка | Октава | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_note('D', 5)
```

## Воспроизвести звук {#sound_clip}

Cheese Stick воспроизводит выбранный звуковой клип.

<BlockImage module="roboids/CheeseStick" id="sound_clip" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| clip | Пункт выпадающего списка | Название звукового клипа | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'happy'`, `'angry'`, `'sad'` и другие | - |
| wait | Флажок | Ждать ли завершения | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_clip('siren', wait=True)
```

## Выключить звук {#sound_off}

Выключает звук модуля Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_off" />

### Параметры

(нет)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_off()
```

## Ускорение по оси {#acceleration}

Значение ускорения свободного падения по выбранной оси

<BlockImage module="roboids/CheeseStick" id="acceleration" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Измеряемая ось | x, y, z | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x')
```

## Температура {#temperature}

Значение датчика температуры

<BlockImage module="roboids/CheeseStick" id="temperature" />

### Параметры

(нет)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.temperature()
```

## Уровень сигнала {#signal_strength}

Уровень сигнала

<BlockImage module="roboids/CheeseStick" id="signal_strength" />

### Параметры

(нет)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.signal_strength()
```

## Напряжение батареи {#battery}

Напряжение батареи

<BlockImage module="roboids/CheeseStick" id="battery" />

### Параметры

(нет)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.battery()
```

## Изменение состояния {#state_change}

Изменилось ли состояние робота

<BlockImage module="roboids/CheeseStick" id="state_change" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Вид состояния | От 0 до 7 (см. таблицу ниже) | - |

| unit | Условие |
|------|------|
| 0 | `acceleration('x') > 960` |
| 1 | `acceleration('x') < -960` |
| 2 | `acceleration('y') > 960` |
| 3 | `acceleration('y') < -960` |
| 4 | `acceleration('z') > 960` |
| 5 | `acceleration('z') < -960` |
| 6 | `tap()` (событие постукивания) |
| 7 | `fall()` (событие падения) |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x') > 960
cheesestick.tap()    # случай 6
cheesestick.fall()   # случай 7
```
