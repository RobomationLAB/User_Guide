---
title: Hamster
---

# Hamster

## Örnek bildirimi {#instance}

Hamster bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
hamster = Hamster(0)
# Birden fazla örnek olduğunda
hamster_1 = Hamster(1)
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Tekerlek hızını ayarla {#set_wheel_speed}

Tekerleğin hızını belirler. Hız aralığı -100 ile 100 arasındadır.

<BlockImage module="roboids/Hamster" id="set_wheel_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Tekerlek seçimi | sol(left), sağ(right), ikisi(both) | - |
| speed | Giriş (blok) | Tekerlek hızı | -100 ile 100 arasında tam sayı, 0: duruş | - |

### Python
```python
hamster = Hamster(0)

hamster.set_wheel_speed('both', 50)
```

## Belirli süre ilerle {#move_time}

Geçerli tekerlek hızıyla belirtilen süre kadar ilerler.  
Tekerlek hızı ayarlanmamışsa robot varsayılan hızla ileri gider.  
bekle onay kutusu işaretliyse program hareket bitene kadar bekler.

<BlockImage module="roboids/Hamster" id="move_time" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Hareket süresi (saniye) | 0 veya daha büyük gerçel sayı | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

# wait = TRUE
hamster.move_time(5, wait=True)
# wait = FALSE
hamster.move_time(5, wait=False)
```

## Tekerlek hızını değiştir {#change_speed}

Hamster robotunun tekerlek hızını değiştirir.  
Yeni tekerlek hızı, geçerli hıza yazdığınız değerin eklenmesiyle bulunur.  
Yeni ayarlanan tekerlek hızı -100 ile 100 aralığına sınırlanır.

<BlockImage module="roboids/Hamster" id="change_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Tekerlek seçimi | sol(left), sağ(right), ikisi(both) | - |
| speed | Giriş (blok) | Hız değişimi | -200 ile 200 arasında tam sayı | - |

### Python
```python
hamster = Hamster(0)

hamster.change_wheel_speed('both', 10)
```

## Dur {#stop}

Hamster robotunun hareketini durdurur.  
Hamster robotunun iki tekerleğinin hızı da sıfırlanır.

<BlockImage module="roboids/Hamster" id="stop" />

### Parametreler

(yok)

### Python
```python
hamster = Hamster(0)

hamster.stop()
```

## Tahtada bir adım ileri git {#grid_move}

Tahtada belirlenmiş bir kare kadar ilerler.

<BlockImage module="roboids/Hamster" id="grid_move" />

### Parametreler

(yok)

### Python
```python
hamster = Hamster(0)

hamster.grid_move()
```

## Tahtada bir kez dön {#grid_turn}

Tahtada belirtilen yönde 90 derece döner.

<BlockImage module="roboids/Hamster" id="grid_turn" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| direction | Açılır liste seçeneği | Dönüş yönü | sol(left), sağ(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.grid_turn('left')
```

## Sensörle çizgiyi izle {#trace_mode}

Hamster, zemin sensörünü kullanarak seçilen renkteki çizgi boyunca gider.

<BlockImage module="roboids/Hamster" id="trace_mode" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| floor | Açılır liste seçeneği | Çizgiyi izlerken kullanılacak zemin sensörü | sol(left), sağ(right), orta(center) | - |
| line | Açılır liste seçeneği | Çizginin rengi | siyah(black), beyaz(white) | black |

### Python
```python
hamster = Hamster(0)

hamster.trace_line('left', 'black')
```

## Kesişimden geçip bir sonrakinde dur {#trace_until_grid}

Hamster kesişimde belirtilen yöne döner, ardından bir sonraki kesişime kadar ilerler.  
bekle onay kutusu işaretliyse program hareket bitene kadar bekler.  

<BlockImage module="roboids/Hamster" id="trace_until_grid" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| direction | Açılır liste seçeneği | Kesişimdeki hareket yönü | sola dön(left), sağa dön(right), düz git(forward), geri dön(uturn) | - |
| line | Açılır liste seçeneği | Çizginin rengi | siyah(black), beyaz(white) | black |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

hamster.trace_intersection('left', 'black', wait=True)
```

## Çizgi izleme hızını ayarla {#set_trace_speed}

Çizgi boyunca gitme hızını ayarlar. Hız aralığı 1 ile 10 arasındadır.

<BlockImage module="roboids/Hamster" id="set_trace_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Çizgi izleme hızı | 1 ile 10 arasında tam sayı | - |

### Python
```python
hamster = Hamster(0)

hamster.set_trace_speed(5)
```

## Çizgi izlemeyi durdur {#stop_trace}

Hamster robotunun çizgi boyunca gitmesini sonlandırır.

<BlockImage module="roboids/Hamster" id="stop_trace" />

### Parametreler

(yok)

### Python
```python
hamster = Hamster(0)

hamster.stop_trace()
```

## LED rengini ayarla {#set_led_color}

Hamster robotunun LED rengini ayarlar.  
Paletten seçilen renk **renk adına** (İngilizce metin) dönüştürülür ve koda bu biçimde girer. (Kodda R, G, B sayı değerleri değil, renk adı görünür.)

<BlockImage module="roboids/Hamster" id="set_led_color" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | LED seçimi | sol(left), sağ(right), ikisi(both) | - |
| color | Renk | Renk paletinden seçim → renk adına (İngilizce) dönüşüm | Renk adları: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster = Hamster(0)

hamster.set_led_color('both', 'red')
```

## LED'i kapat {#turn_off}

LED rengini söndürür.

<BlockImage module="roboids/Hamster" id="turn_off" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | LED seçimi | sol(left), sağ(right), ikisi(both) | both |

### Python
```python
hamster = Hamster(0)

hamster.turn_off('both')
```

## Ses frekansını ayarla {#sound_buzz}

Hamster robotunun zil sesini belirtilen frekansa ayarlar.  
Robotun çıkarabileceği frekans aralığı 1,0 Hz ile 6553,5 Hz arasındadır.  
Bu aralığın dışında bir değer yazdığınızda zil ses çıkarmaz.

<BlockImage module="roboids/Hamster" id="sound_buzz" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| hz | Giriş (blok) | Frekans (Hz) | 0 ile 6553,5 arasında gerçel sayı | - |

### Python
```python
hamster = Hamster(0)

hamster.sound_buzz(440)
```

## Notasını çal {#sound_note}

Hamster belirtilen notayı çalar.

<BlockImage module="roboids/Hamster" id="sound_note" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| note | Açılır liste seçeneği | Nota | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Açılır liste seçeneği | Oktav | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster = Hamster(0)

hamster.sound_note('D', 5)
```

## Sesi kapat {#sound_off}

Hamster robotunun sesini kapatır.

<BlockImage module="roboids/Hamster" id="sound_off" />

### Parametreler

(yok)

### Python
```python
hamster = Hamster(0)

hamster.sound_off()
```

## Tekerlek hızı {#wheel_speed}

Seçilen tekerleğin hızı

<BlockImage module="roboids/Hamster" id="wheel_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Okunacak tekerlek | sol(left), sağ(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.wheel_speed('left')
```

## Yakınlık sensörü {#proximity}

Seçilen yakınlık sensörünün değeri

<BlockImage module="roboids/Hamster" id="proximity" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Okunacak sensörün konumu | sol(left), sağ(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.proximity('left')
```

## Zemin sensörü {#floor}

Seçilen zemin sensörünün değeri

<BlockImage module="roboids/Hamster" id="floor" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Okunacak sensörün konumu | sol(left), sağ(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.floor('left')
```

## Ekseni ivmesi {#acceleration}

Seçilen eksendeki yer çekimi ivmesi değeri

<BlockImage module="roboids/Hamster" id="acceleration" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Ölçülen eksen | x, y, z | - |

### Python
```python
hamster = Hamster(0)

hamster.acceleration('x')
```

## Parlaklık {#light}

Parlaklık sensörünün değeri

<BlockImage module="roboids/Hamster" id="light" />

### Parametreler

(yok)

### Python
```python
hamster = Hamster(0)

hamster.light()
```

## Sıcaklık {#temperature}

Sıcaklık sensörünün değeri

<BlockImage module="roboids/Hamster" id="temperature" />

### Parametreler

(yok)

### Python
```python
hamster = Hamster(0)

hamster.temperature()
```

## Sinyal gücü {#signal_strength}

Sinyal gücü

<BlockImage module="roboids/Hamster" id="signal_strength" />

### Parametreler

(yok)

### Python
```python
hamster = Hamster(0)

hamster.signal_strength()
```

## Pil gerilimi {#battery}

Pil gerilimi

<BlockImage module="roboids/Hamster" id="battery" />

### Parametreler

(yok)

### Python
```python
hamster = Hamster(0)

hamster.battery()
```

## Durum değişimi {#state_change}

Robotun durumunun değişip değişmediği

<BlockImage module="roboids/Hamster" id="state_change" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Durum türü | 0 ile 6 arasında (aşağıdaki tabloya bakın) | - |

| unit | Koşul |
|------|------|
| 0 | `acceleration('x') > 5000` |
| 1 | `acceleration('x') < -5000` |
| 2 | `acceleration('y') > 5000` |
| 3 | `acceleration('y') < -5000` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -3000` |
| 6 | `proximity('left') > 50 or proximity('right') > 50` |

### Python
```python
hamster = Hamster(0)

# unit = 0
hamster.acceleration('x') > 5000
# unit = 6
hamster.proximity('left') > 50 or hamster.proximity('right') > 50
```

## Portu giriş olarak ayarla {#io_mode}

IO portunun giriş modunu ayarlar.

<BlockImage module="roboids/Hamster" id="io_mode" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Giriş/çıkış portu | a, b, ikisi(both) | - |
| option | Açılır liste seçeneği | Giriş/çıkış modu | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster = Hamster(0)

hamster.io_mode('both', 'analog_input')
```

## Portun çıkışını ayarla {#set_output}

Seçilen IO portunun çıkış değerini ayarlar.

<BlockImage module="roboids/Hamster" id="set_output" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Giriş/çıkış portu | a, b, ikisi(both) | - |
| data | Giriş (blok) | Çıkış değeri | 0 ile 180 arasında tam sayı | - |

### Python
```python
hamster = Hamster(0)

hamster.set_output('a', 90)
```

## Portun çıkışını değiştir {#change_output}

Seçilen IO portunun çıkış değerini değiştirir.

<BlockImage module="roboids/Hamster" id="change_output" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Giriş/çıkış portu | a, b, ikisi(both) | - |
| data | Giriş (blok) | Çıkış değeri değişimi | Tam sayı | - |

### Python
```python
hamster = Hamster(0)

hamster.change_output('a', 10)
```

## Kıskacı aç / kapat {#gripper}

Hamster robotunun kıskacını açar ya da kapatır.  
unit değerine göre iki yöntemden biri çağrılır.

<BlockImage module="roboids/Hamster" id="gripper" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | İşlem | aç(open), kapat(close) | - |

### Python
```python
hamster = Hamster(0)

# unit = "open"
hamster.open_gripper()
# unit = "close"
hamster.close_gripper()
```

## Fırlatıcı açısını ayarla {#shooter}

Fırlatıcının açısını ayarlayarak onu yönetir. Açı aralığı 0 ile 180 arasındadır.

<BlockImage module="roboids/Hamster" id="shooter" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Fırlatıcı açısı | 0 ile 180 arasında tam sayı | - |

### Python
```python
hamster = Hamster(0)

hamster.shooter(45)
```

## Portun giriş değeri {#input}

Hamster robotunun giriş/çıkış portundaki giriş değerini döndürür.

<BlockImage module="roboids/Hamster" id="input" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Giriş/çıkış portu | a, b | - |

### Python
```python
hamster = Hamster(0)

hamster.get_input('a')
```
