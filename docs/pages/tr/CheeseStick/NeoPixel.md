---
title: NeoPixel
---

# NeoPixel

## Örnek bildirimi {#instance}

NeoPixel bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## Başlat {#start}

NeoPixel'i kullanılabilir duruma getirir.

<BlockImage module="CheeseStick/NeoPixel" id="start" />

### Parametreler

(yok)

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.start()
```

## Renk modunu ayarla {#mode}

NeoPixel'in LED modunu ayarlar.

<BlockImage module="CheeseStick/NeoPixel" id="mode" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | Renk kanalı modu | GRBW, GRB | GRBW |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.mode('GRBW')
```

## Bir pikselin rengini ayarla {#set_one_color}

Seçilen numaradaki tek bir pikselin rengini ayarlar.  
Paletten seçilen renk **renk adına** (İngilizce metin) dönüştürülür ve koda bu biçimde girer. (Kodda R, G, B sayı değerleri değil, renk adı görünür.)

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| idx | Giriş (alan) | Piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |
| color | Renk | Renk paletinden seçim → renk adına (İngilizce) dönüşüm | Renk adları: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, 'red')
```

## Bir pikselin rengini Renk kategorisindeki bir blokla ayarla {#set_one_color_with_block}

Renk kategorisindeki bir bloğu giriş olarak alıp tek bir pikselin rengini ayarlar.  
Renk bloğunun çıktısı (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`, hepsi `[R, G, B]` döndürür) `*` (yıldız) ile açılarak `set_one_color` işlevinin r, g, b bağımsız değişkenlerine aktarılır.

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color_with_block" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| idx | Giriş (alan) | Piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |
| data | Giriş (renk) | Renk kategorisi bloğu ya da `[R, G, B]` dizisi | [0~255, 0~255, 0~255] | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, *Utils.color('red'))
```

## Bir pikselin rengini RGB kadar değiştir {#change_one_by_rgb}

Seçilen tek pikselin geçerli RGB değerine yazdığınız değişimleri ekleyerek yeni rengi ayarlar.

<BlockImage module="CheeseStick/NeoPixel" id="change_one_by_rgb" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| idx | Giriş (alan) | Piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |
| r | Giriş (alan) | Kırmızı değişimi | -255 ile 255 arasında tam sayı | 0 |
| g | Giriş (alan) | Yeşil değişimi | -255 ile 255 arasında tam sayı | 0 |
| b | Giriş (alan) | Mavi değişimi | -255 ile 255 arasında tam sayı | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_one_color(1, 10, 0, 0)
```

## Bir pikseli kapat {#turn_off_one}

n numaralı LED'in rengini söndürür.  
LED numaralarının aralığı 1 ile 144 arasındadır.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_one" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| idx | Giriş (alan) | Piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_one(1)
```

## Aralığın desenini ayarla {#set_range_pattern}

Seçilen aralıktaki bütün LED'lerin renk desenini ayarlar.  
LED numaralarının aralığı 1 ile 144 arasındadır.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_pattern" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| from_idx | Giriş (alan) | Başlangıç piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |
| to_idx | Giriş (alan) | Bitiş piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |
| pattern | Açılır liste seçeneği | Renk deseninin adı | `3_colors`, `6_colors`, `12_colors`, `red_green`, `red_blue`, `red_white`, `green_red`, `green_blue`, `green_white`, `blue_red`, `blue_green`, `blue_white`, `white_red`, `white_green`, `white_blue`, `black_red`, `black_green`, `black_blue`, `black_white`, `red_black`, `green_black`, `blue_black`, `white_black` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_pattern(1, 10, '3_colors')
```

## Aralığın rengini ayarla {#set_range_color}

Seçilen piksel aralığının tamamına aynı rengi ayarlar.  
Paletten seçilen renk **renk adına** (İngilizce metin) dönüştürülür ve koda bu biçimde girer.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| from_idx | Giriş (alan) | Başlangıç piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |
| to_idx | Giriş (alan) | Bitiş piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |
| color | Renk | Renk paletinden seçim → renk adına (İngilizce) dönüşüm | Renk adları: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, 'red')
```

## Aralığın rengini Renk kategorisindeki bir blokla ayarla {#set_range_color_with_block}

Renk kategorisindeki bir bloğu giriş olarak alıp piksel aralığının rengini ayarlar.  
Renk bloğunun çıktısı (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) `*` (yıldız) ile açılarak `set_range_color` işlevinin r, g, b bağımsız değişkenlerine aktarılır.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color_with_block" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| from_idx | Giriş (alan) | Başlangıç piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |
| to_idx | Giriş (alan) | Bitiş piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |
| data | Giriş (renk) | Renk kategorisi bloğu ya da `[R, G, B]` dizisi | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, *Utils.color('red'))
```

## Aralığın rengini RGB kadar değiştir {#change_range_by_rgb}

Seçilen piksel aralığının geçerli rengine RGB değişimlerini ekleyerek yeni rengi ayarlar.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_by_rgb" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| from_idx | Giriş (alan) | Başlangıç piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |
| to_idx | Giriş (alan) | Bitiş piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |
| r | Giriş (alan) | Kırmızı değişimi | -255 ile 255 arasında tam sayı | 0 |
| g | Giriş (alan) | Yeşil değişimi | -255 ile 255 arasında tam sayı | 0 |
| b | Giriş (alan) | Mavi değişimi | -255 ile 255 arasında tam sayı | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_color(1, 10, 10, 0, 0)
```

## Aralığın rengini kapat {#turn_off_range}

Seçilen aralıktaki bütün LED'lerin rengini söndürür.  
LED numaralarının aralığı 1 ile 144 arasındadır.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| from_idx | Giriş (alan) | Başlangıç piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |
| to_idx | Giriş (alan) | Bitiş piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range(1, 10)
```

## Aralıkta her n LED'de birinin rengini ayarla {#set_range_increment_color}

Seçilen piksel aralığında `increment` kadar atlayarak renk ayarlar.  
Paletten seçilen renk **renk adına** (İngilizce metin) dönüştürülür ve koda bu biçimde girer.  
(örneğin yalnızca 1, 3, 5, ... numaralı pikselleri yakmak)

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| from_idx | Giriş (alan) | Başlangıç piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |
| to_idx | Giriş (alan) | Bitiş piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |
| increment | Giriş (alan) | Atlama aralığı (piksel sayısı) | 1 veya daha büyük tam sayı | - |
| color | Renk | Renk paletinden seçim → renk adına (İngilizce) dönüşüm | Renk adları: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, 'red')
```

## Aralıkta her n LED'de birinin rengini Renk kategorisindeki bir blokla ayarla {#set_range_increment_color_with_block}

Renk kategorisindeki bir bloğu giriş olarak alıp seçilen piksel aralığında n kadar atlayarak renk ayarlar.  
Renk bloğunun çıktısı (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) `*` (yıldız) ile açılarak `set_range_increment_color` işlevinin r, g, b bağımsız değişkenlerine aktarılır.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color_with_block" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| from_idx | Giriş (alan) | Başlangıç piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |
| to_idx | Giriş (alan) | Bitiş piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |
| increment | Giriş (alan) | Atlama aralığı (piksel sayısı) | 1 veya daha büyük tam sayı | - |
| data | Giriş (renk) | Renk kategorisi bloğu ya da `[R, G, B]` dizisi | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, *Utils.color('red'))
```

## Aralıkta her n LED'de birini RGB kadar değiştir {#change_range_increment_by_rgb}

n kadar atlayarak seçilen piksellerin geçerli rengine RGB değişimlerini ekleyerek yeni rengi ayarlar.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_increment_by_rgb" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| from_idx | Giriş (alan) | Başlangıç piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |
| to_idx | Giriş (alan) | Bitiş piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |
| increment | Giriş (alan) | Atlama aralığı (piksel sayısı) | 1 veya daha büyük tam sayı | - |
| r | Giriş (alan) | Kırmızı değişimi | -255 ile 255 arasında tam sayı | 0 |
| g | Giriş (alan) | Yeşil değişimi | -255 ile 255 arasında tam sayı | 0 |
| b | Giriş (alan) | Mavi değişimi | -255 ile 255 arasında tam sayı | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_increment_color(1, 10, 2, 10, 0, 0)
```

## Aralıkta her n LED'de birini kapat {#turn_off_range_increment}

Seçilen aralık ve atlama aralığına giren bütün LED'lerin rengini söndürür.  
LED numaralarının aralığı 1 ile 144 arasındadır.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range_increment" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| from_idx | Giriş (alan) | Başlangıç piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |
| to_idx | Giriş (alan) | Bitiş piksel numarası (1'den başlar) | 1 veya daha büyük tam sayı | - |
| increment | Giriş (alan) | Atlama aralığı (piksel sayısı) | 1 veya daha büyük tam sayı | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range_increment(1, 10, 2)
```

## Kaydır / döndür {#shift}

LED'leri seçilen yönde ve piksel sayısı kadar kaydırır ya da döndürür.  
Seçilebilecek değerlerin aralığı 1 ile 143 arasındadır.

<BlockImage module="CheeseStick/NeoPixel" id="shift" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| unit | Açılır liste seçeneği | İşlemin türü | kaydır(shift), döndür(rotate) | - |
| direction | Açılır liste seçeneği | Yön | sola(left), sağa(right) | - |
| pixel | Giriş (alan) | Kaydırılacak piksel sayısı | 1 veya daha büyük tam sayı | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

# unit = 'shift'
neopixel.shift('left', 1)

# unit = 'rotate'
neopixel.rotate('left', 1)
```

## Parlaklığı ayarla {#set_brightness}

NeoPixel'in parlaklığını ayarlar.  
Seçilebilecek değerlerin aralığı 0 ile 100 arasındadır.

<BlockImage module="CheeseStick/NeoPixel" id="set_brightness" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| value | Giriş (alan) | Parlaklık | 0 ile 100 arasında tam sayı | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_brightness(50)
```

## Parlaklığı değiştir {#change_brightness}

NeoPixel'in parlaklığını değiştirir.  
Seçilebilecek değerlerin aralığı -100 ile 100 arasındadır.

<BlockImage module="CheeseStick/NeoPixel" id="change_brightness" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| value | Giriş (alan) | Parlaklık değişimi | -100 ile 100 arasında tam sayı | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_brightness(10)
```
