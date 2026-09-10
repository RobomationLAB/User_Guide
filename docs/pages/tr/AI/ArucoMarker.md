---
title: ArUco İşaretçisi Algılama
---

# ArUco İşaretçisi Algılama

## Örnek bildirimi {#instance}

ArUco İşaretçisi Algılama(ArucoMarker) bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
aruco_marker = ArucoMarker(0)
# Birden fazla örnek olduğunda
aruco_marker_1 = ArucoMarker(1)
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Kamerayı ayarla {#device}

ArUco işaretçisi algılamada kullanılacak kamerayı ayarlar.

<BlockImage module="AI/ArucoMarker" id="device" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Kamera aygıtının adı | Sistemdeki kameranın adı | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.device('')
```

## Maks işaretleyici sayısını ayarla {#max_count}

En fazla kaç işaretleyici tanınabileceğini ayarlar. İşaretleyici sayısı aralığı 0 ile 10 arasındadır.

<BlockImage module="AI/ArucoMarker" id="max_count" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Maksimum işaretleyici sayısı | 0 ile 10 arasında tam sayı | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.max_count(5)
```

## İşaretleyiciyi bir kez algıla {#detect_once}

Şu anda ekranda olan işaretleyicileri bulur ve bölgelerini yalnızca bir kez işaretler.

<BlockImage module="AI/ArucoMarker" id="detect_once" />

### Parametreler

(yok)

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.detect_once()
```

## Sürekli işaretleyici algılamayı başlat / durdur {#detect_continuous}

Ekrandaki işaretleyicileri sürekli izler ve bölgelerini görüntü üzerinde işaretler.

<BlockImage module="AI/ArucoMarker" id="detect_continuous" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | İşlem | başlat(start), durdur(stop) | - |

### Python
```python
aruco_marker = ArucoMarker(0)

# unit = "start"
aruco_marker.detect_continuous()
# unit = "stop"
aruco_marker.stop()
```

## Sonucu göster {#display}

Kamera görüntüsünde işaretleyici algılama sonucunun gösterilip gösterilmeyeceğini belirler.

<BlockImage module="AI/ArucoMarker" id="display" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| on | Açılır liste seçeneği | Görüntüleme ON / OFF | göster(on=True), gizle(off=False) | TRUE |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.display(True)
aruco_marker.display(False)
```

## İşaretleyici verisi {#marker_data}

Belirtilen ID'ye sahip işaretleyicinin konumunu ve boyutunu döndürür.

<BlockImage module="AI/ArucoMarker" id="marker_data" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | İşaretleyicinin ID'si | 0 veya daha büyük tam sayı | - |
| unit | Açılır liste seçeneği | Ölçüm türü | x, y, min_x, max_x, min_y, max_y, width, height, area, rotation | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker(0, 'x')
aruco_marker.marker(3, 'area')
```

## İşaretleyiciler arasındaki mesafe {#marker_to_marker}

İki işaretleyici arasındaki mesafeyi döndürür.

<BlockImage module="AI/ArucoMarker" id="marker_to_marker" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit1 | Giriş (blok) | Birinci işaretleyicinin ID'si | 0 veya daha büyük tam sayı | - |
| unit2 | Giriş (blok) | İkinci işaretleyicinin ID'si | 0 veya daha büyük tam sayı | - |
| type | Açılır liste seçeneği | Mesafe türü | mesafe (atlanır ya da None), yatay mesafe(horizontal), dikey mesafe(vertical) | None |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.get_distance(0, 1)  # mesafe
aruco_marker.get_distance(0, 2, 'horizontal')  # yatay mesafe
```

## İşaretleyici algılandı mı {#marker_detected}

Belirtilen id'ye sahip işaretleyicinin bulunup bulunmadığı

<BlockImage module="AI/ArucoMarker" id="marker_detected" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | İşaretleyicinin ID'si | 0 veya daha büyük tam sayı | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker_detected(0)
```
