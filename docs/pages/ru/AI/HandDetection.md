---
title: Распознавание рук
---

# Распознавание рук

## Объявление экземпляра {#instance}

После добавления блока Распознавание рук(HandDetection) в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:

```python
hand_detection = HandDetection(0)
# Когда экземпляров несколько
hand_detection_1 = HandDetection(1)
```

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| index | Пункт выпадающего списка | Номер экземпляра (начиная с 0) | Целое число 0 или больше | 0 |


## Выбрать камеру {#device}

Задаёт камеру, используемую для распознавания рук.

<BlockImage module="AI/HandDetection" id="device" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Название устройства камеры | Название камеры в системе | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.device('')
```

## Загрузить модель рук {#load_model}

Загружает обученную модель рук. Без этого шага функции модуля «Распознавание рук» использовать нельзя.

<BlockImage module="AI/HandDetection" id="load_model" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| wait | Флажок | Ждать ли завершения загрузки | TRUE / FALSE | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.load_model(wait=True)
```

## Выбрать цель распознавания {#max_hands}

Определяет, распознаётся ли при поиске рук одна рука или обе.

<BlockImage module="AI/HandDetection" id="max_hands" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Количество рук | одна рука(one), обе руки(both) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.max_hands('one')
hand_detection.max_hands('both')
```

## Распознать руку один раз {#detect_once}

Находит руку, которая сейчас на экране, и отмечает её только один раз.

<BlockImage module="AI/HandDetection" id="detect_once" />

### Параметры

(нет)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detect_once()
```

## Запустить / остановить непрерывное распознавание рук {#detect_continuous}

Непрерывно отслеживает руку на экране и отмечает её на изображении.

<BlockImage module="AI/HandDetection" id="detect_continuous" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Действие | запустить(start), остановить(stop) | - |

### Python
```python
hand_detection = HandDetection(0)

# unit = "start"
hand_detection.detect_continuous()
# unit = "stop"
hand_detection.stop()
```

## Показать результат {#display}

Определяет, показывать ли на изображении с камеры результат распознавания рук.

<BlockImage module="AI/HandDetection" id="display" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| on | Пункт выпадающего списка | Отображение ON / OFF | показать(on=True), скрыть(off=False) | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.display(True)
hand_detection.display(False)
```

## Координаты частей руки {#hand_data}

Возвращает положение ладони или запястья выбранной руки.

<BlockImage module="AI/HandDetection" id="hand_data" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| side | Пункт выпадающего списка | Какая рука | левая(left), правая(right) | - |
| unit | Пункт выпадающего списка | Часть руки | ладонь(palm), запястье(wrist) | - |
| pos | Пункт выпадающего списка | Вид координаты или размера | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'palm', 'x')
hand_detection.hand('right', 'wrist', 'y')
hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Координаты суставов пальцев {#joint_data}

Возвращает координаты суставов выбранного пальца.

<BlockImage module="AI/HandDetection" id="joint_data" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| side | Пункт выпадающего списка | Какая рука | левая(left), правая(right) | - |
| unit | Пункт выпадающего списка | Палец | большой(thumb), указательный(index), средний(middle), безымянный(ring), мизинец(pinky) | - |
| joint | Пункт выпадающего списка | Положение сустава | первый сустав(first), второй сустав(second), третий сустав(third), кончик(last) | - |
| pos | Пункт выпадающего списка | Координата | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.finger('left', 'index', 'first', 'x')
hand_detection.finger('right', 'thumb', 'last', 'y')
```

## Прямоугольник руки {#hand_square}

Возвращает положение и размер прямоугольника, охватывающего выбранную руку.

<BlockImage module="AI/HandDetection" id="hand_square" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| side | Пункт выпадающего списка | Какая рука | левая(left), правая(right) | - |
| unit | Пункт выпадающего списка | Часть руки | рука(hand), ладонь(palm) | - |
| pos | Пункт выпадающего списка | Сведения о прямоугольнике | мин. позиция x(min_x), макс. позиция x(max_x), мин. позиция y(min_y), макс. позиция y(max_y), ширина(width), высота(height), площадь(area) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Расстояние между руками {#hand_to_hand_distance}

Возвращает расстояние между двумя частями рук.

<BlockImage module="AI/HandDetection" id="hand_to_hand_distance" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit1 | Ввод (строка) | Первая часть руки | рука: `'side_unit'` (например, `'left_palm'`). side=left/right, unit=palm/wrist/hand  | - |
| unit2 | Ввод (строка) | Вторая часть руки | рука: `'side_unit'` (например, `'right_palm'`). side=left/right, unit=palm/wrist/hand | - |
| type | Пункт выпадающего списка | Вид расстояния | расстояние (пропущено или None), расстояние по горизонтали(horizontal), расстояние по вертикали(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# рука ↔ рука / расстояние
hand_detection.get_distance('left_palm', 'right_palm')  
```

## Расстояние между рукой и пальцем {#hand_to_joint_distance}

Возвращает расстояние между частью руки и суставом пальца.

<BlockImage module="AI/HandDetection" id="hand_to_joint_distance" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit1 | Ввод (строка) | Первая часть | рука: `'side_unit'` (например, `'left_palm'`).side=left/right, unit=palm/wrist/hand | - |
| unit2 | Ввод (строка) | Вторая часть | палец: `'side_unit_joint'` (например, `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Пункт выпадающего списка | Вид расстояния | расстояние (пропущено или None), расстояние по горизонтали(horizontal), расстояние по вертикали(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# рука ↔ сустав пальца / расстояние по горизонтали
hand_detection.get_distance('left_palm', 'right_index_first')
```

## Расстояние между пальцами {#joint_to_joint_distance}

Возвращает расстояние между двумя суставами пальцев.

<BlockImage module="AI/HandDetection" id="joint_to_joint_distance" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit1 | Ввод (строка) | Первая часть | палец: `'side_unit_joint'` (например, `'left_thumb_last'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| unit2 | Ввод (строка) | Вторая часть | палец: `'side_unit_joint'` (например, `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Пункт выпадающего списка | Вид расстояния | расстояние (пропущено или None), расстояние по горизонтали(horizontal), расстояние по вертикали(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# сустав пальца ↔ сустав пальца / расстояние по вертикали
hand_detection.get_distance('left_thumb_last', 'right_index_first', 'vertical')
```

## Состояние модели {#model_state}

Возвращает состояние загрузки модели рук.  
Возвращает 0, если модель ещё не загружена, 1 во время загрузки и 2 после её завершения.

<BlockImage module="AI/HandDetection" id="model_state" />

### Параметры

(нет)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.model_state()
```

## Рука распознана {#detected}

Найдена ли рука

<BlockImage module="AI/HandDetection" id="detected" />

### Параметры

(нет)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detected()
```
