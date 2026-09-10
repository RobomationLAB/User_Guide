---
title: Yüz İfadesi
---

# Yüz İfadesi

## Örnek bildirimi {#instance}

Yüz İfadesi(FaceExpression) bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
face_expression = FaceExpression(0)
# Birden fazla örnek olduğunda
face_expression_1 = FaceExpression(1)
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Kamerayı ayarla {#device}

Yaş, cinsiyet ve yüz ifadesi tanımada kullanılacak kamerayı ayarlar.

<BlockImage module="AI/FaceExpression" id="device" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Kamera aygıtının adı | Sistemdeki kameranın adı | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.device('')
```

## Yüz ifadesi modelini yükle {#load_model}

Eğitilmiş yaş, cinsiyet ve yüz ifadesi modelini yükler. Bu adım olmadan «Yüz İfadesi» modülünün işlevleri kullanılamaz.

<BlockImage module="AI/FaceExpression" id="load_model" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| wait | Onay kutusu | Yüklemenin tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.load_model(wait=True)
```

## Yüz ifadesini bir kez algıla {#detect_once}

Şu anda ekranda olan yüzü çözümler ve tahmin ettiği yaşı, cinsiyeti ve yüz ifadesini yalnızca bir kez gösterir.

<BlockImage module="AI/FaceExpression" id="detect_once" />

### Parametreler

(yok)

### Python
```python
face_expression = FaceExpression(0)

face_expression.detect_once()
```

## Sürekli yüz ifadesi algılamayı başlat / durdur {#detect_continuous}

Ekrandaki yüzü sürekli çözümler ve tahmin ettiği yaşı, cinsiyeti ve yüz ifadesini görüntü üzerinde gösterir.

<BlockImage module="AI/FaceExpression" id="detect_continuous" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | İşlem | başlat(start), durdur(stop) | - |

### Python
```python
face_expression = FaceExpression(0)

# unit = "start"
face_expression.detect_continuous()
# unit = "stop"
face_expression.stop()
```

## Sonucu göster {#display}

Kamera görüntüsünde yaş, cinsiyet ve yüz ifadesi tanıma sonucunun gösterilip gösterilmeyeceğini belirler.

<BlockImage module="AI/FaceExpression" id="display" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| on | Açılır liste seçeneği | Görüntüleme ON / OFF | göster(on=True), gizle(off=False) | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.display(True)
face_expression.display(False)
```

## Yaş {#age}

Yaş

<BlockImage module="AI/FaceExpression" id="age" />

### Parametreler

(yok)

### Python
```python
face_expression = FaceExpression(0)

face_expression.age()
```

## Cinsiyet {#gender}

Cinsiyet

<BlockImage module="AI/FaceExpression" id="gender" />

### Parametreler

(yok)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender()
```

## Yüz ifadesi {#expression}

Yüz ifadesi

<BlockImage module="AI/FaceExpression" id="expression" />

### Parametreler

(yok)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression()
```

## Cinsiyet algılandı mı {#gender_detected}

Cinsiyetin tanınıp tanınmadığı

<BlockImage module="AI/FaceExpression" id="gender_detected" />

### Parametreler

(yok)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_detected()
```

## Belirli cinsiyet mi {#gender_check}

Tanınan cinsiyetin belirtilenle eşleşip eşleşmediğini **doğru (True) ya da yanlış (False)** olarak döndürür.

<BlockImage module="AI/FaceExpression" id="gender_check" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Cinsiyet | erkek(male), kadın(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_gender('male')
face_expression.is_gender('female')
```

## Cinsiyetin güven oranı {#gender_confidence}

Seçilen cinsiyet olma olasılığı (güveni)

<BlockImage module="AI/FaceExpression" id="gender_confidence" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Cinsiyet | erkek(male), kadın(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_confidence('male')
face_expression.gender_confidence('female')
```

## Yüz ifadesi algılandı mı {#expression_detected}

Yüz ifadesinin tanınıp tanınmadığı

<BlockImage module="AI/FaceExpression" id="expression_detected" />

### Parametreler

(yok)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_detected()
```

## Belirli yüz ifadesi mi {#expression_check}

Tanınan yüz ifadesinin belirtilenle eşleşip eşleşmediğini **doğru (True) ya da yanlış (False)** olarak döndürür.

<BlockImage module="AI/FaceExpression" id="expression_check" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Yüz ifadesi | öfkeli(angry), tiksinmiş(disgusted), korkmuş(fearful), mutlu(happy), nötr(neutral), üzgün(sad), şaşkın(surprised) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_expression('happy')
face_expression.is_expression('sad')
```

## Yüz ifadesinin güven oranı {#expression_confidence}

Seçilen yüz ifadesi olma olasılığı (güveni)

<BlockImage module="AI/FaceExpression" id="expression_confidence" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Yüz ifadesi | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_confidence('happy')
face_expression.expression_confidence('angry')
```

## Model yükleme durumu {#model_state}

Yaş, cinsiyet ve yüz ifadesi modelinin yükleme durumunu döndürür.  
Model henüz yüklenmemişse 0, yüklenirken 1, yükleme bittiğinde 2 döndürür.

<BlockImage module="AI/FaceExpression" id="model_state" />

### Parametreler

(yok)

### Python
```python
face_expression = FaceExpression(0)

face_expression.model_state()
```
