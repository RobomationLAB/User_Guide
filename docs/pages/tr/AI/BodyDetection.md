---
title: Vücut Algılama
---

# Vücut Algılama

## Örnek bildirimi {#instance}

Vücut Algılama(BodyDetection) bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
body_detection = BodyDetection(0)
# Birden fazla örnek olduğunda
body_detection_1 = BodyDetection(1)
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Kamerayı ayarla {#device}

Vücut algılamada kullanılacak kamerayı ayarlar.

<BlockImage module="AI/BodyDetection" id="device" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Kamera aygıtının adı | Sistemdeki kameranın adı | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.device('')
```

## Vücut modelini yükle {#load_model}

Eğitilmiş vücut modelini yükler. Bu adım olmadan «Vücut Algılama» modülünün işlevleri kullanılamaz.

<BlockImage module="AI/BodyDetection" id="load_model" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| wait | Onay kutusu | Yüklemenin tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.load_model(wait=True)
```

## Vücudu bir kez algıla {#detect_once}

Şu anda ekranda olan vücudu bulur ve yalnızca bir kez işaretler.

<BlockImage module="AI/BodyDetection" id="detect_once" />

### Parametreler

(yok)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detect_once()
```

## Sürekli vücut algılamayı başlat / durdur {#detect_continuous}

Ekrandaki vücudu sürekli izler ve görüntü üzerinde işaretler.

<BlockImage module="AI/BodyDetection" id="detect_continuous" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | İşlem | başlat(start), durdur(stop) | - |

### Python
```python
body_detection = BodyDetection(0)

# unit = "start"
body_detection.detect_continuous()
# unit = "stop"
body_detection.stop()
```

## Sonucu göster {#display}

Kamera görüntüsünde vücut algılama sonucunun gösterilip gösterilmeyeceğini belirler.

<BlockImage module="AI/BodyDetection" id="display" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| on | Açılır liste seçeneği | Görüntüleme ON / OFF | göster(on=True), gizle(off=False) | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.display(True)
body_detection.display(False)
```

## Vücut bölümlerinin koordinatları {#body_data}

Vücudun her bölümünün koordinatlarını döndürür.

<BlockImage module="AI/BodyDetection" id="body_data" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Vücut bölümü | burun(nose), ağız(mouth), sol göz(left eye), sağ göz(right eye), sol kulak(left ear), sağ kulak(right ear), sol omuz(left shoulder), sağ omuz(right shoulder), sol dirsek(left elbow), sağ dirsek(right elbow), sol bilek(left wrist), sağ bilek(right wrist), sol el(left hand), sağ el(right hand), sol kalça(left hip), sağ kalça(right hip), sol diz(left knee), sağ diz(right knee), sol ayak bileği(left ankle), sağ ayak bileği(right ankle), sol ayak(left foot), sağ ayak(right foot) | - |
| pos | Açılır liste seçeneği | Koordinat | x, y | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.nose('x')
body_detection.mouth('y')
body_detection.left_eye('x')
body_detection.right_shoulder('y')
body_detection.left_hand('x')
```

## İki bölüm arasındaki mesafe {#body_distance}

Vücudun iki bölümü arasındaki mesafeyi döndürür.

<BlockImage module="AI/BodyDetection" id="body_distance" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit1 | Açılır liste seçeneği | Birinci vücut bölümü | (yukarıdaki vücut bölümleri tablosuna bakın) | - |
| unit2 | Açılır liste seçeneği | İkinci vücut bölümü | (yukarıdaki vücut bölümleri tablosuna bakın) | - |
| type | Açılır liste seçeneği | Mesafe türü | mesafe (atlanır ya da None), yatay mesafe(horizontal), dikey mesafe(vertical) | None |

### Python
```python
body_detection = BodyDetection(0)

body_detection.get_distance('left_shoulder', 'right_shoulder')  # mesafe
body_detection.get_distance('left_wrist', 'right_wrist', 'horizontal')  # yatay mesafe
body_detection.get_distance('left_hip', 'left_knee', 'vertical')  # dikey mesafe
```

## Model yükleme durumu {#model_state}

Vücut modelinin yükleme durumunu döndürür.  
Model henüz yüklenmemişse 0, yüklenirken 1, yükleme bittiğinde 2 döndürür.

<BlockImage module="AI/BodyDetection" id="model_state" />

### Parametreler

(yok)

### Python
```python
body_detection = BodyDetection(0)

body_detection.model_state()
```

## Vücut algılandı mı {#detected}

Vücudun bulunup bulunmadığı

<BlockImage module="AI/BodyDetection" id="detected" />

### Parametreler

(yok)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detected()
```
