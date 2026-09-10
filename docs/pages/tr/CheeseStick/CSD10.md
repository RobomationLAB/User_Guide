---
title: CSD-10 ALS Sensörü
---

# CSD-10 ALS Sensörü

## Örnek bildirimi {#instance}

CSD-10 ALS Sensörü(CSD10) bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Giriş portunu ayarla {#set_input_port}

CSD10 (ışık sensörü) modülünün bağlı olduğu portu ayarlar.

<BlockImage module="CheeseStick/CSD10" id="set_input_port" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Bağlanacak port | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.set_port('Sa')
```

## ALS sensörü değeri {#get_input}

Seçilen porttan gelen ışık sensörü değeri

<BlockImage module="CheeseStick/CSD10" id="get_input" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Okunacak port | Sa, Sb, Sc | son `set_port` çağrısındaki port |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.get_input('Sa')
```
