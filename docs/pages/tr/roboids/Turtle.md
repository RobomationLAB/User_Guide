---
title: Turtle
---

# Turtle

## Örnek bildirimi {#instance}

Turtle bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
turtle = Turtle(0)
# Birden fazla örnek olduğunda
turtle_1 = Turtle(1)
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Tekerlek hızını ayarla {#set_wheel_speed}

Tekerleğin hızını belirler. Hız aralığı -100 ile 100 arasındadır.

<BlockImage module="roboids/Turtle" id="set_wheel_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Tekerlek seçimi | sol(left), sağ(right), ikisi(both) | - |
| speed | Giriş (blok) | Tekerlek hızı | -100 ile 100 arasında tam sayı, 0: duruş | - |

### Python
```python
turtle = Turtle(0)

turtle.set_wheel_speed('both', 50)
```

## Belirli mesafe ilerle {#move_distance}

Robotun gideceği mesafeyi belirler.  
Tekerlek hızı ayarlanmamışsa robot ilerlemez.  
Mesafe değeri 0 ise robot geçerli tekerlek hızıyla ilerlemeye devam eder.  
bekle onay kutusu işaretliyse program hareket bitene kadar bekler.

<BlockImage module="roboids/Turtle" id="move_distance" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Gidilecek mesafe | 0 veya daha büyük gerçel sayı | - |
| unit | Açılır liste seçeneği | Mesafe birimi | cm, mm, inç(inch) | cm |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.move_distance(50, 'cm', wait=True)
```

## Belirli süre ilerle {#move_time}

Geçerli tekerlek hızıyla belirtilen süre kadar ilerler.  
Tekerlek hızı ayarlanmamışsa robot varsayılan hızla ileri gider.  
bekle onay kutusu işaretliyse program hareket bitene kadar bekler.

<BlockImage module="roboids/Turtle" id="move_time" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Hareket süresi (saniye) | 0 veya daha büyük gerçel sayı | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

# wait = TRUE
turtle.move_time(5, wait=True)
# wait = FALSE
turtle.move_time(0.5, wait=False)
```

## Yerinde dön {#turn_degree}

Yerinde dönme yönünü ve açısını belirler.  
bekle onay kutusu işaretliyse program dönüş bitene kadar bekler.

<BlockImage module="roboids/Turtle" id="turn_degree" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| direction | Açılır liste seçeneği | Dönüş yönü | sol(left), sağ(right) | - |
| data | Giriş (blok) | Dönüş açısı (derece) | 0 veya daha büyük gerçel sayı | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.turn_degree('left', 90, wait=True)
```

## Tekerlek hızını değiştir {#change_speed}

Turtle robotunun tekerlek hızını değiştirir.  
Yeni tekerlek hızı, geçerli hıza yazdığınız değerin eklenmesiyle bulunur.

<BlockImage module="roboids/Turtle" id="change_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Tekerlek seçimi | sol(left), sağ(right), ikisi(both) | - |
| speed | Giriş (blok) | Hız değişimi | -200 ile 200 arasında tam sayı | - |

### Python
```python
turtle = Turtle(0)

turtle.change_wheel_speed('both', 10)
```

## Dur {#stop}

Turtle robotunun hareketini durdurur.

<BlockImage module="roboids/Turtle" id="stop" />

### Parametreler

(yok)

### Python
```python
turtle = Turtle(0)

turtle.stop()
```

## Tekerlek hareket ediyor mu? {#wheel_moving}

Tekerlek hareket ediyorsa true, duruyorsa false döndürür.

<BlockImage module="roboids/Turtle" id="wheel_moving" />

### Parametreler

(yok)

### Python
```python
turtle = Turtle(0)

turtle.wheel_moving()
```

## Tekerlek etrafında dönüş {#pivot}

Dönüşün yapılacağı tekerleği, yönü ve açıyı belirler.  
bekle onay kutusu işaretliyse program dönüş bitene kadar bekler.

<BlockImage module="roboids/Turtle" id="pivot" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| base | Açılır liste seçeneği | Dönüşün yapılacağı tekerlek | sol(left_wheel), sağ(right_wheel) tekerlek | - |
| direction | Açılır liste seçeneği | Dönüş yönü | ileri(forward), geri(backward) | - |
| data | Giriş (blok) | Dönüş açısı (derece) | 0 veya daha büyük gerçel sayı | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot('left_wheel', 'forward', 90, wait=True)
```

## Çember çiz {#pivot_circle}

Kalemle çember çizerken dönüş yönünü, yarıçapı ve açıyı belirler.  
bekle onay kutusu işaretliyse program dönüş bitene kadar bekler.

<BlockImage module="roboids/Turtle" id="pivot_circle" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| direction | Açılır liste seçeneği | Dönüş yönü | sol ileri(left_forward), sol geri(left_backward), sağ ileri(right_forward), sağ geri(right_backward) | - |
| degree | Giriş (blok) | Dönüş açısı (derece) | 0 veya daha büyük gerçel sayı | - |
| radius | Giriş (blok) | Dönüş yarıçapı | 0 veya daha büyük gerçel sayı | - |
| unit | Açılır liste seçeneği | Yarıçap birimi | cm, mm, inç(inch) | cm |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot_circle('left_forward', 90, 1, 'cm', wait=True)
```

## Çizgiyi izle {#trace_line}

Zemin renk sensörünü kullanarak seçilen renkteki çizgi boyunca gider.

<BlockImage module="roboids/Turtle" id="trace_line" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| line | Açılır liste seçeneği | İzlenecek çizginin rengi | siyah(black), kırmızı(red), yeşil(green), mavi(blue), her renk(any) | black |

### Python
```python
turtle = Turtle(0)

turtle.trace_line('black')
```

## Renge kadar çizgiyi izle {#trace_line_until_color}

Zemin renk sensörünü kullanarak B rengine gelene kadar A renkli çizgi boyunca gider.

<BlockImage module="roboids/Turtle" id="trace_line_until_color" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| line | Açılır liste seçeneği | İzlenecek çizginin rengi | siyah(black), kırmızı(red), yeşil(green), mavi(blue), her renk(any) | - |
| color | Açılır liste seçeneği | Durulacak renk | siyah(black), kırmızı(red), yeşil(green), camgöbeği(cyan), mavi(blue), macenta(magenta), her renk(any) | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_line_until_color('black', 'red', wait=True)
```

## Kavşaktan geçip bir sonrakinde dur {#intersection}

Turtle kavşakta belirtilen yöne döner, ardından bir sonraki kavşağa kadar ilerler.  
bekle onay kutusu işaretliyse program hareket bitene kadar bekler.  

<BlockImage module="roboids/Turtle" id="intersection" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| direction | Açılır liste seçeneği | Kavşaktaki hareket yönü | ileri git(forward), sola dön(left), sağa dön(right), geri dön(uturn) | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_intersection('left', wait=True)
```

## Çizgi izleme hızını ayarla {#set_trace_speed}

Çizgi boyunca gitme hızını ayarlar. Hız aralığı 1 ile 10 arasındadır.

<BlockImage module="roboids/Turtle" id="set_trace_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Çizgi izleme hızı | 1 ile 10 arasında tam sayı | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_speed(5)
```

## Çizgi izleme kazancını ayarla {#set_trace_gain}

Robotun çizgi boyunca giderken yönü ne kadar güçlü düzelttiğini ayarlar. Kazanç aralığı 1 ile 10 arasındadır.

<BlockImage module="roboids/Turtle" id="set_trace_gain" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Yön düzeltme kazancı | 1 ile 10 arasında tam sayı | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_gain(5)
```

## Çizgi izlemeyi durdur {#stop_trace}

Turtle robotunun çizgi boyunca gitmesini sonlandırır.

<BlockImage module="roboids/Turtle" id="stop_trace" />

### Parametreler

(yok)

### Python
```python
turtle = Turtle(0)

turtle.stop_trace()
```

## Baş LED rengini ayarla {#set_led_color}

Turtle robotunun başındaki LED'in rengini ayarlar.  
Paletten seçilen renk **renk adına** (İngilizce metin) dönüştürülür ve koda bu biçimde girer. (Kodda R, G, B sayı değerleri değil, renk adı görünür.)

<BlockImage module="roboids/Turtle" id="set_led_color" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| color | Renk | Renk paletinden seçim → renk adına (İngilizce) dönüşüm | Renk adları: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color('red')
```

## Baş LED rengini Renk kategorisi bloğuyla ayarla {#set_led_color_with_block}

Baştaki LED'in rengini Renk kategorisindeki bir bloğun sonucuna (`[R, G, B]`) göre ayarlar.

<BlockImage module="roboids/Turtle" id="set_led_color_with_block" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (renk) | Renk kategorisi bloğu ya da `[R, G, B]` dizisi | `[0~255, 0~255, 0~255]` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color(*Utils.color('red'))
```

## LED rengini RGB kadar değiştir {#change_by_rgb}

Baştaki LED'in geçerli rengine yazdığınız R, G ve B değişimlerini ekleyerek yeni rengi ayarlar.

<BlockImage module="roboids/Turtle" id="change_by_rgb" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| r | Giriş (alan) | Kırmızı değişimi | -255 ile 255 arasında tam sayı | 0 |
| g | Giriş (alan) | Yeşil değişimi | -255 ile 255 arasında tam sayı | 0 |
| b | Giriş (alan) | Mavi değişimi | -255 ile 255 arasında tam sayı | 0 |

### Python
```python
turtle = Turtle(0)

turtle.change_led_color(10, 0, 0)
```

## Kafa LED'ini kapat {#turn_off}

Baştaki LED'in rengini söndürür.

<BlockImage module="roboids/Turtle" id="turn_off" />

### Parametreler

(yok)

### Python
```python
turtle = Turtle(0)

turtle.turn_off()
```

## Ses frekansını ayarla {#sound_buzz}

Turtle robotunun zil sesini belirtilen frekansa ayarlar.

<BlockImage module="roboids/Turtle" id="sound_buzz" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| hz | Giriş (blok) | Frekans (Hz) | 0 ile 6553,5 arasında gerçel sayı | - |

### Python
```python
turtle = Turtle(0)

turtle.sound_buzz(440)
```

## Notasını çal {#sound_note}

Turtle belirtilen notayı çalar.

<BlockImage module="roboids/Turtle" id="sound_note" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| note | Açılır liste seçeneği | Nota | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Açılır liste seçeneği | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
turtle = Turtle(0)

turtle.sound_note('D', 5)
```

## Ses klibini çal {#sound_clip}

Turtle seçilen ses klibini çalar.

<BlockImage module="roboids/Turtle" id="sound_clip" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| clip | Açılır liste seçeneği | Ses klibinin adı | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` ve diğerleri | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.sound_clip('siren', wait=True)
```

## Sesi kapat {#sound_off}

Turtle robotunun sesini kapatır.

<BlockImage module="roboids/Turtle" id="sound_off" />

### Parametreler

(yok)

### Python
```python
turtle = Turtle(0)

turtle.sound_off()
```

## Ses çalıyor mu? {#sound_playing}

Ses çalıyorsa true, çalmıyorsa false döndürür.

<BlockImage module="roboids/Turtle" id="sound_playing" />

### Parametreler

(yok)

### Python
```python
turtle = Turtle(0)

turtle.sound_playing()
```

## Tekerlek hızı {#wheel_speed}

Seçilen tekerleğin hızı

<BlockImage module="roboids/Turtle" id="wheel_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Okunacak tekerlek | sol(left), sağ(right) | - |

### Python
```python
turtle = Turtle(0)

turtle.wheel_speed('left')
```

## Zemin renk sensörü {#floor}

Zemin renk sensörünün değeri

<BlockImage module="roboids/Turtle" id="floor" />

### Parametreler

(yok)

### Python
```python
turtle = Turtle(0)

turtle.floor()
```

## Kart rengi {#card_color}

Zemin renk sensörüyle okunan kartın renginin adı

<BlockImage module="roboids/Turtle" id="card_color" />

### Parametreler

(yok)

### Python
```python
turtle = Turtle(0)

turtle.card_color()
```

## Kart renk deseni {#card_pattern}

Zemin renk sensörüyle okunan kartın renk deseni

<BlockImage module="roboids/Turtle" id="card_pattern" />

### Parametreler

(yok)

### Python
```python
turtle = Turtle(0)

turtle.card_pattern()
```

## Ekseni ivmesi {#acceleration}

Seçilen eksendeki yer çekimi ivmesi değeri

<BlockImage module="roboids/Turtle" id="acceleration" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Ölçülen eksen | x, y, z | - |

### Python
```python
turtle = Turtle(0)

turtle.acceleration('x')
```

## Sıcaklık {#temperature}

Sıcaklık sensörünün değeri

<BlockImage module="roboids/Turtle" id="temperature" />

### Parametreler

(yok)

### Python
```python
turtle = Turtle(0)

turtle.temperature()
```

## Sinyal gücü {#signal_strength}

Sinyal gücü

<BlockImage module="roboids/Turtle" id="signal_strength" />

### Parametreler

(yok)

### Python
```python
turtle = Turtle(0)

turtle.signal_strength()
```

## Pil gerilimi {#battery}

Pil gerilimi

<BlockImage module="roboids/Turtle" id="battery" />

### Parametreler

(yok)

### Python
```python
turtle = Turtle(0)

turtle.battery()
```

## Renge dokunuyor mu? {#color_read}

Turtle renk sensörüyle robotun belirtilen renge dokunup dokunmadığını ölçer ve **doğru (True) ya da yanlış (False)** döndürür.

<BlockImage module="roboids/Turtle" id="color_read" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| color | Açılır liste seçeneği | Rengin adı | unknown, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_color('red')
```

## Kart deseni ~ mi? {#pattern_read}

Renk sensörüyle okunan kart renk deseninin belirtilenle eşleşip eşleşmediğini **doğru (True) ya da yanlış (False)** olarak döndürür.

<BlockImage module="roboids/Turtle" id="pattern_read" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| pattern | Açılır liste seçeneği | Kart deseninin adı | `'red_yellow'`, `'red_green'`, `'blue_red'` | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_pattern('red_yellow')
```

## Arka düğmenin durumu {#button}

Sırttaki düğmenin basılı olup olmadığı ya da tıklanıp tıklanmadığı

<BlockImage module="roboids/Turtle" id="button" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| event | Açılır liste seçeneği | Düğme durumunun türü | basılı(pressed), tıklandı(click), uzun tıklandı(long_click) | - |  

### Python
```python
turtle = Turtle(0)

turtle.button('pressed')
```

## Durum değişimi {#state_change}

Robotun durumunun değişip değişmediği

<BlockImage module="roboids/Turtle" id="state_change" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Durum türü | 0 ile 5 arasında (aşağıdaki tabloya bakın) | - |

| unit | Koşul |
|------|------|
| 0 | `acceleration('x') > 50` |
| 1 | `acceleration('x') < -50` |
| 2 | `acceleration('y') > 50` |
| 3 | `acceleration('y') < -50` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -30` |

### Python
```python
turtle = Turtle(0)

# unit = 0
turtle.acceleration('x') > 50
```
