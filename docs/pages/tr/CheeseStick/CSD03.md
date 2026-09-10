---
title: CSD-03 Döner Potansiyometre
---

# CSD-03 Döner Potansiyometre

## Örnek bildirimi {#instance}

CSD-03 Döner Potansiyometre(CSD03) bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Giriş portunu ayarla {#set_input_port}

CSD03 (potansiyometre) modülünün bağlı olduğu portu ayarlar.

<BlockImage module="CheeseStick/CSD03" id="set_input_port" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Bağlanacak port | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_port('Sa')
```

## Giriş aralığını ayarla {#set_input_range}

Seçilen portun giriş değerini belirtilen en küçük ile en büyük aralığa dönüştürür.  
Giriş değerinin aralığı 0 ile 255 arasındadır.  
Dönüştürülebilecek değerlerin aralığı -100 ile 100 arasındadır.

<BlockImage module="CheeseStick/CSD03" id="set_input_range" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Seçilen port | Sa, Sb, Sc | - |
| src_min | Giriş (alan) | Kaynağın en küçük değeri | 0 ile 255 arasında tam sayı | - |
| src_max | Giriş (alan) | Kaynağın en büyük değeri | 0 ile 255 arasında tam sayı | - |
| dst_min | Giriş (alan) | Dönüşüm sonrası en küçük değer | -100 ile 100 arasında tam sayı | - |
| dst_max | Giriş (alan) | Dönüşüm sonrası en büyük değer | -100 ile 100 arasında tam sayı | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range('Sa', 0, 255, 0, 100)
```

## Giriş aralığını orta değerle ayarla {#set_input_range_median}

Seçilen portun giriş değerini belirtilen en küçük, orta ve en büyük aralığa dönüştürür.  
Giriş değerinin aralığı 0 ile 255 arasındadır.  
Dönüştürülebilecek değerlerin aralığı -100 ile 100 arasındadır.

<BlockImage module="CheeseStick/CSD03" id="set_input_range_median" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Seçilen port | Sa, Sb, Sc | - |
| src_min | Giriş (alan) | Kaynağın en küçük değeri | 0 ile 255 arasında tam sayı | - |
| src_median | Giriş (alan) | Kaynağın orta değeri | 0 ile 255 arasında tam sayı | - |
| src_max | Giriş (alan) | Kaynağın en büyük değeri | 0 ile 255 arasında tam sayı | - |
| dst_min | Giriş (alan) | Dönüşüm sonrası en küçük değer | -100 ile 100 arasında tam sayı | - |
| dst_median | Giriş (alan) | Dönüşüm sonrası orta değer | -100 ile 100 arasında tam sayı | - |
| dst_max | Giriş (alan) | Dönüşüm sonrası en büyük değer | -100 ile 100 arasında tam sayı | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Giriş değeri {#get_input}

Seçilen porttan gelen döner potansiyometre giriş değeri  
Giriş aralığı ayrıca ayarlanmamışsa değerler 0 ile 255 arasındadır.

<BlockImage module="CheeseStick/CSD03" id="get_input" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Okunacak port | Sa, Sb, Sc | son `set_port` çağrısındaki port |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.get_input('Sa')
```
