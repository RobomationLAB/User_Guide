---
title: CSD-07 Ses Sensörü
---

# CSD-07 Ses Sensörü

## Örnek bildirimi {#instance}

CSD-07 Ses Sensörü(CSD07) bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Giriş portunu ayarla {#set_input_port}

CSD07 (ses sensörü) modülünün bağlı olduğu portu ayarlar.

<BlockImage module="CheeseStick/CSD07" id="set_input_port" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Bağlanacak port | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.set_port('Sa')
```

## Ses sensörü değeri {#get_input}

Seçilen porttan gelen ses sensörü değeri

<BlockImage module="CheeseStick/CSD07" id="get_input" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Okunacak port | Sa, Sb, Sc | son `set_port` çağrısındaki port |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.get_input('Sa')
```
