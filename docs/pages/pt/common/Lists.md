---
title: Lista
---

# Lista

Uma lista é um **conjunto de itens por ordem**, como uma "lista de tarefas" ou uma "lista de compras".  
Os itens de uma lista podem ser de qualquer tipo e o mesmo valor pode aparecer várias vezes numa lista.


## Criar uma lista vazia {#lists_create_with}

A lista mais simples é a lista vazia; cria-se com o bloco **criar lista vazia**.

<BlockImage module="common/lists" id="lists_create_with" />

### Python
```python
[]
```

## Criar uma lista {#lists_create_with-2}

Com o bloco **criar lista com** podes dar valores iniciais a uma lista nova.

<BlockImage module="common/lists" id="lists_create_with-2" />

### Python
```python
[item0, item1, item2]
```

## Repetir um item numa lista {#lists_repeat}

Com o bloco **criar lista com o item ... repetido ... vezes** podes repetir um item indicado e criar assim uma lista com o número de itens que quiseres.

<BlockImage module="common/lists" id="lists_repeat" />

### Python
```python
[item] * times
```

## Tamanho da lista {#lists_length}

O valor do bloco **tamanho de** é o número de itens da lista.  
O tamanho de uma lista vazia é 0.

<BlockImage module="common/lists" id="lists_length" />

### Python
```python
len(list)
```

## Verificar se a lista está vazia {#lists_isEmpty}

O valor do bloco **está vazia** é **verdadeiro** se a entrada for uma lista vazia e **falso** nos restantes casos.

<BlockImage module="common/lists" id="lists_isEmpty" />

### Python
```python
not len(list)
```

## Posição em que um item aparece na lista {#lists_indexOf}

Procura a posição de um item na lista.  
Se o item não estiver na lista, o resultado é 0.

<BlockImage module="common/lists" id="lists_indexOf" />

### Python
```python
list.index(VALUE) + 1
```

## Obter / retirar / remover um item {#lists_getIndex}

Com este bloco podes obter, retirar ou remover um item de uma lista.  
Há várias opções: o primeiro, o último, o N-ésimo, um item aleatório e mais.

<BlockImage module="common/lists" id="lists_getIndex" />

### Obter {#lists_getIndex_get}

Com o bloco **na lista obter** podes obter de uma lista o item de uma determinada posição.  

### Python
```python
list[0]
list[-1]
list[int(random.random() * len(list))]
list[N - 1]
list[-N]
```

### Retirar {#lists_getIndex_cut}

O bloco **na lista obter e remover** obtém um item da lista e remove-o dela.

### Python
```python
list.pop(N - 1)                        # o #
list.pop(-N)                           # o # a contar do fim
list.pop(0)                            # o primeiro
list.pop()                             # o último 
lists_remove_random_item(list)         # aleatório

# random
def lists_remove_random_item(myList):
    x = int(random.random() * len(myList))
    return myList.pop(x)
```

### Remover {#lists_getIndex_remove}

O bloco **na lista remover** apenas remove um item da lista.  
A ligação do lado esquerdo do bloco desaparece, para que possas ligar blocos acima e abaixo.  

### Python
```python
list.pop(N - 1)                             # o #
list.pop(-N)                                # o # a contar do fim
list.pop(0)                                 # o primeiro
list.pop()                                  # o último
list.pop(int(random.random() * len(list)))  # aleatório
```

## Definir / inserir um item na posição pretendida {#lists_setIndex}

Com este bloco podes definir ou inserir um item na posição que quiseres de uma lista.  
Há várias opções: o primeiro, o último, o N-ésimo, um item aleatório e mais.

<BlockImage module="common/lists" id="lists_setIndex" />

### Definir um item {#lists_setIndex_set}

O bloco **na lista definir** substitui o item da posição indicada por outro item.

### Python
```python
list[N - 1] = value                         # o #
list[-N] = value                            # o # a contar do fim
list[0] = value                             # o primeiro
list[-1] = value                            # o último

tmp_x = int(random.random() * len(list))
list[tmp_x] = value                         # aleatório
```

### Inserir um item {#lists_setIndex_insert}

O bloco **na lista inserir** insere um item novo na posição indicada.  
Os itens existentes mantêm-se e o tamanho aumenta 1.

### Python
```python
list.insert(N - 1, value)                        # o #
list.insert(-N, value)                           # o # a contar do fim
list.insert(0, value)                            # o primeiro
list.append(value)                               # o último

tmp_x = int(random.random() * len(list))
list.insert(tmp_x, value)                        # aleatório
```

## Obter uma sublista {#lists_getSublist}

O bloco **na lista obtem sublista** obtém uma sublista indicando uma posição inicial e uma final.  
Há várias opções: o primeiro, o último, o N-ésimo, um item aleatório e mais.  
A lista original não muda.  

<BlockImage module="common/lists" id="lists_getSublist" />

### Python
```python
# o início é a primeira posição (#1)
list[ : N]                             # #N (1-based)
list[ : -N]                            # last_#N
list[ : ]                              # last

# o início é last_#N
list[-N : M]
list[-N : -M]
list[-N : ]

# o início é first
list[ : N]
list[ : -N]
list[ : ]
```

## Obter uma lista nova com um item alterado {#lists_replace}

O bloco **na lista obter lista e substituir** devolve uma lista nova em que o item da posição indicada foi substituído por outro.  
Há várias opções: o primeiro, o último, o N-ésimo e mais.  
A lista original não muda.  

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

## Separar / juntar texto com um delimitador {#lists_split}

<BlockImage module="common/lists" id="lists_split" />

### Fazer lista a partir de texto {#text_to_list}

O bloco **fazer lista a partir de texto** separa o texto dado pelo delimitador e devolve o resultado como lista.

### Python
```python
text.split(delimiter)
```

### Fazer texto a partir de lista {#list_to_text}

O bloco **fazer texto a partir de lista** junta os itens de uma lista com um delimitador num único texto.

### Python
```python
delimiter.join(list)
```

## Ordenar uma lista {#lists_sort}

Um bloco que **ordena** uma lista de acordo com o critério que quiseres.  
Podes ordenar por número ou por ordem alfabética e escolher entre ascendente e descendente.  
Na ordenação alfabética também podes ordenar sem distinguir maiúsculas de minúsculas.

<BlockImage module="common/lists" id="lists_sort" />

### Python
```python
lists_sort(my_list, "NUMERIC", False)      # numérica, ascendente
lists_sort(my_list, "NUMERIC", True)       # numérica, descendente
lists_sort(my_list, "TEXT", False)         # alfabética, ascendente
lists_sort(my_list, "TEXT", True)          # alfabética, descendente
lists_sort(my_list, "IGNORE_CASE", False)  # sem distinguir maiúsculas, ascendente
lists_sort(my_list, "IGNORE_CASE", True)   # sem distinguir maiúsculas, descendente

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

## Inverter uma lista {#lists_reverse}

Um bloco que **inverte** a ordem dos elementos de uma lista.

<BlockImage module="common/lists" id="lists_reverse" />

### Python
```python
list(reversed(my_list))
```
