---
title: CSD-09 Motor
---

# CSD-09 Motor

## Örnek bildirimi {#instance}

CSD-09 Motor(CSD09) bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Servo motoru başlat {#start_servo_motor}

Servo motorun kullanacağı portu belirler.  
Port belirlenmezse motor düzgün çalışmaz.

<BlockImage module="CheeseStick/CSD09" id="start_servo_motor" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Servo motor portu | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_servo_motor('Sa')
```

## Servo motor açısını ayarla {#set_servo_motor}

Seçilen porttaki servo motorun açısını ayarlar.  
Seçilebilecek değerlerin aralığı 0 ile 180 arasındadır.

<BlockImage module="CheeseStick/CSD09" id="set_servo_motor" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Servo motor portu | Sa, Sb, Sc | son `start_servo_motor` çağrısındaki port |
| value | Giriş (alan) | Dönüş açısı (derece) | 0 ile 180 arasında tam sayı | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_servo_motor('Sa', 90)
```

## Servo motor açısını değiştir {#change_servo_motor}

Seçilen porttaki servo motorun açısını değiştirir.  
Seçilebilecek değerlerin aralığı -180 ile 180 arasındadır.

<BlockImage module="CheeseStick/CSD09" id="change_servo_motor" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Servo motor portu | Sa, Sb, Sc | son `start_servo_motor` çağrısındaki port |
| value | Giriş (alan) | Değiştirilecek açı farkı | Tam sayı | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_servo_motor('Sa', 10)
```

## Servo motoru durdur {#stop_servo_motor}

Seçilen porttaki servo motorun gücünü kapatır.

<BlockImage module="CheeseStick/CSD09" id="stop_servo_motor" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Servo motor portu | Sa, Sb, Sc | son `start_servo_motor` çağrısındaki port |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_servo_motor('Sa')
```

## DC motoru başlat {#start_DC_motor}

Seçilen portu kullanarak DC motoru denetlenebilir duruma getirir.
DC motorla ilgili diğer blokları kullanmadan önce bir kez çağrılmalıdır.

<BlockImage module="CheeseStick/CSD09" id="start_DC_motor" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | DC motor portu | Mab, Mcd | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_dc_motor('Mab')
```

## DC motor hızını ayarla {#set_DC_motor}

DC motorun PWM çıkış değerini ayarlar.

<BlockImage module="CheeseStick/CSD09" id="set_DC_motor" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | DC motor portu | Mab, Mcd | son `start_dc_motor` çağrısındaki port |
| value | Giriş (alan) | PWM çıkış değeri | 0 ile 100 arasında tam sayı | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_dc_motor('Mab', 50)
```

## DC motor hızını değiştir {#change_DC_motor}

DC motorun geçerli PWM çıkış değerine yazdığınız değişimi ekleyerek yeni değeri ayarlar.

<BlockImage module="CheeseStick/CSD09" id="change_DC_motor" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | DC motor portu | Mab, Mcd | son `start_dc_motor` çağrısındaki port |
| value | Giriş (alan) | Değiştirilecek PWM farkı | Tam sayı | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_dc_motor('Mab', 10)
```

## DC motoru durdur {#stop_DC_motor}

DC motorun çıkışını durdurur.

<BlockImage module="CheeseStick/CSD09" id="stop_DC_motor" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | DC motor portu | Mab, Mcd | son `start_dc_motor` çağrısındaki port |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_dc_motor('Mab')
```

## Adım motorunu başlat {#start_step_motor}

Adım motorunu kullanılabilir duruma getirir.

<BlockImage module="CheeseStick/CSD09" id="start_step_motor" />

### Parametreler

(yok)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_step_motor()
```

## Adım motoru modunu ayarla {#set_step_motor_mode}

Adım motorunun denetleneceği modu ayarlar.  
Mod ayrıca ayarlanmazsa varsayılan olarak 'güç' moduna ayarlanır.  
Dikkat! Adım motoru dönerken mod değiştirilmemelidir.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_mode" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Sürüş modu | kapalı(off), normal(wave_step), güç(full_step) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_mode('full_step')
```

## Adım motoru hızını ayarla {#set_step_motor_speed}

Adım motorunun hızını ayarlar.  
Seçilebilecek değerlerin aralığı -1000 ile 1000 arasındadır.  
Değer negatifse motor ters yönde döner.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| value | Giriş (alan) | Dönüş hızı (PPS) | 0 veya daha büyük tam sayı | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_speed(100)
```

## Adım motorunu döndür {#rotate_step_motor}

Adım motorunun döneceği darbe sayısını ayarlar.  
Seçilebilecek değerlerin aralığı 0 ile 65535 arasındadır.  
Adım motorunun hızı seçilmemişse motor dönmez.  
Beklensin seçeneği işaretlenirse dönüş tamamlanana kadar beklenir.

<BlockImage module="CheeseStick/CSD09" id="rotate_step_motor" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| value | Giriş (alan) | Dönülecek adım sayısı | Tam sayı | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# wait = TRUE
csd09.rotate_step_motor(360, wait=True)

# wait = FALSE
csd09.rotate_step_motor(360, wait=False)
```

## Adım motoru hızını değiştir {#change_step_motor_speed}

Adım motorunun hızını değiştirir.  
Seçilebilecek değerlerin aralığı -2000 ile 2000 arasındadır.

<BlockImage module="CheeseStick/CSD09" id="change_step_motor_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| value | Giriş (alan) | Değiştirilecek PPS farkı | Tam sayı | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_step_motor_speed(10)
```

## Adım motorunu durdur {#stop_step_motor}

Adım motorunu durdurur ya da gücünü kapatır.

<BlockImage module="CheeseStick/CSD09" id="stop_step_motor" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Durdurma biçimi | durdur(stop), gücü kapat(power) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# unit = "stop"
csd09.stop_step_motor()

# unit = "power"
csd09.turn_off_step_motor()
```

## Toplam adım sayısı {#step_motor_steps}

Adım motorunun şimdiye kadar döndüğü toplam adım sayısını döndürür.

<BlockImage module="CheeseStick/CSD09" id="step_motor_steps" />

### Parametreler

(yok)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.get_steps()
```
