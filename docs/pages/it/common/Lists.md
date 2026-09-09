---
title: Lista
---

# Lista

Una lista è un **insieme di elementi messi in ordine**, come una "lista delle cose da fare" o una "lista della spesa".  
Gli elementi di una lista possono essere di qualunque tipo e lo stesso valore può comparire più volte nella lista.


## Creare una lista vuota {#lists_create_with}

La lista più semplice è la lista vuota e si crea con il blocco **crea lista vuota**.

<BlockImage module="common/lists" id="lists_create_with" />

### Python
```python
[]
```

## Creare una lista {#lists_create_with-2}

Con il blocco **crea lista con** puoi dare dei valori iniziali a una nuova lista.

<BlockImage module="common/lists" id="lists_create_with-2" />

### Python
```python
[item0, item1, item2]
```

## Ripetere un elemento nella lista {#lists_repeat}

Con il blocco **crea una lista con l'elemento ... ripetuto ... volte** puoi ripetere l'elemento indicato e creare una lista del numero di elementi che vuoi.

<BlockImage module="common/lists" id="lists_repeat" />

### Python
```python
[item] * times
```

## Lunghezza della lista {#lists_length}

Il valore del blocco **lunghezza di** è il numero di elementi della lista.  
La lunghezza di una lista vuota è 0.

<BlockImage module="common/lists" id="lists_length" />

### Python
```python
len(list)
```

## Verificare se una lista è vuota {#lists_isEmpty}

Il valore del blocco **è vuota** è **vero** quando la lista in ingresso è vuota e **falso** in tutti gli altri casi.

<BlockImage module="common/lists" id="lists_isEmpty" />

### Python
```python
not len(list)
```

## Posizione in cui un elemento compare nella lista {#lists_indexOf}

Cerca nella lista la posizione di un elemento determinato.  
Se quell'elemento non è nella lista, il risultato è 0.

<BlockImage module="common/lists" id="lists_indexOf" />

### Python
```python
list.index(VALUE) + 1
```

## Prendere / prelevare / rimuovere un elemento {#lists_getIndex}

Con questo blocco puoi prendere, prelevare o rimuovere un elemento da una lista.  
Ci sono varie opzioni: il primo, l'ultimo, l'ennesimo, un elemento a caso e altre.

<BlockImage module="common/lists" id="lists_getIndex" />

### Prendere {#lists_getIndex_get}

Con il blocco **nella lista ... prendi** puoi prendere da una lista l'elemento che sta in una posizione determinata.  

### Python
```python
list[0]
list[-1]
list[int(random.random() * len(list))]
list[N - 1]
list[-N]
```

### Prelevare {#lists_getIndex_cut}

Il blocco **nella lista ... preleva** prende da una lista un elemento determinato e lo rimuove dalla lista.

### Python
```python
list.pop(N - 1)                        # ennesimo
list.pop(-N)                           # ennesimo a partire dall'ultima posizione
list.pop(0)                            # primo
list.pop()                             # ultimo 
lists_remove_random_item(list)         # a caso

# random
def lists_remove_random_item(myList):
    x = int(random.random() * len(myList))
    return myList.pop(x)
```

### Rimuovere {#lists_getIndex_remove}

Il blocco **nella lista ... rimuovi** si limita a rimuovere dalla lista un elemento determinato.  
Il connettore di sinistra del blocco scompare e diventa possibile agganciare un blocco sopra e uno sotto.  

### Python
```python
list.pop(N - 1)                             # ennesimo
list.pop(-N)                                # ennesimo a partire dall'ultima posizione
list.pop(0)                                 # primo
list.pop()                                  # ultimo
list.pop(int(random.random() * len(list)))  # a caso
```

## Impostare / inserire un elemento nella posizione che vuoi {#lists_setIndex}

Con questo blocco puoi impostare o inserire un elemento nella posizione della lista che vuoi.  
Ci sono varie opzioni: il primo, l'ultimo, l'ennesimo, un elemento a caso e altre.

<BlockImage module="common/lists" id="lists_setIndex" />

### Impostare un elemento {#lists_setIndex_set}

Il blocco **nella lista ... imposta** sostituisce l'elemento nella posizione indicata con un altro elemento.

### Python
```python
list[N - 1] = value                         # ennesimo
list[-N] = value                            # ennesimo a partire dall'ultima posizione
list[0] = value                             # primo
list[-1] = value                            # ultimo

tmp_x = int(random.random() * len(list))
list[tmp_x] = value                         # a caso
```

### Inserire un elemento {#lists_setIndex_insert}

Il blocco **nella lista ... inserisci** inserisce un nuovo elemento nella posizione indicata.  
Gli elementi che c'erano rimangono e la lunghezza aumenta di 1.

### Python
```python
list.insert(N - 1, value)                        # ennesimo
list.insert(-N, value)                           # ennesimo a partire dall'ultima posizione
list.insert(0, value)                            # primo
list.append(value)                               # ultimo

tmp_x = int(random.random() * len(list))
list.insert(tmp_x, value)                        # a caso
```

## Estrarre una sotto-lista {#lists_getSublist}

Il blocco **nella lista ... prendi sotto-lista** estrae una sotto-lista indicando la posizione iniziale e quella finale.  
Ci sono varie opzioni: il primo, l'ultimo, l'ennesimo, un elemento a caso e altre.  
Dopo l'operazione la lista originale rimane invariata.  

<BlockImage module="common/lists" id="lists_getSublist" />

### Python
```python
# l'inizio è la prima posizione (#1)
list[ : N]                             # #N (1-based)
list[ : -N]                            # last_#N
list[ : ]                              # last

# l'inizio è last_#N
list[-N : M]
list[-N : -M]
list[-N : ]

# l'inizio è first
list[ : N]
list[ : -N]
list[ : ]
```

## Estrarre una nuova lista con un elemento sostituito {#lists_replace}

Il blocco **nell'elenco ... sostituisci** restituisce una nuova lista in cui l'elemento nella posizione indicata è stato sostituito con un altro elemento.  
Ci sono varie opzioni: il primo, l'ultimo, l'ennesimo e altre.  
Dopo l'operazione la lista originale rimane invariata.  

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

## Dividere / unire un testo con un delimitatore {#lists_split}

<BlockImage module="common/lists" id="lists_split" />

### Creare una lista da un testo {#text_to_list}

Il blocco **crea lista da testo** divide il testo indicato in base al delimitatore e restituisce una lista.

### Python
```python
text.split(delimiter)
```

### Creare un testo da una lista {#list_to_text}

Il blocco **crea testo da lista** unisce gli elementi della lista in un unico testo usando il delimitatore.

### Python
```python
delimiter.join(list)
```

## Ordinare una lista {#lists_sort}

È il **blocco che ordina** una lista secondo il criterio che vuoi.  
Puoi ordinare in base ai numeri o all'alfabeto e puoi scegliere l'ordine crescente o decrescente.  
Nell'ordinamento alfabetico puoi anche ordinare ignorando le maiuscole e le minuscole.

<BlockImage module="common/lists" id="lists_sort" />

### Python
```python
lists_sort(my_list, "NUMERIC", False)      # numerico, crescente
lists_sort(my_list, "NUMERIC", True)       # numerico, decrescente
lists_sort(my_list, "TEXT", False)         # alfabetico, crescente
lists_sort(my_list, "TEXT", True)          # alfabetico, decrescente
lists_sort(my_list, "IGNORE_CASE", False)  # senza distinguere maiuscole e minuscole, crescente
lists_sort(my_list, "IGNORE_CASE", True)   # senza distinguere maiuscole e minuscole, decrescente

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

## Invertire una lista {#lists_reverse}

È il blocco che **inverte l'ordine** degli elementi di una lista.

<BlockImage module="common/lists" id="lists_reverse" />

### Python
```python
list(reversed(my_list))
```
