---
title: Metin
---

# Metin {#text}

Metin örnekleri:
- "thing #1"
- "March 12, 2010"
- "" (boş metin)

Metin büyük ve küçük harfleri, rakamları, noktalama işaretlerini, başka simgeleri ve sözcükler arasındaki boşlukları içerebilir.  

<BlockImage module="common/text" id="text" />

## Metin oluştur {#text_join}

**ile metin oluştur** bloğu birkaç metnin değerini birleştirip yeni bir metin oluşturur.

<BlockImage module="common/text" id="text_join" />

### Python
```python
'' + str(A) + str(B) + str(C)
```

## Metin ekle {#text_append}

**metnini ekle** bloğu verilen metni belirtilen değişkene ekler.

<BlockImage module="common/text" id="text_append" />

### Python
```python
VAR = str(VAR) + TEXT
```

## Metnin uzunluğu {#text_length}

**uzunluğu** bloğu metindeki harfleri, rakamları ve diğer işaretleri sayar ve toplamını döndürür.  
Aşağıda `abc` metninin uzunluğu 3, boş metnin uzunluğu ise 0'dır.

<BlockImage module="common/text" id="text_length" />

### Python
```python
len(VALUE)
```

## Boş metin denetimi {#text_isEmpty}

**boş** bloğu verilen metnin boş olup olmadığını, yani uzunluğunun 0 olup olmadığını denetler.

<BlockImage module="common/text" id="text_isEmpty" />

### Python
```python
len(VALUE) == 0
```

## Metin arama {#text_indexOf}

Bu bloklar bir metnin başka bir metin içinde geçip geçmediğini denetler ve geçiyorsa konumunu döndürür.

<BlockImage module="common/text" id="text_indexOf" />

### Python
```python
(VALUE.find(FIND) + 1)
(VALUE.rfind(FIND) + 1)
```

## Tek harf alma {#text_charAt}

Metinden belirtilen konumdaki tek bir harfi alır.  
Birkaç seçenek vardır: ilk, son, rastgele ya da N'inci harf.

<BlockImage module="common/text" id="text_charAt" />

### Python
```python
TEXT[N - 1]
TEXT[len(TEXT) - N]
TEXT[0]
TEXT[-1]
TEXT[int(random.random() * len(TEXT))]
```

## Metnin bir bölümünü alma {#text_getSubstring}

**alt dize al** bloğu metinden istediğiniz aralıktaki bölümü kesip almanızı sağlar.

<BlockImage module="common/text" id="text_getSubstring" />

### Python
```python
TEXT[at1:at2]
```

## Harf durumunu değiştirme {#text_changeCase}

Bu blok verilen metni aşağıdaki biçimlerden birine çevirir:

- **ÜST DURUMA**: tüm harfleri büyük harfe çevirir
- **alt duruma**: tüm harfleri küçük harfe çevirir
- **Baş Harfleri Büyük**: her sözcüğün ilk harfini büyük, kalanını küçük harfe çevirir

<BlockImage module="common/text" id="text_changeCase" />

### Python
```python
TEXT.upper() # üst duruma
TEXT.lower() # alt duruma
TEXT.title() # baş harfleri büyük
```

## Boşluk kırpma {#text_trim}

Aşağıdaki blok metindeki boşlukları seçilen yerden siler:
- her iki tarafından da
- sol tarafından
- sağ tarafından

<BlockImage module="common/text" id="text_trim" />

### Python
```python
TEXT.strip()    # her iki tarafından da
TEXT.lstrip()   # sol tarafından
TEXT.rstrip()   # sağ tarafından
```

## Metin geçişlerini sayma {#text_count}

Verilen metinde belirli bir bölümün kaç kez geçtiğini sayar ve bu sayıyı döndürür.

<BlockImage module="common/text" id="text_count" />

### Python
```python
HAYSTACK.count(NEEDLE)
```

## Metin bölümünü değiştirme {#text_replace}

Metindeki belirli bir bölümün tüm geçişlerini başka bir metinle değiştirir.

<BlockImage module="common/text" id="text_replace" />

### Python
```python
HAYSTACK.replace(NEEDLE, REPLACEMENT)
```

## Metni ters çevirme {#text_reverse}

Harflerin sırası tersine çevrilmiş yeni bir metin döndürür.

<BlockImage module="common/text" id="text_reverse" />

### Python
```python
TEXT[::-1]
```

## Metin yazdırma {#text_print}

**yaz** bloğu verilen değeri açılır pencerede gösterir.

<BlockImage module="common/text" id="text_print" />

### Python
```python
print(TEXT)
```

## Kullanıcıdan veri alma {#text_prompt_ext}

Aşağıdaki blok kullanıcının veri gireceği bir pencere açar; girilen değer bir değişkende saklanır.  
Metin ya da sayı istenebilir.

<BlockImage module="common/text" id="text_prompt_ext" />

### Python
```python
input(TEXT)
float(input(TEXT))
```
