---
title: Kodlama kılavuzu
---

# Kodlama kılavuzu

Bu belge, Robomation'ın geliştirdiği 'robot hareketi akış hizmeti için çalıştırma motoru ve bütünleşik geliştirme ortamı' çalışmasının bir parçası olan robot kodlama eğitim platformu RobomationLAB'i anlatır.  

Ayrıntılı anlatım şu sırayla verilir:
- RobomationLAB'in başlıca özellikleri
- RobomationLAB robot programlama yöntemi
- RobomationLAB robot kodlamasının temel sözdizimi

<br>

## İçindekiler {#table-of-contents}
1. [RobomationLAB robot kodlama eğitim platformu](#platform)  
    1-1) [Robot kodlama programları](#coding-programs)  
    1-2) [Blok ↔ Python gerçek zamanlı çift yönlü dönüşüm](#block-python-conversion)  
    1-3) [Kodlama programlarının başlıca özellikleri](#features)  
    1-4) [Gerçek zamanlı robot denetimi](#control-method)  

2. [RobomationLAB robot programlama yöntemi](#programming-method)  
    2-1) [Sıralı çalışma ve paralel çalışma](#sequential-parallel)  
    2-2) [setup fonksiyonu](#setup)  
    2-3) [loop fonksiyonu](#loop)  

3. [RobomationLAB robot kodlamasının temel sözdizimi](#grammar-syntax)  
    3-1) [robomation paketini içe aktarma](#import-package)  
    3-2) [Robot örneği oluşturma](#create-instance)  
    3-3) [Robot denetim yöntemleri](#control-methods)  
    3-4) [Sensör ve durum okuma](#sensor)  
    3-5) [Olay algılama](#event)  
    3-6) [İşlemin bitmesini bekleme (wait)](#wait)  
    3-7) [Yardımcı fonksiyonlar (Utils)](#utils)   

<br><br>

## RobomationLAB robot kodlama eğitim platformu {#platform}
RobomationLAB, **yapay zekâ ve robotik yazılım eğitimi** için tasarlanmış bir platformdur;  
ilkokul ve ortaokul öğrencilerine yönelik robot kodlama eğitimi için Chrome web tarayıcısı üzerinde çalışan bütünleşik bir geliştirme ortamı sunar.  

RobomationLAB **blok kodlama** ve **betik kodlama** gibi farklı yöntemlerle çalışan robot kodlama eğitim programları sağlar.  
Yalnızca kodlamanın kuramını öğrenmekle kalmaz, Robomation ürünleriyle robotları gerçekten hareket ettirip denetlerken  
kodlamayı ve robotları aynı anda öğrenme olanağı sunar.

<br>

### Robot kodlama programları {#coding-programs}

#### Block Composer {#block-composer}
**Block Composer, blok kodlamayla Robomation robotlarını kolayca ve hızlıca denetlemenizi ve robot denetiminin temellerini öğrenmenizi sağlayan bir araçtır.**  

- Fiziksel bilişim için tasarlanmış bir geliştirme ortamı

- Blokları sürükleyip bırakma yöntemiyle yeni başlayanların bile kolayca kod yazabilmesi  
- Temel kavramlardan başlayarak sözdizimi hatası olmayan bir öğrenme ortamı  
- Python betik koduna kendiliğinden dönüşme  
- Her robot için önceden hazırlanmış blok kümeleri ve çeşitli deneme örnekleri  
- Kodu çalıştırarak sonucu anında görebilme  
- Blokları birleştirerek problem çözme becerisi ve yaratıcılık geliştirme  
- Yapay zekâ tabanlı betik kodu çözümlemesiyle en uygun geri bildirim  

<br>

#### Script Composer {#script-composer}
**Script Composer, Python kodlamasıyla Robomation robotlarını kolayca ve hızlıca denetlemenizi, Python sözdizimini ve robot kodlamasının temellerini öğrenmenizi sağlayan bir araçtır.**  

- Python düzenleyici

- Dile göre kod tamamlama ve kod ekleme özellikleri
- Her robot için çeşitli deneme örnek kodları
- Kodu çalıştırarak sonucu anında görebilme
- Yapay zekâ tabanlı betik kodu çözümlemesiyle en uygun geri bildirim

<br>

#### Kodlama programlarının başlıca özellikleri {#features}
RobomationLAB'in sunduğu robot kodlama programlarının başlıca özellikleri şunlardır.  
1.	Chrome web tarayıcısı üzerinde çalıştığı için işletim sistemi kısıtlaması yoktur
2.	Web Serial iletişimiyle, USB dongle üzerinden robot donanımını doğrudan denetler
3.	Aynı anda birden çok robotu denetleme desteği — robot türü ve sayısı sınırsızdır
4.	Dosya kaydedilirken sonuç JSON metin dosyasına dönüştürülerek saklanır

<br>

### Gerçek zamanlı robot denetimi {#control-method}
RobomationLAB'in robot kodlama programları robotu şu adımlarla gerçek zamanlı olarak denetler.  
1.	Blok kodlama ya da betik kodlamayla,
robotu denetlemek için Effector ve Command nesnelerinin değerlerini ayarlayan
ya da robotun Sensor değerlerini ve Event oluşumlarını kullanan kod yazılır.
2.	Kod çalıştırılır.
3.	Web Serial iletişimiyle robottan Sensor ve Event verilerini taşıyan paketler alınır
ve robot Device nesnesine işlenir.
4.	Kod gerçek zamanlı olarak yorumlanır;
Effector ve Command nesnelerine veri yazılır ya da Sensor ve Event nesnelerinin değerleri okunur.
5.	Robot Device nesnesinin verilerini taşıyan bir paket oluşturulup
Web Serial iletişimiyle robota gönderilir ve robotun gerçekten çalışıp çalışmadığı görülür.
6.	Kod çalıştığı sürece 3 ile 5 arasındaki adımlar yaklaşık 10 ile 20 ms'de bir yinelenir.  

<br>

### Blok ↔ Python gerçek zamanlı çift yönlü dönüşüm {#block-python-conversion}
RobomationLAB blok kodlama düzenleyicisiyle Python kodlama düzenleyicisini birlikte sunar ve iki düzenleyici gerçek zamanlı olarak çift yönlü eşitlenir.

- Blok kodlama düzenleyicisinde blok eklediğinizde, değiştirdiğinizde ya da sildiğinizde bu değişiklik anında Python koduna yansır.
- Tersine, Python kodlama düzenleyicisinde kodu değiştirdiğinizde bu değişiklik anında bloklara yansır.

Bloklarla Python kodu bire bir karşılık gelip çift yönlü dönüştüğü için,  
yapıyı bloklarla hızlıca kurup ayrıntıları Python'da inceltmek ya da bloklarla karşılaştırarak Python sözdizimini öğrenmek gibi  
blok kodlamayla betik kodlama arasında gidip gelen bütünleşik bir çalışma yapabilirsiniz.

> Ancak Python → blok dönüşümü yalnızca bloklarla anlatılabilen kod için gerçekleşir.  
> (Sözdizimi hatalıysa ya da bloklara dönüştürülemeyen bir kodsa geçiş yapılamayabilir.  
Ayrıntılar için [Kodlama kuralları](CodingRules) belgesine bakın.)

<br>

<br><br>

## RobomationLAB robot programlama yöntemi {#programming-method}

### Sıralı çalışma ve paralel çalışma {#sequential-parallel}
Robot programlamanın iki yolu vardır: sıralı çalışma ve paralel çalışma.  
Sıralı çalışmada bir işlem bittikten sonra bir sonraki işlem yapılır; basit davranışları kodlamak için uygundur.  
Örneğin robotu ileri gönderip sonra durdurup LED'i yakmak isterseniz, her işleme karşılık gelen kodu sırayla dizip zaman içinde çalıştırabilmeniz, yani sıralı çalışma gerekir.  

Paralel çalışmada birden çok işlem aynı anda yapılır; daha karmaşık ve gelişmiş davranışları programlamak için gereklidir.  
Örneğin iki ayaklı bir robotun yürümesini gerçekleştirmek isterseniz, robotun ayaklarını ve bacaklarını aynı anda hareket ettirmeniz gerektiğinden paralel çalışan kod yazabilmeniz gerekir.

RobomationLAB'in sunduğu robot kodlama programları,  
Arduino'nun donanım geliştirme ortamına benzeyen setup / loop yapısı üzerine kurulmuştur ve sıralı çalışmayla paralel çalışmayı birlikte destekler.

<BlockImage module="program/Editor" id="block-structure" />

Block Composer'a ilk girdiğinizde çalışma alanında iki boş fonksiyon bloğu görünür;  
'setup fonksiyonu' bloğu `setup` fonksiyonunu, 'loop fonksiyonu' bloğu `loop` fonksiyonunu gösterir.  

Bloklar gerçek zamanlı olarak Python koduna dönüşür  
ve kod şu temel yapıya sahiptir.  

```python
# Python kodunun temel yapısı
from robomation import *

# bir kez çalıştırılacak başlangıç kodunu buraya yazın:
def setup():
    pass

# tekrar tekrar çalıştırılacak kontrol kodunu buraya yazın:
def loop():
    pass
```

> Robotu denetlemek için kodun en üstüne `from robomation import *` satırını koyun ve kullanacağınız robotu örnek olarak bildirin. (örneğin `hamster_s = HamsterS(0)`)


<br>

### setup fonksiyonu {#setup}
setup fonksiyonu 'kodu çalıştır' dediğiniz anda yalnızca bir kez çalışır.  
setup fonksiyonunda genellikle değişkenlere başlangıç değeri veren ya da robotun modunu ve seçeneklerini ayarlayan kod yazılır.  
Örneğin tekerlekle hareket eden bir robotu denetlerken setup fonksiyonunda tekerleklerin başlangıç hızını ayarlayabilirsiniz.  

Fonksiyon içinde zaman gecikmesi gerekiyorsa `Utils.wait(...)` fonksiyonuyla, eşzamanlı çalışıyormuş gibi zaman sırasına göre ilerleyen kod yazabilirsiniz.  
`Utils.wait(...)` belirttiğiniz süre (saniye) kadar bekledikten sonra sonraki kodu çalıştırır; yani belirlenen süre ya da işlem bittikten sonra uyanıp kodu kaldığı yerden sürdürür.  
Bu özelliği kullandığınızda yalnızca basit sıralı çalışma değil, paralel çalışan loop fonksiyonuyla birleştirerek güçlü robot programlaması da yapabilirsiniz.

Aşağıda HamsterS robotunun 1 saniye ileri, ardından 1 saniye geri gittiği bir kod örneği vardır.  
Bu işlemi paralel çalışan loop fonksiyonu içinde gerçekleştirmek isterseniz, zaman hesabıyla denetim kodu karışır ve kod çok karmaşıklaşır.  
Bunun yerine setup fonksiyonu içinde `Utils.wait` gecikme fonksiyonunu kullanarak eşzamanlı çalışıyormuş gibi zaman sırasına göre ilerleyen kod yazabilirsiniz.  
( `Utils.wait` fonksiyonu daha sonra [Yardımcı fonksiyonlar (Utils)](#utils) bölümünde yeniden anlatılır. )

Örnek kod (Python)  
```python
from robomation import *

hamster_s = HamsterS(0)

# bir kez çalıştırılacak başlangıç kodunu buraya yazın:
def setup():
    # İki tekerleğin hızını 50 yaparak ileri git
    hamster_s.set_wheel_speed('both', 50)
    Utils.wait(1)   # 1 saniye bekle
    # İki tekerleğin hızını -50 yaparak geri git
    hamster_s.set_wheel_speed('both', -50)
    Utils.wait(1)   # 1 saniye bekle
    hamster_s.stop()

# tekrar tekrar çalıştırılacak kontrol kodunu buraya yazın:
def loop():
    pass
```
( Robot örneği ve yöntem sözdizimi daha sonra [RobomationLAB robot kodlamasının temel sözdizimi](#grammar-syntax) bölümünde yeniden anlatılır. )


<br>

### loop fonksiyonu {#loop}
loop fonksiyonu paralel çalışmayı destekler ve kod çalıştığı sürece yaklaşık 10 ms'de bir yinelenir.  
loop fonksiyonunda genellikle değişken değerlerini sürekli ayarlayan ya da robotun belirli olaylarını algılayıp işleyen kod yazılır.  

Aşağıda zamanla HamsterS robotunun tekerlek hızının ve LED renginin değiştiği bir kod örneği vardır.  
( setup / loop fonksiyonlarının dışında bildirilen bir değişkeni fonksiyon içinde değiştirirken `global` anahtar sözcüğüyle bildirin. )

```python
from robomation import *

hamster_s = HamsterS(0)
frame = 0

# bir kez çalıştırılacak başlangıç kodunu buraya yazın:
def setup():
    global frame
    frame = 0

# tekrar tekrar çalıştırılacak kontrol kodunu buraya yazın:
def loop():
    global frame
    frame += 1  # loop fonksiyonu her çağrıldığında frame değişkeninin değeri 1 artar

    # Değişen frame değeriyle iki tekerleğin hızını ve iki LED'in RGB değerlerini ayarla
    hamster_s.set_wheel_speed('both', frame % 100)
    hamster_s.set_led_color('left', frame % 256, 0, 0)
    hamster_s.set_led_color('right', 0, 0, frame % 256)
```
( Robot örneği ve yöntem sözdizimi daha sonra [RobomationLAB robot kodlamasının temel sözdizimi](#grammar-syntax) bölümünde yeniden anlatılır. )  

Aşağıda HamsterS robotunun gövdesine hafifçe vurulduğunda (Tap) LED'i kırmızı yakan bir kod örneği vardır.  

```python
from robomation import *

hamster_s = HamsterS(0)

# bir kez çalıştırılacak başlangıç kodunu buraya yazın:
def setup():
    pass

# tekrar tekrar çalıştırılacak kontrol kodunu buraya yazın:
def loop():
    # Tap işlemi gerçekleştiği anda olayı algıla
    if hamster_s.tap():               # Olay algılandığında True
        hamster_s.set_led_color('both', 'red')   # İki LED'i kırmızı yak
    else:
        hamster_s.turn_off('both')               # İki LED'i söndür
```
( Olay algılama (`tap()`) gibi sözdizimi konuları daha sonra [RobomationLAB robot kodlamasının temel sözdizimi](#grammar-syntax) bölümünde yeniden anlatılır. )  

<br><br>

## RobomationLAB robot kodlamasının temel sözdizimi {#grammar-syntax}
RobomationLAB'in robot kodlama programlarında kod yazarken uyulması gereken temel sözdizimi şudur.  
Robot denetimi `robomation` Python paketiyle yapılır;  
robot bir örnek olarak oluşturulduktan sonra o örneğin yöntemleri çağrılarak kod yazılır.

### robomation paketini içe aktarma {#import-package}
Robot denetimi için gereken sınıfları (robotları) ve yardımcıları (`Utils`) kullanmak için kodun en üstüne şu satırı ekleyin.

```python
from robomation import *
```

<br>

### Robot örneği oluşturma {#create-instance}
Kullanacağınız robotu örnek olarak bildirin.  
Sınıfın adı robotun türünü, parantez içindeki sayı ise örnek numarasını (0'dan başlar) gösterir.

```python
hamster_s = HamsterS(0)   # 1 adet Hamster S
```

Robotlara göre sınıf adları ve varsayılan değişken adları şunlardır.

| Robot | Sınıf adı | Varsayılan değişken adı |
| --- | --- | --- |
| Hamster S | HamsterS | hamster_s |
| Hamster | Hamster | hamster |
| Pio | Pio | pio |
| Turtle | Turtle | turtle |
| Beagle | Beagle | beagle |
| RaccoonBot | RaccoonBot | raccoon |
| CheeseStick | CheeseStick | cheesestick |

Aynı türden birden çok robot kullanacaksanız numarayı 0, 1, 2 … diye artırarak bildirin.

```python
hamster_s = HamsterS(0)
hamster_s_1 = HamsterS(1)
```

<br>

### Robot denetim yöntemleri {#control-methods}
Robotu denetlerken örneğin yöntemleri çağrılır.  
Yöntemler tekerlek hızı ayarlama, hareket, LED, ses gibi robot işlemlerini yapar.

```python
hamster_s.set_wheel_speed('both', 50)    # İki tekerleğin hızını ayarla
hamster_s.move_distance(10, 'cm')        # 10 cm ileri git
hamster_s.set_led_color('both', 'red')   # İki LED'i kırmızı yap
```

Her robotta kullanılabilen yöntemlerin listesi ve parametreleri için ilgili robot belgesine ('Hamster-S' gibi) bakın.

<br>

### Sensör ve durum okuma {#sensor}
Sensör değerlerini ya da robotun durumunu okurken de yöntem çağrılır ve yöntem o değeri döndürür.

```python
left = hamster_s.floor('left')        # Sol zemin sensörünün değerini oku
dist = hamster_s.proximity('right')   # Sağ yakınlık sensörünün değerini oku
```

<br>

### Olay algılama {#event}
Durum ya da çevre değişikliğinden doğan olaylar, ilgili olay yönteminin  
olay gerçekleştiği anda True döndürmesiyle algılanır.

```python
if hamster_s.tap():        # Vurma (Tap) olayı gerçekleştiği anda True
    hamster_s.set_led_color('both', 'red')
```

<br>

### İşlemin bitmesini bekleme (wait) {#wait}
Hareket, dönme, ses çalma gibi bitmesi zaman alan yöntemlerin `wait` parametresi vardır.
- `wait=True` (varsayılan): işlem bitene kadar bekleyip sonraki kodu çalıştırır.
- `wait=False`: işlemi başlatıp hemen sonraki kodla sürdürür.

```python
hamster_s.move_distance(10, 'cm', wait=True)    # Hareket bitene kadar bekler
hamster_s.move_distance(10, 'cm', wait=False)   # Hareketi başlatıp hemen sonraki kodu çalıştırır
```

<br>

### Yardımcı fonksiyonlar (Utils) {#utils}
Zaman gecikmesi, ses çalma, günlük yazdırma, renk gibi robot türünden bağımsız ortak işlevler `Utils` sınıfının yöntemleriyle kullanılır.

```python
Utils.wait(1)              # 1 saniye bekle
Utils.speak('Merhaba')     # Metni sese dönüştürerek (TTS) çal
Utils.log(0, '', '')       # Konsola günlük yazdır
```

<br>
