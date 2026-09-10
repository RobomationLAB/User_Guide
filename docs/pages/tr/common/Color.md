---
title: Renk
---

# Renk

Renkler pek çok grafik programında kullanılır. 


## Temel renk {#color_picker}

Renk elde etmenin en kolay yolu **renk paletini** kullanmaktır.  
Beyaz yuvarlak kareye tıkladığınızda renk paleti açılır ve istediğiniz rengi seçebilirsiniz.

<BlockImage module="common/color" id="color_picker" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| color | Renk | Hazır renk | siyah(black), kırmızı(red), sarı(yellow), yeşil(green),<br>camgöbeği(cyan), mavi(blue), macenta(magenta), beyaz(white) | - |

### Python
```python
# örnek: hazır kırmızı renk seçildiğinde
Utils.color('red')
```

## Kaydırıcı rengi {#color_slider}

**kaydırıcı rengi** bloğu, çember ve kaydırıcı yardımıyla rengi kendiniz oluşturmanızı sağlar.  
Beyaz yuvarlak kareye tıkladığınızda **kırmızı (R), yeşil (G) ve mavi (B)** değerlerini ayarladığınız renk çemberi ile **parlaklığı** ayarlayan kaydırıcı açılır.

<BlockImage module="common/color" id="color_slider" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| color | Renk | Renk çemberi + parlaklık kaydırıcısı | r: 0~255, g: 0~255, b: 0~255 | - |

### Python
```python
# renk çemberinde seçilen renk → [R, G, B]
Utils.color_slider(255, 128, 0)
```

## RGB rengi {#color_rgb}

**RGB rengi** bloğu, ayrı ayrı verilen kırmızı, yeşil ve mavi değerlerinden bir RGB dizisi oluşturur.

<BlockImage module="common/color" id="color_rgb" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| r | Giriş (blok) | Kırmızı değeri | 0 ile 255 arasında tam sayı | - |
| g | Giriş (blok) | Yeşil değeri | 0 ile 255 arasında tam sayı | - |
| b | Giriş (blok) | Mavi değeri | 0 ile 255 arasında tam sayı | - |

### Python
```python
Utils.color_rgb(red, green, blue)
```

## Rastgele renk {#color_random}

**rastgele renk** bloğu her çağrıldığında rastgele bir RGB rengi oluşturur.

<BlockImage module="common/color" id="color_random" />

### Parametreler

(yok)

### Python
```python
Utils.random_color()
```
