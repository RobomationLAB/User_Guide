---
title: Cheese Stick
---

# Cheese Stick

## Örnek bildirimi {#instance}

Cheese Stick(CheeseStick) bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
cheesestick = CheeseStick(0)
# Birden fazla örnek olduğunda
cheesestick_1 = CheeseStick(1)
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Portu giriş olarak ayarla {#set_input_mode}

Seçilen portun giriş modunu ayarlar.

<BlockImage module="roboids/CheeseStick" id="set_input_mode" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Giriş portu | Sa, Sb, Sc, La, Lb, Lc | - |
| option | Açılır liste seçeneği | Giriş modu | makey(makey), düğme(button), dijital pullup(digital_pullup), dijital pulldown(digital_pulldown), analog(analog), analog gerilim(analog_voltage) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_mode('Sa', 'button')
```

## Giriş aralığını ayarla {#set_input_range}

Seçilen portun giriş değerini belirtilen en küçük ile en büyük aralığa dönüştürür.  
Giriş değerinin aralığı 0 ile 255 arasındadır.  
Dönüştürülebilecek değerlerin aralığı -100 ile 100 arasındadır.

<BlockImage module="roboids/CheeseStick" id="set_input_range" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Giriş portu | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Giriş (alan) | Kaynağın en küçük değeri | 0 ile 255 arasında tam sayı | - |
| src_max | Giriş (alan) | Kaynağın en büyük değeri | 0 ile 255 arasında tam sayı | - |
| dst_min | Giriş (alan) | Dönüşüm sonrası en küçük değer | -100 ile 100 arasında tam sayı | - |
| dst_max | Giriş (alan) | Dönüşüm sonrası en büyük değer | -100 ile 100 arasında tam sayı | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range('Sa', 0, 255, 0, 100)
```

## Giriş aralığını orta değerle ayarla {#set_input_range_median}

Seçilen portun giriş değerini belirtilen en küçük, orta ve en büyük aralığa dönüştürür.  
Giriş değerinin aralığı 0 ile 255 arasındadır.  
Dönüştürülebilecek değerlerin aralığı -100 ile 100 arasındadır.

<BlockImage module="roboids/CheeseStick" id="set_input_range_median" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Giriş portu | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Giriş (alan) | Kaynağın en küçük değeri | 0 ile 255 arasında tam sayı | - |
| src_median | Giriş (alan) | Kaynağın orta değeri | 0 ile 255 arasında tam sayı | - |
| src_max | Giriş (alan) | Kaynağın en büyük değeri | 0 ile 255 arasında tam sayı | - |
| dst_min | Giriş (alan) | Dönüşüm sonrası en küçük değer | -100 ile 100 arasında tam sayı | - |
| dst_median | Giriş (alan) | Dönüşüm sonrası orta değer | -100 ile 100 arasında tam sayı | - |
| dst_max | Giriş (alan) | Dönüşüm sonrası en büyük değer | -100 ile 100 arasında tam sayı | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Giriş değeri {#get_input}

Seçilen portun giriş değeri

<BlockImage module="roboids/CheeseStick" id="get_input" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Giriş portu | Sa, Sb, Sc, La, Lb, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_input('Sa')
```

## Portu darbe girişi olarak ayarla {#set_pulse_input_mode}

Seçilen portun darbe giriş modunu ayarlar.

<BlockImage module="roboids/CheeseStick" id="set_pulse_input_mode" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Darbe giriş portu | Sc, Lc | - |
| option | Açılır liste seçeneği | Çekme modu | darbe (default), darbe (pull-up), darbe (pull-down) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pulse_input_mode('Sc', 'pull-up')
```

## Darbe giriş değeri {#get_pulse_input}

Seçilen portta darbe algılanıp algılanmadığı

<BlockImage module="roboids/CheeseStick" id="get_pulse_input" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Darbe giriş portu | Sc, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_pulse_input('Sc')
```

## Dijital çıkışı ayarla {#set_digital_output}

Seçilen portun dijital çıkış değerini ayarlar.  
Seçebileceğiniz değerler 0 ya da 1'dir.

<BlockImage module="roboids/CheeseStick" id="set_digital_output" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Dijital çıkış portu | Sa, Sb, Sc, La, Lb, Lc, Mab, Mcd | - |
| value | Açılır liste seçeneği | Çıkış değeri | 0 ya da 1 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_digital_output('Sa', 1)
```

## PWM çıkışını ayarla {#set_pwm_output}

Seçilen portun PWM çıkış değerini ayarlar.  
Seçebileceğiniz değer aralığı 0 ile 100 arasındadır.

<BlockImage module="roboids/CheeseStick" id="set_pwm_output" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | PWM çıkış portu | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Giriş (alan) | PWM değeri | 0 ile 100 arasında tam sayı | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pwm_output('Sa', 50)
```

## PWM çıkışını değiştir {#change_pwm_output}

Seçilen portun PWM çıkış değerini değiştirir.  
Seçebileceğiniz değer aralığı -100 ile 100 arasındadır.

<BlockImage module="roboids/CheeseStick" id="change_pwm_output" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | PWM çıkış portu | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Giriş (alan) | PWM değeri değişimi | -100 ile 100 arasında tam sayı | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.change_pwm_output('Sa', 10)
```

## Ses frekansını ayarla {#sound_buzz}

Cheese Stick modülünün zil sesini ayarlar.

<BlockImage module="roboids/CheeseStick" id="sound_buzz" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| hz | Giriş (blok) | Frekans (Hz) | 0 ile 6553,5 arasında gerçel sayı | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_buzz(440)
```

## Notasını çal {#sound_note}

Cheese Stick belirtilen notayı çalar.

<BlockImage module="roboids/CheeseStick" id="sound_note" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| note | Açılır liste seçeneği | Nota | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Açılır liste seçeneği | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_note('D', 5)
```

## Ses klibini çal {#sound_clip}

Cheese Stick seçilen ses klibini çalar.

<BlockImage module="roboids/CheeseStick" id="sound_clip" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| clip | Açılır liste seçeneği | Ses klibinin adı | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'happy'`, `'angry'`, `'sad'` ve diğerleri | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_clip('siren', wait=True)
```

## Sesi kapat {#sound_off}

Cheese Stick modülünün sesini kapatır.

<BlockImage module="roboids/CheeseStick" id="sound_off" />

### Parametreler

(yok)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_off()
```

## Ekseni ivmesi {#acceleration}

Seçilen eksendeki yer çekimi ivmesi değeri

<BlockImage module="roboids/CheeseStick" id="acceleration" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Ölçülen eksen | x, y, z | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x')
```

## Sıcaklık {#temperature}

Sıcaklık sensörünün değeri

<BlockImage module="roboids/CheeseStick" id="temperature" />

### Parametreler

(yok)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.temperature()
```

## Sinyal gücü {#signal_strength}

Sinyal gücü

<BlockImage module="roboids/CheeseStick" id="signal_strength" />

### Parametreler

(yok)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.signal_strength()
```

## Pil gerilimi {#battery}

Pil gerilimi

<BlockImage module="roboids/CheeseStick" id="battery" />

### Parametreler

(yok)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.battery()
```

## Durum değişimi {#state_change}

Robotun durumunun değişip değişmediği

<BlockImage module="roboids/CheeseStick" id="state_change" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Durum türü | 0 ile 7 arasında (aşağıdaki tabloya bakın) | - |

| unit | Koşul |
|------|------|
| 0 | `acceleration('x') > 960` |
| 1 | `acceleration('x') < -960` |
| 2 | `acceleration('y') > 960` |
| 3 | `acceleration('y') < -960` |
| 4 | `acceleration('z') > 960` |
| 5 | `acceleration('z') < -960` |
| 6 | `tap()` (hafifçe vurma olayı) |
| 7 | `fall()` (düşme olayı) |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x') > 960
cheesestick.tap()    # 6. durum
cheesestick.fall()   # 7. durum
```
