---
title: Lister
---

# Lister

En liste er **en samling elementer i rekkefølge**, som en "gjøremålsliste" eller en "handleliste".  
Elementene i en liste kan være av hvilken som helst type, og den samme verdien kan forekomme flere ganger i listen.


## Opprette en tom liste {#lists_create_with}

Den enkleste listen er en tom liste, og den lager du med blokken **opprett en tom liste**.

<BlockImage module="common/lists" id="lists_create_with" />

### Python
```python
[]
```

## Lage en liste {#lists_create_with-2}

Med blokken **lag en liste med** kan du gi den nye listen startverdier.

<BlockImage module="common/lists" id="lists_create_with-2" />

### Python
```python
[item0, item1, item2]
```

## Gjenta et element i en liste {#lists_repeat}

Med blokken **lag en liste hvor elementet ... forekommer ... ganger** kan du gjenta det elementet du velger, og lage en liste med så mange elementer du vil.

<BlockImage module="common/lists" id="lists_repeat" />

### Python
```python
[item] * times
```

## Listens lengde {#lists_length}

Verdien av blokken **lengden på** er antall elementer i listen.  
Lengden av en tom liste er 0.

<BlockImage module="common/lists" id="lists_length" />

### Python
```python
len(list)
```

## Sjekke om listen er tom {#lists_isEmpty}

Verdien av blokken **er tom** er **sann** hvis inndataen er en tom liste, og ellers **usann**.

<BlockImage module="common/lists" id="lists_isEmpty" />

### Python
```python
not len(list)
```

## Posisjonen der et element står i listen {#lists_indexOf}

Finner posisjonen til et bestemt element i listen.  
Hvis elementet ikke finnes i listen, er resultatet 0.

<BlockImage module="common/lists" id="lists_indexOf" />

### Python
```python
list.index(VALUE) + 1
```

## Hente / klippe ut / fjerne et element {#lists_getIndex}

Med denne blokken kan du hente, klippe ut eller fjerne et element fra listen.  
Du kan velge mellom flere muligheter: det første, det siste, element nummer N, et tilfeldig element med mer.

<BlockImage module="common/lists" id="lists_getIndex" />

### Hente {#lists_getIndex_get}

Med blokken **hent element fra listen** kan du hente elementet på en bestemt posisjon i listen.  

### Python
```python
list[0]
list[-1]
list[int(random.random() * len(list))]
list[N - 1]
list[-N]
```

### Klippe ut {#lists_getIndex_cut}

Blokken **hent og fjern element fra listen** henter et bestemt element fra listen og fjerner det samtidig fra listen.

### Python
```python
list.pop(N - 1)                        # element nr. #
list.pop(-N)                           # element nr. # fra slutten
list.pop(0)                            # det første
list.pop()                             # det siste
lists_remove_random_item(list)         # et tilfeldig

# random
def lists_remove_random_item(myList):
    x = int(random.random() * len(myList))
    return myList.pop(x)
```

### Fjerne {#lists_getIndex_remove}

Blokken **fjern element fra listen** fjerner bare et bestemt element fra listen.  
Pluggen til venstre på blokken forsvinner, og du kan koble blokker over og under den.  

### Python
```python
list.pop(N - 1)                             # element nr. #
list.pop(-N)                                # element nr. # fra slutten
list.pop(0)                                 # det første
list.pop()                                  # det siste
list.pop(int(random.random() * len(list)))  # et tilfeldig
```

## Sette inn / legge inn et element på en valgt posisjon {#lists_setIndex}

Med denne blokken kan du sette eller legge inn et element på den posisjonen du velger i listen.  
Du kan velge mellom flere muligheter: det første, det siste, element nummer N, et tilfeldig element med mer.

<BlockImage module="common/lists" id="lists_setIndex" />

### Sette inn et element {#lists_setIndex_set}

Blokken **sett element i listen** bytter ut elementet på den angitte posisjonen med et annet element.

### Python
```python
list[N - 1] = value                         # element nr. #
list[-N] = value                            # element nr. # fra slutten
list[0] = value                             # det første
list[-1] = value                            # det siste

tmp_x = int(random.random() * len(list))
list[tmp_x] = value                         # et tilfeldig
```

### Legge inn et element {#lists_setIndex_insert}

Blokken **legg inn element i listen** setter et nytt element inn på den angitte posisjonen.  
De elementene som allerede står der, blir værende, og lengden øker med 1.

### Python
```python
list.insert(N - 1, value)                        # element nr. #
list.insert(-N, value)                           # element nr. # fra slutten
list.insert(0, value)                            # det første
list.append(value)                               # det siste

tmp_x = int(random.random() * len(list))
list.insert(tmp_x, value)                        # et tilfeldig
```

## Hente ut en delliste {#lists_getSublist}

Blokken **hent del-listen fra ... til ...** henter ut en delliste ut fra den start- og sluttposisjonen du angir.  
Du kan velge mellom flere muligheter: det første, det siste, element nummer N, et tilfeldig element med mer.  
Den opprinnelige listen endres ikke.  

<BlockImage module="common/lists" id="lists_getSublist" />

### Python
```python
# starten er den første posisjonen (#1)
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

## Hente ut en ny liste med et element byttet ut {#lists_replace}

Blokken **hent liste og erstatt** returnerer en ny liste der elementet på den angitte posisjonen er byttet ut med et annet element.  
Du kan velge mellom flere muligheter: det første, det siste, element nummer N med mer.  
Den opprinnelige listen endres ikke.  

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

## Dele opp / sette sammen tekst med en avgrenser {#lists_split}

<BlockImage module="common/lists" id="lists_split" />

### Lage en liste av tekst {#text_to_list}

Blokken **lag liste av tekst** deler den oppgitte teksten ved avgrenseren og returnerer resultatet som en liste.

### Python
```python
text.split(delimiter)
```

### Lage tekst av en liste {#list_to_text}

Blokken **lag tekst av liste** setter elementene i listen sammen til én tekst ved hjelp av avgrenseren.

### Python
```python
delimiter.join(list)
```

## Sortere en liste {#lists_sort}

En **blokk som sorterer** listen etter det kriteriet du velger.  
Du kan sortere etter tall eller alfabetisk, og du kan velge stigende eller synkende rekkefølge.  
Ved alfabetisk sortering kan du også sortere uten å skille mellom store og små bokstaver.

<BlockImage module="common/lists" id="lists_sort" />

### Python
```python
lists_sort(my_list, "NUMERIC", False)      # numerisk, stigende
lists_sort(my_list, "NUMERIC", True)       # numerisk, synkende
lists_sort(my_list, "TEXT", False)         # alfabetisk, stigende
lists_sort(my_list, "TEXT", True)          # alfabetisk, synkende
lists_sort(my_list, "IGNORE_CASE", False)  # uten å skille store/små, stigende
lists_sort(my_list, "IGNORE_CASE", True)   # uten å skille store/små, synkende

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

## Snu en liste {#lists_reverse}

En blokk som **snur rekkefølgen** på elementene i listen.

<BlockImage module="common/lists" id="lists_reverse" />

### Python
```python
list(reversed(my_list))
```
