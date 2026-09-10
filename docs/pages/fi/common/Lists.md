---
title: Listat
---

# Listat

Lista on **järjestyksessä olevien kohteiden joukko**, kuten "tehtävälista" tai "ostoslista".  
Listan kohteet voivat olla mitä tahansa tyyppiä, ja sama arvo voi esiintyä listassa useita kertoja.


## Tyhjän listan luominen {#lists_create_with}

Yksinkertaisin lista on tyhjä lista, ja sen luot lohkolla **luo tyhjä lista**.

<BlockImage module="common/lists" id="lists_create_with" />

### Python
```python
[]
```

## Listan luominen {#lists_create_with-2}

Lohkolla **luo lista** voit antaa uudelle listalle alkuarvot.

<BlockImage module="common/lists" id="lists_create_with-2" />

### Python
```python
[item0, item1, item2]
```

## Kohteen toistaminen listassa {#lists_repeat}

Lohkolla **luo lista, jossa kohde toistuu ... kertaa** voit toistaa valitsemaasi kohdetta ja tehdä listan, jossa on haluamasi määrä alkioita.

<BlockImage module="common/lists" id="lists_repeat" />

### Python
```python
[item] * times
```

## Listan pituus {#lists_length}

Lohkon **:n pituus** arvo on listan alkioiden määrä.  
Tyhjän listan pituus on 0.

<BlockImage module="common/lists" id="lists_length" />

### Python
```python
len(list)
```

## Tyhjän listan tarkistus {#lists_isEmpty}

Lohkon **on tyhjä** arvo on **tosi**, jos syöte on tyhjä lista, ja muuten **epätosi**.

<BlockImage module="common/lists" id="lists_isEmpty" />

### Python
```python
not len(list)
```

## Kohteen sijainti listassa {#lists_indexOf}

Etsii tietyn kohteen sijainnin listasta.  
Jos kohdetta ei löydy listasta, tulos on 0.

<BlockImage module="common/lists" id="lists_indexOf" />

### Python
```python
list.index(VALUE) + 1
```

## Kohteen hakeminen / leikkaaminen / poistaminen {#lists_getIndex}

Tällä lohkolla voit hakea, leikata tai poistaa kohteen listasta.  
Voit valita useista vaihtoehdoista: ensimmäinen, viimeinen, kohde numero N, satunnainen kohde ja muut.

<BlockImage module="common/lists" id="lists_getIndex" />

### Hakeminen {#lists_getIndex_get}

Lohkolla **hae kohde listasta** voit hakea kohteen tietystä kohdasta listaa.  

### Python
```python
list[0]
list[-1]
list[int(random.random() * len(list))]
list[N - 1]
list[-N]
```

### Leikkaaminen {#lists_getIndex_cut}

Lohko **hae ja poista kohde listasta** hakee tietyn kohteen listasta ja poistaa sen samalla listasta.

### Python
```python
list.pop(N - 1)                        # kohde nro #
list.pop(-N)                           # kohde nro # lopusta
list.pop(0)                            # ensimmäinen
list.pop()                             # viimeinen
lists_remove_random_item(list)         # satunnainen

# random
def lists_remove_random_item(myList):
    x = int(random.random() * len(myList))
    return myList.pop(x)
```

### Poistaminen {#lists_getIndex_remove}

Lohko **poista kohde listasta** vain poistaa tietyn kohteen listasta.  
Lohkon vasen liitin katoaa, ja voit yhdistää lohkoja sen ylä- ja alapuolelle.  

### Python
```python
list.pop(N - 1)                             # kohde nro #
list.pop(-N)                                # kohde nro # lopusta
list.pop(0)                                 # ensimmäinen
list.pop()                                  # viimeinen
list.pop(int(random.random() * len(list)))  # satunnainen
```

## Kohteen asettaminen / lisääminen haluttuun kohtaan {#lists_setIndex}

Tällä lohkolla voit asettaa tai lisätä kohteen valitsemaasi kohtaan listassa.  
Voit valita useista vaihtoehdoista: ensimmäinen, viimeinen, kohde numero N, satunnainen kohde ja muut.

<BlockImage module="common/lists" id="lists_setIndex" />

### Kohteen asettaminen {#lists_setIndex_set}

Lohko **aseta kohde listassa** korvaa määrätyssä kohdassa olevan kohteen toisella kohteella.

### Python
```python
list[N - 1] = value                         # kohde nro #
list[-N] = value                            # kohde nro # lopusta
list[0] = value                             # ensimmäinen
list[-1] = value                            # viimeinen

tmp_x = int(random.random() * len(list))
list[tmp_x] = value                         # satunnainen
```

### Kohteen lisääminen {#lists_setIndex_insert}

Lohko **lisää kohde listaan** sijoittaa uuden kohteen määrättyyn kohtaan.  
Jo olemassa olevat kohteet säilyvät, ja pituus kasvaa yhdellä.

### Python
```python
list.insert(N - 1, value)                        # kohde nro #
list.insert(-N, value)                           # kohde nro # lopusta
list.insert(0, value)                            # ensimmäinen
list.append(value)                               # viimeinen

tmp_x = int(random.random() * len(list))
list.insert(tmp_x, value)                        # satunnainen
```

## Osalistan hakeminen {#lists_getSublist}

Lohko **hae osalista alkaen ... päättyen ...** poimii osalistan määrittämiesi alku- ja loppukohtien perusteella.  
Voit valita useista vaihtoehdoista: ensimmäinen, viimeinen, kohde numero N, satunnainen kohde ja muut.  
Alkuperäinen lista ei muutu.  

<BlockImage module="common/lists" id="lists_getSublist" />

### Python
```python
# alku on ensimmäinen kohta (#1)
list[ : N]                             # #N (1-based)
list[ : -N]                            # last_#N
list[ : ]                              # last

# alku on last_#N
list[-N : M]
list[-N : -M]
list[-N : ]

# alku on first
list[ : N]
list[ : -N]
list[ : ]
```

## Uuden listan hakeminen kohde korvattuna {#lists_replace}

Lohko **korvaa listassa oleva kohde** palauttaa uuden listan, jossa määrätyssä kohdassa oleva kohde on korvattu toisella kohteella.  
Voit valita useista vaihtoehdoista: ensimmäinen, viimeinen, kohde numero N ja muut.  
Alkuperäinen lista ei muutu.  

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

## Tekstin jakaminen / yhdistäminen erottimella {#lists_split}

<BlockImage module="common/lists" id="lists_split" />

### Listan tekeminen tekstistä {#text_to_list}

Lohko **tee lista tekstistä** jakaa annetun tekstin erottimen kohdalta ja palauttaa tuloksen listana.

### Python
```python
text.split(delimiter)
```

### Tekstin tekeminen listasta {#list_to_text}

Lohko **tee teksti listasta** yhdistää listan kohteet yhdeksi tekstiksi erottimen avulla.

### Python
```python
delimiter.join(list)
```

## Listan lajitteleminen {#lists_sort}

**Lohko, joka lajittelee** listan valitsemasi perusteen mukaan.  
Voit lajitella lukujen tai aakkosten mukaan, ja voit valita nousevan tai laskevan järjestyksen.  
Aakkosjärjestyksessä voit lajitella myös erottelematta isoja ja pieniä kirjaimia.

<BlockImage module="common/lists" id="lists_sort" />

### Python
```python
lists_sort(my_list, "NUMERIC", False)      # numeerinen, nouseva
lists_sort(my_list, "NUMERIC", True)       # numeerinen, laskeva
lists_sort(my_list, "TEXT", False)         # aakkosellinen, nouseva
lists_sort(my_list, "TEXT", True)          # aakkosellinen, laskeva
lists_sort(my_list, "IGNORE_CASE", False)  # kirjainkokoa erottelematta, nouseva
lists_sort(my_list, "IGNORE_CASE", True)   # kirjainkokoa erottelematta, laskeva

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

## Listan kääntäminen {#lists_reverse}

Lohko, joka **kääntää** listan alkioiden järjestyksen.

<BlockImage module="common/lists" id="lists_reverse" />

### Python
```python
list(reversed(my_list))
```
