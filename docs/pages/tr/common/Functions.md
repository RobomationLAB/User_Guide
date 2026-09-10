---
title: Fonksiyonlar
---

# Fonksiyonlar

**Fonksiyon**, belirli bir işi yapan **komut (blok) topluluğudur**.  
Yinelenen işleri tek bir fonksiyonda toplarsanız kod **derli toplu ve bakımı kolay** olur.

Fonksiyonların özellikleri şunlardır.  
- **Yeniden kullanılabilir**: bir kez tanımlanan fonksiyon istediğiniz kadar çağrılabilir.  
- **Giriş ve çıkış**: fonksiyon parametre (giriş değeri) alıp işleyebilir ve sonucu (çıkış değeri) döndürebilir.  
- **Kodun okunurluğunu artırır**: programın akışını mantıklı biçimde düzenlemenizi sağlar.


## setup {#setup}

**setup fonksiyonu** yalnızca bir kez, kod çalıştırıldığı anda çağrılır.  
setup fonksiyonunda genellikle değişkenlere başlangıç değeri veren ya da robotun modunu ve seçeneklerini ayarlayan kod yazılır.  
Örneğin tekerlekle hareket eden bir robotu yönetirken setup fonksiyonunda tekerleklerin başlangıç hızını ayarlayabilirsiniz.  

<BlockImage module="common/functions" id="setup" />
  
`Utils.wait(...)` fonksiyonuyla zaman içinde sırayla çalışan kod yazabilirsiniz. Bunu paralel çalışan **loop fonksiyonuyla** birleştirdiğinizde yalnızca basit sıralı çalışma değil, gerçekten güçlü robot programlaması da mümkün olur.  

### Python
```python
def setup():
    # ...
    return
```

## loop {#loop}

**loop fonksiyonu** program çalıştığı sürece 10 ms'de bir yinelenerek çağrılır.  
loop fonksiyonunda genellikle değişken değerlerini sürekli ayarlayan ya da robotun olaylarını algılayıp işleyen kod yazılır.

<BlockImage module="common/functions" id="loop" />

### Python
```python
def loop():
    # ...
    return
```

## Fonksiyon tanımı {#procedures_defnoreturn}

Fonksiyon tanımlayan blokla **yeni bir fonksiyon** oluşturabilirsiniz.  
Dönüş değeri olmayan fonksiyon belirli işleri yapar ama **hiçbir değer döndürmez**.

<BlockImage module="common/functions" id="procedures_defnoreturn" />

### Python
```python
def myFunction(arg1, arg2):
    # ...
```

## Dönüş değerli fonksiyon tanımı {#procedures_defreturn}

Dönüş değeri olan fonksiyon belirli bir işi yapar, ardından başka bloklarda kullanabileceğiniz bir **sonuç döndürür**.  

<BlockImage module="common/functions" id="procedures_defreturn" />

Aşağıdaki fonksiyon **x ve y parametrelerini alır ve x + y sonucunu döndürür**.  

### Python
```python
def myFunction(x, y):
    return x + y
```

## Fonksiyon çağrısı {#procedures_callnoreturn}

Fonksiyonu tanımladığınızda **kullanıcı fonksiyonu bloğu** kendiliğinden oluşur.  
Bu blokla **önceden tanımladığınız fonksiyonu** çağırıp çalıştırabilirsiniz.

<BlockImage module="common/functions" id="procedures_callnoreturn" />

### Python
```python
myFunction(arg1, arg2)
```

## Eğer dönüş {#procedures_ifreturn}

Fonksiyonun içinde belirli bir koşul sağlandığında **hemen değer döndürüp fonksiyonu bitiren** bloktur.  
Bu blok **yalnızca fonksiyon içinde** kullanılabilir; başka yerlerde etkin değildir.

<BlockImage module="common/functions" id="procedures_ifreturn" />

### Python
```python
if condition:
    return value
```
