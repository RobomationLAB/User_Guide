---
title: Liste
---

# Liste

Liste, «yapılacaklar listesi» ya da «alışveriş listesi» gibi **öğelerin sıralı bir topluluğudur**.  
Listenin öğeleri her türden olabilir ve aynı değer listede birden çok kez geçebilir.


## Boş liste oluştur {#lists_create_with}

En basit liste boş listedir; **boş liste oluştur** bloğuyla oluşturulur.

<BlockImage module="common/lists" id="lists_create_with" />

### Python
```python
[]
```

## İle liste oluştur {#lists_create_with-2}

**ile liste oluştur** bloğu yeni listeye başlangıç değerleri vermenizi sağlar.

<BlockImage module="common/lists" id="lists_create_with-2" />

### Python
```python
[item0, item1, item2]
```

## Yinelenen öğeyle liste oluştur {#lists_repeat}

**tekrarlanan öğeyle liste oluştur** bloğu verilen öğeyi yineleyerek istediğiniz uzunlukta liste oluşturur.

<BlockImage module="common/lists" id="lists_repeat" />

### Python
```python
[item] * times
```

## Listenin uzunluğu {#lists_length}

**uzunluğu** bloğunun değeri listedeki öğe sayısıdır.  
Boş listenin uzunluğu 0'dır.

<BlockImage module="common/lists" id="lists_length" />

### Python
```python
len(list)
```

## Boş liste denetimi {#lists_isEmpty}

**boş** bloğunun değeri, verilen liste boşsa **doğru**, diğer durumlarda **yanlıştır**.

<BlockImage module="common/lists" id="lists_isEmpty" />

### Python
```python
not len(list)
```

## Öğenin listedeki konumu {#lists_indexOf}

Verilen öğenin listedeki konumunu bulur.  
Listede böyle bir öğe yoksa sonuç 0'dır.

<BlockImage module="common/lists" id="lists_indexOf" />

### Python
```python
list.index(VALUE) + 1
```

## Öğeyi al / al ve sil / sil {#lists_getIndex}

Bu blok listeden bir öğeyi almanızı, alıp silmenizi ya da yalnızca silmenizi sağlar.  
Birkaç seçenek vardır: ilk, son, N'inci ya da rastgele öğe.

<BlockImage module="common/lists" id="lists_getIndex" />

### Al {#lists_getIndex_get}

**listede al** bloğu listeden seçtiğiniz konumdaki öğeyi almanızı sağlar.  

### Python
```python
list[0]
list[-1]
list[int(random.random() * len(list))]
list[N - 1]
list[-N]
```

### Al ve sil {#lists_getIndex_cut}

**listede al ve sil** bloğu listeden seçilen öğeyi alır ve aynı anda listeden siler.

### Python
```python
list.pop(N - 1)                        # # numaralı öğe
list.pop(-N)                           # sondan # öğe
list.pop(0)                            # ilk
list.pop()                             # son 
lists_remove_random_item(list)         # rastgele

# random
def lists_remove_random_item(myList):
    x = int(random.random() * len(myList))
    return myList.pop(x)
```

### Sil {#lists_getIndex_remove}

**listede sil** bloğu seçilen öğeyi listeden yalnızca siler.  
Bloğun sol çıkıntısı kaybolur ve üstüne, altına blok bağlanabilir hale gelir.  

### Python
```python
list.pop(N - 1)                             # # numaralı öğe
list.pop(-N)                                # sondan # öğe
list.pop(0)                                 # ilk
list.pop()                                  # son
list.pop(int(random.random() * len(list)))  # rastgele
```

## Öğeyi istenen konuma ayarla / ekle {#lists_setIndex}

Bu blok listenin istediğiniz konumuna öğe ayarlamanızı ya da eklemenizi sağlar.  
Birkaç seçenek vardır: ilk, son, N'inci ya da rastgele öğe.

<BlockImage module="common/lists" id="lists_setIndex" />

### Öğeyi ayarla {#lists_setIndex_set}

**listede ayarla** bloğu belirtilen konumdaki öğeyi başka bir öğeyle değiştirir.

### Python
```python
list[N - 1] = value                         # # numaralı öğe
list[-N] = value                            # sondan # öğe
list[0] = value                             # ilk
list[-1] = value                            # son

tmp_x = int(random.random() * len(list))
list[tmp_x] = value                         # rastgele
```

### Öğeyi ekle {#lists_setIndex_insert}

**listede ekle** bloğu belirtilen konuma yeni bir öğe ekler.  
Önceki öğeler korunur ve listenin uzunluğu 1 artar.

### Python
```python
list.insert(N - 1, value)                        # # numaralı öğe
list.insert(-N, value)                           # sondan # öğe
list.insert(0, value)                            # ilk
list.append(value)                               # son

tmp_x = int(random.random() * len(list))
list.insert(tmp_x, value)                        # rastgele
```

## Alt liste alma {#lists_getSublist}

**listede alt liste al** bloğu belirtilen başlangıç ve bitiş konumları arasındaki alt listeyi keser.  
Birkaç seçenek vardır: ilk, son, N'inci ya da rastgele öğe.  
İşlemden sonra kaynak liste değişmeden kalır.  

<BlockImage module="common/lists" id="lists_getSublist" />

### Python
```python
# başlangıç ilk konumda (#1)
list[ : N]                             # #N (1'den başlayarak)
list[ : -N]                            # last_#N
list[ : ]                              # last

# başlangıç last_#N
list[-N : M]
list[-N : -M]
list[-N : ]

# başlangıç first
list[ : N]
list[ : -N]
list[ : ]
```

## Öğesi değiştirilmiş yeni liste {#lists_replace}

**öğesini ile değiştirerek listeyi al** bloğu, belirtilen konumdaki öğenin başka bir öğeyle değiştirildiği yeni bir liste döndürür.  
Birkaç seçenek vardır: ilk, son, N'inci ve diğerleri.  
İşlemden sonra kaynak liste değişmeden kalır.  

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

## Metni sınırlayıcıyla bölme / birleştirme {#lists_split}

<BlockImage module="common/lists" id="lists_split" />

### Metinden liste yap {#text_to_list}

**metinden liste yap** bloğu verilen metni sınırlayıcıya göre böler ve liste olarak döndürür.

### Python
```python
text.split(delimiter)
```

### Listeden metin yap {#list_to_text}

**listeden metin yap** bloğu listenin öğelerini sınırlayıcıyla ayırarak tek bir metinde birleştirir.

### Python
```python
delimiter.join(list)
```

## Listeyi sıralama {#lists_sort}

Listeyi seçilen ölçüte göre **sıralayan bloktur**.  
Sayısal ya da alfabetik, artan ya da azalan sıralayabilirsiniz.  
Alfabetik sıralamada harf durumunu dikkate almamayı da seçebilirsiniz.

<BlockImage module="common/lists" id="lists_sort" />

### Python
```python
lists_sort(my_list, "NUMERIC", False)      # sayısal, artan
lists_sort(my_list, "NUMERIC", True)       # sayısal, azalan
lists_sort(my_list, "TEXT", False)         # alfabetik, artan
lists_sort(my_list, "TEXT", True)          # alfabetik, azalan
lists_sort(my_list, "IGNORE_CASE", False)  # harf durumu yok sayılarak, artan
lists_sort(my_list, "IGNORE_CASE", True)   # harf durumu yok sayılarak, azalan

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

## Listeyi ters çevirme {#lists_reverse}

Listenin öğelerinin **sırasını tersine çeviren** bloktur.

<BlockImage module="common/lists" id="lists_reverse" />

### Python
```python
list(reversed(my_list))
```
