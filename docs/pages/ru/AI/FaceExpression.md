---
title: Выражение лица
---

# Выражение лица

## Объявление экземпляра {#instance}

После добавления блока Выражение лица(FaceExpression) в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:

```python
face_expression = FaceExpression(0)
# Когда экземпляров несколько
face_expression_1 = FaceExpression(1)
```

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| index | Пункт выпадающего списка | Номер экземпляра (начиная с 0) | Целое число 0 или больше | 0 |


## Выбрать камеру {#device}

Задаёт камеру, используемую для определения возраста, пола и выражения лица.

<BlockImage module="AI/FaceExpression" id="device" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Название устройства камеры | Название камеры в системе | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.device('')
```

## Загрузить модель выражения лица {#load_model}

Загружает обученную модель возраста, пола и выражения лица. Без этого шага функции модуля «Выражение лица» использовать нельзя.

<BlockImage module="AI/FaceExpression" id="load_model" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| wait | Флажок | Ждать ли завершения загрузки | TRUE / FALSE | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.load_model(wait=True)
```

## Распознать выражение лица один раз {#detect_once}

Анализирует лицо, которое сейчас на экране, и только один раз показывает предполагаемые возраст, пол и выражение лица.

<BlockImage module="AI/FaceExpression" id="detect_once" />

### Параметры

(нет)

### Python
```python
face_expression = FaceExpression(0)

face_expression.detect_once()
```

## Запустить / остановить непрерывное распознавание выражения лица {#detect_continuous}

Непрерывно анализирует лицо на экране и показывает на изображении предполагаемые возраст, пол и выражение лица.

<BlockImage module="AI/FaceExpression" id="detect_continuous" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Действие | запустить(start), остановить(stop) | - |

### Python
```python
face_expression = FaceExpression(0)

# unit = "start"
face_expression.detect_continuous()
# unit = "stop"
face_expression.stop()
```

## Показать результат {#display}

Определяет, показывать ли на изображении с камеры результат определения возраста, пола и выражения лица.

<BlockImage module="AI/FaceExpression" id="display" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| on | Пункт выпадающего списка | Отображение ON / OFF | показать(on=True), скрыть(off=False) | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.display(True)
face_expression.display(False)
```

## Возраст {#age}

Возраст

<BlockImage module="AI/FaceExpression" id="age" />

### Параметры

(нет)

### Python
```python
face_expression = FaceExpression(0)

face_expression.age()
```

## Пол {#gender}

Пол

<BlockImage module="AI/FaceExpression" id="gender" />

### Параметры

(нет)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender()
```

## Выражение лица {#expression}

Выражение лица

<BlockImage module="AI/FaceExpression" id="expression" />

### Параметры

(нет)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression()
```

## Пол определён {#gender_detected}

Определён ли пол

<BlockImage module="AI/FaceExpression" id="gender_detected" />

### Параметры

(нет)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_detected()
```

## Это данный пол {#gender_check}

Возвращает **истину (True) или ложь (False)** в зависимости от того, совпадает ли определённый пол с заданным.

<BlockImage module="AI/FaceExpression" id="gender_check" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Пол | мужской(male), женский(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_gender('male')
face_expression.is_gender('female')
```

## Уверенность в определении пола {#gender_confidence}

Вероятность (уверенность) того, что это выбранный пол

<BlockImage module="AI/FaceExpression" id="gender_confidence" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Пол | мужской(male), женский(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_confidence('male')
face_expression.gender_confidence('female')
```

## Выражение лица определено {#expression_detected}

Определено ли выражение лица

<BlockImage module="AI/FaceExpression" id="expression_detected" />

### Параметры

(нет)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_detected()
```

## Это данное выражение лица {#expression_check}

Возвращает **истину (True) или ложь (False)** в зависимости от того, совпадает ли определённое выражение лица с заданным.

<BlockImage module="AI/FaceExpression" id="expression_check" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Выражение лица | злое(angry), брезгливое(disgusted), испуганное(fearful), счастливое(happy), нейтральное(neutral), грустное(sad), удивлённое(surprised) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_expression('happy')
face_expression.is_expression('sad')
```

## Уверенность в определении выражения лица {#expression_confidence}

Вероятность (уверенность) того, что это выбранное выражение лица

<BlockImage module="AI/FaceExpression" id="expression_confidence" />

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| unit | Пункт выпадающего списка | Выражение лица | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_confidence('happy')
face_expression.expression_confidence('angry')
```

## Состояние модели {#model_state}

Возвращает состояние загрузки модели возраста, пола и выражения лица.  
Возвращает 0, если модель ещё не загружена, 1 во время загрузки и 2 после её завершения.

<BlockImage module="AI/FaceExpression" id="model_state" />

### Параметры

(нет)

### Python
```python
face_expression = FaceExpression(0)

face_expression.model_state()
```
