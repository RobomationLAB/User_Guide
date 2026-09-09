---
title: Lijst
---

# Lijst

Een lijst is een **verzameling items op volgorde**, zoals een "takenlijst" of een "boodschappenlijst".  
De items van een lijst kunnen van elk type zijn, en dezelfde waarde kan meerdere keren in een lijst voorkomen.


## Een lege lijst maken {#lists_create_with}

De eenvoudigste lijst is de lege lijst; die maak je met het blok **maak een lege lijst**.

<BlockImage module="common/lists" id="lists_create_with" />

### Python
```python
[]
```

## Een lijst maken {#lists_create_with-2}

Met het blok **maak een lijst met** kun je aan een nieuwe lijst beginwaarden geven.

<BlockImage module="common/lists" id="lists_create_with-2" />

### Python
```python
[item0, item1, item2]
```

## Een item herhalen in een lijst {#lists_repeat}

Met het blok **Maak lijst met item ... keer herhaald** kun je een opgegeven item herhalen en zo een lijst met het gewenste aantal items maken.

<BlockImage module="common/lists" id="lists_repeat" />

### Python
```python
[item] * times
```

## Lengte van een lijst {#lists_length}

De waarde van het blok **lengte van** is het aantal items in de lijst.  
De lengte van een lege lijst is 0.

<BlockImage module="common/lists" id="lists_length" />

### Python
```python
len(list)
```

## Controleren op een lege lijst {#lists_isEmpty}

De waarde van het blok **is leeg** is **waar** als de invoer een lege lijst is, en anders **onwaar**.

<BlockImage module="common/lists" id="lists_isEmpty" />

### Python
```python
not len(list)
```

## Positie waarop een item in een lijst voorkomt {#lists_indexOf}

Zoekt de positie van een bepaald item in een lijst.  
Komt het item niet in de lijst voor, dan is het resultaat 0.

<BlockImage module="common/lists" id="lists_indexOf" />

### Python
```python
list.index(VALUE) + 1
```

## Item ophalen / uitnemen / verwijderen {#lists_getIndex}

Met dit blok kun je een item uit een lijst ophalen, uitnemen of verwijderen.  
Er zijn verschillende opties: het eerste, het laatste, het N-de, een willekeurig item en meer.

<BlockImage module="common/lists" id="lists_getIndex" />

### Ophalen {#lists_getIndex_get}

Met het blok **in lijst haal op** kun je uit een lijst het item op een bepaalde positie ophalen.  

### Python
```python
list[0]
list[-1]
list[int(random.random() * len(list))]
list[N - 1]
list[-N]
```

### Uitnemen {#lists_getIndex_cut}

Het blok **in lijst neem uit** haalt een bepaald item uit een lijst op en verwijdert dat item uit de lijst.

### Python
```python
list.pop(N - 1)                        # het #-de
list.pop(-N)                           # het #-de vanaf het einde
list.pop(0)                            # het eerste
list.pop()                             # het laatste 
lists_remove_random_item(list)         # willekeurig

# random
def lists_remove_random_item(myList):
    x = int(random.random() * len(myList))
    return myList.pop(x)
```

### Verwijderen {#lists_getIndex_remove}

Het blok **in lijst verwijder** verwijdert alleen een bepaald item uit een lijst.  
De aansluiting aan de linkerkant van het blok verdwijnt, zodat je er blokken boven en onder aan kunt sluiten.  

### Python
```python
list.pop(N - 1)                             # het #-de
list.pop(-N)                                # het #-de vanaf het einde
list.pop(0)                                 # het eerste
list.pop()                                  # het laatste
list.pop(int(random.random() * len(list)))  # willekeurig
```

## Item op een gewenste positie instellen / invoegen {#lists_setIndex}

Met dit blok kun je in een lijst op een gewenste positie een item instellen of invoegen.  
Er zijn verschillende opties: het eerste, het laatste, het N-de, een willekeurig item en meer.

<BlockImage module="common/lists" id="lists_setIndex" />

### Item instellen {#lists_setIndex_set}

Het blok **in lijst stel in** vervangt het item op de opgegeven positie door een ander item.

### Python
```python
list[N - 1] = value                         # het #-de
list[-N] = value                            # het #-de vanaf het einde
list[0] = value                             # het eerste
list[-1] = value                            # het laatste

tmp_x = int(random.random() * len(list))
list[tmp_x] = value                         # willekeurig
```

### Item invoegen {#lists_setIndex_insert}

Het blok **in lijst voeg in** voegt een nieuw item op de opgegeven positie in.  
De bestaande items blijven behouden en de lengte neemt met 1 toe.

### Python
```python
list.insert(N - 1, value)                        # het #-de
list.insert(-N, value)                           # het #-de vanaf het einde
list.insert(0, value)                            # het eerste
list.append(value)                               # het laatste

tmp_x = int(random.random() * len(list))
list.insert(tmp_x, value)                        # willekeurig
```

## Een sublijst ophalen {#lists_getSublist}

Het blok **in lijst haal sublijst op** haalt een sublijst op door een begin- en eindpositie op te geven.  
Er zijn verschillende opties: het eerste, het laatste, het N-de, een willekeurig item en meer.  
De oorspronkelijke lijst verandert niet.  

<BlockImage module="common/lists" id="lists_getSublist" />

### Python
```python
# begin op de eerste positie (#1)
list[ : N]                             # #N (1-based)
list[ : -N]                            # last_#N
list[ : ]                              # last

# begin op last_#N
list[-N : M]
list[-N : -M]
list[-N : ]

# begin op first
list[ : N]
list[ : -N]
list[ : ]
```

## Een nieuwe lijst met een gewijzigd item ophalen {#lists_replace}

Het blok **vervang in lijst** geeft een nieuwe lijst terug waarin het item op de opgegeven positie door een ander item is vervangen.  
Er zijn verschillende opties: het eerste, het laatste, het N-de en meer.  
De oorspronkelijke lijst verandert niet.  

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

## Tekst splitsen / samenvoegen met een scheidingsteken {#lists_split}

<BlockImage module="common/lists" id="lists_split" />

### Lijst maken van tekst {#text_to_list}

Het blok **lijst maken van tekst** splitst de gegeven tekst op het scheidingsteken en geeft het resultaat als lijst terug.

### Python
```python
text.split(delimiter)
```

### Tekst maken van lijst {#list_to_text}

Het blok **tekst maken van lijst** voegt de items van een lijst met een scheidingsteken samen tot één tekst.

### Python
```python
delimiter.join(list)
```

## Een lijst sorteren {#lists_sort}

Een blok dat een lijst volgens het gewenste criterium **sorteert**.  
Je kunt op getal of op alfabet sorteren en kiezen tussen oplopend en aflopend.  
Bij alfabetisch sorteren kun je ook sorteren zonder onderscheid tussen hoofdletters en kleine letters.

<BlockImage module="common/lists" id="lists_sort" />

### Python
```python
lists_sort(my_list, "NUMERIC", False)      # numeriek, oplopend
lists_sort(my_list, "NUMERIC", True)       # numeriek, aflopend
lists_sort(my_list, "TEXT", False)         # alfabetisch, oplopend
lists_sort(my_list, "TEXT", True)          # alfabetisch, aflopend
lists_sort(my_list, "IGNORE_CASE", False)  # zonder hoofdlettergevoeligheid, oplopend
lists_sort(my_list, "IGNORE_CASE", True)   # zonder hoofdlettergevoeligheid, aflopend

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

## Een lijst omkeren {#lists_reverse}

Een blok dat de volgorde van de elementen van een lijst **omkeert**.

<BlockImage module="common/lists" id="lists_reverse" />

### Python
```python
list(reversed(my_list))
```
