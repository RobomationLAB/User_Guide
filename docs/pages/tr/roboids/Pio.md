---
title: Piobot
---

# Piobot

## Örnek bildirimi {#instance}

Piobot(Pio) bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
pio = Pio(0)
# Birden fazla örnek olduğunda
pio_1 = Pio(1)
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Tekerlek hızını ayarla {#set_wheel_speed}

Tekerleğin hızını ayarlar. Tekerlek hızı aralığı -100 ile 100 arasındadır.

<BlockImage module="roboids/Pio" id="set_wheel_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Tekerlek seçimi | sol(left), sağ(right), ikisi(both) | - |
| speed | Giriş (blok) | Tekerlek hızı | -100 ile 100 arasında tam sayı, 0: duruş | - |

### Python
```python
pio = Pio(0)

pio.set_wheel_speed('both', 50)
```

## Belirli mesafe ilerle {#move_distance}

Geçerli tekerlek hızıyla belirtilen mesafe kadar ilerler.  
Tekerlek hızı ayarlanmamışsa robot varsayılan hızla ileri gider.  
Mesafe değeri 0 ise robot geçerli tekerlek hızıyla ilerlemeye devam eder.  
bekle onay kutusu işaretliyse program hareket bitene kadar bekler.

<BlockImage module="roboids/Pio" id="move_distance" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Gidilecek mesafe | 0 veya daha büyük gerçel sayı | - |
| unit | Açılır liste seçeneği | Mesafe birimi | cm, mm, inç(inch) | cm |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.move_distance(50, 'cm', wait=True)
```

## Belirli süre ilerle {#move_time}

Geçerli tekerlek hızıyla belirtilen süre kadar ilerler.  
Tekerlek hızı ayarlanmamışsa robot varsayılan hızla ileri gider.  
bekle onay kutusu işaretliyse program hareket bitene kadar bekler.

<BlockImage module="roboids/Pio" id="move_time" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Hareket süresi (saniye) | 0 veya daha büyük gerçel sayı | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# wait = TRUE
pio.move_time(5, wait=True)
# wait = FALSE
pio.move_time(5, wait=False)
```

## Yerinde dön {#turn_degree}

Yerinde dönme yönünü ve açısını belirler.  
bekle onay kutusu işaretliyse program dönüş bitene kadar bekler.

<BlockImage module="roboids/Pio" id="turn_degree" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| direction | Açılır liste seçeneği | Dönüş yönü | sol(left), sağ(right) | - |
| data | Giriş (blok) | Dönüş açısı (derece) | 0 veya daha büyük gerçel sayı | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# direction = "left"
pio.turn_degree('left', 90, wait=True)
# direction = "right"
pio.turn_degree('right', 90, wait=True)
```

## Tekerlek hızını değiştir {#change_speed}

Piobot robotunun tekerlek hızını değiştirir.  
Yeni tekerlek hızı, geçerli hıza yazdığınız değerin eklenmesiyle bulunur.  
Yeni ayarlanan tekerlek hızı -100 ile 100 aralığına sınırlanır.

<BlockImage module="roboids/Pio" id="change_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Tekerlek seçimi | sol(left), sağ(right), ikisi(both) | - |
| speed | Giriş (blok) | Hız değişimi | -200 ile 200 arasında tam sayı | - |

### Python
```python
pio = Pio(0)

pio.change_wheel_speed('both', 50)
```

## Turbo modunu aç / kapat {#turbo}

Piobot robotunun turbo modunu açar ya da kapatır.

<BlockImage module="roboids/Pio" id="turbo" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Turbo modu ON / OFF | açık(on=True), kapalı(off=False) | TRUE |

### Python
```python
pio = Pio(0)

pio.turbo(True)
```

## Dur {#stop}

Piobot robotunun hareketini durdurur.  
Piobot robotunun iki tekerleğinin hızı da sıfırlanır.

<BlockImage module="roboids/Pio" id="stop" />

### Parametreler

(yok)

### Python
```python
pio = Pio(0)

pio.stop()
```

## Tekerlek hareket ediyor mu? {#wheel_moving}

Tekerlek hareket ediyorsa true, duruyorsa false döndürür.

<BlockImage module="roboids/Pio" id="wheel_moving" />

### Parametreler

(yok)

### Python
```python
pio = Pio(0)

pio.wheel_moving()
```

## Tahtada bir adım ilerle {#grid_move}

Tahtada belirlenmiş bir adım kadar ilerler.

<BlockImage module="roboids/Pio" id="grid_move" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Hareket yönü | ileri(forward), geri(backward), sola(left), sağa(right) | - |

### Python
```python
pio = Pio(0)

pio.grid_move('forward')
```

## Tahtada bir kez dön {#grid_turn}

Piobot tahtada belirtilen yönde 90 derece döner. Her zaman tamamlanmasını bekler (içeride wait=True sabittir).

<BlockImage module="roboids/Pio" id="grid_turn" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Dönüş yönü | sol(left), sağ(right) | - |

### Python
```python
pio = Pio(0)

# unit = "left"
pio.grid_turn('left')
# unit = "right"
pio.grid_turn('right')
```

## Boyun hızını ayarla {#set_neck_speed}

Boynun dönme hızını ayarlar. Boyun hızı aralığı 1 ile 6 arasındadır.

<BlockImage module="roboids/Pio" id="set_neck_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Boynun dönme hızı | 1 ile 6 arasında tam sayı | 4 |

### Python
```python
pio = Pio(0)

pio.set_neck_speed(4)
```

## Boyun açısını ayarla {#set_neck_angle}

Boynun döneceği açıyı ayarlar. Boyun açısı aralığı -45 ile 45 arasındadır.

<BlockImage module="roboids/Pio" id="set_neck_angle" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Boyun açısı (derece) | -45 ile 45 arasında gerçel sayı | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.set_neck_angle(15, wait=True)
```

## Boyun hareket ediyor mu? {#neck_moving}

Boyun hareket ediyorsa true, duruyorsa false döndürür.

<BlockImage module="roboids/Pio" id="neck_moving" />

### Parametreler

(yok)

### Python
```python
pio = Pio(0)

pio.neck_moving()
```

## Göz rengini ayarla {#set_eye_color}

Piobot robotunun gözündeki LED'in rengini ayarlar.  
Sol gözün, sağ gözün ya da ikisinin rengini birlikte değiştirebilirsiniz.  
Hazır renkler arasından seçilen renk **renk adına** (İngilizce metin) dönüştürülür ve koda bu biçimde girer. (Kodda R, G, B sayı değerleri değil, renk adı görünür.)

<BlockImage module="roboids/Pio" id="set_eye_color" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Göz seçimi | sol(left), sağ(right), ikisi(both) | - |
| color | Açılır liste seçeneği | Hazır renk → renk adına (İngilizce) dönüşüm | siyah(black), kırmızı(red), sarı(yellow), yeşil(green), camgöbeği(cyan), mavi(blue), macenta(magenta), beyaz(white) | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', 'red')
```

## Göz rengini Renk kategorisi bloğuyla ayarla {#set_eye_color_with_block}

Piobot robotunun gözündeki LED'in rengini Renk kategorisindeki bloklarla ayarlar.  
Sol gözün, sağ gözün ya da ikisinin rengini birlikte değiştirebilirsiniz.

<BlockImage module="roboids/Pio" id="set_eye_color_with_block" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Göz seçimi | sol(left), sağ(right), ikisi(both) | - |
| data | Giriş (renk) | [R, G, B] dizisi | Renk kategorisi bloğu ya da `[0~255, 0~255, 0~255]` | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', *Utils.color('red'))
```

## Göz rengini RGB kadar değiştir {#change_by_rgb}

Piobot robotunun gözündeki LED'in rengini verilen R, G ve B değerleri kadar değiştirir.  
Sol gözün, sağ gözün ya da ikisinin rengini birlikte ayarlayabilirsiniz.

<BlockImage module="roboids/Pio" id="change_by_rgb" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Göz seçimi | sol(left), sağ(right), ikisi(both) | - |
| r | Giriş (alan) | Kırmızı değişimi | -255 ile 255 arasında tam sayı | 0 |
| g | Giriş (alan) | Yeşil değişimi | -255 ile 255 arasında tam sayı | 0 |
| b | Giriş (alan) | Mavi değişimi | -255 ile 255 arasında tam sayı | 0 |

### Python
```python
pio = Pio(0)

pio.change_eye_color('both', 10, 0, 0)
```

## Göz desenini ayarla {#set_eye_pattern}

Göz desenini ve desen başladığında her gözün rengini ayarlar.

<BlockImage module="roboids/Pio" id="set_eye_pattern" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| pattern | Açılır liste seçeneği | Desen türü | kapat(reset), yanıp sönme(blink), kararma(dimming), gökkuşağı(rainbow) | - |
| left | Açılır liste seçeneği | Sol gözün rengi | varsayılan(black), kırmızı(red), sarı(yellow), yeşil(green), camgöbeği(cyan), mavi(blue), macenta(magenta), beyaz(white) | white |
| right | Açılır liste seçeneği | Sağ gözün rengi | (left ile aynı) | white |

### Python
```python
pio = Pio(0)

pio.set_eye_pattern('dimming', 'green', 'red')
```

## Gözü kapat {#turn_off}

Gözün rengini söndürür.

<BlockImage module="roboids/Pio" id="turn_off" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Göz seçimi | sol(left), sağ(right), ikisi(both) | both |

### Python
```python
pio = Pio(0)

pio.turn_off('both')
```

## Ses frekansını ayarla {#sound_buzz}

Piobot robotunun zil sesini belirtilen frekansa ayarlar.  
Robotun çıkarabileceği frekans aralığı 27,5 Hz ile 6553,5 Hz arasındadır.  
Bu aralığın dışında bir değer yazdığınızda zil ses çıkarmaz.

<BlockImage module="roboids/Pio" id="sound_buzz" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| hz | Giriş (blok) | Frekans (Hz) | 27,5 ile 6553,5 arasında gerçel sayı | - |

### Python
```python
pio = Pio(0)

pio.sound_buzz(440)
```

## Notasını çal {#sound_note}

Piobot belirtilen notayı çalar.

<BlockImage module="roboids/Pio" id="sound_note" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| note | Açılır liste seçeneği | Nota | Do(C), Do#/Re♭(C#), Re(D), Re#/Mi♭(D#), Mi(E), Fa(F), Fa#/Sol♭(F#), Sol(G), Sol#/La♭(G#), La(A), La#/Si♭(A#), Si(B) | - |
| octave | Açılır liste seçeneği | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
pio = Pio(0)

pio.sound_note('D', 5)
```

## Ses klibini çal {#sound_clip}

Piobot seçilen ses klibini çalar.  
bekle onay kutusu işaretliyse program çalma bitene kadar bekler.

<BlockImage module="roboids/Pio" id="sound_clip" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| clip | Açılır liste seçeneği | Ses klibinin adı | `'mute'`, `'beep'`, `'beep2'`, `'beep3'`, `'siren'`, `'engine'`, `'robot'`, `'connect'` ve diğerleri | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_clip('siren', wait=True)
```

## Melodisini çal {#sound_melody}

Piobot seçilen melodiyi çalar.  
bekle onay kutusu işaretliyse program çalma bitene kadar bekler.

<BlockImage module="roboids/Pio" id="sound_melody" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| melody | Açılır liste seçeneği | Melodinin adı | `'mute'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` ve diğerleri | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_melody('happy', wait=True)
```

## Sesi kapat {#sound_off}

Piobot robotunun sesini kapatır.

<BlockImage module="roboids/Pio" id="sound_off" />

### Parametreler

(yok)

### Python
```python
pio = Pio(0)

pio.sound_off()
```

## Ses çalıyor mu? {#sound_playing}

Ses çalıyorsa true, çalmıyorsa false döndürür.

<BlockImage module="roboids/Pio" id="sound_playing" />

### Parametreler

(yok)

### Python
```python
pio = Pio(0)

pio.sound_playing()
```

## Tekerlek hızı {#wheel_speed}

Seçilen tekerleğin hızı

<BlockImage module="roboids/Pio" id="wheel_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Okunacak tekerlek | sol(left), sağ(right) | - |

### Python
```python
pio = Pio(0)

pio.wheel_speed('left')
```

## Sinyal gücü {#signal_strength}

Sinyal gücü

<BlockImage module="roboids/Pio" id="signal_strength" />

### Parametreler

(yok)

### Python
```python
pio = Pio(0)

pio.signal_strength()
```

## Pil gerilimi {#battery}

Pil gerilimi

<BlockImage module="roboids/Pio" id="battery" />

### Parametreler

(yok)

### Python
```python
pio = Pio(0)

pio.battery()
```

## Tuş takımı düğmesi {#keypad}

Kullanıcının en son bastığı tuş takımı düğmesini algılar.

<BlockImage module="roboids/Pio" id="keypad" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| button | Açılır liste seçeneği | Algılanacak düğme | çalıştır(play), ileri git(forward), geri git(backward), sola git(left), sağa git(right), hareket et(action), tekrarla(repeat), sil(clear) | - |

### Python
```python
pio = Pio(0)

pio.keypad('forward')
```
