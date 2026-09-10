---
title: CSD-02 RGB LED
---

# CSD-02 RGB LED

## Örnek bildirimi {#instance}

CSD-02 RGB LED(CSD02) bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:

```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()
```

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| index | Açılır liste seçeneği | Örnek numarası (0'dan başlar) | 0 veya daha büyük tam sayı | 0 |


## RGB LED'i başlat {#start}

RGB LED'i kullanmaya başlar.  
Bu blok olmadan RGB LED etkinleşmez.

<BlockImage module="CheeseStick/CSD02" id="start" />

### Parametreler

(yok)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.start()
```

## Rengi ayarla {#set_color}

CSD02 modülünün LED rengini seçilen renge ayarlar.  
Paletten seçilen renk **renk adına** (İngilizce metin) dönüştürülür ve koda bu biçimde girer. (Kodda R, G, B sayı değerleri değil, renk adı görünür.)

<BlockImage module="CheeseStick/CSD02" id="set_color" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| color | Renk | Renk paletinden seçim → renk adına (İngilizce) dönüşüm | Renk adları: `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'violet'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color('orange')
```

## Rengi Renk kategorisindeki bir blokla ayarla {#set_color_with_block}

CSD02 modülünün LED rengini Renk kategorisindeki bir bloğa (örneğin `[R, G, B]` dizisine) göre ayarlar.

<BlockImage module="CheeseStick/CSD02" id="set_color_with_block" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| data | Giriş (renk) | Renk kategorisi bloğunun sonucu ya da `[R, G, B]` dizisi | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color(*Utils.color('yellow'))
```

## Rengi RGB kadar değiştir {#change_by_rgb}

LED'in geçerli rengine yazdığınız R, G ve B değişimlerini ekleyerek yeni rengi ayarlar.

<BlockImage module="CheeseStick/CSD02" id="change_by_rgb" />

### Parametreler

| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |
| --- | --- | --- | --- | --- |
| r | Giriş (alan) | Kırmızı değişimi | -255 ile 255 arasında tam sayı | 0 |
| g | Giriş (alan) | Yeşil değişimi | -255 ile 255 arasında tam sayı | 0 |
| b | Giriş (alan) | Mavi değişimi | -255 ile 255 arasında tam sayı | 0 |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.change_color(10, 0, 0)
```

## LED'i kapat {#turn_off}

RGB LED'in rengini söndürür.

<BlockImage module="CheeseStick/CSD02" id="turn_off" />

### Parametreler

(yok)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.turn_off()
```
