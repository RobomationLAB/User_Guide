---
title: Ayrıntılı Yüz Algılama
---

# Ayrıntılı Yüz Algılama

## Örnek bildirimi {#instance}

Ayrıntılı Yüz Algılama(DetailedFaceDetection) bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
detailed_face_detection = DetailedFaceDetection(0)
# Birden fazla örnek olduğunda
detailed_face_detection_1 = DetailedFaceDetection(1)
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Kamerayı ayarla {#device}

Ayrıntılı yüz algılamada kullanılacak kamerayı ayarlar.

<BlockImage module="AI/DetailedFaceDetection" id="device" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Kamera aygıtının adı | Sistemdeki kameranın adı | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.device('')
```

## Yüz modelini yükle {#load_model}

Eğitilmiş yüz modelini yükler. Bu adım olmadan «Ayrıntılı Yüz Algılama» modülünün işlevleri kullanılamaz.

<BlockImage module="AI/DetailedFaceDetection" id="load_model" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| wait | Onay kutusu | Yüklemenin tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.load_model(wait=True)
```

## Yüzü bir kez algıla {#detect_once}

Şu anda ekranda olan yüzü bulur ve yalnızca bir kez işaretler.

<BlockImage module="AI/DetailedFaceDetection" id="detect_once" />

### Parametreler

(yok)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detect_once()
```

## Sürekli yüz algılamayı başlat / durdur {#detect_continuous}

Ekrandaki yüzü sürekli izler ve görüntü üzerinde işaretler.

<BlockImage module="AI/DetailedFaceDetection" id="detect_continuous" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | İşlem | başlat(start), durdur(stop) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

# unit = "start"
detailed_face_detection.detect_continuous()
# unit = "stop"
detailed_face_detection.stop()
```

## Sonucu göster {#display}

Kamera görüntüsünde yüz algılama sonucunun gösterilip gösterilmeyeceğini belirler.

<BlockImage module="AI/DetailedFaceDetection" id="display" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| on | Açılır liste seçeneği | Görüntüleme ON / OFF | göster(on=True), gizle(off=False) | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.display(True)
detailed_face_detection.display(False)
```

## Yüz bölümlerinin koordinatları {#face_data}

Yüzün her bölümünün koordinatlarını döndürür.

<BlockImage module="AI/DetailedFaceDetection" id="face_data" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Yüz bölümü | yüz(face), sol göz(left eye), sağ göz(right eye), ağız(mouth), burun(nose), üst dudak(upper lip), alt dudak(lower lip), sol dudak köşesi(left lip), sağ dudak köşesi(right lip), sol gözbebeği(left pupil), sağ gözbebeği(right pupil) | - |
| pos | Açılır liste seçeneği | Koordinat | x, y | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('x')
detailed_face_detection.left_eye('y')
detailed_face_detection.upper_lip('x')
detailed_face_detection.right_pupil('y')
```

## Yüz bölümünün dikdörtgeni {#face_square}

Yüzün seçilen bölümünü çevreleyen dikdörtgenin konumunu ve boyutunu döndürür.

<BlockImage module="AI/DetailedFaceDetection" id="face_square" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Yüz bölümü | yüz(face), sol göz(left eye), sağ göz(right eye), ağız(mouth) | - |
| pos | Açılır liste seçeneği | Dikdörtgen bilgisi | min x konumu(min_x), maks x konumu(max_x), min y konumu(min_y), maks y konumu(max_y), genişlik(width), yükseklik(height), alan(area) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('min_x')
detailed_face_detection.left_eye('area')
```

## İki bölüm arasındaki mesafe {#distance}

Yüzün iki bölümü arasındaki mesafeyi döndürür.

<BlockImage module="AI/DetailedFaceDetection" id="distance" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit1 | Açılır liste seçeneği | Birinci bölüm | Yüz bölümünün adı | - |
| unit2 | Açılır liste seçeneği | İkinci bölüm | Yüz bölümünün adı | - |
| type | Açılır liste seçeneği | Mesafe türü | mesafe (atlanır ya da None), yatay mesafe(horizontal), dikey mesafe(vertical) | None |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.get_distance('left_eye', 'right_eye')  # mesafe
detailed_face_detection.get_distance('left_pupil', 'right_pupil', 'horizontal')  # yatay mesafe
detailed_face_detection.get_distance('upper_lip', 'lower_lip', 'vertical')  # dikey mesafe
```

## Model yükleme durumu {#model_state}

Yüz modelinin yükleme durumunu döndürür.  
Model henüz yüklenmemişse 0, yüklenirken 1, yükleme bittiğinde 2 döndürür.

<BlockImage module="AI/DetailedFaceDetection" id="model_state" />

### Parametreler

(yok)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.model_state()
```

## Yüz algılandı mı {#detected}

Yüzün bulunup bulunmadığı

<BlockImage module="AI/DetailedFaceDetection" id="detected" />

### Parametreler

(yok)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detected()
```
