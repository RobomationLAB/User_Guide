---
title: RaccoonBot
---

# RaccoonBot

## Örnek bildirimi {#instance}

RaccoonBot bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
raccoon = RaccoonBot(0)
# Birden fazla örnek olduğunda
raccoon_1 = RaccoonBot(1)
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Eklem motorunu aç / kapat {#motor}

Eklem motoruna uygulanan denetimin kaldırılıp kaldırılmayacağını belirler.  
Hiçbir şey ayarlamazsanız program tüm eklemlerin motor denetimi açık olarak başlar.

<BlockImage module="roboids/Raccoon4" id="motor" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Eklem numarası | tümü(-1), 1(1), 2(2), 3(3), 4(4) | -1 |
| on | Onay kutusu | Motor denetimi ON / OFF | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# tüm eklemler, motor denetimi kapalı
raccoon.motor(-1, False)

# 1. eklem, motor denetimi açık
raccoon.motor(1, True)
```

## Eklem hızını ayarla {#speed_joint}

Seçilen eklemin hızını ayarlar.

<BlockImage module="roboids/Raccoon4" id="speed_joint" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| joint | Açılır liste seçeneği | Eklem numarası | tümü(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Giriş (blok) | Eklem hızı | -100 ile 100 arasında tam sayı | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_speed_joint(1, 100)
```

## Eklem hızını değiştir {#change_speed_joint}

Seçilen eklemin hızını değiştirir.

<BlockImage module="roboids/Raccoon4" id="change_speed_joint" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| joint | Açılır liste seçeneği | Eklem numarası | tümü(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Giriş (blok) | Hız değişimi | -200 ile 200 arasında tam sayı | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_speed_joint(1, 50)
```

## Tüm eklem hızlarını birlikte ayarla {#speed_joints}

Dört eklemin hızını birlikte ayarlar.

<BlockImage module="roboids/Raccoon4" id="speed_joints" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (dizi) | 4 eklemin hız dizisi | `[joint1, joint2, joint3, joint4]`, her biri -100 ile 100 arasında | - |

### Python
```python
raccoon = RaccoonBot(0)

# doğrudan yazılan dizi [10, 20, 30, 40]
raccoon.set_speed_joints(10, 20, 30, 40)

# değişkendeki dizi
raccoon.set_speed_joints(*arr)
```

## Eklem açısı kontrol hızını ayarla {#angle_speed}

Açı kontrol modunda eklemlerin hangi hızla yönetileceğini ayarlar.

<BlockImage module="roboids/Raccoon4" id="angle_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Açı kontrolünün en yüksek hızı | 0 ile 100 arasında tam sayı | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.angle_max_speed(100)
```

## Eklem açısını ayarla {#angle_joint}

Seçilen eklemin açısını ayarlar.

| joint | min | max |
|-------|-----|-----|
| 1 | -120 | 120 |
| 2 | -90 | 30 |
| 3 | -150 | 0 |
| 4 | -105 | 105 |

<BlockImage module="roboids/Raccoon4" id="angle_joint" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| joint | Açılır liste seçeneği | Eklem numarası | tümü(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Giriş (blok) | Eklem açısı (derece) | Yukarıdaki tabloya bakın (kendiliğinden sınırlanır) | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_angle_joint(1, 90, wait=True)
```

## Eklem açısını değiştir {#change_angle_joint}

Seçilen eklemin açısını değiştirir.

<BlockImage module="roboids/Raccoon4" id="change_angle_joint" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| joint | Açılır liste seçeneği | Eklem numarası | tümü(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Giriş (blok) | Açı değişimi (derece) | Yukarıdaki tabloya bakın (kendiliğinden sınırlanır) | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_angle_joint(1, 10, wait=True)
```

## Tüm eklem açılarını birlikte ayarla {#angle_joints}

Dört eklemin açısını birlikte ayarlar.

<BlockImage module="roboids/Raccoon4" id="angle_joints" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (dizi) | 4 eklemin açı dizisi ya da duruşun adı | `[j1, j2, j3, j4]` dizisi | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# doğrudan yazılan dizi
raccoon.set_angle_joints(0, 0, 0, 0, wait=True)
```

## Eklem durumunu başlat {#default_angle_joints}

Dört eklemin açısını hazır duruşa (`'zero'`, `'park'`, `'home'`) göre ayarlar.

<BlockImage module="roboids/Raccoon4" id="default_angle_joints" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Açılır liste | Duruşun adı | `'zero'` / `'park'` / `'home'` | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

Hazır duruşlar:
- `'zero'` → `[0, 0, 0, 0]`
- `'park'` → `[0, 25, -145, -60]`
- `'home'` → `[0, -10, -140, 60]`

### Python
```python
raccoon = RaccoonBot(0)

# hazır duruş
raccoon.set_angle_joints('home', wait=True)
```

## Eklem açılarını kaydet {#save_encoder}

Geçerli enkoder değerlerini seçtiğiniz değişkende saklar.

<BlockImage module="roboids/Raccoon4" id="save_encoder" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| encoder | Değişken | Kaydedilecek değişkenin adı | Değişken | - |
| data | Giriş (dizi) | Kaydedilecek başlangıç dizisi | 4 öğeli dizi ya da boş dizi | - |

### Python
```python
raccoon = RaccoonBot(0)
encoder = None

encoder = raccoon.save_encoder([3, -6, -73, 60])
```

## Seçilen koordinatı ayarla {#set_coordinate}

Seçilen koordinatı ayarlayarak robot kolunu hareket ettirir.  
Koordinatların aralıkları şöyledir.  
Bileğe göre => x: -20,0 cm ile 20,0 cm, y: -10,0 cm ile 20,0 cm, z: -2,0 mm ile 28,0 cm  
Tutucuya göre => aralık, bağlı olan cihaza göre değişebilir.  
Tutucu, zemine göre yatay ya da dikey olarak sabitlenir.  
Ulaşılamayan koordinatlar yazıldığında komut atlanır.

<BlockImage module="roboids/Raccoon4" id="set_coordinate" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| origin | Açılır liste seçeneği | Referans noktası | bilek(wrist), tutucu(end_effector) | - |
| pos | Açılır liste seçeneği | Eksen | x, y, z | - |
| data | Giriş (blok) | Koordinat değeri | x: -20 ile 20 cm, y: -10 ile 20 cm, z: -2 ile 28 cm | - |
| unit | Açılır liste seçeneği | Birim | cm, mm, inç(inch) | cm |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# x koordinatını 10 cm yapma
raccoon.set_coordinate('wrist', 'x', 10, 'cm', wait=True)

# end_effector referansına göre z koordinatı
raccoon.set_coordinate('end_effector', 'z', 15, 'cm', wait=True)
```

## Seçilen koordinatı değiştir {#change_coordinate}

Geçerli konuma göre seçilen koordinatı değiştirerek robot kolunu hareket ettirir.  
Koordinatların aralıkları şöyledir.  
Bileğe göre => x: -20,0 cm ile 20,0 cm, y: -10,0 cm ile 20,0 cm, z: -2,0 mm ile 28,0 cm  
Tutucuya göre => aralık, bağlı olan cihaza göre değişebilir.  
Tutucu, zemine göre yatay ya da dikey olarak sabitlenir.  
Ulaşılamayan koordinatlar yazıldığında komut atlanır.

<BlockImage module="roboids/Raccoon4" id="change_coordinate" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| origin | Açılır liste seçeneği | Referans noktası | bilek(wrist), tutucu(end_effector) | - |
| pos | Açılır liste seçeneği | Eksen | x, y, z | - |
| data | Giriş (blok) | Koordinat değişimi | Gerçel sayı | - |
| unit | Açılır liste seçeneği | Birim | cm, mm, inç(inch) | cm |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_coordinate('wrist', 'y', 5, 'cm', wait=True)
```

## xyz koordinatlarına git {#set_coordinates}

x, y ve z koordinatlarını birlikte belirtilen değerlere ayarlar.  

<BlockImage module="roboids/Raccoon4" id="set_coordinates" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| origin | Açılır liste seçeneği | Referans noktası | bilek(wrist), tutucu(end_effector) | - |
| x | Giriş (blok) | x koordinatı | Gerçel sayı | - |
| y | Giriş (blok) | y koordinatı | Gerçel sayı | - |
| z | Giriş (blok) | z koordinatı | Gerçel sayı | - |
| unit | Açılır liste seçeneği | Birim | cm, mm, inç(inch) | cm |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_coordinates('wrist', 0, 15, 20, 'cm', wait=True)
```

## Tutucu kilidini ayarla {#lock}

Tutucunun kilitleneceği yönü ayarlar. Yatay ya da dikey seçeneği belirlendikten sonra 4. eklemin hızı ve açısı artık yönetilemez.

<BlockImage module="roboids/Raccoon4" id="lock" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| mode | Açılır liste seçeneği | Kilit yönü | yok(none), yatay(horizontal), dikey(vertical) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.lock('horizontal')
```

## Tutucuyla nesneyi al / bırak {#end_effector}

Tutucuyla nesneyi alır ya da bırakır.  
unit açılır listesinin değerine göre iki yöntemden biri çağrılır.

<BlockImage module="roboids/Raccoon4" id="end_effector" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | İşlem | al (kapat)(pick), bırak (aç)(place) | - |

### Python
```python
raccoon = RaccoonBot(0)

# unit = "pick"
raccoon.pick()
# unit = "place"
raccoon.place()
```

## Tutucu cihazı {#end_effector_device}

Şu anda bağlı olan tutucunun numarası  
(1, 3, 4: kıskaçlı tutucu, 2: vakumlu tutucu)

<BlockImage module="roboids/Raccoon4" id="end_effector_device" />

### Parametreler

(yok)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_device()
```

## Tutucu durumu {#end_effector_status}

Tutucunun nesneyi tutup tutmadığı  
(0: bırakılmış, 1: tutulmuş)

<BlockImage module="roboids/Raccoon4" id="end_effector_status" />

### Parametreler

(yok)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_status()
```

## Notasını çal {#sound_note}

RaccoonBot belirtilen notayı çalar.

<BlockImage module="roboids/Raccoon4" id="sound_note" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| note | Açılır liste seçeneği | Nota | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Açılır liste seçeneği | Oktav | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_note('D', 5)
```

## Ses klibini çal {#sound_clip}

RaccoonBot seçilen ses klibini çalar.

<BlockImage module="roboids/Raccoon4" id="sound_clip" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| clip | Açılır liste seçeneği | Ses klibinin adı | `'mute'`, `'beep'`, `'siren'`, `'robot'`, `'connect'`, `'wake_up'`, `'start'`, `'bye'` ve diğerleri | - |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_clip('siren', wait=True)
```

## Sesi kapat {#sound_off}

RaccoonBot robotunun sesini kapatır.

<BlockImage module="roboids/Raccoon4" id="sound_off" />

### Parametreler

(yok)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_off()
```

## Enkoder {#encoder}

Seçilen eklemin enkoder değeri

<BlockImage module="roboids/Raccoon4" id="encoder" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| joint | Açılır liste seçeneği | Eklem numarası (ya da tüm eklemler) | 1, 2, 3, 4, tümü(-1) | -1 |

### Python
```python
raccoon = RaccoonBot(0)

# joint = 1
raccoon.encoder(1)

# tüm eklemler
raccoon.encoder(-1)
```

## Seçilen öğenin koordinatı {#coordinate}

Referans noktasının geçerli xyz koordinatlarını döndürür.  
`pos` atlanırsa `[x, y, z]` dizisinin tamamı, verilirse yalnızca o eksenin değeri döndürülür.

<BlockImage module="roboids/Raccoon4" id="coordinate" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| origin | Açılır liste seçeneği | Referans noktası | bilek(wrist), tutucu(end_effector) | wrist |
| pos | Açılır liste seçeneği | Eksen (ya da tümü) | x, y, z, tümü (atlanırsa dizinin tamamı döndürülür) | None (tümü) |

### Python
```python
raccoon = RaccoonBot(0)

# seçilen eksen
raccoon.get_coordinates('wrist', 'x')

# tümü (3 öğeli dizi)
raccoon.get_coordinates('wrist')
```

## Sinyal gücü {#signal_strength}

Sinyal gücü

<BlockImage module="roboids/Raccoon4" id="signal_strength" />

### Parametreler

(yok)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.signal_strength()
```

## Pil gerilimi {#battery}

Pil gerilimi

<BlockImage module="roboids/Raccoon4" id="battery" />

### Parametreler

(yok)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.battery()
```

## Düğmeye basılı mı? {#button}

Seçilen düğmenin basılı olup olmadığı ya da tıklama olayının gerçekleşip gerçekleşmediği

<BlockImage module="roboids/Raccoon4" id="button" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Düğmenin adı | teach(teach), play(play), power(power), delete(delete), herhangi biri(any) | - |
| event | Açılır liste seçeneği | Olay türü | basılı(pressed), tıklandı(click), uzun tıklandı(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.button('teach', 'pressed')
```

## Konveyör hızını ayarla {#conveyor_speed}

Konveyör bandının hızını ayarlar. Hız aralığı -100 ile 100 arasındadır.

<BlockImage module="roboids/Raccoon4" id="conveyor_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Konveyör hızı | -100 ile 100 arasında tam sayı | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_conveyor_speed(100)
```

## Konveyörü belirli mesafe hareket ettir {#conveyor_distance}

Konveyörü belirtilen mesafe kadar hareket ettirir.

<BlockImage module="roboids/Raccoon4" id="conveyor_distance" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Gidilecek mesafe | 0 veya daha büyük gerçel sayı | - |
| unit | Açılır liste seçeneği | Mesafe birimi | cm, mm, inç(inch) | cm |
| wait | Onay kutusu | Tamamlanması beklensin mi | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_move(50, 'cm', wait=True)
```

## Konveyör hızını değiştir {#change_conveyor_speed}

Konveyör bandının hızını değiştirir.

<BlockImage module="roboids/Raccoon4" id="change_conveyor_speed" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (blok) | Hız değişimi | -200 ile 200 arasında tam sayı | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_conveyor_speed(10)
```

## Konveyörü durdur {#stop_conveyor}

Konveyörü durdurur.

<BlockImage module="roboids/Raccoon4" id="stop_conveyor" />

### Parametreler

(yok)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.stop_conveyor()
```

## Konveyör çalışıyor mu? {#conveyor_running}

Konveyör bandının çalışıp çalışmadığı

<BlockImage module="roboids/Raccoon4" id="conveyor_running" />

### Parametreler

(yok)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_running()
```

## Konveyör düğmesine basılı mı? {#conveyor_button}

Konveyörün düğmesinin basılı olup olmadığı ya da tıklama olayının gerçekleşip gerçekleşmediği

<BlockImage module="roboids/Raccoon4" id="conveyor_button" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| event | Açılır liste seçeneği | Olay türü | basılı(pressed), tıklandı(click), uzun tıklandı(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_button('pressed')
```
