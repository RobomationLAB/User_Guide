---
title: Lista
---

# Lista

Lista to **uporządkowany zbiór elementów**, taki jak „lista zadań" czy „lista zakupów".  
Elementy listy mogą być dowolnego typu, a ta sama wartość może pojawić się na liście wiele razy.


## Utwórz pustą listę {#lists_create_with}

Najprostsza lista to lista pusta; tworzy się ją blokiem **utwórz pustą listę**.

<BlockImage module="common/lists" id="lists_create_with" />

### Python
```python
[]
```

## Utwórz listę z {#lists_create_with-2}

Blok **utwórz listę z** pozwala nadać nowej liście wartości początkowe.

<BlockImage module="common/lists" id="lists_create_with-2" />

### Python
```python
[item0, item1, item2]
```

## Utwórz listę z powtórzonego elementu {#lists_repeat}

Blok **utwórz listę powtarzając** tworzy listę o wybranej długości, powtarzając w niej podany element.

<BlockImage module="common/lists" id="lists_repeat" />

### Python
```python
[item] * times
```

## Długość listy {#lists_length}

Wartością bloku **długość** jest liczba elementów listy.  
Długość pustej listy wynosi 0.

<BlockImage module="common/lists" id="lists_length" />

### Python
```python
len(list)
```

## Sprawdzenie pustej listy {#lists_isEmpty}

Wartością bloku **jest pusta** jest **prawda**, gdy podana lista jest pusta, a w przeciwnym razie **fałsz**.

<BlockImage module="common/lists" id="lists_isEmpty" />

### Python
```python
not len(list)
```

## Położenie elementu na liście {#lists_indexOf}

Znajduje położenie danego elementu na liście.  
Jeśli listy nie ma takiego elementu, wynikiem jest 0.

<BlockImage module="common/lists" id="lists_indexOf" />

### Python
```python
list.index(VALUE) + 1
```

## Pobranie / pobranie i usunięcie / usunięcie elementu {#lists_getIndex}

Ten blok pozwala pobrać element z listy, pobrać go i usunąć albo tylko usunąć.  
Do wyboru jest kilka opcji: pierwszy, ostatni, N-ty czy losowy element.

<BlockImage module="common/lists" id="lists_getIndex" />

### Pobranie {#lists_getIndex_get}

Blok **na liście pobierz** pozwala pobrać z listy element z wybranego miejsca.  

### Python
```python
list[0]
list[-1]
list[int(random.random() * len(list))]
list[N - 1]
list[-N]
```

### Pobranie i usunięcie {#lists_getIndex_cut}

Blok **na liście pobierz i usuń** pobiera z listy wybrany element i jednocześnie usuwa go z listy.

### Python
```python
list.pop(N - 1)                        # element nr #
list.pop(-N)                           # # element od końca
list.pop(0)                            # pierwszy
list.pop()                             # ostatni 
lists_remove_random_item(list)         # losowy

# random
def lists_remove_random_item(myList):
    x = int(random.random() * len(myList))
    return myList.pop(x)
```

### Usunięcie {#lists_getIndex_remove}

Blok **na liście usuń** tylko usuwa wybrany element z listy.  
Lewa wtyczka bloku znika, dzięki czemu można podłączyć bloki nad nim i pod nim.  

### Python
```python
list.pop(N - 1)                             # element nr #
list.pop(-N)                                # # element od końca
list.pop(0)                                 # pierwszy
list.pop()                                  # ostatni
list.pop(int(random.random() * len(list)))  # losowy
```

## Ustawienie / wstawienie elementu na wybranej pozycji {#lists_setIndex}

Ten blok pozwala ustawić albo wstawić element na wybranej pozycji listy.  
Do wyboru jest kilka opcji: pierwszy, ostatni, N-ty czy losowy element.

<BlockImage module="common/lists" id="lists_setIndex" />

### Ustawienie elementu {#lists_setIndex_set}

Blok **na liście ustaw** zastępuje element na wskazanej pozycji innym elementem.

### Python
```python
list[N - 1] = value                         # element nr #
list[-N] = value                            # # element od końca
list[0] = value                             # pierwszy
list[-1] = value                            # ostatni

tmp_x = int(random.random() * len(list))
list[tmp_x] = value                         # losowy
```

### Wstawienie elementu {#lists_setIndex_insert}

Blok **na liście wstaw w** wstawia nowy element na wskazanej pozycji.  
Dotychczasowe elementy zostają zachowane, a długość listy rośnie o 1.

### Python
```python
list.insert(N - 1, value)                        # element nr #
list.insert(-N, value)                           # # element od końca
list.insert(0, value)                            # pierwszy
list.append(value)                               # ostatni

tmp_x = int(random.random() * len(list))
list.insert(tmp_x, value)                        # losowy
```

## Pobranie listy podrzędnej {#lists_getSublist}

Blok **na liście utwórz listę podrzędną** wycina listę podrzędną między wskazaną pozycją początkową i końcową.  
Do wyboru jest kilka opcji: pierwszy, ostatni, N-ty czy losowy element.  
Po wykonaniu działania lista wyjściowa pozostaje niezmieniona.  

<BlockImage module="common/lists" id="lists_getSublist" />

### Python
```python
# początek na pierwszej pozycji (#1)
list[ : N]                             # #N (licząc od 1)
list[ : -N]                            # last_#N
list[ : ]                              # last

# początek na last_#N
list[-N : M]
list[-N : -M]
list[-N : ]

# początek na first
list[ : N]
list[ : -N]
list[ : ]
```

## Nowa lista z zastąpionym elementem {#lists_replace}

Blok **na liście zastąp element** zwraca nową listę, w której element na wskazanej pozycji został zastąpiony innym.  
Do wyboru jest kilka opcji: pierwszy, ostatni, N-ty i inne.  
Po wykonaniu działania lista wyjściowa pozostaje niezmieniona.  

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

## Podział / łączenie tekstu separatorem {#lists_split}

<BlockImage module="common/lists" id="lists_split" />

### Utwórz listę z tekstu {#text_to_list}

Blok **utwórz listę z tekstu** dzieli podany tekst według separatora i zwraca go jako listę.

### Python
```python
text.split(delimiter)
```

### Utwórz tekst z listy {#list_to_text}

Blok **utwórz tekst z listy** łączy elementy listy w jeden tekst, rozdzielając je separatorem.

### Python
```python
delimiter.join(list)
```

## Sortowanie listy {#lists_sort}

To **blok sortujący** listę według wybranego kryterium.  
Można sortować liczbowo albo alfabetycznie, rosnąco lub malejąco.  
Przy sortowaniu alfabetycznym można też pominąć rozróżnianie wielkości liter.

<BlockImage module="common/lists" id="lists_sort" />

### Python
```python
lists_sort(my_list, "NUMERIC", False)      # numerycznie, rosnąco
lists_sort(my_list, "NUMERIC", True)       # numerycznie, malejąco
lists_sort(my_list, "TEXT", False)         # alfabetycznie, rosnąco
lists_sort(my_list, "TEXT", True)          # alfabetycznie, malejąco
lists_sort(my_list, "IGNORE_CASE", False)  # bez rozróżniania wielkości liter, rosnąco
lists_sort(my_list, "IGNORE_CASE", True)   # bez rozróżniania wielkości liter, malejąco

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

## Odwracanie listy {#lists_reverse}

To blok **odwracający kolejność** elementów listy.

<BlockImage module="common/lists" id="lists_reverse" />

### Python
```python
list(reversed(my_list))
```
