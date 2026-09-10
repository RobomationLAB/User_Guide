---
title: Beagle
---

# Beagle

## Örnek bildirimi {#instance}

Beagle bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
beagle = Beagle(0)
# Birden fazla örnek olduğunda
beagle_1 = Beagle(1)
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Tekerlek hızını ayarla {#set_wheel_speed}

Tekerleğin hızını belirler. Hız aralığı -100 ile 100 arasındadır.

<BlockImage module="roboids/Beagle" id="set_wheel_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Tekerlek seçimi | sol(left), sağ(right), ikisi(both) | - |
| speed | Giriş (blok) | Tekerlek hızı | -100 ile 100 arasında tam sayı, 0: duruş | - |

### Python
```python
beagle = Beagle(0)

beagle.set_wheel_speed('both', 50)
```

## Belirli mesafe ilerle {#move_distance}

Geçerli tekerlek hızıyla belirtilen mesafe kadar ilerler.  
Tekerlek hızı ayarlanmamışsa robot varsayılan hızla ileri gider.  
Mesafe değeri 0 ise robot geçerli tekerlek hızıyla ilerlemeye devam eder.  
bekle onay kutusu işaretliyse program hareket bitene kadar bekler.

<BlockImage module="roboids/Beagle" id="move_distance" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Gidilecek mesafe | 0 veya daha büyük gerçel sayı | - |
| unit | Açılır liste seçeneği | Mesafe birimi | cm, mm, inç(inch) | cm |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.move_distance(50, 'cm', wait=True)
```

## Belirli süre ilerle {#move_time}

Geçerli tekerlek hızıyla belirtilen süre kadar ilerler.  
Tekerlek hızı ayarlanmamışsa robot varsayılan hızla ileri gider.  
bekle onay kutusu işaretliyse program hareket bitene kadar bekler.

<BlockImage module="roboids/Beagle" id="move_time" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Hareket süresi (saniye) | 0 veya daha büyük gerçel sayı | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

# wait = TRUE
beagle.move_time(5, wait=True)
# wait = FALSE
beagle.move_time(0.5, wait=False)
```

## Yerinde dön {#turn_degree}

Yerinde dönme yönünü ve açısını belirler.  
bekle onay kutusu işaretliyse program dönüş bitene kadar bekler.

<BlockImage module="roboids/Beagle" id="turn_degree" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| direction | Açılır liste seçeneği | Dönüş yönü | sol(left), sağ(right) | - |
| data | Giriş (blok) | Dönüş açısı (derece) | 0 veya daha büyük gerçel sayı | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.turn_degree('left', 90, wait=True)
```

## Tekerlek hızını değiştir {#change_speed}

Beagle robotunun tekerlek hızını değiştirir.  
Yeni tekerlek hızı, geçerli hıza yazdığınız değerin eklenmesiyle bulunur.  
Yeni ayarlanan tekerlek hızı -100 ile 100 aralığına sınırlanır.

<BlockImage module="roboids/Beagle" id="change_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Tekerlek seçimi | sol(left), sağ(right), ikisi(both) | - |
| speed | Giriş (blok) | Hız değişimi | -200 ile 200 arasında tam sayı | - |

### Python
```python
beagle = Beagle(0)

beagle.change_wheel_speed('both', 10)
```

## Dur {#stop}

Beagle robotunun hareketini durdurur.  
Beagle robotunun iki tekerleğinin hızı da sıfırlanır.

<BlockImage module="roboids/Beagle" id="stop" />

### Parametreler

(yok)

### Python
```python
beagle = Beagle(0)

beagle.stop()
```

## Tekerlek hareket ediyor mu? {#wheel_moving}

Tekerlek hareket ediyorsa true, duruyorsa false döndürür.

<BlockImage module="roboids/Beagle" id="wheel_moving" />

### Parametreler

(yok)

### Python
```python
beagle = Beagle(0)

beagle.wheel_moving()
```

## Ses frekansını ayarla {#sound_buzz}

Beagle robotunun zil sesini belirtilen frekansa ayarlar.  
Robotun çıkarabileceği frekans aralığı 27,5 Hz ile 6553,5 Hz arasındadır.  
Bu aralığın dışında bir değer yazdığınızda zil ses çıkarmaz.

<BlockImage module="roboids/Beagle" id="sound_buzz" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| hz | Giriş (blok) | Frekans (Hz) | 0 ya da 27,5 ile 6553,5 arasında gerçel sayı (dışında 0) | - |

### Python
```python
beagle = Beagle(0)

beagle.sound_buzz(440)
```

## Notasını çal {#sound_note}

Beagle belirtilen notayı çalar.

<BlockImage module="roboids/Beagle" id="sound_note" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| note | Açılır liste seçeneği | Nota | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Açılır liste seçeneği | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
beagle = Beagle(0)

beagle.sound_note('D', 5)
```

## Ses klibini çal {#sound_clip}

Beagle seçilen ses klibini çalar.  
bekle onay kutusu işaretliyse program çalma bitene kadar bekler.

<BlockImage module="roboids/Beagle" id="sound_clip" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| clip | Açılır liste seçeneği | Ses klibinin adı | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'dibidibidip'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'` ve diğerleri | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.sound_clip('siren', wait=True)
```

## Sesi kapat {#sound_off}

Beagle robotunun sesini kapatır.

<BlockImage module="roboids/Beagle" id="sound_off" />

### Parametreler

(yok)

### Python
```python
beagle = Beagle(0)

beagle.sound_off()
```

## Ses çalıyor mu? {#sound_playing}

Ses çalıyorsa true, çalmıyorsa false döndürür.

<BlockImage module="roboids/Beagle" id="sound_playing" />

### Parametreler

(yok)

### Python
```python
beagle = Beagle(0)

beagle.sound_playing()
```

## Tekerlek hızı {#wheel_speed}

Seçilen tekerleğin hızı

<BlockImage module="roboids/Beagle" id="wheel_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Okunacak tekerlek | sol(left), sağ(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.wheel_speed('left')
```

## Enkoder {#encoder}

Seçilen tekerleğin enkoder değeri

<BlockImage module="roboids/Beagle" id="encoder" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Okunacak tekerlek | sol(left), sağ(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.encoder('left')
```

## Jiroskop {#gyroscope}

Seçilen eksendeki jiroskop değeri

<BlockImage module="roboids/Beagle" id="gyroscope" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Ölçülen eksen | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.gyroscope('x')
```

## İvmeölçer {#accelerometer}

Seçilen eksendeki ivmeölçer değeri

<BlockImage module="roboids/Beagle" id="accelerometer" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Ölçülen eksen | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.accelerometer('x')
```

## Manyetometre {#magnetometer}

Seçilen eksendeki manyetometre değeri

<BlockImage module="roboids/Beagle" id="magnetometer" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Ölçülen eksen | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.magnetometer('x')
```

## Sıcaklık {#temperature}

Sıcaklık sensörünün değeri

<BlockImage module="roboids/Beagle" id="temperature" />

### Parametreler

(yok)

### Python
```python
beagle = Beagle(0)

beagle.temperature()
```

## Sinyal gücü {#signal_strength}

Sinyal gücü

<BlockImage module="roboids/Beagle" id="signal_strength" />

### Parametreler

(yok)

### Python
```python
beagle = Beagle(0)

beagle.signal_strength()
```

## Pil gerilimi {#battery}

Pil gerilimi

<BlockImage module="roboids/Beagle" id="battery" />

### Parametreler

(yok)

### Python
```python
beagle = Beagle(0)

beagle.battery()
```

## Durum değişimi {#state_change}

Robotun durumunun değişip değişmediği

<BlockImage module="roboids/Beagle" id="state_change" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Durum türü | 0 ile 5 arasında (aşağıdaki tabloya bakın) | - |

| unit | Koşul |
|------|------|
| 0 | `accelerometer('x') > 0.8` |
| 1 | `accelerometer('x') < -0.8` |
| 2 | `accelerometer('y') > 0.8` |
| 3 | `accelerometer('y') < -0.8` |
| 4 | `accelerometer('z') > 0` |
| 5 | `accelerometer('z') < 0` |

### Python
```python
beagle = Beagle(0)

# unit = 0
beagle.accelerometer('x') > 0.8
```

## Lidarı başlat / durdur {#lidar_power}

Lidar sensörünü açar ya da kapatır.

<BlockImage module="roboids/Beagle" id="lidar_power" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| on | Açılır liste seçeneği | Lidar ON / OFF | başlat(on=True), durdur(off=False) | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.lidar_power(True)
```

## Lidarın ~ nesneye uzaklığı {#lidar_value}

Lidar sensörü çevredeki nesnelere olan uzaklığı 360 derece boyunca ölçebilir.  
Sayım Beagle robotunun önünden (0 numaralı değer) başlar ve saat yönünün tersine 1'er artar.

<BlockImage module="roboids/Beagle" id="lidar_value" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Giriş (alan) | Nesne numarası (0'dan başlar) | 0 veya daha büyük tam sayı | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_value(0)
```

## Lidarın yöne göre uzaklığı {#lidar_directions}

Lidarın ölçtüğü ön, arka, yan ve çapraz uzaklıkları gösterir.  
Sonuç, o yönün 45 derece soluna ve sağına düşen uzaklıkların ortalamasıdır.

<BlockImage module="roboids/Beagle" id="lidar_directions" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| direction | Açılır liste seçeneği | Ölçülen yön | ön(front), sol ön(left front), sol(left), sol arka(left back), arka(back), sağ arka(right back), sağ(right), sağ ön(right front) | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_directions('front')
```

## Lidar hazır mı? {#lidar_state}

Lidarın açık olup olmadığına göre **doğru (True) ya da yanlış (False)** döndürür.

<BlockImage module="roboids/Beagle" id="lidar_state" />

### Parametreler

(yok)

### Python
```python
beagle = Beagle(0)

beagle.lidar_ready()
```
