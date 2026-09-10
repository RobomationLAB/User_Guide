---
title: El Algılama
---

# El Algılama

## Örnek bildirimi {#instance}

El Algılama(HandDetection) bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
hand_detection = HandDetection(0)
# Birden fazla örnek olduğunda
hand_detection_1 = HandDetection(1)
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Kamerayı ayarla {#device}

El algılamada kullanılacak kamerayı ayarlar.

<BlockImage module="AI/HandDetection" id="device" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Kamera aygıtının adı | Sistemdeki kameranın adı | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.device('')
```

## El modelini yükle {#load_model}

Eğitilmiş el modelini yükler. Bu adım olmadan «El Algılama» modülünün işlevleri kullanılamaz.

<BlockImage module="AI/HandDetection" id="load_model" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| wait | Onay kutusu | Yüklemenin tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.load_model(wait=True)
```

## Hedefi ayarla {#max_hands}

El aranırken tek elin mi iki elin mi hedef alınacağını belirler.

<BlockImage module="AI/HandDetection" id="max_hands" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | El sayısı | tek el(one), iki el(both) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.max_hands('one')
hand_detection.max_hands('both')
```

## Eli bir kez algıla {#detect_once}

Şu anda ekranda olan eli bulur ve yalnızca bir kez işaretler.

<BlockImage module="AI/HandDetection" id="detect_once" />

### Parametreler

(yok)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detect_once()
```

## Sürekli el algılamayı başlat / durdur {#detect_continuous}

Ekrandaki eli sürekli izler ve görüntü üzerinde işaretler.

<BlockImage module="AI/HandDetection" id="detect_continuous" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | İşlem | başlat(start), durdur(stop) | - |

### Python
```python
hand_detection = HandDetection(0)

# unit = "start"
hand_detection.detect_continuous()
# unit = "stop"
hand_detection.stop()
```

## Sonucu göster {#display}

Kamera görüntüsünde el algılama sonucunun gösterilip gösterilmeyeceğini belirler.

<BlockImage module="AI/HandDetection" id="display" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| on | Açılır liste seçeneği | Görüntüleme ON / OFF | göster(on=True), gizle(off=False) | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.display(True)
hand_detection.display(False)
```

## El bölümlerinin koordinatları {#hand_data}

Seçilen elin avuç içi ya da bilek konumunu döndürür.

<BlockImage module="AI/HandDetection" id="hand_data" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| side | Açılır liste seçeneği | Hangi el | sol(left), sağ(right) | - |
| unit | Açılır liste seçeneği | El bölümü | avuç içi(palm), bilek(wrist) | - |
| pos | Açılır liste seçeneği | Konum ya da boyut türü | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'palm', 'x')
hand_detection.hand('right', 'wrist', 'y')
hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Parmak eklemlerinin koordinatları {#joint_data}

Seçilen parmağın eklem koordinatlarını döndürür.

<BlockImage module="AI/HandDetection" id="joint_data" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| side | Açılır liste seçeneği | Hangi el | sol(left), sağ(right) | - |
| unit | Açılır liste seçeneği | Parmak | başparmak(thumb), işaret(index), orta(middle), yüzük(ring), serçe(pinky) | - |
| joint | Açılır liste seçeneği | Eklemin konumu | birinci eklem(first), ikinci eklem(second), üçüncü eklem(third), uç(last) | - |
| pos | Açılır liste seçeneği | Koordinat | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.finger('left', 'index', 'first', 'x')
hand_detection.finger('right', 'thumb', 'last', 'y')
```

## El dikdörtgeni {#hand_square}

Seçilen eli çevreleyen dikdörtgenin konumunu ve boyutunu döndürür.

<BlockImage module="AI/HandDetection" id="hand_square" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| side | Açılır liste seçeneği | Hangi el | sol(left), sağ(right) | - |
| unit | Açılır liste seçeneği | El bölümü | el(hand), avuç içi(palm) | - |
| pos | Açılır liste seçeneği | Dikdörtgen bilgisi | min x konumu(min_x), maks x konumu(max_x), min y konumu(min_y), maks y konumu(max_y), genişlik(width), yükseklik(height), alan(area) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## İki el arasındaki mesafe {#hand_to_hand_distance}

İki el bölümü arasındaki mesafeyi döndürür.

<BlockImage module="AI/HandDetection" id="hand_to_hand_distance" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit1 | Giriş (metin) | Birinci el bölümü | el: `'side_unit'` (örn. `'left_palm'`). side=left/right, unit=palm/wrist/hand  | - |
| unit2 | Giriş (metin) | İkinci el bölümü | el: `'side_unit'` (örn. `'right_palm'`). side=left/right, unit=palm/wrist/hand | - |
| type | Açılır liste seçeneği | Mesafe türü | mesafe (atlanır ya da None), yatay mesafe(horizontal), dikey mesafe(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# el ↔ el / mesafe
hand_detection.get_distance('left_palm', 'right_palm')  
```

## El ile parmak arasındaki mesafe {#hand_to_joint_distance}

El bölümü ile parmak eklemi arasındaki mesafeyi döndürür.

<BlockImage module="AI/HandDetection" id="hand_to_joint_distance" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit1 | Giriş (metin) | Birinci bölüm | el: `'side_unit'` (örn. `'left_palm'`).side=left/right, unit=palm/wrist/hand | - |
| unit2 | Giriş (metin) | İkinci bölüm | parmak: `'side_unit_joint'` (örn. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Açılır liste seçeneği | Mesafe türü | mesafe (atlanır ya da None), yatay mesafe(horizontal), dikey mesafe(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# el ↔ parmak eklemi / yatay mesafe
hand_detection.get_distance('left_palm', 'right_index_first')
```

## İki parmak arasındaki mesafe {#joint_to_joint_distance}

İki parmak eklemi arasındaki mesafeyi döndürür.

<BlockImage module="AI/HandDetection" id="joint_to_joint_distance" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit1 | Giriş (metin) | Birinci bölüm | parmak: `'side_unit_joint'` (örn. `'left_thumb_last'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| unit2 | Giriş (metin) | İkinci bölüm | parmak: `'side_unit_joint'` (örn. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Açılır liste seçeneği | Mesafe türü | mesafe (atlanır ya da None), yatay mesafe(horizontal), dikey mesafe(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# parmak eklemi ↔ parmak eklemi / dikey mesafe
hand_detection.get_distance('left_thumb_last', 'right_index_first', 'vertical')
```

## Model yükleme durumu {#model_state}

El modelinin yükleme durumunu döndürür.  
Model henüz yüklenmemişse 0, yüklenirken 1, yükleme bittiğinde 2 döndürür.

<BlockImage module="AI/HandDetection" id="model_state" />

### Parametreler

(yok)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.model_state()
```

## El algılandı mı {#detected}

Elin bulunup bulunmadığı

<BlockImage module="AI/HandDetection" id="detected" />

### Parametreler

(yok)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detected()
```
