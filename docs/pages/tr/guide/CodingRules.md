---
title: Kodlama kuralları
---

# Kodlama kuralları

Bu belge, RobomationLAB'de robot kodlaması yaparken uyulması gereken kodlama kurallarını anlatır.

> **Not**: Betik kodlaması **yalnızca Python** ile çalışır ve bloklar `robomation` Python paketini kullanan Python koduna bire bir dönüşür.

> **Sıra**: Ortak temel kurallar (1~2) → blok kodu kuralları (3~5) → Python betik kodu kuralları (6~11) biçiminde düzenlenmiştir. Hem blok kodu hem de Python kodu üretiminde bunlara uymak önemlidir.

<br>

## 1. Blok ↔ Python bire bir dönüşüm kısıtı {#1}
Blok kodlama düzenleyicisiyle Python kodlama düzenleyicisi bire bir karşılık gelir ve gerçek zamanlı olarak çift yönlü dönüşür.

- Blok → Python: bloklar her zaman geçerli Python koduna dönüşür.
- Python → blok: yalnızca **bloklarla anlatılabilen kod** dönüştürülür.

Bu yüzden Python düzenleyicisinde aşağıdaki gibi bir kod yazarsanız Python'dan blok kodlama düzenleyicisine geçiş yapılamayabilir  
ve bu durumda geçişin neden başarısız olduğu da gösterilir.

1) Python sözdizimi hatası içeren kod
2) Bloklarla karşılığı olmayan (dönüşüm kurallarında tanımlanmamış) fonksiyon, yöntem ya da sözdizimi kullanan kod

Blok kodlama düzenleyicisine geçişi sorunsuz sürdürmek için  
kodu, bu belgede ve robot belgelerinde tanımlı sınıf, yöntem, fonksiyon ve desteklenen sözdizimi sınırları içinde yazmalısınız.

<br>

## 2. Kod sunma kuralı {#2}
Yalnızca **robomation Python API kılavuzunda** ve **blok ↔ Python dönüşüm kuralları belgesinde** belirtilen sınıflar, yöntemler ve fonksiyonlar kullanılabilir.  
Robotu denetlerken yukarıdaki belgelerde tanımlı olmayan yeni bir robot denetim yöntemi oluşturup kullanmak kesinlikle yasaktır.
Yalnızca kullanıcı yeni bir fonksiyon oluşturulmasını istediğinde bu mümkündür.

Yukarıdaki belgelerdeki dönüşüm örneklerinde geçmeyen geçici değişkenler (örneğin robot örneğini tutan değişken dışındaki ek değişkenler) ancak kullanıcı değişken oluşturulmasını istediğinde bildirilebilir.  
Ayrıca yöntemlere verilen değerler mutlaka değişmez değer olarak yazılmalıdır.  

```python
# Doğru örnek
hamster_s.set_wheel_speed('both', 100)

# Yanlış örnek - API kılavuzunda bulunmayan bir fonksiyonun kullanılması
hamster_s.set_wheel('both', 100)

# Yanlış örnek - keyfi değişken bildirimi
SPEED = 100
hamster_s.set_wheel_speed('both', SPEED)
```

<br>

## 3. Blok kodunun temel yapısı {#3}
Blok kodu sunulurken, programın giriş noktası olan en üst düzey fonksiyon blokları setup fonksiyonu ve loop fonksiyonu her zaman temel yapı olarak eklenir.  
Bu kuralla birlikte bundan sonraki bütün blok kodları aşağıdaki temel yapıya sahip olur.

| Blok yapısı (Block Composer) | Sunuş biçimi (metin) |
| --- | --- |
| setup fonksiyonu | setup fonksiyonu |
| (iç bloklar) | (iç bloklar) |
| loop fonksiyonu | loop fonksiyonu |
| (iç bloklar) | (iç bloklar) |

<br>

## 4. Blok kodunun biçimi (satır sonu ve girinti kuralları) {#4}
- En üst düzey bloklar (setup fonksiyonu, loop fonksiyonu vb.) sola hizalanır.
- Her komut bloğu mutlaka satır sonu karakteriyle ayrılmalı ve bir satırda yalnızca bir blok yazılmalıdır.
- İçinde çalışma alanı bulunan blokların (eğer, tekrarla, fonksiyon tanımı vb.) içindeki alt bloklara girinti uygulanarak katmanlı yapı açıkça gösterilir.

<br>

## 5. İç blok ve koşul yazım kuralı {#5}
Açılır listeden seçilen değer ya da girilen değer bloğun işlevsel bağımsız değişkenidir; bloğun metninde o değerin bulunduğu yere köşeli ayraç ([]) içinde doğrudan yazılır.  
Böylece bloğun kendi metniyle kullanıcının seçtiği/girdiği değer birleştirilerek görsel olarak yeniden oluşturulur.

Bütün blok kodları; bloğun kendi adını, açılır listeden seçilen değeri ve kullanıcının girdiği değeri köşeli ayraç ([]) içinde kapsayacak biçimde,  
Block Composer'daki gerçek blok görünümüne metinle olabildiğince yakın olarak sunulmalıdır.  

| Blok yapısı (Block Composer) | Sunuş biçimi (metin) |
| --- | --- |
| eğer [koşul] yap [komut] değilse [komut] | eğer [koşul] yap [komut] değilse [komut] |
| RaccoonBot: [hız] denetim moduna ayarla | RaccoonBot: [hız] denetim moduna ayarla |
| RaccoonBot: eklem [1] hızını [100] olarak ayarla | RaccoonBot: eklem [1] hızını [100] olarak ayarla |

<br>

## 6. Betik kodunun temel yapısı {#6}
Betik kodu (Python) sunulurken, programın giriş noktası olan setup() ve loop() fonksiyonları her zaman temel yapı olarak eklenir.  
Ayrıca robot denetimi için gereken sınıf ve yardımcıların kullanılabilmesi için kodun en üstüne `from robomation import *` konur ve kullanılacak robot örnek olarak bildirilir.  
Bu kuralla birlikte bundan sonraki bütün betik kodları (Python) aşağıdaki temel yapıya sahip olur.

```python
# Python kodunun temel yapısı
from robomation import *

# (kullanılacak bir robot varsa örnek olarak bildirin, örnek)
hamster_s = HamsterS(0)

# bir kez çalıştırılacak başlangıç kodunu buraya yazın:
def setup():
    pass

# tekrar tekrar çalıştırılacak kontrol kodunu buraya yazın:
def loop():
    pass
```

<br>

## 7. Betik kodunun biçimi (satır sonu ve girinti kuralları) {#7}
- En üst düzey fonksiyonlar (setup, loop vb.) sola hizalanır.
- Satır sonundan doğan girinti mutlaka **1 sekme (`\t`)** olmalıdır. (düzenleyicinin girinti ölçüsüyle aynı)

<br>

## 8. Robot denetim kuralı (örnek / yöntem) {#8}
Robotu denetlerken şu kurallara uyulmalıdır.  

1) Kodun en üstüne `from robomation import *` konur.
2) Kullanılacak robot örnek olarak bildirilir. Değişken adı olarak robotun varsayılan değişken adı, numara olarak 0'dan başlayan sayılar verilir.
3) Bildirilen örneğin yöntemleri çağrılarak robot denetlenir.

```python
from robomation import *

hamster_s = HamsterS(0)

def setup():
    hamster_s.set_wheel_speed('both', 50)

def loop():
    pass
```

> Aynı türden birden çok robot kullanılıyorsa numara 0, 1, 2 … diye artırılarak bildirilir. (örneğin `hamster_s = HamsterS(0)`, `hamster_s_1 = HamsterS(1)`)

Robotun tekerlek hızını ayarlama, hareket ettirme gibi işlemler, yöntemin içinde gereken hazırlığı (örneğin önceki hareket komutunun temizlenmesi) kendiliğinden yapar; ayrıca bir hazırlık kodu yazmanız gerekmez.

<br>

## 9. Yardımcı fonksiyon çağırma kuralı {#9}
Zaman gecikmesi, ses çalma, günlük yazdırma, renk gibi ortak yardımcı işlevler `Utils` sınıfının yöntemleriyle çağrılır.  

```python
Utils.wait(1)  # (saniye)
Utils.play_sound('', 100, False)
Utils.log(0, '', '')
```

Yardımcı fonksiyonların ayrıntılı listesi için aşağıdaki belgelere bakın.
- [Renk](../common/Color)
- [Ses](../common/Audio)
- [Kontrol](../common/Control)

<br>

## 10. Robota özgü yöntemleri öncelikli kullanma kuralı {#10}
Robot donanımını (tekerlek hızı, LED, ses vb.) denetlerken,  
ortak yardımcı fonksiyonlar yerine robot ('Hamster-S' gibi) örneğinin kendi yöntemleri öncelikli kullanılmalıdır.

Örneğin robotla ses çıkarmanız gerekiyorsa,  
yardımcı fonksiyon olan `Utils.play_sound()` yerine 'Hamster-S' örneğinin `sound_clip()` yöntemi öncelikli kullanılmalıdır.

```python
# Hamster S robotuyla ses çıkarır. (önerilen)
hamster_s.sound_clip('beep')

# Bilgisayar / tablet / mobil aygıtla ses çıkarır. (önerilmez)
Utils.play_sound('beep', 100, False)
```

<br>

## 11. Import kuralı {#11}
Python kodu yazarken yalnızca kodun çalışması için gereken modüller import edilir.
- Robot denetimi için kodun en üstüne `from robomation import *` temel olarak konur.
- `math.` kullanan koda `import math`, `random.` kullanan koda `import random` kendiliğinden eklenir.
- Bunların dışında gereksiz modüller import edilmez.
