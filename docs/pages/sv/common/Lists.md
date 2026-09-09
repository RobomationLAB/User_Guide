---
title: Listor
---

# Listor

En lista är en **samling objekt i en bestämd ordning**, som en "att göra-lista" eller en "inköpslista".  
Objekten i en lista kan vara av vilken typ som helst, och samma värde kan förekomma flera gånger i listan.


## Skapa tom lista {#lists_create_with}

Den enklaste listan är den tomma listan, som du skapar med blocket **skapa tom lista**.

<BlockImage module="common/lists" id="lists_create_with" />

### Python
```python
[]
```

## Skapa lista med {#lists_create_with-2}

Med blocket **skapa lista med** kan du ge en ny lista dess startvärden.

<BlockImage module="common/lists" id="lists_create_with-2" />

### Python
```python
[item0, item1, item2]
```

## Skapa lista med upprepat föremål {#lists_repeat}

Med blocket **skapa lista med föremålet ... upprepat ... gånger** kan du upprepa ett angivet föremål och på så sätt skapa en lista med så många objekt du vill.

<BlockImage module="common/lists" id="lists_repeat" />

### Python
```python
[item] * times
```

## Längden på lista {#lists_length}

Värdet av blocket **längden på** är antalet objekt i listan.  
Längden på en tom lista är 0.

<BlockImage module="common/lists" id="lists_length" />

### Python
```python
len(list)
```

## Är tom {#lists_isEmpty}

Värdet av blocket **är tom** är **sant** när inmatningen är en tom lista, och **falskt** i övriga fall.

<BlockImage module="common/lists" id="lists_isEmpty" />

### Python
```python
not len(list)
```

## Hitta förekomst av objekt {#lists_indexOf}

Söker upp positionen för ett visst objekt i en lista.  
Om objektet inte finns i listan blir resultatet 0.

<BlockImage module="common/lists" id="lists_indexOf" />

### Python
```python
list.index(VALUE) + 1
```

## Hämta / hämta och ta bort / ta bort objekt {#lists_getIndex}

Med det här blocket kan du hämta ett objekt ur en lista, hämta och ta bort det, eller bara ta bort det.  
Det finns flera alternativ: första, sista, nummer N, ett slumpmässigt objekt med flera.

<BlockImage module="common/lists" id="lists_getIndex" />

### Hämta {#lists_getIndex_get}

Med blocket **hämta objekt ur listan** kan du hämta objektet på en viss position i listan.  

### Python
```python
list[0]
list[-1]
list[int(random.random() * len(list))]
list[N - 1]
list[-N]
```

### Hämta och ta bort {#lists_getIndex_cut}

Blocket **hämta och ta bort objekt ur listan** hämtar ett visst objekt ur listan och tar samtidigt bort objektet ur listan.

### Python
```python
list.pop(N - 1)                        # nummer #
list.pop(-N)                           # nummer # från slutet
list.pop(0)                            # första
list.pop()                             # sista 
lists_remove_random_item(list)         # slumpmässigt

# random
def lists_remove_random_item(myList):
    x = int(random.random() * len(myList))
    return myList.pop(x)
```

### Ta bort {#lists_getIndex_remove}

Blocket **ta bort objekt ur listan** tar bara bort ett visst objekt ur listan.  
Blockets vänstra kontakt försvinner, och du kan i stället koppla block ovanför och nedanför.  

### Python
```python
list.pop(N - 1)                             # nummer #
list.pop(-N)                                # nummer # från slutet
list.pop(0)                                 # första
list.pop()                                  # sista
list.pop(int(random.random() * len(list)))  # slumpmässigt
```

## Ange / infoga objekt på en position {#lists_setIndex}

Med det här blocket kan du ange eller infoga ett objekt på en position du väljer i listan.  
Det finns flera alternativ: första, sista, nummer N, ett slumpmässigt objekt med flera.

<BlockImage module="common/lists" id="lists_setIndex" />

### Ange objekt {#lists_setIndex_set}

Blocket **ange objekt i listan** ersätter objektet på den angivna positionen med ett annat objekt.

### Python
```python
list[N - 1] = value                         # nummer #
list[-N] = value                            # nummer # från slutet
list[0] = value                             # första
list[-1] = value                            # sista

tmp_x = int(random.random() * len(list))
list[tmp_x] = value                         # slumpmässigt
```

### Infoga objekt {#lists_setIndex_insert}

Blocket **infoga objekt i listan** lägger in ett nytt objekt på den angivna positionen.  
De befintliga objekten finns kvar och längden ökar med 1.

### Python
```python
list.insert(N - 1, value)                        # nummer #
list.insert(-N, value)                           # nummer # från slutet
list.insert(0, value)                            # första
list.append(value)                               # sista

tmp_x = int(random.random() * len(list))
list.insert(tmp_x, value)                        # slumpmässigt
```

## Hämta underlista {#lists_getSublist}

Blocket **få underlista från ... till ...** hämtar ut en underlista genom att du anger start- och slutposition.  
Det finns flera alternativ: första, sista, nummer N, ett slumpmässigt objekt med flera.  
Originallistan ändras inte av åtgärden.  

<BlockImage module="common/lists" id="lists_getSublist" />

### Python
```python
# starten är den första positionen (#1)
list[ : N]                             # #N (1-based)
list[ : -N]                            # last_#N
list[ : ]                              # last

# starten är last_#N
list[-N : M]
list[-N : -M]
list[-N : ]

# starten är first
list[ : N]
list[ : -N]
list[ : ]
```

## Ersätt objekt i en ny lista {#lists_replace}

Blocket **ersätt objekt i listan** returnerar en ny lista där objektet på den angivna positionen har bytts ut mot ett annat objekt.  
Det finns flera alternativ: första, sista, nummer N med flera.  
Originallistan ändras inte av åtgärden.  

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

## Dela / sammanfoga text med avgränsare {#lists_split}

<BlockImage module="common/lists" id="lists_split" />

### Skapa lista från text {#text_to_list}

Blocket **skapa lista från text** delar upp den angivna texten vid avgränsaren och returnerar resultatet som en lista.

### Python
```python
text.split(delimiter)
```

### Skapa text från lista {#list_to_text}

Blocket **skapa text från lista** slår ihop objekten i listan till en enda text med hjälp av avgränsaren.

### Python
```python
delimiter.join(list)
```

## Sortera lista {#lists_sort}

Ett block som **sorterar** en lista efter det kriterium du väljer.  
Du kan sortera numeriskt eller i bokstavsordning, och välja stigande eller fallande ordning.  
Vid sortering i bokstavsordning kan du dessutom välja att bortse från skiftläge.  

<BlockImage module="common/lists" id="lists_sort" />

### Python
```python
lists_sort(my_list, "NUMERIC", False)      # numeriskt, stigande
lists_sort(my_list, "NUMERIC", True)       # numeriskt, fallande
lists_sort(my_list, "TEXT", False)         # text, stigande
lists_sort(my_list, "TEXT", True)          # text, fallande
lists_sort(my_list, "IGNORE_CASE", False)  # utan skiftläge, stigande
lists_sort(my_list, "IGNORE_CASE", True)   # utan skiftläge, fallande

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

## Vänd på lista {#lists_reverse}

Ett block som **vänder på ordningen** mellan elementen i en lista.

<BlockImage module="common/lists" id="lists_reverse" />

### Python
```python
list(reversed(my_list))
```
