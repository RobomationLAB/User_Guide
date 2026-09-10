---
title: Konuşmayı Metne Dönüştürme
---

# Konuşmayı Metne Dönüştürme

## Örnek bildirimi {#instance}

Konuşmayı Metne Dönüştürme(ASR) bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
asr = ASR(0)
# Birden fazla örnek olduğunda
asr_1 = ASR(1)
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Dili ayarla {#lang}

Konuşma tanıma dilini ayarlar. Ayarlamasanız da dil kendiliğinden belirlenir.

<BlockImage module="AI/ASR" id="lang" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Tanıma dilinin kodu | Programın desteklediği 21 dilin kodları (örn. `'tr-TR'`, `'en-US'`) | - |

### Python
```python
asr = ASR(0)

asr.lang('tr-TR')
```

## Konuşma tanımayı başlat / durdur {#listen}

Konuşma tanımayı başlatır ya da durdurur.

<BlockImage module="AI/ASR" id="listen" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | İşlem | başlat(start), durdur(stop) | - |

### Python
```python
asr = ASR(0)

# unit = "start"
asr.start()
# unit = "stop"
asr.stop()
```

## Konuşma tanıma sonucu {#result}

Konuşma tanıma sonucu

<BlockImage module="AI/ASR" id="result" />

### Parametreler

(yok)

### Python
```python
asr = ASR(0)

asr.result()
```

## Konuşma tanınıyor mu {#state}

Konuşma tanımanın etkin olup olmadığını **doğru (True) ya da yanlış (False)** olarak döndürür.

<BlockImage module="AI/ASR" id="state" />

### Parametreler

(yok)

### Python
```python
asr = ASR(0)

asr.is_active()
```
