---
title: Список
---

# Список

Список — это **упорядоченный набор элементов**, такой как «список дел» или «список покупок».  
Элементы списка могут быть любого типа, и одно и то же значение может встречаться в списке несколько раз.


## Создать пустой список {#lists_create_with}

Простейший список — пустой; его создают блоком **создать пустой список**.

<BlockImage module="common/lists" id="lists_create_with" />

### Python
```python
[]
```

## Создать список из {#lists_create_with-2}

Блок **создать список из** позволяет задать новому списку начальные значения.

<BlockImage module="common/lists" id="lists_create_with-2" />

### Python
```python
[item0, item1, item2]
```

## Создать список из повторяющегося элемента {#lists_repeat}

Блок **создать список из элемента, повторяющегося** создаёт список нужной длины, повторяя в нём заданный элемент.

<BlockImage module="common/lists" id="lists_repeat" />

### Python
```python
[item] * times
```

## Длина списка {#lists_length}

Значение блока **длина** — это количество элементов списка.  
Длина пустого списка равна 0.

<BlockImage module="common/lists" id="lists_length" />

### Python
```python
len(list)
```

## Проверка пустого списка {#lists_isEmpty}

Значение блока **пуст** — **истина**, если заданный список пуст, и **ложь** в остальных случаях.

<BlockImage module="common/lists" id="lists_isEmpty" />

### Python
```python
not len(list)
```

## Положение элемента в списке {#lists_indexOf}

Находит положение заданного элемента в списке.  
Если такого элемента в списке нет, результат равен 0.

<BlockImage module="common/lists" id="lists_indexOf" />

### Python
```python
list.index(VALUE) + 1
```

## Взять / взять и удалить / удалить элемент {#lists_getIndex}

Этот блок позволяет взять элемент из списка, взять его и удалить или только удалить.  
На выбор есть несколько вариантов: первый, последний, N-й или случайный элемент.

<BlockImage module="common/lists" id="lists_getIndex" />

### Взять {#lists_getIndex_get}

Блок **в списке взять** позволяет взять из списка элемент из выбранного места.  

### Python
```python
list[0]
list[-1]
list[int(random.random() * len(list))]
list[N - 1]
list[-N]
```

### Взять и удалить {#lists_getIndex_cut}

Блок **в списке взять и удалить** берёт из списка выбранный элемент и одновременно удаляет его из списка.

### Python
```python
list.pop(N - 1)                        # элемент №
list.pop(-N)                           # № элемент с конца
list.pop(0)                            # первый
list.pop()                             # последний 
lists_remove_random_item(list)         # случайный

# random
def lists_remove_random_item(myList):
    x = int(random.random() * len(myList))
    return myList.pop(x)
```

### Удалить {#lists_getIndex_remove}

Блок **в списке удалить** только удаляет выбранный элемент из списка.  
Левый разъём блока исчезает, и к нему можно присоединить блоки сверху и снизу.  

### Python
```python
list.pop(N - 1)                             # элемент №
list.pop(-N)                                # № элемент с конца
list.pop(0)                                 # первый
list.pop()                                  # последний
list.pop(int(random.random() * len(list)))  # случайный
```

## Присвоить / вставить элемент в нужное место {#lists_setIndex}

Этот блок позволяет присвоить или вставить элемент в выбранное место списка.  
На выбор есть несколько вариантов: первый, последний, N-й или случайный элемент.

<BlockImage module="common/lists" id="lists_setIndex" />

### Присвоить элемент {#lists_setIndex_set}

Блок **в списке присвоить** заменяет элемент в указанном месте другим элементом.

### Python
```python
list[N - 1] = value                         # элемент №
list[-N] = value                            # № элемент с конца
list[0] = value                             # первый
list[-1] = value                            # последний

tmp_x = int(random.random() * len(list))
list[tmp_x] = value                         # случайный
```

### Вставить элемент {#lists_setIndex_insert}

Блок **в списке вставить** вставляет новый элемент в указанное место.  
Прежние элементы сохраняются, а длина списка увеличивается на 1.

### Python
```python
list.insert(N - 1, value)                        # элемент №
list.insert(-N, value)                           # № элемент с конца
list.insert(0, value)                            # первый
list.append(value)                               # последний

tmp_x = int(random.random() * len(list))
list.insert(tmp_x, value)                        # случайный
```

## Получение подсписка {#lists_getSublist}

Блок **в списке взять подсписок** вырезает подсписок между указанными начальным и конечным местами.  
На выбор есть несколько вариантов: первый, последний, N-й или случайный элемент.  
После выполнения исходный список остаётся без изменений.  

<BlockImage module="common/lists" id="lists_getSublist" />

### Python
```python
# начало на первом месте (#1)
list[ : N]                             # #N (считая с 1)
list[ : -N]                            # last_#N
list[ : ]                              # last

# начало на last_#N
list[-N : M]
list[-N : -M]
list[-N : ]

# начало на first
list[ : N]
list[ : -N]
list[ : ]
```

## Новый список с заменённым элементом {#lists_replace}

Блок **в списке заменить элемент** возвращает новый список, в котором элемент в указанном месте заменён другим.  
На выбор есть несколько вариантов: первый, последний, N-й и другие.  
После выполнения исходный список остаётся без изменений.  

<BlockImage module="common/lists" id="lists_replace" />

### Python
```python
# unit = "#"
[value if i == (N - 1) else data for i, data in enumerate(list)]

# unit = "last_#"
[value if i == (len(list) - N) else data for i, data in enumerate(list)]

# unit = "first"
[value if i == 0 else data for i, data in enumerate(list)]

# unit = "last"
[value if i == (len(list) - 1) else data for i, data in enumerate(list)]
```

## Разделение / соединение текста разделителем {#lists_split}

<BlockImage module="common/lists" id="lists_split" />

### Сделать список из текста {#text_to_list}

Блок **сделать список из текста** делит заданный текст по разделителю и возвращает его в виде списка.

### Python
```python
text.split(delimiter)
```

### Сделать текст из списка {#list_to_text}

Блок **сделать текст из списка** соединяет элементы списка в один текст, разделяя их разделителем.

### Python
```python
delimiter.join(list)
```

## Сортировка списка {#lists_sort}

Это **блок сортировки** списка по выбранному признаку.  
Сортировать можно числовым или алфавитным способом, по возрастанию или по убыванию.  
При алфавитной сортировке можно также не учитывать регистр букв.

<BlockImage module="common/lists" id="lists_sort" />

### Python
```python
lists_sort(my_list, "NUMERIC", False)      # числовая, по возрастанию
lists_sort(my_list, "NUMERIC", True)       # числовая, по убыванию
lists_sort(my_list, "TEXT", False)         # алфавитная, по возрастанию
lists_sort(my_list, "TEXT", True)          # алфавитная, по убыванию
lists_sort(my_list, "IGNORE_CASE", False)  # без учёта регистра, по возрастанию
lists_sort(my_list, "IGNORE_CASE", True)   # без учёта регистра, по убыванию

def lists_sort(my_list, type, reverse):
    def try_float(s):
        try: return float(s)
        except: return 0
    key_funcs = {
        "NUMERIC": try_float,
        "TEXT": str,
        "IGNORE_CASE": lambda s: str(s).lower()
    }
    key_func = key_funcs[type]
    list_cpy = list(my_list)
    return sorted(list_cpy, key=key_func, reverse=reverse)
```

## Разворот списка {#lists_reverse}

Это блок, **меняющий порядок** элементов списка на обратный.

<BlockImage module="common/lists" id="lists_reverse" />

### Python
```python
list(reversed(my_list))
```
