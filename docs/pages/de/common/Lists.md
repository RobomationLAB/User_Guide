---
title: Liste
---

# Liste

Eine Liste ist wie eine „To-do-Liste" oder eine „Einkaufsliste" eine **Sammlung von Elementen in einer bestimmten Reihenfolge**.  
Die Elemente einer Liste können von jedem Typ sein, und derselbe Wert kann mehrfach in der Liste vorkommen.


## Leere Liste erzeugen {#lists_create_with}

Die einfachste Liste ist die leere Liste; sie wird mit dem Block **erzeuge eine leere Liste** erstellt.

<BlockImage module="common/lists" id="lists_create_with" />

### Python
```python
[]
```

## Liste erzeugen {#lists_create_with-2}

Mit dem Block **erzeuge Liste mit** kannst du einer neuen Liste Anfangswerte geben.

<BlockImage module="common/lists" id="lists_create_with-2" />

### Python
```python
[item0, item1, item2]
```

## Element wiederholen {#lists_repeat}

Mit dem Block **erzeuge Liste mit -mal dem Element** kannst du ein Element wiederholen und so eine Liste der gewünschten Länge erstellen.

<BlockImage module="common/lists" id="lists_repeat" />

### Python
```python
[item] * times
```

## Länge der Liste {#lists_length}

Der Wert des Blocks **Länge von** ist die Anzahl der Elemente in der Liste.  
Die Länge einer leeren Liste ist 0.

<BlockImage module="common/lists" id="lists_length" />

### Python
```python
len(list)
```

## Leere Liste prüfen {#lists_isEmpty}

Der Wert des Blocks **ist leer** ist **true**, wenn die Eingabe eine leere Liste ist, sonst **false**.

<BlockImage module="common/lists" id="lists_isEmpty" />

### Python
```python
not len(list)
```

## Position eines Elements in der Liste {#lists_indexOf}

Sucht die Position eines bestimmten Elements in der Liste.  
Ist das Element nicht in der Liste, ist das Ergebnis 0.

<BlockImage module="common/lists" id="lists_indexOf" />

### Python
```python
list.index(VALUE) + 1
```

## Element nehmen / herausnehmen / entfernen {#lists_getIndex}

Mit diesem Block kannst du ein Element aus der Liste nehmen, herausnehmen oder entfernen.  
Es gibt verschiedene Optionen: erstes, letztes, N-tes, zufälliges Element usw.

<BlockImage module="common/lists" id="lists_getIndex" />

### Nehmen {#lists_getIndex_get}

Mit dem Block **in der Liste nimm** kannst du das Element an einer bestimmten Position aus der Liste holen.  

### Python
```python
list[0]
list[-1]
list[int(random.random() * len(list))]
list[N - 1]
list[-N]
```

### Herausnehmen {#lists_getIndex_cut}

Der Block **in der Liste nimm und entferne** holt ein bestimmtes Element aus der Liste und entfernt es aus ihr.

### Python
```python
list.pop(N - 1)                        # N-tes
list.pop(-N)                           # N-tes vom Ende
list.pop(0)                            # erstes
list.pop()                             # letztes
lists_remove_random_item(list)         # zufällig

# random
def lists_remove_random_item(myList):
    x = int(random.random() * len(myList))
    return myList.pop(x)
```

### Entfernen {#lists_getIndex_remove}

Der Block **in der Liste entferne** entfernt nur ein bestimmtes Element aus der Liste.  
Der linke Stecker des Blocks verschwindet, und du kannst Blöcke darüber und darunter anschließen.  

### Python
```python
list.pop(N - 1)                             # N-tes
list.pop(-N)                                # N-tes vom Ende
list.pop(0)                                 # erstes
list.pop()                                  # letztes
list.pop(int(random.random() * len(list)))  # zufällig
```

## Element an gewünschter Position setzen / einfügen {#lists_setIndex}

Mit diesem Block kannst du an der gewünschten Position der Liste ein Element setzen oder einfügen.  
Es gibt verschiedene Optionen: erstes, letztes, N-tes, zufälliges Element usw.

<BlockImage module="common/lists" id="lists_setIndex" />

### Element setzen {#lists_setIndex_set}

Der Block **in der Liste setze für ... ein** ersetzt das Element an der angegebenen Position durch ein anderes Element.

### Python
```python
list[N - 1] = value                         # N-tes
list[-N] = value                            # N-tes vom Ende
list[0] = value                             # erstes
list[-1] = value                            # letztes

tmp_x = int(random.random() * len(list))
list[tmp_x] = value                         # zufällig
```

### Element einfügen {#lists_setIndex_insert}

Der Block **in der Liste füge ... ein** fügt ein neues Element an der angegebenen Position ein.  
Die bestehenden Elemente bleiben erhalten und die Länge erhöht sich um 1.

### Python
```python
list.insert(N - 1, value)                        # N-tes
list.insert(-N, value)                           # N-tes vom Ende
list.insert(0, value)                            # erstes
list.append(value)                               # letztes

tmp_x = int(random.random() * len(list))
list.insert(tmp_x, value)                        # zufällig
```

## Teilliste nehmen {#lists_getSublist}

Der Block **in der Liste nimm Teilliste ab** nimmt eine Teilliste anhand einer Start- und einer Endposition heraus.  
Es gibt verschiedene Optionen: erstes, letztes, N-tes, zufälliges Element usw.  
Die ursprüngliche Liste bleibt danach unverändert.  

<BlockImage module="common/lists" id="lists_getSublist" />

### Python
```python
# Start ist die erste Position (#1)
list[ : N]                             # #N (1-based)
list[ : -N]                            # last_#N
list[ : ]                              # last

# Start ist last_#N
list[-N : M]
list[-N : -M]
list[-N : ]

# Start ist first
list[ : N]
list[ : -N]
list[ : ]
```

## Neue Liste mit ersetztem Element {#lists_replace}

Der Block **in Liste Element ... durch ... ersetzen** gibt eine neue Liste zurück, in der das Element an der angegebenen Position durch ein anderes Element ersetzt ist.  
Es gibt verschiedene Optionen: erstes, letztes, N-tes usw.  
Die ursprüngliche Liste bleibt danach unverändert.  

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

## Text mit Trennzeichen teilen / verbinden {#lists_split}

<BlockImage module="common/lists" id="lists_split" />

### Liste aus Text erstellen {#text_to_list}

Der Block **Liste aus Text erstellen** teilt den angegebenen Text am Trennzeichen und gibt eine Liste zurück.

### Python
```python
text.split(delimiter)
```

### Text aus Liste erstellen {#list_to_text}

Der Block **Text aus Liste erstellen** verbindet die Elemente der Liste mit dem Trennzeichen zu einem Text.

### Python
```python
delimiter.join(list)
```

## Liste sortieren {#lists_sort}

Ein Block, der eine Liste **nach dem gewünschten Kriterium sortiert**.  
Du kannst numerisch oder alphabetisch sortieren und dabei aufsteigend oder absteigend wählen.  
Beim alphabetischen Sortieren kann die Groß-/Kleinschreibung auch ignoriert werden.

<BlockImage module="common/lists" id="lists_sort" />

### Python
```python
lists_sort(my_list, "NUMERIC", False)      # numerisch, aufsteigend
lists_sort(my_list, "NUMERIC", True)       # numerisch, absteigend
lists_sort(my_list, "TEXT", False)         # alphabetisch, aufsteigend
lists_sort(my_list, "TEXT", True)          # alphabetisch, absteigend
lists_sort(my_list, "IGNORE_CASE", False)  # ohne Groß-/Kleinschreibung, aufsteigend
lists_sort(my_list, "IGNORE_CASE", True)   # ohne Groß-/Kleinschreibung, absteigend

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

## Liste umkehren {#lists_reverse}

Ein Block, der die Reihenfolge der Elemente einer Liste **umkehrt**.

<BlockImage module="common/lists" id="lists_reverse" />

### Python
```python
list(reversed(my_list))
```
