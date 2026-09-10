---
title: PID-13 Kumanda Kolu ve Düğme
---

# PID-13 Kumanda Kolu ve Düğme

## Örnek bildirimi {#instance}

PID-13 Kumanda Kolu ve Düğme(PID13) bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Kumanda kolunu başlat {#start}

Kumanda kolunu ve düğmeleri kullanılabilir duruma getirir.

<BlockImage module="CheeseStick/PID13" id="start" />

### Parametreler

(yok)

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.start()
```

## Oyun kolu değeri {#joystick}

Kumanda kolunun x / y değeri.  
Her değerin aralığı -128 ile 127 arasındadır.

<BlockImage module="CheeseStick/PID13" id="joystick" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Ölçülecek eksen | x, y | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.joystick('x')
```

## Düğme giriş değeri {#button_input}

Seçilen düğmenin giriş durumu  
Düğmeye basılıysa 1, basılı değilse 0 döndürür.

<BlockImage module="CheeseStick/PID13" id="button_input" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Düğmenin adı | A düğmesi(a), B düğmesi(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_input('a')
```

## Düğmeye tıklandı mı? {#button_click}

Seçilen düğmeye tıklanıp tıklanmadığı  
Bu blok yalnızca seçilen düğmeye tıklandığı anda true, diğer durumlarda false döndürür.

<BlockImage module="CheeseStick/PID13" id="button_click" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Düğmenin adı | A düğmesi(a), B düğmesi(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_click('a')
```
