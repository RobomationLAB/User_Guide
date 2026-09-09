---
title: Liste
---

# Liste

Une liste est un **ensemble d'éléments rangés dans un ordre**, comme une « liste de choses à faire » ou une « liste de courses ».  
Les éléments d'une liste peuvent être de n'importe quel type et la même valeur peut apparaître plusieurs fois dans la liste.


## Créer une liste vide {#lists_create_with}

La liste la plus simple est la liste vide et on la crée avec le bloc **créer une liste vide**.

<BlockImage module="common/lists" id="lists_create_with" />

### Python
```python
[]
```

## Créer une liste {#lists_create_with-2}

Avec le bloc **créer une liste avec** tu peux donner des valeurs initiales à une nouvelle liste.

<BlockImage module="common/lists" id="lists_create_with-2" />

### Python
```python
[item0, item1, item2]
```

## Répéter un élément dans la liste {#lists_repeat}

Avec le bloc **créer une liste avec l'élément ... répété ... fois** tu peux répéter l'élément indiqué et créer une liste du nombre d'éléments que tu veux.

<BlockImage module="common/lists" id="lists_repeat" />

### Python
```python
[item] * times
```

## Longueur de la liste {#lists_length}

La valeur du bloc **longueur de** est le nombre d'éléments de la liste.  
La longueur d'une liste vide est 0.

<BlockImage module="common/lists" id="lists_length" />

### Python
```python
len(list)
```

## Vérifier si une liste est vide {#lists_isEmpty}

La valeur du bloc **est vide** est **vrai** quand la liste d'entrée est vide et **faux** dans tous les autres cas.

<BlockImage module="common/lists" id="lists_isEmpty" />

### Python
```python
not len(list)
```

## Position à laquelle un élément apparaît dans la liste {#lists_indexOf}

Cherche dans la liste la position d'un élément donné.  
Si cet élément n'est pas dans la liste, le résultat est 0.

<BlockImage module="common/lists" id="lists_indexOf" />

### Python
```python
list.index(VALUE) + 1
```

## Obtenir / prélever / supprimer un élément {#lists_getIndex}

Avec ce bloc tu peux obtenir, prélever ou supprimer un élément d'une liste.  
Il y a plusieurs options : le premier, le dernier, le n-ième, un élément au hasard et d'autres.

<BlockImage module="common/lists" id="lists_getIndex" />

### Obtenir {#lists_getIndex_get}

Avec le bloc **dans la liste ... obtenir** tu peux prendre dans une liste l'élément qui se trouve à une position donnée.  

### Python
```python
list[0]
list[-1]
list[int(random.random() * len(list))]
list[N - 1]
list[-N]
```

### Prélever {#lists_getIndex_cut}

Le bloc **dans la liste ... prélever** prend dans une liste un élément donné et le supprime de la liste.

### Python
```python
list.pop(N - 1)                        # n-ième
list.pop(-N)                           # n-ième à partir de la dernière position
list.pop(0)                            # premier
list.pop()                             # dernier 
lists_remove_random_item(list)         # au hasard

# random
def lists_remove_random_item(myList):
    x = int(random.random() * len(myList))
    return myList.pop(x)
```

### Supprimer {#lists_getIndex_remove}

Le bloc **dans la liste ... supprimer** se contente de supprimer de la liste un élément donné.  
Le connecteur de gauche du bloc disparaît et il devient possible d'accrocher un bloc au-dessus et un en dessous.  

### Python
```python
list.pop(N - 1)                             # n-ième
list.pop(-N)                                # n-ième à partir de la dernière position
list.pop(0)                                 # premier
list.pop()                                  # dernier
list.pop(int(random.random() * len(list)))  # au hasard
```

## Mettre / insérer un élément à la position voulue {#lists_setIndex}

Avec ce bloc tu peux mettre ou insérer un élément à la position de la liste que tu veux.  
Il y a plusieurs options : le premier, le dernier, le n-ième, un élément au hasard et d'autres.

<BlockImage module="common/lists" id="lists_setIndex" />

### Mettre un élément {#lists_setIndex_set}

Le bloc **dans la liste ... mettre** remplace l'élément à la position indiquée par un autre élément.

### Python
```python
list[N - 1] = value                         # n-ième
list[-N] = value                            # n-ième à partir de la dernière position
list[0] = value                             # premier
list[-1] = value                            # dernier

tmp_x = int(random.random() * len(list))
list[tmp_x] = value                         # au hasard
```

### Insérer un élément {#lists_setIndex_insert}

Le bloc **dans la liste ... insérer** insère un nouvel élément à la position indiquée.  
Les éléments qui y étaient restent et la longueur augmente de 1.

### Python
```python
list.insert(N - 1, value)                        # n-ième
list.insert(-N, value)                           # n-ième à partir de la dernière position
list.insert(0, value)                            # premier
list.append(value)                               # dernier

tmp_x = int(random.random() * len(list))
list.insert(tmp_x, value)                        # au hasard
```

## Extraire une sous-liste {#lists_getSublist}

Le bloc **dans la liste ... obtenir la sous-liste** extrait une sous-liste en indiquant la position de départ et celle d'arrivée.  
Il y a plusieurs options : le premier, le dernier, le n-ième, un élément au hasard et d'autres.  
Après l'opération la liste d'origine reste inchangée.  

<BlockImage module="common/lists" id="lists_getSublist" />

### Python
```python
# le départ est la première position (#1)
list[ : N]                             # #N (1-based)
list[ : -N]                            # last_#N
list[ : ]                              # last

# le départ est last_#N
list[-N : M]
list[-N : -M]
list[-N : ]

# le départ est first
list[ : N]
list[ : -N]
list[ : ]
```

## Extraire une nouvelle liste avec un élément remplacé {#lists_replace}

Le bloc **dans la liste ... obtenir la liste remplacer** renvoie une nouvelle liste dans laquelle l'élément à la position indiquée a été remplacé par un autre élément.  
Il y a plusieurs options : le premier, le dernier, le n-ième et d'autres.  
Après l'opération la liste d'origine reste inchangée.  

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

## Séparer / réunir un texte avec un séparateur {#lists_split}

<BlockImage module="common/lists" id="lists_split" />

### Créer une liste depuis un texte {#text_to_list}

Le bloc **créer une liste depuis le texte** découpe le texte indiqué selon le séparateur et renvoie une liste.

### Python
```python
text.split(delimiter)
```

### Créer un texte depuis une liste {#list_to_text}

Le bloc **créer un texte depuis la liste** réunit les éléments de la liste en un seul texte en utilisant le séparateur.

### Python
```python
delimiter.join(list)
```

## Trier une liste {#lists_sort}

C'est le **bloc qui trie** une liste selon le critère que tu veux.  
Tu peux trier selon les nombres ou selon l'alphabet et tu peux choisir l'ordre croissant ou décroissant.  
Dans le tri alphabétique tu peux aussi trier en ignorant les majuscules et les minuscules.

<BlockImage module="common/lists" id="lists_sort" />

### Python
```python
lists_sort(my_list, "NUMERIC", False)      # numérique, croissant
lists_sort(my_list, "NUMERIC", True)       # numérique, décroissant
lists_sort(my_list, "TEXT", False)         # alphabétique, croissant
lists_sort(my_list, "TEXT", True)          # alphabétique, décroissant
lists_sort(my_list, "IGNORE_CASE", False)  # sans distinguer majuscules et minuscules, croissant
lists_sort(my_list, "IGNORE_CASE", True)   # sans distinguer majuscules et minuscules, décroissant

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

## Inverser une liste {#lists_reverse}

C'est le bloc qui **inverse l'ordre** des éléments d'une liste.

<BlockImage module="common/lists" id="lists_reverse" />

### Python
```python
list(reversed(my_list))
```
