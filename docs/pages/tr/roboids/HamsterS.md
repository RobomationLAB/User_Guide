---
title: HamsterS
---

# HamsterS

## Örnek bildirimi {#instance}

HamsterS bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
hamster_s = HamsterS(0)
# Birden fazla örnek olduğunda
hamster_s_1 = HamsterS(1)
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Tekerlek hızını ayarla {#set_wheel_speed}

Tekerleğin hızını belirler. Hız aralığı -100 ile 100 arasındadır.

<BlockImage module="roboids/HamsterS" id="set_wheel_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Tekerlek seçimi | sol(left), sağ(right), ikisi(both) | - |
| speed | Giriş (blok) | Tekerlek hızı | -100 ile 100 arasında tam sayı, 0: duruş | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_wheel_speed('both', 50)
```

## Belirli mesafe ilerle {#move_distance}

Geçerli tekerlek hızıyla belirtilen mesafe kadar ilerler.  
Tekerlek hızı ayarlanmamışsa robot varsayılan hızla ileri gider.  
Mesafe değeri 0 ise robot geçerli tekerlek hızıyla ilerlemeye devam eder.  
bekle onay kutusu işaretliyse program hareket bitene kadar bekler.

<BlockImage module="roboids/HamsterS" id="move_distance" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Gidilecek mesafe | 0 veya daha büyük gerçel sayı | - |
| unit | Açılır liste seçeneği | Mesafe birimi | cm, mm, inç(inch) | cm |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.move_distance(50, 'cm', wait=True)
```

## Belirli süre ilerle {#move_time}

Geçerli tekerlek hızıyla belirtilen süre kadar ilerler.  
Tekerlek hızı ayarlanmamışsa robot varsayılan hızla ileri gider.  
bekle onay kutusu işaretliyse program hareket bitene kadar bekler.

<BlockImage module="roboids/HamsterS" id="move_time" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Hareket süresi (saniye) | 0 veya daha büyük gerçel sayı | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

# wait = TRUE
hamster_s.move_time(5, wait=True)
# wait = FALSE
hamster_s.move_time(5, wait=False)
```

## Yerinde dön {#turn_degree}

Yerinde dönme yönünü ve açısını belirler.  
bekle onay kutusu işaretliyse program dönüş bitene kadar bekler.

<BlockImage module="roboids/HamsterS" id="turn_degree" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| direction | Açılır liste seçeneği | Dönüş yönü | sol(left), sağ(right) | - |
| data | Giriş (blok) | Dönüş açısı (derece) | 0 veya daha büyük gerçel sayı | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_degree('left', 90, wait=True)
```

## Tekerlek hızını değiştir {#change_speed}

HamsterS robotunun tekerlek hızını değiştirir.  
Yeni tekerlek hızı, geçerli hıza yazdığınız değerin eklenmesiyle bulunur.

<BlockImage module="roboids/HamsterS" id="change_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Tekerlek seçimi | sol(left), sağ(right), ikisi(both) | - |
| speed | Giriş (blok) | Hız değişimi | -200 ile 200 arasında tam sayı | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_wheel_speed('both', 10)
```

## Dur {#stop}

HamsterS robotunun hareketini durdurur.

<BlockImage module="roboids/HamsterS" id="stop" />

### Parametreler

(yok)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop()
```

## Tekerlek hareket ediyor mu? {#wheel_moving}

Tekerlek hareket ediyorsa true, duruyorsa false döndürür.

<BlockImage module="roboids/HamsterS" id="wheel_moving" />

### Parametreler

(yok)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_moving()
```

## Tahtada bir adım ileri git {#grid_move}

Tahtada belirlenmiş bir kare kadar ilerler.

<BlockImage module="roboids/HamsterS" id="grid_move" />

### Parametreler

(yok)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_move()
```

## Tahtada bir kez dön {#grid_turn}

Tahtada belirtilen yönde 90 derece döner.

<BlockImage module="roboids/HamsterS" id="grid_turn" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| direction | Açılır liste seçeneği | Dönüş yönü | sol(left), sağ(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_turn('left')
```

## Kalem etrafında dönüş {#pivot}

Kalem tutucuyla çalışırken dönüşün yapılacağı noktayı, yönü ve açıyı belirler.  
bekle onay kutusu işaretliyse program dönüş bitene kadar bekler.

<BlockImage module="roboids/HamsterS" id="pivot" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| base | Açılır liste seçeneği | Dönüş noktası | sol kalem(left_pen), sağ kalem(right_pen), sol tekerlek(left_wheel), sağ tekerlek(right_wheel) | - |
| direction | Açılır liste seçeneği | Dönüş yönü | ileri(forward), geri(backward) | - |
| degree | Giriş (blok) | Dönüş açısı (derece) | 0 veya daha büyük gerçel sayı | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot('left_pen', 'forward', 90, wait=True)
```

## Kalem etrafında çember {#pivot_circle}

Kalem tutucuyla çember çizerken dönüş noktasını, yönü, yarıçapı ve açıyı belirler.  
bekle onay kutusu işaretliyse program dönüş bitene kadar bekler.

<BlockImage module="roboids/HamsterS" id="pivot_circle" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| base | Açılır liste seçeneği | Dönüş noktası | sol(left_pen), sağ(right_pen) kalem | - |
| direction | Açılır liste seçeneği | Dönüş yönü | sol ileri(left_forward), sol geri(left_backward), sağ ileri(right_forward), sağ geri(right_backward) | - |
| degree | Giriş (blok) | Dönüş açısı (derece) | 0 veya daha büyük gerçel sayı | - |
| radius | Giriş (blok) | Dönüş yarıçapı | 0 veya daha büyük gerçel sayı | - |
| unit | Açılır liste seçeneği | Yarıçap birimi | cm, mm, inç(inch) | cm |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot_circle('left_pen', 'left_forward', 90, 1, 'cm', wait=True)
```

## Sensörle çizgiyi izle {#trace_mode}

HamsterS, zemin sensörünü kullanarak seçilen renkteki çizgi boyunca gider.

<BlockImage module="roboids/HamsterS" id="trace_mode" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| floor | Açılır liste seçeneği | Çizgiyi izlerken kullanılacak zemin sensörü | sol(left), sağ(right), orta(center) | - |
| line | Açılır liste seçeneği | Çizginin rengi | siyah(black), beyaz(white) | black |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_line('left', 'black')
```

## Kesişimden geçip bir sonrakinde dur {#trace_until_grid}

HamsterS kesişimde belirtilen yöne döner, ardından bir sonraki kesişime kadar ilerler.  
bekle onay kutusu işaretliyse program hareket bitene kadar bekler.  

<BlockImage module="roboids/HamsterS" id="trace_until_grid" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| direction | Açılır liste seçeneği | Kesişimdeki hareket yönü | sola dön(left), sağa dön(right), düz git(forward), geri dön(uturn) | - |
| line | Açılır liste seçeneği | Çizginin rengi | siyah(black), beyaz(white) | black |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_intersection('left', 'black', wait=True)
```

## Çizgi izleme hızını ayarla {#set_trace_speed}

Çizgi boyunca gitme hızını ayarlar. Hız aralığı 1 ile 10 arasındadır.

<BlockImage module="roboids/HamsterS" id="set_trace_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Çizgi izleme hızı | 1 ile 10 arasında tam sayı | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_speed(5)
```

## Çizgi izleme kazancını ayarla {#set_trace_gain}

Robotun çizgi boyunca giderken yönü ne kadar güçlü düzelttiğini ayarlar. Kazanç aralığı 1 ile 10 arasındadır.

<BlockImage module="roboids/HamsterS" id="set_trace_gain" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Yön düzeltme kazancı | 1 ile 10 arasında tam sayı | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_gain(5)
```

## Çizgi izlemeyi durdur {#stop_trace}

HamsterS robotunun çizgi boyunca gitmesini sonlandırır.

<BlockImage module="roboids/HamsterS" id="stop_trace" />

### Parametreler

(yok)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop_trace()
```

## LED rengini ayarla {#set_led_color}

HamsterS robotunun LED rengini ayarlar.  
Paletten seçilen renk **renk adına** (İngilizce metin) dönüştürülür ve koda bu biçimde girer. (Kodda R, G, B sayı değerleri değil, renk adı görünür.)

<BlockImage module="roboids/HamsterS" id="set_led_color" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | LED seçimi | sol(left), sağ(right), ikisi(both) | - |
| color | Renk | Renk paletinden seçim → renk adına (İngilizce) dönüşüm | Renk adları: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', 'red')
```

## LED rengini Renk kategorisi bloğuyla ayarla {#set_led_color_with_block}

LED rengini Renk kategorisindeki bir bloğa (`[R, G, B]`) göre ayarlar.

<BlockImage module="roboids/HamsterS" id="set_led_color_with_block" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | LED seçimi | sol(left), sağ(right), ikisi(both) | - |
| data | Giriş (renk) | Renk kategorisi bloğu ya da `[R, G, B]` dizisi | `[0~255, 0~255, 0~255]` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', *Utils.color_rgb(255, 128, 0))
```

## LED rengini RGB kadar değiştir {#change_by_rgb}

HamsterS robotunun LED rengini verilen R, G ve B değerleri kadar değiştirir.

<BlockImage module="roboids/HamsterS" id="change_by_rgb" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | LED seçimi | sol(left), sağ(right), ikisi(both) | - |
| r | Giriş (alan) | Kırmızı değişimi | -255 ile 255 arasında tam sayı | 0 |
| g | Giriş (alan) | Yeşil değişimi | -255 ile 255 arasında tam sayı | 0 |
| b | Giriş (alan) | Mavi değişimi | -255 ile 255 arasında tam sayı | 0 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_led_color('both', 10, 0, 0)
```

## LED'i kapat {#turn_off}

LED rengini söndürür.

<BlockImage module="roboids/HamsterS" id="turn_off" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | LED seçimi | sol(left), sağ(right), ikisi(both) | both |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_off('both')
```

## Ses frekansını ayarla {#sound_buzz}

HamsterS robotunun zil sesini belirtilen frekansa ayarlar.  
Robotun çıkarabileceği frekans aralığı 122,1 Hz ile 4186,0 Hz arasındadır.  
Bu aralığın dışında bir değer yazdığınızda zil ses çıkarmaz.

<BlockImage module="roboids/HamsterS" id="sound_buzz" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| hz | Giriş (blok) | Frekans (Hz) | 122,1 ile 4186,0 arasında gerçel sayı (dışında 0) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_buzz(440)
```

## Notasını çal {#sound_note}

HamsterS belirtilen notayı çalar.

<BlockImage module="roboids/HamsterS" id="sound_note" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| note | Açılır liste seçeneği | Nota | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Açılır liste seçeneği | Oktav | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_note('D', 5)
```

## Ses klibini çal {#sound_clip}

HamsterS seçilen ses klibini çalar.  
bekle onay kutusu işaretliyse program çalma bitene kadar bekler.

<BlockImage module="roboids/HamsterS" id="sound_clip" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| clip | Açılır liste seçeneği | Ses klibinin adı | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'happy'`, `'angry'`, `'sad'` ve diğerleri | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_clip('siren', wait=True)
```

## Sesi kapat {#sound_off}

HamsterS robotunun sesini kapatır.

<BlockImage module="roboids/HamsterS" id="sound_off" />

### Parametreler

(yok)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_off()
```

## Ses çalıyor mu? {#sound_playing}

Ses çalıyorsa true, çalmıyorsa false döndürür.

<BlockImage module="roboids/HamsterS" id="sound_playing" />

### Parametreler

(yok)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_playing()
```

## Tekerlek hızı {#wheel_speed}

Seçilen tekerleğin hızı

<BlockImage module="roboids/HamsterS" id="wheel_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Okunacak tekerlek | sol(left), sağ(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_speed('left')
```

## Yakınlık sensörü {#proximity}

Seçilen yakınlık sensörünün değeri

<BlockImage module="roboids/HamsterS" id="proximity" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Okunacak sensörün konumu | sol(left), sağ(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.proximity('left')
```

## Zemin sensörü {#floor}

Seçilen zemin sensörünün değeri

<BlockImage module="roboids/HamsterS" id="floor" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Okunacak sensörün konumu | sol(left), sağ(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.floor('left')
```

## Ekseni ivmesi {#acceleration}

Seçilen eksendeki yer çekimi ivmesi değeri

<BlockImage module="roboids/HamsterS" id="acceleration" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Ölçülen eksen | x, y, z | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.acceleration('x')
```

## Parlaklık {#light}

Parlaklık sensörünün değeri

<BlockImage module="roboids/HamsterS" id="light" />

### Parametreler

(yok)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.light()
```

## Sıcaklık {#temperature}

Sıcaklık sensörünün değeri

<BlockImage module="roboids/HamsterS" id="temperature" />

### Parametreler

(yok)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.temperature()
```

## Sinyal gücü {#signal_strength}

Sinyal gücü

<BlockImage module="roboids/HamsterS" id="signal_strength" />

### Parametreler

(yok)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.signal_strength()
```

## Pil gerilimi {#battery}

Pil gerilimi

<BlockImage module="roboids/HamsterS" id="battery" />

### Parametreler

(yok)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.battery()
```

## Durum değişimi {#state_change}

Robotun durumunun değişip değişmediği

<BlockImage module="roboids/HamsterS" id="state_change" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Durum türü | 0 ile 7 arasında (aşağıdaki tabloya bakın) | - |

| unit | Anlamı | Python |
|------|------|--------|
| 0 | öne eğilme | `acceleration('x') > 5000` |
| 1 | arkaya eğilme | `acceleration('x') < -5000` |
| 2 | sola eğilme | `acceleration('y') > 5000` |
| 3 | sağa eğilme | `acceleration('y') < -5000` |
| 4 | ters dönme | `acceleration('z') > 0` |
| 5 | ters dönmemiş olma | `acceleration('z') < -3000` |
| 6 | engel ya da el algılama | `proximity('left') > 50 or proximity('right') > 50` |
| 7 | hafifçe vurma | `tap()` |

### Python
```python
hamster_s = HamsterS(0)

# unit = 0
hamster_s.acceleration('x') > 5000
# unit = 6
hamster_s.proximity('left') > 50 or hamster_s.proximity('right') > 50
# unit = 7
hamster_s.tap()
```

## Portu giriş olarak ayarla {#io_mode}

IO portunun giriş modunu ayarlar.

<BlockImage module="roboids/HamsterS" id="io_mode" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Giriş/çıkış portu | a, b, ikisi(both) | - |
| option | Açılır liste seçeneği | Giriş/çıkış modu | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.io_mode('both', 'analog_input')
```

## Portun çıkışını ayarla {#set_output}

Seçilen IO portunun çıkış değerini ayarlar.

<BlockImage module="roboids/HamsterS" id="set_output" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Giriş/çıkış portu | a, b, ikisi(both) | - |
| data | Giriş (blok) | Çıkış değeri | 0 ile 180 arasında tam sayı | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_output('a', 90)
```

## Portun çıkışını değiştir {#change_output}

Seçilen IO portunun çıkış değerini değiştirir.

<BlockImage module="roboids/HamsterS" id="change_output" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Giriş/çıkış portu | a, b, ikisi(both) | - |
| data | Giriş (blok) | Çıkış değeri değişimi | Tam sayı | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_output('a', 10)
```

## Kıskacı aç / kapat {#gripper}

HamsterS robotunun kıskacını açar ya da kapatır.  
unit değerine göre iki yöntemden biri çağrılır.

<BlockImage module="roboids/HamsterS" id="gripper" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | İşlem | aç(open), kapat(close) | - |

### Python
```python
hamster_s = HamsterS(0)

# unit = "open"
hamster_s.open_gripper()
# unit = "close"
hamster_s.close_gripper()
```

## Fırlatıcı açısını ayarla {#shooter}

Fırlatıcının açısını ayarlayarak onu yönetir. Açı aralığı 0 ile 180 arasındadır.

<BlockImage module="roboids/HamsterS" id="shooter" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Fırlatıcı açısı | 0 ile 180 arasında tam sayı | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.shooter(45)
```

## Portun giriş değeri {#input}

HamsterS robotunun giriş/çıkış portundaki giriş değerini döndürür.

<BlockImage module="roboids/HamsterS" id="input" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Giriş/çıkış portu | a, b | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.get_input('a')
```
