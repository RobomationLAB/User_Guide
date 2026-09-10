---
title: PID-26 Датчик окружающей среды
---

# PID-26 Датчик окружающей среды

## Объявление экземпляра {#instance}

После добавления блока PID-26 Датчик окружающей среды(PID26) в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:

```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()
```

### Параметры

| Название | Вид | Описание | Диапазон / Тип | По умолчанию |
| --- | --- | --- | --- | --- |
| index | Пункт выпадающего списка | Номер экземпляра (начиная с 0) | Целое число 0 или больше | 0 |


## Запустить датчик окружающей среды {#start}

Включает датчик окружающей среды PID-26.

<BlockImage module="CheeseStick/PID26" id="start" />

### Параметры

(нет)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.start()
```

## Температура {#temperature}

Возвращает температуру, измеренную датчиком окружающей среды PID26. 

<BlockImage module="CheeseStick/PID26" id="temperature" />

### Параметры

(нет)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.temperature()
```

## Влажность {#humidity}

Возвращает влажность, измеренную датчиком окружающей среды PID26.

<BlockImage module="CheeseStick/PID26" id="humidity" />

### Параметры

(нет)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.humidity()
```

## Давление {#pressure}

Возвращает давление, измеренное датчиком окружающей среды PID26.  

<BlockImage module="CheeseStick/PID26" id="pressure" />

### Параметры

(нет)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.pressure()
```
