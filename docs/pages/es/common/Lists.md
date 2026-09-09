---
title: Lista
---

# Lista

Una lista es un **conjunto de elementos en orden**, como una "lista de tareas" o una "lista de la compra".  
Los elementos de una lista pueden ser de cualquier tipo, y un mismo valor puede aparecer varias veces en una lista.


## Crear una lista vacía {#lists_create_with}

La lista más sencilla es la lista vacía; se crea con el bloque **crear lista vacía**.

<BlockImage module="common/lists" id="lists_create_with" />

### Python
```python
[]
```

## Crear una lista {#lists_create_with-2}

Con el bloque **crear lista con** puedes dar valores iniciales a una lista nueva.

<BlockImage module="common/lists" id="lists_create_with-2" />

### Python
```python
[item0, item1, item2]
```

## Repetir un elemento en una lista {#lists_repeat}

Con el bloque **crear lista con el elemento ... repetido ... veces** puedes repetir un elemento indicado y crear así una lista con el número de elementos que quieras.

<BlockImage module="common/lists" id="lists_repeat" />

### Python
```python
[item] * times
```

## Longitud de la lista {#lists_length}

El valor del bloque **longitud de** es el número de elementos de la lista.  
La longitud de una lista vacía es 0.

<BlockImage module="common/lists" id="lists_length" />

### Python
```python
len(list)
```

## Comprobar si la lista está vacía {#lists_isEmpty}

El valor del bloque **está vacía** es **verdadero** si la entrada es una lista vacía y **falso** en los demás casos.

<BlockImage module="common/lists" id="lists_isEmpty" />

### Python
```python
not len(list)
```

## Posición en la que aparece un elemento en la lista {#lists_indexOf}

Busca la posición de un elemento concreto en la lista.  
Si el elemento no está en la lista, el resultado es 0.

<BlockImage module="common/lists" id="lists_indexOf" />

### Python
```python
list.index(VALUE) + 1
```

## Obtener / extraer / eliminar un elemento {#lists_getIndex}

Con este bloque puedes obtener, extraer o eliminar un elemento de una lista.  
Hay varias opciones: el primero, el último, el N-ésimo, un elemento aleatorio y más.

<BlockImage module="common/lists" id="lists_getIndex" />

### Obtener {#lists_getIndex_get}

Con el bloque **en la lista obtener** puedes obtener de una lista el elemento de una posición concreta.  

### Python
```python
list[0]
list[-1]
list[int(random.random() * len(list))]
list[N - 1]
list[-N]
```

### Extraer {#lists_getIndex_cut}

El bloque **en la lista obtener y eliminar** obtiene un elemento concreto de la lista y lo elimina de ella.

### Python
```python
list.pop(N - 1)                        # el #
list.pop(-N)                           # el # desde el final
list.pop(0)                            # el primero
list.pop()                             # el último 
lists_remove_random_item(list)         # aleatorio

# random
def lists_remove_random_item(myList):
    x = int(random.random() * len(myList))
    return myList.pop(x)
```

### Eliminar {#lists_getIndex_remove}

El bloque **en la lista eliminar** solo elimina un elemento concreto de la lista.  
La conexión de la izquierda del bloque desaparece, de modo que puedes conectar bloques arriba y abajo.  

### Python
```python
list.pop(N - 1)                             # el #
list.pop(-N)                                # el # desde el final
list.pop(0)                                 # el primero
list.pop()                                  # el último
list.pop(int(random.random() * len(list)))  # aleatorio
```

## Establecer / insertar un elemento en la posición deseada {#lists_setIndex}

Con este bloque puedes establecer o insertar un elemento en la posición que quieras de una lista.  
Hay varias opciones: el primero, el último, el N-ésimo, un elemento aleatorio y más.

<BlockImage module="common/lists" id="lists_setIndex" />

### Establecer un elemento {#lists_setIndex_set}

El bloque **en la lista establecer** sustituye el elemento de la posición indicada por otro elemento.

### Python
```python
list[N - 1] = value                         # el #
list[-N] = value                            # el # desde el final
list[0] = value                             # el primero
list[-1] = value                            # el último

tmp_x = int(random.random() * len(list))
list[tmp_x] = value                         # aleatorio
```

### Insertar un elemento {#lists_setIndex_insert}

El bloque **en la lista insertar** inserta un elemento nuevo en la posición indicada.  
Los elementos existentes se conservan y la longitud aumenta en 1.

### Python
```python
list.insert(N - 1, value)                        # el #
list.insert(-N, value)                           # el # desde el final
list.insert(0, value)                            # el primero
list.append(value)                               # el último

tmp_x = int(random.random() * len(list))
list.insert(tmp_x, value)                        # aleatorio
```

## Obtener una sublista {#lists_getSublist}

El bloque **en la lista obtener sublista** obtiene una sublista indicando una posición inicial y una final.  
Hay varias opciones: el primero, el último, el N-ésimo, un elemento aleatorio y más.  
La lista original no cambia.  

<BlockImage module="common/lists" id="lists_getSublist" />

### Python
```python
# el inicio es la primera posición (#1)
list[ : N]                             # #N (1-based)
list[ : -N]                            # last_#N
list[ : ]                              # last

# el inicio es last_#N
list[-N : M]
list[-N : -M]
list[-N : ]

# el inicio es first
list[ : N]
list[ : -N]
list[ : ]
```

## Obtener una lista nueva con un elemento cambiado {#lists_replace}

El bloque **en la lista obtener lista y reemplazar** devuelve una lista nueva en la que el elemento de la posición indicada se ha sustituido por otro.  
Hay varias opciones: el primero, el último, el N-ésimo y más.  
La lista original no cambia.  

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

## Separar / unir texto con un delimitador {#lists_split}

<BlockImage module="common/lists" id="lists_split" />

### Hacer lista a partir de texto {#text_to_list}

El bloque **hacer lista a partir de texto** separa el texto dado por el delimitador y devuelve el resultado como lista.

### Python
```python
text.split(delimiter)
```

### Hacer texto a partir de lista {#list_to_text}

El bloque **hacer texto a partir de lista** une los elementos de una lista con un delimitador en un único texto.

### Python
```python
delimiter.join(list)
```

## Ordenar una lista {#lists_sort}

Un bloque que **ordena** una lista según el criterio que quieras.  
Puedes ordenar por número o por orden alfabético, y elegir entre ascendente y descendente.  
Al ordenar alfabéticamente también puedes ordenar sin distinguir entre mayúsculas y minúsculas.

<BlockImage module="common/lists" id="lists_sort" />

### Python
```python
lists_sort(my_list, "NUMERIC", False)      # numérico, ascendente
lists_sort(my_list, "NUMERIC", True)       # numérico, descendente
lists_sort(my_list, "TEXT", False)         # alfabético, ascendente
lists_sort(my_list, "TEXT", True)          # alfabético, descendente
lists_sort(my_list, "IGNORE_CASE", False)  # sin distinguir mayúsculas, ascendente
lists_sort(my_list, "IGNORE_CASE", True)   # sin distinguir mayúsculas, descendente

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

## Invertir una lista {#lists_reverse}

Un bloque que **invierte** el orden de los elementos de una lista.

<BlockImage module="common/lists" id="lists_reverse" />

### Python
```python
list(reversed(my_list))
```
