---
title: Lister
---

# Lister

En liste er en **samling af elementer i en bestemt rækkefølge**, som en "huskeliste" eller en "indkøbsliste".  
Elementerne i en liste kan være af enhver type, og den samme værdi kan optræde flere gange i listen.


## Opret en tom liste {#lists_create_with}

Den enkleste liste er den tomme liste, som du opretter med blokken **opret en tom liste**.

<BlockImage module="common/lists" id="lists_create_with" />

### Python
```python
[]
```

## Opret liste med {#lists_create_with-2}

Med blokken **opret liste med** kan du give en ny liste dens startværdier.

<BlockImage module="common/lists" id="lists_create_with-2" />

### Python
```python
[item0, item1, item2]
```

## Opret liste med gentaget element {#lists_repeat}

Med blokken **opret liste med elementet ... gentaget ... gange** kan du gentage et bestemt element og på den måde lave en liste med lige så mange elementer, du vil.

<BlockImage module="common/lists" id="lists_repeat" />

### Python
```python
[item] * times
```

## Længden af liste {#lists_length}

Værdien af blokken **længden af** er antallet af elementer i listen.  
Længden af en tom liste er 0.

<BlockImage module="common/lists" id="lists_length" />

### Python
```python
len(list)
```

## Er tom {#lists_isEmpty}

Værdien af blokken **er tom** er **sand**, når input er en tom liste, og **falsk** i alle andre tilfælde.

<BlockImage module="common/lists" id="lists_isEmpty" />

### Python
```python
not len(list)
```

## Find forekomst af element {#lists_indexOf}

Finder positionen af et bestemt element i en liste.  
Hvis elementet ikke findes i listen, er resultatet 0.

<BlockImage module="common/lists" id="lists_indexOf" />

### Python
```python
list.index(VALUE) + 1
```

## Hent / hent og fjern / fjern element {#lists_getIndex}

Med denne blok kan du hente et element fra en liste, hente og fjerne det eller blot fjerne det.  
Der er flere muligheder: første, sidste, nummer N, et tilfældigt element med flere.

<BlockImage module="common/lists" id="lists_getIndex" />

### Hent {#lists_getIndex_get}

Med blokken **hent element fra listen** kan du hente elementet på en bestemt position i listen.  

### Python
```python
list[0]
list[-1]
list[int(random.random() * len(list))]
list[N - 1]
list[-N]
```

### Hent og fjern {#lists_getIndex_cut}

Blokken **hent og fjern element fra listen** henter et bestemt element fra listen og fjerner samtidig elementet fra listen.

### Python
```python
list.pop(N - 1)                        # nummer #
list.pop(-N)                           # nummer # fra slutningen
list.pop(0)                            # første
list.pop()                             # sidste 
lists_remove_random_item(list)         # tilfældigt

# random
def lists_remove_random_item(myList):
    x = int(random.random() * len(myList))
    return myList.pop(x)
```

### Fjern {#lists_getIndex_remove}

Blokken **fjern element fra listen** fjerner blot et bestemt element fra listen.  
Blokkens venstre stik forsvinder, og du kan i stedet forbinde blokke over og under.  

### Python
```python
list.pop(N - 1)                             # nummer #
list.pop(-N)                                # nummer # fra slutningen
list.pop(0)                                 # første
list.pop()                                  # sidste
list.pop(int(random.random() * len(list)))  # tilfældigt
```

## Sæt / indsæt element på en position {#lists_setIndex}

Med denne blok kan du sætte eller indsætte et element på en position, du vælger i listen.  
Der er flere muligheder: første, sidste, nummer N, et tilfældigt element med flere.

<BlockImage module="common/lists" id="lists_setIndex" />

### Sæt element {#lists_setIndex_set}

Blokken **sæt element i listen** erstatter elementet på den angivne position med et andet element.

### Python
```python
list[N - 1] = value                         # nummer #
list[-N] = value                            # nummer # fra slutningen
list[0] = value                             # første
list[-1] = value                            # sidste

tmp_x = int(random.random() * len(list))
list[tmp_x] = value                         # tilfældigt
```

### Indsæt element {#lists_setIndex_insert}

Blokken **indsæt element i listen** sætter et nyt element ind på den angivne position.  
De eksisterende elementer bliver, og længden øges med 1.

### Python
```python
list.insert(N - 1, value)                        # nummer #
list.insert(-N, value)                           # nummer # fra slutningen
list.insert(0, value)                            # første
list.append(value)                               # sidste

tmp_x = int(random.random() * len(list))
list.insert(tmp_x, value)                        # tilfældigt
```

## Hent underliste {#lists_getSublist}

Blokken **hent underliste fra ... til ...** henter en underliste ud, ved at du angiver start- og slutposition.  
Der er flere muligheder: første, sidste, nummer N, et tilfældigt element med flere.  
Den oprindelige liste ændres ikke af handlingen.  

<BlockImage module="common/lists" id="lists_getSublist" />

### Python
```python
# starten er den første position (#1)
list[ : N]                             # #N (1-based)
list[ : -N]                            # last_#N
list[ : ]                              # last

# starten er last_#N
list[-N : M]
list[-N : -M]
list[-N : ]

# starten er first
list[ : N]
list[ : -N]
list[ : ]
```

## Hent liste med erstattet element {#lists_replace}

Blokken **hent liste erstat** returnerer en ny liste, hvor elementet på den angivne position er erstattet med et andet element.  
Der er flere muligheder: første, sidste, nummer N med flere.  
Den oprindelige liste ændres ikke af handlingen.  

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

## Del / saml tekst med skilletegn {#lists_split}

<BlockImage module="common/lists" id="lists_split" />

### Lav tekst til liste {#text_to_list}

Blokken **lav tekst til liste** deler den angivne tekst ved skilletegnet og returnerer resultatet som en liste.

### Python
```python
text.split(delimiter)
```

### Lav liste til tekst {#list_to_text}

Blokken **lav liste til tekst** sætter elementerne i listen sammen til én tekst ved hjælp af skilletegnet.

### Python
```python
delimiter.join(list)
```

## Sortér liste {#lists_sort}

En blok, der **sorterer** en liste efter det kriterium, du vælger.  
Du kan sortere efter tal eller alfabetisk og vælge stigende eller faldende orden.  
Ved alfabetisk sortering kan du desuden vælge at se bort fra store og små bogstaver.  

<BlockImage module="common/lists" id="lists_sort" />

### Python
```python
lists_sort(my_list, "NUMERIC", False)      # nummerorden, stigende
lists_sort(my_list, "NUMERIC", True)       # nummerorden, faldende
lists_sort(my_list, "TEXT", False)         # tekst, stigende
lists_sort(my_list, "TEXT", True)          # tekst, faldende
lists_sort(my_list, "IGNORE_CASE", False)  # uden store/små bogstaver, stigende
lists_sort(my_list, "IGNORE_CASE", True)   # uden store/små bogstaver, faldende

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

## Vend liste om {#lists_reverse}

En blok, der **vender rækkefølgen om** mellem elementerne i en liste.

<BlockImage module="common/lists" id="lists_reverse" />

### Python
```python
list(reversed(my_list))
```
