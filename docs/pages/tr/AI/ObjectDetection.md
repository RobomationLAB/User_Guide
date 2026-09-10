---
title: Nesne Algılama
---

# Nesne Algılama

## Örnek bildirimi {#instance}

Nesne Algılama(ObjectDetection) bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
object_detection = ObjectDetection(0)
# Birden fazla örnek olduğunda
object_detection_1 = ObjectDetection(1)
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Kamerayı ayarla {#device}

Nesne algılamada kullanılacak kamerayı ayarlar.

<BlockImage module="AI/ObjectDetection" id="device" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Kamera aygıtının adı | Sistemdeki kameranın adı | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.device('')
```

## Nesne modelini yükle {#load_model}

Eğitilmiş nesne modelini yükler. Bu adım olmadan «Nesne Algılama» modülünün işlevleri kullanılamaz.

<BlockImage module="AI/ObjectDetection" id="load_model" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| wait | Onay kutusu | Yüklemenin tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.load_model(wait=True)
```

## Maksimum nesne sayısını ayarla {#max_objects}

En fazla kaç nesne bulunabileceğini ayarlar. Nesne sayısı aralığı 0 ile 10 arasındadır.

<BlockImage module="AI/ObjectDetection" id="max_objects" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Maksimum nesne sayısı | 0 ile 10 arasında tam sayı | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.max_objects(5)
```

## Güven eşiğini ayarla {#confidence_threshold}

Nesne algılamada en düşük olasılığı (güveni) ayarlar. Nesne ancak güveni bu değerden küçük değilse ekranda görünür. Güven aralığı 0 ile 1 arasındadır.

<BlockImage module="AI/ObjectDetection" id="confidence_threshold" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Güven eşiği | 0 ile 1 arasında gerçel sayı | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.confidence_threshold(0.5)
```

## Nesneyi bir kez algıla {#detect_once}

Şu anda ekranda olan nesneleri bulur ve yalnızca bir kez işaretler.

<BlockImage module="AI/ObjectDetection" id="detect_once" />

### Parametreler

(yok)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detect_once()
```

## Sürekli nesne algılamayı başlat / durdur {#detect_continuous}

Ekrandaki nesneleri sürekli izler ve görüntü üzerinde işaretler.

<BlockImage module="AI/ObjectDetection" id="detect_continuous" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | İşlem | başlat(start), durdur(stop) | - |

### Python
```python
object_detection = ObjectDetection(0)

# unit = "start"
object_detection.detect_continuous()
# unit = "stop"
object_detection.stop()
```

## Sonucu göster {#display}

Kamera görüntüsünde nesne algılama sonucunun gösterilip gösterilmeyeceğini belirler.

<BlockImage module="AI/ObjectDetection" id="display" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| on | Açılır liste seçeneği | Görüntüleme ON / OFF | göster(on=True), gizle(off=False) | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.display(True)
object_detection.display(False)
```

## Nesnenin konumu {#object_data}

Belirtilen nesnenin konumunu ve boyutunu döndürür.

<BlockImage module="AI/ObjectDetection" id="object_data" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Nesnenin adı | 80 nesne sınıfı (`'person'`, `'bicycle'`, `'car'`, `'motorcycle'`, `'airplane'`, `'bus'`, `'cat'`, `'dog'`, `'apple'`, `'cup'`, `'laptop'`, `'cell_phone'` ve diğerleri) | - |
| pos | Açılır liste seçeneği | Koordinat | x, y | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'x')
object_detection.object('bicycle', 'y')
```

## Nesnenin dikdörtgeni {#object_square}

Belirtilen nesneyi çevreleyen dikdörtgenin konumunu ve boyutunu döndürür.

<BlockImage module="AI/ObjectDetection" id="object_square" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Nesnenin adı | 80 nesne sınıfı | - |
| pos | Açılır liste seçeneği | Dikdörtgen bilgisi | min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'width')
object_detection.object('car', 'area')
```

## İki nesne arasındaki mesafe {#object_distance}

İki nesne sınıfı arasındaki mesafeyi döndürür.

<BlockImage module="AI/ObjectDetection" id="object_distance" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit1 | Açılır liste seçeneği | Birinci nesnenin adı | 80 nesne sınıfı | - |
| unit2 | Açılır liste seçeneği | İkinci nesnenin adı | 80 nesne sınıfı | - |
| type | Açılır liste seçeneği | Mesafe türü | mesafe (atlanır ya da None), yatay mesafe(horizontal), dikey mesafe(vertical) | None |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.get_distance('person', 'bicycle')  # mesafe
object_detection.get_distance('person', 'car', 'horizontal')  # yatay mesafe
```

## Nesnenin güveni {#object_confidence}

Seçilen nesnenin doğru tanınma olasılığı (güveni)

<BlockImage module="AI/ObjectDetection" id="object_confidence" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Nesnenin adı | 80 nesne sınıfı | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_confidence('person')
```

## Model yükleme durumu {#model_state}

Nesne modelinin yükleme durumunu döndürür.  
Model henüz yüklenmemişse 0, yüklenirken 1, yükleme bittiğinde 2 döndürür.

<BlockImage module="AI/ObjectDetection" id="model_state" />

### Parametreler

(yok)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.model_state()
```

## Nesne algılandı mı {#detected}

Nesnenin bulunup bulunmadığı

<BlockImage module="AI/ObjectDetection" id="detected" />

### Parametreler

(yok)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detected()
```

## Belirli nesne algılandı mı {#object_detected}

Seçilen nesnenin bulunup bulunmadığı

<BlockImage module="AI/ObjectDetection" id="object_detected" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Nesnenin adı | 80 nesne sınıfı | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_detected('person')
```
