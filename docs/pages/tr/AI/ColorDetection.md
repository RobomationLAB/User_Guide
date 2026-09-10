---
title: Renk Algılama
---

# Renk Algılama

## Örnek bildirimi {#instance}

Renk Algılama(ColorDetection) bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
color_detection = ColorDetection(0)
# Birden fazla örnek olduğunda
color_detection_1 = ColorDetection(1)
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Kamerayı ayarla {#device}

Renk algılamada kullanılacak kamerayı ayarlar.

<BlockImage module="AI/ColorDetection" id="device" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Kamera aygıtının adı | Sistemdeki kameranın adı | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.device('')
```

## Hedef renklere kaydet {#register_color}

Renk algılamada tanınacak rengi ekler.

<BlockImage module="AI/ColorDetection" id="register_color" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| color | Açılır liste seçeneği | Rengin adı | siyah(black), kırmızı(red), sarı(yellow), yeşil(green), camgöbeği(cyan), mavi(blue), macenta(magenta), beyaz(white) | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.register_color('red', wait=True)
```

## Hedef renklerden sil {#delete_color}

Renk algılamada tanınan renkler arasından bu rengi siler.

<BlockImage module="AI/ColorDetection" id="delete_color" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| color | Açılır liste seçeneği | Rengin adı | siyah(black), kırmızı(red), sarı(yellow), yeşil(green), camgöbeği(cyan), mavi(blue), macenta(magenta), beyaz(white) | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.delete_color('blue', wait=True)
```

## Algılama koşulunu alanla ayarla {#area_condition}

Tanınacak renk bölgesinin en küçük alanını belirler. Bölge ancak alanı bu değerden küçük değilse ekranda görünür.

<BlockImage module="AI/ColorDetection" id="area_condition" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Alan koşulunun değeri | 0 veya daha büyük gerçel sayı | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.area_condition(50)
```

## Rengi bir kez algıla {#detect_once}

Tanınabilen renkler arasından şu anda ekranda olanları bulur ve bölgelerini yalnızca bir kez işaretler.

<BlockImage module="AI/ColorDetection" id="detect_once" />

### Parametreler

(yok)

### Python
```python
color_detection = ColorDetection(0)

color_detection.detect_once()
```

## Sürekli renk algılamayı başlat / durdur {#detect_continuous}

Tanınabilen renkler arasından şu anda ekranda olanları sürekli izler ve bölgelerini işaretler.

<BlockImage module="AI/ColorDetection" id="detect_continuous" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | İşlem | başlat(start), durdur(stop) | - |

### Python
```python
color_detection = ColorDetection(0)

# unit = "start"
color_detection.detect_continuous()
# unit = "stop"
color_detection.stop()
```

## Sonucu göster {#display}

Kamera görüntüsünde renk algılama sonucunun gösterilip gösterilmeyeceğini belirler.

<BlockImage module="AI/ColorDetection" id="display" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| on | Açılır liste seçeneği | Görüntüleme ON / OFF | göster(on=True), gizle(off=False) | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.display(True)
color_detection.display(False)
```

## Renk alanı bilgisi {#color_data}

Belirtilen rengin konumunu ve boyutunu döndürür.

<BlockImage module="AI/ColorDetection" id="color_data" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| color | Açılır liste seçeneği | Rengin adı | siyah(black), kırmızı(red), sarı(yellow), yeşil(green), camgöbeği(cyan), mavi(blue), macenta(magenta), beyaz(white) | - |
| pos | Açılır liste seçeneği | Konum ya da boyut türü | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color('red', 'x')
color_detection.color('green', 'y')
color_detection.color('blue', 'area')
```

## Belirli renk algılandı mı {#color_detected}

Seçilen rengin bulunup bulunmadığı

<BlockImage module="AI/ColorDetection" id="color_detected" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| color | Açılır liste seçeneği | Rengin adı | siyah(black), kırmızı(red), sarı(yellow), yeşil(green), camgöbeği(cyan), mavi(blue), macenta(magenta), beyaz(white) | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color_detected('red')
```
