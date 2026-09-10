---
title: Yüz Algılama
---

# Yüz Algılama

## Örnek bildirimi {#instance}

Yüz Algılama(FaceDetection) bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
face_detection = FaceDetection(0)
# Birden fazla örnek olduğunda
face_detection_1 = FaceDetection(1)
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Kamerayı ayarla {#device}

Yüz algılamada kullanılacak kamerayı ayarlar.

<BlockImage module="AI/FaceDetection" id="device" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Kamera aygıtının adı | Sistemdeki kameranın adı | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.device('')
```

## Yüz modelini yükle {#load_model}

Eğitilmiş yüz modelini yükler. Bu adım olmadan «Yüz Algılama» modülünün işlevleri kullanılamaz.

<BlockImage module="AI/FaceDetection" id="load_model" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| wait | Onay kutusu | Yüklemenin tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.load_model(wait=True)
```

## Yüzü bir kez algıla {#detect_once}

Şu anda ekranda olan yüzü bulur ve yalnızca bir kez işaretler.

<BlockImage module="AI/FaceDetection" id="detect_once" />

### Parametreler

(yok)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detect_once()
```

## Sürekli yüz algılamayı başlat / durdur {#detect_continuous}

Ekrandaki yüzü sürekli izler ve görüntü üzerinde işaretler.

<BlockImage module="AI/FaceDetection" id="detect_continuous" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | İşlem | başlat(start), durdur(stop) | - |

### Python
```python
face_detection = FaceDetection(0)

# unit = "start"
face_detection.detect_continuous()
# unit = "stop"
face_detection.stop()
```

## Sonucu göster {#display}

Kamera görüntüsünde yüz algılama sonucunun gösterilip gösterilmeyeceğini belirler.

<BlockImage module="AI/FaceDetection" id="display" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| on | Açılır liste seçeneği | Görüntüleme ON / OFF | göster(on=True), gizle(off=False) | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.display(True)
face_detection.display(False)
```

## Yüz bölümünün konumu {#face_data}

Yüzün ya da yüz bölümünün konum koordinatlarını döndürür.

<BlockImage module="AI/FaceDetection" id="face_data" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Yüz bölümü | yüz(face), sol göz(left eye), sağ göz(right eye), sol kulak(left ear), sağ kulak(right ear), burun(nose), ağız(mouth) | - |
| pos | Açılır liste seçeneği | Koordinat türü | x, y | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('x')
face_detection.left_eye('y')
face_detection.right_eye('x')
face_detection.left_ear('x')
face_detection.right_ear('y')
face_detection.nose('x')
face_detection.mouth('y')
```

## Yüz dikdörtgeni {#face_square}

Yüzü çevreleyen dikdörtgenin konumunu ve boyutunu döndürür.

<BlockImage module="AI/FaceDetection" id="face_square" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| pos | Açılır liste seçeneği | Dikdörtgen bilgisi | min x konumu(min_x), maks x konumu(max_x), min y konumu(min_y), maks y konumu(max_y), genişlik(width), yükseklik(height), alan(area) | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('min_x')
face_detection.face('width')
face_detection.face('area')
```

## İki bölüm arasındaki mesafe {#distance}

Yüzün iki bölümü arasındaki mesafeyi döndürür.

<BlockImage module="AI/FaceDetection" id="distance" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit1 | Açılır liste seçeneği | Birinci bölüm | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| unit2 | Açılır liste seçeneği | İkinci bölüm | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| type | Açılır liste seçeneği | Mesafe türü | mesafe (atlanır ya da None), yatay mesafe(horizontal), dikey mesafe(vertical) | None |

### Python
```python
face_detection = FaceDetection(0)

face_detection.get_distance('left_eye', 'right_eye')  # mesafe
face_detection.get_distance('left_eye', 'right_eye', 'horizontal')  # yatay mesafe
face_detection.get_distance('nose', 'mouth', 'vertical')  # dikey mesafe
```

## Model yükleme durumu {#model_state}

Yüz modelinin yükleme durumunu döndürür.  
Model henüz yüklenmemişse 0, yüklenirken 1, yükleme bittiğinde 2 döndürür.

<BlockImage module="AI/FaceDetection" id="model_state" />

### Parametreler

(yok)

### Python
```python
face_detection = FaceDetection(0)

face_detection.model_state()
```

## Yüz algılandı mı {#detected}

Yüzün bulunup bulunmadığı

<BlockImage module="AI/FaceDetection" id="detected" />

### Parametreler

(yok)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detected()
```
