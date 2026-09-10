---
title: Циклы
---

# Циклы

Управляющие конструкции повторения бывают двух видов:  
**условные операторы** и **циклы** (те, что по значениям переменных определяют, сколько раз выполнить тело)


## Повторить {#controls_repeat}

Простейший блок **повторить** выполняет код в своём теле заданное число раз. 

<BlockImage module="common/loops" id="controls_repeat" />

### Python
```python
for count in range(times):
    # ...
```

## Цикл по {#controls_for}

Блок **цикл по** (чаще всего его называют **циклом for**) увеличивает переменную от первого значения до третьего на величину шага (второе значение) и выполняет тело один раз для каждого из этих значений.  

<BlockImage module="common/loops" id="controls_for" />

### Python
```python
for VAR in range(from, to + 1, by):
    # ...
```

## Для каждого элемента {#controls_forEach}

Блок **для каждого элемента** работает похоже, но вместо последовательных чисел по очереди берёт значения из списка.

<BlockImage module="common/loops" id="controls_forEach" />

### Python
```python
for VAR in list:
    # ...
```


## Повторять пока / до {#controls_while}

Блок **повторять пока** повторяет тело, пока условие истинно.  
Блок **повторять до** повторяет тело, пока условие ложно, и выходит из цикла в тот момент, когда условие становится истинным.

<BlockImage module="common/loops" id="controls_while" />

### Python
```python
# unit = "while"
while condition:
    # ...

# unit = "until"
while not condition:
    # ...
```

## Прервать / продолжить {#controls_flow_statements}

Блок **прервать** позволяет **выйти из цикла раньше времени**.  
Блок **продолжить** (в большинстве языков программирования — **continue**) пропускает оставшийся код тела и начинает следующий проход.

<BlockImage module="common/loops" id="controls_flow_statements" />

### Python
```python
break
continue
```
