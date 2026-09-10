---
title: Kontrol
---

# Kontrol

Blok kodlamada **kontrol blokları** programın akışını etkiler.  
Belirli bir süre beklemenizi, tuşa basıldığını algılamanızı ya da günlüğe kayıt yazmanızı sağlar.


## Bekle {#wait_sec}

Belirtilen süre (saniye) kadar bekler, sonra bir sonraki komutu çalıştırır.

<BlockImage module="common/control" id="wait_sec" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| sec | Giriş (alan) | Bekleme süresi — **doğrudan yazılan sayı** (örn. `Utils.wait(0.5)`) | 0 veya daha büyük gerçel sayı | - |
| sec | Giriş (blok) | Bekleme süresi — **değişken ya da ifade** (örn. `Utils.wait(time)`) | 0 veya daha büyük gerçel sayı | - |

### Python
```python
# sec alanı = 2 → olduğu gibi (saniye cinsinden)
Utils.wait(2)

# değişkenden gelen değer
Utils.wait(myVar)
```

## Bir kare bekle {#wait_1msec}

Programın çalışmasını bir kare (yaklaşık 0,001 saniye) durdurur.

<BlockImage module="common/control" id="wait_1msec" />

### Parametreler

(yok — sabit 0,001 saniye)

### Python
```python
Utils.wait(0.001)
```

<!--
## Sonsuza kadar bekle {#wait_forever}

Programın çalışmasını durdurur ve sonsuza kadar bekler.

### Parametreler

(yok)

### Python
```python
Utils.wait_forever()
```
-->

## Tuşa basıldı {#key_pressed}

Belirtilen tuşa basılı olup olmadığına göre **doğru (True) ya da yanlış (False)** döndürür.

<BlockImage module="common/control" id="key_pressed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| key | Giriş | Tuşun adı | space, up, left, right, down, a~z, 0~9,<br>shift, ctrl, alt, enter, tab, esc, backspace | - |

### Python
```python
Utils.keypressed('space')
```

## Günlüğe yaz {#log}

Seçilen değişkenin ya da özelliğin değerini anlık olarak **Konsol** penceresine yazar.

<BlockImage module="common/control" id="log" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş | Yazılacak değer | Herhangi bir değer | - |
| tag | Giriş | Kayıt etiketi | Metin | - |
| unit | Giriş | Görüntülenecek birim | Metin | - |

### Python
```python
Utils.log(data, '', '')
```

## Grafikte göster {#scope}

Seçilen değerin değişimini **Grafik** penceresinde anlık grafik olarak gösterir.  
Grafiğin rengini, en küçük ve en büyük değerini, yani aralığını ayarlayabilirsiniz.

<BlockImage module="common/control" id="scope" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| signal | Giriş (blok) | Grafikteki sinyal değeri | Gerçel sayı | - |
| name | Giriş | Grafiğin adı | Metin | - |
| min_val | Giriş (alan) | Grafiğin en küçük değeri | Gerçel sayı | - |
| max_val | Giriş (alan) | Grafiğin en büyük değeri | Gerçel sayı | - |
| color | Renk | Grafiğin rengi (hex) | Hex metni | - |

### Python
```python
Utils.scope(signal, '', 0, 100, '#000000')
```
