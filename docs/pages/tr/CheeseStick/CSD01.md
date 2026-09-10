---
title: CSD-01 Dokunmatik Anahtar
---

# CSD-01 Dokunmatik Anahtar

## Örnek bildirimi {#instance}

CSD-01 Dokunmatik Anahtar(CSD01) bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Giriş portunu ayarla {#set_input_port}

CSD01 (Tact Switch) modülünün bağlı olduğu portu ayarlar.

<BlockImage module="CheeseStick/CSD01" id="set_input_port" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Bağlanacak port | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.set_port('Sa')
```

## Düğme giriş değeri {#button_input}

Seçilen porttan gelen düğme giriş değeri  
Düğmeye basılıysa 0, basılı değilse 1 döndürür.

<BlockImage module="CheeseStick/CSD01" id="button_input" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Okunacak port | Sa, Sb, Sc | son `set_port` çağrısındaki port |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_input('Sa')
```

## Düğmeye basıldı mı? {#button_pressed}

Seçilen porta bağlı anahtarın düğmesine basılı olup olmadığı

<BlockImage module="CheeseStick/CSD01" id="button_pressed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Okunacak port | Sa, Sb, Sc | son `set_port` çağrısındaki port |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_pressed('Sa')
```
