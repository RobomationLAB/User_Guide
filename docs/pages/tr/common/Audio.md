---
title: Ses
---

# Ses

Ses blokları farklı ses efektlerini ve konuşmayı çalmanızı sağlar.


## Sesini çal {#play_sound}

Seçilen sesi belirlenen **ses düzeyinde** çalar.  
**tekrarla** onay kutusunu işaretlerseniz seçilen ses sürekli yinelenir.

<BlockImage module="common/audio" id="play_sound" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| clip | Açılır liste seçeneği | Ses klibinin adı | Ses kitaplığındaki klip adları | - |
| volume | Giriş (alan) | Ses düzeyi | 0 ile 100 arasında tam sayı | 100 |
| repeat | Onay kutusu | Yinelenerek çalınsın mı | TRUE / FALSE | FALSE |

### Python
```python
Utils.play_sound('', 100, True)
Utils.play_sound('', 100, False)
```

## Dil ve sesi ayarla {#set_tts}

**Konuşmanın (TTS)** çalınacağı **dili** ve **sesi** ayarlar.  
Farklı dil ve sesler seçerek daha doğal bir seslendirme elde edebilirsiniz.

<BlockImage module="common/audio" id="set_tts" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| lang | Açılır liste seçeneği | Dil kodu | Programın desteklediği 21 dilin TTS dil kodları (örn. `'tr-TR'`, `'en-US'`) | - |
| voice | Açılır liste seçeneği | Sesin adı | Sistemdeki TTS sesinin adı (örn. `'Google Türkçe'`) | - |

### Python
```python
Utils.set_tts('tr-TR', '')
```

## Seslendir {#speak}

Yazılan metni sese dönüştürüp seslendirir.

<BlockImage module="common/audio" id="speak" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| text | Giriş | Seslendirilecek metin | Metin | - |

### Python
```python
Utils.speak('Merhaba')
```
