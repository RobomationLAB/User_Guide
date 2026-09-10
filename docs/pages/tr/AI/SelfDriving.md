---
title: Kamerayla Otonom Sürüş
---

# Kamerayla Otonom Sürüş

## Örnek bildirimi {#instance}

Kamerayla Otonom Sürüş(SelfDriving) bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
self_driving = SelfDriving(0)
# Birden fazla örnek olduğunda
self_driving_1 = SelfDriving(1)
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Kamerayı ayarla {#device}

Kamerayla otonom sürüşte kullanılacak kamerayı ayarlar.

<BlockImage module="AI/SelfDriving" id="device" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Kamera aygıtının adı | Sistemdeki kameranın adı | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.device('')
```

## Şerit rengini ayarla {#set_lane_color}

Sol ve sağ şeridin rengini ayarlar.

<BlockImage module="AI/SelfDriving" id="set_lane_color" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| left | Açılır liste seçeneği | Sol şeridin rengi | kırmızı(red), yeşil(green), mavi(blue) | - |
| right | Açılır liste seçeneği | Sağ şeridin rengi | kırmızı(red), yeşil(green), mavi(blue) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.set_lane('green', 'blue')
```

## Rengi/şeridi bir kez algıla {#detect_once}

Ekranda seçilen rengi ya da şeridi bulur ve bölgesini yalnızca bir kez işaretler.

<BlockImage module="AI/SelfDriving" id="detect_once" />

### Parametreler

(yok)

### Python
```python
self_driving = SelfDriving(0)

self_driving.detect_once()
```

## Sürekli renk ve şerit algılamayı başlat / durdur {#detect_continuous}

Ekrandaki seçili renkleri ve şeritleri sürekli izler ve bölgelerini işaretler.

<BlockImage module="AI/SelfDriving" id="detect_continuous" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | İşlem | başlat(start), durdur(stop) | - |

### Python
```python
self_driving = SelfDriving(0)

# unit = "start"
self_driving.detect_continuous()
# unit = "stop"
self_driving.stop()
```

## Sonucu göster {#display}

Kamera görüntüsünde renk ve şerit algılama sonucunun gösterilip gösterilmeyeceğini belirler.

<BlockImage module="AI/SelfDriving" id="display" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| on | Açılır liste seçeneği | Görüntüleme ON / OFF | göster(on=True), gizle(off=False) | TRUE |

### Python
```python
self_driving = SelfDriving(0)

self_driving.display(True)
self_driving.display(False)
```

## Şerit verisi {#lane_data}

Belirtilen şeridin konumunu ya da uzaklığını döndürür.

<BlockImage module="AI/SelfDriving" id="lane_data" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| lane | Açılır liste seçeneği | Şerit | sol(left), sağ(right) | - |
| unit | Açılır liste seçeneği | Ölçüm türü | x, uzaklık(distance) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane('left', 'x')
self_driving.lane('right', 'distance')
```

## Renk verisi {#color_data}

Belirtilen rengin konumunu ve boyutunu döndürür.

<BlockImage module="AI/SelfDriving" id="color_data" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| color | Açılır liste seçeneği | Rengin adı | kırmızı(red), yeşil(green), mavi(blue) | - |
| unit | Açılır liste seçeneği | Konum ya da boyut türü | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color('red', 'x')
self_driving.color('green', 'y')
self_driving.color('blue', 'area')
```

## İki renk arasındaki mesafe {#color_to_color}

İki renk arasındaki mesafeyi döndürür.

<BlockImage module="AI/SelfDriving" id="color_to_color" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit1 | Açılır liste seçeneği | Birinci renk | kırmızı(red), yeşil(green), mavi(blue) | - |
| unit2 | Açılır liste seçeneği | İkinci renk | kırmızı(red), yeşil(green), mavi(blue) | - |
| type | Açılır liste seçeneği | Mesafe türü | mesafe (atlanır ya da None), yatay mesafe(horizontal), dikey mesafe(vertical) | None |

### Python
```python
self_driving = SelfDriving(0)

self_driving.get_distance('red', 'blue')  # mesafe
self_driving.get_distance('green', 'blue', 'horizontal')  # yatay mesafe
```

## Şerit algılandı mı {#lane_detected}

Belirtilen şeridin bulunup bulunmadığı

<BlockImage module="AI/SelfDriving" id="lane_detected" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| lane | Açılır liste seçeneği | Şerit | sol(left), sağ(right), ikisi(both), herhangi biri(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane_detected('left')
```

## Renk algılandı mı {#color_detected}

Belirtilen renk bölgesinin bulunup bulunmadığı

<BlockImage module="AI/SelfDriving" id="color_detected" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| color | Açılır liste seçeneği | Rengin adı | kırmızı(red), yeşil(green), mavi(blue), herhangi biri(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color_detected('red')
```
