---
title: PID-26 Ortam Sensörü
---

# PID-26 Ortam Sensörü

## Örnek bildirimi {#instance}

PID-26 Ortam Sensörü(PID26) bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Ortam sensörünü başlat {#start}

PID-26 Ortam Sensörünü kullanılabilir duruma getirir.

<BlockImage module="CheeseStick/PID26" id="start" />

### Parametreler

(yok)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.start()
```

## Sıcaklık {#temperature}

PID26 Ortam Sensörüyle ölçülen sıcaklık değerini döndürür. 

<BlockImage module="CheeseStick/PID26" id="temperature" />

### Parametreler

(yok)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.temperature()
```

## Nem {#humidity}

PID26 Ortam Sensörüyle ölçülen nem değerini döndürür.

<BlockImage module="CheeseStick/PID26" id="humidity" />

### Parametreler

(yok)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.humidity()
```

## Basınç {#pressure}

PID26 Ortam Sensörüyle ölçülen basınç değerini döndürür.  

<BlockImage module="CheeseStick/PID26" id="pressure" />

### Parametreler

(yok)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.pressure()
```
